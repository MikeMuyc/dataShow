(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-329ee483"],{1335:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.prefixCls,style:t.styles},[t._t("default")],2)},s=[],a="ivu-carousel-item",o={componentName:"carousel-item",name:"CarouselItem",data:function(){return{prefixCls:a,width:0,height:"auto",left:0}},computed:{styles:function(){return{width:"".concat(this.width,"px"),height:"".concat(this.height),left:"".concat(this.left,"px")}}},mounted:function(){this.$parent.slotChange()},watch:{width:function(t){var e=this;t&&this.$parent.loop&&this.$nextTick((function(){e.$parent.initCopyTrackDom()}))},height:function(t){var e=this;t&&this.$parent.loop&&this.$nextTick((function(){e.$parent.initCopyTrackDom()}))}},beforeDestroy:function(){this.$parent.slotChange()}},r=o,c=i("c701"),h=Object(c["a"])(r,n,s,!1,null,null,null);e["a"]=h.exports},"71c6":function(t,e,i){"use strict";var n=i("1335");e["a"]=n["a"]},a634:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.classes},[i("button",{staticClass:"left",class:t.arrowClasses,attrs:{type:"button"},on:{click:function(e){return t.arrowEvent(-1)}}},[i("Icon",{attrs:{type:"ios-arrow-back"}})],1),i("div",{class:[t.prefixCls+"-list"]},[i("div",{ref:"originTrack",class:[t.prefixCls+"-track",t.showCopyTrack?"":"higher"],style:t.trackStyles,on:{click:function(e){return t.handlerClickEvent("currentIndex")}}},[t._t("default")],2),t.loop?i("div",{ref:"copyTrack",class:[t.prefixCls+"-track",t.showCopyTrack?"higher":""],style:t.copyTrackStyles,on:{click:function(e){return t.handlerClickEvent("copyTrackIndex")}}}):t._e()]),i("button",{staticClass:"right",class:t.arrowClasses,attrs:{type:"button"},on:{click:function(e){return t.arrowEvent(1)}}},[i("Icon",{attrs:{type:"ios-arrow-forward"}})],1),i("ul",{class:t.dotsClasses},[t._l(t.slides.length,(function(e){return[i("li",{class:[e-1===t.currentIndex?t.prefixCls+"-active":""],on:{click:function(i){return t.dotsEvent("click",e-1)},mouseover:function(i){return t.dotsEvent("hover",e-1)}}},[i("button",{class:[t.radiusDot?"radius":""],attrs:{type:"button"}})])]}))],2)])},s=[],a=(i("6d57"),i("2b45"),i("163d"),i("8225")),o=i("93a0"),r=i("29a7"),c="ivu-carousel",h={name:"Carousel",components:{Icon:a["a"]},props:{arrow:{type:String,default:"hover",validator:function(t){return Object(o["e"])(t,["hover","always","never"])}},autoplay:{type:Boolean,default:!1},autoplaySpeed:{type:Number,default:2e3},loop:{type:Boolean,default:!1},easing:{type:String,default:"ease"},dots:{type:String,default:"inside",validator:function(t){return Object(o["e"])(t,["inside","outside","none"])}},radiusDot:{type:Boolean,default:!1},trigger:{type:String,default:"click",validator:function(t){return Object(o["e"])(t,["click","hover"])}},value:{type:Number,default:0},height:{type:[String,Number],default:"auto",validator:function(t){return"auto"===t||"[object Number]"===Object.prototype.toString.call(t)}}},data:function(){return{prefixCls:c,listWidth:0,trackWidth:0,trackOffset:0,trackCopyOffset:0,showCopyTrack:!1,slides:[],slideInstances:[],timer:null,ready:!1,currentIndex:this.value,trackIndex:this.value,copyTrackIndex:this.value,hideTrackPos:-1}},computed:{classes:function(){return["".concat(c)]},trackStyles:function(){var t=-1===this.trackIndex?"hidden":"visible";return{width:"".concat(this.trackWidth,"px"),transform:"translate3d(".concat(-this.trackOffset,"px, 0px, 0px)"),transition:"transform 500ms ".concat(this.easing),visibility:t}},copyTrackStyles:function(){return{width:"".concat(this.trackWidth,"px"),transform:"translate3d(".concat(-this.trackCopyOffset,"px, 0px, 0px)"),transition:"transform 500ms ".concat(this.easing),position:"absolute"}},arrowClasses:function(){return["".concat(c,"-arrow"),"".concat(c,"-arrow-").concat(this.arrow)]},dotsClasses:function(){return["".concat(c,"-dots"),"".concat(c,"-dots-").concat(this.dots)]}},methods:{handlerClickEvent:function(t){this.$emit("on-click",this[t])},findChild:function(t){var e=function e(i){var n=i.$options.componentName;n?t(i):i.$children.length&&i.$children.forEach((function(i){e(i,t)}))};this.slideInstances.length||!this.$children?this.slideInstances.forEach((function(t){e(t)})):this.$children.forEach((function(t){e(t)}))},initCopyTrackDom:function(){var t=this;this.$nextTick((function(){t.$refs.copyTrack.innerHTML=t.$refs.originTrack.innerHTML}))},updateSlides:function(t){var e=this,i=[],n=1;this.findChild((function(s){i.push({$el:s.$el}),s.index=n++,t&&e.slideInstances.push(s)})),this.slides=i,this.updatePos()},updatePos:function(){var t=this;this.findChild((function(e){e.width=t.listWidth,e.height="number"===typeof t.height?"".concat(t.height,"px"):t.height}));var e=this.slides.length||0;this.trackWidth=e*this.listWidth},slotChange:function(){var t=this;this.$nextTick((function(){t.slides=[],t.slideInstances=[],t.updateSlides(!0,!0),t.updatePos(),t.updateOffset()}))},handleResize:function(){this.listWidth=parseInt(Object(o["d"])(this.$el,"width")),this.updatePos(),this.updateOffset()},updateTrackPos:function(t){this.showCopyTrack?this.trackIndex=t:this.copyTrackIndex=t},updateTrackIndex:function(t){this.showCopyTrack?this.copyTrackIndex=t:this.trackIndex=t,this.currentIndex=t},add:function(t){var e=this.slides.length;this.loop&&(this.hideTrackPos=t>0?-1:e,this.updateTrackPos(this.hideTrackPos));var i=this.showCopyTrack?this.copyTrackIndex:this.trackIndex,n=i+t;while(n<0)n+=e;(t>0&&n===e||t<0&&n===e-1)&&this.loop?(this.showCopyTrack=!this.showCopyTrack,this.trackIndex+=t,this.copyTrackIndex+=t):(this.loop||(n%=this.slides.length),this.updateTrackIndex(n)),this.currentIndex=n===this.slides.length?0:n,this.$emit("on-change",i,this.currentIndex),this.$emit("input",this.currentIndex)},arrowEvent:function(t){this.setAutoplay(),this.add(t)},dotsEvent:function(t,e){var i=this.showCopyTrack?this.copyTrackIndex:this.trackIndex,n=this.currentIndex;t===this.trigger&&i!==e&&(this.updateTrackIndex(e),this.$emit("on-change",n,this.currentIndex),this.$emit("input",e),this.setAutoplay())},setAutoplay:function(){var t=this;window.clearInterval(this.timer),this.autoplay&&(this.timer=window.setInterval((function(){t.add(1)}),this.autoplaySpeed))},updateOffset:function(){var t=this;this.$nextTick((function(){var e=t.copyTrackIndex>0?-1:1;t.trackOffset=t.trackIndex*t.listWidth,t.trackCopyOffset=t.copyTrackIndex*t.listWidth+e}))}},watch:{autoplay:function(){this.setAutoplay()},autoplaySpeed:function(){this.setAutoplay()},trackIndex:function(){this.updateOffset()},copyTrackIndex:function(){this.updateOffset()},height:function(){this.updatePos()},value:function(t){this.updateTrackIndex(t),this.setAutoplay()}},mounted:function(){this.updateSlides(!0),this.handleResize(),this.setAutoplay(),Object(r["b"])(window,"resize",this.handleResize)},beforeDestroy:function(){Object(r["a"])(window,"resize",this.handleResize)}},u=h,l=i("c701"),d=Object(l["a"])(u,n,s,!1,null,null,null),p=d.exports,f=i("1335");p.Item=f["a"];e["a"]=p}}]);
//# sourceMappingURL=chunk-329ee483.af34ff3b.js.map