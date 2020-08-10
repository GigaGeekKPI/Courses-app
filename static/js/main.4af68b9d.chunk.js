(this["webpackJsonpcourse-app"]=this["webpackJsonpcourse-app"]||[]).push([[0],{17:function(e,t,r){e.exports=r(32)},30:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(8),i=r.n(o),c=r(9),u=r(6),l=r(12),s=r(16),d=r(7);var m={courses:[{name:"CSS Optimization",duration:"01h 45min",date:"18.08.2020",description:"Super dooper course",authors:"Epam"},{name:"ES Next",duration:"02h 20min",date:"18.08.2020",description:"Super dooper course",authors:"Epam"},{name:"jQuery",duration:"02h",date:"18.08.2020",description:"Super dooper course",authors:"Epam"},{name:"Tools",duration:"02h 35min",date:"18.08.2020",description:"Super dooper course",authors:"Epam"},{name:"React.js",duration:"02h 35min",date:"18.08.2020",description:"Super dooper course",authors:"Epam"},{name:"React.js + Redux",duration:"02h 35min",date:"18.08.2020",description:"Super dooper course",authors:"Epam"},{name:"Angular Part 1",duration:"02h 35min",date:"18.08.2020",description:"Super dooper course",authors:"Epam"},{name:"Angular Part 2",duration:"02h 35min",date:"18.08.2020",description:"Super dooper course",authors:"Epam"},{name:"JS Patterns + Modules",duration:"02h 35min",date:"18.08.2020",description:"Super dooper course",authors:"Epam"},{name:"NodeJS / ExpressJS",duration:"02h 35min",date:"18.08.2020",description:"Super dooper course",authors:"Epam"},{name:"Testing web application",duration:"02h 35min",date:"18.08.2020",description:"Super dooper course",authors:"Epam"}].map((function(e){return Object(d.a)({},e,{dropdown:!1})})),filter:"",addForm:!1,editForm:!1,editIndex:null};r(30);var p=r(1),E=r(2),f=r(4),h=r(3),b=r(5),O=(r(31),function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.changeInput;return n.a.createElement("input",{type:"text",className:"search-input",onChange:function(t){return e(t.target.value)},placeholder:"Search"})}}]),t}(n.a.Component)),j=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.ShowAddForm;return n.a.createElement("button",{className:"add-button",onClick:e},"Add course")}}]),t}(n.a.Component),y=Object(u.b)(null,(function(e){return{ShowAddForm:function(){return e({type:"SHOW_ADD_FORM"})}}}))(j),v=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.courses,r=e.ToggleMenu,a=e.DeleteCourse,o=e.ShowEditForm,i=this.props.index,c=n.a.createElement("ul",{className:"dropdown"},n.a.createElement("li",{onClick:o.bind(null,i)},"Edit"),n.a.createElement("li",{onClick:a.bind(null,i)},"Delete"));return n.a.createElement("div",{className:"dots"},n.a.createElement("span",{className:"material-icons",onClick:r.bind(null,i)},"more_horiz"),t[i].dropdown&&c)}}]),t}(n.a.Component),F=function(e){return e.courses},S=Object(u.b)((function(e){return{courses:F(e)}}),(function(e){return{ToggleMenu:function(t){return e(function(e){return{type:"TOGGLE_MENU_VISIBILITY",payload:e}}(t))},DeleteCourse:function(t){return e(function(e){return{type:"DELETE_COURSE",payload:e}}(t))},ShowEditForm:function(t){return e(function(e){return{type:"SHOW_EDIT_FORM",payload:e}}(t))}}}))(v),D=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.courseInfo,t=e.name,r=e.date,a=e.description,o=e.duration,i=this.props.index;return n.a.createElement("div",{className:"course-entity"},n.a.createElement("p",{className:"courseDate"},r),n.a.createElement("p",{className:"courseTitle"},n.a.createElement("b",null,t)),n.a.createElement("p",{className:"courseDescription"},a),n.a.createElement("p",{className:"courseDuration"},o),n.a.createElement(S,{index:i}))}}]),t}(n.a.Component),N=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.courses,t=this.props.filterWord.toLowerCase(),r=e.filter((function(e){return e.name.toLowerCase().indexOf(t)>-1}));return n.a.createElement("div",null,r.map((function(t){return n.a.createElement(D,{courseInfo:t,index:e.indexOf(t),key:e.indexOf(t)})})))}}]),t}(n.a.Component),C=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.AddCourse,r=e.HideForm;return n.a.createElement("div",{className:"form-container"},n.a.createElement("h2",null,"New course"),n.a.createElement("form",{id:"myForm",onSubmit:function(e){e.preventDefault();var r=new FormData(e.target);t(r)}},n.a.createElement("label",{htmlFor:"title"},"Title*"),n.a.createElement("input",{required:!0,name:"name",id:"title"}),n.a.createElement("label",{htmlFor:"description"},"Description*"),n.a.createElement("textarea",{required:!0,name:"description",id:"description",rows:"5"}),n.a.createElement("div",{className:"secondary-info"},n.a.createElement("label",{htmlFor:"duration"},"Duration*",n.a.createElement("input",{required:!0,name:"duration",id:"duration"})),n.a.createElement("label",{htmlFor:"date"},"Date*",n.a.createElement("input",{required:!0,name:"date",type:"date",id:"date"})),n.a.createElement("label",{htmlFor:"authors"},"Authors*",n.a.createElement("input",{required:!0,name:"authors",id:"authors"}))),n.a.createElement("div",{className:"buttons-section"},n.a.createElement("button",{className:"add-button save",type:"submit"},"Save"),n.a.createElement("button",{className:"cancel-button",onClick:r},"Cancel"))))}}]),t}(n.a.Component),I=Object(u.b)(null,(function(e){return{AddCourse:function(t){return e({type:"ADD_COURSE",payload:t})},HideForm:function(){return e({type:"HIDE_FORM"})}}}))(C),_=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.EditCourse,r=e.HideForm,a=e.courses,o=e.index;var i=a[o].date.split(".").reverse().join("-");return n.a.createElement("div",{className:"form-container"},n.a.createElement("h2",null,"Edit course"),n.a.createElement("form",{id:"myForm",onSubmit:function(e){e.preventDefault();var r=new FormData(e.target);t(0,r)}},n.a.createElement("label",{htmlFor:"title"},"Title*"),n.a.createElement("input",{required:!0,name:"name",id:"title",defaultValue:a[o].name}),n.a.createElement("label",{htmlFor:"description"},"Description*"),n.a.createElement("textarea",{required:!0,name:"description",id:"description",rows:"5",defaultValue:a[o].description}),n.a.createElement("div",{className:"secondary-info"},n.a.createElement("label",{htmlFor:"duration"},"Duration*",n.a.createElement("input",{required:!0,name:"duration",id:"duration",defaultValue:a[o].duration})),n.a.createElement("label",{htmlFor:"date"},"Date*",n.a.createElement("input",{required:!0,name:"date",type:"date",id:"date",defaultValue:i})),n.a.createElement("label",{htmlFor:"authors"},"Authors*",n.a.createElement("input",{required:!0,name:"authors",id:"authors",defaultValue:a[o].authors}))),n.a.createElement("div",{className:"buttons-section"},n.a.createElement("button",{className:"add-button save",type:"submit"},"Save"),n.a.createElement("button",{className:"cancel-button",onClick:r},"Cancel"))))}}]),t}(n.a.Component),w=function(e){return e.courses},x=function(e){return e.editIndex},g=Object(u.b)((function(e){return{courses:w(e),index:x(e)}}),(function(e){return{EditCourse:function(t,r){return e(function(e,t){return{type:"EDIT_COURSE",payload:{index:e,formData:t}}}(t,r))},HideForm:function(){return e({type:"HIDE_FORM"})}}}))(_),T=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filter,r=e.courses,a=e.changeFilterAction,o=e.addForm,i=e.editForm;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"content-wrapper"},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",{className:"header-wrapper"},n.a.createElement("div",{className:"logo"}))),o&&n.a.createElement(I,null)||i&&n.a.createElement(g,null)||n.a.createElement("article",null,n.a.createElement("div",{className:"search-section"},n.a.createElement(O,{changeInput:a}),n.a.createElement(y,null)),n.a.createElement("main",null,n.a.createElement(N,{courses:r,filterWord:t})))),n.a.createElement("footer",null,n.a.createElement("p",null,"\xa9 Videocourses, All Rights Reserved.")))}}]),t}(n.a.Component),A=function(e){return e.filter},R=function(e){return e.courses},k=function(e){return e.addForm},H=function(e){return e.editForm},M=Object(u.b)((function(e){return{filter:A(e),courses:R(e),addForm:k(e),editForm:H(e)}}),(function(e){return{changeFilterAction:function(t){return e(function(e){return{type:"CHANGE_FILTER_INPUT",payload:e}}(t))}}}))(T),q=Object(c.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,r=Object(s.a)(e.courses.map((function(e){return Object(d.a)({},e,{dropdown:!1})})));switch(t.type){case"CHANGE_FILTER_INPUT":return Object(d.a)({},e,{filter:t.payload});case"TOGGLE_MENU_VISIBILITY":return r[t.payload].dropdown=!r[t.payload].dropdown,Object(d.a)({},e,{courses:r});case"DELETE_COURSE":return r.splice(t.payload,1),Object(d.a)({},e,{courses:r});case"SHOW_EDIT_FORM":return Object(d.a)({},e,{editForm:!0,editIndex:t.payload,filter:""});case"ADD_COURSE":var a={},n=!0,o=!1,i=void 0;try{for(var c,u=t.payload.entries()[Symbol.iterator]();!(n=(c=u.next()).done);n=!0){var p=Object(l.a)(c.value,2),E=p[0],f=p[1];"date"===E&&(f=f.split("-").reverse().join(".")),a[E]=f}}catch(N){o=!0,i=N}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r.unshift(a),Object(d.a)({},e,{addForm:!1,courses:r});case"SHOW_ADD_FORM":return Object(d.a)({},e,{addForm:!0,filter:""});case"HIDE_FORM":return Object(d.a)({},e,{addForm:!1,editForm:!1,courses:r});case"EDIT_COURSE":var h=r[t.payload.index],b=!0,O=!1,j=void 0;try{for(var y,v=t.payload.formData.entries()[Symbol.iterator]();!(b=(y=v.next()).done);b=!0){var F=Object(l.a)(y.value,2),S=F[0],D=F[1];"date"===S&&(D=D.split("-").reverse().join(".")),h[S]=D}}catch(N){O=!0,j=N}finally{try{b||null==v.return||v.return()}finally{if(O)throw j}}return Object(d.a)({},e,{courses:r,editForm:!1});default:return e}})),L=q.subscribe((function(){return console.log(q.getState())}));i.a.render(n.a.createElement(u.a,{store:q},n.a.createElement(M,null)),document.getElementById("root")),L()}},[[17,1,2]]]);
//# sourceMappingURL=main.4af68b9d.chunk.js.map