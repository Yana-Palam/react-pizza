(self.webpackChunkreact_pizza=self.webpackChunkreact_pizza||[]).push([[728],{3611:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return I}});var t=n(3433),i=n(1413),s=n(4165),c=n(5861),a=n(2791),o=n(2808),l=n.n(o),u=n(9434),d=n(7689),h=n(5757),f=n(907),x=function(e){return e.filters.categoryId},p=function(e){return e.filters.sort},v=function(e){return e.search.value},m=function(e){return e.pizzas.items},j=function(e){return e.pizzas.isLoading},g=function(e){return e.pizzas.error},w=n(184),z=["\u0412\u0441\u0456","\u041c'\u044f\u0441\u043d\u0456","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0456\u0430\u043d\u0441\u044c\u043a\u0456","\u0413\u0440\u0438\u043b\u044c","\u0413\u043e\u0441\u0442\u0440\u0456","\u0417\u0430\u043a\u0440\u0438\u0442\u0456"],C=function(){var e=(0,u.I0)(),r=(0,u.v9)(x);return(0,w.jsx)("div",{className:"categories",children:(0,w.jsx)("ul",{children:z.map((function(n,t){return(0,w.jsx)("li",{onClick:function(){var r;r=t,e((0,h.uA)(r))},className:r===t?"active":"",children:n},t)}))})})},y=n(9439),_=[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456\u0441\u0442\u044e (\u0437\u0430 \u0437\u043c\u0435\u043d\u0448\u0435\u043d\u043d\u044f\u043c)",sortProperty:"rating",order:"desc"},{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456\u0441\u0442\u044e (\u0437\u0430 \u0437\u0431\u0456\u043b\u044c\u0448\u0435\u043d\u043d\u044f\u043c)",sortProperty:"rating",order:"asc"},{name:"\u0446\u0456\u043d\u043e\u044e (\u0437\u0430 \u0437\u043c\u0435\u043d\u0448\u0435\u043d\u043d\u044f\u043c)",sortProperty:"price",order:"desc"},{name:"\u0446\u0456\u043d\u043e\u044e (\u0437\u0430 \u0437\u0431\u0456\u043b\u044c\u0448\u0435\u043d\u043d\u044f\u043c)",sortProperty:"price",order:"asc"},{name:"\u0430\u043b\u0444\u0430\u0432\u0456\u0442\u043e\u043c (\u0432\u0456\u0434 \u0410 \u0434\u043e \u042f)",sortProperty:"title",order:"asc"},{name:"\u0430\u043b\u0444\u0430\u0432\u0456\u0442\u043e\u043c (\u0432\u0456\u0434 \u042f \u0434\u043e \u0410)",sortProperty:"title",order:"desc"}],b=function(){var e=(0,a.useState)(!1),r=(0,y.Z)(e,2),n=r[0],t=r[1],i=(0,a.useRef)(null),s=(0,u.I0)(),c=(0,u.v9)(p);(0,a.useEffect)((function(){var e=function(e){e.target.offsetParent!==i.current&&t(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]);return(0,w.jsxs)("div",{ref:i,className:"sort",children:[(0,w.jsxs)("div",{className:"sort__label",children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,w.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),(0,w.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0437\u0430:"})]}),(0,w.jsx)("span",{onClick:function(){t((function(e){return!e}))},children:c.name})]}),n&&(0,w.jsx)("div",{className:"sort__popup",children:(0,w.jsx)("ul",{children:_.map((function(e,r){return(0,w.jsx)("li",{onClick:function(){var r;r=e,s((0,h.Vw)(r)),t(!1)},className:e.sortProperty===c.sortProperty&&e.order===c.order?"active":"",children:e.name},r)}))})})]})},k=n(4913),N=n(1200),P=function(e){var r=e.id,n=e.title,t=e.imageUrl,i=e.price,s=e.sizes,c=e.types,o=(0,u.I0)(),l=["\u0442\u043e\u043d\u043a\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0456\u0439\u043d\u0435"],d=(0,u.v9)((0,N.BC)(r)),h=d?d.count:0,f=(0,a.useState)(0),x=(0,y.Z)(f,2),p=x[0],v=x[1],m=(0,a.useState)(0),j=(0,y.Z)(m,2),g=j[0],z=j[1];return(0,w.jsx)("div",{className:"pizza-block-wrapper",children:(0,w.jsxs)("div",{className:"pizza-block",children:[(0,w.jsx)("img",{width:"260",height:"260",className:"pizza-block__image",src:t,alt:"Pizza"}),(0,w.jsx)("h4",{className:"pizza-block__title",children:n}),(0,w.jsxs)("div",{className:"pizza-block__selector",children:[(0,w.jsx)("ul",{children:c.map((function(e,r){return(0,w.jsx)("li",{onClick:function(){v(e)},className:p===r?"active":"",children:l[e]},r)}))}),(0,w.jsx)("ul",{children:s.map((function(e,r){return(0,w.jsxs)("li",{onClick:function(){z(r)},className:g===r?"active":"",children:[e," \u0441\u043c."]},r)}))})]}),(0,w.jsxs)("div",{className:"pizza-block__bottom",children:[(0,w.jsxs)("div",{className:"pizza-block__price",children:["\u0432\u0456\u0434 ",i," \u20b4"]}),(0,w.jsxs)("button",{onClick:function(){var e={id:r,title:n,imageUrl:t,price:i,type:l[p],size:s[g],count:0};o((0,k.jX)(e))},type:"button",className:"button button--outline button--add",children:[(0,w.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,w.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),(0,w.jsx)("span",{children:"\u0414\u043e\u0434\u0430\u0442\u0438"}),h>0&&(0,w.jsx)("i",{children:h})]})]})]})})},Z=n(8175),V=function(){return(0,w.jsx)("div",{className:"pizza-block-wrapper",children:(0,w.jsxs)(Z.ZP,{className:"pizza-block",speed:2,width:280,height:466,viewBox:"0 0 280 466",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,w.jsx)("circle",{cx:"132",cy:"124",r:"124"}),(0,w.jsx)("rect",{x:"1",y:"265",rx:"9",ry:"9",width:"280",height:"27"}),(0,w.jsx)("rect",{x:"2",y:"312",rx:"10",ry:"10",width:"280",height:"89"}),(0,w.jsx)("rect",{x:"2",y:"429",rx:"10",ry:"10",width:"100",height:"27"}),(0,w.jsx)("rect",{x:"128",y:"419",rx:"30",ry:"30",width:"152",height:"45"})]})})},E=n(509),I=function(){var e=(0,d.s0)(),r=(0,E.T)(),n=(0,a.useRef)(!1),o=(0,a.useRef)(!1),z=(0,u.v9)(x),y=(0,u.v9)(p),_=(0,u.v9)(v),k=(0,u.v9)(m),N=(0,u.v9)(j),Z=(0,u.v9)(g),I=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(n,t,i){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r((0,f.q)({categoryId:n,sortValue:t,searchValue:i}));case 1:case"end":return e.stop()}}),e)})));return function(r,n,t){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){if(o.current){var r=l().stringify({categoryId:z,sort:y});e("?".concat(r))}o.current=!0}),[z,y,_]),(0,a.useEffect)((function(){var e=window.location.search;if(e){var t=l().parse(e.substring(1));r((0,h.rr)(t)),n.current=!0}}),[]),(0,a.useEffect)((function(){n.current||(I(z,y,_),window.scrollTo(0,0))}),[z,y,_]);var H=k.map((function(e){return(0,w.jsx)(P,(0,i.Z)({},e),e.id)})),L=(0,t.Z)(new Array(8)).map((function(e,r){return(0,w.jsx)(V,{},r)}));return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:"content__top",children:[(0,w.jsx)(C,{}),(0,w.jsx)(b,{})]}),(0,w.jsx)("h2",{className:"content__title",children:"\u0412\u0441\u0456 \u043f\u0456\u0446\u0438"}),Z?(0,w.jsxs)("div",{className:"content__error-info",children:[(0,w.jsx)("h2",{children:"\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \ud83d\ude15"}),(0,w.jsx)("p",{children:"\u041d\u0430 \u0436\u0430\u043b\u044c, \u043d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0434\u0435\u0440\u0436\u0430\u0442\u0438 \u043f\u0456\u0446\u0438. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0438 \u0441\u043f\u0440\u043e\u0431\u0443 \u043f\u0456\u0437\u043d\u0456\u0448\u0435."})]}):(0,w.jsx)("div",{className:"content__items",children:N?L:k.length>0?H:(0,w.jsx)("div",{className:"content__error-info",children:(0,w.jsx)("p",{children:"\u041d\u0430 \u0436\u0430\u043b\u044c, \u0437\u0430 \u0412\u0430\u0448\u0438\u043c \u0437\u0430\u043f\u0438\u0442\u043e\u043c \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e \u043f\u0456\u0446."})})})]})}},4654:function(){}}]);
//# sourceMappingURL=728.cdbfe9fb.chunk.js.map