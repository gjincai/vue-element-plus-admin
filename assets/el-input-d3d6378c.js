import{b2 as e,x as a,b0 as t,b_ as o,r as l,b7 as n,M as s,bw as r,ar as i,aY as u,af as p,aP as d,ah as c,bl as f,bj as v,aj as m,d as y,aE as b,aw as x,al as g,bt as h,b$ as w,c0 as S,av as k,N as z,am as C,D as I,bd as F,Z as $,b5 as E,o as B,c as P,Q as j,F as M,n as V,a as _,ap as R,f as A,i as N,w as H,$ as O,H as T,P as W,e as K,aO as D,aI as L,aC as Y,t as Z,W as q,aq as Q,aD as U,aA as G}from"./index-c87642b8.js";import{u as J,a as X}from"./use-form-item-62e12547.js";import{u as ee,a as ae}from"./use-form-common-props-e31d12da.js";import{i as te}from"./el-popper-4d097879.js";const oe=()=>e&&/firefox/i.test(window.navigator.userAgent),le="update:modelValue",ne="change",se="input",re=e=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e),ie=["class","style"],ue=/^on[A-Z]/,pe=(e={})=>{const{excludeListeners:l=!1,excludeKeys:n}=e,s=a((()=>((null==n?void 0:n.value)||[]).concat(ie))),r=t();return a(r?()=>{var e;return o(Object.entries(null==(e=r.proxy)?void 0:e.$attrs).filter((([e])=>!(s.value.includes(e)||l&&ue.test(e)))))}:()=>({}))};function de(e,{afterFocus:a,beforeBlur:o,afterBlur:u}={}){const p=t(),{emit:d}=p,c=n(),f=l(!1);return s(c,(e=>{e&&e.setAttribute("tabindex","-1")})),r(c,"click",(()=>{var a;null==(a=e.value)||a.focus()})),{wrapperRef:c,isFocused:f,handleFocus:e=>{f.value||(f.value=!0,d("focus",e),null==a||a())},handleBlur:e=>{var a;!!i(o)&&o(e)||e.relatedTarget&&(null==(a=c.value)?void 0:a.contains(e.relatedTarget))||(f.value=!1,d("blur",e),null==u||u())}}}let ce;const fe=`\n  height:0 !important;\n  visibility:hidden !important;\n  ${oe()?"":"overflow:hidden !important;"}\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n`,ve=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function me(e,a=1,t){var o;ce||(ce=document.createElement("textarea"),document.body.appendChild(ce));const{paddingSize:l,borderSize:n,boxSizing:s,contextStyle:r}=function(e){const a=window.getComputedStyle(e),t=a.getPropertyValue("box-sizing"),o=Number.parseFloat(a.getPropertyValue("padding-bottom"))+Number.parseFloat(a.getPropertyValue("padding-top")),l=Number.parseFloat(a.getPropertyValue("border-bottom-width"))+Number.parseFloat(a.getPropertyValue("border-top-width"));return{contextStyle:ve.map((e=>`${e}:${a.getPropertyValue(e)}`)).join(";"),paddingSize:o,borderSize:l,boxSizing:t}}(e);ce.setAttribute("style",`${r};${fe}`),ce.value=e.value||e.placeholder||"";let i=ce.scrollHeight;const p={};"border-box"===s?i+=n:"content-box"===s&&(i-=l),ce.value="";const d=ce.scrollHeight-l;if(u(a)){let e=d*a;"border-box"===s&&(e=e+l+n),i=Math.max(e,i),p.minHeight=`${e}px`}if(u(t)){let e=d*t;"border-box"===s&&(e=e+l+n),i=Math.min(e,i)}return p.height=`${i}px`,null==(o=ce.parentNode)||o.removeChild(ce),ce=void 0,p}const ye=p({id:{type:String,default:void 0},size:d,disabled:Boolean,modelValue:{type:c([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:c([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:f},prefixIcon:{type:f},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:c([Object,Array,String]),default:()=>v({})},autofocus:{type:Boolean,default:!1}}),be={[le]:e=>m(e),input:e=>m(e),change:e=>m(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},xe=["role"],ge=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],he=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],we=y({name:"ElInput",inheritAttrs:!1});const Se=G(Q(y({...we,props:ye,emits:be,setup(t,{expose:o,emit:r}){const i=t,u=b(),p=x(),d=a((()=>{const e={};return"combobox"===i.containerRole&&(e["aria-haspopup"]=u["aria-haspopup"],e["aria-owns"]=u["aria-owns"],e["aria-expanded"]=u["aria-expanded"]),e})),c=a((()=>["textarea"===i.type?se.b():ne.b(),ne.m(G.value),ne.is("disabled",oe.value),ne.is("exceed",Ae.value),{[ne.b("group")]:p.prepend||p.append,[ne.bm("group","append")]:p.append,[ne.bm("group","prepend")]:p.prepend,[ne.m("prefix")]:p.prefix||i.prefixIcon,[ne.m("suffix")]:p.suffix||i.suffixIcon||i.clearable||i.showPassword,[ne.bm("suffix","password-clear")]:Me.value&&Ve.value},u.class])),f=a((()=>[ne.e("wrapper"),ne.is("focus",ke.value)])),v=pe({excludeKeys:a((()=>Object.keys(d.value)))}),{form:m,formItem:y}=J(),{inputId:Q}=X(i,{formItemContext:y}),G=ee(),oe=ae(),ne=g("input"),se=g("textarea"),ie=n(),ue=n(),ce=l(!1),fe=l(!1),ve=l(!1),ye=l(),be=n(i.inputStyle),we=a((()=>ie.value||ue.value)),{wrapperRef:Se,isFocused:ke,handleFocus:ze,handleBlur:Ce}=de(we,{afterBlur(){var e;i.validateEvent&&(null==(e=null==y?void 0:y.validate)||e.call(y,"blur").catch((e=>C())))}}),Ie=a((()=>{var e;return null!=(e=null==m?void 0:m.statusIcon)&&e})),Fe=a((()=>(null==y?void 0:y.validateState)||"")),$e=a((()=>Fe.value&&h[Fe.value])),Ee=a((()=>ve.value?w:S)),Be=a((()=>[u.style,i.inputStyle])),Pe=a((()=>[i.inputStyle,be.value,{resize:i.resize}])),je=a((()=>te(i.modelValue)?"":String(i.modelValue))),Me=a((()=>i.clearable&&!oe.value&&!i.readonly&&!!je.value&&(ke.value||ce.value))),Ve=a((()=>i.showPassword&&!oe.value&&!i.readonly&&!!je.value&&(!!je.value||ke.value))),_e=a((()=>i.showWordLimit&&!!v.value.maxlength&&("text"===i.type||"textarea"===i.type)&&!oe.value&&!i.readonly&&!i.showPassword)),Re=a((()=>je.value.length)),Ae=a((()=>!!_e.value&&Re.value>Number(v.value.maxlength))),Ne=a((()=>!!p.suffix||!!i.suffixIcon||Me.value||i.showPassword||_e.value||!!Fe.value&&Ie.value)),[He,Oe]=function(e){const a=l();return[function(){if(null==e.value)return;const{selectionStart:t,selectionEnd:o,value:l}=e.value;if(null==t||null==o)return;const n=l.slice(0,Math.max(0,t)),s=l.slice(Math.max(0,o));a.value={selectionStart:t,selectionEnd:o,value:l,beforeTxt:n,afterTxt:s}},function(){if(null==e.value||null==a.value)return;const{value:t}=e.value,{beforeTxt:o,afterTxt:l,selectionStart:n}=a.value;if(null==o||null==l||null==n)return;let s=t.length;if(t.endsWith(l))s=t.length-l.length;else if(t.startsWith(o))s=o.length;else{const e=o[n-1],a=t.indexOf(e,n-1);-1!==a&&(s=a+1)}e.value.setSelectionRange(s,s)}]}(ie);k(ue,(e=>{if(We(),!_e.value||"both"!==i.resize)return;const a=e[0],{width:t}=a.contentRect;ye.value={right:`calc(100% - ${t+15+6}px)`}}));const Te=()=>{const{type:a,autosize:t}=i;if(e&&"textarea"===a&&ue.value)if(t){const e=U(t)?t.minRows:void 0,a=U(t)?t.maxRows:void 0,o=me(ue.value,e,a);be.value={overflowY:"hidden",...o},z((()=>{ue.value.offsetHeight,be.value=o}))}else be.value={minHeight:me(ue.value).minHeight}},We=(e=>{let a=!1;return()=>{var t;if(a||!i.autosize)return;null===(null==(t=ue.value)?void 0:t.offsetParent)||(e(),a=!0)}})(Te),Ke=()=>{const e=we.value,a=i.formatter?i.formatter(je.value):je.value;e&&e.value!==a&&(e.value=a)},De=async e=>{He();let{value:a}=e.target;i.formatter&&(a=i.parser?i.parser(a):a),fe.value||(a!==je.value?(r(le,a),r("input",a),await z(),Ke(),Oe()):Ke())},Le=e=>{r("change",e.target.value)},Ye=e=>{r("compositionstart",e),fe.value=!0},Ze=e=>{var a;r("compositionupdate",e);const t=null==(a=e.target)?void 0:a.value,o=t[t.length-1]||"";fe.value=!re(o)},qe=e=>{r("compositionend",e),fe.value&&(fe.value=!1,De(e))},Qe=()=>{ve.value=!ve.value,Ue()},Ue=async()=>{var e;await z(),null==(e=we.value)||e.focus()},Ge=e=>{ce.value=!1,r("mouseleave",e)},Je=e=>{ce.value=!0,r("mouseenter",e)},Xe=e=>{r("keydown",e)},ea=()=>{r(le,""),r("change",""),r("clear"),r("input","")};return s((()=>i.modelValue),(()=>{var e;z((()=>Te())),i.validateEvent&&(null==(e=null==y?void 0:y.validate)||e.call(y,"change").catch((e=>C())))})),s(je,(()=>Ke())),s((()=>i.type),(async()=>{await z(),Ke(),Te()})),I((()=>{!i.formatter&&i.parser,Ke(),z(Te)})),o({input:ie,textarea:ue,ref:we,textareaStyle:Pe,autosize:F(i,"autosize"),focus:Ue,blur:()=>{var e;return null==(e=we.value)?void 0:e.blur()},select:()=>{var e;null==(e=we.value)||e.select()},clear:ea,resizeTextarea:Te}),(e,a)=>$((B(),P("div",W(_(d),{class:_(c),style:_(Be),role:e.containerRole,onMouseenter:Je,onMouseleave:Ge}),[j(" input "),"textarea"!==e.type?(B(),P(M,{key:0},[j(" prepend slot "),e.$slots.prepend?(B(),P("div",{key:0,class:V(_(ne).be("group","prepend"))},[R(e.$slots,"prepend")],2)):j("v-if",!0),A("div",{ref_key:"wrapperRef",ref:Se,class:V(_(f))},[j(" prefix slot "),e.$slots.prefix||e.prefixIcon?(B(),P("span",{key:0,class:V(_(ne).e("prefix"))},[A("span",{class:V(_(ne).e("prefix-inner"))},[R(e.$slots,"prefix"),e.prefixIcon?(B(),N(_(T),{key:0,class:V(_(ne).e("icon"))},{default:H((()=>[(B(),N(O(e.prefixIcon)))])),_:1},8,["class"])):j("v-if",!0)],2)],2)):j("v-if",!0),A("input",W({id:_(Q),ref_key:"input",ref:ie,class:_(ne).e("inner")},_(v),{type:e.showPassword?ve.value?"text":"password":e.type,disabled:_(oe),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:i.form,autofocus:i.autofocus,onCompositionstart:Ye,onCompositionupdate:Ze,onCompositionend:qe,onInput:De,onFocus:a[0]||(a[0]=(...e)=>_(ze)&&_(ze)(...e)),onBlur:a[1]||(a[1]=(...e)=>_(Ce)&&_(Ce)(...e)),onChange:Le,onKeydown:Xe}),null,16,ge),j(" suffix slot "),_(Ne)?(B(),P("span",{key:1,class:V(_(ne).e("suffix"))},[A("span",{class:V(_(ne).e("suffix-inner"))},[_(Me)&&_(Ve)&&_(_e)?j("v-if",!0):(B(),P(M,{key:0},[R(e.$slots,"suffix"),e.suffixIcon?(B(),N(_(T),{key:0,class:V(_(ne).e("icon"))},{default:H((()=>[(B(),N(O(e.suffixIcon)))])),_:1},8,["class"])):j("v-if",!0)],64)),_(Me)?(B(),N(_(T),{key:1,class:V([_(ne).e("icon"),_(ne).e("clear")]),onMousedown:L(_(Y),["prevent"]),onClick:ea},{default:H((()=>[K(_(D))])),_:1},8,["class","onMousedown"])):j("v-if",!0),_(Ve)?(B(),N(_(T),{key:2,class:V([_(ne).e("icon"),_(ne).e("password")]),onClick:Qe},{default:H((()=>[(B(),N(O(_(Ee))))])),_:1},8,["class"])):j("v-if",!0),_(_e)?(B(),P("span",{key:3,class:V(_(ne).e("count"))},[A("span",{class:V(_(ne).e("count-inner"))},Z(_(Re))+" / "+Z(_(v).maxlength),3)],2)):j("v-if",!0),_(Fe)&&_($e)&&_(Ie)?(B(),N(_(T),{key:4,class:V([_(ne).e("icon"),_(ne).e("validateIcon"),_(ne).is("loading","validating"===_(Fe))])},{default:H((()=>[(B(),N(O(_($e))))])),_:1},8,["class"])):j("v-if",!0)],2)],2)):j("v-if",!0)],2),j(" append slot "),e.$slots.append?(B(),P("div",{key:1,class:V(_(ne).be("group","append"))},[R(e.$slots,"append")],2)):j("v-if",!0)],64)):(B(),P(M,{key:1},[j(" textarea "),A("textarea",W({id:_(Q),ref_key:"textarea",ref:ue,class:_(se).e("inner")},_(v),{tabindex:e.tabindex,disabled:_(oe),readonly:e.readonly,autocomplete:e.autocomplete,style:_(Pe),"aria-label":e.label,placeholder:e.placeholder,form:i.form,autofocus:i.autofocus,onCompositionstart:Ye,onCompositionupdate:Ze,onCompositionend:qe,onInput:De,onFocus:a[2]||(a[2]=(...e)=>_(ze)&&_(ze)(...e)),onBlur:a[3]||(a[3]=(...e)=>_(Ce)&&_(Ce)(...e)),onChange:Le,onKeydown:Xe}),null,16,he),_(_e)?(B(),P("span",{key:0,style:q(ye.value),class:V(_(ne).e("count"))},Z(_(Re))+" / "+Z(_(v).maxlength),7)):j("v-if",!0)],64))],16,xe)),[[E,"hidden"!==e.type]])}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]));export{ne as C,Se as E,se as I,le as U,de as a,oe as b,re as i,pe as u};
