import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-0a3f8e4e.js";import{r as t,d as o,o as a,i as r,w as s,e as p,a as l,c as n,f as u,A as i,t as d}from"./index-c87642b8.js";import{E as m}from"./el-button-2fea6714.js";import{E as c}from"./el-input-d3d6378c.js";import"./el-card-b38eccf1.js";import"./el-popper-4d097879.js";import"./constants-46f1a00c.js";import"./index-1926c1bd.js";import"./use-form-item-62e12547.js";import"./use-form-common-props-e31d12da.js";const v={key:0},y={key:0},f={key:1},b={key:1},_=o({__name:"useClipboard",setup(o){const{copy:_,copied:j,text:x,isSupported:C}=(()=>{const e=t(!1),o=t(""),a=t(!1);navigator.clipboard||document.execCommand?a.value=!0:a.value=!1;const r=()=>{setTimeout((()=>{e.value=!1}),1500)};return{copy:t=>{if(navigator.clipboard)return void navigator.clipboard.writeText(t).then((()=>{o.value=t,e.value=!0,r()}));const a=document.createElement("input");a.setAttribute("readonly","readonly"),a.setAttribute("value",t),document.body.appendChild(a),a.select(),a.setSelectionRange(0,9999),document.execCommand("copy")&&(o.value=t,document.execCommand("copy"),e.value=!0,r()),document.body.removeChild(a)},text:o,copied:e,isSupported:a}})(),g=t("");return(t,o)=>(a(),r(l(e),{title:"useClipboard"},{default:s((()=>[p(l(c),{modelValue:g.value,"onUpdate:modelValue":o[0]||(o[0]=e=>g.value=e),placeholder:"请输入要复制的内容"},null,8,["modelValue"]),l(C)?(a(),n("div",v,[p(l(m),{onClick:o[1]||(o[1]=e=>l(_)(g.value)),type:"primary",class:"mt-20px"},{default:s((()=>[l(j)?(a(),n("span",f,"已复制")):(a(),n("span",y,"复制"))])),_:1}),u("p",null,[i(" 当前已复制: "),u("code",null,d(l(x)||"none"),1)])])):(a(),n("p",b," 你的浏览器不支持 Clipboard API "))])),_:1}))}});export{_ as default};
