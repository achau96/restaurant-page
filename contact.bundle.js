(()=>{"use strict";var n={424:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(645),o=t.n(r),i=t(667),a=t.n(i),c=new URL(t(408),t.b),s=o()((function(n){return n[1]})),u=a()(c);s.push([n.id,"body {\n  background-image: url("+u+");\n  background-size: auto;\n  display:flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.navBar {\n  display:flex;\n  justify-content: center;\n  width:100%;\n  background-color: lightgreen;\n  overflow: hidden;\n  top:0;\n  position: fixed;\n}\n\n.navBar a {\n  padding: 14px 16px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 17px;\n  color:whitesmoke;\n}\n\n.navBar a:hover{\n  background-color: #ddd;\n  color: black;\n}\n\n.active {\n  background-color: #04AA6D;\n  color: white;\n}\n\n#content {\n  display:flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 8vh;\n  background-color: aliceblue;\n  width:70%;\n  border-radius: 25px;\n}\n\n.form {\n  margin: 2vh;\n  padding: 5px;\n  text-align: center;\n}\n\ninput[type=text],input[type=email],textarea {\n  width:90%;\n  padding:12px;\n  border: 1px solid #ccc;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n}\n\n.deal {\n  font-size: 3.5vh;\n  color: red;\n  font-weight: bolder;\n}\n\n.images {\n border-radius: 25px;\n max-width: 500px;\n height: auto;\n margin-top:6px;\n margin-bottom: 16px;\n}\n\n.submit {\n  min-height: 40px;\n  min-width: 80px;\n  background-color: rgb(14, 201, 14);\n  transition: .5s ease-in-out;\n  border-radius: 25px;\n}\n\n.submit:hover{\n  cursor: pointer;\n  background-color: greenyellow;\n  transform: scale(1.1);\n}\n\n.grid{\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n  column-gap: 7vw;\n  row-gap: 3vh;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.item {\n  text-align: center;\n}\n\n.menu {\n  max-height: 200px;\n  max-width: 200px;\n  border-radius: 25px;\n}\n",""]);const l=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},548:(n,e,t)=>{var r=t(379),o=t.n(r),i=t(795),a=t.n(i),c=t(569),s=t.n(c),u=t(565),l=t.n(u),d=t(216),p=t.n(d),f=t(589),m=t.n(f),g=t(424),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),o()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(e[p].references++,e[p].updater(f)):e.push({identifier:d,updater:o(f,r),references:1}),a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),u=0;u<i.length;u++){var l=t(i[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},228:(n,e,t)=>{n.exports=t.p+"45c70f4f152dee658bd0.jpeg"},408:(n,e,t)=>{n.exports=t.p+"011b4ebf11ac0e7e6514.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t(548),t(228)})();