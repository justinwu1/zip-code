(this["webpackJsonpzip-code"]=this["webpackJsonpzip-code"]||[]).push([[0],{25:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(2),a=n.n(r),i=n(17),s=n.n(i),o=(n(25),n(8)),u=n.n(o),l=n(18),h=n(3),j=n(4),b=n(6),p=n(5),d=n(19),m=n.n(d),O=(n(45),function(t){Object(b.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(h.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={term:""},t.onInputChange=function(e){t.setState({term:e.target.value})},t.onFormSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.term)},t}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{className:"search-form",onSubmit:this.onFormSubmit,children:[Object(c.jsx)("label",{children:"Enter a Zipcodes"}),Object(c.jsx)("input",{value:this.state.term,type:"text",onChange:this.onInputChange})]})})}}]),n}(a.a.Component)),f=(n(46),function(t){if(t.cityDetail[0]){console.log(t.cityDetail);var e=t.cityDetail.map((function(t,e){return Object(c.jsxs)("div",{style:{border:"1px solid black",margin:"100px"},children:[Object(c.jsxs)("h1",{children:["Result:",e]}),Object(c.jsxs)("h1",{children:["Country:",t.Country]}),Object(c.jsxs)("h1",{children:["City:",t.City]}),Object(c.jsxs)("h1",{children:["State:",t.State]}),Object(c.jsxs)("h1",{children:["Lat:",t.Lat]}),Object(c.jsxs)("h1",{children:["Long:",t.Long]}),Object(c.jsxs)("h1",{children:["Estimated Population:",t.EstimatedPopulation]})]})}));return Object(c.jsx)("div",{style:{textAlign:"center"},children:e})}return null}),x=function(t){Object(b.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(h.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={cityDetail:[]},t.onSearchSubmit=function(){var e=Object(l.a)(u.a.mark((function e(n){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://ctp-zip-api.herokuapp.com/zip/".concat(n));case 2:c=e.sent,t.setState({cityDetail:c.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(O,{onSubmit:this.onSearchSubmit}),Object(c.jsx)(f,{cityDetail:this.state.cityDetail})]})}}]),n}(a.a.Component);s.a.render(Object(c.jsx)(x,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.18ee21e2.chunk.js.map