webpackJsonp([35783957827783],{155:function(e,t){},102:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof O&&"undefined"!=typeof window&&window.IntersectionObserver&&(O=new window.IntersectionObserver(function(e){e.forEach(function(e){S.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(O.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),O}t.__esModule=!0;var a=n(24),r=i(a),s=n(42),l=i(s),u=n(41),c=i(u),d=n(76),f=i(d),p=n(75),h=i(p),m=n(2),v=i(m),y=n(6),b=i(y),w=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},g={},E=function(e){var t=w(e),n=t.sizes?t.sizes.src:t.resolutions.src;return!!g[n]||(g[n]=!0,!1)},O=void 0,S=[],k=function(e,t){o().observe(e),S.push([e,t])},R=null,C=function(){if(null!==R)return R;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return R=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},_=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.sizes?'sizes="'+e.sizes+'" ':"",o=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1",u=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+r+s+t+n+a+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+u+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},T=function(e){var t=e.style,n=e.onLoad,i=(0,f.default)(e,["style","onLoad"]);return v.default.createElement("img",(0,h.default)({},i,{onLoad:n,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};T.propTypes={style:b.default.object,onLoad:b.default.func};var N=function(e){function t(n){(0,r.default)(this,t);var i=(0,l.default)(this,e.call(this,n)),o=!0,a=!0,s=!1,u=E(n);return!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,a=!1,s=!0),"undefined"==typeof window&&(o=!1,a=!1),i.state={isVisible:o,imgLoaded:a,IOSupported:s},i.handleRef=i.handleRef.bind(i),i}return(0,c.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&k(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=w(this.props),n=t.title,i=t.alt,o=t.className,a=t.outerWrapperClassName,r=t.style,s=void 0===r?{}:r,l=t.imgStyle,u=void 0===l?{}:l,c=t.placeholderStyle,d=void 0===c?{}:c,f=t.sizes,p=t.resolutions,m=t.backgroundColor,y=t.Tag,b=void 0;b="boolean"==typeof m?"lightgray":m;var g=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},u,d),E=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},u);if(f){var O=f;return O.srcWebp&&O.srcSetWebp&&C()&&(O.src=O.srcWebp,O.srcSet=O.srcSetWebp),v.default.createElement(y,{className:(a?a:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},v.default.createElement(y,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef},v.default.createElement(y,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),O.base64&&v.default.createElement(T,{alt:i,title:n,src:O.base64,style:g}),O.tracedSVG&&v.default.createElement(T,{alt:i,title:n,src:O.tracedSVG,style:g}),b&&v.default.createElement(y,{title:n,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&v.default.createElement(T,{alt:i,title:n,srcSet:O.srcSet,src:O.src,sizes:O.sizes,style:E,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),v.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,h.default)({alt:i,title:n},O))}})))}if(p){var S=p,k=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},s);return"inherit"===s.display&&delete k.display,S.srcWebp&&S.srcSetWebp&&C()&&(S.src=S.srcWebp,S.srcSet=S.srcSetWebp),v.default.createElement(y,{className:(a?a:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},v.default.createElement(y,{className:(o?o:"")+" gatsby-image-wrapper",style:k,ref:this.handleRef},S.base64&&v.default.createElement(T,{alt:i,title:n,src:S.base64,style:g}),S.tracedSVG&&v.default.createElement(T,{alt:i,title:n,src:S.tracedSVG,style:g}),b&&v.default.createElement(y,{title:n,style:{backgroundColor:b,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&v.default.createElement(T,{alt:i,title:n,width:S.width,height:S.height,srcSet:S.srcSet,src:S.src,style:E,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),v.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,h.default)({alt:i,title:n,width:S.width,height:S.height},S))}})))}return null},t}(v.default.Component);N.defaultProps={fadeIn:!0,alt:"",Tag:"div"},N.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,placeholderStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=N},106:function(e,t,n){!function(t,n){e.exports=n()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,i=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,a=Object.getOwnPropertyDescriptor,r=Object.getPrototypeOf,s=r&&r(Object);return function l(u,c,d){if("string"!=typeof c){if(s){var f=r(c);f&&f!==s&&l(u,f,d)}var p=i(c);o&&(p=p.concat(o(c)));for(var h=0;h<p.length;++h){var m=p[h];if(!(e[m]||t[m]||d&&d[m])){var v=a(c,m);try{n(u,m,v)}catch(e){}}}return u}return u}})},409:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function a(e,t){var n=t.distance,i=t.left,o=t.right,a=t.up,r=t.down,s=t.top,u=t.bottom,c=t.big,d=t.mirror,p=t.opposite,h=(n?n.toString():0)+((i?1:0)|(o?2:0)|(s||r?4:0)|(u||a?8:0)|(d?16:0)|(p?32:0)|(e?64:0)|(c?128:0));if(f.hasOwnProperty(h))return f[h];var m=i||o||a||r||s||u,v=void 0,y=void 0;if(m){if(!d!=!(e&&p)){var b=[o,i,u,s,r,a];i=b[0],o=b[1],s=b[2],u=b[3],a=b[4],r=b[5]}var w=n||(c?"2000px":"100%");v=i?"-"+w:o?w:"0",y=r||s?"-"+w:a||u?w:"0"}return f[h]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(m?" transform: translate3d("+v+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),f[h]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,i=(e.out,e.forever),r=e.timeout,s=e.duration,u=void 0===s?l.defaults.duration:s,d=e.delay,f=void 0===d?l.defaults.delay:d,p=e.count,h=void 0===p?l.defaults.count:p,m=o(e,["children","out","forever","timeout","duration","delay","count"]),v={make:a,duration:void 0===r?u:r,delay:f,forever:i,count:h,style:{animationFillMode:"both"},reverse:m.left};return t?(0,c.default)(m,v,v,n):v}Object.defineProperty(t,"__esModule",{value:!0});var s=n(6),l=n(187),u=n(411),c=i(u),d={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,distance:s.string,delay:s.number,count:s.number,forever:s.bool},f={};r.propTypes=d,t.default=r,e.exports=t.default},410:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){function e(e,t){var n=[],i=!0,o=!1,a=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),f=n(2),p=i(f),h=n(6),m=n(187),v=(0,h.shape)({make:h.func,duration:h.number.isRequired,delay:h.number.isRequired,forever:h.bool,count:h.number.isRequired,style:h.object.isRequired,reverse:h.bool}),y={collapse:h.bool,collapseEl:h.element,cascade:h.bool,wait:h.number,force:h.bool,disabled:h.bool,appear:h.bool,enter:h.bool,exit:h.bool,fraction:h.number,refProp:h.string,innerRef:h.func,onReveal:h.func,unmountOnExit:h.bool,mountOnEnter:h.bool,inEffect:v.isRequired,outEffect:(0,h.oneOfType)([v,(0,h.oneOf)([!1])]).isRequired,ssrReveal:h.bool,collapseOnly:h.bool,ssrFadeout:h.bool},b={fraction:.2,refProp:"ref"},w={transitionGroup:h.object},g=function(e){function t(e,n){a(this,t);var i=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.isOn=void 0===e.when||!!e.when,i.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:i.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},i.savedChild=!1,i.isShown=!1,m.observerMode?i.handleObserve=i.handleObserve.bind(i):(i.revealHandler=i.makeHandler(i.reveal),i.resizeHandler=i.makeHandler(i.resize)),i.saveRef=i.saveRef.bind(i),i}return s(t,e),d(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?c({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!m.observerMode&&this.props.collapse&&window.document.dispatchEvent(m.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var i=this,o=n.forever,a=n.count,r=n.delay,s=n.duration;if(!o){var l=function(){i&&i.el&&(i.animationEndTimeout=void 0,e.call(i))};this.animationEndTimeout=window.setTimeout(l,r+(s+(t?s:0)*a))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var i=n.duration+(t.cascade?n.duration:0),o=this.isOn?this.getDimensionValue():0,a=void 0,r=void 0;if(t.collapseOnly)a=n.duration/3,r=n.delay;else{var s=i>>2,l=s>>1;a=s,r=n.delay+(this.isOn?0:i-s-l),e.style.animationDuration=i-s+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?s-l:0)+"ms"}return e.collapse={height:o,transition:"height "+a+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],i="style"in n&&n.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(i=n.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:c({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:i}),className:n.className}),this.setState(e.collapse?this.collapse(o,e,n):o),t?(this.savedChild=p.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),m.ssr&&(0,m.disableSsr)()}},{key:"handleObserve",value:function(e,t){u(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&m.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];m.globalHide||(0,m.hideAll)(),this&&this.el&&(e||(e=this.props),m.ssr&&(0,m.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):n||this.inViewport(e)||e.force?this.animate(e):m.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,i=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!i||m.ssr&&!m.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):m.ssr&&(m.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map(function(e,t){return p.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):p.default.Children.toArray(e);var i=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=i.duration,a=i.reverse,r=n.length,s=2*o;this.props.collapse&&(s=parseInt(this.state.style.animationDuration,10),o=s/2);var u=a?r:0;return n=n.map(function(e){return"object"===(void 0===e?"undefined":l(e))&&e?p.default.cloneElement(e,{style:c({},e.props.style,t.state.style,{animationDuration:Math.round((0,m.cascade)(a?u--:u++,0,r,o,s))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){return void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?void e.onExited():void(e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout))))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===l(this.props.children)){var e=p.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:p.default.createElement("div",null,e)}return p.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e=void 0;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,i=t.props,a=i.style,r=i.className,s=i.children,l=this.props.disabled?r:(this.props.outEffect?m.namespace:"")+(this.state.className?" "+this.state.className:"")+(r?" "+r:"")||void 0,u=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&s&&this.state.style.animationName?(n=this.cascade(s),u=c({},a,{opacity:1})):u=this.props.disabled?a:c({},a,this.state.style);var d=c({},this.props.props,o({className:l,style:u},this.props.refProp,this.saveRef)),f=p.default.cloneElement(t,d,e?n||s:void 0);return void 0!==this.props.collapse?this.props.collapseEl?p.default.cloneElement(this.props.collapseEl,{style:c({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:f}):p.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:f}):f}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,m.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,i=window.pageYOffset-t.getTop(this.el),o=Math.min(n,window.innerHeight)*(m.globalHide?e.fraction:0);return i>o-window.innerHeight&&i<n-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){m.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!m.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(p.default.Component);g.propTypes=y,g.defaultProps=b,g.contextTypes=w,g.displayName="RevealBase",t.default=g,e.exports=t.default},187:function(e,t){"use strict";function n(e){try{return b.insertRule(e,b.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function i(e,t,n,i,o){var a=Math.log(i),r=Math.log(o),s=(r-a)/(n-t);return Math.exp(a+s*(e-t))}function o(e){if(!b)return"";var t="@keyframes "+(w+v)+"{"+e+"}",n=y[e];return n?""+w+n:(b.insertRule(t,b.cssRules.length),y[e]=v,""+w+v++)}function a(){p||(t.globalHide=p=!0,window.removeEventListener("scroll",a,!0),n("."+s+" { opacity: 0; }"),window.removeEventListener("orientationchange",a,!0),window.document.removeEventListener("visibilitychange",a))}function r(e){var n=e.ssrFadeout;t.fadeOutEnabled=f=n}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=i,t.animation=o,t.hideAll=a,t.default=r;var s=t.namespace="react-reveal",l=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),u=t.observerMode=!1,c=t.raf=function(e){return window.setTimeout(e,66)},d=t.disableSsr=function(){return t.ssr=l=!1},f=t.fadeOutEnabled=!1,p=(t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=f=e},t.globalHide=!1),h=t.ie10=!1,m=t.collapseend=void 0,v=1,y={},b=!1,w=s+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=u="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||c,t.ssr=l=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=h=!0),l&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=l=!1),l&&window.setTimeout(d,1500),u||(t.collapseend=m=document.createEvent("Event"),m.initEvent("collapseend",!0,!0));var g=document.createElement("style");document.head.appendChild(g),g.sheet&&g.sheet.cssRules&&g.sheet.insertRule&&(b=g.sheet,window.addEventListener("scroll",a,!0),window.addEventListener("orientationchange",a,!0),window.document.addEventListener("visibilitychange",a))}},411:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,i){return"in"in e&&(e.when=e.in),s.default.Children.count(i)<2?s.default.createElement(u.default,a({},e,{inEffect:t,outEffect:n,children:i})):(i=s.default.Children.map(i,function(i){return s.default.createElement(u.default,a({},e,{inEffect:t,outEffect:n,children:i}))}),"Fragment"in s.default?s.default.createElement(s.default.Fragment,null,i):s.default.createElement("span",null,i))}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=o;var r=n(2),s=i(r),l=n(410),u=i(l);e.exports=t.default},447:function(e,t,n){var i,o;(function(n){!function(n,a){i=[],o=function(){return a(n)}.apply(t,i),!(void 0!==o&&(e.exports=o))}("undefined"!=typeof n?n:"undefined"!=typeof window?window:this,function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){return"querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype},i=function(){for(var e={},t=0;t<arguments.length;t++)!function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}(arguments[t]);return e},o=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)},a=function(t){return parseInt(e.getComputedStyle(t).height,10)},r=function(e){var t;try{t=decodeURIComponent(e)}catch(n){t=e}return t},s=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),i=n.length,o=-1,a="",r=n.charCodeAt(0);++o<i;){if(0===(t=n.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=t>=1&&t<=31||127==t||0===o&&t>=48&&t<=57||1===o&&t>=48&&t<=57&&45===r?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(o):"\\"+n.charAt(o)}var s;try{s=decodeURIComponent("#"+a)}catch(e){s="#"+a}return s},l=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},u=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},c=function(t,n,i,o){var a=0;if(t.offsetParent)do a+=t.offsetTop,t=t.offsetParent;while(t);return a=Math.max(a-n-i,0),o&&(a=Math.min(a,u()-e.innerHeight)),a},d=function(e){return e?a(e)+e.offsetTop:0},f=function(e,t,n){t||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)},p=function(t,n,i){0===t&&document.body.focus(),i||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},h=function(t,n,i,o){if(n.emitEvents&&"function"==typeof e.CustomEvent){var a=new CustomEvent(t,{bubbles:!0,detail:{anchor:i,toggle:o}});document.dispatchEvent(a)}};return function(a,m){var v,y,b,w,g,E,O,S={};S.cancelScroll=function(e){cancelAnimationFrame(O),O=null,e||h("scrollCancel",v)},S.animateScroll=function(n,o,a){var r=i(v||t,a||{}),s="[object Number]"===Object.prototype.toString.call(n),m=s||!n.tagName?null:n;if(s||m){var y=e.pageYOffset;r.header&&!w&&(w=document.querySelector(r.header)),g||(g=d(w));var b,E,k,R=s?n:c(m,g,parseInt("function"==typeof r.offset?r.offset(n,o):r.offset,10),r.clip),C=R-y,_=u(),T=0,N=function(t,i){var a=e.pageYOffset;if(t==i||a==i||(y<i&&e.innerHeight+a)>=_)return S.cancelScroll(!0),p(n,i,s),h("scrollStop",r,n,o),b=null,O=null,!0},j=function(t){b||(b=t),T+=t-b,E=T/parseInt(r.speed,10),E=E>1?1:E,k=y+C*l(r,E),e.scrollTo(0,Math.floor(k)),N(k,R)||(O=e.requestAnimationFrame(j),b=t)};0===e.pageYOffset&&e.scrollTo(0,0),f(n,s,r),h("scrollStart",r,n,o),S.cancelScroll(!0),e.requestAnimationFrame(j)}};var k=function(t){if(!o()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&"closest"in t.target&&(b=t.target.closest(a))&&"a"===b.tagName.toLowerCase()&&!t.target.closest(v.ignore)&&b.hostname===e.location.hostname&&b.pathname===e.location.pathname&&/#/.test(b.href)){var n=s(r(b.hash)),i=v.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);i=i||"#top"!==n?i:document.documentElement,i&&(t.preventDefault(),S.animateScroll(i,b))}},R=function(e){if(history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(v)&&history.state.anchor){var t=document.querySelector(s(r(history.state.anchor)));t&&S.animateScroll(t,null,{updateURL:!1})}},C=function(e){E||(E=setTimeout(function(){E=null,g=d(w)},66))};return S.destroy=function(){v&&(document.removeEventListener("click",k,!1),e.removeEventListener("resize",C,!1),e.removeEventListener("popstate",R,!1),S.cancelScroll(),v=null,y=null,b=null,w=null,g=null,E=null,O=null)},S.init=function(o){if(!n())throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";S.destroy(),v=i(t,o||{}),w=v.header?document.querySelector(v.header):null,g=d(w),document.addEventListener("click",k,!1),w&&e.addEventListener("resize",C,!1),v.updateURL&&v.popstate&&e.addEventListener("popstate",R,!1)},S.init(m),S}})}).call(t,function(){return this}())},203:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),a=i(o);n(155);var r=n(409),s=i(r),l=function(){return a.default.createElement("div",{id:"page-down",className:"feature-block"},a.default.createElement("div",{className:"container"},a.default.createElement("h2",null,"This is going to be the tagline for the featured text block and an important statement to my audience."),a.default.createElement(s.default,{className:"row"},a.default.createElement("div",{className:"feature-block-item col-md-4"},a.default.createElement("i",{className:"fa fa-paint-brush"}),a.default.createElement("h3",null,"Web Design"),a.default.createElement("p",null,"I have been an artist for almost a decade. Shoot me an idea and I will put it on the art board.")),a.default.createElement("div",{className:"feature-block-item col-md-4"},a.default.createElement("i",{className:"fa fa-code"}),a.default.createElement("h3",null,"Web Development"),a.default.createElement("p",null,"Web development is the keystone of my education and professional career. Leave the coding to me.")),a.default.createElement("div",{className:"feature-block-item col-md-4"},a.default.createElement("i",{className:"fa fa-cogs"}),a.default.createElement("h3",null,"Software"),a.default.createElement("p",null,"Business problems? I write custom software for small businesses that solve challenges in all walks of life.")))))};t.default=l,e.exports=t.default},204:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(2),l=i(s),u=n(49),c=(i(u),function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return l.default.createElement("footer",null,l.default.createElement("div",{className:"list-icons"},l.default.createElement("a",{href:"https://www.linkedin.com/in/william-bensinger-506734129/",target:"_blank"},l.default.createElement("i",{className:"fa fa-linkedin"})),l.default.createElement("a",{href:"https://github.com/meinvolk",target:"_blank"},l.default.createElement("i",{className:"fa fa-github"})),l.default.createElement("a",{href:"https://www.instagram.com/bensingerbilly/",target:"_blank"},l.default.createElement("i",{className:"fa fa-instagram"})),l.default.createElement("a",{href:"https://www.facebook.com/billy.bensinger.9",
target:"_blank"},l.default.createElement("i",{className:"fa fa-facebook-f"}))))},t}(s.Component));e.exports=c},205:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),a=i(o),r=n(49);i(r);n(155);var s=function(){return a.default.createElement("div",{className:"general-hero"},a.default.createElement("div",{className:"hero-image"},a.default.createElement("div",{className:"hero-content"},a.default.createElement("h1",null,"William Bensinger"),a.default.createElement("h2",null,"I am a full-stack developer specializing in web and software applications. I also draw, a lot."),a.default.createElement("div",{className:"list-icons"},a.default.createElement("a",{href:"https://www.linkedin.com/in/william-bensinger-506734129/",target:"_blank"},a.default.createElement("i",{className:"fa fa-linkedin"})),a.default.createElement("a",{href:"https://github.com/meinvolk",target:"_blank"},a.default.createElement("i",{className:"fa fa-github"})),a.default.createElement("a",{href:"https://www.instagram.com/bensingerbilly/",target:"_blank"},a.default.createElement("i",{className:"fa fa-instagram"})),a.default.createElement("a",{href:"https://www.facebook.com/billy.bensinger.9",target:"_blank"},a.default.createElement("i",{className:"fa fa-facebook-f"})))),a.default.createElement("div",{className:"down-icon"},a.default.createElement("a",{"data-scroll":!0,href:"#page-down"},a.default.createElement("i",{className:"fa fa-chevron-circle-down animated bounce"})))))};t.default=s,e.exports=t.default},74:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(2),l=i(s),u=n(49),c=i(u),d=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=["Skills","Work","About","Contact"];return l.default.createElement("header",null,l.default.createElement("div",null,l.default.createElement("ul",null,l.default.createElement("li",{className:"animated slideInDown"},l.default.createElement(c.default,{to:"/"},"Home")),e.map(function(e){return l.default.createElement("li",{className:"animated slideInDown",key:e},l.default.createElement(c.default,{to:e},e))}))))},t}(s.Component);e.exports=d},206:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.ProjectQuery=void 0;var s=n(2),l=i(s),u=n(49),c=i(u),d=n(102),f=i(d),p=function(e){function t(n){o(this,t);var i=a(this,e.call(this,n));return i.state={category:"all"},i.setCategory=i.setCategory.bind(i),i}return r(t,e),t.prototype.setCategory=function(e){this.setState({category:e})},t.prototype.render=function(){var e=this;return l.default.createElement("div",{className:"projects-categories"},l.default.createElement("h3",null,"Web Development  Portfolio"),l.default.createElement("p",null,"From Web Components and UI/UX animations to ASP.NET, E-commerce, CMS systems, and React.JS. Check out my latest portfolio projects."),l.default.createElement("h4",{onClick:function(){return e.setCategory("all")},className:"btn-dark"},"All"),l.default.createElement("h4",{onClick:function(){return e.setCategory("cms")},className:"btn-dark"},"CMS"),l.default.createElement("h4",{onClick:function(){return e.setCategory("ecommerce")},className:"btn-dark"},"E-Commerce"),l.default.createElement("h4",{onClick:function(){return e.setCategory("software")},className:"btn-dark"},"Software"),l.default.createElement("div",{className:"row"},this.props.allMarkDownFiles.map(function(t){var n=t.node;return l.default.createElement(h,{key:n.id,frontmatter:n.frontmatter,categoryState:e.state.category})})))},t}(s.Component),h=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return this.props.categoryState===this.props.frontmatter.category||"all"===this.props.categoryState?l.default.createElement("div",{className:"col-md-4"},l.default.createElement("article",{key:Math.random()},l.default.createElement(c.default,{to:this.props.frontmatter.path},l.default.createElement(f.default,{sizes:this.props.frontmatter.featuredImage.childImageSharp.sizes})))):l.default.createElement("p",{className:"hide"})},t}(s.Component);e.exports=p;t.ProjectQuery="** extracted graphql fragment **"},209:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var o=n(2),a=i(o),r=n(205),s=i(r),l=n(74),u=i(l),c=n(203),d=i(c),f=n(204),p=i(f),h=n(206),m=i(h),v=n(447);i(v);t.default=function(e){var t=e.data;return a.default.createElement("div",null,a.default.createElement(u.default,null),a.default.createElement(s.default,null),a.default.createElement(d.default,null),a.default.createElement("div",{className:"container projects-block"},a.default.createElement(m.default,{allMarkDownFiles:t.allMarkdownRemark.edges})),a.default.createElement(p.default,null))};t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-d381bc68048bfbc76847.js.map