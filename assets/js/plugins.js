// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.



/*----------------------------
bxSlider
------------------------------*/
/**
 * bxSlider v4.2.12
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
!function(t){var e={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0}};t.fn.bxSlider=function(n){if(0===this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var s={},o=this,r=t(window).width(),a=t(window).height();if(!t(o).data("bxSlider")){var l=function(){t(o).data("bxSlider")||(s.settings=t.extend({},e,n),s.settings.slideWidth=parseInt(s.settings.slideWidth),s.children=o.children(s.settings.slideSelector),s.children.length<s.settings.minSlides&&(s.settings.minSlides=s.children.length),s.children.length<s.settings.maxSlides&&(s.settings.maxSlides=s.children.length),s.settings.randomStart&&(s.settings.startSlide=Math.floor(Math.random()*s.children.length)),s.active={index:s.settings.startSlide},s.carousel=s.settings.minSlides>1||s.settings.maxSlides>1,s.carousel&&(s.settings.preloadImages="all"),s.minThreshold=s.settings.minSlides*s.settings.slideWidth+(s.settings.minSlides-1)*s.settings.slideMargin,s.maxThreshold=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin,s.working=!1,s.controls={},s.interval=null,s.animProp="vertical"===s.settings.mode?"top":"left",s.usingCSS=s.settings.useCSS&&"fade"!==s.settings.mode&&function(){for(var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],i=0;i<e.length;i++)if(void 0!==t.style[e[i]])return s.cssPrefix=e[i].replace("Perspective","").toLowerCase(),s.animProp="-"+s.cssPrefix+"-transform",!0;return!1}(),"vertical"===s.settings.mode&&(s.settings.maxSlides=s.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(s.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),d())},d=function(){var e=s.children.eq(s.settings.startSlide);o.wrap('<div class="'+s.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),s.viewport=o.parent(),s.settings.ariaLive&&!s.settings.ticker&&s.viewport.attr("aria-live","polite"),s.loader=t('<div class="bx-loading" />'),s.viewport.prepend(s.loader),o.css({width:"horizontal"===s.settings.mode?1e3*s.children.length+215+"%":"auto",position:"relative"}),s.usingCSS&&s.settings.easing?o.css("-"+s.cssPrefix+"-transition-timing-function",s.settings.easing):s.settings.easing||(s.settings.easing="swing"),s.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),s.viewport.parent().css({maxWidth:u()}),s.children.css({float:"horizontal"===s.settings.mode?"left":"none",listStyle:"none",position:"relative"}),s.children.css("width",h()),"horizontal"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginRight",s.settings.slideMargin),"vertical"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginBottom",s.settings.slideMargin),"fade"===s.settings.mode&&(s.children.css({position:"absolute",zIndex:0,display:"none"}),s.children.eq(s.settings.startSlide).css({zIndex:s.settings.slideZIndex,display:"block"})),s.controls.el=t('<div class="bx-controls" />'),s.settings.captions&&P(),s.active.last=s.settings.startSlide===f()-1,s.settings.video&&o.fitVids(),("all"===s.settings.preloadImages||s.settings.ticker)&&(e=s.children),s.settings.ticker?s.settings.pager=!1:(s.settings.controls&&C(),s.settings.auto&&s.settings.autoControls&&T(),s.settings.pager&&w(),(s.settings.controls||s.settings.autoControls||s.settings.pager)&&s.viewport.after(s.controls.el)),c(e,g)},c=function(e,i){var n=e.find('img:not([src=""]), iframe').length,s=0;return 0===n?void i():void e.find('img:not([src=""]), iframe').each(function(){t(this).one("load error",function(){++s===n&&i()}).each(function(){this.complete&&t(this).trigger("load")})})},g=function(){if(s.settings.infiniteLoop&&"fade"!==s.settings.mode&&!s.settings.ticker){var e="vertical"===s.settings.mode?s.settings.minSlides:s.settings.maxSlides,i=s.children.slice(0,e).clone(!0).addClass("bx-clone"),n=s.children.slice(-e).clone(!0).addClass("bx-clone");s.settings.ariaHidden&&(i.attr("aria-hidden",!0),n.attr("aria-hidden",!0)),o.append(i).prepend(n)}s.loader.remove(),m(),"vertical"===s.settings.mode&&(s.settings.adaptiveHeight=!0),s.viewport.height(p()),o.redrawSlider(),s.settings.onSliderLoad.call(o,s.active.index),s.initialized=!0,s.settings.responsive&&t(window).bind("resize",Z),s.settings.auto&&s.settings.autoStart&&(f()>1||s.settings.autoSlideForOnePage)&&H(),s.settings.ticker&&W(),s.settings.pager&&I(s.settings.startSlide),s.settings.controls&&D(),s.settings.touchEnabled&&!s.settings.ticker&&N(),s.settings.keyboardEnabled&&!s.settings.ticker&&t(document).keydown(F)},p=function(){var e=0,n=t();if("vertical"===s.settings.mode||s.settings.adaptiveHeight)if(s.carousel){var o=1===s.settings.moveSlides?s.active.index:s.active.index*x();for(n=s.children.eq(o),i=1;i<=s.settings.maxSlides-1;i++)n=o+i>=s.children.length?n.add(s.children.eq(i-1)):n.add(s.children.eq(o+i))}else n=s.children.eq(s.active.index);else n=s.children;return"vertical"===s.settings.mode?(n.each(function(i){e+=t(this).outerHeight()}),s.settings.slideMargin>0&&(e+=s.settings.slideMargin*(s.settings.minSlides-1))):e=Math.max.apply(Math,n.map(function(){return t(this).outerHeight(!1)}).get()),"border-box"===s.viewport.css("box-sizing")?e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))+parseFloat(s.viewport.css("border-top-width"))+parseFloat(s.viewport.css("border-bottom-width")):"padding-box"===s.viewport.css("box-sizing")&&(e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))),e},u=function(){var t="100%";return s.settings.slideWidth>0&&(t="horizontal"===s.settings.mode?s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin:s.settings.slideWidth),t},h=function(){var t=s.settings.slideWidth,e=s.viewport.width();if(0===s.settings.slideWidth||s.settings.slideWidth>e&&!s.carousel||"vertical"===s.settings.mode)t=e;else if(s.settings.maxSlides>1&&"horizontal"===s.settings.mode){if(e>s.maxThreshold)return t;e<s.minThreshold?t=(e-s.settings.slideMargin*(s.settings.minSlides-1))/s.settings.minSlides:s.settings.shrinkItems&&(t=Math.floor((e+s.settings.slideMargin)/Math.ceil((e+s.settings.slideMargin)/(t+s.settings.slideMargin))-s.settings.slideMargin))}return t},v=function(){var t=1,e=null;return"horizontal"===s.settings.mode&&s.settings.slideWidth>0?s.viewport.width()<s.minThreshold?t=s.settings.minSlides:s.viewport.width()>s.maxThreshold?t=s.settings.maxSlides:(e=s.children.first().width()+s.settings.slideMargin,t=Math.floor((s.viewport.width()+s.settings.slideMargin)/e)):"vertical"===s.settings.mode&&(t=s.settings.minSlides),t},f=function(){var t=0,e=0,i=0;if(s.settings.moveSlides>0)if(s.settings.infiniteLoop)t=Math.ceil(s.children.length/x());else for(;e<s.children.length;)++t,e=i+v(),i+=s.settings.moveSlides<=v()?s.settings.moveSlides:v();else t=Math.ceil(s.children.length/v());return t},x=function(){return s.settings.moveSlides>0&&s.settings.moveSlides<=v()?s.settings.moveSlides:v()},m=function(){var t,e,i;s.children.length>s.settings.maxSlides&&s.active.last&&!s.settings.infiniteLoop?"horizontal"===s.settings.mode?(e=s.children.last(),t=e.position(),S(-(t.left-(s.viewport.width()-e.outerWidth())),"reset",0)):"vertical"===s.settings.mode&&(i=s.children.length-s.settings.minSlides,t=s.children.eq(i).position(),S(-t.top,"reset",0)):(t=s.children.eq(s.active.index*x()).position(),s.active.index===f()-1&&(s.active.last=!0),void 0!==t&&("horizontal"===s.settings.mode?S(-t.left,"reset",0):"vertical"===s.settings.mode&&S(-t.top,"reset",0)))},S=function(e,i,n,r){var a,l;s.usingCSS?(l="vertical"===s.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)",o.css("-"+s.cssPrefix+"-transition-duration",n/1e3+"s"),"slide"===i?(o.css(s.animProp,l),0!==n?o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),q())}):q()):"reset"===i?o.css(s.animProp,l):"ticker"===i&&(o.css("-"+s.cssPrefix+"-transition-timing-function","linear"),o.css(s.animProp,l),0!==n?o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(r.resetValue,"reset",0),L())}):(S(r.resetValue,"reset",0),L()))):(a={},a[s.animProp]=e,"slide"===i?o.animate(a,n,s.settings.easing,function(){q()}):"reset"===i?o.css(s.animProp,e):"ticker"===i&&o.animate(a,n,"linear",function(){S(r.resetValue,"reset",0),L()}))},b=function(){for(var e="",i="",n=f(),o=0;o<n;o++)i="",s.settings.buildPager&&t.isFunction(s.settings.buildPager)||s.settings.pagerCustom?(i=s.settings.buildPager(o),s.pagerEl.addClass("bx-custom-pager")):(i=o+1,s.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+o+'" class="bx-pager-link">'+i+"</a></div>";s.pagerEl.html(e)},w=function(){s.settings.pagerCustom?s.pagerEl=t(s.settings.pagerCustom):(s.pagerEl=t('<div class="bx-pager" />'),s.settings.pagerSelector?t(s.settings.pagerSelector).html(s.pagerEl):s.controls.el.addClass("bx-has-pager").append(s.pagerEl),b()),s.pagerEl.on("click touchend","a",z)},C=function(){s.controls.next=t('<a class="bx-next" href="">'+s.settings.nextText+"</a>"),s.controls.prev=t('<a class="bx-prev" href="">'+s.settings.prevText+"</a>"),s.controls.next.bind("click touchend",E),s.controls.prev.bind("click touchend",k),s.settings.nextSelector&&t(s.settings.nextSelector).append(s.controls.next),s.settings.prevSelector&&t(s.settings.prevSelector).append(s.controls.prev),s.settings.nextSelector||s.settings.prevSelector||(s.controls.directionEl=t('<div class="bx-controls-direction" />'),s.controls.directionEl.append(s.controls.prev).append(s.controls.next),s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))},T=function(){s.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+s.settings.startText+"</a></div>"),s.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+s.settings.stopText+"</a></div>"),s.controls.autoEl=t('<div class="bx-controls-auto" />'),s.controls.autoEl.on("click",".bx-start",M),s.controls.autoEl.on("click",".bx-stop",y),s.settings.autoControlsCombine?s.controls.autoEl.append(s.controls.start):s.controls.autoEl.append(s.controls.start).append(s.controls.stop),s.settings.autoControlsSelector?t(s.settings.autoControlsSelector).html(s.controls.autoEl):s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),A(s.settings.autoStart?"stop":"start")},P=function(){s.children.each(function(e){var i=t(this).find("img:first").attr("title");void 0!==i&&(""+i).length&&t(this).append('<div class="bx-caption"><span>'+i+"</span></div>")})},E=function(t){t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToNextSlide())},k=function(t){t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToPrevSlide())},M=function(t){o.startAuto(),t.preventDefault()},y=function(t){o.stopAuto(),t.preventDefault()},z=function(e){var i,n;e.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),i=t(e.currentTarget),void 0!==i.attr("data-slide-index")&&(n=parseInt(i.attr("data-slide-index")),n!==s.active.index&&o.goToSlide(n)))},I=function(e){var i=s.children.length;return"short"===s.settings.pagerType?(s.settings.maxSlides>1&&(i=Math.ceil(s.children.length/s.settings.maxSlides)),void s.pagerEl.html(e+1+s.settings.pagerShortSeparator+i)):(s.pagerEl.find("a").removeClass("active"),void s.pagerEl.each(function(i,n){t(n).find("a").eq(e).addClass("active")}))},q=function(){if(s.settings.infiniteLoop){var t="";0===s.active.index?t=s.children.eq(0).position():s.active.index===f()-1&&s.carousel?t=s.children.eq((f()-1)*x()).position():s.active.index===s.children.length-1&&(t=s.children.eq(s.children.length-1).position()),t&&("horizontal"===s.settings.mode?S(-t.left,"reset",0):"vertical"===s.settings.mode&&S(-t.top,"reset",0))}s.working=!1,s.settings.onSlideAfter.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)},A=function(t){s.settings.autoControlsCombine?s.controls.autoEl.html(s.controls[t]):(s.controls.autoEl.find("a").removeClass("active"),s.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},D=function(){1===f()?(s.controls.prev.addClass("disabled"),s.controls.next.addClass("disabled")):!s.settings.infiniteLoop&&s.settings.hideControlOnEnd&&(0===s.active.index?(s.controls.prev.addClass("disabled"),s.controls.next.removeClass("disabled")):s.active.index===f()-1?(s.controls.next.addClass("disabled"),s.controls.prev.removeClass("disabled")):(s.controls.prev.removeClass("disabled"),s.controls.next.removeClass("disabled")))},H=function(){if(s.settings.autoDelay>0){setTimeout(o.startAuto,s.settings.autoDelay)}else o.startAuto(),t(window).focus(function(){o.startAuto()}).blur(function(){o.stopAuto()});s.settings.autoHover&&o.hover(function(){s.interval&&(o.stopAuto(!0),s.autoPaused=!0)},function(){s.autoPaused&&(o.startAuto(!0),s.autoPaused=null)})},W=function(){var e,i,n,r,a,l,d,c,g=0;"next"===s.settings.autoDirection?o.append(s.children.clone().addClass("bx-clone")):(o.prepend(s.children.clone().addClass("bx-clone")),e=s.children.first().position(),g="horizontal"===s.settings.mode?-e.left:-e.top),S(g,"reset",0),s.settings.pager=!1,s.settings.controls=!1,s.settings.autoControls=!1,s.settings.tickerHover&&(s.usingCSS?(r="horizontal"===s.settings.mode?4:5,s.viewport.hover(function(){i=o.css("-"+s.cssPrefix+"-transform"),n=parseFloat(i.split(",")[r]),S(n,"reset",0)},function(){c=0,s.children.each(function(e){c+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(n))),L(d)})):s.viewport.hover(function(){o.stop()},function(){c=0,s.children.each(function(e){c+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(o.css(l)))),L(d)})),L()},L=function(t){var e,i,n,r=t?t:s.settings.speed,a={left:0,top:0},l={left:0,top:0};"next"===s.settings.autoDirection?a=o.find(".bx-clone").first().position():l=s.children.first().position(),e="horizontal"===s.settings.mode?-a.left:-a.top,i="horizontal"===s.settings.mode?-l.left:-l.top,n={resetValue:i},S(e,"ticker",r,n)},O=function(e){var i=t(window),n={top:i.scrollTop(),left:i.scrollLeft()},s=e.offset();return n.right=n.left+i.width(),n.bottom=n.top+i.height(),s.right=s.left+e.outerWidth(),s.bottom=s.top+e.outerHeight(),!(n.right<s.left||n.left>s.right||n.bottom<s.top||n.top>s.bottom)},F=function(t){var e=document.activeElement.tagName.toLowerCase(),i="input|textarea",n=new RegExp(e,["i"]),s=n.exec(i);if(null==s&&O(o)){if(39===t.keyCode)return E(t),!1;if(37===t.keyCode)return k(t),!1}},N=function(){s.touch={start:{x:0,y:0},end:{x:0,y:0}},s.viewport.bind("touchstart MSPointerDown pointerdown",X),s.viewport.on("click",".bxslider a",function(t){s.viewport.hasClass("click-disabled")&&(t.preventDefault(),s.viewport.removeClass("click-disabled"))})},X=function(t){if(s.controls.el.addClass("disabled"),s.working)t.preventDefault(),s.controls.el.removeClass("disabled");else{s.touch.originalPos=o.position();var e=t.originalEvent,i="undefined"!=typeof e.changedTouches?e.changedTouches:[e];s.touch.start.x=i[0].pageX,s.touch.start.y=i[0].pageY,s.viewport.get(0).setPointerCapture&&(s.pointerId=e.pointerId,s.viewport.get(0).setPointerCapture(s.pointerId)),s.viewport.bind("touchmove MSPointerMove pointermove",V),s.viewport.bind("touchend MSPointerUp pointerup",R),s.viewport.bind("MSPointerCancel pointercancel",Y)}},Y=function(t){S(s.touch.originalPos.left,"reset",0),s.controls.el.removeClass("disabled"),s.viewport.unbind("MSPointerCancel pointercancel",Y),s.viewport.unbind("touchmove MSPointerMove pointermove",V),s.viewport.unbind("touchend MSPointerUp pointerup",R),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},V=function(t){var e=t.originalEvent,i="undefined"!=typeof e.changedTouches?e.changedTouches:[e],n=Math.abs(i[0].pageX-s.touch.start.x),o=Math.abs(i[0].pageY-s.touch.start.y),r=0,a=0;3*n>o&&s.settings.preventDefaultSwipeX?t.preventDefault():3*o>n&&s.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!==s.settings.mode&&s.settings.oneToOneTouch&&("horizontal"===s.settings.mode?(a=i[0].pageX-s.touch.start.x,r=s.touch.originalPos.left+a):(a=i[0].pageY-s.touch.start.y,r=s.touch.originalPos.top+a),S(r,"reset",0))},R=function(t){s.viewport.unbind("touchmove MSPointerMove pointermove",V),s.controls.el.removeClass("disabled");var e=t.originalEvent,i="undefined"!=typeof e.changedTouches?e.changedTouches:[e],n=0,r=0;s.touch.end.x=i[0].pageX,s.touch.end.y=i[0].pageY,"fade"===s.settings.mode?(r=Math.abs(s.touch.start.x-s.touch.end.x),r>=s.settings.swipeThreshold&&(s.touch.start.x>s.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto())):("horizontal"===s.settings.mode?(r=s.touch.end.x-s.touch.start.x,n=s.touch.originalPos.left):(r=s.touch.end.y-s.touch.start.y,n=s.touch.originalPos.top),!s.settings.infiniteLoop&&(0===s.active.index&&r>0||s.active.last&&r<0)?S(n,"reset",200):Math.abs(r)>=s.settings.swipeThreshold?(r<0?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):S(n,"reset",200)),s.viewport.unbind("touchend MSPointerUp pointerup",R),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},Z=function(e){if(s.initialized)if(s.working)window.setTimeout(Z,10);else{var i=t(window).width(),n=t(window).height();r===i&&a===n||(r=i,a=n,o.redrawSlider(),s.settings.onSliderResize.call(o,s.active.index))}},B=function(t){var e=v();s.settings.ariaHidden&&!s.settings.ticker&&(s.children.attr("aria-hidden","true"),s.children.slice(t,t+e).attr("aria-hidden","false"))},U=function(t){return t<0?s.settings.infiniteLoop?f()-1:s.active.index:t>=f()?s.settings.infiniteLoop?0:s.active.index:t};return o.goToSlide=function(e,i){var n,r,a,l,d=!0,c=0,g={left:0,top:0},u=null;if(s.oldIndex=s.active.index,s.active.index=U(e),!s.working&&s.active.index!==s.oldIndex){if(s.working=!0,d=s.settings.onSlideBefore.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index),"undefined"!=typeof d&&!d)return s.active.index=s.oldIndex,void(s.working=!1);"next"===i?s.settings.onSlideNext.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(d=!1):"prev"===i&&(s.settings.onSlidePrev.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(d=!1)),s.active.last=s.active.index>=f()-1,(s.settings.pager||s.settings.pagerCustom)&&I(s.active.index),s.settings.controls&&D(),"fade"===s.settings.mode?(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),s.children.filter(":visible").fadeOut(s.settings.speed).css({zIndex:0}),s.children.eq(s.active.index).css("zIndex",s.settings.slideZIndex+1).fadeIn(s.settings.speed,function(){t(this).css("zIndex",s.settings.slideZIndex),q()})):(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),!s.settings.infiniteLoop&&s.carousel&&s.active.last?"horizontal"===s.settings.mode?(u=s.children.eq(s.children.length-1),g=u.position(),c=s.viewport.width()-u.outerWidth()):(n=s.children.length-s.settings.minSlides,g=s.children.eq(n).position()):s.carousel&&s.active.last&&"prev"===i?(r=1===s.settings.moveSlides?s.settings.maxSlides-x():(f()-1)*x()-(s.children.length-s.settings.maxSlides),u=o.children(".bx-clone").eq(r),g=u.position()):"next"===i&&0===s.active.index?(g=o.find("> .bx-clone").eq(s.settings.maxSlides).position(),s.active.last=!1):e>=0&&(l=e*parseInt(x()),g=s.children.eq(l).position()),"undefined"!=typeof g?(a="horizontal"===s.settings.mode?-(g.left-c):-g.top,S(a,"slide",s.settings.speed)):s.working=!1),s.settings.ariaHidden&&B(s.active.index*x())}},o.goToNextSlide=function(){if(s.settings.infiniteLoop||!s.active.last){var t=parseInt(s.active.index)+1;o.goToSlide(t,"next")}},o.goToPrevSlide=function(){if(s.settings.infiniteLoop||0!==s.active.index){var t=parseInt(s.active.index)-1;o.goToSlide(t,"prev")}},o.startAuto=function(t){s.interval||(s.interval=setInterval(function(){"next"===s.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},s.settings.pause),s.settings.autoControls&&t!==!0&&A("stop"))},o.stopAuto=function(t){s.interval&&(clearInterval(s.interval),s.interval=null,s.settings.autoControls&&t!==!0&&A("start"))},o.getCurrentSlide=function(){return s.active.index},o.getCurrentSlideElement=function(){return s.children.eq(s.active.index)},o.getSlideElement=function(t){return s.children.eq(t)},o.getSlideCount=function(){return s.children.length},o.isWorking=function(){return s.working},o.redrawSlider=function(){s.children.add(o.find(".bx-clone")).outerWidth(h()),s.viewport.css("height",p()),s.settings.ticker||m(),s.active.last&&(s.active.index=f()-1),s.active.index>=f()&&(s.active.last=!0),s.settings.pager&&!s.settings.pagerCustom&&(b(),I(s.active.index)),s.settings.ariaHidden&&B(s.active.index*x())},o.destroySlider=function(){s.initialized&&(s.initialized=!1,t(".bx-clone",this).remove(),s.children.each(function(){void 0!==t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!==t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),s.controls.el&&s.controls.el.remove(),s.controls.next&&s.controls.next.remove(),s.controls.prev&&s.controls.prev.remove(),s.pagerEl&&s.settings.controls&&!s.settings.pagerCustom&&s.pagerEl.remove(),t(".bx-caption",this).remove(),s.controls.autoEl&&s.controls.autoEl.remove(),clearInterval(s.interval),s.settings.responsive&&t(window).unbind("resize",Z),s.settings.keyboardEnabled&&t(document).unbind("keydown",F),t(this).removeData("bxSlider"))},o.reloadSlider=function(e){void 0!==e&&(n=e),o.destroySlider(),l(),t(o).data("bxSlider",this)},l(),t(o).data("bxSlider",this),this}}}(jQuery);


/*----------------------------
OwlCarousel
-----------------------------*/
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var b,c,e;b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&e<=0&&this.preloadAutoWidthImages(b)}this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var d=-1,e=30,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return"left"===c&&b>h-e&&b<h+e?d=a:"right"===c&&b>h-f-e&&b<h-f+e?d=a+1:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),d===-1},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){for(b=this._items.length,c=this._items[--b].width(),d=this.$element.width();b--&&(c+=this._items[b].width()+this.settings.margin,!(c>d)););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=f*-1*g),a=c+e,d=((a-h)%g+g)%g+h,d!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.$element.is(":visible")&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&a.namespace.indexOf("owl")!==-1?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&e*-1||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};if(b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&rel=0&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},
a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(a,b){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},e.prototype._getNextTimeout=function(d,e){return this._timeout&&b.clearTimeout(this._timeout),b.setTimeout(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),d||this._core.settings.autoplayTimeout)},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearTimeout(this._timeout),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);



