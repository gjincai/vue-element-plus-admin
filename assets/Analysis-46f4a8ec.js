import{P as a,g as t,a as s,b as e}from"./PanelGroup-114df86a.js";import{d as n,r as i,q as o,o as l,c as m,e as d,w as u,a as p,F as r,k as c,s as _}from"./index-c87642b8.js";import{E as f,a as g}from"./el-col-85ffc090.js";import{E as h}from"./el-card-b38eccf1.js";import{E as y}from"./el-skeleton-item-66da6a1b.js";import{p as v,b as x,l as b,_ as j}from"./Echart.vue_vue_type_script_setup_true_lang-f8fcc44a.js";import"./CountTo.vue_vue_type_script_setup_true_lang-09feedab.js";import"./index-17f18936.js";import"./debounce-e5c60c2d.js";const w=n({__name:"Analysis",setup(n){const{t:w}=c(),E=i(!0),A=o(v),P=async()=>{const a=await t().catch((()=>{}));a&&(_(A,"legend.data",a.data.map((a=>w(a.name)))),A.series[0].data=a.data.map((a=>({name:w(a.name),value:a.value}))))},k=o(x),q=async()=>{const a=await s().catch((()=>{}));a&&(_(k,"xAxis.data",a.data.map((a=>w(a.name)))),_(k,"series",[{name:w("analysis.activeQuantity"),data:a.data.map((a=>a.value)),type:"bar"}]))},C=o(b),D=async()=>{const a=await e().catch((()=>{}));a&&(_(C,"xAxis.data",a.data.map((a=>w(a.name)))),_(C,"series",[{name:w("analysis.estimate"),smooth:!0,type:"line",data:a.data.map((a=>a.estimate)),animationDuration:2800,animationEasing:"cubicInOut"},{name:w("analysis.actual"),smooth:!0,type:"line",itemStyle:{},data:a.data.map((a=>a.actual)),animationDuration:2800,animationEasing:"quadraticOut"}]))};return(async()=>{await Promise.all([P(),q(),D()]),E.value=!1})(),(t,s)=>(l(),m(r,null,[d(a),d(p(g),{gutter:20,justify:"space-between"},{default:u((()=>[d(p(f),{xl:10,lg:10,md:24,sm:24,xs:24},{default:u((()=>[d(p(h),{shadow:"hover",class:"mb-20px"},{default:u((()=>[d(p(y),{loading:E.value,animated:""},{default:u((()=>[d(p(j),{options:A,height:300},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1}),d(p(f),{xl:14,lg:14,md:24,sm:24,xs:24},{default:u((()=>[d(p(h),{shadow:"hover",class:"mb-20px"},{default:u((()=>[d(p(y),{loading:E.value,animated:""},{default:u((()=>[d(p(j),{options:k,height:300},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1}),d(p(f),{span:24},{default:u((()=>[d(p(h),{shadow:"hover",class:"mb-20px"},{default:u((()=>[d(p(y),{loading:E.value,animated:"",rows:4},{default:u((()=>[d(p(j),{options:C,height:350},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})],64))}});export{w as default};
