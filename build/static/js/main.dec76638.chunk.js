(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(17),a=n.n(r),o=n(3),i=n(5),u=n.n(i),j="/api/persons",d=function(){return u.a.get(j).then((function(e){return e.data}))},f=function(e){return u.a.post(j,e).then((function(e){return e.data}))},m=function(e,t){return u.a.patch("".concat(j,"/").concat(e),t).then((function(e){return e.data}))},b=function(e){return u.a.delete("".concat(j,"/").concat(e))},l=n(0),h=function(e){var t=e.state;return Object(l.jsxs)(l.Fragment,{children:["search: ",Object(l.jsx)("input",{onInput:function(e){var n=e.target.value,c=new RegExp(n,"gi"),s=[];t.persons.forEach((function(e){/[a-zA-Z]/.test(n)&&null!==e.name.match(c)&&s.push(e)})),t.setSearchResults(s)}})]})},O=n(8),p=function(e){var t=e.state;return Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{children:["name: ",Object(l.jsx)("input",{onBlur:function(e){t.setNewName(e.target.value)}})]}),Object(l.jsxs)("div",{children:["number: ",Object(l.jsx)("input",{onBlur:function(e){t.setNewNum(e.target.value)}})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",onClick:function(e){if(e.preventDefault(),!(""===t.newName?(t.setNotification({error:!0,message:"supply a contact name"}),1):""===t.newNum?(t.setNotification({error:!0,message:"supply a phone number"}),1):void 0)){var n={name:t.newName,number:t.newNum},c=t.persons.find((function(e){return e.name===t.newName}));if(c)window.confirm("".concat(c.name," already exits, do you want to replace the number?"))&&m(c.id,n).then((function(e){t.setPersons([].concat(Object(O.a)(t.persons),[e])),t.setNotification({error:!1,message:"Updated ".concat(c.name)})})).catch((function(e){return{error:!0,message:e.message}}));else f({name:t.newName,number:t.newNum}).then((function(e){t.setPersons([].concat(Object(O.a)(t.persons),[e])),t.setNotification({error:!1,message:"Added ".concat(t.newName)})})).catch((function(){t.setNotification({error:!0,message:"contact not saved"})}));t.setNewName(""),t.setNewNum("")}},children:"add"})})]})},N=function(e){var t=e.state,n=t.searchResults;return Object(l.jsx)("div",{children:n.length>0&&n.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{children:[e.name," ",e.number]}),Object(l.jsx)("span",{style:{marginLeft:"5px",color:"red"},onClick:function(){var n;n=e,window.confirm("Delete ".concat(n.name,"?"))&&b(n.id).then((function(){var e=t.searchResults.filter((function(e){return e.id!==n.id}));t.setSearchResults(e),t.setNotification({error:!1,message:"contact deleted"})})).catch((function(){t.setNotification({error:!0,message:"".concat(n.name," not found")})}))},children:"X"})]},e.id)}))})},x=function(e){var t=e.alert,n=Object(c.useRef)();return Object(c.useEffect)((function(){setTimeout((function(){n.current.style.display="none"}),3e3)})),t.error?Object(l.jsx)("div",{ref:n,className:"error-alert",children:t.message}):Object(l.jsx)("div",{ref:n,className:"success-alert",children:t.message})},w=(n(41),function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(o.a)(r,2),i=a[0],u=a[1],j=Object(c.useState)(""),f=Object(o.a)(j,2),m=f[0],b=f[1],O=Object(c.useState)([]),w=Object(o.a)(O,2),v=w[0],g=w[1],y=Object(c.useState)(!1),S=Object(o.a)(y,2),R=S[0],k=S[1],E={persons:n,setPersons:s,newName:i,setNewName:u,newNum:m,setNewNum:b,searchResults:v,setSearchResults:g,setNotification:k};return Object(c.useEffect)((function(){d().then((function(e){s(e)}))}),[v]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Phonebook"}),R&&Object(l.jsx)(x,{alert:R}),Object(l.jsx)(h,{state:E}),Object(l.jsx)("h3",{children:"Add new contact"}),Object(l.jsx)(p,{state:E}),Object(l.jsx)("h2",{children:"Numbers"}),Object(l.jsx)(N,{state:E})]})});a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.dec76638.chunk.js.map