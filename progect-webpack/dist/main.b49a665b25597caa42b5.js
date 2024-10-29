!function(){"use strict";var t={16:function(t,n,e){var r=e(601),o=e.n(r),i=e(314),a=e.n(i)()(o());a.push([t.id,"html, body {\n  margin: 0;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n}\n\n.img {\n  max-width: 400px;\n  margin: 0 auto;\n}",""]),n.A=a},314:function(t){t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<t.length;s++){var f=[].concat(t[s]);r&&a[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),e&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=e):f[2]=e),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),n.push(f))}},n}},601:function(t){t.exports=function(t){return t[1]}},72:function(t){var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var u=t[c],s=r.base?u[0]+r.base:u[0],f=i[s]||0,p="".concat(s," ").concat(f);i[s]=f+1;var l=e(p),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==l)n[l].references++,n[l].updater(d);else{var m=o(d,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var u=r(t,o),s=0;s<i.length;s++){var f=e(i[s]);0===n[f].references&&(n[f].updater(),n.splice(f,1))}i=u}}},659:function(t){var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:function(t){t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:function(t,n,e){t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:function(t){t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:function(t){t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return t[r](i,i.exports,e),i.exports}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,a(r.key),r)}}function i(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t){var n=function(t){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var e=n.call(t,"string");if("object"!=r(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==r(n)?n:n+""}e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}(),e.nc=void 0;var c=i((function t(n,e,r){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=n,this.age=e,this.country=r})),u=e(72),s=e.n(u),f=e(825),p=e.n(f),l=e(659),d=e.n(l),m=e(56),v=e.n(m),y=e(540),h=e.n(y),b=e(113),g=e.n(b),w=e(16),S={};S.styleTagTransform=g(),S.setAttributes=v(),S.insert=d().bind(null,"head"),S.domAPI=p(),S.insertStyleElement=h(),s()(w.A,S),w.A&&w.A.locals&&w.A.locals;var x=e.p+"d94a38d1456f33fbbe24.jpg",T=new c("Elena",19,"Russia");console.log(T),document.querySelector(".img img").src=x}();