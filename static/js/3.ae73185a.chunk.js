(this["webpackJsonpmy_first-social_network"]=this["webpackJsonpmy_first-social_network"]||[]).push([[3],{359:function(e,s,t){e.exports={messages:"MessageWindow_messages__3e2zF",messagesBody:"MessageWindow_messagesBody__uou-g",message:"MessageWindow_message__3wJMF",sendMess:"MessageWindow_sendMess__2IDY7"}},360:function(e,s,t){e.exports={dialogs:"DialogSelector_dialogs__2CNqO",dialog:"DialogSelector_dialog__2Z94z",dialogCurrent:"DialogSelector_dialogCurrent__2_jhY",dialogText:"DialogSelector_dialogText__1qstm"}},361:function(e,s,t){e.exports={dialogsWrapper:"Dialogs_dialogsWrapper__32OS1"}},367:function(e,s,t){"use strict";t.r(s);var n=t(0),a=t(36),i=t(176),r=t(177),o=t(83),c=t(49),d=t(359),l=t.n(d),g=t(1),j=function(e){return Object(g.jsxs)("div",{className:l.a.message,children:[Object(g.jsx)("img",{src:"https://tgram.ru/wiki/channels/image/audiobooking.jpg"}),Object(g.jsx)("div",{children:Object(g.jsx)("text",{children:e.message})})]})},u=Object(o.a)("textarea"),m=Object(c.a)(100),b=Object(r.a)({form:"dialogMessageForm"})((function(e){return Object(g.jsxs)("form",{onSubmit:e.handleSubmit,className:l.a.sendMess,children:[Object(g.jsx)(i.a,{name:"messageBody",component:u,placeholder:"Write a message...",validate:[c.c,m]}),Object(g.jsx)("button",{children:Object(g.jsx)("img",{src:"https://img.icons8.com/ios/452/paper-plane.png",alt:"Message button"})})]})})),O=function(e){return Object(g.jsxs)("div",{className:l.a.messages,children:[Object(g.jsx)("div",{className:l.a.messagesBody,children:e.messages.map((function(e){return Object(g.jsx)(j,{message:e.message,id:e.id})}))}),Object(g.jsx)(b,{onSubmit:function(s){return e.sendMessage(s.messageBody)}})]})},f=t(175),_=t(30),x=Object(a.b)((function(e){return{messages:Object(_.l)(e)}}),{sendMessage:f.b})(O),p=t(46),h=t(65),w=t(360),M=t.n(w),v=t(51),S=t(7),k=t.n(S),N=function(e){return Object(g.jsxs)("div",{className:k()(M.a.dialog,Object(h.a)({},M.a.dialogCurrent,e.currentURL===e.id.toString())),children:[Object(g.jsx)("img",{src:e.photo,alt:"friend photo"}),Object(g.jsx)(v.b,{to:"/dialogs/"+e.id,onClick:function(){return e.setUrl(e.id.toString())},children:Object(g.jsx)("div",{className:M.a.dialogText,children:e.name})})]})},W=function(e){return Object(g.jsx)("div",{className:M.a.dialogs,children:e.friends.map((function(s){return Object(g.jsx)(N,{name:s.name,id:s.id,photo:s.photos.small,setUrl:e.setUrl,currentURL:e.url})}))})},y=t(84),C=t(106),D=Object(a.b)((function(e){return{friends:Object(_.f)(e)}}),{getFriendsThunkCreator:y.d})((function(e){var s=window.location.href.split("/"),t=Object(n.useState)(s[s.length-1]),a=Object(p.a)(t,2),i=a[0],r=a[1];return Object(n.useEffect)((function(){e.getFriendsThunkCreator()}),[]),e.friends?Object(g.jsx)(W,{friends:e.friends,url:i,setUrl:r}):Object(g.jsx)(C.a,{})})),U=t(361),B=t.n(U);s.default=function(e){return Object(g.jsxs)("div",{className:B.a.dialogsWrapper,children:[Object(g.jsx)(D,{}),Object(g.jsx)(x,{})]})}}}]);
//# sourceMappingURL=3.ae73185a.chunk.js.map