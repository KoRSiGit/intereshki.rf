import{S as y,i as B,s as S,k as _,y as d,l as p,m as $,z as v,h as f,n as I,b as C,A as b,g as c,d as u,B as k,v as w,f as D,I as E,M as P}from"../chunks/index.318290c2.js";import{B as V}from"../chunks/BlogPostCard.8e77de04.js";import{C as q}from"../chunks/ContentSection.02ef8ceb.js";function m(s,t,r){const n=s.slice();return n[2]=t[r],n}function h(s){let t,r;return t=new V({props:{title:s[2].title,coverImage:s[2].hideCoverImage?void 0:s[2].coverImage,excerpt:s[2].excerpt,slug:s[2].slug,tags:s[2].tags,categories:s[2].categories}}),{c(){d(t.$$.fragment)},l(n){v(t.$$.fragment,n)},m(n,e){b(t,n,e),r=!0},p:P,i(n){r||(c(t.$$.fragment,n),r=!0)},o(n){u(t.$$.fragment,n),r=!1},d(n){k(t,n)}}}function z(s){let t,r,n=s[0],e=[];for(let o=0;o<n.length;o+=1)e[o]=h(m(s,n,o));const i=o=>u(e[o],1,1,()=>{e[o]=null});return{c(){t=_("div");for(let o=0;o<e.length;o+=1)e[o].c();this.h()},l(o){t=p(o,"DIV",{class:!0});var l=$(t);for(let a=0;a<e.length;a+=1)e[a].l(l);l.forEach(f),this.h()},h(){I(t,"class","grid svelte-1mrrl9u")},m(o,l){C(o,t,l);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(t,null);r=!0},p(o,l){if(l&1){n=o[0];let a;for(a=0;a<n.length;a+=1){const g=m(o,n,a);e[a]?(e[a].p(g,l),c(e[a],1)):(e[a]=h(g),e[a].c(),c(e[a],1),e[a].m(t,null))}for(w(),a=n.length;a<e.length;a+=1)i(a);D()}},i(o){if(!r){for(let l=0;l<n.length;l+=1)c(e[l]);r=!0}},o(o){e=e.filter(Boolean);for(let l=0;l<e.length;l+=1)u(e[l]);r=!1},d(o){o&&f(t),E(e,o)}}}function A(s){let t,r,n;return r=new q({props:{title:"Все записи журнала",$$slots:{default:[z]},$$scope:{ctx:s}}}),{c(){t=_("div"),d(r.$$.fragment),this.h()},l(e){t=p(e,"DIV",{class:!0});var i=$(t);v(r.$$.fragment,i),i.forEach(f),this.h()},h(){I(t,"class","container")},m(e,i){C(e,t,i),b(r,t,null),n=!0},p(e,[i]){const o={};i&32&&(o.$$scope={dirty:i,ctx:e}),r.$set(o)},i(e){n||(c(r.$$.fragment,e),n=!0)},o(e){u(r.$$.fragment,e),n=!1},d(e){e&&f(t),k(r)}}}function M(s,t,r){let{data:n}=t,{posts:e}=n;return s.$$set=i=>{"data"in i&&r(1,n=i.data)},[e,n]}class H extends y{constructor(t){super(),B(this,t,M,A,S,{data:1})}}export{H as component};
