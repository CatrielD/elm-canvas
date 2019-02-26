!function(r){"use strict";function n(r,n,t){return t.a=r,t.f=n,t}function e(t){return n(2,t,function(n){return function(r){return t(n,r)}})}function t(e){return n(3,e,function(t){return function(n){return function(r){return e(t,n,r)}}})}function u(u){return n(4,u,function(e){return function(t){return function(n){return function(r){return u(e,t,n,r)}}}})}function a(a){return n(5,a,function(u){return function(e){return function(t){return function(n){return function(r){return a(u,e,t,n,r)}}}}})}function i(i){return n(6,i,function(a){return function(u){return function(e){return function(t){return function(n){return function(r){return i(a,u,e,t,n,r)}}}}}})}function b(r,n,t){return 2===r.a?r.f(n,t):r(n)(t)}function s(r,n,t,e){return 3===r.a?r.f(n,t,e):r(n)(t)(e)}function l(r,n,t,e,u){return 4===r.a?r.f(n,t,e,u):r(n)(t)(e)(u)}function d(r,n,t,e,u,a){return 5===r.a?r.f(n,t,e,u,a):r(n)(t)(e)(u)(a)}function h(r,n,t,e,u,a,i){return 6===r.a?r.f(n,t,e,u,a,i):r(n)(t)(e)(u)(a)(i)}var $={$:0};function g(r,n){return{$:1,a:r,b:n}}var f=e(g);function p(r){for(var n=$,t=r.length;t--;)n=g(r[t],n);return n}function o(r){for(var n=[];r.b;r=r.b)n.push(r.a);return n}function c(r,n,t){if("object"!=typeof r)return r===n?0:r<n?-1:1;if(!r.$)return(t=c(r.a,n.a))?t:(t=c(r.b,n.b))?t:c(r.c,n.c);for(;r.b&&n.b&&!(t=c(r.a,n.a));r=r.b,n=n.b);return t||(r.b?1:n.b?-1:0)}var v=0;function m(r,n){return{a:r,b:n}}function y(r,n){var t={};for(var e in r)t[e]=r[e];for(var e in n)t[e]=n[e];return t}function k(r,n){if("string"==typeof r)return r+n;if(!r.b)return n;var t=g(r.a,n);r=r.b;for(var e=t;r.b;r=r.b)e=e.b=g(r.a,n);return t}var w=t(function(r,n,t){for(var e=Array(r),u=0;u<r;u++)e[u]=t(n+u);return e}),A=e(function(r,n){for(var t=Array(r),e=0;e<r&&n.b;e++)t[e]=n.a,n=n.b;return t.length=e,m(t,n)});function j(r){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+r+".md")}var _=e(function(r,n){var t=n%r;return 0===r?j(11):0<t&&r<0||t<0&&0<r?t+r:t}),T=Math.cos,N=Math.sin;var E=Math.ceil,L=Math.floor,x=Math.round,C=Math.log;var P=e(function(r,n){return n.join(r)});function q(r){return r+""}var z=e(function(r,n){return O(r,D(n))});function O(r,n){switch(r.$){case 3:return"boolean"==typeof n?$n(n):F("a BOOL",n);case 2:return"number"!=typeof n?F("an INT",n):-2147483647<n&&n<2147483647&&(0|n)===n?$n(n):!isFinite(n)||n%1?F("an INT",n):$n(n);case 4:return"number"==typeof n?$n(n):F("a FLOAT",n);case 6:return"string"==typeof n?$n(n):n instanceof String?$n(n+""):F("a STRING",n);case 9:return null===n?$n(r.c):F("null",n);case 5:return $n(I(n));case 7:return Array.isArray(n)?R(r.b,n,p):F("a LIST",n);case 8:return Array.isArray(n)?R(r.b,n,S):F("an ARRAY",n);case 10:var t=r.d;if("object"!=typeof n||null===n||!(t in n))return F("an OBJECT with a field named `"+t+"`",n);var e=O(r.b,n[t]);return gn(e)?e:hn(b(mn,t,e.a));case 11:var u=r.e;if(!Array.isArray(n))return F("an ARRAY",n);if(n.length<=u)return F("a LONGER array. Need index "+u+" but only see "+n.length+" entries",n);e=O(r.b,n[u]);return gn(e)?e:hn(b(yn,u,e.a));case 12:if("object"!=typeof n||null===n||Array.isArray(n))return F("an OBJECT",n);var a=$;for(var i in n)if(n.hasOwnProperty(i)){e=O(r.b,n[i]);if(!gn(e))return hn(b(mn,i,e.a));a=g(m(i,e.a),a)}return $n(un(a));case 13:for(var f=r.f,o=r.g,c=0;c<o.length;c++){e=O(o[c],n);if(!gn(e))return e;f=f(e.a)}return $n(f);case 14:e=O(r.b,n);return gn(e)?O(r.h(e.a),n):e;case 15:for(var v=$,s=r.g;s.b;s=s.b){e=O(s.a,n);if(gn(e))return e;v=g(e.a,v)}return hn(kn(un(v)));case 1:return hn(b(pn,r.a,I(n)));case 0:return $n(r.a)}}function R(r,n,t){for(var e=n.length,u=Array(e),a=0;a<e;a++){var i=O(r,n[a]);if(!gn(i))return hn(b(yn,a,i.a));u[a]=i.a}return $n(t(u))}function S(n){return b(dn,n.length,function(r){return n[r]})}function F(r,n){return hn(b(pn,"Expecting "+r,I(n)))}function M(r,n){if(r===n)return!0;if(r.$!==n.$)return!1;switch(r.$){case 0:case 1:return r.a===n.a;case 3:case 2:case 4:case 6:case 5:return!0;case 9:return r.c===n.c;case 7:case 8:case 12:return M(r.b,n.b);case 10:return r.d===n.d&&M(r.b,n.b);case 11:return r.e===n.e&&M(r.b,n.b);case 13:return r.f===n.f&&B(r.g,n.g);case 14:return r.h===n.h&&M(r.b,n.b);case 15:return B(r.g,n.g)}}function B(r,n){var t=r.length;if(t!==n.length)return!1;for(var e=0;e<t;e++)if(!M(r[e],n[e]))return!1;return!0}function I(r){return r}function D(r){return r}var H=t(function(r,n,t){return t[r]=D(n),t});I(null);function G(r){return{$:0,a:r}}function J(r){return{$:2,b:r,c:null}}var W=e(function(r,n){return{$:3,b:r,d:n}});var X=0;function Y(r){var n={$:0,e:X++,f:r,g:null,h:[]};return V(n),n}function Z(n){return J(function(r){r(G(Y(n)))})}function K(r,n){r.h.push(n),V(r)}var Q=!1,U=[];function V(r){if(U.push(r),!Q){for(Q=!0;r=U.shift();)rr(r);Q=!1}}function rr(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,V(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}function nr(r,n,t,e,u,a){var i=b(z,r,I(n?n.flags:void 0));gn(i)||j(2);var f={},o=(i=t(i.a)).a,c=a(s,o),v=function(r,n){var t;for(var e in tr){var u=tr[e];u.a&&((t=t||{})[e]=u.a(e,n)),r[e]=er(u,n)}return t}(f,s);function s(r,n){c(o=(i=b(e,r,o)).a,n),fr(f,i.b,u(o))}return fr(f,i.b,u(o)),v?{ports:v}:{}}var tr={};function er(r,n){var e={g:n,h:void 0},u=r.c,a=r.d,i=r.e,f=r.f;function o(t){return b(W,o,{$:5,b:function(r){var n=r.a;return 0===r.$?s(a,e,n,t):i&&f?l(u,e,n.i,n.j,t):s(u,e,i?n.i:n.j,t)}})}return e.h=Y(b(W,o,r.b))}var ur=e(function(n,t){return J(function(r){n.g(t),r(G(v))})});function ar(n){return function(r){return{$:1,k:n,l:r}}}function ir(r){return{$:2,m:r}}function fr(r,n,t){var e={};for(var u in or(!0,n,e,null),or(!1,t,e,null),r)K(r[u],{$:"fx",a:e[u]||{i:$,j:$}})}function or(r,n,t,e){switch(n.$){case 1:var u=n.k,a=function(r,n,t,e){function u(r){for(var n=t;n;n=n.q)r=n.p(r);return r}return b(r?tr[n].e:tr[n].f,u,e)}(r,u,e,n.l);return void(t[u]=function(r,n,t){return t=t||{i:$,j:$},r?t.i=g(n,t.i):t.j=g(n,t.j),t}(r,a,t[u]));case 2:for(var i=n.m;i.b;i=i.b)or(r,i.a,t,e);return;case 3:return void or(r,n.o,t,{p:n.n,q:e})}}var cr;var vr="undefined"!=typeof document?document:{};function sr(r,n){r.appendChild(n)}function br(r){return{$:0,a:r}}var lr=e(function(a,i){return e(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:gr(r),e:t,f:a,b:e}})})(void 0);e(function(a,i){return e(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:gr(r),e:t,f:a,b:e}})})(void 0);var dr=e(function(r,n){return{$:"a2",n:r,o:n}}),hr=e(function(r,n){return{$:"a3",n:r,o:n}});var $r;function gr(r){for(var n={};r.b;r=r.b){var t=r.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=n[e]||(n[e]={});"a3"===e&&"class"===u?pr(i,u,a):i[u]=a}else"className"===u?pr(n,u,D(a)):n[u]=D(a)}return n}function pr(r,n,t){var e=r[n];r[n]=e?e+" "+t:t}function mr(r,n){var t=r.$;if(5===t)return mr(r.k||(r.k=r.m()),n);if(0===t)return vr.createTextNode(r.a);if(4===t){for(var e=r.k,u=r.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:n};return(i=mr(e,a)).elm_event_node_ref=a,i}if(3===t)return yr(i=r.h(r.g),n,r.d),i;var i=r.f?vr.createElementNS(r.f,r.c):vr.createElement(r.c);cr&&"a"==r.c&&i.addEventListener("click",cr(i)),yr(i,n,r.d);for(var f=r.e,o=0;o<f.length;o++)sr(i,mr(1===t?f[o]:f[o].b,n));return i}function yr(r,n,t){for(var e in t){var u=t[e];"a1"===e?kr(r,u):"a0"===e?jr(r,n,u):"a3"===e?wr(r,u):"a4"===e?Ar(r,u):("value"!==e||"checked"!==e||r[e]!==u)&&(r[e]=u)}}function kr(r,n){var t=r.style;for(var e in n)t[e]=n[e]}function wr(r,n){for(var t in n){var e=n[t];e?r.setAttribute(t,e):r.removeAttribute(t)}}function Ar(r,n){for(var t in n){var e=n[t],u=e.f,a=e.o;a?r.setAttributeNS(u,t,a):r.removeAttributeNS(u,t)}}function jr(r,n,t){var e=r.elmFs||(r.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}r.removeEventListener(u,i)}i=_r(n,a),r.addEventListener(u,i,$r&&{passive:wt(a)<2}),e[u]=i}else r.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){$r=!0}}))}catch(r){}function _r(v,r){function s(r){var n=s.q,t=O(n.a,r);if(gn(t)){for(var e,u=wt(n),a=t.a,i=u?u<3?a.a:a.L:a,f=1==u?a.b:3==u&&a.bd,o=(f&&r.stopPropagation(),(2==u?a.b:3==u&&a.a7)&&r.preventDefault(),v);e=o.j;){if("function"==typeof e)i=e(i);else for(var c=e.length;c--;)i=e[c](i);o=o.p}o(i,f)}}return s.q=r,s}function Tr(r,n){return r.$==n.$&&M(r.a,n.a)}function Nr(r,n){var t=[];return Lr(r,n,t,0),t}function Er(r,n,t,e){var u={$:n,r:t,s:e,t:void 0,u:void 0};return r.push(u),u}function Lr(r,n,t,e){if(r!==n){var u=r.$,a=n.$;if(u!==a){if(1!==u||2!==a)return void Er(t,0,e,n);n=function(r){for(var n=r.e,t=n.length,e=Array(t),u=0;u<t;u++)e[u]=n[u].b;return{$:1,c:r.c,d:r.d,e:e,f:r.f,b:r.b}}(n),a=1}switch(a){case 5:for(var i=r.l,f=n.l,o=i.length,c=o===f.length;c&&o--;)c=i[o]===f[o];if(c)return void(n.k=r.k);n.k=n.m();var v=[];return Lr(r.k,n.k,v,0),void(0<v.length&&Er(t,1,e,v));case 4:for(var s=r.j,b=n.j,l=!1,d=r.k;4===d.$;)l=!0,"object"!=typeof s?s=[s,d.j]:s.push(d.j),d=d.k;for(var h=n.k;4===h.$;)l=!0,"object"!=typeof b?b=[b,h.j]:b.push(h.j),h=h.k;return l&&s.length!==b.length?void Er(t,0,e,n):((l?function(r,n){for(var t=0;t<r.length;t++)if(r[t]!==n[t])return!1;return!0}(s,b):s===b)||Er(t,2,e,b),void Lr(d,h,t,e+1));case 0:return void(r.a!==n.a&&Er(t,3,e,n.a));case 1:return void xr(r,n,t,e,Pr);case 2:return void xr(r,n,t,e,qr);case 3:if(r.h!==n.h)return void Er(t,0,e,n);var $=Cr(r.d,n.d);$&&Er(t,4,e,$);var g=n.i(r.g,n.g);return void(g&&Er(t,5,e,g))}}}function xr(r,n,t,e,u){if(r.c===n.c&&r.f===n.f){var a=Cr(r.d,n.d);a&&Er(t,4,e,a),u(r,n,t,e)}else Er(t,0,e,n)}function Cr(r,n,t){var e;for(var u in r)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in n){var a=r[u],i=n[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&Tr(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:r[u].f,o:void 0}:"string"==typeof r[u]?"":null;else{var f=Cr(r[u],n[u]||{},u);f&&((e=e||{})[u]=f)}for(var o in n)o in r||((e=e||{})[o]=n[o]);return e}function Pr(r,n,t,e){var u=r.e,a=n.e,i=u.length,f=a.length;f<i?Er(t,6,e,{v:f,i:i-f}):i<f&&Er(t,7,e,{v:i,e:a});for(var o=i<f?i:f,c=0;c<o;c++){var v=u[c];Lr(v,a[c],t,++e),e+=v.b||0}}function qr(r,n,t,e){for(var u=[],a={},i=[],f=r.e,o=n.e,c=f.length,v=o.length,s=0,b=0,l=e;s<c&&b<v;){var d=(T=f[s]).a,h=(N=o[b]).a,$=T.b,g=N.b;if(d!==h){var p=f[s+1],m=o[b+1];if(p)var y=p.a,k=p.b,w=h===y;if(m)var A=m.a,j=m.b,_=d===A;if(_&&w)Lr($,j,u,++l),Or(a,u,d,g,b,i),l+=$.b||0,Rr(a,u,d,k,++l),l+=k.b||0,s+=2,b+=2;else if(_)l++,Or(a,u,h,g,b,i),Lr($,j,u,l),l+=$.b||0,s+=1,b+=2;else if(w)Rr(a,u,d,$,++l),l+=$.b||0,Lr(k,g,u,++l),l+=k.b||0,s+=2,b+=1;else{if(!p||y!==A)break;Rr(a,u,d,$,++l),Or(a,u,h,g,b,i),l+=$.b||0,Lr(k,j,u,++l),l+=k.b||0,s+=2,b+=2}}else Lr($,g,u,++l),l+=$.b||0,s++,b++}for(;s<c;){var T;Rr(a,u,(T=f[s]).a,$=T.b,++l),l+=$.b||0,s++}for(;b<v;){var N,E=E||[];Or(a,u,(N=o[b]).a,N.b,void 0,E),b++}(0<u.length||0<i.length||E)&&Er(t,8,e,{w:u,x:i,y:E})}var zr="_elmW6BL";function Or(r,n,t,e,u,a){var i=r[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(r[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var f=[];return Lr(i.z,e,f,i.r),i.r=u,void(i.s.s={w:f,A:i})}Or(r,n,t+zr,e,u,a)}function Rr(r,n,t,e,u){var a=r[t];if(a){if(0===a.c){a.c=2;var i=[];return Lr(e,a.z,i,u),void Er(n,9,u,{w:i,A:a})}Rr(r,n,t+zr,e,u)}else{var f=Er(n,9,u,void 0);r[t]={c:1,z:e,r:u,s:f}}}function Sr(r,n,t,e){!function r(n,t,e,u,a,i,f){var o=e[u];var c=o.r;for(;c===a;){var v=o.$;if(1===v)Sr(n,t.k,o.s,f);else if(8===v){o.t=n,o.u=f;var s=o.s.w;0<s.length&&r(n,t,s,0,a,i,f)}else if(9===v){o.t=n,o.u=f;var b=o.s;if(b){b.A.s=n;var s=b.w;0<s.length&&r(n,t,s,0,a,i,f)}}else o.t=n,o.u=f;if(!(o=e[++u])||(c=o.r)>i)return u}var l=t.$;if(4===l){for(var d=t.k;4===d.$;)d=d.k;return r(n,d,e,u,a+1,i,n.elm_event_node_ref)}var h=t.e;var $=n.childNodes;for(var g=0;g<h.length;g++){var p=1===l?h[g]:h[g].b,m=++a+(p.b||0);if(a<=c&&c<=m&&(u=r($[g],p,e,u,a,m,f),!(o=e[u])||(c=o.r)>i))return u;a=m}return u}(r,n,t,0,0,n.b,e)}function Fr(r,n,t,e){return 0===t.length?r:(Sr(r,n,t,e),Mr(r,t))}function Mr(r,n){for(var t=0;t<n.length;t++){var e=n[t],u=e.t,a=Br(u,e);u===r&&(r=a)}return r}function Br(r,n){switch(n.$){case 0:return function(r,n,t){var e=r.parentNode,u=mr(n,t);u.elm_event_node_ref||(u.elm_event_node_ref=r.elm_event_node_ref);e&&u!==r&&e.replaceChild(u,r);return u}(r,n.s,n.u);case 4:return yr(r,n.u,n.s),r;case 3:return r.replaceData(0,r.length,n.s),r;case 1:return Mr(r,n.s);case 2:return r.elm_event_node_ref?r.elm_event_node_ref.j=n.s:r.elm_event_node_ref={j:n.s,p:n.u},r;case 6:for(var t=n.s,e=0;e<t.i;e++)r.removeChild(r.childNodes[t.v]);return r;case 7:for(var u=(t=n.s).e,a=r.childNodes[e=t.v];e<u.length;e++)r.insertBefore(mr(u[e],n.u),a);return r;case 9:if(!(t=n.s))return r.parentNode.removeChild(r),r;var i=t.A;return void 0!==i.r&&r.parentNode.removeChild(r),i.s=Mr(r,t.w),r;case 8:return function(r,n){var t=n.s,e=function(r,n){if(!r)return;for(var t=vr.createDocumentFragment(),e=0;e<r.length;e++){var u=r[e],a=u.A;sr(t,2===a.c?a.s:mr(a.z,n.u))}return t}(t.y,n);r=Mr(r,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],f=i.A,o=2===f.c?f.s:mr(f.z,n.u);r.insertBefore(o,r.childNodes[i.r])}e&&sr(r,e);return r}(r,n);case 5:return n.s(r);default:j(10)}}function Ir(r){if(3===r.nodeType)return br(r.textContent);if(1!==r.nodeType)return br("");for(var n=$,t=r.attributes,e=t.length;e--;){var u=t[e];n=g(b(hr,u.name,u.value),n)}var a=r.tagName.toLowerCase(),i=$,f=r.childNodes;for(e=f.length;e--;)i=g(Ir(f[e]),i);return s(lr,a,n,i)}var Dr=u(function(n,r,t,f){return nr(r,f,n.co,n.cX,n.cR,function(e,r){var u=n.cZ,a=f.node,i=Ir(a);return Gr(r,function(r){var n=u(r),t=Nr(i,n);a=Fr(a,i,t,e),i=n})})}),Hr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(r){setTimeout(r,1e3/60)};function Gr(t,e){e(t);var u=0;function a(){u=1===u?0:(Hr(a),e(t),1)}return function(r,n){t=r,n?(e(t),2===u&&(u=1)):(0===u&&Hr(a),u=2)}}var Jr={addEventListener:function(){},removeEventListener:function(){}};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Wr,Xr=function(r){return{$:1,a:r}},Yr=function(r){return{$:2,a:r}},Zr=t(function(r,n,t){for(;;){if(!t.b)return n;var e=t.b,u=r,a=b(r,t.a,n);r=u,n=a,t=e}}),Kr=u(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),Qr=f,Ur=E,Vr=e(function(r,n){return C(n)/C(r)}),rn=Ur(b(Vr,2,32)),nn=[],tn=l(Kr,0,rn,nn,nn),en=A,un=function(r){return s(Zr,Qr,$,r)},an=e(function(r,n){for(;;){var t=b(en,32,r),e=t.b,u=b(Qr,{$:0,a:t.a},n);if(!e.b)return un(u);r=e,n=u}}),fn=e(function(r,n){for(;;){var t=Ur(n/32);if(1===t)return b(en,32,r).a;r=b(an,r,$),n=t}}),on=L,cn=e(function(r,n){return 0<c(r,n)?r:n}),vn=function(r){return r.length},sn=e(function(r,n){if(n.k){var t=32*n.k,e=on(b(Vr,32,t-1)),u=r?un(n.o):n.o,a=b(fn,u,n.k);return l(Kr,vn(n.n)+t,b(cn,5,e*rn),a,n.n)}return l(Kr,vn(n.n),rn,nn,n.n)}),bn=w,ln=a(function(r,n,t,e,u){for(;;){if(n<0)return b(sn,!1,{o:e,k:t/32|0,n:u});var a={$:1,a:s(bn,32,n,r)};r=r,n=n-32,t=t,e=b(Qr,a,e),u=u}}),dn=e(function(r,n){if(0<r){var t=r%32;return d(ln,n,r-t-32,r,$,s(bn,t,r-t,n))}return tn}),hn=function(r){return{$:1,a:r}},$n=function(r){return{$:0,a:r}},gn=function(r){return!r.$},pn=e(function(r,n){return{$:3,a:r,b:n}}),mn=e(function(r,n){return{$:0,a:r,b:n}}),yn=e(function(r,n){return{$:1,a:r,b:n}}),kn=function(r){return{$:2,a:r}},wn=q,An=e(function(r,n){return b(P,r,o(n))}),jn=function(r){return I(s(Zr,e(function(r,n){return s(H,r.a,r.b,n)}),{},r))},_n=I,Tn=e(function(r,n){return jn(p([m("type",_n("field")),m("name",_n(r)),m("value",n)]))}),Nn=I,En=function(r){return{$:0,a:b(Tn,"lineWidth",Nn(r))}},Ln=t(function(r,n,t){return{$:0,a:r,b:n,c:t}}),xn=t(function(r,n,t){return s(Ln,r,n,t)}),Cn={$:0},Pn=e(function(r,n){return{$:3,a:r,b:n}}),qn=function(r){return{$:2,a:r}},zn=e(function(r,n){var t=m(r,n);r:for(;;)switch(t.b.$){case 3:var e=t.b;return b(Pn,e.a,e.b);case 1:switch(t.a.$){case 1:return Xr(t.b.a);case 2:return b(Pn,t.b.a,t.a.a);case 3:var u=t.a;return b(Pn,t.b.a,u.b);default:break r}case 2:switch(t.a.$){case 2:return qn(t.b.a);case 1:return b(Pn,t.a.a,t.b.a);case 3:var a=t.a;return b(Pn,a.a,t.b.a);default:break r}default:if(t.a.$){return t.a}break r}return t.b}),On=function(r){return r},Rn=e(function(r,n){return s(Zr,e(function(r,n){var t=n;switch(r.$){case 0:return y(t,{P:b(Qr,r.a,t.P)});case 1:return y(t,{P:s(Zr,Qr,t.P,r.a)});case 3:return y(t,{al:(0,r.a)(t.al)});default:return y(t,{ak:b(zn,t.ak,r.a)})}}),n,r)}),Sn=e(function(r,n){return b(Rn,r,{P:$,ak:Cn,al:(t=n,{$:1,a:t})});var t}),Fn=e(function(r,n){return I(s(Zr,function(t){return e(function(r,n){return n.push(D(t(r))),n})}(r),[],n))}),Mn=e(function(r,n){return jn(p([m("type",_n("function")),m("name",_n(r)),m("args",b(Fn,On,n))]))}),Bn=a(function(r,n,t,e,u){return b(Mn,"arcTo",p([Nn(r),Nn(n),Nn(t),Nn(e),Nn(u)]))}),In=i(function(r,n,t,e,u,a){return b(Mn,"bezierCurveTo",p([Nn(r),Nn(n),Nn(t),Nn(e),Nn(u),Nn(a)]))}),Dn=e(function(r,n){return b(Mn,"lineTo",p([Nn(r),Nn(n)]))}),Hn=e(function(r,n){return b(Mn,"moveTo",p([Nn(r),Nn(n)]))}),Gn=u(function(r,n,t,e){return b(Mn,"quadraticCurveTo",p([Nn(r),Nn(n),Nn(t),Nn(e)]))}),Jn=e(function(r,n){switch(r.$){case 0:var t=r.a,e=r.b;return b(Qr,d(Bn,t.a,t.b,e.a,e.b,r.c),n);case 1:var u=r.a,a=r.b,i=r.c;return b(Qr,h(In,u.a,u.b,a.a,a.b,i.a,i.b),n);case 2:var f=r.a;return b(Qr,b(Dn,f.a,f.b),n);case 3:var o=r.a;return b(Qr,b(Hn,o.a,o.b),n);default:var c=r.a,v=r.b;return b(Qr,l(Gn,c.a,c.b,v.a,v.b),n)}}),Wn=I,Xn=i(function(r,n,t,e,u,a){return b(Mn,"arc",p([Nn(r),Nn(n),Nn(t),Nn(e),Nn(u),Wn(a)]))}),Yn=t(function(r,n,t){return h(Xn,r,n,t,0,6.283185307179586,!1)}),Zn=u(function(r,n,t,e){return b(Mn,"rect",p([Nn(r),Nn(n),Nn(t),Nn(e)]))}),Kn=T,Qn=N,Un=e(function(r,n){switch(r.$){case 0:var t=r.a;return b(Qr,l(Zn,f=t.a,o=t.b,r.b,r.c),b(Qr,b(Hn,f,o),n));case 1:var e=r.a,u=r.b;return b(Qr,s(Yn,f=e.a,o=e.b,u),b(Qr,b(Hn,f+u,o),n));case 2:var a=r.a,i=r.b;return s(Zr,Jn,b(Qr,b(Hn,f=a.a,o=a.b),n),i);default:var f,o,c=r.a,v=r.c;return b(Qr,h(Xn,f=c.a,o=c.b,r.b,v,r.d,r.e),b(Qr,b(Hn,f+Kn(v),o+Qn(v)),n))}}),Vn=x,rt=q,nt=function(r){var n,t,e=r.b,u=r.c,a=r.d,i=function(r){return Vn(1e4*r)/100};return n=p(["rgba(",rt(i(r.a)),"%,",rt(i(e)),"%,",rt(i(u)),"%,",rt((t=a,Vn(1e3*t)/1e3)),")"]),b(An,"",n)},tt=function(r){return b(Tn,"fillStyle",_n(nt(r)))},et=e(function(r,n){return b(Qr,b(Mn,"fill",p([_n(function(r){return r?"evenodd":"nonzero"}(0))])),b(Qr,tt(r),n))}),ut=b(Mn,"stroke",$),at=function(r){return b(Tn,"strokeStyle",_n(nt(r)))},it=e(function(r,n){return b(Qr,ut,b(Qr,at(r),n))}),ft=u(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),ot=l(ft,0,0,0,1),ct=e(function(r,n){switch(r.$){case 0:return b(et,ot,n);case 1:return b(et,r.a,n);case 2:return b(it,r.a,n);default:return b(it,r.b,b(et,r.a,n))}}),vt=u(function(r,n,t,e){if(1===e.$)return b(Mn,"fillText",p([_n(r),Nn(n),Nn(t)]));var u=e.a;return b(Mn,"fillText",p([_n(r),Nn(n),Nn(t),Nn(u)]))}),st=a(function(r,n,t,e,u){return b(Qr,l(vt,r.aH,n,t,r.ap),b(Qr,tt(e),u))}),bt=u(function(r,n,t,e){if(1===e.$)return b(Mn,"strokeText",p([_n(r),Nn(n),Nn(t)]));var u=e.a;return b(Mn,"strokeText",p([_n(r),Nn(n),Nn(t),Nn(u)]))}),lt=a(function(r,n,t,e,u){return b(Qr,l(bt,r.aH,n,t,r.ap),b(Qr,at(e),u))}),dt=t(function(r,n,t){var e=n.a6,u=e.a,a=e.b;switch(r.$){case 0:return d(st,n,u,a,ot,t);case 1:return d(st,n,u,a,r.a,t);case 2:return d(lt,n,u,a,r.a,t);default:return d(lt,n,u,a,r.b,d(st,n,u,a,r.a,t))}}),ht=t(function(r,n,t){return s(dt,r,n,t)}),$t=b(Mn,"beginPath",$),gt=t(function(r,n,t){if(r.$){var e=r.a;return b(ct,n,s(Zr,Un,b(Qr,$t,t),e))}return s(ht,n,r.a,t)}),pt=b(Mn,"restore",$),mt=b(Mn,"save",$),yt=e(function(r,n){return b(Qr,pt,s(gt,r.al,r.ak,k(r.P,b(Qr,mt,n))))}),kt=$,wt=function(r){switch(r.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},At=e(function(r,n){return b(dr,function(r){return"innerHTML"==r||"formAction"==r?"data-"+r:r}(r),function(r){return/^\s*(javascript:|data:text\/html)/i.test(r)?"":r}(n))}),jt=lr("canvas"),_t=function(r){return lr(function(r){return"script"==r?"p":r}(r))},Tt=function(r){return b(hr,"height",wn(r))},Nt=function(r){return b(hr,"width",wn(r))},Et=t(function(r,n,t){var e,u=r.a,a=r.b;return s(_t,"elm-canvas",p([(e=function(r){return s(Zr,yt,kt,r)}(t),b(At,"cmds",b(Fn,On,e))),Tt(a),Nt(u)]),p([b(jt,b(Qr,Tt(a),b(Qr,Nt(u),n)),$)]))}),Lt=e(function(r,n){return{$:2,a:r,b:n}}),xt=e(function(r,n){return b(Lt,r,n)}),Ct=function(r){var n;return b(xt,r.a,p([(n=r.b,{$:2,a:n})]))},Pt=e(function(r,n){return{$:0,a:r,b:n}}),qt=function(r){var n=r.b;return b(Pt,1664525*r.a+n>>>0,n)},zt=function(r){var n=r.a,t=277803737*(n^n>>>4+(n>>>28));return(t>>>22^t)>>>0},Ot=e(function(a,i){return function(r){var n,t=qt(r),e=(n=i-a)<0?-n:n,u=zt(t);return m((134217728*(1*(67108863&zt(r)))+1*(134217727&u))/9007199254740992*e+a,qt(t))}}),Rt=b(e(function(e,r){var u=r;return function(r){var n=u(r),t=n.b;return m(e(n.a),t)}}),function(r){return r<.5},b(Ot,0,1)),St=e(function(r,n){var t=n.b;return m(r(n.a),t)}),Ft=e(function(r,n){return r(n)}),Mt=a(function(r,n,t,e,u){return b(St,function(r){return r?m(m(n,t),m(n+e,t+u)):m(m(n+e,t),m(n,t+u))},b(Ft,Rt,r))}),Bt=a(function(r,n,t,e,u){return d(Mt,r,n,t,e,u)}),It=_,Dt=t(function(r,n,t){for(;;){if(0<c(n,1e4))return t;var e=n/100|0,u=d(Bt,r,5*b(It,100,n),5*e,5,5),a=u.b,i=Ct(u.a);r=a,n=n+1,t=b(Qr,i,t)}}),Ht=l(ft,1,1,1,1),Gt=G,Jt=Gt(0),Wt=u(function(r,n,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,f=a.b;if(f.b){var o=f.a,c=f.b;if(c.b){var v=c.b;return b(r,u,b(r,i,b(r,o,b(r,c.a,500<t?s(Zr,r,n,un(v)):l(Wt,r,n,t+1,v)))))}return b(r,u,b(r,i,b(r,o,n)))}return b(r,u,b(r,i,n))}return b(r,u,n)}return n}),Xt=t(function(r,n,t){return l(Wt,r,n,0,t)}),Yt=e(function(t,r){return s(Xt,e(function(r,n){return b(Qr,t(r),n)}),$,r)}),Zt=W,Kt=e(function(n,r){return b(Zt,function(r){return Gt(n(r))},r)}),Qt=t(function(t,r,e){return b(Zt,function(n){return b(Zt,function(r){return Gt(b(t,n,r))},e)},r)}),Ut=ur,Vt=e(function(r,n){var t=n;return Z(b(Zt,Ut(r),t))});tr.Task={b:Jt,c:t(function(r,n){return b(Kt,function(){return 0},(t=b(Yt,Vt(r),n),s(Xt,Qt(Qr),Gt($),t)));var t}),d:t(function(){return Gt(0)}),e:e(function(r,n){return b(Kt,r,n)}),f:Wr};ar("Task");var re,ne=Dr,te=ir($),ee=ir($),ue={$:4},ae=ne({co:function(r){return m({bb:(n=on(1e4*r),t=qt(b(Pt,0,1013904223)),qt(b(Pt,t.a+n>>>0,t.b)))},te);var n,t},cR:function(){return ee},cX:e(function(r,n){return m(n,te)}),cZ:function(r){return s(Et,m(500,500),$,p([b(Sn,p([(n=Ht,Yr(Xr(n)))]),p([s(xn,m(0,0),500,500)])),b(Sn,p([function(r){return Yr(qn(r))}(ot),En(2)]),s(Dt,r.bb,0,$))]));var n}});re={Examples:{TiledLines:{init:ae(ue)(0)}}},r.Elm?function r(n,t){for(var e in t)e in n?"init"==e?j(6):r(n[e],t[e]):n[e]=t[e]}(r.Elm,re):r.Elm=re}(this);