import"../chunks/Bg9kRutz.js";import{d as O,c as k,p as M,t as y,s as f,a as u,b as x,C as T,f as h,g as E,i as S,h as p,X as G,at as $,o as r,w as I,ai as F,ak as J,P as R,a5 as j}from"../chunks/CxbBQLb_.js";import{i as L}from"../chunks/Bq56kppQ.js";import{M as q,e as V,i as X}from"../chunks/CqiNJXzq.js";import{a as N}from"../chunks/2O8-HXU2.js";import{a as A}from"../chunks/BePr0Wt1.js";import{a as H}from"../chunks/Cba78oFc.js";import{p as C}from"../chunks/DBpXwlAm.js";const K=!0,Ce=Object.freeze(Object.defineProperty({__proto__:null,prerender:K},Symbol.toStringTag,{value:"Module"}));var Q=(s,e)=>G(e,!r(e)),W=y('<div><button class="content svelte-1s6139y"><!></button></div>'),Y=y('<div class="content svelte-1s6139y"><!></div>'),Z=y('<div class="post svelte-1s6139y"><div class="post-header svelte-1s6139y"><div class="title svelte-1s6139y"> </div> <div class="date svelte-1s6139y"> </div></div> <!></div>');const ee={hash:"svelte-1s6139y",code:`.post.svelte-1s6139y {margin:1em;margin-bottom:3em;}.post.svelte-1s6139y h1 {
    /* font-size: 2em; */display:none;}.remove-images.svelte-1s6139y img {display:none;}.remove-images.svelte-1s6139y table {display:none;}.post-header.svelte-1s6139y {display:flex;width:100%;justify-content:space-between;align-items:stretch;gap:16px;margin-top:2em;font-size:medium;padding-bottom:1em;}.title.svelte-1s6139y {font-weight:bold;font-size:larger;}.date.svelte-1s6139y {font-style:italic;}.content.svelte-1s6139y {text-align:justify;width:100%;max-width:100%;}.content.svelte-1s6139y img {max-width:100%;height:auto;}`};function U(s,e){M(e,!0),A(s,ee);let t=C(e,"post",7),o=$(!0);var n=Z(),l=u(n),g=u(l),v=u(g,!0);p(g);var c=f(g,2),b=u(c,!0);p(c),p(l);var _=f(l,2);{var m=i=>{var a=W(),d=u(a);d.__click=[Q,o];var w=u(d);const B=I(()=>r(o)?t().shortContent:t().content);q(w,{get source(){return r(B)}}),p(d),p(a),x(()=>H(a,`content ${(r(o)?"remove-images":"")??""} svelte-1s6139y`)),h(i,a)},P=i=>{var a=Y(),d=u(a);q(d,{get source(){return t().content}}),p(a),h(i,a)};L(_,i=>{var a,d;((a=t().content)==null?void 0:a.length)!=((d=t().shortContent)==null?void 0:d.length)||t().containsMedia?i(m):i(P,!1)})}return p(n),x(i=>{T(v,t().title),T(b,i)},[()=>t().date.toDateString()]),h(s,n),E({get post(){return t()},set post(i){t(i),S()}})}O(["click"]);k(U,{post:{}},[],[],!0);var te=y('<div class="svelte-18vsl4l"><button class="svelte-18vsl4l"></button> <span> </span> <button class="svelte-18vsl4l"></button></div>');const se={hash:"svelte-18vsl4l",code:"div.svelte-18vsl4l {display:flex;justify-content:center;align-items:center;gap:16px;margin:auto;margin-top:2em;}button.svelte-18vsl4l {padding:0.5em 1em;border:none;background-color:transparent;cursor:pointer;font-size:1.5em;font-weight:bold;border-radius:5px;}button.svelte-18vsl4l:disabled {cursor:not-allowed;color:#a2a2a2;}"};function oe(s,e){M(e,!0),A(s,se);let t=C(e,"currentPage",7),o=C(e,"totalPages",7);function n(){t()>1&&e.$$host.dispatchEvent(new CustomEvent("prev",{}))}function l(){t()<o()&&e.$$host.dispatchEvent(new CustomEvent("next",{}))}var g=te(),v=u(g);v.__click=n,v.textContent="<";var c=f(v,2),b=u(c);p(c);var _=f(c,2);return _.__click=l,_.textContent=">",p(g),x(()=>{v.disabled=t()===1,T(b,`Page ${t()??""} of ${o()??""}`),_.disabled=t()===o()}),h(s,g),E({get currentPage(){return t()},set currentPage(m){t(m),S()},get totalPages(){return o()},set totalPages(m){o(m),S()}})}O(["click"]);customElements.define("pagination-component",k(oe,{currentPage:{},totalPages:{}},[],[],!0));const ne=`# First Test Post

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

`,z=300,ue=Object.assign({"/src/lib/models/blog/posts/2025-02-01.md":ne,"/src/lib/models/blog/posts/2025-02-02.md":ie,"/src/lib/models/blog/posts/2025-02-03.md":ae,"/src/lib/models/blog/posts/2025-02-04.md":re,"/src/lib/models/blog/posts/2025-02-05.md":le,"/src/lib/models/blog/posts/2025-02-06.md":ce,"/src/lib/models/blog/posts/2025-02-07.md":me,"/src/lib/models/blog/posts/2025-02-08.md":de}),D=Object.entries(ue).map(([s,e])=>{var l;e=e;const t=e.includes("![")||e.includes("<img"),o=(((l=e.match(/^\|.*\|\n\|\s*[:-]+[\s\S]*\|.*\|$/gm))==null?void 0:l.length)||0)>0,n=t||o;return console.log({path:s,containsMedia:n}),{path:s,title:pe(e),date:ge(s),content:e,shortContent:ve(e,n),containsMedia:n}}).sort((s,e)=>e.date.getTime()-s.date.getTime());function pe(s){const e=s.match(/^#\s*(.*)/);return e?e[1]:"Untitled"}function ge(s){const e=s.match(/(\d{4}-\d{2}-\d{2})/);if(!e)throw new Error(`Invalid filename: ${s}`);return new Date(e[1])}function ve(s,e){let t=s.slice(0,z);for(let o=z;o<s.length;o++)if([",",".","!","?"].includes(s[o])){t=s.slice(0,o);break}return(t.length<s.length||e)&&(t+=`
...`),t}var _e=y("<div><h1>Blog</h1> <!> <pagination-component></pagination-component></div>",2);function be(s,e){M(e,!0);const t=3,o=Math.ceil(D.length/t);let n=$(1),l=I(()=>D.slice((r(n)-1)*t,r(n)*t));function g(){r(n)<o&&j(n)}function v(){r(n)>1&&j(n,-1)}var c=_e(),b=f(u(c),2);{var _=P=>{var i=J(),a=R(i);V(a,17,()=>r(l),X,(d,w)=>{U(d,{get post(){return r(w)}})}),h(P,i)};L(b,P=>{r(l).length>0&&P(_)})}var m=f(b,2);x(()=>N(m,"currentPage",r(n))),N(m,"totalPages",o),p(c),F("prev",m,v),F("next",m,g),h(s,c),E()}k(be,{},[],[],!0);export{be as component,Ce as universal};
