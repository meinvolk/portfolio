webpackJsonp([35783957827783],{170:function(e,t){},321:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(){return"undefined"==typeof E&&"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){x.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),E}t.__esModule=!0;var o=n(40),i=a(o),l=n(56),s=a(l),u=n(55),c=a(u),f=n(144),d=a(f),p=n(143),h=a(p),m=n(2),v=a(m),y=n(7),b=a(y),g=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},_={},w=function(e){var t=g(e),n=t.sizes?t.sizes.src:t.resolutions.src;return!!_[n]||(_[n]=!0,!1)},E=void 0,x=[],j=function(e,t){r().observe(e),x.push([e,t])},S=null,O=function(){if(null!==S)return S;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return S=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1",u=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+i+l+t+n+o+r+a+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+u+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},k=function(e){var t=e.style,n=e.onLoad,a=(0,d.default)(e,["style","onLoad"]);return v.default.createElement("img",(0,h.default)({},a,{onLoad:n,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};k.propTypes={style:b.default.object,onLoad:b.default.func};var z=function(e){function t(n){(0,i.default)(this,t);var a=(0,s.default)(this,e.call(this,n)),r=!0,o=!0,l=!1,u=w(n);return!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,o=!1,l=!0),"undefined"==typeof window&&(r=!1,o=!1),a.state={isVisible:r,imgLoaded:o,IOSupported:l},a.handleRef=a.handleRef.bind(a),a}return(0,c.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&j(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=g(this.props),n=t.title,a=t.alt,r=t.className,o=t.outerWrapperClassName,i=t.style,l=void 0===i?{}:i,s=t.imgStyle,u=void 0===s?{}:s,c=t.placeholderStyle,f=void 0===c?{}:c,d=t.sizes,p=t.resolutions,m=t.backgroundColor,y=t.Tag,b=void 0;b="boolean"==typeof m?"lightgray":m;var _=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},u,f),w=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},u);if(d){var E=d;return E.srcWebp&&E.srcSetWebp&&O()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),v.default.createElement(y,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},v.default.createElement(y,{className:(r?r:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef},v.default.createElement(y,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),E.base64&&v.default.createElement(k,{alt:a,title:n,src:E.base64,style:_}),E.tracedSVG&&v.default.createElement(k,{alt:a,title:n,src:E.tracedSVG,style:_}),b&&v.default.createElement(y,{title:n,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&v.default.createElement(k,{alt:a,title:n,srcSet:E.srcSet,src:E.src,sizes:E.sizes,style:w,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),v.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,h.default)({alt:a,title:n},E))}})))}if(p){var x=p,j=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},l);return"inherit"===l.display&&delete j.display,x.srcWebp&&x.srcSetWebp&&O()&&(x.src=x.srcWebp,x.srcSet=x.srcSetWebp),v.default.createElement(y,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},v.default.createElement(y,{className:(r?r:"")+" gatsby-image-wrapper",style:j,ref:this.handleRef},x.base64&&v.default.createElement(k,{alt:a,title:n,src:x.base64,style:_}),x.tracedSVG&&v.default.createElement(k,{alt:a,title:n,src:x.tracedSVG,style:_}),b&&v.default.createElement(y,{title:n,style:{backgroundColor:b,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&v.default.createElement(k,{alt:a,title:n,width:x.width,height:x.height,srcSet:x.srcSet,src:x.src,style:w,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),v.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,h.default)({alt:a,title:n,width:x.width,height:x.height},x))}})))}return null},t}(v.default.Component);z.defaultProps={fadeIn:!0,alt:"",Tag:"div"},z.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,placeholderStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=z},111:function(e,t,n){!function(t,n){e.exports=n()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,a=Object.getOwnPropertyNames,r=Object.getOwnPropertySymbols,o=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,l=i&&i(Object);return function s(u,c,f){if("string"!=typeof c){if(l){var d=i(c);d&&d!==l&&s(u,d,f)}var p=a(c);r&&(p=p.concat(r(c)));for(var h=0;h<p.length;++h){var m=p[h];if(!(e[m]||t[m]||f&&f[m])){var v=o(c,m);try{n(u,m,v)}catch(e){}}}return u}return u}})},346:function(e,t,n){function a(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}var r=n(359),o=n(360),i=n(361),l=n(362),s=n(363);a.prototype.clear=r,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=l,a.prototype.set=s,e.exports=a},347:function(e,t,n){function a(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}var r=n(367),o=n(368),i=n(369),l=n(370),s=n(371);a.prototype.clear=r,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=l,a.prototype.set=s,e.exports=a},348:function(e,t,n){var a=n(178),r=n(114),o=a(r,"Map");e.exports=o},349:function(e,t,n){function a(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}var r=n(372),o=n(373),i=n(374),l=n(375),s=n(376);a.prototype.clear=r,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=l,a.prototype.set=s,e.exports=a},113:function(e,t,n){var a=n(114),r=a.Symbol;e.exports=r},350:function(e,t){function n(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r}e.exports=n},68:function(e,t,n){function a(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}var r=n(382);e.exports=a},351:function(e,t,n){function a(e,t){t=r(t,e);for(var n=0,a=t.length;null!=e&&n<a;)e=e[o(t[n++])];return n&&n==a?e:void 0}var r=n(354),o=n(380);e.exports=a},177:function(e,t,n){function a(e){return null==e?void 0===e?s:l:u&&u in Object(e)?o(e):i(e)}var r=n(113),o=n(357),i=n(378),l="[object Null]",s="[object Undefined]",u=r?r.toStringTag:void 0;e.exports=a},352:function(e,t,n){function a(e){if(!i(e)||o(e))return!1;var t=r(e)?h:u;return t.test(l(e))}var r=n(384),o=n(366),i=n(179),l=n(381),s=/[\\^$.*+?()[\]{}|]/g,u=/^\[object .+?Constructor\]$/,c=Function.prototype,f=Object.prototype,d=c.toString,p=f.hasOwnProperty,h=RegExp("^"+d.call(p).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=a},353:function(e,t,n){function a(e){if("string"==typeof e)return e;if(i(e))return o(e,a)+"";if(l(e))return c?c.call(e):"";var t=e+"";return"0"==t&&1/e==-s?"-0":t}var r=n(113),o=n(350),i=n(115),l=n(116),s=1/0,u=r?r.prototype:void 0,c=u?u.toString:void 0;e.exports=a},354:function(e,t,n){function a(e,t){return r(e)?e:o(e,t)?[e]:i(l(e))}var r=n(115),o=n(364),i=n(379),l=n(387);e.exports=a},355:function(e,t,n){var a=n(114),r=a["__core-js_shared__"];e.exports=r},356:function(e,t){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,function(){return this}())},69:function(e,t,n){function a(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}var r=n(365);e.exports=a},178:function(e,t,n){function a(e,t){var n=o(e,t);return r(n)?n:void 0}var r=n(352),o=n(358);e.exports=a},357:function(e,t,n){function a(e){var t=i.call(e,s),n=e[s];try{e[s]=void 0;var a=!0}catch(e){}var r=l.call(e);return a&&(t?e[s]=n:delete e[s]),r}var r=n(113),o=Object.prototype,i=o.hasOwnProperty,l=o.toString,s=r?r.toStringTag:void 0;e.exports=a},358:function(e,t){function n(e,t){return null==e?void 0:e[t]}e.exports=n},359:function(e,t,n){function a(){this.__data__=r?r(null):{},this.size=0}var r=n(70);e.exports=a},360:function(e,t){function n(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}e.exports=n},361:function(e,t,n){function a(e){var t=this.__data__;if(r){var n=t[e];return n===o?void 0:n}return l.call(t,e)?t[e]:void 0}var r=n(70),o="__lodash_hash_undefined__",i=Object.prototype,l=i.hasOwnProperty;e.exports=a},362:function(e,t,n){function a(e){var t=this.__data__;return r?void 0!==t[e]:i.call(t,e)}var r=n(70),o=Object.prototype,i=o.hasOwnProperty;e.exports=a},363:function(e,t,n){function a(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?o:t,this}var r=n(70),o="__lodash_hash_undefined__";e.exports=a},364:function(e,t,n){function a(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||(l.test(e)||!i.test(e)||null!=t&&e in Object(t))}var r=n(115),o=n(116),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,l=/^\w*$/;e.exports=a},365:function(e,t){function n(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=n},366:function(e,t,n){function a(e){return!!o&&o in e}var r=n(355),o=function(){var e=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=a},367:function(e,t){function n(){this.__data__=[],this.size=0}e.exports=n},368:function(e,t,n){function a(e){var t=this.__data__,n=r(t,e);if(n<0)return!1;var a=t.length-1;return n==a?t.pop():i.call(t,n,1),--this.size,!0}var r=n(68),o=Array.prototype,i=o.splice;e.exports=a},369:function(e,t,n){function a(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}var r=n(68);e.exports=a},370:function(e,t,n){function a(e){return r(this.__data__,e)>-1}var r=n(68);e.exports=a},371:function(e,t,n){function a(e,t){var n=this.__data__,a=r(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this}var r=n(68);e.exports=a},372:function(e,t,n){function a(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}var r=n(346),o=n(347),i=n(348);e.exports=a},373:function(e,t,n){function a(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}var r=n(69);e.exports=a},374:function(e,t,n){function a(e){return r(this,e).get(e)}var r=n(69);e.exports=a},375:function(e,t,n){function a(e){return r(this,e).has(e)}var r=n(69);e.exports=a},376:function(e,t,n){function a(e,t){var n=r(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this}var r=n(69);e.exports=a},377:function(e,t,n){function a(e){var t=r(e,function(e){return n.size===o&&n.clear(),e}),n=t.cache;return t}var r=n(386),o=500;e.exports=a},70:function(e,t,n){var a=n(178),r=a(Object,"create");e.exports=r},378:function(e,t){function n(e){return r.call(e)}var a=Object.prototype,r=a.toString;e.exports=n},114:function(e,t,n){var a=n(356),r="object"==typeof self&&self&&self.Object===Object&&self,o=a||r||Function("return this")();e.exports=o},379:function(e,t,n){var a=n(377),r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,i=a(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(r,function(e,n,a,r){t.push(a?r.replace(o,"$1"):n||e)}),t});e.exports=i},380:function(e,t,n){function a(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-o?"-0":t}var r=n(116),o=1/0;e.exports=a},381:function(e,t){function n(e){if(null!=e){try{return r.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var a=Function.prototype,r=a.toString;e.exports=n},382:function(e,t){function n(e,t){return e===t||e!==e&&t!==t}e.exports=n},383:function(e,t,n){function a(e,t,n){var a=null==e?void 0:r(e,t);return void 0===a?n:a}var r=n(351);e.exports=a},115:function(e,t){var n=Array.isArray;e.exports=n},384:function(e,t,n){function a(e){if(!o(e))return!1;var t=r(e);return t==l||t==s||t==i||t==u}var r=n(177),o=n(179),i="[object AsyncFunction]",l="[object Function]",s="[object GeneratorFunction]",u="[object Proxy]";e.exports=a},179:function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},385:function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},116:function(e,t,n){function a(e){return"symbol"==typeof e||o(e)&&r(e)==i}var r=n(177),o=n(385),i="[object Symbol]";e.exports=a},386:function(e,t,n){function a(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(o);var n=function(){var a=arguments,r=t?t.apply(this,a):a[0],o=n.cache;if(o.has(r))return o.get(r);var i=e.apply(this,a);return n.cache=o.set(r,i)||o,i};return n.cache=new(a.Cache||r),n}var r=n(349),o="Expected a function";a.Cache=r,e.exports=a},387:function(e,t,n){function a(e){return null==e?"":r(e)}var r=n(353);e.exports=a},219:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),o=a(r),i=n(47);a(i);n(170);var l=function(){return o.default.createElement("div",{id:"page-down",className:"feature-block"},o.default.createElement("div",{className:"container"},o.default.createElement("h2",null,"This is going to be the tagline for the featured text block and an important statement to my audience."),o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"feature-block-item col-md-4"},o.default.createElement("i",{className:"fa fa-paint-brush"}),o.default.createElement("h3",null,"Web Design"),o.default.createElement("p",null,"I have been an artist for almost a decade. Shoot me an idea and I will put it on the art board.")),o.default.createElement("div",{className:"feature-block-item col-md-4"},o.default.createElement("i",{className:"fa fa-code"}),o.default.createElement("h3",null,"Web Development"),o.default.createElement("p",null,"Web development has been the keystone of my education and professional career. Leave the coding to me.")),o.default.createElement("div",{className:"feature-block-item col-md-4"},o.default.createElement("i",{className:"fa fa-cogs"}),o.default.createElement("h3",null,"Software"),o.default.createElement("p",null,"Business problems? I write custom software for small businesses that solve challenges in all walks of life.")))))};t.default=l,e.exports=t.default},220:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),o=a(r),i=n(47),l=a(i);n(170);var s=function(){return o.default.createElement("div",{className:"general-hero"},o.default.createElement("div",{className:"hero-image"},o.default.createElement("div",{className:"hero-content"},o.default.createElement("h1",null,"William Bensinger"),o.default.createElement("h2",null,"I am a full-stack developer specializing in web and software applications. I also draw, a lot."),o.default.createElement("div",{className:"list-icons"},o.default.createElement(l.default,{to:"https://www.linkedin.com/in/william-bensinger-506734129/",target:"_blank"},o.default.createElement("i",{className:"fa fa-linkedin"})),o.default.createElement(l.default,{to:"https://github.com/meinvolk",target:"_blank"},o.default.createElement("i",{className:"fa fa-github"})),o.default.createElement(l.default,{to:"https://www.instagram.com/bensingerbilly/",target:"_blank"},o.default.createElement("i",{className:"fa fa-instagram"})),o.default.createElement(l.default,{to:"https://www.facebook.com/billy.bensinger.9",target:"_blank"},o.default.createElement("i",{className:"fa fa-facebook-f"})))),o.default.createElement("div",{className:"down-icon"},o.default.createElement(l.default,{to:"#page-down"},o.default.createElement("i",{className:"fa fa-chevron-circle-down animated bounce"})))))};t.default=s,e.exports=t.default},78:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),o=a(r),i=n(47),l=a(i),s=function(){return o.default.createElement("header",null,o.default.createElement("div",null,o.default.createElement("ul",null,o.default.createElement("li",{className:"animated slideInDown"},o.default.createElement(l.default,{to:"/"},"Home")),o.default.createElement("li",{className:"animated slideInDown"},o.default.createElement(l.default,{to:"/page-2"},"About")),o.default.createElement("li",{className:"animated slideInDown"},o.default.createElement(l.default,{to:"/"},"Skills")),o.default.createElement("li",{className:"animated slideInDown"},o.default.createElement(l.default,{to:"/"},"Work")),o.default.createElement("li",{className:"animated slideInDown"},o.default.createElement(l.default,{to:"/"},"Contact")))))};t.default=s,e.exports=t.default},223:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n(2),s=a(l),u=n(47),c=a(u),f=n(383),d=a(f),p=n(321),h=a(p),m=n(220),v=a(m),y=n(78),b=a(y),g=n(219),_=a(g),w=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=(0,d.default)(this,"props.data.allMarkdownRemark.edges");return s.default.createElement("div",null,s.default.createElement(b.default,null),s.default.createElement(v.default,null),s.default.createElement(_.default,null),s.default.createElement("div",{className:"row featured-blog"},e.map(function(e){var t=e.node;return s.default.createElement("article",{key:t.frontmatter.title,className:"col-md-4"},s.default.createElement(c.default,{to:t.frontmatter.path},s.default.createElement(h.default,{resolutions:t.frontmatter.featuredImage.childImageSharp.resolutions}),s.default.createElement("p",null,t.frontmatter.featuredText)))})))},t}(s.default.Component);t.default=w;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-e83d7de91a1eb9f85a91.js.map