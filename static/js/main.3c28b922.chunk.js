(this["webpackJsonpmy_first-social_network"]=this["webpackJsonpmy_first-social_network"]||[]).push([[0],{128:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var A=n(44),r=n(4),s="dialogs/SEND-MESSAGE",o={dialogs:[{id:1,name:"\u0410\u043d\u0442\u043e\u043d"},{id:2,name:"\u041d\u0430\u0441\u0442\u044f (\u043b\u0438\u0441\u0451\u043d\u043e\u043a)"},{id:3,name:"\u041a\u043e\u0442"},{id:4,name:"\u041a\u0438\u0440\u0438\u043b\u043b"},{id:5,name:"\u042f\u0448\u0430"},{id:6,name:"\u042a\u0443\u044a"}],messages:[{id:1,message:"first message"},{id:2,message:"\u0412\u0442\u043e\u0440\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"},{id:3,message:"Powel nahoi"},{id:4,message:"\u092a\u094d\u0930\u0924\u0940\u0915 \u092e\u093e\u0930\u094d\u0917\u0928\u093f\u0930\u093e\u0915\u0930\u0923 \u0915\u0930\u0942 \u0936\u0915\u0924 \u0928\u093e\u0939\u0940"},{id:5,message:"\u0645\u0631\u062d\u0628\u0627 \u0627\u0644\u0639\u0627\u0644\u0645"},{id:6,message:"\u042a\u0443\u044a"}]};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(A.a)(e.messages),[{id:7,message:t.newMessageBody}])});default:return e}};var a=function(e){return{type:s,newMessageBody:e}}},14:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c}));var A=n(134),r=n.n(A).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"df13e065-b76b-4abe-885d-a3a658f4ab16"}}),s={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getFriends:function(e,t){return r.get("users?friend=".concat(!0,"&page=",e,"&count=").concat(t)).then((function(e){return e.data}))},unfollowUser:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},followUser:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))}},o={unfollowUser:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},followUser:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},getIsFollowed:function(e){return r.get("follow/".concat(e)).then((function(e){return e.data}))}},a={getUserProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getProfileStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateProfileStatus:function(e){return r.put("profile/status",{status:e})}},c={getAuthMe:function(){return r.get("auth/me").then((function(e){return e.data}))},loginMe:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logoutMe:function(){return r.delete("auth/login").then((function(e){return e.data}))}}},18:function(e,t,n){"use strict";n.d(t,"h",(function(){return r})),n.d(t,"o",(function(){return s})),n.d(t,"p",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"n",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"l",(function(){return i})),n.d(t,"s",(function(){return l})),n.d(t,"m",(function(){return f})),n.d(t,"g",(function(){return d})),n.d(t,"r",(function(){return g})),n.d(t,"c",(function(){return b})),n.d(t,"q",(function(){return j})),n.d(t,"b",(function(){return p})),n.d(t,"j",(function(){return O})),n.d(t,"f",(function(){return h})),n.d(t,"i",(function(){return w})),n.d(t,"a",(function(){return v})),n.d(t,"k",(function(){return m}));var A=n(137),r=function(e){return e.app.initialized},s=function(e){return e.profilePage.profile},o=function(e){return e.profilePage.status},a=function(e){return e.profilePage.followed},c=function(e){return e.profilePage.posts},u=function(e){return e.dialogsPage.dialogs},i=function(e){return e.dialogsPage.messages},l=Object(A.a)((function(e){return e.usersPage.users}),(function(e){return e})),f=function(e){return e.usersPage.pageSize},d=function(e){return e.usersPage.friends},g=function(e){return e.usersPage.totalUsersCount},b=function(e){return e.usersPage.currentPage},j=function(e){return e.usersPage.totalFriendsCount},p=function(e){return e.usersPage.currentFriendPage},O=function(e){return e.usersPage.isFetching},h=function(e){return e.usersPage.followingInProgress},w=function(e){return e.auth.isAuth},v=function(e){return e.auth.userId},m=function(e){return e.auth.login}},23:function(e,t,n){e.exports={nav:"Navbar_nav__18rVL",item:"Navbar_item__3iMIj",active:"Navbar_active__2k7br"}},292:function(e,t,n){},293:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);var A=n(0),r=n.n(A),s=n(68),o=n.n(s),a=n(17),c=n(16),u=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,302)).then((function(t){var n=t.getCLS,A=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),A(e),r(e),s(e),o(e)}))},i=n(36),l=n(37),f=n(40),d=n(39),g=n(11),b=n(10),j=n(4),p=n(51),O=n.p+"static/media/logo1.8c388a0f.gif",h=n.p+"static/media/logo2.03f6c26f.gif",w=n.p+"static/media/logo3.82da6407.gif",v=n.p+"static/media/logo4.591ef747.gif",m=n(74),B=n.n(m),I=n(1),P=function(e){return Object(I.jsx)("div",{className:B.a.logoutB,children:Object(I.jsx)("img",{src:"data:image/png;base64,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",onClick:e.logout})})},C=function(e){var t=Object(A.useState)(O),n=Object(p.a)(t,2),r=n[0],s=n[1];return Object(I.jsxs)("header",{className:B.a.header,children:[Object(I.jsx)("img",{onClick:function(){switch(r){case O:return s(h);case h:return s(w);case w:return s(v);case v:default:return s(O)}},src:r}),e.isAuth&&Object(I.jsx)(P,{logout:e.logout}),Object(I.jsx)("div",{className:B.a.loginBlock,children:e.isAuth?e.login:Object(I.jsx)(a.b,{to:"/login",children:"Login"})})]})},x=n(38),E=n(18),N=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(I.jsx)(C,Object(j.a)(Object(j.a)({},this.props),{},{logout:this.props.logoutThunkCreator}))}}]),n}(r.a.Component),Q=Object(c.b)((function(e){return{isAuth:Object(E.i)(e),login:Object(E.k)(e)}}),{logoutThunkCreator:x.d})(N),k=n(23),S=n.n(k),q=function(){return Object(I.jsxs)("nav",{className:S.a.nav,children:[Object(I.jsx)("div",{className:S.a.item,children:Object(I.jsx)(a.b,{to:"/profile",activeClassName:S.a.active,children:"Profile"})}),Object(I.jsx)("div",{className:S.a.item,children:Object(I.jsx)(a.b,{to:"/dialogs",activeClassName:S.a.active,children:"Messages"})}),Object(I.jsx)("div",{className:S.a.item,children:Object(I.jsx)(a.b,{to:"/news",activeClassName:S.a.active,children:"News"})}),Object(I.jsx)("div",{className:S.a.item,children:Object(I.jsx)(a.b,{to:"/users",activeClassName:S.a.active,children:"Users"})}),Object(I.jsx)("div",{className:S.a.item,children:Object(I.jsx)(a.b,{to:"/settings",activeClassName:S.a.active,children:"Settings"})})]})},D=n(129),G=n(130),U=n(78),M=n(98),T=n(45),V=n.n(T),y=function(e){return Object(I.jsxs)("div",{className:V.a.post,children:[Object(I.jsx)("img",{src:"https://goldenmost.ru/wp-content/uploads/2017/07/Kon2.jpg"}),Object(I.jsxs)("div",{className:V.a.postText,children:[Object(I.jsx)("div",{children:e.postMessage}),Object(I.jsxs)("div",{className:V.a.likes,children:[" \ud83d\udc4d ",e.likes]})]})]})},X=Object(M.a)("textarea"),z=Object(U.a)(50),Y=Object(G.a)({form:"profileNewPostForm"})((function(e){return Object(I.jsxs)("form",{onSubmit:e.handleSubmit,className:V.a.addPost,children:[Object(I.jsx)(D.a,{name:"newPostBody",component:X,placeholder:"Write a new post...",validate:[U.c,z]}),Object(I.jsx)("button",{children:"+"})]})})),W=function(e){return Object(I.jsxs)("div",{className:V.a.myPosts,children:[Object(I.jsx)(Y,{onSubmit:function(t){return e.addPost(t.newPostBody)}}),e.posts.map((function(e){return Object(I.jsx)(y,{postMessage:e.postMessage,likes:e.likes,id:e.id})}))]})},L=n(8),H=n.n(L),_=n(15),F=n(44),R=n(14),K="profile/ADD-POST",Z="profile/DELETE-POST",J="profile/SET-USER-PROFILE",$="profile/SET-PROFILE-STATUS",ee="profile/IS-FOLLOWED",te={profile:null,status:"",followed:null,posts:[{id:1,postMessage:"Hello world",likes:4},{id:2,postMessage:"\u4f55\u304b\u306e\u3044\u304f\u3064\u304b\u306e\u7a2e\u985e\u306e\u6027\u4ea4\u306e\u8aac\u660e",likes:300},{id:3,postMessage:"\u0415\u0431\u0438\u0441\u0441\u044c \u043e\u043d\u043e \u043a\u043e\u043d\u0451\u043c",likes:76},{id:4,postMessage:".\u0623\u0646\u0627 \u0623\u0643\u0631\u0647 \u0647\u0630\u0647 \u0627\u0644\u0639\u0628\u0627\u0631\u0629\u10d0",likes:13},{id:6,postMessage:"\u041e\u043d\u0430 \u043d\u0435\u0441\u043b\u0430 \u0432 \u0440\u0443\u043a\u0430\u0445 \u043e\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435, \u0442\u0440\u0435\u0432\u043e\u0436\u043d\u044b\u0435 \u0436\u0435\u043b\u0442\u044b\u0435 \u0446\u0432\u0435\u0442\u044b. \u0427\u0435\u0440\u0442 \u0438\u0445 \u0437\u043d\u0430\u0435\u0442, \u043a\u0430\u043a \u0438\u0445 \u0437\u043e\u0432\u0443\u0442, \u043d\u043e \u043e\u043d\u0438 \u043f\u0435\u0440\u0432\u044b\u0435 \u043f\u043e\u0447\u0435\u043c\u0443-\u0442\u043e \u043f\u043e\u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432 \u041c\u043e\u0441\u043a\u0432\u0435.",likes:666},{id:7,postMessage:"\u0412\u044b \u043f\u043e\u043c\u043d\u0438\u0442\u0435,\n\u0412\u044b \u0432\u0441\u0451, \u043a\u043e\u043d\u0435\u0447\u043d\u043e, \u043f\u043e\u043c\u043d\u0438\u0442\u0435,\n\u041a\u0430\u043a \u044f \u0441\u0442\u043e\u044f\u043b,\n\u041f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0432\u0448\u0438\u0441\u044c \u043a \u0441\u0442\u0435\u043d\u0435,\n\u0412\u0437\u0432\u043e\u043b\u043d\u043e\u0432\u0430\u043d\u043d\u043e \u0445\u043e\u0434\u0438\u043b\u0438 \u0432\u044b \u043f\u043e \u043a\u043e\u043c\u043d\u0430\u0442\u0435\n\u0418 \u0447\u0442\u043e-\u0442\u043e \u0440\u0435\u0437\u043a\u043e\u0435\n\u0412 \u043b\u0438\u0446\u043e \u0431\u0440\u043e\u0441\u0430\u043b\u0438 \u043c\u043d\u0435.",likes:228}]},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(j.a)(Object(j.a)({},e),{},{posts:[].concat(Object(F.a)(e.posts),[{id:8,postMessage:t.newPostBody,likes:1337}])});case Z:return Object(j.a)(Object(j.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case J:return Object(j.a)(Object(j.a)({},e),{},{profile:t.profile});case $:return Object(j.a)(Object(j.a)({},e),{},{status:t.status});case ee:return Object(j.a)(Object(j.a)({},e),{},{followed:t.followed});default:return e}},Ae=function(e){return{type:$,status:e}},re=Object(c.b)((function(e){return{posts:Object(E.n)(e)}}),{addPost:function(e){return{type:K,newPostBody:e}}})(W),se=n(71),oe=n(9),ae=n.n(oe),ce=function(e){var t=Object(A.useState)(!1),n=Object(p.a)(t,2),r=n[0],s=n[1],o=Object(A.useState)(e.status),a=Object(p.a)(o,2),c=a[0],u=a[1];Object(A.useEffect)((function(){return u(e.status)}),[e.status]);return Object(I.jsx)("div",{className:ae.a.status,children:r?Object(I.jsx)("input",{onChange:function(e){return u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(c)},value:c,className:ae.a.active}):Object(I.jsx)("div",{className:ae.a.notActive,onClick:function(){return s(!0)},children:e.status||"..."})})},ue=function(e){return Object(I.jsxs)("div",{className:ae.a.userPart,children:[Object(I.jsx)("div",{className:ae.a.image,children:Object(I.jsx)("img",{className:ae.a.image,src:null!=e.profile.photos.large?e.profile.photos.large:"https://otvet.imgsmail.ru/download/15f4035d0a54e730e4c24b7a574cb20b_i-33.jpg"})}),Object(I.jsxs)("div",{className:ae.a.description,children:[Object(I.jsxs)("div",{className:ae.a.descriptionArea,children:[Object(I.jsx)("div",{className:ae.a.text,children:"Full name:"}),Object(I.jsx)("div",{children:e.profile.fullName})]}),Object(I.jsxs)("div",{className:ae.a.descriptionArea,children:[Object(I.jsx)("div",{className:ae.a.text,children:"About me:"}),Object(I.jsx)("div",{children:e.profile.aboutMe})]}),Object(I.jsxs)("div",{className:ae.a.descriptionArea,children:[Object(I.jsx)("div",{className:ae.a.text,children:"Looking for a job:"}),Object(I.jsx)("div",{children:e.profile.lookingForAJob?"Yes":"No"})]}),Object(I.jsxs)("div",{className:ae.a.descriptionArea,children:[Object(I.jsx)("div",{className:ae.a.text,children:"Description:"}),Object(I.jsx)("div",{children:e.profile.lookingForAJobDescription})]})]})]})},ie=function(e){return Object(I.jsx)("div",{className:ae.a.links,children:Object.keys(e.contacts).map((function(t){return e.contacts[t]?Object(I.jsxs)("div",{className:ae.a.linksArea,children:[t,": ",Object(I.jsx)("a",{href:e.contacts[t],target:"_blank",children:e.contacts[t]})]}):Object(I.jsxs)("div",{className:ae.a.linksArea,children:[t,": ..."]})}))})},le=function(e){return Object(I.jsxs)("div",{className:ae.a.buttons,children:[Object(I.jsx)("div",{children:e.followed?Object(I.jsx)(de,{userId:e.userId,followingInProgress:e.followingInProgress,unfollowingUser:e.unfollowingUser}):Object(I.jsx)(fe,{userId:e.userId,followingInProgress:e.followingInProgress,followingUser:e.followingUser})}),Object(I.jsx)("button",{className:ae.a.button,children:"Copy link"}),Object(I.jsx)(a.b,{to:"/users",children:Object(I.jsx)("button",{className:ae.a.pbutton,children:"Back to users"})})]})},fe=function(e){return Object(I.jsx)("button",{className:ae.a.button,disabled:e.followingInProgress.some((function(t){return t===e.userId})),onClick:function(){return e.followingUser(e.userId)},children:"\u2714\ufe0f Follow"})},de=function(e){return Object(I.jsx)("button",{className:ae.a.button,disabled:e.followingInProgress.some((function(t){return t===e.userId})),onClick:function(){return e.unfollowingUser(e.userId)},children:"\u274c Unfollow"})},ge=function(e){return e.profile?Object(I.jsxs)("div",{className:ae.a.profileInfo,children:[Object(I.jsx)(ue,{profile:e.profile}),Object(I.jsx)(ie,{contacts:e.profile.contacts}),Object(I.jsx)(ce,{status:e.status,updateStatus:e.updateStatus}),Object(I.jsx)(le,{followingUser:e.followingUser,unfollowingUser:e.unfollowingUser,followed:e.followed,userId:e.profile.userId,followingInProgress:e.followingInProgress})]}):Object(I.jsx)(se.a,{})},be=n(52),je=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var A=arguments.length,r=new Array(A),s=0;s<A;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).followingUser=function(t){return e.props.followUserThunkCreator(t)},e.unfollowingUser=function(t){return e.props.unfollowUserThunkCreator(t)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authUserId)||this.props.history.push("/login"),this.props.getUserProfileThunkCreator(e),this.props.getProfileStatusThunkCreator(e),this.props.isFollowedThunkCreator(e)}},{key:"render",value:function(){return Object(I.jsx)(ge,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateProfileStatusThunkCreator,followingUser:this.followingUser,unfollowingUser:this.unfollowingUser,followed:this.props.followed,followingInProgress:this.props.followingInProgress})}}]),n}(r.a.Component),pe=Object(b.d)(Object(c.b)((function(e){return{authUserId:Object(E.a)(e),isAuth:Object(E.i)(e),profile:Object(E.o)(e),status:Object(E.p)(e),followed:Object(E.e)(e),followingInProgress:Object(E.f)(e)}}),{getUserProfileThunkCreator:function(e){return function(){var t=Object(_.a)(H.a.mark((function t(n){var A;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.c.getUserProfile(e);case 2:A=t.sent,n({type:J,profile:A});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getProfileStatusThunkCreator:function(e){return function(){var t=Object(_.a)(H.a.mark((function t(n){var A;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.c.getProfileStatus(e);case 2:A=t.sent,n(Ae(A));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateProfileStatusThunkCreator:function(e){return function(){var t=Object(_.a)(H.a.mark((function t(n){return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.c.updateProfileStatus(e);case 2:0===t.sent.data.resultCode&&n(Ae(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},followUserThunkCreator:be.c,unfollowUserThunkCreator:be.i,isFollowedThunkCreator:function(e){return function(){var t=Object(_.a)(H.a.mark((function t(n){var A;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.a.getIsFollowed(e);case 2:A=t.sent,n({type:ee,followed:A});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),g.f)(je),Oe=n(97),he=n.n(Oe),we=function(){return Object(I.jsx)("div",{className:he.a.background,children:Object(I.jsx)("img",{src:"https://gazetaingush.ru/sites/default/files/pubs/obshchestvo/2021/05/priroda-ingushetii-1200x5401.jpg"})})},ve=function(e){return Object(I.jsxs)("div",{className:he.a.profileWrapper,children:[Object(I.jsx)(we,{}),Object(I.jsx)(pe,{}),Object(I.jsx)(re,{})]})},me="app/INITIALIZED-SUCCESS",Be={initialized:!1},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},Pe=(n(292),r.a.lazy((function(){return n.e(7).then(n.bind(null,307))}))),Ce=r.a.lazy((function(){return n.e(3).then(n.bind(null,306))})),xe=r.a.lazy((function(){return n.e(5).then(n.bind(null,303))})),Ee=r.a.lazy((function(){return n.e(6).then(n.bind(null,304))})),Ne=r.a.lazy((function(){return n.e(4).then(n.bind(null,305))})),Qe=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeAppThunkCreator()}},{key:"render",value:function(){return this.props.initialized?Object(I.jsxs)("div",{className:"app-wrapper",children:[Object(I.jsx)(Q,{}),Object(I.jsx)(q,{}),Object(I.jsx)(A.Suspense,{fallback:Object(I.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:Object(I.jsxs)("div",{className:"content-wrapper",children:[Object(I.jsx)(g.b,{path:"/profile/:userId?",render:function(){return Object(I.jsx)(ve,{})}}),Object(I.jsx)(g.b,{path:"/dialogs",render:function(){return Object(I.jsx)(Ce,{})}}),Object(I.jsx)(g.b,{path:"/news",render:function(){return Object(I.jsx)(xe,{})}}),Object(I.jsx)(g.b,{path:"/users",render:function(){return Object(I.jsx)(Pe,{})}}),Object(I.jsx)(g.b,{path:"/settings",render:function(){return Object(I.jsx)(Ee,{})}}),Object(I.jsx)(g.b,{path:"/login",render:function(){return Object(I.jsx)(Ne,{})}})]})})]}):Object(I.jsx)(se.a,{})}}]),n}(r.a.Component),ke=Object(b.d)(g.f,Object(c.b)((function(e){return{initialized:Object(E.h)(e)}}),{initializeAppThunkCreator:function(){return function(e){e(Object(x.b)()).then((function(){return e({type:me})}))}}}))(Qe),Se=n(136),qe=n(128),De=n(131),Ge=Object(b.c)({profilePage:ne,dialogsPage:qe.a,usersPage:be.a,auth:x.a,form:De.a,app:Ie}),Ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,Me=Object(b.e)(Ge,Ue(Object(b.a)(Se.a)));n(293);o.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(a.a,{children:Object(I.jsx)(c.a,{store:Me,children:Object(I.jsx)(ke,{})})})}),document.getElementById("root")),u()},38:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return g}));var A=n(8),r=n.n(A),s=n(15),o=n(4),a=n(14),c=n(57),u="auth/SET-USER_DATA",i={userId:null,email:null,login:null,isAuth:!1};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(o.a)(Object(o.a)({},e),t.data);default:return e}};var l=function(e,t,n,A){return{type:u,data:{userId:e,email:t,login:n,isAuth:A}}},f=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){var n,A,s,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.b.getAuthMe();case 2:0===(n=e.sent).resultCode&&(A=n.data,s=A.id,o=A.email,c=A.login,t(l(s,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n){return function(){var A=Object(s.a)(r.a.mark((function A(s){var o,u;return r.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,a.b.loginMe(e,t,n);case 2:0===(o=A.sent).resultCode?s(f()):(u=o.messages.length>0?o.messages[0]:"Some error",s(Object(c.a)("login",{_error:u})));case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},g=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.b.logoutMe();case 2:0===e.sent.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},45:function(e,t,n){e.exports={myPosts:"MyPosts_myPosts__ps-Rc",addPost:"MyPosts_addPost__1AOu9",post:"MyPosts_post__24bUN",likes:"MyPosts_likes__3LhCP",postText:"MyPosts_postText__q2nal"}},52:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"h",(function(){return m})),n.d(t,"f",(function(){return B})),n.d(t,"g",(function(){return P})),n.d(t,"e",(function(){return C})),n.d(t,"d",(function(){return x})),n.d(t,"c",(function(){return N})),n.d(t,"i",(function(){return Q}));var A=n(8),r=n.n(A),s=n(15),o=n(44),a=n(4),c=n(14),u=function(e,t,n,A){return e.map((function(e){return e[n]===t?Object(a.a)(Object(a.a)({},e),A):e}))},i="users/SET-USERS",l="users/SET-FRIENDS",f="users/FOLLOW",d="users/UNFOLLOW",g="users/SET-CURRENT-PAGE",b="users/SET-TOTAL-COUNT-USERS",j="users/SET-CURRENT-FRIEND-PAGE",p="users/SET-TOTAL-COUNT-FRIENDS",O="users/TOGGLE-IS-FETCHING",h="users/TOGGLE-IS-FOLLOWING-PROGRESS",w={users:[],friends:[],pageSize:8,totalUsersCount:0,currentPage:1,totalFriendsCount:0,currentFriendPage:1,isFetching:!1,followingInProgress:[]},v=(t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(a.a)(Object(a.a)({},e),{},{users:t.users});case l:return Object(a.a)(Object(a.a)({},e),{},{friends:t.friends});case f:return Object(a.a)(Object(a.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!0})});case d:return Object(a.a)(Object(a.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!1})});case g:return Object(a.a)(Object(a.a)({},e),{},{currentPage:t.currentPage});case b:return Object(a.a)(Object(a.a)({},e),{},{totalUsersCount:t.totalUsersCount});case j:return Object(a.a)(Object(a.a)({},e),{},{currentFriendPage:t.currentFriendPage});case p:return Object(a.a)(Object(a.a)({},e),{},{totalFriendsCount:t.totalFriendsCount});case O:return Object(a.a)(Object(a.a)({},e),{},{isFetching:t.isFetching});case h:return Object(a.a)(Object(a.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},function(e){return{type:f,userId:e}}),m=function(e){return{type:d,userId:e}},B=function(e){return{type:g,currentPage:e}},I=function(e){return{type:O,isFetching:e}},P=function(e,t){return{type:h,isFetching:e,userId:t}},C=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(A){var s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return A(I(!0)),A(B(e)),n.next=4,c.d.getUsers(e,t);case 4:s=n.sent,A(I(!1)),A((o=s.items,{type:i,users:o})),A((r=s.totalCount,{type:b,totalUsersCount:r}));case 8:case"end":return n.stop()}var r,o}),n)})));return function(e){return n.apply(this,arguments)}}()},x=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(A){var s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return A(I(!0)),A({type:j,currentFriendPage:e}),n.next=4,c.d.getFriends(e,t);case 4:s=n.sent,A(I(!1)),A((o=s.items,{type:l,friends:o})),A((r=s.totalCount,{type:p,totalFriendsCount:r}));case 8:case"end":return n.stop()}var r,o}),n)})));return function(e){return n.apply(this,arguments)}}()},E=function(){var e=Object(s.a)(r.a.mark((function e(t,n,A,s){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(P(!0,n)),e.next=3,A(n);case 3:0===e.sent.resultCode&&t(s(n)),t(P(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,A,r){return e.apply(this,arguments)}}(),N=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(n,e,c.d.followUser.bind(c.d),v);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Q=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(n,e,c.d.unfollowUser.bind(c.d),m);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},71:function(e,t,n){"use strict";n(0);var A=n.p+"static/media/preloader.246dc11a.svg",r=n(1);t.a=function(e){return Object(r.jsx)("img",{src:A})}},74:function(e,t,n){e.exports={header:"Header_header__VD2Sm",loginBlock:"Header_loginBlock__2c-NW",logoutB:"Header_logoutB__3AREK"}},78:function(e,t,n){"use strict";n.d(t,"c",(function(){return A})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));var A=function(e){if(!e)return"Empty field"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},s=function(e){return function(t){if(t&&t.length<e)return"Min length is ".concat(e," symbols")}}},9:function(e,t,n){e.exports={flex:"ProfileInfo_flex__1EkbR",profileInfo:"ProfileInfo_profileInfo__2QR7I",status:"ProfileInfo_status__3RMld",active:"ProfileInfo_active__3aD_j",notActive:"ProfileInfo_notActive__Boi78",buttons:"ProfileInfo_buttons__c-hD4",button:"ProfileInfo_button__2mYQs",pbutton:"ProfileInfo_pbutton__vgNrb",links:"ProfileInfo_links__1aXUa",linksArea:"ProfileInfo_linksArea__3w-Bw",userPart:"ProfileInfo_userPart__qoscO",image:"ProfileInfo_image__KFPkX",description:"ProfileInfo_description__tjbgX",descriptionArea:"ProfileInfo_descriptionArea__YBA-G",text:"ProfileInfo_text__Qpiiw"}},94:function(e,t,n){e.exports={error:"FormsControls_error__1U_2P",errorMessage:"FormsControls_errorMessage__2n2j1"}},97:function(e,t,n){e.exports={profileWrapper:"Profile_profileWrapper__1Y9Z4",background:"Profile_background__BYxhX"}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var A=n(4),r=n(138),s=(n(0),n(94)),o=n.n(s),a=n(1),c=function(e){return function(t){var n=t.input,s=t.meta,c=Object(r.a)(t,["input","meta"]),u=s.error&&s.touched;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(e,Object(A.a)(Object(A.a)(Object(A.a)({},n),c),{},{className:u&&o.a.error})),u&&Object(a.jsx)("div",{className:o.a.errorMessage,children:s.error})]})}}}},[[294,1,2]]]);
//# sourceMappingURL=main.3c28b922.chunk.js.map