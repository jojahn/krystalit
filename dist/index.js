/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class s{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=(t,...i)=>{const o=1===t.length?t[0]:i.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new s(o,e)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new s("string"==typeof t?t:t+"",e))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var n,a,l,c;const d={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},h=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style");i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=u){var s,o;const r=this.constructor._$Eh(t,i);if(void 0!==r&&!0===i.reflect){const n=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:d.toAttribute)(e,i.type);this._$Ei=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Ei=null}}_$AK(t,e){var i,s,o;const r=this.constructor,n=r._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=r.getPropertyOptions(n),a=t.converter,l=null!==(o=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==o?o:d.fromAttribute;this._$Ei=n,this[n]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$E_()}catch(t){throw e=!1,this._$E_(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$E_(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$E_()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var m,v,f,b;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null===(a=(n=globalThis).reactiveElementPlatformSupport)||void 0===a||a.call(n,{ReactiveElement:p}),(null!==(l=(c=globalThis).reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.0.0-rc.3");const g=globalThis.trustedTypes,y=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,w="?"+x,k=`<${w}>`,$=document,S=(t="")=>$.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,_=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,O=/'/g,I=/"/g,M=/^(?:script|style|textarea)$/i,D=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),E=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),R=new WeakMap,T=$.createTreeWalker($,129,null,!1),F=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":"",n=U;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===U?"!--"===l[1]?n=L:void 0!==l[1]?n=_:void 0!==l[2]?(M.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=C):void 0!==l[3]&&(n=C):n===C?">"===l[0]?(n=null!=o?o:U,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?C:'"'===l[3]?I:O):n===I||n===O?n=C:n===L||n===_?n=U:(n=C,o=void 0);const h=n===C&&t[e+1].startsWith("/>")?" ":"";r+=n===U?i+k:c>=0?(s.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+x+h):i+x+(-2===c?(s.push(void 0),e):h)}const a=r+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==y?y.createHTML(a):a,s]};class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[l,c]=F(t,e);if(this.el=q.createElement(l,i),T.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=T.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(x)){const i=c[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(x),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?V:"@"===e[1]?W:H})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(M.test(s.tagName)){const t=s.textContent.split(x),e=t.length-1;if(e>0){s.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],S()),T.nextNode(),a.push({type:2,index:++o});s.append(t[e],S())}}}else if(8===s.nodeType)if(s.data===w)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(x,t+1));)a.push({type:7,index:o}),t+=x.length-1}o++}}static createElement(t,e){const i=$.createElement("template");return i.innerHTML=t,i}}function P(t,e,i=t,s){var o,r,n,a;if(e===E)return e;let l=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const c=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(n=(a=i)._$Cl)&&void 0!==n?n:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=P(t,l._$AS(t,e.values),l,s)),e}class N{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:$).importNode(i,!0);T.currentNode=o;let r=T.nextNode(),n=0,a=0,l=s[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new B(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new J(r,this,t)),this.v.push(e),l=s[++a]}n!==(null==l?void 0:l.index)&&(r=T.nextNode(),n++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class B{constructor(t,e,i,s){this.type=2,this._$C_=!0,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){return this._$AA.parentNode}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),A(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==E&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.A(t):(t=>{var e;return j(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}C(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}A(t){this._$AH!==t&&(this._$AR(),this._$AH=this.C(t))}$(t){const e=this._$AA.nextSibling;null!==e&&3===e.nodeType&&(null===this._$AB?null===e.nextSibling:e===this._$AB.previousSibling)?e.data=t:this.A($.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=q.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new N(o,this),e=t.p(this.options);t.m(i),this.A(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new q(t)),e}M(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new B(this.C(S()),this.C(S()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class H{constructor(t,e,i,s,o){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(z),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=P(this,t,e,0),r=!A(t)||t!==this._$AH&&t!==E,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=P(this,s[i+n],e,n),a===E&&(a=this._$AH[n]),r||(r=!A(a)||a!==this._$AH[n]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.P(t)}P(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends H{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===z?void 0:t}}class V extends H{constructor(){super(...arguments),this.type=4}P(t){t&&t!==z?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class W extends H{constructor(){super(...arguments),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=P(this,t,e,0))&&void 0!==i?i:z)===E)return;const s=this._$AH,o=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==z&&(s===z||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,Y,G,Q,X,tt;null===(v=(m=globalThis).litHtmlPlatformSupport)||void 0===v||v.call(m,q,B),(null!==(f=(b=globalThis).litHtmlVersions)&&void 0!==f?f:b.litHtmlVersions=[]).push("2.0.0-rc.4");class et extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this._$Dt=((t,e,i)=>{var s,o;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=r._$litPart$;if(void 0===n){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=n=new B(e.insertBefore(S(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return E}}et.finalized=!0,et._$litElement$=!0,null===(Y=(Z=globalThis).litElementHydrateSupport)||void 0===Y||Y.call(Z,{LitElement:et}),null===(Q=(G=globalThis).litElementPlatformSupport)||void 0===Q||Q.call(G,{LitElement:et}),(null!==(X=(tt=globalThis).litElementVersions)&&void 0!==X?X:tt.litElementVersions=[]).push("3.0.0-rc.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ot(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):st(t,e)}const rt=(nt=o`
  :host {
    --background-color: #fff;
    --background-color-hovered: #eee;
    
    --background-color-secondary: #eee;
    --background-color-secondary-hovered: #ddd;
    
    --background-color-tertiary: #ddd;
    --background-color-tertiary-hovered: #ccc;

    --text-color: #444;

    --accent-color: #acc8e2;
    --accent-color-secondary: #afdbdb;
`,o`

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(fonts/roboto.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

html {
  font-family: 'Roboto', sans-serif;
}


@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(fonts/material-icons-font.woff2) format('woff2');
}
  
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
${nt}
`);var nt;const at=t=>t*(Math.PI/180);var lt=function(t,e,i,s){for(var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ct=class extends et{constructor(){super(...arguments),this.onSearch=t=>{},this.value="",this.onSubmit=t=>{t.preventDefault(),this.onSearch(this.value)},this.onChange=t=>{this.value=t.target.value}}static get styles(){return[rt,this.makeHexCSS(),o`nav {
			width: 100vw;
			height: 50px;
			top: 0;
			left: 0;
			position: fixed;
			display: block;
			background-color: #36f;
			background: linear-gradient(to top left, #6BE1BA, #6E54EF);
			z-index: 999;
			display: flex;
			box-shadow: 0 0 10px rgba(0,0,0,0.5);
		}

		.search-bar {
			height: 50px;
			line-height: 50px;
			display: flex;
			justify-content: left;
			min-width: 500px;
		}
		.search-bar > input {
			height: 30px;
			margin: auto 0;
			margin-left: 10px;
			outline-style: none;
			border: none;
			display: block;
			background-color: var(--background-color);
			color: var(--text-color);
			padding-left: 10px;
			width: 30%;
			border-radius: 0.2rem;
			box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
			min-width: 300px;
		}
		.search-bar > button {
			display: block;
			border: none;
			background-color: transparent;
			cursor: pointer;
			margin-left: -36px;
    	color: var(--text-color);
		}
	`]}static makeHexCSS(){let{box:{w:t,h:e},triangles:{h:i}}=function(t){const e=at(90),i=at(60),s=Math.sin(i),o=Math.cos(e)*s;return{box:{w:Math.sin(e)*s*2,h:s},triangles:{h:o}}}();console.log(t,e,i),e=40*.46,i=(40-e)/2,t=37.2,console.log(t,e,i);const s=t/2;return o`
			.hex:before {
				content: " ";
				width: 0; height: 0;
				border-bottom: ${i}px solid var(--background-color); /* 30px */
				border-left: ${s}px solid transparent; /* 52px */
				border-right: ${s}px solid transparent; /* 52px */
				position: absolute;
				top: -${i}px; /* -30px */
			}

			.hex {
				margin-top: ${i}px; /* 30px */
				width: ${t}px; /* 104px */
				height: ${e}px; /* 104px */
				background-color: var(--background-color);
				position: relative;
			}

			.hex:after {
				content: "";
				width: 0;
				position: absolute;
				bottom: -${i}px; /* -30px */
				border-top: ${i}px solid var(--background-color); /* 30px */
				border-left: ${s}px solid transparent; /* 52px */
				border-right: ${s}px solid transparent; /* 52px */
			}
		`}render(){return D`<nav>
			<!-- <div class="hex"></div> -->
			<form class="search-bar" @submit=${this.onSubmit}>
				<input type="text" placeholder="search in mails" .value="${this.value}" @input="${this.onChange}">
				<button type="submit"><span class="material-icons">search</span></button>
			</form>
		</nav>`}};lt([ot()],ct.prototype,"onSearch",void 0),lt([ot()],ct.prototype,"value",void 0),ct=lt([it("nav-bar")],ct);var dt=function(t,e,i,s){for(var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ht=class extends et{constructor(){super(...arguments),this.value=void 0,this.onSelect=t=>{console.log("selected:",t)}}static get styles(){return[rt,o`
				:host {
					width: fit-content;
					min-width: fit-content;
					height: 100%;
					display: block;
					background-color: var(--background-color-tertiary);
					box-shadow: 0 0 50px rgba(0,0,0,0.5);
					color: var(--text-color);
					z-index: 99;
					padding-top: 10px;
					overflow: hidden;
				}

				ul {
					list-style-type: none;
					margin: 0;
					padding: 0;
				}

				li {
					background-color: var(--background-color-tertiary);
					cursor: pointer;
					height: 30px;
					padding: 5px 15px;
					font-size: 1rem;
					line-height: 30px;
					display: flex;
					border: none;
					border-radius: 0.1rem;
					transition: 0.3s;
				}

				li.active {
					background: var(--accent-color);
					color: #222;
				}

				li.active:hover {
					background: var(--accent-color-secondary);
				}

				li.active .folder-icon {
					color: #222;
				}

				li:hover {
					background-color: var(--background-color-tertiary-hovered);
				}

				.folder-icon {
					color: var(--text-color);
					line-height: 30px;
					margin-right: 10px;
					font-size: 1.25rem;
				}
        `]}onItemClick(t){return e=>{this.value=t,this.onSelect(t)}}render(){return console.log(this.value),D`<ul>
			<li class="${"Inbox"===this.value?"active":""}" @click="${this.onItemClick("Inbox")}">
				<span class="material-icons folder-icon">inbox</span>
				<span>Inbound</span>
			</li>
			<li class="${"Sent"===this.value?"active":""}" @click="${this.onItemClick("Sent")}">
				<span class="material-icons folder-icon">send</span>
				<span>Sent</span>
			</li>
			<li class="${"Drafts"===this.value?"active":""}" @click="${this.onItemClick("Drafts")}">
				<span class="material-icons folder-icon">drafts</span>
				<span>Drafts</span>
			</li>
			<li class="${"Deleted"===this.value?"active":""}" @click="${this.onItemClick("Deleted")}">
				<span class="material-icons folder-icon">delete</span>
				<span>Deleted</span>
			</li>
			<hr>
			<li class="${"Orders"===this.value?"active":""}" @click="${this.onItemClick("Orders")}">
				<span class="material-icons folder-icon">folder</span>
				<span>Orders</span>
			</li>
			<li class="${"Correspondence"===this.value?"active":""}" @click="${this.onItemClick("Correspondence")}">
				<span class="material-icons folder-icon">folder</span>
				<span>Correspondence</span>
			</li>
			<li class="${"Shipping"===this.value?"active":""}" @click="${this.onItemClick("Shipping")}">
				<span class="material-icons folder-icon">folder</span>
				<span>Shipping</span>
			</li>
		</ul>`}};dt([ot({type:String})],ht.prototype,"value",void 0),dt([ot()],ht.prototype,"onSelect",void 0),ht=dt([it("folder-panel")],ht);var ut=function(t,e,i,s){for(var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let pt=class extends et{constructor(){super(...arguments),this.value=void 0,this.mails=[],this.onSelect=t=>{console.log("selected:",t)}}static get styles(){return[rt,o`:host {
		width: fit-content;
		height: 100%;
		display: block;
		background-color: var(--background-color-secondary);
		color: var(--text-color);
		padding-top: 10px;
	}

	ul {
		height: 100%;
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	li {
		padding: 10px;
		border: none;
		width: 250px;
	}

	.mail {
		background-color: var(--background-color-secondary);
		cursor: pointer;
		border: none;
		border-radius: 0.2rem;
		transition: 0.3s;
	}

	.mail:hover {
		background-color: var(--background-color-secondary-hovered);
	}

	.mail.active {
		background: var(--accent-color);
	}

	.mail.active:hover {
		background: var(--accent-color-secondary);
	}

	.mail h1, h2, p {
		font-weight: lighter;
		margin: 0;
		padding: 0;
		margin: 5px;
	}

	.mail h1 {
		font-size: 1.4rem;
	}

	.mail p {
		font-size: 0.7rem;
	}

	.mail h2 {
		font-size: 0.8rem;
	}

	.no-mail-results {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 15px;
		text-align: center;
	}

	.no-mail-results > .material-icons {
		font-size: 2rem;
	}
	`]}onItemClick(t){return e=>{this.onSelect(t)}}render(){return D`<ul>${this.mails&&this.mails.length>0?this.mails.map((t=>{var e;return D`
			<li class="mail ${t.messageID===(null===(e=this.value)||void 0===e?void 0:e.messageID)?"active":""}" @click="${this.onItemClick(t)}">
				<h1>${t.subject}</h1>
				<h2>${t.sender} - ${t.date.toLocaleDateString()}</h2>
				<p>${t.body.slice(0,100)}...</p>
			</li>
		`})):D`
			<li class="no-mail-results">
				<span class="material-icons">folder_open</span>
				<p>empty folder</p>
			</li>
		`}
		</ul>`}};ut([ot({type:Object})],pt.prototype,"value",void 0),ut([ot({type:Array})],pt.prototype,"mails",void 0),ut([ot()],pt.prototype,"onSelect",void 0),pt=ut([it("mail-list-panel")],pt);var mt=function(t,e,i,s){for(var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let vt=class extends et{constructor(){super(...arguments),this.value=void 0}static get styles(){return[rt,o`
        :host {
          flex-grow: 1;
        }

        article {
          height: 100%;
        }

        .header, .body {
          padding: 10px;
        }

        .no-mail-selected {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          height: 100%;
        }
        
        .no-mail-selected > .material-icons {
          font-size: 4.5rem;
        }

        .no-mail-selected > p {
          font-size: 1.25rem;
        }
      `]}render(){return console.log("render mail viewer"),D`
      <article>
        ${this.value?D`
          <section class="header">
            <h1>${this.value.subject}</h1>
            <h2>${this.value.sender}</h2>
            <h3>${this.value.date.toLocaleDateString()}</h3>
          </section>
          <section class="body">
            ${this.value.body}
          </section>
        `:D`
          <section class="no-mail-selected">
            <span class="material-icons">mail</span>
            <p>Please select a mail</p>
          </section>
        `}
      </article>
    `}};function ft(t,e=!1){const i=function(){const t=new Int8Array(1);window.crypto.getRandomValues(t);const e=new Uint8Array(Math.max(16,Math.abs(t[0])));return window.crypto.getRandomValues(e),e.join("")}();return Object.defineProperty(window,i,{value:s=>(e&&Reflect.deleteProperty(window,i),t?.(s)),writable:!1,configurable:!0}),i}async function bt(t,e={}){return new Promise(((i,s)=>{const o=ft((t=>{i(t),Reflect.deleteProperty(window,r)}),!0),r=ft((t=>{s(t),Reflect.deleteProperty(window,o)}),!0);window.rpc.notify(t,{t:__TAURI_INVOKE_KEY__,callback:o,error:r,...e})}))}mt([ot({type:Object})],vt.prototype,"value",void 0),vt=mt([it("mail-viewer")],vt),Object.freeze({__proto__:null,transformCallback:ft,invoke:bt,convertFileSrc:function(t){return navigator.userAgent.includes("Windows")?`https://asset.${t}`:`asset://${t}`}});var gt=function(t,e,i,s){for(var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let yt=class extends et{constructor(){super(...arguments),this.mails=[],this.selectedMail=void 0,this.selectedFolder="Inbox",this.searchValue="",this.onSelectMail=t=>{console.log("selected mail:",t.messageID),this.selectedMail=t},this.onSelectFolder=t=>{console.log("selected folder:",t),this.selectedFolder=t},this.onSearch=t=>{this.searchValue=t},this.getVisibleMails=()=>this.mails.filter((t=>t.folder===this.selectedFolder)).filter((t=>{if(!this.searchValue)return!0;const e=-1!=t.body.indexOf(this.searchValue),i=-1!=t.sender.indexOf(this.searchValue),s=-1!=t.subject.indexOf(this.searchValue);return e||i||s}))}static get styles(){return[rt,o`
      /* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap'); */
      :host {
        font-family: 'Roboto', sans-serif;
      }
      .content {
        display: flex;
        position: fixed;
        top: 50px;
        width: 100vw;
        height: calc(100vh - 50px);
        left: 0;
      }`]}async connectedCallback(){super.connectedCallback(),this.mails=await(bt("greet"),new Promise((t=>t([{date:new Date,subject:"Hello, World!",sender:"Server@Localhost",messageID:"20180429-114054033-4711@Localhost",reciever:"User@Localhost",folder:"Inbox",body:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{date:new Date,subject:"Hello, Server!",reciever:"User@Localhost",sender:"User@Localhost",messageID:"20180429-114054033-4712@Localhost",folder:"Sent",body:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{date:new Date,subject:"Hello, User!",reciever:"User@Localhost",sender:"Server@Localhost",messageID:"20180429-114054033-4713@Localhost",folder:"Inbox",body:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{date:new Date,subject:"Hello, Universe!",reciever:"User@Localhost",sender:"Server@Localhost",messageID:"20180429-114054033-4714@Localhost",folder:"Inbox",body:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{date:new Date,subject:"Order#123",reciever:"User@Localhost",sender:"Server@Localhost",messageID:"20180429-114054033-4715@Localhost",folder:"Orders",body:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}])))),this.selectedMail=this.mails[0]}render(){return console.log("render index"),D`
        <nav-bar .onSearch="${this.onSearch}"></nav-bar>
        <div class="content">
            <folder-panel
              .value="${this.selectedFolder}"
              .onSelect="${this.onSelectFolder}"
            ></folder-panel>
            <mail-list-panel
              .onSelect="${this.onSelectMail}"
              .value="${this.selectedMail}"
              .mails=${this.getVisibleMails()}
            ></mail-list-panel>
            <mail-viewer .value="${this.selectedMail}"></mail-viewer>
        </div>
        <link href="css/material-icons.css" rel="stylesheet">
        `}};gt([ot({type:Array})],yt.prototype,"mails",void 0),gt([ot({type:Object})],yt.prototype,"selectedMail",void 0),gt([ot()],yt.prototype,"selectedFolder",void 0),gt([ot()],yt.prototype,"searchValue",void 0),yt=gt([it("krystalit-app")],yt);export{yt as App};
