(this["webpackJsonpmy_first-social_network"]=this["webpackJsonpmy_first-social_network"]||[]).push([[5],{363:function(e,t,c){e.exports={loginForm:"Login_loginForm__5Tkyu",inputForm:"Login_inputForm__bOA0w"}},366:function(e,t,c){"use strict";c.r(t);c(0);var a=c(176),n=c(177),i=c(36),o=c(19),r=c(49),s=c(83),m=c(73),l=c(30),j=c(363),b=c.n(j),p=c(1),u=Object(s.a)("input"),h=Object(r.b)(6),d=Object(n.a)({form:"login"})((function(e){var t=e.handleSubmit,c=e.error,n=e.captchaURL;return Object(p.jsxs)("form",{onSubmit:t,children:[Object(p.jsx)("div",{className:b.a.inputForm,children:Object(p.jsx)(a.a,{name:"email",component:u,placeholder:"email",validate:[r.c]})}),Object(p.jsx)("div",{className:b.a.inputForm,children:Object(p.jsx)(a.a,{name:"password",component:u,placeholder:"password",type:"password",validate:[r.c,h]})}),Object(p.jsxs)("div",{className:b.a.inputForm,children:[Object(p.jsx)(a.a,{name:"rememberMe",component:"input",type:"checkbox"})," Remember me"]}),Object(p.jsx)("button",{className:b.a.inputForm,children:"Login"}),c,n&&Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:n}),Object(p.jsx)(a.a,{name:"captcha",component:u,placeholder:"Captcha symbols",validate:[r.c]})]})]})}));t.default=Object(i.b)((function(e){return{isAuth:Object(l.i)(e),captchaURL:Object(l.b)(e)}}),{loginThunkCreator:m.c})((function(e){var t=e.isAuth,c=e.captchaURL,a=e.loginThunkCreator;return t?Object(p.jsx)(o.a,{to:"/profile"}):Object(p.jsx)("div",{className:b.a.loginForm,children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Please Login"}),Object(p.jsx)(d,{onSubmit:function(e){return a(e.email,e.password,e.rememberMe,e.captcha)},captchaURL:c})]})})}))}}]);
//# sourceMappingURL=5.491584b2.chunk.js.map