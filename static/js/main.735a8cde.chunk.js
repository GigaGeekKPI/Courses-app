(this["webpackJsonpcourse-app"]=this["webpackJsonpcourse-app"]||[]).push([[0],{17:function(e,t,r){e.exports=r(32)},30:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(8),i=r.n(o),c=r(9),u=r(6),l=r(12),s=r(16),d=r(7);var p={courses:[{name:"CSS Optimization",duration:"01h 45min",date:"18.08.2020",description:"Super dooper course",authors:"RaptorDeveloper"},{name:"ES Next",duration:"02h 20min",date:"18.08.2020",description:"Super dooper course",authors:"RaptorDeveloper"},{name:"jQuery",duration:"02h",date:"18.08.2020",description:"Super dooper course",authors:"RaptorDeveloper"},{name:"Tools",duration:"02h 35min",date:"18.08.2020",description:"Super dooper course",authors:"RaptorDeveloper"},{name:"React.js",duration:"02h 35min",date:"18.08.2020",description:"Super dooper course",authors:"RaptorDeveloper"},{name:"React.js + Redux",duration:"02h 35min",date:"18.08.2020",description:"Super dooper course",authors:"RaptorDeveloper"},{name:"Angular Part 1",duration:"02h 35min",date:"18.08.2020",description:"Super dooper course",authors:"RaptorDeveloper"},{name:"Angular Part 2",duration:"02h 35min",date:"18.08.2020",description:"Super dooper course",authors:"RaptorDeveloper"},{name:"JS Patterns + Modules",duration:"02h 35min",date:"18.08.2020",description:"Super dooper course",authors:"RaptorDeveloper"},{name:"NodeJS / ExpressJS",duration:"02h 35min",date:"18.08.2020",description:"Super dooper course",authors:"RaptorDeveloper"},{name:"Testing web application",duration:"02h 35min",date:"18.08.2020",description:"Super dooper course",authors:"RaptorDeveloper"}].map((function(e){return Object(d.a)({},e,{dropdown:!1})})),filter:"",addForm:!1,editForm:!1,editIndex:null};r(30);var m=r(1),f=r(2),h=r(4),E=r(3),b=r(5),O=(r(31),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.changeInput;return n.a.createElement("input",{type:"text",className:"search-input",onChange:function(t){return e(t.target.value)},placeholder:"Search"})}}]),t}(n.a.Component)),v=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.ShowAddForm;return n.a.createElement("button",{className:"add-button",onClick:e},"Add course")}}]),t}(n.a.Component),j=Object(u.b)(null,(function(e){return{ShowAddForm:function(){return e({type:"SHOW_ADD_FORM"})}}}))(v),y=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.courses,r=e.ToggleMenu,a=e.DeleteCourse,o=e.ShowEditForm,i=this.props.index,c=n.a.createElement("ul",{className:"dropdown"},n.a.createElement("li",{onClick:o.bind(null,i)},"Edit"),n.a.createElement("li",{onClick:a.bind(null,i)},"Delete"));return n.a.createElement("div",{className:"dots"},n.a.createElement("span",{className:"material-icons",onClick:r.bind(null,i)},"more_horiz"),t[i].dropdown&&c)}}]),t}(n.a.Component),F=function(e){return e.courses},D=Object(u.b)((function(e){return{courses:F(e)}}),(function(e){return{ToggleMenu:function(t){return e(function(e){return{type:"TOGGLE_MENU_VISIBILITY",payload:e}}(t))},DeleteCourse:function(t){return e(function(e){return{type:"DELETE_COURSE",payload:e}}(t))},ShowEditForm:function(t){return e(function(e){return{type:"SHOW_EDIT_FORM",payload:e}}(t))}}}))(y),S=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.courseInfo,t=e.name,r=e.date,a=e.description,o=e.duration,i=this.props.index;return n.a.createElement("div",{className:"course-entity"},n.a.createElement("p",{className:"courseDate"},r),n.a.createElement("p",{className:"courseTitle"},n.a.createElement("b",null,t)),n.a.createElement("p",{className:"courseDescription"},a),n.a.createElement("p",{className:"courseDuration"},o),n.a.createElement(D,{index:i}))}}]),t}(n.a.Component),N=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.courses,t=this.props.filterWord.toLowerCase(),r=e.filter((function(e){return e.name.toLowerCase().indexOf(t)>-1}));return n.a.createElement("div",null,r.map((function(t){return n.a.createElement(S,{courseInfo:t,index:e.indexOf(t),key:e.indexOf(t)})})))}}]),t}(n.a.Component),C=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.AddCourse,r=e.HideForm;return n.a.createElement("div",{className:"form-container"},n.a.createElement("h2",null,"New course"),n.a.createElement("form",{id:"myForm",onSubmit:function(e){e.preventDefault();var r=new FormData(e.target);t(r)}},n.a.createElement("label",{htmlFor:"title"},"Title*"),n.a.createElement("input",{required:!0,name:"name",id:"title"}),n.a.createElement("label",{htmlFor:"description"},"Description*"),n.a.createElement("textarea",{required:!0,name:"description",id:"description",rows:"5"}),n.a.createElement("div",{className:"secondary-info"},n.a.createElement("label",{htmlFor:"duration"},"Duration*",n.a.createElement("input",{required:!0,name:"duration",id:"duration"})),n.a.createElement("label",{htmlFor:"date"},"Date*",n.a.createElement("input",{required:!0,name:"date",type:"date",id:"date"})),n.a.createElement("label",{htmlFor:"authors"},"Authors*",n.a.createElement("input",{required:!0,name:"authors",id:"authors"}))),n.a.createElement("div",{className:"buttons-section"},n.a.createElement("button",{className:"add-button save",type:"submit"},"Save"),n.a.createElement("button",{className:"cancel-button",onClick:r},"Cancel"))))}}]),t}(n.a.Component),R=Object(u.b)(null,(function(e){return{AddCourse:function(t){return e({type:"ADD_COURSE",payload:t})},HideForm:function(){return e({type:"HIDE_FORM"})}}}))(C),I=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.EditCourse,r=e.HideForm,a=e.courses,o=e.index;var i=a[o].date.split(".").reverse().join("-");return n.a.createElement("div",{className:"form-container"},n.a.createElement("h2",null,"Edit course"),n.a.createElement("form",{id:"myForm",onSubmit:function(e){e.preventDefault();var r=new FormData(e.target);t(0,r)}},n.a.createElement("label",{htmlFor:"title"},"Title*"),n.a.createElement("input",{required:!0,name:"name",id:"title",defaultValue:a[o].name}),n.a.createElement("label",{htmlFor:"description"},"Description*"),n.a.createElement("textarea",{required:!0,name:"description",id:"description",rows:"5",defaultValue:a[o].description}),n.a.createElement("div",{className:"secondary-info"},n.a.createElement("label",{htmlFor:"duration"},"Duration*",n.a.createElement("input",{required:!0,name:"duration",id:"duration",defaultValue:a[o].duration})),n.a.createElement("label",{htmlFor:"date"},"Date*",n.a.createElement("input",{required:!0,name:"date",type:"date",id:"date",defaultValue:i})),n.a.createElement("label",{htmlFor:"authors"},"Authors*",n.a.createElement("input",{required:!0,name:"authors",id:"authors",defaultValue:a[o].authors}))),n.a.createElement("div",{className:"buttons-section"},n.a.createElement("button",{className:"add-button save",type:"submit"},"Save"),n.a.createElement("button",{className:"cancel-button",onClick:r},"Cancel"))))}}]),t}(n.a.Component),_=function(e){return e.courses},w=function(e){return e.editIndex},x=Object(u.b)((function(e){return{courses:_(e),index:w(e)}}),(function(e){return{EditCourse:function(t,r){return e(function(e,t){return{type:"EDIT_COURSE",payload:{index:e,formData:t}}}(t,r))},HideForm:function(){return e({type:"HIDE_FORM"})}}}))(I),g=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filter,r=e.courses,a=e.changeFilterAction,o=e.addForm,i=e.editForm;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"content-wrapper"},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",{className:"header-wrapper"},n.a.createElement("div",{className:"logo"}))),o&&n.a.createElement(R,null)||i&&n.a.createElement(x,null)||n.a.createElement("article",null,n.a.createElement("div",{className:"search-section"},n.a.createElement(O,{changeInput:a}),n.a.createElement(j,null)),n.a.createElement("main",null,n.a.createElement(N,{courses:r,filterWord:t})))),n.a.createElement("footer",null,n.a.createElement("p",null,"\xa9 Videocourses, All Rights Reserved.")))}}]),t}(n.a.Component),T=function(e){return e.filter},A=function(e){return e.courses},k=function(e){return e.addForm},H=function(e){return e.editForm},M=Object(u.b)((function(e){return{filter:T(e),courses:A(e),addForm:k(e),editForm:H(e)}}),(function(e){return{changeFilterAction:function(t){return e(function(e){return{type:"CHANGE_FILTER_INPUT",payload:e}}(t))}}}))(g),q=Object(c.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,r=Object(s.a)(e.courses.map((function(e){return Object(d.a)({},e,{dropdown:!1})})));switch(t.type){case"CHANGE_FILTER_INPUT":return Object(d.a)({},e,{filter:t.payload});case"TOGGLE_MENU_VISIBILITY":return r[t.payload].dropdown=!r[t.payload].dropdown,Object(d.a)({},e,{courses:r});case"DELETE_COURSE":return r.splice(t.payload,1),Object(d.a)({},e,{courses:r});case"SHOW_EDIT_FORM":return Object(d.a)({},e,{editForm:!0,editIndex:t.payload,filter:""});case"ADD_COURSE":var a={},n=!0,o=!1,i=void 0;try{for(var c,u=t.payload.entries()[Symbol.iterator]();!(n=(c=u.next()).done);n=!0){var m=Object(l.a)(c.value,2),f=m[0],h=m[1];"date"===f&&(h=h.split("-").reverse().join(".")),a[f]=h}}catch(N){o=!0,i=N}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r.unshift(a),Object(d.a)({},e,{addForm:!1,courses:r});case"SHOW_ADD_FORM":return Object(d.a)({},e,{addForm:!0,filter:""});case"HIDE_FORM":return Object(d.a)({},e,{addForm:!1,editForm:!1,courses:r});case"EDIT_COURSE":var E=r[t.payload.index],b=!0,O=!1,v=void 0;try{for(var j,y=t.payload.formData.entries()[Symbol.iterator]();!(b=(j=y.next()).done);b=!0){var F=Object(l.a)(j.value,2),D=F[0],S=F[1];"date"===D&&(S=S.split("-").reverse().join(".")),E[D]=S}}catch(N){O=!0,v=N}finally{try{b||null==y.return||y.return()}finally{if(O)throw v}}return Object(d.a)({},e,{courses:r,editForm:!1});default:return e}})),L=q.subscribe((function(){return console.log(q.getState())}));i.a.render(n.a.createElement(u.a,{store:q},n.a.createElement(M,null)),document.getElementById("root")),L()}},[[17,1,2]]]);
//# sourceMappingURL=main.735a8cde.chunk.js.map