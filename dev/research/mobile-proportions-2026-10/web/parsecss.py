import re,sys,json,collections
def strip_comments(s): return re.sub(r'/\*.*?\*/','',s,flags=re.S)
def parse(s, media=''):
    i=0; n=len(s); out=[]
    while i<n:
        j=s.find('{',i)
        if j<0: break
        pre=s[i:j].strip()
        # find matching brace
        d=1;k=j+1
        while k<n and d:
            if s[k]=='{': d+=1
            elif s[k]=='}': d-=1
            k+=1
        body=s[j+1:k-1]
        if pre.startswith('@media'):
            out+=parse(body, (media+' & ' if media else '')+pre[6:].strip())
        elif pre.startswith('@supports') or pre.startswith('@layer') or pre.startswith('@container'):
            out+=parse(body, media)
        elif pre.startswith('@'):
            pass
        else:
            pre=pre.split(';')[-1].strip()  # in case of stray
            out.append((media,pre,body))
        i=k
    return out
res=collections.defaultdict(dict)
for f in sys.argv[1:]:
    s=strip_comments(open(f,encoding='utf-8',errors='ignore').read())
    for media,sel,body in parse(s):
        sels=[x.strip() for x in sel.split(',')]
        props={}
        for decl in body.split(';'):
            if ':' in decl:
                k,v=decl.split(':',1); k=k.strip()
                if k in ('font-size','line-height','font-weight','letter-spacing'): props[k]=v.strip()
        if not props: continue
        for x in sels:
            m=re.fullmatch(r'(?:html(?:\[[^\]]+\]|:lang\([^)]+\))?\s+)?\.(typography-[\w-]+)',x)
            if m and not x.startswith('html'):
                tok=m.group(1)
                mq=media or 'base'
                res[tok].setdefault(mq,{}).update(props)
json.dump(res,open('apple_tokens_raw.json','w'),indent=1)
# summarize
def short(mq):
    mq=mq.replace(' ','')
    if mq=='base': return 'base(>1068)'
    m=re.search(r'max-width:(\d+)px',mq); mi=re.search(r'min-width:(\d+)px',mq)
    tag=''
    if 'min-resolution' in mq or 'device-pixel-ratio' in mq: return None
    if m and not mi: return '<=%s'%m.group(1)
    if mi and not m: return '>=%s'%mi.group(1)
    if m and mi: return '%s-%s'%(mi.group(1),m.group(1))
    return mq[:40]
rows=[]
for tok,mqs in sorted(res.items()):
    d={}
    for mq,p in mqs.items():
        k=short(mq)
        if k is None: continue
        d.setdefault(k,{}).update(p)
    rows.append((tok,d))
for tok,d in rows:
    print(tok, json.dumps({k:'/'.join(v.get(x,'') for x in ['font-size','line-height','font-weight','letter-spacing']) for k,v in d.items()}))
