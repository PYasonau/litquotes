(this.webpackJsonplitquotes=this.webpackJsonplitquotes||[]).push([[0],{195:function(e,t,a){e.exports=a(305)},295:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},296:function(e,t,a){},305:function(e,t,a){"use strict";a.r(t);a(196),a(222),a(224),a(225),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264);var n=a(0),r=a.n(n),c=a(72),l=a.n(c),o=a(35),s=a.n(o),i=a(47),u=a.n(i),m=a(75),p=a(42),f=a(74),d=a.n(f),h=a(110),E=a.n(h),b=a(77),v=a.n(b),S=a(41),g=a.n(S),y=a(76),k=a.n(y),O=(a(274),a(52)),j=a.n(O),w=a(53),x=a.n(w),U=a(55),A=a.n(U),I=a(46),_=a.n(I),C=a(109),V=a.n(C),K=a(54),N=a.n(K),T=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return r.a.createElement(j.a,{id:t},r.a.createElement(x.a,null,"Example"),n&&r.a.createElement(_.a,{title:"User Data Fetched with VK Bridge"},r.a.createElement(V.a,{before:n.photo_200?r.a.createElement(g.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),r.a.createElement(_.a,{title:"Navigation Example"},r.a.createElement(N.a,null,r.a.createElement(A.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},z=a(111),W=a(73),J=a.n(W),q=(a(293),a(294),a(295),a(296),Object(z.a)(),function(e){var t=e.id,a=e.snackbarError,c=e.fetchedUser,l=e.userHasSeenIntro,o=e.go;return r.a.createElement(j.a,{id:t,centered:!0},r.a.createElement(x.a,null,"Literature quotes"),!l&&c&&r.a.createElement(n.Fragment,null,r.a.createElement(_.a,null,r.a.createElement("div",{className:"User"},c.photo_200&&r.a.createElement(g.a,{src:c.photo_200}),r.a.createElement("h2",null,"\u041f\u0440\u0438\u0432\u0435\u0442, ",c.first_name,"!"),r.a.createElement("h3",null,"\u042d\u0442\u043e \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 Vk Mini App, \u0432 \u0441\u043a\u043e\u0440\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u044f \u043e\u0431\u0443\u0447\u0443\u0441\u044c \u0431\u043e\u043b\u044c\u0448\u0435\u043c\u0443!"))),r.a.createElement(J.a,{vertical:"bottom"},r.a.createElement(N.a,{className:"IntroButton"},r.a.createElement(A.a,{mode:"commerce",size:"l",onClick:o},"\u0425\u043e\u0440\u043e\u0448\u043e, \u0443\u0434\u0430\u0447\u0438!")))),a)}),B="home",F="intro",G={STATUS:"status"},H=function(){var e=Object(n.useState)(F),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(p.a)(l,2),i=o[0],f=o[1],h=Object(n.useState)(r.a.createElement(E.a,{size:"large"})),b=Object(p.a)(h,2),S=b[0],y=b[1],O=Object(n.useState)(!1),j=Object(p.a)(O,2),w=j[0],x=j[1],U=Object(n.useState)(!1),A=Object(p.a)(U,2),I=A[0],_=A[1];Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppGetUserInfo");case 2:return t=e.sent,e.next=5,s.a.send("VKWebAppStorageGet",{keys:Object.values(G)});case 5:a=e.sent,f(t),console.log(a),n={},a.keys.forEach((function(e,t){try{switch(n[e]=t?JSON.parse(t):{},e){case G.STATUS:n[e].hasSeenIntro&&(c(B),x(!0))}}catch(a){_(r.a.createElement(v.a,{layout:"vertical",onClose:function(){return _(null)},before:r.a.createElement(g.a,{size:24,style:{backgroundColor:"var(--dynamic-red)"}}),duration:1e3},r.a.createElement(k.a,{fill:"#fff",width:"14",height:"14"}),"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 Storage "))}})),y(null);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var r=document.createAttribute("scheme");r.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){e.apply(this,arguments)}()}),[]);var C=function(e){c(e)},V=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.send("VKWebAppStorageSet",{key:G.STATUS,value:JSON.stringify({hasSeenIntro:!0})});case 3:C(B),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),_(r.a.createElement(v.a,{layout:"vertical",onClose:function(){return _(null)},before:r.a.createElement(g.a,{size:24,style:{backgroundColor:"var(--dynamic-red)"}}),duration:1e3},r.a.createElement(k.a,{fill:"#fff",width:"14",height:"14"}),"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 Storage "));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(d.a,{activePanel:a,popout:S},r.a.createElement(T,{id:B,fetchedUser:i,go:C,snackbarError:I}),r.a.createElement(q,{id:F,fetchedUser:i,go:V,snackbarError:I,userHasSeenIntro:w}))};s.a.send("VKWebAppInit"),l.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[195,1,2]]]);
//# sourceMappingURL=main.6a38ce71.chunk.js.map