/*----------------------------
WOW JS
------------------------------*/
/*! WOW - v1.1.2 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);


/*----------------------------
FitText
-----------------------------*/
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/
(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

/*----------------------------
jQuery++
-----------------------------*/
(function() {

    var event = jQuery.event,

        //helper that finds handlers by type and calls back a function, this is basically handle
        // events - the events object
        // types - an array of event types to look for
        // callback(type, handlerFunc, selector) - a callback
        // selector - an optional selector to filter with, if there, matches by selector
        //     if null, matches anything, otherwise, matches with no selector
        findHelper = function( events, types, callback, selector ) {
            var t, type, typeHandlers, all, h, handle, 
                namespaces, namespace,
                match;
            for ( t = 0; t < types.length; t++ ) {
                type = types[t];
                all = type.indexOf(".") < 0;
                if (!all ) {
                    namespaces = type.split(".");
                    type = namespaces.shift();
                    namespace = new RegExp("(^|\\.)" + namespaces.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)");
                }
                typeHandlers = (events[type] || []).slice(0);

                for ( h = 0; h < typeHandlers.length; h++ ) {
                    handle = typeHandlers[h];
                    
                    match = (all || namespace.test(handle.namespace));
                    
                    if(match){
                        if(selector){
                            if (handle.selector === selector  ) {
                                callback(type, handle.origHandler || handle.handler);
                            }
                        } else if (selector === null){
                            callback(type, handle.origHandler || handle.handler, handle.selector);
                        }
                        else if (!handle.selector ) {
                            callback(type, handle.origHandler || handle.handler);
                            
                        } 
                    }
                    
                    
                }
            }
        };

    /**
     * Finds event handlers of a given type on an element.
     * @param {HTMLElement} el
     * @param {Array} types an array of event names
     * @param {String} [selector] optional selector
     * @return {Array} an array of event handlers
     */
    event.find = function( el, types, selector ) {
        var events = ( $._data(el) || {} ).events,
            handlers = [],
            t, liver, live;

        if (!events ) {
            return handlers;
        }
        findHelper(events, types, function( type, handler ) {
            handlers.push(handler);
        }, selector);
        return handlers;
    };
    /**
     * Finds all events.  Group by selector.
     * @param {HTMLElement} el the element
     * @param {Array} types event types
     */
    event.findBySelector = function( el, types ) {
        var events = $._data(el).events,
            selectors = {},
            //adds a handler for a given selector and event
            add = function( selector, event, handler ) {
                var select = selectors[selector] || (selectors[selector] = {}),
                    events = select[event] || (select[event] = []);
                events.push(handler);
            };

        if (!events ) {
            return selectors;
        }
        //first check live:
        /*$.each(events.live || [], function( i, live ) {
            if ( $.inArray(live.origType, types) !== -1 ) {
                add(live.selector, live.origType, live.origHandler || live.handler);
            }
        });*/
        //then check straight binds
        findHelper(events, types, function( type, handler, selector ) {
            add(selector || "", type, handler);
        }, null);

        return selectors;
    };
    event.supportTouch = "ontouchend" in document;
    
    $.fn.respondsTo = function( events ) {
        if (!this.length ) {
            return false;
        } else {
            //add default ?
            return event.find(this[0], $.isArray(events) ? events : [events]).length > 0;
        }
    };
    $.fn.triggerHandled = function( event, data ) {
        event = (typeof event == "string" ? $.Event(event) : event);
        this.trigger(event, data);
        return event.handled;
    };
    /**
     * Only attaches one event handler for all types ...
     * @param {Array} types llist of types that will delegate here
     * @param {Object} startingEvent the first event to start listening to
     * @param {Object} onFirst a function to call 
     */
    event.setupHelper = function( types, startingEvent, onFirst ) {
        if (!onFirst ) {
            onFirst = startingEvent;
            startingEvent = null;
        }
        var add = function( handleObj ) {

            var bySelector, selector = handleObj.selector || "";
            if ( selector ) {
                bySelector = event.find(this, types, selector);
                if (!bySelector.length ) {
                    $(this).delegate(selector, startingEvent, onFirst);
                }
            }
            else {
                //var bySelector = event.find(this, types, selector);
                if (!event.find(this, types, selector).length ) {
                    event.add(this, startingEvent, onFirst, {
                        selector: selector,
                        delegate: this
                    });
                }

            }

        },
            remove = function( handleObj ) {
                var bySelector, selector = handleObj.selector || "";
                if ( selector ) {
                    bySelector = event.find(this, types, selector);
                    if (!bySelector.length ) {
                        $(this).undelegate(selector, startingEvent, onFirst);
                    }
                }
                else {
                    if (!event.find(this, types, selector).length ) {
                        event.remove(this, startingEvent, onFirst, {
                            selector: selector,
                            delegate: this
                        });
                    }
                }
            };
        $.each(types, function() {
            event.special[this] = {
                add: add,
                remove: remove,
                setup: function() {},
                teardown: function() {}
            };
        });
    };
})(jQuery);
(function($){
var isPhantom = /Phantom/.test(navigator.userAgent),
    supportTouch = !isPhantom && "ontouchend" in document,
    scrollEvent = "touchmove scroll",
    // Use touch events or map it to mouse events
    touchStartEvent = supportTouch ? "touchstart" : "mousedown",
    touchStopEvent = supportTouch ? "touchend" : "mouseup",
    touchMoveEvent = supportTouch ? "touchmove" : "mousemove",
    data = function(event){
        var d = event.originalEvent.touches ?
            event.originalEvent.touches[ 0 ] :
            event;
        return {
            time: (new Date).getTime(),
            coords: [ d.pageX, d.pageY ],
            origin: $( event.target )
        };
    };

/**
 * @add jQuery.event.swipe
 */
var swipe = $.event.swipe = {
    /**
     * @attribute delay
     * Delay is the upper limit of time the swipe motion can take in milliseconds.  This defaults to 500.
     * 
     * A user must perform the swipe motion in this much time.
     */
    delay : 500,
    /**
     * @attribute max
     * The maximum distance the pointer must travel in pixels.  The default is 75 pixels.
     */
    max : 75,
    /**
     * @attribute min
     * The minimum distance the pointer must travel in pixels.  The default is 30 pixels.
     */
    min : 30
};

$.event.setupHelper( [

/**
 * @hide
 * @attribute swipe
 */
"swipe",
/**
 * @hide
 * @attribute swipeleft
 */
'swipeleft',
/**
 * @hide
 * @attribute swiperight
 */
'swiperight',
/**
 * @hide
 * @attribute swipeup
 */
'swipeup',
/**
 * @hide
 * @attribute swipedown
 */
'swipedown'], touchStartEvent, function(ev){
    var
        // update with data when the event was started
        start = data(ev),
        stop,
        delegate = ev.delegateTarget || ev.currentTarget,
        selector = ev.handleObj.selector,
        entered = this;
    
    function moveHandler(event){
        if ( !start ) {
            return;
        }
        // update stop with the data from the current event
        stop = data(event);

        // prevent scrolling
        if ( Math.abs( start.coords[0] - stop.coords[0] ) > 10 ) {
            event.preventDefault();
        }
    };

    // Attach to the touch move events
    $(document.documentElement).bind(touchMoveEvent, moveHandler)
        .one(touchStopEvent, function(event){
            $(this).unbind( touchMoveEvent, moveHandler);
            // if start and stop contain data figure out if we have a swipe event
            if ( start && stop ) {
                // calculate the distance between start and stop data
                var deltaX = Math.abs(start.coords[0] - stop.coords[0]),
                    deltaY = Math.abs(start.coords[1] - stop.coords[1]),
                    distance = Math.sqrt(deltaX*deltaX+deltaY*deltaY);

                // check if the delay and distance are matched
                if ( stop.time - start.time < swipe.delay && distance >= swipe.min ) {
                    var events = ['swipe'];
                    // check if we moved horizontally
                    if( deltaX >= swipe.min && deltaY < swipe.min) {
                        // based on the x coordinate check if we moved left or right
                        events.push( start.coords[0] > stop.coords[0] ? "swipeleft" : "swiperight" );
                    } else
                    // check if we moved vertically
                    if(deltaY >= swipe.min && deltaX < swipe.min){
                        // based on the y coordinate check if we moved up or down
                        events.push( start.coords[1] < stop.coords[1] ? "swipedown" : "swipeup" );
                    }

                    // trigger swipe events on this guy
                    $.each($.event.find(delegate, events, selector), function(){
                        this.call(entered, ev, {start : start, end: stop})
                    })
                
                }
            }
            // reset start and stop
            start = stop = undefined;
        })
});

})(jQuery)


/*----------------------------
BookBlock by Codrops
-----------------------------*/

/**
 * jquery.bookblock.js v2.0.1
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;( function( $, window, undefined ) {

    'use strict';

    // global
    var $window = $(window),
        Modernizr = window.Modernizr;

    // https://gist.github.com/edankwan/4389601
    Modernizr.addTest('csstransformspreserve3d', function () {
        var prop = Modernizr.prefixed('transformStyle');
        var val = 'preserve-3d';
        var computedStyle;
        if(!prop) return false;

        prop = prop.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

        Modernizr.testStyles('#modernizr{' + prop + ':' + val + ';}', function (el, rule) {
            computedStyle = window.getComputedStyle ? getComputedStyle(el, null).getPropertyValue(prop) : '';
        });

        return (computedStyle === val);
    });

    /*
    * debouncedresize: special jQuery event that happens once after a window resize
    *
    * latest version and complete README available on Github:
    * https://github.com/louisremi/jquery-smartresize
    *
    * Copyright 2012 @louis_remi
    * Licensed under the MIT license.
    *
    * This saved you an hour of work? 
    * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
    */
    var $event = $.event,
    $special,
    resizeTimeout;

    $special = $event.special.debouncedresize = {
        setup: function() {
            $( this ).on( "resize", $special.handler );
        },
        teardown: function() {
            $( this ).off( "resize", $special.handler );
        },
        handler: function( event, execAsap ) {
            // Save the context
            var context = this,
                args = arguments,
                dispatch = function() {
                    // set correct event type
                    event.type = "debouncedresize";
                    $event.dispatch.apply( context, args );
                };

            if ( resizeTimeout ) {
                clearTimeout( resizeTimeout );
            }

            execAsap ?
                dispatch() :
                resizeTimeout = setTimeout( dispatch, $special.threshold );
        },
        threshold: 150
    };

    $.BookBlock = function( options, element ) {
        this.$el = $( element );
        this._init( options );
    };

    // the options
    $.BookBlock.defaults = {
        // vertical or horizontal flip
        orientation : 'vertical',
        // ltr (left to right) or rtl (right to left)
        direction : 'ltr',
        // speed for the flip transition in ms
        speed : 1000,
        // easing for the flip transition
        easing : 'ease-in-out',
        // if set to true, both the flipping page and the sides will have an overlay to simulate shadows
        shadows : true,
        // opacity value for the "shadow" on both sides (when the flipping page is over it)
        // value : 0.1 - 1
        shadowSides : 0.2,
        // opacity value for the "shadow" on the flipping page (while it is flipping)
        // value : 0.1 - 1
        shadowFlip : 0.1,
        // if we should show the first item after reaching the end
        circular : false,
        // if we want to specify a selector that triggers the next() function. example: ´#bb-nav-next´
        nextEl : '',
        // if we want to specify a selector that triggers the prev() function
        prevEl : '',
        // autoplay. If true it overwrites the circular option to true
        autoplay : false,
        // time (ms) between page switch, if autoplay is true
        interval : 3000,
        // callback after the flip transition
        // old is the index of the previous item
        // page is the current item´s index
        // isLimit is true if the current page is the last one (or the first one)
        onEndFlip : function(old, page, isLimit) { return false; },
        // callback before the flip transition
        // page is the current item´s index
        onBeforeFlip : function(page) { return false; }
    };

    $.BookBlock.prototype = {
        _init : function(options) {
            // options
            this.options = $.extend( true, {}, $.BookBlock.defaults, options );
            // orientation class
            this.$el.addClass( 'bb-' + this.options.orientation );
            // items
            this.$items = this.$el.children( '.bb-item' ).hide();
            // total items
            this.itemsCount = this.$items.length;
            // current item´s index
            this.current = 0;
            // previous item´s index
            this.previous = -1;
            // show first item
            this.$current = this.$items.eq( this.current ).show();
            // get width of this.$el
            // this will be necessary to create the flipping layout
            this.elWidth = this.$el.width();
            var transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            };
            this.transEndEventName = transEndEventNames[Modernizr.prefixed( 'transition' )] + '.bookblock';
            // support css 3d transforms && css transitions && Modernizr.csstransformspreserve3d
            this.support = Modernizr.csstransitions && Modernizr.csstransforms3d && Modernizr.csstransformspreserve3d;
            // initialize/bind some events
            this._initEvents();
            // start slideshow
            if ( this.options.autoplay ) {
                this.options.circular = true;
                this._startSlideshow();
            }
        },
        _initEvents : function() {

            var self = this;

            if ( this.options.nextEl !== '' ) {
                $( this.options.nextEl ).on( 'click.bookblock touchstart.bookblock', function() { self._action( 'next' ); return false; } );
            }

            if ( this.options.prevEl !== '' ) {
                $( this.options.prevEl ).on( 'click.bookblock touchstart.bookblock', function() { self._action( 'prev' ); return false; } );
            }

            $window.on( 'debouncedresize', function() {     
                // update width value
                self.elWidth = self.$el.width();
            } );

        },
        _action : function( dir, page ) {
            this._stopSlideshow();
            this._navigate( dir, page );
        },
        _navigate : function( dir, page ) {

            if ( this.isAnimating ) {
                return false;
            }

            // callback trigger
            this.options.onBeforeFlip( this.current );

            this.isAnimating = true;
            // update current value
            this.$current = this.$items.eq( this.current );

            if ( page !== undefined ) {
                this.current = page;
            }
            else if ( dir === 'next' && this.options.direction === 'ltr' || dir === 'prev' && this.options.direction === 'rtl' ) {
                if ( !this.options.circular && this.current === this.itemsCount - 1 ) {
                    this.end = true;
                }
                else {
                    this.previous = this.current;
                    this.current = this.current < this.itemsCount - 1 ? this.current + 1 : 0;
                }
            }
            else if ( dir === 'prev' && this.options.direction === 'ltr' || dir === 'next' && this.options.direction === 'rtl' ) {
                if ( !this.options.circular && this.current === 0 ) {
                    this.end = true;
                }
                else {
                    this.previous = this.current;
                    this.current = this.current > 0 ? this.current - 1 : this.itemsCount - 1;
                }
            }

            this.$nextItem = !this.options.circular && this.end ? this.$current : this.$items.eq( this.current );
            
            if ( !this.support ) {
                this._layoutNoSupport( dir );
            } else {
                this._layout( dir );
            }

        },
        _layoutNoSupport : function(dir) {
            this.$items.hide();
            this.$nextItem.show();
            this.end = false;
            this.isAnimating = false;
            var isLimit = dir === 'next' && this.current === this.itemsCount - 1 || dir === 'prev' && this.current === 0;
            // callback trigger
            this.options.onEndFlip( this.previous, this.current, isLimit );
        },
        // creates the necessary layout for the 3d structure
        _layout : function(dir) {

            var self = this,
                // basic structure: 1 element for the left side.
                $s_left = this._addSide( 'left', dir ),
                // 1 element for the flipping/middle page
                $s_middle = this._addSide( 'middle', dir ),
                // 1 element for the right side
                $s_right = this._addSide( 'right', dir ),
                // overlays
                $o_left = $s_left.find( 'div.bb-overlay' ),
                $o_middle_f = $s_middle.find( 'div.bb-flipoverlay:first' ),
                $o_middle_b = $s_middle.find( 'div.bb-flipoverlay:last' ),
                $o_right = $s_right.find( 'div.bb-overlay' ),
                speed = this.end ? 400 : this.options.speed;

            this.$items.hide();
            this.$el.prepend( $s_left, $s_middle, $s_right );
            
            $s_middle.css({
                transitionDuration: speed + 'ms',
                transitionTimingFunction : this.options.easing
            }).on( this.transEndEventName, function( event ) {
                if ( $( event.target ).hasClass( 'bb-page' ) ) {
                    self.$el.children( '.bb-page' ).remove();
                    self.$nextItem.show();
                    self.end = false;
                    self.isAnimating = false;
                    var isLimit = dir === 'next' && self.current === self.itemsCount - 1 || dir === 'prev' && self.current === 0;
                    // callback trigger
                    self.options.onEndFlip( self.previous, self.current, isLimit );
                }
            });

            if ( dir === 'prev' ) {
                $s_middle.addClass( 'bb-flip-initial' );
            }

            // overlays
            if (this.options.shadows && !this.end) {

                var o_left_style = (dir === 'next') ? {
                        transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear' + ' ' + this.options.speed / 2 + 'ms'
                    } : {
                        transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear',
                        opacity: this.options.shadowSides
                    },
                    o_middle_f_style = (dir === 'next') ? {
                        transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear'
                    } : {
                        transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear' + ' ' + this.options.speed / 2 + 'ms',
                        opacity: this.options.shadowFlip
                    },
                    o_middle_b_style = (dir === 'next') ? {
                        transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear' + ' ' + this.options.speed / 2 + 'ms',
                        opacity: this.options.shadowFlip
                    } : {
                        transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear'
                    },
                    o_right_style = (dir === 'next') ? {
                        transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear',
                        opacity: this.options.shadowSides
                    } : {
                        transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear' + ' ' + this.options.speed / 2 + 'ms'
                    };

                $o_middle_f.css(o_middle_f_style);
                $o_middle_b.css(o_middle_b_style);
                $o_left.css(o_left_style);
                $o_right.css(o_right_style);

            }

            setTimeout( function() {
                // first && last pages lift slightly up when we can't go further
                $s_middle.addClass( self.end ? 'bb-flip-' + dir + '-end' : 'bb-flip-' + dir );

                // overlays
                if ( self.options.shadows && !self.end ) {

                    $o_middle_f.css({
                        opacity: dir === 'next' ? self.options.shadowFlip : 0
                    });

                    $o_middle_b.css({
                        opacity: dir === 'next' ? 0 : self.options.shadowFlip
                    });

                    $o_left.css({
                        opacity: dir === 'next' ? self.options.shadowSides : 0
                    });

                    $o_right.css({
                        opacity: dir === 'next' ? 0 : self.options.shadowSides
                    });

                }
            }, 25 );
        },
        // adds the necessary sides (bb-page) to the layout 
        _addSide : function( side, dir ) {
            var $side;

            switch (side) {
                case 'left':
                        /*
                        <div class="bb-page" style="z-index:102;">
                            <div class="bb-back">
                                <div class="bb-outer">
                                    <div class="bb-content">
                                        <div class="bb-inner">
                                            dir==='next' ? [content of current page] : [content of next page]
                                        </div>
                                    </div>
                                    <div class="bb-overlay"></div>
                                </div>
                            </div>
                        </div>
                        */
                    $side = $('<div class="bb-page"><div class="bb-back"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">' + ( dir === 'next' ? this.$current.html() : this.$nextItem.html() ) + '</div></div><div class="bb-overlay"></div></div></div></div>').css( 'z-index', 102 );
                    break;
                case 'middle':
                        /*
                        <div class="bb-page" style="z-index:103;">
                            <div class="bb-front">
                                <div class="bb-outer">
                                    <div class="bb-content">
                                        <div class="bb-inner">
                                            dir==='next' ? [content of current page] : [content of next page]
                                        </div>
                                    </div>
                                    <div class="bb-flipoverlay"></div>
                                </div>
                            </div>
                            <div class="bb-back">
                                <div class="bb-outer">
                                    <div class="bb-content">
                                        <div class="bb-inner">
                                            dir==='next' ? [content of next page] : [content of current page]
                                        </div>
                                    </div>
                                    <div class="bb-flipoverlay"></div>
                                </div>
                            </div>
                        </div>
                        */
                    $side = $('<div class="bb-page"><div class="bb-front"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">' + (dir === 'next' ? this.$current.html() : this.$nextItem.html()) + '</div></div><div class="bb-flipoverlay"></div></div></div><div class="bb-back"><div class="bb-outer"><div class="bb-content" style="width:' + this.elWidth + 'px"><div class="bb-inner">' + ( dir === 'next' ? this.$nextItem.html() : this.$current.html() ) + '</div></div><div class="bb-flipoverlay"></div></div></div></div>').css( 'z-index', 103 );
                    break;
                case 'right':
                        /*
                        <div class="bb-page" style="z-index:101;">
                            <div class="bb-front">
                                <div class="bb-outer">
                                    <div class="bb-content">
                                        <div class="bb-inner">
                                            dir==='next' ? [content of next page] : [content of current page]
                                        </div>
                                    </div>
                                    <div class="bb-overlay"></div>
                                </div>
                            </div>
                        </div>
                        */
                    $side = $('<div class="bb-page"><div class="bb-front"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">' + ( dir === 'next' ? this.$nextItem.html() : this.$current.html() ) + '</div></div><div class="bb-overlay"></div></div></div></div>').css( 'z-index', 101 );
                    break;
            }

            return $side;
        },
        _startSlideshow : function() {
            var self = this;
            this.slideshow = setTimeout( function() {
                self._navigate( 'next' );
                if ( self.options.autoplay ) {
                    self._startSlideshow();
                }
            }, this.options.interval );
        },
        _stopSlideshow : function() {
            if ( this.options.autoplay ) {
                clearTimeout( this.slideshow );
                this.options.autoplay = false;
            }
        },
        // public method: flips next
        next : function() {
            this._action( this.options.direction === 'ltr' ? 'next' : 'prev' );
        },
        // public method: flips back
        prev : function() {
            this._action( this.options.direction === 'ltr' ? 'prev' : 'next' );
        },
        // public method: goes to a specific page
        jump : function( page ) {

            page -= 1;

            if ( page === this.current || page >= this.itemsCount || page < 0 ) {
                return false;
            }

            var dir;
            if( this.options.direction === 'ltr' ) {
                dir = page > this.current ? 'next' : 'prev';
            }
            else {
                dir = page > this.current ? 'prev' : 'next';
            }
            this._action( dir, page );

        },
        // public method: goes to the last page
        last : function() {
            this.jump( this.itemsCount );
        },
        // public method: goes to the first page
        first : function() {
            this.jump( 1 );
        },
        // public method: check if isAnimating is true
        isActive: function() {
            return this.isAnimating;
        },
        // public method: dynamically adds new elements
        // call this method after inserting new "bb-item" elements inside the BookBlock
        update : function () {
            var $currentItem = this.$items.eq( this.current );
            this.$items = this.$el.children( '.bb-item' );
            this.itemsCount = this.$items.length;
            this.current = $currentItem.index();
        },
        destroy : function() {
            if ( this.options.autoplay ) {
                this._stopSlideshow();
            }
            this.$el.removeClass( 'bb-' + this.options.orientation );
            this.$items.show();

            if ( this.options.nextEl !== '' ) {
                $( this.options.nextEl ).off( '.bookblock' );
            }

            if ( this.options.prevEl !== '' ) {
                $( this.options.prevEl ).off( '.bookblock' );
            }

            $window.off( 'debouncedresize' );
        }
    }

    var logError = function( message ) {
        if ( window.console ) {
            window.console.error( message );
        }
    };

    $.fn.bookblock = function( options ) {
        if ( typeof options === 'string' ) {
            var args = Array.prototype.slice.call( arguments, 1 );
            this.each(function() {
                var instance = $.data( this, 'bookblock' );
                if ( !instance ) {
                    logError( "cannot call methods on bookblock prior to initialization; " +
                    "attempted to call method '" + options + "'" );
                    return;
                }
                if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
                    logError( "no such method '" + options + "' for bookblock instance" );
                    return;
                }
                instance[ options ].apply( instance, args );
            });
        } 
        else {
            this.each(function() {  
                var instance = $.data( this, 'bookblock' );
                if ( instance ) {
                    instance._init();
                }
                else {
                    instance = $.data( this, 'bookblock', new $.BookBlock( options, this ) );
                }
            });
        }
        return this;
    };

} )( jQuery, window );








