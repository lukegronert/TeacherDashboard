(this["webpackJsonpteacher-dashboard"]=this["webpackJsonpteacher-dashboard"]||[]).push([[0],{25:function(e,s,t){},26:function(e,s,t){},33:function(e,s,t){},34:function(e,s,t){"use strict";t.r(s);var c=t(0),n=t.n(c),a=t(17),l=t.n(a),i=(t(25),t(10)),r=(t(26),t(20)),d=t(12),o=t(1);function j(e){var s=e.classInfo,t=(e.selectedClass,e.setSelectedClass),c=e.deleteClass;return Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("div",{className:"header",children:s.id}),Object(o.jsxs)("div",{className:"meta",children:["Students: ",s.roster.length]}),Object(o.jsx)("div",{className:"extra content",children:Object(o.jsxs)("div",{className:"ui two buttons",children:[Object(o.jsx)("div",{className:"ui basic green button",onClick:function(){t(s)},children:Object(o.jsx)(d.b,{to:"/classpage",children:"View Class"})}),Object(o.jsx)("div",{className:"ui basic red button",onClick:function(){return c(s.id)},children:"Delete Class"})]})})]})})}t(33);function u(e){var s=e.classList,t=e.setClassList,n=e.selectedClass,a=e.setSelectedClass,l=Object(c.useState)(""),d=Object(i.a)(l,2),u=d[0],b=d[1],h=function(){var e=document.querySelector(".modal");"block"!==e.style.display?e.style.display="block":e.style.display="none"},m=function(e){var c=s.filter((function(s){return s.id!==e}));t(c)};return Object(o.jsxs)("div",{className:"mainContent",children:[Object(o.jsx)("h1",{children:"Welcome, Teacher!"}),Object(o.jsx)("div",{className:"ui cards classListContainer",children:s.map((function(e){return Object(o.jsx)(j,{classInfo:e,deleteClass:m,selectedClass:n,setSelectedClass:a},e.id)}))}),Object(o.jsx)("button",{className:"addClassButton",onClick:function(){return h()},children:"Add Class"}),Object(o.jsxs)("div",{className:"modal",children:[Object(o.jsxs)("div",{className:"modalContent",children:[Object(o.jsx)("label",{children:"Class Title"}),Object(o.jsx)("input",{type:"text",placeholder:"(ex: AB2)",className:"classTitleInput",onChange:function(e){return b(e.target.value)}})]}),Object(o.jsx)("button",{onClick:function(){""!==u&&(t([].concat(Object(r.a)(s),[{id:u,roster:[]}])),document.querySelector(".classTitleInput").value="",h(),b(""))},children:"Add"})]})]})}var b=t(2);function h(e){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:e.selectedClass.id})})}var m=function(){var e=Object(c.useState)([{id:"AB2",roster:[{name:"Hans"},{name:"Tammy"},{name:"Yuni"},{name:"Nina"}]},{id:"ED1",roster:[{name:"Ivan"},{name:"Fifi"},{name:"Peter"}]}]),s=Object(i.a)(e,2),t=s[0],n=s[1],a=Object(c.useState)({}),l=Object(i.a)(a,2),r=l[0],j=l[1];return Object(o.jsxs)(d.a,{basename:"/",children:[Object(o.jsx)(b.a,{exact:!0,path:"/",render:function(){return Object(o.jsx)(u,{classList:t,setClassList:n,setSelectedClass:j})}}),Object(o.jsx)(b.a,{path:"/classpage",render:function(){return Object(o.jsx)(h,{selectedClass:r})}})]})};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6584fafe.chunk.js.map