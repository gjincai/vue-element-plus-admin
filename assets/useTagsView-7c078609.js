import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-0a3f8e4e.js";import{d as t,u as s,o as a,i as r,w as o,e as i,A as p,a as l}from"./index-c87642b8.js";import{E as m}from"./el-button-2fea6714.js";import{u as n}from"./useTagsView-cee9129e.js";import"./el-card-b38eccf1.js";import"./el-popper-4d097879.js";import"./constants-46f1a00c.js";import"./index-1926c1bd.js";import"./use-form-item-62e12547.js";import"./use-form-common-props-e31d12da.js";const u=t({__name:"useTagsView",setup(t){const{push:u}=s(),{closeAll:d,closeLeft:y,closeRight:c,closeOther:f,closeCurrent:_,refreshPage:g,setTitle:j}=n(),C=()=>{d((()=>{u("/dashboard/analysis")}))},k=()=>{y()},h=()=>{c()},w=()=>{f()},T=()=>{g()},b=()=>{_(void 0,(()=>{u("/dashboard/analysis")}))},v=()=>{j((new Date).getTime().toString())},x=()=>{j(`分析页-${(new Date).getTime().toString()}`,"/dashboard/analysis")};return(t,s)=>(a(),r(l(e),{title:"useTagsView"},{default:o((()=>[i(l(m),{type:"primary",onClick:C},{default:o((()=>[p(" 关闭所有标签页 ")])),_:1}),i(l(m),{type:"primary",onClick:k},{default:o((()=>[p(" 关闭左侧标签页 ")])),_:1}),i(l(m),{type:"primary",onClick:h},{default:o((()=>[p(" 关闭右侧标签页 ")])),_:1}),i(l(m),{type:"primary",onClick:w},{default:o((()=>[p(" 关闭其他标签页 ")])),_:1}),i(l(m),{type:"primary",onClick:b},{default:o((()=>[p(" 关闭当前标签页 ")])),_:1}),i(l(m),{type:"primary",onClick:T},{default:o((()=>[p(" 刷新当前标签页 ")])),_:1}),i(l(m),{type:"primary",onClick:v},{default:o((()=>[p(" 修改当前标题 ")])),_:1}),i(l(m),{type:"primary",onClick:x},{default:o((()=>[p(" 修改分析页标题 ")])),_:1})])),_:1}))}});export{u as default};
