(() => {
  ['#ac-localeswitcher','#onetrust-consent-sdk','#onetrust-banner-sdk','[id*=cookie-banner]','.cookie-banner','#gdpr-banner'].forEach(q=>document.querySelectorAll(q).forEach(e=>e.remove()));
  const vw = innerWidth, vh = innerHeight;
  const px = v => Math.round(parseFloat(v) * 10) / 10;
  const r1 = v => Math.round(v * 10) / 10;
  const cs = el => getComputedStyle(el);
  const vis = el => {
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return false;
    const s = cs(el);
    if (s.visibility === 'hidden' || s.display === 'none') return false;
    if (el.checkVisibility && !el.checkVisibility({ visibilityProperty: true })) return false;
    // visually-hidden pattern
    if (s.clip === 'rect(1px, 1px, 1px, 1px)' || s.clipPath === 'inset(50%)' || (r.width <= 1 && r.height <= 1)) return false;
    if (r.right < 0 || r.left > vw) return false;
    return true;
  };
  const opaque = el => { let e = el; while (e && e !== document.body) { if (parseFloat(cs(e).opacity) === 0) return false; e = e.parentElement; } return true; };
  const inNav = el => !!el.closest('header, nav, #globalnav, #ac-globalnav, [role=banner], .globalnav, #ac-localnav, .ac-ln-wrapper');
  const docTop = el => el.getBoundingClientRect().top + scrollY;
  const ownText = el => Array.from(el.childNodes).filter(n => n.nodeType === 3).map(n => n.textContent).join('').replace(/\s+/g, ' ').trim();
  const textInfo = el => {
    const s = cs(el), r = el.getBoundingClientRect();
    return { tag: el.tagName.toLowerCase(), cls: (el.className && el.className.baseVal === undefined ? el.className : '').toString().slice(0, 80),
      text: (el.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 60), fs: px(s.fontSize), lh: s.lineHeight === 'normal' ? 'normal' : px(s.lineHeight),
      fw: s.fontWeight, ls: s.letterSpacing, ff: s.fontFamily.split(',')[0].replace(/"/g, ''), top: r1(r.top + scrollY), left: r1(r.left), w: r1(r.width), h: r1(r.height),
      wPct: r1(r.width / vw * 100), align: s.textAlign, color: s.color, opacity: opaque(el) ? 1 : 0 };
  };
  const all = Array.from(document.querySelectorAll('body *')).filter(e => !['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG', 'PATH', 'TEMPLATE'].includes(e.tagName.toUpperCase()));
  // text-bearing elements
  const textEls = all.filter(e => ownText(e).length > 0 && vis(e));
  const fv = textEls.filter(e => { const t = docTop(e); return t < vh && t + e.getBoundingClientRect().height > 0; });
  // nav
  let nav = null;
  for (const sel of ['#globalnav', '#ac-globalnav', 'header', 'nav', '[role=banner]']) {
    const cands = Array.from(document.querySelectorAll(sel)).filter(e => vis(e) && docTop(e) < 60 && e.getBoundingClientRect().width > vw * 0.8);
    if (cands.length) { nav = cands[0]; break; }
  }
  const navH = nav ? r1(nav.getBoundingClientRect().height) : null;
  // headline: largest font-size text in first viewport outside nav, prefer h1
  const fvContent = fv.filter(e => !inNav(e));
  const sorted = [...fvContent].sort((a, b) => parseFloat(cs(b).fontSize) - parseFloat(cs(a).fontSize));
  const head = sorted[0] || null;
  const h1s = Array.from(document.querySelectorAll('h1')).filter(vis).map(textInfo);
  // all distinct sizes first viewport
  const fvSizes = [...new Set(fv.map(e => px(cs(e).fontSize)))].sort((a, b) => b - a);
  const fvSizesContent = [...new Set(fvContent.map(e => px(cs(e).fontSize)))].sort((a, b) => b - a);
  // body paragraphs
  const ps = all.filter(e => e.tagName === 'P' && vis(e) && (e.innerText || '').trim().length > 60 && !inNav(e) && !e.closest('footer'));
  const tally = {};
  ps.forEach(p => { const s = cs(p); const k = px(s.fontSize) + '/' + (s.lineHeight === 'normal' ? 'normal' : px(s.lineHeight)) + '/' + s.fontWeight; tally[k] = (tally[k] || 0) + 1; });
  const bodyModes = Object.entries(tally).sort((a, b) => b[1] - a[1]).slice(0, 4);
  // CTAs in first ~1.2 viewports, outside nav
  const ctaEls = all.filter(e => (e.tagName === 'A' || e.tagName === 'BUTTON' || e.getAttribute('role') === 'button') && vis(e) && !inNav(e) && docTop(e) < vh * 1.3 && (e.innerText || '').trim().length > 0 && (e.innerText || '').trim().length < 40);
  const ctas = ctaEls.map(e => { const s = cs(e), r = e.getBoundingClientRect();
    return { text: e.innerText.replace(/\s+/g, ' ').trim(), top: r1(r.top + scrollY), left: r1(r.left), h: r1(r.height), w: r1(r.width), wPct: r1(r.width / vw * 100), fs: px(s.fontSize), fw: s.fontWeight,
      pad: [s.paddingTop, s.paddingRight, s.paddingBottom, s.paddingLeft].map(px).join(' '), radius: s.borderRadius, bg: s.backgroundColor, color: s.color, border: s.borderTopWidth + ' ' + s.borderTopColor, display: s.display, cls: (typeof e.className === 'string' ? e.className : '').slice(0, 60) }; }).slice(0, 14);
  // side margin: mode of left for block headings/paragraphs below fold region
  const lefts = {};
  all.filter(e => /^(H2|H3|P)$/.test(e.tagName) && vis(e) && !inNav(e) && !e.closest('footer')).forEach(e => { const l = Math.round(e.getBoundingClientRect().left); if (l >= 0 && l < vw * 0.3) lefts[l] = (lefts[l] || 0) + 1; });
  const leftModes = Object.entries(lefts).sort((a, b) => b[1] - a[1]).slice(0, 5);
  // sections
  let secs = Array.from(document.querySelectorAll('main section, section')).filter(e => vis(e) && !inNav(e) && !e.closest('footer'));
  // top-level only
  secs = secs.filter(e => !secs.some(o => o !== e && o.contains(e)));
  const secInfo = secs.slice(0, 16).map(e => { const s = cs(e), r = e.getBoundingClientRect(); return { cls: (typeof e.className === 'string' ? e.className : '').slice(0, 50), top: r1(r.top + scrollY), h: r1(r.height), pt: px(s.paddingTop), pb: px(s.paddingBottom), mt: px(s.marginTop), mb: px(s.marginBottom), bg: s.backgroundColor }; });
  // gaps between consecutive top-level sections' content (last visible text bottom of A to first visible text top of B)
  // hero container: nearest ancestor of headline that is section or whose height >= 0.4 vh
  const heads = Array.from(document.querySelectorAll('h1,h2')).filter(e => vis(e) && !inNav(e) && docTop(e) < vh).sort((a, b) => docTop(a) - docTop(b));
  const topHead = heads[0] || head;
  let topHeadInfo = null;
  if (topHead) { const i = textInfo(topHead); const im = topHead.querySelector('img,svg,picture'); if (im) { const r = im.getBoundingClientRect(); i.logoImg = { w: r1(r.width), h: r1(r.height) }; } topHeadInfo = i; }
  let hero = null;
  if (topHead) { let e = topHead; while (e && e !== document.body) { const r = e.getBoundingClientRect(); if ((e.tagName === 'SECTION' || r.height >= vh * 0.45) && r.width >= vw * 0.9) { hero = e; break; } e = e.parentElement; } }
  let heroInfo = null;
  if (hero) {
    const r = hero.getBoundingClientRect(); const top = r.top + scrollY;
    const clip = rr => { const t = Math.max(rr.top + scrollY, 0), b = Math.min(rr.bottom + scrollY, vh), l = Math.max(rr.left, 0), rt = Math.min(rr.right, vw); return (b > t && rt > l) ? (b - t) * (rt - l) : 0; };
    const media = Array.from(hero.querySelectorAll('img, picture, video, canvas, svg, [style*="background-image"]')).concat([hero, ...hero.querySelectorAll('div, figure, span')].filter(e => { const bi = cs(e).backgroundImage; return bi && bi !== 'none' && !bi.startsWith('linear') && !bi.startsWith('radial'); }))
      .filter(e => vis(e) && e.getBoundingClientRect().width > 40 && e.getBoundingClientRect().height > 40);
    // union approx: take the largest single media rect + others not contained
    const mediaRects = media.map(e => e.getBoundingClientRect()).sort((a, b) => b.width * b.height - a.width * a.height);
    const kept = []; mediaRects.forEach(m => { if (!kept.some(k => m.left >= k.left - 1 && m.right <= k.right + 1 && m.top >= k.top - 1 && m.bottom <= k.bottom + 1)) kept.push(m); });
    const mediaArea = kept.reduce((a, m) => a + clip(m), 0);
    const hText = Array.from(hero.querySelectorAll('*')).filter(e => ownText(e).length && vis(e));
    let tb = null; hText.forEach(e => { const q = e.getBoundingClientRect(); if (q.top + scrollY > vh) return; tb = tb ? { top: Math.min(tb.top, q.top), bottom: Math.max(tb.bottom, q.bottom), left: Math.min(tb.left, q.left), right: Math.max(tb.right, q.right) } : { top: q.top, bottom: q.bottom, left: q.left, right: q.right }; });
    heroInfo = { tag: hero.tagName.toLowerCase(), cls: (typeof hero.className === 'string' ? hero.className : '').slice(0, 60), top: r1(top), h: r1(r.height), hPctVh: r1(r.height / vh * 100), bottomPctVh: r1((top + r.height) / vh * 100),
      pt: px(cs(hero).paddingTop), pb: px(cs(hero).paddingBottom), mediaPctOfFirstViewport: r1(mediaArea / (vw * vh) * 100), mediaCount: kept.length,
      textBlock: tb ? { top: r1(tb.top + scrollY), h: r1(tb.bottom - tb.top), w: r1(tb.right - tb.left), hPctVh: r1((Math.min(tb.bottom, vh) - tb.top) / vh * 100), areaPct: r1((Math.min(tb.bottom, vh) - tb.top) * (tb.right - tb.left) / (vw * vh) * 100) } : null };
  }
  // cards
  const cardEls = all.filter(e => /(^|[\s_-])(card|tile)s?([\s_-]|$)/i.test(typeof e.className === 'string' ? e.className : '') && vis(e) && e.getBoundingClientRect().width > 120 && e.getBoundingClientRect().height > 120 && !inNav(e));
  const cards = cardEls.filter(e => !cardEls.some(o => o !== e && o.contains(e))).slice(0, 6).map(e => { const s = cs(e), r = e.getBoundingClientRect(); const t = e.querySelector('h2,h3,h4,h5,[class*=title],[class*=headline]'); const ts = t ? cs(t) : null;
    return { cls: e.className.slice(0, 60), w: r1(r.width), h: r1(r.height), pad: [s.paddingTop, s.paddingRight, s.paddingBottom, s.paddingLeft].map(px).join(' '), radius: s.borderRadius, titleFs: ts ? px(ts.fontSize) : null, titleFw: ts ? ts.fontWeight : null, title: t ? t.innerText.trim().slice(0, 40) : null,
      innerTextInset: t ? r1(t.getBoundingClientRect().left - r.left) : null, innerTopInset: t ? r1(t.getBoundingClientRect().top - r.top) : null }; });
  const tok = {};
  all.forEach(e => { const c = typeof e.className === 'string' ? e.className : ''; const m = c.match(/typography-[\w-]+/g); if (!m || !vis(e)) return; const st = cs(e); m.forEach(k => { if (!tok[k]) tok[k] = { fs: px(st.fontSize), lh: st.lineHeight === 'normal' ? 'normal' : px(st.lineHeight), fw: st.fontWeight, ls: st.letterSpacing, n: 0, ex: (e.innerText || '').trim().slice(0, 30) }; tok[k].n++; }); });
  let heroMedia = [];
  if (hero) heroMedia = Array.from(hero.querySelectorAll('img, picture, svg, video, canvas, [class*=logo], [class*=headline]')).filter(e => vis(e)).map(e => { const r = e.getBoundingClientRect(); return [e.tagName.toLowerCase(), (typeof e.className === 'string' ? e.className : '').slice(0, 40), r1(r.width), r1(r.height), r1(r.top + scrollY)]; }).slice(0, 12);
  return JSON.stringify({ tokens: tok, heroMedia, url: location.href, vw, vh, docH: document.documentElement.scrollHeight, navH, navTag: nav ? nav.tagName + '#' + nav.id : null,
    headline: head ? textInfo(head) : null, topHead: topHeadInfo, h1s: h1s.slice(0, 3),
    fvText: fvContent.slice(0, 30).map(e => { const i = textInfo(e); return [i.fs, i.fw, i.lh, i.tag, i.text.slice(0, 40), i.top, i.opacity]; }),
    fvSizes, fvSizesContent, bodyModes, ctas, leftModes, sections: secInfo, hero: heroInfo, cards });
})()
