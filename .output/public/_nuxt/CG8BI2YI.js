import{u as E,_ as w,a as M,b as O,c as $,d as u}from"./BHOmCCMb.js";import{v as B,r as _,q as m,c as t,a as s,b as d,F as g,x as p,o as l,y as f}from"./CzuG0jYT.js";import"./CpuEAZHr.js";const C={class:"container block sm:flex my-6 mx-auto gap-8 w-5/6 lg:px-8"},F={class:"w-full sm:w-1/4"},A={class:"w-full sm:w-3/4"},I={class:"flex justify-between mb-4"},L=s("h3",{class:"text-3xl"},"Pinned",-1),N={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},P=s("h3",{class:"text-3xl my-4"},"Todo List",-1),S={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},V=s("h3",{class:"text-3xl my-4"},"Completed",-1),j={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},H={__name:"dashboard",setup(q){const v=E(),{todos:n}=B(v),a=_(!1),i=_(!1),c=_(null),h=()=>{a.value=!0},x=()=>{a.value=!1},r=(o=null)=>{c.value=o,i.value=!0},T=()=>{i.value=!1,c.value=null},b=m(()=>n.value.filter(o=>o.isPinned)),k=m(()=>n.value.filter(o=>!o.isFinished)),y=m(()=>n.value.filter(o=>o.isFinished));return(o,z)=>(l(),t("div",C,[s("div",F,[d(O)]),s("div",A,[s("div",I,[L,d($,{onClick:h}),d(w,{isOpen:a.value,onClose:x},null,8,["isOpen"]),d(M,{isOpen:i.value,editingTodoId:c.value,onClose:T},null,8,["isOpen","editingTodoId"])]),s("div",N,[(l(!0),t(g,null,p(b.value,e=>(l(),f(u,{key:e.id,todo:e,class:"bg-orange-400",onEdit:r},null,8,["todo"]))),128))]),P,s("div",S,[(l(!0),t(g,null,p(k.value,e=>(l(),f(u,{key:e.id,todo:e,onEdit:r},null,8,["todo"]))),128))]),V,s("div",j,[(l(!0),t(g,null,p(y.value,e=>(l(),f(u,{key:e.id,todo:e,class:"bg-zinc-400",onEdit:r},null,8,["todo"]))),128))])])]))}};export{H as default};
