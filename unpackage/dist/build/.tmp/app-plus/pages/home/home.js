(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{"0ac5":function(e,n,t){"use strict";t.r(n);var o=t("37ef"),c=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);n["default"]=c.a},"37ef":function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=function(){return t.e("node-modules/@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot").then(t.bind(null,"00c5"))},u=function(){return t.e("components/uni-product-list/uni-product-list").then(t.bind(null,"0daa"))},i=function(){return t.e("components/AppFooter/index").then(t.bind(null,"0b05"))},a={data:function(){return{info:[{content:"/static/swiper1.jpg"},{content:"/static/swiper2.jpg"},{content:"/static/swiper3.jpg"}],cuIconList:[{cuIcon:"unlock",color:"red",badge:0,name:"小区开门"},{cuIcon:"edit",color:"orange",badge:0,name:"访客管理"},{cuIcon:"servicefill",color:"yellow",badge:0,name:"小区物业"},{cuIcon:"taxi",color:"olive",badge:0,name:"车位预约"},{cuIcon:"repairfill",color:"cyan",badge:0,name:"上门安装"},{cuIcon:"clothesfill",color:"blue",badge:0,name:"保洁清洗"},{cuIcon:"deliver ",color:"purple",badge:0,name:"搬家运货"},{cuIcon:"questionfill",color:"mauve",badge:0,name:"更多"}],current:0,mode:"default",location:[],city:"广州",code:"",list:[1,2,3,4,5,6]}},mounted:function(){this.$route.query.city&&(this.city=this.$route.query.city)},components:{uniSwiperDot:c,uniProductList:u,AppFooter:i},methods:{change:function(e){this.current=e.detail.current},getlocation:function(){var n=this;e.getLocation({type:"wgs84",success:function(t){console.log(o("当前位置的经度："+t.longitude," at pages\\home\\home.vue:146")),console.log(o("当前位置的纬度："+t.latitude," at pages\\home\\home.vue:147")),n.location=[t.longitude,t.latitude],e.navigateTo({url:"/pages/changCity/index?city=广州"})},fail:function(e){console.log(o(e," at pages\\home\\home.vue:154"))}})},scanCode2:function(){var n=this;e.scanCode({onlyFromCamera:!0,success:function(e){console.log(o("条码类型："+e.scanType," at pages\\home\\home.vue:165")),console.log(o("条码内容："+e.result," at pages\\home\\home.vue:166")),n.code=e.result}})},InputFocus:function(e){this.InputBottom=e.detail.height},InputBlur:function(e){this.InputBottom=0}}};n.default=a}).call(this,t("6e42")["default"],t("0de9")["default"])},"3c1c":function(e,n,t){},"5cf5":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},c=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return c})},"8bd4":function(e,n,t){"use strict";t.r(n);var o=t("5cf5"),c=t("0ac5");for(var u in c)"default"!==u&&function(e){t.d(n,e,function(){return c[e]})}(u);t("b8a9");var i=t("2877"),a=Object(i["a"])(c["default"],o["a"],o["b"],!1,null,"f6c36e44",null);n["default"]=a.exports},b8a9:function(e,n,t){"use strict";var o=t("3c1c"),c=t.n(o);c.a}},[["0ba9","common/runtime","common/vendor"]]]);