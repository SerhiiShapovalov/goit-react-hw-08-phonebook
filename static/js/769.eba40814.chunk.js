"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[769],{9769:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var r=n(2007),a=n.n(r),s=n(9434),c=n(7840),i=function(e){return e.contacts.items},u=function(e){return e.contacts.filter},o="Filter_label__vEd1E",l="Filter_text__uqQRu",d="Filter_input__N7T3z",m=n(3329);function p(){var e=(0,s.v9)(u),t=(0,s.I0)();return(0,m.jsxs)("label",{className:o,children:[(0,m.jsx)("p",{className:l,children:"Find contacts by name"}),(0,m.jsx)("input",{className:d,type:"text",value:e,onChange:function(e){return t((0,c.a)(e.currentTarget.value))}})]})}p.prototype={filter:a().string.isRequired,updateFilter:a().func.isRequired};var f=p,_=n(2791),h=n(4270),x=n(3634),b=n(9135),v="Contact_wrapper__K-zLN",j="Contact_icon__uPRlS",C="Contact_button__F+kJb",N="Contact_number__aT6T9";function g(e){var t=e.name,n=e.number,r=e.onDeleteContact,a=e.contactId;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:v,children:[(0,m.jsx)("span",{className:j,children:(0,m.jsx)(b.q1E,{})}),(0,m.jsx)("p",{children:t})]}),(0,m.jsxs)("div",{className:v,children:[(0,m.jsx)("p",{className:N,children:n}),(0,m.jsx)("button",{className:C,type:"button",onClick:function(){return r(a)},children:(0,m.jsx)(b.Xm5,{})})]})]})}g.prototype={name:a().string.isRequired,number:a().number.isRequired,onDeleteContact:a().func.isRequired,contactId:a().string.isRequired};var q=g,y="ContactList_item__EZYHO";function F(){var e=(0,s.v9)(u),t=(0,s.v9)(i),n=(0,s.I0)(),r=function(){var n=e.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,m.jsx)("ul",{children:r.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,m.jsx)("li",{className:y,children:(0,m.jsx)(q,{name:r,number:a,onDeleteContact:function(){return e=t,n((0,x.GK)(e));var e},contactId:t})},t)}))})}F.prototype={contacts:a().arrayOf(a().shape({id:a().string.isRequired,name:a().string.isRequired,number:a().number.isRequired})).isRequired,onDeleteContact:a().func.isRequired};var R=F,w=n(5861),k=n(9439),I=n(7757),Z=n.n(I),T=n(5984),z="ContactForm_form__dhl+T",A="ContactForm_label__-cVXI",S="ContactForm_title__jZguf",D="ContactForm_input__Bl93P",E="ContactForm_button__eSwX9";function L(){var e=(0,_.useState)(""),t=(0,k.Z)(e,2),n=t[0],r=t[1],a=(0,_.useState)(""),c=(0,k.Z)(a,2),u=c[0],o=c[1],l=(0,s.v9)(i),d=(0,s.I0)(),p=function(){var e=(0,w.Z)(Z().mark((function e(t){var r;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r={id:(0,T.x0)(),name:n,number:u},!l.some((function(e){return e.name===n}))){e.next=7;break}return window.alert("".concat(n," is already in the contact list.")),e.abrupt("return");case 7:d((0,x.uK)(r));case 8:f();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){r(""),o("")};return(0,m.jsxs)("form",{className:z,onSubmit:p,children:[(0,m.jsxs)("label",{className:A,children:[(0,m.jsx)("span",{className:S,children:"Name"}),(0,m.jsx)("input",{className:D,onChange:function(e){return r(e.currentTarget.value)},type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0454\u0404\u0456-\u0457\u0406-\u0407]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f\u0454\u0404\u0456-\u0457\u0406-\u0407 ])?[a-zA-Z\u0430-\u044f\u0410-\u042f\u0454\u0404\u0456-\u0457\u0406-\u0407]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)("label",{className:A,children:[(0,m.jsx)("span",{className:S,children:"Number"}),(0,m.jsx)("input",{className:D,onChange:function(e){return o(e.currentTarget.value)},type:"tel",name:"number",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)("button",{className:E,type:"submit",children:"Add contact"})]})}L.prototype={onSubmit:a().func.isRequired};var K=L;function P(){var e=(0,s.I0)(),t=(0,s.v9)(i);return(0,_.useEffect)((function(){e((0,x.yF)())}),[e]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h.q,{children:(0,m.jsx)("title",{children:"Your contacts"})}),(0,m.jsx)(K,{}),(0,m.jsx)(f,{}),t.length>0&&(0,m.jsx)(R,{})]})}}}]);
//# sourceMappingURL=769.eba40814.chunk.js.map