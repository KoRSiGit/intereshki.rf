import{c as $}from"./_commonjsHelpers.28e086c5.js";function k(c,g){for(var p=0;p<g.length;p++){const r=g[p];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in c)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(c,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var f={},T={get exports(){return f},set exports(c){f=c}};(function(c,g){(function(p,r){c.exports=r()})($,function(){const p=()=>{let t,n={messageStyle:"none",tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],skipTags:["script","noscript","style","textarea","pre"]},skipStartupTypeset:!0};return{id:"mathjax2",init:function(h){t=h;let i=t.getConfig().mathjax2||t.getConfig().math||{},e={...n,...i},s=(e.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js")+"?config="+(e.config||"TeX-AMS_HTML-full");e.tex2jax={...n.tex2jax,...i.tex2jax},e.mathjax=e.config=null,function(a,l){let o=document.querySelector("head"),u=document.createElement("script");u.type="text/javascript",u.src=a;let d=()=>{typeof l=="function"&&(l.call(),l=null)};u.onload=d,u.onreadystatechange=()=>{this.readyState==="loaded"&&d()},o.appendChild(u)}(s,function(){MathJax.Hub.Config(e),MathJax.Hub.Queue(["Typeset",MathJax.Hub,t.getRevealElement()]),MathJax.Hub.Queue(t.layout),t.on("slidechanged",function(a){MathJax.Hub.Queue(["Typeset",MathJax.Hub,a.currentSlide])})})}}};return Plugin=Object.assign(p(),{KaTeX:()=>{let t,n={version:"latest",delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],ignoredTags:["script","noscript","style","textarea","pre"]};const h=i=>new Promise((e,s)=>{const a=document.createElement("script");a.type="text/javascript",a.onload=e,a.onerror=s,a.src=i,document.head.append(a)});return{id:"katex",init:function(i){t=i;let e=t.getConfig().katex||{},s={...n,...e};const{local:a,version:l,extensions:o,...u}=s;let d=s.local||"https://cdn.jsdelivr.net/npm/katex",x=s.local?"":"@"+s.version,b=d+x+"/dist/katex.min.css",v=d+x+"/dist/contrib/mhchem.min.js",J=d+x+"/dist/contrib/auto-render.min.js",y=[d+x+"/dist/katex.min.js"];s.extensions&&s.extensions.includes("mhchem")&&y.push(v),y.push(J);const M=()=>{renderMathInElement(i.getSlidesElement(),u),t.layout()};(j=>{let m=document.createElement("link");m.rel="stylesheet",m.href=j,document.head.appendChild(m)})(b),async function(j){for(const m of j)await h(m)}(y).then(()=>{t.isReady()?M():t.on("ready",M.bind(this))})}}},MathJax2:p,MathJax3:()=>{let t,n={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},options:{skipHtmlTags:["script","noscript","style","textarea","pre"]},startup:{ready:()=>{MathJax.startup.defaultReady(),MathJax.startup.promise.then(()=>{Reveal.layout()})}}};return{id:"mathjax3",init:function(h){t=h;let i=t.getConfig().mathjax3||{},e={...n,...i};e.tex={...n.tex,...i.tex},e.options={...n.options,...i.options},e.startup={...n.startup,...i.startup};let s=e.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";e.mathjax=null,window.MathJax=e,function(a,l){let o=document.createElement("script");o.type="text/javascript",o.id="MathJax-script",o.src=a,o.async=!0,o.onload=()=>{typeof l=="function"&&(l.call(),l=null)},document.head.appendChild(o)}(s,function(){Reveal.addEventListener("slidechanged",function(a){MathJax.typeset()})})}}}})})})(T);const E=f,C=k({__proto__:null,default:E},[f]);export{C as m};
