import{E as e}from"./el-button-1e41cb43.js";import{c as o,E as n,O as t,w as l,F as r}from"./el-popper-ca1d6e4c.js";import{af as a,ah as i,aT as s,aq as u,d,r as c,as as p,x as f,an as m,c1 as v,bd as g,a as b,M as w,bw as h,ap as I,z as y,o as E,i as k,w as F,e as C,bu as R,bv as T,N as _,E as x,H as S,aW as B,b0 as D,al as $,aQ as P,ay as M,U as K,c as L,aJ as G,P as z,n as O,Q as A,f as H,$ as j,aI as N,F as U,W,aA as J,aB as q}from"./index-aa1de40f.js";import{l as Q,m as Y,n as V,o as X,p as Z,q as ee,r as oe,t as ne,u as te,F as le,L as re}from"./el-pagination-178147d4.js";import{u as ae}from"./constants-cf5df664.js";import{u as ie}from"./use-form-common-props-99e76404.js";import{c as se}from"./tsxHelper-174ba3c7.js";import{c as ue}from"./refs-eacbd8eb.js";const de=a({style:{type:i([String,Array,Object])},currentTabId:{type:i(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:i(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:ce,ElCollectionItem:pe,COLLECTION_INJECTION_KEY:fe,COLLECTION_ITEM_INJECTION_KEY:me}=Q("RovingFocusGroup"),ve=Symbol("elRovingFocusGroup"),ge=Symbol("elRovingFocusGroupItem"),be={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},we=(e,o,n)=>{const t=((e,o)=>{if("rtl"!==o)return e;switch(e){case s.right:return s.left;case s.left:return s.right;default:return e}})(e.key,n);if(!("vertical"===o&&[s.left,s.right].includes(t)||"horizontal"===o&&[s.up,s.down].includes(t)))return be[t]},he=e=>{const{activeElement:o}=document;for(const n of e){if(n===o)return;if(n.focus(),o!==document.activeElement)return}},Ie="currentTabIdChange",ye="rovingFocusGroup.entryFocus",Ee={bubbles:!1,cancelable:!0},ke=d({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:de,emits:[Ie,"entryFocus"],setup(e,{emit:n}){var t;const l=c(null!=(t=e.currentTabId||e.defaultCurrentTabId)?t:null),r=c(!1),a=c(!1),i=c(null),{getItems:s}=p(fe,void 0),u=f((()=>[{outline:"none"},e.style])),d=o((o=>{var n;null==(n=e.onMousedown)||n.call(e,o)}),(()=>{a.value=!0})),I=o((o=>{var n;null==(n=e.onFocus)||n.call(e,o)}),(e=>{const o=!b(a),{target:n,currentTarget:t}=e;if(n===t&&o&&!b(r)){const e=new Event(ye,Ee);if(null==t||t.dispatchEvent(e),!e.defaultPrevented){const e=s().filter((e=>e.focusable)),o=[e.find((e=>e.active)),e.find((e=>e.id===b(l))),...e].filter(Boolean).map((e=>e.ref));he(o)}}a.value=!1})),y=o((o=>{var n;null==(n=e.onBlur)||n.call(e,o)}),(()=>{r.value=!1}));m(ve,{currentTabbedId:v(l),loop:g(e,"loop"),tabIndex:f((()=>b(r)?-1:0)),rovingFocusGroupRef:i,rovingFocusGroupRootStyle:u,orientation:g(e,"orientation"),dir:g(e,"dir"),onItemFocus:e=>{n(Ie,e)},onItemShiftTab:()=>{r.value=!0},onBlur:y,onFocus:I,onMousedown:d}),w((()=>e.currentTabId),(e=>{l.value=null!=e?e:null})),h(i,ye,((...e)=>{n("entryFocus",...e)}))}});var Fe=u(d({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:ce,ElRovingFocusGroupImpl:u(ke,[["render",function(e,o,n,t,l,r){return I(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]])}}),[["render",function(e,o,n,t,l,r){const a=y("el-roving-focus-group-impl"),i=y("el-focus-group-collection");return E(),k(i,null,{default:F((()=>[C(a,R(T(e.$attrs)),{default:F((()=>[I(e.$slots,"default")])),_:3},16)])),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);var Ce=u(d({components:{ElRovingFocusCollectionItem:pe},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:n}){const{currentTabbedId:t,loop:l,onItemFocus:r,onItemShiftTab:a}=p(ve,void 0),{getItems:i}=p(fe,void 0),u=ae(),d=c(null),v=o((e=>{n("mousedown",e)}),(o=>{e.focusable?r(b(u)):o.preventDefault()})),g=o((e=>{n("focus",e)}),(()=>{r(b(u))})),w=o((e=>{n("keydown",e)}),(e=>{const{key:o,shiftKey:n,target:t,currentTarget:r}=e;if(o===s.tab&&n)return void a();if(t!==r)return;const u=we(e);if(u){e.preventDefault();let o=i().filter((e=>e.focusable)).map((e=>e.ref));switch(u){case"last":o.reverse();break;case"prev":case"next":{"prev"===u&&o.reverse();const e=o.indexOf(r);o=l.value?(c=e+1,(d=o).map(((e,o)=>d[(o+c)%d.length]))):o.slice(e+1);break}}_((()=>{he(o)}))}var d,c})),h=f((()=>t.value===b(u)));return m(ge,{rovingFocusGroupItemRef:d,tabIndex:f((()=>b(h)?0:-1)),handleMousedown:v,handleFocus:g,handleKeydown:w}),{id:u,handleKeydown:w,handleFocus:g,handleMousedown:v}}}),[["render",function(e,o,n,t,l,r){const a=y("el-roving-focus-collection-item");return E(),k(a,{id:e.id,focusable:e.focusable,active:e.active},{default:F((()=>[I(e.$slots,"default")])),_:3},8,["id","focusable","active"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const Re=Symbol("elDropdown"),{ButtonGroup:Te}=e;var _e=u(d({name:"ElDropdown",components:{ElButton:e,ElButtonGroup:Te,ElScrollbar:x,ElDropdownCollection:Y,ElTooltip:n,ElRovingFocusGroup:Fe,ElOnlyChild:t,ElIcon:S,ArrowDown:B},props:V,emits:["visible-change","click","command"],setup(e,{emit:o}){const n=D(),t=$("dropdown"),{t:l}=P(),r=c(),a=c(),i=c(null),u=c(null),d=c(null),p=c(null),v=c(!1),h=[s.enter,s.space,s.down],I=f((()=>({maxHeight:M(e.maxHeight)}))),y=f((()=>[t.m(R.value)])),E=f((()=>se(e.trigger))),k=ae().value,F=f((()=>e.id||k));function C(){var e;null==(e=i.value)||e.onClose()}w([r,E],(([e,o],[n])=>{var t,l,r;(null==(t=null==n?void 0:n.$el)?void 0:t.removeEventListener)&&n.$el.removeEventListener("pointerenter",T),(null==(l=null==e?void 0:e.$el)?void 0:l.removeEventListener)&&e.$el.removeEventListener("pointerenter",T),(null==(r=null==e?void 0:e.$el)?void 0:r.addEventListener)&&o.includes("hover")&&e.$el.addEventListener("pointerenter",T)}),{immediate:!0}),K((()=>{var e,o;(null==(o=null==(e=r.value)?void 0:e.$el)?void 0:o.removeEventListener)&&r.value.$el.removeEventListener("pointerenter",T)}));const R=ie();function T(){var e,o;null==(o=null==(e=r.value)?void 0:e.$el)||o.focus()}m(Re,{contentRef:u,role:f((()=>e.role)),triggerId:F,isUsingKeyboard:v,onItemEnter:function(){},onItemLeave:function(){const e=b(u);E.value.includes("hover")&&(null==e||e.focus()),p.value=null}}),m("elDropdown",{instance:n,dropdownSize:R,handleClick:function(){C()},commandHandler:function(...e){o("command",...e)},trigger:g(e,"trigger"),hideOnClick:g(e,"hideOnClick")});return{t:l,ns:t,scrollbar:d,wrapStyle:I,dropdownTriggerKls:y,dropdownSize:R,triggerId:F,triggerKeys:h,currentTabId:p,handleCurrentTabIdChange:function(e){p.value=e},handlerMainButtonClick:e=>{o("click",e)},handleEntryFocus:function(e){v.value||(e.preventDefault(),e.stopImmediatePropagation())},handleClose:C,handleOpen:function(){var e;null==(e=i.value)||e.onOpen()},handleBeforeShowTooltip:function(){o("visible-change",!0)},handleShowTooltip:function(e){"keydown"===(null==e?void 0:e.type)&&u.value.focus()},handleBeforeHideTooltip:function(){o("visible-change",!1)},onFocusAfterTrapped:e=>{var o,n;e.preventDefault(),null==(n=null==(o=u.value)?void 0:o.focus)||n.call(o,{preventScroll:!0})},popperRef:i,contentRef:u,triggeringElementRef:r,referenceElementRef:a}}}),[["render",function(e,o,n,t,l,r){var a;const i=y("el-dropdown-collection"),s=y("el-roving-focus-group"),u=y("el-scrollbar"),d=y("el-only-child"),c=y("el-tooltip"),p=y("el-button"),f=y("arrow-down"),m=y("el-icon"),v=y("el-button-group");return E(),L("div",{class:O([e.ns.b(),e.ns.is("disabled",e.disabled)])},[C(c,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":"hover"===e.trigger?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":null==(a=e.referenceElementRef)?void 0:a.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":"hover"===e.trigger?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},G({content:F((()=>[C(u,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:F((()=>[C(s,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:F((()=>[C(i,null,{default:F((()=>[I(e.$slots,"dropdown")])),_:3})])),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])])),_:3},8,["wrap-style","view-class"])])),_:2},[e.splitButton?void 0:{name:"default",fn:F((()=>[C(d,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:F((()=>[I(e.$slots,"default")])),_:3},8,["id","tabindex"])]))}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(E(),k(v,{key:0},{default:F((()=>[C(p,z({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:F((()=>[I(e.$slots,"default")])),_:3},16,["size","type","disabled","tabindex","onClick"]),C(p,z({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:F((()=>[C(m,{class:O(e.ns.e("icon"))},{default:F((()=>[C(f)])),_:1},8,["class"])])),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])])),_:3})):A("v-if",!0)],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const xe=d({name:"DropdownItemImpl",components:{ElIcon:S},props:X,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:n}){const t=$("dropdown"),{role:l}=p(Re,void 0),{collectionItemRef:r}=p(Z,void 0),{collectionItemRef:a}=p(me,void 0),{rovingFocusGroupItemRef:i,tabIndex:u,handleFocus:d,handleKeydown:c,handleMousedown:m}=p(ge,void 0),v=ue(r,a,i),g=f((()=>"menu"===l.value?"menuitem":"navigation"===l.value?"link":"button")),b=o((e=>{const{code:o}=e;if(o===s.enter||o===s.space)return e.preventDefault(),e.stopImmediatePropagation(),n("clickimpl",e),!0}),c);return{ns:t,itemRef:v,dataset:{[ee]:""},role:g,tabIndex:u,handleFocus:d,handleKeydown:b,handleMousedown:m}}}),Se=["aria-disabled","tabindex","role"];const Be=()=>{const e=p("elDropdown",{}),o=f((()=>null==e?void 0:e.dropdownSize));return{elDropdown:e,_elDropdownSize:o}};var De=u(d({name:"ElDropdownItem",components:{ElDropdownCollectionItem:oe,ElRovingFocusItem:Ce,ElDropdownItemImpl:u(xe,[["render",function(e,o,n,t,l,r){const a=y("el-icon");return E(),L(U,null,[e.divided?(E(),L("li",z({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):A("v-if",!0),H("li",z({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=o=>e.$emit("clickimpl",o)),onFocus:o[1]||(o[1]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onKeydown:o[2]||(o[2]=N(((...o)=>e.handleKeydown&&e.handleKeydown(...o)),["self"])),onMousedown:o[3]||(o[3]=(...o)=>e.handleMousedown&&e.handleMousedown(...o)),onPointermove:o[4]||(o[4]=o=>e.$emit("pointermove",o)),onPointerleave:o[5]||(o[5]=o=>e.$emit("pointerleave",o))}),[e.icon?(E(),k(a,{key:0},{default:F((()=>[(E(),k(j(e.icon)))])),_:1})):A("v-if",!0),I(e.$slots,"default")],16,Se)],64)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]])},inheritAttrs:!1,props:X,emits:["pointermove","pointerleave","click"],setup(e,{emit:n,attrs:t}){const{elDropdown:r}=Be(),a=D(),i=c(null),s=f((()=>{var e,o;return null!=(o=null==(e=b(i))?void 0:e.textContent)?o:""})),{onItemEnter:u,onItemLeave:d}=p(Re,void 0),m=o((e=>(n("pointermove",e),e.defaultPrevented)),l((o=>{if(e.disabled)return void d(o);const n=o.currentTarget;n===document.activeElement||n.contains(document.activeElement)||(u(o),o.defaultPrevented||null==n||n.focus())}))),v=o((e=>(n("pointerleave",e),e.defaultPrevented)),l((e=>{d(e)})));return{handleClick:o((o=>{if(!e.disabled)return n("click",o),"keydown"!==o.type&&o.defaultPrevented}),(o=>{var n,t,l;e.disabled?o.stopImmediatePropagation():((null==(n=null==r?void 0:r.hideOnClick)?void 0:n.value)&&(null==(t=r.handleClick)||t.call(r)),null==(l=r.commandHandler)||l.call(r,e.command,a,o))})),handlePointerMove:m,handlePointerLeave:v,textContent:s,propsAndAttrs:f((()=>({...e,...t})))}}}),[["render",function(e,o,n,t,l,r){var a;const i=y("el-dropdown-item-impl"),s=y("el-roving-focus-item"),u=y("el-dropdown-collection-item");return E(),k(u,{disabled:e.disabled,"text-value":null!=(a=e.textValue)?a:e.textContent},{default:F((()=>[C(s,{focusable:!e.disabled},{default:F((()=>[C(i,z(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:F((()=>[I(e.$slots,"default")])),_:3},16,["onPointerleave","onPointermove","onClickimpl"])])),_:3},8,["focusable"])])),_:3},8,["disabled","text-value"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const $e=d({name:"ElDropdownMenu",props:ne,setup(e){const n=$("dropdown"),{_elDropdownSize:t}=Be(),l=t.value,{focusTrapRef:a,onKeydown:i}=p(r,void 0),{contentRef:u,role:d,triggerId:c}=p(Re,void 0),{collectionRef:m,getItems:v}=p(te,void 0),{rovingFocusGroupRef:g,rovingFocusGroupRootStyle:w,tabIndex:h,onBlur:I,onFocus:y,onMousedown:E}=p(ve,void 0),{collectionRef:k}=p(fe,void 0),F=f((()=>[n.b("menu"),n.bm("menu",null==l?void 0:l.value)])),C=ue(u,m,a,g,k),R=o((o=>{var n;null==(n=e.onKeydown)||n.call(e,o)}),(e=>{const{currentTarget:o,code:n,target:t}=e;if(o.contains(t),s.tab===n&&e.stopImmediatePropagation(),e.preventDefault(),t!==b(u))return;if(!le.includes(n))return;const l=v().filter((e=>!e.disabled)).map((e=>e.ref));re.includes(n)&&l.reverse(),he(l)}));return{size:l,rovingFocusGroupRootStyle:w,tabIndex:h,dropdownKls:F,role:d,triggerId:c,dropdownListWrapperRef:C,handleKeydown:e=>{R(e),i(e)},onBlur:I,onFocus:y,onMousedown:E}}}),Pe=["role","aria-labelledby"];var Me=u($e,[["render",function(e,o,n,t,l,r){return E(),L("ul",{ref:e.dropdownListWrapperRef,class:O(e.dropdownKls),style:W(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...o)=>e.onBlur&&e.onBlur(...o)),onFocus:o[1]||(o[1]=(...o)=>e.onFocus&&e.onFocus(...o)),onKeydown:o[2]||(o[2]=N(((...o)=>e.handleKeydown&&e.handleKeydown(...o)),["self"])),onMousedown:o[3]||(o[3]=N(((...o)=>e.onMousedown&&e.onMousedown(...o)),["self"]))},[I(e.$slots,"default")],46,Pe)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const Ke=J(_e,{DropdownItem:De,DropdownMenu:Me}),Le=q(De),Ge=q(Me);export{Le as E,Ge as a,Ke as b};
