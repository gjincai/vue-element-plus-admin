import{F as e}from"./Form-1e4bda88.js";import{_ as o}from"./ContentWrap.vue_vue_type_script_setup_true_lang-0a3f8e4e.js";import{d as l,q as t,r as a,o as i,c as m,e as r,w as n,a as s,A as p,t as d,F as f,k as u,_ as c}from"./index-c87642b8.js";import{u as v}from"./useForm-4fdd48d6.js";import{E as b}from"./el-button-2fea6714.js";import{u as _}from"./useValidator-5852dc3b.js";import{g as D}from"./index-4605e5eb.js";import"./el-col-85ffc090.js";import"./el-input-d3d6378c.js";import"./use-form-item-62e12547.js";import"./constants-46f1a00c.js";import"./use-form-common-props-e31d12da.js";import"./el-popper-4d097879.js";import"./el-tag-0687b0f1.js";import"./tsxHelper-3d63d233.js";import"./el-pagination-251be48f.js";import"./index-1926c1bd.js";import"./debounce-e5c60c2d.js";import"./el-input-number-280eb801.js";import"./el-divider-5b6c26db.js";import"./InputPassword-ecf39d8f.js";import"./style.css_vue_type_style_index_0_src_true_lang-c2f6aebf.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-4f69efdf.js";import"./IconPicker-b0418747.js";import"./vnode-c53197bf.js";import"./aria-ecee1d93.js";import"./index-15d4531f.js";import"./el-card-b38eccf1.js";import"./index-17f18936.js";const h=c(l({__name:"UseFormDemo",setup(l){const{required:c}=_(),{t:h}=u(),j=[{value:"1",label:"Level one 1",children:[{value:"1-1",label:"Level two 1-1",children:[{value:"1-1-1",label:"Level three 1-1-1"}]}]},{value:"2",label:"Level one 2",children:[{value:"2-1",label:"Level two 2-1",children:[{value:"2-1-1",label:"Level three 2-1-1"}]},{value:"2-2",label:"Level two 2-2",children:[{value:"2-2-1",label:"Level three 2-2-1"}]}]},{value:"3",label:"Level one 3",children:[{value:"3-1",label:"Level two 3-1",children:[{value:"3-1-1",label:"Level three 3-1-1"}]},{value:"3-2",label:"Level two 3-2",children:[{value:"3-2-1",label:"Level three 3-2-1"}]}]}],k=t([{field:"field1",label:h("formDemo.input"),component:"Input",formItemProps:{rules:[c()]}},{field:"field2",label:h("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]},formItemProps:{rules:[c()]}},{field:"field3",label:h("formDemo.radio"),component:"RadioGroup",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:h("formDemo.checkbox"),component:"CheckboxGroup",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}},{field:"field5",component:"DatePicker",label:h("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:h("formDemo.timeSelect")},{field:"field7",label:`${h("formDemo.treeSelect")}`,component:"TreeSelect",optionApi:async()=>await new Promise((e=>{setTimeout((()=>{e(j)}),3e3)}))}]),{formRegister:C,formMethods:g}=v(),{setProps:$,delSchema:w,addSchema:x,setValues:y,setSchema:P,getComponentExpose:L,getFormItemExpose:F,getElFormExpose:I}=g,S=e=>{$({labelWidth:e})},V=e=>{$({size:e})},E=e=>{$({disabled:e})},R=e=>{e?w("field2"):e||"field2"===k[1].field||x({field:"field2",label:h("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},1)},z=async e=>{const o=await I();e?null==o||o.resetFields():y({field1:"field1",field2:"2",field3:"2",field4:["1","3"],field5:"2022-01-27",field6:"17:00"})},W=a(7),q=()=>{P([{field:"field2",path:"label",value:`${h("formDemo.select")} ${W.value}`},{field:"field2",path:"componentProps.options",value:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}]),W.value++},A=()=>{s(W)%2==0?x({field:`field${s(W)}`,label:`${h("formDemo.input")}${s(W)}`,component:"Input"}):x({field:`field${s(W)}`,label:`${h("formDemo.input")}${s(W)}`,component:"Input"},s(W)),W.value++},T=async()=>{const e=await I();null==e||e.validate((e=>{}))},U=async()=>{const e=await I();null==e||e.resetFields()},G=async()=>{const e=await D();e&&P([{field:"field2",path:"componentProps.options",value:e.data}])},O=async()=>{const e=await L("field1");null==e||e.focus()},H=async()=>{const e=await F("field1"),o=await L("field1");null==o||o.focus(),null==e||e.validate("focus",(e=>{}))},J=(e,o,l)=>{};return(l,t)=>(i(),m(f,null,[r(s(o),{title:`UseForm ${s(h)("formDemo.operate")}`,style:{"margin-bottom":"20px"}},{default:n((()=>[r(s(b),{onClick:t[0]||(t[0]=e=>S(150))},{default:n((()=>[p(d(s(h)("formDemo.change"))+" labelWidth",1)])),_:1}),r(s(b),{onClick:t[1]||(t[1]=e=>S("auto"))},{default:n((()=>[p(d(s(h)("formDemo.restore"))+" labelWidth",1)])),_:1}),r(s(b),{onClick:t[2]||(t[2]=e=>V("large"))},{default:n((()=>[p(d(s(h)("formDemo.change"))+" size",1)])),_:1}),r(s(b),{onClick:t[3]||(t[3]=e=>V("default"))},{default:n((()=>[p(d(s(h)("formDemo.restore"))+" size",1)])),_:1}),r(s(b),{onClick:t[4]||(t[4]=e=>E(!0))},{default:n((()=>[p(d(s(h)("formDemo.disabled")),1)])),_:1}),r(s(b),{onClick:t[5]||(t[5]=e=>E(!1))},{default:n((()=>[p(d(s(h)("formDemo.disablement")),1)])),_:1}),r(s(b),{onClick:t[6]||(t[6]=e=>R(!0))},{default:n((()=>[p(d(s(h)("formDemo.delete"))+" "+d(s(h)("formDemo.select")),1)])),_:1}),r(s(b),{onClick:t[7]||(t[7]=e=>R(!1))},{default:n((()=>[p(d(s(h)("formDemo.add"))+" "+d(s(h)("formDemo.select")),1)])),_:1}),r(s(b),{onClick:t[8]||(t[8]=e=>z(!1))},{default:n((()=>[p(d(s(h)("formDemo.setValue")),1)])),_:1}),r(s(b),{onClick:t[9]||(t[9]=e=>z(!0))},{default:n((()=>[p(d(s(h)("formDemo.resetValue")),1)])),_:1}),r(s(b),{onClick:q},{default:n((()=>[p(d(s(h)("formDemo.set"))+" "+d(s(h)("formDemo.select"))+" label ",1)])),_:1}),r(s(b),{onClick:A},{default:n((()=>[p(d(s(h)("formDemo.add"))+" "+d(s(h)("formDemo.subitem")),1)])),_:1}),r(s(b),{onClick:T},{default:n((()=>[p(d(s(h)("formDemo.formValidation")),1)])),_:1}),r(s(b),{onClick:U},{default:n((()=>[p(d(s(h)("formDemo.verifyReset")),1)])),_:1}),r(s(b),{onClick:G},{default:n((()=>[p(d(`${s(h)("formDemo.select")} ${s(h)("searchDemo.dynamicOptions")}`),1)])),_:1}),r(s(b),{onClick:O},{default:n((()=>[p(d(`${s(h)("formDemo.input")} ${s(h)("formDemo.focus")}`),1)])),_:1}),r(s(b),{onClick:H},{default:n((()=>[p(d(`${s(h)("formDemo.input")} ${s(h)("formDemo.formValidation")}`),1)])),_:1})])),_:1},8,["title"]),r(s(o),{title:`UseForm ${s(h)("formDemo.example")}`},{default:n((()=>[r(s(e),{schema:k,onRegister:s(C),onValidate:J},null,8,["schema","onRegister"])])),_:1},8,["title"])],64))}}),[["__scopeId","data-v-07b0758e"]]);export{h as default};
