import"../chunks/Bg9kRutz.js";import{o as O,k,p as M,t as y,s as f,v as u,z as x,A as T,n as h,w as E,y as S,x as p,R as U,al as $,g as r,f as A,K as F,M as G,B as J,a8 as j}from"../chunks/D2VlYhfp.js";import{p as C,i as I}from"../chunks/B--vCFZm.js";import{M as q,e as K,i as V}from"../chunks/QCr5kyCZ.js";import{b as H,c as z}from"../chunks/eqXLpdKT.js";import{a as L}from"../chunks/B38cIxWF.js";const Q=!0,Te=Object.freeze(Object.defineProperty({__proto__:null,prerender:Q},Symbol.toStringTag,{value:"Module"}));var W=(s,e)=>U(e,!r(e)),X=y('<div><button class="content svelte-1s6139y"><!></button></div>'),Y=y('<div class="content svelte-1s6139y"><!></div>'),Z=y('<div class="post svelte-1s6139y"><div class="post-header svelte-1s6139y"><div class="title svelte-1s6139y"> </div> <div class="date svelte-1s6139y"> </div></div> <!></div>');const ee={hash:"svelte-1s6139y",code:`.post.svelte-1s6139y {margin:1em;margin-bottom:3em;}.post.svelte-1s6139y h1 {
    /* font-size: 2em; */display:none;}.remove-images.svelte-1s6139y img {display:none;}.remove-images.svelte-1s6139y table {display:none;}.post-header.svelte-1s6139y {display:flex;width:100%;justify-content:space-between;align-items:stretch;gap:16px;margin-top:2em;font-size:medium;padding-bottom:1em;}.title.svelte-1s6139y {font-weight:bold;font-size:larger;}.date.svelte-1s6139y {font-style:italic;}.content.svelte-1s6139y {text-align:justify;width:100%;max-width:100%;}.content.svelte-1s6139y img {max-width:100%;height:auto;}`};function B(s,e){M(e,!0),L(s,ee);let t=C(e,"post",7),n=$(!0);var o=Z(),l=u(o),v=u(l),g=u(v,!0);p(v);var c=f(v,2),b=u(c,!0);p(c),p(l);var _=f(l,2);{var m=i=>{var a=X(),d=u(a);d.__click=[W,n];var w=u(d);const R=A(()=>r(n)?t().shortContent:t().content);q(w,{get source(){return r(R)}}),p(d),p(a),x(()=>H(a,`content ${(r(n)?"remove-images":"")??""} svelte-1s6139y`)),h(i,a)},P=i=>{var a=Y(),d=u(a);q(d,{get source(){return t().content}}),p(a),h(i,a)};I(_,i=>{var a,d;((a=t().content)==null?void 0:a.length)!=((d=t().shortContent)==null?void 0:d.length)||t().containsMedia?i(m):i(P,!1)})}return p(o),x(i=>{T(g,t().title),T(b,i)},[()=>t().date.toDateString()]),h(s,o),E({get post(){return t()},set post(i){t(i),S()}})}O(["click"]);k(B,{post:{}},[],[],!0);var te=y('<div class="svelte-18vsl4l"><button class="svelte-18vsl4l"></button> <span> </span> <button class="svelte-18vsl4l"></button></div>');const se={hash:"svelte-18vsl4l",code:"div.svelte-18vsl4l {display:flex;justify-content:center;align-items:center;gap:16px;margin:auto;margin-top:2em;}button.svelte-18vsl4l {padding:0.5em 1em;border:none;background-color:transparent;cursor:pointer;font-size:1.5em;font-weight:bold;border-radius:5px;}button.svelte-18vsl4l:disabled {cursor:not-allowed;color:#a2a2a2;}"};function ne(s,e){M(e,!0),L(s,se);let t=C(e,"currentPage",7),n=C(e,"totalPages",7);function o(){t()>1&&e.$$host.dispatchEvent(new CustomEvent("prev",{}))}function l(){t()<n()&&e.$$host.dispatchEvent(new CustomEvent("next",{}))}var v=te(),g=u(v);g.__click=o,g.textContent="<";var c=f(g,2),b=u(c);p(c);var _=f(c,2);return _.__click=l,_.textContent=">",p(v),x(()=>{g.disabled=t()===1,T(b,`Page ${t()??""} of ${n()??""}`),_.disabled=t()===n()}),h(s,v),E({get currentPage(){return t()},set currentPage(m){t(m),S()},get totalPages(){return n()},set totalPages(m){n(m),S()}})}O(["click"]);customElements.define("pagination-component",k(ne,{currentPage:{},totalPages:{}},[],[],!0));const oe=`# First Test Post

First post for development purposes. Not a bit more exciting.
`,ie=`# Second Test Post

Second post for development purposes. Not a bit more exciting.
`,ae=`# Third Test Post

Third post for development purposes. Not a bit more exciting.
`,re=`# Fourth Test Post

Fourth post for development purposes. Not a bit more exciting.
`,le=`# Fifth Test Post

Fifth post for development purposes. Not a bit more exciting.
`,ce=`# Sixth Test post

This is a post for development purposes. Lorem ipsum or such.

| Month    | Savings |
| :------- | ------: |
| January  |    $250 |
| February |     $80 |
| March    |    $420 |
`,me=`# Seventh Test Post

Seventh post for development purposes. Not a bit more exciting.

[<img src="http://www.google.com.au/images/nav_logo7.png">](http://google.com.au/)

blablba
`,de=`# Eighth Test Post

Eighth post for development purposes. This is a really long post.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.

Second part

![Image](src/lib/images/svelte-welcome.png)

`,N=300,ue=Object.assign({"/src/lib/models/blog/posts/2025-02-01.md":oe,"/src/lib/models/blog/posts/2025-02-02.md":ie,"/src/lib/models/blog/posts/2025-02-03.md":ae,"/src/lib/models/blog/posts/2025-02-04.md":re,"/src/lib/models/blog/posts/2025-02-05.md":le,"/src/lib/models/blog/posts/2025-02-06.md":ce,"/src/lib/models/blog/posts/2025-02-07.md":me,"/src/lib/models/blog/posts/2025-02-08.md":de}),D=Object.entries(ue).map(([s,e])=>{var l;e=e;const t=e.includes("![")||e.includes("<img"),n=(((l=e.match(/^\|.*\|\n\|\s*[:-]+[\s\S]*\|.*\|$/gm))==null?void 0:l.length)||0)>0,o=t||n;return console.log({path:s,containsMedia:o}),{path:s,title:pe(e),date:ve(s),content:e,shortContent:ge(e,o),containsMedia:o}}).sort((s,e)=>e.date.getTime()-s.date.getTime());function pe(s){const e=s.match(/^#\s*(.*)/);return e?e[1]:"Untitled"}function ve(s){const e=s.match(/(\d{4}-\d{2}-\d{2})/);if(!e)throw new Error(`Invalid filename: ${s}`);return new Date(e[1])}function ge(s,e){let t=s.slice(0,N);for(let n=N;n<s.length;n++)if([",",".","!","?"].includes(s[n])){t=s.slice(0,n);break}return(t.length<s.length||e)&&(t+=`
...`),t}var _e=y("<div><h1>Blog</h1> <!> <pagination-component></pagination-component></div>",2);function be(s,e){M(e,!0);const t=3,n=Math.ceil(D.length/t);let o=$(1),l=A(()=>D.slice((r(o)-1)*t,r(o)*t));function v(){r(o)<n&&j(o)}function g(){r(o)>1&&j(o,-1)}var c=_e(),b=f(u(c),2);{var _=P=>{var i=G(),a=J(i);K(a,17,()=>r(l),V,(d,w)=>{B(d,{get post(){return r(w)}})}),h(P,i)};I(b,P=>{r(l).length>0&&P(_)})}var m=f(b,2);x(()=>z(m,"currentPage",r(o))),z(m,"totalPages",n),p(c),F("prev",m,g),F("next",m,v),h(s,c),E()}k(be,{},[],[],!0);export{be as component,Te as universal};
