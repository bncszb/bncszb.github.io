import{t as P,a as b,c as L}from"../chunks/BboG7kwl.js";import{p as F,k as c,m as d,s as v,t as T,o as w,q as A,ay as q,g as a,f as N,an as D,n as I}from"../chunks/DwHFy8MZ.js";import{d as E,s as S}from"../chunks/BUuy5B3o.js";import{i as O}from"../chunks/F3QwS6lm.js";import{M as C,a as U,e as B,i as G}from"../chunks/HL8Md41L.js";const J=!0,ge=Object.freeze(Object.defineProperty({__proto__:null,prerender:J},Symbol.toStringTag,{value:"Module"}));var R=(t,e)=>A(e,!a(e)),V=P('<div><button class="content svelte-c5mdsk"><!></button></div>'),H=P('<div class="content svelte-c5mdsk"><!></div>'),K=P('<div class="post svelte-c5mdsk"><div class="post-header svelte-c5mdsk"><div class="title svelte-c5mdsk"> </div> <div class="date svelte-c5mdsk"> </div></div> <!></div>');function Q(t,e){F(e,!0);let s=q(!0);var i=K(),o=c(i),m=c(o),p=c(m,!0);d(m);var g=v(m,2),x=c(g,!0);d(g),d(o);var h=v(o,2);{var u=l=>{var n=V(),r=c(n);r.__click=[R,s];var f=c(r);const k=N(()=>a(s)?e.post.shortContent:e.post.content);C(f,{get source(){return a(k)}}),d(r),d(n),T(()=>U(n,`content ${(a(s)?"remove-images":"")??""} svelte-c5mdsk`)),b(l,n)},_=l=>{var n=H(),r=c(n);C(r,{get source(){return e.post.content}}),d(n),b(l,n)};O(h,l=>{var n,r;((n=e.post.content)==null?void 0:n.length)!=((r=e.post.shortContent)==null?void 0:r.length)||e.post.containsMedia?l(u):l(_,!1)})}d(i),T(l=>{S(p,e.post.title),S(x,l)},[()=>e.post.date.toDateString()]),b(t,i),w()}E(["click"]);const W=`# First Test Post

First post for development purposes. Not a bit more exciting.
`,X=`# Second Test Post

Second post for development purposes. Not a bit more exciting.
`,Y=`# Third Test Post

Third post for development purposes. Not a bit more exciting.
`,Z=`# Fourth Test Post

Fourth post for development purposes. Not a bit more exciting.
`,$=`# Fifth Test Post

Fifth post for development purposes. Not a bit more exciting.
`,ee=`# Sixth Test post

This is a post for development purposes. Lorem ipsum or such.

| Month    | Savings |
| :------- | ------: |
| January  |    $250 |
| February |     $80 |
| March    |    $420 |
`,te=`# Seventh Test Post

Seventh post for development purposes. Not a bit more exciting.

[<img src="http://www.google.com.au/images/nav_logo7.png">](http://google.com.au/)

blablba
`,se=`# Eighth Test Post

Eighth post for development purposes. This is a really long post.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.

Second part
`,M=300,oe=Object.assign({"/src/lib/models/blog/posts/2025-02-01.md":W,"/src/lib/models/blog/posts/2025-02-02.md":X,"/src/lib/models/blog/posts/2025-02-03.md":Y,"/src/lib/models/blog/posts/2025-02-04.md":Z,"/src/lib/models/blog/posts/2025-02-05.md":$,"/src/lib/models/blog/posts/2025-02-06.md":ee,"/src/lib/models/blog/posts/2025-02-07.md":te,"/src/lib/models/blog/posts/2025-02-08.md":se}),y=Object.entries(oe).map(([t,e])=>{var m;e=e;const s=e.includes("![")||e.includes("<img"),i=(((m=e.match(/^\|.*\|\n\|\s*[:-]+[\s\S]*\|.*\|$/gm))==null?void 0:m.length)||0)>0,o=s||i;return console.log({path:t,containsMedia:o}),{path:t,title:ne(e),date:ie(t),content:e,shortContent:ae(e,o),containsMedia:o}}).sort((t,e)=>e.date.getTime()-t.date.getTime());function ne(t){const e=t.match(/^#\s*(.*)/);return e?e[1]:"Untitled"}function ie(t){const e=t.match(/(\d{4}-\d{2}-\d{2})/);if(!e)throw new Error(`Invalid filename: ${t}`);return new Date(e[1])}function ae(t,e){let s=t.slice(0,M);for(let i=M;i<t.length;i++)if([",",".","!","?"].includes(t[i])){s=t.slice(0,i);break}return(s.length<t.length||e)&&(s+=`
...`),s}function re(t,e,s){a(e)<s&&D(e)}function le(t,e){a(e)>1&&D(e,-1)}var ce=P('<div><h1>Blog</h1> <!> <div class="pagination svelte-2yzuga"><button class="svelte-2yzuga"></button> <span> </span> <button class="svelte-2yzuga"></button></div></div>');function _e(t,e){F(e,!0);const s=5,i=Math.ceil(y.length/s);let o=q(1),m=N(()=>y.slice((a(o)-1)*s,a(o)*s));var p=ce(),g=v(c(p),2);{var x=r=>{var f=L(),k=I(f);B(k,17,()=>a(m),G,(j,z)=>{Q(j,{get post(){return a(z)}})}),b(r,f)};O(g,r=>{a(m).length>0&&r(x)})}var h=v(g,2),u=c(h);u.__click=[le,o],u.textContent="<";var _=v(u,2),l=c(_);d(_);var n=v(_,2);n.__click=[re,o,i],n.textContent=">",d(h),d(p),T(()=>{u.disabled=a(o)===1,S(l,`Page ${a(o)??""} of ${i??""}`),n.disabled=a(o)===i}),b(t,p),w()}E(["click"]);export{_e as component,ge as universal};
