(function(t){function e(e){for(var i,a,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&m.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01f7":function(t,e,n){},1:function(t,e){},2:function(t,e){},"27d9":function(t,e,n){"use strict";var i=n("d456"),s=n.n(i);s.a},3:function(t,e){},3734:function(t,e){window.onload=function(){document.addEventListener("touchstart",(function(t){t.touches.length>1&&t.preventDefault()}));var t=0;document.addEventListener("touchend",(function(e){var n=(new Date).getTime();n-t<=300&&e.preventDefault(),t=n}),!1),document.addEventListener("gesturestart",(function(t){t.preventDefault()}))}},4:function(t,e){},4488:function(t,e,n){"use strict";n.r(e);var i=n("e017"),s=n.n(i),o=n("21a1"),a=n.n(o),r=new s.a({id:"icon-logout",use:"icon-logout-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-logout"><defs><style></style></defs><path d="M778.016 772.992q-52 55.008-120.992 84.992-71.008 31.008-150.016 31.008-76 0-144.512-28.512T240.48 778.464t-82.016-122.496-28.512-144 28.512-144 82.016-122.496 122.016-82.016 144-28.512 144.512 28.512 122.016 82.496q11.008 10.016 26.016 10.016t25.504-10.496 10.496-25.504-11.008-24.992q-62.016-62.016-142.016-96-84-36-175.008-36T332 98.976q-80 34.016-142.016 96t-96 142.016q-36 84-36 175.008t36 175.008q34.016 80 96 142.016t142.016 96q84 36 175.008 36 94.016 0 179.008-36.992 82.016-36 144-100.992 11.008-11.008 10.496-25.504t-11.008-24.992T804 762.048t-26.016 11.008zm184-260q0-12-8-20.992l-108-139.008q-10.016-12-24.512-13.504t-26.496 7.488-13.504 24 7.488 27.008l63.008 80H444q-15.008 0-25.504 10.496T408 513.984q0 15.008 10.496 25.504T444 549.984h408l-63.008 80.992q-8.992 12-7.488 26.496t13.504 23.488q10.016 8 22.016 8 18.016 0 28.992-14.016l108-139.008q8-8.992 8-20.992v-2.016z" /></symbol>'});a.a.add(r);e["default"]=r},"53d7":function(t,e,n){"use strict";var i=n("01f7"),s=n.n(i);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},["SignIn"===t.viewName?n("SignIn"):"Home"===t.viewName?n("Home"):"Setting"===t.viewName?n("Setting"):t._e(),n("Footer")],1)},o=[],a=(n("c6d3"),n("3734"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Topbar"),n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column main col-8 col-lg-10 col-sm-12"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("Generate")],1)]),n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("PasswordList")],1)])])])])],1)}),r=[],c={name:"Home",methods:{}},l=c,u=n("2877"),d=Object(u["a"])(l,a,r,!1,null,"22d15c5e",null),m=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Topbar"),t._m(0)],1)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column main col-8 col-lg-10 col-sm-12"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("b",[t._v("密码生成选项")])]),n("div",{staticClass:"card-footer"},[n("button",{staticClass:"btn btn-primary disabled"},[t._v("保存")])])]),n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("b",[t._v("清除本地数据")])]),n("div",{staticClass:"card-footer"},[n("button",{staticClass:"btn btn-primary disabled"},[t._v("清除")])])]),n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("b",[t._v("领取CNB")]),n("div",[t._v("每个账号每月可以领0.01CNB，可用于保存100万次密码")])]),n("div",{staticClass:"card-footer"},[n("button",{staticClass:"btn btn-primary disabled"},[t._v("请下个月再来")])])])])])])}],v={},h=v,g=Object(u["a"])(h,p,f,!1,null,null,null),w=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Topbar"),n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column main col-8 col-lg-10 col-sm-12"},[n("div",{staticClass:"text-center"},[n("div",{staticClass:"hero"},[n("h3",{staticClass:"p-2 mt-2"},[t._v("MixinPass - 安全、易用的开源密码管理器")]),n("button",{staticClass:"btn btn-primary main",staticStyle:{width:"6.8rem"},on:{click:function(e){return e.stopPropagation(),t.toView("Home")}}},[t._v("Mixin 授权登录")])])]),n("About")],1)])])],1)},C=[],y=(n("b0c0"),n("2f62"));i["a"].use(y["a"]);var _=new y["a"].Store({state:{viewName:"SignIn",mixinUser:{uid:"12355"},pwdList:[],currentPwd:{}},mutations:{setViewName:function(t,e){var n=e.name;t.viewName=n},setPwdList:function(t,e){var n=e.list;t.pwdList=n},setCurrentPwd:function(t,e){var n=e.pwd;t.currentPwd=JSON.parse(JSON.stringify(n))}}}),k=_,E={methods:{toView:function(t){k.commit("setViewName",{name:t})}}},x=E,S=(n("c380"),Object(u["a"])(x,b,C,!1,null,"288c4ace",null)),P=S.exports,T={name:"App",computed:{viewName:function(){return k.state.viewName}},components:{Home:m,Setting:w,SignIn:P}},L=T,N=(n("5c0b"),Object(u["a"])(L,s,o,!1,null,null,null)),M=N.exports,O=n("4eb5"),z=n.n(O),$=n("a925"),j={en:{view:{home:"Passwords",setting:"Setting"}},cn:{view:{home:"密码管理",setting:"账户设置"}}},I=j,B=(n("4160"),n("d81d"),n("b64b"),n("d3b7"),n("159b"),n("ddb0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._g({class:t.svgClass,attrs:{"aria-hidden":"true"}},t.$listeners),[n("use",{attrs:{"xlink:href":t.iconName}})])}),A=[],q={name:"SvgIcon",props:{iconClass:String,className:String},computed:{iconName:function(){return"#icon-".concat(this.iconClass)},svgClass:function(){return this.className?"svg-icon "+this.className:"svg-icon"}}},D=q,H=(n("daba"),Object(u["a"])(D,B,A,!1,null,"7e718e68",null)),F=H.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topbar container"},[n("header",{staticClass:"navbar main column col-8 col-lg-10 col-sm-12 s-font"},[n("section",{staticClass:"navbar-section"},[n("a",{staticClass:"navbar-brand mr-2",attrs:{href:"https://mp.w3c.group"}},[n("SvgIcon",{staticClass:"mt-2 mr-2",staticStyle:{"font-size":"2.1rem"},attrs:{"icon-class":"logo"}}),n("b",{staticClass:"logo-text"},[t._v("MixinPass")])],1)]),n("section",{staticClass:"navbar-section hide-sm"},["SignIn"===t.viewName?n("a",{attrs:{href:"https://mixin.one/messenger",target:"_blank"}},[t._v("下载 Mixin Messenger")]):n("span",[n("span",{staticClass:"mr-2"},[t._v("ID:"+t._s(t.uid))]),n("a",{attrs:{href:"/"}},[n("SvgIcon",{staticClass:"logout",attrs:{"icon-class":"logout"}}),t._v("登出 ")],1)])])]),"SignIn"!==t.viewName?n("div",{staticClass:"columns navigation"},[n("div",{staticClass:"column main col-8 col-lg-10 col-sm-12"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column col-6 view"},["Home"===t.viewName?n("b",[t._v(t._s(t.$t("view.home")))]):t._e(),"Setting"===t.viewName?n("b",[t._v(t._s(t.$t("view.setting")))]):t._e()]),n("div",{staticClass:"column col-6 text-right"},[n("button",{staticClass:"btn btn-primary mr-2",class:{disabled:"SignIn"===t.viewName},on:{click:function(e){return e.stopPropagation(),t.toView("Home")}}},[n("SvgIcon",{staticStyle:{"font-size":"1rem","margin-top":"0.1rem"},attrs:{"icon-class":"key"}})],1),n("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.stopPropagation(),t.toView("Setting")}}},[n("SvgIcon",{staticStyle:{"font-size":"1rem","margin-top":"0.1rem"},attrs:{"icon-class":"setting"}})],1)])])])]):t._e()])},U=[],R={methods:{toView:function(t){k.commit("setViewName",{name:t})}},computed:{uid:function(){return k.state.mixinUser.uid},viewName:function(){return k.state.viewName}}},V=R,Y=(n("27d9"),Object(u["a"])(V,X,U,!1,null,"9b6bcb1c",null)),W=Y.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h5",[t._v("如何生成的随机数？")]),n("p",[t._v("结合交易uuid、设备生成随机数、鼠标移动/点触屏幕坐标")]),n("h5",[t._v("如何保证安全性？")]),n("p",[t._v(" 1.除了足够随机外，会在加密时进行加盐处理，即使相同密码，对称加密后生成内容也不同，提升碰撞攻击难度 "),n("br"),t._v("2.托管在 "),n("a",{attrs:{href:"https://mp.w3c.group"}},[t._v("mp.w3c.group")]),t._v(" 上的代码完全开源、无添加、无后门，可随时用网络抓包监听等方式验证无多余请求 "),n("br"),t._v("声明：MixinPass 暂无商用计划，不对未知原因或不可抗力产生的问题负责，欢迎 "),n("a",{attrs:{href:"https://github.com/wg-01/mixinpass",target:"_blank"}},[t._v("前往Github审查代码")]),t._v(" 帮助 MixinPass 提升 ")])])}],K={},Q=K,Z=(n("5e25"),Object(u["a"])(Q,J,G,!1,null,"166865e3",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b",[t._v("密码列表")]),t.pwdList&&t.pwdList.length?n("table",{staticClass:"table"},[t._m(0),n("tbody",t._l(t.pwdList,(function(e,i){return n("tr",{key:i},[n("td",[t._v(t._s(e.site))]),n("td",[t._v(t._s(e.name))]),n("td",[n("div",{staticClass:"option input-group"},[n("input",{staticClass:"form-input hide-md",attrs:{type:"text",disabled:!0,placeholder:"******************"}}),n("button",{staticClass:"btn btn-primary input-group-btn",on:{click:function(e){return e.stopPropagation(),t.showPwd(i)}}},[t._v("获取")]),n("button",{staticClass:"btn btn-default input-group-btn",on:{click:function(e){return e.stopPropagation(),t.deletePwd(i)}}},[t._v("删除")])])])])})),0)]):n("div",{staticClass:"text-center pb-2 mb-2"},[t._v("暂无记录")])])},nt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("网站名")]),n("th",[t._v("登录名")]),n("th",[t._v("操作")])])])}],it=(n("a434"),{methods:{showPwd:function(t){var e=this.pwdList[t];k.commit("setCurrentPwd",{pwd:e}),document.documentElement.scrollTop=document.body.scrollTop=0},deletePwd:function(t){var e=this.pwdList;e.splice(t,1),k.commit("setPwdList",{list:e})}},computed:{pwdList:function(){return k.state.pwdList}}}),st=it,ot=(n("85f5"),Object(u["a"])(st,et,nt,!1,null,"f195c4f0",null)),at=ot.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-horizontal"},[n("div",{staticClass:"form-group"},[t._m(0),n("div",{staticClass:"col-9 col-lg-8 col-sm-12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.site,expression:"form.site"}],staticClass:"form-input",attrs:{type:"text",placeholder:"网站名"},domProps:{value:t.form.site},on:{input:function(e){e.target.composing||t.$set(t.form,"site",e.target.value)}}})])]),n("div",{staticClass:"form-group"},[t._m(1),n("div",{staticClass:"col-9 col-lg-8 col-sm-12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-input",attrs:{type:"text",placeholder:"登录名"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),n("div",{staticClass:"form-group"},[t._m(2),n("div",{staticClass:"col-9 col-lg-8 col-sm-12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.pwd,expression:"form.pwd"}],staticClass:"form-input",attrs:{type:"password",placeholder:"主密码"},domProps:{value:t.form.pwd},on:{input:function(e){e.target.composing||t.$set(t.form,"pwd",e.target.value)}}})])]),n("div",{staticClass:"form-group pt-1"},[t._m(3),n("div",{staticClass:"col-9 col-lg-8 col-sm-12"},[t.result?n("div",{staticClass:"input-group"},[n("span",{staticClass:"input-group-addon btn",on:{click:function(e){return e.stopPropagation(),t.copyPwd()}}},[t._v("复制")]),n("input",{staticClass:"form-input",attrs:{type:"text",disabled:!t.showResult,spellcheck:"false",placeholder:"******************"},domProps:{value:t.showResult?t.result:""}}),n("button",{staticClass:"btn btn-primary input-group-btn",on:{click:function(e){return e.stopPropagation(),t.showPwd()}}},[t._v(t._s(t.showResult?"隐藏":"显示"))]),n("button",{staticClass:"btn btn-primary input-group-btn",on:{click:function(e){return e.stopPropagation(),t.savePwd()}}},[t._v("保存")])]):n("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.stopPropagation(),t.generate(e)}}},[t._v(t._s(t.currentPwd.site?"获取密码":"生成随机密码"))])])])])},ct=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-2 col-lg-3 col-sm-12"},[n("label",{staticClass:"form-label"},[t._v("网站名")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-2 col-lg-3 col-sm-12"},[n("label",{staticClass:"form-label"},[t._v("登录名")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-2 col-lg-3 col-sm-12"},[n("label",{staticClass:"form-label"},[t._v("主密码")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-2 col-lg-3 col-sm-12"},[n("label",{staticClass:"form-label"})])}],lt=(n("25f0"),n("3452")),ut=lt.enc.Utf8.parse("MIXIN");function dt(t,e){var n=lt.enc.Utf8.parse(e),i=lt.enc.Hex.parse(t),s=lt.enc.Base64.stringify(i),o=lt.AES.decrypt(s,n,{iv:ut,mode:lt.mode.CBC,padding:lt.pad.Pkcs7}),a=o.toString(lt.enc.Utf8);return a.toString()}function mt(t,e){var n=lt.enc.Utf8.parse(e),i=lt.enc.Utf8.parse(t),s=lt.AES.encrypt(i,n,{iv:ut,mode:lt.mode.CBC,padding:lt.pad.Pkcs7});return s.ciphertext.toString()}var pt={Decrypt:dt,Encrypt:mt},ft={data:function(){return{form:{site:"",name:"",pwd:""},result:"",showResult:!1}},computed:{uid:function(){return k.state.mixinUser.uid},currentPwd:function(){return k.state.currentPwd}},watch:{currentPwd:function(t){t&&(this.form=JSON.parse(JSON.stringify(t)))},form:{handler:function(){this.result=""},deep:!0}},mounted:function(){this.showResult=!1,k.commit("setCurrentPwd",{pwd:{}})},methods:{generate:function(){var t=this.form,e=t.site,n=t.name,i=t.pwd;if(!i)return alert("请输入密码");this.result=pt.Encrypt(e+n+i+this.uid)},savePwd:function(){var t=this.form,e=t.site,n=t.name,i=k.state.pwdList;i.push({site:e,name:n}),k.commit("setPwdList",{list:i}),k.commit("setCurrentPwd",{pwd:{}}),this.form={},this.result=""},copyPwd:function(){this.result&&this.$copyText(this.result).then((function(){alert("复制成功")}))},showPwd:function(){this.showResult=!this.showResult}}},vt=ft,ht=Object(u["a"])(vt,rt,ct,!1,null,null,null),gt=ht.exports,wt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},bt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer text-center"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column main col-8 col-lg-10 col-sm-12"},[n("span",{staticClass:"mr-1"},[t._v("©2020 MixinPass - Manage multiple passwords easily and securely. Powered by")]),n("a",{attrs:{href:"https://mixin.one"}},[t._v("Mixin Network")]),t._v(". ")])])])])}],Ct={},yt=Ct,_t=(n("53d7"),Object(u["a"])(yt,wt,bt,!1,null,null,null)),kt=_t.exports,Et={SvgIcon:F,Topbar:W,About:tt,PasswordList:at,Generate:gt,Footer:kt};Object.keys(Et).forEach((function(t){i["a"].component(t,Et[t])}));var xt=n("7c6e"),St=function(t){return t.keys().map(t)};St(xt),i["a"].config.productionTip=!1,i["a"].use(z.a),i["a"].use($["a"]);var Pt=navigator.language||navigator.browserLanguage,Tt=new $["a"]({locale:"zh-CN"===Pt?"cn":"en",messages:I});new i["a"]({i18n:Tt,render:function(t){return t(M)}}).$mount("#app")},5806:function(t,e,n){},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),s=n.n(i);s.a},"5e25":function(t,e,n){"use strict";var i=n("be7d"),s=n.n(i);s.a},6027:function(t,e,n){},"6fdd":function(t,e,n){"use strict";n.r(e);var i=n("e017"),s=n.n(i),o=n("21a1"),a=n.n(o),r=new s.a({id:"icon-setting",use:"icon-setting-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-setting"><defs><style></style></defs><path d="M510.003 864.154c0 24.115 16.282 41.676 38.759 41.676h436.48c22.476 0 38.758-17.561 38.758-41.676 0-24.167-16.282-41.677-38.758-41.677h-436.48c-22.477 0-38.759 17.51-38.759 41.677zm0-704.308c0 24.167 16.282 41.677 38.759 41.677h436.48c22.476 0 38.758-17.51 38.758-41.677 0-24.115-16.282-41.676-38.758-41.676h-436.48c-22.477 0-38.759 17.561-38.759 41.676zM512.512 512c0-24.166-16.23-41.677-38.605-41.677h-435.2C16.23 470.323 0 487.833 0 512c0 24.166 16.23 41.677 38.656 41.677h435.2c22.374 0 38.605-17.51 38.605-41.677zm-51.61 352.154c0-87.706-69.836-159.079-155.699-159.079-70.349 0-131.174 48.538-149.811 117.402H40.806C17.152 822.477 0 839.987 0 864.154c0 24.115 17.152 41.676 40.806 41.676h114.535c18.637 68.813 79.462 117.35 149.811 117.35 85.862 0 155.648-71.372 155.648-159.026zm-155.75 75.673c-40.909 0-74.138-33.945-74.138-75.673 0-41.78 33.28-75.725 74.138-75.725 40.858 0 74.086 33.945 74.086 75.725 0 41.728-33.28 75.673-74.086 75.673zM460.8 159.847C460.851 72.191 391.014.818 305.152.818c-70.349 0-131.174 48.538-149.811 117.35H40.806C17.152 118.17 0 135.732 0 159.847c0 24.167 17.152 41.677 40.806 41.677h114.535c18.637 68.864 79.462 117.453 149.811 117.453 85.862-.051 155.648-71.424 155.648-159.13zM305.152 235.57c-40.909 0-74.138-33.945-74.138-75.725 0-41.728 33.28-75.673 74.138-75.673 40.858 0 74.086 33.945 74.086 75.673 0 41.78-33.28 75.725-74.086 75.725zm563.507 318.106h114.535c23.654 0 40.806-17.51 40.806-41.677 0-24.166-17.152-41.677-40.806-41.677H868.659c-18.637-68.864-79.462-117.35-149.811-117.35-85.862 0-155.648 71.321-155.648 159.027 0 87.706 69.837 159.027 155.7 159.027 70.348 0 131.174-48.486 149.81-117.35zm-149.811 34.048c-40.858 0-74.086-33.997-74.086-75.725 0-41.728 33.28-75.725 74.086-75.725 40.909 0 74.138 33.997 74.138 75.725 0 41.728-33.28 75.725-74.138 75.725z" /></symbol>'});a.a.add(r);e["default"]=r},7062:function(t,e,n){},"7c6e":function(t,e,n){var i={"./key.svg":"f4a8","./logo.svg":"e347","./logout.svg":"4488","./setting.svg":"6fdd"};function s(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=o,t.exports=s,s.id="7c6e"},"85f5":function(t,e,n){"use strict";var i=n("7062"),s=n.n(i);s.a},"9c0c":function(t,e,n){},be7d:function(t,e,n){},c380:function(t,e,n){"use strict";var i=n("5806"),s=n.n(i);s.a},c6d3:function(t,e,n){var i;n("c975"),n("ac1f"),n("466d");var s=n("7037");(function(){"use strict";
/**
   * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
   *
   * @codingstandard ftlabs-jsv2
   * @copyright The Financial Times Limited [All Rights Reserved]
   * @license MIT License (see LICENSE.txt)
   */function o(t,e){var n;if(e=e||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=e.touchBoundary||10,this.layer=t,this.tapDelay=e.tapDelay||200,this.tapTimeout=e.tapTimeout||700,!o.notNeeded(t)){for(var i=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],s=this,a=0,c=i.length;a<c;a++)s[i[a]]=l(s[i[a]],s);r&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var s=Node.prototype.removeEventListener;"click"===e?s.call(t,e,n.hijacked||n,i):s.call(t,e,n,i)},t.addEventListener=function(e,n,i){var s=Node.prototype.addEventListener;"click"===e?s.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):s.call(t,e,n,i)}),"function"===typeof t.onclick&&(n=t.onclick,t.addEventListener("click",(function(t){n(t)}),!1),t.onclick=null)}function l(t,e){return function(){return t.apply(e,arguments)}}}var a=navigator.userAgent.indexOf("Windows Phone")>=0,r=navigator.userAgent.indexOf("Android")>0&&!a,c=/iP(ad|hone|od)/.test(navigator.userAgent)&&!a,l=c&&/OS 4_\d(_\d)?/.test(navigator.userAgent),u=c&&/OS [6-7]_\d/.test(navigator.userAgent),d=navigator.userAgent.indexOf("BB10")>0;o.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(c&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},o.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!r;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},o.prototype.sendClick=function(t,e){var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},o.prototype.determineEventType=function(t){return r&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},o.prototype.focus=function(t){var e;c&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type&&"email"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},o.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},o.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},o.prototype.onTouchStart=function(t){var e,n,i;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],c){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!l){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.cancelable&&(t.defaultPrevented||t.preventDefault()),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.cancelable&&(t.defaultPrevented||t.preventDefault()),!0},o.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},o.prototype.onTouchMove=function(t){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},o.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},o.prototype.onTouchEnd=function(t){var e,n,i,s,o,a=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,u&&(o=t.changedTouches[0],a=document.elementFromPoint(o.pageX-window.pageXOffset,o.pageY-window.pageYOffset)||a,a.fastClickScrollParent=this.targetElement.fastClickScrollParent),i=a.tagName.toLowerCase(),"label"===i){if(e=this.findControl(a),e){if(this.focus(a),r)return!1;a=e}}else if(this.needsFocus(a))return t.timeStamp-n>100||c&&window.top!==window&&"input"===i?(this.targetElement=null,!1):(this.focus(a),this.sendClick(a,t),c&&"select"===i||(this.targetElement=null,t.cancelable&&(t.defaultPrevented||t.preventDefault())),!1);return!(!c||l||(s=a.fastClickScrollParent,!s||s.fastClickLastScrollTop===s.scrollTop))||(this.needsClick(a)||(t.cancelable&&(t.defaultPrevented||t.preventDefault()),this.sendClick(a,t)),!1)},o.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},o.prototype.onMouse=function(t){return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.cancelable&&(t.defaultPrevented||t.preventDefault()),!1))))},o.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||(e=this.onMouse(t),e||(this.targetElement=null),e)},o.prototype.destroy=function(){var t=this.layer;r&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},o.notNeeded=function(t){var e,n,i,s;if("undefined"===typeof window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],n){if(!r)return!0;if(e=document.querySelector("meta[name=viewport]"),e){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(d&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(e=document.querySelector("meta[name=viewport]"),e))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||(s=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],!!(s>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth)))||("none"===t.style.touchAction||"manipulation"===t.style.touchAction))},o.attach=function(t,e){return new o(t,e)},"object"===s(n("3c35"))&&n("3c35")?(i=function(){return o}.call(e,n,e,t),void 0===i||(t.exports=i)):t.exports?(t.exports=o.attach,t.exports.FastClick=o):window.FastClick=o})()},d456:function(t,e,n){},daba:function(t,e,n){"use strict";var i=n("6027"),s=n.n(i);s.a},e347:function(t,e,n){"use strict";n.r(e);var i=n("e017"),s=n.n(i),o=n("21a1"),a=n.n(o),r=new s.a({id:"icon-logo",use:"icon-logo-usage",viewBox:"0 0 521 521",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 521 521" id="icon-logo"><defs><radialGradient cx="1.963%" cy="52.914%" fx="1.963%" fy="52.914%" r="73.396%" gradientTransform="matrix(1 0 0 .99837 0 0)" id="icon-logo_a"><stop stop-color="#70B3FC" offset="0%" /><stop stop-color="#3570E5" offset="100%" /></radialGradient></defs><path d="M106.134 56.08C87.07 68.28 70.431 83.26 56.22 101.019c-14.211 17.759-26.09 38.416-35.636 61.97 15.907 20.12 33.704 37.42 53.39 51.905 19.687 14.485 41.377 26.236 65.069 35.253H1c.852 28.927 3.186 51.959 7 69.095 3.814 17.136 10.28 33.632 19.395 49.488 14.067-1.962 28.941-5.893 44.622-11.794 15.68-5.902 31.295-10.91 46.842-15.027l-63.64 72.852c11.844 21.309 28.816 39.322 50.915 54.039 22.1 14.717 46.2 26.81 72.303 36.278 8.53-21.02 14.656-40.97 18.38-59.853 3.723-18.884 5.335-38.176 4.834-57.877L261.551 521c26.844 0 55.439-5.305 85.785-15.925 30.346-10.62 60.383-29.33 90.11-56.13-25.318-28.856-50.576-53.68-75.774-74.471-25.199-20.792-52.341-39.203-81.427-55.235H513.86c6.548-14.03 8.685-38.816 6.411-74.36-2.274-35.544-10.745-69.76-25.411-102.648-43.636 9.27-80.031 19.898-109.187 31.886-29.156 11.989-56.753 27.672-82.79 47.052L413.918 51.08c-27.759-20.884-58.995-35.49-93.71-43.82-34.715-8.327-67.502-9.491-98.359-3.491-10.064 36.38-16.651 68.49-19.762 96.334-3.11 27.844-3.256 55.997-.436 84.46L106.134 56.08zm136.734 274.128l102 90.49c2.686 2.384 2.06 6.737-1.19 8.265l-56.368 26.51a5 5 0 01-6.786-2.707l-45.632-117.001c-1.908-4.892 4.049-9.042 7.976-5.557zm-51.075-1.42l-23.014 92.656a5 5 0 01-6.828 3.388l-47.986-20.638c-3.234-1.39-4.056-5.597-1.586-8.103l71-72.018c3.57-3.622 9.64-.22 8.414 4.715zM64.495 276.025l106.734 10.613c5.367.534 6.202 8.015 1.085 9.72L72.107 329.743a5 5 0 01-6.526-4.01l-6.527-44c-.478-3.22 2.201-6.03 5.44-5.709zm369.411-59.12l9 55.8a5 5 0 01-4.724 5.791l-176.895 7.5c-5.677.241-7.293-7.67-1.976-9.674l167.895-63.299c2.959-1.115 6.197.761 6.7 3.883zM127.551 148.03l63.49 99c2.96 4.615-2.594 9.941-7.082 6.791l-90-63.172a5 5 0 01-1.146-7.066l26.51-35.828c2.082-2.815 6.338-2.673 8.228.275zM244.907 81.68l71 20.014c3.166.893 4.622 4.547 2.938 7.373l-80 134.22c-2.68 4.496-9.591 2.374-9.287-2.851l9-154.234c.187-3.19 3.274-5.388 6.349-4.522z" fill="url(#icon-logo_a)" fill-rule="nonzero" /></symbol>'});a.a.add(r);e["default"]=r},f4a8:function(t,e,n){"use strict";n.r(e);var i=n("e017"),s=n.n(i),o=n("21a1"),a=n.n(o),r=new s.a({id:"icon-key",use:"icon-key-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-key"><defs><style></style></defs><path d="M621.714 54.857c-191.885 0-347.428 155.543-347.428 347.429 0 80.343 27.314 154.285 73.028 213.143L300.343 662.4l-71.2-71.2a9.314 9.314 0 00-13.029 0l-45.485 45.486a9.314 9.314 0 000 13.028l71.2 71.2-51.315 51.315-71.2-71.2a9.314 9.314 0 00-13.028 0L60.8 746.514a9.314 9.314 0 000 13.029l71.2 71.2-74.629 74.628a9.177 9.177 0 000 12.915l48.343 48.343c3.543 3.542 9.372 3.542 12.915 0L408.457 676.8a347.497 347.497 0 00213.257 72.914c191.886 0 347.429-155.543 347.429-347.428S813.6 54.857 621.714 54.857zm184.229 531.657c-49.143 49.257-114.629 76.343-184.229 76.343-69.6 0-135.085-27.086-184.228-76.343-49.257-49.143-76.343-114.628-76.343-184.228 0-69.6 27.086-135.086 76.343-184.229 49.143-49.257 114.628-76.343 184.228-76.343 69.6 0 135.086 27.086 184.229 76.343 49.257 49.143 76.343 114.629 76.343 184.229 0 69.6-27.086 135.085-76.343 184.228z" /></symbol>'});a.a.add(r);e["default"]=r}});