import{r as e}from"./index-17f18936.js";import{u as t}from"./useTable-84567ca1.js";import{d as a,q as l,e as o,F as s,r,o as i,c as m,w as u,a as p,f as n,A as d,t as _,i as c,Q as j,K as f,k as v}from"./index-c87642b8.js";import{_ as g}from"./Table.vue_vue_type_script_lang-04797201.js";import{E as y}from"./el-button-2fea6714.js";import{E as b}from"./el-tag-0687b0f1.js";import{_ as x}from"./Search.vue_vue_type_script_setup_true_lang-3a86e8a5.js";import{_ as D}from"./ContentWrap.vue_vue_type_script_setup_true_lang-0a3f8e4e.js";import{_ as k}from"./Write.vue_vue_type_script_setup_true_lang-e578c775.js";import{_ as w}from"./Dialog.vue_vue_type_style_index_0_lang-c775ab1f.js";import"./el-message-box-d356b942.js";import"./el-input-d3d6378c.js";import"./use-form-item-62e12547.js";import"./constants-46f1a00c.js";import"./use-form-common-props-e31d12da.js";import"./el-popper-4d097879.js";import"./el-overlay-188c92dd.js";import"./el-pagination-251be48f.js";import"./index-1926c1bd.js";import"./debounce-e5c60c2d.js";import"./vnode-c53197bf.js";import"./aria-ecee1d93.js";import"./tsxHelper-3d63d233.js";import"./el-image-viewer-ff4b1453.js";import"./el-dropdown-item-06f7a9e5.js";import"./refs-045709d1.js";import"./Form-1e4bda88.js";import"./el-col-85ffc090.js";import"./el-input-number-280eb801.js";import"./el-divider-5b6c26db.js";import"./InputPassword-ecf39d8f.js";import"./style.css_vue_type_style_index_0_src_true_lang-c2f6aebf.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-4f69efdf.js";import"./IconPicker-b0418747.js";import"./index-15d4531f.js";import"./useForm-4fdd48d6.js";import"./useIcon-8576ab58.js";import"./el-card-b38eccf1.js";import"./useValidator-5852dc3b.js";import"./index-245cda17.js";import"./tree-b59d36bb.js";const h={class:"mb-10px"};function R(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!f(e)}const C=a({__name:"Role",setup(a){const{t:f}=v(),{tableRegister:C,tableState:T,tableMethods:N}=t({fetchDataApi:async()=>{const t=await e.get({url:"/role/table"});return{list:t.data.list||[],total:t.data.total}}}),{dataList:S,loading:V,total:F}=T,{getList:I}=N,A=l([{field:"index",label:f("userDemo.index"),type:"index"},{field:"roleName",label:f("role.roleName")},{field:"role",label:f("role.role")},{field:"status",label:f("menu.status"),slots:{default:e=>o(s,null,[o(b,{type:0===e.row.status?"danger":"success"},{default:()=>[1===e.row.status?f("userDemo.enable"):f("userDemo.disable")]})])}},{field:"createTime",label:f("tableDemo.displayTime")},{field:"remark",label:f("userDemo.remark")},{field:"action",label:f("userDemo.action"),width:240,slots:{default:e=>{let t,a;const l=e.row;return o(s,null,[o(y,{type:"primary",onClick:()=>H(l,"edit")},R(t=f("exampleDemo.edit"))?t:{default:()=>[t]}),o(y,{type:"danger"},R(a=f("exampleDemo.del"))?a:{default:()=>[a]})])}}}]),E=l([{field:"roleName",label:f("role.roleName"),component:"Input"}]),L=r({}),P=e=>{L.value=e,I()},q=r(!1),M=r(""),O=r(),W=r(""),z=r(),B=r(!1),H=(e,t)=>{M.value=f("edit"===t?"exampleDemo.edit":"exampleDemo.detail"),W.value=t,O.value=e,q.value=!0},J=()=>{M.value=f("exampleDemo.add"),O.value=void 0,q.value=!0,W.value=""},K=async()=>{const e=p(z);await(null==e?void 0:e.submit())&&(B.value=!0,setTimeout((()=>{B.value=!1,q.value=!1}),1e3))};return(e,t)=>(i(),m(s,null,[o(p(D),null,{default:u((()=>[o(p(x),{schema:E,onReset:P,onSearch:P},null,8,["schema"]),n("div",h,[o(p(y),{type:"primary",onClick:J},{default:u((()=>[d(_(p(f)("exampleDemo.add")),1)])),_:1})]),o(p(g),{columns:A,"default-expand-all":"","node-key":"id",data:p(S),loading:p(V),pagination:{total:p(F)},onRegister:p(C)},null,8,["columns","data","loading","pagination","onRegister"])])),_:1}),o(p(w),{modelValue:q.value,"onUpdate:modelValue":t[1]||(t[1]=e=>q.value=e),title:M.value},{footer:u((()=>["detail"!==W.value?(i(),c(p(y),{key:0,type:"primary",loading:B.value,onClick:K},{default:u((()=>[d(_(p(f)("exampleDemo.save")),1)])),_:1},8,["loading"])):j("",!0),o(p(y),{onClick:t[0]||(t[0]=e=>q.value=!1)},{default:u((()=>[d(_(p(f)("dialogDemo.close")),1)])),_:1})])),default:u((()=>["detail"!==W.value?(i(),c(k,{key:0,ref_key:"writeRef",ref:z,"current-row":O.value},null,8,["current-row"])):j("",!0)])),_:1},8,["modelValue","title"])],64))}});export{C as default};
