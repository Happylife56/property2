(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/addressAdmin/addressAdmin"],{"181c":function(n,t,e){"use strict";e.r(t);var o=e("682a"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);t["default"]=i.a},5478:function(n,t,e){},"682a":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return e.e("components/APPHeader").then(e.bind(null,"7fd2"))},i=function(){return e.e("pages/addressAdmin/noLocation/index").then(e.bind(null,"15e7"))},a=function(){return e.e("pages/addressAdmin/locationInfo/index").then(e.bind(null,"9b61"))},c={components:{APPHeader:o,noLocation:i,locationInfo:a},data:function(){return{location:[],city:"广州"}},onLoad:function(n){n.city?this.city=n.city:this.getlocation()},methods:{getlocation:function(){var t=this;n.getLocation({type:"wgs84",success:function(n){t.location=[n.longitude,n.latitude]},fail:function(n){t.location=[]}})},addNewAddress:function(){n.navigateTo({url:"/pages/addressAdmin/addAddress/index"})}}};t.default=c}).call(this,e("6e42")["default"])},"9ed4":function(n,t,e){"use strict";var o=e("5478"),i=e.n(o);i.a},f647:function(n,t,e){"use strict";e.r(t);var o=e("fe87"),i=e("181c");for(var a in i)"default"!==a&&function(n){e.d(t,n,function(){return i[n]})}(a);e("9ed4");var c=e("2877"),d=Object(c["a"])(i["default"],o["a"],o["b"],!1,null,"9a0adbd0",null);t["default"]=d.exports},fe87:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i})}},[["41cc","common/runtime","common/vendor"]]]);