/*----------------------------
jQuery Waterwheel
-----------------------------*/

/*!
 * Waterwheel Carousel
 * Version 2.3.0
 * http://www.bkosborne.com
 *
 * Copyright 2011-2013 Brian Osborne
 * Dual licensed under GPLv3 or MIT
 * Copies of the licenses have been distributed
 * with this plugin.
 *
 * Plugin written by Brian Osborne
 * for use with the jQuery JavaScript Framework
 * http://www.jquery.com
 */
(function(a){a.fn.waterwheelCarousel=function(r){if(this.length>1){this.each(function(){a(this).waterwheelCarousel(r)});return this}var m=this;var c={};var t={};function j(){t={itemsContainer:a(m),totalItems:a(m).find("img").length,containerWidth:a(m).width(),containerHeight:a(m).height(),currentCenterItem:null,previousCenterItem:null,items:[],calculations:[],carouselRotationsLeft:0,currentlyMoving:false,itemsAnimating:0,currentSpeed:c.speed,intervalTimer:null,currentDirection:"forward",leftItemsCount:0,rightItemsCount:0,performingSetup:true};t.itemsContainer.find("img").removeClass(c.activeClassName)}function l(u){clearTimeout(t.autoPlayTimer);if(!u&&c.autoPlay!==0){t.autoPlayTimer=setTimeout(function(){if(c.autoPlay>0){n("forward")}else{n("backward")}},Math.abs(c.autoPlay))}}function h(x){if(c.preloadImages===false){x();return}var v=t.itemsContainer.find("img"),u=0,w=v.length;v.each(function(){a(this).bind("load",function(){u+=1;if(u===w){x();return}});a(this).attr("src",a(this).attr("src"));if(this.complete){a(this).trigger("load")}})}function d(){t.itemsContainer.find("img").each(function(){if(a(this).data("original_width")==undefined||c.forcedImageWidth>0){a(this).data("original_width",a(this).width())}if(a(this).data("original_height")==undefined||c.forcedImageHeight>0){a(this).data("original_height",a(this).height())}})}function e(){if(c.forcedImageWidth&&c.forcedImageHeight){t.itemsContainer.find("img").each(function(){a(this).width(c.forcedImageWidth);a(this).height(c.forcedImageHeight)})}}function s(){var v=t.itemsContainer.find("img:first");t.calculations[0]={distance:0,offset:0,opacity:1};var u=c.horizonOffset;var x=c.separation;for(var w=1;w<=c.flankingItems+2;w++){if(w>1){u*=c.horizonOffsetMultiplier;x*=c.separationMultiplier}t.calculations[w]={distance:t.calculations[w-1].distance+x,offset:t.calculations[w-1].offset+u,opacity:t.calculations[w-1].opacity*c.opacityMultiplier}}if(c.edgeFadeEnabled){t.calculations[c.flankingItems+1].opacity=0}else{t.calculations[c.flankingItems+1]={distance:0,offset:0,opacity:0}}}function b(){t.items=t.itemsContainer.find("img");for(var u=0;u<t.totalItems;u++){t.items[u]=a(t.items[u])}if(c.horizon===0){if(c.orientation==="horizontal"){c.horizon=t.containerHeight/2}else{c.horizon=t.containerWidth/2}}t.itemsContainer.css("position","relative").find("img").each(function(){var w,v;if(c.orientation==="horizontal"){w=(t.containerWidth/2)-(a(this).data("original_width")/2);v=c.horizon-(a(this).data("original_height")/2)}else{w=c.horizon-(a(this).data("original_width")/2);v=(t.containerHeight/2)-(a(this).data("original_height")/2)}a(this).css({left:w,top:v,visibility:"visible",position:"absolute","z-index":0,opacity:0}).data({top:v,left:w,oldPosition:0,currentPosition:0,depth:0,opacity:0}).show()})}function q(){c.startingItem=(c.startingItem===0)?Math.round(t.totalItems/2):c.startingItem;t.rightItemsCount=Math.ceil((t.totalItems-1)/2);t.leftItemsCount=Math.floor((t.totalItems-1)/2);t.carouselRotationsLeft=1;k(t.items[c.startingItem-1],0);t.items[c.startingItem-1].css("opacity",1);var u=c.startingItem-1;for(var v=1;v<=t.rightItemsCount;v++){(u<t.totalItems-1)?u+=1:u=0;t.items[u].css("opacity",1);k(t.items[u],v)}var u=c.startingItem-1;for(var v=-1;v>=t.leftItemsCount*-1;v--){(u>0)?u-=1:u=t.totalItems-1;t.items[u].css("opacity",1);k(t.items[u],v)}}function f(I,y){var z=Math.abs(y);if(z<c.flankingItems+1){var x=t.calculations[z]}else{var x=t.calculations[c.flankingItems+1]}var A=Math.pow(c.sizeMultiplier,z);var C=A*I.data("original_width");var w=A*I.data("original_height");var v=Math.abs(I.width()-C);var B=Math.abs(I.height()-w);var D=x.offset;var J=x.distance;if(y<0){J*=-1}if(c.orientation=="horizontal"){var u=t.containerWidth/2;var H=u+J-(C/2);var F=c.horizon-D-(w/2)}else{var u=t.containerHeight/2;var H=c.horizon-D-(C/2);var F=u+J-(w/2)}var E;if(y===0){E=1}else{E=x.opacity}var G=c.flankingItems+2-z;I.data("width",C);I.data("height",w);I.data("top",F);I.data("left",H);I.data("oldPosition",I.data("currentPosition"));I.data("depth",G);I.data("opacity",E)}function k(u,v){if(Math.abs(v)<=c.flankingItems+1){f(u,v);t.itemsAnimating++;u.css("z-index",u.data().depth).animate({left:u.data().left,width:u.data().width,height:u.data().height,top:u.data().top,opacity:u.data().opacity},t.currentSpeed,c.animationEasing,function(){g(u,v)})}else{u.data("currentPosition",v);if(u.data("oldPosition")===0){u.css({left:u.data().left,width:u.data().width,height:u.data().height,top:u.data().top,opacity:u.data().opacity,"z-index":u.data().depth})}}}function g(u,v){t.itemsAnimating--;u.data("currentPosition",v);if(v===0){t.currentCenterItem=u}if(t.itemsAnimating===0){t.carouselRotationsLeft-=1;t.currentlyMoving=false;if(t.carouselRotationsLeft>0){p(0)}else{t.currentSpeed=c.speed;t.currentCenterItem.addClass(c.activeClassName);if(t.performingSetup===false){c.movedToCenter(t.currentCenterItem);c.movedFromCenter(t.previousCenterItem)}t.performingSetup=false;l()}}}function p(v){if(t.currentlyMoving===false){t.currentCenterItem.removeClass(c.activeClassName);t.currentlyMoving=true;t.itemsAnimating=0;t.carouselRotationsLeft+=v;if(c.quickerForFurther===true){if(v>1){t.currentSpeed=c.speed/v}t.currentSpeed=(t.currentSpeed<100)?100:t.currentSpeed}for(var y=0;y<t.totalItems;y++){var w=a(t.items[y]);var z=w.data("currentPosition");var x;if(t.currentDirection=="forward"){x=z-1}else{x=z+1}var u=(x>0)?t.rightItemsCount:t.leftItemsCount;if(Math.abs(x)>u){x=z*-1;if(t.totalItems%2==0){x+=1}}k(w,x)}}}a(this).find("img").bind("click",function(){var v=a(this).data().currentPosition;if(c.imageNav==false){return}if(Math.abs(v)>=c.flankingItems+1){return}if(t.currentlyMoving){return}t.previousCenterItem=t.currentCenterItem;l(true);c.autoPlay=0;var u=Math.abs(v);if(v==0){c.clickedCenter(a(this))}else{c.movingFromCenter(t.currentCenterItem);c.movingToCenter(a(this));if(v<0){t.currentDirection="backward";p(u)}else{if(v>0){t.currentDirection="forward";p(u)}}}});a(this).find("a").bind("click",function(u){var v=a(this).find("img").data("currentPosition")==0;if(c.linkHandling===1||(c.linkHandling===2&&!v)){u.preventDefault();return false}});function o(){var u=t.currentCenterItem.next();if(u.length<=0){u=t.currentCenterItem.parent().children().first()}return u}function i(){var u=t.currentCenterItem.prev();if(u.length<=0){u=t.currentCenterItem.parent().children().last()}return u}function n(u){if(t.currentlyMoving===false){t.previousCenterItem=t.currentCenterItem;c.movingFromCenter(t.currentCenterItem);if(u=="backward"){c.movingToCenter(i());t.currentDirection="backward"}else{if(u=="forward"){c.movingToCenter(o());t.currentDirection="forward"}}}p(1)}a(document).keydown(function(u){if(c.keyboardNav){if((u.which===37&&c.orientation=="horizontal")||(u.which===38&&c.orientation=="vertical")){l(true);c.autoPlay=0;n("backward")}else{if((u.which===39&&c.orientation=="horizontal")||(u.which===40&&c.orientation=="vertical")){l(true);c.autoPlay=0;n("forward")}}if(c.keyboardNavOverride&&((c.orientation=="horizontal"&&(u.which===37||u.which===39))||(c.orientation=="vertical"&&(u.which===38||u.which===40)))){u.preventDefault();return false}}});this.reload=function(v){if(typeof v==="object"){var u=v}else{var u={}}c=a.extend({},a.fn.waterwheelCarousel.defaults,v);j();t.itemsContainer.find("img").hide();e();h(function(){d();s();b();q()})};this.next=function(){l(true);c.autoPlay=0;n("forward")};this.prev=function(){l(true);c.autoPlay=0;n("backward")};this.reload(r);return this};a.fn.waterwheelCarousel.defaults={startingItem:1,separation:175,separationMultiplier:0.6,horizonOffset:0,horizonOffsetMultiplier:1,sizeMultiplier:0.7,opacityMultiplier:0.8,horizon:0,flankingItems:3,speed:300,animationEasing:"linear",quickerForFurther:true,edgeFadeEnabled:false,linkHandling:2,autoPlay:0,orientation:"horizontal",activeClassName:"carousel-center",keyboardNav:false,keyboardNavOverride:true,imageNav:true,preloadImages:true,forcedImageWidth:0,forcedImageHeight:0,movingToCenter:a.noop,movedToCenter:a.noop,clickedCenter:a.noop,movingFromCenter:a.noop,movedFromCenter:a.noop}})(jQuery);



