(this.webpackJsonpcotizator=this.webpackJsonpcotizator||[]).push([[0],{16:function(e,n,t){e.exports=t(25)},21:function(e,n,t){},24:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(5),c=t.n(o),l=(t(21),t(7)),i=t(1),u=t(2);function m(){var e=Object(i.a)(["\n    font-size: 2rem;\n    margin: 0;\n    font-family: 'Slabo 27px', serif;\n    text-align: center;\n"]);return m=function(){return e},e}function s(){var e=Object(i.a)(["\n    background-color: #26C6DA;\n    padding: 10px;\n    font-weight: bold;\n    color: #FFF;\n"]);return s=function(){return e},e}var d=u.a.header(s()),p=u.a.h1(m()),v=function(e){var n=e.titulo;return r.a.createElement(d,null,r.a.createElement(p,null,n))},b=t(8),f=t(11);function E(){var e=Object(i.a)(["\n    background-color: red;\n    color: white;\n    padding: 1rem;\n    width: 100%;\n    text-align: center;\n    margin-bottom: 2rem;\n"]);return E=function(){return e},e}function g(){var e=Object(i.a)(["\n    background-color: #00838F;\n    font-size: 16px;\n    width: 100%;\n    padding: 1rem;\n    color: #FFF;\n    text-transform: uppercase;\n    font-weight: bold;\n    border: none;\n    transition: background-color .3s ease;\n    margin-top: 2rem;\n\n    &:hover {\n        cursor: pointer;\n        background-color:#26C6DA\n    }\n"]);return g=function(){return e},e}function h(){var e=Object(i.a)(["\n    margin: 0 1rem;\n"]);return h=function(){return e},e}function j(){var e=Object(i.a)(["\n    display: block;\n    width: 100%;\n    padding: 0.7rem 1rem;\n    border: 1px solid #e1e1e1;\n    -webkit-appearance: none;\n    border-radius: 0.7rem;\n"]);return j=function(){return e},e}function O(){var e=Object(i.a)(["\n    flex: 0 0 100px;\n"]);return O=function(){return e},e}function k(){var e=Object(i.a)(["\n    display: flex;\n    margin-bottom: 1rem;\n    align-items: center;\n"]);return k=function(){return e},e}var x=u.a.div(k()),w=u.a.label(O()),F=u.a.select(j()),y=u.a.input(h()),z=u.a.button(g()),C=u.a.div(E()),S=function(e){var n=e.setResumen,t=e.setLoading,o=Object(a.useState)({marca:"",year:"",plan:""}),c=Object(l.a)(o,2),i=c[0],u=c[1],m=Object(a.useState)(!1),s=Object(l.a)(m,2),d=s[0],p=s[1],v=i.marca,E=i.year,g=i.plan,h=function(e){u(Object(f.a)(Object(f.a)({},i),{},Object(b.a)({},e.target.name,e.target.value)))};return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""!==v.trim()&&""!==E.trim()&&""!==g.trim()){p(!1);var a=2e3,r=function(e){return(new Date).getFullYear()-e}(E);a-=3*r*a/100,a=function(e){var n;switch(e){case"americano":n=1.3;break;case"europeo":n=1.15;break;case"asiatico":n=1.05}return n}(v)*a;var o=function(e){return"basico"===e?1.2:1.5}(g);a=parseFloat(o*a).toFixed(2),t(!0),setTimeout((function(){t(!1),n({cotizacion:Number(a),datos:i})}),3e3)}else p(!0)}},d?r.a.createElement(C,null,"Todos los campos son obligatorios"):null,r.a.createElement(x,null,r.a.createElement(w,null,"Marca"),r.a.createElement(F,{name:"marca",value:v,onChange:h},r.a.createElement("option",{value:""},"-- Seleccione --"),r.a.createElement("option",{value:"americano"},"Americano"),r.a.createElement("option",{value:"europeo"},"Europeo"),r.a.createElement("option",{value:"asiatico"},"Asiatico"))),r.a.createElement(x,null,r.a.createElement(w,null,"A\xf1o"),r.a.createElement(F,{name:"year",value:E,onChange:h},r.a.createElement("option",{value:""},"-- Seleccione --"),r.a.createElement("option",{value:"2021"},"2021"),r.a.createElement("option",{value:"2020"},"2020"),r.a.createElement("option",{value:"2019"},"2019"),r.a.createElement("option",{value:"2018"},"2018"),r.a.createElement("option",{value:"2017"},"2017"),r.a.createElement("option",{value:"2016"},"2016"),r.a.createElement("option",{value:"2015"},"2015"),r.a.createElement("option",{value:"2014"},"2014"),r.a.createElement("option",{value:"2013"},"2013"),r.a.createElement("option",{value:"2012"},"2012"))),r.a.createElement(x,null,r.a.createElement(w,null,"Plan"),r.a.createElement(y,{type:"radio",name:"plan",value:"basico",checked:"basico"===g,onChange:h}),"B\xe1sico",r.a.createElement(y,{type:"radio",name:"plan",value:"completo",checked:"completo"===g,onChange:h}),"Completo"),r.a.createElement(z,{type:"submit"},"Cotizar"))};function A(){var e=Object(i.a)(["\n    padding: 1rem;\n    text-align: center;\n    background-color: #00838F;\n    color: #FFF;\n    margin-top: 1rem;\n"]);return A=function(){return e},e}var N=u.a.div(A()),D=function(e){var n=e.datos,t=n.marca,a=n.year,o=n.plan;return""===t||""===a||""===o||r.a.createElement(N,null,r.a.createElement("h2",null,"Resumen de Cotizaci\xf3n"),r.a.createElement("ul",null,r.a.createElement("li",null,"Marca: ",t," "),r.a.createElement("li",null,"Plan: ",o," "),r.a.createElement("li",null,"A\xf1o del carro: ",a," ")))},M=t(28),B=t(27);function R(){var e=Object(i.a)(["\n    color: #00839F;\n    padding: 1rem;\n    text-transform: uppercase;\n    font-weight: bold;\n    margin: 0;\n"]);return R=function(){return e},e}function J(){var e=Object(i.a)(["\n    text-align: center;\n    padding: .5rem;\n    border: 1px solid #26C6DA;\n    background-color: rgb(127, 224, 237);\n    margin-top: 1rem;\n    position: relative;\n"]);return J=function(){return e},e}function L(){var e=Object(i.a)(["\n    background-color: rgb(127, 224, 237);\n    margin-top: 2rem;\n    padding: 1rem;\n    text-align: center;\n"]);return L=function(){return e},e}var P=u.a.p(L()),T=u.a.div(J()),W=u.a.p(R()),$=function(e){var n=e.cotizacion;return 0===n?r.a.createElement(P,null,"Elige marca, a\xf1o y tipo de seguro"):r.a.createElement(T,null,r.a.createElement(M.a,{component:"span",className:"resultado"},r.a.createElement(B.a,{classNames:"resultado",key:n,timeout:{enter:500,exit:500}},r.a.createElement(W,null,"El total es: $ ",r.a.createElement("span",null,n)))))},I=(t(24),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"bounce1"}),r.a.createElement("div",{className:"bounce2"}),r.a.createElement("div",{className:"bounce3"}))});function Y(){var e=Object(i.a)(["\n    background-color: #FFF;\n    padding: 3rem;\n"]);return Y=function(){return e},e}function q(){var e=Object(i.a)(["\n    max-width: 600px;\n    margin: 0 auto;\n\n"]);return q=function(){return e},e}var G=u.a.div(q()),H=u.a.div(Y());var K=function(){var e=Object(a.useState)({cotizacion:0,datos:{marca:"",plan:"",year:""}}),n=Object(l.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(!1),i=Object(l.a)(c,2),u=i[0],m=i[1],s=t.cotizacion,d=t.datos;return r.a.createElement(G,null,r.a.createElement(v,{titulo:"Mi cotizador"}),r.a.createElement(H,null,r.a.createElement(S,{setResumen:o,setLoading:m}),u?r.a.createElement(I,null):null,r.a.createElement(D,{datos:d}),u?null:r.a.createElement($,{cotizacion:s})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.8f0ea075.chunk.js.map