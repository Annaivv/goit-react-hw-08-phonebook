"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[586],{586:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,a,i,s,o,c,d=t(439),u=t(168),l=t(444),p=l.ZP.form(r||(r=(0,u.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding: 16px;\n  max-width: 300px;\n"]))),x=l.ZP.label(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),h=l.ZP.input(i||(i=(0,u.Z)(["\n  padding: 4px;\n  font: inherit;\n  margin-bottom: 8px;\n"]))),m=t(434),f=t(791),b=t(634),j=function(n){return n.contacts.loading},g=function(n){return n.contacts.items},Z=t(184),v=function(){var n=(0,m.I0)(),e=(0,f.useState)(""),t=(0,d.Z)(e,2),r=t[0],a=t[1],i=(0,f.useState)(""),s=(0,d.Z)(i,2),o=s[0],c=s[1],u=(0,m.v9)(g);return(0,Z.jsxs)(p,{onSubmit:function(e){e.preventDefault();var t=e.currentTarget;u.filter((function(n){return n.name.toLowerCase()===r.toLowerCase()})).length?alert("".concat(r," is already in contacts")):n((0,b.uK)({name:r,number:o})),t.reset()},autoComplete:"off",children:[(0,Z.jsxs)(x,{children:["Name",(0,Z.jsx)(h,{type:"text",name:"name",onChange:function(n){return a(n.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,Z.jsxs)(x,{children:["Phone",(0,Z.jsx)(h,{type:"tel",name:"number",onChange:function(n){return c(n.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,Z.jsx)("button",{type:"submit",children:"Add contact"})]})},y=l.ZP.ul(s||(s=(0,u.Z)(["\n  margin-top: 20px;\n"]))),C=l.ZP.li(o||(o=(0,u.Z)(["\n  padding-top: 4px;\n  padding-bottom: 4px;\n"]))),w=l.ZP.div(c||(c=(0,u.Z)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 300px;\n"]))),k=function(n){var e=n.contact,t=(0,m.I0)();return(0,Z.jsxs)(w,{children:[(0,Z.jsxs)("p",{children:[(0,Z.jsx)("span",{children:e.name}),(0,Z.jsx)("span",{children:": "}),(0,Z.jsx)("span",{children:e.number.toString()})]}),(0,Z.jsx)("button",{type:"button",onClick:function(){return t((0,b.GK)(e.id))},children:"Delete"})]})},P=function(){var n=(0,m.v9)(g);return(0,Z.jsx)(y,{children:n.map((function(n){return(0,Z.jsx)(C,{children:(0,Z.jsx)(k,{contact:n})},n.id)}))})};function A(){var n=(0,m.v9)(j),e=(0,m.I0)();return(0,f.useEffect)((function(){e((0,b.yF)())}),[e]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("h1",{children:"Phonebook"}),(0,Z.jsx)(v,{}),(0,Z.jsx)("h2",{children:"Contacts"}),n?(0,Z.jsx)("div",{children:"'Request in progress...'"}):(0,Z.jsx)(P,{})]})}}}]);
//# sourceMappingURL=586.a2217478.chunk.js.map