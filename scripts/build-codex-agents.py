#!/usr/bin/env python3
"""Generate Codex custom-agent TOML files from the Claude Code agent definitions.

Source of truth: plugins/design-studio/agents/*.md (Claude Code subagent format).
Output: plugins/design-studio/codex/agents/<name_with_underscores>.toml (Codex custom-agent format:
name, description, developer_instructions). Model fields are left unset so users choose their own default
(e.g. `agents.default_subagent_model` in ~/.codex/config.toml).

Run after editing any agent: python3 scripts/build-codex-agents.py
"""
import pathlib, re, sys

try:
    import tomllib  # Python 3.11+
except ModuleNotFoundError:
    tomllib = None

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "plugins" / "design-studio" / "agents"
OUT = ROOT / "plugins" / "design-studio" / "codex" / "agents"

def parse(md: str):
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", md, re.S)
    if not m:
        raise ValueError("missing frontmatter")
    fm, body = m.groups()
    name = re.search(r"^name:\s*(.+)$", fm, re.M).group(1).strip()
    desc = re.search(r"^description:\s*(.+)$", fm, re.M).group(1).strip()
    return name, desc, body.strip()

def toml_str(s: str) -> str:
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'

def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for old in OUT.glob("*.toml"):
        old.unlink()
    for path in sorted(SRC.glob("*.md")):
        name, desc, body = parse(path.read_text())
        if "'''" in body:
            sys.exit(f"{path.name}: body contains ''' which breaks the TOML literal string")
        codex_name = name.replace("-", "_")
        header = ("You are a design-studio specialist running as a Codex custom agent. The design-studio skills are "
                  "provided by the design-studio plugin (or ~/.agents/skills). Invoke your core skills before you start. "
                  "Do not spawn other agents.\n\n")
        text = (f"# Generated from plugins/design-studio/agents/{path.name} by scripts/build-codex-agents.py. "
                f"Do not edit by hand.\n"
                f"name = {toml_str(codex_name)}\n"
                f"description = {toml_str(desc)}\n"
                f"developer_instructions = '''\n{header}{body}\n'''\n")
        if tomllib:
            tomllib.loads(text)  # validate
        (OUT / f"{codex_name}.toml").write_text(text)
        print(f"wrote codex/agents/{codex_name}.toml")

if __name__ == "__main__":
    main()
