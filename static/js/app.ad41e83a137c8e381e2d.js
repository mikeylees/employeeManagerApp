webpackJsonp([1],{NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"navbar"}},[t("div",{staticClass:"nav-wrapper green"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[t("h3",[this._v("Employee Manager")])])],1)])])},staticRenderFns:[]},o={name:"app",components:{Navbar:i("VU/8")(null,s,!1,null,null,null).exports}},n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]},l=i("VU/8")(o,n,!1,null,null,null).exports,r=i("/ocq"),p={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hello"},[i("h1",[e._v(e._s(e.msg))]),e._v(" "),i("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),i("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Core Docs")])]),e._v(" "),i("li",[i("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("Forum")])]),e._v(" "),i("li",[i("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("Community Chat")])]),e._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("Twitter")])]),e._v(" "),i("br"),e._v(" "),i("li",[i("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("Docs for This Template")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("vue-router")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("vuex")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("vue-loader")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("awesome-vue")])])])}]},d=(i("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},p,!1,function(e){i("pVZD")},"data-v-d14401cc",null).exports,i("Sazm")),c=i.n(d),u=(i("3VHS"),c.a.initializeApp({apiKey:"AIzaSyDRgFIiO7drZdBfhWz5mGn7ey0l_5uWCmo",authDomain:"vuefs-prod-de1fc.firebaseapp.com",databaseURL:"https://vuefs-prod-de1fc.firebaseio.com",projectId:"vuefs-prod-de1fc",storageBucket:"vuefs-prod-de1fc.appspot.com",messagingSenderId:"462651540090"}).firestore()),m={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;u.collection("employees").orderBy("dept").get().then(function(t){t.forEach(function(t){var i={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employees.push(i)})})}},v={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"dashboard"}},[i("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.employees,function(t){return i("li",{key:t.id,staticClass:"collection-item"},[i("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v(e._s(t.employee_id)+":"+e._s(t.name)+"\n            "),i("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[i("i",{staticClass:"fa fa-eye"})])],1)})],2),e._v(" "),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[i("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header"},[t("h4",[this._v("Employees")])])}]},_=i("VU/8")(m,v,!1,null,null,null).exports,h={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,i){u.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){i(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;u.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},deleteEmployee:function(){var e=this;confirm("Are you sure")&&u.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"view-employee"}},[t("ul",{staticClass:"collection with-header"},[t("li",{staticClass:"collection-header"},[t("h4",[this._v(this._s(this.name))])]),this._v(" "),t("li",{staticClass:"collection-item"},[this._v("Employee ID#: "+this._s(this.employee_id))]),this._v(" "),t("li",{staticClass:"collection-item"},[this._v("Dept: "+this._s(this.dept))]),this._v(" "),t("li",{staticClass:"collection-item"},[this._v("Postion: "+this._s(this.position))])]),this._v(" "),t("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[this._v("Back")]),this._v(" "),t("button",{staticClass:"btn red",on:{click:this.deleteEmployee}},[this._v("Delete")]),this._v(" "),t("div",{staticClass:"fixed-action-btn"},[t("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-employee",params:{employee_id:this.employee_id}}}},[t("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]},y=i("VU/8")(h,f,!1,null,null,null).exports,g={name:"new-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},methods:{saveEmployee:function(){var e=this;u.collection("employees").add({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(function(t){e.$router.push("/")})}}},b={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"new-employee"}},[i("h3",[e._v("New Employee")]),e._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(t){t.preventDefault(),e.saveEmployee(t)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),i("label",[e._v(" Employee ID Number")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),i("label",[e._v(" Name")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),i("label",[e._v(" Department")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),i("label",[e._v("Position")])])]),e._v(" "),i("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},C=i("VU/8")(g,b,!1,null,null,null).exports,w={name:"edit-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,i){u.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){i(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;u.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},updateEmployee:function(){var e=this;u.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employee_id:e.employee_id,name:e.name,dept:e.dept,position:e.position}).then(function(){e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}})})})})}}},E={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"edit-employee"}},[i("h3",[e._v("Edit Employee")]),e._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(t){t.preventDefault(),e.updateEmployee(t)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:"",disabled:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),e._v(" "),i("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},x=i("VU/8")(w,E,!1,null,null,null).exports;a.a.use(r.a);var k=new r.a({routes:[{path:"/",name:"dashboard",component:_},{path:"/new",name:"new-employee",component:C},{path:"/edit/:employee_id",name:"edit-employee",component:x},{path:"/:employee_id",name:"view-employee",component:y}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:k,template:"<App/>",components:{App:l}})},pVZD:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ad41e83a137c8e381e2d.js.map