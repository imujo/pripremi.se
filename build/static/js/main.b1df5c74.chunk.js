(this["webpackJsonppripremi.se"]=this["webpackJsonppripremi.se"]||[]).push([[0],{84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(9),s=a.n(i),r=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,102)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))},o=a(2),j=function(){return console.log(window.innerWidth),Object(o.jsxs)("div",{className:"headerDiv",children:[Object(o.jsx)("div",{className:"title",children:Object(o.jsxs)("h1",{className:"logo",children:["PRIPREMI",Object(o.jsx)("div",{className:"nastavak",children:"SE"})]})}),Object(o.jsx)("p",{className:"subheading",children:"Preuzumanje matura i pripreme za ispit"})]})},l=a(4),d=(a(47),a(101)),u=a(40),b=a(100),O=a(16),m=a(41),h=Object(n.createContext)(),p=function(e){var t=Object(n.useRef)(!0),a=Object(n.useState)([]),c=Object(l.a)(a,2),i=c[0],s=c[1],r=Object(n.useState)("Popularno"),j=Object(l.a)(r,2),d=j[0],u=j[1],b=Object(n.useState)(0),p=Object(l.a)(b,2),v=p[0],x=p[1],f=Object(n.useState)([]),N=Object(l.a)(f,2),S=N[0],g=N[1],k=Object(n.useState)(!1),E=Object(l.a)(k,2),z=E[0],A=E[1],C=Object(n.useState)(0),_=Object(l.a)(C,2),w=_[0],P=_[1],y=Object(n.useState)(0),T=Object(l.a)(y,2),D=T[0],R=T[1],L=Object(n.useState)(0),I=Object(l.a)(L,2),M=I[0],B=I[1],F="http://localhost";return Object(n.useEffect)((function(){var e,a=0,n=Object(O.a)(i);try{for(n.s();!(e=n.n()).done;){var c=e.value;!c.dvijerazine||c.razinaA||c.razinaB||a++}}catch(o){n.e(o)}finally{n.f()}if(t.current)t.current=!1;else if(0===a){P(1);for(var s={},r=0;r<i.length;r++)s[i[r].predmet]={dvijerazine:i[r].dvijerazine,razinaA:i[r].razinaA,razinaB:i[r].razinaB,years:i[r].years};fetch("".concat(F,":5000/matured"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(Object(m.a)({onProgress:function(e){P(0),R(e.percentage)}})).then((function(e){return e.blob()})).then((function(e){var t=window.URL.createObjectURL(new Blob([e])),a=document.createElement("a");a.href=t,a.setAttribute("download","Mature.zip"),document.body.appendChild(a),a.click(),a.parentNode.removeChild(a),R(0),B(1),setTimeout((function(){B(0)}),5e3)}))}}),[F,i]),Object(n.useEffect)((function(){fetch("".concat(F,":5000/mature/").concat(d)).then((function(e){return e.json()})).then((function(e){return g(e)})).then(A(!0)).catch((function(e){console.log(e),A(!1)}))}),[F,d]),Object(o.jsx)(h.Provider,{value:{download:[i,s],sort:[d,u],isselectedn:[v,x],mList:[S,g],mLoaded:[z,A],percentageDwnl:[D,R],isprocessing:[w,P],isdwnld:[M,B]},children:e.children})},v=function(e){var t=e.razinaerror;return Object(o.jsx)("div",{className:"razineErrorDiv errorFont",razinaerror:t,children:"Niste ozna\u010dili razine"})},x=function(e){var t=e.predmet,a=e.dvijerazine,c=e.sendRequest,i=e.data,s=Object(n.useState)(0),r=Object(l.a)(s,2),j=r[0],O=r[1],m=Object(n.useState)(0),p=Object(l.a)(m,2),x=p[0],f=p[1],N=Object(n.useState)(0),S=Object(l.a)(N,2),g=S[0],k=S[1],E=Object(n.useContext)(h).download,z=Object(l.a)(E,2)[1],A="http://localhost",C=Object(n.useState)([2011,2019]),_=Object(l.a)(C,2),w=_[0],P=_[1],y=Object(n.useState)(!1),T=Object(l.a)(y,2),D=T[0],R=T[1],L=Object(n.useState)(!1),I=Object(l.a)(L,2),M=I[0],B=I[1],F=Object(n.useState)(0),U=Object(l.a)(F,2),J=U[0],q=U[1],K=Object(n.useRef)(!0),V=Object(n.useRef)(!0);Object(n.useEffect)((function(){K.current?K.current=!1:(1!==j||!0!==D&&!0!==M&&!1!==a?1===j&&q(1):q(0),1===j&&(i.push({predmet:t,years:w,dvijerazine:a,razinaA:D,razinaB:M}),z(i)))}),[c]),Object(n.useEffect)((function(){V.current?V.current=!1:fetch("".concat(A,":5000/iterate/").concat(t),{method:"post",headers:{"Content-Type":"application/json"}})}),[A,j,t]);for(var Z=Object(u.a)({overrides:{MuiSlider:{thumb:{color:"white"},track:{color:"white",height:4},rail:{color:"#704646",height:3},mark:{color:"#661515",height:3},valueLabel:{color:"#ab2424"},markLabelActive:{color:"#661515"},markLabel:{color:"#943a3a"}}}}),W=[],H=2010;H<=2020;H+=2)W.push({value:H,label:String(H)});return Object(o.jsxs)("div",{className:"cardDiv",openanimation:g,isselected:j,closeanimation:x,onAnimationEnd:function(){1===g?(k(0),O(1)):f(0)},children:[Object(o.jsx)("h3",{children:t}),j?Object(o.jsxs)("div",{children:[a?Object(o.jsxs)("div",{className:"razine",children:[Object(o.jsxs)("div",{className:"razinaA",children:[Object(o.jsx)("label",{htmlFor:"razinaA",children:Object(o.jsx)("h4",{children:"A"})}),Object(o.jsx)("input",{type:"checkbox",name:"razinaA",id:"razinaA",className:"checkbox",onClick:function(){return R(!D)}})]}),Object(o.jsx)(v,{razinaerror:J}),Object(o.jsxs)("div",{className:"razinaB",children:[Object(o.jsx)("label",{htmlFor:"razinaB",children:Object(o.jsx)("h4",{children:"B"})}),Object(o.jsx)("input",{type:"checkbox",name:"razinaB",id:"razina",className:"checkbox",onClick:function(){return B(!M)}})]})]}):Object(o.jsx)("div",{}),Object(o.jsx)("div",{className:"yearSlider",children:Object(o.jsx)(b.a,{theme:Z,children:Object(o.jsx)(d.a,{value:w,onChange:function(e,t){return P(t)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",marks:W,min:2010,max:2020})})}),Object(o.jsx)("p",{onClick:function(){O(0),f(1),q(0)},children:"Click to deselect"})]}):Object(o.jsx)("p",{onClick:function(){return k(1)},children:"Click to select"})]})},f=a(28),N=function(e){var t=e.sendRequest,a=Object(n.useContext)(h).mList,c=Object(l.a)(a,1)[0],i=[];return Object(o.jsx)("div",{className:"cardListDiv",children:Object(o.jsx)(f.Splide,{className:"splide",options:{type:"slide",autoWidth:!0,drag:!1,gap:"80px",rewind:!0,perMove:1,pagination:!1,focus:"center",trimSpace:!1,start:1,height:"450px",padding:{top:"10rem"}},children:c.map((function(e,a){return Object(o.jsx)(f.SplideSlide,{className:"test",children:Object(o.jsx)(x,{sendRequest:t,data:i,predmet:e.predmet,slika:e.slika,dvijerazine:e.dvijerazine})},a)}))})})},S=a(37),g=function(){var e=Object(n.useState)(["A - Z","Z - A"]),t=Object(l.a)(e,2),a=t[0],c=t[1],i=["Popularno","A - Z","Z - A"],s=Object(n.useState)(0),r=Object(l.a)(s,2),j=r[0],d=r[1],u=Object(n.useState)(0),b=Object(l.a)(u,2),m=b[0],p=b[1],v=Object(n.useState)(0),x=Object(l.a)(v,2),f=x[0],N=x[1],g=Object(n.useContext)(h).sort,k=Object(l.a)(g,2),E=k[0],z=k[1];Object(n.useEffect)((function(){var e,t=[],a=Object(O.a)(i);try{for(a.s();!(e=a.n()).done;){var n=e.value;n!==E&&t.push(n)}}catch(s){a.e(s)}finally{a.f()}c(t)}),[E]);var A=function(){0===j?p(1):(N(1),d(0))};return Object(o.jsxs)("div",{className:"sortButtonBody",children:[Object(o.jsxs)("div",{className:"name",children:[Object(o.jsx)("p",{children:E}),Object(o.jsx)("div",{className:"expandIcon",onClick:A,children:Object(o.jsx)(S.a,{})})]}),Object(o.jsx)("div",{className:"expanded",isexpanded:j,expand:m,shrink:f,onAnimationEnd:function(){1===m&&(p(0),d(1)),1===f&&N(0)},children:j?a.map((function(e,t){return Object(o.jsx)("p",{onMouseDown:function(){return z(e)},onMouseUp:A,children:e},t)})):Object(o.jsx)(o.Fragment,{})})]})},k=a(29),E=a.n(k),z=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useContext)(h).mLoaded,s=Object(l.a)(i,1)[0],r=Object(n.useContext)(h).isprocessing,j=Object(l.a)(r,1)[0],d=Object(n.useContext)(h).percentageDwnl,u=Object(l.a)(d,1)[0],b=Object(n.useContext)(h).isdwnld,O=Object(l.a)(b,1)[0];return Object(o.jsxs)("div",{className:"bodyDiv",id:"body",children:[j?Object(o.jsxs)("div",{className:"dwld-alert processing",children:[Object(o.jsx)(E.a,{type:"TailSpin",color:"#e79797",height:30,width:30}),Object(o.jsx)("p",{children:"Processing..."})]}):void 0,u?Object(o.jsx)("div",{className:"dwld-alert",children:Object(o.jsx)("div",{className:"loadingContainer",children:Object(o.jsx)("div",{className:"loaded",style:{width:u/100*200}})})}):void 0,Object(o.jsx)("div",{className:"dwld-alert downloaded",downloaded:O,children:Object(o.jsx)("p",{children:"Preuzeto!"})}),Object(o.jsx)(g,{}),s?Object(o.jsx)(N,{sendRequest:a}):Object(o.jsx)(E.a,{type:"TailSpin",color:"#e79797",height:100,width:100}),Object(o.jsx)("button",{onClick:s?function(){c(!a)}:void 0,type:"button",className:"preuzmiButton",children:"PREUZMI"})]})},A=a(13),C=function(){return Object(o.jsxs)("nav",{className:"navBody",children:[Object(o.jsx)("div",{className:"logoSvg"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)(A.Link,{activeClass:"active",to:"MATURE",spy:!0,smooth:!0,duration:400,children:Object(o.jsx)("li",{className:"navFont",children:"Mature"})}),Object(o.jsx)(A.Link,{activeClass:"active",to:"KONTAKT",spy:!0,smooth:!0,duration:400,children:Object(o.jsx)("li",{className:"navFont",children:"Kontakt"})})]}),Object(o.jsx)("button",{className:"doniraj",onClick:function(){return alert("Trenutno ne primamo financijske donacije. Podr\u017eite nas tako da podijelite stranicu s drugima :)")},children:"Doniraj"})]})},_=function(e){var t=e.title;return Object(o.jsx)(A.Element,{className:"titleDiv",id:t,children:Object(o.jsx)("h2",{children:t})})},w=a(38),P=a.n(w),y=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(0),s=Object(l.a)(i,2),r=s[0],j=s[1],d=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_SERVICE_ID:"service_rnf9fwd",REACT_APP_EMAILJS_TEMPLATE_ID:"template_qyggx9e",REACT_APP_EMAILJS_USER_ID:"user_75P8SGsgcUd9zU5svZeJ9",REACT_APP_IP:"http://localhost"}),u=d.REACT_APP_EMAILJS_SERVICE_ID,b=d.REACT_APP_EMAILJS_TEMPLATE_ID,O=d.REACT_APP_EMAILJS_USER_ID;return Object(o.jsx)("div",{className:"kontaktBody",children:Object(o.jsxs)("div",{className:"kontaktDiv",children:[Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),P.a.sendForm(u,b,e.target,O).then((function(e){c(1),setTimeout((function(){c(0)}),4e3)}),(function(e){j(1),setTimeout((function(){j(0)}),4e3)})),e.target.reset()},children:[Object(o.jsxs)("div",{className:"nameDiv",children:[Object(o.jsx)("input",{type:"text",required:!0,className:"fName input-narrow",placeholder:"Ime",name:"fName"}),Object(o.jsx)("input",{type:"text",required:!0,className:"lName input-narrow",placeholder:"Prezime",name:"lName"})]}),Object(o.jsx)("input",{type:"email",required:!0,className:"email input-wide",placeholder:"Email",name:"email"}),Object(o.jsx)("textarea",{required:!0,className:"message input-wide",placeholder:"Poruka",name:"message"}),Object(o.jsx)("input",{className:"preuzmiButton posaljiButton",type:"submit",value:"Po\u0161alji"}),Object(o.jsxs)("div",{className:"sent",sent:a,notsent:r,children:[a?Object(o.jsx)("p",{children:"Poslano!"}):void 0,r?Object(o.jsx)("p",{children:"Nije poslano..."}):void 0]})]}),Object(o.jsxs)("div",{className:"aboutDiv",children:[Object(o.jsx)("h5",{children:"O nama"}),Object(o.jsxs)("div",{className:"paragraf",children:[Object(o.jsx)("p",{children:"Tko smo mi ?"}),Object(o.jsx)("p",{children:"Mi smo tri gimnazijalca koji su se potaknuti lo\u0161im iskustvom pripreme za maturu preko postoje\u0107e stranice za preuzimanje matura odlu\u010dili poku\u0161ati pomo\u0107i ne samo sebi nego i svim drugim budu\u0107im pristupnicima ispitu dr\u017eavne mature kako bi se \u0161to lak\u0161e i kvalitetnije pripremili za taj ispit."}),Object(o.jsx)("p",{children:"\u017delimo vam svu sre\u0107u u pripremama i pri polaganju ispita dr\u017eavne mature!"})]})]})]})})},T=function(){return Object(o.jsx)("div",{className:"footerDiv",children:Object(o.jsxs)("p",{children:["Izvor: ",Object(o.jsx)("a",{href:"https://www.ncvvo.hr/kategorija/drzavna-matura/provedeni-ispiti/",target:"_blank",rel:"noreferrer noopener",children:"NCVVO"})," "]})})},D=a(39),R=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){c(1)}),[]),Object(o.jsxs)("div",{className:"napomenaDiv",disclamer:a,children:[Object(o.jsx)(D.a,{className:"close",onClick:function(){return c(0)}}),Object(o.jsx)("p",{className:"napomena",children:"Napomena!"}),Object(o.jsxs)("p",{children:["Ovo nije slu\u017ebena stranica pripreme u\u010denika za Dr\u017eavnu maturu. Za sve to\u010dne informacije o provedenim ispitima dr\u017eavne mature i uvid u same ispite posjetite web stranicu",Object(o.jsx)("a",{href:"https://www.ncvvo.hr/kategorija/drzavna-matura/provedeni-ispiti/",target:"_blank",rel:"noreferrer noopener",children:" NCVVO"})]})]})},L=function(){return Object(o.jsx)(p,{children:Object(o.jsxs)("div",{className:"appDiv",children:[Object(o.jsx)(C,{}),Object(o.jsx)(j,{}),Object(o.jsx)(R,{}),Object(o.jsx)(_,{title:"MATURE"}),Object(o.jsx)(z,{}),Object(o.jsx)(_,{title:"KONTAKT"}),Object(o.jsx)(y,{}),Object(o.jsx)(T,{})]})})};a(84);s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(L,{})}),document.getElementById("root")),r()}},[[85,1,2]]]);
//# sourceMappingURL=main.b1df5c74.chunk.js.map