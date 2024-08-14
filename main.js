(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(601),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,400;1,300;1,400&family=Permanent+Marker&family=Sankofa+Display&display=swap);"]),o.push([e.id,"/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\n\n/* Prevent font size inflation */\nhtml {\n  -moz-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n}\n\n/* Remove default margin in favour of better control in authored CSS */\nbody, h1, h2, h3, h4, p,\nfigure, blockquote, dl, dd {\n  margin-block-end: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  line-height: 1.5;\n}\n\n/* Set shorter line heights on headings and interactive elements */\nh1, h2, h3, h4,\nbutton, input, label {\n  line-height: 1.1;\n}\n\n/* Balance text wrapping on headings */\nh1, h2,\nh3, h4 {\n  text-wrap: balance;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n  color: currentColor;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput, button,\ntextarea, select {\n  font-family: inherit;\n  font-size: inherit;\n}\n\n/* Make sure textareas without a rows attribute are not tiny */\ntextarea:not([rows]) {\n  min-height: 10em;\n}\n\n/* Anything that has been anchored to should have extra scroll margin */\n:target {\n  scroll-margin-block: 5ex;\n}\n\n/* CUSTOM CSS HERE */\n\nbody {\n  background-color: #003459;\n  color: #00A8E8;\n}\n\n.container * {\n  --cell-size: 33.4px;\n  font-family: \"Permanent Marker\", cursive;\n  font-size: 2rem;\n  /* border: 1px solid black; */\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 1050px;\n  margin: 0 auto 0 auto;  \n   flex-grow: 0;\n  flex-shrink: 0;\n}\n\nheader {\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.secondHeader {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 50px;\n}\n\nmain {\n  display: flex;\n  height: 500px;\n  padding: 2%;\n  justify-content: space-between;\n  align-items: center;\n}\n\nmain#placement {\njustify-content: space-around;\n}\n\n.paddingBottom {\n  padding-bottom: 1.5em;\n}\n\n.ships {\n  width: 336px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid black;\n}\n\n.shipsVer {\n  width: 230px;\n  height: 336px;;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid black;\n}\n\n.shipContainer {\n  width: 90%;\n  height: 5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.shipContainerVer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.shipName {\n  font-size: 1.5rem;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n}\n\n.shipNameVertical {\n  height: 1.3rem;\n  padding-bottom: 15px;\n  font-size: 1rem;\n}\n\n.ship {  \n  background-color: #301934;\n}\n\n.smallHor {\n  height: var(--cell-size);\n  width: calc(var(--cell-size)*2);\n}\n\n.bigHor {\n  height: var(--cell-size);\n  width: calc(var(--cell-size)*3);\n}\n\n.biggerHor {\n  height: var(--cell-size);\n  width: calc(var(--cell-size)*4);\n}\n\n.biggestHor {\n  height: var(--cell-size);\n  width: calc(var(--cell-size)*5);\n}\n\n.smallVer {\n  width: var(--cell-size);\n  height: calc(var(--cell-size)*2);\n}\n\n.bigVer {\n  width: var(--cell-size);\n  height: calc(var(--cell-size)*3);\n}\n\n.biggerVer {\n  width: var(--cell-size);\n  height: calc(var(--cell-size)*4);\n}\n\n.biggestVer {\n  width: var(--cell-size);\n  height: calc(var(--cell-size)*5);\n}\n\n.player1, .player2, .board {\n  display: flex;\n  width: 336px;\n  height: 336px;  \n  flex-wrap: wrap;\n  border: 1px solid black;\n}\n\n.cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: red;\n  width: 33.4px;\n  height: 33.4px;\n  border: 1px solid #00171F;\n}\n\n.cell:hover {\n  background-color: #00A8E8;\n}\n\n.buttonContainer {\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  font-size: 1.5rem;\n}\n\n#play, #resetGame, #changeOrientation, #confirm, #reset {\n  height: 60px;\n  width: 120px;\n  line-height: 1;\n  border-radius: 13px;\n  font-size: smaller;    \n  background-color: #007EA7;\n  border: none;\n}\n\n#play:hover, #resetGame:hover, #changeOrientation:hover, #confirm:hover, #reset:hover {\n  box-shadow: #00A8E8 3px 3px 5px ;\n  cursor: pointer;\n}\n\nfooter {\n  margin-top: auto;\n  align-self: center;  \n}\n\n.footer {\n  font-size: 1.5rem;\n  padding-bottom: 1rem;\n}\n\n.footer a {\n  text-decoration: none;\n  font-weight: normal;\n  font-size: 1.5rem;\n}",""]);const s=o},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var h=t(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)n[h].references++,n[h].updater(p);else{var m=a(p,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}o.push(u)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=t(i[o]);n[s].references--}for(var l=r(e,a),c=0;c<i.length;c++){var d=t(i[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=l}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var r=t(72),a=t.n(r),i=t(825),o=t.n(i),s=t(659),l=t.n(s),c=t(56),d=t.n(c),u=t(540),h=t.n(u),p=t(113),m=t.n(p),f=t(208),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=l().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=h(),a()(f.A,g),f.A&&f.A.locals&&f.A.locals;class v{#e=0;#n=!1;constructor(e){this.length=e}get sunk(){return this.#n}hit(){this.#e+=1,this.#t()}#t(){this.#e>=this.length&&(this.#n=!0)}}class y{#r=Array.from({length:10},(()=>Array(10).fill(0)));#a=[];#e=[];#i=[];gameboardStatus(e,n){console.log(this.#r[e][n])}placeShip(e,n,t,r){const a=new v(e),i=[];for(let a=0;a<e;a++)"vertical"===n?i.push([t+a,r]):"horizontal"===n&&i.push([t,r+a]);for(let e=0;e<i.length;e++){const n=i[e];if(n[0]<0||n[0]>9)return 0;if(n[1]<0||n[1]>9)return 0;if(0!==this.#r[n[0]][n[1]])return 0}return this.#i.push(a),i.forEach((e=>{this.#r[e[0]][e[1]]=a})),1}receiveAttack(e,n){if(e>9||e<0||n>9||n<0)return 2;if(0!==this.#r[e][n]){const t=this.#r[e][n];return b(this.#e,[e,n])?2:(this.#e.push([e,n]),t.hit(),!0)}return b(this.#a,[e,n])?2:(this.#a.push([e,n]),!1)}allSunk(){let e=!0;return this.#i.forEach((n=>{n.sunk||(e=!1)})),e}shipCheck(e,n){return 0!==this.#r[e][n]}get missed(){return this.#a}get hit(){return this.#e}}function b(e,n){return e.some((e=>Array.isArray(e)&&e.length===n.length&&e.every(((e,t)=>e===n[t]))))}class x{board=new y}const L=document.querySelector(".board"),S=document.querySelector(".ships"),E=document.querySelectorAll(".shipContainer"),k=document.querySelector(".smallHor"),w=document.querySelectorAll(".bigHor"),C=document.querySelector(".biggerHor"),z=document.querySelector(".biggestHor"),M=document.querySelector(".secondHeader"),A=document.querySelector("main"),q=document.querySelector("#\\31").parentElement,T=document.querySelectorAll(".shipName");function H(e){let n=0,t=0;L.replaceChildren();for(let r=0;r<100;r++){const r=document.createElement("div");r.classList.add("cell"),r.dataset.x=n,r.dataset.y=t,L.appendChild(r),K(e,n,t)&&(r.style.backgroundColor="grey"),t<9?t+=1:(n+=1,t=0)}}function V(){const e=document.querySelector(".player1"),n=document.querySelector(".player2");e.replaceChildren(),n.replaceChildren()}function j(e,n){V(),function(e){const n=document.querySelector(".player1");let t=0,r=0;for(let a=0;a<100;a++){const a=document.createElement("div");a.classList.add("cell"),a.dataset.x=t,a.dataset.y=r,_(e,t,r)&&(a.innerText="X",a.style.color="cyan"),J(e,t,r)&&(a.innerText="X",a.style.color="red"),K(e,t,r)&&(a.style.backgroundColor="grey"),n.appendChild(a),r<9?r+=1:(t+=1,r=0)}}(e),function(e){const n=document.querySelector(".player2");let t=0,r=0;for(let a=0;a<100;a++){const a=document.createElement("div");a.classList.add("cell"),a.dataset.x=t,a.dataset.y=r,_(e,t,r)&&(a.style.backgroundColor="blue"),J(e,t,r)&&(a.innerText="X"),n.appendChild(a),r<9?r+=1:(t+=1,r=0)}}(n)}function I(e){document.querySelector(".vs").innerText=e?`${e} Won!`:"vs"}function N(){"horizontal"===S.dataset.orientation?(q.classList.add("paddingBottom"),T.forEach((e=>{e.classList.add("shipNameVertical")})),S.style.width="480px",S.classList.add("shipsVer"),S.classList.remove("ships"),E.forEach((e=>{e.classList.remove("shipContainer"),e.classList.add("shipContainerVer")})),S.dataset.orientation="vertical",k.classList.remove("smallHor"),w.forEach((e=>{e.classList.remove("bigHor"),e.classList.add("bigVer")})),C.classList.remove("biggerHor"),z.classList.remove("biggestHor"),k.classList.add("smallVer"),C.classList.add("biggerVer"),z.classList.add("biggestVer")):(S.style.width="336px",T.forEach((e=>{e.classList.remove("shipNameVertical")})),q.classList.remove("paddingBottom"),S.dataset.orientation="horizontal",S.classList.remove("shipsVer"),S.classList.add("ships"),E.forEach((e=>{e.classList.remove("shipContainerVer"),e.classList.add("shipContainer")})),k.classList.add("smallHor"),w.forEach((e=>{e.classList.remove("bigVer"),e.classList.add("bigHor")})),C.classList.add("biggerHor"),z.classList.add("biggestHor"),k.classList.remove("smallVer"),C.classList.remove("biggerVer"),z.classList.remove("biggestVer"))}const D=document.querySelector(".board"),P=document.querySelector("#changeOrientation"),O=document.querySelector(".ships"),R=document.querySelector("#reset"),B=document.querySelector("#confirm"),G=[];let U,F;function X(){U=new x,F=new x}const $=e=>{const n=document.querySelector(".player2"),t=function(e,n){if(void 0===e.target.dataset.y||void 0===e.target.dataset.x)return 2;{const t=parseInt(e.target.dataset.x),r=parseInt(e.target.dataset.y),a=n.board.receiveAttack(t,r);return j(U,F),a}}(e,F);return 2===t?t:F.board.allSunk()?(I("Player"),n.removeEventListener("click",$),t):(function(){let e,n;if(G.length>0){const t=G.shift();[e,n]=t}else e=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());let t=U.board.receiveAttack(e,n);for(;2===t;){if(G.length>0){const t=G.shift();[e,n]=t}else e=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());t=U.board.receiveAttack(e,n)}!0===t&&[[e+1,n],[e-1,n],[e,n+1],[e,n-1]].forEach((e=>G.push(e))),j(U,F)}(),U.board.allSunk()?(I("PC"),n.removeEventListener("click",$),t):void 0)};function _(e,n,t){const r=e.board.missed;let a=!1;return r.forEach((e=>{e[0]!==n||e[1]!==t||(a=!0)})),a}function J(e,n,t){const r=e.board.hit;let a=!1;return r.forEach((e=>{e[0]!==n||e[1]!==t||(a=!0)})),a}function K(e,n,t){return!!e.board.shipCheck(n,t)}function W(e){let n,t,r;return r=Math.floor(2*Math.random())<1?"vertical":"horizontal","vertical"===r?(n=Math.floor(Math.random()*(10-e)),t=Math.floor(10*Math.random())):(t=Math.floor(Math.random()*(10-e)),n=Math.floor(10*Math.random())),[e,r,n,t]}function Y(e){function n(n){let t=!1;for(;!t;)t=e.board.placeShip(...W(n))}n(5),n(4),n(3),n(3),n(2)}X(),H(U),function(){function e(e){e.dataTransfer.setData("text/plain",e.target.dataset.length),e.dataTransfer.setData("textid",e.target.id)}document.querySelectorAll(".ship").forEach((n=>{n.addEventListener("dragstart",e)})),D.addEventListener("dragover",(e=>{e.preventDefault()})),D.addEventListener("drop",(function(e){e.preventDefault();const n=parseInt(e.dataTransfer.getData("text/plain")),t=parseInt(e.target.dataset.x),r=parseInt(e.target.dataset.y),a=O.dataset.orientation,i=parseInt(e.dataTransfer.getData("textid"));isNaN(t)||isNaN(r)||U.board.placeShip(n,a,t,r)&&document.getElementById(`${i}`).remove(),H(U)})),P.addEventListener("click",N),R.addEventListener("click",(()=>{location.reload()})),B.addEventListener("click",(()=>{!function(){M.innerHTML="";const e=document.createElement("div");e.classList.add("you"),e.innerText="YOU";const n=document.createElement("div");n.classList.add("vs"),n.innerText="vs";const t=document.createElement("div");t.classList.add("pc"),t.innerText="PC",M.appendChild(e),M.appendChild(n),M.appendChild(t),A.removeAttribute("id"),A.replaceChildren();const r=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div");r.classList.add("player1"),a.classList.add("buttonContainer"),i.classList.add("player2");const o=document.createElement("button"),s=document.createElement("button");o.setAttribute("id","play"),s.setAttribute("id","resetGame"),o.innerText="Play",s.innerText="Reset Game",a.appendChild(o),a.appendChild(s),A.appendChild(r),A.appendChild(a),A.appendChild(i)}();const e=document.querySelector("#play"),n=document.querySelector(".player2");!function(){const e=document.querySelector("#play"),n=document.querySelector(".player2"),t=document.querySelector("#resetGame");e.addEventListener("click",(()=>{X(),Y(U),Y(F),V(),j(U,F),e.innerText="Randomize Ships",I(),n.addEventListener("click",$)})),n.addEventListener("click",$),n.addEventListener("dragstart",(e=>{e.preventDefault()})),n.addEventListener("dragover",(e=>{e.preventDefault()})),n.addEventListener("drop",(e=>{e.preventDefault()})),t.addEventListener("click",(()=>{location.reload()}))}(),Y(F),V(),j(U,F),e.innerText="Randomize Ships",I(),n.addEventListener("click",$)}))}()})();