#!/usr/bin/env python3
"""Trigger-reliability test for the design-studio plugin.

Runs each prompt in prompts.tsv (id<TAB>prompt) in an isolated headless Claude Code session with the plugin loaded,
and checks whether a design-studio skill is invoked. Ids starting with "d" are design prompts (should trigger);
ids starting with "c" are controls (should not). Costs roughly $0.30 per prompt on the default model.

Usage: python3 dev/trigger-test/run.py [--jobs 6] [--max-turns 2] [--model MODEL]
"""
import argparse, concurrent.futures as cf, json, pathlib, subprocess, tempfile

HERE = pathlib.Path(__file__).resolve().parent
PLUGIN = HERE.parent.parent / "plugins" / "design-studio"

def run(row, out, args):
    pid, prompt = row
    cmd = ["claude", "-p", "--plugin-dir", str(PLUGIN), "--allowedTools", "Skill,Read,Glob,Grep",
           "--max-turns", str(args.max_turns), "--output-format", "stream-json", "--verbose", prompt]
    if args.model:
        cmd[1:1] = ["--model", args.model]
    with open(out / f"{pid}.jsonl", "w") as f:
        subprocess.run(cmd, stdin=subprocess.DEVNULL, stdout=f, stderr=subprocess.DEVNULL, cwd=out)
    skills, cost = [], 0.0
    for line in open(out / f"{pid}.jsonl"):
        try:
            e = json.loads(line)
        except ValueError:
            continue
        if e.get("type") == "assistant":
            skills += [c["input"].get("skill", "") for c in e["message"].get("content", [])
                       if c.get("type") == "tool_use" and c["name"] == "Skill"]
        if e.get("type") == "result":
            cost = e.get("total_cost_usd") or 0.0
    hit = any(s.startswith("design-studio:") for s in skills)
    ok = hit if pid.startswith("d") else not hit
    return pid, ok, skills, cost

def main():
    p = argparse.ArgumentParser()
    p.add_argument("--jobs", type=int, default=6)
    p.add_argument("--max-turns", type=int, default=2)
    p.add_argument("--model")
    args = p.parse_args()
    rows = [l.rstrip("\n").split("\t", 1) for l in open(HERE / "prompts.tsv") if l.strip()]
    out = pathlib.Path(tempfile.mkdtemp(prefix="ds-trigger-"))
    with cf.ThreadPoolExecutor(args.jobs) as ex:
        results = sorted(ex.map(lambda r: run(r, out, args), rows))
    for pid, ok, skills, cost in results:
        print(f"{pid} | {'PASS' if ok else 'FAIL'} | {','.join(skills) or '-'} | ${cost:.3f}")
    d = [r for r in results if r[0].startswith("d")]
    c = [r for r in results if r[0].startswith("c")]
    print(f"design triggered {sum(r[1] for r in d)}/{len(d)} | controls clean {sum(r[1] for r in c)}/{len(c)} | "
          f"cost ${sum(r[3] for r in results):.2f} | transcripts in {out}")

if __name__ == "__main__":
    main()
