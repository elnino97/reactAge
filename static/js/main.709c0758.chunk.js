(this.webpackJsonpreactage=this.webpackJsonpreactage||[]).push([[0],[,function(e,a,t){e.exports={display__wrapper:"Display_display__wrapper__3gvoC",fadeIn:"Display_fadeIn__3dbBC",display__header:"Display_display__header__3pW8E",display__datas:"Display_display__datas__1nlzr",display__card:"Display_display__card__2J0RQ",display__category:"Display_display__category__3Uabj",display__age:"Display_display__age__1qF41",display__gender:"Display_display__gender__3uUn1",display__country:"Display_display__country__vNVwF"}},,,,,,function(e,a,t){e.exports={btn__wrapper:"NewInputBtn_btn__wrapper__cQxr_",return__btn:"NewInputBtn_return__btn__mXvWv"}},,function(e,a,t){e.exports={form__input:"Input_form__input__1n-g8"}},,,,,function(e,a,t){},,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),s=t(8),c=t.n(s),i=(t(14),t(4)),_=t(3),p=t.n(_),d=t(6),l=t(9),u=t.n(l),o=t(0),j=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("form",{onSubmit:function(a){a.preventDefault(),e.onFormSubmit(e.name)},children:Object(o.jsx)("input",{onChange:e.handleChange,className:u.a.form__input,type:"text",placeholder:"Enter a name"})})})},y=t(1),b=t.n(y),h=function(e){return Object(o.jsxs)("div",{className:b.a.display__wrapper,children:[Object(o.jsx)("p",{className:b.a.display__header,children:"Based on the entered name, the AI thinks that ".concat(e.name," is")}),Object(o.jsxs)("div",{className:b.a.display__datas,children:[Object(o.jsxs)("div",{className:b.a.display__card,children:[Object(o.jsx)("p",{className:b.a.display__category,children:"Age"}),Object(o.jsx)("p",{className:b.a.display__age,children:e.data[0].age?e.data[0].age:"?"})]}),Object(o.jsxs)("div",{className:b.a.display__card,children:[Object(o.jsx)("p",{className:b.a.display__category,children:"Gender"}),Object(o.jsx)("p",{className:b.a.display__gender,children:e.data[1].gender?e.data[1].gender.toUpperCase()[0]:"?"})]}),Object(o.jsxs)("div",{className:b.a.display__card,children:[Object(o.jsx)("p",{className:b.a.display__category,children:"Country"}),Object(o.jsx)("p",{className:b.a.display__country,children:e.data[2].country[0]?e.data[2].country[0].country_id:"?"})]})]})]})},m=t(7),f=t.n(m),O=function(e){return Object(o.jsx)("div",{className:f.a.btn__wrapper,children:Object(o.jsx)("button",{onClick:e.handleClick,className:f.a.return__btn,children:"Return"})})},x=(t(17),["https://api.agify.io/?name=","https://api.genderize.io?name=","https://api.nationalize.io?name="]),g=function(){var e=Object(d.a)(p.a.mark((function e(a){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.replace(/\s+/g,""),e.next=3,Promise.all(x.map((function(e){return fetch(e+t).then((function(e){return e.json()}))})));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),v=function(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],s=t[1],c=Object(n.useState)(""),_=Object(i.a)(c,2),l=_[0],u=_[1],y=Object(n.useState)(!0),b=Object(i.a)(y,2),m=b[0],f=b[1],x=Object(n.useState)(!1),v=Object(i.a)(x,2),N=v[0],w=v[1],C=function(){var e=Object(d.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(r);case 2:a=e.sent,u(a),f(!1),w(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("h1",{children:"What does your name say about you?"}),m?Object(o.jsx)(j,{name:r,handleChange:function(e){s(e.target.value)},onFormSubmit:C}):Object(o.jsx)(O,{handleClick:function(){f(!0),w(!1)}}),N&&Object(o.jsx)(h,{name:r,data:l})]})};c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.709c0758.chunk.js.map