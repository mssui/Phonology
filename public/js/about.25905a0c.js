(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{b3b1:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("navbar"),a("section",{staticClass:"hero is-primary is-small is-bold has-text-centered"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[t._v("\r\n            Dashboard for "+t._s(t.user)+"\r\n          ")]),a("h2",{staticClass:"subtitle"},[t._v("\r\n            "+t._s(t.bio)+"\r\n          ")]),a("figure",{staticClass:"image is-128x128 has-image-centered"},[a("img",{attrs:{src:t.userpic}})])])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-four-fifths"},[a("h2",{staticClass:"subtitle s-top"},[t._v("\r\n            "+t._s(t.user)+" kullanıcısının okumaları:\r\n          ")]),a("div",{attrs:{id:"contain-loop"}},[a("div",{staticClass:"column is-full is-centered"},t._l(t.posts,function(s,e){return a("div",{key:e,staticClass:"box"},[a("article",{staticClass:"media"},[t._m(0,!0),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("div",{staticClass:"subtitle is-4 s-lft metincont"},[a("a",{staticClass:"read"},[t._v(t._s(s.title)+" ")]),a("span",[t._v(" diye yazılır,")]),a("span",{staticClass:"write"},[t._v(" "+t._s(s.text)+" diye okunur.")])])]),t._m(1,!0)])])])}),0)])]),a("div",{staticClass:"column"},[t._v("Auto")]),a("div",{staticClass:"column"},[t._v("Auto")])])],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-64x64"},[a("img",{attrs:{src:"https://img.icons8.com/doodle/1600/user-female-red-hair.png",alt:"Image"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-left s-lft"},[a("a",{staticClass:"level-item",attrs:{"aria-label":"reply"}},[a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-arrow-alt-circle-up",attrs:{"aria-hidden":"true"}})])]),a("a",{staticClass:"level-item ",attrs:{"aria-label":"retweet"}},[a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-arrow-alt-circle-down",attrs:{"aria-hidden":"true"}})])]),a("a",{staticClass:"level-item",attrs:{"aria-label":"like"}},[a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-heart",attrs:{"aria-hidden":"true"}})])])])])}],l=a("f499"),n=a.n(l),r=(a("cadf"),a("551c"),a("097d"),a("9d8d")),c=a("bc3a"),o=a.n(c),u={name:"profile",data:function(){return{user:null,errors:[],posts:[],titles:[],comments:[],mains:[],userpic:null,gender:null,bio:null,message:"Başka bir yüz seç",active:!1}},methods:{mouseOver:function(){document.querySelector(".fa-edit").classList.add("is-active")},mouseOut:function(){this.active=!1}},components:{navbar:r["a"]},mounted:function(){var t=this;null!=localStorage.getItem("user")?(this.user=localStorage.getItem("user"),o.a.get("http://localhost:3030/infos/".concat(this.user)).then(function(s){t.bio=s.data[0].bio,t.gender=s.data[0].gender,t.userpic=s.data[0].image})):this.$router.push("/auth/login"),o.a.get("http://localhost:3030/posts/".concat(this.user)).then(function(s){t.mains=n()(s.data),t.mains=JSON.parse(t.mains);for(var a=0;a<t.mains.length;a++){var e=t.mains[a];t.posts.push({title:e.title,text:e.text})}}).catch(function(t){console.log(t)})}},d=u,f=(a("ff5d"),a("2877")),m=Object(f["a"])(d,e,i,!1,null,null,null);m.options.__file="profile.vue";s["default"]=m.exports},e787:function(t,s,a){},f820:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],l=a("2877"),n={},r=Object(l["a"])(n,e,i,!1,null,null,null);r.options.__file="About.vue";s["default"]=r.exports},ff5d:function(t,s,a){"use strict";var e=a("e787"),i=a.n(e);i.a}}]);
//# sourceMappingURL=about.25905a0c.js.map