(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const As="168",ac=0,Qs=1,sc=2,fl=1,oc=2,Sn=3,En=0,Nt=1,Xe=2,On=0,ii=1,za=2,eo=3,to=4,lc=5,Qn=100,cc=101,hc=102,uc=103,dc=104,fc=200,pc=201,mc=202,gc=203,Ha=204,Ga=205,_c=206,vc=207,Mc=208,yc=209,Sc=210,bc=211,Tc=212,Ec=213,xc=214,Ac=0,wc=1,Cc=2,Yr=3,Pc=4,Rc=5,Ic=6,Lc=7,pl=0,Dc=1,Uc=2,Bn=0,Nc=1,Fc=2,kc=3,Oc=4,Bc=5,zc=6,Hc=7,ml=300,Ii=301,Li=302,Va=303,Wa=304,ta=306,$r=1e3,ti=1001,Xa=1002,Xt=1003,Gc=1004,sr=1005,Zt=1006,ca=1007,ni=1008,xn=1009,gl=1010,_l=1011,Ji=1012,ws=1013,ri=1014,bn=1015,er=1016,Cs=1017,Ps=1018,Di=1020,vl=35902,Ml=1021,yl=1022,jt=1023,Sl=1024,bl=1025,Pi=1026,Ui=1027,Tl=1028,Rs=1029,El=1030,Is=1031,Ls=1033,Br=33776,zr=33777,Hr=33778,Gr=33779,qa=35840,Ya=35841,$a=35842,Ka=35843,Za=36196,ja=37492,Ja=37496,Qa=37808,es=37809,ts=37810,ns=37811,is=37812,rs=37813,as=37814,ss=37815,os=37816,ls=37817,cs=37818,hs=37819,us=37820,ds=37821,Vr=36492,fs=36494,ps=36495,xl=36283,ms=36284,gs=36285,_s=36286,Vc=3200,Wc=3201,Xc=0,qc=1,Fn="",wt="srgb",Vn="srgb-linear",Ds="display-p3",na="display-p3-linear",Kr="linear",it="srgb",Zr="rec709",jr="p3",ci=7680,no=519,Yc=512,$c=513,Kc=514,Al=515,Zc=516,jc=517,Jc=518,Qc=519,io=35044,eh=35048,ro="300 es",Tn=2e3,Jr=2001;class Fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ao=1234567;const $i=Math.PI/180,Qi=180/Math.PI;function ki(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function Us(n,e){return(n%e+e)%e}function th(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function nh(n,e,t){return n!==e?(t-n)/(e-n):0}function Ki(n,e,t){return(1-t)*n+t*e}function ih(n,e,t,i){return Ki(n,e,1-Math.exp(-t*i))}function rh(n,e=1){return e-Math.abs(Us(n,e*2)-e)}function ah(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function sh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function oh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function lh(n,e){return n+Math.random()*(e-n)}function ch(n){return n*(.5-Math.random())}function hh(n){n!==void 0&&(ao=n);let e=ao+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uh(n){return n*$i}function dh(n){return n*Qi}function fh(n){return(n&n-1)===0&&n!==0}function ph(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function mh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function gh(n,e,t,i,r){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+i)/2),h=s((e+i)/2),u=a((e-i)/2),d=s((e-i)/2),m=a((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*m,o*c);break;case"YXY":n.set(l*m,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ai(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const yt={DEG2RAD:$i,RAD2DEG:Qi,generateUUID:ki,clamp:Lt,euclideanModulo:Us,mapLinear:th,inverseLerp:nh,lerp:Ki,damp:ih,pingpong:rh,smoothstep:ah,smootherstep:sh,randInt:oh,randFloat:lh,randFloatSpread:ch,seededRandom:hh,degToRad:uh,radToDeg:dh,isPowerOfTwo:fh,ceilPowerOfTwo:ph,floorPowerOfTwo:mh,setQuaternionFromProperEuler:gh,normalize:Rt,denormalize:Ai};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,i,r,a,s,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],_=r[0],p=r[3],f=r[6],b=r[1],S=r[4],E=r[7],L=r[2],w=r[5],A=r[8];return a[0]=s*_+o*b+l*L,a[3]=s*p+o*S+l*w,a[6]=s*f+o*E+l*A,a[1]=c*_+h*b+u*L,a[4]=c*p+h*S+u*w,a[7]=c*f+h*E+u*A,a[2]=d*_+m*b+g*L,a[5]=d*p+m*S+g*w,a[8]=d*f+m*E+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-i*a*h+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*s-o*c,d=o*l-h*a,m=c*a-s*l,g=t*u+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*c-h*i)*_,e[2]=(o*i-r*s)*_,e[3]=d*_,e[4]=(h*t-r*l)*_,e[5]=(r*a-o*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(s*t-i*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ha.makeScale(e,t)),this}rotate(e){return this.premultiply(ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new Ne;function wl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _h(){const n=Qr("canvas");return n.style.display="block",n}const so={};function Zi(n){n in so||(so[n]=!0,console.warn(n))}function vh(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const oo=new Ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lo=new Ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zi={[Vn]:{transfer:Kr,primaries:Zr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[wt]:{transfer:it,primaries:Zr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[na]:{transfer:Kr,primaries:jr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(lo),fromReference:n=>n.applyMatrix3(oo)},[Ds]:{transfer:it,primaries:jr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(lo),fromReference:n=>n.applyMatrix3(oo).convertLinearToSRGB()}},Mh=new Set([Vn,na]),Ze={enabled:!0,_workingColorSpace:Vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Mh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=zi[e].toReference,r=zi[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return zi[n].primaries},getTransfer:function(n){return n===Fn?Kr:zi[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(zi[e].luminanceCoefficients)}};function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ua(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let hi;class yh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hi===void 0&&(hi=Qr("canvas")),hi.width=e.width,hi.height=e.height;const i=hi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Ri(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sh=0;class Cl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(da(r[s].image)):a.push(da(r[s]))}else a=da(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function da(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bh=0;class Ut extends Fi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=ti,r=ti,a=Zt,s=ni,o=jt,l=xn,c=Ut.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=ki(),this.name="",this.source=new Cl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $r:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $r:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=ml;Ut.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,E=(m+1)/2,L=(f+1)/2,w=(h+d)/4,A=(u+_)/4,k=(g+p)/4;return S>E&&S>L?S<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(S),r=w/i,a=A/i):E>L?E<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),i=w/r,a=k/r):L<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(L),i=A/a,r=k/a),this.set(i,r,a,t),this}let b=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Th extends Fi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Ut(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Th{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Pl extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Eh extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const d=a[s+0],m=a[s+1],g=a[s+2],_=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==m||h!==g){let p=1-o;const f=l*d+c*m+h*g+u*_,b=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const L=Math.sqrt(S),w=Math.atan2(L,f*b);p=Math.sin(p*w)/L,o=Math.sin(o*w)/L}const E=o*b;if(l=l*p+d*E,c=c*p+m*E,h=h*p+g*E,u=u*p+_*E,p===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=a[s],d=a[s+1],m=a[s+2],g=a[s+3];return e[t]=o*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-o*m,e[t+2]=c*g+h*m+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(a/2),d=l(i/2),m=l(r/2),g=l(a/2);switch(s){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(s-r)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(a-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(s-r)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+s*o+r*c-a*l,this._y=r*h+s*l+a*o-i*c,this._z=a*h+s*c+i*l-r*o,this._w=s*h-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=s*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(co.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(co.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),h=2*(o*t-a*r),u=2*(a*i-s*t);return this.x=t+l*c+s*u-o*h,this.y=i+l*h+o*c-a*u,this.z=r+l*u+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new U,co=new Qt;class zn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Yt):Yt.fromBufferAttribute(a,s),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),or.copy(i.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hi),lr.subVectors(this.max,Hi),ui.subVectors(e.a,Hi),di.subVectors(e.b,Hi),fi.subVectors(e.c,Hi),Cn.subVectors(di,ui),Pn.subVectors(fi,di),Xn.subVectors(ui,fi);let t=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Xn.z,Xn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Xn.z,0,-Xn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Xn.y,Xn.x,0];return!pa(t,ui,di,fi,lr)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,ui,di,fi,lr))?!1:(cr.crossVectors(Cn,Pn),t=[cr.x,cr.y,cr.z],pa(t,ui,di,fi,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gn=[new U,new U,new U,new U,new U,new U,new U,new U],Yt=new U,or=new zn,ui=new U,di=new U,fi=new U,Cn=new U,Pn=new U,Xn=new U,Hi=new U,lr=new U,cr=new U,qn=new U;function pa(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){qn.fromArray(n,a);const o=r.x*Math.abs(qn.x)+r.y*Math.abs(qn.y)+r.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),h=i.dot(qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const xh=new zn,Gi=new U,ma=new U;class ia{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xh.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gi.subVectors(e,this.center);const t=Gi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Gi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gi.copy(e.center).add(ma)),this.expandByPoint(Gi.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new U,ga=new U,hr=new U,Rn=new U,_a=new U,ur=new U,va=new U;class Ns{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ga.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(ga);const a=e.distanceTo(t)*.5,s=-this.direction.dot(hr),o=Rn.dot(this.direction),l=-Rn.dot(hr),c=Rn.lengthSq(),h=Math.abs(1-s*s);let u,d,m,g;if(h>0)if(u=s*l-o,d=s*o-l,g=a*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+s*d+2*o)+d*(s*u+d+2*l)+c}else d=a,u=Math.max(0,-(s*d+o)),m=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(s*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-s*a+o)),d=u>0?-a:Math.min(Math.max(-a,-l),a),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-a,-l),a),m=d*(d+2*l)+c):(u=Math.max(0,-(s*a+o)),d=u>0?a:Math.min(Math.max(-a,-l),a),m=-u*u+d*(d+2*l)+c);else d=s>0?-a:a,u=Math.max(0,-(s*d+o)),m=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ga).addScaledVector(hr,d),m}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const i=_n.dot(this.direction),r=_n.dot(_n)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(a=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,i,r,a){_a.subVectors(t,e),ur.subVectors(i,e),va.crossVectors(_a,ur);let s=this.direction.dot(va),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Rn.subVectors(this.origin,e);const l=o*this.direction.dot(ur.crossVectors(Rn,ur));if(l<0)return null;const c=o*this.direction.dot(_a.cross(Rn));if(c<0||l+c>s)return null;const h=-o*Rn.dot(va);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,r,a,s,o,l,c,h,u,d,m,g,_,p){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,h,u,d,m,g,_,p)}set(e,t,i,r,a,s,o,l,c,h,u,d,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=a,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/pi.setFromMatrixColumn(e,0).length(),a=1/pi.setFromMatrixColumn(e,1).length(),s=1/pi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const d=s*h,m=s*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-m,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=m*o-g,t[6]=_+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-s*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=s*h,t[9]=_-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*h,m=s*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,m=s*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+m,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=s*l,m=s*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=s*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ah,e,wh)}lookAt(e,t,i){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),In.crossVectors(i,Bt),In.lengthSq()===0&&(Math.abs(i.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),In.crossVectors(i,Bt)),In.normalize(),dr.crossVectors(Bt,In),r[0]=In.x,r[4]=dr.x,r[8]=Bt.x,r[1]=In.y,r[5]=dr.y,r[9]=Bt.y,r[2]=In.z,r[6]=dr.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],_=i[6],p=i[10],f=i[14],b=i[3],S=i[7],E=i[11],L=i[15],w=r[0],A=r[4],k=r[8],T=r[12],y=r[1],P=r[5],G=r[9],B=r[13],$=r[2],Y=r[6],W=r[10],j=r[14],H=r[3],le=r[7],de=r[11],_e=r[15];return a[0]=s*w+o*y+l*$+c*H,a[4]=s*A+o*P+l*Y+c*le,a[8]=s*k+o*G+l*W+c*de,a[12]=s*T+o*B+l*j+c*_e,a[1]=h*w+u*y+d*$+m*H,a[5]=h*A+u*P+d*Y+m*le,a[9]=h*k+u*G+d*W+m*de,a[13]=h*T+u*B+d*j+m*_e,a[2]=g*w+_*y+p*$+f*H,a[6]=g*A+_*P+p*Y+f*le,a[10]=g*k+_*G+p*W+f*de,a[14]=g*T+_*B+p*j+f*_e,a[3]=b*w+S*y+E*$+L*H,a[7]=b*A+S*P+E*Y+L*le,a[11]=b*k+S*G+E*W+L*de,a[15]=b*T+S*B+E*j+L*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+a*l*u-r*c*u-a*o*d+i*c*d+r*o*m-i*l*m)+_*(+t*l*m-t*c*d+a*s*d-r*s*m+r*c*h-a*l*h)+p*(+t*c*u-t*o*m-a*s*u+i*s*m+a*o*h-i*c*h)+f*(-r*o*h-t*l*u+t*o*d+r*s*u-i*s*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],b=u*p*c-_*d*c+_*l*m-o*p*m-u*l*f+o*d*f,S=g*d*c-h*p*c-g*l*m+s*p*m+h*l*f-s*d*f,E=h*_*c-g*u*c+g*o*m-s*_*m-h*o*f+s*u*f,L=g*u*l-h*_*l-g*o*d+s*_*d+h*o*p-s*u*p,w=t*b+i*S+r*E+a*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=b*A,e[1]=(_*d*a-u*p*a-_*r*m+i*p*m+u*r*f-i*d*f)*A,e[2]=(o*p*a-_*l*a+_*r*c-i*p*c-o*r*f+i*l*f)*A,e[3]=(u*l*a-o*d*a-u*r*c+i*d*c+o*r*m-i*l*m)*A,e[4]=S*A,e[5]=(h*p*a-g*d*a+g*r*m-t*p*m-h*r*f+t*d*f)*A,e[6]=(g*l*a-s*p*a-g*r*c+t*p*c+s*r*f-t*l*f)*A,e[7]=(s*d*a-h*l*a+h*r*c-t*d*c-s*r*m+t*l*m)*A,e[8]=E*A,e[9]=(g*u*a-h*_*a-g*i*m+t*_*m+h*i*f-t*u*f)*A,e[10]=(s*_*a-g*o*a+g*i*c-t*_*c-s*i*f+t*o*f)*A,e[11]=(h*o*a-s*u*a-h*i*c+t*u*c+s*i*m-t*o*m)*A,e[12]=L*A,e[13]=(h*_*r-g*u*r+g*i*d-t*_*d-h*i*p+t*u*p)*A,e[14]=(g*o*r-s*_*r-g*i*l+t*_*l+s*i*p-t*o*p)*A,e[15]=(s*u*r-h*o*r+h*i*l-t*u*l-s*i*d+t*o*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*s,0,c*l-r*o,h*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,u=o+o,d=a*c,m=a*h,g=a*u,_=s*h,p=s*u,f=o*u,b=l*c,S=l*h,E=l*u,L=i.x,w=i.y,A=i.z;return r[0]=(1-(_+f))*L,r[1]=(m+E)*L,r[2]=(g-S)*L,r[3]=0,r[4]=(m-E)*w,r[5]=(1-(d+f))*w,r[6]=(p+b)*w,r[7]=0,r[8]=(g+S)*A,r[9]=(p-b)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=pi.set(r[0],r[1],r[2]).length();const s=pi.set(r[4],r[5],r[6]).length(),o=pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],$t.copy(this);const c=1/a,h=1/s,u=1/o;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=h,$t.elements[5]*=h,$t.elements[6]*=h,$t.elements[8]*=u,$t.elements[9]*=u,$t.elements[10]*=u,t.setFromRotationMatrix($t),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=Tn){const l=this.elements,c=2*a/(t-e),h=2*a/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r);let m,g;if(o===Tn)m=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===Jr)m=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=Tn){const l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(s-a),d=(t+e)*c,m=(i+r)*h;let g,_;if(o===Tn)g=(s+a)*u,_=-2*u;else if(o===Jr)g=a*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const pi=new U,$t=new ft,Ah=new U(0,0,0),wh=new U(1,1,1),In=new U,dr=new U,Bt=new U,ho=new ft,uo=new Qt;class an{constructor(e=0,t=0,i=0,r=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ho.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ho,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uo.setFromEuler(this),this.setFromQuaternion(uo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class Fs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ch=0;const fo=new U,mi=new Qt,vn=new ft,fr=new U,Vi=new U,Ph=new U,Rh=new Qt,po=new U(1,0,0),mo=new U(0,1,0),go=new U(0,0,1),_o={type:"added"},Ih={type:"removed"},gi={type:"childadded",child:null},Ma={type:"childremoved",child:null};class Ft extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new U,t=new an,i=new Qt,r=new U(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ne}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.multiply(mi),this}rotateOnWorldAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.premultiply(mi),this}rotateX(e){return this.rotateOnAxis(po,e)}rotateY(e){return this.rotateOnAxis(mo,e)}rotateZ(e){return this.rotateOnAxis(go,e)}translateOnAxis(e,t){return fo.copy(e).applyQuaternion(this.quaternion),this.position.add(fo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(po,e)}translateY(e){return this.translateOnAxis(mo,e)}translateZ(e){return this.translateOnAxis(go,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fr.copy(e):fr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Vi,fr,this.up):vn.lookAt(fr,Vi,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),mi.setFromRotationMatrix(vn),this.quaternion.premultiply(mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_o),gi.child=e,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ih),Ma.child=e,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_o),gi.child=e,this.dispatchEvent(gi),gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,e,Ph),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,Rh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),m=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new U(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new U,Mn=new U,ya=new U,yn=new U,_i=new U,vi=new U,vo=new U,Sa=new U,ba=new U,Ta=new U;class nn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Kt.subVectors(e,t),r.cross(Kt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Kt.subVectors(r,t),Mn.subVectors(i,t),ya.subVectors(e,t);const s=Kt.dot(Kt),o=Kt.dot(Mn),l=Kt.dot(ya),c=Mn.dot(Mn),h=Mn.dot(ya),u=s*c-o*o;if(u===0)return a.set(0,0,0),null;const d=1/u,m=(c*l-o*h)*d,g=(s*h-o*l)*d;return a.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,yn.x),l.addScaledVector(s,yn.y),l.addScaledVector(o,yn.z),l)}static isFrontFacing(e,t,i,r){return Kt.subVectors(i,t),Mn.subVectors(e,t),Kt.cross(Mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Kt.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return nn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;_i.subVectors(r,i),vi.subVectors(a,i),Sa.subVectors(e,i);const l=_i.dot(Sa),c=vi.dot(Sa);if(l<=0&&c<=0)return t.copy(i);ba.subVectors(e,r);const h=_i.dot(ba),u=vi.dot(ba);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(i).addScaledVector(_i,s);Ta.subVectors(e,a);const m=_i.dot(Ta),g=vi.dot(Ta);if(g>=0&&m<=g)return t.copy(a);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(vi,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return vo.subVectors(a,r),o=(u-h)/(u-h+(m-g)),t.copy(r).addScaledVector(vo,o);const f=1/(p+_+d);return s=_*f,o=d*f,t.copy(i).addScaledVector(_i,s).addScaledVector(vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Ea(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=Us(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Ea(s,a,e+1/3),this.g=Ea(s,a,e),this.b=Ea(s,a,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=wt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const i=Rl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return Ze.fromWorkingColorSpace(Pt.copy(this),e),Math.round(Lt(Pt.r*255,0,255))*65536+Math.round(Lt(Pt.g*255,0,255))*256+Math.round(Lt(Pt.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Pt.copy(this),t);const i=Pt.r,r=Pt.g,a=Pt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const u=s-o;switch(c=h<=.5?u/(s+o):u/(2-s-o),s){case i:l=(r-a)/u+(r<a?6:0);break;case r:l=(a-i)/u+2;break;case a:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=wt){Ze.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,r=Pt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(pr);const i=Ki(Ln.h,pr.h,t),r=Ki(Ln.s,pr.s,t),a=Ki(Ln.l,pr.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Fe;Fe.NAMES=Rl;let Lh=0;class tr extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=ii,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Ga,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=no,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(i.blending=this.blending),this.side!==En&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ha&&(i.blendSrc=this.blendSrc),this.blendDst!==Ga&&(i.blendDst=this.blendDst),this.blendEquation!==Qn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==no&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nt extends tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new U,mr=new Ge;class Ht{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=io,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Zi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array),a=Rt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==io&&(e.usage=this.usage),e}}class Il extends Ht{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ll extends Ht{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class rn extends Ht{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Dh=0;const Vt=new ft,xa=new Ft,Mi=new U,zt=new zn,Wi=new zn,Tt=new U;class ln extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wl(e)?Ll:Il)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ne().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,i){return Vt.makeTranslation(e,t,i),this.applyMatrix4(Vt),this}scale(e,t,i){return Vt.makeScale(e,t,i),this.applyMatrix4(Vt),this}lookAt(e){return xa.lookAt(e),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new rn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];zt.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ia);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(zt.min,Wi.min),zt.expandByPoint(Tt),Tt.addVectors(zt.max,Wi.max),zt.expandByPoint(Tt)):(zt.expandByPoint(Wi.min),zt.expandByPoint(Wi.max))}zt.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Tt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Tt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(Mi.fromBufferAttribute(e,c),Tt.add(Mi)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let k=0;k<i.count;k++)o[k]=new U,l[k]=new U;const c=new U,h=new U,u=new U,d=new Ge,m=new Ge,g=new Ge,_=new U,p=new U;function f(k,T,y){c.fromBufferAttribute(i,k),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,y),d.fromBufferAttribute(a,k),m.fromBufferAttribute(a,T),g.fromBufferAttribute(a,y),h.sub(c),u.sub(c),m.sub(d),g.sub(d);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(P),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(P),o[k].add(_),o[T].add(_),o[y].add(_),l[k].add(p),l[T].add(p),l[y].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let k=0,T=b.length;k<T;++k){const y=b[k],P=y.start,G=y.count;for(let B=P,$=P+G;B<$;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new U,E=new U,L=new U,w=new U;function A(k){L.fromBufferAttribute(r,k),w.copy(L);const T=o[k];S.copy(T),S.sub(L.multiplyScalar(L.dot(T))).normalize(),E.crossVectors(w,T);const P=E.dot(l[k])<0?-1:1;s.setXYZW(k,S.x,S.y,S.z,P)}for(let k=0,T=b.length;k<T;++k){const y=b[k],P=y.start,G=y.count;for(let B=P,$=P+G;B<$;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new U,a=new U,s=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new Ht(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mo=new ft,Yn=new Ns,gr=new ia,yo=new U,yi=new U,Si=new U,bi=new U,Aa=new U,_r=new U,vr=new Ge,Mr=new Ge,yr=new Ge,So=new U,bo=new U,To=new U,Sr=new U,br=new U;class Be extends Ft{constructor(e=new ln,t=new nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){_r.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(Aa.fromBufferAttribute(u,e),s?_r.addScaledVector(Aa,h):_r.addScaledVector(Aa.sub(t),h))}t.add(_r)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(a),Yn.copy(e.ray).recast(e.near),!(gr.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(gr,yo)===null||Yn.origin.distanceToSquared(yo)>(e.far-e.near)**2))&&(Mo.copy(a).invert(),Yn.copy(e.ray).applyMatrix4(Mo),!(i.boundingBox!==null&&Yn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=s[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,L=S;E<L;E+=3){const w=o.getX(E),A=o.getX(E+1),k=o.getX(E+2);r=Tr(this,f,e,i,c,h,u,w,A,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const b=o.getX(p),S=o.getX(p+1),E=o.getX(p+2);r=Tr(this,s,e,i,c,h,u,b,S,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=s[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,L=S;E<L;E+=3){const w=E,A=E+1,k=E+2;r=Tr(this,f,e,i,c,h,u,w,A,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const b=p,S=p+1,E=p+2;r=Tr(this,s,e,i,c,h,u,b,S,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Uh(n,e,t,i,r,a,s,o){let l;if(e.side===Nt?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===En,o),l===null)return null;br.copy(o),br.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(br);return c<t.near||c>t.far?null:{distance:c,point:br.clone(),object:n}}function Tr(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,yi),n.getVertexPosition(l,Si),n.getVertexPosition(c,bi);const h=Uh(n,e,t,i,yi,Si,bi,Sr);if(h){r&&(vr.fromBufferAttribute(r,o),Mr.fromBufferAttribute(r,l),yr.fromBufferAttribute(r,c),h.uv=nn.getInterpolation(Sr,yi,Si,bi,vr,Mr,yr,new Ge)),a&&(vr.fromBufferAttribute(a,o),Mr.fromBufferAttribute(a,l),yr.fromBufferAttribute(a,c),h.uv1=nn.getInterpolation(Sr,yi,Si,bi,vr,Mr,yr,new Ge)),s&&(So.fromBufferAttribute(s,o),bo.fromBufferAttribute(s,l),To.fromBufferAttribute(s,c),h.normal=nn.getInterpolation(Sr,yi,Si,bi,So,bo,To,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new U,materialIndex:0};nn.getNormal(yi,Si,bi,u.normal),h.face=u}return h}class nr extends ln{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,s,a,0),g("z","y","x",1,-1,i,t,-e,s,a,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,a,4),g("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(h,3)),this.setAttribute("uv",new rn(u,2));function g(_,p,f,b,S,E,L,w,A,k,T){const y=E/A,P=L/k,G=E/2,B=L/2,$=w/2,Y=A+1,W=k+1;let j=0,H=0;const le=new U;for(let de=0;de<W;de++){const _e=de*P-B;for(let ze=0;ze<Y;ze++){const Je=ze*y-G;le[_]=Je*b,le[p]=_e*S,le[f]=$,c.push(le.x,le.y,le.z),le[_]=0,le[p]=0,le[f]=w>0?1:-1,h.push(le.x,le.y,le.z),u.push(ze/A),u.push(1-de/k),j+=1}}for(let de=0;de<k;de++)for(let _e=0;_e<A;_e++){const ze=d+_e+Y*de,Je=d+_e+Y*(de+1),V=d+(_e+1)+Y*(de+1),Q=d+(_e+1)+Y*de;l.push(ze,Je,Q),l.push(Je,V,Q),H+=6}o.addGroup(m,H,T),m+=H,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ni(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=Ni(n[t]);for(const r in i)e[r]=i[r]}return e}function Nh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Fh={clone:Ni,merge:It};var kh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kh,this.fragmentShader=Oh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=Nh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ul extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new U,Eo=new Ge,xo=new Ge;class Wt extends Ul{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($i*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qi*2*Math.atan(Math.tan($i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z)}getViewSize(e,t){return this.getViewBounds(e,Eo,xo),t.subVectors(xo,Eo)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($i*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,Ei=1;class Bh extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wt(Ti,Ei,e,t);r.layers=this.layers,this.add(r);const a=new Wt(Ti,Ei,e,t);a.layers=this.layers,this.add(a);const s=new Wt(Ti,Ei,e,t);s.layers=this.layers,this.add(s);const o=new Wt(Ti,Ei,e,t);o.layers=this.layers,this.add(o);const l=new Wt(Ti,Ei,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Ti,Ei,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Nl extends Ut{constructor(e,t,i,r,a,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ii,super(e,t,i,r,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zh extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Nl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new nr(5,5,5),a=new Hn({name:"CubemapFromEquirect",uniforms:Ni(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:On});a.uniforms.tEquirect.value=t;const s=new Be(r,a),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=Zt),new Bh(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}const wa=new U,Hh=new U,Gh=new Ne;class Nn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=wa.subVectors(i,t).cross(Hh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Gh.getNormalMatrix(e),r=this.coplanarPoint(wa).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new ia,Er=new U;class Fl{constructor(e=new Nn,t=new Nn,i=new Nn,r=new Nn,a=new Nn,s=new Nn){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tn){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],m=r[8],g=r[9],_=r[10],p=r[11],f=r[12],b=r[13],S=r[14],E=r[15];if(i[0].setComponents(l-a,d-c,p-m,E-f).normalize(),i[1].setComponents(l+a,d+c,p+m,E+f).normalize(),i[2].setComponents(l+s,d+h,p+g,E+b).normalize(),i[3].setComponents(l-s,d-h,p-g,E-b).normalize(),i[4].setComponents(l-o,d-u,p-_,E-S).normalize(),t===Tn)i[5].setComponents(l+o,d+u,p+_,E+S).normalize();else if(t===Jr)i[5].setComponents(o,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Er.x=r.normal.x>0?e.max.x:e.min.x,Er.y=r.normal.y>0?e.max.y:e.min.y,Er.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kl(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Vh(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,o),u.count===-1&&d.length===0&&n.bufferSubData(c,0,h),d.length!==0){for(let m=0,g=d.length;m<g;m++){const _=d[m];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(n.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}class tt extends ln{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const b=f*d-s;for(let S=0;S<c;S++){const E=S*u-a;g.push(E,-b,0),_.push(0,0,1),p.push(S/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){const S=b+c*f,E=b+c*(f+1),L=b+1+c*(f+1),w=b+1+c*f;m.push(S,E,w),m.push(E,L,w)}this.setIndex(m),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(_,3)),this.setAttribute("uv",new rn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$h=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ru=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Su=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ru=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ku=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ou=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ku=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,id=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ad=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ld=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Md=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Td=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ed=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ld=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ud=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Od=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$d=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,af=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,of=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,df=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ff=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_f=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Wh,alphahash_pars_fragment:Xh,alphamap_fragment:qh,alphamap_pars_fragment:Yh,alphatest_fragment:$h,alphatest_pars_fragment:Kh,aomap_fragment:Zh,aomap_pars_fragment:jh,batching_pars_vertex:Jh,batching_vertex:Qh,begin_vertex:eu,beginnormal_vertex:tu,bsdfs:nu,iridescence_fragment:iu,bumpmap_pars_fragment:ru,clipping_planes_fragment:au,clipping_planes_pars_fragment:su,clipping_planes_pars_vertex:ou,clipping_planes_vertex:lu,color_fragment:cu,color_pars_fragment:hu,color_pars_vertex:uu,color_vertex:du,common:fu,cube_uv_reflection_fragment:pu,defaultnormal_vertex:mu,displacementmap_pars_vertex:gu,displacementmap_vertex:_u,emissivemap_fragment:vu,emissivemap_pars_fragment:Mu,colorspace_fragment:yu,colorspace_pars_fragment:Su,envmap_fragment:bu,envmap_common_pars_fragment:Tu,envmap_pars_fragment:Eu,envmap_pars_vertex:xu,envmap_physical_pars_fragment:Fu,envmap_vertex:Au,fog_vertex:wu,fog_pars_vertex:Cu,fog_fragment:Pu,fog_pars_fragment:Ru,gradientmap_pars_fragment:Iu,lightmap_pars_fragment:Lu,lights_lambert_fragment:Du,lights_lambert_pars_fragment:Uu,lights_pars_begin:Nu,lights_toon_fragment:ku,lights_toon_pars_fragment:Ou,lights_phong_fragment:Bu,lights_phong_pars_fragment:zu,lights_physical_fragment:Hu,lights_physical_pars_fragment:Gu,lights_fragment_begin:Vu,lights_fragment_maps:Wu,lights_fragment_end:Xu,logdepthbuf_fragment:qu,logdepthbuf_pars_fragment:Yu,logdepthbuf_pars_vertex:$u,logdepthbuf_vertex:Ku,map_fragment:Zu,map_pars_fragment:ju,map_particle_fragment:Ju,map_particle_pars_fragment:Qu,metalnessmap_fragment:ed,metalnessmap_pars_fragment:td,morphinstance_vertex:nd,morphcolor_vertex:id,morphnormal_vertex:rd,morphtarget_pars_vertex:ad,morphtarget_vertex:sd,normal_fragment_begin:od,normal_fragment_maps:ld,normal_pars_fragment:cd,normal_pars_vertex:hd,normal_vertex:ud,normalmap_pars_fragment:dd,clearcoat_normal_fragment_begin:fd,clearcoat_normal_fragment_maps:pd,clearcoat_pars_fragment:md,iridescence_pars_fragment:gd,opaque_fragment:_d,packing:vd,premultiplied_alpha_fragment:Md,project_vertex:yd,dithering_fragment:Sd,dithering_pars_fragment:bd,roughnessmap_fragment:Td,roughnessmap_pars_fragment:Ed,shadowmap_pars_fragment:xd,shadowmap_pars_vertex:Ad,shadowmap_vertex:wd,shadowmask_pars_fragment:Cd,skinbase_vertex:Pd,skinning_pars_vertex:Rd,skinning_vertex:Id,skinnormal_vertex:Ld,specularmap_fragment:Dd,specularmap_pars_fragment:Ud,tonemapping_fragment:Nd,tonemapping_pars_fragment:Fd,transmission_fragment:kd,transmission_pars_fragment:Od,uv_pars_fragment:Bd,uv_pars_vertex:zd,uv_vertex:Hd,worldpos_vertex:Gd,background_vert:Vd,background_frag:Wd,backgroundCube_vert:Xd,backgroundCube_frag:qd,cube_vert:Yd,cube_frag:$d,depth_vert:Kd,depth_frag:Zd,distanceRGBA_vert:jd,distanceRGBA_frag:Jd,equirect_vert:Qd,equirect_frag:ef,linedashed_vert:tf,linedashed_frag:nf,meshbasic_vert:rf,meshbasic_frag:af,meshlambert_vert:sf,meshlambert_frag:of,meshmatcap_vert:lf,meshmatcap_frag:cf,meshnormal_vert:hf,meshnormal_frag:uf,meshphong_vert:df,meshphong_frag:ff,meshphysical_vert:pf,meshphysical_frag:mf,meshtoon_vert:gf,meshtoon_frag:_f,points_vert:vf,points_frag:Mf,shadow_vert:yf,shadow_frag:Sf,sprite_vert:bf,sprite_frag:Tf},ae={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},tn={basic:{uniforms:It([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:It([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:It([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:It([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:It([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:It([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:It([ae.points,ae.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:It([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:It([ae.common,ae.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:It([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:It([ae.sprite,ae.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:It([ae.common,ae.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:It([ae.lights,ae.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};tn.physical={uniforms:It([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const xr={r:0,b:0,g:0},Kn=new an,Ef=new ft;function xf(n,e,t,i,r,a,s){const o=new Fe(0);let l=a===!0?0:1,c,h,u=null,d=0,m=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function _(b){let S=!1;const E=g(b);E===null?f(o,l):E&&E.isColor&&(f(E,1),S=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,S){const E=g(S);E&&(E.isCubeTexture||E.mapping===ta)?(h===void 0&&(h=new Be(new nr(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Ni(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Kn.copy(S.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ef.makeRotationFromEuler(Kn)),h.material.toneMapped=Ze.getTransfer(E.colorSpace)!==it,(u!==E||d!==E.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,m=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Be(new tt(2,2),new Hn({name:"BackgroundMaterial",uniforms:Ni(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(E.colorSpace)!==it,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,m=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,S){b.getRGB(xr,Dl(n)),i.buffers.color.setClear(xr.r,xr.g,xr.b,S,s)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),l=S,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(o,l)},render:_,addToRenderList:p}}function Af(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let a=r,s=!1;function o(y,P,G,B,$){let Y=!1;const W=u(B,G,P);a!==W&&(a=W,c(a.object)),Y=m(y,B,G,$),Y&&g(y,B,G,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,E(y,P,G,B),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,P,G){const B=G.wireframe===!0;let $=i[y.id];$===void 0&&($={},i[y.id]=$);let Y=$[P.id];Y===void 0&&(Y={},$[P.id]=Y);let W=Y[B];return W===void 0&&(W=d(l()),Y[B]=W),W}function d(y){const P=[],G=[],B=[];for(let $=0;$<t;$++)P[$]=0,G[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:B,object:y,attributes:{},index:null}}function m(y,P,G,B){const $=a.attributes,Y=P.attributes;let W=0;const j=G.getAttributes();for(const H in j)if(j[H].location>=0){const de=$[H];let _e=Y[H];if(_e===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),de===void 0||de.attribute!==_e||_e&&de.data!==_e.data)return!0;W++}return a.attributesNum!==W||a.index!==B}function g(y,P,G,B){const $={},Y=P.attributes;let W=0;const j=G.getAttributes();for(const H in j)if(j[H].location>=0){let de=Y[H];de===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(de=y.instanceColor));const _e={};_e.attribute=de,de&&de.data&&(_e.data=de.data),$[H]=_e,W++}a.attributes=$,a.attributesNum=W,a.index=B}function _(){const y=a.newAttributes;for(let P=0,G=y.length;P<G;P++)y[P]=0}function p(y){f(y,0)}function f(y,P){const G=a.newAttributes,B=a.enabledAttributes,$=a.attributeDivisors;G[y]=1,B[y]===0&&(n.enableVertexAttribArray(y),B[y]=1),$[y]!==P&&(n.vertexAttribDivisor(y,P),$[y]=P)}function b(){const y=a.newAttributes,P=a.enabledAttributes;for(let G=0,B=P.length;G<B;G++)P[G]!==y[G]&&(n.disableVertexAttribArray(G),P[G]=0)}function S(y,P,G,B,$,Y,W){W===!0?n.vertexAttribIPointer(y,P,G,$,Y):n.vertexAttribPointer(y,P,G,B,$,Y)}function E(y,P,G,B){_();const $=B.attributes,Y=G.getAttributes(),W=P.defaultAttributeValues;for(const j in Y){const H=Y[j];if(H.location>=0){let le=$[j];if(le===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),le!==void 0){const de=le.normalized,_e=le.itemSize,ze=e.get(le);if(ze===void 0)continue;const Je=ze.buffer,V=ze.type,Q=ze.bytesPerElement,ge=V===n.INT||V===n.UNSIGNED_INT||le.gpuType===ws;if(le.isInterleavedBufferAttribute){const he=le.data,Ae=he.stride,Ie=le.offset;if(he.isInstancedInterleavedBuffer){for(let Oe=0;Oe<H.locationSize;Oe++)f(H.location+Oe,he.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)p(H.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let Oe=0;Oe<H.locationSize;Oe++)S(H.location+Oe,_e/H.locationSize,V,de,Ae*Q,(Ie+_e/H.locationSize*Oe)*Q,ge)}else{if(le.isInstancedBufferAttribute){for(let he=0;he<H.locationSize;he++)f(H.location+he,le.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let he=0;he<H.locationSize;he++)p(H.location+he);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let he=0;he<H.locationSize;he++)S(H.location+he,_e/H.locationSize,V,de,_e*Q,_e/H.locationSize*he*Q,ge)}}else if(W!==void 0){const de=W[j];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(H.location,de);break;case 3:n.vertexAttrib3fv(H.location,de);break;case 4:n.vertexAttrib4fv(H.location,de);break;default:n.vertexAttrib1fv(H.location,de)}}}}b()}function L(){k();for(const y in i){const P=i[y];for(const G in P){const B=P[G];for(const $ in B)h(B[$].object),delete B[$];delete P[G]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const G in P){const B=P[G];for(const $ in B)h(B[$].object),delete B[$];delete P[G]}delete i[y.id]}function A(y){for(const P in i){const G=i[P];if(G[y.id]===void 0)continue;const B=G[y.id];for(const $ in B)h(B[$].object),delete B[$];delete G[y.id]}}function k(){T(),s=!0,a!==r&&(a=r,c(a.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:k,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function wf(n,e,t){let i;function r(c){i=c}function a(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function s(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,i,1)}function l(c,h,u,d){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)s(c[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)t.update(g,i,d[_])}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Cf(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(w){return!(w!==jt&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const A=w===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==xn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==bn&&!A)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:f,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:E,maxSamples:L}}function Pf(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new Nn,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||i!==0||r;return r=d,i=u.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!r||g===null||g.length===0||a&&!p)a?h(null):c();else{const b=a?0:i,S=b*4;let E=f.clippingState||null;l.value=E,E=h(g,d,S,m);for(let L=0;L!==S;++L)E[L]=t[L];f.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<f)&&(p=new Float32Array(f));for(let S=0,E=m;S!==_;++S,E+=4)s.copy(u[S]).applyMatrix4(b,o),s.normal.toArray(p,E),p[E+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Rf(n){let e=new WeakMap;function t(s,o){return o===Va?s.mapping=Ii:o===Wa&&(s.mapping=Li),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Va||o===Wa)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new zh(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class If extends Ul{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ci=4,Ao=[.125,.215,.35,.446,.526,.582],ei=20,Ca=new If,wo=new Fe;let Pa=null,Ra=0,Ia=0,La=!1;const Jn=(1+Math.sqrt(5))/2,xi=1/Jn,Co=[new U(-Jn,xi,0),new U(Jn,xi,0),new U(-xi,0,Jn),new U(xi,0,Jn),new U(0,Jn,-xi),new U(0,Jn,xi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Po{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Pa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Io(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pa,Ra,Ia),this._renderer.xr.enabled=La,e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:er,format:jt,colorSpace:Vn,depthBuffer:!1},r=Ro(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ro(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lf(a)),this._blurMaterial=Df(a,e,t)}return r}_compileMaterial(e){const t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,i,r){const o=new Wt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(wo),h.toneMapping=Bn,h.autoClear=!1;const m=new nt({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new Be(new nr,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(wo),_=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):b===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const S=this._cubeSize;Ar(r,b*S,f>2?S:0,S,S),h.setRenderTarget(r),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ii||e.mapping===Li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Io());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Be(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Ar(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Ca)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Co[(r-a-1)%Co.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Be(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*ei-1),_=a/g,p=isFinite(a)?1+Math.floor(h*_):ei;p>ei&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ei}`);const f=[];let b=0;for(let A=0;A<ei;++A){const k=A/_,T=Math.exp(-k*k/2);f.push(T),A===0?b+=T:A<p&&(b+=2*T)}for(let A=0;A<f.length;A++)f[A]=f[A]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;const E=this._sizeLods[r],L=3*E*(r>S-Ci?r-S+Ci:0),w=4*(this._cubeSize-E);Ar(t,L,w,3*E,2*E),l.setRenderTarget(t),l.render(u,Ca)}}function Lf(n){const e=[],t=[],i=[];let r=n;const a=n-Ci+1+Ao.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>n-Ci?l=Ao[s-n+Ci-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,f=1,b=new Float32Array(_*g*m),S=new Float32Array(p*g*m),E=new Float32Array(f*g*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,k=w>2?0:-1,T=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];b.set(T,_*g*w),S.set(d,p*g*w);const y=[w,w,w,w,w,w];E.set(y,f*g*w)}const L=new ln;L.setAttribute("position",new Ht(b,_)),L.setAttribute("uv",new Ht(S,p)),L.setAttribute("faceIndex",new Ht(E,f)),e.push(L),r>Ci&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ro(n,e,t){const i=new ai(n,e,t);return i.texture.mapping=ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ar(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Df(n,e,t){const i=new Float32Array(ei),r=new U(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Io(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Lo(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function ks(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Uf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Va||l===Wa,h=l===Ii||l===Li;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Po(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new Po(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Nf(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Zi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ff(n,e,t,i){const r={},a=new WeakMap;function s(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}d.removeEventListener("dispose",s),delete r[d.id];const m=a.get(d);m&&(e.remove(m),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let S=0,E=b.length;S<E;S+=3){const L=b[S+0],w=b[S+1],A=b[S+2];d.push(L,w,w,A,A,L)}}else if(g!==void 0){const b=g.array;_=g.version;for(let S=0,E=b.length/3-1;S<E;S+=3){const L=S+0,w=S+1,A=S+2;d.push(L,w,w,A,A,L)}}else return;const p=new(wl(d)?Ll:Il)(d,1);p.version=_;const f=a.get(u);f&&e.remove(f),a.set(u,p)}function h(u){const d=a.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function kf(n,e,t){let i;function r(d){i=d}let a,s;function o(d){a=d.type,s=d.bytesPerElement}function l(d,m){n.drawElements(i,m,a,d*s),t.update(m,i,1)}function c(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,a,d*s,g),t.update(m,i,g))}function h(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,i,1)}function u(d,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/s,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,a,d,0,_,0,g);let f=0;for(let b=0;b<g;b++)f+=m[b];for(let b=0;b<_.length;b++)t.update(f,i,_[b])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Of(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Bf(n,e,t){const i=new WeakMap,r=new Et;function a(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let y=function(){k.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var m=y;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),p===!0&&(E=3);let L=o.attributes.position.count*E,w=1;L>e.maxTextureSize&&(w=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*w*4*u),k=new Pl(A,L,w,u);k.type=bn,k.needsUpdate=!0;const T=E*4;for(let P=0;P<u;P++){const G=f[P],B=b[P],$=S[P],Y=L*w*4*P;for(let W=0;W<G.count;W++){const j=W*T;g===!0&&(r.fromBufferAttribute(G,W),A[Y+j+0]=r.x,A[Y+j+1]=r.y,A[Y+j+2]=r.z,A[Y+j+3]=0),_===!0&&(r.fromBufferAttribute(B,W),A[Y+j+4]=r.x,A[Y+j+5]=r.y,A[Y+j+6]=r.z,A[Y+j+7]=0),p===!0&&(r.fromBufferAttribute($,W),A[Y+j+8]=r.x,A[Y+j+9]=r.y,A[Y+j+10]=r.z,A[Y+j+11]=$.itemSize===4?r.w:1)}}d={count:u,texture:k,size:new Ge(L,w)},i.set(o,d),o.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:a}}function zf(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class Ol extends Ut{constructor(e,t,i,r,a,s,o,l,c,h=Pi){if(h!==Pi&&h!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Pi&&(i=ri),i===void 0&&h===Ui&&(i=Di),super(null,r,a,s,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bl=new Ut,Do=new Ol(1,1),zl=new Pl,Hl=new Eh,Gl=new Nl,Uo=[],No=[],Fo=new Float32Array(16),ko=new Float32Array(9),Oo=new Float32Array(4);function Oi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Uo[r];if(a===void 0&&(a=new Float32Array(r),Uo[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ra(n,e){let t=No[e];t===void 0&&(t=new Int32Array(e),No[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Hf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Gf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function Vf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function Wf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function Xf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Oo.set(i),n.uniformMatrix2fv(this.addr,!1,Oo),bt(t,i)}}function qf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;ko.set(i),n.uniformMatrix3fv(this.addr,!1,ko),bt(t,i)}}function Yf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Fo.set(i),n.uniformMatrix4fv(this.addr,!1,Fo),bt(t,i)}}function $f(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Kf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function Zf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function jf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function Jf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Qf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function ep(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function tp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function np(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(Do.compareFunction=Al,a=Do):a=Bl,t.setTexture2D(e||a,r)}function ip(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Hl,r)}function rp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Gl,r)}function ap(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zl,r)}function sp(n){switch(n){case 5126:return Hf;case 35664:return Gf;case 35665:return Vf;case 35666:return Wf;case 35674:return Xf;case 35675:return qf;case 35676:return Yf;case 5124:case 35670:return $f;case 35667:case 35671:return Kf;case 35668:case 35672:return Zf;case 35669:case 35673:return jf;case 5125:return Jf;case 36294:return Qf;case 36295:return ep;case 36296:return tp;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return ip;case 35680:case 36300:case 36308:case 36293:return rp;case 36289:case 36303:case 36311:case 36292:return ap}}function op(n,e){n.uniform1fv(this.addr,e)}function lp(n,e){const t=Oi(e,this.size,2);n.uniform2fv(this.addr,t)}function cp(n,e){const t=Oi(e,this.size,3);n.uniform3fv(this.addr,t)}function hp(n,e){const t=Oi(e,this.size,4);n.uniform4fv(this.addr,t)}function up(n,e){const t=Oi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dp(n,e){const t=Oi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fp(n,e){const t=Oi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function pp(n,e){n.uniform1iv(this.addr,e)}function mp(n,e){n.uniform2iv(this.addr,e)}function gp(n,e){n.uniform3iv(this.addr,e)}function _p(n,e){n.uniform4iv(this.addr,e)}function vp(n,e){n.uniform1uiv(this.addr,e)}function Mp(n,e){n.uniform2uiv(this.addr,e)}function yp(n,e){n.uniform3uiv(this.addr,e)}function Sp(n,e){n.uniform4uiv(this.addr,e)}function bp(n,e,t){const i=this.cache,r=e.length,a=ra(t,r);St(i,a)||(n.uniform1iv(this.addr,a),bt(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Bl,a[s])}function Tp(n,e,t){const i=this.cache,r=e.length,a=ra(t,r);St(i,a)||(n.uniform1iv(this.addr,a),bt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Hl,a[s])}function Ep(n,e,t){const i=this.cache,r=e.length,a=ra(t,r);St(i,a)||(n.uniform1iv(this.addr,a),bt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Gl,a[s])}function xp(n,e,t){const i=this.cache,r=e.length,a=ra(t,r);St(i,a)||(n.uniform1iv(this.addr,a),bt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||zl,a[s])}function Ap(n){switch(n){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return up;case 35675:return dp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return vp;case 36294:return Mp;case 36295:return yp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return xp}}class wp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sp(t.type)}}class Cp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ap(t.type)}}class Pp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function Bo(n,e){n.seq.push(e),n.map[e.id]=e}function Rp(n,e,t){const i=n.name,r=i.length;for(Da.lastIndex=0;;){const a=Da.exec(i),s=Da.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){Bo(t,c===void 0?new wp(o,n,e):new Cp(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Pp(o),Bo(t,u)),t=u}}}class Wr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);Rp(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function zo(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Ip=37297;let Lp=0;function Dp(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}function Up(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===jr&&t===Zr?i="LinearDisplayP3ToLinearSRGB":e===Zr&&t===jr&&(i="LinearSRGBToLinearDisplayP3"),n){case Vn:case na:return[i,"LinearTransferOETF"];case wt:case Ds:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ho(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Dp(n.getShaderSource(e),s)}else return r}function Np(n,e){const t=Up(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Fp(n,e){let t;switch(e){case Nc:t="Linear";break;case Fc:t="Reinhard";break;case kc:t="Cineon";break;case Oc:t="ACESFilmic";break;case zc:t="AgX";break;case Hc:t="Neutral";break;case Bc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wr=new U;function kp(){Ze.getLuminanceCoefficients(wr);const n=wr.x.toFixed(4),e=wr.y.toFixed(4),t=wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Op(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yi).join(`
`)}function Bp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zp(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Yi(n){return n!==""}function Go(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hp=/^[ \t]*#include +<([\w\d./]+)>/gm;function vs(n){return n.replace(Hp,Vp)}const Gp=new Map;function Vp(n,e){let t=Ue[e];if(t===void 0){const i=Gp.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vs(t)}const Wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wo(n){return n.replace(Wp,Xp)}function Xp(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Xo(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===oc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Sn&&(e="SHADOWMAP_TYPE_VSM"),e}function Yp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ii:case Li:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $p(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Li:e="ENVMAP_MODE_REFRACTION";break}return e}function Kp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pl:e="ENVMAP_BLENDING_MULTIPLY";break;case Dc:e="ENVMAP_BLENDING_MIX";break;case Uc:e="ENVMAP_BLENDING_ADD";break}return e}function Zp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function jp(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=qp(t),c=Yp(t),h=$p(t),u=Kp(t),d=Zp(t),m=Op(t),g=Bp(a),_=r.createProgram();let p,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yi).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yi).join(`
`),f.length>0&&(f+=`
`)):(p=[Xo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),f=[Xo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Bn?Fp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Np("linearToOutputTexel",t.outputColorSpace),kp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yi).join(`
`)),s=vs(s),s=Go(s,t),s=Vo(s,t),o=vs(o),o=Go(o,t),o=Vo(o,t),s=Wo(s),o=Wo(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=b+p+s,E=b+f+o,L=zo(r,r.VERTEX_SHADER,S),w=zo(r,r.FRAGMENT_SHADER,E);r.attachShader(_,L),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(P){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(L).trim(),$=r.getShaderInfoLog(w).trim();let Y=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,L,w);else{const j=Ho(r,L,"vertex"),H=Ho(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+j+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||$==="")&&(W=!1);W&&(P.diagnostics={runnable:Y,programLog:G,vertexShader:{log:B,prefix:p},fragmentShader:{log:$,prefix:f}})}r.deleteShader(L),r.deleteShader(w),k=new Wr(r,_),T=zp(r,_)}let k;this.getUniforms=function(){return k===void 0&&A(this),k};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,Ip)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=w,this}let Jp=0;class Qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new em(e),t.set(e,i)),i}}class em{constructor(e){this.id=Jp++,this.code=e,this.usedTimes=0}}function tm(n,e,t,i,r,a,s){const o=new Fs,l=new Qp,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,y,P,G,B){const $=G.fog,Y=B.geometry,W=T.isMeshStandardMaterial?G.environment:null,j=(T.isMeshStandardMaterial?t:e).get(T.envMap||W),H=j&&j.mapping===ta?j.image.height:null,le=g[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const de=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_e=de!==void 0?de.length:0;let ze=0;Y.morphAttributes.position!==void 0&&(ze=1),Y.morphAttributes.normal!==void 0&&(ze=2),Y.morphAttributes.color!==void 0&&(ze=3);let Je,V,Q,ge;if(le){const qe=tn[le];Je=qe.vertexShader,V=qe.fragmentShader}else Je=T.vertexShader,V=T.fragmentShader,l.update(T),Q=l.getVertexShaderID(T),ge=l.getFragmentShaderID(T);const he=n.getRenderTarget(),Ae=B.isInstancedMesh===!0,Ie=B.isBatchedMesh===!0,Oe=!!T.map,ot=!!T.matcap,C=!!j,pt=!!T.aoMap,je=!!T.lightMap,Qe=!!T.bumpMap,Se=!!T.normalMap,mt=!!T.displacementMap,Pe=!!T.emissiveMap,Le=!!T.metalnessMap,x=!!T.roughnessMap,v=T.anisotropy>0,O=T.clearcoat>0,K=T.dispersion>0,J=T.iridescence>0,Z=T.sheen>0,be=T.transmission>0,se=v&&!!T.anisotropyMap,ue=O&&!!T.clearcoatMap,De=O&&!!T.clearcoatNormalMap,te=O&&!!T.clearcoatRoughnessMap,ce=J&&!!T.iridescenceMap,He=J&&!!T.iridescenceThicknessMap,Ce=Z&&!!T.sheenColorMap,fe=Z&&!!T.sheenRoughnessMap,Re=!!T.specularMap,ke=!!T.specularColorMap,at=!!T.specularIntensityMap,R=be&&!!T.transmissionMap,ne=be&&!!T.thicknessMap,X=!!T.gradientMap,q=!!T.alphaMap,re=T.alphaTest>0,Ee=!!T.alphaHash,Ve=!!T.extensions;let gt=Bn;T.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(gt=n.toneMapping);const xt={shaderID:le,shaderType:T.type,shaderName:T.name,vertexShader:Je,fragmentShader:V,defines:T.defines,customVertexShaderID:Q,customFragmentShaderID:ge,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Ie,batchingColor:Ie&&B._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&B.instanceColor!==null,instancingMorph:Ae&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Vn,alphaToCoverage:!!T.alphaToCoverage,map:Oe,matcap:ot,envMap:C,envMapMode:C&&j.mapping,envMapCubeUVHeight:H,aoMap:pt,lightMap:je,bumpMap:Qe,normalMap:Se,displacementMap:d&&mt,emissiveMap:Pe,normalMapObjectSpace:Se&&T.normalMapType===qc,normalMapTangentSpace:Se&&T.normalMapType===Xc,metalnessMap:Le,roughnessMap:x,anisotropy:v,anisotropyMap:se,clearcoat:O,clearcoatMap:ue,clearcoatNormalMap:De,clearcoatRoughnessMap:te,dispersion:K,iridescence:J,iridescenceMap:ce,iridescenceThicknessMap:He,sheen:Z,sheenColorMap:Ce,sheenRoughnessMap:fe,specularMap:Re,specularColorMap:ke,specularIntensityMap:at,transmission:be,transmissionMap:R,thicknessMap:ne,gradientMap:X,opaque:T.transparent===!1&&T.blending===ii&&T.alphaToCoverage===!1,alphaMap:q,alphaTest:re,alphaHash:Ee,combine:T.combine,mapUv:Oe&&_(T.map.channel),aoMapUv:pt&&_(T.aoMap.channel),lightMapUv:je&&_(T.lightMap.channel),bumpMapUv:Qe&&_(T.bumpMap.channel),normalMapUv:Se&&_(T.normalMap.channel),displacementMapUv:mt&&_(T.displacementMap.channel),emissiveMapUv:Pe&&_(T.emissiveMap.channel),metalnessMapUv:Le&&_(T.metalnessMap.channel),roughnessMapUv:x&&_(T.roughnessMap.channel),anisotropyMapUv:se&&_(T.anisotropyMap.channel),clearcoatMapUv:ue&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:De&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:He&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(T.sheenRoughnessMap.channel),specularMapUv:Re&&_(T.specularMap.channel),specularColorMapUv:ke&&_(T.specularColorMap.channel),specularIntensityMapUv:at&&_(T.specularIntensityMap.channel),transmissionMapUv:R&&_(T.transmissionMap.channel),thicknessMapUv:ne&&_(T.thicknessMap.channel),alphaMapUv:q&&_(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Se||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(Oe||q),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ze,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,decodeVideoTexture:Oe&&T.map.isVideoTexture===!0&&Ze.getTransfer(T.map.colorSpace)===it,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Xe,flipSided:T.side===Nt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ve&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&T.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function f(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)y.push(P),y.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(b(y,T),S(y,T),y.push(n.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function b(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function S(T,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),T.push(o.mask)}function E(T){const y=g[T.type];let P;if(y){const G=tn[y];P=Fh.clone(G.uniforms)}else P=T.uniforms;return P}function L(T,y){let P;for(let G=0,B=h.length;G<B;G++){const $=h[G];if($.cacheKey===y){P=$,++P.usedTimes;break}}return P===void 0&&(P=new jp(n,y,T,a),h.push(P)),P}function w(T){if(--T.usedTimes===0){const y=h.indexOf(T);h[y]=h[h.length-1],h.pop(),T.destroy()}}function A(T){l.remove(T)}function k(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:E,acquireProgram:L,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:k}}function nm(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,l){n.get(s)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function im(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function qo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yo(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(u,d,m,g,_,p){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),e++,f}function o(u,d,m,g,_,p){const f=s(u,d,m,g,_,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(u,d,m,g,_,p){const f=s(u,d,m,g,_,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||im),i.length>1&&i.sort(d||qo),r.length>1&&r.sort(d||qo)}function h(){for(let u=e,d=n.length;u<d;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:h,sort:c}}function rm(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new Yo,n.set(i,[s])):r>=a.length?(s=new Yo,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function am(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Fe};break;case"SpotLight":t={position:new U,direction:new U,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function sm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let om=0;function lm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cm(n){const e=new am,t=sm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,a=new ft,s=new ft;function o(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,g=0,_=0,p=0,f=0,b=0,S=0,E=0,L=0,w=0,A=0;c.sort(lm);for(let T=0,y=c.length;T<y;T++){const P=c[T],G=P.color,B=P.intensity,$=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=G.r*B,u+=G.g*B,d+=G.b*B;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],B);A++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,H=t.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=P.shadow.matrix,b++}i.directional[m]=W,m++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(G).multiplyScalar(B),W.distance=$,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[_]=W;const j=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,j.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[_]=j.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=Y,E++}_++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(G).multiplyScalar(B),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=W,p++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const j=P.shadow,H=t.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(B),W.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[f]=W,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const k=i.hash;(k.directionalLength!==m||k.pointLength!==g||k.spotLength!==_||k.rectAreaLength!==p||k.hemiLength!==f||k.numDirectionalShadows!==b||k.numPointShadows!==S||k.numSpotShadows!==E||k.numSpotMaps!==L||k.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+L-w,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,k.directionalLength=m,k.pointLength=g,k.spotLength=_,k.rectAreaLength=p,k.hemiLength=f,k.numDirectionalShadows=b,k.numPointShadows=S,k.numSpotShadows=E,k.numSpotMaps=L,k.numLightProbes=A,i.version=om++)}function l(c,h){let u=0,d=0,m=0,g=0,_=0;const p=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const S=c[f];if(S.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),u++}else if(S.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),s.identity(),a.copy(S.matrixWorld),a.premultiply(p),s.extractRotation(a),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),g++}else if(S.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function $o(n){const e=new cm(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function a(h){t.push(h)}function s(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function hm(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new $o(n),e.set(r,[o])):a>=s.length?(o=new $o(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class um extends tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dm extends tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mm(n,e,t){let i=new Fl;const r=new Ge,a=new Ge,s=new Et,o=new um({depthPacking:Wc}),l=new dm,c={},h=t.maxTextureSize,u={[En]:Nt,[Nt]:En,[Xe]:Xe},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:fm,fragmentShader:pm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new ln;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Be(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fl;let f=this.type;this.render=function(w,A,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const T=n.getRenderTarget(),y=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),G=n.state;G.setBlending(On),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const B=f!==Sn&&this.type===Sn,$=f===Sn&&this.type!==Sn;for(let Y=0,W=w.length;Y<W;Y++){const j=w[Y],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const le=H.getFrameExtents();if(r.multiply(le),a.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/le.x),r.x=a.x*le.x,H.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/le.y),r.y=a.y*le.y,H.mapSize.y=a.y)),H.map===null||B===!0||$===!0){const _e=this.type!==Sn?{minFilter:Xt,magFilter:Xt}:{};H.map!==null&&H.map.dispose(),H.map=new ai(r.x,r.y,_e),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const de=H.getViewportCount();for(let _e=0;_e<de;_e++){const ze=H.getViewport(_e);s.set(a.x*ze.x,a.y*ze.y,a.x*ze.z,a.y*ze.w),G.viewport(s),H.updateMatrices(j,_e),i=H.getFrustum(),E(A,k,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===Sn&&b(H,k),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(T,y,P)};function b(w,A){const k=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ai(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,k,d,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,k,m,_,null)}function S(w,A,k,T){let y=null;const P=k.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)y=P;else if(y=k.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=y.uuid,B=A.uuid;let $=c[G];$===void 0&&($={},c[G]=$);let Y=$[B];Y===void 0&&(Y=y.clone(),$[B]=Y,A.addEventListener("dispose",L)),y=Y}if(y.visible=A.visible,y.wireframe=A.wireframe,T===Sn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,k.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=n.properties.get(y);G.light=k}return y}function E(w,A,k,T,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Sn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld);const B=e.update(w),$=w.material;if(Array.isArray($)){const Y=B.groups;for(let W=0,j=Y.length;W<j;W++){const H=Y[W],le=$[H.materialIndex];if(le&&le.visible){const de=S(w,le,T,y);w.onBeforeShadow(n,w,A,k,B,de,H),n.renderBufferDirect(k,null,B,de,w,H),w.onAfterShadow(n,w,A,k,B,de,H)}}}else if($.visible){const Y=S(w,$,T,y);w.onBeforeShadow(n,w,A,k,B,Y,null),n.renderBufferDirect(k,null,B,Y,w,null),w.onAfterShadow(n,w,A,k,B,Y,null)}}const G=w.children;for(let B=0,$=G.length;B<$;B++)E(G[B],A,k,T,y)}function L(w){w.target.removeEventListener("dispose",L);for(const k in c){const T=c[k],y=w.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}function gm(n){function e(){let R=!1;const ne=new Et;let X=null;const q=new Et(0,0,0,0);return{setMask:function(re){X!==re&&!R&&(n.colorMask(re,re,re,re),X=re)},setLocked:function(re){R=re},setClear:function(re,Ee,Ve,gt,xt){xt===!0&&(re*=gt,Ee*=gt,Ve*=gt),ne.set(re,Ee,Ve,gt),q.equals(ne)===!1&&(n.clearColor(re,Ee,Ve,gt),q.copy(ne))},reset:function(){R=!1,X=null,q.set(-1,0,0,0)}}}function t(){let R=!1,ne=null,X=null,q=null;return{setTest:function(re){re?ge(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(re){ne!==re&&!R&&(n.depthMask(re),ne=re)},setFunc:function(re){if(X!==re){switch(re){case Ac:n.depthFunc(n.NEVER);break;case wc:n.depthFunc(n.ALWAYS);break;case Cc:n.depthFunc(n.LESS);break;case Yr:n.depthFunc(n.LEQUAL);break;case Pc:n.depthFunc(n.EQUAL);break;case Rc:n.depthFunc(n.GEQUAL);break;case Ic:n.depthFunc(n.GREATER);break;case Lc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}X=re}},setLocked:function(re){R=re},setClear:function(re){q!==re&&(n.clearDepth(re),q=re)},reset:function(){R=!1,ne=null,X=null,q=null}}}function i(){let R=!1,ne=null,X=null,q=null,re=null,Ee=null,Ve=null,gt=null,xt=null;return{setTest:function(qe){R||(qe?ge(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(qe){ne!==qe&&!R&&(n.stencilMask(qe),ne=qe)},setFunc:function(qe,mn,en){(X!==qe||q!==mn||re!==en)&&(n.stencilFunc(qe,mn,en),X=qe,q=mn,re=en)},setOp:function(qe,mn,en){(Ee!==qe||Ve!==mn||gt!==en)&&(n.stencilOp(qe,mn,en),Ee=qe,Ve=mn,gt=en)},setLocked:function(qe){R=qe},setClear:function(qe){xt!==qe&&(n.clearStencil(qe),xt=qe)},reset:function(){R=!1,ne=null,X=null,q=null,re=null,Ee=null,Ve=null,gt=null,xt=null}}}const r=new e,a=new t,s=new i,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,p=null,f=null,b=null,S=null,E=null,L=null,w=new Fe(0,0,0),A=0,k=!1,T=null,y=null,P=null,G=null,B=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,W=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=W>=2);let H=null,le={};const de=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),ze=new Et().fromArray(de),Je=new Et().fromArray(_e);function V(R,ne,X,q){const re=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(R,Ee),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<X;Ve++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,q,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(ne+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return Ee}const Q={};Q[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),s.setClear(0),ge(n.DEPTH_TEST),a.setFunc(Yr),Qe(!1),Se(Qs),ge(n.CULL_FACE),pt(On);function ge(R){c[R]!==!0&&(n.enable(R),c[R]=!0)}function he(R){c[R]!==!1&&(n.disable(R),c[R]=!1)}function Ae(R,ne){return h[R]!==ne?(n.bindFramebuffer(R,ne),h[R]=ne,R===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ne),R===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ie(R,ne){let X=d,q=!1;if(R){X=u.get(ne),X===void 0&&(X=[],u.set(ne,X));const re=R.textures;if(X.length!==re.length||X[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,Ve=re.length;Ee<Ve;Ee++)X[Ee]=n.COLOR_ATTACHMENT0+Ee;X.length=re.length,q=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,q=!0);q&&n.drawBuffers(X)}function Oe(R){return m!==R?(n.useProgram(R),m=R,!0):!1}const ot={[Qn]:n.FUNC_ADD,[cc]:n.FUNC_SUBTRACT,[hc]:n.FUNC_REVERSE_SUBTRACT};ot[uc]=n.MIN,ot[dc]=n.MAX;const C={[fc]:n.ZERO,[pc]:n.ONE,[mc]:n.SRC_COLOR,[Ha]:n.SRC_ALPHA,[Sc]:n.SRC_ALPHA_SATURATE,[Mc]:n.DST_COLOR,[_c]:n.DST_ALPHA,[gc]:n.ONE_MINUS_SRC_COLOR,[Ga]:n.ONE_MINUS_SRC_ALPHA,[yc]:n.ONE_MINUS_DST_COLOR,[vc]:n.ONE_MINUS_DST_ALPHA,[bc]:n.CONSTANT_COLOR,[Tc]:n.ONE_MINUS_CONSTANT_COLOR,[Ec]:n.CONSTANT_ALPHA,[xc]:n.ONE_MINUS_CONSTANT_ALPHA};function pt(R,ne,X,q,re,Ee,Ve,gt,xt,qe){if(R===On){g===!0&&(he(n.BLEND),g=!1);return}if(g===!1&&(ge(n.BLEND),g=!0),R!==lc){if(R!==_||qe!==k){if((p!==Qn||S!==Qn)&&(n.blendEquation(n.FUNC_ADD),p=Qn,S=Qn),qe)switch(R){case ii:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case za:n.blendFunc(n.ONE,n.ONE);break;case eo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case to:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ii:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case za:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case eo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case to:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}f=null,b=null,E=null,L=null,w.set(0,0,0),A=0,_=R,k=qe}return}re=re||ne,Ee=Ee||X,Ve=Ve||q,(ne!==p||re!==S)&&(n.blendEquationSeparate(ot[ne],ot[re]),p=ne,S=re),(X!==f||q!==b||Ee!==E||Ve!==L)&&(n.blendFuncSeparate(C[X],C[q],C[Ee],C[Ve]),f=X,b=q,E=Ee,L=Ve),(gt.equals(w)===!1||xt!==A)&&(n.blendColor(gt.r,gt.g,gt.b,xt),w.copy(gt),A=xt),_=R,k=!1}function je(R,ne){R.side===Xe?he(n.CULL_FACE):ge(n.CULL_FACE);let X=R.side===Nt;ne&&(X=!X),Qe(X),R.blending===ii&&R.transparent===!1?pt(On):pt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);const q=R.stencilWrite;s.setTest(q),q&&(s.setMask(R.stencilWriteMask),s.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),s.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Pe(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(R){T!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),T=R)}function Se(R){R!==ac?(ge(n.CULL_FACE),R!==y&&(R===Qs?n.cullFace(n.BACK):R===sc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),y=R}function mt(R){R!==P&&(Y&&n.lineWidth(R),P=R)}function Pe(R,ne,X){R?(ge(n.POLYGON_OFFSET_FILL),(G!==ne||B!==X)&&(n.polygonOffset(ne,X),G=ne,B=X)):he(n.POLYGON_OFFSET_FILL)}function Le(R){R?ge(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function x(R){R===void 0&&(R=n.TEXTURE0+$-1),H!==R&&(n.activeTexture(R),H=R)}function v(R,ne,X){X===void 0&&(H===null?X=n.TEXTURE0+$-1:X=H);let q=le[X];q===void 0&&(q={type:void 0,texture:void 0},le[X]=q),(q.type!==R||q.texture!==ne)&&(H!==X&&(n.activeTexture(X),H=X),n.bindTexture(R,ne||Q[R]),q.type=R,q.texture=ne)}function O(){const R=le[H];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function He(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ce(R){ze.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),ze.copy(R))}function fe(R){Je.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),Je.copy(R))}function Re(R,ne){let X=l.get(ne);X===void 0&&(X=new WeakMap,l.set(ne,X));let q=X.get(R);q===void 0&&(q=n.getUniformBlockIndex(ne,R.name),X.set(R,q))}function ke(R,ne){const q=l.get(ne).get(R);o.get(ne)!==q&&(n.uniformBlockBinding(ne,q,R.__bindingPointIndex),o.set(ne,q))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},H=null,le={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,p=null,f=null,b=null,S=null,E=null,L=null,w=new Fe(0,0,0),A=0,k=!1,T=null,y=null,P=null,G=null,B=null,ze.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),s.reset()}return{buffers:{color:r,depth:a,stencil:s},enable:ge,disable:he,bindFramebuffer:Ae,drawBuffers:Ie,useProgram:Oe,setBlending:pt,setMaterial:je,setFlipSided:Qe,setCullFace:Se,setLineWidth:mt,setPolygonOffset:Pe,setScissorTest:Le,activeTexture:x,bindTexture:v,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:ce,texImage3D:He,updateUBOMapping:Re,uniformBlockBinding:ke,texStorage2D:De,texStorage3D:te,texSubImage2D:Z,texSubImage3D:be,compressedTexSubImage2D:se,compressedTexSubImage3D:ue,scissor:Ce,viewport:fe,reset:at}}function Ko(n,e,t,i){const r=_m(i);switch(t){case Ml:return n*e;case Sl:return n*e;case bl:return n*e*2;case Tl:return n*e/r.components*r.byteLength;case Rs:return n*e/r.components*r.byteLength;case El:return n*e*2/r.components*r.byteLength;case Is:return n*e*2/r.components*r.byteLength;case yl:return n*e*3/r.components*r.byteLength;case jt:return n*e*4/r.components*r.byteLength;case Ls:return n*e*4/r.components*r.byteLength;case Br:case zr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hr:case Gr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ya:case Ka:return Math.max(n,16)*Math.max(e,8)/4;case qa:case $a:return Math.max(n,8)*Math.max(e,8)/2;case Za:case ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case es:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ts:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ns:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case is:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case rs:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case as:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ss:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case os:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ls:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case cs:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hs:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case us:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ds:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Vr:case fs:case ps:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xl:case ms:return Math.ceil(n/4)*Math.ceil(e/4)*8;case gs:case _s:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _m(n){switch(n){case xn:case gl:return{byteLength:1,components:1};case Ji:case _l:case er:return{byteLength:2,components:1};case Cs:case Ps:return{byteLength:2,components:4};case ri:case ws:case bn:return{byteLength:4,components:1};case vl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function vm(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,v){return m?new OffscreenCanvas(x,v):Qr("canvas")}function _(x,v,O){let K=1;const J=Le(x);if((J.width>O||J.height>O)&&(K=O/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const Z=Math.floor(K*J.width),be=Math.floor(K*J.height);u===void 0&&(u=g(Z,be));const se=v?g(Z,be):u;return se.width=Z,se.height=be,se.getContext("2d").drawImage(x,0,0,Z,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+be+")."),se}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),x;return x}function p(x){return x.generateMipmaps&&x.minFilter!==Xt&&x.minFilter!==Zt}function f(x){n.generateMipmap(x)}function b(x,v,O,K,J=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let Z=v;if(v===n.RED&&(O===n.FLOAT&&(Z=n.R32F),O===n.HALF_FLOAT&&(Z=n.R16F),O===n.UNSIGNED_BYTE&&(Z=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.R8UI),O===n.UNSIGNED_SHORT&&(Z=n.R16UI),O===n.UNSIGNED_INT&&(Z=n.R32UI),O===n.BYTE&&(Z=n.R8I),O===n.SHORT&&(Z=n.R16I),O===n.INT&&(Z=n.R32I)),v===n.RG&&(O===n.FLOAT&&(Z=n.RG32F),O===n.HALF_FLOAT&&(Z=n.RG16F),O===n.UNSIGNED_BYTE&&(Z=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RG8UI),O===n.UNSIGNED_SHORT&&(Z=n.RG16UI),O===n.UNSIGNED_INT&&(Z=n.RG32UI),O===n.BYTE&&(Z=n.RG8I),O===n.SHORT&&(Z=n.RG16I),O===n.INT&&(Z=n.RG32I)),v===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),v===n.RGBA){const be=J?Kr:Ze.getTransfer(K);O===n.FLOAT&&(Z=n.RGBA32F),O===n.HALF_FLOAT&&(Z=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Z=be===it?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(x,v){let O;return x?v===null||v===ri||v===Di?O=n.DEPTH24_STENCIL8:v===bn?O=n.DEPTH32F_STENCIL8:v===Ji&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ri||v===Di?O=n.DEPTH_COMPONENT24:v===bn?O=n.DEPTH_COMPONENT32F:v===Ji&&(O=n.DEPTH_COMPONENT16),O}function E(x,v){return p(x)===!0||x.isFramebufferTexture&&x.minFilter!==Xt&&x.minFilter!==Zt?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function L(x){const v=x.target;v.removeEventListener("dispose",L),A(v),v.isVideoTexture&&h.delete(v)}function w(x){const v=x.target;v.removeEventListener("dispose",w),T(v)}function A(x){const v=i.get(x);if(v.__webglInit===void 0)return;const O=x.source,K=d.get(O);if(K){const J=K[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&k(x),Object.keys(K).length===0&&d.delete(O)}i.remove(x)}function k(x){const v=i.get(x);n.deleteTexture(v.__webglTexture);const O=x.source,K=d.get(O);delete K[v.__cacheKey],s.memory.textures--}function T(x){const v=i.get(x);if(x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let J=0;J<v.__webglFramebuffer[K].length;J++)n.deleteFramebuffer(v.__webglFramebuffer[K][J]);else n.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)n.deleteFramebuffer(v.__webglFramebuffer[K]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=x.textures;for(let K=0,J=O.length;K<J;K++){const Z=i.get(O[K]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),s.memory.textures--),i.remove(O[K])}i.remove(x)}let y=0;function P(){y=0}function G(){const x=y;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),y+=1,x}function B(x){const v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.wrapR||0),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.colorSpace),v.join()}function $(x,v){const O=i.get(x);if(x.isVideoTexture&&mt(x),x.isRenderTargetTexture===!1&&x.version>0&&O.__version!==x.version){const K=x.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(O,x,v);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function Y(x,v){const O=i.get(x);if(x.version>0&&O.__version!==x.version){Je(O,x,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function W(x,v){const O=i.get(x);if(x.version>0&&O.__version!==x.version){Je(O,x,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function j(x,v){const O=i.get(x);if(x.version>0&&O.__version!==x.version){V(O,x,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const H={[$r]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[Xa]:n.MIRRORED_REPEAT},le={[Xt]:n.NEAREST,[Gc]:n.NEAREST_MIPMAP_NEAREST,[sr]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[ca]:n.LINEAR_MIPMAP_NEAREST,[ni]:n.LINEAR_MIPMAP_LINEAR},de={[Yc]:n.NEVER,[Qc]:n.ALWAYS,[$c]:n.LESS,[Al]:n.LEQUAL,[Kc]:n.EQUAL,[Jc]:n.GEQUAL,[Zc]:n.GREATER,[jc]:n.NOTEQUAL};function _e(x,v){if(v.type===bn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Zt||v.magFilter===ca||v.magFilter===sr||v.magFilter===ni||v.minFilter===Zt||v.minFilter===ca||v.minFilter===sr||v.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,H[v.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,H[v.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,H[v.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,le[v.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,le[v.minFilter]),v.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,de[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Xt||v.minFilter!==sr&&v.minFilter!==ni||v.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ze(x,v){let O=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",L));const K=v.source;let J=d.get(K);J===void 0&&(J={},d.set(K,J));const Z=B(v);if(Z!==x.__cacheKey){J[Z]===void 0&&(J[Z]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,O=!0),J[Z].usedTimes++;const be=J[x.__cacheKey];be!==void 0&&(J[x.__cacheKey].usedTimes--,be.usedTimes===0&&k(v)),x.__cacheKey=Z,x.__webglTexture=J[Z].texture}return O}function Je(x,v,O){let K=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=n.TEXTURE_3D);const J=ze(x,v),Z=v.source;t.bindTexture(K,x.__webglTexture,n.TEXTURE0+O);const be=i.get(Z);if(Z.version!==be.__version||J===!0){t.activeTexture(n.TEXTURE0+O);const se=Ze.getPrimaries(Ze.workingColorSpace),ue=v.colorSpace===Fn?null:Ze.getPrimaries(v.colorSpace),De=v.colorSpace===Fn||se===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let te=_(v.image,!1,r.maxTextureSize);te=Pe(v,te);const ce=a.convert(v.format,v.colorSpace),He=a.convert(v.type);let Ce=b(v.internalFormat,ce,He,v.colorSpace,v.isVideoTexture);_e(K,v);let fe;const Re=v.mipmaps,ke=v.isVideoTexture!==!0,at=be.__version===void 0||J===!0,R=Z.dataReady,ne=E(v,te);if(v.isDepthTexture)Ce=S(v.format===Ui,v.type),at&&(ke?t.texStorage2D(n.TEXTURE_2D,1,Ce,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Ce,te.width,te.height,0,ce,He,null));else if(v.isDataTexture)if(Re.length>0){ke&&at&&t.texStorage2D(n.TEXTURE_2D,ne,Ce,Re[0].width,Re[0].height);for(let X=0,q=Re.length;X<q;X++)fe=Re[X],ke?R&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,fe.width,fe.height,ce,He,fe.data):t.texImage2D(n.TEXTURE_2D,X,Ce,fe.width,fe.height,0,ce,He,fe.data);v.generateMipmaps=!1}else ke?(at&&t.texStorage2D(n.TEXTURE_2D,ne,Ce,te.width,te.height),R&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,ce,He,te.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,te.width,te.height,0,ce,He,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ke&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,Ce,Re[0].width,Re[0].height,te.depth);for(let X=0,q=Re.length;X<q;X++)if(fe=Re[X],v.format!==jt)if(ce!==null)if(ke){if(R)if(v.layerUpdates.size>0){const re=Ko(fe.width,fe.height,v.format,v.type);for(const Ee of v.layerUpdates){const Ve=fe.data.subarray(Ee*re/fe.data.BYTES_PER_ELEMENT,(Ee+1)*re/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,Ee,fe.width,fe.height,1,ce,Ve,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,fe.width,fe.height,te.depth,ce,fe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Ce,fe.width,fe.height,te.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?R&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,fe.width,fe.height,te.depth,ce,He,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Ce,fe.width,fe.height,te.depth,0,ce,He,fe.data)}else{ke&&at&&t.texStorage2D(n.TEXTURE_2D,ne,Ce,Re[0].width,Re[0].height);for(let X=0,q=Re.length;X<q;X++)fe=Re[X],v.format!==jt?ce!==null?ke?R&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,fe.width,fe.height,ce,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Ce,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?R&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,fe.width,fe.height,ce,He,fe.data):t.texImage2D(n.TEXTURE_2D,X,Ce,fe.width,fe.height,0,ce,He,fe.data)}else if(v.isDataArrayTexture)if(ke){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,Ce,te.width,te.height,te.depth),R)if(v.layerUpdates.size>0){const X=Ko(te.width,te.height,v.format,v.type);for(const q of v.layerUpdates){const re=te.data.subarray(q*X/te.data.BYTES_PER_ELEMENT,(q+1)*X/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,te.width,te.height,1,ce,He,re)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ce,He,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,te.width,te.height,te.depth,0,ce,He,te.data);else if(v.isData3DTexture)ke?(at&&t.texStorage3D(n.TEXTURE_3D,ne,Ce,te.width,te.height,te.depth),R&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ce,He,te.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,te.width,te.height,te.depth,0,ce,He,te.data);else if(v.isFramebufferTexture){if(at)if(ke)t.texStorage2D(n.TEXTURE_2D,ne,Ce,te.width,te.height);else{let X=te.width,q=te.height;for(let re=0;re<ne;re++)t.texImage2D(n.TEXTURE_2D,re,Ce,X,q,0,ce,He,null),X>>=1,q>>=1}}else if(Re.length>0){if(ke&&at){const X=Le(Re[0]);t.texStorage2D(n.TEXTURE_2D,ne,Ce,X.width,X.height)}for(let X=0,q=Re.length;X<q;X++)fe=Re[X],ke?R&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ce,He,fe):t.texImage2D(n.TEXTURE_2D,X,Ce,ce,He,fe);v.generateMipmaps=!1}else if(ke){if(at){const X=Le(te);t.texStorage2D(n.TEXTURE_2D,ne,Ce,X.width,X.height)}R&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,He,te)}else t.texImage2D(n.TEXTURE_2D,0,Ce,ce,He,te);p(v)&&f(K),be.__version=Z.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function V(x,v,O){if(v.image.length!==6)return;const K=ze(x,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+O);const Z=i.get(J);if(J.version!==Z.__version||K===!0){t.activeTexture(n.TEXTURE0+O);const be=Ze.getPrimaries(Ze.workingColorSpace),se=v.colorSpace===Fn?null:Ze.getPrimaries(v.colorSpace),ue=v.colorSpace===Fn||be===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const De=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,ce=[];for(let q=0;q<6;q++)!De&&!te?ce[q]=_(v.image[q],!0,r.maxCubemapSize):ce[q]=te?v.image[q].image:v.image[q],ce[q]=Pe(v,ce[q]);const He=ce[0],Ce=a.convert(v.format,v.colorSpace),fe=a.convert(v.type),Re=b(v.internalFormat,Ce,fe,v.colorSpace),ke=v.isVideoTexture!==!0,at=Z.__version===void 0||K===!0,R=J.dataReady;let ne=E(v,He);_e(n.TEXTURE_CUBE_MAP,v);let X;if(De){ke&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,Re,He.width,He.height);for(let q=0;q<6;q++){X=ce[q].mipmaps;for(let re=0;re<X.length;re++){const Ee=X[re];v.format!==jt?Ce!==null?ke?R&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,0,0,Ee.width,Ee.height,Ce,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,Re,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,0,0,Ee.width,Ee.height,Ce,fe,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,Re,Ee.width,Ee.height,0,Ce,fe,Ee.data)}}}else{if(X=v.mipmaps,ke&&at){X.length>0&&ne++;const q=Le(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,Re,q.width,q.height)}for(let q=0;q<6;q++)if(te){ke?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ce[q].width,ce[q].height,Ce,fe,ce[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Re,ce[q].width,ce[q].height,0,Ce,fe,ce[q].data);for(let re=0;re<X.length;re++){const Ve=X[re].image[q].image;ke?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,0,0,Ve.width,Ve.height,Ce,fe,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,Re,Ve.width,Ve.height,0,Ce,fe,Ve.data)}}else{ke?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ce,fe,ce[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Re,Ce,fe,ce[q]);for(let re=0;re<X.length;re++){const Ee=X[re];ke?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,0,0,Ce,fe,Ee.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,Re,Ce,fe,Ee.image[q])}}}p(v)&&f(n.TEXTURE_CUBE_MAP),Z.__version=J.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function Q(x,v,O,K,J,Z){const be=a.convert(O.format,O.colorSpace),se=a.convert(O.type),ue=b(O.internalFormat,be,se,O.colorSpace);if(!i.get(v).__hasExternalTextures){const te=Math.max(1,v.width>>Z),ce=Math.max(1,v.height>>Z);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,Z,ue,te,ce,v.depth,0,be,se,null):t.texImage2D(J,Z,ue,te,ce,0,be,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),Se(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,J,i.get(O).__webglTexture,0,Qe(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,J,i.get(O).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(x,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,x),v.depthBuffer){const K=v.depthTexture,J=K&&K.isDepthTexture?K.type:null,Z=S(v.stencilBuffer,J),be=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=Qe(v);Se(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,Z,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,Z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,x)}else{const K=v.textures;for(let J=0;J<K.length;J++){const Z=K[J],be=a.convert(Z.format,Z.colorSpace),se=a.convert(Z.type),ue=b(Z.internalFormat,be,se,Z.colorSpace),De=Qe(v);O&&Se(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ue,v.width,v.height):Se(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,ue,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ue,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(x,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const K=i.get(v.depthTexture).__webglTexture,J=Qe(v);if(v.depthTexture.format===Pi)Se(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(v.depthTexture.format===Ui)Se(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ae(x){const v=i.get(x),O=x.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==x.depthTexture){const K=x.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=K}if(x.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");he(v.__webglFramebuffer,x)}else if(O){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=n.createRenderbuffer(),ge(v.__webglDepthbuffer[K],x,!1);else{const J=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ge(v.__webglDepthbuffer,x,!1);else{const K=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(x,v,O){const K=i.get(x);v!==void 0&&Q(K.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ae(x)}function Oe(x){const v=x.texture,O=i.get(x),K=i.get(v);x.addEventListener("dispose",w);const J=x.textures,Z=x.isWebGLCubeRenderTarget===!0,be=J.length>1;if(be||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=v.version,s.memory.textures++),Z){O.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[se]=[];for(let ue=0;ue<v.mipmaps.length;ue++)O.__webglFramebuffer[se][ue]=n.createFramebuffer()}else O.__webglFramebuffer[se]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)O.__webglFramebuffer[se]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(be)for(let se=0,ue=J.length;se<ue;se++){const De=i.get(J[se]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),s.memory.textures++)}if(x.samples>0&&Se(x)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){const ue=J[se];O.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[se]);const De=a.convert(ue.format,ue.colorSpace),te=a.convert(ue.type),ce=b(ue.internalFormat,De,te,ue.colorSpace,x.isXRRenderTarget===!0),He=Qe(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,ce,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,O.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(O.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),_e(n.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)Q(O.__webglFramebuffer[se][ue],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue);else Q(O.__webglFramebuffer[se],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(v)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let se=0,ue=J.length;se<ue;se++){const De=J[se],te=i.get(De);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),_e(n.TEXTURE_2D,De),Q(O.__webglFramebuffer,x,De,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,0),p(De)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(se=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,K.__webglTexture),_e(se,v),v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)Q(O.__webglFramebuffer[ue],x,v,n.COLOR_ATTACHMENT0,se,ue);else Q(O.__webglFramebuffer,x,v,n.COLOR_ATTACHMENT0,se,0);p(v)&&f(se),t.unbindTexture()}x.depthBuffer&&Ae(x)}function ot(x){const v=x.textures;for(let O=0,K=v.length;O<K;O++){const J=v[O];if(p(J)){const Z=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,be=i.get(J).__webglTexture;t.bindTexture(Z,be),f(Z),t.unbindTexture()}}}const C=[],pt=[];function je(x){if(x.samples>0){if(Se(x)===!1){const v=x.textures,O=x.width,K=x.height;let J=n.COLOR_BUFFER_BIT;const Z=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(x),se=v.length>1;if(se)for(let ue=0;ue<v.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ue=0;ue<v.length;ue++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[ue]);const De=i.get(v[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,De,0)}n.blitFramebuffer(0,0,O,K,0,0,O,K,J,n.NEAREST),l===!0&&(C.length=0,pt.length=0,C.push(n.COLOR_ATTACHMENT0+ue),x.depthBuffer&&x.resolveDepthBuffer===!1&&(C.push(Z),pt.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,pt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let ue=0;ue<v.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,be.__webglColorRenderbuffer[ue]);const De=i.get(v[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const v=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Qe(x){return Math.min(r.maxSamples,x.samples)}function Se(x){const v=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function mt(x){const v=s.render.frame;h.get(x)!==v&&(h.set(x,v),x.update())}function Pe(x,v){const O=x.colorSpace,K=x.format,J=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||O!==Vn&&O!==Fn&&(Ze.getTransfer(O)===it?(K!==jt||J!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Le(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=P,this.setTexture2D=$,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=Ie,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Se}function Mm(n,e){function t(i,r=Fn){let a;const s=Ze.getTransfer(r);if(i===xn)return n.UNSIGNED_BYTE;if(i===Cs)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ps)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gl)return n.BYTE;if(i===_l)return n.SHORT;if(i===Ji)return n.UNSIGNED_SHORT;if(i===ws)return n.INT;if(i===ri)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===er)return n.HALF_FLOAT;if(i===Ml)return n.ALPHA;if(i===yl)return n.RGB;if(i===jt)return n.RGBA;if(i===Sl)return n.LUMINANCE;if(i===bl)return n.LUMINANCE_ALPHA;if(i===Pi)return n.DEPTH_COMPONENT;if(i===Ui)return n.DEPTH_STENCIL;if(i===Tl)return n.RED;if(i===Rs)return n.RED_INTEGER;if(i===El)return n.RG;if(i===Is)return n.RG_INTEGER;if(i===Ls)return n.RGBA_INTEGER;if(i===Br||i===zr||i===Hr||i===Gr)if(s===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Br)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Br)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qa||i===Ya||i===$a||i===Ka)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===qa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ya)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$a)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ka)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Za||i===ja||i===Ja)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Za||i===ja)return s===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ja)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qa||i===es||i===ts||i===ns||i===is||i===rs||i===as||i===ss||i===os||i===ls||i===cs||i===hs||i===us||i===ds)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Qa)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===es)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ts)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ns)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===is)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rs)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===as)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ss)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===os)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ls)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cs)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hs)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===us)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ds)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vr||i===fs||i===ps)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Vr)return s===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fs)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ps)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xl||i===ms||i===gs||i===_s)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Vr)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ms)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_s)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Di?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class ym extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jt extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sm={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const bm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Em{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ut,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Hn({vertexShader:bm,fragmentShader:Tm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new tt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xm extends Fi{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const _=new Em,p=t.getContextAttributes();let f=null,b=null;const S=[],E=[],L=new Ge;let w=null;const A=new Wt;A.layers.enable(1),A.viewport=new Et;const k=new Wt;k.layers.enable(2),k.viewport=new Et;const T=[A,k],y=new ym;y.layers.enable(1),y.layers.enable(2);let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=S[V];return Q===void 0&&(Q=new Ua,S[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=S[V];return Q===void 0&&(Q=new Ua,S[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=S[V];return Q===void 0&&(Q=new Ua,S[V]=Q),Q.getHandSpace()};function B(V){const Q=E.indexOf(V.inputSource);if(Q===-1)return;const ge=S[Q];ge!==void 0&&(ge.update(V.inputSource,V.frame,c||s),ge.dispatchEvent({type:V.type,data:V.inputSource}))}function $(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Y);for(let V=0;V<S.length;V++){const Q=E[V];Q!==null&&(E[V]=null,S[V].disconnect(Q))}P=null,G=null,_.reset(),e.setRenderTarget(f),m=null,d=null,u=null,r=null,b=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new ai(m.framebufferWidth,m.framebufferHeight,{format:jt,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ge=null,he=null;p.depth&&(he=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?Ui:Pi,ge=p.stencil?Di:ri);const Ae={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:a};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new ai(d.textureWidth,d.textureHeight,{format:jt,type:xn,depthTexture:new Ol(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(V){for(let Q=0;Q<V.removed.length;Q++){const ge=V.removed[Q],he=E.indexOf(ge);he>=0&&(E[he]=null,S[he].disconnect(ge))}for(let Q=0;Q<V.added.length;Q++){const ge=V.added[Q];let he=E.indexOf(ge);if(he===-1){for(let Ie=0;Ie<S.length;Ie++)if(Ie>=E.length){E.push(ge),he=Ie;break}else if(E[Ie]===null){E[Ie]=ge,he=Ie;break}if(he===-1)break}const Ae=S[he];Ae&&Ae.connect(ge)}}const W=new U,j=new U;function H(V,Q,ge){W.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(ge.matrixWorld);const he=W.distanceTo(j),Ae=Q.projectionMatrix.elements,Ie=ge.projectionMatrix.elements,Oe=Ae[14]/(Ae[10]-1),ot=Ae[14]/(Ae[10]+1),C=(Ae[9]+1)/Ae[5],pt=(Ae[9]-1)/Ae[5],je=(Ae[8]-1)/Ae[0],Qe=(Ie[8]+1)/Ie[0],Se=Oe*je,mt=Oe*Qe,Pe=he/(-je+Qe),Le=Pe*-je;if(Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Le),V.translateZ(Pe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ae[10]===-1)V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const x=Oe+Pe,v=ot+Pe,O=Se-Le,K=mt+(he-Le),J=C*ot/v*x,Z=pt*ot/v*x;V.projectionMatrix.makePerspective(O,K,J,Z,x,v),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function le(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let Q=V.near,ge=V.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),y.near=k.near=A.near=Q,y.far=k.far=A.far=ge,(P!==y.near||G!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,G=y.far);const he=V.parent,Ae=y.cameras;le(y,he);for(let Ie=0;Ie<Ae.length;Ie++)le(Ae[Ie],he);Ae.length===2?H(y,A,k):y.projectionMatrix.copy(A.projectionMatrix),de(V,y,he)};function de(V,Q,ge){ge===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(ge.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Qi*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let _e=null;function ze(V,Q){if(h=Q.getViewerPose(c||s),g=Q,h!==null){const ge=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let he=!1;ge.length!==y.cameras.length&&(y.cameras.length=0,he=!0);for(let Ie=0;Ie<ge.length;Ie++){const Oe=ge[Ie];let ot=null;if(m!==null)ot=m.getViewport(Oe);else{const pt=u.getViewSubImage(d,Oe);ot=pt.viewport,Ie===0&&(e.setRenderTargetTextures(b,pt.colorTexture,d.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(b))}let C=T[Ie];C===void 0&&(C=new Wt,C.layers.enable(Ie),C.viewport=new Et,T[Ie]=C),C.matrix.fromArray(Oe.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Oe.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(ot.x,ot.y,ot.width,ot.height),Ie===0&&(y.matrix.copy(C.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),he===!0&&y.cameras.push(C)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ie=u.getDepthInformation(ge[0]);Ie&&Ie.isValid&&Ie.texture&&_.init(e,Ie,r.renderState)}}for(let ge=0;ge<S.length;ge++){const he=E[ge],Ae=S[ge];he!==null&&Ae!==void 0&&Ae.update(he,Q,c||s)}_e&&_e(V,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Je=new kl;Je.setAnimationLoop(ze),this.setAnimationLoop=function(V){_e=V},this.dispose=function(){}}}const Zn=new an,Am=new ft;function wm(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Dl(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,b,S,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(p,f):f.isMeshToonMaterial?(a(p,f),u(p,f)):f.isMeshPhongMaterial?(a(p,f),h(p,f)):f.isMeshStandardMaterial?(a(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(a(p,f),g(p,f)):f.isMeshDepthMaterial?a(p,f):f.isMeshDistanceMaterial?(a(p,f),_(p,f)):f.isMeshNormalMaterial?a(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,b,S):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Nt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Nt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const b=e.get(f),S=b.envMap,E=b.envMapRotation;S&&(p.envMap.value=S,Zn.copy(E),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),p.envMapRotation.value.setFromMatrix4(Am.makeRotationFromEuler(Zn)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,b,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=S*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,b){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Nt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const b=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Cm(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const E=S.program;i.uniformBlockBinding(b,E)}function c(b,S){let E=r[b.id];E===void 0&&(g(b),E=h(b),r[b.id]=E,b.addEventListener("dispose",p));const L=S.program;i.updateUBOMapping(b,L);const w=e.render.frame;a[b.id]!==w&&(d(b),a[b.id]=w)}function h(b){const S=u();b.__bindingPointIndex=S;const E=n.createBuffer(),L=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,L,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function u(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=r[b.id],E=b.uniforms,L=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,A=E.length;w<A;w++){const k=Array.isArray(E[w])?E[w]:[E[w]];for(let T=0,y=k.length;T<y;T++){const P=k[T];if(m(P,w,T,L)===!0){const G=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let Y=0;Y<B.length;Y++){const W=B[Y],j=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,G+$,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,$),$+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,S,E,L){const w=b.value,A=S+"_"+E;if(L[A]===void 0)return typeof w=="number"||typeof w=="boolean"?L[A]=w:L[A]=w.clone(),!0;{const k=L[A];if(typeof w=="number"||typeof w=="boolean"){if(k!==w)return L[A]=w,!0}else if(k.equals(w)===!1)return k.copy(w),!0}return!1}function g(b){const S=b.uniforms;let E=0;const L=16;for(let A=0,k=S.length;A<k;A++){const T=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,P=T.length;y<P;y++){const G=T[y],B=Array.isArray(G.value)?G.value:[G.value];for(let $=0,Y=B.length;$<Y;$++){const W=B[$],j=_(W),H=E%L,le=H%j.boundary,de=H+le;E+=le,de!==0&&L-de<j.storage&&(E+=L-de),G.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=j.storage}}}const w=E%L;return w>0&&(E+=L-w),b.__size=E,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function p(b){const S=b.target;S.removeEventListener("dispose",p);const E=s.indexOf(S.__bindingPointIndex);s.splice(E,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete a[S.id]}function f(){for(const b in r)n.deleteBuffer(r[b]);s=[],r={},a={}}return{bind:l,update:c,dispose:f}}class Pm{constructor(e={}){const{canvas:t=_h(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this.toneMapping=Bn,this.toneMappingExposure=1;const S=this;let E=!1,L=0,w=0,A=null,k=-1,T=null;const y=new Et,P=new Et;let G=null;const B=new Fe(0);let $=0,Y=t.width,W=t.height,j=1,H=null,le=null;const de=new Et(0,0,Y,W),_e=new Et(0,0,Y,W);let ze=!1;const Je=new Fl;let V=!1,Q=!1;const ge=new ft,he=new U,Ae=new Et,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function ot(){return A===null?j:1}let C=i;function pt(M,I){return t.getContext(M,I)}try{const M={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${As}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",re,!1),C===null){const I="webgl2";if(C=pt(I,M),C===null)throw pt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let je,Qe,Se,mt,Pe,Le,x,v,O,K,J,Z,be,se,ue,De,te,ce,He,Ce,fe,Re,ke,at;function R(){je=new Nf(C),je.init(),Re=new Mm(C,je),Qe=new Cf(C,je,e,Re),Se=new gm(C),mt=new Of(C),Pe=new nm,Le=new vm(C,je,Se,Pe,Qe,Re,mt),x=new Rf(S),v=new Uf(S),O=new Vh(C),ke=new Af(C,O),K=new Ff(C,O,mt,ke),J=new zf(C,K,O,mt),He=new Bf(C,Qe,Le),De=new Pf(Pe),Z=new tm(S,x,v,je,Qe,ke,De),be=new wm(S,Pe),se=new rm,ue=new hm(je),ce=new xf(S,x,v,Se,J,d,l),te=new mm(S,J,Qe),at=new Cm(C,mt,Qe,Se),Ce=new wf(C,je,mt),fe=new kf(C,je,mt),mt.programs=Z.programs,S.capabilities=Qe,S.extensions=je,S.properties=Pe,S.renderLists=se,S.shadowMap=te,S.state=Se,S.info=mt}R();const ne=new xm(S,C);this.xr=ne,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(M){M!==void 0&&(j=M,this.setSize(Y,W,!1))},this.getSize=function(M){return M.set(Y,W)},this.setSize=function(M,I,N=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,W=I,t.width=Math.floor(M*j),t.height=Math.floor(I*j),N===!0&&(t.style.width=M+"px",t.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(Y*j,W*j).floor()},this.setDrawingBufferSize=function(M,I,N){Y=M,W=I,j=N,t.width=Math.floor(M*N),t.height=Math.floor(I*N),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(de)},this.setViewport=function(M,I,N,F){M.isVector4?de.set(M.x,M.y,M.z,M.w):de.set(M,I,N,F),Se.viewport(y.copy(de).multiplyScalar(j).round())},this.getScissor=function(M){return M.copy(_e)},this.setScissor=function(M,I,N,F){M.isVector4?_e.set(M.x,M.y,M.z,M.w):_e.set(M,I,N,F),Se.scissor(P.copy(_e).multiplyScalar(j).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(M){Se.setScissorTest(ze=M)},this.setOpaqueSort=function(M){H=M},this.setTransparentSort=function(M){le=M},this.getClearColor=function(M){return M.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(M=!0,I=!0,N=!0){let F=0;if(M){let D=!1;if(A!==null){const ie=A.texture.format;D=ie===Ls||ie===Is||ie===Rs}if(D){const ie=A.texture.type,oe=ie===xn||ie===ri||ie===Ji||ie===Di||ie===Cs||ie===Ps,pe=ce.getClearColor(),me=ce.getClearAlpha(),xe=pe.r,we=pe.g,Me=pe.b;oe?(m[0]=xe,m[1]=we,m[2]=Me,m[3]=me,C.clearBufferuiv(C.COLOR,0,m)):(g[0]=xe,g[1]=we,g[2]=Me,g[3]=me,C.clearBufferiv(C.COLOR,0,g))}else F|=C.COLOR_BUFFER_BIT}I&&(F|=C.DEPTH_BUFFER_BIT),N&&(F|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",re,!1),se.dispose(),ue.dispose(),Pe.dispose(),x.dispose(),v.dispose(),J.dispose(),ke.dispose(),at.dispose(),Z.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",en),ne.removeEventListener("sessionend",qs),Wn.stop()};function X(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=mt.autoReset,I=te.enabled,N=te.autoUpdate,F=te.needsUpdate,D=te.type;R(),mt.autoReset=M,te.enabled=I,te.autoUpdate=N,te.needsUpdate=F,te.type=D}function re(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ee(M){const I=M.target;I.removeEventListener("dispose",Ee),Ve(I)}function Ve(M){gt(M),Pe.remove(M)}function gt(M){const I=Pe.get(M).programs;I!==void 0&&(I.forEach(function(N){Z.releaseProgram(N)}),M.isShaderMaterial&&Z.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,N,F,D,ie){I===null&&(I=Ie);const oe=D.isMesh&&D.matrixWorld.determinant()<0,pe=tc(M,I,N,F,D);Se.setMaterial(F,oe);let me=N.index,xe=1;if(F.wireframe===!0){if(me=K.getWireframeAttribute(N),me===void 0)return;xe=2}const we=N.drawRange,Me=N.attributes.position;let Ye=we.start*xe,lt=(we.start+we.count)*xe;ie!==null&&(Ye=Math.max(Ye,ie.start*xe),lt=Math.min(lt,(ie.start+ie.count)*xe)),me!==null?(Ye=Math.max(Ye,0),lt=Math.min(lt,me.count)):Me!=null&&(Ye=Math.max(Ye,0),lt=Math.min(lt,Me.count));const ct=lt-Ye;if(ct<0||ct===1/0)return;ke.setup(D,F,pe,N,me);let kt,$e=Ce;if(me!==null&&(kt=O.get(me),$e=fe,$e.setIndex(kt)),D.isMesh)F.wireframe===!0?(Se.setLineWidth(F.wireframeLinewidth*ot()),$e.setMode(C.LINES)):$e.setMode(C.TRIANGLES);else if(D.isLine){let ye=F.linewidth;ye===void 0&&(ye=1),Se.setLineWidth(ye*ot()),D.isLineSegments?$e.setMode(C.LINES):D.isLineLoop?$e.setMode(C.LINE_LOOP):$e.setMode(C.LINE_STRIP)}else D.isPoints?$e.setMode(C.POINTS):D.isSprite&&$e.setMode(C.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)$e.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))$e.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const ye=D._multiDrawStarts,At=D._multiDrawCounts,Ke=D._multiDrawCount,qt=me?O.get(me).bytesPerElement:1,li=Pe.get(F).currentProgram.getUniforms();for(let Ot=0;Ot<Ke;Ot++)li.setValue(C,"_gl_DrawID",Ot),$e.render(ye[Ot]/qt,At[Ot])}else if(D.isInstancedMesh)$e.renderInstances(Ye,ct,D.count);else if(N.isInstancedBufferGeometry){const ye=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,At=Math.min(N.instanceCount,ye);$e.renderInstances(Ye,ct,At)}else $e.render(Ye,ct)};function xt(M,I,N){M.transparent===!0&&M.side===Xe&&M.forceSinglePass===!1?(M.side=Nt,M.needsUpdate=!0,ar(M,I,N),M.side=En,M.needsUpdate=!0,ar(M,I,N),M.side=Xe):ar(M,I,N)}this.compile=function(M,I,N=null){N===null&&(N=M),p=ue.get(N),p.init(I),b.push(p),N.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),M!==N&&M.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const F=new Set;return M.traverse(function(D){const ie=D.material;if(ie)if(Array.isArray(ie))for(let oe=0;oe<ie.length;oe++){const pe=ie[oe];xt(pe,N,D),F.add(pe)}else xt(ie,N,D),F.add(ie)}),b.pop(),p=null,F},this.compileAsync=function(M,I,N=null){const F=this.compile(M,I,N);return new Promise(D=>{function ie(){if(F.forEach(function(oe){Pe.get(oe).currentProgram.isReady()&&F.delete(oe)}),F.size===0){D(M);return}setTimeout(ie,10)}je.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let qe=null;function mn(M){qe&&qe(M)}function en(){Wn.stop()}function qs(){Wn.start()}const Wn=new kl;Wn.setAnimationLoop(mn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(M){qe=M,ne.setAnimationLoop(M),M===null?Wn.stop():Wn.start()},ne.addEventListener("sessionstart",en),ne.addEventListener("sessionend",qs),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(I),I=ne.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,I,A),p=ue.get(M,b.length),p.init(I),b.push(p),ge.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Je.setFromProjectionMatrix(ge),Q=this.localClippingEnabled,V=De.init(this.clippingPlanes,Q),_=se.get(M,f.length),_.init(),f.push(_),ne.enabled===!0&&ne.isPresenting===!0){const ie=S.xr.getDepthSensingMesh();ie!==null&&aa(ie,I,-1/0,S.sortObjects)}aa(M,I,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(H,le),Oe=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Oe&&ce.addToRenderList(_,M),this.info.render.frame++,V===!0&&De.beginShadows();const N=p.state.shadowsArray;te.render(N,M,I),V===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=_.opaque,D=_.transmissive;if(p.setupLights(),I.isArrayCamera){const ie=I.cameras;if(D.length>0)for(let oe=0,pe=ie.length;oe<pe;oe++){const me=ie[oe];$s(F,D,M,me)}Oe&&ce.render(M);for(let oe=0,pe=ie.length;oe<pe;oe++){const me=ie[oe];Ys(_,M,me,me.viewport)}}else D.length>0&&$s(F,D,M,I),Oe&&ce.render(M),Ys(_,M,I);A!==null&&(Le.updateMultisampleRenderTarget(A),Le.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(S,M,I),ke.resetDefaultState(),k=-1,T=null,b.pop(),b.length>0?(p=b[b.length-1],V===!0&&De.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function aa(M,I,N,F){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)N=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Je.intersectsSprite(M)){F&&Ae.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ge);const oe=J.update(M),pe=M.material;pe.visible&&_.push(M,oe,pe,N,Ae.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Je.intersectsObject(M))){const oe=J.update(M),pe=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ae.copy(M.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ae.copy(oe.boundingSphere.center)),Ae.applyMatrix4(M.matrixWorld).applyMatrix4(ge)),Array.isArray(pe)){const me=oe.groups;for(let xe=0,we=me.length;xe<we;xe++){const Me=me[xe],Ye=pe[Me.materialIndex];Ye&&Ye.visible&&_.push(M,oe,Ye,N,Ae.z,Me)}}else pe.visible&&_.push(M,oe,pe,N,Ae.z,null)}}const ie=M.children;for(let oe=0,pe=ie.length;oe<pe;oe++)aa(ie[oe],I,N,F)}function Ys(M,I,N,F){const D=M.opaque,ie=M.transmissive,oe=M.transparent;p.setupLightsView(N),V===!0&&De.setGlobalState(S.clippingPlanes,N),F&&Se.viewport(y.copy(F)),D.length>0&&rr(D,I,N),ie.length>0&&rr(ie,I,N),oe.length>0&&rr(oe,I,N),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function $s(M,I,N,F){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[F.id]===void 0&&(p.state.transmissionRenderTarget[F.id]=new ai(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?er:xn,minFilter:ni,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ie=p.state.transmissionRenderTarget[F.id],oe=F.viewport||y;ie.setSize(oe.z,oe.w);const pe=S.getRenderTarget();S.setRenderTarget(ie),S.getClearColor(B),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),Oe&&ce.render(N);const me=S.toneMapping;S.toneMapping=Bn;const xe=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),p.setupLightsView(F),V===!0&&De.setGlobalState(S.clippingPlanes,F),rr(M,N,F),Le.updateMultisampleRenderTarget(ie),Le.updateRenderTargetMipmap(ie),je.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Me=0,Ye=I.length;Me<Ye;Me++){const lt=I[Me],ct=lt.object,kt=lt.geometry,$e=lt.material,ye=lt.group;if($e.side===Xe&&ct.layers.test(F.layers)){const At=$e.side;$e.side=Nt,$e.needsUpdate=!0,Ks(ct,N,F,kt,$e,ye),$e.side=At,$e.needsUpdate=!0,we=!0}}we===!0&&(Le.updateMultisampleRenderTarget(ie),Le.updateRenderTargetMipmap(ie))}S.setRenderTarget(pe),S.setClearColor(B,$),xe!==void 0&&(F.viewport=xe),S.toneMapping=me}function rr(M,I,N){const F=I.isScene===!0?I.overrideMaterial:null;for(let D=0,ie=M.length;D<ie;D++){const oe=M[D],pe=oe.object,me=oe.geometry,xe=F===null?oe.material:F,we=oe.group;pe.layers.test(N.layers)&&Ks(pe,I,N,me,xe,we)}}function Ks(M,I,N,F,D,ie){M.onBeforeRender(S,I,N,F,D,ie),M.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),D.onBeforeRender(S,I,N,F,M,ie),D.transparent===!0&&D.side===Xe&&D.forceSinglePass===!1?(D.side=Nt,D.needsUpdate=!0,S.renderBufferDirect(N,I,F,D,M,ie),D.side=En,D.needsUpdate=!0,S.renderBufferDirect(N,I,F,D,M,ie),D.side=Xe):S.renderBufferDirect(N,I,F,D,M,ie),M.onAfterRender(S,I,N,F,D,ie)}function ar(M,I,N){I.isScene!==!0&&(I=Ie);const F=Pe.get(M),D=p.state.lights,ie=p.state.shadowsArray,oe=D.state.version,pe=Z.getParameters(M,D.state,ie,I,N),me=Z.getProgramCacheKey(pe);let xe=F.programs;F.environment=M.isMeshStandardMaterial?I.environment:null,F.fog=I.fog,F.envMap=(M.isMeshStandardMaterial?v:x).get(M.envMap||F.environment),F.envMapRotation=F.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,xe===void 0&&(M.addEventListener("dispose",Ee),xe=new Map,F.programs=xe);let we=xe.get(me);if(we!==void 0){if(F.currentProgram===we&&F.lightsStateVersion===oe)return js(M,pe),we}else pe.uniforms=Z.getUniforms(M),M.onBeforeCompile(pe,S),we=Z.acquireProgram(pe,me),xe.set(me,we),F.uniforms=pe.uniforms;const Me=F.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Me.clippingPlanes=De.uniform),js(M,pe),F.needsLights=ic(M),F.lightsStateVersion=oe,F.needsLights&&(Me.ambientLightColor.value=D.state.ambient,Me.lightProbe.value=D.state.probe,Me.directionalLights.value=D.state.directional,Me.directionalLightShadows.value=D.state.directionalShadow,Me.spotLights.value=D.state.spot,Me.spotLightShadows.value=D.state.spotShadow,Me.rectAreaLights.value=D.state.rectArea,Me.ltc_1.value=D.state.rectAreaLTC1,Me.ltc_2.value=D.state.rectAreaLTC2,Me.pointLights.value=D.state.point,Me.pointLightShadows.value=D.state.pointShadow,Me.hemisphereLights.value=D.state.hemi,Me.directionalShadowMap.value=D.state.directionalShadowMap,Me.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Me.spotShadowMap.value=D.state.spotShadowMap,Me.spotLightMatrix.value=D.state.spotLightMatrix,Me.spotLightMap.value=D.state.spotLightMap,Me.pointShadowMap.value=D.state.pointShadowMap,Me.pointShadowMatrix.value=D.state.pointShadowMatrix),F.currentProgram=we,F.uniformsList=null,we}function Zs(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Wr.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function js(M,I){const N=Pe.get(M);N.outputColorSpace=I.outputColorSpace,N.batching=I.batching,N.batchingColor=I.batchingColor,N.instancing=I.instancing,N.instancingColor=I.instancingColor,N.instancingMorph=I.instancingMorph,N.skinning=I.skinning,N.morphTargets=I.morphTargets,N.morphNormals=I.morphNormals,N.morphColors=I.morphColors,N.morphTargetsCount=I.morphTargetsCount,N.numClippingPlanes=I.numClippingPlanes,N.numIntersection=I.numClipIntersection,N.vertexAlphas=I.vertexAlphas,N.vertexTangents=I.vertexTangents,N.toneMapping=I.toneMapping}function tc(M,I,N,F,D){I.isScene!==!0&&(I=Ie),Le.resetTextureUnits();const ie=I.fog,oe=F.isMeshStandardMaterial?I.environment:null,pe=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Vn,me=(F.isMeshStandardMaterial?v:x).get(F.envMap||oe),xe=F.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,we=!!N.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Me=!!N.morphAttributes.position,Ye=!!N.morphAttributes.normal,lt=!!N.morphAttributes.color;let ct=Bn;F.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ct=S.toneMapping);const kt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,$e=kt!==void 0?kt.length:0,ye=Pe.get(F),At=p.state.lights;if(V===!0&&(Q===!0||M!==T)){const Gt=M===T&&F.id===k;De.setState(F,M,Gt)}let Ke=!1;F.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==At.state.version||ye.outputColorSpace!==pe||D.isBatchedMesh&&ye.batching===!1||!D.isBatchedMesh&&ye.batching===!0||D.isBatchedMesh&&ye.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&ye.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&ye.instancing===!1||!D.isInstancedMesh&&ye.instancing===!0||D.isSkinnedMesh&&ye.skinning===!1||!D.isSkinnedMesh&&ye.skinning===!0||D.isInstancedMesh&&ye.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&ye.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&ye.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&ye.instancingMorph===!1&&D.morphTexture!==null||ye.envMap!==me||F.fog===!0&&ye.fog!==ie||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==De.numPlanes||ye.numIntersection!==De.numIntersection)||ye.vertexAlphas!==xe||ye.vertexTangents!==we||ye.morphTargets!==Me||ye.morphNormals!==Ye||ye.morphColors!==lt||ye.toneMapping!==ct||ye.morphTargetsCount!==$e)&&(Ke=!0):(Ke=!0,ye.__version=F.version);let qt=ye.currentProgram;Ke===!0&&(qt=ar(F,I,D));let li=!1,Ot=!1,sa=!1;const _t=qt.getUniforms(),wn=ye.uniforms;if(Se.useProgram(qt.program)&&(li=!0,Ot=!0,sa=!0),F.id!==k&&(k=F.id,Ot=!0),li||T!==M){_t.setValue(C,"projectionMatrix",M.projectionMatrix),_t.setValue(C,"viewMatrix",M.matrixWorldInverse);const Gt=_t.map.cameraPosition;Gt!==void 0&&Gt.setValue(C,he.setFromMatrixPosition(M.matrixWorld)),Qe.logarithmicDepthBuffer&&_t.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&_t.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),T!==M&&(T=M,Ot=!0,sa=!0)}if(D.isSkinnedMesh){_t.setOptional(C,D,"bindMatrix"),_t.setOptional(C,D,"bindMatrixInverse");const Gt=D.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),_t.setValue(C,"boneTexture",Gt.boneTexture,Le))}D.isBatchedMesh&&(_t.setOptional(C,D,"batchingTexture"),_t.setValue(C,"batchingTexture",D._matricesTexture,Le),_t.setOptional(C,D,"batchingIdTexture"),_t.setValue(C,"batchingIdTexture",D._indirectTexture,Le),_t.setOptional(C,D,"batchingColorTexture"),D._colorsTexture!==null&&_t.setValue(C,"batchingColorTexture",D._colorsTexture,Le));const oa=N.morphAttributes;if((oa.position!==void 0||oa.normal!==void 0||oa.color!==void 0)&&He.update(D,N,qt),(Ot||ye.receiveShadow!==D.receiveShadow)&&(ye.receiveShadow=D.receiveShadow,_t.setValue(C,"receiveShadow",D.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(wn.envMap.value=me,wn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&I.environment!==null&&(wn.envMapIntensity.value=I.environmentIntensity),Ot&&(_t.setValue(C,"toneMappingExposure",S.toneMappingExposure),ye.needsLights&&nc(wn,sa),ie&&F.fog===!0&&be.refreshFogUniforms(wn,ie),be.refreshMaterialUniforms(wn,F,j,W,p.state.transmissionRenderTarget[M.id]),Wr.upload(C,Zs(ye),wn,Le)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Wr.upload(C,Zs(ye),wn,Le),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&_t.setValue(C,"center",D.center),_t.setValue(C,"modelViewMatrix",D.modelViewMatrix),_t.setValue(C,"normalMatrix",D.normalMatrix),_t.setValue(C,"modelMatrix",D.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Gt=F.uniformsGroups;for(let la=0,rc=Gt.length;la<rc;la++){const Js=Gt[la];at.update(Js,qt),at.bind(Js,qt)}}return qt}function nc(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function ic(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,I,N){Pe.get(M.texture).__webglTexture=I,Pe.get(M.depthTexture).__webglTexture=N;const F=Pe.get(M);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=N===void 0,F.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const N=Pe.get(M);N.__webglFramebuffer=I,N.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,N=0){A=M,L=I,w=N;let F=!0,D=null,ie=!1,oe=!1;if(M){const me=Pe.get(M);if(me.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(C.FRAMEBUFFER,null),F=!1;else if(me.__webglFramebuffer===void 0)Le.setupRenderTarget(M);else if(me.__hasExternalTextures)Le.rebindTextures(M,Pe.get(M.texture).__webglTexture,Pe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Me=M.depthTexture;if(me.__boundDepthTexture!==Me){if(Me!==null&&Pe.has(Me)&&(M.width!==Me.image.width||M.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(M)}}const xe=M.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(oe=!0);const we=Pe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(we[I])?D=we[I][N]:D=we[I],ie=!0):M.samples>0&&Le.useMultisampledRTT(M)===!1?D=Pe.get(M).__webglMultisampledFramebuffer:Array.isArray(we)?D=we[N]:D=we,y.copy(M.viewport),P.copy(M.scissor),G=M.scissorTest}else y.copy(de).multiplyScalar(j).floor(),P.copy(_e).multiplyScalar(j).floor(),G=ze;if(Se.bindFramebuffer(C.FRAMEBUFFER,D)&&F&&Se.drawBuffers(M,D),Se.viewport(y),Se.scissor(P),Se.setScissorTest(G),ie){const me=Pe.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,N)}else if(oe){const me=Pe.get(M.texture),xe=I||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,me.__webglTexture,N||0,xe)}k=-1},this.readRenderTargetPixels=function(M,I,N,F,D,ie,oe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&oe!==void 0&&(pe=pe[oe]),pe){Se.bindFramebuffer(C.FRAMEBUFFER,pe);try{const me=M.texture,xe=me.format,we=me.type;if(!Qe.textureFormatReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-F&&N>=0&&N<=M.height-D&&C.readPixels(I,N,F,D,Re.convert(xe),Re.convert(we),ie)}finally{const me=A!==null?Pe.get(A).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(M,I,N,F,D,ie,oe){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&oe!==void 0&&(pe=pe[oe]),pe){Se.bindFramebuffer(C.FRAMEBUFFER,pe);try{const me=M.texture,xe=me.format,we=me.type;if(!Qe.textureFormatReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-F&&N>=0&&N<=M.height-D){const Me=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Me),C.bufferData(C.PIXEL_PACK_BUFFER,ie.byteLength,C.STREAM_READ),C.readPixels(I,N,F,D,Re.convert(xe),Re.convert(we),0),C.flush();const Ye=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await vh(C,Ye,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,Me),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ie)}finally{C.deleteBuffer(Me),C.deleteSync(Ye)}return ie}}finally{const me=A!==null?Pe.get(A).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,me)}}},this.copyFramebufferToTexture=function(M,I=null,N=0){M.isTexture!==!0&&(Zi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const F=Math.pow(2,-N),D=Math.floor(M.image.width*F),ie=Math.floor(M.image.height*F),oe=I!==null?I.x:0,pe=I!==null?I.y:0;Le.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,N,0,0,oe,pe,D,ie),Se.unbindTexture()},this.copyTextureToTexture=function(M,I,N=null,F=null,D=0){M.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,M=arguments[1],I=arguments[2],D=arguments[3]||0,N=null);let ie,oe,pe,me,xe,we;N!==null?(ie=N.max.x-N.min.x,oe=N.max.y-N.min.y,pe=N.min.x,me=N.min.y):(ie=M.image.width,oe=M.image.height,pe=0,me=0),F!==null?(xe=F.x,we=F.y):(xe=0,we=0);const Me=Re.convert(I.format),Ye=Re.convert(I.type);Le.setTexture2D(I,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const lt=C.getParameter(C.UNPACK_ROW_LENGTH),ct=C.getParameter(C.UNPACK_IMAGE_HEIGHT),kt=C.getParameter(C.UNPACK_SKIP_PIXELS),$e=C.getParameter(C.UNPACK_SKIP_ROWS),ye=C.getParameter(C.UNPACK_SKIP_IMAGES),At=M.isCompressedTexture?M.mipmaps[D]:M.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,At.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,At.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,pe),C.pixelStorei(C.UNPACK_SKIP_ROWS,me),M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,D,xe,we,ie,oe,Me,Ye,At.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,D,xe,we,At.width,At.height,Me,At.data):C.texSubImage2D(C.TEXTURE_2D,D,xe,we,ie,oe,Me,Ye,At),C.pixelStorei(C.UNPACK_ROW_LENGTH,lt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ct),C.pixelStorei(C.UNPACK_SKIP_PIXELS,kt),C.pixelStorei(C.UNPACK_SKIP_ROWS,$e),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ye),D===0&&I.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(M,I,N=null,F=null,D=0){M.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,F=arguments[1]||null,M=arguments[2],I=arguments[3],D=arguments[4]||0);let ie,oe,pe,me,xe,we,Me,Ye,lt;const ct=M.isCompressedTexture?M.mipmaps[D]:M.image;N!==null?(ie=N.max.x-N.min.x,oe=N.max.y-N.min.y,pe=N.max.z-N.min.z,me=N.min.x,xe=N.min.y,we=N.min.z):(ie=ct.width,oe=ct.height,pe=ct.depth,me=0,xe=0,we=0),F!==null?(Me=F.x,Ye=F.y,lt=F.z):(Me=0,Ye=0,lt=0);const kt=Re.convert(I.format),$e=Re.convert(I.type);let ye;if(I.isData3DTexture)Le.setTexture3D(I,0),ye=C.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Le.setTexture2DArray(I,0),ye=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const At=C.getParameter(C.UNPACK_ROW_LENGTH),Ke=C.getParameter(C.UNPACK_IMAGE_HEIGHT),qt=C.getParameter(C.UNPACK_SKIP_PIXELS),li=C.getParameter(C.UNPACK_SKIP_ROWS),Ot=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ct.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ct.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,me),C.pixelStorei(C.UNPACK_SKIP_ROWS,xe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,we),M.isDataTexture||M.isData3DTexture?C.texSubImage3D(ye,D,Me,Ye,lt,ie,oe,pe,kt,$e,ct.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(ye,D,Me,Ye,lt,ie,oe,pe,kt,ct.data):C.texSubImage3D(ye,D,Me,Ye,lt,ie,oe,pe,kt,$e,ct),C.pixelStorei(C.UNPACK_ROW_LENGTH,At),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ke),C.pixelStorei(C.UNPACK_SKIP_PIXELS,qt),C.pixelStorei(C.UNPACK_SKIP_ROWS,li),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ot),D===0&&I.generateMipmaps&&C.generateMipmap(ye),Se.unbindTexture()},this.initRenderTarget=function(M){Pe.get(M).__webglFramebuffer===void 0&&Le.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Le.setTextureCube(M,0):M.isData3DTexture?Le.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Le.setTexture2DArray(M,0):Le.setTexture2D(M,0),Se.unbindTexture()},this.resetState=function(){L=0,w=0,A=null,Se.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ds?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===na?"display-p3":"srgb"}}class Os{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=i}clone(){return new Os(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Rm extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Vl extends tr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zo=new ft,Ms=new Ns,Cr=new ia,Pr=new U;class Im extends Ft{constructor(e=new ln,t=new Vl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(r),Cr.radius+=a,e.ray.intersectsSphere(Cr)===!1)return;Zo.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(Zo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let g=d,_=m;g<_;g++){const p=c.getX(g);Pr.fromBufferAttribute(u,p),jo(Pr,p,l,r,e,t,this)}}else{const d=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let g=d,_=m;g<_;g++)Pr.fromBufferAttribute(u,g),jo(Pr,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function jo(n,e,t,i,r,a,s){const o=Ms.distanceSqToPoint(n);if(o<t){const l=new U;Ms.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class oi extends Ut{constructor(e,t,i,r,a,s,o,l,c){super(e,t,i,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bs extends ln{constructor(e=.5,t=1,i=32,r=1,a=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:a,thetaLength:s},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/r,m=new U,g=new Ge;for(let _=0;_<=r;_++){for(let p=0;p<=i;p++){const f=a+p/i*s;m.x=u*Math.cos(f),m.y=u*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<r;_++){const p=_*(i+1);for(let f=0;f<i;f++){const b=f+p,S=b,E=b+i+1,L=b+i+2,w=b+1;o.push(S,E,w),o.push(E,L,w)}}this.setIndex(o),this.setAttribute("position",new rn(l,3)),this.setAttribute("normal",new rn(c,3)),this.setAttribute("uv",new rn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Lm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Jo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Jo(){return(typeof performance>"u"?Date:performance).now()}const Qo=new ft;class zs{constructor(e,t,i=0,r=1/0){this.ray=new Ns(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qo),this}intersectObject(e,t=!0,i=[]){return ys(e,this,i,t),i.sort(el),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)ys(e[r],this,i,t);return i.sort(el),i}}function el(n,e){return n.distance-e.distance}function ys(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let s=0,o=a.length;s<o;s++)ys(a[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:As}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=As);class Dm{constructor(e){this.camera=e}raycaster=new zs;pointer=new Ge;alphaContexts=new WeakMap;pick(e,t,i,r=18){if(i.width<=0||i.height<=0||t.x<0||t.y<0||t.x>i.width||t.y>i.height)return null;this.camera.updateWorldMatrix(!0,!1),this.pointer.set(t.x/i.width*2-1,1-t.y/i.height*2),this.raycaster.setFromCamera(this.pointer,this.camera);let a=null,s=1/0,o=null;for(const l of e){if(!this.isVisible(l.object))continue;const c=this.artMeshes(l.object);for(const h of this.raycaster.intersectObjects(c,!1)){const u=h.point.clone().project(this.camera).z;u<-1||u>1||!this.isPainted(h)||a&&!this.prefersPainted(l,h.distance,a,s)||(a=l,s=h.distance)}if(l.generous)for(const h of c){const u=this.screenBounds(h,i);if(!u)continue;const d=this.paddedHit(l,u,t,r);d&&(!o||this.isCloser(d,o))&&(o=d)}}return a??o?.hotspot??null}isVisible(e){for(let t=e;t;t=t.parent)if(!t.visible)return!1;return!0}artMeshes(e){const t=[];return e.updateWorldMatrix(!0,!0),e.traverseVisible(i=>{const r=i;if(!r.isMesh||!r.userData.render)return;(Array.isArray(r.material)?r.material:[r.material]).some(s=>s.visible)&&t.push(r)}),t}screenBounds(e,t){e.geometry.boundingBox||e.geometry.computeBoundingBox();const i=e.geometry.boundingBox;if(!i)return null;const r={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};for(const[a,s]of[[i.min.x,i.min.y],[i.max.x,i.min.y],[i.max.x,i.max.y],[i.min.x,i.max.y]]){const o=new U(a,s,i.min.z).applyMatrix4(e.matrixWorld).project(this.camera);if(o.z<-1||o.z>1||!Number.isFinite(o.x+o.y))return null;const l=(o.x+1)*t.width/2,c=(1-o.y)*t.height/2;r.minX=Math.min(r.minX,l),r.maxX=Math.max(r.maxX,l),r.minY=Math.min(r.minY,c),r.maxY=Math.max(r.maxY,c)}return r.maxX<0||r.maxY<0||r.minX>t.width||r.minY>t.height?null:r}paddedHit(e,t,i,r){const a=Math.max(t.minX-i.x,0,i.x-t.maxX),s=Math.max(t.minY-i.y,0,i.y-t.maxY),o=Math.hypot(a,s);if(o>r)return null;const l=(t.minX+t.maxX)/2,c=(t.minY+t.maxY)/2;return{hotspot:e,edgeDistance:o,centerDistance:Math.hypot(i.x-l,i.y-c)}}isCloser(e,t){const i=this.sameObjectPriority(e.hotspot,t.hotspot);return i!==0?i>0:e.edgeDistance<t.edgeDistance||e.edgeDistance===t.edgeDistance&&e.centerDistance<t.centerDistance}prefersPainted(e,t,i,r){const a=this.sameObjectPriority(e,i);return a!==0?a>0:t<r}sameObjectPriority(e,t){return e.object===t.object?(e.priority??0)-(t.priority??0):0}isPainted(e){const r=e.object.material.map?.image;if(!e.uv||!r||typeof r.getContext!="function")return!0;let a=this.alphaContexts.get(r);if(a===void 0&&(a=r.getContext("2d",{willReadFrequently:!0}),this.alphaContexts.set(r,a)),!a)return!0;const s=Math.min(r.width-1,Math.max(0,Math.floor(e.uv.x*r.width))),o=Math.min(r.height-1,Math.max(0,Math.floor((1-e.uv.y)*r.height)));return a.getImageData(s,o,1,1).data[3]>32}}class Um{constructor(e,t){this.camera=e,this.surface=t,this.overlay=this.createOverlay()}raycaster=new zs;overlay;canvas=null;label=null;show(e,t,i,r){if(!this.overlay||!this.canvas||!this.label||t.width<=0||t.height<=0)return;Object.assign(this.overlay.style,{display:"block",left:`${t.left}px`,top:`${t.top}px`,width:`${t.width}px`,height:`${t.height}px`}),this.raycaster.setFromCamera(e,this.camera);const a=[`tap ${e.x.toFixed(2)},${e.y.toFixed(2)}  pieces:${i.length}  picked:${r?"YES":"no"}`,...this.surfaceReport(e,t)];for(const[s,o]of i.entries()){const c=this.raycaster.intersectObject(o.object,!0).filter(h=>h.object.userData.render);a.push(`#${s} gen:${o.generous?1:0} art hits:${c.length}`)}this.label.textContent=a.join(`
`),this.drawMarkers(e,t,i)}surfaceReport(e,t){const i=t.left+(e.x+1)*t.width/2,r=t.top+(1-e.y)*t.height/2,a=c=>c.toFixed(1),s=[`client ${a(i)},${a(r)}  DPR ${window.devicePixelRatio}`,`canvas CSS ${a(t.left)},${a(t.top)} ${a(t.width)}x${a(t.height)}`],o=window.visualViewport;if(o&&s.push(`visual ${a(o.width)}x${a(o.height)} offset ${a(o.offsetLeft)},${a(o.offsetTop)} scale ${a(o.scale)}`),this.camera.isPerspectiveCamera){const c=this.camera;s.push(`camera aspect ${c.aspect.toFixed(3)} FOV ${a(c.fov)}`)}const l=this.surface;if(l&&typeof l.getContext=="function"){const c=l.getContext("webgl2");if(s.push(`backing ${l.width}x${l.height}`),c){const h=Array.from(c.getParameter(c.VIEWPORT));s.push(`GL buffer ${c.drawingBufferWidth}x${c.drawingBufferHeight} viewport ${h.join(",")}`)}}return s}dispose(){this.overlay?.remove()}createOverlay(){if(typeof window>"u")return null;const e=new URLSearchParams(window.location.search);if(!e.has("debug")||e.has("no-tap-debug"))return null;const t=document.createElement("div");return Object.assign(t.style,{display:"none",position:"fixed",zIndex:"199",pointerEvents:"none"}),this.canvas=document.createElement("canvas"),Object.assign(this.canvas.style,{display:"block",width:"100%",height:"100%"}),this.label=document.createElement("pre"),Object.assign(this.label.style,{position:"absolute",left:"8px",top:"8px",margin:"0",padding:"8px 10px",maxWidth:"calc(100% - 16px)",font:"12px/1.35 monospace",color:"#0a0",background:"rgba(255,255,255,0.85)",borderRadius:"6px",whiteSpace:"pre-wrap"}),t.append(this.canvas,this.label),document.body.appendChild(t),t}drawMarkers(e,t,i){const r=this.canvas;if(!r)return;const a=window.devicePixelRatio||1,s=Math.round(t.width*a),o=Math.round(t.height*a);r.width!==s&&(r.width=s),r.height!==o&&(r.height=o);const l=r.getContext("2d");if(!l)return;l.setTransform(a,0,0,a,0,0),l.clearRect(0,0,t.width,t.height),l.strokeStyle="rgba(0,180,0,0.9)",l.lineWidth=2;for(const u of i)u.object.traverse(d=>{const m=d;!m.isMesh||!m.userData.render||!m.geometry||this.drawArtBox(l,m,t)});const c=(e.x*.5+.5)*t.width,h=(-e.y*.5+.5)*t.height;l.strokeStyle="red",l.beginPath(),l.moveTo(c-16,h),l.lineTo(c+16,h),l.moveTo(c,h-16),l.lineTo(c,h+16),l.stroke()}drawArtBox(e,t,i){t.geometry.boundingBox||t.geometry.computeBoundingBox();const r=t.geometry.boundingBox;if(!r)return;t.updateWorldMatrix(!0,!1);const a=[[r.min.x,r.min.y],[r.max.x,r.min.y],[r.max.x,r.max.y],[r.min.x,r.max.y]];e.beginPath();for(const[s,[o,l]]of a.entries()){const c=new U(o,l,0).applyMatrix4(t.matrixWorld).project(this.camera),h=(c.x*.5+.5)*i.width,u=(-c.y*.5+.5)*i.height;s===0?e.moveTo(h,u):e.lineTo(h,u)}e.closePath(),e.stroke()}}class Nm{constructor(e,t){this.domElement=t,this.picker=new Dm(e),this.diagnostics=new Um(e,t),t.addEventListener("pointermove",this.handlePointerMove),t.addEventListener("pointerdown",this.handlePointerDown),t.addEventListener("pointerup",this.handlePointerUp),t.addEventListener("pointercancel",this.handlePointerCancel),t.addEventListener("lostpointercapture",this.handlePointerCancel)}hotspots=[];presses=new Map;missListeners=new Set;picker;diagnostics;hovered=null;enabled=!0;register(e){this.hotspots.push(e);let t=!0;return()=>{t&&(t=!1,this.removeHotspot(e))}}unregister(e){const t=this.hotspots.find(i=>i.object===e);t&&this.removeHotspot(t)}onMiss(e){return this.missListeners.add(e),()=>{this.missListeners.delete(e)}}removeHotspot(e){const t=this.hotspots.indexOf(e);t<0||(this.hovered===e&&this.setHovered(null),this.hotspots.splice(t,1))}clear(){this.resetPresses(),this.setHovered(null),this.hotspots.length=0}setEnabled(e){this.enabled=e,e||(this.resetPresses(),this.setHovered(null))}dispose(){this.clear(),this.missListeners.clear(),this.diagnostics.dispose(),this.domElement.removeEventListener("pointermove",this.handlePointerMove),this.domElement.removeEventListener("pointerdown",this.handlePointerDown),this.domElement.removeEventListener("pointerup",this.handlePointerUp),this.domElement.removeEventListener("pointercancel",this.handlePointerCancel),this.domElement.removeEventListener("lostpointercapture",this.handlePointerCancel)}point(e){const t=this.domElement.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}pick(e){const t=this.domElement.getBoundingClientRect(),i=e.pointerType==="mouse"?8:18;return this.picker.pick(this.hotspots,this.point(e),t,i)}setHovered(e){this.hovered!==e&&(this.hovered?.onHover?.(!1),this.hovered=e,this.hovered?.onHover?.(!0),this.domElement.style.cursor=e?e.cursor??"pointer":"default")}release(e){this.presses.delete(e),this.domElement.hasPointerCapture(e)&&this.domElement.releasePointerCapture(e)}resetPresses(){for(const e of this.presses.keys())this.release(e)}handlePointerMove=e=>{this.enabled&&e.pointerType==="mouse"&&this.setHovered(this.pick(e))};handlePointerDown=e=>{!this.enabled||e.button!==0||(this.presses.set(e.pointerId,{point:this.point(e),hotspot:this.pick(e)}),this.domElement.setPointerCapture(e.pointerId))};handlePointerUp=e=>{const t=this.presses.get(e.pointerId);if(this.release(e.pointerId),!this.enabled||!t)return;const i=this.point(e);if(Math.hypot(i.x-t.point.x,i.y-t.point.y)>30||t.hotspot&&!this.hotspots.includes(t.hotspot))return;const a=t.hotspot??this.pick(e),s=this.domElement.getBoundingClientRect(),o=new Ge(i.x/s.width*2-1,1-i.y/s.height*2);if(this.diagnostics.show(o,s,this.hotspots,a),a)a.onClick();else for(const l of this.missListeners)l(i)};handlePointerCancel=e=>{this.release(e.pointerId)}}const Fm=["One.","Two.","Three.","Four.","Five.","Six.","Seven.","Eight.","Nine.","Ten."];class Wl{constructor(e,t){this.narrator=e,this.view=t}count=0;total=0;get hasCounted(){return this.total>1&&this.count>0}get isComplete(){return this.hasCounted&&this.count>=this.total}start(e){this.count=0,this.total=Math.max(0,Math.floor(e)),this.view?.reset()}advance(){this.total<=1||this.count>=this.total||(this.count++,this.count===1&&this.narrator?.cancel(),this.view?.show(this.count,this.total),this.narrator?.enqueue(Fm[this.count-1]??`${this.count}.`))}reset(){this.count=0,this.total=0,this.view?.reset()}}class km{constructor(e,t=new Wl(e)){this.narrator=e,this.counting=t,this.titleCard=document.getElementById("title-card"),this.startButton=document.getElementById("start-button"),this.caption=document.getElementById("caption"),this.endCard=document.getElementById("end-card"),this.endTitle=document.getElementById("end-title"),this.endSubtitle=document.getElementById("end-subtitle"),this.restartButton=document.getElementById("restart-button"),this.endCard.inert=!0,this.restartButton.disabled=!0}titleCard;startButton;caption;endCard;endTitle;endSubtitle;restartButton;captionTimer=0;captionGeneration=0;onRestart(e){this.restartButton.addEventListener("click",()=>{this.restartButton.disabled||!this.endCard.classList.contains("visible")||(this.restartButton.disabled=!0,this.endCard.inert=!0,this.endCard.classList.remove("visible"),this.captionGeneration++,this.hideCaption(),this.counting.reset(),this.narrator?.cancel(),e())})}onStart(e){this.startButton.addEventListener("click",()=>{this.titleCard.inert=!0,this.titleCard.classList.add("hidden"),e()},{once:!0})}showCaption(e,t=0,i="narrator"){this.presentCaption(e,t),this.counting.hasCounted?this.counting.isComplete&&this.narrator?.enqueue(e,i):this.narrator?.speak(e,i)}showTapHint(e,t="narrator"){return this.showAside(e,t)}showPlayfulLine(e,t){return this.showAside(e,t)}showAside(e,t){this.presentCaption(e,0);const i=this.captionGeneration,r=this.narrator?.speak(e,t);return()=>{r?.(),i===this.captionGeneration&&this.hideCaption()}}presentCaption(e,t){this.captionGeneration++,this.caption.textContent=e,this.caption.classList.add("visible"),this.captionTimer=t>0?t:0}hideCaption(){this.caption.classList.remove("visible"),this.captionTimer=0}showEndCard(e,t){this.hideCaption(),this.endTitle.textContent=e,this.endSubtitle.textContent=t,this.endCard.inert=!1,this.restartButton.disabled=!1,this.endCard.classList.add("visible"),this.narrator?.speak(`${e}. ${t}`)}update(e){this.captionTimer>0&&(this.captionTimer-=e,this.captionTimer<=0&&this.hideCaption())}}const Rr=["Sonia","Serena","Google UK English Female","Samantha","Karen"],Xi=["Aria","Jenny","Google US English","Samantha","Google UK English Female"],tl=["Ryan","Guy","Google UK English Male","Daniel","David"],Ss={narrator:{rate:.9,pitch:1,preferredNames:Rr},mabli:{rate:.94,pitch:1.15,preferredNames:Xi},frog:{rate:.86,pitch:.8,preferredNames:tl},fox:{rate:.91,pitch:.96,preferredNames:tl},bird:{rate:.98,pitch:1.23,preferredNames:Xi},rabbit:{rate:.91,pitch:1.12,preferredNames:Rr},butterfly:{rate:.94,pitch:1.2,preferredNames:Xi},bee:{rate:.97,pitch:1.12,preferredNames:Xi},duckling:{rate:.92,pitch:1.18,preferredNames:Xi},snail:{rate:.83,pitch:.96,preferredNames:Rr},firefly:{rate:.88,pitch:1.1,preferredNames:Rr}};function Om(n,e){const t=n.filter(i=>/^en(-|_|$)/i.test(i.lang));for(const i of Ss[e].preferredNames){const r=t.find(a=>a.name.toLowerCase().includes(i.toLowerCase()));if(r)return r}return t.find(i=>/natural|premium|enhanced|google/i.test(i.name))??t[0]??n[0]??null}class Bm{constructor(e,t){this.isBusy=e,this.play=t}lines=[];get hasPending(){return this.lines.length>0}add(e,t){this.lines.push({text:e,speaker:t}),this.update()}update(){if(!this.lines.length||this.isBusy())return;const e=this.lines.shift();e&&this.play(e.text,e.speaker)}clear(){this.lines.length=0}}const zm=1200,Hm=5e3,Gm=250,Vm=9e4;class Wm{constructor(e=()=>performance.now(),t){this.now=e,this.recorded=t,this.synth&&(this.pickVoice(),this.synth.addEventListener?.("voiceschanged",()=>this.pickVoice()))}synth=typeof window<"u"?window.speechSynthesis??null:null;voices=[];current=null;generation=0;queue=new Bm(()=>this.isPlaybackBusy(),(e,t)=>this.startLine(e,t));enabled=!0;rate=.92;pitch=1;get isSpeaking(){return this.queue.update(),this.queue.hasPending||this.isPlaybackBusy()}update(){this.queue.update()}isPlaybackBusy(){if(this.recorded?.isPlaying)return!0;const e=this.current;if(!e||!this.synth)return!1;const t=this.now();if(t-e.requestedAt>Vm)return this.stopPlayback(),!1;if(this.synth.speaking)return e.observedActivity=!0,e.lastActivityAt=t,!0;if(this.synth.pending&&!e.observedActivity)return t-e.requestedAt<=Hm?!0:(this.stopPlayback(),!1);const i=e.observedActivity?Gm:zm;return t-e.lastActivityAt<=i?!0:(this.finish(e),!1)}pickVoice(){this.voices=this.synth?.getVoices()??[]}speak(e,t="narrator"){if(!this.enabled||!e.trim())return()=>{};this.queue.clear(),this.startLine(e,t);const i=this.generation;return()=>{i===this.generation&&this.cancel()}}enqueue(e,t="narrator"){this.enabled&&e.trim()&&this.queue.add(e,t)}startLine(e,t){this.stopPlayback();const i=this.generation;this.recorded?.play(e,t,()=>{this.enabled&&i===this.generation&&this.speakSpeech(e,t)})||this.speakSpeech(e,t)}speakSpeech(e,t){if(!this.synth||typeof SpeechSynthesisUtterance>"u")return;const i=new SpeechSynthesisUtterance(e),r=Om(this.voices,t);r&&(i.voice=r),i.rate=Ss[t].rate*this.rate/.92,i.pitch=Ss[t].pitch*this.pitch;const a={utterance:i,requestedAt:this.now(),lastActivityAt:this.now(),observedActivity:!1};this.current=a,i.onstart=()=>{this.current===a&&(a.observedActivity=!0,a.lastActivityAt=this.now())},i.onend=()=>this.finish(a),i.onerror=()=>this.finish(a);try{this.synth.speak(i)}catch{this.finish(a)}}cancel(){this.queue.clear(),this.stopPlayback()}stopPlayback(){this.generation++,this.current=null,this.recorded?.cancel(),this.synth?.cancel()}finish(e){this.current===e&&(this.current=null)}setEnabled(e){this.enabled=e,e||this.cancel()}}const Xm=8e3,qm=9e4;class Ym{constructor(e=()=>typeof Audio>"u"?null:new Audio,t=()=>performance.now()){this.createAudio=e,this.now=t}audio=null;request=null;generation=0;get isPlaying(){const e=this.request;if(!e)return!1;if(this.audio?.ended&&!e.pending)return this.finish(e),!1;const t=this.now()-e.startedAt;return(e.pending&&t>Xm||t>qm)&&this.fail(e),this.request!==null}play(e,t){this.cancel();try{this.audio??=this.createAudio()}catch{return!1}const i=this.audio;if(!i)return!1;const r={generation:this.generation,startedAt:this.now(),pending:!0,onUnavailable:t};this.request=r,i.preload="auto",i.onended=()=>this.finish(r),i.onerror=()=>this.fail(r),i.onplaying=()=>{this.isCurrent(r)&&(r.pending=!1)},i.src=e;try{i.play()?.then(()=>{this.isCurrent(r)&&(r.pending=!1)}).catch(()=>this.fail(r))}catch{this.fail(r)}return!0}cancel(){this.generation++,this.request=null,this.audio&&(this.audio.onended=null,this.audio.onerror=null,this.audio.onplaying=null,this.audio.pause(),this.audio.removeAttribute("src"),this.audio.load())}isCurrent(e){return this.request===e&&e.generation===this.generation}finish(e){this.isCurrent(e)&&(this.request=null)}fail(e){this.isCurrent(e)&&(this.cancel(),e.onUnavailable())}}function $m(n,e="narrator"){return`${e}
${n.trim()}`}class Km{constructor(e,t=new Ym,i=typeof document>"u"?"http://localhost/":document.baseURI){this.clips=e,this.playback=t,this.baseUrl=i}get isPlaying(){return this.playback.isPlaying}play(e,t,i){const r=this.clips[$m(e,t)];if(!r)return!1;let a;try{a=new URL(r,this.baseUrl).href}catch{return!1}return this.playback.play(a,i)}cancel(){this.playback.cancel()}}const Zm=8,jm=12;class Jm{constructor(e){this.options=e,this.hints=e.hints}targets=[];quietSeconds=0;nextHint=0;highlighted=null;cancelHint=null;hints;start(e,t){this.reset(),this.targets=[...e],this.hints=t?.length?t:this.options.hints}progress(e){this.targets.includes(e)&&(this.targets=this.targets.filter(t=>t!==e),this.restartPause())}update(e,t=!0){if(this.options.view?.update(),!this.targets.length)return;const i=this.highlighted&&this.isEligible(this.highlighted)?this.highlighted:this.targets.find(o=>this.isEligible(o));if(!t||!i){this.restartPause();return}if(this.highlighted&&!this.isEligible(this.highlighted)&&this.restartPause(),this.options.isNarrating()){this.quietSeconds=0;return}if(this.hints.length===0)return;this.quietSeconds+=Number.isFinite(e)?Math.max(0,e):0;const r=this.nextHint===0?Zm:jm;if(this.quietSeconds<r)return;this.highlighted=i;const a=this.nextHint>=2;i.setHintFlashing(a),this.options.view?.show(i,a);const s=this.hints[this.nextHint%this.hints.length];this.cancelHint=this.options.showHint(s),this.nextHint++,this.quietSeconds=0}reset(){this.targets=[],this.hints=this.options.hints,this.restartPause()}isEligible(e){return e.root.visible&&e.isOpen&&!e.isColored&&(this.options.view?.canShow(e)??!0)}restartPause(){const e=this.cancelHint;this.cancelHint=null,e?.(),this.highlighted?.setHintFlashing(!1),this.highlighted=null,this.options.view?.reset(),this.quietSeconds=0,this.nextHint=0}}class Qm{constructor(e,t,i,r,a,s){this.interaction=e,this.speech=t,this.effects=i,this.projector=r,this.ground=a,this.tapSound=s,this.registrations.push(e.onMiss(o=>{this.disposed||(this.effects.triggerAt("stars",this.projector.project(o)),this.tapSound(),this.speech.say(this.ground,this.focus))}))}registrations=[];focus="";disposed=!1;add(e){const t=e.playProfile;t&&this.registrations.push(this.interaction.register({object:e.root,cursor:"pointer",generous:!1,priority:-1,onClick:()=>{this.disposed||!e.root.visible||(t.reaction!=="still"&&e.react(),this.effects.trigger(t.surprise??"stars",e.root),this.tapSound(),this.speech.say(t,this.focus))}}))}startPuzzle(e){this.focus=e[0]?.playProfile?.id??""}puzzleProgress(){this.speech.cancel()}finishPuzzle(){this.speech.finish()}update(e){this.disposed||(this.speech.update(e),this.effects.update(e))}dispose(){if(!this.disposed){this.disposed=!0;for(const e of this.registrations)e();this.registrations.length=0,this.speech.dispose(),this.effects.dispose()}}}class e0{constructor(e,t){this.isBusy=e,this.showLine=t}spoken=new Map;elapsed=0;lastSpoken=-1/0;cancelLine=null;finished=!1;update(e){this.elapsed+=Math.max(0,e)}say(e,t){if(this.finished||this.isBusy()||this.elapsed-this.lastSpoken<2.5)return;const i=this.spoken.get(e.id)??0,r=e.focusReplies?.[t],a=r?.length&&i%3===0?r:e.lines;a.length&&(this.cancelLine=this.showLine(a[i%a.length]),this.spoken.set(e.id,i+1),this.lastSpoken=this.elapsed)}cancel(){const e=this.cancelLine;this.cancelLine=null,e?.()}finish(){this.cancel(),this.finished=!0}dispose(){this.finish(),this.spoken.clear()}}class t0{constructor(e,t){this.camera=e,this.canvas=t}raycaster=new zs;pointer=new Ge;paper=new Nn(new U(0,1,0),-.025);position=new U;project(e){const{width:t,height:i}=this.canvas.getBoundingClientRect();return this.pointer.set(e.x/Math.max(1,t)*2-1,1-e.y/Math.max(1,i)*2),this.camera.updateWorldMatrix(!0,!1),this.raycaster.setFromCamera(this.pointer,this.camera),(!this.raycaster.ray.intersectPlane(this.paper,this.position)||this.position.distanceTo(this.raycaster.ray.origin)>20)&&this.raycaster.ray.at(6,this.position),this.position}}class n0{ctx;master=null;musicGain=null;reverbSend=null;noiseBuffer=null;enabled=!0;lastPop=0;ambientTimer=0;constructor(){const e=window.AudioContext??window.webkitAudioContext;if(!e){this.ctx=null;return}this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.85;const t=this.ctx.createBiquadFilter();t.type="highshelf",t.frequency.value=3200,t.gain.value=-6;const i=this.ctx.createDynamicsCompressor();i.threshold.value=-10,i.knee.value=24,i.ratio.value=4,i.attack.value=.004,i.release.value=.25,this.master.connect(t),t.connect(i),i.connect(this.ctx.destination);const r=this.ctx.createConvolver();r.buffer=this.buildImpulse(2.6,2.4);const a=this.ctx.createGain();a.gain.value=.9,this.reverbSend=this.ctx.createGain(),this.reverbSend.gain.value=1,this.reverbSend.connect(r),r.connect(a),a.connect(this.master),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=0,this.musicGain.connect(this.master);const s=Math.floor(this.ctx.sampleRate*1);this.noiseBuffer=this.ctx.createBuffer(1,s,this.ctx.sampleRate);const o=this.noiseBuffer.getChannelData(0);for(let l=0;l<s;l++)o[l]=Math.random()*2-1}buildImpulse(e,t){const i=this.ctx,r=i.sampleRate,a=Math.max(1,Math.floor(e*r)),s=i.createBuffer(2,a,r);for(let o=0;o<2;o++){const l=s.getChannelData(o);for(let c=0;c<a;c++){const h=c/a,u=Math.min(1,h*40)*Math.pow(1-h,t);l[c]=(Math.random()*2-1)*u}}return s}resume(){this.ctx&&(this.ctx.state==="suspended"&&this.ctx.resume(),this.musicGain&&this.musicGain.gain.setTargetAtTime(.12,this.ctx.currentTime,2),this.scheduleAmbient())}setEnabled(e){this.enabled=e,this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?.85:0,this.ctx.currentTime,.1)}tone(e,t,i={}){if(!this.ctx||!this.master)return;const{type:r="sine",gain:a=.2,attack:s=.005,delay:o=0,pan:l=0,reverb:c=.35,glide:h=0}=i,u=i.target??this.master,d=this.ctx.currentTime+o,m=this.ctx.createOscillator(),g=this.ctx.createGain(),_=this.ctx.createStereoPanner();if(_.pan.value=Math.max(-1,Math.min(1,l)),m.type=r,m.frequency.setValueAtTime(e,d),h&&m.frequency.exponentialRampToValueAtTime(e*Math.pow(2,h/1200),d+s+.04),g.gain.setValueAtTime(1e-4,d),g.gain.linearRampToValueAtTime(a,d+s),g.gain.exponentialRampToValueAtTime(1e-4,d+t),m.connect(g),g.connect(_),_.connect(u),this.reverbSend&&c>0){const p=this.ctx.createGain();p.gain.value=c,_.connect(p),p.connect(this.reverbSend)}m.start(d),m.stop(d+t+.05)}noise(e,t={}){if(!this.ctx||!this.master||!this.noiseBuffer)return;const{gain:i=.15,type:r="bandpass",from:a=1200,to:s=a,pan:o=0,reverb:l=.25}=t,c=this.ctx.currentTime,h=this.ctx.createBufferSource();h.buffer=this.noiseBuffer;const u=this.ctx.createBiquadFilter();u.type=r,u.frequency.setValueAtTime(a,c),u.frequency.exponentialRampToValueAtTime(Math.max(60,s),c+e),u.Q.value=.8;const d=this.ctx.createGain();d.gain.setValueAtTime(i,c),d.gain.exponentialRampToValueAtTime(1e-4,c+e);const m=this.ctx.createStereoPanner();if(m.pan.value=Math.max(-1,Math.min(1,o)),h.connect(u),u.connect(d),d.connect(m),m.connect(this.master),this.reverbSend&&l>0){const g=this.ctx.createGain();g.gain.value=l,m.connect(g),g.connect(this.reverbSend)}h.start(c),h.stop(c+e+.02)}pop(){if(!this.ctx||!this.master||!this.enabled)return;const e=this.ctx.currentTime;if(e-this.lastPop<.03)return;this.lastPop=e;const t=(Math.random()-.5)*1.2,i=this.ctx.createStereoPanner();i.pan.value=Math.max(-1,Math.min(1,t));const r=this.ctx.createBiquadFilter();if(r.type="lowpass",r.frequency.value=1400,r.Q.value=.4,r.connect(i),i.connect(this.master),this.reverbSend){const h=this.ctx.createGain();h.gain.value=.22,i.connect(h),h.connect(this.reverbSend)}const a=this.ctx.createOscillator(),s=this.ctx.createGain();a.type="sine";const o=420+Math.random()*160;a.frequency.setValueAtTime(o,e),a.frequency.exponentialRampToValueAtTime(150,e+.08),s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.42,e+.008),s.gain.exponentialRampToValueAtTime(1e-4,e+.18),a.connect(s),s.connect(r),a.start(e),a.stop(e+.22);const l=this.ctx.createOscillator(),c=this.ctx.createGain();if(l.type="sine",l.frequency.setValueAtTime(150,e),l.frequency.exponentialRampToValueAtTime(80,e+.1),c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(.22,e+.008),c.gain.exponentialRampToValueAtTime(1e-4,e+.15),l.connect(c),c.connect(r),l.start(e),l.stop(e+.18),this.noiseBuffer){const h=this.ctx.createBufferSource();h.buffer=this.noiseBuffer;const u=this.ctx.createBiquadFilter();u.type="lowpass",u.frequency.value=900;const d=this.ctx.createGain();d.gain.setValueAtTime(.12,e),d.gain.exponentialRampToValueAtTime(1e-4,e+.06),h.connect(u),u.connect(d),d.connect(r),h.start(e),h.stop(e+.09)}}chime(e=0){const t=[523.25,587.33,659.25,783.99,880,987.77,1046.5],i=t[Math.min(e,t.length-1)],r=(Math.random()-.5)*.6;this.tone(i,.9,{type:"sine",gain:.22,attack:.004,pan:r,reverb:.6,glide:12}),this.tone(i*2,.5,{type:"sine",gain:.06,attack:.004,pan:r,reverb:.6}),this.tone(i*3,.35,{type:"sine",gain:.025,attack:.004,pan:r,reverb:.6}),this.tone(i*1.5,.6,{type:"triangle",gain:.04,attack:.006,pan:r,reverb:.6})}success(){const e=[523.25,659.25,783.99,1046.5,1318.5];e.forEach((t,i)=>{const r=-.4+i/(e.length-1)*.8;this.tone(t,.9,{type:"sine",gain:.18,attack:.004,delay:i*.11,pan:r,reverb:.7}),this.tone(t*2,.55,{type:"sine",gain:.04,attack:.004,delay:i*.11,pan:r,reverb:.7})}),this.tone(1046.5,1.6,{type:"sine",gain:.05,attack:.02,delay:.55,reverb:.85,glide:6})}whoosh(){this.noise(.55,{gain:.14,type:"lowpass",from:2200,to:320,pan:-.6,reverb:.4}),this.noise(.5,{gain:.08,type:"lowpass",from:1800,to:260,pan:.6,reverb:.4})}pageTurn(){this.sweep(0,1),this.sweep(1.15,.6)}sweep(e,t){if(!this.ctx||!this.master||!this.noiseBuffer)return;const i=this.ctx.currentTime+e,r=1.1,a=this.ctx.createBufferSource();a.buffer=this.noiseBuffer,a.loop=!0;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.Q.value=.6,s.frequency.setValueAtTime(500,i),s.frequency.exponentialRampToValueAtTime(2600,i+r*.45),s.frequency.exponentialRampToValueAtTime(300,i+r);const o=this.ctx.createGain();o.gain.setValueAtTime(1e-4,i),o.gain.linearRampToValueAtTime(.2*t,i+.18),o.gain.setValueAtTime(.2*t,i+r*.6),o.gain.exponentialRampToValueAtTime(1e-4,i+r);const l=this.ctx.createStereoPanner();if(l.pan.setValueAtTime(-.85,i),l.pan.linearRampToValueAtTime(.85,i+r),a.connect(s),s.connect(o),o.connect(l),l.connect(this.master),this.reverbSend){const u=this.ctx.createGain();u.gain.value=.5,l.connect(u),u.connect(this.reverbSend)}a.start(i),a.stop(i+r+.05);const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(120,i),c.frequency.exponentialRampToValueAtTime(60,i+r),h.gain.setValueAtTime(1e-4,i),h.gain.linearRampToValueAtTime(.14*t,i+.25),h.gain.exponentialRampToValueAtTime(1e-4,i+r),c.connect(h),h.connect(this.master),c.start(i),c.stop(i+r+.05)}scheduleAmbient(){if(!this.ctx||!this.musicGain)return;const e=this.musicGain;window.clearTimeout(this.ambientTimer);const t=[523.25,587.33,659.25,783.99,880],i=()=>{if(this.ctx&&this.enabled){const r=t[Math.floor(Math.random()*t.length)]*(Math.random()<.3?.5:1),a=(Math.random()-.5)*1.2;this.tone(r,1.8,{type:"sine",gain:.5,attack:.02,target:e,pan:a,reverb:.8}),Math.random()<.35&&this.tone(r*1.25,1.6,{type:"sine",gain:.22,attack:.03,delay:.08,target:e,pan:a,reverb:.8})}this.ambientTimer=window.setTimeout(i,1400+Math.random()*1600)};this.ambientTimer=window.setTimeout(i,800)}}class i0{constructor(e,t){this.ctx=e,this.transition=t}current=null;go(e,t={}){t.wipe&&this.transition?(this.ctx.sound.pageTurn(),this.transition.wipe(()=>this.swap(e))):this.swap(e)}swap(e){this.current?.exit(),this.current=e,e.enter(this.ctx)}update(e){this.current?.update(e)}}async function Un(n,e,t,i=0){const r=e[e.length-1];let a=null,s;try{typeof n.animate=="function"&&(a=n.animate(e,{duration:t,delay:i,easing:"cubic-bezier(0.36, 0.02, 0.24, 1)",fill:"both"}),await Promise.race([a.finished.catch(()=>{}),new Promise(o=>{s=setTimeout(o,t+i+250)})]))}catch{}finally{s!==void 0&&clearTimeout(s);for(const[o,l]of Object.entries(r))o!=="offset"&&o!=="easing"&&o!=="composite"&&Reflect.set(n.style,o,l);a?.cancel()}}const nl=8,il="translate3d(0, 0, 0) rotateY(0deg) rotateZ(0deg)";class r0{container;sheet;shield;shadow;strips=[];reducedMotion=!1;constructor(e){this.container=this.element("page-turn"),this.container.setAttribute("aria-hidden","true"),this.container.style.setProperty("--turn-paper",e),this.shadow=this.element("page-turn-shadow"),this.shield=this.element("page-turn-shield"),this.sheet=this.element("page-turn-sheet");for(let t=0;t<nl;t++){const i=this.element("page-turn-strip");i.style.setProperty("--strip-index",String(t));const r=this.element("page-turn-face page-turn-front"),a=this.element("page-turn-face page-turn-back");if(t===1||t===5){const s=this.element("page-turn-ornament");s.textContent=t===1?"✧":"✦",r.appendChild(s)}i.append(r,a),this.sheet.appendChild(i),this.strips.push(i)}this.sheet.appendChild(this.element("page-turn-golden-edge")),this.container.append(this.shadow,this.shield,this.sheet),(document.getElementById("app")??document.body).appendChild(this.container),this.hide()}show(){this.reducedMotion=typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)").matches===!0,this.container.style.visibility="visible",this.container.style.pointerEvents="auto",this.shield.style.opacity="0",this.shadow.style.opacity="0",this.sheet.style.display=this.reducedMotion?"none":"grid"}async cover(e){this.reducedMotion?await Un(this.shield,[{opacity:0},{opacity:1}],Math.min(e,220)):await Promise.all([Un(this.sheet,[{transform:"translate3d(108%, 0, 0) rotateY(-18deg) rotateZ(2deg)"},{transform:il}],e),Un(this.shadow,[{opacity:0},{opacity:.48}],e),...this.strips.map((t,i)=>Un(t,[{transform:this.curl(i,-1)},{transform:"translateZ(0px) rotateY(0deg)"}],Math.max(0,e-i*12),i*12))]),this.shield.style.opacity="1"}async reveal(e){if(this.reducedMotion){await Un(this.shield,[{opacity:1},{opacity:0}],Math.min(e,220));return}this.shield.style.opacity="0",await Promise.all([Un(this.sheet,[{transform:il},{transform:"translate3d(-108%, 0, 0) rotateY(22deg) rotateZ(-2.5deg)"}],e),Un(this.shadow,[{opacity:.48},{opacity:0}],e),...this.strips.map((t,i)=>Un(t,[{transform:"translateZ(0px) rotateY(0deg)"},{transform:this.curl(i,1)}],Math.max(0,e-i*10),i*10))])}hide(){this.container.style.pointerEvents="none",this.container.style.visibility="hidden",this.shield.style.opacity="0"}curl(e,t){return`translateZ(${(Math.sin((e+.5)/nl*Math.PI)*76).toFixed(1)}px) rotateY(${t*(30-e*6)}deg)`}element(e){const t=document.createElement("div");return t.className=e,t}}class a0{view;requests=[];busy=!1;constructor(e="#f5eddb"){this.view=new r0(e)}wipe(e,t=850){this.requests.push({onCovered:e,duration:Number.isFinite(t)?Math.max(0,t):850}),this.busy||this.playRequests()}async playRequests(){for(this.busy=!0;this.requests.length>0;){const e=this.requests.shift();try{this.view.show(),await this.view.cover(e.duration),e.onCovered(),await this.view.reveal(e.duration)}catch(t){console.error("Paper Bloom could not finish a page turn.",t)}finally{this.view.hide()}}this.busy=!1}}const s0=new Fe("#efe9d8"),rl=72,al=1.6,o0=120;function l0(){const n=document.createElement("canvas");n.width=4,n.height=256;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,n.height);t.addColorStop(0,"#f7f2e4"),t.addColorStop(.55,"#efe9d8"),t.addColorStop(1,"#e4dcc6"),e.fillStyle=t,e.fillRect(0,0,n.width,n.height);const i=new oi(n);return i.colorSpace=wt,i}class c0{renderer;scene=new Rm;camera;interaction;hud;narrator;sound;scenes;guidance;clock=new Lm;viewportObserver;running=!1;constructor(e,t={},i,r,a){const s=typeof navigator<"u"&&/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);this.renderer=new Pm({canvas:e,antialias:!s,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,s?1.5:2)),this.renderer.outputColorSpace=wt,this.scene.background=l0(),this.scene.fog=new Os(s0,18,40),this.camera=new Wt(72,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(0,1.5,0),this.interaction=new Nm(this.camera,e),this.narrator=new Wm(void 0,new Km(t)),this.sound=new n0,this.hud=new km(this.narrator,new Wl(this.narrator,i)),r&&(this.guidance=new Jm({hints:r.hints,view:r.createView(this.camera),isNarrating:()=>this.narrator.isSpeaking,showHint:l=>this.hud.showTapHint(l.text,l.speaker)}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.guidance?.update(0,!1)}));const o={scene:this.scene,camera:this.camera,interaction:this.interaction,hud:this.hud,narrator:this.narrator,sound:this.sound,guidance:this.guidance,createExploration:a?l=>new Qm(this.interaction,new e0(()=>this.narrator.isSpeaking,c=>this.hud.showPlayfulLine(c.text,c.speaker)),a.createEffects(l,this.camera),new t0(this.camera,e),a.ground,()=>this.sound.pop()):void 0};this.scenes=new i0(o,new a0),this.viewportObserver=new ResizeObserver(this.resize),this.viewportObserver.observe(e),this.resize()}start(e){this.sound.resume(),this.scenes.go(e),!this.running&&(this.running=!0,this.clock.start(),this.renderer.setAnimationLoop(this.tick))}tick=()=>{const e=Math.min(this.clock.getDelta(),.1);this.narrator.update(),this.scenes.update(e);const t=!document.hidden&&!window.matchMedia("(orientation: portrait) and (max-width: 540px)").matches;this.guidance?.update(e,t),this.hud.update(e),this.renderer.render(this.scene,this.camera)};resize=()=>{const{width:e,height:t}=this.renderer.domElement.getBoundingClientRect();if(e<=0||t<=0)return;const i=e/t;if(this.camera.aspect=i,i<al){const r=Math.tan(yt.degToRad(rl)/2)*al,a=yt.radToDeg(2*Math.atan(r/i));this.camera.fov=Math.min(a,o0)}else this.camera.fov=rl;this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1)}}const h0=.85,u0=1.4,d0=4e3,f0=.6,sl=["#f16767","#ffb34e","#f9df63","#7cc77f","#6fc9ed","#9c85df","#e88ac6"];class p0{constructor(e,t,i=3,r=2){this.kind=e,this.positions=new Float32Array(t*3),this.origins=new Float32Array(t*3),this.velocities=new Float32Array(t*3),this.births=new Float32Array(t);const a=new Float32Array(t*3);for(let l=0;l<t;l++){const c=l*3;this.positions[c]=(Math.random()-.5)*i*1.5,this.positions[c+1]=-r*(.55+Math.random()*.2),this.positions[c+2]=(Math.random()-.5)*.5,this.velocities[c]=(Math.random()-.5)*1.4,this.velocities[c+1]=r*(.55+Math.random()*.45),this.velocities[c+2]=(Math.random()-.5)*.12,this.births[l]=l/t+(e==="star"?.08:0);const h=new Fe(e==="star"?"#fff0ab":sl[l%sl.length]);a.set([h.r,h.g,h.b],c)}this.origins.set(this.positions);const s=new ln;s.setDrawRange(0,0),s.setAttribute("position",new Ht(this.positions,3).setUsage(eh)),s.setAttribute("color",new Ht(a,3));const o=new Vl({map:this.createTexture(),size:e==="paper"?.2:.32,sizeAttenuation:!0,vertexColors:!0,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1,blending:e==="star"?za:ii});this.points=new Im(s,o),this.points.frustumCulled=!1,this.points.renderOrder=e==="paper"?10:11}points;velocities;positions;origins;births;disposed=!1;update(e,t){if(this.disposed)return;let i=0;for(let s=0;s<this.births.length;s++){const o=t-this.births[s];if(o<0)break;const l=s*3,c=s*2.4,h=(1-Math.exp(-.65*o))/.65,u=(Math.sin(o*4+c)-Math.sin(c))*.12,d=this.kind==="paper"?.65:.45;this.positions[l]=this.origins[l]+this.velocities[l]*h+u,this.positions[l+1]=this.origins[l+1]+this.velocities[l+1]*o-d*o*o/2,this.positions[l+2]=this.origins[l+2]+this.velocities[l+2]*o,i++}this.points.geometry.setDrawRange(0,i),this.points.geometry.getAttribute("position").needsUpdate=!0;const r=1-yt.smoothstep(t,2.5,4),a=this.kind==="star"?.9+Math.sin(t*7)*.1:1;this.points.material.opacity=r*a}dispose(){this.disposed||(this.disposed=!0,this.points.removeFromParent(),this.points.geometry.dispose(),this.points.material.map?.dispose(),this.points.material.dispose())}createTexture(){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d");this.kind==="star"?this.drawStar(t):this.drawPaper(t);const i=new oi(e);return i.colorSpace=wt,i}drawPaper(e){e.beginPath(),e.moveTo(19,8),e.lineTo(49,19),e.lineTo(42,56),e.lineTo(13,44),e.closePath(),e.fillStyle="#fffdf4",e.fill(),e.strokeStyle="#8c8270",e.lineWidth=2,e.stroke()}drawStar(e){const t=e.createRadialGradient(32,32,3,32,32,32);t.addColorStop(0,"rgba(255,255,255,0.6)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),e.beginPath();for(let i=0;i<10;i++){const r=-Math.PI/2+i*Math.PI/5,a=i%2===0?24:10,s=32+Math.cos(r)*a,o=32+Math.sin(r)*a;i===0?e.moveTo(s,o):e.lineTo(s,o)}e.closePath(),e.fillStyle="#ffffff",e.fill()}}const ol=4,Na=["#e96776","#f7ac58","#ffe276","#82cc91","#7bcbed","#a28cdd","#e8a1cf"];class m0{constructor(e,t=!1){this.root=e,this.reducedMotion=t}group=null;rings=[];ringGeometry=null;particles=[];heroine;heroineBaseY=0;elapsed=0;start(e,t){this.dispose(),this.elapsed=0,this.heroine=t,this.heroineBaseY=t?.root.position.y??0,this.group=new Jt,this.group.name="chapter-celebration",this.root.add(this.group),this.root.updateWorldMatrix(!0,!0),e.updateWorldMatrix(!0,!1),this.createRing(e,t),this.reducedMotion||this.createBurst(e)}update(e){if(!this.group)return;const t=Math.max(0,e);if(this.elapsed+=t,this.elapsed>=ol){this.dispose();return}for(const i of this.particles)i.update(t,this.elapsed);this.updateRing(),this.updateHeroine()}dispose(){this.heroine&&(this.heroine.root.position.y=this.heroineBaseY),this.heroine=void 0;for(const e of this.particles)e.dispose();this.particles.length=0;for(const e of this.rings)e.material.dispose();this.rings.length=0,this.ringGeometry?.dispose(),this.ringGeometry=null,this.group?.removeFromParent(),this.group=null}createBurst(e){const t=new Jt,i=new U(0,-.2,-4).applyMatrix4(e.matrixWorld);t.position.copy(this.root.worldToLocal(i));const r=this.root.getWorldQuaternion(new Qt),a=e.getWorldQuaternion(new Qt);t.quaternion.copy(r.invert()).multiply(a),this.group.add(t);const s=e,o=s.isPerspectiveCamera?Math.tan(yt.degToRad(s.fov)/2)*4:2.5,l=o*(s.isPerspectiveCamera?s.aspect:1.6);for(const[c,h]of[["paper",140],["star",60]]){const u=new p0(c,h,l,o);this.particles.push(u),t.add(u.points)}}createRing(e,t){const i=new Bs(.65,1,64,7);this.ringGeometry=i;const r=i.getAttribute("position"),a=new Float32Array(r.count*3);for(let l=0;l<r.count;l++){const c=Math.hypot(r.getX(l),r.getY(l)),h=Math.min(Na.length-1,Math.floor((c-.65)/.35*Na.length)),u=new Fe(Na[Math.max(0,h)]);a.set([u.r,u.g,u.b],l*3)}i.setAttribute("color",new Ht(a,3));const s=new nt({vertexColors:!0,transparent:!0,opacity:0,side:Xe,depthTest:!1,depthWrite:!1,fog:!1}),o=t?t.root.getWorldPosition(new U):new U(0,-1.4,-4).applyMatrix4(e.matrixWorld);this.root.worldToLocal(o);for(let l=0;l<(this.reducedMotion?1:2);l++){const c=new Be(i,l===0?s:s.clone());c.position.set(o.x,.045+l*.002,o.z),c.rotation.x=-Math.PI/2,c.renderOrder=4,this.rings.push(c),this.group.add(c)}this.updateRing()}updateRing(){for(const[e,t]of this.rings.entries()){if(this.reducedMotion){t.scale.setScalar(1.8),t.material.opacity=Math.sin(Math.PI*Math.min(1,this.elapsed/ol))*.38;continue}const i=Math.max(0,this.elapsed-e*.75),r=Math.min(1,i/3.2),a=1-Math.pow(1-r,3);t.scale.setScalar(.4+a*6.7);const s=yt.smoothstep(i,0,.35);t.material.opacity=s*(1-yt.smoothstep(i,1.5,3.3))*.65}}updateHeroine(){if(!this.heroine||this.reducedMotion)return;const e=1-yt.smoothstep(this.elapsed,1,3.1),t=Math.pow(Math.sin(this.elapsed*Math.PI*1.2),2);this.heroine.root.position.y=this.heroineBaseY+t*e*.32}}const Fa=n=>Math.min(255,Math.max(0,n));let ka=null;function Xl(){if(ka)return ka;const n=512,e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d");t.fillStyle="#f3eede",t.fillRect(0,0,n,n);const i=t.getImageData(0,0,n,n),r=i.data;for(let a=0;a<n;a++)for(let s=0;s<n;s++){const o=(a*n+s)*4,l=(Math.random()-.5)*14,c=Math.PI*2/n,h=Math.sin(s*c*3+Math.cos(a*c*2))*5+Math.sin(a*c*5+Math.cos(s*c*4))*4,u=l+h;r[o]=Fa(r[o]+u),r[o+1]=Fa(r[o+1]+u),r[o+2]=Fa(r[o+2]+u*.82)}t.putImageData(i,0,0),t.strokeStyle="rgba(120, 108, 82, 0.03)",t.lineWidth=1;for(let a=2;a<n;a+=6)t.beginPath(),t.moveTo(0,a+Math.sin(a)*.5),t.lineTo(n,a+Math.cos(a)*.5),t.stroke();t.fillStyle="rgba(90, 80, 60, 0.06)";for(let a=0;a<90;a++){const s=Math.random()*n,o=Math.random()*n,l=Math.random()*1.4+.3;t.beginPath(),t.arc(s,o,l,0,Math.PI*2),t.fill()}t.fillStyle="rgba(255, 252, 240, 0.12)";for(let a=0;a<60;a++){const s=Math.random()*n,o=Math.random()*n,l=Math.random()*1.1+.2;t.beginPath(),t.arc(s,o,l,0,Math.PI*2),t.fill()}return ka=e,e}function ut(n){return n.createPattern(Xl(),"repeat")}function cn(n=1){const e=new oi(Xl());return e.wrapS=e.wrapT=$r,e.repeat.set(n,n),e.colorSpace=wt,e.anisotropy=4,e}const ee="#211d18";function Gn(n,e,t,i,r,a=1.5){const s=i-e,o=r-t,l=Math.max(2,Math.round(Math.hypot(s,o)/24));n.beginPath(),n.moveTo(e,t);for(let c=1;c<=l;c++){const h=c/l,u=e+s*h+(Math.random()-.5)*a,d=t+o*h+(Math.random()-.5)*a;n.lineTo(u,d)}n.stroke()}const ji=["#e4572e","#f3a712","#f7e733","#3fa34d","#2b8ac9","#4b3f9e","#9b4dca"];let bs=-1;const ll=2.6;function g0(){bs=performance.now()/1e3}function _0(){if(bs<0)return-1;const n=performance.now()/1e3-bs;return n>ll?-1:n/ll}function ve(n,e){n.strokeStyle=ee,n.lineWidth=e}const Bi="#f3eede",Te={bark:"#7c5327",barkDark:"#5c3d1d",leaf:"#5c9a3c",leafLight:"#7cbb54",leafDark:"#3f7a2a",grass:"#79ad48",grassDark:"#5c8f34",stone:"#a9a49a",stoneDark:"#7f7a70",wall:"#e7d3a4",wallDark:"#cdb078",roof:"#b8543a",roofDark:"#8f3d2a",door:"#6f4a2f",mushCap:"#d6452f",mushStem:"#efe6cf"};function Dt(n,e){const t=/^#?([0-9a-f]{6})$/i.exec(n.trim());if(!t)return n;const i=parseInt(t[1],16),r=l=>Math.max(0,Math.min(255,Math.round(l+e*255))),a=r(i>>16&255),s=r(i>>8&255),o=r(i&255);return`rgb(${a}, ${s}, ${o})`}function st(n,e,t){if(n.save(),e(),t){n.fillStyle=t,n.fill();const i=ut(n);i&&(n.globalAlpha=.12,n.fillStyle=i,n.fill(),n.globalAlpha=1)}else{n.fillStyle=Bi,n.fill();const i=ut(n);i&&(n.fillStyle=i,n.fill())}n.restore()}function Ts(n,e,t,i,r,a,s){n.save(),e();const o=n.createLinearGradient(t,i,t,r);o.addColorStop(0,a),o.addColorStop(1,s),n.fillStyle=o,n.fill(),n.restore()}function ht(n,e,t,i,r,a,s){n.save(),e(),n.clip();const o=n.createRadialGradient(t-r*.35,i-r*.4,r*.1,t,i,r*1.25);o.addColorStop(0,a),o.addColorStop(1,s),n.fillStyle=o,n.fillRect(t-r*2,i-r*2,r*4,r*4),n.restore()}function kn(n,e,t,i,r,a){n.save(),n.beginPath();const s=9;for(let o=0;o<=s;o++){const l=o/s*Math.PI*2,c=i*(.78+.22*Math.sin(o*3.1+r)*Math.cos(o*1.7+r)),h=e+Math.cos(l)*c,u=t+Math.sin(l)*c;if(o===0)n.moveTo(h,u);else{const d=(o-.5)/s*Math.PI*2,m=i*(.95+.12*Math.sin(o*5.3+r));n.quadraticCurveTo(e+Math.cos(d)*m,t+Math.sin(d)*m,h,u)}}n.closePath(),n.fillStyle=a,n.fill(),n.restore()}function ql(n,e,t,i,r=0){const a=e/2,s=e*.14,o=t*.17,l=o+s*.95,c=o+s*1.35,h=t*.52,u=t*.87,d=e*.15,m=e*.1,g=e*.26,_=s*.33,p=_0();if(n.save(),p>=0){const L=1-(1-p)*(1-p);n.translate(a,o),n.rotate(L*Math.PI*6),n.translate(-a,-o)}const f=ji.length*2;for(let L=0;L<f;L++){const w=L/(f-1),A=w<.5?-1:1,k=Math.abs(w-.5)*2*s*2.6,T=Math.PI+w*Math.PI,y=a+Math.cos(T)*s*.95,P=o+Math.sin(T)*s*.95-s*.2,G=Math.sin(r*2.2+L*.7)*s*(.5+Math.abs(w-.5)),B=Math.cos(r*1.7+L*.5)*s*.16,$=a+A*(s*.5+k)+G,Y=o+s*(2.4+Math.abs(w-.5)*2.6)+B;n.strokeStyle=ji[L%ji.length],n.lineWidth=e*.045,n.lineCap="round",n.beginPath(),n.moveTo(y,P),n.bezierCurveTo(a+A*s*2.4+G*.6,o+s*.8,a+A*s*1.6+G,o+s*2+B,$,Y),n.stroke()}n.restore(),st(n,()=>{n.beginPath(),n.moveTo(a-_,l-s*.1),n.lineTo(a-_,c+s*.3),n.lineTo(a+_,c+s*.3),n.lineTo(a+_,l-s*.1),n.closePath()}),ve(n,e*.014),n.strokeStyle=ee,n.beginPath(),n.moveTo(a-_,l-s*.1),n.lineTo(a-_,c),n.moveTo(a+_,l-s*.1),n.lineTo(a+_,c),n.stroke();const b=()=>{n.beginPath(),n.moveTo(a-d,c+s*.15),n.quadraticCurveTo(a-_*1.4,c-s*.05,a-_,c-s*.15),n.quadraticCurveTo(a,c+s*.35,a+_,c-s*.15),n.quadraticCurveTo(a+_*1.4,c-s*.05,a+d,c+s*.15),n.quadraticCurveTo(a+m*1.15,(c+h)/2,a+m,h),n.quadraticCurveTo(a+g*.7,(h+u)/2,a+g,u);for(let L=0;L<5;L++){const w=a+g-L/5*g*2,A=a+g-(L+1)/5*g*2;n.quadraticCurveTo((w+A)/2,u+t*.03,A,u)}n.quadraticCurveTo(a-g*.7,(h+u)/2,a-m,h),n.quadraticCurveTo(a-m*1.15,(c+h)/2,a-d,c+s*.15),n.closePath()};st(n,b),ht(n,b,a-e*.05,t*.6,e*.3,"rgba(255,255,250,0.3)","rgba(40,35,28,0.16)"),ve(n,e*.016),n.strokeStyle=ee,b(),n.stroke(),n.lineWidth=e*.01,n.beginPath(),n.moveTo(a-m,h),n.quadraticCurveTo(a,h+t*.01,a+m,h);for(const L of[-.5,0,.5])n.moveTo(a+L*g*.9,h+t*.03),n.lineTo(a+L*g*1.2,u-t*.02);n.stroke(),ve(n,e*.03),n.lineCap="round";for(const L of[-1,1]){const w=Math.sin(r*1.4+(L>0?1:0))*t*.01;n.beginPath(),n.moveTo(a+L*d*.92,c+s*.25),n.quadraticCurveTo(a+L*(d+e*.05),t*.44,a+L*(m+e*.06),t*.58+w),n.stroke(),n.beginPath(),n.arc(a+L*(m+e*.06),t*.59+w,e*.028,0,Math.PI*2),n.fillStyle=Bi,n.fill(),n.stroke()}ve(n,e*.03);for(const L of[-1,1])n.beginPath(),n.moveTo(a+L*g*.35,u),n.lineTo(a+L*g*.35,t*.96),n.stroke(),n.beginPath(),n.moveTo(a+L*g*.35-e*.02,t*.96),n.quadraticCurveTo(a+L*g*.35+L*e*.06,t*.99,a+L*g*.35+L*e*.07,t*.975),n.lineTo(a+L*g*.35+e*.01,t*.955),n.closePath(),n.fillStyle=ee,n.fill();const S=()=>{n.beginPath(),n.ellipse(a,o,s*.92,s,0,0,Math.PI*2)};st(n,S),ht(n,S,a-s*.25,o-s*.2,s,"rgba(255,250,240,0.4)","rgba(60,45,30,0.14)"),ve(n,e*.016),n.strokeStyle=ee,S(),n.stroke(),n.save(),n.fillStyle="rgba(230,120,110,0.35)";for(const L of[-1,1])n.beginPath(),n.ellipse(a+L*s*.5,o+s*.28,s*.2,s*.14,0,0,Math.PI*2),n.fill();n.restore();const E=r%4<.15;n.strokeStyle=ee,n.fillStyle=ee;for(const L of[-1,1]){const w=a+L*s*.34,A=o-s*.02;E?(ve(n,e*.012),n.beginPath(),n.moveTo(w-s*.14,A),n.quadraticCurveTo(w,A+s*.08,w+s*.14,A),n.stroke()):(n.beginPath(),n.arc(w,A,s*.12,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.9)",n.beginPath(),n.arc(w-s*.04,A-s*.04,s*.04,0,Math.PI*2),n.fill(),n.fillStyle=ee)}ve(n,e*.01),n.beginPath(),n.moveTo(a,o+s*.1),n.lineTo(a-s*.06,o+s*.26),n.stroke(),ve(n,e*.014),n.beginPath(),n.arc(a,o+s*.32,s*.34,.15*Math.PI,.85*Math.PI),n.stroke()}function v0(n,e,t,i){const r=s=>{const o=s/e,l=Math.sin(Math.PI*Math.min(1,Math.max(0,o)))**1.4;return t-l*t*.82},a=()=>{n.beginPath(),n.moveTo(0,t+2),n.lineTo(0,r(0));for(let s=0;s<=e;s+=e/48)n.lineTo(s,r(s));n.lineTo(e,t+2),n.closePath()};st(n,a,i?Te.grass:null),i&&Ts(n,a,e/2,t*.1,t,Te.grass,Te.grassDark),ve(n,e*.005),n.strokeStyle=i?Te.grassDark:ee,n.beginPath(),n.moveTo(0,r(0));for(let s=0;s<=e;s+=e/48)n.lineTo(s,r(s));n.stroke(),n.strokeStyle=i?Te.grassDark:ee,n.lineWidth=e*.004;for(let s=2;s<46;s++){const o=s/48*e+Math.random()*(e/60),l=r(o);if(l>t*.94)continue;const c=t*.05+Math.random()*t*.04;Gn(n,o,l,o-c*.3,l-c,.5),Gn(n,o,l,o+c*.2,l-c*.8,.5)}}function M0(n,e,t,i){const r=e/2,a=e*.34,s=e*.12,o=e*.05,l=()=>{n.beginPath(),n.moveTo(r-a,t),n.quadraticCurveTo(r-a*.5,t*.55,r-s+o,t*.16),n.quadraticCurveTo(r-s*2.2+o,t*.08,r-s*2.6+o,t*-.02),n.lineTo(r-s*1.2+o,t*.12),n.quadraticCurveTo(r+o,t*.05,r+s*1.4+o,t*.1),n.lineTo(r+s*2.6+o,t*-.04),n.quadraticCurveTo(r+s*2+o,t*.09,r+s+o,t*.18),n.quadraticCurveTo(r+a*.5,t*.55,r+a,t),n.quadraticCurveTo(r+a*.5,t*.985,r+a*.28,t),n.quadraticCurveTo(r,t*.97,r-a*.28,t),n.quadraticCurveTo(r-a*.5,t*.985,r-a,t),n.closePath()};st(n,l,i?Te.bark:null),ht(n,l,r-a*.3,t*.5,t*.6,i?"rgba(255,240,210,0.35)":"rgba(255,250,235,0.0)",i?"rgba(60,38,16,0.5)":"rgba(45,38,28,0.32)"),ve(n,e*.02),n.strokeStyle=i?Te.barkDark:ee,l(),n.stroke(),n.lineWidth=e*.016,n.strokeStyle=i?"rgba(70,45,20,0.6)":"rgba(33,29,24,0.55)";for(const[c,h,u]of[[-.06,.85,.2],[.02,.9,.14],[.1,.8,.24]])n.beginPath(),n.moveTo(r+e*c,t*u),n.bezierCurveTo(r+e*(c+.04),t*(u+(h-u)*.4),r+e*(c-.02),t*(u+(h-u)*.7),r+e*(c+.02),t*h),n.stroke()}function y0(n,e,t,i){const r=e/2,a=t*.5,s=Math.min(e,t)*.46,o=[],l=7;for(let h=0;h<l;h++){const u=h/l*Math.PI*2-Math.PI/2;o.push({x:r+Math.cos(u)*s*.62,y:a+Math.sin(u)*s*.6,r:s*(.42+.08*Math.sin(h*2.7)),s:h*1.9})}o.push({x:r,y:a,r:s*.62,s:5.5});const c=i?Te.leaf:Bi;for(const h of o)kn(n,h.x,h.y,h.r,h.s,c);if(!i){const h=ut(n);if(h){n.save(),n.globalAlpha=.9;for(const u of o)kn(n,u.x,u.y,u.r,u.s,h);n.restore()}}if(i){for(const h of o){const u=(h.y-(a-s))/(2*s);kn(n,h.x,h.y,h.r*.86,h.s+1,u>.55?Te.leafDark:Te.leaf)}for(const h of o.slice(0,4))kn(n,h.x-h.r*.2,h.y-h.r*.25,h.r*.5,h.s+3,Te.leafLight)}ht(n,()=>{n.beginPath(),n.arc(r,a,s*1.02,0,Math.PI*2)},r,a,s,"rgba(255,255,240,0.18)",i?"rgba(30,60,20,0.35)":"rgba(40,35,28,0.28)"),ve(n,e*.01),n.strokeStyle=i?Te.leafDark:"rgba(33,29,24,0.7)";for(const h of o)n.beginPath(),n.arc(h.x,h.y,h.r*.92,Math.PI*.85,Math.PI*2.15),n.stroke();n.lineWidth=e*.006,n.strokeStyle=i?"rgba(35,70,25,0.5)":"rgba(33,29,24,0.4)";for(let h=0;h<18;h++){const u=Math.random()*Math.PI*2,d=Math.random()*s*.75,m=r+Math.cos(u)*d,g=a+Math.sin(u)*d;Gn(n,m,g,m+e*.025,g-t*.02,.4)}}function cl(n,e,t,i=!1,r){n.save(),i&&(n.translate(e,0),n.scale(-1,1));const a=t*.55,s=()=>{n.beginPath(),n.moveTo(0,a-t*.1),n.quadraticCurveTo(e*.4,t*.3,e*.72,t*.24),n.lineTo(e*.72,t*.34),n.quadraticCurveTo(e*.4,t*.42,0,a+t*.1),n.closePath()};st(n,s,r?Te.bark:null),ve(n,e*.01),n.strokeStyle=r?Te.barkDark:ee,s(),n.stroke(),n.beginPath(),n.moveTo(e*.44,t*.36),n.quadraticCurveTo(e*.5,t*.55,e*.58,t*.62),n.stroke();const o=[[.7,.24,.26,-.4],[.82,.34,.22,.1],[.66,.42,.2,.5],[.58,.6,.16,.7]];for(const[l,c,h,u]of o){const d=()=>{n.save(),n.translate(e*l,t*c),n.rotate(u),n.beginPath(),n.ellipse(0,0,t*h*1.5,t*h*.7,0,0,Math.PI*2),n.restore()};st(n,d,r?Te.leaf:null),ve(n,e*.008),n.strokeStyle=r?Te.leafDark:ee,d(),n.stroke(),n.beginPath(),n.moveTo(e*l-Math.cos(u)*t*h*1.3,t*c-Math.sin(u)*t*h*1.3),n.lineTo(e*l+Math.cos(u)*t*h*1.3,t*c+Math.sin(u)*t*h*1.3),n.stroke()}n.restore()}function S0(n,e,t,i){const r=t*.42;st(n,()=>{n.beginPath(),n.moveTo(e*.12,t*.96),n.lineTo(e*.12,r),n.lineTo(e*.88,r),n.lineTo(e*.88,t*.96),n.closePath()},i?Te.wall:null),i&&Ts(n,()=>{n.beginPath(),n.rect(e*.12,r,e*.76,t*.54)},e/2,r,t*.96,"rgba(255,248,225,0.25)","rgba(120,90,45,0.28)"),st(n,()=>{n.beginPath(),n.moveTo(e*.06,r+t*.02),n.lineTo(e*.5,t*.12),n.lineTo(e*.94,r+t*.02),n.closePath()},i?Te.roof:null),i&&Ts(n,()=>{n.beginPath(),n.moveTo(e*.06,r+t*.02),n.lineTo(e*.5,t*.12),n.lineTo(e*.94,r+t*.02),n.closePath()},e/2,t*.12,r,"rgba(255,235,220,0.2)","rgba(90,35,25,0.3)"),ve(n,e*.012),n.strokeStyle=i?Te.roofDark:ee,n.beginPath(),n.moveTo(e*.06,r+t*.02),n.lineTo(e*.5,t*.12),n.lineTo(e*.94,r+t*.02),n.stroke(),n.strokeStyle=i?Te.wallDark:ee,n.beginPath(),n.moveTo(e*.12,t*.96),n.lineTo(e*.12,r),n.lineTo(e*.88,r),n.lineTo(e*.88,t*.96),n.lineTo(e*.12,t*.96),n.stroke(),st(n,()=>{n.beginPath(),n.rect(e*.7,t*.2,e*.1,t*.16)},i?Te.roofDark:null),st(n,()=>{n.beginPath(),n.moveTo(e*.37,t*.96),n.lineTo(e*.37,t*.74),n.arc(e*.5,t*.74,e*.13,Math.PI,0),n.lineTo(e*.63,t*.96),n.closePath()},i?Te.door:null),ve(n,e*.012),n.strokeStyle=ee,n.beginPath(),n.moveTo(e*.37,t*.96),n.lineTo(e*.37,t*.74),n.arc(e*.5,t*.74,e*.13,Math.PI,0),n.lineTo(e*.63,t*.96),n.stroke();for(const a of[.28,.72])st(n,()=>{n.beginPath(),n.rect(e*a-e*.06,t*.58,e*.12,t*.12)},i?"#f6dd82":null),n.strokeStyle=ee,n.strokeRect(e*a-e*.06,t*.58,e*.12,t*.12),n.beginPath(),n.moveTo(e*a,t*.58),n.lineTo(e*a,t*.7),n.moveTo(e*a-e*.06,t*.64),n.lineTo(e*a+e*.06,t*.64),n.stroke()}function b0(n,e,t){st(n,()=>{n.beginPath(),n.rect(0,0,e,t)}),n.strokeStyle="rgba(33, 29, 24, 0.35)";for(let i=0;i<3;i++){const r=t*(.55+i*.14),a=t*(.12-i*.03);n.lineWidth=e*.002,n.beginPath(),n.moveTo(0,r);for(let s=0;s<=e;s+=e/40){const o=r-Math.sin(s/e*Math.PI*(2+i))*a;n.lineTo(s,o)}n.stroke()}n.strokeStyle="rgba(33, 29, 24, 0.3)",n.lineWidth=e*.002,n.beginPath(),n.arc(e*.78,t*.22,t*.09,0,Math.PI*2),n.stroke()}function T0(n,e,t,i){const r=[{x:e*.24,y:t*.68,r:t*.32,s:.4},{x:e*.76,y:t*.66,r:t*.36,s:1.7},{x:e*.5,y:t*.46,r:t*.42,s:3.1},{x:e*.42,y:t*.72,r:t*.3,s:4.6},{x:e*.62,y:t*.74,r:t*.26,s:5.9}],a=i?Te.leaf:Bi;for(const s of r)kn(n,s.x,s.y,s.r,s.s,a);if(!i){const s=ut(n);if(s)for(const o of r)kn(n,o.x,o.y,o.r,o.s,s)}if(i){for(const s of r)s.y>t*.6&&kn(n,s.x,s.y+s.r*.15,s.r*.82,s.s+2,Te.leafDark);kn(n,e*.44,t*.36,t*.2,2.2,Te.leafLight)}ht(n,()=>{n.beginPath(),n.ellipse(e*.5,t*.6,e*.5,t*.42,0,0,Math.PI*2)},e*.5,t*.6,t*.5,"rgba(255,255,240,0.16)",i?"rgba(25,55,18,0.34)":"rgba(40,35,28,0.26)"),ve(n,e*.01),n.strokeStyle=i?Te.leafDark:"rgba(33,29,24,0.7)";for(const s of r)n.beginPath(),n.arc(s.x,s.y,s.r*.9,Math.PI*.9,Math.PI*2.1),n.stroke();n.lineWidth=e*.008,n.strokeStyle=i?Te.leafDark:ee;for(let s=0;s<14;s++){const o=e*(.18+Math.random()*.64),l=t*(.3+Math.random()*.44);Gn(n,o,l,o+e*.02,l-t*.05,.5)}}function E0(n,e,t,i){const r=e/2;n.strokeStyle=i?Te.grassDark:ee,n.lineWidth=e*.14,n.lineCap="round",n.beginPath(),n.moveTo(r,t),n.quadraticCurveTo(r-e*.12,t*.5,r,t*.06),n.stroke();const a=(s,o,l)=>{const c=r,h=t*o,u=()=>{n.beginPath(),n.moveTo(c,h),n.quadraticCurveTo(c+s*e*l*.7,h-t*.02,c+s*e*l,h-t*l*.5),n.quadraticCurveTo(c+s*e*l*.5,h+t*.02,c,h+t*.01),n.closePath()};st(n,u,i?Te.grass:null),ve(n,e*.02),n.strokeStyle=i?Te.grassDark:ee,u(),n.stroke()};a(-1,.58,.42),a(1,.42,.4)}function x0(n,e,t,i,r=0){const a=e/2,s=t*.5,o=8,l=Math.min(e,t)*.16,c=Math.min(e,t)*.34,h=Math.min(e,t)*.13,u=()=>ut(n)??"#f3eede",d=(g,_,p)=>{const f=a+Math.cos(g)*l,b=s+Math.sin(g)*l,S=a+Math.cos(g)*(l+c*_),E=s+Math.sin(g)*(l+c*_),L=Math.cos(g+Math.PI/2),w=Math.sin(g+Math.PI/2),A=()=>{n.beginPath(),n.moveTo(f,b),n.quadraticCurveTo(f+L*h*_+(S-f)*.5,b+w*h*_+(E-b)*.5,S,E),n.quadraticCurveTo(f-L*h*_+(S-f)*.5,b-w*h*_+(E-b)*.5,f,b),n.closePath()};n.save(),A(),n.fillStyle=p,n.fill(),n.restore(),i&&ht(n,A,S,E,c*.6,"rgba(255,255,255,0.35)","rgba(0,0,0,0.14)"),ve(n,e*.012),n.strokeStyle=i?"rgba(90,50,20,0.35)":ee,A(),n.stroke()};for(let g=0;g<o;g++){const _=g/o*Math.PI*2+Math.PI/o;d(_,.82,i?Dt(i,-.12):u())}for(let g=0;g<o;g++){const _=g/o*Math.PI*2;d(_,1,i??u())}const m=()=>{n.beginPath(),n.arc(a,s,l*1.15,0,Math.PI*2)};n.save(),m(),n.fillStyle=i?"#f5b731":u(),n.fill(),n.restore(),i&&ht(n,m,a,s,l*1.15,"rgba(255,240,180,0.6)","rgba(150,90,10,0.4)"),ve(n,e*.014),n.strokeStyle=i?"#a9781a":ee,m(),n.stroke(),n.fillStyle=i?"#7c5510":ee;for(let g=0;g<12;g++){const _=g/12*Math.PI*2+r,p=l*(.3+.55*(g*7%5)/5);n.beginPath(),n.arc(a+Math.cos(_)*p,s+Math.sin(_)*p,e*.013,0,Math.PI*2),n.fill()}}function A0(n,e,t,i){st(n,()=>{n.beginPath(),n.moveTo(e*.08,t),n.lineTo(e*.02,t*.6),n.lineTo(e*.32,t*.24),n.lineTo(e*.7,t*.32),n.lineTo(e*.96,t*.66),n.lineTo(e*.9,t),n.closePath()},i?Te.stone:null),i&&(n.save(),n.beginPath(),n.moveTo(e*.7,t*.32),n.lineTo(e*.96,t*.66),n.lineTo(e*.9,t),n.lineTo(e*.4,t),n.closePath(),n.fillStyle=Te.stoneDark,n.globalAlpha=.5,n.fill(),n.restore()),ve(n,e*.02),n.strokeStyle=i?Te.stoneDark:ee,n.beginPath(),n.moveTo(e*.02,t*.6),n.lineTo(e*.32,t*.24),n.lineTo(e*.7,t*.32),n.lineTo(e*.96,t*.66),n.stroke(),n.lineWidth=e*.012,Gn(n,e*.32,t*.24,e*.4,t*.7,.6),Gn(n,e*.7,t*.32,e*.62,t*.72,.6)}function w0(n,e,t,i){for(let a=0;a<9;a++){const s=a/8,o=e*(.34+s*.32)+(Math.random()-.5)*e*.04,l=s<.5?-1:1,c=Math.abs(s-.5)*2,h=o+l*e*(.08+c*.32)+(Math.random()-.5)*e*.06,u=t*(.08+Math.random()*.22),d=e*(.05-c*.015),m=()=>{n.beginPath(),n.moveTo(o-d,t),n.quadraticCurveTo((o+h)/2-l*e*.02,t*.5,h,u),n.quadraticCurveTo((o+h)/2+l*e*.02,t*.55,o+d,t),n.closePath()},g=i?a%2===0?Te.grass:Te.grassDark:Bi;n.save(),m(),n.fillStyle=g,n.fill(),n.restore(),ve(n,e*.008),n.strokeStyle=i?Te.grassDark:ee,n.beginPath(),n.moveTo(o,t),n.quadraticCurveTo((o+h)/2,t*.5,h,u),n.stroke()}}function C0(n,e,t,i){const r=e/2,a=()=>{n.beginPath(),n.moveTo(r-e*.15,t*.98),n.quadraticCurveTo(r-e*.2,t*.9,r-e*.13,t*.78),n.quadraticCurveTo(r-e*.1,t*.62,r-e*.12,t*.48),n.lineTo(r+e*.12,t*.48),n.quadraticCurveTo(r+e*.1,t*.62,r+e*.13,t*.78),n.quadraticCurveTo(r+e*.2,t*.9,r+e*.15,t*.98),n.quadraticCurveTo(r,t*1.02,r-e*.15,t*.98),n.closePath()};st(n,a,i?Te.mushStem:null),ht(n,a,r-e*.04,t*.72,e*.2,"rgba(255,255,250,0.4)",i?"rgba(150,135,95,0.35)":"rgba(40,35,28,0.22)"),ve(n,e*.018),n.strokeStyle=i?"#c2b699":ee,a(),n.stroke(),n.beginPath(),n.moveTo(r-e*.14,t*.52),n.quadraticCurveTo(r,t*.58,r+e*.14,t*.52),n.stroke();const s=()=>{n.beginPath(),n.moveTo(r-e*.44,t*.5),n.bezierCurveTo(r-e*.46,t*.16,r+e*.46,t*.16,r+e*.44,t*.5),n.quadraticCurveTo(r,t*.6,r-e*.44,t*.5),n.closePath()};st(n,s,i?Te.mushCap:null),ht(n,s,r-e*.1,t*.32,e*.44,i?"rgba(255,215,195,0.5)":"rgba(255,250,240,0.0)",i?"rgba(110,20,12,0.4)":"rgba(40,35,28,0.28)"),ve(n,e*.02),n.strokeStyle=i?Dt(Te.mushCap,-.18):ee,s(),n.stroke(),n.fillStyle=i?"#fbf3e0":"rgba(33,29,24,0.85)";for(const[o,l,c]of[[.33,.34,.06],[.58,.27,.05],[.5,.42,.055],[.72,.4,.04],[.42,.24,.035]])n.beginPath(),n.ellipse(e*o,t*l,e*c,e*c*.85,0,0,Math.PI*2),n.fill()}function Yl(n,e,t,i,r=0){const a=e/2,s=()=>ut(n)??"#f3eede",o=i??s(),l=i?"#e7efb0":s(),c=1+Math.sin(r*3)*.03,h=(p,f,b,S,E)=>{n.beginPath(),n.ellipse(p,f,b,S,0,0,Math.PI*2),n.fillStyle=E,n.fill()},u=(p,f,b,S,E)=>{ve(n,E),n.beginPath(),n.ellipse(p,f,b,S,0,0,Math.PI*2),n.stroke()};for(const p of[-1,1]){h(a+p*e*.33,t*.82,e*.2,t*.15,o),u(a+p*e*.33,t*.82,e*.2,t*.15,e*.012),ve(n,e*.014);for(let f=-1;f<=1;f++){const b=a+p*e*.33+f*e*.07;Gn(n,b,t*.9,b,t*.98,.5)}}const d=t*.62;if(h(a,d,e*.42,t*.34*c,o),ht(n,()=>{n.beginPath(),n.ellipse(a,d,e*.42,t*.34*c,0,0,Math.PI*2)},a-e*.1,d-t*.06,e*.42,"rgba(255,255,235,0.35)",i?"rgba(20,70,25,0.4)":"rgba(40,35,28,0.22)"),h(a,t*.72,e*.24,t*.2,l),u(a,d,e*.42,t*.34*c,e*.014),ve(n,e*.01),n.beginPath(),n.ellipse(a,t*.72,e*.24,t*.2,0,Math.PI*.15,Math.PI*.85),n.stroke(),i){n.fillStyle="rgba(20,80,30,0.35)";for(const[p,f]of[[.3,.55],[.68,.5],[.72,.68],[.28,.7]])n.beginPath(),n.ellipse(e*p,t*f,e*.035,t*.03,0,0,Math.PI*2),n.fill()}ve(n,e*.016),n.beginPath(),n.arc(a,t*.56,e*.24,.12*Math.PI,.88*Math.PI),n.stroke();for(const p of[-1,1])n.beginPath(),n.arc(a+p*e*.235,t*.575,e*.03,p<0?Math.PI*.7:Math.PI*.3,p<0?Math.PI*1.1:-Math.PI*.1,p<0),n.stroke();const m=t*.32,g=e*.17,_=r%3<.16;for(const p of[-1,1]){const f=a+p*e*.21;h(f,m,g,g,o),ht(n,()=>{n.beginPath(),n.ellipse(f,m,g,g,0,0,Math.PI*2)},f-g*.3,m-g*.3,g,"rgba(255,255,235,0.4)",i?"rgba(20,70,25,0.35)":"rgba(40,35,28,0.2)"),u(f,m,g,g,e*.012),_?(ve(n,e*.016),n.beginPath(),n.moveTo(f-g*.6,m),n.lineTo(f+g*.6,m),n.stroke()):(h(f,m,g*.6,g*.6,"#f7f3e6"),u(f,m,g*.6,g*.6,e*.008),n.fillStyle=ee,n.beginPath(),n.arc(f,m+g*.06,g*.24,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.9)",n.beginPath(),n.arc(f-g*.08,m-g*.02,g*.08,0,Math.PI*2),n.fill())}n.fillStyle=ee;for(const p of[-1,1])n.beginPath(),n.arc(a+p*e*.05,t*.46,e*.012,0,Math.PI*2),n.fill()}function P0(n,e,t,i){const r=e/2,a=t*.58,s=Math.min(e,t)*.46,o=.35,l=()=>{n.beginPath(),n.arc(r,a,s,o,Math.PI*2-o),n.lineTo(r,a),n.closePath()};st(n,l,i?Te.leaf:null),ht(n,l,r-s*.2,a-s*.2,s,"rgba(255,255,235,0.3)",i?"rgba(20,70,25,0.35)":"rgba(40,35,28,0.2)"),ve(n,e*.01),n.strokeStyle=i?Te.leafDark:ee,n.beginPath(),n.arc(r,a,s,o,Math.PI*2-o),n.stroke(),n.lineWidth=e*.005,n.strokeStyle=i?"rgba(30,80,25,0.5)":"rgba(33,29,24,0.5)";for(let c=0;c<6;c++){const h=-Math.PI*.4+c/5*Math.PI*1.6;Gn(n,r,a,r+Math.cos(h)*s*.88,a+Math.sin(h)*s*.88,.6)}}function R0(n,e,t,i){const r=e/2,a=()=>{n.beginPath(),n.moveTo(r-e*.06,t),n.quadraticCurveTo(r-e*.02,t*.5,r-e*.05,t*.1),n.lineTo(r+e*.05,t*.1),n.quadraticCurveTo(r+e*.02,t*.5,r+e*.06,t),n.closePath()};st(n,a,i?Te.grassDark:null),ve(n,e*.012),n.strokeStyle=i?Dt(Te.grassDark,-.1):ee,a(),n.stroke();for(const[o,l]of[[-1,.55],[1,.68]]){const c=()=>{n.beginPath(),n.moveTo(r,t*l),n.quadraticCurveTo(r+o*e*.5,t*(l-.2),r+o*e*.62,t*(l-.45)),n.quadraticCurveTo(r+o*e*.36,t*(l-.12),r,t*(l+.02)),n.closePath()};st(n,c,i?Te.grass:null),ve(n,e*.01),n.strokeStyle=i?Te.grassDark:ee,c(),n.stroke()}const s=()=>{n.beginPath(),n.ellipse(r,t*.2,e*.13,t*.17,0,0,Math.PI*2)};st(n,s,i?"#8a5a2b":null),ht(n,s,r-e*.04,t*.14,e*.15,"rgba(255,230,190,0.35)",i?"rgba(60,35,12,0.4)":"rgba(40,35,28,0.22)"),ve(n,e*.014),n.strokeStyle=i?"#5e3d1c":ee,s(),n.stroke(),n.beginPath(),n.moveTo(r,t*.03),n.lineTo(r,t*.1),n.stroke()}function I0(n,e,t,i){const r=e/2,a=t/2,s=()=>{n.beginPath(),n.ellipse(r,a,e*.46,t*.44,0,0,Math.PI*2)};if(n.save(),s(),i){const o=n.createRadialGradient(r-e*.1,a-t*.1,e*.05,r,a,e*.5);o.addColorStop(0,"#8fd0e6"),o.addColorStop(1,"#3f8fc0"),n.fillStyle=o}else n.fillStyle=Bi;if(n.fill(),!i){const o=ut(n);o&&(n.fillStyle=o,n.fill())}n.restore(),ve(n,e*.008),n.strokeStyle=i?"#2f7ba8":ee,s(),n.stroke(),n.lineWidth=e*.004,n.strokeStyle=i?"rgba(255,255,255,0.5)":"rgba(33, 29, 24, 0.4)";for(let o=1;o<=4;o++){const l=o/5;n.beginPath(),n.ellipse(r,a,e*.46*l,t*.44*l,0,.15*Math.PI,.85*Math.PI),n.stroke()}}function $l(n,e,t,i,r=0){const a=e/2,s=t*.5+Math.sin(r*2.5)*t*.06,o=.5+.5*Math.abs(Math.sin(r*7)),l=i??ut(n)??"#f3eede",c=(h,u,d,m,g,_)=>{if(n.save(),n.translate(h,u),n.rotate(g),n.beginPath(),n.ellipse(0,0,d,m,0,0,Math.PI*2),n.fillStyle=l,n.fill(),i){const p=n.createLinearGradient(0,-m,0,m);p.addColorStop(0,"rgba(255,255,255,0.35)"),p.addColorStop(1,"rgba(0,0,0,0.18)"),n.fillStyle=p,n.fill(),n.strokeStyle="rgba(33,29,24,0.5)",n.lineWidth=e*.02,n.beginPath(),n.ellipse(0,0,d*.72,m*.72,0,0,Math.PI*2),n.stroke()}ve(n,e*.014),n.strokeStyle=ee,n.beginPath(),n.ellipse(0,0,d,m,0,0,Math.PI*2),n.stroke(),_&&(n.fillStyle=i?"rgba(255,250,235,0.85)":"rgba(33, 29, 24, 0.4)",n.beginPath(),n.ellipse(0,m*.25,d*.32,m*.24,0,0,Math.PI*2),n.fill(),n.fillStyle=i?"rgba(33,29,24,0.5)":"rgba(33, 29, 24, 0.6)",n.beginPath(),n.ellipse(0,m*.25,d*.14,m*.11,0,0,Math.PI*2),n.fill()),n.restore()};for(const h of[-1,1])c(a+h*(e*.04+e*.24*o),s-t*.08,e*.22*o,t*.2,h*.35,!0),c(a+h*(e*.03+e*.18*o),s+t*.16,e*.16*o,t*.15,h*-.3,!1);n.fillStyle=ee,n.beginPath(),n.ellipse(a,s,e*.035,t*.26,0,0,Math.PI*2),n.fill(),ve(n,e*.01);for(const h of[-1,1])n.beginPath(),n.moveTo(a,s-t*.24),n.quadraticCurveTo(a+h*e*.1,s-t*.36,a+h*e*.14,s-t*.34),n.stroke(),n.fillStyle=ee,n.beginPath(),n.arc(a+h*e*.14,s-t*.34,e*.02,0,Math.PI*2),n.fill()}function L0(n,e,t,i){const r=e/2,a=t*.6,s=Math.min(e,t)*.36,o=i??ut(n)??"#f3eede",l=()=>{n.beginPath(),n.moveTo(r,a-s*.75),n.bezierCurveTo(r-s*.6,a-s*1.15,r-s*1.15,a-s*.35,r-s*1.02,a+s*.2),n.bezierCurveTo(r-s*.95,a+s*.9,r-s*.4,a+s*1.15,r,a+s*.95),n.bezierCurveTo(r+s*.4,a+s*1.15,r+s*.95,a+s*.9,r+s*1.02,a+s*.2),n.bezierCurveTo(r+s*1.15,a-s*.35,r+s*.6,a-s*1.15,r,a-s*.75),n.closePath()};n.save(),l(),n.fillStyle=o,n.fill(),n.restore(),ht(n,l,r-s*.35,a-s*.35,s*1.1,"rgba(255,255,240,0.45)",i?"rgba(110,10,15,0.4)":"rgba(40,35,28,0.2)"),ve(n,e*.018),n.strokeStyle=i?"#8f2e28":ee,l(),n.stroke(),n.lineWidth=e*.012,n.beginPath(),n.arc(r,a-s*.7,s*.24,.2*Math.PI,.8*Math.PI),n.stroke(),n.strokeStyle=i?Te.barkDark:ee,n.lineWidth=e*.02,n.beginPath(),n.moveTo(r,a-s*.8),n.quadraticCurveTo(r+e*.03,a-s*1.15,r+e*.01,a-s*1.32),n.stroke();const c=()=>{n.beginPath(),n.ellipse(r+e*.11,a-s*1.08,e*.1,t*.05,-.5,0,Math.PI*2)};n.save(),c(),n.fillStyle=i?Te.leaf:ut(n)??"#f3eede",n.fill(),n.restore(),ve(n,e*.012),n.strokeStyle=i?Te.leafDark:ee,c(),n.stroke(),i&&(n.strokeStyle="rgba(255, 255, 255, 0.6)",n.lineWidth=e*.03,n.beginPath(),n.arc(r-s*.38,a-s*.2,s*.42,-.95*Math.PI,-.4*Math.PI),n.stroke())}function Kl(n,e,t,i,r=0){const a=e/2,s=()=>ut(n)??"#f3eede",o=i??s(),l=i?Dt(i,-.16):"rgba(40,35,28,0.25)",c=i?"#f7f3e6":s(),h=(b,S)=>{S(),n.fillStyle=b,n.fill()},u=(b,S)=>{ve(n,b),n.strokeStyle=i?Dt(i,-.28):ee,S(),n.stroke()},d=()=>{n.beginPath(),n.moveTo(a+e*.14,t*.68),n.bezierCurveTo(a+e*.5,t*.5,a+e*.56,t*.9,a+e*.34,t*.96),n.bezierCurveTo(a+e*.2,t*.99,a+e*.1,t*.88,a+e*.14,t*.68),n.closePath()};h(o,d),ht(n,d,a+e*.28,t*.62,e*.28,"rgba(255,240,215,0.35)",i?"rgba(120,55,10,0.4)":"rgba(40,35,28,0.22)"),h(c,()=>{n.beginPath(),n.ellipse(a+e*.4,t*.9,e*.1,t*.09,-.7,0,Math.PI*2)}),u(e*.014,d);const m=()=>{n.beginPath(),n.ellipse(a-e*.02,t*.76,e*.24,t*.2,0,0,Math.PI*2)};h(o,m),ht(n,m,a-e*.1,t*.68,e*.24,"rgba(255,240,215,0.35)",i?"rgba(120,55,10,0.38)":"rgba(40,35,28,0.2)"),u(e*.014,m);for(const b of[-1,1]){const S=()=>{n.beginPath(),n.moveTo(a+b*e*.13,t*.82),n.lineTo(a+b*e*.16,t*.97),n.lineTo(a+b*e*.05,t*.97),n.lineTo(a+b*e*.03,t*.84),n.closePath()};h(o,S),u(e*.012,S),n.fillStyle=l,n.beginPath(),n.ellipse(a+b*e*.1,t*.965,e*.06,t*.02,0,0,Math.PI*2),n.fill()}h(c,()=>{n.beginPath(),n.moveTo(a-e*.02,t*.62),n.quadraticCurveTo(a+e*.12,t*.78,a-e*.02,t*.92),n.quadraticCurveTo(a-e*.16,t*.78,a-e*.02,t*.62),n.closePath()});const g=t*.42,_=e*.25;for(const b of[-1,1]){const S=()=>{n.beginPath(),n.moveTo(a+b*_*.7,g-_*.35),n.lineTo(a+b*_*1.15,g-_*1.45),n.lineTo(a+b*_*.1,g-_*.75),n.closePath()};h(o,S),u(e*.012,S),n.fillStyle=l,n.beginPath(),n.moveTo(a+b*_*.62,g-_*.45),n.lineTo(a+b*_*.92,g-_*1.2),n.lineTo(a+b*_*.28,g-_*.72),n.closePath(),n.fill()}const p=()=>{n.beginPath(),n.moveTo(a-_,g-_*.35),n.lineTo(a-_*1.08,g+_*.35),n.lineTo(a-_*.7,g+_*.55),n.quadraticCurveTo(a-_*.4,g+_*1.05,a,g+_*1.2),n.quadraticCurveTo(a+_*.4,g+_*1.05,a+_*.7,g+_*.55),n.lineTo(a+_*1.08,g+_*.35),n.lineTo(a+_,g-_*.35),n.quadraticCurveTo(a,g-_*.8,a-_,g-_*.35),n.closePath()};h(o,p),ht(n,p,a-_*.3,g-_*.3,_*1.1,"rgba(255,240,215,0.4)",i?"rgba(120,55,10,0.3)":"rgba(40,35,28,0.18)"),u(e*.014,p),h(c,()=>{n.beginPath(),n.moveTo(a-_*.5,g+_*.1),n.quadraticCurveTo(a-_*.2,g+_*.35,a,g+_*1.15),n.quadraticCurveTo(a+_*.2,g+_*.35,a+_*.5,g+_*.1),n.quadraticCurveTo(a,g+_*.4,a-_*.5,g+_*.1),n.closePath()});const f=r%3.2<.14;for(const b of[-1,1]){const S=a+b*_*.44,E=g;f?(ve(n,e*.014),n.strokeStyle=ee,n.beginPath(),n.moveTo(S-e*.035,E),n.quadraticCurveTo(S,E+e*.02,S+e*.035,E),n.stroke()):(n.beginPath(),n.ellipse(S,E,e*.05,e*.035,b*.3,0,Math.PI*2),n.fillStyle=i?"#e8a02a":"#f7f3e6",n.fill(),ve(n,e*.01),n.strokeStyle=ee,n.stroke(),n.fillStyle=ee,n.beginPath(),n.arc(S,E,e*.022,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.9)",n.beginPath(),n.arc(S-e*.008,E-e*.008,e*.008,0,Math.PI*2),n.fill())}n.fillStyle=ee,n.beginPath(),n.moveTo(a-e*.04,g+_*.95),n.quadraticCurveTo(a,g+_*1.15,a+e*.04,g+_*.95),n.quadraticCurveTo(a,g+_*1.02,a-e*.04,g+_*.95),n.fill(),ve(n,e*.01),n.strokeStyle=ee,n.beginPath(),n.moveTo(a,g+_*1.1),n.lineTo(a,g+_*1.25),n.moveTo(a,g+_*1.25),n.quadraticCurveTo(a-e*.06,g+_*1.35,a-e*.09,g+_*1.22),n.moveTo(a,g+_*1.25),n.quadraticCurveTo(a+e*.06,g+_*1.35,a+e*.09,g+_*1.22),n.stroke()}function Zl(n,e,t,i,r=0){const a=e/2,s=Math.sin(r*2.2)*t*.02,o=t*.56+s,l=Math.min(e,t)*.3,c=()=>ut(n)??"#f3eede",h=i??c(),u=i?"#f6efdc":c(),d=()=>{n.beginPath(),n.moveTo(a+l*.6,o+l*.1),n.lineTo(a+l*1.7,o-l*.1),n.lineTo(a+l*1.7,o+l*.5),n.closePath()};st(n,d,i?Dt(i,-.1):null),ve(n,e*.012),n.strokeStyle=i?Dt(i,-.3):ee,d(),n.stroke();const m=()=>{n.beginPath(),n.ellipse(a,o,l*.95,l,0,0,Math.PI*2)};n.save(),m(),n.fillStyle=h,n.fill(),n.restore(),ht(n,m,a-l*.3,o-l*.35,l,"rgba(255,255,240,0.4)",i?"rgba(20,40,80,0.35)":"rgba(40,35,28,0.2)"),n.save(),n.beginPath(),n.ellipse(a-l*.2,o+l*.25,l*.6,l*.62,0,0,Math.PI*2),n.fillStyle=u,n.fill(),n.restore(),i&&(n.save(),n.beginPath(),n.ellipse(a-l*.28,o-l*.05,l*.4,l*.45,0,0,Math.PI*2),n.fillStyle="#e2703a",n.globalAlpha=.85,n.fill(),n.restore()),ve(n,e*.014),n.strokeStyle=i?Dt(i,-.3):ee,m(),n.stroke();const g=()=>{n.beginPath(),n.moveTo(a+l*.1,o-l*.2),n.quadraticCurveTo(a+l*.9,o-l*.1,a+l*.7,o+l*.55),n.quadraticCurveTo(a+l*.2,o+l*.4,a+l*.1,o-l*.2),n.closePath()};st(n,g,i?Dt(i,-.12):null),ve(n,e*.012),n.strokeStyle=i?Dt(i,-.3):ee,g(),n.stroke();for(let E=0;E<3;E++)n.beginPath(),n.moveTo(a+l*(.25+E*.15),o+l*.1),n.lineTo(a+l*(.5+E*.14),o+l*.42),n.stroke();const _=l*.62,p=a-l*.55,f=o-l*.7,b=()=>{n.beginPath(),n.arc(p,f,_,0,Math.PI*2)};n.save(),b(),n.fillStyle=h,n.fill(),n.restore(),ht(n,b,p-_*.3,f-_*.3,_,"rgba(255,255,240,0.45)",i?"rgba(20,40,80,0.3)":"rgba(40,35,28,0.18)"),ve(n,e*.014),n.strokeStyle=i?Dt(i,-.3):ee,b(),n.stroke(),n.beginPath(),n.moveTo(p-_*.9,f+_*.05),n.lineTo(p-_*1.5,f+_*.22),n.lineTo(p-_*.85,f+_*.42),n.closePath(),n.fillStyle=i?"#f0a92e":c(),n.fill(),ve(n,e*.01),n.strokeStyle=ee,n.stroke(),r%3<.14?(ve(n,e*.012),n.beginPath(),n.moveTo(p-_*.35,f-_*.05),n.lineTo(p-_*.05,f-_*.05),n.stroke()):(n.fillStyle=ee,n.beginPath(),n.arc(p-_*.2,f-_*.08,_*.16,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.9)",n.beginPath(),n.arc(p-_*.25,f-_*.13,_*.05,0,Math.PI*2),n.fill()),ve(n,e*.012),n.strokeStyle=ee;for(const E of[-1,1])n.beginPath(),n.moveTo(a+E*l*.15,o+l*.95),n.lineTo(a+E*l*.15,o+l*1.25),n.moveTo(a+E*l*.15,o+l*1.25),n.lineTo(a+E*l*.15-e*.03,o+l*1.32),n.moveTo(a+E*l*.15,o+l*1.25),n.lineTo(a+E*l*.15+e*.03,o+l*1.32),n.stroke()}function jl(n,e,t,i,r=0){const a=e/2,s=()=>ut(n)??"#f3eede",o=i??s(),l=Math.sin(r*1.6)*.12;for(const g of[-1,1]){const _=a+g*e*.1,p=()=>{n.save(),n.translate(_,t*.34),n.rotate(g*(.12+l)),n.beginPath(),n.ellipse(0,-t*.16,e*.07,t*.2,0,0,Math.PI*2),n.restore()};n.save(),p(),n.fillStyle=o,n.fill(),n.restore(),n.save(),n.translate(_,t*.34),n.rotate(g*(.12+l)),n.beginPath(),n.ellipse(0,-t*.16,e*.035,t*.13,0,0,Math.PI*2),n.fillStyle=i?"#e7a6a6":ut(n)??"#f3eede",n.fill(),n.restore(),ve(n,e*.012),n.strokeStyle=i?Dt(i,-.25):ee,p(),n.stroke()}const c=()=>{n.beginPath(),n.ellipse(a,t*.72,e*.24,t*.24,0,0,Math.PI*2)};n.save(),c(),n.fillStyle=o,n.fill(),n.restore(),ht(n,c,a-e*.08,t*.62,e*.26,"rgba(255,255,245,0.4)",i?"rgba(90,70,45,0.32)":"rgba(40,35,28,0.2)"),ve(n,e*.014),n.strokeStyle=i?Dt(i,-.25):ee,c(),n.stroke(),n.save(),n.beginPath(),n.ellipse(a,t*.78,e*.13,t*.15,0,0,Math.PI*2),n.fillStyle=i?"#f4ecd9":s(),n.fill(),n.restore();for(const g of[-1,1])n.beginPath(),n.ellipse(a+g*e*.09,t*.9,e*.06,t*.05,0,0,Math.PI*2),n.fillStyle=i?"#f4ecd9":s(),n.fill(),ve(n,e*.01),n.strokeStyle=i?Dt(i,-.25):ee,n.stroke();const h=e*.17,u=t*.44,d=()=>{n.beginPath(),n.ellipse(a,u,h,h*1.05,0,0,Math.PI*2)};n.save(),d(),n.fillStyle=o,n.fill(),n.restore(),ht(n,d,a-h*.3,u-h*.3,h,"rgba(255,255,245,0.45)",i?"rgba(90,70,45,0.28)":"rgba(40,35,28,0.18)"),ve(n,e*.014),n.strokeStyle=i?Dt(i,-.25):ee,d(),n.stroke(),n.save(),n.fillStyle="rgba(230,150,140,0.3)";for(const g of[-1,1])n.beginPath(),n.ellipse(a+g*h*.55,u+h*.35,h*.22,h*.16,0,0,Math.PI*2),n.fill();n.restore();const m=r%3.4<.14;n.fillStyle=ee;for(const g of[-1,1]){const _=a+g*h*.45,p=u-h*.1;m?(ve(n,e*.012),n.strokeStyle=ee,n.beginPath(),n.moveTo(_-e*.03,p),n.quadraticCurveTo(_,p+e*.015,_+e*.03,p),n.stroke()):(n.beginPath(),n.arc(_,p,h*.16,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.9)",n.beginPath(),n.arc(_-h*.05,p-h*.05,h*.05,0,Math.PI*2),n.fill(),n.fillStyle=ee)}n.fillStyle=i?"#d98a8a":ee,n.beginPath(),n.moveTo(a-h*.1,u+h*.35),n.lineTo(a+h*.1,u+h*.35),n.lineTo(a,u+h*.5),n.closePath(),n.fill(),ve(n,e*.008),n.strokeStyle=ee,n.beginPath(),n.moveTo(a,u+h*.5),n.lineTo(a,u+h*.68),n.stroke();for(const g of[-1,1])for(const _ of[-.04,.03])n.beginPath(),n.moveTo(a+g*h*.15,u+h*.5),n.quadraticCurveTo(a+g*h*.9,u+h*(.5+_)-e*.02,a+g*h*1.5,u+h*(.5+_*3)),n.stroke()}function D0(n,e,t,i,r=0){const a=e/2,s=t/2,o=Math.min(e,t)*.28;n.strokeStyle=i?"#f3a712":ee,n.lineWidth=e*.022,n.lineCap="round";const l=12;for(let h=0;h<l;h++){const u=r*.4+h/l*Math.PI*2,d=1+Math.sin(r*2+h)*.06;n.beginPath(),n.moveTo(a+Math.cos(u)*o*1.28,s+Math.sin(u)*o*1.28),n.lineTo(a+Math.cos(u)*o*1.75*d,s+Math.sin(u)*o*1.75*d),n.stroke()}const c=()=>{n.beginPath(),n.arc(a,s,o,0,Math.PI*2)};if(n.save(),c(),i){const h=n.createRadialGradient(a-o*.3,s-o*.3,o*.1,a,s,o);h.addColorStop(0,"#ffe08a"),h.addColorStop(1,"#f3a712"),n.fillStyle=h}else n.fillStyle=ut(n)??"#f3eede";n.fill(),n.restore(),ve(n,e*.016),n.strokeStyle=i?"#d68f0a":ee,c(),n.stroke(),n.fillStyle=ee,n.beginPath(),n.arc(a-o*.35,s-o*.1,o*.09,0,Math.PI*2),n.arc(a+o*.35,s-o*.1,o*.09,0,Math.PI*2),n.fill(),n.save(),n.fillStyle="rgba(230,120,90,0.3)";for(const h of[-1,1])n.beginPath(),n.arc(a+h*o*.5,s+o*.12,o*.13,0,Math.PI*2),n.fill();n.restore(),ve(n,e*.014),n.strokeStyle=ee,n.beginPath(),n.arc(a,s+o*.12,o*.45,.15*Math.PI,.85*Math.PI),n.stroke()}function U0(n,e,t,i){const r=i??ut(n)??"#f3eede",a=[[.26,.56,.18],[.42,.44,.24],[.6,.42,.22],[.76,.56,.18],[.5,.62,.26]];for(const[s,o,l]of a)n.beginPath(),n.arc(e*s,t*o,Math.min(e,t)*l,0,Math.PI*2),n.fillStyle=r,n.fill();ht(n,()=>{n.beginPath(),n.ellipse(e*.5,t*.54,e*.4,t*.28,0,0,Math.PI*2)},e*.42,t*.42,e*.4,"rgba(255,255,255,0.5)",i?"rgba(120,140,170,0.3)":"rgba(40,35,28,0.16)"),ve(n,e*.01),n.strokeStyle=i?"rgba(120,140,170,0.6)":ee;for(const[s,o,l]of a.slice(0,4))n.beginPath(),n.arc(e*s,t*o,Math.min(e,t)*l,Math.PI,2*Math.PI),n.stroke();n.beginPath(),n.moveTo(e*.14,t*.7),n.quadraticCurveTo(e*.5,t*.78,e*.86,t*.7),n.stroke()}function N0(n,e,t){const i=e/2,r=t*.98,a=Math.min(e*.48,t*.96),s=a*.085;for(let o=0;o<ji.length;o++)n.strokeStyle=ji[o],n.lineWidth=s*.95,n.beginPath(),n.arc(i,r,a-o*s-s/2,Math.PI,2*Math.PI),n.stroke()}const hl=.9,F0="#6f9c4a";class hn{root=new Jt;ctx;rig;girl;exploration;onComplete;popups=[];celebration=null;elapsed=0;completed=!1;completionElapsed=0;narrationQuietElapsed=0;completionNotified=!1;placedCount=0;onUpdate(e){}get completionReady(){return this.completed&&this.completionElapsed>=d0/1e3&&this.narrationQuietElapsed>=f0&&!this.ctx.narrator.isSpeaking}enter(e){this.ctx=e,this.ctx.hud.counting?.reset(),this.ctx.guidance?.reset(),this.exploration=e.createExploration?.(this.root),e.scene.add(this.root),this.setup()}addPopup(e,t){e.root.position.z-=this.placedCount*.0011,this.placedCount+=1,this.guardCorridor(e),this.root.add(e.root),this.popups.push({popup:e,triggerTime:t,triggered:!1}),this.exploration?.add(e)}guardCorridor(e){const t=e.root.position;if(!(t.z<=1&&t.z>=-(this.rig.length+1))||Math.abs(t.x)-e.footprintRadius>=hl)return;const s=(t.x>=0?1:-1)*(hl+e.footprintRadius);console.warn(`[StoryScene] Pop-up at x=${t.x.toFixed(2)}, z=${t.z.toFixed(2)} overlaps the camera corridor; nudged to x=${s.toFixed(2)}.`),t.x=s}complete(){this.completed||(this.completed=!0,this.celebrate(),this.colorizeWorld())}celebrate(){const e=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;e||g0(),this.celebration=new m0(this.root,e),this.celebration.start(this.ctx.camera,this.girl)}colorizeWorld(){const e=this.ctx.camera.position.z;let t=1e-4;for(const{popup:i}of this.popups)t=Math.max(t,Math.abs(i.root.position.z-e));for(const{popup:i}of this.popups){if(i.isColored)continue;const a=Math.abs(i.root.position.z-e)/t*h0;i.colorizeFade(i.naturalColor??F0,u0,a)}}update(e){const t=this.completed;this.elapsed+=e,this.rig.update(e);for(const i of this.popups)!i.triggered&&this.elapsed>=i.triggerTime&&(i.triggered=!0,i.popup.open(),this.ctx.sound.pop()),i.popup.update(e);this.celebration?.update(e),this.onUpdate(e),this.exploration?.update(e),t&&this.updateCompletion(e)}updateCompletion(e){if(this.completionNotified)return;const t=Math.max(0,e);this.completionElapsed+=t,this.narrationQuietElapsed=this.ctx.narrator.isSpeaking?0:this.narrationQuietElapsed+t,this.completionReady&&(this.completionNotified=!0,this.onComplete?.())}exit(){this.exploration?.dispose(),this.exploration=void 0,this.ctx.guidance?.reset(),this.ctx.hud.counting?.reset(),this.completionNotified=!0,this.ctx.interaction.clear(),this.ctx.narrator.cancel(),this.celebration?.dispose(),this.celebration=null,this.root.removeFromParent(),this.disposeGroup(this.root),this.root.clear(),this.popups.length=0,this.girl=void 0}disposeGroup(e){e.traverse(t=>{if(!(t instanceof Be))return;t.geometry.dispose();const i=Array.isArray(t.material)?t.material:[t.material];for(const r of i)r.map?.dispose(),r.dispose()})}}const k0=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,O0=n=>1+2.70158*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2),Hs=n=>1-Math.pow(1-n,3),Es=(n,e,t)=>Math.min(t,Math.max(e,n));class un{constructor(e,t){this.camera=e,this.length=t.length,this.travelDuration=t.length/t.speed,this.holdTime=t.holdTime??0,this.eyeHeight=t.eyeHeight??1.5,this.lookAhead=t.lookAhead??6,this.reset()}travelled=0;travelTime=0;paused=!1;time=0;travelDuration;length;holdTime;eyeHeight;lookAhead;reset(){this.travelled=0,this.travelTime=0,this.time=0,this.paused=!1,this.apply()}pause(){this.paused=!0}resume(){this.paused=!1}get distance(){return this.travelled}get progress(){return Es(this.travelled/this.length,0,1)}get isTravelling(){return this.time>=this.holdTime}get atEnd(){return this.travelled>=this.length}update(e){const t=this.time;if(this.time+=Math.max(0,e),this.isTravelling&&!this.paused&&this.travelled<this.length){const i=Math.max(0,this.time-this.holdTime)-Math.max(0,t-this.holdTime);this.travelTime=Math.min(this.travelDuration,this.travelTime+i);const r=this.travelTime/this.travelDuration;this.travelled=this.length*yt.smoothstep(r,0,1)}this.apply()}apply(){const e=-this.travelled,t=Math.sin(this.time*1.6)*.035,i=Math.sin(this.time*.7)*.06;this.camera.position.set(i,this.eyeHeight+t,e),this.camera.lookAt(i*.5,this.eyeHeight-.35,e-this.lookAhead)}}class B0{constructor(e,t=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=Math.random()*Math.PI*2){this.group=e,this.reducedMotion=t,this.phase=i}options={bob:0,drift:0,tilt:.02,breathe:0,speed:.8,reactionHeight:.16};elapsed=0;reactionStart=null;configure(e){this.options={...this.options,...e}}react(){this.reactionStart=this.elapsed}update(e,t=1){if(this.elapsed=e,this.group.position.set(0,0,0),this.group.rotation.set(0,0,0),this.group.scale.setScalar(1),this.reducedMotion)return;const i=this.options,r=e*i.speed,a=yt.clamp(t,0,1),s=Math.sin(r*2+this.phase)*i.breathe*a;if(this.group.position.x=Math.sin(r*.85+this.phase)*i.drift*a,this.group.position.y=(.5-Math.cos(r*1.7+this.phase)*.5)*i.bob*a,this.group.rotation.z=Math.sin(r+this.phase)*i.tilt*a,this.group.scale.set(1-s*.35,1+s,1),this.reactionStart===null)return;const o=(e-this.reactionStart)/.75;if(o>=1){this.reactionStart=null;return}const l=Math.pow(Math.sin(Math.PI*Math.max(0,o)),2);this.group.position.y+=l*i.reactionHeight,this.group.rotation.z+=Math.sin(o*Math.PI*2)*l*.08}}const z0=1.8,H0=.4,G0=new Fe("#ffd36b");class V0{constructor(e,t=!1){this.artwork=e,this.reducedMotion=t}materials=[];active=!1;startedAt=0;start(e){if(this.active||this.reducedMotion)return;this.active=!0,this.startedAt=e;const t=new Set;this.artwork.traverse(i=>{if(!(i instanceof Be))return;const r=Array.isArray(i.material)?i.material:[i.material];for(const a of r){if(t.has(a))continue;t.add(a);const s=a.color;s instanceof Fe&&this.materials.push({color:s,original:s.clone()})}})}update(e){if(!this.active)return;const t=Math.max(0,e-this.startedAt)*Math.PI*2/z0,i=H0*(1-Math.cos(t))/2;for(const{color:r,original:a}of this.materials)r.copy(a).lerp(G0,i)}stop(){if(this.active){for(const{color:e,original:t}of this.materials)e.copy(t);this.materials.length=0,this.active=!1}}}class Gs{playProfile;root=new Jt;motionGroup=new Jt;motion=new B0(this.motionGroup);hintPulse=new V0(this.motionGroup,this.motion.reducedMotion);footprintRadius=.5;naturalColor=null;hinges=[];opening=!1;opened=!1;colored=!1;currentColor=null;elapsed=0;clock=0;sinceOpen=0;pulse=0;animAccum=0;highlighted=!1;highlightClock=0;fading=!1;fadeElapsed=0;fadeDelay=0;fadeDuration=.8;mix=1;constructor(){this.root.visible=!1,this.root.add(this.motionGroup)}setIdle(e,t){return this.motion.configure({tilt:e,speed:t}),this}configureMotion(e){return this.motion.configure(e),this}react(){this.motion.react(),this.pulse=1e-4}addHinge(e){const t=new Jt;t.position.copy(e.position),t.rotation.y=e.yaw??0;const i=e.axis??"x",r=e.from??-Math.PI/2,a=e.to??0;return t.rotation[i]=r,e.mesh.position.copy(e.meshOffset??new U(0,0,0)),t.add(e.mesh),this.motionGroup.add(t),this.hinges.push({pivot:t,mesh:e.mesh,axis:i,from:r,to:a,delay:e.delay??0,duration:e.duration??1,easing:e.easing??O0,animated:e.animated??!1}),this}open(){this.opened||this.opening||(this.opening=!0,this.root.visible=!0)}snapOpen(){this.opening=!1,this.opened=!0,this.root.visible=!0;for(const e of this.hinges)e.pivot.rotation[e.axis]=e.to}get isOpen(){return this.opened}get isColored(){return this.colored}colorize(e){if(this.hintPulse.stop(),!this.colored){this.colored=!0,this.highlighted=!1,this.currentColor=e,this.motion.react();for(const t of this.hinges){t.mesh.scale.setScalar(1);const i=t.mesh.userData.render;i?.(e,this.clock)}this.pulse=1e-4}}colorizeFade(e,t=.8,i=0){this.hintPulse.stop(),!(this.colored||this.fading)&&(this.currentColor=e,this.fading=!0,this.fadeElapsed=0,this.fadeDelay=Math.max(0,i),this.fadeDuration=Math.max(.001,t),this.mix=0)}setHighlighted(e){if(this.highlighted=e,!e)for(const t of this.hinges)t.mesh.scale.setScalar(1)}setHintFlashing(e){e&&!this.colored&&!this.fading?this.hintPulse.start(this.clock):this.hintPulse.stop()}update(e){if(this.clock+=e,this.hintPulse.update(this.clock),this.opening){this.elapsed+=e;let i=!0;for(const r of this.hinges){const a=Es((this.elapsed-r.delay)/r.duration,0,1);r.pivot.rotation[r.axis]=yt.lerp(r.from,r.to,r.easing(a)),a<1&&(i=!1)}i&&(this.opening=!1,this.opened=!0)}if(this.opening||this.opened){this.sinceOpen+=e;const i=yt.smoothstep(this.sinceOpen,0,.8);this.motion.update(this.clock,i)}if(this.pulse>0){this.pulse+=e;const i=this.pulse/.35;i>=1?this.pulse=0:this.motion.reducedMotion||this.motionGroup.scale.multiplyScalar(1+Math.sin(i*Math.PI)*.14)}if(this.highlighted&&!this.colored&&this.opened&&!this.motion.reducedMotion){this.highlightClock+=e;const i=1+Math.sin(this.highlightClock*2.8)*.1;for(const r of this.hinges)r.mesh.scale.setScalar(i)}const t=this.fading;if(this.fading){this.fadeElapsed+=e;const i=Es((this.fadeElapsed-this.fadeDelay)/this.fadeDuration,0,1);if(this.mix=k0(i),this.fadeElapsed>=this.fadeDelay&&this.currentColor)for(const r of this.hinges){const a=r.mesh.userData.render;a?.(this.currentColor,this.clock,this.mix)}i>=1&&(this.fading=!1,this.colored=!0,this.pulse=1e-4)}if(this.opened&&(!t||this.fadeElapsed<this.fadeDelay)&&(this.animAccum+=e,this.animAccum>=.04)){this.animAccum=0;for(const i of this.hinges){if(!i.animated)continue;const r=i.mesh.userData.render;r?.(this.currentColor,this.clock,this.fading?this.mix:1)}}}}class W0{constructor(e,t,i,r,a=!1){this.canvas=e,this.texture=t,this.draw=r,this.animated=a,this.context=e.getContext("2d",{willReadFrequently:!0}),this.colorMap={value:t},this.installShader(i),i.addEventListener("dispose",()=>this.releaseColorLayer())}context;colorMap;mix={value:0};colorCanvas=null;colorContext=null;colorTexture=null;currentColor=null;lastAnimationTime=0;render(e,t,i){const r=yt.clamp(i,0,1);if(e&&r<1){this.currentColor!==e&&this.beginFade(e,t),this.mix.value=r,this.animated&&t-this.lastAnimationTime>=.04&&(this.drawFrame(this.context,null,t),this.drawFrame(this.colorContext,e,t),this.texture.needsUpdate=!0,this.colorTexture.needsUpdate=!0,this.lastAnimationTime=t);return}e&&this.currentColor===e&&this.colorCanvas?(this.animated&&this.drawFrame(this.colorContext,e,t),this.context.save(),this.context.setTransform(1,0,0,1,0,0),this.context.globalAlpha=1,this.context.globalCompositeOperation="source-over",this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.drawImage(this.colorCanvas,0,0),this.context.restore()):this.drawFrame(this.context,e,t),this.texture.needsUpdate=!0,this.releaseColorLayer()}beginFade(e,t){this.releaseColorLayer(),this.currentColor=e,this.colorCanvas=document.createElement("canvas"),this.colorCanvas.width=this.canvas.width,this.colorCanvas.height=this.canvas.height,this.colorContext=this.colorCanvas.getContext("2d"),this.animated&&(this.drawFrame(this.context,null,t),this.texture.needsUpdate=!0),this.drawFrame(this.colorContext,e,t),this.colorTexture=new oi(this.colorCanvas),this.colorTexture.colorSpace=this.texture.colorSpace,this.colorTexture.anisotropy=this.texture.anisotropy,this.colorMap.value=this.colorTexture,this.lastAnimationTime=t}drawFrame(e,t,i){e.save(),e.setTransform(1,0,0,1,0,0),e.globalAlpha=1,e.globalCompositeOperation="source-over",e.clearRect(0,0,this.canvas.width,this.canvas.height),e.lineJoin="round",e.lineCap="round",this.draw(e,this.canvas.width,this.canvas.height,t,i),e.restore()}installShader(e){e.customProgramCacheKey=()=>"paper-bloom-color-blend-v1",e.onBeforeCompile=t=>{t.uniforms.paperColorMap=this.colorMap,t.uniforms.paperColorMix=this.mix,t.fragmentShader=t.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
uniform sampler2D paperColorMap;
uniform float paperColorMix;`).replace("#include <map_fragment>",`
        #ifdef USE_MAP
          vec4 sampledDiffuseColor = texture2D(map, vMapUv);
          if (paperColorMix > 0.0) {
            vec4 coloredSample = texture2D(paperColorMap, vMapUv);
            sampledDiffuseColor = mix(sampledDiffuseColor, coloredSample, paperColorMix);
          }
          diffuseColor *= sampledDiffuseColor;
        #endif
      `)}}releaseColorLayer(){this.mix.value=0,this.colorMap.value=this.texture,this.colorTexture?.dispose(),this.colorCanvas&&(this.colorCanvas.width=0,this.colorCanvas.height=0),this.colorCanvas=null,this.colorContext=null,this.colorTexture=null,this.currentColor=null}}function Vs(n){const e=n.pixelsPerUnit??256,t=Math.max(2,Math.round(n.width*e)),i=Math.max(2,Math.round(n.height*e)),r=document.createElement("canvas");r.width=t,r.height=i;const a=r.getContext("2d",{willReadFrequently:!0});a.lineJoin="round",a.lineCap="round",n.draw(a,t,i);const s=new oi(r);s.colorSpace=wt,s.anisotropy=4,s.needsUpdate=!0;const o=new nt({map:s,transparent:!0,alphaTest:n.alphaTest??.4,side:n.doubleSided?Xe:En}),l=new tt(n.width,n.height),c=new Be(l,o);c.renderOrder=1;const h=new W0(r,s,o,n.draw,n.animated);return c.userData.render=(u=null,d=0,m=1)=>{h.render(u,d,m)},c}let qi=null;function X0(){if(qi)return qi;const n=128,e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d"),i=t.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);return i.addColorStop(0,"rgba(38, 32, 24, 0.5)"),i.addColorStop(.45,"rgba(38, 32, 24, 0.24)"),i.addColorStop(.75,"rgba(38, 32, 24, 0.08)"),i.addColorStop(1,"rgba(38, 32, 24, 0)"),t.fillStyle=i,t.fillRect(0,0,n,n),qi=new oi(e),qi.colorSpace=wt,qi}function z(n,e={}){const t=e.scale??1,i=new Gs;i.playProfile=n.play;let r=0;for(const a of n.parts){r=Math.max(r,a.width/2);const s=Vs({draw:a.draw,width:a.width*t,height:a.height*t,pixelsPerUnit:a.pixelsPerUnit,animated:a.animated,doubleSided:n.doubleSided??!0}),o=a.position??[0,0,0],l=a.meshOffset??[0,a.height/2,0];i.addHinge({mesh:s,position:new U(o[0]*t,o[1]*t,o[2]*t),meshOffset:new U(l[0]*t,l[1]*t,l[2]*t),axis:a.axis,yaw:a.yaw,from:a.from,to:a.to,delay:a.delay,duration:a.duration,easing:a.easing,animated:a.animated})}if(i.footprintRadius=(n.footprintRadius??r)*t,i.root.position.y=n.lift??.02,i.naturalColor=n.naturalColor??null,n.shadow!==!1){const a=(n.footprintRadius??r)*t,s=new Be(new tt(a*2.6,a*1.5),new nt({map:X0(),transparent:!0,depthWrite:!1,depthTest:!1,opacity:.5}));s.rotation.x=-Math.PI/2,s.position.y=-(n.lift??.02)+.006,s.renderOrder=.5,i.root.add(s)}if(n.idle){const a=.85+Math.random()*.3;i.setIdle(n.idle.amplitude,n.idle.frequency*a)}return n.motion&&i.configureMotion({...n.motion,bob:(n.motion.bob??0)*t,drift:(n.motion.drift??0)*t,reactionHeight:(n.motion.reactionHeight??.16)*t}),i}class dn{constructor(e){this.options=e,this.remaining=e.targets.length,e.counting?.start(this.remaining);const t=e.targets.map(i=>i.popup);e.exploration?.startPuzzle(t),e.guidance?.start(t,t[0]?.playProfile?.idleHints);for(const i of e.targets){i.popup.setHighlighted(!0);const r=e.interaction.register({object:i.popup.root,cursor:"pointer",generous:!0,onClick:()=>this.colorIn(i)});this.registrations.set(i,r)}this.remaining===0&&this.finish()}registrations=new Map;remaining;done=!1;colorIn(e){if(e.popup.isColored)return;e.popup.colorize(e.color),this.registrations.get(e)?.(),this.registrations.delete(e),this.remaining--;const t=this.options.targets.length;this.options.exploration?.puzzleProgress(),this.options.guidance?.progress(e.popup),this.options.counting?.advance(),this.options.sound?.chime(t-this.remaining-1),this.options.onColor?.(this.remaining,t),this.remaining<=0&&this.finish()}finish(){this.done||(this.done=!0,this.options.exploration?.finishPuzzle(),this.options.sound?.success(),this.options.onComplete?.())}}const fn=2,et={ground:{id:"ground",lines:[{text:"I'm the paper path. Little feet can tiptoe along me.",speaker:"narrator"},{text:"Pat, pat! Shall we explore this lovely page together?",speaker:"narrator"}]},tree:{id:"tree",lines:[{text:"I'm a tree. My branches reach up high!",speaker:"narrator"},{text:"Rustle, rustle! Can you tickle my leaves?",speaker:"narrator"}],focusReplies:{frog:[{text:"I'm a tree, not a frog. Frogs go ribbit!",speaker:"narrator"}],fox:[{text:"I'm a tree, not a fox. Foxes have fluffy tails!",speaker:"narrator"}],rabbit:[{text:"I'm a tree, not a rabbit. Rabbits have long ears!",speaker:"narrator"}]},surprise:"acorns"},bush:{id:"bush",lines:[{text:"I'm a bush. Lots of little leaves make me cosy!",speaker:"narrator"},{text:"Rustle, rustle! I wonder who is hiding here.",speaker:"narrator"}],focusReplies:{frog:[{text:"I'm a bush, not a frog. Can you find the little frog?",speaker:"narrator"}],fox:[{text:"I'm a bush, not a fox. Look for our fluffy friend!",speaker:"narrator"}],rabbit:[{text:"I'm a bush, not a rabbit. Can you spot two long ears?",speaker:"narrator"}]},surprise:"butterfly"},rock:{id:"rock",lines:[{text:"I'm a smooth little rock. Tap, tap, tap!",speaker:"narrator"},{text:"I like sitting very still in the sunshine.",speaker:"narrator"}],focusReplies:{frog:[{text:"I'm a rock, not a frog. Our frog can hop!",speaker:"narrator"}],fox:[{text:"I'm a rock, not a fox. Look for a fluffy tail.",speaker:"narrator"}],rabbit:[{text:"I'm a rock, not a rabbit. Look for two long ears!",speaker:"narrator"}]},surprise:"snail"},grass:{id:"grass",lines:[{text:"We are blades of grass. Sway with us!",speaker:"narrator"},{text:"Swish, swish! A little breeze tickles our tips.",speaker:"narrator"}]},mushroom:{id:"mushroom",lines:[{text:"I'm a little mushroom with a spotty hat.",speaker:"narrator"},{text:"Peek under my cap. There might be a tiny surprise!",speaker:"narrator"}],surprise:"stars"},flower:{id:"flower",lines:[{text:"I'm a flower. My petals open like little hands.",speaker:"narrator"},{text:"Hello, little bee! Have you come to visit?",speaker:"narrator"}]},house:{id:"house",lines:[{text:"Knock, knock! This is a little paper house.",speaker:"narrator"},{text:"A cosy home, with a roof and a little door.",speaker:"narrator"}],surprise:"stars"},hill:{id:"hill",lines:[{text:"I'm a hill. I roll up high and down low!",speaker:"narrator"},{text:"Imagine sliding down my soft, grassy side.",speaker:"narrator"}]},sky:{id:"sky",lines:[{text:"Look up! The sky is a big blanket over our world.",speaker:"narrator"},{text:"Hello, sky! Is there a little cloud sailing by?",speaker:"narrator"}]},sun:{id:"sun",lines:[{text:"I'm the sun. I send warm, gentle sunshine.",speaker:"narrator"},{text:"Shine, shine! A happy day is peeking through.",speaker:"narrator"}]},cloud:{id:"cloud",lines:[{text:"I'm a soft little cloud, floating by.",speaker:"narrator"},{text:"Puff, puff! What shape can you see in me?",speaker:"narrator"}]},pond:{id:"pond",reaction:"still",lines:[{text:"I'm a pond. Little ripples go round and round.",speaker:"narrator"},{text:"Splash! Shall we see who is hiding in the water?",speaker:"narrator"}],surprise:"fish"},stream:{id:"stream",reaction:"still",lines:[{text:"I'm a little stream. Listen: trickle, trickle!",speaker:"narrator"},{text:"Follow my ripples. Someone small might swim past.",speaker:"narrator"}],surprise:"fish"},lilypad:{id:"lilypad",lines:[{text:"I'm a lily pad. I float like a little boat.",speaker:"narrator"},{text:"A cosy little seat for a tired frog.",speaker:"narrator"}]},reed:{id:"reed",lines:[{text:"I'm a tall reed beside the water.",speaker:"narrator"},{text:"Sway, sway! I wave hello to the pond.",speaker:"narrator"}]},apple:{id:"apple",lines:[{text:"I'm an apple, round and ready for a little tap.",speaker:"narrator"},{text:"I grow on a tree. Can you spot my tiny stalk?",speaker:"narrator"}]},rainbow:{id:"rainbow",lines:[{text:"I'm a rainbow. So many lovely colours in one big bow!",speaker:"narrator"},{text:"Follow my colours up and over the sky.",speaker:"narrator"}],surprise:"stars"},mabli:{id:"mabli",lines:[{text:"Hello! I'm Mabli. Will you explore with me?",speaker:"mabli"},{text:"My rainbow hair wiggles when I'm happy!",speaker:"mabli"}]},frog:{id:"frog",lines:[{text:"Ribbit! I like to hop by my little pond.",speaker:"frog"},{text:"Can you make a tiny ribbit? Ribbit!",speaker:"frog"},{text:"Hello again! I am so happy you came to play.",speaker:"frog"}],idleHints:[{text:"Ribbit! I'm waiting by the pond. Can you find me?",speaker:"frog"},{text:"Look for my big round eyes. Give me a little tap!",speaker:"frog"}]},fox:{id:"fox",lines:[{text:"Hello, friend! My fluffy tail swishes like this.",speaker:"fox"},{text:"I have two pointy ears. Can you see them?",speaker:"fox"},{text:"Shall we tiptoe through the leaves together?",speaker:"fox"}],idleHints:[{text:"I'm hiding near the trees. Look for my fluffy tail!",speaker:"fox"},{text:"My pointy ears are listening. Can you tap me?",speaker:"fox"}]},rabbit:{id:"rabbit",lines:[{text:"Hop, hop! I have two lovely long ears.",speaker:"rabbit"},{text:"My little nose goes wiggle, wiggle.",speaker:"rabbit"},{text:"Hello again! Shall we do a gentle bunny hop?",speaker:"rabbit"}],idleHints:[{text:"I'm sitting in the grass. Look for my two long ears!",speaker:"rabbit"},{text:"Hop over with your finger and give me a little tap!",speaker:"rabbit"}]},bird:{id:"bird",lines:[{text:"Tweet, tweet! I have a little song for you.",speaker:"bird"},{text:"My wings can flutter, and my little feet can hop.",speaker:"bird"}]},butterfly:{id:"butterfly",lines:[{text:"Flutter, flutter! My wings are soft and light.",speaker:"butterfly"},{text:"Can you wave hello like a butterfly?",speaker:"butterfly"}]},bee:{id:"bee",lines:[{text:"Buzz, buzz! I'm looking for a flower.",speaker:"bee"},{text:"I have little wings and a fuzzy tummy.",speaker:"bee"}]},duckling:{id:"duckling",lines:[{text:"Quack, quack! I like a gentle paddle.",speaker:"duckling"},{text:"Can you make a tiny quack with me?",speaker:"duckling"}]},snail:{id:"snail",lines:[{text:"Hello, little friend. I'm taking my time.",speaker:"snail"},{text:"My shell has a spiral. Round and round it goes.",speaker:"snail"}]},firefly:{id:"firefly",lines:[{text:"Hello! I carry a tiny lantern on my tummy.",speaker:"firefly"},{text:"Twinkle, twinkle! Little lights make the glade cosy.",speaker:"firefly"}]}},Ws={frog:{text:"Ribbit! My green tummy is back! I can splash and hop again. Thank you, Mabli, my colourful friend!",speaker:"frog"},fox:{text:"Oh, lovely orange fur! That tickles my whiskers. You found me! Thank you, Mabli. You are a wonderful friend.",speaker:"fox"},rabbit:{text:"My brown coat is back! Hooray! I am ready for a little hoppity adventure. Thank you, Mabli. Hop, hop!",speaker:"rabbit"}},Mt={play:et.hill,parts:[{draw:v0,width:12,height:2.6,pixelsPerUnit:96,duration:1.25}],footprintRadius:6,naturalColor:"#79ad48",idle:{amplitude:.006,frequency:.5}},rt={play:et.tree,parts:[{draw:M0,width:.7,height:2.2,duration:.85},{draw:(n,e,t,i)=>cl(n,e,t,!1,i),width:1.3,height:.8,position:[0,1.364,.01],meshOffset:[.65,0,0],axis:"z",from:-Math.PI/2,to:-.12,delay:.65,duration:.5},{draw:(n,e,t,i)=>cl(n,e,t,!0,i),width:1.3,height:.8,position:[0,1.1,.02],meshOffset:[-.65,0,0],axis:"z",from:Math.PI/2,to:.12,delay:.8,duration:.5},{draw:y0,width:2.7,height:2.5,position:[0,2.09,-.01],meshOffset:[0,1,0],delay:1,duration:.7}],footprintRadius:1.35,naturalColor:"#5c9a3c",idle:{amplitude:.018,frequency:.6}},We={play:et.bush,parts:[{draw:T0,width:1.8,height:1.1,duration:.7}],footprintRadius:.9,naturalColor:"#5c9a3c",idle:{amplitude:.03,frequency:1}},Xr={play:et.flower,parts:[{draw:E0,width:.5,height:.9,duration:.55},{draw:x0,width:.7,height:.7,position:[0,.855,.01],meshOffset:[0,.28,0],delay:.5,duration:.5}],footprintRadius:.35,idle:{amplitude:.05,frequency:1.4}},sn={play:et.rock,parts:[{draw:A0,width:1.1,height:.7,duration:.55}],footprintRadius:.55,naturalColor:"#a9a49a",idle:{amplitude:.006,frequency:.6}},dt={play:et.grass,parts:[{draw:w0,width:.9,height:.6,duration:.5}],footprintRadius:.45,naturalColor:"#79ad48",idle:{amplitude:.065,frequency:1.6}},on={play:et.mushroom,parts:[{draw:C0,width:.7,height:.7,duration:.5}],footprintRadius:.35,naturalColor:"#d6452f",idle:{amplitude:.015,frequency:.9}},q0={play:et.house,parts:[{draw:S0,width:3.4,height:3.2,duration:1}],footprintRadius:1.7,naturalColor:"#e7d3a4",idle:{amplitude:.008,frequency:.5}},pn={play:et.mabli,parts:[{draw:ql,width:1.4,height:2.1,pixelsPerUnit:320,duration:1.4,easing:Hs,animated:!0}],footprintRadius:.7,motion:{bob:.02,drift:.025,tilt:.025,breathe:.02,speed:.8,reactionHeight:.18}},An={play:et.sky,parts:[{draw:b0,width:60,height:18,pixelsPerUnit:48,duration:1.8,easing:Hs}],footprintRadius:30,shadow:!1,idle:{amplitude:.004,frequency:.3}},Y0={play:et.frog,parts:[{draw:Yl,width:1.5,height:1.3,duration:.8,animated:!0}],footprintRadius:.65,motion:{bob:.045,drift:0,tilt:.025,breathe:.055,speed:1.2,reactionHeight:.3}},qr={play:et.lilypad,parts:[{draw:P0,width:1.7,height:1.1,duration:.6}],footprintRadius:.85,naturalColor:"#5c9a3c",idle:{amplitude:.02,frequency:.8}},wi={play:et.reed,parts:[{draw:R0,width:.8,height:2.4,duration:.7}],footprintRadius:.4,naturalColor:"#79ad48",idle:{amplitude:.05,frequency:1.2}},$0={play:et.butterfly,parts:[{draw:$l,width:1.1,height:1.1,meshOffset:[0,1.5,0],duration:.7,animated:!0}],footprintRadius:.45,shadow:!1,motion:{bob:.22,drift:.18,tilt:.12,breathe:.035,speed:1.4,reactionHeight:.22}},K0={play:et.apple,parts:[{draw:L0,width:.9,height:1,meshOffset:[0,2.2,0],duration:.6}],footprintRadius:.35,shadow:!1,idle:{amplitude:.03,frequency:1.1}},Z0={play:et.fox,parts:[{draw:Kl,width:1.7,height:1.7,duration:.85,animated:!0}],footprintRadius:.75,motion:{bob:.025,drift:.035,tilt:.045,breathe:.025,speed:.8,reactionHeight:.22}},j0={play:et.bird,parts:[{draw:Zl,width:1.4,height:1.4,duration:.8,animated:!0}],footprintRadius:.6,motion:{bob:.07,drift:.065,tilt:.08,breathe:.025,speed:1.6,reactionHeight:.24}},J0={play:et.rabbit,parts:[{draw:jl,width:1.6,height:1.8,duration:.85,animated:!0}],footprintRadius:.7,motion:{bob:.09,drift:.025,tilt:.035,breathe:.03,speed:1.1,reactionHeight:.36}},Q0={play:et.sun,parts:[{draw:D0,width:2.2,height:2.2,meshOffset:[0,3,0],duration:1,animated:!0}],footprintRadius:.9,shadow:!1,idle:{amplitude:.006,frequency:.4}},eg={play:et.cloud,parts:[{draw:U0,width:2.2,height:1.3,meshOffset:[0,3.2,0],duration:.9}],footprintRadius:1,shadow:!1,idle:{amplitude:.01,frequency:.5}},tg={play:et.rainbow,parts:[{draw:N0,width:16,height:8,pixelsPerUnit:40,meshOffset:[0,3,0],duration:1.6,easing:Hs}],footprintRadius:8,shadow:!1,idle:{amplitude:.004,frequency:.3}},Ir=-13,ng=8,ig=5.2;class rg extends hn{puzzleStarted=!1;colorTargets=[];seed=439041101;setup(){this.rig=new un(this.ctx.camera,{speed:fn,length:ng,holdTime:ig,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildColorTargets(),this.buildGirl(),this.ctx.hud.showCaption("Once, all the colour drained out of the world — every last drop.",5),window.setTimeout(()=>{this.ctx.hud.showCaption("Only one thing kept its colour: the rainbow hair of a little girl named Mabli.",5)},5200)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const a=r??Math.max(.2,.5+(-Ir+i)*.26);return this.addPopup(e,a),e}buildGround(){const e=new Be(new tt(48,60),new nt({map:cn(14),side:Xe}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Be(new tt(.05,60),new nt({color:"#c9c1ac",transparent:!0,opacity:.5,side:Xe}));t.rotation.x=-Math.PI/2,t.position.set(0,.001,-18),this.root.add(t)}buildHorizon(){this.place(z(An),0,Ir-9,.1)}buildHeroScenery(){this.place(z(Mt,{scale:.9}),-7,-10,.3),this.place(z(Mt,{scale:1}),7.2,-11.5,.6),this.place(z(rt,{scale:1.15}),-2.6,-5),this.place(z(rt,{scale:1}),2.7,-6.5),this.place(z(rt,{scale:1.3}),-3.3,-9),this.place(z(rt,{scale:1.05}),3.2,-10.5),this.place(z(rt,{scale:1.2}),-3,-12.5),this.place(z(q0,{scale:.95}),4.6,-12),this.place(z(We,{scale:1.2}),-1.7,-4),this.place(z(We,{scale:1.1}),1.8,-5.5),this.place(z(We,{scale:1.2}),2.3,-9.5),this.place(z(We,{scale:1}),-2,-11)}scatterUndergrowth(){for(let e=-2;e>Ir-1;e-=.55)for(const t of[-1,1]){if(this.random()>.82)continue;const i=t*(1+this.random()*2.4),r=e+(this.random()-.5)*.4,a=this.random();let s=.8+this.random()*.7,o=dt;a<.45?o=dt:a<.72?o=on:a<.9?o=sn:(o=We,s*=.8),this.place(z(o,{scale:s}),i,r)}}buildColorTargets(){const e=[{x:-1.8,z:-11,scale:1.35,color:"#e4572e"},{x:0,z:-11,scale:1.35,color:"#f4c20d"},{x:1.8,z:-11,scale:1.35,color:"#2b8ac9"}];for(const t of e){const i=this.place(z(Xr,{scale:t.scale}),t.x,t.z);this.colorTargets.push({popup:i,color:t.color})}}buildGirl(){this.girl=this.place(z(pn,{scale:1.1}),-.95,Ir,1.2)}onUpdate(e){!this.puzzleStarted&&this.rig.atEnd&&!this.ctx.narrator.isSpeaking&&(this.puzzleStarted=!0,this.rig.pause(),this.startColorPuzzle())}startColorPuzzle(){this.ctx.hud.showCaption("Mabli found some flowers, but they have no colour. Tap each flower to colour it in!",0),new dn({interaction:this.ctx.interaction,sound:this.ctx.sound,counting:this.ctx.hud.counting,guidance:this.ctx.guidance,exploration:this.exploration,targets:this.colorTargets,onColor:e=>{e>0&&this.ctx.hud.showCaption("So pretty! Let's colour the other flowers too!",0,"mabli")},onComplete:()=>{this.ctx.hud.showCaption("We did it! Look at all those lovely colours. Come on, let's see who's waiting for us!",0,"mabli"),this.complete()}})}}const Lr=-13,ag=8,sg=5.2,og="#3fa34d";class lg extends hn{puzzleStarted=!1;colorTargets=[];seed=1373827085;setup(){this.rig=new un(this.ctx.camera,{speed:fn,length:ag,holdTime:sg,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildPondLife(),this.buildGirl(),this.ctx.hud.showCaption("Mabli followed the path to a quiet, grey pond…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const a=r??Math.max(.2,.5+(-Lr+i)*.26);return this.addPopup(e,a),e}buildGround(){const e=new Be(new tt(48,60),new nt({map:cn(14),side:Xe}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Be(new tt(.05,60),new nt({color:"#c9c1ac",transparent:!0,opacity:.5,side:Xe}));t.rotation.x=-Math.PI/2,t.position.set(0,.001,-18),this.root.add(t);const i=Vs({draw:I0,width:8,height:5.5,pixelsPerUnit:64,doubleSided:!0});i.rotation.x=-Math.PI/2;const r=new Gs;r.playProfile=et.pond,r.naturalColor="#a8cddd",r.root.position.set(0,.012,-11),r.addHinge({mesh:i,position:new U,meshOffset:new U,from:0,to:0,duration:.6}),this.addPopup(r,.1)}buildHorizon(){this.place(z(An),0,Lr-9,.1)}buildHeroScenery(){this.place(z(Mt,{scale:.9}),-7,-10,.3),this.place(z(Mt,{scale:1}),7.2,-11.5,.6),this.place(z(rt,{scale:1.15}),-3.6,-6),this.place(z(rt,{scale:1.1}),3.7,-8.5),this.place(z(rt,{scale:1.2}),-4.2,-12.5),this.place(z(We,{scale:1.2}),-2.2,-5),this.place(z(We,{scale:1.1}),2.4,-6.5),this.place(z(wi,{scale:1.1}),-2.6,-9.6),this.place(z(wi,{scale:1.25}),2.6,-10.2),this.place(z(wi,{scale:1}),-2.9,-11.6),this.place(z(wi,{scale:1.15}),2.3,-12.2)}scatterUndergrowth(){for(let e=-2;e>Lr-1;e-=.6)for(const t of[-1,1]){if(this.random()>.8)continue;const i=t*(1.2+this.random()*2.4),r=e+(this.random()-.5)*.4,a=this.random();let s=.8+this.random()*.7,o=dt;a<.4?o=dt:a<.62?o=wi:a<.8?o=on:a<.92?o=sn:(o=We,s*=.8),this.place(z(o,{scale:s}),i,r)}}buildPondLife(){this.place(z(qr,{scale:1.2}),.5,-10.9),this.place(z(qr,{scale:1}),-1.3,-10.4),this.place(z(qr,{scale:1.1}),1.5,-11.9);const e=this.place(z(Y0,{scale:1.25}),.5,-10.6,1.4);this.colorTargets.push({popup:e,color:og})}buildGirl(){this.girl=this.place(z(pn,{scale:1.1}),-1.7,Lr,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startFrogPuzzle())}startFrogPuzzle(){this.ctx.hud.showCaption("“Ribbit! I lost my green. Can you tap me and make me green again?”",0,"frog"),new dn({interaction:this.ctx.interaction,sound:this.ctx.sound,counting:this.ctx.hud.counting,guidance:this.ctx.guidance,exploration:this.exploration,targets:this.colorTargets,onComplete:()=>{const e=Ws.frog;this.ctx.hud.showCaption(e.text,0,e.speaker),this.complete()}})}}const Dr=-13,cg=8,hg=5.2;class ug extends hn{puzzleStarted=!1;colorTargets=[];seed=186515111;setup(){this.rig=new un(this.ctx.camera,{speed:fn,length:cg,holdTime:hg,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildButterflies(),this.buildGirl(),this.ctx.hud.showCaption("The path opened into a dull, grey meadow…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const a=r??Math.max(.2,.5+(-Dr+i)*.26);return this.addPopup(e,a),e}buildGround(){const e=new Be(new tt(48,60),new nt({map:cn(14),side:Xe}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Be(new tt(.05,60),new nt({color:"#c9c1ac",transparent:!0,opacity:.5,side:Xe}));t.rotation.x=-Math.PI/2,t.position.set(0,.001,-18),this.root.add(t)}buildHorizon(){this.place(z(An),0,Dr-9,.1)}buildHeroScenery(){this.place(z(Mt,{scale:.9}),-7,-10,.3),this.place(z(Mt,{scale:1}),7.2,-11.5,.6),this.place(z(rt,{scale:1.15}),-3.7,-6.5),this.place(z(rt,{scale:1.1}),3.8,-9),this.place(z(We,{scale:1.2}),-2.4,-5),this.place(z(We,{scale:1.1}),2.5,-6.5),this.place(z(We,{scale:1.2}),2.2,-11.5)}scatterUndergrowth(){for(let e=-2;e>Dr-1;e-=.5)for(const t of[-1,1]){if(this.random()>.85)continue;const i=t*(1.1+this.random()*2.6),r=e+(this.random()-.5)*.4,a=this.random();let s=.8+this.random()*.7,o=dt;a<.62?o=dt:a<.82?o=on:a<.93?o=sn:(o=We,s*=.8),this.place(z(o,{scale:s}),i,r)}}buildButterflies(){const e=[{x:-2.2,z:-11,scale:.85,color:"#e4572e"},{x:-1.1,z:-11,scale:.85,color:"#2b8ac9"},{x:0,z:-11,scale:.85,color:"#f4c20d"},{x:1.1,z:-11,scale:.85,color:"#9b4dca"},{x:2.2,z:-11,scale:.85,color:"#ef7215"}];for(const t of e){const i=this.place(z($0,{scale:t.scale}),t.x,t.z);this.colorTargets.push({popup:i,color:t.color})}}buildGirl(){this.girl=this.place(z(pn,{scale:1.1}),-2,Dr,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startButterflyPuzzle())}startButterflyPuzzle(){this.ctx.hud.showCaption("Hello, little friend! Our wings have lost their colours. Will you tap each butterfly and help us shine?",0,"butterfly"),new dn({interaction:this.ctx.interaction,sound:this.ctx.sound,counting:this.ctx.hud.counting,guidance:this.ctx.guidance,exploration:this.exploration,targets:this.colorTargets,onColor:e=>{e>0&&this.ctx.hud.showCaption("Ooh, lovely! My friends would like colourful wings too!",0,"butterfly")},onComplete:()=>{this.ctx.hud.showCaption("Thank you! Our wings are bright again. Let's dance across the meadow!",0,"butterfly"),this.complete()}})}}const Ur=-13,dg=8,fg=5.2;class pg extends hn{puzzleStarted=!1;colorTargets=[];seed=2844860133;setup(){this.rig=new un(this.ctx.camera,{speed:fn,length:dg,holdTime:fg,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildApples(),this.buildGirl(),this.ctx.hud.showCaption("Beyond the meadow stood a great, grey apple tree…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const a=r??Math.max(.2,.5+(-Ur+i)*.26);return this.addPopup(e,a),e}buildGround(){const e=new Be(new tt(48,60),new nt({map:cn(14),side:Xe}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Be(new tt(.05,60),new nt({color:"#c9c1ac",transparent:!0,opacity:.5,side:Xe}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}buildHorizon(){this.place(z(An),0,Ur-9,.1)}buildHeroScenery(){this.place(z(Mt,{scale:.9}),-7,-10,.3),this.place(z(Mt,{scale:1}),7.2,-11.5,.6),this.place(z(rt,{scale:1.7}),0,-14,.8),this.place(z(rt,{scale:1}),-4,-7),this.place(z(We,{scale:1.1}),-2.4,-5.5),this.place(z(We,{scale:1}),2.6,-6.5),this.place(z(We,{scale:1}),3,-11.5)}scatterUndergrowth(){for(let e=-3.2;e>Ur-1;e-=.55)for(const t of[-1,1]){if(this.random()>.78)continue;const i=t*(1.2+this.random()*2.6),r=e+(this.random()-.5)*.4,a=this.random();let s=.6+this.random()*.4,o=dt;a<.55?o=dt:a<.78?o=on:a<.92?o=sn:(o=We,s*=.8),this.place(z(o,{scale:s}),i,r)}}buildApples(){const e=[{x:-2.2,z:-13,scale:1.3,color:"#e4572e"},{x:-1.1,z:-13,scale:1.3,color:"#d64541"},{x:0,z:-13,scale:1.3,color:"#f4c20d"},{x:1.1,z:-13,scale:1.3,color:"#3fa34d"},{x:2.2,z:-13,scale:1.3,color:"#ef7215"}];for(const t of e){const i=this.place(z(K0,{scale:t.scale}),t.x,t.z);this.colorTargets.push({popup:i,color:t.color})}}buildGirl(){this.girl=this.place(z(pn,{scale:1.1}),-2.1,Ur,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startApplePuzzle())}startApplePuzzle(){this.ctx.hud.showCaption("The apples have no colour! Tap each apple to fill it with colour.",0),new dn({interaction:this.ctx.interaction,sound:this.ctx.sound,counting:this.ctx.hud.counting,guidance:this.ctx.guidance,exploration:this.exploration,targets:this.colorTargets,onColor:e=>{e>0&&this.ctx.hud.showCaption("Yum! Colour the rest too!",0)},onComplete:()=>{this.ctx.hud.showCaption("You did it! The orchard is ripe with colour!",0),this.complete()}})}}const Nr=-13,mg=8,gg=5.2,_g="#e8823a";class vg extends hn{puzzleStarted=!1;colorTargets=[];seed=252451383;setup(){this.rig=new un(this.ctx.camera,{speed:fn,length:mg,holdTime:gg,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildFox(),this.buildGirl(),this.ctx.hud.showCaption("In a hush of grey trees, someone was waiting…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const a=r??Math.max(.2,.5+(-Nr+i)*.26);return this.addPopup(e,a),e}buildGround(){const e=new Be(new tt(48,60),new nt({map:cn(14),side:Xe}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Be(new tt(.05,60),new nt({color:"#c9c1ac",transparent:!0,opacity:.5,side:Xe}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}buildHorizon(){this.place(z(An),0,Nr-9,.1)}buildHeroScenery(){this.place(z(Mt,{scale:.9}),-7,-10,.3),this.place(z(Mt,{scale:1}),7.2,-11.5,.6),this.place(z(rt,{scale:1.3}),-3.6,-6.5),this.place(z(rt,{scale:1.2}),3.7,-8),this.place(z(rt,{scale:1.5}),-4.2,-12),this.place(z(rt,{scale:1.35}),4,-12.8),this.place(z(We,{scale:1.3}),-2.4,-9.5),this.place(z(We,{scale:1.2}),2.4,-10.5)}scatterUndergrowth(){for(let e=-3.2;e>Nr-1;e-=.55)for(const t of[-1,1]){if(this.random()>.82)continue;const i=t*(1.2+this.random()*2.4),r=e+(this.random()-.5)*.4,a=this.random();let s=.6+this.random()*.4,o=dt;a<.5?o=dt:a<.76?o=on:a<.92?o=sn:(o=We,s*=.8),this.place(z(o,{scale:s}),i,r)}}buildFox(){const e=this.place(z(Z0,{scale:1.05}),.5,-11.2,1.4);this.colorTargets.push({popup:e,color:_g})}buildGirl(){this.girl=this.place(z(pn,{scale:1.1}),-2,Nr,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startFoxPuzzle())}startFoxPuzzle(){this.ctx.hud.showCaption("“Hello! My orange coat is gone. Tap me to bring it back!”",0,"fox"),new dn({interaction:this.ctx.interaction,sound:this.ctx.sound,counting:this.ctx.hud.counting,guidance:this.ctx.guidance,exploration:this.exploration,targets:this.colorTargets,onComplete:()=>{const e=Ws.fox;this.ctx.hud.showCaption(e.text,0,e.speaker),this.complete()}})}}const Fr=-13,Mg=8,yg=5.2,Sg="#4a90d9";class bg extends hn{puzzleStarted=!1;colorTargets=[];seed=728876201;setup(){this.rig=new un(this.ctx.camera,{speed:fn,length:Mg,holdTime:yg,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildBird(),this.buildGirl(),this.ctx.hud.showCaption("A little song drifted across the still, grey meadow…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const a=r??Math.max(.2,.5+(-Fr+i)*.26);return this.addPopup(e,a),e}buildGround(){const e=new Be(new tt(48,60),new nt({map:cn(14),side:Xe}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Be(new tt(.05,60),new nt({color:"#c9c1ac",transparent:!0,opacity:.5,side:Xe}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}buildHorizon(){this.place(z(An),0,Fr-9,.1)}buildHeroScenery(){this.place(z(Mt,{scale:.9}),-7,-10,.3),this.place(z(Mt,{scale:1}),7.2,-11.5,.6),this.place(z(rt,{scale:1.2}),-3.7,-6.5),this.place(z(rt,{scale:1.3}),3.9,-9),this.place(z(We,{scale:1.2}),-2.4,-8.5),this.place(z(We,{scale:1.1}),2.6,-10.5)}scatterUndergrowth(){for(let e=-3;e>Fr-1;e-=.55)for(const t of[-1,1]){if(this.random()>.82)continue;const i=t*(1.2+this.random()*2.4),r=e+(this.random()-.5)*.4,a=this.random();let s=.7+this.random()*.5,o=dt;a<.55?o=dt:a<.78?o=on:a<.92?o=sn:(o=We,s*=.8),this.place(z(o,{scale:s}),i,r)}}buildBird(){for(const e of[-1.7,0,1.7]){this.place(z(sn,{scale:1.4}),e,-11,1.2);const t=this.place(z(j0,{scale:1}),e,-11,1.5);t.root.position.y=.5,this.colorTargets.push({popup:t,color:Sg})}}buildGirl(){this.girl=this.place(z(pn,{scale:1.1}),-2,Fr,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startBirdPuzzle())}startBirdPuzzle(){this.ctx.hud.showCaption("“Tweet! Our feathers need some blue. Can you tap each little bird?”",0,"bird"),new dn({interaction:this.ctx.interaction,sound:this.ctx.sound,counting:this.ctx.hud.counting,guidance:this.ctx.guidance,exploration:this.exploration,targets:this.colorTargets,onColor:e=>{e>0&&this.ctx.hud.showCaption("“Tweet-tweet! Help my friends too!”",0,"bird")},onComplete:()=>{this.ctx.hud.showCaption("“We can sing in colour again! Thank you, Mabli!”",0,"bird"),this.complete()}})}}const kr=-13,Tg=8,Eg=5.2,xg="#b98b5e";class Ag extends hn{puzzleStarted=!1;colorTargets=[];seed=1832554737;setup(){this.rig=new un(this.ctx.camera,{speed:fn,length:Tg,holdTime:Eg,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildRabbit(),this.buildGirl(),this.ctx.hud.showCaption("Something soft rustled in the tall, grey grass…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const a=r??Math.max(.2,.5+(-kr+i)*.26);return this.addPopup(e,a),e}buildGround(){const e=new Be(new tt(48,60),new nt({map:cn(14),side:Xe}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Be(new tt(.05,60),new nt({color:"#c9c1ac",transparent:!0,opacity:.5,side:Xe}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}buildHorizon(){this.place(z(An),0,kr-9,.1)}buildHeroScenery(){this.place(z(Mt,{scale:1}),-7,-10,.3),this.place(z(Mt,{scale:.95}),7.2,-11.5,.6),this.place(z(rt,{scale:1.15}),-4,-7),this.place(z(rt,{scale:1.1}),4,-9.5),this.place(z(We,{scale:1.3}),-2.6,-8.5),this.place(z(We,{scale:1.2}),2.7,-10.5)}scatterUndergrowth(){for(let e=-3;e>kr-1;e-=.5)for(const t of[-1,1]){if(this.random()>.86)continue;const i=t*(1.1+this.random()*2.6),r=e+(this.random()-.5)*.4,a=this.random();let s=.8+this.random()*.6,o=dt;a<.68?o=dt:a<.85?o=on:a<.94?o=sn:(o=We,s*=.8),this.place(z(o,{scale:s}),i,r)}}buildRabbit(){const e=this.place(z(J0,{scale:1.1}),.6,-11,1.4);this.colorTargets.push({popup:e,color:xg}),this.place(z(dt,{scale:1.4}),-.1,-10.4,1.6),this.place(z(dt,{scale:1.3}),1.3,-10.5,1.6)}buildGirl(){this.girl=this.place(z(pn,{scale:1.1}),-2,kr,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startRabbitPuzzle())}startRabbitPuzzle(){this.ctx.hud.showCaption("“Hello, Mabli. Can you make my soft fur brown again? Tap me!”",0,"rabbit"),new dn({interaction:this.ctx.interaction,sound:this.ctx.sound,counting:this.ctx.hud.counting,guidance:this.ctx.guidance,exploration:this.exploration,targets:this.colorTargets,onComplete:()=>{const e=Ws.rabbit;this.ctx.hud.showCaption(e.text,0,e.speaker),this.complete()}})}}const Or=-13,wg=8,Cg=5.2,Pg="#d6452f";class Rg extends hn{puzzleStarted=!1;colorTargets=[];seed=2141307707;setup(){this.rig=new un(this.ctx.camera,{speed:fn,length:wg,holdTime:Cg,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildToadstools(),this.buildGirl(),this.ctx.hud.showCaption("Deeper in, a little ring of toadstools stood waiting…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const a=r??Math.max(.2,.5+(-Or+i)*.26);return this.addPopup(e,a),e}buildGround(){const e=new Be(new tt(48,60),new nt({map:cn(14),side:Xe}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Be(new tt(.05,60),new nt({color:"#c9c1ac",transparent:!0,opacity:.5,side:Xe}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}buildHorizon(){this.place(z(An),0,Or-9,.1)}buildHeroScenery(){this.place(z(Mt,{scale:.95}),-7,-10,.3),this.place(z(Mt,{scale:1}),7.2,-11.5,.6),this.place(z(rt,{scale:1.4}),-4,-7),this.place(z(rt,{scale:1.3}),4.1,-8.5),this.place(z(rt,{scale:1.5}),-4.4,-12.5),this.place(z(We,{scale:1.3}),-2.6,-9),this.place(z(We,{scale:1.2}),2.7,-10.5)}scatterUndergrowth(){for(let e=-3;e>Or-1;e-=.6)for(const t of[-1,1]){if(this.random()>.84)continue;const i=t*(1.4+this.random()*2.2),r=e+(this.random()-.5)*.4,a=this.random();let s=.7+this.random()*.5,o=dt;a<.55?o=dt:a<.8?o=sn:(o=We,s*=.8),this.place(z(o,{scale:s}),i,r)}}buildToadstools(){const e=[-2.7,-1,1,2.7];for(const t of e){const i=this.place(z(on,{scale:2.3}),t,-11);this.colorTargets.push({popup:i,color:Pg})}}buildGirl(){this.girl=this.place(z(pn,{scale:1.1}),0,Or,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startToadstoolPuzzle())}startToadstoolPuzzle(){this.ctx.hud.showCaption("The toadstools have lost their cheerful red caps. Tap each one to colour it in!",0),new dn({interaction:this.ctx.interaction,sound:this.ctx.sound,counting:this.ctx.hud.counting,guidance:this.ctx.guidance,exploration:this.exploration,targets:this.colorTargets,onColor:e=>{e>0&&this.ctx.hud.showCaption("Lovely and red! Colour the others too.",0)},onComplete:()=>{this.ctx.hud.showCaption("A whole ring of red toadstools — wonderful!",0),this.complete()}})}}const Oa=-13,Ig=8,Lg=5.2;class Dg extends hn{puzzleStarted=!1;finale=!1;endingShown=!1;colorTargets=[];warmTarget=new Fe("#f7ecd2");originalFogColor;originalBackgroundColor;seed=1545304577;setup(){this.originalFogColor=this.ctx.scene.fog?.color.clone();const e=this.ctx.scene.background;e instanceof Fe&&(this.originalBackgroundColor=e.clone()),this.rig=new un(this.ctx.camera,{speed:fn,length:Ig,holdTime:Lg,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildSky(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildGirl(),this.ctx.hud.showCaption("At last Mabli climbed a hill beneath a wide, grey sky…",5)}exit(){this.originalFogColor&&this.ctx.scene.fog?.color.copy(this.originalFogColor);const e=this.ctx.scene.background;this.originalBackgroundColor&&e instanceof Fe&&e.copy(this.originalBackgroundColor),super.exit()}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const a=r??Math.max(.2,.5+(-Oa+i)*.26);return this.addPopup(e,a),e}buildGround(){const e=new Be(new tt(48,60),new nt({map:cn(14),side:Xe}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Be(new tt(.05,60),new nt({color:"#c9c1ac",transparent:!0,opacity:.5,side:Xe}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}buildSky(){const e=this.place(z(Q0,{scale:1.5}),0,-15.5,.4);this.colorTargets.push({popup:e,color:"#f6c744"});const t=[{x:-3.4,z:-15,scale:1.2,color:"#bcdff0"},{x:3.4,z:-15.4,scale:1.3,color:"#f4c2d0"},{x:-2,z:-17.6,scale:1.1,color:"#d9c2ec"}];for(const i of t){const r=this.place(z(eg,{scale:i.scale}),i.x,i.z,.7);this.colorTargets.push({popup:r,color:i.color})}}buildHeroScenery(){this.place(z(Mt,{scale:.8}),-7.5,-14,.3),this.place(z(Mt,{scale:.85}),7.6,-14.5,.6),this.place(z(rt,{scale:1.1}),-4.4,-7.5),this.place(z(We,{scale:1.1}),3.2,-9.5),this.place(z(We,{scale:1}),-2.8,-10.5)}scatterUndergrowth(){for(let e=-3.2;e>Oa-1;e-=.6)for(const t of[-1,1]){if(this.random()>.78)continue;const i=t*(1.2+this.random()*2.6),r=e+(this.random()-.5)*.4,a=this.random();let s=.6+this.random()*.4,o=dt;a<.7?o=dt:a<.9?o=sn:(o=We,s*=.8),this.place(z(o,{scale:s}),i,r)}}buildGirl(){this.girl=this.place(z(pn,{scale:1.15}),-1.9,Oa,1.2)}onUpdate(e){if(!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startSkyPuzzle()),this.finale){const t=this.ctx.scene.background;t instanceof Fe&&t.lerp(this.warmTarget,Math.min(1,e*.6)),this.ctx.scene.fog?.color.lerp(this.warmTarget,Math.min(1,e*.6)),!this.endingShown&&this.completionReady&&(this.endingShown=!0,this.ctx.hud.showEndCard("The End","And so Mabli, the girl with the rainbow hair, brought colour back to the whole world."))}}startSkyPuzzle(){this.ctx.hud.showCaption("The whole sky is grey! Tap the sun and each cloud to colour them.",0),new dn({interaction:this.ctx.interaction,sound:this.ctx.sound,counting:this.ctx.hud.counting,guidance:this.ctx.guidance,exploration:this.exploration,targets:this.colorTargets,onColor:e=>{e>0&&this.ctx.hud.showCaption("Beautiful! Keep colouring the sky!",0)},onComplete:()=>this.startFinale()})}startFinale(){this.finale=!0,this.ctx.hud.showCaption("Colour rushed back into every corner of the world!",0),this.place(z(tg),0,-16.5,0),this.complete()}}function Ug(n,e,t,i){n.save(),n.lineJoin="round",n.lineCap="round";const r=ut(n)??"#f3eede";if(n.beginPath(),n.moveTo(e*.045,t*.52),n.bezierCurveTo(e*.06,t*.28,e*.25,t*.13,e*.48,t*.17),n.bezierCurveTo(e*.7,t*.08,e*.91,t*.23,e*.955,t*.47),n.bezierCurveTo(e*.95,t*.71,e*.81,t*.88,e*.55,t*.84),n.bezierCurveTo(e*.32,t*.95,e*.12,t*.82,e*.045,t*.52),n.closePath(),n.fillStyle=i??r,n.fill(),i){n.save(),n.clip();const a=n.createLinearGradient(0,t*.2,0,t*.85);a.addColorStop(0,"rgba(255,255,240,0.4)"),a.addColorStop(.6,"rgba(255,255,240,0)"),a.addColorStop(1,"rgba(45,88,113,0.12)"),n.fillStyle=a,n.fillRect(0,0,e,t),n.globalAlpha=.1,n.fillStyle=r,n.fillRect(0,0,e,t),n.restore()}n.strokeStyle=ee,n.lineWidth=Math.min(e,t)*.009,n.stroke(),n.strokeStyle=i?"rgba(54,96,116,0.6)":"rgba(33,29,24,0.4)",n.lineWidth=Math.min(e,t)*.005;for(const[a,s,o]of[[.27,.36,.08],[.62,.3,.1],[.8,.49,.06],[.38,.54,.12],[.2,.64,.06],[.66,.71,.1]])n.beginPath(),n.moveTo(e*(a-o),t*s),n.bezierCurveTo(e*(a-o*.4),t*(s+.025),e*(a+o*.4),t*(s-.025),e*(a+o),t*s),n.stroke();n.restore()}class Ng{constructor(e,t){this.root=e,this.place=t}build(e){this.addGround(),this.place(z(An),0,-23,.1),this.place(z(Mt,{scale:.85}),-7.5,-15,.3),this.place(z(Mt,{scale:.9}),7.5,-15.5,.5);for(const t of[-1,1]){this.place(z(We,{scale:1}),t*4.2,-13.5,.7);for(const i of[-5,-7.5,-10])this.place(z(dt,{scale:.9}),t*3.9,i,1.1)}e==="stream"&&this.addStream(),e==="meadow"&&this.addMeadow(),e==="garden"&&this.addGarden(),e==="glade"&&this.addGlade()}addGround(){const e=new Be(new tt(48,60),new nt({map:cn(14),side:Xe}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Be(new tt(.04,60),new nt({color:"#c9c1ac",transparent:!0,opacity:.4}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}addMeadow(){for(const e of[-1,1])this.place(z(Xr,{scale:1.9}),e*3.6,-14,.8),this.place(z(Xr,{scale:1.3}),e*4.3,-12.8,1.1)}addStream(){const e=Vs({draw:Ug,width:8.5,height:5,pixelsPerUnit:64,doubleSided:!0});e.rotation.x=-Math.PI/2;const t=new Gs().setIdle(0,0);t.playProfile=et.stream,t.naturalColor="#a8cddd",t.footprintRadius=4.25,t.root.position.y=.012,t.addHinge({mesh:e,position:new U,meshOffset:new U,from:0,to:0,duration:.6}),this.place(t,0,-12.1,.2);for(const i of[-1,1])this.place(z(wi,{scale:1.1}),i*3.7,-13,.9),this.place(z(qr,{scale:.9}),i*2.9,-14.2,1.2)}addGarden(){for(const e of[-1,1])this.place(z(Xr,{scale:2.1}),e*3.8,-14.5,.8),this.place(z(on,{scale:1.25}),e*3.5,-12.8,1)}addGlade(){for(const e of[-1,1])this.place(z(rt,{scale:1.1}),e*5.1,-12.8,.6),this.place(z(on,{scale:1.2}),e*3.7,-13.6,1)}}class Fg extends hn{constructor(e){super(),this.definition=e}targets=[];puzzleStarted=!1;setup(){this.rig=new un(this.ctx.camera,{speed:fn,length:8,holdTime:5.2,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),new Ng(this.root,this.place).build(this.definition.setting);for(const e of this.definition.targets){const t=z(e.element,{scale:e.scale});t.root.position.y+=e.lift??0,this.place(t,e.x,e.z,1.3),this.targets.push({popup:t,color:e.color})}this.girl=this.place(z(pn,{scale:1.05}),-3.1,-15,1.1),this.ctx.hud.showCaption(this.definition.opening,5)}place=(e,t,i,r=.8)=>(e.root.position.x=t,e.root.position.z=i,this.addPopup(e,r),e);onUpdate(){this.puzzleStarted||!this.rig.atEnd||(this.puzzleStarted=!0,this.rig.pause(),this.ctx.hud.showCaption(this.definition.prompt,0,this.definition.voice),new dn({interaction:this.ctx.interaction,sound:this.ctx.sound,counting:this.ctx.hud.counting,guidance:this.ctx.guidance,exploration:this.exploration,targets:this.targets,onColor:e=>{e>0&&this.ctx.hud.showCaption(this.definition.progress,0,this.definition.voice)},onComplete:()=>{this.ctx.hud.showCaption(this.definition.ending,0,this.definition.voice),this.complete()}}))}}function ir(n,e,t,i,r,a,s=0,o=!1){if(n.save(),n.strokeStyle=ee,n.lineWidth=Math.min(i,r)*.18,n.lineCap="round",(a+s)%4.8>4.62)n.beginPath(),n.moveTo(e-i*.85,t),n.quadraticCurveTo(e,t+r*(o?-.35:.15),e+i*.85,t),n.stroke();else{n.beginPath(),n.ellipse(e,t,i,r,0,0,Math.PI*2),n.fillStyle="#fffdf2",n.fill(),n.stroke();const l=Math.sin(a*.8+s)*i*.12;n.beginPath(),n.ellipse(e+l,t+r*.08,i*.49,r*(o?.65:.58),0,0,Math.PI*2),n.fillStyle=ee,n.fill(),n.beginPath(),n.ellipse(e+l-i*.17,t-r*.19,i*.2,r*.2,0,0,Math.PI*2),n.fillStyle="#ffffff",n.fill(),n.beginPath(),n.ellipse(e+l+i*.18,t+r*.3,i*.09,r*.09,0,0,Math.PI*2),n.fill()}n.restore()}function Jl(n,e,t,i,r=0){const a=ut(n)??"#f3eede",s=i??a,o=i?"#dbeef4":a,l=Math.sin(r*13)*.025;n.save(),n.scale(e,t),n.strokeStyle=ee,n.lineWidth=.014,n.lineCap="round",n.lineJoin="round";for(const[h,u,d]of[[.52,.29,-.5],[.73,.34,.4]])n.beginPath(),n.ellipse(h,u,.14,.18+l,d,0,Math.PI*2),n.fillStyle=o,n.fill(),n.stroke(),n.beginPath(),n.moveTo(h-.05,u+.09),n.quadraticCurveTo(h+.02,u,h+.04,u-.09),n.stroke();n.beginPath(),n.moveTo(.83,.56),n.lineTo(.95,.59),n.lineTo(.84,.65),n.closePath(),n.fillStyle=ee,n.fill(),n.beginPath(),n.ellipse(.58,.61,.29,.24,-.08,0,Math.PI*2),n.fillStyle=s,n.fill();const c=n.createLinearGradient(0,.36,0,.86);c.addColorStop(0,"rgba(255,255,236,0.6)"),c.addColorStop(.48,"rgba(255,255,236,0)"),c.addColorStop(1,"rgba(93,57,28,0.19)"),n.fillStyle=c,n.fill(),n.stroke(),n.save(),n.beginPath(),n.ellipse(.58,.61,.29,.24,-.08,0,Math.PI*2),n.clip(),n.strokeStyle=ee,n.lineWidth=.065;for(const h of[.57,.73])n.beginPath(),n.moveTo(h-.025,.36),n.quadraticCurveTo(h+.035,.59,h-.015,.87),n.stroke();n.restore();for(const h of[.48,.65,.76])n.beginPath(),n.moveTo(h,.79),n.quadraticCurveTo(h-.01,.9,h-.065,.9),n.stroke();for(const[h,u]of[[.23,.15],[.34,.39]]){const d=u+Math.sin(r*1.9+h*7)*.012;n.beginPath(),n.moveTo(h,.43),n.quadraticCurveTo(h,.27,d,.24),n.stroke(),n.beginPath(),n.arc(d,.24,.022,0,Math.PI*2),n.fillStyle=ee,n.fill()}n.beginPath(),n.ellipse(.29,.55,.17,.19,-.1,0,Math.PI*2),n.fillStyle=s,n.fill(),n.beginPath(),n.ellipse(.247,.452,.085,.065,-.3,0,Math.PI*2),n.fillStyle="rgba(255,255,235,0.35)",n.fill(),n.beginPath(),n.ellipse(.29,.55,.17,.19,-.1,0,Math.PI*2),n.stroke();for(const h of[.23,.34])ir(n,h,.515,.039,.052,r,.8,!!i);if(i){n.fillStyle="rgba(239,128,124,0.52)";for(const h of[.188,.385])n.beginPath(),n.ellipse(h,.587,.025,.016,0,0,Math.PI*2),n.fill()}n.beginPath(),n.arc(.285,.585,i?.07:.055,.08,Math.PI-.08),i&&(n.closePath(),n.fillStyle="#754b35",n.fill()),n.stroke(),n.restore()}function Ql(n,e,t,i,r=0){const a=ut(n)??"#f3eede",s=i??a,o=i?"#ef9238":a;n.save(),n.scale(e,t),n.strokeStyle=ee,n.lineWidth=.014,n.lineJoin="round",n.lineCap="round";for(const c of[.35,.59])n.beginPath(),n.moveTo(c-.025,.81),n.lineTo(c-.07,.91),n.lineTo(c-.015,.9),n.lineTo(c+.035,.93),n.lineTo(c+.08,.89),n.lineTo(c+.025,.81),n.closePath(),n.fillStyle=o,n.fill(),n.stroke();n.beginPath(),n.moveTo(.25,.58),n.quadraticCurveTo(.11,.57,.1,.47),n.quadraticCurveTo(.08,.68,.25,.77),n.closePath(),n.fillStyle=s,n.fill(),n.stroke(),n.beginPath(),n.ellipse(.44,.66,.3,.23,-.12,0,Math.PI*2),n.fillStyle=s,n.fill();const l=n.createLinearGradient(0,.43,0,.9);l.addColorStop(0,"rgba(255,255,238,0.55)"),l.addColorStop(.5,"rgba(255,255,238,0)"),l.addColorStop(1,"rgba(134,80,23,0.2)"),n.fillStyle=l,n.fill(),n.stroke(),n.beginPath(),n.ellipse(.41,.67,.16,.13,-.25,0,Math.PI*2),n.fillStyle=i?"#ffe9a8":a,n.fill(),n.stroke(),n.beginPath(),n.moveTo(.29,.67),n.quadraticCurveTo(.36,.76,.48,.72),n.stroke(),n.beginPath(),n.arc(.63,.37,.205,0,Math.PI*2),n.fillStyle=s,n.fill(),n.beginPath(),n.ellipse(.565,.275,.085,.066,-.4,0,Math.PI*2),n.fillStyle="rgba(255,255,238,0.4)",n.fill(),n.beginPath(),n.arc(.63,.37,.205,0,Math.PI*2),n.stroke(),n.beginPath(),n.moveTo(.56,.18),n.quadraticCurveTo(.55,.09,.6+Math.sin(r*1.4)*.007,.13),n.quadraticCurveTo(.62,.08,.65,.17),n.stroke(),n.beginPath(),n.moveTo(.79,.39),n.quadraticCurveTo(.96,.39,.94,.46),n.quadraticCurveTo(.88,.5,.78,.46),n.closePath(),n.fillStyle=o,n.fill(),n.stroke(),n.beginPath(),n.moveTo(.81,.443),n.quadraticCurveTo(.87,.455,.92,.44),n.stroke(),ir(n,.685,.337,.048,.061,r,1.8,!!i),i&&(n.beginPath(),n.ellipse(.659,.429,.035,.022,0,0,Math.PI*2),n.fillStyle="rgba(239,146,125,0.5)",n.fill(),n.beginPath(),n.moveTo(.706,.424),n.quadraticCurveTo(.74,.46,.766,.423),n.stroke()),n.restore()}function ec(n,e,t,i,r=0){n.save(),n.lineCap="round",n.lineJoin="round",n.lineWidth=Math.min(e,t)*.014,n.strokeStyle=ee;const a=ut(n)??"#f3eede";n.beginPath(),n.moveTo(e*.08,t*.8),n.bezierCurveTo(e*.2,t*.92,e*.67,t*.93,e*.86,t*.84),n.bezierCurveTo(e*.95,t*.8,e*.94,t*.7,e*.9,t*.61),n.bezierCurveTo(e*.86,t*.49,e*.77,t*.49,e*.72,t*.58),n.bezierCurveTo(e*.68,t*.65,e*.7,t*.71,e*.62,t*.75),n.bezierCurveTo(e*.4,t*.77,e*.19,t*.7,e*.08,t*.8),n.closePath(),n.fillStyle=i?"#eeddb9":a,n.fill();const s=n.createLinearGradient(0,t*.5,0,t*.94);s.addColorStop(0,"rgba(255,255,237,0.45)"),s.addColorStop(.55,"rgba(255,255,237,0)"),s.addColorStop(1,"rgba(113,78,40,0.17)"),n.fillStyle=s,n.fill(),n.stroke(),n.beginPath(),n.moveTo(e*.2,t*.84),n.bezierCurveTo(e*.43,t*.9,e*.7,t*.88,e*.84,t*.8),n.strokeStyle="rgba(55,45,31,0.35)",n.lineWidth=Math.min(e,t)*.008,n.stroke();const o=e*.41,l=t*.54,c=e*.3,h=t*.31;n.beginPath(),n.ellipse(o,l,c,h,-.08,0,Math.PI*2),n.fillStyle=i??a,n.fill();const u=n.createRadialGradient(o-c*.4,l-h*.5,c*.06,o,l,Math.max(c,h)*1.05);u.addColorStop(0,"rgba(255,255,235,0.5)"),u.addColorStop(.5,"rgba(255,255,235,0)"),u.addColorStop(1,"rgba(48,32,44,0.2)"),n.fillStyle=u,n.fill(),n.strokeStyle=ee,n.lineWidth=Math.min(e,t)*.017,n.stroke(),n.beginPath();for(let d=0;d<=96;d++){const m=d/96,g=.35+m*Math.PI*4.6,_=.89*(1-m)+.035,p=o+Math.cos(g)*c*_,f=l+Math.sin(g)*h*_;d===0?n.moveTo(p,f):n.lineTo(p,f)}if(n.lineWidth=Math.min(e,t)*.012,n.stroke(),i){n.fillStyle="rgba(255,249,216,0.68)";for(const[d,m,g]of[[.26,.37,.02],[.33,.31,.015],[.42,.3,.011]])n.beginPath(),n.ellipse(e*d,t*m,e*g,t*g,0,0,Math.PI*2),n.fill()}for(const d of[-1,1]){const m=e*(.82+d*.065+Math.sin(r*2.1+d)*.012),g=t*(.32+Math.sin(r*1.7+d)*.018);n.beginPath(),n.moveTo(e*(.82+d*.035),t*.57),n.quadraticCurveTo(m,t*.48,m,g),n.stroke(),ir(n,m,g,e*.044,t*.063,r,2.5,!!i)}n.beginPath(),n.moveTo(e*.79,t*.65),n.quadraticCurveTo(e*.85,t*(i?.75:.715),e*.9,t*.65),i&&(n.closePath(),n.fillStyle="#795441",n.fill()),n.strokeStyle=ee,n.stroke(),i&&(n.beginPath(),n.ellipse(e*.9,t*.625,e*.024,t*.021,0,0,Math.PI*2),n.fillStyle="rgba(228,137,146,0.5)",n.fill()),n.restore()}function kg(n,e,t,i,r=0){n.save(),n.lineCap="round",n.lineJoin="round",n.lineWidth=Math.min(e,t)*.013,n.strokeStyle=ee;const a=ut(n)??"#f3eede",s=Math.sin(r*8)*.035,o=t*.7;if(i){const c=Math.min(e*.43,t*.29),h=n.createRadialGradient(e*.5,o,0,e*.5,o,c),u=.61+Math.sin(r*2)*.07;h.addColorStop(0,`rgba(255,244,130,${u})`),h.addColorStop(.45,"rgba(255,230,97,0.25)"),h.addColorStop(1,"rgba(255,230,97,0)"),n.fillStyle=h,n.beginPath(),n.arc(e*.5,o,c,0,Math.PI*2),n.fill()}for(const c of[-1,1]){for(let d=0;d<3;d++){const m=t*(.47+d*.09);n.beginPath(),n.moveTo(e*(.5+c*.1),m),n.lineTo(e*(.5+c*.22),m+t*.025),n.lineTo(e*(.5+c*.25),m+t*.085),n.stroke()}const h=e*(.5+c*.21),u=t*.45;n.beginPath(),n.ellipse(h,u,e*(.17+s),t*.22,c*.55,0,Math.PI*2),n.fillStyle=i?"#eff2da":a,n.fill(),n.stroke(),n.beginPath(),n.moveTo(e*.5,t*.6),n.quadraticCurveTo(h,t*.46,h+c*e*.075,t*.31),n.lineWidth=Math.min(e,t)*.007,n.strokeStyle="rgba(50,48,36,0.35)",n.stroke(),n.lineWidth=Math.min(e,t)*.013,n.strokeStyle=ee}if(n.beginPath(),n.ellipse(e*.5,t*.59,e*.145,t*.28,0,0,Math.PI*2),n.fillStyle=i?"#72a65b":a,n.fill(),n.stroke(),n.beginPath(),n.ellipse(e*.5,o,e*.15,t*.18,0,0,Math.PI*2),n.fillStyle=i?"#f7d85a":a,n.fill(),i){const c=n.createLinearGradient(e*.5,t*.55,e*.5,t*.87);c.addColorStop(0,"rgba(255,250,174,0.75)"),c.addColorStop(1,"rgba(255,230,97,0.15)"),n.fillStyle=c,n.fill()}n.stroke(),n.beginPath(),n.moveTo(e*.395,t*.76),n.quadraticCurveTo(e*.5,t*.79,e*.605,t*.76),n.strokeStyle="rgba(50,48,36,0.35)",n.lineWidth=Math.min(e,t)*.007,n.stroke(),n.strokeStyle=ee,n.lineWidth=Math.min(e,t)*.013,i&&(n.beginPath(),n.ellipse(e*.462,t*.642,e*.033,t*.047,-.3,0,Math.PI*2),n.fillStyle="rgba(255,255,235,0.75)",n.fill());for(const c of[-1,1]){const h=e*(.5+c*.15),u=t*(.14+Math.sin(r*2+c)*.012);n.beginPath(),n.moveTo(e*(.5+c*.06),t*.29),n.quadraticCurveTo(h,t*.19,h,u),n.stroke(),n.beginPath(),n.ellipse(h,u,e*.018,t*.018,0,0,Math.PI*2),n.fillStyle=i?"#72a65b":a,n.fill(),n.stroke()}n.beginPath(),n.ellipse(e*.5,t*.32,e*.19,t*.145,0,0,Math.PI*2),n.fillStyle=i?"#83b66b":a,n.fill();const l=n.createLinearGradient(0,t*.175,0,t*.465);l.addColorStop(0,"rgba(255,255,234,0.48)"),l.addColorStop(.6,"rgba(255,255,234,0)"),l.addColorStop(1,"rgba(30,65,33,0.15)"),n.fillStyle=l,n.fill(),n.stroke();for(const c of[-1,1])ir(n,e*(.5+c*.075),t*.303,e*.04,t*.049,r,.3,!!i);if(n.beginPath(),n.moveTo(e*.443,t*.37),n.quadraticCurveTo(e*.5,t*(i?.44:.414),e*.557,t*.37),i&&(n.closePath(),n.fillStyle="#4d6340",n.fill()),n.strokeStyle=ee,n.stroke(),i)for(const c of[-1,1])n.beginPath(),n.ellipse(e*(.5+c*.13),t*.36,e*.026,t*.016,0,0,Math.PI*2),n.fillStyle="rgba(237,163,133,0.55)",n.fill();n.restore()}const Og={play:et.bee,parts:[{draw:Jl,width:1.2,height:1,duration:.8,animated:!0}],footprintRadius:.6,shadow:!1,naturalColor:"#f3c94b",motion:{bob:.17,drift:.14,tilt:.1,breathe:.025,speed:1.8,reactionHeight:.22}},Bg={play:et.duckling,parts:[{draw:Ql,width:1.3,height:1.4,duration:.8,animated:!0}],footprintRadius:.65,naturalColor:"#f7cc45",motion:{bob:.045,drift:.07,tilt:.065,breathe:.025,speed:1.7,reactionHeight:.2}},zg={play:et.snail,parts:[{draw:ec,width:1.7,height:1.2,duration:.8,animated:!0}],footprintRadius:.85,naturalColor:"#a879c4",motion:{bob:.012,drift:.03,tilt:.025,breathe:.02,speed:.7,reactionHeight:.08}},Hg={play:et.firefly,parts:[{draw:kg,width:1,height:1.2,duration:.8,animated:!0}],footprintRadius:.5,shadow:!1,naturalColor:"#f8d655",motion:{bob:.2,drift:.17,tilt:.09,breathe:.035,speed:1.2,reactionHeight:.22}},Gg={id:"busy-bees",title:"The Busy Meadow",setting:"meadow",voice:"bee",opening:"Mabli heard a little buzz in the meadow. Some bees needed her help.",prompt:"Buzz! Can you make us golden again? Tap each bee.",progress:"Buzz, buzz! My friends need gold too!",ending:"Thank you, Mabli! Now our meadow is buzzing with colour!",targets:[-2.4,-.8,.8,2.4].map((n,e)=>({element:Og,x:n,z:-11.8,scale:1.15,lift:e%2===0?.65:1,color:"#f3c94b"}))},Vg={id:"stream-ducklings",title:"The Duckling Parade",setting:"stream",voice:"duckling",opening:"Mabli found four little ducklings beside the stream.",prompt:"Quack! Our yellow feathers are gone. Tap each duckling to help!",progress:"Quack, quack! Help my friends too!",ending:"We're fluffy and yellow again! Thank you, Mabli!",targets:[-2.4,-.8,.8,2.4].map(n=>({element:Bg,x:n,z:-11.8,scale:1.1,color:"#f7cc45"}))},Wg={id:"snail-garden",title:"The Spiral Garden",setting:"garden",voice:"snail",opening:"After the rain, three little snails peeked out of the leaves.",prompt:"Hello, Mabli. Will you colour our little shells? Tap each snail.",progress:"Lovely! There are more little shells to colour.",ending:"Look at our pretty shells! Thank you, Mabli. Let's go slowly, together.",targets:[{x:-2.3,color:"#e989ac"},{x:0,color:"#a879c4"},{x:2.3,color:"#51b5ad"}].map(n=>({...n,element:zg,z:-11.8,scale:1.1}))},Xg={id:"lantern-glade",title:"The Lantern Glade",setting:"glade",voice:"firefly",opening:"Evening came, and Mabli found a glade full of little fireflies.",prompt:"Our little lights have gone out. Tap each firefly to help us glow.",progress:"A little light! Help the other fireflies too.",ending:"Thank you, Mabli! Follow our lights to the rainbow hill.",targets:[-2.5,-1.25,0,1.25,2.5].map((n,e)=>({element:Hg,x:n,z:-11.8,scale:1.05,lift:.45+(2-Math.abs(e-2))*.35,color:"#f8d655"}))},qg=[Gg,Vg,Wg,Xg];function Yg(){return[{id:"awakening",title:"The Grey Morning",createScene:()=>new rg},{id:"grey-pond",title:"The Grey Pond",createScene:()=>new lg},{id:"butterflies",title:"Butterfly Wings",createScene:()=>new ug},{id:"orchard",title:"The Orchard",createScene:()=>new pg},{id:"fox",title:"The Little Fox",createScene:()=>new vg},{id:"bird",title:"The Little Bird",createScene:()=>new bg},{id:"rabbit",title:"The Little Rabbit",createScene:()=>new Ag},{id:"toadstools",title:"The Toadstool Ring",createScene:()=>new Rg},...qg.map(n=>({id:n.id,title:n.title,createScene:()=>new Fg(n)})),{id:"painted-sky",title:"The Painted Sky",createScene:()=>new Dg}]}const $g={"narrator\nMabli heard a little buzz in the meadow. Some bees needed her help.":"audio/narration/narrator-b38da4303abd.wav","bee\nBuzz! Can you make us golden again? Tap each bee.":"audio/narration/bee-ea722d86dedc.wav","bee\nBuzz, buzz! My friends need gold too!":"audio/narration/bee-0445ab4cad75.wav","bee\nThank you, Mabli! Now our meadow is buzzing with colour!":"audio/narration/bee-3769960bf85e.wav","narrator\nEvening came, and Mabli found a glade full of little fireflies.":"audio/narration/narrator-bb83a6c7bef5.wav","firefly\nOur little lights have gone out. Tap each firefly to help us glow.":"audio/narration/firefly-a058a786b8c4.wav","firefly\nA little light! Help the other fireflies too.":"audio/narration/firefly-8f1c96af2f32.wav","firefly\nThank you, Mabli! Follow our lights to the rainbow hill.":"audio/narration/firefly-72e308e91090.wav","narrator\nAfter the rain, three little snails peeked out of the leaves.":"audio/narration/narrator-6770a166c0f9.wav","snail\nHello, Mabli. Will you colour our little shells? Tap each snail.":"audio/narration/snail-32bdfd00e156.wav","snail\nLovely! There are more little shells to colour.":"audio/narration/snail-58e585ba693f.wav","snail\nLook at our pretty shells! Thank you, Mabli. Let's go slowly, together.":"audio/narration/snail-ec2a61130b06.wav","narrator\nMabli found four little ducklings beside the stream.":"audio/narration/narrator-cf046c53ac10.wav","duckling\nQuack! Our yellow feathers are gone. Tap each duckling to help!":"audio/narration/duckling-76928312dee7.wav","duckling\nQuack, quack! Help my friends too!":"audio/narration/duckling-c5b4c1f293e9.wav","duckling\nWe're fluffy and yellow again! Thank you, Mabli!":"audio/narration/duckling-a8e2381b8df4.wav","narrator\nI'm the paper path. Little feet can tiptoe along me.":"audio/narration/narrator-e4790d710781.wav","narrator\nPat, pat! Shall we explore this lovely page together?":"audio/narration/narrator-033903fb1982.wav","narrator\nI'm a tree. My branches reach up high!":"audio/narration/narrator-2a9659384174.wav","narrator\nRustle, rustle! Can you tickle my leaves?":"audio/narration/narrator-4cece0ffd2e4.wav","narrator\nI'm a tree, not a frog. Frogs go ribbit!":"audio/narration/narrator-1ceec66568b0.wav","narrator\nI'm a tree, not a fox. Foxes have fluffy tails!":"audio/narration/narrator-dc455561d954.wav","narrator\nI'm a tree, not a rabbit. Rabbits have long ears!":"audio/narration/narrator-738039eb4191.wav","narrator\nI'm a bush. Lots of little leaves make me cosy!":"audio/narration/narrator-a6f5aa083443.wav","narrator\nRustle, rustle! I wonder who is hiding here.":"audio/narration/narrator-8b1b5c6d107a.wav","narrator\nI'm a bush, not a frog. Can you find the little frog?":"audio/narration/narrator-eb70326368d0.wav","narrator\nI'm a bush, not a fox. Look for our fluffy friend!":"audio/narration/narrator-fd3d51dd428c.wav","narrator\nI'm a bush, not a rabbit. Can you spot two long ears?":"audio/narration/narrator-d2403ae31b42.wav","narrator\nI'm a smooth little rock. Tap, tap, tap!":"audio/narration/narrator-8d485af080d8.wav","narrator\nI like sitting very still in the sunshine.":"audio/narration/narrator-a75f8f77c7d6.wav","narrator\nI'm a rock, not a frog. Our frog can hop!":"audio/narration/narrator-01bd2e00e74d.wav","narrator\nI'm a rock, not a fox. Look for a fluffy tail.":"audio/narration/narrator-634fae8b4e93.wav","narrator\nI'm a rock, not a rabbit. Look for two long ears!":"audio/narration/narrator-1cb559e33ff3.wav","narrator\nWe are blades of grass. Sway with us!":"audio/narration/narrator-a5117cacb8c5.wav","narrator\nSwish, swish! A little breeze tickles our tips.":"audio/narration/narrator-af5675f7d24b.wav","narrator\nI'm a little mushroom with a spotty hat.":"audio/narration/narrator-c544d27d0e3f.wav","narrator\nPeek under my cap. There might be a tiny surprise!":"audio/narration/narrator-c3eee9059917.wav","narrator\nI'm a flower. My petals open like little hands.":"audio/narration/narrator-9e6ce246aa1a.wav","narrator\nHello, little bee! Have you come to visit?":"audio/narration/narrator-f9e0f40baa53.wav","narrator\nKnock, knock! This is a little paper house.":"audio/narration/narrator-ed320b797492.wav","narrator\nA cosy home, with a roof and a little door.":"audio/narration/narrator-32f10943aaf0.wav","narrator\nI'm a hill. I roll up high and down low!":"audio/narration/narrator-9d7490cc1160.wav","narrator\nImagine sliding down my soft, grassy side.":"audio/narration/narrator-42b622607a65.wav","narrator\nLook up! The sky is a big blanket over our world.":"audio/narration/narrator-f2f9039d543d.wav","narrator\nHello, sky! Is there a little cloud sailing by?":"audio/narration/narrator-eabc931a4bb9.wav","narrator\nI'm the sun. I send warm, gentle sunshine.":"audio/narration/narrator-d68e235aaae1.wav","narrator\nShine, shine! A happy day is peeking through.":"audio/narration/narrator-9f5d1484fcb5.wav","narrator\nI'm a soft little cloud, floating by.":"audio/narration/narrator-baeb46fbfe5e.wav","narrator\nPuff, puff! What shape can you see in me?":"audio/narration/narrator-fca69f2ee677.wav","narrator\nI'm a pond. Little ripples go round and round.":"audio/narration/narrator-056ed4283a76.wav","narrator\nSplash! Shall we see who is hiding in the water?":"audio/narration/narrator-e0b3dd4cbbe8.wav","narrator\nI'm a little stream. Listen: trickle, trickle!":"audio/narration/narrator-7712f9741899.wav","narrator\nFollow my ripples. Someone small might swim past.":"audio/narration/narrator-9b74ffc0242f.wav","narrator\nI'm a lily pad. I float like a little boat.":"audio/narration/narrator-70f2a3c4d3d7.wav","narrator\nA cosy little seat for a tired frog.":"audio/narration/narrator-4ba0fe209e96.wav","narrator\nI'm a tall reed beside the water.":"audio/narration/narrator-469a2a235f1f.wav","narrator\nSway, sway! I wave hello to the pond.":"audio/narration/narrator-d44096aa8602.wav","narrator\nI'm an apple, round and ready for a little tap.":"audio/narration/narrator-dd5665538511.wav","narrator\nI grow on a tree. Can you spot my tiny stalk?":"audio/narration/narrator-a3d7a5170bf4.wav","narrator\nI'm a rainbow. So many lovely colours in one big bow!":"audio/narration/narrator-836e721abec3.wav","narrator\nFollow my colours up and over the sky.":"audio/narration/narrator-ffa72427000e.wav","mabli\nHello! I'm Mabli. Will you explore with me?":"audio/narration/mabli-2f298bdcda3c.wav","mabli\nMy rainbow hair wiggles when I'm happy!":"audio/narration/mabli-9d15e32e8f95.wav","frog\nRibbit! I like to hop by my little pond.":"audio/narration/frog-c1308208aad5.wav","frog\nCan you make a tiny ribbit? Ribbit!":"audio/narration/frog-c937eb8a28e4.wav","frog\nHello again! I am so happy you came to play.":"audio/narration/frog-a1b10608642d.wav","frog\nRibbit! I'm waiting by the pond. Can you find me?":"audio/narration/frog-d579702c5d37.wav","frog\nLook for my big round eyes. Give me a little tap!":"audio/narration/frog-c756ce60c467.wav","fox\nHello, friend! My fluffy tail swishes like this.":"audio/narration/fox-c7f4022581f6.wav","fox\nI have two pointy ears. Can you see them?":"audio/narration/fox-11de4a66a57a.wav","fox\nShall we tiptoe through the leaves together?":"audio/narration/fox-c381f89998c2.wav","fox\nI'm hiding near the trees. Look for my fluffy tail!":"audio/narration/fox-baedbfe31541.wav","fox\nMy pointy ears are listening. Can you tap me?":"audio/narration/fox-1716dd3b942c.wav","rabbit\nHop, hop! I have two lovely long ears.":"audio/narration/rabbit-29935b6c5db6.wav","rabbit\nMy little nose goes wiggle, wiggle.":"audio/narration/rabbit-6d00b3fad24e.wav","rabbit\nHello again! Shall we do a gentle bunny hop?":"audio/narration/rabbit-e3d2d66f1091.wav","rabbit\nI'm sitting in the grass. Look for my two long ears!":"audio/narration/rabbit-cc3c0c943c18.wav","rabbit\nHop over with your finger and give me a little tap!":"audio/narration/rabbit-e2c8303dd68a.wav","bird\nTweet, tweet! I have a little song for you.":"audio/narration/bird-ca622f04eda7.wav","bird\nMy wings can flutter, and my little feet can hop.":"audio/narration/bird-0c9da878bec0.wav","butterfly\nFlutter, flutter! My wings are soft and light.":"audio/narration/butterfly-0f454f5d9da2.wav","butterfly\nCan you wave hello like a butterfly?":"audio/narration/butterfly-495ee2cbd836.wav","bee\nBuzz, buzz! I'm looking for a flower.":"audio/narration/bee-a67f9a120c61.wav","bee\nI have little wings and a fuzzy tummy.":"audio/narration/bee-afd50b1b5e17.wav","duckling\nQuack, quack! I like a gentle paddle.":"audio/narration/duckling-4cc39b58e6ef.wav","duckling\nCan you make a tiny quack with me?":"audio/narration/duckling-e2a718175974.wav","snail\nHello, little friend. I'm taking my time.":"audio/narration/snail-b81a71a19e61.wav","snail\nMy shell has a spiral. Round and round it goes.":"audio/narration/snail-4941e348b501.wav","firefly\nHello! I carry a tiny lantern on my tummy.":"audio/narration/firefly-ceb2c02abb61.wav","firefly\nTwinkle, twinkle! Little lights make the glade cosy.":"audio/narration/firefly-94f4c804354b.wav","frog\nRibbit! My green tummy is back! I can splash and hop again. Thank you, Mabli, my colourful friend!":"audio/narration/frog-562df7cf12f8.wav","fox\nOh, lovely orange fur! That tickles my whiskers. You found me! Thank you, Mabli. You are a wonderful friend.":"audio/narration/fox-1ed2c822dbdd.wav","rabbit\nMy brown coat is back! Hooray! I am ready for a little hoppity adventure. Thank you, Mabli. Hop, hop!":"audio/narration/rabbit-6e705333d557.wav","narrator\nOnce, all the colour drained out of the world — every last drop.":"audio/narration/narrator-0234db3f65f6.wav","narrator\nOnly one thing kept its colour: the rainbow hair of a little girl named Mabli.":"audio/narration/narrator-abfef2c349c2.wav","narrator\nMabli found some flowers, but they have no colour. Tap each flower to colour it in!":"audio/narration/narrator-80225fe0298e.wav","mabli\nSo pretty! Let's colour the other flowers too!":"audio/narration/mabli-c674d0b7266a.wav","mabli\nWe did it! Look at all those lovely colours. Come on, let's see who's waiting for us!":"audio/narration/mabli-3fc394eea88e.wav","narrator\nMabli followed the path to a quiet, grey pond…":"audio/narration/narrator-7b03534fb202.wav","frog\n“Ribbit! I lost my green. Can you tap me and make me green again?”":"audio/narration/frog-f794174775fc.wav","narrator\nThe path opened into a dull, grey meadow…":"audio/narration/narrator-d95bd3b88f4b.wav","butterfly\nHello, little friend! Our wings have lost their colours. Will you tap each butterfly and help us shine?":"audio/narration/butterfly-51293f5b37b2.wav","butterfly\nOoh, lovely! My friends would like colourful wings too!":"audio/narration/butterfly-cbaf6385b829.wav","butterfly\nThank you! Our wings are bright again. Let's dance across the meadow!":"audio/narration/butterfly-3e3998b6e261.wav","narrator\nBeyond the meadow stood a great, grey apple tree…":"audio/narration/narrator-0eb568f66548.wav","narrator\nThe apples have no colour! Tap each apple to fill it with colour.":"audio/narration/narrator-6417e552175b.wav","narrator\nYum! Colour the rest too!":"audio/narration/narrator-0b06263ba494.wav","narrator\nYou did it! The orchard is ripe with colour!":"audio/narration/narrator-957ea96c5956.wav","narrator\nIn a hush of grey trees, someone was waiting…":"audio/narration/narrator-1e32f953bc5b.wav","fox\n“Hello! My orange coat is gone. Tap me to bring it back!”":"audio/narration/fox-07554c243bb6.wav","narrator\nAt last Mabli climbed a hill beneath a wide, grey sky…":"audio/narration/narrator-3455b3a2b34c.wav","narrator\nThe End. And so Mabli, the girl with the rainbow hair, brought colour back to the whole world.":"audio/narration/narrator-f352c455a4ca.wav","narrator\nThe whole sky is grey! Tap the sun and each cloud to colour them.":"audio/narration/narrator-da42f67a61db.wav","narrator\nBeautiful! Keep colouring the sky!":"audio/narration/narrator-77bf26c742ac.wav","narrator\nColour rushed back into every corner of the world!":"audio/narration/narrator-4d1aba668058.wav","narrator\nA little song drifted across the still, grey meadow…":"audio/narration/narrator-2055116887bd.wav","bird\n“Tweet! Our feathers need some blue. Can you tap each little bird?”":"audio/narration/bird-9b9c97f69026.wav","bird\n“Tweet-tweet! Help my friends too!”":"audio/narration/bird-1ac5e4df2350.wav","bird\n“We can sing in colour again! Thank you, Mabli!”":"audio/narration/bird-638db6020adb.wav","narrator\nSomething soft rustled in the tall, grey grass…":"audio/narration/narrator-1fe60e3a8c19.wav","rabbit\n“Hello, Mabli. Can you make my soft fur brown again? Tap me!”":"audio/narration/rabbit-309d813db624.wav","narrator\nDeeper in, a little ring of toadstools stood waiting…":"audio/narration/narrator-8ecaa452c3ce.wav","narrator\nThe toadstools have lost their cheerful red caps. Tap each one to colour it in!":"audio/narration/narrator-10f31b608758.wav","narrator\nLovely and red! Colour the others too.":"audio/narration/narrator-2d3490151af8.wav","narrator\nA whole ring of red toadstools — wonderful!":"audio/narration/narrator-5088cf164244.wav","narrator\nCan you tap one? Let's give it some colour!":"audio/narration/narrator-55b218b4fc39.wav","narrator\nTap the one with the twinkly light. You can do it!":"audio/narration/narrator-ff2a2af91151.wav","narrator\nOne.":"audio/narration/narrator-8dfb9d3d35ad.wav","narrator\nTwo.":"audio/narration/narrator-68c9d02ffe5c.wav","narrator\nThree.":"audio/narration/narrator-2933f1af9082.wav","narrator\nFour.":"audio/narration/narrator-205147bf55db.wav","narrator\nFive.":"audio/narration/narrator-18a46b494cd0.wav","narrator\nSix.":"audio/narration/narrator-3f523497a625.wav","narrator\nSeven.":"audio/narration/narrator-87dd1c7e9ad8.wav","narrator\nEight.":"audio/narration/narrator-c0b3dfcaebb1.wav","narrator\nNine.":"audio/narration/narrator-3c5f3aa02609.wav","narrator\nTen.":"audio/narration/narrator-e8e9cc6623e0.wav"};function Kg(n){if(n.querySelector(".book-cover-art"))return;const e=document.createElement("canvas");e.width=1200,e.height=520,e.className="book-cover-art",e.setAttribute("role","img"),e.setAttribute("aria-label","Mabli and her rainbow hair, surrounded by smiling woodland friends in a little paper garden.");const t=e.getContext("2d");if(t){t.scale(2,2),Zg(t),jg(t,476,49),ul(t,118,69,62),ul(t,387,35,45),jn(t,Jl,153,49,73,61,"#edc955"),jn(t,Zl,373,59,64,62,"#70b4c3"),jn(t,ql,235,12,130,225,"#79a899"),jn(t,Kl,347,136,121,108,"#dc935c"),jn(t,jl,443,128,83,115,"#c6af91"),jn(t,Yl,102,168,94,77,"#80ad75"),jn(t,Ql,184,159,79,87,"#f4cc63");for(const[i,r,a]of[[73,221,"#df9fb2"],[91,228,"#e9bf6a"],[521,225,"#dca5bf"],[541,218,"#e7bf6a"]])Jg(t,i,r,a);for(const[i,r,a]of[[67,101,7],[232,48,5],[429,99,5],[542,108,8],[360,21,4]])Qg(t,i,r,a);n.classList.add("has-book-cover"),n.prepend(e)}}function jn(n,e,t,i,r,a,s){n.save(),n.translate(t,i),e(n,r,a,s,.8),n.restore()}function Zg(n){const e=n.createRadialGradient(300,122,25,300,133,275);e.addColorStop(0,"rgba(222,235,222,0.72)"),e.addColorStop(.65,"rgba(231,238,221,0.48)"),e.addColorStop(1,"rgba(246,239,220,0)"),n.fillStyle=e,n.fillRect(0,0,600,260),n.fillStyle="rgba(100,83,49,0.12)",n.beginPath(),n.ellipse(300,245,248,10,0,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(43,206),n.quadraticCurveTo(294,185,558,206),n.lineTo(543,240),n.quadraticCurveTo(300,260,57,240),n.closePath(),n.fillStyle="#f5e8c8",n.fill(),n.strokeStyle="#c9b88f",n.lineWidth=1.3,n.stroke(),n.beginPath(),n.moveTo(61,236),n.quadraticCurveTo(302,251,540,236),n.strokeStyle="rgba(170,142,93,0.45)",n.stroke(),n.beginPath(),n.moveTo(50,217),n.bezierCurveTo(71,155,142,137,205,171),n.bezierCurveTo(270,113,355,137,410,170),n.bezierCurveTo(475,137,536,168,551,217),n.closePath(),n.fillStyle="#b9d3c8",n.fill(),n.beginPath(),n.moveTo(46,219),n.bezierCurveTo(124,180,199,198,292,213),n.bezierCurveTo(378,175,485,185,557,219),n.quadraticCurveTo(302,251,46,219),n.closePath();const t=n.createLinearGradient(0,185,0,245);t.addColorStop(0,"#dce1b1"),t.addColorStop(1,"#aec68f"),n.fillStyle=t,n.fill(),n.strokeStyle="rgba(101,127,81,0.5)",n.lineWidth=1.2,n.stroke()}function jg(n,e,t){n.save(),n.translate(e,t),n.strokeStyle="#d4ad65",n.lineWidth=2,n.lineCap="round";for(let i=0;i<10;i++){const r=i/10*Math.PI*2;n.beginPath(),n.moveTo(Math.cos(r)*29,Math.sin(r)*29),n.lineTo(Math.cos(r)*35,Math.sin(r)*35),n.stroke()}n.beginPath(),n.arc(0,0,23,0,Math.PI*2),n.fillStyle="#f5da8a",n.fill(),n.stroke(),n.fillStyle="#8b754b";for(const i of[-7,7])n.beginPath(),n.arc(i,-2,1.7,0,Math.PI*2),n.fill();n.beginPath(),n.arc(0,2,8,.15*Math.PI,.85*Math.PI),n.stroke(),n.restore()}function ul(n,e,t,i){n.save(),n.translate(e,t),n.fillStyle="rgba(255,253,241,0.92)",n.strokeStyle="rgba(155,173,158,0.4)",n.lineWidth=1.1,n.beginPath(),n.ellipse(0,0,i*.5,i*.17,0,0,Math.PI*2),n.ellipse(-i*.13,-i*.12,i*.19,i*.2,0,0,Math.PI*2),n.ellipse(i*.15,-i*.09,i*.22,i*.18,0,0,Math.PI*2),n.fill(),n.stroke(),n.restore()}function Jg(n,e,t,i){n.strokeStyle="#7f9a6c",n.lineWidth=2,n.beginPath(),n.moveTo(e,t),n.quadraticCurveTo(e-4,t-11,e,t-20),n.stroke(),n.fillStyle=i;for(let r=0;r<5;r++){const a=r/5*Math.PI*2;n.beginPath(),n.ellipse(e+Math.cos(a)*5,t-20+Math.sin(a)*5,4,5,a,0,Math.PI*2),n.fill()}n.beginPath(),n.arc(e,t-20,3.3,0,Math.PI*2),n.fillStyle="#f8df93",n.fill()}function Qg(n,e,t,i){n.beginPath();for(let r=0;r<8;r++){const a=-Math.PI/2+r/8*Math.PI*2,s=r%2===0?i:i*.3,o=e+Math.cos(a)*s,l=t+Math.sin(a)*s;r===0?n.moveTo(o,l):n.lineTo(o,l)}n.closePath(),n.fillStyle="#d7b56b",n.fill()}class e_{element;numeral;pips;announcement;count=0;total=0;pulse=!1;disposed=!1;constructor(e=document.getElementById("ui")??document.body){this.element=document.createElement("div"),this.element.className="counting-display",this.element.setAttribute("role","status"),this.element.setAttribute("aria-live","polite"),this.element.setAttribute("aria-atomic","true"),this.element.hidden=!0,this.numeral=document.createElement("span"),this.numeral.className="counting-display__number",this.numeral.setAttribute("aria-hidden","true"),this.pips=document.createElement("div"),this.pips.className="counting-display__pips",this.pips.setAttribute("aria-hidden","true"),this.announcement=document.createElement("span"),this.announcement.className="counting-display__announcement",this.element.append(this.numeral,this.pips,this.announcement),e.appendChild(this.element)}show(e,t){if(this.disposed)return;if(!Number.isFinite(e)||!Number.isFinite(t)||e<1||t<1){this.reset();return}const i=Math.floor(t),r=Math.min(Math.floor(e),i);if(!(r===this.count&&i===this.total)){i!==this.total&&this.buildPips(i),this.count=r,this.total=i,this.numeral.textContent=String(r),this.announcement.textContent=`${r} of ${i} counted.`;for(const[a,s]of Array.from(this.pips.children).entries())s.classList.toggle("is-counted",a<r);this.pulse=!this.pulse,this.element.dataset.pulse=this.pulse?"odd":"even",this.element.hidden=!1}}reset(){this.disposed||(this.count=0,this.total=0,this.element.hidden=!0,this.numeral.textContent="",this.announcement.textContent="",this.pips.replaceChildren())}dispose(){this.disposed||(this.reset(),this.element.remove(),this.disposed=!0)}buildPips(e){const t=[];for(let i=0;i<e;i++){const r=document.createElement("span");r.className="counting-display__pip",t.push(r)}this.pips.replaceChildren(...t)}}function t_(n,e,t){if(t.width<=0||t.height<=0)return null;for(let h=n;h;h=h.parent)if(!h.visible)return null;e.updateWorldMatrix(!0,!1),n.updateWorldMatrix(!0,!0);const i=new zn,r=new zn;if(n.traverseVisible(h=>{const u=h;!u.isMesh||!u.userData.render||!(Array.isArray(u.material)?u.material:[u.material]).some(m=>m.visible)||(u.geometry.boundingBox||u.geometry.computeBoundingBox(),u.geometry.boundingBox&&(r.copy(u.geometry.boundingBox).applyMatrix4(u.matrixWorld),i.union(r)))}),i.isEmpty())return null;let a=1/0,s=1/0,o=-1/0,l=-1/0;const c=new U;for(const h of[i.min.x,i.max.x])for(const u of[i.min.y,i.max.y])for(const d of[i.min.z,i.max.z]){if(c.set(h,u,d).project(e),!Number.isFinite(c.x+c.y+c.z)||c.z<-1||c.z>1)return null;const m=t.left+(c.x+1)*t.width/2,g=t.top+(1-c.y)*t.height/2;a=Math.min(a,m),o=Math.max(o,m),s=Math.min(s,g),l=Math.max(l,g)}return o<=t.left||a>=t.left+t.width||l<=t.top||s>=t.top+t.height?null:{left:a,top:s,width:o-a,height:l-s}}const n_=[{left:12,top:7,size:18,duration:2.1,delay:-.1,rotation:-10},{left:49,top:0,size:14,duration:2.5,delay:-1.4,rotation:12},{left:87,top:9,size:21,duration:2.3,delay:-.8,rotation:16},{left:100,top:48,size:15,duration:2.6,delay:-1.9,rotation:-8},{left:86,top:90,size:19,duration:2.2,delay:-1.1,rotation:14},{left:48,top:100,size:15,duration:2.4,delay:-.6,rotation:-10},{left:12,top:92,size:20,duration:2.6,delay:-1.7,rotation:-15},{left:0,top:47,size:14,duration:2.1,delay:-.35,rotation:12}];class i_{constructor(e,t,i=document.getElementById("ui")??document.body){this.camera=e,this.canvas=t,this.element=document.createElement("div"),this.element.className="tap-hint",this.element.setAttribute("aria-hidden","true"),this.halo=document.createElement("div"),this.halo.className="tap-hint__halo",this.addSparkles(),this.finger=document.createElement("div"),this.finger.className="tap-hint__finger",this.finger.textContent="👆",this.element.append(this.halo,this.finger),i.appendChild(this.element),this.caption=document.getElementById("caption"),this.reset()}element;halo;finger;caption;target=null;disposed=!1;canShow(e){return!this.disposed&&this.layout(e)!==null}show(e,t=!1){this.disposed||(this.target=e,this.element.className=t?"tap-hint tap-hint--emphasized":"tap-hint",this.update())}update(){if(this.disposed||!this.target)return;if(this.target.isColored){this.reset();return}const e=this.layout(this.target);this.element.hidden=e===null,e&&(Object.assign(this.halo.style,{left:`${e.halo.left}px`,top:`${e.halo.top}px`,width:`${e.halo.width}px`,height:`${e.halo.height}px`}),this.finger.style.left=`${e.fingerLeft}px`,this.finger.style.top=`${e.fingerTop}px`)}reset(){this.target=null,this.element.hidden=!0,this.element.className="tap-hint"}dispose(){this.disposed||(this.reset(),this.element.remove(),this.disposed=!0)}addSparkles(){for(const[e,t]of n_.entries()){const i=document.createElement("span");i.className="tap-hint__sparkle",i.textContent=e%3===0?"✧":"✦",Object.assign(i.style,{left:`${t.left}%`,top:`${t.top}%`,fontSize:`${t.size}px`,animationDuration:`${t.duration}s`,animationDelay:`${t.delay}s`,rotate:`${t.rotation}deg`}),this.halo.appendChild(i)}}layout(e){if(e.isColored||!e.isOpen)return null;const t=this.canvas.getBoundingClientRect(),i=t_(e.motionGroup,this.camera,t);if(!i)return null;const r=t.left+8,a=t.top+8,s=t.right-8;let o=t.bottom-8;if(this.caption?.classList.contains("visible")){const d=this.caption.getBoundingClientRect();d.width>0&&d.height>0&&(o=Math.min(o,d.top-8))}const l=Math.max(r,i.left-12),c=Math.max(a,i.top-12),h=Math.min(s,i.left+i.width+12),u=Math.min(o,i.top+i.height+12);return h-l<12||u-c<12?null:{halo:{left:l,top:c,width:h-l,height:u-c},fingerLeft:Math.max(r,Math.min(s-44,h-12)),fingerTop:Math.max(a,Math.min(o-44,u-4))}}}const r_=[{text:"Can you tap one? Let's give it some colour!",speaker:"narrator"},{text:"Tap the one with the twinkly light. You can do it!",speaker:"narrator"}],a_={pond:"fish",stream:"fish",water:"fish",fish:"fish",tree:"acorns",acorn:"acorns",acorns:"acorns",bush:"butterfly",butterfly:"butterfly",rock:"snail",snail:"snail",mushroom:"stars",house:"stars",rainbow:"stars",stars:"stars"};function Ba(n){return a_[n]??"stars"}const s_={fish:()=>[{art:"fish",motion:"jump",x:0,y:.25,width:1.2,height:.85,duration:1.8},{art:"ripple",motion:"ring",x:0,y:0,width:1.1,height:1.1,duration:1.1},{art:"ripple",motion:"ring",x:.6,y:0,width:1.1,height:1.1,duration:.75,delay:1.6},...[-1,1,-.55,.55].map((n,e)=>({art:"drop",motion:"splash",x:.6,y:.1,width:.14,height:.2,duration:.65,delay:1.6+e*.04,direction:n}))],acorns:()=>[-1,0,1].map((n,e)=>({art:"acorn",motion:"fall",x:n*.33,y:.3,width:.36,height:.45,duration:1.6,delay:e*.12,direction:n})),butterfly:()=>[{art:"butterfly",motion:"fly",x:0,y:.3,width:.9,height:.72,duration:2.1}],snail:()=>[{art:"snail",motion:"peek",x:.25,y:.22,width:1.1,height:.78,duration:2.3}],stars:()=>Array.from({length:6},(n,e)=>({art:"star",motion:"spark",x:0,y:.15,width:.23+e%2*.06,height:.23+e%2*.06,duration:1.4,phase:e/6*Math.PI*2,direction:e%2===0?1:-1}))};function o_(n,e){const t=s_[n]();if(!e)return t;const i={...t[0],delay:0,duration:1.8,y:t[0].y+.35};return[i,{art:"ripple",motion:"ring",x:i.x,y:i.y-.15,width:1.15,height:1.15,duration:1.8}]}const l_={jump:(n,e)=>({x:(e.direction??1)*n*.6,y:Math.sin(n*Math.PI)*1.45,angle:(e.direction??1)*(.25-n*.5)}),fall:(n,e)=>({x:(e.direction??1)*n*.28,y:-1.9*n*n,angle:(e.direction??1)*n*.4}),fly:(n,e)=>({x:(e.direction??1)*n*1.2,y:n*1.1+Math.sin(n*Math.PI)*.4,scaleY:.9+Math.sin(n*Math.PI*8)*.1,angle:Math.sin(n*Math.PI*4)*.14}),peek:(n,e)=>({x:(e.direction??1)*yt.smoothstep(n,0,.6)*.28,y:yt.smoothstep(n,0,.2)*(1-yt.smoothstep(n,.7,1))*.45,angle:Math.sin(n*Math.PI*2)*.06}),spark:(n,e)=>({x:Math.cos(e.phase??0)*n*.95,y:Math.sin(e.phase??0)*n*.65+Math.sin(n*Math.PI)*.4,angle:(e.direction??1)*n*.65}),ring:n=>({scaleX:.35+n*1.9,scaleY:.35+n*1.9}),splash:(n,e)=>({x:(e.direction??1)*n*.5,y:Math.sin(n*Math.PI)*.55,scaleX:.9-n*.45,scaleY:.9-n*.45})};function c_(n,e,t=!1){const i=e-(n.delay??0);if(i<0||i>=n.duration)return null;const r=i/n.duration,a=t?{}:l_[n.motion](r,n);return{x:n.x+(a.x??0),y:n.y+(a.y??0),scaleX:a.scaleX??1,scaleY:a.scaleY??1,angle:a.angle??0,opacity:Math.min(1,.45+r*5)*(1-yt.smoothstep(r,.65,1))}}const h_=32;class u_{constructor(e,t){this.textures=t,this.group.name="paper-surprises",e.add(this.group);for(let i=0;i<h_;i++){const r=new nt({transparent:!0,alphaTest:.05,side:Xe,depthWrite:!1,depthTest:!1,fog:!1}),a=new Be(this.geometry,r);a.visible=!1,a.renderOrder=15,a.userData.surprise=!0,this.group.add(a),this.slots.push({mesh:a,inUse:!1})}}group=new Jt;geometry=new tt(1,1);slots=[];viewRotation=new Qt;worldRotation=new Qt;groundRotation=new Qt().setFromEuler(new an(-Math.PI/2,0,0));disposed=!1;get available(){return this.slots.filter(e=>!e.inUse).length}acquire(e){const t=this.slots.find(i=>!i.inUse);return t?(t.inUse=!0,t.mesh.material.map=this.textures.get(e),t.mesh.material.needsUpdate=!0,t):null}release(e){e.inUse=!1,e.mesh.visible=!1}faceCamera(e){this.group.updateWorldMatrix(!0,!1),this.group.getWorldQuaternion(this.worldRotation).invert(),e.getWorldQuaternion(this.viewRotation),this.viewRotation.premultiply(this.worldRotation)}show(e,t,i,r,a,s,o=!1){const l=e.mesh;l.position.copy(t),this.group.worldToLocal(l.position),o?l.quaternion.copy(this.worldRotation).multiply(this.groundRotation):l.quaternion.copy(this.viewRotation),l.rotateZ(a),l.scale.set(i,r,1),l.material.opacity=s,l.visible=!0}dispose(){if(!this.disposed){this.disposed=!0;for(const e of this.slots)e.mesh.material.dispose();this.geometry.dispose(),this.group.clear(),this.group.removeFromParent()}}}function d_(n,e,t,i,r=0){n.save(),n.scale(e,t),n.lineWidth=.012,n.lineJoin="round",n.lineCap="round",n.strokeStyle=ee,ut(n);const a="#f3bb67",s=Math.sin(r*3)*.018;n.beginPath(),n.moveTo(.32,.49),n.bezierCurveTo(.17,.32,.07,.3+s,.1,.43),n.quadraticCurveTo(.03,.54,.11,.59),n.bezierCurveTo(.07,.76,.22,.68,.34,.59),n.closePath(),n.fillStyle=a,n.fill(),n.stroke();for(const l of[.4,.53,.66])n.beginPath(),n.moveTo(.29,.54),n.quadraticCurveTo(.2,.52,.12,l),n.strokeStyle="rgba(164,111,50,0.45)",n.stroke();n.strokeStyle=ee,n.beginPath(),n.moveTo(.4,.35),n.quadraticCurveTo(.47,.14,.62,.24),n.quadraticCurveTo(.63,.31,.67,.37),n.closePath(),n.fillStyle=a,n.fill(),n.stroke(),n.beginPath(),n.ellipse(.56,.53,.3,.27,-.06,0,Math.PI*2);const o=n.createLinearGradient(.4,.27,.55,.81);o.addColorStop(0,"#ffe8a1"),o.addColorStop(.45,i),o.addColorStop(1,"#eaa052"),n.fillStyle=o,n.fill(),n.stroke(),n.beginPath(),n.moveTo(.51,.54),n.quadraticCurveTo(.36,.55,.39,.71),n.quadraticCurveTo(.54,.71,.57,.58),n.closePath(),n.fillStyle=a,n.fill(),n.stroke(),n.beginPath(),n.arc(.64,.57,.075,Math.PI*.62,Math.PI*1.3),n.strokeStyle="rgba(102,72,37,0.48)",n.stroke(),ir(n,.724,.435,.052,.073,r,1.5,!0),n.beginPath(),n.ellipse(.755,.58,.04,.032,-.2,0,Math.PI*2),n.fillStyle="rgba(229,127,113,0.45)",n.fill(),n.beginPath(),n.moveTo(.782,.53),n.quadraticCurveTo(.835,.565,.843,.51),n.strokeStyle=ee,n.stroke(),n.restore()}function f_(n,e,t){n.save(),n.scale(e,t),n.lineWidth=.024,n.lineCap="round",n.lineJoin="round",n.strokeStyle="#785a3c",n.beginPath(),n.moveTo(.23,.43),n.bezierCurveTo(.2,.67,.32,.83,.5,.9),n.bezierCurveTo(.68,.83,.8,.67,.77,.43),n.closePath();const i=n.createLinearGradient(.25,.4,.75,.8);i.addColorStop(0,"#edca8a"),i.addColorStop(1,"#bf8d51"),n.fillStyle=i,n.fill(),n.stroke(),n.beginPath(),n.moveTo(.2,.45),n.quadraticCurveTo(.18,.22,.5,.24),n.quadraticCurveTo(.82,.22,.8,.45),n.quadraticCurveTo(.5,.54,.2,.45),n.closePath(),n.fillStyle="#9d845d",n.fill(),n.stroke(),n.beginPath(),n.moveTo(.49,.25),n.quadraticCurveTo(.47,.12,.58,.1),n.stroke(),n.fillStyle="rgba(255,249,215,0.5)",n.beginPath(),n.ellipse(.37,.62,.055,.12,-.25,0,Math.PI*2),n.fill(),n.restore()}function p_(n,e,t){n.beginPath();for(let i=0;i<10;i++){const r=-Math.PI/2+i*Math.PI/5,a=Math.min(e,t)*(i%2===0?.4:.2),s=e/2+Math.cos(r)*a,o=t/2+Math.sin(r)*a;i===0?n.moveTo(s,o):n.lineTo(s,o)}n.closePath(),n.fillStyle="#ffe3a0",n.fill(),n.strokeStyle="#c39b53",n.lineWidth=e*.025,n.stroke()}function m_(n,e,t){n.strokeStyle="rgba(111,164,180,0.58)",n.lineWidth=Math.min(e,t)*.023,n.beginPath(),n.ellipse(e/2,t/2,e*.41,t*.41,0,0,Math.PI*2),n.stroke()}function g_(n,e,t){n.beginPath(),n.moveTo(e*.5,t*.1),n.bezierCurveTo(e*.2,t*.4,e*.1,t*.85,e*.5,t*.9),n.bezierCurveTo(e*.9,t*.85,e*.8,t*.4,e*.5,t*.1),n.fillStyle="#9dcfdf",n.fill(),n.strokeStyle="#72aaba",n.lineWidth=e*.07,n.stroke()}const __={fish:(n,e,t)=>d_(n,e,t,"#f4c364",.8),butterfly:(n,e,t)=>$l(n,e,t,"#d99bc5",.8),snail:(n,e,t)=>ec(n,e,t,"#a78dc0",.8),acorn:f_,star:p_,ripple:m_,drop:g_};class v_{textures=new Map;get(e){const t=this.textures.get(e);if(t)return t;const i=document.createElement("canvas");i.width=256,i.height=e==="star"||e==="ripple"?256:192;const r=i.getContext("2d");__[e](r,i.width,i.height);const a=new oi(i);return a.name=`paper-surprise-${e}`,a.colorSpace=wt,this.textures.set(e,a),a}dispose(){for(const e of this.textures.values()){e.dispose();const t=e.image;t.width=0,t.height=0}this.textures.clear()}}const M_=4;class y_{constructor(e,t){this.root=e,this.camera=t,this.pool=new u_(e,this.textures)}textures=new v_;pool;active=[];point=new U;reducedMotion=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;elapsed=0;disposed=!1;trigger(e,t){if(this.disposed)return;t.updateWorldMatrix(!0,!0);const i=new zn().setFromObject(t,!0),r=i.isEmpty()?t.getWorldPosition(new U):i.getCenter(new U),a=Ba(e)==="fish"?r.y+.023:this.groundY();this.spawn(e,r,a)}triggerAt(e,t){const i=Ba(e)==="fish"?t.y+.035:this.groundY();this.spawn(e,t,i)}spawn(e,t,i){if(this.disposed||!Number.isFinite(t.x+t.y+t.z))return;const r=Ba(e),a=o_(r,this.reducedMotion);for(;this.active.length>=M_||this.pool.available<a.length;){const d=this.active.shift();if(!d)break;this.release(d)}this.camera.updateWorldMatrix(!0,!1);const s=this.camera.getWorldQuaternion(new Qt),o=new U(1,0,0).applyQuaternion(s),l=new U(0,1,0).applyQuaternion(s),c=t.clone();r==="fish"&&(c.addScaledVector(o,1.9),c.y=i),this.keepOnPage(c,r);const h=[];for(const d of a){const m=this.pool.acquire(d.art);m&&h.push({particle:d,slot:m})}const u={born:this.elapsed,duration:Math.max(...a.map(d=>d.duration+(d.delay??0))),origin:c,surfaceY:i,right:o,up:l,pieces:h};this.active.push(u),this.pool.faceCamera(this.camera),this.draw(u,0)}update(e){if(!this.disposed){this.elapsed+=Math.max(0,e),this.pool.faceCamera(this.camera);for(let t=this.active.length-1;t>=0;t--){const i=this.active[t],r=this.elapsed-i.born;r>=i.duration?(this.release(i),this.active.splice(t,1)):this.draw(i,r)}}}dispose(){if(!this.disposed){this.disposed=!0;for(const e of this.active)this.release(e);this.active.length=0,this.pool.dispose(),this.textures.dispose()}}draw(e,t){for(const{particle:i,slot:r}of e.pieces){const a=c_(i,t,this.reducedMotion);if(!a){r.mesh.visible=!1;continue}this.point.copy(e.origin).addScaledVector(e.right,a.x).addScaledVector(e.up,a.y);const s=i.art==="ripple";s&&(this.point.y=e.surfaceY),this.pool.show(r,this.point,i.width*a.scaleX,i.height*a.scaleY,a.angle,a.opacity,s)}}release(e){for(const{slot:t}of e.pieces)this.pool.release(t)}keepOnPage(e,t){const i=e.y;if(this.point.copy(e).project(this.camera),this.point.z<-1||this.point.z>1||!Number.isFinite(this.point.x+this.point.y)){this.camera.getWorldDirection(this.point),e.copy(this.camera.getWorldPosition(new U)).addScaledVector(this.point,4);return}const r=t==="stars"?.9:.68;if(this.point.x=yt.clamp(this.point.x,-r,r),t!=="fish"){this.point.y=yt.clamp(this.point.y,t==="stars"?-.85:-.48,t==="stars"?.85:.55);const a=new U(0,0,-3).applyMatrix4(this.camera.projectionMatrix).z,s=new U(0,0,-6).applyMatrix4(this.camera.projectionMatrix).z;this.point.z=yt.clamp(this.point.z,a,s)}e.copy(this.point.unproject(this.camera)),t==="fish"&&(e.y=i)}groundY(){return this.root.getWorldPosition(new U).y+.035}}const dl=document.getElementById("game"),si=new c0(dl,$g,new e_,{hints:r_,createView:n=>new i_(n,dl)},{ground:et.ground,createEffects:(n,e)=>new y_(n,e)});Kg(document.getElementById("title-card"));const xs=Yg();function Xs(n,e=!1){const t=xs[n].createScene();n+1<xs.length&&(t.onComplete=()=>Xs(n+1,!0)),e?si.scenes.go(t,{wipe:!0}):si.start(t)}const ea=new URLSearchParams(location.search);ea.has("debug")&&ea.has("silent")&&(si.narrator.setEnabled(!1),si.sound.setEnabled(!1));const S_=ea.has("debug")?ea.get("episode"):null,b_=Math.max(0,xs.findIndex(n=>n.id===S_));si.hud.onStart(()=>{Xs(b_)});si.hud.onRestart(()=>{si.sound.resume(),Xs(0,!0)});
