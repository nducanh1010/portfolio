import{q as i,r as a,h as l,o as n,c as r,a as e,t as o,x as d}from"./DLuwLnUP.js";const c={class:"bg-white p-8 rounded-md shadow-lg shadow-slate-200 box-border",initial:{scale:1,boxShadow:"0 0 #0000"},hovered:{boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",scale:1.01,transition:{duration:400,type:"spring",stiffness:80}}},p=["src"],m={class:"flex w-full flex-col gap-7 md:gap-0 md:flex-row md:aspect-[16/5]"},_={class:"basis-1/2 flex flex-col gap-2 md:items-start"},f={class:"text-2xl font-semibold decoration-4 text-semibold underline-offset-8 underline decoration-[#E11D48]"},x={class:"text-primary"},h={class:"text-primary"},v={class:"basis-1/2 flex items-end"},w=i({__name:"card",props:{name:{},timeline:{},role:{},link:{}},setup(b){return(s,u)=>{const t=a("motion");return l((n(),r("div",c,[e("img",{src:s.link,class:"object-cover object-center w-full aspect-video"},null,8,p),e("div",m,[e("div",_,[e("div",f,o(s.name),1),e("div",x,o(s.role),1),e("div",h,o(s.timeline),1)]),e("div",v,[d(s.$slots,"default")])])])),[[t]])}}});export{w as default};
