(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/addressAdmin/addressAdmin"],{"1f4e":function(n,t,e){"use strict";var o=e("d8bb"),i=e.n(o);i.a},"297f":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i})},9052:function(n,t,e){"use strict";e.r(t);var o=e("ac84"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);t["default"]=i.a},ac84:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return e.e("components/APPHeader").then(e.bind(null,"0814"))},i=function(){return e.e("pages/addressAdmin/noLocation/index").then(e.bind(null,"96fd"))},a=function(){return e.e("pages/addressAdmin/locationInfo/index").then(e.bind(null,"de44"))},c={components:{APPHeader:o,noLocation:i,locationInfo:a},data:function(){return{location:[],city:"广州"}},onLoad:function(n){n.city?this.city=n.city:this.getlocation()},methods:{getlocation:function(){var t=this;n.getLocation({type:"wgs84",success:function(n){t.location=[n.longitude,n.latitude]},fail:function(n){t.location=[]}})},addNewAddress:function(){n.navigateTo({url:"/pages/addressAdmin/addAddress/index"})}}};t.default=c}).call(this,e("6e42")["default"])},d8bb:function(n,t,e){},e055:function(n,t,e){"use strict";e.r(t);var o=e("297f"),i=e("9052");for(var a in i)"default"!==a&&function(n){e.d(t,n,function(){return i[n]})}(a);e("1f4e");var c=e("2877"),u=Object(c["a"])(i["default"],o["a"],o["b"],!1,null,"84e86790",null);t["default"]=u.exports}},[["1c12","common/runtime","common/vendor"]]]);