import{E as e,a as l,F as o}from"./Form-1e4bda88.js";import{d as a,b as t,x as n,r as i,D as r,q as m,e as p,I as d,F as s,A as c,G as u,H as f,o as b,i as v,w as D,a as h,k as g}from"./index-c87642b8.js";import{_ as P}from"./ContentWrap.vue_vue_type_script_setup_true_lang-0a3f8e4e.js";import{E as k,a as y}from"./el-pagination-251be48f.js";import{E as x}from"./el-button-2fea6714.js";import{E as $,a as w}from"./tsxHelper-3d63d233.js";import{E as S}from"./el-input-d3d6378c.js";import{E as C}from"./el-message-box-d356b942.js";import"./el-overlay-188c92dd.js";import{g as j}from"./index-4605e5eb.js";import"./el-col-85ffc090.js";import"./el-popper-4d097879.js";import"./constants-46f1a00c.js";import"./el-tag-0687b0f1.js";import"./use-form-common-props-e31d12da.js";import"./el-input-number-280eb801.js";import"./use-form-item-62e12547.js";import"./el-divider-5b6c26db.js";import"./InputPassword-ecf39d8f.js";import"./style.css_vue_type_style_index_0_src_true_lang-c2f6aebf.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-4f69efdf.js";import"./IconPicker-b0418747.js";import"./vnode-c53197bf.js";import"./index-1926c1bd.js";import"./debounce-e5c60c2d.js";import"./aria-ecee1d93.js";import"./index-15d4531f.js";import"./el-card-b38eccf1.js";import"./index-17f18936.js";const T=a({__name:"DefaultForm",setup(a){const T=t(),{t:L}=g(),A=n((()=>T.getMobile)),I=i([]),_=(e,l)=>{l(e?I.value.filter(G(e)):I.value)};let E;const G=e=>l=>0===l.value.toLowerCase().indexOf(e.toLowerCase()),N=e=>{};r((()=>{I.value=[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}]}));const z=["a","b","c","d","e","f","g","h","i","j"],F=i(Array.from({length:1e3}).map(((e,l)=>({value:`Option ${l+1}`,label:`${z[l%10]}${l}`})))),B=i(Array.from({length:10}).map(((e,l)=>{const o=l+1;return{value:`Group ${o}`,label:`Group ${o}`,options:Array.from({length:10}).map(((e,l)=>({value:`Option ${l+1+10*o}`,label:`${z[l%10]}${l+1+10*o}`})))}}))),O=[{value:"guide",label:"Guide",children:[{value:"disciplines",label:"Disciplines",children:[{value:"consistency",label:"Consistency"},{value:"feedback",label:"Feedback"},{value:"efficiency",label:"Efficiency"},{value:"controllability",label:"Controllability"}]},{value:"navigation",label:"Navigation",children:[{value:"side nav",label:"Side Navigation"},{value:"top nav",label:"Top Navigation"}]}]},{value:"component",label:"Component",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout"},{value:"color",label:"Color"},{value:"typography",label:"Typography"},{value:"icon",label:"Icon"},{value:"button",label:"Button"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio"},{value:"checkbox",label:"Checkbox"},{value:"input",label:"Input"},{value:"input-number",label:"InputNumber"},{value:"select",label:"Select"},{value:"cascader",label:"Cascader"},{value:"switch",label:"Switch"},{value:"slider",label:"Slider"},{value:"time-picker",label:"TimePicker"},{value:"date-picker",label:"DatePicker"},{value:"datetime-picker",label:"DateTimePicker"},{value:"upload",label:"Upload"},{value:"rate",label:"Rate"},{value:"form",label:"Form"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table"},{value:"tag",label:"Tag"},{value:"progress",label:"Progress"},{value:"tree",label:"Tree"},{value:"pagination",label:"Pagination"},{value:"badge",label:"Badge"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert"},{value:"loading",label:"Loading"},{value:"message",label:"Message"},{value:"message-box",label:"MessageBox"},{value:"notification",label:"Notification"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu"},{value:"tabs",label:"Tabs"},{value:"breadcrumb",label:"Breadcrumb"},{value:"dropdown",label:"Dropdown"},{value:"steps",label:"Steps"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog"},{value:"tooltip",label:"Tooltip"},{value:"popover",label:"Popover"},{value:"card",label:"Card"},{value:"carousel",label:"Carousel"},{value:"collapse",label:"Collapse"}]}]}],R=()=>{const e=[];for(let l=1;l<=15;l++)e.push({value:l,desc:`Option ${l}`,disabled:l%4==0});return e},M=["2021-10-01","2021-10-02","2021-10-03","2021-10-04","2021-10-05","2021-10-06","2021-10-07"],V=({dayjs:e})=>M.includes(e.format("YYYY-MM-DD")),U=[{value:"1",label:"Level one 1",children:[{value:"1-1",label:"Level two 1-1",children:[{value:"1-1-1",label:"Level three 1-1-1"}]}]},{value:"2",label:"Level one 2",children:[{value:"2-1",label:"Level two 2-1",children:[{value:"2-1-1",label:"Level three 2-1-1"}]},{value:"2-2",label:"Level two 2-2",children:[{value:"2-2-1",label:"Level three 2-2-1"}]}]},{value:"3",label:"Level one 3",children:[{value:"3-1",label:"Level two 3-1",children:[{value:"3-1-1",label:"Level three 3-1-1"}]},{value:"3-2",label:"Level two 3-2",children:[{value:"3-2-1",label:"Level three 3-2-1"}]}]}];let Y=0;const J=i(""),W=m([{field:"field1",label:L("formDemo.input"),component:"Divider"},{field:"field2",label:L("formDemo.default"),component:"Input",componentProps:{formatter:e=>`$ ${e}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:e=>e.replace(/\$\s?|(,*)/g,"")}},{field:"field3",label:`${L("formDemo.icon")}1`,component:"Input",componentProps:{suffixIcon:p(d,{icon:"ep:calendar"},null),prefixIcon:p(d,{icon:"ep:share"},null)}},{field:"field4",label:`${L("formDemo.icon")}2`,component:"Input",componentProps:{slots:{suffix:()=>p(d,{icon:"ep:share"},null),prefix:()=>p(d,{icon:"ep:calendar"},null)}}},{field:"field5",label:L("formDemo.mixed"),component:"Input",componentProps:{slots:{prepend:()=>p(d,{icon:"ep:calendar"},null),append:()=>p(d,{icon:"ep:share"},null)}}},{field:"input-field7",label:L("formDemo.password"),component:"Input",componentProps:{showPassword:!0}},{field:"field6",label:L("formDemo.textarea"),component:"Input",componentProps:{type:"textarea",rows:2}},{field:"field7",label:L("formDemo.autocomplete"),component:"Divider"},{field:"field8",label:L("formDemo.default"),component:"Autocomplete",componentProps:{fetchSuggestions:_,on:{select:N}}},{field:"field9",label:L("formDemo.slot"),component:"Autocomplete",componentProps:{fetchSuggestions:_,on:{select:N},slots:{default:({item:e})=>p(s,null,[p("div",{class:"value"},[null==e?void 0:e.value]),p("span",{class:"link"},[null==e?void 0:e.link])])}}},{field:"autocomplete-field10",label:L("formDemo.remoteSearch"),component:"Autocomplete",componentProps:{fetchSuggestions:(e,l)=>{const o=e?I.value.filter(G(e)):I.value;clearTimeout(E),E=setTimeout((()=>{l(o)}),3e3*Math.random())},on:{select:N}}},{field:"field10",component:"Divider",label:L("formDemo.inputNumber")},{field:"field11",label:L("formDemo.default"),component:"InputNumber",value:0},{field:"field12",label:L("formDemo.position"),component:"InputNumber",componentProps:{controlsPosition:"right"},value:10},{field:"field13",label:L("formDemo.select"),component:"Divider"},{field:"field14",label:L("formDemo.default"),component:"Select",componentProps:{options:[{disabled:!0,label:"option1",value:"1"},{label:"option2",value:"2"}]}},{field:"field15",label:L("formDemo.slot"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}],slots:{default:e=>e.length?null==e?void 0:e.map((e=>p(k,{key:e.value,label:e.label,value:e.value},null))):null,prefix:()=>p(d,{icon:"ep:calendar"},null)}}},{field:"select-field18",label:L("formDemo.optionSlot"),component:"Select",componentProps:{options:[{value:"Beijing",label:"Beijing"},{value:"Shanghai",label:"Shanghai"},{value:"Nanjing",label:"Nanjing"},{value:"Chengdu",label:"Chengdu"},{value:"Shenzhen",label:"Shenzhen"},{value:"Guangzhou",label:"Guangzhou"}],slots:{optionDefault:e=>p(s,null,[p("span",{style:"float: left"},[e.label]),p("span",{style:"float: right; color: var(--el-text-color-secondary); font-size: 13px;"},[e.value])])}}},{field:"field16",label:L("formDemo.selectGroup"),component:"Select",componentProps:{options:[{label:"option1",options:[{disabled:!0,label:"option1-1",value:"1-1"},{label:"option1-2",value:"1-2"}]},{label:"option2",options:[{label:"option2-1",value:"2-1"},{label:"option2-2",value:"2-2"}]}]}},{field:"field17",label:`${L("formDemo.selectGroup")} ${L("formDemo.slot")}`,component:"Select",componentProps:{options:[{label:"option1",options:[{label:"option1-1",value:"1-1"},{label:"option1-2",value:"1-2"}]},{label:"option2",options:[{label:"option2-1",value:"2-1"},{label:"option2-2",value:"2-2"}]}],slots:{optionGroupDefault:e=>p(y,{key:e.label,label:`${e.label} ${e.label}`},{default:()=>{var l;return[null==(l=null==e?void 0:e.options)?void 0:l.map((e=>p(k,{key:e.value,label:e.label,value:e.value},null)))]}})}}},{field:"field18",label:`${L("formDemo.selectV2")}`,component:"Divider"},{field:"field19",label:L("formDemo.default"),component:"SelectV2",componentProps:{value:void 0,options:F.value}},{field:"field20",label:L("formDemo.slot"),component:"SelectV2",componentProps:{options:F.value,slots:{default:e=>p(s,null,[p("span",{style:"margin-right: 8px"},[null==e?void 0:e.label]),p("span",{style:"color: var(--el-text-color-secondary); font-size: 13px"},[null==e?void 0:e.value])])}}},{field:"field21",label:L("formDemo.selectGroup"),component:"SelectV2",componentProps:{options:B.value}},{field:"field22",label:`${L("formDemo.selectGroup")} ${L("formDemo.slot")}`,component:"SelectV2",componentProps:{options:B.value,slots:{default:e=>p(s,null,[p("span",{style:"margin-right: 8px"},[null==e?void 0:e.label]),p("span",{style:"color: var(--el-text-color-secondary); font-size: 13px"},[null==e?void 0:e.value])])}}},{field:"field23",label:L("formDemo.cascader"),component:"Divider"},{field:"field24",label:L("formDemo.default"),component:"Cascader",componentProps:{options:O,props:{multiple:!0}}},{field:"field25",label:L("formDemo.slot"),component:"Cascader",componentProps:{options:O,slots:{default:({data:e,node:l})=>p(s,null,[p("span",null,[e.label]),l.isLeaf?null:p("span",null,[c(" ("),e.children.length,c(") ")])])}}},{field:"field26",label:L("formDemo.switch"),component:"Divider"},{field:"field27",label:L("formDemo.default"),component:"Switch",value:!1},{field:"field28",label:L("formDemo.icon"),component:"Switch",value:!1,componentProps:{activeIcon:p(d,{icon:"ep:check"},null),inactiveIcon:p(d,{icon:"ep:close"},null)}},{field:"field29",label:L("formDemo.rate"),component:"Divider"},{field:"field30",label:L("formDemo.default"),component:"Rate",value:0},{field:"field31",label:L("formDemo.icon"),component:"Rate",value:null,componentProps:{voidIcon:p(d,{icon:"ep:chat-round"},null),icons:[p(d,{icon:"ep:chat-round"},null),p(d,{icon:"ep:chat-line-round"},null),p(d,{icon:"ep:chat-dot-round"},null)]}},{field:"field32",label:L("formDemo.colorPicker"),component:"Divider"},{field:"field33",label:L("formDemo.default"),component:"ColorPicker"},{field:"field34",label:L("formDemo.transfer"),component:"Divider"},{field:"field35",label:L("formDemo.default"),component:"Transfer",componentProps:{props:{key:"value",label:"desc"},data:R()},value:[],colProps:{span:24}},{field:"field36",label:L("formDemo.slot"),component:"Transfer",componentProps:{props:{key:"value",label:"desc"},filterable:!0,leftDefaultChecked:[2,3],rightDefaultChecked:[1],titles:["Source","Target"],buttonTexts:["To Left","To Right"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:R(),slots:{default:({option:e})=>p("span",null,[e.value,c(" - "),e.desc]),leftFooter:()=>p(x,{class:"transfer-footer",size:"small"},{default:()=>[c("Operation")]}),rightFooter:()=>p(x,{class:"transfer-footer",size:"small"},{default:()=>[c("Operation")]})}},value:[1],colProps:{span:24}},{field:"field37",label:`${L("formDemo.render")}`,component:"Transfer",componentProps:{props:{key:"value",label:"desc",disabled:"disabled"},leftDefaultChecked:[2,3],rightDefaultChecked:[1],data:R(),renderContent:(e,l)=>e("span",null,`${l.value} - ${l.desc}`)},value:[1],colProps:{span:24}},{field:"field38",label:L("formDemo.radio"),component:"Divider"},{field:"field39-2",label:L("formDemo.radioGroup"),component:"RadioGroup",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field39-3",label:`${L("formDemo.radioGroup")} ${L("formDemo.slot")}`,component:"RadioGroup",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}],slots:{default:l=>null==l?void 0:l.map((l=>p(e,{label:l.value},{default:()=>[l.label,c("("),l.value,c(")")]})))}}},{field:"field40",label:L("formDemo.button"),component:"RadioButton",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field40-1",label:`${L("formDemo.button")} ${L("formDemo.slot")}`,component:"RadioButton",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}],slots:{default:e=>null==e?void 0:e.map((e=>p(l,{label:e.value},{default:()=>[e.label,c("("),e.value,c(")")]})))}}},{field:"field41",label:L("formDemo.checkbox"),component:"Divider"},{field:"field42-2",label:L("formDemo.checkboxGroup"),component:"CheckboxGroup",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}},{field:"field42-3",label:`${L("formDemo.checkboxGroup")} ${L("formDemo.slot")}`,component:"CheckboxGroup",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}],slots:{default:e=>null==e?void 0:e.map((e=>p($,{label:e.value},{default:()=>[e.label,c("("),e.value,c(")")]})))}}},{field:"field43",label:L("formDemo.button"),component:"CheckboxButton",value:[],componentProps:{options:[{disabled:!0,label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"23"}]}},{field:"field43-1",label:`${L("formDemo.button")} ${L("formDemo.slot")}`,component:"CheckboxButton",value:[],componentProps:{options:[{disabled:!0,label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"23"}],slots:{default:e=>null==e?void 0:e.map((e=>p(w,{label:e.value},{default:()=>[e.label,c("("),e.value,c(")")]})))}}},{field:"field44",component:"Divider",label:L("formDemo.slider")},{field:"field45",component:"Slider",label:L("formDemo.default"),value:0},{field:"field46",component:"Divider",label:L("formDemo.datePicker")},{field:"field47",component:"DatePicker",label:L("formDemo.default"),componentProps:{type:"date"}},{field:"field48",component:"DatePicker",label:L("formDemo.shortcuts"),componentProps:{type:"date",disabledDate:e=>e.getTime()>Date.now(),shortcuts:[{text:L("formDemo.today"),value:new Date},{text:L("formDemo.yesterday"),value:()=>{const e=new Date;return e.setTime(e.getTime()-864e5),e}},{text:L("formDemo.aWeekAgo"),value:()=>{const e=new Date;return e.setTime(e.getTime()-6048e5),e}}]}},{field:"field47-1",component:"DatePicker",label:L("formDemo.slot"),value:"2021-10-29",componentProps:{type:"date",slots:{default:e=>p("div",{class:{cell:!0,current:e.isCurrent}},[p("span",{class:"text"},[e.text]),V(e)?p("span",{class:"holiday"},null):null])}}},{field:"field49",component:"DatePicker",label:L("formDemo.week"),componentProps:{type:"week",format:`[${L("formDemo.week")}]`}},{field:"field50",component:"DatePicker",label:L("formDemo.year"),componentProps:{type:"year"}},{field:"field51",component:"DatePicker",label:L("formDemo.month"),componentProps:{type:"month"}},{field:"field52",component:"DatePicker",label:L("formDemo.dates"),componentProps:{type:"dates"}},{field:"field53",component:"DatePicker",label:L("formDemo.daterange"),componentProps:{type:"daterange"}},{field:"field54",component:"DatePicker",label:L("formDemo.monthrange"),componentProps:{type:"monthrange"}},{field:"field56",component:"Divider",label:L("formDemo.dateTimePicker")},{field:"field57",component:"DatePicker",label:L("formDemo.default"),componentProps:{type:"datetime"}},{field:"field58",component:"DatePicker",label:L("formDemo.shortcuts"),componentProps:{type:"datetime",shortcuts:[{text:L("formDemo.today"),value:new Date},{text:L("formDemo.yesterday"),value:()=>{const e=new Date;return e.setTime(e.getTime()-864e5),e}},{text:L("formDemo.aWeekAgo"),value:()=>{const e=new Date;return e.setTime(e.getTime()-6048e5),e}}]}},{field:"field59",component:"DatePicker",label:L("formDemo.dateTimerange"),componentProps:{type:"datetimerange"}},{field:"field60",component:"Divider",label:L("formDemo.timePicker")},{field:"field61",component:"TimePicker",label:L("formDemo.default")},{field:"field62",component:"Divider",label:L("formDemo.timeSelect")},{field:"field63",component:"TimeSelect",label:L("formDemo.default")},{field:"field64",component:"Divider",label:L("formDemo.richText")},{field:"field65",component:"Editor",value:"hello world",label:L("formDemo.default"),colProps:{span:24}},{field:"field66",component:"Divider",label:L("formDemo.inputPassword")},{field:"field67",component:"InputPassword",label:L("formDemo.default"),componentProps:{strength:!0}},{field:"field68",component:"Divider",label:`${L("formDemo.form")} ${L("formDemo.slot")}`},{field:"field69",component:"Input",label:"label",formItemProps:{slots:{label:({label:e})=>p("div",{class:"custom-label"},[p("span",{class:"label-text"},[c("custom "),e])])}}},{field:"field69-1",component:"Input",label:"custom formItem",formItemProps:{slots:{default:e=>p(S,{modelValue:e["field69-1"],"onUpdate:modelValue":l=>e["field69-1"]=l},null)}}},{field:"field70",component:"Divider",label:`${L("formDemo.remoteLoading")}`},{field:"field71",label:`${L("formDemo.select")}`,component:"Select",componentProps:{options:[]},optionApi:async()=>(await j()).data},{field:"field72",label:`${L("formDemo.selectV2")}`,component:"SelectV2",componentProps:{options:[]},optionApi:async()=>(await j()).data},{field:"field73",label:`${L("formDemo.checkboxGroup")}`,component:"CheckboxGroup",componentProps:{options:[]},optionApi:async()=>(await j()).data},{field:"field74",label:`${L("formDemo.radioGroup")}`,component:"RadioGroup",componentProps:{options:[]},optionApi:async()=>(await j()).data},{field:"field82",label:`${L("formDemo.treeSelect")}`,component:"TreeSelect",optionApi:async()=>await new Promise((e=>{setTimeout((()=>{e(U)}),3e3)}))},{field:"field75",component:"Divider",label:`${L("formDemo.treeSelect")}`},{field:"field76",component:"TreeSelect",label:`${L("formDemo.default")}`,componentProps:{renderAfterExpand:!1,data:U}},{field:"field76",component:"TreeSelect",label:`${L("formDemo.showCheckbox")}`,componentProps:{renderAfterExpand:!1,showCheckbox:!0,data:U}},{field:"field77",component:"TreeSelect",label:`${L("formDemo.selectAnyLevel")}`,componentProps:{renderAfterExpand:!1,showCheckbox:!0,checkStrictly:!0,checkOnClickNode:!0,data:U}},{field:"field78",component:"TreeSelect",label:`${L("formDemo.multiple")}`,componentProps:{renderAfterExpand:!1,multiple:!0,showCheckbox:!0,checkStrictly:!0,checkOnClickNode:!0,data:U}},{field:"field79",component:"TreeSelect",label:`${L("formDemo.filterable")}`,componentProps:{renderAfterExpand:!1,multiple:!0,filterable:!0,showCheckbox:!0,checkStrictly:!0,checkOnClickNode:!0,filterNodeMethod:(e,l)=>l.label.includes(e),data:U}},{field:"field80",component:"TreeSelect",label:`${L("formDemo.customContent")}`,componentProps:{renderAfterExpand:!1,multiple:!0,filterable:!0,showCheckbox:!0,checkStrictly:!0,checkOnClickNode:!0,filterNodeMethod:(e,l)=>l.label.includes(e),slots:{default:({data:{label:e}})=>p(s,null,[e,p("span",{style:"color: gray"},[c("(suffix)")])])},data:U}},{field:"field81",component:"TreeSelect",label:`${L("formDemo.lazyLoad")}`,componentProps:{renderAfterExpand:!1,lazy:!0,load:(e,l)=>{if(e.isLeaf)return l([]);setTimeout((()=>{l([{value:++Y,label:`lazy load node${Y}`},{value:++Y,label:`lazy load node${Y}`,isLeaf:!0}])}),400)},multiple:!0,filterable:!0,showCheckbox:!0,checkStrictly:!0,checkOnClickNode:!0,filterNodeMethod:(e,l)=>l.label.includes(e),slots:{default:({data:{label:e}})=>p(s,null,[e,p("span",{style:"color: gray"},[c("(suffix)")])])},data:U}},{field:"field82",component:"Divider",label:`${L("formDemo.upload")}`},{field:"field83",component:"Upload",label:`${L("formDemo.default")}`,componentProps:{limit:3,action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",fileList:[{name:"element-plus-logo.svg",url:"https://element-plus.org/images/element-plus-logo.svg"},{name:"element-plus-logo2.svg",url:"https://element-plus.org/images/element-plus-logo.svg"}],multiple:!0,onPreview:e=>{},onRemove:e=>{},beforeRemove:e=>C.confirm(`Cancel the transfer of ${e.name} ?`).then((()=>!0),(()=>!1)),onExceed:(e,l)=>{u.warning(`The limit is 3, you selected ${e.length} files this time, add up to ${e.length+l.length} totally`)},slots:{default:()=>p(x,{type:"primary"},{default:()=>[c("Click to upload")]}),tip:()=>p("div",{class:"el-upload__tip"},[c("jpg/png files with a size less than 500KB.")])}}},{field:"field84",component:"Upload",label:`${L("formDemo.userAvatar")}`,componentProps:{action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",showFileList:!1,onSuccess:(e,l)=>{J.value=URL.createObjectURL(l.raw)},beforeUpload:e=>"image/jpeg"!==e.type?(u.error("Avatar picture must be JPG format!"),!1):!(e.size/1024/1024>2)||(u.error("Avatar picture size can not exceed 2MB!"),!1),slots:{default:()=>p(s,null,[J.value?p("img",{src:J.value,class:"avatar"},null):null,J.value?null:p(f,{class:"avatar-uploader-icon",size:"large"},{default:()=>[c("add")]})])}}},{field:"field85",component:"Divider",label:L("formDemo.jsonEditor")},{field:"field86",component:"JsonEditor",label:L("formDemo.default"),value:{a:1,b:2}},{field:"field87",component:"Divider",label:L("formDemo.iconPicker")},{field:"field88",component:"IconPicker",label:L("formDemo.default"),value:"tdesign:archway"}]);return(e,l)=>(b(),v(h(P),{title:h(L)("formDemo.defaultForm"),message:h(L)("formDemo.formDes")},{default:D((()=>[p(h(o),{schema:W,"label-width":"auto","label-position":A.value?"top":"right"},null,8,["schema","label-position"])])),_:1},8,["title","message"]))}});export{T as default};
