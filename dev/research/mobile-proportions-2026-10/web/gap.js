(() => {
  const vw = innerWidth;
  const inNav = el => !!el.closest('nav, #globalnav, [role=banner], footer, #ac-globalfooter, .ac-gf-footer');
  const vis = el => { const r = el.getBoundingClientRect(); if (r.width < 2 || r.height < 2) return false; const s = getComputedStyle(el); if (s.visibility === 'hidden' || s.display === 'none') return false; if (r.right < 0 || r.left > vw) return false; return true; };
  const own = el => Array.from(el.childNodes).some(n => n.nodeType === 3 && n.textContent.trim());
  const els = Array.from(document.querySelectorAll('body *')).filter(e => !inNav(e) && (own(e) || /^(IMG|VIDEO|CANVAS|PICTURE)$/.test(e.tagName)) && vis(e));
  const boxes = els.map(e => { const r = e.getBoundingClientRect(); return { t: r.top + scrollY, b: r.bottom + scrollY, e }; });
  const hs = Array.from(document.querySelectorAll('h2')).filter(e => vis(e) && !inNav(e) && parseFloat(getComputedStyle(e).fontSize) >= 24);
  const gaps = [];
  hs.forEach(h => { const ht = h.getBoundingClientRect().top + scrollY; let pb = -1; boxes.forEach(x => { if (x.b <= ht + 0.5 && !h.contains(x.e) && x.b > pb) pb = x.b; }); if (pb >= 0) gaps.push([Math.round(ht - pb), Math.round(parseFloat(getComputedStyle(h).fontSize)), (h.innerText||'').trim().slice(0, 30)]); });
  const g = gaps.map(x => x[0]).filter(x => x >= 40).sort((a, b) => a - b);
  const med = g.length ? g[Math.floor(g.length / 2)] : null;
  return JSON.stringify({ url: location.href, n: gaps.length, median: med, min: g[0], max: g[g.length - 1], gaps: gaps.slice(0, 14) });
})()
