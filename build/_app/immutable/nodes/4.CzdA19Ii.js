import{h,d as y,n as w,p as S,b as _}from"../chunks/WJDFtdVo.js";import"../chunks/Bg9kRutz.js";import{i as k}from"../chunks/DuPEW0B9.js";import{c as z,p as D,t as v,V as M,$ as N,b as m,s as u,e as s,d as C,i as O,r,n as P,k as f,a as B,g as A}from"../chunks/DEj4bqLo.js";import{e as E,i as I}from"../chunks/DcQvtzQP.js";import{a as T}from"../chunks/DFmqsOMg.js";import{p as R}from"../chunks/Dz0wElik.js";import{S as W}from"../chunks/DPh_vc-r.js";const L=!0,U=()=>{const a=h.getProjects(),o=h.getRolesChronologically().reduce((t,e)=>{if(e.projects&&e.projects.length>0){t[e.category]||(t[e.category]=[]);const i=e.projects.map(c=>({...c,role:{name:e.name,institution:e.instutition,startDate:e.startDate,endDate:e.endDate}}));t[e.category]=[...t[e.category],...i]}return t},{});return{projects:a,projectsByCategory:o}},oe=Object.freeze(Object.defineProperty({__proto__:null,load:U,prerender:L},Symbol.toStringTag,{value:"Module"})),V={name:"SNOMED Neo4j",shortDescription:"Neo4j representation of SNOMED CT",description:`
A containerized SNOMED CT database using Neo4j, with an option to reduce the graph to hierarchies under certain concepts selected by the user or keep only given relationship types for a smaller image.

Due to licensing, the data is imported during local build using a UMLS API key.
`,skills:[y,w,S,_],github:"https://github.com/bncszb/snomed-neo4j"},Y=[V];var $=v('<meta name="description" content="Solutions of projects by Bence Séra-Szabó MD, showcasing technical expertise and professional work.">'),q=v('<div class="project-card-wrapper svelte-15xxcnr"><div class="project-header svelte-15xxcnr"><h3 class="svelte-15xxcnr"> </h3> <div class="project-meta svelte-15xxcnr"></div></div> <!></div>'),F=v(`<div class="solutions-container svelte-15xxcnr"><div class="hero svelte-15xxcnr"><div class="hero-content svelte-15xxcnr"><h1 class="svelte-15xxcnr">Solutions</h1> <p class="tagline svelte-15xxcnr">A collection of projects showcasing my technical expertise and
        professional work</p></div></div> <div class="solutions-content svelte-15xxcnr"><div class="projects-grid svelte-15xxcnr"></div></div></div>`);const G={hash:"svelte-15xxcnr",code:`.solutions-container.svelte-15xxcnr {width:100%;max-width:1200px;margin:0 auto;padding:0 1rem;}.hero.svelte-15xxcnr {display:flex;justify-content:center;align-items:center;height:30vh;min-height:250px;text-align:center;background:linear-gradient(
      135deg,
      var(--color-bg-0) 0%,
      var(--color-bg-2) 100%
    );border-radius:8px;margin:20px 0 40px;box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);}.hero-content.svelte-15xxcnr {padding:2rem;}h1.svelte-15xxcnr {font-size:3rem;margin-bottom:1rem;color:var(--color-theme-1);}.tagline.svelte-15xxcnr {font-size:1.2rem;opacity:0.8;margin-bottom:0;max-width:600px;margin:0 auto;}.solutions-content.svelte-15xxcnr {display:flex;flex-direction:column;gap:3rem;padding-bottom:4rem;}
  /* 
  .category-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  } */

  /* h2 {
    font-size: 1.8rem;
    color: var(--color-theme-1);
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 0.5rem;
    margin: 0;
  } */.projects-grid.svelte-15xxcnr {display:grid;grid-template-columns:repeat(auto-fill, minmax(350px, 1fr));gap:2rem;}.project-card-wrapper.svelte-15xxcnr {background-color:white;border-radius:8px;box-shadow:0 2px 4px var(--color-shadow);overflow:hidden;transition:transform 0.3s ease,
      box-shadow 0.3s ease;display:flex;flex-direction:column;}.project-card-wrapper.svelte-15xxcnr:hover {transform:translateY(-5px);box-shadow:0 8px 16px rgba(0, 0, 0, 0.1);}.project-header.svelte-15xxcnr {padding:1.25rem 1.25rem 0.5rem;border-bottom:1px solid var(--color-border);}.project-header.svelte-15xxcnr h3:where(.svelte-15xxcnr) {margin:0 0 0.5rem 0;font-size:1.4rem;color:var(--color-theme-1);}.project-meta.svelte-15xxcnr {display:flex;flex-direction:column;gap:0.25rem;font-size:0.9rem;color:var(--color-text-light);margin-bottom:0.5rem;}

  /* .role-name {
    font-weight: 500;
  }

  .date-range {
    font-style: italic;
    font-size: 0.85rem;
  } */

  @media (max-width: 768px) {.projects-grid.svelte-15xxcnr {grid-template-columns:1fr;}h1.svelte-15xxcnr {font-size:2.5rem;}.tagline.svelte-15xxcnr {font-size:1rem;}.hero.svelte-15xxcnr {height:25vh;}
  }`};function H(a,d){D(d,!1),T(a,G);let o=R(d,"data",12);const{projectsByCategory:t}=o();k();var e=F();M(n=>{var l=$();N.title="Solutions | Bence Séra-Szabó MD",m(n,l)});var i=u(s(e),2),c=s(i);return E(c,5,()=>Y,I,(n,l)=>{var p=q(),x=s(p),g=s(x),b=s(g,!0);r(g),P(2),r(x);var j=u(x,2);W(j,{get project(){return f(l)}}),r(p),B(()=>A(b,f(l).name)),m(n,p)}),r(c),r(i),r(e),m(a,e),C({get data(){return o()},set data(n){o(n),O()}})}z(H,{data:{}},[],[],!0);export{H as component,oe as universal};