/*
* FuseJS
*/

/*!
 * Fuse.js v3.2.0 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Fuse",[],t):"object"==typeof exports?exports.Fuse=t():e.Fuse=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,r){"use strict";e.exports=function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(5),a=r(7),s=r(4),c=function(){function e(t,r){var o=r.location,i=void 0===o?0:o,a=r.distance,c=void 0===a?100:a,h=r.threshold,l=void 0===h?.6:h,u=r.maxPatternLength,f=void 0===u?32:u,d=r.isCaseSensitive,v=void 0!==d&&d,p=r.tokenSeparator,g=void 0===p?/ +/g:p,y=r.findAllMatches,m=void 0!==y&&y,k=r.minMatchCharLength,x=void 0===k?1:k;n(this,e),this.options={location:i,distance:c,threshold:l,maxPatternLength:f,isCaseSensitive:v,tokenSeparator:g,findAllMatches:m,minMatchCharLength:x},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=f&&(this.patternAlphabet=s(this.pattern))}return o(e,[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,r=t.maxPatternLength,n=t.tokenSeparator;if(this.pattern.length>r)return i(e,this.pattern,n);var o=this.options,s=o.location,c=o.distance,h=o.threshold,l=o.findAllMatches,u=o.minMatchCharLength;return a(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:h,findAllMatches:l,minMatchCharLength:u})}}]),e}();e.exports=c},function(e,t,r){"use strict";var n=r(0),o=function e(t,r,o){if(r){var i=r.indexOf("."),a=r,s=null;-1!==i&&(a=r.slice(0,i),s=r.slice(i+1));var c=t[a];if(null!==c&&void 0!==c)if(s||"string"!=typeof c&&"number"!=typeof c)if(n(c))for(var h=0,l=c.length;h<l;h+=1)e(c[h],s,o);else s&&e(c,s,o);else o.push(c.toString())}else o.push(t);return o};e.exports=function(e,t){return o(e,t,[])}},function(e,t,r){"use strict";e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=[],n=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===n?n=i:s||-1===n||(o=i-1,o-n+1>=t&&r.push([n,o]),n=-1)}return e[i-1]&&i-n>=t&&r.push([n,i-1]),r}},function(e,t,r){"use strict";e.exports=function(e){for(var t={},r=e.length,n=0;n<r;n+=1)t[e.charAt(n)]=0;for(var o=0;o<r;o+=1)t[e.charAt(o)]|=1<<r-o-1;return t}},function(e,t,r){"use strict";e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,n=new RegExp(t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&").replace(r,"|")),o=e.match(n),i=!!o,a=[];if(i)for(var s=0,c=o.length;s<c;s+=1){var h=o[s];a.push([e.indexOf(h),h.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:a}}},function(e,t,r){"use strict";e.exports=function(e,t){var r=t.errors,n=void 0===r?0:r,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?100:c,l=n/e.length,u=Math.abs(s-i);return h?l+u/h:u?1:l}},function(e,t,r){"use strict";var n=r(6),o=r(3);e.exports=function(e,t,r,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,h=void 0===c?100:c,l=i.threshold,u=void 0===l?.6:l,f=i.findAllMatches,d=void 0!==f&&f,v=i.minMatchCharLength,p=void 0===v?1:v,g=s,y=e.length,m=u,k=e.indexOf(t,g),x=t.length,S=[],M=0;M<y;M+=1)S[M]=0;if(-1!==k){var b=n(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});if(m=Math.min(b,m),-1!==(k=e.lastIndexOf(t,g+x))){var _=n(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});m=Math.min(_,m)}}k=-1;for(var L=[],w=1,C=x+y,A=1<<x-1,I=0;I<x;I+=1){for(var O=0,F=C;O<F;){n(t,{errors:I,currentLocation:g+F,expectedLocation:g,distance:h})<=m?O=F:C=F,F=Math.floor((C-O)/2+O)}C=F;var P=Math.max(1,g-F+1),j=d?y:Math.min(g+F,y)+x,z=Array(j+2);z[j+1]=(1<<I)-1;for(var T=j;T>=P;T-=1){var E=T-1,K=r[e.charAt(E)];if(K&&(S[E]=1),z[T]=(z[T+1]<<1|1)&K,0!==I&&(z[T]|=(L[T+1]|L[T])<<1|1|L[T+1]),z[T]&A&&(w=n(t,{errors:I,currentLocation:E,expectedLocation:g,distance:h}))<=m){if(m=w,(k=E)<=g)break;P=Math.max(1,2*g-k)}}if(n(t,{errors:I+1,currentLocation:g,expectedLocation:g,distance:h})>m)break;L=z}return{isMatch:k>=0,score:0===w?.001:w,matchedIndices:o(S,p)}}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),a=r(2),s=r(0),c=function(){function e(t,r){var o=r.location,i=void 0===o?0:o,s=r.distance,c=void 0===s?100:s,h=r.threshold,l=void 0===h?.6:h,u=r.maxPatternLength,f=void 0===u?32:u,d=r.caseSensitive,v=void 0!==d&&d,p=r.tokenSeparator,g=void 0===p?/ +/g:p,y=r.findAllMatches,m=void 0!==y&&y,k=r.minMatchCharLength,x=void 0===k?1:k,S=r.id,M=void 0===S?null:S,b=r.keys,_=void 0===b?[]:b,L=r.shouldSort,w=void 0===L||L,C=r.getFn,A=void 0===C?a:C,I=r.sortFn,O=void 0===I?function(e,t){return e.score-t.score}:I,F=r.tokenize,P=void 0!==F&&F,j=r.matchAllTokens,z=void 0!==j&&j,T=r.includeMatches,E=void 0!==T&&T,K=r.includeScore,$=void 0!==K&&K,J=r.verbose,N=void 0!==J&&J;n(this,e),this.options={location:i,distance:c,threshold:l,maxPatternLength:f,isCaseSensitive:v,tokenSeparator:g,findAllMatches:m,minMatchCharLength:x,id:M,keys:_,includeMatches:E,includeScore:$,shouldSort:w,getFn:A,sortFn:O,verbose:N,tokenize:P,matchAllTokens:z},this.setCollection(t)}return o(e,[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){this._log('---------\nSearch pattern: "'+e+'"');var t=this._prepareSearchers(e),r=t.tokenSearchers,n=t.fullSearcher,o=this._search(r,n),i=o.weights,a=o.results;return this._computeScore(i,a),this.options.shouldSort&&this._sort(a),this._format(a)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var r=e.split(this.options.tokenSeparator),n=0,o=r.length;n<o;n+=1)t.push(new i(r[n],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],r=this.list,n={},o=[];if("string"==typeof r[0]){for(var i=0,a=r.length;i<a;i+=1)this._analyze({key:"",value:r[i],record:i,index:i},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var s={},c=0,h=r.length;c<h;c+=1)for(var l=r[c],u=0,f=this.options.keys.length;u<f;u+=1){var d=this.options.keys[u];if("string"!=typeof d){if(s[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name}else s[d]={weight:1};this._analyze({key:d,value:this.options.getFn(l,d),record:l,index:c},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:o}}},{key:"_analyze",value:function(e,t){var r=e.key,n=e.arrayIndex,o=void 0===n?-1:n,i=e.value,a=e.record,c=e.index,h=t.tokenSearchers,l=void 0===h?[]:h,u=t.fullSearcher,f=void 0===u?[]:u,d=t.resultMap,v=void 0===d?{}:d,p=t.results,g=void 0===p?[]:p;if(void 0!==i&&null!==i){var y=!1,m=-1,k=0;if("string"==typeof i){this._log("\nKey: "+(""===r?"-":r));var x=f.search(i);if(this._log('Full text: "'+i+'", score: '+x.score),this.options.tokenize){for(var S=i.split(this.options.tokenSeparator),M=[],b=0;b<l.length;b+=1){var _=l[b];this._log('\nPattern: "'+_.pattern+'"');for(var L=!1,w=0;w<S.length;w+=1){var C=S[w],A=_.search(C),I={};A.isMatch?(I[C]=A.score,y=!0,L=!0,M.push(A.score)):(I[C]=1,this.options.matchAllTokens||M.push(1)),this._log('Token: "'+C+'", score: '+I[C])}L&&(k+=1)}m=M[0];for(var O=M.length,F=1;F<O;F+=1)m+=M[F];m/=O,this._log("Token score average:",m)}var P=x.score;m>-1&&(P=(P+m)/2),this._log("Score average:",P);var j=!this.options.tokenize||!this.options.matchAllTokens||k>=l.length;if(this._log("\nCheck Matches: "+j),(y||x.isMatch)&&j){var z=v[c];z?z.output.push({key:r,arrayIndex:o,value:i,score:P,matchedIndices:x.matchedIndices}):(v[c]={item:a,output:[{key:r,arrayIndex:o,value:i,score:P,matchedIndices:x.matchedIndices}]},g.push(v[c]))}}else if(s(i))for(var T=0,E=i.length;T<E;T+=1)this._analyze({key:r,arrayIndex:T,value:i[T],record:a,index:c},{resultMap:v,results:g,tokenSearchers:l,fullSearcher:f})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var r=0,n=t.length;r<n;r+=1){for(var o=t[r].output,i=o.length,a=0,s=1,c=0;c<i;c+=1){var h=e?e[o[c].key].weight:1,l=1===h?o[c].score:o[c].score||.001,u=l*h;1!==h?s=Math.min(s,u):(o[c].nScore=u,a+=u)}t[r].score=1===s?a/i:s,this._log(t[r])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];this._log("\n\nOutput:\n\n",JSON.stringify(e));var r=[];this.options.includeMatches&&r.push(function(e,t){var r=e.output;t.matches=[];for(var n=0,o=r.length;n<o;n+=1){var i=r[n];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a)}}}),this.options.includeScore&&r.push(function(e,t){t.score=e.score});for(var n=0,o=e.length;n<o;n+=1){var i=e[n];if(this.options.id&&(i.item=this.options.getFn(i.item,this.options.id)[0]),r.length){for(var a={item:i.item},s=0,c=r.length;s<c;s+=1)r[s](i,a);t.push(a)}else t.push(i.item)}return t}},{key:"_log",value:function(){if(this.options.verbose){var e;(e=console).log.apply(e,arguments)}}}]),e}();e.exports=c}])});