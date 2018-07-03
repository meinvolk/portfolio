webpackJsonp([35783957827783],{97:function(e,t,n){"use strict";function a(e){return e}function o(e,t,n){function o(e,t){var n=N.hasOwnProperty(t)?N[t]:null;D.hasOwnProperty(t)&&s("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&s("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function r(e,n){if(n){s("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),s(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var a=e.prototype,r=a.__reactAutoBindPairs;n.hasOwnProperty(c)&&b.mixins(e,n.mixins);for(var l in n)if(n.hasOwnProperty(l)&&l!==c){var i=n[l],u=a.hasOwnProperty(l);if(o(u,l),b.hasOwnProperty(l))b[l](e,i);else{var f=N.hasOwnProperty(l),m="function"==typeof i,E=m&&!f&&!u&&n.autobind!==!1;if(E)r.push(l,i),a[l]=i;else if(u){var h=N[l];s(f&&("DEFINE_MANY_MERGED"===h||"DEFINE_MANY"===h),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",h,l),"DEFINE_MANY_MERGED"===h?a[l]=d(a[l],i):"DEFINE_MANY"===h&&(a[l]=p(a[l],i))}else a[l]=i}}}else;}function u(e,t){if(t)for(var n in t){var a=t[n];if(t.hasOwnProperty(n)){var o=n in b;s(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var r=n in e;if(r){var l=g.hasOwnProperty(n)?g[n]:null;return s("DEFINE_MANY_MERGED"===l,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=d(e[n],a))}e[n]=a}}}function f(e,t){s(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(s(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function d(e,t){return function(){var n=e.apply(this,arguments),a=t.apply(this,arguments);if(null==n)return a;if(null==a)return n;var o={};return f(o,n),f(o,a),o}}function p(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function E(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var a=t[n],o=t[n+1];e[a]=m(e,o)}}function h(e){var t=a(function(e,a,o){this.__reactAutoBindPairs.length&&E(this),this.props=e,this.context=a,this.refs=i,this.updater=o||n,this.state=null;var r=this.getInitialState?this.getInitialState():null;s("object"==typeof r&&!Array.isArray(r),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=r});t.prototype=new w,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],y.forEach(r.bind(null,t)),r(t,_),r(t,e),r(t,v),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),s(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in N)t.prototype[o]||(t.prototype[o]=null);return t}var y=[],N={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},b={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)r(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=l({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=l({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=d(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=l({},e.propTypes,t)},statics:function(e,t){u(e,t)},autobind:function(){}},_={componentDidMount:function(){this.__isMounted=!0}},v={componentWillUnmount:function(){this.__isMounted=!1}},D={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},w=function(){};return l(w.prototype,e.prototype,D),h}var r,l=n(4),i=n(34),s=n(1),c="mixins";r={},e.exports=o},151:function(e,t){},158:function(e,t,n){!function(t,n){e.exports=n()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,a=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,r=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,i=l&&l(Object);return function s(c,u,f){if("string"!=typeof u){if(i){var d=l(u);d&&d!==i&&s(c,d,f)}var p=a(u);o&&(p=p.concat(o(u)));for(var m=0;m<p.length;++m){var E=p[m];if(!(e[E]||t[E]||f&&f[E])){var h=r(u,E);try{n(c,E,h)}catch(e){}}}return c}return c}})},4:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function a(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==a.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;e.exports=a()?Object.assign:function(e,t){for(var a,i,s=n(e),c=1;c<arguments.length;c++){a=Object(arguments[c]);for(var u in a)r.call(a,u)&&(s[u]=a[u]);if(o){i=o(a);for(var f=0;f<i.length;f++)l.call(a,i[f])&&(s[i[f]]=a[i[f]])}}return s}},199:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(5),r=a(o),l=n(63);a(l);n(151);var i=function(){return r.default.createElement("div",{id:"page-down",className:"feature-block"},r.default.createElement("h2",null,"This is going to be the tagline for the featured text block and an important statement to my audience."),r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"feature-block-item col-md-4"},r.default.createElement("i",{className:"fa fa-paint-brush"}),r.default.createElement("h3",null,"Web Design"),r.default.createElement("p",null,"I have been an artist for almost a decade. Shoot me an idea and I will put it on the art board.")),r.default.createElement("div",{className:"feature-block-item col-md-4"},r.default.createElement("i",{className:"fa fa-code"}),r.default.createElement("h3",null,"Web Development"),r.default.createElement("p",null,"Web development has been the keystone of my education and professional career. Leave the coding to me.")),r.default.createElement("div",{className:"feature-block-item col-md-4"},r.default.createElement("i",{className:"fa fa-cogs"}),r.default.createElement("h3",null,"Software"),r.default.createElement("p",null,"Business problems? I write custom software for small businesses that solve challenges in all walks of life.")))))};t.default=i,e.exports=t.default},200:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(5),r=a(o),l=n(63),i=a(l);n(151);var s=function(){return r.default.createElement("div",{className:"general-hero"},r.default.createElement("div",{className:"hero-image"},r.default.createElement("div",{className:"hero-content"},r.default.createElement("h1",null,"William Bensinger"),r.default.createElement("h2",null,"I am a full-stack developer specializing in web and software applications. I also draw, a lot."),r.default.createElement("div",{className:"list-icons"},r.default.createElement(i.default,{to:"https://www.linkedin.com/in/william-bensinger-506734129/",target:"_blank"},r.default.createElement("i",{className:"fa fa-linkedin"})),r.default.createElement(i.default,{to:"https://github.com/meinvolk",target:"_blank"},r.default.createElement("i",{className:"fa fa-github"})),r.default.createElement(i.default,{to:"https://www.instagram.com/bensingerbilly/",target:"_blank"},r.default.createElement("i",{className:"fa fa-instagram"})),r.default.createElement(i.default,{to:"https://www.facebook.com/billy.bensinger.9",target:"_blank"},r.default.createElement("i",{className:"fa fa-facebook-f"})))),r.default.createElement("div",{className:"down-icon"},r.default.createElement(i.default,{to:"#page-down"},r.default.createElement("i",{className:"fa fa-chevron-circle-down animated bounce"})))))};t.default=s,e.exports=t.default},201:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(5),r=a(o),l=n(63),i=a(l),s=function(){return r.default.createElement("header",null,r.default.createElement("div",null,r.default.createElement("ul",null,r.default.createElement("li",{className:"animated slideInDown"},r.default.createElement(i.default,{to:"/"},"Home")),r.default.createElement("li",{className:"animated slideInDown"},r.default.createElement(i.default,{to:"/page-2"},"About")),r.default.createElement("li",{className:"animated slideInDown"},r.default.createElement(i.default,{to:"/"},"Skills")),r.default.createElement("li",{className:"animated slideInDown"},r.default.createElement(i.default,{to:"/"},"Work")),r.default.createElement("li",{className:"animated slideInDown"},r.default.createElement(i.default,{to:"/"},"Contact")))))};t.default=s,e.exports=t.default},204:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(5),r=a(o),l=n(63),i=(a(l),n(200)),s=a(i),c=n(201),u=a(c),f=n(199),d=a(f),p=function(){return r.default.createElement("div",null,r.default.createElement(u.default,null),r.default.createElement(s.default,null),r.default.createElement(d.default,null))};t.default=p,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-10c0b8c82cbd8ad57d46.js.map