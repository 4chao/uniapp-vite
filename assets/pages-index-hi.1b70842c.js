import{d as e,P as a,t,U as s,b as l,c as i,w as o,e as r,k as c,h as n,f as p,r as d,i as u}from"./index.2a9839b4.js";import{a as f,_ as m}from"./u-button.7cf4b279.js";import{_ as x,a as v}from"./sys.df7d719c.js";var b=x(e({setup(e){const x=a({name:"默认初始值"}),b=t(x,"data"),y=s("");return(e,a)=>{const t=d(u("u-input"),f),s=d(u("u-button"),m),x=d(u("sys"),v);return l(),i(x,null,{default:o((()=>[r("div",{"flex-center-col":"",pt100:""},[r("div",{"text-4xl":"","py-25":"","flex-center":""},[r("div",{class:"icon","i-ri-compasses-2-line":"","inline-block":"",mrsm:""}),c(" Hi "+n(b.value.name),1)]),r("p",{"text-sm":"","opacity-75":""},"也可以往回传值哦"),r("p",{"text-sm":"","opacity-75":""},"尝试填入内容点击返回↓"),r("div",{"py-25":""},[p(t,{modelValue:y.value,"onUpdate:modelValue":a[0]||(a[0]=e=>y.value=e),placeholder:"喵喵喵",inputAlign:"center"},null,8,["modelValue"])]),c(" "+n(y.value)+" ",1),r("div",{"py-25":"","pb-50":"","flex-center":""},[p(s,{text:"返回",customStyle:{width:"200rpx"},color:"linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",onClick:a[1]||(a[1]=a=>e.app.back({text:y.value}))}),r("div",{px20:""}),p(s,{text:"返回并抛个异常",customStyle:{width:"300rpx"},color:"linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",onClick:a[2]||(a[2]=a=>e.app.back.reject({text:y.value}))})])])])),_:1})}}}),[["__scopeId","data-v-af32635a"]]);export{b as default};
