(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",flat:"",dark:""}},[a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-spacer"),a("v-toolbar-title",{staticStyle:{cursor:"pointer"},attrs:{color:"white"},on:{click:t.routeToMain}},[a("b",[t._v("Scrape Controlla")])]),a("v-spacer"),t.checkLogin?a("v-btn",{attrs:{text:""},on:{click:t.logout}},[t._v("Log out")]):t._e()],1)],1),a("v-main",{staticClass:"grey lighten-3"},[a("router-view")],1)],1)},o=[],i=(a("d3b7"),a("b0c0"),a("2591")),s=a("8c4f"),l=s["a"].isNavigationFailure,c=s["a"].NavigationFailureType,u={name:"App",methods:{logout:function(){var t=this;i["a"].auth().signOut().then((function(){t.$router.push("/login")})),this.isLoggedIn=!1},routeToMain:function(){this.$router.push("/").catch((function(t){l(t,c.redirected)||Promise.reject(t)}))}},computed:{checkLogin:function(){return"login"!=this.$route.name}}},p=u,d=a("2877"),v=a("6544"),m=a.n(v),f=a("7496"),_=a("40dc"),h=a("8336"),g=a("f6c4"),k=a("0fd9"),b=a("2fa4"),y=a("2a7f"),x=Object(d["a"])(p,r,o,!1,null,null,null),V=x.exports;m()(x,{VApp:f["a"],VAppBar:_["a"],VBtn:h["a"],VMain:g["a"],VRow:k["a"],VSpacer:b["a"],VToolbarTitle:y["a"]});var w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"dashboard"}},[a("v-expansion-panels",{attrs:{flat:"",multiple:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[a("v-expansion-panel",{model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[a("v-expansion-panel-header",[t._v(" TASKS IN PROGRESS ")]),a("v-expansion-panel-content",t._l(t.tasks.filter((function(t){return 0==t.complete})),(function(e){return a("v-list-item",{key:e.id},[a("v-list-item-avatar",["hashtag"==e.target_type?a("v-icon",[t._v(" mdi-pound ")]):"location"==e.target_type?a("v-icon",[t._v(" mdi-map-marker ")]):"user"==e.target_type?a("v-icon",[t._v(" mdi-account ")]):t._e()],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(e.task_name)+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(e.targets.join(", "))+" ")])],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:"",to:{name:"view-task",params:{task_id:e.id}}}},[a("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-information")])],1)],1)],1)})),1)],1),a("v-expansion-panel",{model:{value:t.completedPanel,callback:function(e){t.completedPanel=e},expression:"completedPanel"}},[a("v-expansion-panel-header",[t._v(" COMPLETED TASKS ")]),a("v-expansion-panel-content",[0===t.tasks.length?a("v-list-item",[t._v("No current tasks")]):t._e(),t._l(t.tasks.filter((function(t){return t.complete})),(function(e){return a("v-list-item",{key:e.id},[a("v-list-item-avatar",["hashtag"==e.target_type?a("v-icon",[t._v(" mdi-pound ")]):"location"==e.target_type?a("v-icon",[t._v(" mdi-map-marker ")]):"user"==e.target_type?a("v-icon",[t._v(" mdi-account ")]):a("v-icon",[t._v(" mdi-folder ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(e.task_name)+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(e.targets.join(", "))+" ")])],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:"",to:{name:"view-task",params:{task_id:e.id}}}},[a("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-information")])],1)],1)],1)}))],2)],1)],1),a("v-fab-transition",[a("v-btn",{attrs:{fab:"",large:"",color:"primary",fixed:"",right:"",bottom:"",to:"/new"}},[a("v-icon",[t._v("mdi-plus-thick")])],1)],1)],1)},T=[],C=(a("4de4"),a("260b")),S=(a("e71f"),C["a"].initializeApp({apiKey:"AIzaSyDZid5ZEC7u-1IK8G-DRjE8CyS8VhWYH2E",authDomain:"scrape-controller.firebaseapp.com",projectId:"scrape-controller",storageBucket:"scrape-controller.appspot.com",messagingSenderId:"534524867608",appId:"1:534524867608:web:1a38cd8768884ce9b27f6d",measurementId:"G-7YS154WJTZ"}).firestore()),E=C["a"].firestore,A=(E.Timestamp,E.GeoPoint,{name:"dashboard",data:function(){return{tasks:[],panel:[0]}},computed:{completed:function(){return this.tasks.filter((function(t){return 1==t.complete}))},not_completed:function(){return this.tasks.filter((function(t){return 0==t.complete}))}},firestore:{tasks:S.collection("tasks")}}),j=A,O=a("a523"),D=a("cd55"),I=a("49e2"),P=a("c865"),L=a("0393"),$=a("0789"),F=a("132d"),B=a("da13"),R=a("1800"),M=a("8270"),q=a("5d23"),K=Object(d["a"])(j,w,T,!1,null,null,null),G=K.exports;m()(K,{VBtn:h["a"],VContainer:O["a"],VExpansionPanel:D["a"],VExpansionPanelContent:I["a"],VExpansionPanelHeader:P["a"],VExpansionPanels:L["a"],VFabTransition:$["c"],VIcon:F["a"],VListItem:B["a"],VListItemAction:R["a"],VListItemAvatar:M["a"],VListItemContent:q["a"],VListItemSubtitle:q["b"],VListItemTitle:q["c"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"new-task"}},[a("v-row",{attrs:{cols:"1"}},[a("v-col",[a("v-sheet",{staticClass:"pa-4",attrs:{rounded:"lg"}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{label:"Task Name",required:""},model:{value:t.task_name,callback:function(e){t.task_name=e},expression:"task_name"}}),a("v-select",{attrs:{items:t.target_types,label:"Target Type",required:""},model:{value:t.target_type,callback:function(e){t.target_type=e},expression:"target_type"}}),a("v-text-field",{attrs:{label:"Targets",required:""},model:{value:t.targets,callback:function(e){t.targets=e},expression:"targets"}}),"user"==t.target_type?a("v-select",{attrs:{items:t.fol_or_post_opt,label:"What would you like to harvest?"},model:{value:t.fol_or_post,callback:function(e){t.fol_or_post=e},expression:"fol_or_post"}}):t._e(),t.allowDateLimit?a("v-checkbox",{attrs:{label:"Do you want to limit do a period?"},model:{value:t.limitDates,callback:function(e){t.limitDates=e},expression:"limitDates"}}):t._e(),t.limitDates?a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"Date range","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.dateRangeText,callback:function(e){t.dateRangeText=e},expression:"dateRangeText"}},"v-text-field",r,!1),n))]}}],null,!1,3982397131),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{range:"","no-title":"",scrollable:""},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.dates)}}},[t._v(" OK ")])],1)],1):t._e(),a("v-card-actions",[a("v-btn",{attrs:{to:"/"}},[t._v(" BACK ")]),a("v-btn",{staticClass:"mr-4",attrs:{color:"success"},on:{click:t.saveTask}},[t._v(" Save Task ")])],1)],1)],1)],1)],1)],1)},W=[],z=(a("ac1f"),a("1276"),a("a15b"),a("caad"),a("9612")),J={name:"new-task",data:function(){return{task_id:z["b"].v4(),task_name:"",targets:"",target_type:"",fol_or_post_opt:["followers","posts"],fol_or_post:"posts",target_types:["hashtag","location","user"],dates:[(new Date).toISOString().split("T")[0],(new Date).toISOString().split("T")[0]],menu:!1,limitDates:!1}},methods:{saveTask:function(){var t=this;S.collection("tasks").add({task_id:this.task_id,task_name:this.task_name,targets:this.targets.split(","),target_type:this.target_type,dates:this.dates,complete:!1,limitDates:this.limitDates}).then((function(e){t.$router.push("/")})).catch((function(t){return console.log(t)}))}},computed:{dateRangeText:function(){return this.dates.join(" ~ ")},getuuid:function(){return z["b"].v1()},allowDateLimit:function(){return!!["hashtag","location"].includes(this.target_type)||"user"==this.target_type&&"posts"==this.fol_or_post}}},Z=J,H=a("99d9"),Y=a("ac7c"),U=a("62ad"),Q=a("2e4b"),X=a("4bd4"),tt=a("e449"),et=a("b974"),at=a("8dd9"),nt=a("8654"),rt=Object(d["a"])(Z,N,W,!1,null,null,null),ot=rt.exports;m()(rt,{VBtn:h["a"],VCardActions:H["a"],VCheckbox:Y["a"],VCol:U["a"],VContainer:O["a"],VDatePicker:Q["a"],VForm:X["a"],VMenu:tt["a"],VRow:k["a"],VSelect:et["a"],VSheet:at["a"],VSpacer:b["a"],VTextField:nt["a"]});var it=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"edit-task"}},[a("h3",[t._v("Edit Task")])])}],lt={name:"edit-task",data:function(){return{}}},ct=lt,ut=Object(d["a"])(ct,it,st,!1,null,null,null),pt=ut.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"view-task"}},[a("v-row",{attrs:{cols:"1"}},[a("v-col",[a("v-sheet",{staticClass:"pa-4",attrs:{rounded:"lg"}},[a("v-card-title",[t._v(t._s(t.task.task_name))]),a("v-card-text",[a("v-chip",{staticClass:"mb-4",attrs:{label:"",color:"info"}},["hashtag"==t.task.target_type?a("v-icon",{attrs:{left:""}},[t._v(" mdi-pound ")]):"location"==t.task.target_type?a("v-icon",{attrs:{left:""}},[t._v(" mdi-map-marker ")]):"user"==t.task.target_type?a("v-icon",{attrs:{left:""}},[t._v(" mdi-account ")]):t._e(),t._v(" "+t._s(t.task.target_type)+" ")],1),t.task.limitDates?a("v-chip",{staticClass:"mb-4"},[a("v-avatar",[a("v-icon",[t._v("mdi-calendar")])],1),t._v(" "+t._s(t.task.dates[0])+" > "+t._s(t.task.dates[1])+" ")],1):t._e(),a("v-spacer"),t._l(t.task.targets,(function(e){return a("v-chip",{key:e,staticClass:"ma-1",attrs:{outlined:""}},[t._v(" "+t._s(e))])}))],2),a("v-card-actions",[a("v-btn",{attrs:{to:"/"}},[t._v(" BACK ")]),a("v-btn",{attrs:{color:"error"},on:{click:t.deleteTask}},[t._v(" DELETE ")])],1)],1)],1)],1)],1)},vt=[],mt=S.collection("tasks"),ft={props:["task_id"],name:"view-task",data:function(){return{task:null}},watch:{task_id:{immediate:!0,handler:function(t){this.$bind("task",mt.doc(t))}}},methods:{deleteTask:function(){confirm("Are you sure?")&&(S.collection("tasks").doc(this.task_id).delete(),this.$router.push("/"))}}},_t=ft,ht=a("8212"),gt=a("cc20"),kt=Object(d["a"])(_t,dt,vt,!1,null,null,null),bt=kt.exports;m()(kt,{VAvatar:ht["a"],VBtn:h["a"],VCardActions:H["a"],VCardText:H["b"],VCardTitle:H["c"],VChip:gt["a"],VCol:U["a"],VContainer:O["a"],VIcon:F["a"],VRow:k["a"],VSheet:at["a"],VSpacer:b["a"]});var yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"login"}},[a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{staticClass:"mt-md-12 pa-8 mt-xs-auto",attrs:{color:"success",loading:t.loadingLogin},on:{click:t.googleSignIn}},[t._v("Sign in with Backscatter account")])],1)],1)},xt=[],Vt={name:"Login",data:function(){return{loadingLogin:!1}},methods:{googleSignIn:function(){var t=this;this.loadingLogin=!0;var e=new i["a"].auth.GoogleAuthProvider;i["a"].auth().signInWithPopup(e).then((function(){t.loadingLogin=!1,t.$router.push("/")})).catch((function(t){console.log(t)}))}}},wt=Vt,Tt=Object(d["a"])(wt,yt,xt,!1,null,null,null),Ct=Tt.exports;m()(Tt,{VBtn:h["a"],VCardActions:H["a"],VContainer:O["a"]}),n["a"].use(s["a"]);var St=new s["a"]({routes:[{path:"/login",name:"login",component:Ct},{path:"/",name:"dashboard",component:G,meta:{requiresAuth:!0}},{path:"/new",name:"new-task",component:ot,meta:{requiresAuth:!0}},{path:"/edit/:task_id",name:"edit-task",component:pt,meta:{requiresAuth:!0}},{path:"/:task_id",name:"view-task",props:!0,component:bt,meta:{requiresAuth:!0}}]});St.beforeEach((function(t,e,a){var n=i["a"].auth().currentUser,r=t.matched.some((function(t){return t.meta.requiresAuth}));r&&!n?a("login"):a()}));var Et=St,At=a("0ff2"),jt=a("f309");n["a"].use(jt["a"]);var Ot=new jt["a"]({theme:{themes:{light:{primary:"#3C44CA",secondary:"#9F9F9F",accent:"#858DFE",error:"#FE6569",info:"#46B894",success:"#52D0A5",warning:"#FFE37C"}}}}),Dt=Ot;n["a"].use(At["a"]),n["a"].use(z["a"]),n["a"].config.productionTip=!1,new n["a"]({router:Et,vuetify:Dt,render:function(t){return t(V)}}).$mount("#app")}});
//# sourceMappingURL=app.a7d1d4b5.js.map