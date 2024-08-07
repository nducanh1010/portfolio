import{q as c,o as a,c as l,a as e,t as o,x as d,_ as m,r as u,h as _,P as p,y as f,l as h,w as g,d as s}from"./DcsNam20.js";const b={class:"flex flex-col gap-8 w-full mx-auto container"},x={class:"text-semibold tracking-wider text-3xl text-center font-semibold"},v=e("hr",{class:"w-full mx-auto h-1 bg-blend-lighten md:w-5/6"},null,-1),w={class:"mx-auto w-3/4"},y={class:"flex justify-between"},k=e("span",{class:"text-semibold font-semibold"},"Timeline",-1),C={class:"flex justify-between"},R=e("span",{class:"text-semibold font-semibold"},"My Role",-1),D=["src"],$={class:"w-full md:w-5/6 break-normal mx-auto text-pretty"},S=c({__name:"detail",props:{name:{},timeline:{},role:{},img:{}},setup(i){return(t,n)=>(a(),l("div",b,[e("div",x,o(t.name),1),v,e("div",w,[e("p",y,[k,e("span",null,o(t.timeline),1)]),e("p",C,[R,e("span",null,o(t.role),1)])]),e("img",{src:t.img,class:"w-full mx-auto object-scale-down rounded-[2rem] aspect-video"},null,8,D),e("div",$,[d(t.$slots,"default")])]))}}),j={},B=e("div",{class:"mb-8 indent-6 leading-2"},[e("span",{class:"font-semibold text-primary text-xl"},"Retake Registration"),s(" is an in-house and client website that facilitates online exam (course) selection, registration, and payment for students. On the CMS side, managing related information, such as terms, exams, decision fees, etc. Help assign teachers and students in class as well as email the score board and payment fees. ")],-1),M=e("div",{class:"font-semibold text-primary text-xl mb-4"}," My Contributors : ",-1),N=e("ul",{class:"list-disc leading-relaxed mx-4 marker:text-gray-600 text-base"},[e("li",null,[s(" Noticeable mail verification, fee enrollment, and calendar schedule feature, responsible for major CMS feature implementation, successfully deployed to production within "),e("span",{class:"ct-highlight"},"2"),s(" months from inception. ")]),e("li",null,[s(" Contributing to over "),e("span",{class:"ct-highlight"},"20"),s(" reusable components, refractoring focuses on various types of input, file imports, data tables, and dialogs built with Vuetify, maintaining a semantic, modular, and "),e("span",{class:"ct-highlight"},"DRY"),s(" code base.  ")])],-1);function V(i,t){const n=S,r=u("motion-slide-visible-right");return _((a(),l("div",null,[(i._.provides[p]||i.$route).path==="/work/registration-service"?(a(),f(n,{key:0,name:"Retake Registration",timeline:"3/2024 - Present",img:"/portfolio/bk.png",role:"Developer"},{default:g(()=>[B,M,N]),_:1})):h("",!0)])),[[r]])}const T=m(j,[["render",V]]);export{T as default};
