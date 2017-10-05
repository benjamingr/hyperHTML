var $=function(e,t){"use strict";function n(e){return arguments.length<2?null==e?F("html"):"string"==typeof e?i(null,e):"raw"in e?F("html")(e):"nodeType"in e?r(e):X(e,"html"):("raw"in e?F("html"):i).apply(null,arguments)}function r(e){return c.bind(e)}function i(e,t){return arguments.length<1?F("html"):null==e?F(t||"html"):X(e,t||"html")}function o(){}function a(e,n){return this.node=e,this.childNodes=n,t.aura(this,n)}function c(e){var t=Ae.get(this);return t&&t.template===ce(e)||(t=q.apply(this,arguments),Ae.set(this,t)),W.apply(t.updates,arguments),this}function u(e,t,n){var r,i,o,a=e.ownerElement,c="data"===n,u=!c&&/^on/.test(n),l=c||S(a,n)&&!Y.test(n),s=u?n.slice(2):"",f=l||u,h=l&&(c||n in a);return(u||h)&&(t.push(a,n),u&&(s===se||s===fe?ke.add(a):n.toLowerCase()in a&&(s=s.toLowerCase()))),l&&(h||(o=Oe.get(a),o||(o={_:Object.create(null),$:function(){Oe.delete(a);for(var e in this._)this._[e].$()}},Oe.set(a,o)),o._[n]={_:null,$:function(){h=!0,i(this._)}}),i=function(t){h?r!==t&&(r=t,a[n]!==t&&(null==t?(a[n]=null,a.removeAttribute(n)):a[n]=t)):(e.value=t,o._[n]._=t,n in a&&o.$())}),u?function(e){r!==e&&(r&&a.removeEventListener(s,r,!1),r=e,e&&a.addEventListener(s,e,!1))}:l?i:function(t){r!==t&&(r=t,e.value!==t&&(null==t?f||(f=!0,a.removeAttributeNode(e)):(e.value=t,f&&(f=!1,a.setAttributeNode(e)))))}}function l(e){var t;return function(n){n!==t&&(t=n,e.textContent=n)}}function s(e,t,n){var r;return function i(a){switch(typeof a){case"string":case"number":case"boolean":var c=t.length;1===c&&t[0].nodeType===G?r!==a&&(r=a,t[0].textContent=a):(r=a,c?n.splice(0,c,w(e,a)):t[0]=e.parentNode.insertBefore(w(e,a),e));break;case"function":i(a(e.parentNode,t,0));break;case"object":case"undefined":if(null==a){r=a,i("");break}a instanceof o&&(a=a.render());default:if(r=a,ve(a)){var c=a.length;if(0===c)n.splice(0);else switch(typeof a[0]){case"string":case"number":case"boolean":i({html:a});break;case"function":for(var u=e.parentNode,l=0;l<c;l++)a[l]=a[l](u,t,l);i(a.concat.apply([],a));break;case"object":if(ve(a[0])&&(a=a.concat.apply([],a)),k(a[0])){Promise.all(a).then(i);break}for(var l=0,c=a.length;l<c;l++)a[l]instanceof o&&(a[l]=a[l].render());default:L(n,a)}}else if(_(a))L(n,a.nodeType===K?ue.call(a.childNodes):[a]);else if(k(a))a.then(i);else if("placeholder"in a)C(i,a);else if("text"in a)i(String(a.text));else if("any"in a)i(a.any);else if("html"in a){var s=[].concat(a.html).join("");n.splice(0);var f=m(e,s);t.push.apply(t,f.childNodes),e.parentNode.insertBefore(f,e)}else i("length"in a?ue.call(a):T(a))}}}function f(e,t,n){for(var r,i,o,a,c=Object.create(null),u=e.attributes,l=0,s=u.length;l<s;l++)a=u[l],a.value===ee&&(r=a.name,r in c?(e.removeAttributeNode(a),c[r].value="",e.setAttributeNode(c[r]),s--,l--):(i=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1"),o=e.attributes,c[r]=o[i]||o[i.toLowerCase()],t.push(D("attr",c[r],i))))}function h(e,t,n){for(var r,i=e.childNodes,o=i.length,a=0;a<o;a++)switch(r=i[a],r.nodeType){case Z:f(r,t,n),h(r,t,n);break;case J:r.textContent===ee&&(n.shift(),t.push(D("any",r)));break;case G:Y.test(e.nodeName)&&ge.call(r.textContent)===te&&(n.shift(),t.push(D("text",e)))}}function d(e){return le[e]}function p(e){return{html:e}}function v(e){for(var t,n=[],r=e.childNodes,i=0,o=r.length;i<o;i++)t=r[i],t.nodeType!==Z&&0===ge.call(t.textContent).length||n.push(t);return 1===n.length?n[0]:n}function g(e){return e.createDocumentFragment()}function m(e,t){return(Q in e?b:y)(e,t.replace(Se,Te))}function y(e,t){var n,r=e.ownerDocument,i=r.createElement("template"),o="content"in i,a=!1;if(o||(n=g(r),a=/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)),a){var c=RegExp.$1;i.innerHTML="<table>"+t+"</table>",Ne(n,ue.call(i.querySelectorAll(c)))}else i.innerHTML=t,o?n=i.content:Ne(n,ue.call(i.childNodes));return n}function b(e,t){var n=e.ownerDocument,r=g(n);if(oe||ae){var i=n.createElement("div");i.innerHTML='<svg xmlns="'+U+'">'+t+"</svg>",Ne(r,ue.call(i.firstChild.childNodes))}else{var i=n.createElementNS(U,"svg");i.innerHTML=t,Ne(r,ue.call(i.childNodes))}return r}function w(e,t){return e.ownerDocument.createTextNode(t)}function N(e,t){for(var n,r,i=t===se,o=0,a=e.length;o<a;o++)r=e[o],r.nodeType===Z&&(n=E(r,i,t,n))}function E(e,t,n,r){if(ke.has(e))e.dispatchEvent(r||(r=new ne(n)));else if(t&&Oe.has(e))Oe.get(e).$();else for(var i=Ee(e),o=0,a=i.length;o<a;o++)r=E(i[o],t,n,r);return r}function x(e){var t=n.document,r=t.customElements||t.defaultView.customElements;return r&&r.get(e.nodeName.toLowerCase())}function S(e,t){var n=!(Q in e);if(n&&/-/.test(e.nodeName)){var r=x(e);r&&(e=r.prototype)}return n&&t in e}function C(e,t){e(t.placeholder),"text"in t?Promise.resolve(t.text).then(String).then(e):"any"in t?Promise.resolve(t.any).then(e):"html"in t?Promise.resolve(t.html).then(p).then(e):Promise.resolve(T(t)).then(e)}function T(e){for(var t,n=0,r=be.length;n<r;n++)if(t=be[n],e.hasOwnProperty(t))return ye[t](e[t])}function _(e){return"ELEMENT_NODE"in e}function k(e){return null!=e&&"then"in e}function A(e,t){var n="_"+e+"$";return{get:function(){return this[n]||(this[e]=t.call(this,e))},set:function(e){me(this,n,{configurable:!0,value:e})}}}function L(e,r){var i=0,o=e.length;if(r.length!==o)t(e,r,n.MAX_LIST_SIZE);else for(;i<o--;i++)if(e[o]!==r[o]||e[i]!==r[i])return void t(e,r,n.MAX_LIST_SIZE)}function M(e){for(var t=0,n=e.length;t<n;t++)e[t++].removeAttribute(e[t])}function O(e,t,n,r){var i;switch(e.type){case"any":i=s(t,r,new a(t,r));break;case"attr":i=u(t,n,e.name);break;case"text":i=l(t)}return i}function D(e,t,n){return{type:e,path:B(t),name:n}}function $(e){var t="_"+e.join(te);return we[t]||(we[t]=e)}function j(e,t){var n=t.previousSibling;n&&n.nodeType===G&&(e.removeChild(n),j(e,t))}function I(e,t,n){n?e.insertBefore(t,n):e.appendChild(t)}function P(e,t,n,r){for(var i=e,o=e.ownerDocument,a=n.path,c=xe(t,a),u=0,l=a.length;u<l;u++)switch(a[u++]){case"attributes":var s=c.name;e.hasAttribute(s)||e.setAttribute(s,""),i=e.attributes[s];break;case"childNodes":var f=Ee(e),h=Ee(c.parentNode);i=Ie(c);var d=i?a.indexOf.call(h,i)+1:-1;i=je(c);var p=i?a.indexOf.call(h,i):-1;switch(i=o.createComment(ee),!0){case p<0:p=f.length;break;case d<0:d=0;default:p=-(h.length-p)}r.push.apply(r,ue.call(f,d,p)),r.length?I(e,i,je(r[r.length-1])):I(e,i,ue.call(f,p)[0]),0===r.length&&j(e,i);break;default:i=Ee(e)[a[u]]||e.appendChild(e.ownerDocument.createElement(xe(t,a.slice(0,u+1)).nodeName)),e=i}return i}function H(e,t){for(var n,r,i=[],o=[],a=0,c=t.length;a<c;a++)r=[],n=t[a],i[a]=O(n,P(this,e,n,r),o,r);return M(o),i}function z(e){var t=[],n=m(this,e.join(te)),r={fragment:n,paths:t};return h(n,t,e.slice()),Me.set(e,r),r}function B(e){var t,n=[];switch(e.nodeType){case Z:case K:t=e;break;case J:t=e.parentNode,n.unshift("childNodes",n.indexOf.call(t.childNodes,e));break;case V:default:t=e.ownerElement,n.unshift("attributes",e.name)}for(e=t;t=t.parentNode;e=t)n.unshift("children",n.indexOf.call(Ee(t),e));return n}function R(e,t){for(var n,r=[],i=[],o=0,a=t.length;o<a;o++)n=t[o],r[o]=O(n,xe(e,n.path),i,[]);return M(i),r}function W(){for(var e=1,t=arguments.length;e<t;e++)this[e-1](arguments[e])}function q(e){e=ce(e);var t,n=Me.get(e)||z.call(this,e);if(De){var r=$e(n.fragment);t=R.call(this,r,n.paths),this.textContent="",this.appendChild(r)}else t=H.call(this,n.fragment,n.paths);return{template:e,updates:t}}function F(e){function t(t){u=g(t),c="svg"===e?t.createElementNS(U,"svg"):u,l=r(c)}function i(){return s&&(s=!1,"svg"===e&&Ne(u,ue.call(c.childNodes)),a=v(u)),a}var o,a,c,u,l,s,f;return"adopt"===e?function(r){var a=arguments;return r=ce(r),f!==r&&(s=!0,f=r,o=function(r,o,f){return s&&(f<o.length?(c=o[f],u={ownerDocument:c.ownerDocument,childNodes:[c],children:[c]},l=n.adopt(u)):(Q in r&&(e="svg"),t(r.ownerDocument))),l.apply(null,a),i()}),o}:function(e){return e=ce(e),f!==e&&(s=!0,f=e,t(n.document)),l.apply(null,arguments),i()}}function X(e,t){var n=Le.get(e),r=t.indexOf(":"),i=t;return-1<r&&(i=t.slice(r+1),t=t.slice(0,r)||"html"),n||(n={},Le.set(e,n)),n[i]||(n[i]=F(t))}/*! (c) 2017 Andrea Giammarchi @WebReflection, (ISC) */
n.document=e,n.hyper=n,n.adopt=function(e){return function(){return De=!1,c.apply(e,arguments),De=!0,e}},n.bind=r,n.define=function(e,t){e in ye||be.push(e),ye[e]=t},n.escape=function(e){return e.replace(/[&<>'"]/g,d)},n.wire=i,n.Component=o,Object.defineProperties(o.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:A("html",F),svg:A("svg",F),state:A("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},setState:{value:function(e){var t=this.state,n="function"==typeof e?e.call(this,t):e;for(var r in n)t[r]=n[r];this.render()}}});var Z=1,V=2,G=3,J=8,K=11,Q="ownerSVGElement",U="http://www.w3.org/2000/svg",Y=/^style$/i,ee="_hyper: "+(Math.random()*new Date|0)+";",te="\x3c!--"+ee+"--\x3e";a.prototype.splice=function(e){for(var t,n=this.node,r=this.childNodes,i=r[e+(arguments[1]||0)]||n,o=r.splice.apply(r,arguments),a=n.parentNode,c=0,u=o.length;c<u;c++)t=o[c],r.indexOf(t)<0&&a.removeChild(t);if(c=2,u=arguments.length,c<u){if(u-c==1)t=arguments[c];else for(t=g(a.ownerDocument);c<u;)t.appendChild(arguments[c++]);a.insertBefore(t,i)}return o};var ne,re=g(e),ie="object"==typeof navigator&&/Firefox\/(\d+)/.test(navigator.userAgent)&&parseFloat(RegExp.$1)<55,oe=function(){var t=e.createElement("p");return t.innerHTML='<i data-i="" class=""></i>',/class/i.test(t.firstChild.attributes[0].name)}(),ae=!("children"in re),ce=function(e){return(ce=e.propertyIsEnumerable("raw")||ie?$:function(e){return e})(e)},ue=[].slice,le={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},se="connected",fe="dis"+se;try{new Event(se),ne=Event}catch(e){ne=function(e){var t=n.document.createEvent("Event");return t.initEvent(e,!1,!1),t}}try{new MutationObserver(function(e){for(var t,n=0,r=e.length;n<r;n++)t=e[n],N(t.removedNodes,fe),N(t.addedNodes,se)}).observe(e,{subtree:!0,childList:!0})}catch(t){e.addEventListener("DOMNodeInserted",function(e){N([e.target],se)},!1),e.addEventListener("DOMNodeRemoved",function(e){N([e.target],fe)},!1)}var $,he=typeof WeakMap==typeof he?function(){return{delete:function(e){delete e[ee]},get:function(e){return e[ee]},has:function(e){return ee in e},set:function(e,t){Object.defineProperty(e,ee,{configurable:!0,value:t})}}}:WeakMap,de=typeof WeakSet==typeof de?function(){var e=new he;return{add:function(t){e.set(t,!0)},has:function(t){return!0===e.get(t)}}}:WeakSet,pe=typeof Map==typeof pe?function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r}}}:Map,ve=Array.isArray||function(){var e={}.toString,t=e.call([]);return function(n){return e.call(n)===t}}(),ge="_hyper: ".trim||function(){return this.replace(/^\s+|\s+$/g,"")},me=Object.defineProperty,ye={},be=[],we={},Ne="append"in re?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=0,r=t.length;n<r;n++)e.appendChild(t[n])},Ee=ae||oe?function(e){for(var t,n=[],r=e.childNodes,i=0,o=0,a=r.length;o<a;o++)t=r[o],t.nodeType===Z&&(n[i++]=t);return n}:function(e){return e.children},xe=oe||ae?function(e,t){for(var n,r=0,i=t.length;r<i;r++)switch(n=t[r++]){case"children":e=Ee(e)[t[r]];break;default:e=e[n][t[r]]}return e}:function(e,t){for(var n=0,r=t.length;n<r;n++)e=e[t[n++]][t[n]];return e},Se=/(<[a-z]+[a-z0-9:_-]*)((?:[^\S]+[a-z0-9:_-]+(?:=(?:'.*?'|".*?"|<.+?>|\S+))?)+)([^\S]*\/?>)/gi,Ce=new RegExp("([^\\S][a-z]+[a-z0-9:_-]*=)(['\"]?)"+te+"\\2","gi"),Te=function(e,t,n,r){return t+n.replace(Ce,_e)+r},_e=function(e,t,n){return t+(n||'"')+ee+(n||'"')},ke=new de,Ae=new he,Le=new he,Me=new pe,Oe=new he,De=!0,$e=function(){return re.appendChild(w(re,"g")),re.appendChild(w(re,"")),1===re.cloneNode(!0).childNodes.length?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=0,i=n.length;r<i;r++)t.appendChild($e(n[r]));return t}:function(e){return e.cloneNode(!0)}}(),je=oe?function(e){for(;e=e.nextSibling;)if(e.nodeType===Z)return e}:function(e){return e.nextElementSibling},Ie=oe?function(e){for(;e=e.previousSibling;)if(e.nodeType===Z)return e}:function(e){return e.previousElementSibling};return n.MAX_LIST_SIZE=1e3,n}(document,function(){"use strict";function e(e,n,o){var a=e.length,c=n.length,u=(o||1/0)<Math.sqrt((a||1)*(c||1));return a<1||u?void((c||u)&&e.splice.apply(e,[0,a].concat(n))):c<1?void e.splice(0):void i(e,r(e,n,t(e,n)))}function t(e,t){var n,r,i,o=e.length+1,a=t.length+1,c=o*a,l=0,s=0,f=0,h=0,d=0,p=0,v=new u(c);for(v[0]=0;++l<a;)v[l]=l;for(;++s<o;){for(f=l=0,p=d,d=s*a,v[d+l]=s;++l<a;)n=v[p+l]+1,r=v[d+f]+1,i=v[p+f]+(e[h]==t[f]?0:1),v[d+l]=n<r?n<i?n:i:r<i?r:i,++f;h=s}return v}function n(e,t,n,r,i,o){e.unshift({type:t,x:n,y:r,count:i,items:o})}function r(e,t,r){for(var i,u,l,s,f,h,d=[],p=e.length+1,v=t.length+1,g=p-1,m=v-1;m&&g;)f=g*v+m,h=f-v,i=r[f],u=r[h],l=r[f-1],s=r[h-1],s<=l&&s<=u&&s<=i?(m--,g--,s<i&&n(d,c,m,g,1,[t[m]])):l<=u&&l<=i?(m--,n(d,a,m,g,0,[t[m]])):(g--,n(d,o,m,g,1,[]));for(;m--;)n(d,a,m,g,0,[t[m]]);for(;g--;)n(d,o,m,g,1,[]);return d}function i(e,t){var n,r,i,c=0,u=1,l=t.length;if(l){for(i=r=t[0];u<l;)n=t[u++],r.type===n.type&&n.x-r.x<=1&&n.y-r.y<=1?(i.count+=n.count,i.items=i.items.concat(n.items)):(e.splice.apply(e,[i.y+c,i.count].concat(i.items)),c+=i.type===a?i.items.length:i.type===o?-i.count:0,i=n),r=n;e.splice.apply(e,[i.y+c,i.count].concat(i.items))}}/*! Copyright (c) 2017, Andrea Giammarchi, @WebReflection */
var o="del",a="ins",c="sub",u=/^u/.test(typeof Int32Array)?Array:Int32Array;return e.aura=function(e,t){var n=t.splice;return t.splice=function r(){t.splice=n;var i=e.splice.apply(e,arguments);return t.splice=r,i},t},e}());
export default $;
export const adopt=$.adopt;
export const bind=$.bind;
export const define=$.define;
export const escape=$.escape;
export const hyper=$.hyper;
export const wire=$.wire;
export const Component=$.Component;