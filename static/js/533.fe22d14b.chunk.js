"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[533],{3533:function(e,n,t){t.r(n),t.d(n,{default:function(){return ie}});var r=t(9439),o=t(2791),a=t(9434),i=t(3634),u="NOT_FOUND";var c=function(e,n){return e===n};function s(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,o=void 0===r?c:r,a=t.maxSize,i=void 0===a?1:a,s=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}}(o),p=1===i?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:u},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return u}return{get:r,put:function(n,o){r(n)===u&&(t.unshift({key:n,value:o}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,l);function f(){var n=p.get(arguments);if(n===u){if(n=e.apply(null,arguments),s){var t=p.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}p.put(arguments,n)}return n}return f.clearCache=function(){return p.clear()},f}function l(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function p(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var a,i=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=u,p=s.memoizeOptions,f=void 0===p?t:p,m=Array.isArray(f)?f:[f],d=l(r),h=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(m)),v=e((function(){for(var e=[],n=d.length,t=0;t<n;t++)e.push(d[t].apply(null,arguments));return a=h.apply(null,e)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:h,dependencies:d,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),v};return o}var f=p(s),m=function(e){return e.contacts.loading},d=function(e){return e.contacts.items},h=function(e){return e.filter},v=f([d,h],(function(e,n){return n?e.filter((function(e){return e.name.toLowerCase().includes(n)})):e})),g=t(7107),y=t(7012),x=t(9164),b=t(4708),Z=t(4554),j=t(3366),w=t(7462),k=t(8182),C=t(8519),S=t(4419),N=t(6934),A=t(1402),W=t(4036),B=t(5878),R=t(1217);function F(e){return(0,R.Z)("MuiTypography",e)}(0,B.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var M=t(184),T=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],P=(0,N.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.variant&&n[t.variant],"inherit"!==t.align&&n["align".concat((0,W.Z)(t.align))],t.noWrap&&n.noWrap,t.gutterBottom&&n.gutterBottom,t.paragraph&&n.paragraph]}})((function(e){var n=e.theme,t=e.ownerState;return(0,w.Z)({margin:0},t.variant&&n.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})})),E={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},O=o.forwardRef((function(e,n){var t=(0,A.Z)({props:e,name:"MuiTypography"}),r=function(e){return z[e]||e}(t.color),o=(0,C.Z)((0,w.Z)({},t,{color:r})),a=o.align,i=void 0===a?"inherit":a,u=o.className,c=o.component,s=o.gutterBottom,l=void 0!==s&&s,p=o.noWrap,f=void 0!==p&&p,m=o.paragraph,d=void 0!==m&&m,h=o.variant,v=void 0===h?"body1":h,g=o.variantMapping,y=void 0===g?E:g,x=(0,j.Z)(o,T),b=(0,w.Z)({},o,{align:i,color:r,className:u,component:c,gutterBottom:l,noWrap:f,paragraph:d,variant:v,variantMapping:y}),Z=c||(d?"p":y[v]||E[v])||"span",N=function(e){var n=e.align,t=e.gutterBottom,r=e.noWrap,o=e.paragraph,a=e.variant,i=e.classes,u={root:["root",a,"inherit"!==e.align&&"align".concat((0,W.Z)(n)),t&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,S.Z)(u,F,i)}(b);return(0,M.jsx)(P,(0,w.Z)({as:Z,ref:n,ownerState:b,className:(0,k.Z)(N.root,u)},x))})),q=t(9456),I=t(3736),D=function(){var e=(0,a.I0)(),n=(0,o.useState)(""),t=(0,r.Z)(n,2),u=t[0],c=t[1],s=(0,o.useState)(""),l=(0,r.Z)(s,2),p=l[0],f=l[1],m=(0,a.v9)(d),h=(0,g.Z)();return(0,M.jsx)(y.Z,{theme:h,children:(0,M.jsxs)(x.Z,{component:"main",maxWidth:"xs",children:[(0,M.jsx)(b.ZP,{}),(0,M.jsxs)(Z.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,M.jsx)(O,{component:"h1",variant:"h3",sx:{color:"primary.main"},children:"Phonebook"}),(0,M.jsxs)(Z.Z,{component:"form",onSubmit:function(n){n.preventDefault();var t=n.currentTarget;m.filter((function(e){return e.name.toLowerCase()===u.toLowerCase()})).length?alert("".concat(u," is already in contacts")):e((0,i.uK)({name:u,number:p})),t.reset()},sx:{mt:1},children:[(0,M.jsx)(q.Z,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoComplete:"Name",autoFocus:!0,onChange:function(e){return c(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,M.jsx)(q.Z,{margin:"normal",required:!0,fullWidth:!0,id:"number",label:"Number",name:"number",autoComplete:"Number",autoFocus:!0,onChange:function(e){return f(e.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,M.jsx)(I.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add contact"})]})]})]})})},L=t(4942),_=t(2466),G=t(3457),$=t(7078),J=t(5080),K=t(1184),U=t(5682),H=["component","direction","spacing","divider","children","className","useFlexGap"],Q=(0,J.Z)(),V=(0,G.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}});function X(e){return(0,$.Z)({props:e,name:"MuiStack",defaultTheme:Q})}function Y(e,n){var t=o.Children.toArray(e).filter(Boolean);return t.reduce((function(e,r,a){return e.push(r),a<t.length-1&&e.push(o.cloneElement(n,{key:"separator-".concat(a)})),e}),[])}var ee=function(e){var n=e.ownerState,t=e.theme,r=(0,w.Z)({display:"flex",flexDirection:"column"},(0,K.k9)({theme:t},(0,K.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var o=(0,U.hB)(t),a=Object.keys(t.breakpoints.values).reduce((function(e,t){return("object"===typeof n.spacing&&null!=n.spacing[t]||"object"===typeof n.direction&&null!=n.direction[t])&&(e[t]=!0),e}),{}),i=(0,K.P$)({values:n.direction,base:a}),u=(0,K.P$)({values:n.spacing,base:a});"object"===typeof i&&Object.keys(i).forEach((function(e,n,t){if(!i[e]){var r=n>0?i[t[n-1]]:"column";i[e]=r}}));r=(0,_.Z)(r,(0,K.k9)({theme:t},u,(function(e,t){return n.useFlexGap?{gap:(0,U.NA)(o,e)}:{"& > :not(style) + :not(style)":(0,L.Z)({margin:0},"margin".concat((r=t?i[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,U.NA)(o,e))};var r})))}return r=(0,K.dt)(t.breakpoints,r)};var ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,t=void 0===n?V:n,r=e.useThemeProps,a=void 0===r?X:r,i=e.componentName,u=void 0===i?"MuiStack":i,c=function(){return(0,S.Z)({root:["root"]},(function(e){return(0,R.Z)(u,e)}),{})},s=t(ee),l=o.forwardRef((function(e,n){var t=a(e),r=(0,C.Z)(t),o=r.component,i=void 0===o?"div":o,u=r.direction,l=void 0===u?"column":u,p=r.spacing,f=void 0===p?0:p,m=r.divider,d=r.children,h=r.className,v=r.useFlexGap,g=void 0!==v&&v,y=(0,j.Z)(r,H),x={direction:l,spacing:f,useFlexGap:g},b=c();return(0,M.jsx)(s,(0,w.Z)({as:i,ownerState:x,ref:n,className:(0,k.Z)(b.root,h)},y,{children:m?Y(d,m):d}))}));return l}({createStyledComponent:(0,N.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}}),useThemeProps:function(e){return(0,A.Z)({props:e,name:"MuiStack"})}}),te=ne,re=function(){var e=(0,a.v9)(v);return(0,M.jsx)(te,{direction:"column",justifyContent:"flex-start",alignItems:"stretch",spacing:1,sx:{width:"100%",maxWidth:380,bgcolor:"background.paper",m:"0 auto"},children:e.map((function(e){return(0,M.jsxs)(O,{variant:"subtitle1",children:[e.name,": ",e.number]},e.id)}))})},oe=t(4808),ae=function(){var e=(0,a.v9)(h),n=(0,a.I0)(),t=(0,g.Z)();return(0,M.jsx)(y.Z,{theme:t,children:(0,M.jsxs)(x.Z,{component:"main",maxWidth:"xs",children:[(0,M.jsx)(b.ZP,{}),(0,M.jsxs)(Z.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,M.jsx)(O,{component:"h2",variant:"h4",sx:{color:"primary.main"},children:"Contacts"}),(0,M.jsx)(q.Z,{margin:"normal",required:!0,fullWidth:!0,id:"filter",label:"Find contacts by name",value:e,onChange:function(e){return t=e.target.value,n((0,oe.T)(t.toLowerCase()));var t},autoFocus:!0})]})]})})};function ie(){var e=(0,a.v9)(m),n=(0,a.I0)();return(0,o.useEffect)((function(){n((0,i.yF)())}),[n]),(0,M.jsxs)("div",{style:{padding:16},children:[(0,M.jsx)(D,{}),(0,M.jsx)(ae,{}),e?(0,M.jsx)("div",{children:"'Request in progress...'"}):(0,M.jsx)(re,{})]})}}}]);
//# sourceMappingURL=533.fe22d14b.chunk.js.map