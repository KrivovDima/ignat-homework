(this["webpackJsonpignat-homework"]=this["webpackJsonpignat-homework"]||[]).push([[0],{16:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2XEKi",errorInput:"SuperInputText_errorInput__1-Cjz",error:"SuperInputText_error__1mA5H"}},17:function(e,t,n){e.exports={blue:"HW4_blue__2n0ER",column:"HW4_column__1zUL1",testSpanError:"HW4_testSpanError__SOq64"}},18:function(e,t,n){e.exports={default:"SuperButton_default__2XSPR",red:"SuperButton_red__3A1EO"}},19:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__t2FSN",spanClassName:"SuperCheckbox_spanClassName__FYsZg"}},25:function(e,t,n){e.exports={App:"App_App__bmmej"}},26:function(e,t,n){e.exports={someClass:"Greeting_someClass__2Kih7",error:"Greeting_error__3WgML"}},33:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(24),s=n.n(c),i=(n(33),n(25)),o=n.n(i),j=n(8),l=n(5),u=n.n(l),d=n(0);var b=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},h=n(2),x=n(7),O=n.n(x);var m=function(e){return Object(d.jsxs)("div",{className:O.a.message,children:[Object(d.jsx)("div",{className:O.a.avatar,children:Object(d.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(d.jsxs)("div",{className:O.a.box,children:[Object(d.jsxs)("div",{className:O.a.content,children:[Object(d.jsx)("div",{className:O.a.name,children:e.name}),Object(d.jsx)("div",{className:O.a.text,children:e.message})]}),Object(d.jsx)("div",{className:O.a.time,children:e.time})]})]})},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Some Name",p="some text",v="22:00";var g=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",Object(d.jsx)(m,{avatar:f,name:_,message:p,time:v}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},C=n(6);var k=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[e.affair.name," ",e.affair.priority]}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var N=function(e){var t=e.data.map((function(t){return Object(d.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var w=function(){var e=Object(r.useState)(S),t=Object(C.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(C.a)(c,2),i=s[0],o=s[1],j=function(e,t){switch(t){case"all":return e;case"high":return e.filter((function(e){return"high"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}))}}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(N,{data:j,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},y=n(28),I=n(26),A=n.n(I),H=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=A.a.error;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:n,className:s}),Object(d.jsx)("button",{onClick:r,children:"add"}),Object(d.jsx)("span",{children:c}),Object(d.jsx)("div",{children:a})]})},E=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(C.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),j=Object(C.a)(o,2),l=j[0],u=j[1],b=t.length;return Object(d.jsx)(H,{name:s,setNameCallback:function(e){var t=e.currentTarget.value;i(t),u("")},addUser:function(){""!==s.trim()?(n(s),alert("Hello ".concat(s,"!")),i("")):u("Enter name")},error:l,totalUsers:b})},F=n(42);var T=function(){var e=Object(r.useState)([]),t=Object(C.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(E,{users:n,addUserCallback:function(e){var t={_id:Object(F.a)(),name:e};a([].concat(Object(y.a)(n),[t]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},M=n(9),W=n(10),J=n(16),P=n.n(J),U=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(W.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(P.a.error," ").concat(i||""),l="".concat(P.a.errorInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(M.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:l},o)),c&&Object(d.jsx)("span",{className:j,children:c})]})},B=n(17),q=n.n(B),K=n(18),L=n.n(K),G=function(e){var t=e.red,n=e.className,r=Object(W.a)(e,["red","className"]),a="".concat(t?L.a.red:L.a.default," ").concat(n);return Object(d.jsx)("button",Object(M.a)({className:a},r))},X=n(19),z=n.n(X),Q=function(e){e.type,e.onChange,e.onChangeChecked;var t=e.className,n=(e.spanClassName,e.children),r=Object(W.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),a="".concat(z.a.checkbox," ").concat(t||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(M.a)({type:"checkbox",onChange:function(e){},className:a},r)),n&&Object(d.jsx)("span",{className:z.a.spanClassName,children:n})]})};var R=function(){var e=Object(r.useState)(""),t=Object(C.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(C.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:q.a.column,children:[Object(d.jsx)(U,{value:n,onChangeText:a,onEnter:s,error:c}),Object(d.jsx)(U,{className:q.a.blue}),Object(d.jsx)(G,{children:"default"}),Object(d.jsx)(G,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(G,{disabled:!0,children:"disabled"}),Object(d.jsx)(Q,{checked:j,onChangeChecked:l,children:"some text "}),Object(d.jsx)(Q,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var Z=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{}),Object(d.jsx)(w,{}),Object(d.jsx)(T,{}),Object(d.jsx)(R,{})]})};function V(){return Object(d.jsx)("div",{children:"Junior"})}function Y(){return Object(d.jsx)("div",{children:"JuniorPlus"})}var $="/pre-junior",D="/junior",ee="/junior-plus";var te=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(h.d,{children:[Object(d.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(h.a,{to:$})}}),Object(d.jsx)(h.b,{path:$,render:function(){return Object(d.jsx)(Z,{})}}),Object(d.jsx)(h.b,{path:D,render:function(){return Object(d.jsx)(V,{})}}),Object(d.jsx)(h.b,{path:ee,render:function(){return Object(d.jsx)(Y,{})}}),Object(d.jsx)(h.b,{render:function(){return Object(d.jsx)(b,{})}})]})})};var ne=function(){return Object(d.jsx)("div",{className:u.a.header,children:Object(d.jsxs)("ul",{className:u.a.menu,children:[Object(d.jsx)("li",{className:u.a.menuItem,children:Object(d.jsx)(j.b,{to:$,className:u.a.link,activeClassName:u.a.active,children:"PreJunior"})}),Object(d.jsx)("li",{className:u.a.menuItem,children:Object(d.jsx)(j.b,{to:D,className:u.a.link,activeClassName:u.a.active,children:"Junior "})}),Object(d.jsx)("li",{className:u.a.menuItem,children:Object(d.jsx)(j.b,{to:ee,className:u.a.link,activeClassName:u.a.active,children:"Junior+"})})]})})};var re=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(ne,{}),Object(d.jsx)(te,{})]})})};var ae=function(){return Object(d.jsx)("div",{className:o.a.App,children:Object(d.jsx)(re,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(ae,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,n){e.exports={header:"Header_header__3LMQF",menu:"Header_menu__2IWHz",menuItem:"Header_menuItem__2GBZv",link:"Header_link__1qQoV",active:"Header_active__11Tfg"}},7:function(e,t,n){e.exports={message:"Message_message__1UFSk",avatar:"Message_avatar__15sQg",box:"Message_box__oBdqw",content:"Message_content__S-je9",name:"Message_name__3CqL6",time:"Message_time__2it_V"}}},[[40,1,2]]]);
//# sourceMappingURL=main.2d895ac2.chunk.js.map