webpackJsonp([0xcb0f60301f7b],{102:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function i(){return"undefined"==typeof S&&"undefined"!=typeof window&&window.IntersectionObserver&&(S=new window.IntersectionObserver(function(e){e.forEach(function(e){L.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),S}t.__esModule=!0;var n=a(24),s=l(n),o=a(42),r=l(o),d=a(41),u=l(d),c=a(76),f=l(c),p=a(75),m=l(p),h=a(2),y=l(h),g=a(6),b=l(g),v=function(e){var t=(0,m.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},E=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},S=void 0,L=[],j=function(e,t){i().observe(e),L.push([e,t])},I=null,N=function(){if(null!==I)return I;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return I=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",l=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",r=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+s+o+t+a+n+i+l+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+r+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},_=function(e){var t=e.style,a=e.onLoad,l=(0,f.default)(e,["style","onLoad"]);return y.default.createElement("img",(0,m.default)({},l,{onLoad:a,style:(0,m.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};_.propTypes={style:b.default.object,onLoad:b.default.func};var z=function(e){function t(a){(0,s.default)(this,t);var l=(0,r.default)(this,e.call(this,a)),i=!0,n=!0,o=!1,d=E(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!1,o=!0),"undefined"==typeof window&&(i=!1,n=!1),l.state={isVisible:i,imgLoaded:n,IOSupported:o},l.handleRef=l.handleRef.bind(l),l}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&j(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,l=t.alt,i=t.className,n=t.outerWrapperClassName,s=t.style,o=void 0===s?{}:s,r=t.imgStyle,d=void 0===r?{}:r,u=t.placeholderStyle,c=void 0===u?{}:u,f=t.sizes,p=t.resolutions,h=t.backgroundColor,g=t.Tag,b=void 0;b="boolean"==typeof h?"lightgray":h;var w=(0,m.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d,c),E=(0,m.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(f){var S=f;return S.srcWebp&&S.srcSetWebp&&N()&&(S.src=S.srcWebp,S.srcSet=S.srcSetWebp),y.default.createElement(g,{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===o.position?"initial":"relative"}},y.default.createElement(g,{className:(i?i:"")+" gatsby-image-wrapper",style:(0,m.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef},y.default.createElement(g,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),S.base64&&y.default.createElement(_,{alt:l,title:a,src:S.base64,style:w}),S.tracedSVG&&y.default.createElement(_,{alt:l,title:a,src:S.tracedSVG,style:w}),b&&y.default.createElement(g,{title:a,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&y.default.createElement(_,{alt:l,title:a,srcSet:S.srcSet,src:S.src,sizes:S.sizes,style:E,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,m.default)({alt:l,title:a},S))}})))}if(p){var L=p,j=(0,m.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},o);return"inherit"===o.display&&delete j.display,L.srcWebp&&L.srcSetWebp&&N()&&(L.src=L.srcWebp,L.srcSet=L.srcSetWebp),y.default.createElement(g,{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===o.position?"initial":"relative"}},y.default.createElement(g,{className:(i?i:"")+" gatsby-image-wrapper",style:j,ref:this.handleRef},L.base64&&y.default.createElement(_,{alt:l,title:a,src:L.base64,style:w}),L.tracedSVG&&y.default.createElement(_,{alt:l,title:a,src:L.tracedSVG,style:w}),b&&y.default.createElement(g,{title:a,style:{backgroundColor:b,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&y.default.createElement(_,{alt:l,title:a,width:L.width,height:L.height,srcSet:L.srcSet,src:L.src,style:E,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,m.default)({alt:l,title:a,width:L.width,height:L.height},L))}})))}return null},t}(y.default.Component);z.defaultProps={fadeIn:!0,alt:"",Tag:"div"},z.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,placeholderStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=z},106:function(e,t,a){!function(t,a){e.exports=a()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,l=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,n=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,o=s&&s(Object);return function r(d,u,c){if("string"!=typeof u){if(o){var f=s(u);f&&f!==o&&r(d,f,c)}var p=l(u);i&&(p=p.concat(i(u)));for(var m=0;m<p.length;++m){var h=p[m];if(!(e[h]||t[h]||c&&c[h])){var y=n(u,h);try{a(d,h,y)}catch(e){}}}return d}return d}})},74:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=a(2),n=l(i),s=a(65),o=l(s),r=function(){return n.default.createElement("header",null,n.default.createElement("div",null,n.default.createElement("ul",null,n.default.createElement("li",{className:"animated slideInDown"},n.default.createElement(o.default,{to:"/"},"Home")),n.default.createElement("li",{className:"animated slideInDown"},n.default.createElement(o.default,{to:"/"},"Skills")),n.default.createElement("li",{className:"animated slideInDown"},n.default.createElement(o.default,{to:"/"},"Work")),n.default.createElement("li",{className:"animated slideInDown"},n.default.createElement(o.default,{to:"/page-2"},"About")),n.default.createElement("li",{className:"animated slideInDown"},n.default.createElement(o.default,{to:"/"},"Contact")))))};t.default=r,e.exports=t.default},209:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.data,a=t.markdownRemark;return s.default.createElement("div",null,s.default.createElement(r.default,null),s.default.createElement("div",{className:"post-page"},s.default.createElement("div",{className:"container"},s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"col-md-8"},s.default.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}})),s.default.createElement("div",{className:"col-md-4"},s.default.createElement(u.default,{sizes:a.frontmatter.sidebarImage.childImageSharp.sizes}))))))}t.__esModule=!0,t.postQuery=void 0,t.default=i;var n=a(2),s=l(n),o=a(74),r=l(o),d=a(102),u=l(d);t.postQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-posts-js-f87e5c734b38fed46c60.js.map