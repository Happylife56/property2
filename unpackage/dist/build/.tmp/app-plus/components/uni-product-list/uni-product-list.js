(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-product-list/uni-product-list"],{"0daa":function(t,i,e){"use strict";e.r(i);var n=e("7fb2"),a=e("9bdf");for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);e("6663");var r=e("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);i["default"]=c.exports},6663:function(t,i,e){"use strict";var n=e("e46c"),a=e.n(n);a.a},"7fb2":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement;t._self._c},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},"9bdf":function(t,i,e){"use strict";e.r(i);var n=e("c269"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);i["default"]=a.a},c269:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{title:"product-list",productList:[],renderImage:!0}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"add",e=[{image:"../../static/lock.jpg",title:"智能门锁指纹门锁智能门锁指纹门锁",originalPrice:1999,favourPrice:1888,tip:"自营"},{image:"../../static/lock.jpg",title:"智能门锁指纹门锁智能门锁指纹门锁",originalPrice:1999,favourPrice:1888,tip:"优惠"},{image:"../../static/lock.jpg",title:"智能门锁指纹门锁智能门锁指纹门锁",originalPrice:1999,favourPrice:1888,tip:"秒杀"},{image:"../../static/lock.jpg",title:"智能门锁指纹门锁智能门锁指纹门锁",originalPrice:999,favourPrice:958,tip:"秒杀"},{image:"../../static/lock.jpg",title:"智能门锁指纹门锁智能门锁指纹门锁 黑色",originalPrice:999,favourPrice:958,tip:"优惠"},{image:"../../static/lock.jpg",title:"智能门锁指纹门锁智能门锁指纹门锁 黑色",originalPrice:2899,favourPrice:2799,tip:"自营"}];"refresh"===i&&(this.productList=[]),e.forEach(function(i){t.productList.push(i)})}},onLoad:function(){var t=this;this.loadData(),setTimeout(function(){t.renderImage=!0},300)},onPullDownRefresh:function(){this.loadData("refresh"),setTimeout(function(){t.stopPullDownRefresh()},2e3)},onReachBottom:function(){this.loadData()}};i.default=e}).call(this,e("6e42")["default"])},e46c:function(t,i,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-product-list/uni-product-list-create-component',
    {
        'components/uni-product-list/uni-product-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("0daa"))
        })
    },
    [['components/uni-product-list/uni-product-list-create-component']]
]);                