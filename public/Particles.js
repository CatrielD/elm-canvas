!function(r){"use strict";function n(r,n,t){return t.a=r,t.f=n,t}function e(t){return n(2,t,function(n){return function(r){return t(n,r)}})}function t(e){return n(3,e,function(t){return function(n){return function(r){return e(t,n,r)}}})}function u(u){return n(4,u,function(e){return function(t){return function(n){return function(r){return u(e,t,n,r)}}}})}function a(a){return n(5,a,function(u){return function(e){return function(t){return function(n){return function(r){return a(u,e,t,n,r)}}}}})}function i(i){return n(6,i,function(a){return function(u){return function(e){return function(t){return function(n){return function(r){return i(a,u,e,t,n,r)}}}}}})}function b(r,n,t){return 2===r.a?r.f(n,t):r(n)(t)}function s(r,n,t,e){return 3===r.a?r.f(n,t,e):r(n)(t)(e)}function l(r,n,t,e,u){return 4===r.a?r.f(n,t,e,u):r(n)(t)(e)(u)}function d(r,n,t,e,u,a){return 5===r.a?r.f(n,t,e,u,a):r(n)(t)(e)(u)(a)}function h(r,n,t,e,u,a,i){return 6===r.a?r.f(n,t,e,u,a,i):r(n)(t)(e)(u)(a)(i)}var $={$:0};function g(r,n){return{$:1,a:r,b:n}}var f=e(g);function p(r){for(var n=$,t=r.length;t--;)n=g(r[t],n);return n}function o(r){for(var n=[];r.b;r=r.b)n.push(r.a);return n}function c(r,n,t){if("object"!=typeof r)return r===n?0:r<n?-1:1;if(!r.$)return(t=c(r.a,n.a))?t:(t=c(r.b,n.b))?t:c(r.c,n.c);for(;r.b&&n.b&&!(t=c(r.a,n.a));r=r.b,n=n.b);return t||(r.b?1:n.b?-1:0)}var v=0;function m(r,n){return{a:r,b:n}}function y(r,n){var t={};for(var e in r)t[e]=r[e];for(var e in n)t[e]=n[e];return t}function k(r,n){if("string"==typeof r)return r+n;if(!r.b)return n;var t=g(r.a,n);r=r.b;for(var e=t;r.b;r=r.b)e=e.b=g(r.a,n);return t}var w=t(function(r,n,t){for(var e=Array(r),u=0;u<r;u++)e[u]=t(n+u);return e}),A=e(function(r,n){for(var t=Array(r),e=0;e<r&&n.b;e++)t[e]=n.a,n=n.b;return t.length=e,m(t,n)});function j(r){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+r+".md")}var _=e(function(r,n){var t=n%r;return 0===r?j(11):0<t&&r<0||t<0&&0<r?t+r:t}),T=Math.cos,N=Math.sin;var E=Math.ceil,L=Math.floor,x=Math.round,P=Math.log;var C=e(function(r,n){return n.join(r)});function q(r){return r+""}var S=e(function(r,n){return F(r,D(n))});function F(r,n){switch(r.$){case 3:return"boolean"==typeof n?jn(n):B("a BOOL",n);case 2:return"number"!=typeof n?B("an INT",n):-2147483647<n&&n<2147483647&&(0|n)===n?jn(n):!isFinite(n)||n%1?B("an INT",n):jn(n);case 4:return"number"==typeof n?jn(n):B("a FLOAT",n);case 6:return"string"==typeof n?jn(n):n instanceof String?jn(n+""):B("a STRING",n);case 9:return null===n?jn(r.c):B("null",n);case 5:return jn(R(n));case 7:return Array.isArray(n)?M(r.b,n,p):B("a LIST",n);case 8:return Array.isArray(n)?M(r.b,n,z):B("an ARRAY",n);case 10:var t=r.d;if("object"!=typeof n||null===n||!(t in n))return B("an OBJECT with a field named `"+t+"`",n);var e=F(r.b,n[t]);return en(e)?e:An(b(Tn,t,e.a));case 11:var u=r.e;if(!Array.isArray(n))return B("an ARRAY",n);if(n.length<=u)return B("a LONGER array. Need index "+u+" but only see "+n.length+" entries",n);e=F(r.b,n[u]);return en(e)?e:An(b(Nn,u,e.a));case 12:if("object"!=typeof n||null===n||Array.isArray(n))return B("an OBJECT",n);var a=$;for(var i in n)if(n.hasOwnProperty(i)){e=F(r.b,n[i]);if(!en(e))return An(b(Tn,i,e.a));a=g(m(i,e.a),a)}return jn(Vr(a));case 13:for(var f=r.f,o=r.g,c=0;c<o.length;c++){e=F(o[c],n);if(!en(e))return e;f=f(e.a)}return jn(f);case 14:e=F(r.b,n);return en(e)?F(r.h(e.a),n):e;case 15:for(var v=$,s=r.g;s.b;s=s.b){e=F(s.a,n);if(en(e))return e;v=g(e.a,v)}return An(En(Vr(v)));case 1:return An(b(_n,r.a,R(n)));case 0:return jn(r.a)}}function M(r,n,t){for(var e=n.length,u=Array(e),a=0;a<e;a++){var i=F(r,n[a]);if(!en(i))return An(b(Nn,a,i.a));u[a]=i.a}return jn(t(u))}function z(n){return b(yn,n.length,function(r){return n[r]})}function B(r,n){return An(b(_n,"Expecting "+r,R(n)))}function O(r,n){if(r===n)return!0;if(r.$!==n.$)return!1;switch(r.$){case 0:case 1:return r.a===n.a;case 3:case 2:case 4:case 6:case 5:return!0;case 9:return r.c===n.c;case 7:case 8:case 12:return O(r.b,n.b);case 10:return r.d===n.d&&O(r.b,n.b);case 11:return r.e===n.e&&O(r.b,n.b);case 13:return r.f===n.f&&I(r.g,n.g);case 14:return r.h===n.h&&O(r.b,n.b);case 15:return I(r.g,n.g)}}function I(r,n){var t=r.length;if(t!==n.length)return!1;for(var e=0;e<t;e++)if(!O(r[e],n[e]))return!1;return!0}function R(r){return r}function D(r){return r}var J=t(function(r,n,t){return t[r]=D(n),t});R(null);function Y(r){return{$:0,a:r}}function K(r){return{$:2,b:r,c:null}}var G=e(function(r,n){return{$:3,b:r,d:n}});var Q=0;function H(r){var n={$:0,e:Q++,f:r,g:null,h:[]};return rr(n),n}function W(n){return K(function(r){r(Y(H(n)))})}function U(r,n){r.h.push(n),rr(r)}var V=e(function(n,t){return K(function(r){U(n,t),r(Y(v))})});var X=!1,Z=[];function rr(r){if(Z.push(r),!X){for(X=!0;r=Z.shift();)nr(r);X=!1}}function nr(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,rr(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}function tr(r,n,t,e,u,a){var i=b(S,r,R(n?n.flags:void 0));en(i)||j(2);var f={},o=(i=t(i.a)).a,c=a(s,o),v=function(r,n){var t;for(var e in er){var u=er[e];u.a&&((t=t||{})[e]=u.a(e,n)),r[e]=ar(u,n)}return t}(f,s);function s(r,n){c(o=(i=b(e,r,o)).a,n),cr(f,i.b,u(o))}return cr(f,i.b,u(o)),v?{ports:v}:{}}var er={};function ur(r,n,t,e,u){return{b:r,c:n,d:t,e:e,f:u}}function ar(r,n){var e={g:n,h:void 0},u=r.c,a=r.d,i=r.e,f=r.f;function o(t){return b(G,o,{$:5,b:function(r){var n=r.a;return 0===r.$?s(a,e,n,t):i&&f?l(u,e,n.i,n.j,t):s(u,e,i?n.i:n.j,t)}})}return e.h=H(b(G,o,r.b))}var ir=e(function(n,t){return K(function(r){n.g(t),r(Y(v))})}),fr=e(function(r,n){return b(V,r.h,{$:0,a:n})});function or(n){return function(r){return{$:1,k:n,l:r}}}function cr(r,n,t){var e={};for(var u in vr(!0,n,e,null),vr(!1,t,e,null),r)U(r[u],{$:"fx",a:e[u]||{i:$,j:$}})}function vr(r,n,t,e){switch(n.$){case 1:var u=n.k,a=function(r,n,t,e){function u(r){for(var n=t;n;n=n.q)r=n.p(r);return r}return b(r?er[n].e:er[n].f,u,e)}(r,u,e,n.l);return void(t[u]=function(r,n,t){return t=t||{i:$,j:$},r?t.i=g(n,t.i):t.j=g(n,t.j),t}(r,a,t[u]));case 2:for(var i=n.m;i.b;i=i.b)vr(r,i.a,t,e);return;case 3:return void vr(r,n.o,t,{p:n.n,q:e})}}var sr;var br="undefined"!=typeof document?document:{};function lr(r,n){r.appendChild(n)}function dr(r){return{$:0,a:r}}var hr=e(function(a,i){return e(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:mr(r),e:t,f:a,b:e}})})(void 0);e(function(a,i){return e(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:mr(r),e:t,f:a,b:e}})})(void 0);var $r=e(function(r,n){return{$:"a2",n:r,o:n}}),gr=e(function(r,n){return{$:"a3",n:r,o:n}});var pr;function mr(r){for(var n={};r.b;r=r.b){var t=r.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=n[e]||(n[e]={});"a3"===e&&"class"===u?yr(i,u,a):i[u]=a}else"className"===u?yr(n,u,D(a)):n[u]=D(a)}return n}function yr(r,n,t){var e=r[n];r[n]=e?e+" "+t:t}function kr(r,n){var t=r.$;if(5===t)return kr(r.k||(r.k=r.m()),n);if(0===t)return br.createTextNode(r.a);if(4===t){for(var e=r.k,u=r.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:n};return(i=kr(e,a)).elm_event_node_ref=a,i}if(3===t)return wr(i=r.h(r.g),n,r.d),i;var i=r.f?br.createElementNS(r.f,r.c):br.createElement(r.c);sr&&"a"==r.c&&i.addEventListener("click",sr(i)),wr(i,n,r.d);for(var f=r.e,o=0;o<f.length;o++)lr(i,kr(1===t?f[o]:f[o].b,n));return i}function wr(r,n,t){for(var e in t){var u=t[e];"a1"===e?Ar(r,u):"a0"===e?Tr(r,n,u):"a3"===e?jr(r,u):"a4"===e?_r(r,u):("value"!==e||"checked"!==e||r[e]!==u)&&(r[e]=u)}}function Ar(r,n){var t=r.style;for(var e in n)t[e]=n[e]}function jr(r,n){for(var t in n){var e=n[t];e?r.setAttribute(t,e):r.removeAttribute(t)}}function _r(r,n){for(var t in n){var e=n[t],u=e.f,a=e.o;a?r.setAttributeNS(u,t,a):r.removeAttributeNS(u,t)}}function Tr(r,n,t){var e=r.elmFs||(r.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}r.removeEventListener(u,i)}i=Nr(n,a),r.addEventListener(u,i,pr&&{passive:Kn(a)<2}),e[u]=i}else r.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){pr=!0}}))}catch(r){}function Nr(v,r){function s(r){var n=s.q,t=F(n.a,r);if(en(t)){for(var e,u=Kn(n),a=t.a,i=u?u<3?a.a:a.L:a,f=1==u?a.b:3==u&&a.be,o=(f&&r.stopPropagation(),(2==u?a.b:3==u&&a.a9)&&r.preventDefault(),v);e=o.j;){if("function"==typeof e)i=e(i);else for(var c=e.length;c--;)i=e[c](i);o=o.p}o(i,f)}}return s.q=r,s}function Er(r,n){return r.$==n.$&&O(r.a,n.a)}function Lr(r,n){var t=[];return Pr(r,n,t,0),t}function xr(r,n,t,e){var u={$:n,r:t,s:e,t:void 0,u:void 0};return r.push(u),u}function Pr(r,n,t,e){if(r!==n){var u=r.$,a=n.$;if(u!==a){if(1!==u||2!==a)return void xr(t,0,e,n);n=function(r){for(var n=r.e,t=n.length,e=Array(t),u=0;u<t;u++)e[u]=n[u].b;return{$:1,c:r.c,d:r.d,e:e,f:r.f,b:r.b}}(n),a=1}switch(a){case 5:for(var i=r.l,f=n.l,o=i.length,c=o===f.length;c&&o--;)c=i[o]===f[o];if(c)return void(n.k=r.k);n.k=n.m();var v=[];return Pr(r.k,n.k,v,0),void(0<v.length&&xr(t,1,e,v));case 4:for(var s=r.j,b=n.j,l=!1,d=r.k;4===d.$;)l=!0,"object"!=typeof s?s=[s,d.j]:s.push(d.j),d=d.k;for(var h=n.k;4===h.$;)l=!0,"object"!=typeof b?b=[b,h.j]:b.push(h.j),h=h.k;return l&&s.length!==b.length?void xr(t,0,e,n):((l?function(r,n){for(var t=0;t<r.length;t++)if(r[t]!==n[t])return!1;return!0}(s,b):s===b)||xr(t,2,e,b),void Pr(d,h,t,e+1));case 0:return void(r.a!==n.a&&xr(t,3,e,n.a));case 1:return void Cr(r,n,t,e,Sr);case 2:return void Cr(r,n,t,e,Fr);case 3:if(r.h!==n.h)return void xr(t,0,e,n);var $=qr(r.d,n.d);$&&xr(t,4,e,$);var g=n.i(r.g,n.g);return void(g&&xr(t,5,e,g))}}}function Cr(r,n,t,e,u){if(r.c===n.c&&r.f===n.f){var a=qr(r.d,n.d);a&&xr(t,4,e,a),u(r,n,t,e)}else xr(t,0,e,n)}function qr(r,n,t){var e;for(var u in r)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in n){var a=r[u],i=n[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&Er(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:r[u].f,o:void 0}:"string"==typeof r[u]?"":null;else{var f=qr(r[u],n[u]||{},u);f&&((e=e||{})[u]=f)}for(var o in n)o in r||((e=e||{})[o]=n[o]);return e}function Sr(r,n,t,e){var u=r.e,a=n.e,i=u.length,f=a.length;f<i?xr(t,6,e,{v:f,i:i-f}):i<f&&xr(t,7,e,{v:i,e:a});for(var o=i<f?i:f,c=0;c<o;c++){var v=u[c];Pr(v,a[c],t,++e),e+=v.b||0}}function Fr(r,n,t,e){for(var u=[],a={},i=[],f=r.e,o=n.e,c=f.length,v=o.length,s=0,b=0,l=e;s<c&&b<v;){var d=(T=f[s]).a,h=(N=o[b]).a,$=T.b,g=N.b;if(d!==h){var p=f[s+1],m=o[b+1];if(p)var y=p.a,k=p.b,w=h===y;if(m)var A=m.a,j=m.b,_=d===A;if(_&&w)Pr($,j,u,++l),zr(a,u,d,g,b,i),l+=$.b||0,Br(a,u,d,k,++l),l+=k.b||0,s+=2,b+=2;else if(_)l++,zr(a,u,h,g,b,i),Pr($,j,u,l),l+=$.b||0,s+=1,b+=2;else if(w)Br(a,u,d,$,++l),l+=$.b||0,Pr(k,g,u,++l),l+=k.b||0,s+=2,b+=1;else{if(!p||y!==A)break;Br(a,u,d,$,++l),zr(a,u,h,g,b,i),l+=$.b||0,Pr(k,j,u,++l),l+=k.b||0,s+=2,b+=2}}else Pr($,g,u,++l),l+=$.b||0,s++,b++}for(;s<c;){var T;Br(a,u,(T=f[s]).a,$=T.b,++l),l+=$.b||0,s++}for(;b<v;){var N,E=E||[];zr(a,u,(N=o[b]).a,N.b,void 0,E),b++}(0<u.length||0<i.length||E)&&xr(t,8,e,{w:u,x:i,y:E})}var Mr="_elmW6BL";function zr(r,n,t,e,u,a){var i=r[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(r[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var f=[];return Pr(i.z,e,f,i.r),i.r=u,void(i.s.s={w:f,A:i})}zr(r,n,t+Mr,e,u,a)}function Br(r,n,t,e,u){var a=r[t];if(a){if(0===a.c){a.c=2;var i=[];return Pr(e,a.z,i,u),void xr(n,9,u,{w:i,A:a})}Br(r,n,t+Mr,e,u)}else{var f=xr(n,9,u,void 0);r[t]={c:1,z:e,r:u,s:f}}}function Or(r,n,t,e){!function r(n,t,e,u,a,i,f){var o=e[u];var c=o.r;for(;c===a;){var v=o.$;if(1===v)Or(n,t.k,o.s,f);else if(8===v){o.t=n,o.u=f;var s=o.s.w;0<s.length&&r(n,t,s,0,a,i,f)}else if(9===v){o.t=n,o.u=f;var b=o.s;if(b){b.A.s=n;var s=b.w;0<s.length&&r(n,t,s,0,a,i,f)}}else o.t=n,o.u=f;if(!(o=e[++u])||(c=o.r)>i)return u}var l=t.$;if(4===l){for(var d=t.k;4===d.$;)d=d.k;return r(n,d,e,u,a+1,i,n.elm_event_node_ref)}var h=t.e;var $=n.childNodes;for(var g=0;g<h.length;g++){var p=1===l?h[g]:h[g].b,m=++a+(p.b||0);if(a<=c&&c<=m&&(u=r($[g],p,e,u,a,m,f),!(o=e[u])||(c=o.r)>i))return u;a=m}return u}(r,n,t,0,0,n.b,e)}function Ir(r,n,t,e){return 0===t.length?r:(Or(r,n,t,e),Rr(r,t))}function Rr(r,n){for(var t=0;t<n.length;t++){var e=n[t],u=e.t,a=Dr(u,e);u===r&&(r=a)}return r}function Dr(r,n){switch(n.$){case 0:return function(r,n,t){var e=r.parentNode,u=kr(n,t);u.elm_event_node_ref||(u.elm_event_node_ref=r.elm_event_node_ref);e&&u!==r&&e.replaceChild(u,r);return u}(r,n.s,n.u);case 4:return wr(r,n.u,n.s),r;case 3:return r.replaceData(0,r.length,n.s),r;case 1:return Rr(r,n.s);case 2:return r.elm_event_node_ref?r.elm_event_node_ref.j=n.s:r.elm_event_node_ref={j:n.s,p:n.u},r;case 6:for(var t=n.s,e=0;e<t.i;e++)r.removeChild(r.childNodes[t.v]);return r;case 7:for(var u=(t=n.s).e,a=r.childNodes[e=t.v];e<u.length;e++)r.insertBefore(kr(u[e],n.u),a);return r;case 9:if(!(t=n.s))return r.parentNode.removeChild(r),r;var i=t.A;return void 0!==i.r&&r.parentNode.removeChild(r),i.s=Rr(r,t.w),r;case 8:return function(r,n){var t=n.s,e=function(r,n){if(!r)return;for(var t=br.createDocumentFragment(),e=0;e<r.length;e++){var u=r[e],a=u.A;lr(t,2===a.c?a.s:kr(a.z,n.u))}return t}(t.y,n);r=Rr(r,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],f=i.A,o=2===f.c?f.s:kr(f.z,n.u);r.insertBefore(o,r.childNodes[i.r])}e&&lr(r,e);return r}(r,n);case 5:return n.s(r);default:j(10)}}function Jr(r){if(3===r.nodeType)return dr(r.textContent);if(1!==r.nodeType)return dr("");for(var n=$,t=r.attributes,e=t.length;e--;){var u=t[e];n=g(b(gr,u.name,u.value),n)}var a=r.tagName.toLowerCase(),i=$,f=r.childNodes;for(e=f.length;e--;)i=g(Jr(f[e]),i);return s(hr,a,n,i)}var Yr=u(function(n,r,t,f){return tr(r,f,n.cp,n.cY,n.cS,function(e,r){var u=n.c_,a=f.node,i=Jr(a);return Gr(r,function(r){var n=u(r),t=Lr(i,n);a=Ir(a,i,t,e),i=n})})}),Kr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(r){setTimeout(r,1e3/60)};function Gr(t,e){e(t);var u=0;function a(){u=1===u?0:(Kr(a),e(t),1)}return function(r,n){t=r,n?(e(t),2===u&&(u=1)):(0===u&&Kr(a),u=2)}}var Qr={addEventListener:function(){},removeEventListener:function(){}};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Hr=f,Wr=_,Ur=t(function(r,n,t){for(;;){if(!t.b)return n;var e=t.b,u=r,a=b(r,t.a,n);r=u,n=a,t=e}}),Vr=function(r){return s(Ur,Hr,$,r)},Xr=u(function(r,n,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,f=a.b;if(f.b){var o=f.a,c=f.b;if(c.b){var v=c.b;return b(r,u,b(r,i,b(r,o,b(r,c.a,500<t?s(Ur,r,n,Vr(v)):l(Xr,r,n,t+1,v)))))}return b(r,u,b(r,i,b(r,o,n)))}return b(r,u,b(r,i,n))}return b(r,u,n)}return n}),Zr=t(function(r,n,t){return l(Xr,r,n,0,t)}),rn=e(function(t,r){return s(Zr,e(function(r,n){return b(Hr,t(r),n)}),$,r)}),nn=t(function(r,n,t){for(;;){if(1<=c(r,n))return t;var e=r,u=n-1,a=b(Hr,n,t);r=e,n=u,t=a}}),tn=e(function(r,n){return s(nn,r,n,$)}),en=function(r){return!r.$},un=u(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),an=E,fn=e(function(r,n){return P(n)/P(r)}),on=an(b(fn,2,32)),cn=[],vn=l(un,0,on,cn,cn),sn=A,bn=e(function(r,n){for(;;){var t=b(sn,32,r),e=t.b,u=b(Hr,{$:0,a:t.a},n);if(!e.b)return Vr(u);r=e,n=u}}),ln=e(function(r,n){for(;;){var t=an(n/32);if(1===t)return b(sn,32,r).a;r=b(bn,r,$),n=t}}),dn=L,hn=e(function(r,n){return 0<c(r,n)?r:n}),$n=function(r){return r.length},gn=e(function(r,n){if(n.k){var t=32*n.k,e=dn(b(fn,32,t-1)),u=r?Vr(n.o):n.o,a=b(ln,u,n.k);return l(un,$n(n.n)+t,b(hn,5,e*on),a,n.n)}return l(un,$n(n.n),on,cn,n.n)}),pn=w,mn=a(function(r,n,t,e,u){for(;;){if(n<0)return b(gn,!1,{o:e,k:t/32|0,n:u});var a={$:1,a:s(pn,32,n,r)};r=r,n=n-32,t=t,e=b(Hr,a,e),u=u}}),yn=e(function(r,n){if(0<r){var t=r%32;return d(mn,n,r-t-32,r,$,s(pn,t,r-t,n))}return vn}),kn=function(r){return{$:0,a:r}},wn={$:1},An=function(r){return{$:1,a:r}},jn=function(r){return{$:0,a:r}},_n=e(function(r,n){return{$:3,a:r,b:n}}),Tn=e(function(r,n){return{$:0,a:r,b:n}}),Nn=e(function(r,n){return{$:1,a:r,b:n}}),En=function(r){return{$:2,a:r}},Ln=q,xn=e(function(r,n){return b(C,r,o(n))}),Pn=function(r){return{$:2,m:r}}($),Cn=function(r){return{$:0,a:r}},qn=t(function(r,n,t){return{a$:t,bN:n,bQ:r}}),Sn=Y,Fn=Sn(s(qn,$,wn,0)),Mn=function(r){return r},zn=Sn(0),Bn=G,On=e(function(n,r){return b(Bn,function(r){return Sn(n(r))},r)}),In=t(function(t,r,e){return b(Bn,function(n){return b(Bn,function(r){return Sn(b(t,n,r))},e)},r)}),Rn=function(r){return s(Zr,In(Hr),Sn($),r)},Dn=ir,Jn=e(function(r,n){var t=n;return W(b(Bn,Dn(r),t))});er.Task=ur(zn,t(function(r,n){return b(On,function(){return 0},Rn(b(rn,Jn(r),n)))}),t(function(){return Sn(0)}),e(function(r,n){return b(On,r,n)}));or("Task");var Yn=function(r){return{$:0,a:r}},Kn=function(r){switch(r.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Gn=K(function(r){r(Y(Date.now()))}),Qn=K(function(r){var n=requestAnimationFrame(function(){r(Y(Date.now()))});return function(){cancelAnimationFrame(n)}}),Hn=fr,Wn=function(t){return K(function(r){var n=t.f;2===n.$&&n.c&&n.c(),t.f=null,r(Y(v))})},Un=W,Vn=t(function(r,t,n){var e=n.bN,u=n.a$,a=m(e,t);if(1!==a.a.$)return a.b.b?Sn(s(qn,t,e,u)):b(Bn,function(){return Fn},Wn(a.a.a));if(a.b.b){return b(Bn,function(n){return b(Bn,function(r){return Sn(s(qn,t,kn(n),r))},Gn)},Un(b(Bn,Hn(r),Qn)))}return Fn}),Xn=Mn,Zn=t(function(n,t,r){var e=r.bQ,u=r.a$,a=function(r){return b(Dn,n,r.$?(0,r.a)(t-u):(0,r.a)(Xn(t)))};return b(Bn,function(r){return b(Bn,function(){return Sn(s(qn,e,kn(r),t))},Rn(b(rn,a,e)))},Un(b(Bn,Hn(n),Qn)))}),rt=t(function(r,n,t){return r(n(t))});er["Browser.AnimationManager"]=ur(Fn,Vn,Zn,0,e(function(r,n){return n.$?{$:1,a:b(rt,r,n.a)}:Cn(b(rt,r,n.a))}));var nt,tt=or("Browser.AnimationManager"),et=function(r){return tt(Cn(r))},ut=T,at=N,it=e(function(r,n){var t=r,e=function(r){return(r+1)/2};return m(b(rn,function(r){return y(r,{aK:e(at(t/(300+r.aI)+r.ax))*(500-500/6*2)+500/6,aL:e(ut(t/(500-r.aI)+r.ax+4543))*(500-500/6*2)+500/6})},n),Pn)}),ft=function(r){return{$:1,a:r}},ot=function(r){return{$:2,a:ft(r)}},ct=t(function(r,n,t){return{$:0,a:r,b:n,c:t}}),vt=t(function(r,n,t){return s(ct,r,n,t)}),st={$:0},bt=e(function(r,n){return{$:3,a:r,b:n}}),lt=e(function(r,n){var t=m(r,n);r:for(;;)switch(t.b.$){case 3:var e=t.b;return b(bt,e.a,e.b);case 1:switch(t.a.$){case 1:return ft(t.b.a);case 2:return b(bt,t.b.a,t.a.a);case 3:var u=t.a;return b(bt,t.b.a,u.b);default:break r}case 2:switch(t.a.$){case 2:return{$:2,a:t.b.a};case 1:return b(bt,t.a.a,t.b.a);case 3:var a=t.a;return b(bt,a.a,t.b.a);default:break r}default:if(t.a.$){return t.a}break r}return t.b}),dt=e(function(r,n){return s(Ur,e(function(r,n){var t=n;switch(r.$){case 0:return y(t,{P:b(Hr,r.a,t.P)});case 1:return y(t,{P:s(Ur,Hr,t.P,r.a)});case 3:return y(t,{al:(0,r.a)(t.al)});default:return y(t,{ak:b(lt,t.ak,r.a)})}}),n,r)}),ht=e(function(r,n){return b(dt,r,{P:$,ak:st,al:(t=n,{$:1,a:t})});var t}),$t=e(function(r,n){return R(s(Ur,function(t){return e(function(r,n){return n.push(D(t(r))),n})}(r),[],n))}),gt=function(r){return R(s(Ur,e(function(r,n){return s(J,r.a,r.b,n)}),{},r))},pt=R,mt=e(function(r,n){return gt(p([m("type",pt("function")),m("name",pt(r)),m("args",b($t,Mn,n))]))}),yt=R,kt=a(function(r,n,t,e,u){return b(mt,"arcTo",p([yt(r),yt(n),yt(t),yt(e),yt(u)]))}),wt=i(function(r,n,t,e,u,a){return b(mt,"bezierCurveTo",p([yt(r),yt(n),yt(t),yt(e),yt(u),yt(a)]))}),At=e(function(r,n){return b(mt,"lineTo",p([yt(r),yt(n)]))}),jt=e(function(r,n){return b(mt,"moveTo",p([yt(r),yt(n)]))}),_t=u(function(r,n,t,e){return b(mt,"quadraticCurveTo",p([yt(r),yt(n),yt(t),yt(e)]))}),Tt=e(function(r,n){switch(r.$){case 0:var t=r.a,e=r.b;return b(Hr,d(kt,t.a,t.b,e.a,e.b,r.c),n);case 1:var u=r.a,a=r.b,i=r.c;return b(Hr,h(wt,u.a,u.b,a.a,a.b,i.a,i.b),n);case 2:var f=r.a;return b(Hr,b(At,f.a,f.b),n);case 3:var o=r.a;return b(Hr,b(jt,o.a,o.b),n);default:var c=r.a,v=r.b;return b(Hr,l(_t,c.a,c.b,v.a,v.b),n)}}),Nt=R,Et=i(function(r,n,t,e,u,a){return b(mt,"arc",p([yt(r),yt(n),yt(t),yt(e),yt(u),Nt(a)]))}),Lt=t(function(r,n,t){return h(Et,r,n,t,0,6.283185307179586,!1)}),xt=u(function(r,n,t,e){return b(mt,"rect",p([yt(r),yt(n),yt(t),yt(e)]))}),Pt=e(function(r,n){switch(r.$){case 0:var t=r.a;return b(Hr,l(xt,f=t.a,o=t.b,r.b,r.c),b(Hr,b(jt,f,o),n));case 1:var e=r.a,u=r.b;return b(Hr,s(Lt,f=e.a,o=e.b,u),b(Hr,b(jt,f+u,o),n));case 2:var a=r.a,i=r.b;return s(Ur,Tt,b(Hr,b(jt,f=a.a,o=a.b),n),i);default:var f,o,c=r.a,v=r.c;return b(Hr,h(Et,f=c.a,o=c.b,r.b,v,r.d,r.e),b(Hr,b(jt,f+ut(v),o+at(v)),n))}}),Ct=e(function(r,n){return gt(p([m("type",pt("field")),m("name",pt(r)),m("value",n)]))}),qt=x,St=q,Ft=function(r){var n,t,e=r.b,u=r.c,a=r.d,i=function(r){return qt(1e4*r)/100};return n=p(["rgba(",St(i(r.a)),"%,",St(i(e)),"%,",St(i(u)),"%,",St((t=a,qt(1e3*t)/1e3)),")"]),b(xn,"",n)},Mt=function(r){return b(Ct,"fillStyle",pt(Ft(r)))},zt=e(function(r,n){return b(Hr,b(mt,"fill",p([pt(function(r){return r?"evenodd":"nonzero"}(0))])),b(Hr,Mt(r),n))}),Bt=b(mt,"stroke",$),Ot=function(r){return b(Ct,"strokeStyle",pt(Ft(r)))},It=e(function(r,n){return b(Hr,Bt,b(Hr,Ot(r),n))}),Rt=u(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),Dt=l(Rt,0,0,0,1),Jt=e(function(r,n){switch(r.$){case 0:return b(zt,Dt,n);case 1:return b(zt,r.a,n);case 2:return b(It,r.a,n);default:return b(It,r.b,b(zt,r.a,n))}}),Yt=u(function(r,n,t,e){if(1===e.$)return b(mt,"fillText",p([pt(r),yt(n),yt(t)]));var u=e.a;return b(mt,"fillText",p([pt(r),yt(n),yt(t),yt(u)]))}),Kt=a(function(r,n,t,e,u){return b(Hr,l(Yt,r.aJ,n,t,r.ap),b(Hr,Mt(e),u))}),Gt=u(function(r,n,t,e){if(1===e.$)return b(mt,"strokeText",p([pt(r),yt(n),yt(t)]));var u=e.a;return b(mt,"strokeText",p([pt(r),yt(n),yt(t),yt(u)]))}),Qt=a(function(r,n,t,e,u){return b(Hr,l(Gt,r.aJ,n,t,r.ap),b(Hr,Ot(e),u))}),Ht=t(function(r,n,t){var e=n.a8,u=e.a,a=e.b;switch(r.$){case 0:return d(Kt,n,u,a,Dt,t);case 1:return d(Kt,n,u,a,r.a,t);case 2:return d(Qt,n,u,a,r.a,t);default:return d(Qt,n,u,a,r.b,d(Kt,n,u,a,r.a,t))}}),Wt=t(function(r,n,t){return s(Ht,r,n,t)}),Ut=b(mt,"beginPath",$),Vt=t(function(r,n,t){if(r.$){var e=r.a;return b(Jt,n,s(Ur,Pt,b(Hr,Ut,t),e))}return s(Wt,n,r.a,t)}),Xt=b(mt,"restore",$),Zt=b(mt,"save",$),re=e(function(r,n){return b(Hr,Xt,s(Vt,r.al,r.ak,k(r.P,b(Hr,Zt,n))))}),ne=$,te=e(function(r,n){return b($r,function(r){return"innerHTML"==r||"formAction"==r?"data-"+r:r}(r),function(r){return/^\s*(javascript:|data:text\/html)/i.test(r)?"":r}(n))}),ee=hr("canvas"),ue=function(r){return hr(function(r){return"script"==r?"p":r}(r))},ae=t(function(r,n,t){var e,u,a=r.a,i=r.b;return s(ue,"elm-canvas",p([(u=function(r){return s(Ur,re,ne,r)}(t),b(te,"cmds",b($t,Mn,u)))]),p([b(ee,b(Hr,(e=i,b(gr,"height",Ln(e))),b(Hr,function(r){return b(gr,"width",Ln(r))}(a),n)),$)]))}),ie=e(function(r,n){return{$:1,a:r,b:n}}),fe=e(function(r,n){return b(ie,r,n)}),oe=function(r){var n=r.cP;return b(fe,m(r.aK,r.aL),n)},ce=l(u(function(r,n,t,e){return l(Rt,r,n,t,e)}),0,0,0,.3),ve=l(Rt,1,1,1,1),se=Yr({cp:function(){return m(b(rn,function(r){return{ax:b(Wr,4435,2346*r),cP:b(Wr,2,r)+1,aI:b(Wr,345,4236*r),aK:250,aL:250}},b(tn,0,1e3)),Pn)},cS:function(){return et(Mn)},cY:it,c_:function(r){return s(ae,m(qt(500),qt(500)),$,p([b(ht,p([ot(ve)]),p([s(vt,m(0,0),500,500)])),b(ht,p([ot(ce)]),b(rn,oe,r))]))}});nt={Examples:{Particles:{init:se(Yn(0))(0)}}},r.Elm?function r(n,t){for(var e in t)e in n?"init"==e?j(6):r(n[e],t[e]):n[e]=t[e]}(r.Elm,nt):r.Elm=nt}(this);