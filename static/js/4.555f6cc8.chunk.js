/*! For license information please see 4.555f6cc8.chunk.js.LICENSE.txt */
(this["webpackJsonpmy_first-social_network"]=this["webpackJsonpmy_first-social_network"]||[]).push([[4],{301:function(e,s,r){e.exports={users:"Users_users__3xWl7",friends:"Users_friends__11c5J",label:"Users_label__ir8A5",flex:"Users_flex__1gJK_",min:"Users_min__3z587",user:"Users_user__2DpFJ",userTextDescription:"Users_userTextDescription__2ATVm",userFullName:"Users_userFullName__2C3_H",userStatus:"Users_userStatus__1MLzq",userLocation:"Users_userLocation__1sGxj",cityCountry:"Users_cityCountry__3manJ",userCityCountry:"Users_userCityCountry__1PDCn",button:"Users_button__BpvNl",slider:"Users_slider__1VFYJ",pageButton:"Users_pageButton__1Fyqk",selected:"Users_selected__3M9hQ"}},302:function(e,s,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function t(){for(var e=[],s=0;s<arguments.length;s++){var n=arguments[s];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=t.apply(null,n);i&&e.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):void 0===(n=function(){return t}.apply(s,[]))||(e.exports=n)}()},312:function(e,s,r){"use strict";r.r(s);var n=r(1),t=r(18),o=r(97),i=r(27),l=r(16),c=r(127),u=r(301),a=r.n(u),g=r(302),j=r.n(g),f=r(0),d=function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsx)(c.a,{userId:e.user.id,userFollowed:e.user.followed,followingInProgress:e.followingInProgress,followingUser:e.followingUser,unfollowingUser:e.unfollowingUser})}),Object(f.jsx)("div",{children:Object(f.jsx)(l.b,{to:"/profile/"+e.user.id,target:"_blank",children:Object(f.jsx)("button",{className:a.a.button,children:"New tab"})})})]})},b=function(e){return Object(f.jsxs)("div",{className:a.a.user,children:[Object(f.jsx)(l.b,{to:"/profile/"+e.u.id,className:a.a.min,children:Object(f.jsx)("img",{src:null!=e.u.photos.large?e.u.photos.large:"https://slovnet.ru/wp-content/uploads/2018/12/7-67.jpg"})}),Object(f.jsxs)("div",{className:a.a.userTextDescription,children:[Object(f.jsx)("div",{className:a.a.userFullName,children:e.u.name}),Object(f.jsx)("div",{className:a.a.userStatus,children:e.u.status}),Object(f.jsx)("div",{className:a.a.userLocation,children:Object(f.jsxs)("splan",{children:[Object(f.jsxs)("div",{className:a.a.cityCountry,children:[Object(f.jsx)("div",{children:"City:"}),Object(f.jsx)("div",{children:"Country:"})]}),Object(f.jsxs)("div",{className:a.a.userCityCountry,children:[Object(f.jsx)("div",{children:"props.u.location.city"}),Object(f.jsx)("div",{children:"props.u.location.country"})]})]})})]})]})},h=function(e){var s=Math.ceil(e.pages.length/7),r=Object(n.useState)(1),t=Object(i.a)(r,2),l=t[0],c=t[1],u=7*(l-1)+1,g=7*l;return Object(f.jsxs)("div",{className:a.a.slider,children:[l>1&&Object(f.jsx)("button",{className:a.a.pageButton,onClick:function(){return c(1)},children:"\u276e\u276e"}),l>1&&Object(f.jsx)("button",{className:a.a.pageButton,onClick:function(){return c(l-1)},children:"\u276e"}),e.pages.filter((function(e){return e>=u&&e<=g})).map((function(s){return Object(f.jsx)("span",{children:Object(f.jsx)("button",{onClick:function(){return e.onPageChanged(s)},className:j()(a.a.pageButton,Object(o.a)({},a.a.selected,e.currentPage===s)),children:s})})})),l<s&&Object(f.jsx)("button",{className:a.a.pageButton,onClick:function(){return c(l+1)},children:"\u276f"}),l<s&&Object(f.jsx)("button",{className:a.a.pageButton,onClick:function(){return c(s)},children:"\u276f\u276f"})]})},p=function(e){return Object(f.jsxs)("div",{className:a.a.users,children:[Object(f.jsx)("div",{className:a.a.label,children:"Guys:"}),Object(f.jsx)(h,{pages:e.pages,onPageChanged:e.onPageChanged,currentPage:e.currentPage}),e.users.map((function(s){return Object(f.jsxs)("div",{className:a.a.flex,children:[Object(f.jsx)(b,{u:s}),Object(f.jsx)(d,{user:s,followingInProgress:e.followingInProgress,followingUser:e.followingUser,unfollowingUser:e.unfollowingUser})]},s.id)}))]})},O=function(e){return Object(f.jsxs)("div",{className:a.a.friends,children:[Object(f.jsx)("div",{className:a.a.label,children:e.isAuth?"Friends:":"Please Login to see your friends"}),e.friends.map((function(s){return Object(f.jsxs)("div",{className:a.a.flex,children:[Object(f.jsx)(b,{u:s}),Object(f.jsx)(d,{user:s,followingInProgress:e.followingInProgress,followingUser:e.followingUser,unfollowingUser:e.unfollowingUser})]},s.id)}))]})},x=function(e){return Object(f.jsxs)("div",{className:a.a.flex,children:[Object(f.jsx)(p,{pages:e.pages,onPageChanged:e.onPageChanged,currentPage:e.currentPage,users:e.users,followingInProgress:e.followingInProgress,followingUser:e.followingUser,unfollowingUser:e.unfollowingUser}),Object(f.jsx)(O,{isAuth:e.isAuth,friends:e.friends,followingInProgress:e.followingInProgress,followingUser:e.followingUser,unfollowingUser:e.unfollowingUser})]})},_=r(69),w=r(51),U=r(17);s.default=Object(t.b)((function(e){return{isAuth:Object(U.j)(e),users:Object(U.t)(e),friends:Object(U.g)(e),pageSize:Object(U.n)(e),totalUsersCount:Object(U.s)(e),currentPage:Object(U.c)(e),totalFriendsCount:Object(U.r)(e),isFetching:Object(U.k)(e),followingInProgress:Object(U.f)(e)}}),{followUser:w.b,unfollowUser:w.h,setCurrentPage:w.f,toggleFollowingProgress:w.g,getUsersThunkCreator:w.e,getFriendsThunkCreator:w.d,followUserThunkCreator:w.c,unfollowUserThunkCreator:w.i})((function(e){Object(n.useEffect)((function(){e.getUsersThunkCreator(e.currentPage,e.pageSize),e.getFriendsThunkCreator(e.currentFriendPage,e.pageSize)}),[]);for(var s=Math.ceil(e.totalUsersCount/e.pageSize),r=[],t=1;t<=s;t++)r.push(t);return Object(f.jsx)(f.Fragment,{children:e.isFetching?Object(f.jsx)(_.a,{}):Object(f.jsx)(x,{isAuth:e.isAuth,pages:r,onPageChanged:function(s){return e.getUsersThunkCreator(s,e.pageSize)},currentPage:e.currentPage,users:e.users,friends:e.friends,followingUser:function(s){return e.followUserThunkCreator(s)},unfollowingUser:function(s){return e.unfollowUserThunkCreator(s)},followingInProgress:e.followingInProgress})})}))}}]);
//# sourceMappingURL=4.555f6cc8.chunk.js.map