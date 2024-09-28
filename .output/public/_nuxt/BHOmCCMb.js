import{_ as F}from"./CpuEAZHr.js";import{z,r as p,f as $,o as m,c as f,b as x,w as g,a as e,A as d,B as L,C as E,j as N,t as b,T as V,d as T,D as k,E as O,v as M,G as S,H as _,I as y}from"./CzuG0jYT.js";const R={class:"bg-slate-200 h-fit rounded-lg p-3 mb-4 min-w-40"},he={__name:"LeftBar",setup(s){const o=z(),t=p({dashboard:!1,pinned:!1,todos:!1,completed:!1});return $(()=>{t.value={dashboard:o.path==="/todolist/dashboard",pinned:o.path==="/todolist/pinned",todos:o.path==="/todolist/todos",completed:o.path==="/todolist/completed"}}),(n,l)=>{const i=F;return m(),f("div",R,[x(i,{to:"/todolist/dashboard"},{default:g(()=>[e("div",{class:d(["group flex rounded-lg py-2 px-3 mx-auto my-1 hover:bg-slate-500",{"bg-slate-600":t.value.dashboard}])},[e("i",{class:d(["ri-dashboard-fill group-hover:text-slate-50",t.value.dashboard?"text-slate-50":"text-slate-900"])},null,2),e("h5",{class:d(["ps-1 group-hover:text-slate-50",t.value.dashboard?"text-slate-50":""])},"Dashboard",2)],2)]),_:1}),x(i,{to:"/todolist/pinned"},{default:g(()=>[e("div",{class:d(["group flex rounded-lg py-2 px-3 mx-auto my-1 hover:bg-slate-500",{"bg-slate-600":t.value.pinned}])},[e("i",{class:d(["ri-pushpin-fill group-hover:text-slate-50",t.value.pinned?"text-slate-50":"text-slate-900"])},null,2),e("h5",{class:d(["ps-1 group-hover:text-slate-50",t.value.pinned?"text-slate-50":""])},"Pinned",2)],2)]),_:1}),x(i,{to:"/todolist/todos"},{default:g(()=>[e("div",{class:d(["group flex rounded-lg py-2 px-3 mx-auto my-1 hover:bg-slate-500",{"bg-slate-600":t.value.todos}])},[e("i",{class:d(["ri-list-check group-hover:text-slate-50",t.value.todos?"text-slate-50":"text-slate-900"])},null,2),e("h5",{class:d(["ps-1 group-hover:text-slate-50",t.value.todos?"text-slate-50":""])},"Todos",2)],2)]),_:1}),x(i,{to:"/todolist/completed"},{default:g(()=>[e("div",{class:d(["group flex rounded-lg py-2 px-3 mx-auto my-1 hover:bg-slate-500",{"bg-slate-600":t.value.completed}])},[e("i",{class:d(["ri-checkbox-fill group-hover:text-slate-50",t.value.completed?"text-slate-50":"text-slate-900"])},null,2),e("h5",{class:d(["ps-1 group-hover:text-slate-50",t.value.completed?"text-slate-50":""])},"Completed",2)],2)]),_:1})])}}},C=L("todos",{state:()=>({todos:[{id:1,title:"寫code啊",content:"我不要嗚嗚嗚",isFinished:!1,isPinned:!1},{id:2,title:"掃地了喔",content:"好啦好啦",isFinished:!0,isPinned:!1},{id:3,title:"我想回家",content:"門在那",isFinished:!1,isPinned:!1},{id:4,title:"游泳",content:"一週三次",isFinished:!0,isPinned:!1},{id:5,title:"吃晚餐",content:"吃什麼",isFinished:!1,isPinned:!0}]}),getters:{completedTodos(s){return s.todos.filter(o=>o.isFinished)}},actions:{addTodo(s,o){s.length!=0&&(this.todos.push({id:Math.floor(Math.random()*1e5),title:s,content:o,isFinished:!1,isPinned:!1}),s="",o="")},editTodo(s,o,t){const n=Number(s),l=this.todos.findIndex(i=>i.id===n);return l===-1?(console.error("待辦事項未找到"),!1):o.trim().length===0?(console.error("標題不能為空"),!1):(this.todos[l]={...this.todos[l],title:o.trim(),content:t.trim()},!0)},toggleTodo(s){const o=this.todos.findIndex(t=>t.id===s);this.todos[o].isFinished=!this.todos[o].isFinished},pinTodo(s){const o=this.todos.findIndex(t=>t.id===s);this.todos[o].isPinned=!this.todos[o].isPinned},deleteTodo(s){const o=this.todos.findIndex(t=>t.id===s);this.todos.splice(o,1)}}}),U={class:"w-fill flex p-4 bg-slate-400 text-slate-50 items-start rounded-lg hover:shadow-slate-200/50 shadow-xl relative"},j={class:"inline-flex items-center mt-1 me-1"},D={class:"flex items-center cursor-pointer relative"},A=["checked"],G=e("span",{class:"absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3.5 w-3.5",viewBox:"0 0 20 20",fill:"currentColor",stroke:"currentColor","stroke-width":"1"},[e("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})])],-1),H={class:"px-3 me-auto"},q={class:"text-xl"},J={class:"text-base font-extralight"},K=e("i",{class:"ri-more-fill"},null,-1),Q=[K],W={class:"text-slate-900 p-1 m-1"},X=e("i",{class:"ri-edit-2-fill me-2"},null,-1),Y=e("i",{class:"ri-delete-bin-6-fill me-2"},null,-1),me={__name:"TodoCard",props:["todo"],emits:["edit"],setup(s,{emit:o}){const t=s,n=C(),l=p(!1),i=p(null),h=p(null),c=o,v=()=>{l.value=!l.value},r=()=>{l.value=!1},a=w=>{i.value&&!i.value.contains(w.target)&&h.value&&!h.value.contains(w.target)&&r()},u=()=>{n.toggleTodo(t.todo.id)},P=()=>{n.pinTodo(t.todo.id),r()},I=()=>{c("edit",t.todo.id),r()},B=()=>{n.deleteTodo(t.todo.id)};return E(()=>{window.addEventListener("click",a)}),N(()=>{window.removeEventListener("click",a)}),(w,ce)=>(m(),f("div",U,[e("div",j,[e("label",D,[e("input",{type:"checkbox",checked:s.todo.isFinished,onChange:u,class:"peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-600 checked:border-sky-50"},null,40,A),G])]),e("div",H,[e("div",q,b(s.todo.title),1),e("div",J,b(s.todo.content),1)]),e("button",{onClick:v,class:"toggle-button",ref_key:"buttonRef",ref:h},Q,512),x(V,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-90","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-150","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-90"},{default:g(()=>[l.value?(m(),f("div",{key:0,ref_key:"dropdownRef",ref:i,class:"absolute dropdown top-4 right-2 w-fit mt-8 bg-white border rounded-md shadow-lg z-10 transition-all duration-300 ease-in-out"},[e("ul",W,[e("li",{onClick:P,class:"px-3 rounded py-1 cursor-pointer hover:bg-slate-200"},[e("i",{class:d([s.todo.isPinned?"ri-unpin-fill":"ri-pushpin-fill","me-2"])},null,2),T(b(s.todo.isPinned?"Unpin":"Pin"),1)]),e("li",{onClick:I,class:"px-3 rounded py-1 cursor-pointer hover:bg-slate-200"},[X,T("Edit")]),e("li",{onClick:B,class:"px-3 rounded py-1 cursor-pointer hover:bg-slate-200 text-red-600"},[Y,T("Delete")])])],512)):k("",!0)]),_:1})]))}},Z=e("i",{class:"ri-add-line text-lg font-medium p-1"},null,-1),fe={__name:"AddButton",setup(s){const o=p(""),t=()=>{o.value="New"},n=()=>{o.value=""};return(l,i)=>(m(),f("button",{class:"text-slate-50 bg-slate-700 hover:bg-slate-800 p-1 rounded-lg transition-all duration-300 ease-in-out",onClick:i[0]||(i[0]=h=>l.$emit("click")),onMouseover:t,onMouseleave:n},[Z,e("span",{class:d([{"pe-2":o.value},"transition-opacity duration-300 ease-in-out"]),style:O({opacity:o.value?1:.25})},b(o.value),7)],32))}},ee={key:0,class:"fixed inset-0 flex items-center justify-center z-50"},te={class:"bg-white rounded-lg shadow-lg p-6 z-10 w-3/4 max-w-lg"},oe=e("label",{for:"title",class:"text-lg text-slate-600 mb-3"},"Title",-1),se=e("label",{for:"content",class:"text-lg text-slate-600 mb-2"},"Content",-1),le=e("button",{type:"submit",class:"bg-slate-800 hover:bg-slate-600 text-white py-2 px-4 rounded-md"}," Submit ",-1),ve={__name:"AddModal",props:{isOpen:Boolean},emits:["close"],setup(s,{emit:o}){const t=C(),n=p(""),l=p("");M(t);const{addTodo:i}=t,h=o,c=()=>{h("close")},v=()=>{i(n.value,l.value),n.value="",l.value="",c()};return(r,a)=>s.isOpen?(m(),f("div",ee,[e("div",{class:"fixed inset-0 bg-gray-900 bg-opacity-50",onClick:c}),e("div",te,[e("form",{onSubmit:S(v,["prevent"])},[oe,_(e("input",{type:"text",id:"title",class:"border px-4 py-2 mb-2 rounded-lg w-full outline-cyan-500",placeholder:"標題...","onUpdate:modelValue":a[0]||(a[0]=u=>n.value=u)},null,512),[[y,n.value]]),se,_(e("textarea",{id:"content",class:"border px-4 py-2 mb-2 rounded-lg w-full outline-cyan-500",placeholder:"待辦事項...","onUpdate:modelValue":a[1]||(a[1]=u=>l.value=u)},null,512),[[y,l.value]]),e("div",{class:"flex justify-end mt-6"},[e("button",{type:"button",onClick:c,class:"me-2 border border-slate-400 hover:bg-slate-200 text-slate-500 py-2 px-4 rounded-md"}," Cancel "),le])],32)])])):k("",!0)}},ne={key:0,class:"fixed inset-0 flex items-center justify-center z-50"},ie={class:"bg-white rounded-lg shadow-lg p-6 z-10 w-3/4 max-w-lg"},ae=e("label",{for:"title",class:"text-lg text-slate-600 mb-3"},"Title",-1),de=e("label",{for:"content",class:"text-lg text-slate-600 mb-2"},"Content",-1),re=e("button",{type:"submit",class:"bg-slate-800 hover:bg-slate-600 text-white py-2 px-4 rounded-md"}," Edit ",-1),xe={__name:"EditModal",props:{isOpen:Boolean,editingTodoId:{type:[String,Number],default:null}},emits:["close"],setup(s,{emit:o}){const t=C(),n=p(""),l=p("");M(t);const i=s,h=o;$(()=>{if(i.editingTodoId){const r=t.todos.find(a=>a.id===i.editingTodoId);r&&(n.value=r.title,l.value=r.content)}else n.value="",l.value=""});const c=()=>{h("close")},v=()=>{i.editingTodoId&&(t.editTodo(i.editingTodoId,n.value,l.value)?c():console.error("編輯待辦事項失敗")),n.value="",l.value=""};return(r,a)=>s.isOpen?(m(),f("div",ne,[e("div",{class:"fixed inset-0 bg-gray-900 bg-opacity-50",onClick:c}),e("div",ie,[e("form",{onSubmit:S(v,["prevent"])},[ae,_(e("input",{type:"text",id:"title",class:"border px-4 py-2 mb-2 rounded-lg w-full outline-cyan-500",placeholder:"標題...","onUpdate:modelValue":a[0]||(a[0]=u=>n.value=u)},null,512),[[y,n.value]]),de,_(e("textarea",{id:"content",class:"border px-4 py-2 mb-2 rounded-lg w-full outline-cyan-500",placeholder:"待辦事項...","onUpdate:modelValue":a[1]||(a[1]=u=>l.value=u)},null,512),[[y,l.value]]),e("div",{class:"flex justify-end mt-6"},[e("button",{type:"button",onClick:c,class:"me-2 border border-slate-400 hover:bg-slate-200 text-slate-500 py-2 px-4 rounded-md"}," Cancel "),re])],32)])])):k("",!0)}};export{ve as _,xe as a,he as b,fe as c,me as d,C as u};
