"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[826],{426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap);"]),i.push([n.id,"*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  color: #3d0240;\n  font-size: 16px;\n  font-family: 'Lato', Arial, Helvetica, sans-serif;\n}\n\nbody {\n  background-color: #fae3e3;\n}\n\nbody h1 {\n  margin: 50px;\n}\n\n.container {\n  display: grid;\n  margin: 0 auto;\n  width: 70%;\n  grid-template-columns: 1.5fr 1fr;\n  gap: 20px;\n}\n\n.score-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.refresh-div {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 20px;\n  gap: 10px;\n}\n\n.refreshBtn {\n  padding: 5px;\n  border-radius: 4px;\n}\n\n.score-list {\n  border: 1px solid black;\n  list-style: none;\n  max-height: 500px;\n  overflow: auto;\n}\n\n.score-list li {\n  padding: 5px;\n}\n\n.score-list li:nth-child(even) {\n  background-color: #b7b7b7;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\nform input {\n  padding: 5px;\n  width: 120%;\n}\n\n.submitBtn {\n  align-self: flex-start;\n  padding: 5px;\n  border-radius: 4px;\n}\n\n@media only screen and (min-width: 700px) {\n  .refresh-div {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 20px;\n  }\n\n  .submitBtn {\n    align-self: flex-end;\n  }\n\n  form input {\n    width: 100%;\n  }\n\n  .submitBtn:hover,\n  .refreshBtn:hover {\n    background-color: #7d5a5a;\n    color: #f1d1d1;\n  }\n}\n",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var u=t(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},389:(n,e,t)=>{const r=document.querySelector(".submitBtn"),o=document.querySelector(".refreshBtn"),a=document.querySelector(".score-list"),i=document.querySelector("#name"),s=document.querySelector("#score"),c=async()=>{let n="";await(async()=>(await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/leaderboard0001/scores")).json())().then((e=>{e.result.forEach((e=>{n+=`<li>${e.user} : ${e.score} </li>`}))})).catch((n=>n)),a.innerHTML=n};var l=t(379),u=t.n(l),d=t(795),p=t.n(d),f=t(569),m=t.n(f),h=t(565),v=t.n(h),y=t(216),b=t.n(y),g=t(589),x=t.n(g),w=t(426),k={};k.styleTagTransform=x(),k.setAttributes=v(),k.insert=m().bind(null,"head"),k.domAPI=p(),k.insertStyleElement=b(),u()(w.Z,k),w.Z&&w.Z.locals&&w.Z.locals,r.addEventListener("click",(n=>{n.preventDefault(),(async()=>{await(async(n,e)=>await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/leaderboard0001/scores",{method:"POST",body:JSON.stringify({user:n,score:e}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((n=>{if(!n.ok)throw Error(n.statusText);return n.json()})))(i.value,s.value).then((n=>n)).catch((n=>n)),i.value="",s.value=""})(),setTimeout((()=>o.click()),2e3)})),o.addEventListener("click",(n=>{n.preventDefault(),c()})),window.addEventListener("load",(()=>c()))}},n=>{n(n.s=389)}]);