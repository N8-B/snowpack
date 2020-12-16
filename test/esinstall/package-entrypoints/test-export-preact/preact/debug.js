import { options as n, Fragment as p$1, Component as d$1 } from '../preact.js';

"undefined"!=typeof window&&window.__PREACT_DEVTOOLS__&&window.__PREACT_DEVTOOLS__.attachPreact("10.5.5",n,{Fragment:p$1,Component:d$1});

var o={};function r(){o={};}function a(n){return n.type===p$1?"Fragment":"function"==typeof n.type?n.type.displayName||n.type.name:"string"==typeof n.type?n.type:"#text"}var i=[],s=[];function c(){return i.length>0?i[i.length-1]:null}var l=!1;function u(n){return "function"==typeof n.type&&n.type!=p$1}function f(n){for(var e=[n],t=n;null!=t.__o;)e.push(t.__o),t=t.__o;return e.reduce(function(n,e){n+="  in "+a(e);var t=e.__source;return t?n+=" (at "+t.fileName+":"+t.lineNumber+")":l||(l=!0,console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")),n+"\n"},"")}var p="function"==typeof WeakMap,d=d$1.prototype.setState;d$1.prototype.setState=function(n,e){return null==this.__v?null==this.state&&console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n'+f(c())):null==this.__P&&console.warn('Can\'t call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+f(this.__v)),d.call(this,n,e)};var h=d$1.prototype.forceUpdate;function y(n){var e=n.props,t=a(n),o="";for(var r in e)if(e.hasOwnProperty(r)&&"children"!==r){var i=e[r];"function"==typeof i&&(i="function "+(i.displayName||i.name)+"() {}"),i=Object(i)!==i||i.toString?i+"":Object.prototype.toString.call(i),o+=" "+r+"="+JSON.stringify(i);}var s=e.children;return "<"+t+o+(s&&s.length?">..</"+t+">":" />")}d$1.prototype.forceUpdate=function(n){return null==this.__v?console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n'+f(c())):null==this.__P&&console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+f(this.__v)),h.call(this,n)},function(){!function(){var e=n.__b,t=n.diffed,o=n.__,r=n.vnode,a=n.__r;n.diffed=function(n){u(n)&&s.pop(),i.pop(),t&&t(n);},n.__b=function(n){u(n)&&i.push(n),e&&e(n);},n.__=function(n,e){s=[],o&&o(n,e);},n.vnode=function(n){n.__o=s.length>0?s[s.length-1]:null,r&&r(n);},n.__r=function(n){u(n)&&s.push(n),a&&a(n);};}();var e=!1,t=n.__b,r=n.diffed,c=n.vnode,l=n.__e,d=n.__,h=n.__h,m=p?{useEffect:new WeakMap,useLayoutEffect:new WeakMap,lazyPropTypes:new WeakMap}:null,v=[];n.__e=function(n,e,t){if(e&&e.__c&&"function"==typeof n.then){var o=n;n=new Error("Missing Suspense. The throwing component was: "+a(e));for(var r=e;r;r=r.__)if(r.__c&&r.__c.__c){n=o;break}if(n instanceof Error)throw n}try{l(n,e,t),"function"!=typeof n.then&&setTimeout(function(){throw n});}catch(n){throw n}},n.__=function(n,e){if(!e)throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");var t;switch(e.nodeType){case 1:case 11:case 9:t=!0;break;default:t=!1;}if(!t){var o=a(n);throw new Error("Expected a valid HTML node as a second argument to render.\tReceived "+e+" instead: render(<"+o+" />, "+e+");")}d&&d(n,e);},n.__b=function(n){var r=n.type,i=function n(e){return e?"function"==typeof e.type?n(e.__):e:{}}(n.__);if(e=!0,void 0===r)throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports"+y(n)+"\n\n"+f(n));if(null!=r&&"object"==typeof r){if(void 0!==r.__k&&void 0!==r.__e)throw new Error("Invalid type passed to createElement(): "+r+"\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My"+a(n)+" = "+y(r)+";\n  let vnode = <My"+a(n)+" />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n"+f(n));throw new Error("Invalid type passed to createElement(): "+(Array.isArray(r)?"array":r))}if("thead"!==r&&"tfoot"!==r&&"tbody"!==r||"table"===i.type?"tr"===r&&"thead"!==i.type&&"tfoot"!==i.type&&"tbody"!==i.type&&"table"!==i.type?console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent."+y(n)+"\n\n"+f(n)):"td"===r&&"tr"!==i.type?console.error("Improper nesting of table. Your <td> should have a <tr> parent."+y(n)+"\n\n"+f(n)):"th"===r&&"tr"!==i.type&&console.error("Improper nesting of table. Your <th> should have a <tr>."+y(n)+"\n\n"+f(n)):console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+y(n)+"\n\n"+f(n)),void 0!==n.ref&&"function"!=typeof n.ref&&"object"!=typeof n.ref&&!("$$typeof"in n))throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got ['+typeof n.ref+"] instead\n"+y(n)+"\n\n"+f(n));if("string"==typeof n.type)for(var s in n.props)if("o"===s[0]&&"n"===s[1]&&"function"!=typeof n.props[s]&&null!=n.props[s])throw new Error("Component's \""+s+'" property should be a function, but got ['+typeof n.props[s]+"] instead\n"+y(n)+"\n\n"+f(n));if("function"==typeof n.type&&n.type.propTypes){if("Lazy"===n.type.displayName&&m&&!m.lazyPropTypes.has(n.type)){var c="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var l=n.type();m.lazyPropTypes.set(n.type,!0),console.warn(c+"Component wrapped in lazy() is "+a(l));}catch(n){console.warn(c+"We will log the wrapped component's name once it is loaded.");}}var u=n.props;n.type.__f&&delete(u=function(n,e){for(var t in e)n[t]=e[t];return n}({},u)).ref,function(n,e,t,r,a){Object.keys(n).forEach(function(t){var i;try{i=n[t](e,t,r,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");}catch(n){i=n;}!i||i.message in o||(o[i.message]=!0,console.error("Failed prop type: "+i.message+(a&&"\n"+a()||"")));});}(n.type.propTypes,u,0,a(n),function(){return f(n)});}t&&t(n);},n.__h=function(n,t,o){if(!n||!e)throw new Error("Hook can only be invoked from render methods.");h&&h(n,t,o);};var b=function(n,e){return {get:function(){var t="get"+n+e;v&&v.indexOf(t)<0&&(v.push(t),console.warn("getting vnode."+n+" is deprecated, "+e));},set:function(){var t="set"+n+e;v&&v.indexOf(t)<0&&(v.push(t),console.warn("setting vnode."+n+" is not allowed, "+e));}}},w={nodeName:b("nodeName","use vnode.type"),attributes:b("attributes","use vnode.props"),children:b("children","use vnode.props.children")},g=Object.create({},w);n.vnode=function(n){var e=n.props;if(null!==n.type&&null!=e&&("__source"in e||"__self"in e)){var t=n.props={};for(var o in e){var r=e[o];"__source"===o?n.__source=r:"__self"===o?n.__self=r:t[o]=r;}}n.__proto__=g,c&&c(n);},n.diffed=function(n){n.__k&&n.__k.forEach(function(e){if(e&&void 0===e.type){delete e.__,delete e.__b;var t=Object.keys(e).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+t+"}.\n\n"+f(n))}});var t=n.__c;if(t&&t.__H){var o=t.__H;Array.isArray(o.__)&&o.__.forEach(function(e){if(e.__h&&(!e.__H||!Array.isArray(e.__H))){var t=a(n);console.warn("In "+t+" you are calling useMemo/useCallback without passing arguments.\nThis is a noop since it will not be able to memoize, it will execute it every render.\n\n"+f(n));}});}if(e=!1,r&&r(n),null!=n.__k)for(var i=[],s=0;s<n.__k.length;s++){var c=n.__k[s];if(c&&null!=c.key){var l=c.key;if(-1!==i.indexOf(l)){console.error('Following component has two or more children with the same key attribute: "'+l+'". This may cause glitches and misbehavior in rendering process. Component: \n\n'+y(n)+"\n\n"+f(n));break}i.push(l);}}};}();

export { r as resetPropWarnings };
