import{F as e}from"./Form-4e0f199a.js";import{u as r}from"./useForm-d2831925.js";import{u as a}from"./useValidator-48a7fc84.js";import{d as t,q as s,M as o,o as m,i,a as u}from"./index-aa1de40f.js";const n=t({__name:"Write",props:{currentRow:{type:Object,default:()=>null},formSchema:{type:Array,default:()=>[]}},setup(t,{expose:n}){const c=t,{required:l}=a(),p=s({id:[l()],status:[l()],createTime:[l()],remark:[l()]}),{formRegister:d,formMethods:f}=r(),{setValues:h,getFormData:g,getElFormExpose:j}=f;return o((()=>c.currentRow),(e=>{e&&h(e)}),{deep:!0,immediate:!0}),n({submit:async()=>{const e=await j();if(await(null==e?void 0:e.validate().catch((e=>{})))){return await g()}}}),(r,a)=>(m(),i(u(e),{rules:p,onRegister:u(d),schema:t.formSchema},null,8,["rules","onRegister","schema"]))}});export{n as _};
