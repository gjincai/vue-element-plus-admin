import{ai as E,K as T,b8 as e,cO as s}from"./index-aa1de40f.js";var r=(E=>(E[E.TEXT=1]="TEXT",E[E.CLASS=2]="CLASS",E[E.STYLE=4]="STYLE",E[E.PROPS=8]="PROPS",E[E.FULL_PROPS=16]="FULL_PROPS",E[E.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",E[E.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",E[E.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",E[E.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",E[E.NEED_PATCH=512]="NEED_PATCH",E[E.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",E[E.HOISTED=-1]="HOISTED",E[E.BAIL=-2]="BAIL",E))(r||{});const S=E=>{if(!T(E))return{};const r=E.props||{},S=(T(E.type)?E.type.props:void 0)||{},A={};return Object.keys(S).forEach((E=>{e(S[E],"default")&&(A[E]=S[E].default)})),Object.keys(r).forEach((E=>{A[s(E)]=r[E]})),A},A=e=>{const s=E(e)?e:[e],r=[];return s.forEach((e=>{var s;E(e)?r.push(...A(e)):T(e)&&E(e.children)?r.push(...A(e.children)):(r.push(e),T(e)&&(null==(s=e.component)?void 0:s.subTree)&&r.push(...A(e.component.subTree)))})),r};export{r as P,A as f,S as g};
