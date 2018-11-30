!function(r){"use strict";function n(r,n,t){return t.a=r,t.f=n,t}function e(t){return n(2,t,function(n){return function(r){return t(n,r)}})}function t(e){return n(3,e,function(t){return function(n){return function(r){return e(t,n,r)}}})}function u(u){return n(4,u,function(e){return function(t){return function(n){return function(r){return u(e,t,n,r)}}}})}function a(a){return n(5,a,function(u){return function(e){return function(t){return function(n){return function(r){return a(u,e,t,n,r)}}}}})}function i(i){return n(6,i,function(a){return function(u){return function(e){return function(t){return function(n){return function(r){return i(a,u,e,t,n,r)}}}}}})}function l(r,n,t){return 2===r.a?r.f(n,t):r(n)(t)}function d(r,n,t,e){return 3===r.a?r.f(n,t,e):r(n)(t)(e)}function s(r,n,t,e,u){return 4===r.a?r.f(n,t,e,u):r(n)(t)(e)(u)}function b(r,n,t,e,u,a){return 5===r.a?r.f(n,t,e,u,a):r(n)(t)(e)(u)(a)}function h(r,n,t,e,u,a,i){return 6===r.a?r.f(n,t,e,u,a,i):r(n)(t)(e)(u)(a)(i)}var $={$:0};function g(r,n){return{$:1,a:r,b:n}}var f=e(g);function m(r){for(var n=$,t=r.length;t--;)n=g(r[t],n);return n}function o(r){for(var n=[];r.b;r=r.b)n.push(r.a);return n}function c(r,n,t){if("object"!=typeof r)return r===n?0:r<n?-1:1;if(!r.$)return(t=c(r.a,n.a))?t:(t=c(r.b,n.b))?t:c(r.c,n.c);for(;r.b&&n.b&&!(t=c(r.a,n.a));r=r.b,n=n.b);return t||(r.b?1:n.b?-1:0)}var v=0;function p(r,n){return{a:r,b:n}}function y(r,n){var t={};for(var e in r)t[e]=r[e];for(var e in n)t[e]=n[e];return t}function k(r,n){if("string"==typeof r)return r+n;if(!r.b)return n;var t=g(r.a,n);r=r.b;for(var e=t;r.b;r=r.b)e=e.b=g(r.a,n);return t}var w=t(function(r,n,t){for(var e=Array(r),u=0;u<r;u++)e[u]=t(n+u);return e}),A=e(function(r,n){for(var t=Array(r),e=0;e<r&&n.b;e++)t[e]=n.a,n=n.b;return t.length=e,p(t,n)});function j(r){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+r+".md")}var _=e(Math.pow),T=Math.cos,N=Math.sin;var E=Math.ceil,L=Math.floor,x=Math.round,M=Math.log;var q=e(function(r,n){return n.join(r)});function C(r){return r+""}var F=e(function(r,n){return P(r,I(n))});function P(r,n){switch(r.$){case 3:return"boolean"==typeof n?yn(n):O("a BOOL",n);case 2:return"number"!=typeof n?O("an INT",n):-2147483647<n&&n<2147483647&&(0|n)===n?yn(n):!isFinite(n)||n%1?O("an INT",n):yn(n);case 4:return"number"==typeof n?yn(n):O("a FLOAT",n);case 6:return"string"==typeof n?yn(n):n instanceof String?yn(n+""):O("a STRING",n);case 9:return null===n?yn(r.c):O("null",n);case 5:return yn(D(n));case 7:return Array.isArray(n)?z(r.b,n,m):O("a LIST",n);case 8:return Array.isArray(n)?z(r.b,n,B):O("an ARRAY",n);case 10:var t=r.d;if("object"!=typeof n||null===n||!(t in n))return O("an OBJECT with a field named `"+t+"`",n);var e=P(r.b,n[t]);return Hr(e)?e:pn(l(wn,t,e.a));case 11:var u=r.e;if(!Array.isArray(n))return O("an ARRAY",n);if(n.length<=u)return O("a LONGER array. Need index "+u+" but only see "+n.length+" entries",n);e=P(r.b,n[u]);return Hr(e)?e:pn(l(An,u,e.a));case 12:if("object"!=typeof n||null===n||Array.isArray(n))return O("an OBJECT",n);var a=$;for(var i in n)if(n.hasOwnProperty(i)){e=P(r.b,n[i]);if(!Hr(e))return pn(l(wn,i,e.a));a=g(p(i,e.a),a)}return yn(fn(a));case 13:for(var f=r.f,o=r.g,c=0;c<o.length;c++){e=P(o[c],n);if(!Hr(e))return e;f=f(e.a)}return yn(f);case 14:e=P(r.b,n);return Hr(e)?P(r.h(e.a),n):e;case 15:for(var v=$,s=r.g;s.b;s=s.b){e=P(s.a,n);if(Hr(e))return e;v=g(e.a,v)}return pn(jn(fn(v)));case 1:return pn(l(kn,r.a,D(n)));case 0:return yn(r.a)}}function z(r,n,t){for(var e=n.length,u=Array(e),a=0;a<e;a++){var i=P(r,n[a]);if(!Hr(i))return pn(l(An,a,i.a));u[a]=i.a}return yn(t(u))}function B(n){return l($n,n.length,function(r){return n[r]})}function O(r,n){return pn(l(kn,"Expecting "+r,D(n)))}function S(r,n){if(r===n)return!0;if(r.$!==n.$)return!1;switch(r.$){case 0:case 1:return r.a===n.a;case 3:case 2:case 4:case 6:case 5:return!0;case 9:return r.c===n.c;case 7:case 8:case 12:return S(r.b,n.b);case 10:return r.d===n.d&&S(r.b,n.b);case 11:return r.e===n.e&&S(r.b,n.b);case 13:return r.f===n.f&&R(r.g,n.g);case 14:return r.h===n.h&&S(r.b,n.b);case 15:return R(r.g,n.g)}}function R(r,n){var t=r.length;if(t!==n.length)return!1;for(var e=0;e<t;e++)if(!S(r[e],n[e]))return!1;return!0}function D(r){return r}function I(r){return r}var J=t(function(r,n,t){return t[r]=I(n),t});D(null);function Y(r){return{$:0,a:r}}function G(r){return{$:2,b:r,c:null}}var W=e(function(r,n){return{$:3,b:r,d:n}});var X=0;function K(r){var n={$:0,e:X++,f:r,g:null,h:[]};return rr(n),n}function Q(n){return G(function(r){r(Y(K(n)))})}function H(r,n){r.h.push(n),rr(r)}var U=e(function(n,t){return G(function(r){H(n,t),r(Y(v))})});var V=!1,Z=[];function rr(r){if(Z.push(r),!V){for(V=!0;r=Z.shift();)nr(r);V=!1}}function nr(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,rr(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}function tr(r,n,t,e,u,a){var i=l(F,r,D(n?n.flags:void 0));Hr(i)||j(2);var f={},o=(i=t(i.a)).a,c=a(s,o),v=function(r,n){var t;for(var e in er){var u=er[e];u.a&&((t=t||{})[e]=u.a(e,n)),r[e]=ar(u,n)}return t}(f,s);function s(r,n){c(o=(i=l(e,r,o)).a,n),vr(f,i.b,u(o))}return vr(f,i.b,u(o)),v?{ports:v}:{}}var er={};function ur(r,n,t,e,u){return{b:r,c:n,d:t,e:e,f:u}}function ar(r,n){var e={g:n,h:void 0},u=r.c,a=r.d,i=r.e,f=r.f;function o(t){return l(W,o,{$:5,b:function(r){var n=r.a;return 0===r.$?d(a,e,n,t):i&&f?s(u,e,n.i,n.j,t):d(u,e,i?n.i:n.j,t)}})}return e.h=K(l(W,o,r.b))}var ir=e(function(n,t){return G(function(r){n.g(t),r(Y(v))})}),fr=e(function(r,n){return l(U,r.h,{$:0,a:n})});function or(n){return function(r){return{$:1,k:n,l:r}}}function cr(r){return{$:2,m:r}}function vr(r,n,t){var e={};for(var u in sr(!0,n,e,null),sr(!1,t,e,null),r)H(r[u],{$:"fx",a:e[u]||{i:$,j:$}})}function sr(r,n,t,e){switch(n.$){case 1:var u=n.k,a=function(r,n,t,e){function u(r){for(var n=t;n;n=n.q)r=n.p(r);return r}return l(r?er[n].e:er[n].f,u,e)}(r,u,e,n.l);return void(t[u]=function(r,n,t){return t=t||{i:$,j:$},r?t.i=g(n,t.i):t.j=g(n,t.j),t}(r,a,t[u]));case 2:for(var i=n.m;i.b;i=i.b)sr(r,i.a,t,e);return;case 3:return void sr(r,n.o,t,{p:n.n,q:e})}}var br;var lr="undefined"!=typeof document?document:{};function dr(r,n){r.appendChild(n)}function hr(r){return{$:0,a:r}}var $r=e(function(a,i){return e(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:kr(r),e:t,f:a,b:e}})})(void 0);e(function(a,i){return e(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:kr(r),e:t,f:a,b:e}})})(void 0);var gr=e(function(r,n){return{$:"a0",n:r,o:n}}),mr=e(function(r,n){return{$:"a2",n:r,o:n}}),pr=e(function(r,n){return{$:"a3",n:r,o:n}});var yr;function kr(r){for(var n={};r.b;r=r.b){var t=r.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=n[e]||(n[e]={});"a3"===e&&"class"===u?wr(i,u,a):i[u]=a}else"className"===u?wr(n,u,I(a)):n[u]=I(a)}return n}function wr(r,n,t){var e=r[n];r[n]=e?e+" "+t:t}function Ar(r,n){var t=r.$;if(5===t)return Ar(r.k||(r.k=r.m()),n);if(0===t)return lr.createTextNode(r.a);if(4===t){for(var e=r.k,u=r.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:n};return(i=Ar(e,a)).elm_event_node_ref=a,i}if(3===t)return jr(i=r.h(r.g),n,r.d),i;var i=r.f?lr.createElementNS(r.f,r.c):lr.createElement(r.c);br&&"a"==r.c&&i.addEventListener("click",br(i)),jr(i,n,r.d);for(var f=r.e,o=0;o<f.length;o++)dr(i,Ar(1===t?f[o]:f[o].b,n));return i}function jr(r,n,t){for(var e in t){var u=t[e];"a1"===e?_r(r,u):"a0"===e?Er(r,n,u):"a3"===e?Tr(r,u):"a4"===e?Nr(r,u):("value"!==e||"checked"!==e||r[e]!==u)&&(r[e]=u)}}function _r(r,n){var t=r.style;for(var e in n)t[e]=n[e]}function Tr(r,n){for(var t in n){var e=n[t];e?r.setAttribute(t,e):r.removeAttribute(t)}}function Nr(r,n){for(var t in n){var e=n[t],u=e.f,a=e.o;a?r.setAttributeNS(u,t,a):r.removeAttributeNS(u,t)}}function Er(r,n,t){var e=r.elmFs||(r.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}r.removeEventListener(u,i)}i=Lr(n,a),r.addEventListener(u,i,yr&&{passive:Gn(a)<2}),e[u]=i}else r.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){yr=!0}}))}catch(r){}function Lr(v,r){function s(r){var n=s.q,t=P(n.a,r);if(Hr(t)){for(var e,u=Gn(n),a=t.a,i=u?u<3?a.a:a.L:a,f=1==u?a.b:3==u&&a.ba,o=(f&&r.stopPropagation(),(2==u?a.b:3==u&&a.a5)&&r.preventDefault(),v);e=o.j;){if("function"==typeof e)i=e(i);else for(var c=e.length;c--;)i=e[c](i);o=o.p}o(i,f)}}return s.q=r,s}function xr(r,n){return r.$==n.$&&S(r.a,n.a)}function Mr(r,n){var t=[];return Cr(r,n,t,0),t}function qr(r,n,t,e){var u={$:n,r:t,s:e,t:void 0,u:void 0};return r.push(u),u}function Cr(r,n,t,e){if(r!==n){var u=r.$,a=n.$;if(u!==a){if(1!==u||2!==a)return void qr(t,0,e,n);n=function(r){for(var n=r.e,t=n.length,e=Array(t),u=0;u<t;u++)e[u]=n[u].b;return{$:1,c:r.c,d:r.d,e:e,f:r.f,b:r.b}}(n),a=1}switch(a){case 5:for(var i=r.l,f=n.l,o=i.length,c=o===f.length;c&&o--;)c=i[o]===f[o];if(c)return void(n.k=r.k);n.k=n.m();var v=[];return Cr(r.k,n.k,v,0),void(0<v.length&&qr(t,1,e,v));case 4:for(var s=r.j,b=n.j,l=!1,d=r.k;4===d.$;)l=!0,"object"!=typeof s?s=[s,d.j]:s.push(d.j),d=d.k;for(var h=n.k;4===h.$;)l=!0,"object"!=typeof b?b=[b,h.j]:b.push(h.j),h=h.k;return l&&s.length!==b.length?void qr(t,0,e,n):((l?function(r,n){for(var t=0;t<r.length;t++)if(r[t]!==n[t])return!1;return!0}(s,b):s===b)||qr(t,2,e,b),void Cr(d,h,t,e+1));case 0:return void(r.a!==n.a&&qr(t,3,e,n.a));case 1:return void Fr(r,n,t,e,zr);case 2:return void Fr(r,n,t,e,Br);case 3:if(r.h!==n.h)return void qr(t,0,e,n);var $=Pr(r.d,n.d);$&&qr(t,4,e,$);var g=n.i(r.g,n.g);return void(g&&qr(t,5,e,g))}}}function Fr(r,n,t,e,u){if(r.c===n.c&&r.f===n.f){var a=Pr(r.d,n.d);a&&qr(t,4,e,a),u(r,n,t,e)}else qr(t,0,e,n)}function Pr(r,n,t){var e;for(var u in r)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in n){var a=r[u],i=n[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&xr(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:r[u].f,o:void 0}:"string"==typeof r[u]?"":null;else{var f=Pr(r[u],n[u]||{},u);f&&((e=e||{})[u]=f)}for(var o in n)o in r||((e=e||{})[o]=n[o]);return e}function zr(r,n,t,e){var u=r.e,a=n.e,i=u.length,f=a.length;f<i?qr(t,6,e,{v:f,i:i-f}):i<f&&qr(t,7,e,{v:i,e:a});for(var o=i<f?i:f,c=0;c<o;c++){var v=u[c];Cr(v,a[c],t,++e),e+=v.b||0}}function Br(r,n,t,e){for(var u=[],a={},i=[],f=r.e,o=n.e,c=f.length,v=o.length,s=0,b=0,l=e;s<c&&b<v;){var d=(T=f[s]).a,h=(N=o[b]).a,$=T.b,g=N.b;if(d!==h){var m=f[s+1],p=o[b+1];if(m)var y=m.a,k=m.b,w=h===y;if(p)var A=p.a,j=p.b,_=d===A;if(_&&w)Cr($,j,u,++l),Sr(a,u,d,g,b,i),l+=$.b||0,Rr(a,u,d,k,++l),l+=k.b||0,s+=2,b+=2;else if(_)l++,Sr(a,u,h,g,b,i),Cr($,j,u,l),l+=$.b||0,s+=1,b+=2;else if(w)Rr(a,u,d,$,++l),l+=$.b||0,Cr(k,g,u,++l),l+=k.b||0,s+=2,b+=1;else{if(!m||y!==A)break;Rr(a,u,d,$,++l),Sr(a,u,h,g,b,i),l+=$.b||0,Cr(k,j,u,++l),l+=k.b||0,s+=2,b+=2}}else Cr($,g,u,++l),l+=$.b||0,s++,b++}for(;s<c;){var T;Rr(a,u,(T=f[s]).a,$=T.b,++l),l+=$.b||0,s++}for(;b<v;){var N,E=E||[];Sr(a,u,(N=o[b]).a,N.b,void 0,E),b++}(0<u.length||0<i.length||E)&&qr(t,8,e,{w:u,x:i,y:E})}var Or="_elmW6BL";function Sr(r,n,t,e,u,a){var i=r[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(r[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var f=[];return Cr(i.z,e,f,i.r),i.r=u,void(i.s.s={w:f,A:i})}Sr(r,n,t+Or,e,u,a)}function Rr(r,n,t,e,u){var a=r[t];if(a){if(0===a.c){a.c=2;var i=[];return Cr(e,a.z,i,u),void qr(n,9,u,{w:i,A:a})}Rr(r,n,t+Or,e,u)}else{var f=qr(n,9,u,void 0);r[t]={c:1,z:e,r:u,s:f}}}function Dr(r,n,t,e){!function r(n,t,e,u,a,i,f){var o=e[u];var c=o.r;for(;c===a;){var v=o.$;if(1===v)Dr(n,t.k,o.s,f);else if(8===v){o.t=n,o.u=f;var s=o.s.w;0<s.length&&r(n,t,s,0,a,i,f)}else if(9===v){o.t=n,o.u=f;var b=o.s;if(b){b.A.s=n;var s=b.w;0<s.length&&r(n,t,s,0,a,i,f)}}else o.t=n,o.u=f;if(!(o=e[++u])||(c=o.r)>i)return u}var l=t.$;if(4===l){for(var d=t.k;4===d.$;)d=d.k;return r(n,d,e,u,a+1,i,n.elm_event_node_ref)}var h=t.e;var $=n.childNodes;for(var g=0;g<h.length;g++){var m=1===l?h[g]:h[g].b,p=++a+(m.b||0);if(a<=c&&c<=p&&(u=r($[g],m,e,u,a,p,f),!(o=e[u])||(c=o.r)>i))return u;a=p}return u}(r,n,t,0,0,n.b,e)}function Ir(r,n,t,e){return 0===t.length?r:(Dr(r,n,t,e),Jr(r,t))}function Jr(r,n){for(var t=0;t<n.length;t++){var e=n[t],u=e.t,a=Yr(u,e);u===r&&(r=a)}return r}function Yr(r,n){switch(n.$){case 0:return function(r,n,t){var e=r.parentNode,u=Ar(n,t);u.elm_event_node_ref||(u.elm_event_node_ref=r.elm_event_node_ref);e&&u!==r&&e.replaceChild(u,r);return u}(r,n.s,n.u);case 4:return jr(r,n.u,n.s),r;case 3:return r.replaceData(0,r.length,n.s),r;case 1:return Jr(r,n.s);case 2:return r.elm_event_node_ref?r.elm_event_node_ref.j=n.s:r.elm_event_node_ref={j:n.s,p:n.u},r;case 6:for(var t=n.s,e=0;e<t.i;e++)r.removeChild(r.childNodes[t.v]);return r;case 7:for(var u=(t=n.s).e,a=r.childNodes[e=t.v];e<u.length;e++)r.insertBefore(Ar(u[e],n.u),a);return r;case 9:if(!(t=n.s))return r.parentNode.removeChild(r),r;var i=t.A;return void 0!==i.r&&r.parentNode.removeChild(r),i.s=Jr(r,t.w),r;case 8:return function(r,n){var t=n.s,e=function(r,n){if(!r)return;for(var t=lr.createDocumentFragment(),e=0;e<r.length;e++){var u=r[e],a=u.A;dr(t,2===a.c?a.s:Ar(a.z,n.u))}return t}(t.y,n);r=Jr(r,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],f=i.A,o=2===f.c?f.s:Ar(f.z,n.u);r.insertBefore(o,r.childNodes[i.r])}e&&dr(r,e);return r}(r,n);case 5:return n.s(r);default:j(10)}}function Gr(r){if(3===r.nodeType)return hr(r.textContent);if(1!==r.nodeType)return hr("");for(var n=$,t=r.attributes,e=t.length;e--;){var u=t[e];n=g(l(pr,u.name,u.value),n)}var a=r.tagName.toLowerCase(),i=$,f=r.childNodes;for(e=f.length;e--;)i=g(Gr(f[e]),i);return d($r,a,n,i)}var Wr=u(function(n,r,t,f){return tr(r,f,n.cm,n.cW,n.cQ,function(e,r){var u=n.cY,a=f.node,i=Gr(a);return Kr(r,function(r){var n=u(r),t=Mr(i,n);a=Ir(a,i,t,e),i=n})})}),Xr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(r){setTimeout(r,1e3/60)};function Kr(t,e){e(t);var u=0;function a(){u=1===u?0:(Xr(a),e(t),1)}return function(r,n){t=r,n?(e(t),2===u&&(u=1)):(0===u&&Xr(a),u=2)}}var Qr={addEventListener:function(){},removeEventListener:function(){}};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Hr=function(r){return!r.$},Ur=f,Vr=u(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),Zr=E,rn=e(function(r,n){return M(n)/M(r)}),nn=Zr(l(rn,2,32)),tn=[],en=s(Vr,0,nn,tn,tn),un=A,an=t(function(r,n,t){for(;;){if(!t.b)return n;var e=t.b,u=r,a=l(r,t.a,n);r=u,n=a,t=e}}),fn=function(r){return d(an,Ur,$,r)},on=e(function(r,n){for(;;){var t=l(un,32,r),e=t.b,u=l(Ur,{$:0,a:t.a},n);if(!e.b)return fn(u);r=e,n=u}}),cn=e(function(r,n){for(;;){var t=Zr(n/32);if(1===t)return l(un,32,r).a;r=l(on,r,$),n=t}}),vn=L,sn=e(function(r,n){return 0<c(r,n)?r:n}),bn=function(r){return r.length},ln=e(function(r,n){if(n.k){var t=32*n.k,e=vn(l(rn,32,t-1)),u=r?fn(n.o):n.o,a=l(cn,u,n.k);return s(Vr,bn(n.n)+t,l(sn,5,e*nn),a,n.n)}return s(Vr,bn(n.n),nn,tn,n.n)}),dn=w,hn=a(function(r,n,t,e,u){for(;;){if(n<0)return l(ln,!1,{o:e,k:t/32|0,n:u});var a={$:1,a:d(dn,32,n,r)};r=r,n=n-32,t=t,e=l(Ur,a,e),u=u}}),$n=e(function(r,n){if(0<r){var t=r%32;return b(hn,n,r-t-32,r,$,d(dn,t,r-t,n))}return en}),gn=function(r){return{$:0,a:r}},mn={$:1},pn=function(r){return{$:1,a:r}},yn=function(r){return{$:0,a:r}},kn=e(function(r,n){return{$:3,a:r,b:n}}),wn=e(function(r,n){return{$:0,a:r,b:n}}),An=e(function(r,n){return{$:1,a:r,b:n}}),jn=function(r){return{$:2,a:r}},_n=C,Tn=e(function(r,n){return l(q,r,o(n))}),Nn=cr($),En=function(r){return{$:0,a:r}},Ln=function(r){return{$:0,a:r}},xn=t(function(r,n,t){return{aX:t,bJ:n,bM:r}}),Mn=Y,qn=Mn(d(xn,$,mn,0)),Cn=function(r){return r},Fn=Mn(0),Pn=u(function(r,n,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,f=a.b;if(f.b){var o=f.a,c=f.b;if(c.b){var v=c.b;return l(r,u,l(r,i,l(r,o,l(r,c.a,500<t?d(an,r,n,fn(v)):s(Pn,r,n,t+1,v)))))}return l(r,u,l(r,i,l(r,o,n)))}return l(r,u,l(r,i,n))}return l(r,u,n)}return n}),zn=t(function(r,n,t){return s(Pn,r,n,0,t)}),Bn=e(function(t,r){return d(zn,e(function(r,n){return l(Ur,t(r),n)}),$,r)}),On=W,Sn=e(function(n,r){return l(On,function(r){return Mn(n(r))},r)}),Rn=t(function(t,r,e){return l(On,function(n){return l(On,function(r){return Mn(l(t,n,r))},e)},r)}),Dn=function(r){return d(zn,Rn(Ur),Mn($),r)},In=ir,Jn=e(function(r,n){var t=n;return Q(l(On,In(r),t))});er.Task=ur(Fn,t(function(r,n){return l(Sn,function(){return 0},Dn(l(Bn,Jn(r),n)))}),t(function(){return Mn(0)}),e(function(r,n){return l(Sn,r,n)}));or("Task");var Yn=function(r){return{$:0,a:r}},Gn=function(r){switch(r.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Wn=G(function(r){r(Y(Date.now()))}),Xn=G(function(r){var n=requestAnimationFrame(function(){r(Y(Date.now()))});return function(){cancelAnimationFrame(n)}}),Kn=fr,Qn=function(t){return G(function(r){var n=t.f;2===n.$&&n.c&&n.c(),t.f=null,r(Y(v))})},Hn=Q,Un=t(function(r,t,n){var e=n.bJ,u=n.aX,a=p(e,t);if(1!==a.a.$)return a.b.b?Mn(d(xn,t,e,u)):l(On,function(){return qn},Qn(a.a.a));if(a.b.b){return l(On,function(n){return l(On,function(r){return Mn(d(xn,t,gn(n),r))},Wn)},Hn(l(On,Kn(r),Xn)))}return qn}),Vn=Cn,Zn=t(function(n,t,r){var e=r.bM,u=r.aX,a=function(r){return l(In,n,r.$?(0,r.a)(t-u):(0,r.a)(Vn(t)))};return l(On,function(r){return l(On,function(){return Mn(d(xn,e,gn(r),t))},Dn(l(Bn,a,e)))},Hn(l(On,Kn(n),Xn)))}),rt=t(function(r,n,t){return r(n(t))});er["Browser.AnimationManager"]=ur(qn,Un,Zn,0,e(function(r,n){return n.$?{$:1,a:l(rt,r,n.a)}:Ln(l(rt,r,n.a))}));var nt,tt=or("Browser.AnimationManager"),et=function(r){return tt(Ln(r))},ut=cr($),at=e(function(r,n){var t=n.a;return p(r.$?p(!t,n.b):p(t,function(r){return r}(r.a)),Nn)}),it=function(r){return{$:1,a:r}},ft=function(r){return{$:2,a:it(r)}},ot=t(function(r,n,t){return{$:0,a:r,b:n,c:t}}),ct=t(function(r,n,t){return d(ot,r,n,t)}),vt={$:0},st=e(function(r,n){return{$:3,a:r,b:n}}),bt=e(function(r,n){var t=p(r,n);r:for(;;)switch(t.b.$){case 3:var e=t.b;return l(st,e.a,e.b);case 1:switch(t.a.$){case 1:return it(t.b.a);case 2:return l(st,t.b.a,t.a.a);case 3:var u=t.a;return l(st,t.b.a,u.b);default:break r}case 2:switch(t.a.$){case 2:return{$:2,a:t.b.a};case 1:return l(st,t.a.a,t.b.a);case 3:var a=t.a;return l(st,a.a,t.b.a);default:break r}default:if(t.a.$){return t.a}break r}return t.b}),lt=e(function(r,n){return d(an,e(function(r,n){var t=n;switch(r.$){case 0:return y(t,{P:l(Ur,r.a,t.P)});case 1:return y(t,{P:d(an,Ur,t.P,r.a)});case 3:return y(t,{al:(0,r.a)(t.al)});default:return y(t,{ak:l(bt,t.ak,r.a)})}}),n,r)}),dt=e(function(r,n){return l(lt,r,{P:$,ak:vt,al:(t=n,{$:1,a:t})});var t}),ht=e(function(r,n){return D(d(an,function(t){return e(function(r,n){return n.push(I(t(r))),n})}(r),[],n))}),$t=function(r){return D(d(an,e(function(r,n){return d(J,r.a,r.b,n)}),{},r))},gt=D,mt=e(function(r,n){return $t(m([p("type",gt("function")),p("name",gt(r)),p("args",l(ht,Cn,n))]))}),pt=D,yt=a(function(r,n,t,e,u){return l(mt,"arcTo",m([pt(r),pt(n),pt(t),pt(e),pt(u)]))}),kt=i(function(r,n,t,e,u,a){return l(mt,"bezierCurveTo",m([pt(r),pt(n),pt(t),pt(e),pt(u),pt(a)]))}),wt=e(function(r,n){return l(mt,"lineTo",m([pt(r),pt(n)]))}),At=e(function(r,n){return l(mt,"moveTo",m([pt(r),pt(n)]))}),jt=u(function(r,n,t,e){return l(mt,"quadraticCurveTo",m([pt(r),pt(n),pt(t),pt(e)]))}),_t=e(function(r,n){switch(r.$){case 0:var t=r.a,e=r.b;return l(Ur,b(yt,t.a,t.b,e.a,e.b,r.c),n);case 1:var u=r.a,a=r.b,i=r.c;return l(Ur,h(kt,u.a,u.b,a.a,a.b,i.a,i.b),n);case 2:var f=r.a;return l(Ur,l(wt,f.a,f.b),n);case 3:var o=r.a;return l(Ur,l(At,o.a,o.b),n);default:var c=r.a,v=r.b;return l(Ur,s(jt,c.a,c.b,v.a,v.b),n)}}),Tt=D,Nt=i(function(r,n,t,e,u,a){return l(mt,"arc",m([pt(r),pt(n),pt(t),pt(e),pt(u),Tt(a)]))}),Et=t(function(r,n,t){return h(Nt,r,n,t,0,6.283185307179586,!1)}),Lt=u(function(r,n,t,e){return l(mt,"rect",m([pt(r),pt(n),pt(t),pt(e)]))}),xt=T,Mt=N,qt=e(function(r,n){switch(r.$){case 0:var t=r.a;return l(Ur,s(Lt,f=t.a,o=t.b,r.b,r.c),l(Ur,l(At,f,o),n));case 1:var e=r.a,u=r.b;return l(Ur,d(Et,f=e.a,o=e.b,u),l(Ur,l(At,f+u,o),n));case 2:var a=r.a,i=r.b;return d(an,_t,l(Ur,l(At,f=a.a,o=a.b),n),i);default:var f,o,c=r.a,v=r.c;return l(Ur,h(Nt,f=c.a,o=c.b,r.b,v,r.d,r.e),l(Ur,l(At,f+xt(v),o+Mt(v)),n))}}),Ct=e(function(r,n){return $t(m([p("type",gt("field")),p("name",gt(r)),p("value",n)]))}),Ft=x,Pt=C,zt=function(r){var n,t,e=r.b,u=r.c,a=r.d,i=function(r){return Ft(1e4*r)/100};return n=m(["rgba(",Pt(i(r.a)),"%,",Pt(i(e)),"%,",Pt(i(u)),"%,",Pt((t=a,Ft(1e3*t)/1e3)),")"]),l(Tn,"",n)},Bt=function(r){return l(Ct,"fillStyle",gt(zt(r)))},Ot=e(function(r,n){return l(Ur,l(mt,"fill",m([gt(function(r){return r?"evenodd":"nonzero"}(0))])),l(Ur,Bt(r),n))}),St=l(mt,"stroke",$),Rt=function(r){return l(Ct,"strokeStyle",gt(zt(r)))},Dt=e(function(r,n){return l(Ur,St,l(Ur,Rt(r),n))}),It=u(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),Jt=s(It,0,0,0,1),Yt=e(function(r,n){switch(r.$){case 0:return l(Ot,Jt,n);case 1:return l(Ot,r.a,n);case 2:return l(Dt,r.a,n);default:return l(Dt,r.b,l(Ot,r.a,n))}}),Gt=u(function(r,n,t,e){if(1===e.$)return l(mt,"fillText",m([gt(r),pt(n),pt(t)]));var u=e.a;return l(mt,"fillText",m([gt(r),pt(n),pt(t),pt(u)]))}),Wt=a(function(r,n,t,e,u){return l(Ur,s(Gt,r.aF,n,t,r.ap),l(Ur,Bt(e),u))}),Xt=u(function(r,n,t,e){if(1===e.$)return l(mt,"strokeText",m([gt(r),pt(n),pt(t)]));var u=e.a;return l(mt,"strokeText",m([gt(r),pt(n),pt(t),pt(u)]))}),Kt=a(function(r,n,t,e,u){return l(Ur,s(Xt,r.aF,n,t,r.ap),l(Ur,Rt(e),u))}),Qt=t(function(r,n,t){var e=n.a4,u=e.a,a=e.b;switch(r.$){case 0:return b(Wt,n,u,a,Jt,t);case 1:return b(Wt,n,u,a,r.a,t);case 2:return b(Kt,n,u,a,r.a,t);default:return b(Kt,n,u,a,r.b,b(Wt,n,u,a,r.a,t))}}),Ht=t(function(r,n,t){return d(Qt,r,n,t)}),Ut=l(mt,"beginPath",$),Vt=t(function(r,n,t){if(r.$){var e=r.a;return l(Yt,n,d(an,qt,l(Ur,Ut,t),e))}return d(Ht,n,r.a,t)}),Zt=l(mt,"restore",$),re=l(mt,"save",$),ne=e(function(r,n){return l(Ur,Zt,d(Vt,r.al,r.ak,k(r.P,l(Ur,re,n))))}),te=$,ee=e(function(r,n){return l(mr,function(r){return"innerHTML"==r||"formAction"==r?"data-"+r:r}(r),function(r){return/^\s*(javascript:|data:text\/html)/i.test(r)?"":r}(n))}),ue=$r("canvas"),ae=function(r){return $r(function(r){return"script"==r?"p":r}(r))},ie=t(function(r,n,t){var e,u,a=r.a,i=r.b;return d(ae,"elm-canvas",m([(u=function(r){return d(an,ne,te,r)}(t),l(ee,"cmds",l(ht,Cn,u)))]),m([l(ue,l(Ur,(e=i,l(pr,"height",_n(e))),l(Ur,function(r){return l(pr,"width",_n(r))}(a),n)),$)]))}),fe={$:1},oe=function(r){return{$:0,a:r}},ce=e(function(r,n){return l(mt,"scale",m([pt(r),pt(n)]))}),ve=i(function(r,n,t,e,u,a){return l(mt,"transform",m([pt(r),pt(n),pt(t),pt(e),pt(u),pt(a)]))}),se=e(function(r,n){return l(mt,"translate",m([pt(r),pt(n)]))}),be=function(r){return{$:1,a:l(Bn,function(r){switch(r.$){case 0:return function(r){return l(mt,"rotate",m([pt(r)]))}(r.a);case 1:return l(ce,r.a,r.b);case 2:return l(se,r.a,r.b);default:return h(ve,r.a.cp,r.a.cq,r.a.cr,r.a.cs,r.a.b6,r.a.b7)}},r)}},le=e(function(r,n){return{$:2,a:r,b:n}}),de=_,he=t(function(r,n,t){var e=r/1e3,u=3.141592653589793*90/180,a=p(n.a,n.b),i=a.a,f=a.b,o=p(i/23,f/23),c=u+3.141592653589793*l(de,Mt(e+(.4*o.a+.2*o.b)),3),v=p(f*(400/24)+50+400/24/2,i*(400/24)+50+400/24/2),s=v.a,b=v.b;return l(Ur,l(dt,m([be(m([l(le,s,b),oe(c),l(le,-s,-b)])),ft(Jt)]),m([d(ct,p(s-400/24*.65/2,b-400/24*.1/2),400/24*.65,400/24*.1)])),t)}),$e=t(function(r,i,n){var f=r.cK,o=r.b_;return d(t(function(r,n,t){for(;;){if(-1<c(n,f))return t;if(c(r,o)>-1){r=e=0,n=u=n+1,t=a=t}else{var e=r+1,u=n,a=l(i,p(r,n),t);r=e,n=u,t=a}}}),0,0,n)}),ge=s(It,1,1,1,1),me=gr,pe=e(function(r,n){return l(me,r,{$:0,a:n})}),ye=Wr({cm:function(){return p(p(!0,0),Nn)},cQ:function(r){return r.a?et(En):ut},cW:at,cY:function(r){var n,t=r.b;return d(ie,p(Ft(500),Ft(500)),m([(n=fe,l(pe,"click",Yn(n)))]),l(Ur,l(dt,m([ft(ge)]),m([d(ct,p(0,0),500,500)])),function(r){return d($e,{b_:24,cK:24},he(r),$)}(t)))}});nt={Examples:{AnimatedGrid:{init:ye(Yn(0))(0)}}},r.Elm?function r(n,t){for(var e in t)e in n?"init"==e?j(6):r(n[e],t[e]):n[e]=t[e]}(r.Elm,nt):r.Elm=nt}(this);