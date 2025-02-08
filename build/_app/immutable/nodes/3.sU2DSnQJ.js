import{t as S,a as f,c as D}from"../chunks/BboG7kwl.js";import{p as y,k as n,m as a,s as c,t as C,o as w,ay as E,g as i,an as F,f as O,n as j}from"../chunks/DwHFy8MZ.js";import{s as h,d as z}from"../chunks/BUuy5B3o.js";import{i as L}from"../chunks/F3QwS6lm.js";import{M as A,e as U,i as B}from"../chunks/HL8Md41L.js";const G=!0,ce=Object.freeze(Object.defineProperty({__proto__:null,prerender:G},Symbol.toStringTag,{value:"Module"}));var I=S('<div class="post svelte-wcty5c"><div class="post-header svelte-wcty5c"><div class="title svelte-wcty5c"> </div> <div class="date svelte-wcty5c"> </div></div> <div class="content"><!></div></div>');function R(t,e){y(e,!0);var s=I(),r=n(s),o=n(r),m=n(o,!0);a(o);var l=c(o,2),u=n(l,!0);a(l),a(r);var p=c(r,2),v=n(p);A(v,{get source(){return e.post.shortContent}}),a(p),a(s),C(d=>{h(m,e.post.title),h(u,d)},[()=>e.post.date.toDateString()]),f(t,s),w()}const V=`# First Test Post

First post for development purposes. Not a bit more exciting.
`,H=`# Second Test Post

Second post for development purposes. Not a bit more exciting.
`,J=`# Third Test Post

Third post for development purposes. Not a bit more exciting.
`,K=`# Fourth Test Post

Fourth post for development purposes. Not a bit more exciting.
`,Q=`# Fifth Test Post

Fifth post for development purposes. Not a bit more exciting.
`,W=`# Sixth Test post

This is a post for development purposes. Lorem ipsum or such.
`,X=`# Seventh Test Post

Seventh post for development purposes. Not a bit more exciting.
`,Y=`# Eighth Test Post

Eighth post for development purposes. This is a really long post.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.


Second part
`,x=300,Z=Object.assign({"/src/lib/models/blog/posts/2025-02-01.md":V,"/src/lib/models/blog/posts/2025-02-02.md":H,"/src/lib/models/blog/posts/2025-02-03.md":J,"/src/lib/models/blog/posts/2025-02-04.md":K,"/src/lib/models/blog/posts/2025-02-05.md":Q,"/src/lib/models/blog/posts/2025-02-06.md":W,"/src/lib/models/blog/posts/2025-02-07.md":X,"/src/lib/models/blog/posts/2025-02-08.md":Y}),T=Object.entries(Z).map(([t,e])=>({path:t,title:$(e),date:ee(t),content:e,shortContent:te(e)})).sort((t,e)=>e.date.getTime()-t.date.getTime());function $(t){const e=t.match(/^#\s*(.*)/);return e?e[1]:"Untitled"}function ee(t){const e=t.match(/(\d{4}-\d{2}-\d{2})/);if(!e)throw new Error(`Invalid filename: ${t}`);return new Date(e[1])}function te(t){let e=t.slice(0,x);for(let s=x;s<t.length;s++)if([",",".","!","?"].includes(t[s])){e=t.slice(0,s);break}return e.length<t.length&&(e+="..."),e}function se(t,e,s){i(e)<s&&F(e)}function oe(t,e){i(e)>1&&F(e,-1)}var ie=S('<div><h1>Blog</h1> <!> <div class="pagination svelte-2yzuga"><button class="svelte-2yzuga"></button> <span> </span> <button class="svelte-2yzuga"></button></div></div>');function me(t,e){y(e,!0);const s=5,r=Math.ceil(T.length/s);let o=E(1),m=O(()=>T.slice((i(o)-1)*s,i(o)*s));var l=ie(),u=c(n(l),2);{var p=b=>{var P=D(),M=j(P);U(M,17,()=>i(m),B,(q,N)=>{R(q,{get post(){return i(N)}})}),f(b,P)};L(u,b=>{i(m).length>0&&b(p)})}var v=c(u,2),d=n(v);d.__click=[oe,o],d.textContent="<";var _=c(d,2),k=n(_);a(_);var g=c(_,2);g.__click=[se,o,r],g.textContent=">",a(v),a(l),C(()=>{d.disabled=i(o)===1,h(k,`Page ${i(o)??""} of ${r??""}`),g.disabled=i(o)===r}),f(t,l),w()}z(["click"]);export{me as component,ce as universal};
