import{F as e}from"./Form-1e4bda88.js";import{u as o}from"./useForm-4fdd48d6.js";import{u as a}from"./useValidator-5852dc3b.js";import{d as n,q as t,e as l,A as s,F as i,M as m,o as c,i as p,a as r,k as u}from"./index-c87642b8.js";import{g as d}from"./index-245cda17.js";import{E as b}from"./el-tag-0687b0f1.js";import{E as f}from"./el-button-2fea6714.js";const h=n({__name:"Write",props:{currentRow:{type:Object,default:()=>null}},setup(n,{expose:h}){const w=n,{t:y}=u(),{required:v}=a(),g=t([{field:"type",label:"菜单类型",component:"RadioButton",value:0,colProps:{span:24},componentProps:{options:[{label:"目录",value:0},{label:"菜单",value:1}],on:{change:async e=>{const o=await j();1===e?(k([{field:"component",path:"componentProps.disabled",value:!1}]),P({component:""})):(k([{field:"component",path:"componentProps.disabled",value:!0}]),void 0===o.parentId?P({component:"#"}):P({component:"##"}))}}}},{field:"parentId",label:"父级菜单",component:"TreeSelect",componentProps:{nodeKey:"id",props:{label:"title",value:"id",children:"children"},highlightCurrent:!0,expandOnClickNode:!1,checkStrictly:!0,checkOnClickNode:!0,clearable:!0,on:{change:async e=>{const o=await j();e&&0===o.type?P({component:"##"}):e||0!==o.type?1===o.type&&P({component:""}):P({component:"#"})}}},optionApi:async()=>(await d()).data.list||[]},{field:"meta.title",label:y("menu.menuName"),component:"Input"},{field:"component",label:"组件",component:"Input",value:"#",componentProps:{disabled:!0,placeholder:"#为顶级目录，##为子目录"}},{field:"name",label:y("menu.name"),component:"Input"},{field:"meta.icon",label:y("menu.icon"),component:"Input"},{field:"path",label:y("menu.path"),component:"Input"},{field:"meta.activeMenu",label:y("menu.activeMenu"),component:"Input"},{field:"status",label:y("menu.status"),component:"Select",componentProps:{options:[{label:y("userDemo.disable"),value:0},{label:y("userDemo.enable"),value:1}]}},{field:"permissionList",label:y("menu.permission"),component:"CheckboxGroup",colProps:{span:24},formItemProps:{slots:{default:()=>l(i,null,[l(b,{class:"mx-1",closable:!0,disableTransitions:!1},{default:()=>[s("新增")]}),l(b,{class:"mx-1",closable:!0,disableTransitions:!1},{default:()=>[s("编辑")]}),l(b,{class:"mx-1",closable:!0,disableTransitions:!1},{default:()=>[s("删除")]}),l(f,{type:"primary",size:"small",onClick:()=>{}},{default:()=>[s("添加权限")]})])}}},{field:"meta.hidden",label:y("menu.hidden"),component:"Switch"},{field:"meta.alwaysShow",label:y("menu.alwaysShow"),component:"Switch"},{field:"meta.noCache",label:y("menu.noCache"),component:"Switch"},{field:"meta.breadcrumb",label:y("menu.breadcrumb"),component:"Switch"},{field:"meta.affix",label:y("menu.affix"),component:"Switch"},{field:"meta.noTagsView",label:y("menu.noTagsView"),component:"Switch"},{field:"meta.canTo",label:y("menu.canTo"),component:"Switch"}]),x=t({component:[v()],path:[v()],"meta.title":[v()]}),{formRegister:S,formMethods:I}=o(),{setValues:P,getFormData:j,getElFormExpose:T,setSchema:k}=I;return m((()=>w.currentRow),(e=>{e&&P(e)}),{deep:!0,immediate:!0}),h({submit:async()=>{const e=await T();if(await(null==e?void 0:e.validate().catch((e=>{})))){return await j()}}}),(o,a)=>(c(),p(r(e),{rules:x,onRegister:r(S),schema:g},null,8,["rules","onRegister","schema"]))}});export{h as _};
