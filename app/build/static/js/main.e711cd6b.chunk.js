(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{41:function(t,e,n){t.exports=n(73)},46:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},68:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),l=(n(46),n(9)),i=n.n(l),u=n(26),s=n(11);n(48);var p=function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("h1",null," My list of Todo"))},d=n(37),m=n(23),f=n(16),h=(n(49),n(12)),b=n.n(h);function E(){return(E=Object(s.a)(i.a.mark((function t(e,n,a){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.post("http://localhost:3000/api/v1/todo",{title:n,description:a});case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var v=function(t){var e=t.todos,n=t.addTodos,a=t.formData,o=t.updateFormData,c=function(t){o(Object(f.a)(Object(f.a)({},a),{},Object(m.a)({},t.target.name,t.target.value.trim())))};return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("label",{for:"title"},"Title:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"title",name:"title",onChange:c}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{for:"description"},"Description:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"description",name:"description",onChange:c}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit",onClick:function(t){t.preventDefault(),n([].concat(Object(d.a)(e),[{title:a.title,description:a.description,done:!1,id:Math.ceil(1e4*Math.random())}])),function(t,e,n){return E.apply(this,arguments)}("http://localhost:3000/api/v1/todo",a.title,a.description).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}))}})))},j=n(93),y=n(99),O=n(97),g=n(95),x=n(98),k=n(96),w=(n(68),Object(j.a)({root:{width:100,minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:18},pos:{marginBottom:12}}));function T(){return(T=Object(s.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.delete(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(){return(D=Object(s.a)(i.a.mark((function t(e,n,a){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.post(e,{});case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function M(t){var e=t.todo,n=t.todos,a=t.setTodos,o=w();return r.a.createElement(y.a,{className:o.root,variant:"outlined"},r.a.createElement(g.a,null,r.a.createElement(k.a,{className:o.title,color:"textSecondary",gutterBottom:!0},r.a.createElement("b",null,r.a.createElement("span",{className:'"title" '.concat(e.done?"completed":"")}," ",e.title," "))),r.a.createElement(k.a,{variant:"body2",component:"p"},e.description)),r.a.createElement(O.a,null,r.a.createElement(x.a,{size:"small",onClick:function(){a(n.map((function(t){return t.id===e.id?Object(f.a)(Object(f.a)({},t),{},{done:!t.done}):t}))),function(t,e,n){return D.apply(this,arguments)}("http://localhost:3000/api/v1/todo/"+e._id+"/done").then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}))}},"Done"),r.a.createElement(x.a,{size:"small",onClick:function(){a(n.filter((function(t){return t.id!==e.id}))),function(t){return T.apply(this,arguments)}("http://localhost:3000/api/v1/todo/"+e._id).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}))}},"Delete")))}function S(t){var e=t.todos,n=t.setTodos;return r.a.createElement("div",null,r.a.createElement("h2",null,"Todos"),r.a.createElement("ul",null,e.map((function(t,a){return r.a.createElement(M,{key:a,todo:t,todos:e,setTodos:n})}))))}var C=Object.freeze({title:"",description:"",done:!1,id:Math.ceil(1e4*Math.random())});function N(){return(N=Object(s.a)(i.a.mark((function t(e){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get(e);case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var z=function(){var t=Object(a.useState)(C),e=Object(u.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)([]),l=Object(u.a)(c,2),i=l[0],s=l[1];Object(a.useEffect)((function(){d()}),[]);var d=function(){(function(t){return N.apply(this,arguments)})("http://localhost:3000/api/v1/todos").then((function(t){return s(t)})).catch((function(t){return console.log(t)}))};return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(v,{todos:i,addTodos:s,formData:n,updateFormData:o}),r.a.createElement(S,{todos:i,setTodos:s}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.e711cd6b.chunk.js.map