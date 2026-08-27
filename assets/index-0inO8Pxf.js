(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ea="168",Wl=0,Xa=1,Xl=2,Zo=1,ql=2,hn=3,pn=0,Ut=1,et=2,In=0,bi=1,qa=2,Ya=3,Ka=4,Yl=5,$n=100,Kl=101,$l=102,Zl=103,jl=104,Jl=200,Ql=201,ec=202,tc=203,ks=204,Hs=205,nc=206,ic=207,rc=208,sc=209,ac=210,oc=211,lc=212,cc=213,hc=214,uc=0,dc=1,fc=2,Yr=3,pc=4,mc=5,gc=6,_c=7,jo=0,vc=1,Mc=2,Dn=0,Sc=1,yc=2,Tc=3,Ec=4,xc=5,bc=6,Ac=7,Jo=300,Pi=301,wi=302,Gs=303,Vs=304,ts=306,Kr=1e3,jn=1001,Ws=1002,Vt=1003,Cc=1004,or=1005,Kt=1006,ls=1007,Jn=1008,mn=1009,Qo=1010,el=1011,ji=1012,xa=1013,ei=1014,un=1015,Qi=1016,ba=1017,Aa=1018,Li=1020,tl=35902,nl=1021,il=1022,jt=1023,rl=1024,sl=1025,Ai=1026,Ii=1027,al=1028,Ca=1029,ol=1030,Ra=1031,Pa=1033,kr=33776,Hr=33777,Gr=33778,Vr=33779,Xs=35840,qs=35841,Ys=35842,Ks=35843,$s=36196,Zs=37492,js=37496,Js=37808,Qs=37809,ea=37810,ta=37811,na=37812,ia=37813,ra=37814,sa=37815,aa=37816,oa=37817,la=37818,ca=37819,ha=37820,ua=37821,Wr=36492,da=36494,fa=36495,ll=36283,pa=36284,ma=36285,ga=36286,Rc=3200,Pc=3201,wc=0,Lc=1,wn="",Ct="srgb",Fn="srgb-linear",wa="display-p3",ns="display-p3-linear",$r="linear",tt="srgb",Zr="rec709",jr="p3",ii=7680,$a=519,Ic=512,Dc=513,Uc=514,cl=515,Nc=516,Fc=517,Oc=518,Bc=519,_a=35044,Za="300 es",dn=2e3,Jr=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ja=1234567;const Ki=Math.PI/180,Ji=180/Math.PI;function fn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function La(n,e){return(n%e+e)%e}function zc(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function kc(n,e,t){return n!==e?(t-n)/(e-n):0}function $i(n,e,t){return(1-t)*n+t*e}function Hc(n,e,t,i){return $i(n,e,1-Math.exp(-t*i))}function Gc(n,e=1){return e-Math.abs(La(n,e*2)-e)}function Vc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Wc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Xc(n,e){return n+Math.floor(Math.random()*(e-n+1))}function qc(n,e){return n+Math.random()*(e-n)}function Yc(n){return n*(.5-Math.random())}function Kc(n){n!==void 0&&(ja=n);let e=ja+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $c(n){return n*Ki}function Zc(n){return n*Ji}function jc(n){return(n&n-1)===0&&n!==0}function Jc(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function eh(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),h=s((e+i)/2),c=a((e+i)/2),u=s((e-i)/2),f=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*c,l*u,l*f,o*h);break;case"YZY":n.set(l*f,o*c,l*u,o*h);break;case"ZXZ":n.set(l*u,l*f,o*c,o*h);break;case"XZX":n.set(o*c,l*g,l*m,o*h);break;case"YXY":n.set(l*m,o*c,l*g,o*h);break;case"ZYZ":n.set(l*g,l*m,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function je(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const th={DEG2RAD:Ki,RAD2DEG:Ji,generateUUID:fn,clamp:Lt,euclideanModulo:La,mapLinear:zc,inverseLerp:kc,lerp:$i,damp:Hc,pingpong:Gc,smoothstep:Vc,smootherstep:Wc,randInt:Xc,randFloat:qc,randFloatSpread:Yc,seededRandom:Kc,degToRad:$c,radToDeg:Zc,isPowerOfTwo:jc,ceilPowerOfTwo:Jc,floorPowerOfTwo:Qc,setQuaternionFromProperEuler:eh,normalize:je,denormalize:$t};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,i,r,s,a,o,l,h){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,h)}set(e,t,i,r,s,a,o,l,h){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],f=i[2],m=i[5],g=i[8],_=r[0],p=r[3],d=r[6],T=r[1],y=r[4],x=r[7],I=r[2],A=r[5],C=r[8];return s[0]=a*_+o*T+l*I,s[3]=a*p+o*y+l*A,s[6]=a*d+o*x+l*C,s[1]=h*_+c*T+u*I,s[4]=h*p+c*y+u*A,s[7]=h*d+c*x+u*C,s[2]=f*_+m*T+g*I,s[5]=f*p+m*y+g*A,s[8]=f*d+m*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-i*s*c+i*o*l+r*s*h-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=c*a-o*h,f=o*l-c*s,m=h*s-a*l,g=t*u+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*h-c*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=m*_,e[7]=(i*l-h*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),h=Math.sin(s);return this.set(i*l,i*h,-i*(l*a+h*o)+a+e,-r*h,r*l,-r*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(cs.makeScale(e,t)),this}rotate(e){return this.premultiply(cs.makeRotation(-e)),this}translate(e,t){return this.premultiply(cs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cs=new Ne;function hl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nh(){const n=Qr("canvas");return n.style.display="block",n}const Ja={};function Ci(n){n in Ja||(Ja[n]=!0,console.warn(n))}function ih(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Qa=new Ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eo=new Ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oi={[Fn]:{transfer:$r,primaries:Zr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Ct]:{transfer:tt,primaries:Zr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ns]:{transfer:$r,primaries:jr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(eo),fromReference:n=>n.applyMatrix3(Qa)},[wa]:{transfer:tt,primaries:jr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(eo),fromReference:n=>n.applyMatrix3(Qa).convertLinearToSRGB()}},rh=new Set([Fn,ns]),$e={enabled:!0,_workingColorSpace:Fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!rh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Oi[e].toReference,r=Oi[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Oi[n].primaries},getTransfer:function(n){return n===wn?$r:Oi[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Oi[e].luminanceCoefficients)}};function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ri;class sh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ri===void 0&&(ri=Qr("canvas")),ri.width=e.width,ri.height=e.height;const i=ri.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ri(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ah=0;class ul{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=fn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(us(r[a].image)):s.push(us(r[a]))}else s=us(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function us(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oh=0;class Dt extends Ui{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=jn,r=jn,s=Kt,a=Jn,o=jt,l=mn,h=Dt.DEFAULT_ANISOTROPY,c=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=fn(),this.name="",this.source=new ul(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kr:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kr:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Jo;Dt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,h=l[0],c=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(h+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(h+1)/2,x=(m+1)/2,I=(d+1)/2,A=(c+f)/4,C=(u+_)/4,O=(g+p)/4;return y>x&&y>I?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=C/i):x>I?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=O/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=C/s,r=O/s),this.set(i,r,s,t),this}let T=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-c)*(f-c));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(u-_)/T,this.z=(f-c)/T,this.w=Math.acos((h+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lh extends Ui{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Dt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ul(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends lh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class dl extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ch extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class er{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],h=i[r+1],c=i[r+2],u=i[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||h!==m||c!==g){let p=1-o;const d=l*f+h*m+c*g+u*_,T=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const I=Math.sqrt(y),A=Math.atan2(I,d*T);p=Math.sin(p*A)/I,o=Math.sin(o*A)/I}const x=o*T;if(l=l*p+f*x,h=h*p+m*x,c=c*p+g*x,u=u*p+_*x,p===1-o){const I=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=I,h*=I,c*=I,u*=I}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],h=i[r+2],c=i[r+3],u=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+c*u+l*m-h*f,e[t+1]=l*g+c*f+h*u-o*m,e[t+2]=h*g+c*m+o*f-l*u,e[t+3]=c*g-o*u-l*f-h*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(r/2),u=o(s/2),f=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*c*u+h*m*g,this._y=h*m*u-f*c*g,this._z=h*c*g+f*m*u,this._w=h*c*u-f*m*g;break;case"YXZ":this._x=f*c*u+h*m*g,this._y=h*m*u-f*c*g,this._z=h*c*g-f*m*u,this._w=h*c*u+f*m*g;break;case"ZXY":this._x=f*c*u-h*m*g,this._y=h*m*u+f*c*g,this._z=h*c*g+f*m*u,this._w=h*c*u-f*m*g;break;case"ZYX":this._x=f*c*u-h*m*g,this._y=h*m*u+f*c*g,this._z=h*c*g-f*m*u,this._w=h*c*u+f*m*g;break;case"YZX":this._x=f*c*u+h*m*g,this._y=h*m*u+f*c*g,this._z=h*c*g-f*m*u,this._w=h*c*u-f*m*g;break;case"XZY":this._x=f*c*u-h*m*g,this._y=h*m*u-f*c*g,this._z=h*c*g+f*m*u,this._w=h*c*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],u=t[10],f=i+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-h)*m,this._z=(a-r)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(c-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+h)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(s-h)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(a-r)/m,this._x=(s+h)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+a*o+r*h-s*l,this._y=r*c+a*l+s*o-i*h,this._z=s*c+a*h+i*l-r*o,this._w=a*c-i*o-r*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,o),u=Math.sin((1-t)*c)/h,f=Math.sin(t*c)/h;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(to.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(to.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*r-o*i),c=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*h+a*u-o*c,this.y=i+l*c+o*h-s*u,this.z=r+l*u+s*c-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ds.copy(this).projectOnVector(e),this.sub(ds)}reflect(e){return this.sub(ds.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ds=new U,to=new er;class tr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(s,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lr.copy(i.boundingBox)),lr.applyMatrix4(e.matrixWorld),this.union(lr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bi),cr.subVectors(this.max,Bi),si.subVectors(e.a,Bi),ai.subVectors(e.b,Bi),oi.subVectors(e.c,Bi),xn.subVectors(ai,si),bn.subVectors(oi,ai),Hn.subVectors(si,oi);let t=[0,-xn.z,xn.y,0,-bn.z,bn.y,0,-Hn.z,Hn.y,xn.z,0,-xn.x,bn.z,0,-bn.x,Hn.z,0,-Hn.x,-xn.y,xn.x,0,-bn.y,bn.x,0,-Hn.y,Hn.x,0];return!fs(t,si,ai,oi,cr)||(t=[1,0,0,0,1,0,0,0,1],!fs(t,si,ai,oi,cr))?!1:(hr.crossVectors(xn,bn),t=[hr.x,hr.y,hr.z],fs(t,si,ai,oi,cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new U,new U,new U,new U,new U,new U,new U,new U],Xt=new U,lr=new tr,si=new U,ai=new U,oi=new U,xn=new U,bn=new U,Hn=new U,Bi=new U,cr=new U,hr=new U,Gn=new U;function fs(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Gn.fromArray(n,s);const o=r.x*Math.abs(Gn.x)+r.y*Math.abs(Gn.y)+r.z*Math.abs(Gn.z),l=e.dot(Gn),h=t.dot(Gn),c=i.dot(Gn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const hh=new tr,zi=new U,ps=new U;class Ia{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zi.subVectors(e,this.center);const t=zi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(zi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ps.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zi.copy(e.center).add(ps)),this.expandByPoint(zi.copy(e.center).sub(ps))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new U,ms=new U,ur=new U,An=new U,gs=new U,dr=new U,_s=new U;class fl{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.origin).addScaledVector(this.direction,t),an.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ms.copy(e).add(t).multiplyScalar(.5),ur.copy(t).sub(e).normalize(),An.copy(this.origin).sub(ms);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ur),o=An.dot(this.direction),l=-An.dot(ur),h=An.lengthSq(),c=Math.abs(1-a*a);let u,f,m,g;if(c>0)if(u=a*l-o,f=a*o-l,g=s*c,u>=0)if(f>=-g)if(f<=g){const _=1/c;u*=_,f*=_,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+h}else f=s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+h;else f=-s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+h;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+h):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+h):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+h);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ms).addScaledVector(ur,f),m}intersectSphere(e,t){an.subVectors(e.center,this.origin);const i=an.dot(this.direction),r=an.dot(an)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(i=(e.min.x-f.x)*h,r=(e.max.x-f.x)*h):(i=(e.max.x-f.x)*h,r=(e.min.x-f.x)*h),c>=0?(s=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,i,r,s){gs.subVectors(t,e),dr.subVectors(i,e),_s.crossVectors(gs,dr);let a=this.direction.dot(_s),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,e);const l=o*this.direction.dot(dr.crossVectors(An,dr));if(l<0)return null;const h=o*this.direction.dot(gs.cross(An));if(h<0||l+h>a)return null;const c=-o*An.dot(_s);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,r,s,a,o,l,h,c,u,f,m,g,_,p){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,h,c,u,f,m,g,_,p)}set(e,t,i,r,s,a,o,l,h,c,u,f,m,g,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=h,d[6]=c,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/li.setFromMatrixColumn(e,0).length(),s=1/li.setFromMatrixColumn(e,1).length(),a=1/li.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),h=Math.sin(r),c=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*c,m=a*u,g=o*c,_=o*u;t[0]=l*c,t[4]=-l*u,t[8]=h,t[1]=m+g*h,t[5]=f-_*h,t[9]=-o*l,t[2]=_-f*h,t[6]=g+m*h,t[10]=a*l}else if(e.order==="YXZ"){const f=l*c,m=l*u,g=h*c,_=h*u;t[0]=f+_*o,t[4]=g*o-m,t[8]=a*h,t[1]=a*u,t[5]=a*c,t[9]=-o,t[2]=m*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*c,m=l*u,g=h*c,_=h*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*c,t[9]=_-f*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*c,m=a*u,g=o*c,_=o*u;t[0]=l*c,t[4]=g*h-m,t[8]=f*h+_,t[1]=l*u,t[5]=_*h+f,t[9]=m*h-g,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*h,g=o*l,_=o*h;t[0]=l*c,t[4]=_-f*u,t[8]=g*u+m,t[1]=u,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=m*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,m=a*h,g=o*l,_=o*h;t[0]=l*c,t[4]=-u,t[8]=h*c,t[1]=f*u+_,t[5]=a*c,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*c,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uh,e,dh)}lookAt(e,t,i){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Cn.crossVectors(i,Bt),Cn.lengthSq()===0&&(Math.abs(i.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Cn.crossVectors(i,Bt)),Cn.normalize(),fr.crossVectors(Bt,Cn),r[0]=Cn.x,r[4]=fr.x,r[8]=Bt.x,r[1]=Cn.y,r[5]=fr.y,r[9]=Bt.y,r[2]=Cn.z,r[6]=fr.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],d=i[14],T=i[3],y=i[7],x=i[11],I=i[15],A=r[0],C=r[4],O=r[8],E=r[12],S=r[1],P=r[5],H=r[9],z=r[13],K=r[2],Y=r[6],W=r[10],j=r[14],k=r[3],le=r[7],de=r[11],_e=r[15];return s[0]=a*A+o*S+l*K+h*k,s[4]=a*C+o*P+l*Y+h*le,s[8]=a*O+o*H+l*W+h*de,s[12]=a*E+o*z+l*j+h*_e,s[1]=c*A+u*S+f*K+m*k,s[5]=c*C+u*P+f*Y+m*le,s[9]=c*O+u*H+f*W+m*de,s[13]=c*E+u*z+f*j+m*_e,s[2]=g*A+_*S+p*K+d*k,s[6]=g*C+_*P+p*Y+d*le,s[10]=g*O+_*H+p*W+d*de,s[14]=g*E+_*z+p*j+d*_e,s[3]=T*A+y*S+x*K+I*k,s[7]=T*C+y*P+x*Y+I*le,s[11]=T*O+y*H+x*W+I*de,s[15]=T*E+y*z+x*j+I*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],u=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+s*l*u-r*h*u-s*o*f+i*h*f+r*o*m-i*l*m)+_*(+t*l*m-t*h*f+s*a*f-r*a*m+r*h*c-s*l*c)+p*(+t*h*u-t*o*m-s*a*u+i*a*m+s*o*c-i*h*c)+d*(-r*o*c-t*l*u+t*o*f+r*a*u-i*a*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],T=u*p*h-_*f*h+_*l*m-o*p*m-u*l*d+o*f*d,y=g*f*h-c*p*h-g*l*m+a*p*m+c*l*d-a*f*d,x=c*_*h-g*u*h+g*o*m-a*_*m-c*o*d+a*u*d,I=g*u*l-c*_*l-g*o*f+a*_*f+c*o*p-a*u*p,A=t*T+i*y+r*x+s*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=T*C,e[1]=(_*f*s-u*p*s-_*r*m+i*p*m+u*r*d-i*f*d)*C,e[2]=(o*p*s-_*l*s+_*r*h-i*p*h-o*r*d+i*l*d)*C,e[3]=(u*l*s-o*f*s-u*r*h+i*f*h+o*r*m-i*l*m)*C,e[4]=y*C,e[5]=(c*p*s-g*f*s+g*r*m-t*p*m-c*r*d+t*f*d)*C,e[6]=(g*l*s-a*p*s-g*r*h+t*p*h+a*r*d-t*l*d)*C,e[7]=(a*f*s-c*l*s+c*r*h-t*f*h-a*r*m+t*l*m)*C,e[8]=x*C,e[9]=(g*u*s-c*_*s-g*i*m+t*_*m+c*i*d-t*u*d)*C,e[10]=(a*_*s-g*o*s+g*i*h-t*_*h-a*i*d+t*o*d)*C,e[11]=(c*o*s-a*u*s-c*i*h+t*u*h+a*i*m-t*o*m)*C,e[12]=I*C,e[13]=(c*_*r-g*u*r+g*i*f-t*_*f-c*i*p+t*u*p)*C,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*p-t*o*p)*C,e[15]=(a*u*r-c*o*r+c*i*l-t*u*l-a*i*f+t*o*f)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,h=s*a,c=s*o;return this.set(h*a+i,h*o-r*l,h*l+r*o,0,h*o+r*l,c*o+i,c*l-r*a,0,h*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,h=s+s,c=a+a,u=o+o,f=s*h,m=s*c,g=s*u,_=a*c,p=a*u,d=o*u,T=l*h,y=l*c,x=l*u,I=i.x,A=i.y,C=i.z;return r[0]=(1-(_+d))*I,r[1]=(m+x)*I,r[2]=(g-y)*I,r[3]=0,r[4]=(m-x)*A,r[5]=(1-(f+d))*A,r[6]=(p+T)*A,r[7]=0,r[8]=(g+y)*C,r[9]=(p-T)*C,r[10]=(1-(f+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=li.set(r[0],r[1],r[2]).length();const a=li.set(r[4],r[5],r[6]).length(),o=li.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);const h=1/s,c=1/a,u=1/o;return qt.elements[0]*=h,qt.elements[1]*=h,qt.elements[2]*=h,qt.elements[4]*=c,qt.elements[5]*=c,qt.elements[6]*=c,qt.elements[8]*=u,qt.elements[9]*=u,qt.elements[10]*=u,t.setFromRotationMatrix(qt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=dn){const l=this.elements,h=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r);let m,g;if(o===dn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Jr)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=dn){const l=this.elements,h=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*h,m=(i+r)*c;let g,_;if(o===dn)g=(a+s)*u,_=-2*u;else if(o===Jr)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const li=new U,qt=new ut,uh=new U(0,0,0),dh=new U(1,1,1),Cn=new U,fr=new U,Bt=new U,no=new ut,io=new er;class gn{constructor(e=0,t=0,i=0,r=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],h=r[5],c=r[9],u=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return no.makeRotationFromQuaternion(e),this.setFromRotationMatrix(no,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return io.setFromEuler(this),this.setFromQuaternion(io,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Da{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fh=0;const ro=new U,ci=new er,on=new ut,pr=new U,ki=new U,ph=new U,mh=new er,so=new U(1,0,0),ao=new U(0,1,0),oo=new U(0,0,1),lo={type:"added"},gh={type:"removed"},hi={type:"childadded",child:null},vs={type:"childremoved",child:null};class Nt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new U,t=new gn,i=new er,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ne}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.multiply(ci),this}rotateOnWorldAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.premultiply(ci),this}rotateX(e){return this.rotateOnAxis(so,e)}rotateY(e){return this.rotateOnAxis(ao,e)}rotateZ(e){return this.rotateOnAxis(oo,e)}translateOnAxis(e,t){return ro.copy(e).applyQuaternion(this.quaternion),this.position.add(ro.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(so,e)}translateY(e){return this.translateOnAxis(ao,e)}translateZ(e){return this.translateOnAxis(oo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pr.copy(e):pr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(ki,pr,this.up):on.lookAt(pr,ki,this.up),this.quaternion.setFromRotationMatrix(on),r&&(on.extractRotation(r.matrixWorld),ci.setFromRotationMatrix(on),this.quaternion.premultiply(ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lo),hi.child=e,this.dispatchEvent(hi),hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gh),vs.child=e,this.dispatchEvent(vs),vs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lo),hi.child=e,this.dispatchEvent(hi),hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,e,ph),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,mh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),u=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new U(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new U,ln=new U,Ms=new U,cn=new U,ui=new U,di=new U,co=new U,Ss=new U,ys=new U,Ts=new U;class Zt{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yt.subVectors(r,t),ln.subVectors(i,t),Ms.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(ln),l=Yt.dot(Ms),h=ln.dot(ln),c=ln.dot(Ms),u=a*h-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,m=(h*l-o*c)*f,g=(a*c-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,cn.x),l.addScaledVector(a,cn.y),l.addScaledVector(o,cn.z),l)}static isFrontFacing(e,t,i,r){return Yt.subVectors(i,t),ln.subVectors(e,t),Yt.cross(ln).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Yt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Zt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ui.subVectors(r,i),di.subVectors(s,i),Ss.subVectors(e,i);const l=ui.dot(Ss),h=di.dot(Ss);if(l<=0&&h<=0)return t.copy(i);ys.subVectors(e,r);const c=ui.dot(ys),u=di.dot(ys);if(c>=0&&u<=c)return t.copy(r);const f=l*u-c*h;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(ui,a);Ts.subVectors(e,s);const m=ui.dot(Ts),g=di.dot(Ts);if(g>=0&&m<=g)return t.copy(s);const _=m*h-l*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),t.copy(i).addScaledVector(di,o);const p=c*g-m*u;if(p<=0&&u-c>=0&&m-g>=0)return co.subVectors(s,r),o=(u-c)/(u-c+(m-g)),t.copy(r).addScaledVector(co,o);const d=1/(p+_+f);return a=_*d,o=f*d,t.copy(i).addScaledVector(ui,a).addScaledVector(di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},mr={h:0,s:0,l:0};function Es(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=La(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Es(a,s,e+1/3),this.g=Es(a,s,e),this.b=Es(a,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=Ct){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const i=pl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return $e.fromWorkingColorSpace(At.copy(this),e),Math.round(Lt(At.r*255,0,255))*65536+Math.round(Lt(At.g*255,0,255))*256+Math.round(Lt(At.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(At.copy(this),t);const i=At.r,r=At.g,s=At.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,h;const c=(o+a)/2;if(o===a)l=0,h=0;else{const u=a-o;switch(h=c<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Ct){$e.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,r=At.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(mr);const i=$i(Rn.h,mr.h,t),r=$i(Rn.s,mr.s,t),s=$i(Rn.l,mr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Ge;Ge.NAMES=pl;let _h=0;class nr extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=bi,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ks,this.blendDst=Hs,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$a,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(i.blending=this.blending),this.side!==pn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ks&&(i.blendSrc=this.blendSrc),this.blendDst!==Hs&&(i.blendDst=this.blendDst),this.blendEquation!==$n&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$a&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class at extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new U,gr=new Oe;class Jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_a,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ci("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$t(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$t(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$t(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$t(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$t(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array),r=je(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array),r=je(r,this.array),s=je(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_a&&(e.usage=this.usage),e}}class ml extends Jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gl extends Jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tn extends Jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let vh=0;const Ht=new ut,xs=new Nt,fi=new U,zt=new tr,Hi=new tr,St=new U;class _n extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hl(e)?gl:ml)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return xs.lookAt(e),xs.updateMatrix(),this.applyMatrix4(xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];zt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ia);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Hi.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(zt.min,Hi.min),zt.expandByPoint(St),St.addVectors(zt.max,Hi.max),zt.expandByPoint(St)):(zt.expandByPoint(Hi.min),zt.expandByPoint(Hi.max))}zt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)St.fromBufferAttribute(o,h),l&&(fi.fromBufferAttribute(e,h),St.add(fi)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<i.count;O++)o[O]=new U,l[O]=new U;const h=new U,c=new U,u=new U,f=new Oe,m=new Oe,g=new Oe,_=new U,p=new U;function d(O,E,S){h.fromBufferAttribute(i,O),c.fromBufferAttribute(i,E),u.fromBufferAttribute(i,S),f.fromBufferAttribute(s,O),m.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),c.sub(h),u.sub(h),m.sub(f),g.sub(f);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(P),p.copy(u).multiplyScalar(m.x).addScaledVector(c,-g.x).multiplyScalar(P),o[O].add(_),o[E].add(_),o[S].add(_),l[O].add(p),l[E].add(p),l[S].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let O=0,E=T.length;O<E;++O){const S=T[O],P=S.start,H=S.count;for(let z=P,K=P+H;z<K;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new U,x=new U,I=new U,A=new U;function C(O){I.fromBufferAttribute(r,O),A.copy(I);const E=o[O];y.copy(E),y.sub(I.multiplyScalar(I.dot(E))).normalize(),x.crossVectors(A,E);const P=x.dot(l[O])<0?-1:1;a.setXYZW(O,y.x,y.y,y.z,P)}for(let O=0,E=T.length;O<E;++O){const S=T[O],P=S.start,H=S.count;for(let z=P,K=P+H;z<K;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,h=new U,c=new U,u=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),c.subVectors(a,s),u.subVectors(r,s),c.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,p),o.add(c),l.add(c),h.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,h.x,h.y,h.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,s),u.subVectors(r,s),c.cross(u),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){const h=o.array,c=o.itemSize,u=o.normalized,f=new h.constructor(l.length*c);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*c;for(let d=0;d<c;d++)f[g++]=h[m++]}return new Jt(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],h=e(l,i);t.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const l=[],h=s[o];for(let c=0,u=h.length;c<u;c++){const f=h[c],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const h=i[l];e.data.attributes[l]=h.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,f=h.length;u<f;u++){const m=h[u];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const h in r){const c=r[h];this.setAttribute(h,c.clone(t))}const s=e.morphAttributes;for(const h in s){const c=[],u=s[h];for(let f=0,m=u.length;f<m;f++)c.push(u[f].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,c=a.length;h<c;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ho=new ut,Vn=new fl,_r=new Ia,uo=new U,pi=new U,mi=new U,gi=new U,bs=new U,vr=new U,Mr=new Oe,Sr=new Oe,yr=new Oe,fo=new U,po=new U,mo=new U,Tr=new U,Er=new U;class We extends Nt{constructor(e=new _n,t=new at){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){vr.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const c=o[l],u=s[l];c!==0&&(bs.fromBufferAttribute(u,e),a?vr.addScaledVector(bs,c):vr.addScaledVector(bs.sub(t),c))}t.add(vr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere),_r.applyMatrix4(s),Vn.copy(e.ray).recast(e.near),!(_r.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(_r,uo)===null||Vn.origin.distanceToSquared(uo)>(e.far-e.near)**2))&&(ho.copy(s).invert(),Vn.copy(e.ray).applyMatrix4(ho),!(i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,h=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=a[p.materialIndex],T=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let x=T,I=y;x<I;x+=3){const A=o.getX(x),C=o.getX(x+1),O=o.getX(x+2);r=xr(this,d,e,i,h,c,u,A,C,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const T=o.getX(p),y=o.getX(p+1),x=o.getX(p+2);r=xr(this,a,e,i,h,c,u,T,y,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=a[p.materialIndex],T=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=T,I=y;x<I;x+=3){const A=x,C=x+1,O=x+2;r=xr(this,d,e,i,h,c,u,A,C,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const T=p,y=p+1,x=p+2;r=xr(this,a,e,i,h,c,u,T,y,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Mh(n,e,t,i,r,s,a,o){let l;if(e.side===Ut?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===pn,o),l===null)return null;Er.copy(o),Er.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Er);return h<t.near||h>t.far?null:{distance:h,point:Er.clone(),object:n}}function xr(n,e,t,i,r,s,a,o,l,h){n.getVertexPosition(o,pi),n.getVertexPosition(l,mi),n.getVertexPosition(h,gi);const c=Mh(n,e,t,i,pi,mi,gi,Tr);if(c){r&&(Mr.fromBufferAttribute(r,o),Sr.fromBufferAttribute(r,l),yr.fromBufferAttribute(r,h),c.uv=Zt.getInterpolation(Tr,pi,mi,gi,Mr,Sr,yr,new Oe)),s&&(Mr.fromBufferAttribute(s,o),Sr.fromBufferAttribute(s,l),yr.fromBufferAttribute(s,h),c.uv1=Zt.getInterpolation(Tr,pi,mi,gi,Mr,Sr,yr,new Oe)),a&&(fo.fromBufferAttribute(a,o),po.fromBufferAttribute(a,l),mo.fromBufferAttribute(a,h),c.normal=Zt.getInterpolation(Tr,pi,mi,gi,fo,po,mo,new U),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a:o,b:l,c:h,normal:new U,materialIndex:0};Zt.getNormal(pi,mi,gi,u.normal),c.face=u}return c}class ir extends _n{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],h=[],c=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tn(h,3)),this.setAttribute("normal",new tn(c,3)),this.setAttribute("uv",new tn(u,2));function g(_,p,d,T,y,x,I,A,C,O,E){const S=x/C,P=I/O,H=x/2,z=I/2,K=A/2,Y=C+1,W=O+1;let j=0,k=0;const le=new U;for(let de=0;de<W;de++){const _e=de*P-z;for(let ze=0;ze<Y;ze++){const Je=ze*S-H;le[_]=Je*T,le[p]=_e*y,le[d]=K,h.push(le.x,le.y,le.z),le[_]=0,le[p]=0,le[d]=A>0?1:-1,c.push(le.x,le.y,le.z),u.push(ze/C),u.push(1-de/O),j+=1}}for(let de=0;de<O;de++)for(let _e=0;_e<C;_e++){const ze=f+_e+Y*de,Je=f+_e+Y*(de+1),G=f+(_e+1)+Y*(de+1),Q=f+(_e+1)+Y*de;l.push(ze,Je,Q),l.push(Je,G,Q),k+=6}o.addGroup(m,k,E),m+=k,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Di(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function wt(n){const e={};for(let t=0;t<n.length;t++){const i=Di(n[t]);for(const r in i)e[r]=i[r]}return e}function Sh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _l(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const yh={clone:Di,merge:wt};var Th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Th,this.fragmentShader=Eh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=Sh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class vl extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new U,go=new Oe,_o=new Oe;class Gt extends vl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ki*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(Ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,go,_o),t.subVectors(_o,go)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ki*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/h,r*=a.width/l,i*=a.height/h}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=-90,vi=1;class xh extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gt(_i,vi,e,t);r.layers=this.layers,this.add(r);const s=new Gt(_i,vi,e,t);s.layers=this.layers,this.add(s);const a=new Gt(_i,vi,e,t);a.layers=this.layers,this.add(a);const o=new Gt(_i,vi,e,t);o.layers=this.layers,this.add(o);const l=new Gt(_i,vi,e,t);l.layers=this.layers,this.add(l);const h=new Gt(_i,vi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const h of t)this.remove(h);if(e===dn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,h,c]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,h),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(u,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ml extends Dt{constructor(e,t,i,r,s,a,o,l,h,c){e=e!==void 0?e:[],t=t!==void 0?t:Pi,super(e,t,i,r,s,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bh extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ml(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ir(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:Di(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:In});s.uniforms.tEquirect.value=t;const a=new We(r,s),o=t.minFilter;return t.minFilter===Jn&&(t.minFilter=Kt),new xh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const As=new U,Ah=new U,Ch=new Ne;class Yn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=As.subVectors(i,t).cross(Ah.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(As),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ch.getNormalMatrix(e),r=this.coplanarPoint(As).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new Ia,br=new U;class Sl{constructor(e=new Yn,t=new Yn,i=new Yn,r=new Yn,s=new Yn,a=new Yn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=dn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],h=r[4],c=r[5],u=r[6],f=r[7],m=r[8],g=r[9],_=r[10],p=r[11],d=r[12],T=r[13],y=r[14],x=r[15];if(i[0].setComponents(l-s,f-h,p-m,x-d).normalize(),i[1].setComponents(l+s,f+h,p+m,x+d).normalize(),i[2].setComponents(l+a,f+c,p+g,x+T).normalize(),i[3].setComponents(l-a,f-c,p-g,x-T).normalize(),i[4].setComponents(l-o,f-u,p-_,x-y).normalize(),t===dn)i[5].setComponents(l+o,f+u,p+_,x+y).normalize();else if(t===Jr)i[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(br.x=r.normal.x>0?e.max.x:e.min.x,br.y=r.normal.y>0?e.max.y:e.min.y,br.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(br)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yl(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Rh(n){const e=new WeakMap;function t(o,l){const h=o.array,c=o.usage,u=h.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,h,c),o.onUploadCallback();let m;if(h instanceof Float32Array)m=n.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=n.SHORT;else if(h instanceof Uint32Array)m=n.UNSIGNED_INT;else if(h instanceof Int32Array)m=n.INT;else if(h instanceof Int8Array)m=n.BYTE;else if(h instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,h){const c=l.array,u=l._updateRange,f=l.updateRanges;if(n.bindBuffer(h,o),u.count===-1&&f.length===0&&n.bufferSubData(h,0,c),f.length!==0){for(let m=0,g=f.length;m<g;m++){const _=f[m];n.bufferSubData(h,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(n.bufferSubData(h,u.offset*c.BYTES_PER_ELEMENT,c,u.offset,u.count),u.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:r,remove:s,update:a}}class it extends _n{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),h=o+1,c=l+1,u=e/o,f=t/l,m=[],g=[],_=[],p=[];for(let d=0;d<c;d++){const T=d*f-a;for(let y=0;y<h;y++){const x=y*u-s;g.push(x,-T,0),_.push(0,0,1),p.push(y/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){const y=T+h*d,x=T+h*(d+1),I=T+1+h*(d+1),A=T+1+h*d;m.push(y,x,A),m.push(x,I,A)}this.setIndex(m),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(_,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new it(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ph=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wh=`#ifdef USE_ALPHAHASH
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
#endif`,Lh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ih=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nh=`#ifdef USE_AOMAP
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
#endif`,Fh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Oh=`#ifdef USE_BATCHING
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
#endif`,Bh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gh=`#ifdef USE_IRIDESCENCE
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
#endif`,Vh=`#ifdef USE_BUMPMAP
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
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jh=`#define PI 3.141592653589793
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
} // validated`,Qh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eu=`vec3 transformedNormal = objectNormal;
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
#endif`,tu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ru=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,su="gl_FragColor = linearToOutputTexel( gl_FragColor );",au=`
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
}`,ou=`#ifdef USE_ENVMAP
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
#endif`,lu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cu=`#ifdef USE_ENVMAP
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
#endif`,hu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uu=`#ifdef USE_ENVMAP
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
#endif`,du=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gu=`#ifdef USE_GRADIENTMAP
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
}`,_u=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Su=`uniform bool receiveShadow;
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
#endif`,yu=`#ifdef USE_ENVMAP
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
#endif`,Tu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Au=`PhysicalMaterial material;
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
#endif`,Cu=`struct PhysicalMaterial {
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
}`,Ru=`
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
#endif`,Pu=`#if defined( RE_IndirectDiffuse )
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
#endif`,wu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Du=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ou=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bu=`#if defined( USE_POINTS_UV )
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
#endif`,zu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ku=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wu=`#ifdef USE_MORPHTARGETS
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
#endif`,Xu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ku=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ju=`#ifdef USE_NORMALMAP
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
#endif`,Ju=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,td=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,id=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fd=`float getShadowMask() {
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
}`,pd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,md=`#ifdef USE_SKINNING
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
#endif`,gd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_d=`#ifdef USE_SKINNING
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
#endif`,vd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Md=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Td=`#ifdef USE_TRANSMISSION
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
#endif`,Ed=`#ifdef USE_TRANSMISSION
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
#endif`,xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pd=`uniform sampler2D t2D;
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
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ld=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ud=`#include <common>
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
}`,Nd=`#if DEPTH_PACKING == 3200
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
}`,Fd=`#define DISTANCE
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
}`,Od=`#define DISTANCE
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
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`uniform float scale;
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
}`,Hd=`uniform vec3 diffuse;
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
}`,Gd=`#include <common>
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
}`,Vd=`uniform vec3 diffuse;
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
}`,Wd=`#define LAMBERT
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
}`,Xd=`#define LAMBERT
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
}`,qd=`#define MATCAP
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
}`,Yd=`#define MATCAP
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
}`,Kd=`#define NORMAL
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
}`,$d=`#define NORMAL
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
}`,Zd=`#define PHONG
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
}`,jd=`#define PHONG
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
}`,Jd=`#define STANDARD
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
}`,Qd=`#define STANDARD
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
}`,ef=`#define TOON
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
}`,tf=`#define TOON
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
}`,nf=`uniform float size;
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
}`,rf=`uniform vec3 diffuse;
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
}`,sf=`#include <common>
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
}`,af=`uniform vec3 color;
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
}`,of=`uniform float rotation;
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
}`,lf=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Ph,alphahash_pars_fragment:wh,alphamap_fragment:Lh,alphamap_pars_fragment:Ih,alphatest_fragment:Dh,alphatest_pars_fragment:Uh,aomap_fragment:Nh,aomap_pars_fragment:Fh,batching_pars_vertex:Oh,batching_vertex:Bh,begin_vertex:zh,beginnormal_vertex:kh,bsdfs:Hh,iridescence_fragment:Gh,bumpmap_pars_fragment:Vh,clipping_planes_fragment:Wh,clipping_planes_pars_fragment:Xh,clipping_planes_pars_vertex:qh,clipping_planes_vertex:Yh,color_fragment:Kh,color_pars_fragment:$h,color_pars_vertex:Zh,color_vertex:jh,common:Jh,cube_uv_reflection_fragment:Qh,defaultnormal_vertex:eu,displacementmap_pars_vertex:tu,displacementmap_vertex:nu,emissivemap_fragment:iu,emissivemap_pars_fragment:ru,colorspace_fragment:su,colorspace_pars_fragment:au,envmap_fragment:ou,envmap_common_pars_fragment:lu,envmap_pars_fragment:cu,envmap_pars_vertex:hu,envmap_physical_pars_fragment:yu,envmap_vertex:uu,fog_vertex:du,fog_pars_vertex:fu,fog_fragment:pu,fog_pars_fragment:mu,gradientmap_pars_fragment:gu,lightmap_pars_fragment:_u,lights_lambert_fragment:vu,lights_lambert_pars_fragment:Mu,lights_pars_begin:Su,lights_toon_fragment:Tu,lights_toon_pars_fragment:Eu,lights_phong_fragment:xu,lights_phong_pars_fragment:bu,lights_physical_fragment:Au,lights_physical_pars_fragment:Cu,lights_fragment_begin:Ru,lights_fragment_maps:Pu,lights_fragment_end:wu,logdepthbuf_fragment:Lu,logdepthbuf_pars_fragment:Iu,logdepthbuf_pars_vertex:Du,logdepthbuf_vertex:Uu,map_fragment:Nu,map_pars_fragment:Fu,map_particle_fragment:Ou,map_particle_pars_fragment:Bu,metalnessmap_fragment:zu,metalnessmap_pars_fragment:ku,morphinstance_vertex:Hu,morphcolor_vertex:Gu,morphnormal_vertex:Vu,morphtarget_pars_vertex:Wu,morphtarget_vertex:Xu,normal_fragment_begin:qu,normal_fragment_maps:Yu,normal_pars_fragment:Ku,normal_pars_vertex:$u,normal_vertex:Zu,normalmap_pars_fragment:ju,clearcoat_normal_fragment_begin:Ju,clearcoat_normal_fragment_maps:Qu,clearcoat_pars_fragment:ed,iridescence_pars_fragment:td,opaque_fragment:nd,packing:id,premultiplied_alpha_fragment:rd,project_vertex:sd,dithering_fragment:ad,dithering_pars_fragment:od,roughnessmap_fragment:ld,roughnessmap_pars_fragment:cd,shadowmap_pars_fragment:hd,shadowmap_pars_vertex:ud,shadowmap_vertex:dd,shadowmask_pars_fragment:fd,skinbase_vertex:pd,skinning_pars_vertex:md,skinning_vertex:gd,skinnormal_vertex:_d,specularmap_fragment:vd,specularmap_pars_fragment:Md,tonemapping_fragment:Sd,tonemapping_pars_fragment:yd,transmission_fragment:Td,transmission_pars_fragment:Ed,uv_pars_fragment:xd,uv_pars_vertex:bd,uv_vertex:Ad,worldpos_vertex:Cd,background_vert:Rd,background_frag:Pd,backgroundCube_vert:wd,backgroundCube_frag:Ld,cube_vert:Id,cube_frag:Dd,depth_vert:Ud,depth_frag:Nd,distanceRGBA_vert:Fd,distanceRGBA_frag:Od,equirect_vert:Bd,equirect_frag:zd,linedashed_vert:kd,linedashed_frag:Hd,meshbasic_vert:Gd,meshbasic_frag:Vd,meshlambert_vert:Wd,meshlambert_frag:Xd,meshmatcap_vert:qd,meshmatcap_frag:Yd,meshnormal_vert:Kd,meshnormal_frag:$d,meshphong_vert:Zd,meshphong_frag:jd,meshphysical_vert:Jd,meshphysical_frag:Qd,meshtoon_vert:ef,meshtoon_frag:tf,points_vert:nf,points_frag:rf,shadow_vert:sf,shadow_frag:af,sprite_vert:of,sprite_frag:lf},re={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},en={basic:{uniforms:wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:wt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:wt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:wt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:wt([re.points,re.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:wt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:wt([re.common,re.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:wt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:wt([re.sprite,re.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:wt([re.common,re.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:wt([re.lights,re.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};en.physical={uniforms:wt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Ar={r:0,b:0,g:0},Xn=new gn,cf=new ut;function hf(n,e,t,i,r,s,a){const o=new Ge(0);let l=s===!0?0:1,h,c,u=null,f=0,m=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function _(T){let y=!1;const x=g(T);x===null?d(o,l):x&&x.isColor&&(d(x,1),y=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(T,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===ts)?(c===void 0&&(c=new We(new ir(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Di(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Xn.copy(y.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cf.makeRotationFromEuler(Xn)),c.material.toneMapped=$e.getTransfer(x.colorSpace)!==tt,(u!==x||f!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,m=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new We(new it(2,2),new Un({name:"BackgroundMaterial",uniforms:Di(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=$e.getTransfer(x.colorSpace)!==tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,m=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function d(T,y){T.getRGB(Ar,_l(n)),i.buffers.color.setClear(Ar.r,Ar.g,Ar.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),l=y,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(o,l)},render:_,addToRenderList:p}}function uf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(S,P,H,z,K){let Y=!1;const W=u(z,H,P);s!==W&&(s=W,h(s.object)),Y=m(S,z,H,K),Y&&g(S,z,H,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(S,P,H,z),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return n.createVertexArray()}function h(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function u(S,P,H){const z=H.wireframe===!0;let K=i[S.id];K===void 0&&(K={},i[S.id]=K);let Y=K[P.id];Y===void 0&&(Y={},K[P.id]=Y);let W=Y[z];return W===void 0&&(W=f(l()),Y[z]=W),W}function f(S){const P=[],H=[],z=[];for(let K=0;K<t;K++)P[K]=0,H[K]=0,z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:z,object:S,attributes:{},index:null}}function m(S,P,H,z){const K=s.attributes,Y=P.attributes;let W=0;const j=H.getAttributes();for(const k in j)if(j[k].location>=0){const de=K[k];let _e=Y[k];if(_e===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor)),de===void 0||de.attribute!==_e||_e&&de.data!==_e.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function g(S,P,H,z){const K={},Y=P.attributes;let W=0;const j=H.getAttributes();for(const k in j)if(j[k].location>=0){let de=Y[k];de===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));const _e={};_e.attribute=de,de&&de.data&&(_e.data=de.data),K[k]=_e,W++}s.attributes=K,s.attributesNum=W,s.index=z}function _(){const S=s.newAttributes;for(let P=0,H=S.length;P<H;P++)S[P]=0}function p(S){d(S,0)}function d(S,P){const H=s.newAttributes,z=s.enabledAttributes,K=s.attributeDivisors;H[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),K[S]!==P&&(n.vertexAttribDivisor(S,P),K[S]=P)}function T(){const S=s.newAttributes,P=s.enabledAttributes;for(let H=0,z=P.length;H<z;H++)P[H]!==S[H]&&(n.disableVertexAttribArray(H),P[H]=0)}function y(S,P,H,z,K,Y,W){W===!0?n.vertexAttribIPointer(S,P,H,K,Y):n.vertexAttribPointer(S,P,H,z,K,Y)}function x(S,P,H,z){_();const K=z.attributes,Y=H.getAttributes(),W=P.defaultAttributeValues;for(const j in Y){const k=Y[j];if(k.location>=0){let le=K[j];if(le===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),le!==void 0){const de=le.normalized,_e=le.itemSize,ze=e.get(le);if(ze===void 0)continue;const Je=ze.buffer,G=ze.type,Q=ze.bytesPerElement,ge=G===n.INT||G===n.UNSIGNED_INT||le.gpuType===xa;if(le.isInterleavedBufferAttribute){const he=le.data,Ae=he.stride,Le=le.offset;if(he.isInstancedInterleavedBuffer){for(let Be=0;Be<k.locationSize;Be++)d(k.location+Be,he.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Be=0;Be<k.locationSize;Be++)p(k.location+Be);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let Be=0;Be<k.locationSize;Be++)y(k.location+Be,_e/k.locationSize,G,de,Ae*Q,(Le+_e/k.locationSize*Be)*Q,ge)}else{if(le.isInstancedBufferAttribute){for(let he=0;he<k.locationSize;he++)d(k.location+he,le.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let he=0;he<k.locationSize;he++)p(k.location+he);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let he=0;he<k.locationSize;he++)y(k.location+he,_e/k.locationSize,G,de,_e*Q,_e/k.locationSize*he*Q,ge)}}else if(W!==void 0){const de=W[j];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(k.location,de);break;case 3:n.vertexAttrib3fv(k.location,de);break;case 4:n.vertexAttrib4fv(k.location,de);break;default:n.vertexAttrib1fv(k.location,de)}}}}T()}function I(){O();for(const S in i){const P=i[S];for(const H in P){const z=P[H];for(const K in z)c(z[K].object),delete z[K];delete P[H]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const H in P){const z=P[H];for(const K in z)c(z[K].object),delete z[K];delete P[H]}delete i[S.id]}function C(S){for(const P in i){const H=i[P];if(H[S.id]===void 0)continue;const z=H[S.id];for(const K in z)c(z[K].object),delete z[K];delete H[S.id]}}function O(){E(),a=!0,s!==r&&(s=r,h(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:T}}function df(n,e,t){let i;function r(h){i=h}function s(h,c){n.drawArrays(i,h,c),t.update(c,i,1)}function a(h,c,u){u!==0&&(n.drawArraysInstanced(i,h,c,u),t.update(c,i,u))}function o(h,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,u);let m=0;for(let g=0;g<u;g++)m+=c[g];t.update(m,i,1)}function l(h,c,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)a(h[g],c[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,h,0,c,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=c[_];for(let _=0;_<f.length;_++)t.update(g,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ff(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==jt&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===Qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==mn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==un&&!C)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:d,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:x,maxSamples:I}}function pf(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Yn,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||i!==0||r;return r=f,i=u.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=c(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=n.get(u);if(!r||g===null||g.length===0||s&&!p)s?c(null):h();else{const T=s?0:i,y=T*4;let x=d.clippingState||null;l.value=x,x=c(g,f,y,m);for(let I=0;I!==y;++I)x[I]=t[I];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(u,f,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,x=m;y!==_;++y,x+=4)a.copy(u[y]).applyMatrix4(T,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function mf(n){let e=new WeakMap;function t(a,o){return o===Gs?a.mapping=Pi:o===Vs&&(a.mapping=wi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Gs||o===Vs)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new bh(l.height);return h.fromEquirectangularTexture(n,a),e.set(a,h),a.addEventListener("dispose",r),t(h.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class gf extends vl{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xi=4,vo=[.125,.215,.35,.446,.526,.582],Zn=20,Cs=new gf,Mo=new Ge;let Rs=null,Ps=0,ws=0,Ls=!1;const Kn=(1+Math.sqrt(5))/2,Mi=1/Kn,So=[new U(-Kn,Mi,0),new U(Kn,Mi,0),new U(-Mi,0,Kn),new U(Mi,0,Kn),new U(0,Kn,-Mi),new U(0,Kn,Mi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class yo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Rs=this._renderer.getRenderTarget(),Ps=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),Ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rs,Ps,ws),this._renderer.xr.enabled=Ls,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rs=this._renderer.getRenderTarget(),Ps=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),Ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Qi,format:jt,colorSpace:Fn,depthBuffer:!1},r=To(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=To(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_f(s)),this._blurMaterial=vf(s,e,t)}return r}_compileMaterial(e){const t=new We(this._lodPlanes[0],e);this._renderer.compile(t,Cs)}_sceneToCubeUV(e,t,i,r){const o=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,f=c.toneMapping;c.getClearColor(Mo),c.toneMapping=Dn,c.autoClear=!1;const m=new at({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),g=new We(new ir,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Mo),_=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(o.up.set(0,l[d],0),o.lookAt(h[d],0,0)):T===1?(o.up.set(0,0,l[d]),o.lookAt(0,h[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,h[d]));const y=this._cubeSize;Cr(r,T*y,d>2?y:0,y,y),c.setRenderTarget(r),_&&c.render(g,o),c.render(e,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=u,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Pi||e.mapping===wi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new We(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Cr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Cs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=So[(r-s-1)%So.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new We(this._lodPlanes[r],h),f=h.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Zn-1),_=s/g,p=isFinite(s)?1+Math.floor(c*_):Zn;p>Zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Zn}`);const d=[];let T=0;for(let C=0;C<Zn;++C){const O=C/_,E=Math.exp(-O*O/2);d.push(E),C===0?T+=E:C<p&&(T+=2*E)}for(let C=0;C<d.length;C++)d[C]=d[C]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const x=this._sizeLods[r],I=3*x*(r>y-xi?r-y+xi:0),A=4*(this._cubeSize-x);Cr(t,I,A,3*x,2*x),l.setRenderTarget(t),l.render(u,Cs)}}function _f(n){const e=[],t=[],i=[];let r=n;const s=n-xi+1+vo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-xi?l=vo[a-n+xi-1]:a===0&&(l=0),i.push(l);const h=1/(o-2),c=-h,u=1+h,f=[c,c,u,c,u,u,c,c,u,u,c,u],m=6,g=6,_=3,p=2,d=1,T=new Float32Array(_*g*m),y=new Float32Array(p*g*m),x=new Float32Array(d*g*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,O=A>2?0:-1,E=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];T.set(E,_*g*A),y.set(f,p*g*A);const S=[A,A,A,A,A,A];x.set(S,d*g*A)}const I=new _n;I.setAttribute("position",new Jt(T,_)),I.setAttribute("uv",new Jt(y,p)),I.setAttribute("faceIndex",new Jt(x,d)),e.push(I),r>xi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function To(n,e,t){const i=new ti(n,e,t);return i.texture.mapping=ts,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function vf(n,e,t){const i=new Float32Array(Zn),r=new U(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Eo(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function xo(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ua(){return`

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
	`}function Mf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,h=l===Gs||l===Vs,c=l===Pi||l===wi;if(h||c){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new yo(n)),u=h?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return h&&m&&m.height>0||c&&m&&r(m)?(t===null&&(t=new yo(n)),u=h?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function s(o){const l=o.target;l.removeEventListener("dispose",s);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Sf(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ci("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yf(n,e,t,i){const r={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)e.update(_[p],n.ARRAY_BUFFER)}}function h(u){const f=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const T=m.array;_=m.version;for(let y=0,x=T.length;y<x;y+=3){const I=T[y+0],A=T[y+1],C=T[y+2];f.push(I,A,A,C,C,I)}}else if(g!==void 0){const T=g.array;_=g.version;for(let y=0,x=T.length/3-1;y<x;y+=3){const I=y+0,A=y+1,C=y+2;f.push(I,A,A,C,C,I)}}else return;const p=new(hl(f)?gl:ml)(f,1);p.version=_;const d=s.get(u);d&&e.remove(d),s.set(u,p)}function c(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&h(u)}else h(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function Tf(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){n.drawElements(i,m,s,f*a),t.update(m,i,1)}function h(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,f*a,g),t.update(m,i,g))}function c(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,i,1)}function u(f,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)h(f[d]/a,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,_,0,g);let d=0;for(let T=0;T<g;T++)d+=m[T];for(let T=0;T<_.length;T++)t.update(d,i,_[T])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Ef(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function xf(n,e,t){const i=new WeakMap,r=new yt;function s(a,o,l){const h=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let S=function(){O.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let I=o.attributes.position.count*x,A=1;I>e.maxTextureSize&&(A=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const C=new Float32Array(I*A*4*u),O=new dl(C,I,A,u);O.type=un,O.needsUpdate=!0;const E=x*4;for(let P=0;P<u;P++){const H=d[P],z=T[P],K=y[P],Y=I*A*4*P;for(let W=0;W<H.count;W++){const j=W*E;g===!0&&(r.fromBufferAttribute(H,W),C[Y+j+0]=r.x,C[Y+j+1]=r.y,C[Y+j+2]=r.z,C[Y+j+3]=0),_===!0&&(r.fromBufferAttribute(z,W),C[Y+j+4]=r.x,C[Y+j+5]=r.y,C[Y+j+6]=r.z,C[Y+j+7]=0),p===!0&&(r.fromBufferAttribute(K,W),C[Y+j+8]=r.x,C[Y+j+9]=r.y,C[Y+j+10]=r.z,C[Y+j+11]=K.itemSize===4?r.w:1)}}f={count:u,texture:O,size:new Oe(I,A)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<h.length;p++)g+=h[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function bf(n,e,t,i){let r=new WeakMap;function s(l){const h=i.render.frame,c=l.geometry,u=e.get(l,c);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}class Tl extends Dt{constructor(e,t,i,r,s,a,o,l,h,c=Ai){if(c!==Ai&&c!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ai&&(i=ei),i===void 0&&c===Ii&&(i=Li),super(null,r,s,a,o,l,c,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const El=new Dt,bo=new Tl(1,1),xl=new dl,bl=new ch,Al=new Ml,Ao=[],Co=[],Ro=new Float32Array(16),Po=new Float32Array(9),wo=new Float32Array(4);function Ni(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ao[r];if(s===void 0&&(s=new Float32Array(r),Ao[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function is(n,e){let t=Co[e];t===void 0&&(t=new Int32Array(e),Co[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Af(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Cf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function Rf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function Pf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function wf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,i))return;wo.set(i),n.uniformMatrix2fv(this.addr,!1,wo),Mt(t,i)}}function Lf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,i))return;Po.set(i),n.uniformMatrix3fv(this.addr,!1,Po),Mt(t,i)}}function If(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,i))return;Ro.set(i),n.uniformMatrix4fv(this.addr,!1,Ro),Mt(t,i)}}function Df(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Uf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function Nf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function Ff(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function Of(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Bf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function zf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function kf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function Hf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(bo.compareFunction=cl,s=bo):s=El,t.setTexture2D(e||s,r)}function Gf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||bl,r)}function Vf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Al,r)}function Wf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||xl,r)}function Xf(n){switch(n){case 5126:return Af;case 35664:return Cf;case 35665:return Rf;case 35666:return Pf;case 35674:return wf;case 35675:return Lf;case 35676:return If;case 5124:case 35670:return Df;case 35667:case 35671:return Uf;case 35668:case 35672:return Nf;case 35669:case 35673:return Ff;case 5125:return Of;case 36294:return Bf;case 36295:return zf;case 36296:return kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Hf;case 35679:case 36299:case 36307:return Gf;case 35680:case 36300:case 36308:case 36293:return Vf;case 36289:case 36303:case 36311:case 36292:return Wf}}function qf(n,e){n.uniform1fv(this.addr,e)}function Yf(n,e){const t=Ni(e,this.size,2);n.uniform2fv(this.addr,t)}function Kf(n,e){const t=Ni(e,this.size,3);n.uniform3fv(this.addr,t)}function $f(n,e){const t=Ni(e,this.size,4);n.uniform4fv(this.addr,t)}function Zf(n,e){const t=Ni(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jf(n,e){const t=Ni(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Jf(n,e){const t=Ni(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Qf(n,e){n.uniform1iv(this.addr,e)}function ep(n,e){n.uniform2iv(this.addr,e)}function tp(n,e){n.uniform3iv(this.addr,e)}function np(n,e){n.uniform4iv(this.addr,e)}function ip(n,e){n.uniform1uiv(this.addr,e)}function rp(n,e){n.uniform2uiv(this.addr,e)}function sp(n,e){n.uniform3uiv(this.addr,e)}function ap(n,e){n.uniform4uiv(this.addr,e)}function op(n,e,t){const i=this.cache,r=e.length,s=is(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||El,s[a])}function lp(n,e,t){const i=this.cache,r=e.length,s=is(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||bl,s[a])}function cp(n,e,t){const i=this.cache,r=e.length,s=is(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Al,s[a])}function hp(n,e,t){const i=this.cache,r=e.length,s=is(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||xl,s[a])}function up(n){switch(n){case 5126:return qf;case 35664:return Yf;case 35665:return Kf;case 35666:return $f;case 35674:return Zf;case 35675:return jf;case 35676:return Jf;case 5124:case 35670:return Qf;case 35667:case 35671:return ep;case 35668:case 35672:return tp;case 35669:case 35673:return np;case 5125:return ip;case 36294:return rp;case 36295:return sp;case 36296:return ap;case 35678:case 36198:case 36298:case 36306:case 35682:return op;case 35679:case 36299:case 36307:return lp;case 35680:case 36300:case 36308:case 36293:return cp;case 36289:case 36303:case 36311:case 36292:return hp}}class dp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xf(t.type)}}class fp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=up(t.type)}}class pp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Is=/(\w+)(\])?(\[|\.)?/g;function Lo(n,e){n.seq.push(e),n.map[e.id]=e}function mp(n,e,t){const i=n.name,r=i.length;for(Is.lastIndex=0;;){const s=Is.exec(i),a=Is.lastIndex;let o=s[1];const l=s[2]==="]",h=s[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===r){Lo(t,h===void 0?new dp(o,n,e):new fp(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new pp(o),Lo(t,u)),t=u}}}class Xr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);mp(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Io(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const gp=37297;let _p=0;function vp(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Mp(n){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(n);let i;switch(e===t?i="":e===jr&&t===Zr?i="LinearDisplayP3ToLinearSRGB":e===Zr&&t===jr&&(i="LinearSRGBToLinearDisplayP3"),n){case Fn:case ns:return[i,"LinearTransferOETF"];case Ct:case wa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Do(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+vp(n.getShaderSource(e),a)}else return r}function Sp(n,e){const t=Mp(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function yp(n,e){let t;switch(e){case Sc:t="Linear";break;case yc:t="Reinhard";break;case Tc:t="Cineon";break;case Ec:t="ACESFilmic";break;case bc:t="AgX";break;case Ac:t="Neutral";break;case xc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rr=new U;function Tp(){$e.getLuminanceCoefficients(Rr);const n=Rr.x.toFixed(4),e=Rr.y.toFixed(4),t=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ep(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yi).join(`
`)}function xp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bp(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Yi(n){return n!==""}function Uo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function No(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function va(n){return n.replace(Ap,Rp)}const Cp=new Map;function Rp(n,e){let t=Ue[e];if(t===void 0){const i=Cp.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return va(t)}const Pp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fo(n){return n.replace(Pp,wp)}function wp(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Oo(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Lp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Zo?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ql?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ip(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Pi:case wi:e="ENVMAP_TYPE_CUBE";break;case ts:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case wi:e="ENVMAP_MODE_REFRACTION";break}return e}function Up(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jo:e="ENVMAP_BLENDING_MULTIPLY";break;case vc:e="ENVMAP_BLENDING_MIX";break;case Mc:e="ENVMAP_BLENDING_ADD";break}return e}function Np(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Fp(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Lp(t),h=Ip(t),c=Dp(t),u=Up(t),f=Np(t),m=Ep(t),g=xp(s),_=r.createProgram();let p,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yi).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yi).join(`
`),d.length>0&&(d+=`
`)):(p=[Oo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),d=[Oo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Dn?yp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Sp("linearToOutputTexel",t.outputColorSpace),Tp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yi).join(`
`)),a=va(a),a=Uo(a,t),a=No(a,t),o=va(o),o=Uo(o,t),o=No(o,t),a=Fo(a),o=Fo(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Za?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=T+p+a,x=T+d+o,I=Io(r,r.VERTEX_SHADER,y),A=Io(r,r.FRAGMENT_SHADER,x);r.attachShader(_,I),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(P){if(n.debug.checkShaderErrors){const H=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(I).trim(),K=r.getShaderInfoLog(A).trim();let Y=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,I,A);else{const j=Do(r,I,"vertex"),k=Do(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+j+`
`+k)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||K==="")&&(W=!1);W&&(P.diagnostics={runnable:Y,programLog:H,vertexShader:{log:z,prefix:p},fragmentShader:{log:K,prefix:d}})}r.deleteShader(I),r.deleteShader(A),O=new Xr(r,_),E=bp(r,_)}let O;this.getUniforms=function(){return O===void 0&&C(this),O};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,gp)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_p++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=A,this}let Op=0;class Bp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new zp(e),t.set(e,i)),i}}class zp{constructor(e){this.id=Op++,this.code=e,this.usedTimes=0}}function kp(n,e,t,i,r,s,a){const o=new Da,l=new Bp,h=new Set,c=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return h.add(E),E===0?"uv":`uv${E}`}function p(E,S,P,H,z){const K=H.fog,Y=z.geometry,W=E.isMeshStandardMaterial?H.environment:null,j=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),k=j&&j.mapping===ts?j.image.height:null,le=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const de=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_e=de!==void 0?de.length:0;let ze=0;Y.morphAttributes.position!==void 0&&(ze=1),Y.morphAttributes.normal!==void 0&&(ze=2),Y.morphAttributes.color!==void 0&&(ze=3);let Je,G,Q,ge;if(le){const Xe=en[le];Je=Xe.vertexShader,G=Xe.fragmentShader}else Je=E.vertexShader,G=E.fragmentShader,l.update(E),Q=l.getVertexShaderID(E),ge=l.getFragmentShaderID(E);const he=n.getRenderTarget(),Ae=z.isInstancedMesh===!0,Le=z.isBatchedMesh===!0,Be=!!E.map,ot=!!E.matcap,R=!!j,dt=!!E.aoMap,Ze=!!E.lightMap,Qe=!!E.bumpMap,ye=!!E.normalMap,ft=!!E.displacementMap,Pe=!!E.emissiveMap,Ie=!!E.metalnessMap,b=!!E.roughnessMap,v=E.anisotropy>0,B=E.clearcoat>0,$=E.dispersion>0,J=E.iridescence>0,Z=E.sheen>0,Te=E.transmission>0,se=v&&!!E.anisotropyMap,ue=B&&!!E.clearcoatMap,De=B&&!!E.clearcoatNormalMap,ee=B&&!!E.clearcoatRoughnessMap,ce=J&&!!E.iridescenceMap,ke=J&&!!E.iridescenceThicknessMap,Re=Z&&!!E.sheenColorMap,fe=Z&&!!E.sheenRoughnessMap,we=!!E.specularMap,Fe=!!E.specularColorMap,rt=!!E.specularIntensityMap,w=Te&&!!E.transmissionMap,te=Te&&!!E.thicknessMap,X=!!E.gradientMap,q=!!E.alphaMap,ie=E.alphaTest>0,xe=!!E.alphaHash,He=!!E.extensions;let pt=Dn;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(pt=n.toneMapping);const Et={shaderID:le,shaderType:E.type,shaderName:E.name,vertexShader:Je,fragmentShader:G,defines:E.defines,customVertexShaderID:Q,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Le,batchingColor:Le&&z._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&z.instanceColor!==null,instancingMorph:Ae&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Fn,alphaToCoverage:!!E.alphaToCoverage,map:Be,matcap:ot,envMap:R,envMapMode:R&&j.mapping,envMapCubeUVHeight:k,aoMap:dt,lightMap:Ze,bumpMap:Qe,normalMap:ye,displacementMap:f&&ft,emissiveMap:Pe,normalMapObjectSpace:ye&&E.normalMapType===Lc,normalMapTangentSpace:ye&&E.normalMapType===wc,metalnessMap:Ie,roughnessMap:b,anisotropy:v,anisotropyMap:se,clearcoat:B,clearcoatMap:ue,clearcoatNormalMap:De,clearcoatRoughnessMap:ee,dispersion:$,iridescence:J,iridescenceMap:ce,iridescenceThicknessMap:ke,sheen:Z,sheenColorMap:Re,sheenRoughnessMap:fe,specularMap:we,specularColorMap:Fe,specularIntensityMap:rt,transmission:Te,transmissionMap:w,thicknessMap:te,gradientMap:X,opaque:E.transparent===!1&&E.blending===bi&&E.alphaToCoverage===!1,alphaMap:q,alphaTest:ie,alphaHash:xe,combine:E.combine,mapUv:Be&&_(E.map.channel),aoMapUv:dt&&_(E.aoMap.channel),lightMapUv:Ze&&_(E.lightMap.channel),bumpMapUv:Qe&&_(E.bumpMap.channel),normalMapUv:ye&&_(E.normalMap.channel),displacementMapUv:ft&&_(E.displacementMap.channel),emissiveMapUv:Pe&&_(E.emissiveMap.channel),metalnessMapUv:Ie&&_(E.metalnessMap.channel),roughnessMapUv:b&&_(E.roughnessMap.channel),anisotropyMapUv:se&&_(E.anisotropyMap.channel),clearcoatMapUv:ue&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:De&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(E.sheenRoughnessMap.channel),specularMapUv:we&&_(E.specularMap.channel),specularColorMapUv:Fe&&_(E.specularColorMap.channel),specularIntensityMapUv:rt&&_(E.specularIntensityMap.channel),transmissionMapUv:w&&_(E.transmissionMap.channel),thicknessMapUv:te&&_(E.thicknessMap.channel),alphaMapUv:q&&_(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ye||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(Be||q),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ze,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,decodeVideoTexture:Be&&E.map.isVideoTexture===!0&&$e.getTransfer(E.map.colorSpace)===tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===et,flipSided:E.side===Ut,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:He&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&E.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Et.vertexUv1s=h.has(1),Et.vertexUv2s=h.has(2),Et.vertexUv3s=h.has(3),h.clear(),Et}function d(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)S.push(P),S.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(T(S,E),y(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function T(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),E.push(o.mask)}function x(E){const S=g[E.type];let P;if(S){const H=en[S];P=yh.clone(H.uniforms)}else P=E.uniforms;return P}function I(E,S){let P;for(let H=0,z=c.length;H<z;H++){const K=c[H];if(K.cacheKey===S){P=K,++P.usedTimes;break}}return P===void 0&&(P=new Fp(n,S,E,s),c.push(P)),P}function A(E){if(--E.usedTimes===0){const S=c.indexOf(E);c[S]=c[c.length-1],c.pop(),E.destroy()}}function C(E){l.remove(E)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:x,acquireProgram:I,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:O}}function Hp(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Gp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zo(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,f,m,g,_,p){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=p),e++,d}function o(u,f,m,g,_,p){const d=a(u,f,m,g,_,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(u,f,m,g,_,p){const d=a(u,f,m,g,_,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function h(u,f){t.length>1&&t.sort(u||Gp),i.length>1&&i.sort(f||Bo),r.length>1&&r.sort(f||Bo)}function c(){for(let u=e,f=n.length;u<f;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:h}}function Vp(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new zo,n.set(i,[a])):r>=s.length?(a=new zo,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Wp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ge};break;case"SpotLight":t={position:new U,direction:new U,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Xp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qp=0;function Yp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Kp(n){const e=new Wp,t=Xp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new U);const r=new U,s=new ut,a=new ut;function o(h){let c=0,u=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,g=0,_=0,p=0,d=0,T=0,y=0,x=0,I=0,A=0,C=0;h.sort(Yp);for(let E=0,S=h.length;E<S;E++){const P=h[E],H=P.color,z=P.intensity,K=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=H.r*z,u+=H.g*z,f+=H.b*z;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],z);C++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,k=t.get(P);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=P.shadow.matrix,T++}i.directional[m]=W,m++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(H).multiplyScalar(z),W.distance=K,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[_]=W;const j=P.shadow;if(P.map&&(i.spotLightMap[I]=P.map,I++,j.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[_]=j.matrix,P.castShadow){const k=t.get(P);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=Y,x++}_++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(H).multiplyScalar(z),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=W,p++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const j=P.shadow,k=t.get(P);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,k.shadowCameraNear=j.camera.near,k.shadowCameraFar=j.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=P.shadow.matrix,y++}i.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(z),W.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[d]=W,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=f;const O=i.hash;(O.directionalLength!==m||O.pointLength!==g||O.spotLength!==_||O.rectAreaLength!==p||O.hemiLength!==d||O.numDirectionalShadows!==T||O.numPointShadows!==y||O.numSpotShadows!==x||O.numSpotMaps!==I||O.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+I-A,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,O.directionalLength=m,O.pointLength=g,O.spotLength=_,O.rectAreaLength=p,O.hemiLength=d,O.numDirectionalShadows=T,O.numPointShadows=y,O.numSpotShadows=x,O.numSpotMaps=I,O.numLightProbes=C,i.version=qp++)}function l(h,c){let u=0,f=0,m=0,g=0,_=0;const p=c.matrixWorldInverse;for(let d=0,T=h.length;d<T;d++){const y=h[d];if(y.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),u++}else if(y.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function ko(n){const e=new Kp(n),t=[],i=[];function r(c){h.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function a(c){i.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function $p(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ko(n),e.set(r,[o])):s>=a.length?(o=new ko(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Zp extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jp extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qp=`uniform sampler2D shadow_pass;
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
}`;function em(n,e,t){let i=new Sl;const r=new Oe,s=new Oe,a=new yt,o=new Zp({depthPacking:Pc}),l=new jp,h={},c=t.maxTextureSize,u={[pn]:Ut,[Ut]:pn,[et]:et},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Jp,fragmentShader:Qp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new _n;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new We(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zo;let d=this.type;this.render=function(A,C,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),H=n.state;H.setBlending(In),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=d!==hn&&this.type===hn,K=d===hn&&this.type!==hn;for(let Y=0,W=A.length;Y<W;Y++){const j=A[Y],k=j.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const le=k.getFrameExtents();if(r.multiply(le),s.copy(k.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/le.x),r.x=s.x*le.x,k.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/le.y),r.y=s.y*le.y,k.mapSize.y=s.y)),k.map===null||z===!0||K===!0){const _e=this.type!==hn?{minFilter:Vt,magFilter:Vt}:{};k.map!==null&&k.map.dispose(),k.map=new ti(r.x,r.y,_e),k.map.texture.name=j.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const de=k.getViewportCount();for(let _e=0;_e<de;_e++){const ze=k.getViewport(_e);a.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),H.viewport(a),k.updateMatrices(j,_e),i=k.getFrustum(),x(C,O,k.camera,j,this.type)}k.isPointLightShadow!==!0&&this.type===hn&&T(k,O),k.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(E,S,P)};function T(A,C){const O=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ti(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,O,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,O,m,_,null)}function y(A,C,O,E){let S=null;const P=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=O.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const H=S.uuid,z=C.uuid;let K=h[H];K===void 0&&(K={},h[H]=K);let Y=K[z];Y===void 0&&(Y=S.clone(),K[z]=Y,C.addEventListener("dispose",I)),S=Y}if(S.visible=C.visible,S.wireframe=C.wireframe,E===hn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=n.properties.get(S);H.light=O}return S}function x(A,C,O,E,S){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===hn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);const z=e.update(A),K=A.material;if(Array.isArray(K)){const Y=z.groups;for(let W=0,j=Y.length;W<j;W++){const k=Y[W],le=K[k.materialIndex];if(le&&le.visible){const de=y(A,le,E,S);A.onBeforeShadow(n,A,C,O,z,de,k),n.renderBufferDirect(O,null,z,de,A,k),A.onAfterShadow(n,A,C,O,z,de,k)}}}else if(K.visible){const Y=y(A,K,E,S);A.onBeforeShadow(n,A,C,O,z,Y,null),n.renderBufferDirect(O,null,z,Y,A,null),A.onAfterShadow(n,A,C,O,z,Y,null)}}const H=A.children;for(let z=0,K=H.length;z<K;z++)x(H[z],C,O,E,S)}function I(A){A.target.removeEventListener("dispose",I);for(const O in h){const E=h[O],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function tm(n){function e(){let w=!1;const te=new yt;let X=null;const q=new yt(0,0,0,0);return{setMask:function(ie){X!==ie&&!w&&(n.colorMask(ie,ie,ie,ie),X=ie)},setLocked:function(ie){w=ie},setClear:function(ie,xe,He,pt,Et){Et===!0&&(ie*=pt,xe*=pt,He*=pt),te.set(ie,xe,He,pt),q.equals(te)===!1&&(n.clearColor(ie,xe,He,pt),q.copy(te))},reset:function(){w=!1,X=null,q.set(-1,0,0,0)}}}function t(){let w=!1,te=null,X=null,q=null;return{setTest:function(ie){ie?ge(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(ie){te!==ie&&!w&&(n.depthMask(ie),te=ie)},setFunc:function(ie){if(X!==ie){switch(ie){case uc:n.depthFunc(n.NEVER);break;case dc:n.depthFunc(n.ALWAYS);break;case fc:n.depthFunc(n.LESS);break;case Yr:n.depthFunc(n.LEQUAL);break;case pc:n.depthFunc(n.EQUAL);break;case mc:n.depthFunc(n.GEQUAL);break;case gc:n.depthFunc(n.GREATER);break;case _c:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}X=ie}},setLocked:function(ie){w=ie},setClear:function(ie){q!==ie&&(n.clearDepth(ie),q=ie)},reset:function(){w=!1,te=null,X=null,q=null}}}function i(){let w=!1,te=null,X=null,q=null,ie=null,xe=null,He=null,pt=null,Et=null;return{setTest:function(Xe){w||(Xe?ge(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(Xe){te!==Xe&&!w&&(n.stencilMask(Xe),te=Xe)},setFunc:function(Xe,rn,Qt){(X!==Xe||q!==rn||ie!==Qt)&&(n.stencilFunc(Xe,rn,Qt),X=Xe,q=rn,ie=Qt)},setOp:function(Xe,rn,Qt){(xe!==Xe||He!==rn||pt!==Qt)&&(n.stencilOp(Xe,rn,Qt),xe=Xe,He=rn,pt=Qt)},setLocked:function(Xe){w=Xe},setClear:function(Xe){Et!==Xe&&(n.clearStencil(Xe),Et=Xe)},reset:function(){w=!1,te=null,X=null,q=null,ie=null,xe=null,He=null,pt=null,Et=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let h={},c={},u=new WeakMap,f=[],m=null,g=!1,_=null,p=null,d=null,T=null,y=null,x=null,I=null,A=new Ge(0,0,0),C=0,O=!1,E=null,S=null,P=null,H=null,z=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,W=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=W>=2);let k=null,le={};const de=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),ze=new yt().fromArray(de),Je=new yt().fromArray(_e);function G(w,te,X,q){const ie=new Uint8Array(4),xe=n.createTexture();n.bindTexture(w,xe),n.texParameteri(w,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(w,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<X;He++)w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,q,0,n.RGBA,n.UNSIGNED_BYTE,ie):n.texImage2D(te+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ie);return xe}const Q={};Q[n.TEXTURE_2D]=G(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=G(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=G(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=G(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ge(n.DEPTH_TEST),s.setFunc(Yr),Qe(!1),ye(Xa),ge(n.CULL_FACE),dt(In);function ge(w){h[w]!==!0&&(n.enable(w),h[w]=!0)}function he(w){h[w]!==!1&&(n.disable(w),h[w]=!1)}function Ae(w,te){return c[w]!==te?(n.bindFramebuffer(w,te),c[w]=te,w===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=te),w===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Le(w,te){let X=f,q=!1;if(w){X=u.get(te),X===void 0&&(X=[],u.set(te,X));const ie=w.textures;if(X.length!==ie.length||X[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,He=ie.length;xe<He;xe++)X[xe]=n.COLOR_ATTACHMENT0+xe;X.length=ie.length,q=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,q=!0);q&&n.drawBuffers(X)}function Be(w){return m!==w?(n.useProgram(w),m=w,!0):!1}const ot={[$n]:n.FUNC_ADD,[Kl]:n.FUNC_SUBTRACT,[$l]:n.FUNC_REVERSE_SUBTRACT};ot[Zl]=n.MIN,ot[jl]=n.MAX;const R={[Jl]:n.ZERO,[Ql]:n.ONE,[ec]:n.SRC_COLOR,[ks]:n.SRC_ALPHA,[ac]:n.SRC_ALPHA_SATURATE,[rc]:n.DST_COLOR,[nc]:n.DST_ALPHA,[tc]:n.ONE_MINUS_SRC_COLOR,[Hs]:n.ONE_MINUS_SRC_ALPHA,[sc]:n.ONE_MINUS_DST_COLOR,[ic]:n.ONE_MINUS_DST_ALPHA,[oc]:n.CONSTANT_COLOR,[lc]:n.ONE_MINUS_CONSTANT_COLOR,[cc]:n.CONSTANT_ALPHA,[hc]:n.ONE_MINUS_CONSTANT_ALPHA};function dt(w,te,X,q,ie,xe,He,pt,Et,Xe){if(w===In){g===!0&&(he(n.BLEND),g=!1);return}if(g===!1&&(ge(n.BLEND),g=!0),w!==Yl){if(w!==_||Xe!==O){if((p!==$n||y!==$n)&&(n.blendEquation(n.FUNC_ADD),p=$n,y=$n),Xe)switch(w){case bi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qa:n.blendFunc(n.ONE,n.ONE);break;case Ya:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ka:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case bi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ya:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ka:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}d=null,T=null,x=null,I=null,A.set(0,0,0),C=0,_=w,O=Xe}return}ie=ie||te,xe=xe||X,He=He||q,(te!==p||ie!==y)&&(n.blendEquationSeparate(ot[te],ot[ie]),p=te,y=ie),(X!==d||q!==T||xe!==x||He!==I)&&(n.blendFuncSeparate(R[X],R[q],R[xe],R[He]),d=X,T=q,x=xe,I=He),(pt.equals(A)===!1||Et!==C)&&(n.blendColor(pt.r,pt.g,pt.b,Et),A.copy(pt),C=Et),_=w,O=!1}function Ze(w,te){w.side===et?he(n.CULL_FACE):ge(n.CULL_FACE);let X=w.side===Ut;te&&(X=!X),Qe(X),w.blending===bi&&w.transparent===!1?dt(In):dt(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),s.setFunc(w.depthFunc),s.setTest(w.depthTest),s.setMask(w.depthWrite),r.setMask(w.colorWrite);const q=w.stencilWrite;a.setTest(q),q&&(a.setMask(w.stencilWriteMask),a.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),a.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Pe(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(w){E!==w&&(w?n.frontFace(n.CW):n.frontFace(n.CCW),E=w)}function ye(w){w!==Wl?(ge(n.CULL_FACE),w!==S&&(w===Xa?n.cullFace(n.BACK):w===Xl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),S=w}function ft(w){w!==P&&(Y&&n.lineWidth(w),P=w)}function Pe(w,te,X){w?(ge(n.POLYGON_OFFSET_FILL),(H!==te||z!==X)&&(n.polygonOffset(te,X),H=te,z=X)):he(n.POLYGON_OFFSET_FILL)}function Ie(w){w?ge(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function b(w){w===void 0&&(w=n.TEXTURE0+K-1),k!==w&&(n.activeTexture(w),k=w)}function v(w,te,X){X===void 0&&(k===null?X=n.TEXTURE0+K-1:X=k);let q=le[X];q===void 0&&(q={type:void 0,texture:void 0},le[X]=q),(q.type!==w||q.texture!==te)&&(k!==X&&(n.activeTexture(X),k=X),n.bindTexture(w,te||Q[w]),q.type=w,q.texture=te)}function B(){const w=le[k];w!==void 0&&w.type!==void 0&&(n.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ee(){try{n.texStorage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ce(){try{n.texImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ke(){try{n.texImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Re(w){ze.equals(w)===!1&&(n.scissor(w.x,w.y,w.z,w.w),ze.copy(w))}function fe(w){Je.equals(w)===!1&&(n.viewport(w.x,w.y,w.z,w.w),Je.copy(w))}function we(w,te){let X=l.get(te);X===void 0&&(X=new WeakMap,l.set(te,X));let q=X.get(w);q===void 0&&(q=n.getUniformBlockIndex(te,w.name),X.set(w,q))}function Fe(w,te){const q=l.get(te).get(w);o.get(te)!==q&&(n.uniformBlockBinding(te,q,w.__bindingPointIndex),o.set(te,q))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},k=null,le={},c={},u=new WeakMap,f=[],m=null,g=!1,_=null,p=null,d=null,T=null,y=null,x=null,I=null,A=new Ge(0,0,0),C=0,O=!1,E=null,S=null,P=null,H=null,z=null,ze.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ge,disable:he,bindFramebuffer:Ae,drawBuffers:Le,useProgram:Be,setBlending:dt,setMaterial:Ze,setFlipSided:Qe,setCullFace:ye,setLineWidth:ft,setPolygonOffset:Pe,setScissorTest:Ie,activeTexture:b,bindTexture:v,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:ce,texImage3D:ke,updateUBOMapping:we,uniformBlockBinding:Fe,texStorage2D:De,texStorage3D:ee,texSubImage2D:Z,texSubImage3D:Te,compressedTexSubImage2D:se,compressedTexSubImage3D:ue,scissor:Re,viewport:fe,reset:rt}}function Ho(n,e,t,i){const r=nm(i);switch(t){case nl:return n*e;case rl:return n*e;case sl:return n*e*2;case al:return n*e/r.components*r.byteLength;case Ca:return n*e/r.components*r.byteLength;case ol:return n*e*2/r.components*r.byteLength;case Ra:return n*e*2/r.components*r.byteLength;case il:return n*e*3/r.components*r.byteLength;case jt:return n*e*4/r.components*r.byteLength;case Pa:return n*e*4/r.components*r.byteLength;case kr:case Hr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gr:case Vr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qs:case Ks:return Math.max(n,16)*Math.max(e,8)/4;case Xs:case Ys:return Math.max(n,8)*Math.max(e,8)/2;case $s:case Zs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qs:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ea:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ta:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case na:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ia:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ra:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case aa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case oa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case la:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ca:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ha:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ua:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Wr:case da:case fa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ll:case pa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ma:case ga:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nm(n){switch(n){case mn:case Qo:return{byteLength:1,components:1};case ji:case el:case Qi:return{byteLength:2,components:1};case ba:case Aa:return{byteLength:2,components:4};case ei:case xa:case un:return{byteLength:4,components:1};case tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function im(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Oe,c=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return m?new OffscreenCanvas(b,v):Qr("canvas")}function _(b,v,B){let $=1;const J=Ie(b);if((J.width>B||J.height>B)&&($=B/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor($*J.width),Te=Math.floor($*J.height);u===void 0&&(u=g(Z,Te));const se=v?g(Z,Te):u;return se.width=Z,se.height=Te,se.getContext("2d").drawImage(b,0,0,Z,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+Te+")."),se}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==Vt&&b.minFilter!==Kt}function d(b){n.generateMipmap(b)}function T(b,v,B,$,J=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=v;if(v===n.RED&&(B===n.FLOAT&&(Z=n.R32F),B===n.HALF_FLOAT&&(Z=n.R16F),B===n.UNSIGNED_BYTE&&(Z=n.R8)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.R8UI),B===n.UNSIGNED_SHORT&&(Z=n.R16UI),B===n.UNSIGNED_INT&&(Z=n.R32UI),B===n.BYTE&&(Z=n.R8I),B===n.SHORT&&(Z=n.R16I),B===n.INT&&(Z=n.R32I)),v===n.RG&&(B===n.FLOAT&&(Z=n.RG32F),B===n.HALF_FLOAT&&(Z=n.RG16F),B===n.UNSIGNED_BYTE&&(Z=n.RG8)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RG8UI),B===n.UNSIGNED_SHORT&&(Z=n.RG16UI),B===n.UNSIGNED_INT&&(Z=n.RG32UI),B===n.BYTE&&(Z=n.RG8I),B===n.SHORT&&(Z=n.RG16I),B===n.INT&&(Z=n.RG32I)),v===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),v===n.RGBA){const Te=J?$r:$e.getTransfer($);B===n.FLOAT&&(Z=n.RGBA32F),B===n.HALF_FLOAT&&(Z=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Z=Te===tt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(b,v){let B;return b?v===null||v===ei||v===Li?B=n.DEPTH24_STENCIL8:v===un?B=n.DEPTH32F_STENCIL8:v===ji&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ei||v===Li?B=n.DEPTH_COMPONENT24:v===un?B=n.DEPTH_COMPONENT32F:v===ji&&(B=n.DEPTH_COMPONENT16),B}function x(b,v){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Vt&&b.minFilter!==Kt?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function I(b){const v=b.target;v.removeEventListener("dispose",I),C(v),v.isVideoTexture&&c.delete(v)}function A(b){const v=b.target;v.removeEventListener("dispose",A),E(v)}function C(b){const v=i.get(b);if(v.__webglInit===void 0)return;const B=b.source,$=f.get(B);if($){const J=$[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&O(b),Object.keys($).length===0&&f.delete(B)}i.remove(b)}function O(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const B=b.source,$=f.get(B);delete $[v.__cacheKey],a.memory.textures--}function E(b){const v=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let J=0;J<v.__webglFramebuffer[$].length;J++)n.deleteFramebuffer(v.__webglFramebuffer[$][J]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=b.textures;for(let $=0,J=B.length;$<J;$++){const Z=i.get(B[$]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(B[$])}i.remove(b)}let S=0;function P(){S=0}function H(){const b=S;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),S+=1,b}function z(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function K(b,v){const B=i.get(b);if(b.isVideoTexture&&ft(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(B,b,v);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function Y(b,v){const B=i.get(b);if(b.version>0&&B.__version!==b.version){Je(B,b,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function W(b,v){const B=i.get(b);if(b.version>0&&B.__version!==b.version){Je(B,b,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function j(b,v){const B=i.get(b);if(b.version>0&&B.__version!==b.version){G(B,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}const k={[Kr]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[Ws]:n.MIRRORED_REPEAT},le={[Vt]:n.NEAREST,[Cc]:n.NEAREST_MIPMAP_NEAREST,[or]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[ls]:n.LINEAR_MIPMAP_NEAREST,[Jn]:n.LINEAR_MIPMAP_LINEAR},de={[Ic]:n.NEVER,[Bc]:n.ALWAYS,[Dc]:n.LESS,[cl]:n.LEQUAL,[Uc]:n.EQUAL,[Oc]:n.GEQUAL,[Nc]:n.GREATER,[Fc]:n.NOTEQUAL};function _e(b,v){if(v.type===un&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Kt||v.magFilter===ls||v.magFilter===or||v.magFilter===Jn||v.minFilter===Kt||v.minFilter===ls||v.minFilter===or||v.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,k[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,k[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,k[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,le[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,le[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,de[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Vt||v.minFilter!==or&&v.minFilter!==Jn||v.type===un&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ze(b,v){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",I));const $=v.source;let J=f.get($);J===void 0&&(J={},f.set($,J));const Z=z(v);if(Z!==b.__cacheKey){J[Z]===void 0&&(J[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[Z].usedTimes++;const Te=J[b.__cacheKey];Te!==void 0&&(J[b.__cacheKey].usedTimes--,Te.usedTimes===0&&O(v)),b.__cacheKey=Z,b.__webglTexture=J[Z].texture}return B}function Je(b,v,B){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);const J=ze(b,v),Z=v.source;t.bindTexture($,b.__webglTexture,n.TEXTURE0+B);const Te=i.get(Z);if(Z.version!==Te.__version||J===!0){t.activeTexture(n.TEXTURE0+B);const se=$e.getPrimaries($e.workingColorSpace),ue=v.colorSpace===wn?null:$e.getPrimaries(v.colorSpace),De=v.colorSpace===wn||se===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ee=_(v.image,!1,r.maxTextureSize);ee=Pe(v,ee);const ce=s.convert(v.format,v.colorSpace),ke=s.convert(v.type);let Re=T(v.internalFormat,ce,ke,v.colorSpace,v.isVideoTexture);_e($,v);let fe;const we=v.mipmaps,Fe=v.isVideoTexture!==!0,rt=Te.__version===void 0||J===!0,w=Z.dataReady,te=x(v,ee);if(v.isDepthTexture)Re=y(v.format===Ii,v.type),rt&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,Re,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Re,ee.width,ee.height,0,ce,ke,null));else if(v.isDataTexture)if(we.length>0){Fe&&rt&&t.texStorage2D(n.TEXTURE_2D,te,Re,we[0].width,we[0].height);for(let X=0,q=we.length;X<q;X++)fe=we[X],Fe?w&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,fe.width,fe.height,ce,ke,fe.data):t.texImage2D(n.TEXTURE_2D,X,Re,fe.width,fe.height,0,ce,ke,fe.data);v.generateMipmaps=!1}else Fe?(rt&&t.texStorage2D(n.TEXTURE_2D,te,Re,ee.width,ee.height),w&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,ce,ke,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Re,ee.width,ee.height,0,ce,ke,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Fe&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,te,Re,we[0].width,we[0].height,ee.depth);for(let X=0,q=we.length;X<q;X++)if(fe=we[X],v.format!==jt)if(ce!==null)if(Fe){if(w)if(v.layerUpdates.size>0){const ie=Ho(fe.width,fe.height,v.format,v.type);for(const xe of v.layerUpdates){const He=fe.data.subarray(xe*ie/fe.data.BYTES_PER_ELEMENT,(xe+1)*ie/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,xe,fe.width,fe.height,1,ce,He,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,fe.width,fe.height,ee.depth,ce,fe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Re,fe.width,fe.height,ee.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?w&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,fe.width,fe.height,ee.depth,ce,ke,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Re,fe.width,fe.height,ee.depth,0,ce,ke,fe.data)}else{Fe&&rt&&t.texStorage2D(n.TEXTURE_2D,te,Re,we[0].width,we[0].height);for(let X=0,q=we.length;X<q;X++)fe=we[X],v.format!==jt?ce!==null?Fe?w&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,fe.width,fe.height,ce,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Re,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?w&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,fe.width,fe.height,ce,ke,fe.data):t.texImage2D(n.TEXTURE_2D,X,Re,fe.width,fe.height,0,ce,ke,fe.data)}else if(v.isDataArrayTexture)if(Fe){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,te,Re,ee.width,ee.height,ee.depth),w)if(v.layerUpdates.size>0){const X=Ho(ee.width,ee.height,v.format,v.type);for(const q of v.layerUpdates){const ie=ee.data.subarray(q*X/ee.data.BYTES_PER_ELEMENT,(q+1)*X/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,ee.width,ee.height,1,ce,ke,ie)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,ke,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,ee.width,ee.height,ee.depth,0,ce,ke,ee.data);else if(v.isData3DTexture)Fe?(rt&&t.texStorage3D(n.TEXTURE_3D,te,Re,ee.width,ee.height,ee.depth),w&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,ke,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Re,ee.width,ee.height,ee.depth,0,ce,ke,ee.data);else if(v.isFramebufferTexture){if(rt)if(Fe)t.texStorage2D(n.TEXTURE_2D,te,Re,ee.width,ee.height);else{let X=ee.width,q=ee.height;for(let ie=0;ie<te;ie++)t.texImage2D(n.TEXTURE_2D,ie,Re,X,q,0,ce,ke,null),X>>=1,q>>=1}}else if(we.length>0){if(Fe&&rt){const X=Ie(we[0]);t.texStorage2D(n.TEXTURE_2D,te,Re,X.width,X.height)}for(let X=0,q=we.length;X<q;X++)fe=we[X],Fe?w&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ce,ke,fe):t.texImage2D(n.TEXTURE_2D,X,Re,ce,ke,fe);v.generateMipmaps=!1}else if(Fe){if(rt){const X=Ie(ee);t.texStorage2D(n.TEXTURE_2D,te,Re,X.width,X.height)}w&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,ke,ee)}else t.texImage2D(n.TEXTURE_2D,0,Re,ce,ke,ee);p(v)&&d($),Te.__version=Z.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function G(b,v,B){if(v.image.length!==6)return;const $=ze(b,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+B);const Z=i.get(J);if(J.version!==Z.__version||$===!0){t.activeTexture(n.TEXTURE0+B);const Te=$e.getPrimaries($e.workingColorSpace),se=v.colorSpace===wn?null:$e.getPrimaries(v.colorSpace),ue=v.colorSpace===wn||Te===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const De=v.isCompressedTexture||v.image[0].isCompressedTexture,ee=v.image[0]&&v.image[0].isDataTexture,ce=[];for(let q=0;q<6;q++)!De&&!ee?ce[q]=_(v.image[q],!0,r.maxCubemapSize):ce[q]=ee?v.image[q].image:v.image[q],ce[q]=Pe(v,ce[q]);const ke=ce[0],Re=s.convert(v.format,v.colorSpace),fe=s.convert(v.type),we=T(v.internalFormat,Re,fe,v.colorSpace),Fe=v.isVideoTexture!==!0,rt=Z.__version===void 0||$===!0,w=J.dataReady;let te=x(v,ke);_e(n.TEXTURE_CUBE_MAP,v);let X;if(De){Fe&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,te,we,ke.width,ke.height);for(let q=0;q<6;q++){X=ce[q].mipmaps;for(let ie=0;ie<X.length;ie++){const xe=X[ie];v.format!==jt?Re!==null?Fe?w&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,0,0,xe.width,xe.height,Re,xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,we,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?w&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,0,0,xe.width,xe.height,Re,fe,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,we,xe.width,xe.height,0,Re,fe,xe.data)}}}else{if(X=v.mipmaps,Fe&&rt){X.length>0&&te++;const q=Ie(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,te,we,q.width,q.height)}for(let q=0;q<6;q++)if(ee){Fe?w&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ce[q].width,ce[q].height,Re,fe,ce[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,we,ce[q].width,ce[q].height,0,Re,fe,ce[q].data);for(let ie=0;ie<X.length;ie++){const He=X[ie].image[q].image;Fe?w&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,0,0,He.width,He.height,Re,fe,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,we,He.width,He.height,0,Re,fe,He.data)}}else{Fe?w&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Re,fe,ce[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,we,Re,fe,ce[q]);for(let ie=0;ie<X.length;ie++){const xe=X[ie];Fe?w&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,0,0,Re,fe,xe.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,we,Re,fe,xe.image[q])}}}p(v)&&d(n.TEXTURE_CUBE_MAP),Z.__version=J.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Q(b,v,B,$,J,Z){const Te=s.convert(B.format,B.colorSpace),se=s.convert(B.type),ue=T(B.internalFormat,Te,se,B.colorSpace);if(!i.get(v).__hasExternalTextures){const ee=Math.max(1,v.width>>Z),ce=Math.max(1,v.height>>Z);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,Z,ue,ee,ce,v.depth,0,Te,se,null):t.texImage2D(J,Z,ue,ee,ce,0,Te,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),ye(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,J,i.get(B).__webglTexture,0,Qe(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,J,i.get(B).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(b,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){const $=v.depthTexture,J=$&&$.isDepthTexture?$.type:null,Z=y(v.stencilBuffer,J),Te=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=Qe(v);ye(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,Z,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,Z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,b)}else{const $=v.textures;for(let J=0;J<$.length;J++){const Z=$[J],Te=s.convert(Z.format,Z.colorSpace),se=s.convert(Z.type),ue=T(Z.internalFormat,Te,se,Z.colorSpace),De=Qe(v);B&&ye(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ue,v.width,v.height):ye(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,ue,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ue,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);const $=i.get(v.depthTexture).__webglTexture,J=Qe(v);if(v.depthTexture.format===Ai)ye(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(v.depthTexture.format===Ii)ye(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ae(b){const v=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=$}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");he(v.__webglFramebuffer,b)}else if(B){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),ge(v.__webglDepthbuffer[$],b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ge(v.__webglDepthbuffer,b,!1);else{const $=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(b,v,B){const $=i.get(b);v!==void 0&&Q($.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ae(b)}function Be(b){const v=b.texture,B=i.get(b),$=i.get(v);b.addEventListener("dispose",A);const J=b.textures,Z=b.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,a.memory.textures++),Z){B.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[se]=[];for(let ue=0;ue<v.mipmaps.length;ue++)B.__webglFramebuffer[se][ue]=n.createFramebuffer()}else B.__webglFramebuffer[se]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)B.__webglFramebuffer[se]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Te)for(let se=0,ue=J.length;se<ue;se++){const De=i.get(J[se]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&ye(b)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){const ue=J[se];B.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[se]);const De=s.convert(ue.format,ue.colorSpace),ee=s.convert(ue.type),ce=T(ue.internalFormat,De,ee,ue.colorSpace,b.isXRRenderTarget===!0),ke=Qe(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,ce,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,B.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),_e(n.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)Q(B.__webglFramebuffer[se][ue],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue);else Q(B.__webglFramebuffer[se],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(v)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let se=0,ue=J.length;se<ue;se++){const De=J[se],ee=i.get(De);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),_e(n.TEXTURE_2D,De),Q(B.__webglFramebuffer,b,De,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,0),p(De)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(se=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,$.__webglTexture),_e(se,v),v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)Q(B.__webglFramebuffer[ue],b,v,n.COLOR_ATTACHMENT0,se,ue);else Q(B.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,se,0);p(v)&&d(se),t.unbindTexture()}b.depthBuffer&&Ae(b)}function ot(b){const v=b.textures;for(let B=0,$=v.length;B<$;B++){const J=v[B];if(p(J)){const Z=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Te=i.get(J).__webglTexture;t.bindTexture(Z,Te),d(Z),t.unbindTexture()}}}const R=[],dt=[];function Ze(b){if(b.samples>0){if(ye(b)===!1){const v=b.textures,B=b.width,$=b.height;let J=n.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(b),se=v.length>1;if(se)for(let ue=0;ue<v.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ue=0;ue<v.length;ue++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[ue]);const De=i.get(v[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,De,0)}n.blitFramebuffer(0,0,B,$,0,0,B,$,J,n.NEAREST),l===!0&&(R.length=0,dt.length=0,R.push(n.COLOR_ATTACHMENT0+ue),b.depthBuffer&&b.resolveDepthBuffer===!1&&(R.push(Z),dt.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,dt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let ue=0;ue<v.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,Te.__webglColorRenderbuffer[ue]);const De=i.get(v[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Qe(b){return Math.min(r.maxSamples,b.samples)}function ye(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ft(b){const v=a.render.frame;c.get(b)!==v&&(c.set(b,v),b.update())}function Pe(b,v){const B=b.colorSpace,$=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Fn&&B!==wn&&($e.getTransfer(B)===tt?($!==jt||J!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function Ie(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=P,this.setTexture2D=K,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=Le,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ye}function rm(n,e){function t(i,r=wn){let s;const a=$e.getTransfer(r);if(i===mn)return n.UNSIGNED_BYTE;if(i===ba)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Aa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qo)return n.BYTE;if(i===el)return n.SHORT;if(i===ji)return n.UNSIGNED_SHORT;if(i===xa)return n.INT;if(i===ei)return n.UNSIGNED_INT;if(i===un)return n.FLOAT;if(i===Qi)return n.HALF_FLOAT;if(i===nl)return n.ALPHA;if(i===il)return n.RGB;if(i===jt)return n.RGBA;if(i===rl)return n.LUMINANCE;if(i===sl)return n.LUMINANCE_ALPHA;if(i===Ai)return n.DEPTH_COMPONENT;if(i===Ii)return n.DEPTH_STENCIL;if(i===al)return n.RED;if(i===Ca)return n.RED_INTEGER;if(i===ol)return n.RG;if(i===Ra)return n.RG_INTEGER;if(i===Pa)return n.RGBA_INTEGER;if(i===kr||i===Hr||i===Gr||i===Vr)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===kr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===kr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xs||i===qs||i===Ys||i===Ks)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ys)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ks)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$s||i===Zs||i===js)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$s||i===Zs)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===js)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Js||i===Qs||i===ea||i===ta||i===na||i===ia||i===ra||i===sa||i===aa||i===oa||i===la||i===ca||i===ha||i===ua)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Js)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ea)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ta)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===na)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ia)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ra)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===aa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===oa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===la)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ca)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ha)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ua)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wr||i===da||i===fa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Wr)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===da)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ll||i===pa||i===ma||i===ga)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ma)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ga)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Li?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class sm extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qn extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const am={type:"move"};class Ds{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),d=this._getHandJoint(h,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=c.position.distanceTo(u.position),m=.02,g=.005;h.inputState.pinching&&f>m+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=m-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(am)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const om=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lm=`
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

}`;class cm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Dt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Un({vertexShader:om,fragmentShader:lm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new it(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hm extends Ui{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,h=null,c=null,u=null,f=null,m=null,g=null;const _=new cm,p=t.getContextAttributes();let d=null,T=null;const y=[],x=[],I=new Oe;let A=null;const C=new Gt;C.layers.enable(1),C.viewport=new yt;const O=new Gt;O.layers.enable(2),O.viewport=new yt;const E=[C,O],S=new sm;S.layers.enable(1),S.layers.enable(2);let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=y[G];return Q===void 0&&(Q=new Ds,y[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=y[G];return Q===void 0&&(Q=new Ds,y[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=y[G];return Q===void 0&&(Q=new Ds,y[G]=Q),Q.getHandSpace()};function z(G){const Q=x.indexOf(G.inputSource);if(Q===-1)return;const ge=y[Q];ge!==void 0&&(ge.update(G.inputSource,G.frame,h||a),ge.dispatchEvent({type:G.type,data:G.inputSource}))}function K(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",Y);for(let G=0;G<y.length;G++){const Q=x[G];Q!==null&&(x[G]=null,y[G].disconnect(Q))}P=null,H=null,_.reset(),e.setRenderTarget(d),m=null,f=null,u=null,r=null,T=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(G){h=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",K),r.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new ti(m.framebufferWidth,m.framebufferHeight,{format:jt,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ge=null,he=null;p.depth&&(he=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?Ii:Ai,ge=p.stencil?Li:ei);const Ae={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(Ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new ti(f.textureWidth,f.textureHeight,{format:jt,type:mn,depthTexture:new Tl(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await r.requestReferenceSpace(o),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(G){for(let Q=0;Q<G.removed.length;Q++){const ge=G.removed[Q],he=x.indexOf(ge);he>=0&&(x[he]=null,y[he].disconnect(ge))}for(let Q=0;Q<G.added.length;Q++){const ge=G.added[Q];let he=x.indexOf(ge);if(he===-1){for(let Le=0;Le<y.length;Le++)if(Le>=x.length){x.push(ge),he=Le;break}else if(x[Le]===null){x[Le]=ge,he=Le;break}if(he===-1)break}const Ae=y[he];Ae&&Ae.connect(ge)}}const W=new U,j=new U;function k(G,Q,ge){W.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(ge.matrixWorld);const he=W.distanceTo(j),Ae=Q.projectionMatrix.elements,Le=ge.projectionMatrix.elements,Be=Ae[14]/(Ae[10]-1),ot=Ae[14]/(Ae[10]+1),R=(Ae[9]+1)/Ae[5],dt=(Ae[9]-1)/Ae[5],Ze=(Ae[8]-1)/Ae[0],Qe=(Le[8]+1)/Le[0],ye=Be*Ze,ft=Be*Qe,Pe=he/(-Ze+Qe),Ie=Pe*-Ze;if(Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ie),G.translateZ(Pe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ae[10]===-1)G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const b=Be+Pe,v=ot+Pe,B=ye-Ie,$=ft+(he-Ie),J=R*ot/v*b,Z=dt*ot/v*b;G.projectionMatrix.makePerspective(B,$,J,Z,b,v),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function le(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let Q=G.near,ge=G.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),S.near=O.near=C.near=Q,S.far=O.far=C.far=ge,(P!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,H=S.far);const he=G.parent,Ae=S.cameras;le(S,he);for(let Le=0;Le<Ae.length;Le++)le(Ae[Le],he);Ae.length===2?k(S,C,O):S.projectionMatrix.copy(C.projectionMatrix),de(G,S,he)};function de(G,Q,ge){ge===null?G.matrix.copy(Q.matrixWorld):(G.matrix.copy(ge.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ji*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let _e=null;function ze(G,Q){if(c=Q.getViewerPose(h||a),g=Q,c!==null){const ge=c.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let he=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,he=!0);for(let Le=0;Le<ge.length;Le++){const Be=ge[Le];let ot=null;if(m!==null)ot=m.getViewport(Be);else{const dt=u.getViewSubImage(f,Be);ot=dt.viewport,Le===0&&(e.setRenderTargetTextures(T,dt.colorTexture,f.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(T))}let R=E[Le];R===void 0&&(R=new Gt,R.layers.enable(Le),R.viewport=new yt,E[Le]=R),R.matrix.fromArray(Be.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Be.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(ot.x,ot.y,ot.width,ot.height),Le===0&&(S.matrix.copy(R.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),he===!0&&S.cameras.push(R)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Le=u.getDepthInformation(ge[0]);Le&&Le.isValid&&Le.texture&&_.init(e,Le,r.renderState)}}for(let ge=0;ge<y.length;ge++){const he=x[ge],Ae=y[ge];he!==null&&Ae!==void 0&&Ae.update(he,Q,h||a)}_e&&_e(G,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Je=new yl;Je.setAnimationLoop(ze),this.setAnimationLoop=function(G){_e=G},this.dispose=function(){}}}const qn=new gn,um=new ut;function dm(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,_l(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,T,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),c(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,x)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,T,y):d.isSpriteMaterial?h(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ut&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ut&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const T=e.get(d),y=T.envMap,x=T.envMapRotation;y&&(p.envMap.value=y,qn.copy(x),qn.x*=-1,qn.y*=-1,qn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),p.envMapRotation.value.setFromMatrix4(um.makeRotationFromEuler(qn)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,T,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*T,p.scale.value=y*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,T){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ut&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const T=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fm(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const x=y.program;i.uniformBlockBinding(T,x)}function h(T,y){let x=r[T.id];x===void 0&&(g(T),x=c(T),r[T.id]=x,T.addEventListener("dispose",p));const I=y.program;i.updateUBOMapping(T,I);const A=e.render.frame;s[T.id]!==A&&(f(T),s[T.id]=A)}function c(T){const y=u();T.__bindingPointIndex=y;const x=n.createBuffer(),I=T.__size,A=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,I,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const y=r[T.id],x=T.uniforms,I=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,C=x.length;A<C;A++){const O=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,S=O.length;E<S;E++){const P=O[E];if(m(P,A,E,I)===!0){const H=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let Y=0;Y<z.length;Y++){const W=z[Y],j=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,H+K,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,K),K+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,y,x,I){const A=T.value,C=y+"_"+x;if(I[C]===void 0)return typeof A=="number"||typeof A=="boolean"?I[C]=A:I[C]=A.clone(),!0;{const O=I[C];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return I[C]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function g(T){const y=T.uniforms;let x=0;const I=16;for(let C=0,O=y.length;C<O;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,P=E.length;S<P;S++){const H=E[S],z=Array.isArray(H.value)?H.value:[H.value];for(let K=0,Y=z.length;K<Y;K++){const W=z[K],j=_(W),k=x%I,le=k%j.boundary,de=k+le;x+=le,de!==0&&I-de<j.storage&&(x+=I-de),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=j.storage}}}const A=x%I;return A>0&&(x+=I-A),T.__size=x,T.__cache={},this}function _(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function p(T){const y=T.target;y.removeEventListener("dispose",p);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:h,dispose:d}}class pm{constructor(e={}){const{canvas:t=nh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=Dn,this.toneMappingExposure=1;const y=this;let x=!1,I=0,A=0,C=null,O=-1,E=null;const S=new yt,P=new yt;let H=null;const z=new Ge(0);let K=0,Y=t.width,W=t.height,j=1,k=null,le=null;const de=new yt(0,0,Y,W),_e=new yt(0,0,Y,W);let ze=!1;const Je=new Sl;let G=!1,Q=!1;const ge=new ut,he=new U,Ae=new yt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ot(){return C===null?j:1}let R=i;function dt(M,L){return t.getContext(M,L)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ea}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",ie,!1),R===null){const L="webgl2";if(R=dt(L,M),R===null)throw dt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ze,Qe,ye,ft,Pe,Ie,b,v,B,$,J,Z,Te,se,ue,De,ee,ce,ke,Re,fe,we,Fe,rt;function w(){Ze=new Sf(R),Ze.init(),we=new rm(R,Ze),Qe=new ff(R,Ze,e,we),ye=new tm(R),ft=new Ef(R),Pe=new Hp,Ie=new im(R,Ze,ye,Pe,Qe,we,ft),b=new mf(y),v=new Mf(y),B=new Rh(R),Fe=new uf(R,B),$=new yf(R,B,ft,Fe),J=new bf(R,$,B,ft),ke=new xf(R,Qe,Ie),De=new pf(Pe),Z=new kp(y,b,v,Ze,Qe,Fe,De),Te=new dm(y,Pe),se=new Vp,ue=new $p(Ze),ce=new hf(y,b,v,ye,J,f,l),ee=new em(y,J,Qe),rt=new fm(R,ft,Qe,ye),Re=new df(R,Ze,ft),fe=new Tf(R,Ze,ft),ft.programs=Z.programs,y.capabilities=Qe,y.extensions=Ze,y.properties=Pe,y.renderLists=se,y.shadowMap=ee,y.state=ye,y.info=ft}w();const te=new hm(y,R);this.xr=te,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=Ze.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ze.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(M){M!==void 0&&(j=M,this.setSize(Y,W,!1))},this.getSize=function(M){return M.set(Y,W)},this.setSize=function(M,L,N=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,W=L,t.width=Math.floor(M*j),t.height=Math.floor(L*j),N===!0&&(t.style.width=M+"px",t.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(Y*j,W*j).floor()},this.setDrawingBufferSize=function(M,L,N){Y=M,W=L,j=N,t.width=Math.floor(M*N),t.height=Math.floor(L*N),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(S)},this.getViewport=function(M){return M.copy(de)},this.setViewport=function(M,L,N,F){M.isVector4?de.set(M.x,M.y,M.z,M.w):de.set(M,L,N,F),ye.viewport(S.copy(de).multiplyScalar(j).round())},this.getScissor=function(M){return M.copy(_e)},this.setScissor=function(M,L,N,F){M.isVector4?_e.set(M.x,M.y,M.z,M.w):_e.set(M,L,N,F),ye.scissor(P.copy(_e).multiplyScalar(j).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(M){ye.setScissorTest(ze=M)},this.setOpaqueSort=function(M){k=M},this.setTransparentSort=function(M){le=M},this.getClearColor=function(M){return M.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(M=!0,L=!0,N=!0){let F=0;if(M){let D=!1;if(C!==null){const ne=C.texture.format;D=ne===Pa||ne===Ra||ne===Ca}if(D){const ne=C.texture.type,ae=ne===mn||ne===ei||ne===ji||ne===Li||ne===ba||ne===Aa,pe=ce.getClearColor(),me=ce.getClearAlpha(),be=pe.r,Ce=pe.g,Me=pe.b;ae?(m[0]=be,m[1]=Ce,m[2]=Me,m[3]=me,R.clearBufferuiv(R.COLOR,0,m)):(g[0]=be,g[1]=Ce,g[2]=Me,g[3]=me,R.clearBufferiv(R.COLOR,0,g))}else F|=R.COLOR_BUFFER_BIT}L&&(F|=R.DEPTH_BUFFER_BIT),N&&(F|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),se.dispose(),ue.dispose(),Pe.dispose(),b.dispose(),v.dispose(),J.dispose(),Fe.dispose(),rt.dispose(),Z.dispose(),te.dispose(),te.removeEventListener("sessionstart",Qt),te.removeEventListener("sessionend",Ba),kn.stop()};function X(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const M=ft.autoReset,L=ee.enabled,N=ee.autoUpdate,F=ee.needsUpdate,D=ee.type;w(),ft.autoReset=M,ee.enabled=L,ee.autoUpdate=N,ee.needsUpdate=F,ee.type=D}function ie(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function xe(M){const L=M.target;L.removeEventListener("dispose",xe),He(L)}function He(M){pt(M),Pe.remove(M)}function pt(M){const L=Pe.get(M).programs;L!==void 0&&(L.forEach(function(N){Z.releaseProgram(N)}),M.isShaderMaterial&&Z.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,N,F,D,ne){L===null&&(L=Le);const ae=D.isMesh&&D.matrixWorld.determinant()<0,pe=kl(M,L,N,F,D);ye.setMaterial(F,ae);let me=N.index,be=1;if(F.wireframe===!0){if(me=$.getWireframeAttribute(N),me===void 0)return;be=2}const Ce=N.drawRange,Me=N.attributes.position;let qe=Ce.start*be,lt=(Ce.start+Ce.count)*be;ne!==null&&(qe=Math.max(qe,ne.start*be),lt=Math.min(lt,(ne.start+ne.count)*be)),me!==null?(qe=Math.max(qe,0),lt=Math.min(lt,me.count)):Me!=null&&(qe=Math.max(qe,0),lt=Math.min(lt,Me.count));const ct=lt-qe;if(ct<0||ct===1/0)return;Fe.setup(D,F,pe,N,me);let Ft,Ye=Re;if(me!==null&&(Ft=B.get(me),Ye=fe,Ye.setIndex(Ft)),D.isMesh)F.wireframe===!0?(ye.setLineWidth(F.wireframeLinewidth*ot()),Ye.setMode(R.LINES)):Ye.setMode(R.TRIANGLES);else if(D.isLine){let Se=F.linewidth;Se===void 0&&(Se=1),ye.setLineWidth(Se*ot()),D.isLineSegments?Ye.setMode(R.LINES):D.isLineLoop?Ye.setMode(R.LINE_LOOP):Ye.setMode(R.LINE_STRIP)}else D.isPoints?Ye.setMode(R.POINTS):D.isSprite&&Ye.setMode(R.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Ye.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))Ye.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Se=D._multiDrawStarts,xt=D._multiDrawCounts,Ke=D._multiDrawCount,Wt=me?B.get(me).bytesPerElement:1,ni=Pe.get(F).currentProgram.getUniforms();for(let Ot=0;Ot<Ke;Ot++)ni.setValue(R,"_gl_DrawID",Ot),Ye.render(Se[Ot]/Wt,xt[Ot])}else if(D.isInstancedMesh)Ye.renderInstances(qe,ct,D.count);else if(N.isInstancedBufferGeometry){const Se=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,xt=Math.min(N.instanceCount,Se);Ye.renderInstances(qe,ct,xt)}else Ye.render(qe,ct)};function Et(M,L,N){M.transparent===!0&&M.side===et&&M.forceSinglePass===!1?(M.side=Ut,M.needsUpdate=!0,ar(M,L,N),M.side=pn,M.needsUpdate=!0,ar(M,L,N),M.side=et):ar(M,L,N)}this.compile=function(M,L,N=null){N===null&&(N=M),p=ue.get(N),p.init(L),T.push(p),N.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),M!==N&&M.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const F=new Set;return M.traverse(function(D){const ne=D.material;if(ne)if(Array.isArray(ne))for(let ae=0;ae<ne.length;ae++){const pe=ne[ae];Et(pe,N,D),F.add(pe)}else Et(ne,N,D),F.add(ne)}),T.pop(),p=null,F},this.compileAsync=function(M,L,N=null){const F=this.compile(M,L,N);return new Promise(D=>{function ne(){if(F.forEach(function(ae){Pe.get(ae).currentProgram.isReady()&&F.delete(ae)}),F.size===0){D(M);return}setTimeout(ne,10)}Ze.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Xe=null;function rn(M){Xe&&Xe(M)}function Qt(){kn.stop()}function Ba(){kn.start()}const kn=new yl;kn.setAnimationLoop(rn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(M){Xe=M,te.setAnimationLoop(M),M===null?kn.stop():kn.start()},te.addEventListener("sessionstart",Qt),te.addEventListener("sessionend",Ba),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(L),L=te.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,L,C),p=ue.get(M,T.length),p.init(L),T.push(p),ge.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Je.setFromProjectionMatrix(ge),Q=this.localClippingEnabled,G=De.init(this.clippingPlanes,Q),_=se.get(M,d.length),_.init(),d.push(_),te.enabled===!0&&te.isPresenting===!0){const ne=y.xr.getDepthSensingMesh();ne!==null&&rs(ne,L,-1/0,y.sortObjects)}rs(M,L,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(k,le),Be=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Be&&ce.addToRenderList(_,M),this.info.render.frame++,G===!0&&De.beginShadows();const N=p.state.shadowsArray;ee.render(N,M,L),G===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=_.opaque,D=_.transmissive;if(p.setupLights(),L.isArrayCamera){const ne=L.cameras;if(D.length>0)for(let ae=0,pe=ne.length;ae<pe;ae++){const me=ne[ae];ka(F,D,M,me)}Be&&ce.render(M);for(let ae=0,pe=ne.length;ae<pe;ae++){const me=ne[ae];za(_,M,me,me.viewport)}}else D.length>0&&ka(F,D,M,L),Be&&ce.render(M),za(_,M,L);C!==null&&(Ie.updateMultisampleRenderTarget(C),Ie.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(y,M,L),Fe.resetDefaultState(),O=-1,E=null,T.pop(),T.length>0?(p=T[T.length-1],G===!0&&De.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function rs(M,L,N,F){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)N=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Je.intersectsSprite(M)){F&&Ae.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ge);const ae=J.update(M),pe=M.material;pe.visible&&_.push(M,ae,pe,N,Ae.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Je.intersectsObject(M))){const ae=J.update(M),pe=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ae.copy(M.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Ae.copy(ae.boundingSphere.center)),Ae.applyMatrix4(M.matrixWorld).applyMatrix4(ge)),Array.isArray(pe)){const me=ae.groups;for(let be=0,Ce=me.length;be<Ce;be++){const Me=me[be],qe=pe[Me.materialIndex];qe&&qe.visible&&_.push(M,ae,qe,N,Ae.z,Me)}}else pe.visible&&_.push(M,ae,pe,N,Ae.z,null)}}const ne=M.children;for(let ae=0,pe=ne.length;ae<pe;ae++)rs(ne[ae],L,N,F)}function za(M,L,N,F){const D=M.opaque,ne=M.transmissive,ae=M.transparent;p.setupLightsView(N),G===!0&&De.setGlobalState(y.clippingPlanes,N),F&&ye.viewport(S.copy(F)),D.length>0&&sr(D,L,N),ne.length>0&&sr(ne,L,N),ae.length>0&&sr(ae,L,N),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function ka(M,L,N,F){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[F.id]===void 0&&(p.state.transmissionRenderTarget[F.id]=new ti(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?Qi:mn,minFilter:Jn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const ne=p.state.transmissionRenderTarget[F.id],ae=F.viewport||S;ne.setSize(ae.z,ae.w);const pe=y.getRenderTarget();y.setRenderTarget(ne),y.getClearColor(z),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),Be&&ce.render(N);const me=y.toneMapping;y.toneMapping=Dn;const be=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),p.setupLightsView(F),G===!0&&De.setGlobalState(y.clippingPlanes,F),sr(M,N,F),Ie.updateMultisampleRenderTarget(ne),Ie.updateRenderTargetMipmap(ne),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Me=0,qe=L.length;Me<qe;Me++){const lt=L[Me],ct=lt.object,Ft=lt.geometry,Ye=lt.material,Se=lt.group;if(Ye.side===et&&ct.layers.test(F.layers)){const xt=Ye.side;Ye.side=Ut,Ye.needsUpdate=!0,Ha(ct,N,F,Ft,Ye,Se),Ye.side=xt,Ye.needsUpdate=!0,Ce=!0}}Ce===!0&&(Ie.updateMultisampleRenderTarget(ne),Ie.updateRenderTargetMipmap(ne))}y.setRenderTarget(pe),y.setClearColor(z,K),be!==void 0&&(F.viewport=be),y.toneMapping=me}function sr(M,L,N){const F=L.isScene===!0?L.overrideMaterial:null;for(let D=0,ne=M.length;D<ne;D++){const ae=M[D],pe=ae.object,me=ae.geometry,be=F===null?ae.material:F,Ce=ae.group;pe.layers.test(N.layers)&&Ha(pe,L,N,me,be,Ce)}}function Ha(M,L,N,F,D,ne){M.onBeforeRender(y,L,N,F,D,ne),M.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),D.onBeforeRender(y,L,N,F,M,ne),D.transparent===!0&&D.side===et&&D.forceSinglePass===!1?(D.side=Ut,D.needsUpdate=!0,y.renderBufferDirect(N,L,F,D,M,ne),D.side=pn,D.needsUpdate=!0,y.renderBufferDirect(N,L,F,D,M,ne),D.side=et):y.renderBufferDirect(N,L,F,D,M,ne),M.onAfterRender(y,L,N,F,D,ne)}function ar(M,L,N){L.isScene!==!0&&(L=Le);const F=Pe.get(M),D=p.state.lights,ne=p.state.shadowsArray,ae=D.state.version,pe=Z.getParameters(M,D.state,ne,L,N),me=Z.getProgramCacheKey(pe);let be=F.programs;F.environment=M.isMeshStandardMaterial?L.environment:null,F.fog=L.fog,F.envMap=(M.isMeshStandardMaterial?v:b).get(M.envMap||F.environment),F.envMapRotation=F.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,be===void 0&&(M.addEventListener("dispose",xe),be=new Map,F.programs=be);let Ce=be.get(me);if(Ce!==void 0){if(F.currentProgram===Ce&&F.lightsStateVersion===ae)return Va(M,pe),Ce}else pe.uniforms=Z.getUniforms(M),M.onBeforeCompile(pe,y),Ce=Z.acquireProgram(pe,me),be.set(me,Ce),F.uniforms=pe.uniforms;const Me=F.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Me.clippingPlanes=De.uniform),Va(M,pe),F.needsLights=Gl(M),F.lightsStateVersion=ae,F.needsLights&&(Me.ambientLightColor.value=D.state.ambient,Me.lightProbe.value=D.state.probe,Me.directionalLights.value=D.state.directional,Me.directionalLightShadows.value=D.state.directionalShadow,Me.spotLights.value=D.state.spot,Me.spotLightShadows.value=D.state.spotShadow,Me.rectAreaLights.value=D.state.rectArea,Me.ltc_1.value=D.state.rectAreaLTC1,Me.ltc_2.value=D.state.rectAreaLTC2,Me.pointLights.value=D.state.point,Me.pointLightShadows.value=D.state.pointShadow,Me.hemisphereLights.value=D.state.hemi,Me.directionalShadowMap.value=D.state.directionalShadowMap,Me.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Me.spotShadowMap.value=D.state.spotShadowMap,Me.spotLightMatrix.value=D.state.spotLightMatrix,Me.spotLightMap.value=D.state.spotLightMap,Me.pointShadowMap.value=D.state.pointShadowMap,Me.pointShadowMatrix.value=D.state.pointShadowMatrix),F.currentProgram=Ce,F.uniformsList=null,Ce}function Ga(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=Xr.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Va(M,L){const N=Pe.get(M);N.outputColorSpace=L.outputColorSpace,N.batching=L.batching,N.batchingColor=L.batchingColor,N.instancing=L.instancing,N.instancingColor=L.instancingColor,N.instancingMorph=L.instancingMorph,N.skinning=L.skinning,N.morphTargets=L.morphTargets,N.morphNormals=L.morphNormals,N.morphColors=L.morphColors,N.morphTargetsCount=L.morphTargetsCount,N.numClippingPlanes=L.numClippingPlanes,N.numIntersection=L.numClipIntersection,N.vertexAlphas=L.vertexAlphas,N.vertexTangents=L.vertexTangents,N.toneMapping=L.toneMapping}function kl(M,L,N,F,D){L.isScene!==!0&&(L=Le),Ie.resetTextureUnits();const ne=L.fog,ae=F.isMeshStandardMaterial?L.environment:null,pe=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Fn,me=(F.isMeshStandardMaterial?v:b).get(F.envMap||ae),be=F.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Ce=!!N.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Me=!!N.morphAttributes.position,qe=!!N.morphAttributes.normal,lt=!!N.morphAttributes.color;let ct=Dn;F.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ct=y.toneMapping);const Ft=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Ye=Ft!==void 0?Ft.length:0,Se=Pe.get(F),xt=p.state.lights;if(G===!0&&(Q===!0||M!==E)){const kt=M===E&&F.id===O;De.setState(F,M,kt)}let Ke=!1;F.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==xt.state.version||Se.outputColorSpace!==pe||D.isBatchedMesh&&Se.batching===!1||!D.isBatchedMesh&&Se.batching===!0||D.isBatchedMesh&&Se.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Se.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Se.instancing===!1||!D.isInstancedMesh&&Se.instancing===!0||D.isSkinnedMesh&&Se.skinning===!1||!D.isSkinnedMesh&&Se.skinning===!0||D.isInstancedMesh&&Se.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Se.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Se.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Se.instancingMorph===!1&&D.morphTexture!==null||Se.envMap!==me||F.fog===!0&&Se.fog!==ne||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==De.numPlanes||Se.numIntersection!==De.numIntersection)||Se.vertexAlphas!==be||Se.vertexTangents!==Ce||Se.morphTargets!==Me||Se.morphNormals!==qe||Se.morphColors!==lt||Se.toneMapping!==ct||Se.morphTargetsCount!==Ye)&&(Ke=!0):(Ke=!0,Se.__version=F.version);let Wt=Se.currentProgram;Ke===!0&&(Wt=ar(F,L,D));let ni=!1,Ot=!1,ss=!1;const mt=Wt.getUniforms(),En=Se.uniforms;if(ye.useProgram(Wt.program)&&(ni=!0,Ot=!0,ss=!0),F.id!==O&&(O=F.id,Ot=!0),ni||E!==M){mt.setValue(R,"projectionMatrix",M.projectionMatrix),mt.setValue(R,"viewMatrix",M.matrixWorldInverse);const kt=mt.map.cameraPosition;kt!==void 0&&kt.setValue(R,he.setFromMatrixPosition(M.matrixWorld)),Qe.logarithmicDepthBuffer&&mt.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&mt.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,Ot=!0,ss=!0)}if(D.isSkinnedMesh){mt.setOptional(R,D,"bindMatrix"),mt.setOptional(R,D,"bindMatrixInverse");const kt=D.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),mt.setValue(R,"boneTexture",kt.boneTexture,Ie))}D.isBatchedMesh&&(mt.setOptional(R,D,"batchingTexture"),mt.setValue(R,"batchingTexture",D._matricesTexture,Ie),mt.setOptional(R,D,"batchingIdTexture"),mt.setValue(R,"batchingIdTexture",D._indirectTexture,Ie),mt.setOptional(R,D,"batchingColorTexture"),D._colorsTexture!==null&&mt.setValue(R,"batchingColorTexture",D._colorsTexture,Ie));const as=N.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0)&&ke.update(D,N,Wt),(Ot||Se.receiveShadow!==D.receiveShadow)&&(Se.receiveShadow=D.receiveShadow,mt.setValue(R,"receiveShadow",D.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(En.envMap.value=me,En.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&L.environment!==null&&(En.envMapIntensity.value=L.environmentIntensity),Ot&&(mt.setValue(R,"toneMappingExposure",y.toneMappingExposure),Se.needsLights&&Hl(En,ss),ne&&F.fog===!0&&Te.refreshFogUniforms(En,ne),Te.refreshMaterialUniforms(En,F,j,W,p.state.transmissionRenderTarget[M.id]),Xr.upload(R,Ga(Se),En,Ie)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Xr.upload(R,Ga(Se),En,Ie),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&mt.setValue(R,"center",D.center),mt.setValue(R,"modelViewMatrix",D.modelViewMatrix),mt.setValue(R,"normalMatrix",D.normalMatrix),mt.setValue(R,"modelMatrix",D.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const kt=F.uniformsGroups;for(let os=0,Vl=kt.length;os<Vl;os++){const Wa=kt[os];rt.update(Wa,Wt),rt.bind(Wa,Wt)}}return Wt}function Hl(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Gl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,L,N){Pe.get(M.texture).__webglTexture=L,Pe.get(M.depthTexture).__webglTexture=N;const F=Pe.get(M);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=N===void 0,F.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,L){const N=Pe.get(M);N.__webglFramebuffer=L,N.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,N=0){C=M,I=L,A=N;let F=!0,D=null,ne=!1,ae=!1;if(M){const me=Pe.get(M);if(me.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(R.FRAMEBUFFER,null),F=!1;else if(me.__webglFramebuffer===void 0)Ie.setupRenderTarget(M);else if(me.__hasExternalTextures)Ie.rebindTextures(M,Pe.get(M.texture).__webglTexture,Pe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Me=M.depthTexture;if(me.__boundDepthTexture!==Me){if(Me!==null&&Pe.has(Me)&&(M.width!==Me.image.width||M.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(M)}}const be=M.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ae=!0);const Ce=Pe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ce[L])?D=Ce[L][N]:D=Ce[L],ne=!0):M.samples>0&&Ie.useMultisampledRTT(M)===!1?D=Pe.get(M).__webglMultisampledFramebuffer:Array.isArray(Ce)?D=Ce[N]:D=Ce,S.copy(M.viewport),P.copy(M.scissor),H=M.scissorTest}else S.copy(de).multiplyScalar(j).floor(),P.copy(_e).multiplyScalar(j).floor(),H=ze;if(ye.bindFramebuffer(R.FRAMEBUFFER,D)&&F&&ye.drawBuffers(M,D),ye.viewport(S),ye.scissor(P),ye.setScissorTest(H),ne){const me=Pe.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,me.__webglTexture,N)}else if(ae){const me=Pe.get(M.texture),be=L||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,me.__webglTexture,N||0,be)}O=-1},this.readRenderTargetPixels=function(M,L,N,F,D,ne,ae){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ae!==void 0&&(pe=pe[ae]),pe){ye.bindFramebuffer(R.FRAMEBUFFER,pe);try{const me=M.texture,be=me.format,Ce=me.type;if(!Qe.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-F&&N>=0&&N<=M.height-D&&R.readPixels(L,N,F,D,we.convert(be),we.convert(Ce),ne)}finally{const me=C!==null?Pe.get(C).__webglFramebuffer:null;ye.bindFramebuffer(R.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(M,L,N,F,D,ne,ae){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ae!==void 0&&(pe=pe[ae]),pe){ye.bindFramebuffer(R.FRAMEBUFFER,pe);try{const me=M.texture,be=me.format,Ce=me.type;if(!Qe.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=M.width-F&&N>=0&&N<=M.height-D){const Me=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Me),R.bufferData(R.PIXEL_PACK_BUFFER,ne.byteLength,R.STREAM_READ),R.readPixels(L,N,F,D,we.convert(be),we.convert(Ce),0),R.flush();const qe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);await ih(R,qe,4);try{R.bindBuffer(R.PIXEL_PACK_BUFFER,Me),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ne)}finally{R.deleteBuffer(Me),R.deleteSync(qe)}return ne}}finally{const me=C!==null?Pe.get(C).__webglFramebuffer:null;ye.bindFramebuffer(R.FRAMEBUFFER,me)}}},this.copyFramebufferToTexture=function(M,L=null,N=0){M.isTexture!==!0&&(Ci("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,M=arguments[1]);const F=Math.pow(2,-N),D=Math.floor(M.image.width*F),ne=Math.floor(M.image.height*F),ae=L!==null?L.x:0,pe=L!==null?L.y:0;Ie.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,N,0,0,ae,pe,D,ne),ye.unbindTexture()},this.copyTextureToTexture=function(M,L,N=null,F=null,D=0){M.isTexture!==!0&&(Ci("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,M=arguments[1],L=arguments[2],D=arguments[3]||0,N=null);let ne,ae,pe,me,be,Ce;N!==null?(ne=N.max.x-N.min.x,ae=N.max.y-N.min.y,pe=N.min.x,me=N.min.y):(ne=M.image.width,ae=M.image.height,pe=0,me=0),F!==null?(be=F.x,Ce=F.y):(be=0,Ce=0);const Me=we.convert(L.format),qe=we.convert(L.type);Ie.setTexture2D(L,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const lt=R.getParameter(R.UNPACK_ROW_LENGTH),ct=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ft=R.getParameter(R.UNPACK_SKIP_PIXELS),Ye=R.getParameter(R.UNPACK_SKIP_ROWS),Se=R.getParameter(R.UNPACK_SKIP_IMAGES),xt=M.isCompressedTexture?M.mipmaps[D]:M.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,xt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,pe),R.pixelStorei(R.UNPACK_SKIP_ROWS,me),M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,D,be,Ce,ne,ae,Me,qe,xt.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,D,be,Ce,xt.width,xt.height,Me,xt.data):R.texSubImage2D(R.TEXTURE_2D,D,be,Ce,ne,ae,Me,qe,xt),R.pixelStorei(R.UNPACK_ROW_LENGTH,lt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ct),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ft),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ye),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Se),D===0&&L.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(M,L,N=null,F=null,D=0){M.isTexture!==!0&&(Ci("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,F=arguments[1]||null,M=arguments[2],L=arguments[3],D=arguments[4]||0);let ne,ae,pe,me,be,Ce,Me,qe,lt;const ct=M.isCompressedTexture?M.mipmaps[D]:M.image;N!==null?(ne=N.max.x-N.min.x,ae=N.max.y-N.min.y,pe=N.max.z-N.min.z,me=N.min.x,be=N.min.y,Ce=N.min.z):(ne=ct.width,ae=ct.height,pe=ct.depth,me=0,be=0,Ce=0),F!==null?(Me=F.x,qe=F.y,lt=F.z):(Me=0,qe=0,lt=0);const Ft=we.convert(L.format),Ye=we.convert(L.type);let Se;if(L.isData3DTexture)Ie.setTexture3D(L,0),Se=R.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)Ie.setTexture2DArray(L,0),Se=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const xt=R.getParameter(R.UNPACK_ROW_LENGTH),Ke=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Wt=R.getParameter(R.UNPACK_SKIP_PIXELS),ni=R.getParameter(R.UNPACK_SKIP_ROWS),Ot=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ct.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ct.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,me),R.pixelStorei(R.UNPACK_SKIP_ROWS,be),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ce),M.isDataTexture||M.isData3DTexture?R.texSubImage3D(Se,D,Me,qe,lt,ne,ae,pe,Ft,Ye,ct.data):L.isCompressedArrayTexture?R.compressedTexSubImage3D(Se,D,Me,qe,lt,ne,ae,pe,Ft,ct.data):R.texSubImage3D(Se,D,Me,qe,lt,ne,ae,pe,Ft,Ye,ct),R.pixelStorei(R.UNPACK_ROW_LENGTH,xt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ke),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Wt),R.pixelStorei(R.UNPACK_SKIP_ROWS,ni),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ot),D===0&&L.generateMipmaps&&R.generateMipmap(Se),ye.unbindTexture()},this.initRenderTarget=function(M){Pe.get(M).__webglFramebuffer===void 0&&Ie.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ie.setTextureCube(M,0):M.isData3DTexture?Ie.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ie.setTexture2DArray(M,0):Ie.setTexture2D(M,0),ye.unbindTexture()},this.resetState=function(){I=0,A=0,C=null,ye.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wa?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===ns?"display-p3":"srgb"}}class Na{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=i}clone(){return new Na(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mm extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_a,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ci("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pt=new U;class es{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=$t(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$t(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$t(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$t(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$t(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array),r=je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array),r=je(r,this.array),s=je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new es(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cl extends nr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Si;const Gi=new U,yi=new U,Ti=new U,Ei=new Oe,Vi=new Oe,Rl=new ut,Pr=new U,Wi=new U,wr=new U,Go=new Oe,Us=new Oe,Vo=new Oe;class _m extends Nt{constructor(e=new Cl){if(super(),this.isSprite=!0,this.type="Sprite",Si===void 0){Si=new _n;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new gm(t,5);Si.setIndex([0,1,2,0,2,3]),Si.setAttribute("position",new es(i,3,0,!1)),Si.setAttribute("uv",new es(i,2,3,!1))}this.geometry=Si,this.material=e,this.center=new Oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yi.setFromMatrixScale(this.matrixWorld),Rl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ti.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yi.multiplyScalar(-Ti.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Lr(Pr.set(-.5,-.5,0),Ti,a,yi,r,s),Lr(Wi.set(.5,-.5,0),Ti,a,yi,r,s),Lr(wr.set(.5,.5,0),Ti,a,yi,r,s),Go.set(0,0),Us.set(1,0),Vo.set(1,1);let o=e.ray.intersectTriangle(Pr,Wi,wr,!1,Gi);if(o===null&&(Lr(Wi.set(-.5,.5,0),Ti,a,yi,r,s),Us.set(0,1),o=e.ray.intersectTriangle(Pr,wr,Wi,!1,Gi),o===null))return;const l=e.ray.origin.distanceTo(Gi);l<e.near||l>e.far||t.push({distance:l,point:Gi.clone(),uv:Zt.getInterpolation(Gi,Pr,Wi,wr,Go,Us,Vo,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Lr(n,e,t,i,r,s){Ei.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Vi.x=s*Ei.x-r*Ei.y,Vi.y=r*Ei.x+s*Ei.y):Vi.copy(Ei),n.copy(e),n.x+=Vi.x,n.y+=Vi.y,n.applyMatrix4(Rl)}class rr extends Dt{constructor(e,t,i,r,s,a,o,l,h){super(e,t,i,r,s,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fa extends _n{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let h=0;const c=[],u=new U,f=new U,m=[],g=[],_=[],p=[];for(let d=0;d<=i;d++){const T=[],y=d/i;let x=0;d===0&&a===0?x=.5/t:d===i&&l===Math.PI&&(x=-.5/t);for(let I=0;I<=t;I++){const A=I/t;u.x=-e*Math.cos(r+A*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(r+A*s)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(A+x,1-y),T.push(h++)}c.push(T)}for(let d=0;d<i;d++)for(let T=0;T<t;T++){const y=c[d][T+1],x=c[d][T],I=c[d+1][T],A=c[d+1][T+1];(d!==0||a>0)&&m.push(y,x,A),(d!==i-1||l<Math.PI)&&m.push(x,I,A)}this.setIndex(m),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(_,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wo(){return(typeof performance>"u"?Date:performance).now()}const Xo=new ut;class Mm{constructor(e,t,i=0,r=1/0){this.ray=new fl(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Da,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xo),this}intersectObject(e,t=!0,i=[]){return Ma(e,this,i,t),i.sort(qo),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ma(e[r],this,i,t);return i.sort(qo),i}}function qo(n,e){return n.distance-e.distance}function Ma(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Ma(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ea);class Sm{constructor(e,t){this.camera=e,this.domElement=t,t.addEventListener("pointermove",this.handlePointerMove),t.addEventListener("pointerdown",this.handlePointerDown),t.addEventListener("pointerup",this.handlePointerUp)}raycaster=new Mm;pointer=new Oe;hotspots=[];alphaContexts=new WeakMap;hovered=null;enabled=!0;pointerDownId=-1;register(e){this.hotspots.push(e)}unregister(e){const t=this.hotspots.findIndex(i=>i.object===e);t>=0&&this.hotspots.splice(t,1)}clear(){this.setHovered(null),this.hotspots.length=0}setEnabled(e){this.enabled=e,e||this.setHovered(null)}dispose(){this.domElement.removeEventListener("pointermove",this.handlePointerMove),this.domElement.removeEventListener("pointerdown",this.handlePointerDown),this.domElement.removeEventListener("pointerup",this.handlePointerUp)}updatePointer(e){const t=this.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1}pick(){this.raycaster.setFromCamera(this.pointer,this.camera);let e=null,t=1/0;for(const i of this.hotspots){const r=this.raycaster.intersectObject(i.object,!0);for(const s of r)if(!(!i.generous&&!this.isOpaqueHit(s))){s.distance<t&&(t=s.distance,e=i);break}}return e}isOpaqueHit(e){const s=e.object.material?.map?.image;if(!e.uv||!s||typeof s.getContext!="function")return!0;let a=this.alphaContexts.get(s);if(a===void 0&&(a=s.getContext("2d",{willReadFrequently:!0}),this.alphaContexts.set(s,a)),!a)return!0;const o=Math.min(s.width-1,Math.max(0,Math.floor(e.uv.x*s.width))),l=Math.min(s.height-1,Math.max(0,Math.floor((1-e.uv.y)*s.height)));return a.getImageData(o,l,1,1).data[3]>32}setHovered(e){this.hovered!==e&&(this.hovered?.onHover?.(!1),this.hovered=e,this.hovered?.onHover?.(!0),this.domElement.style.cursor=e?e.cursor??"pointer":"default")}handlePointerMove=e=>{this.enabled&&(this.updatePointer(e),this.setHovered(this.pick()))};handlePointerDown=e=>{this.enabled&&(this.pointerDownId=e.pointerId,this.updatePointer(e))};handlePointerUp=e=>{if(!this.enabled||e.pointerId!==this.pointerDownId)return;this.pointerDownId=-1,this.updatePointer(e);const t=this.pick();t&&t.onClick()}}class ym{constructor(e){this.narrator=e,this.titleCard=document.getElementById("title-card"),this.startButton=document.getElementById("start-button"),this.caption=document.getElementById("caption"),this.endCard=document.getElementById("end-card"),this.endTitle=document.getElementById("end-title"),this.endSubtitle=document.getElementById("end-subtitle")}titleCard;startButton;caption;endCard;endTitle;endSubtitle;captionTimer=0;onStart(e){this.startButton.addEventListener("click",()=>{this.titleCard.classList.add("hidden"),e()},{once:!0})}showCaption(e,t=0){this.caption.textContent=e,this.caption.classList.add("visible"),this.captionTimer=t>0?t:0,this.narrator?.speak(e)}hideCaption(){this.caption.classList.remove("visible"),this.captionTimer=0}showEndCard(e,t){this.hideCaption(),this.endTitle.textContent=e,this.endSubtitle.textContent=t,this.endCard.classList.add("visible"),this.narrator?.speak(`${e}. ${t}`)}update(e){this.captionTimer>0&&(this.captionTimer-=e,this.captionTimer<=0&&this.hideCaption())}}class Tm{synth=typeof window<"u"?window.speechSynthesis??null:null;voice=null;enabled=!0;rate=.92;pitch=1;constructor(){this.synth&&(this.pickVoice(),this.synth.addEventListener?.("voiceschanged",()=>this.pickVoice()))}pickVoice(){const e=this.synth?.getVoices()??[];this.voice=e.find(t=>/^en(-|_|$)/i.test(t.lang))??e[0]??null}speak(e){if(!this.enabled||!this.synth||!e.trim())return;this.synth.cancel();const t=new SpeechSynthesisUtterance(e);this.voice&&(t.voice=this.voice),t.rate=this.rate,t.pitch=this.pitch,this.synth.speak(t)}cancel(){this.synth?.cancel()}setEnabled(e){this.enabled=e,e||this.cancel()}}class Em{ctx;master=null;musicGain=null;reverbSend=null;noiseBuffer=null;enabled=!0;lastPop=0;ambientTimer=0;constructor(){const e=window.AudioContext??window.webkitAudioContext;if(!e){this.ctx=null;return}this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.85;const t=this.ctx.createBiquadFilter();t.type="highshelf",t.frequency.value=3200,t.gain.value=-6;const i=this.ctx.createDynamicsCompressor();i.threshold.value=-10,i.knee.value=24,i.ratio.value=4,i.attack.value=.004,i.release.value=.25,this.master.connect(t),t.connect(i),i.connect(this.ctx.destination);const r=this.ctx.createConvolver();r.buffer=this.buildImpulse(2.6,2.4);const s=this.ctx.createGain();s.gain.value=.9,this.reverbSend=this.ctx.createGain(),this.reverbSend.gain.value=1,this.reverbSend.connect(r),r.connect(s),s.connect(this.master),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=0,this.musicGain.connect(this.master);const a=Math.floor(this.ctx.sampleRate*1);this.noiseBuffer=this.ctx.createBuffer(1,a,this.ctx.sampleRate);const o=this.noiseBuffer.getChannelData(0);for(let l=0;l<a;l++)o[l]=Math.random()*2-1}buildImpulse(e,t){const i=this.ctx,r=i.sampleRate,s=Math.max(1,Math.floor(e*r)),a=i.createBuffer(2,s,r);for(let o=0;o<2;o++){const l=a.getChannelData(o);for(let h=0;h<s;h++){const c=h/s,u=Math.min(1,c*40)*Math.pow(1-c,t);l[h]=(Math.random()*2-1)*u}}return a}resume(){this.ctx&&(this.ctx.state==="suspended"&&this.ctx.resume(),this.musicGain&&this.musicGain.gain.setTargetAtTime(.12,this.ctx.currentTime,2),this.scheduleAmbient())}setEnabled(e){this.enabled=e,this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?.85:0,this.ctx.currentTime,.1)}tone(e,t,i={}){if(!this.ctx||!this.master)return;const{type:r="sine",gain:s=.2,attack:a=.005,delay:o=0,pan:l=0,reverb:h=.35,glide:c=0}=i,u=i.target??this.master,f=this.ctx.currentTime+o,m=this.ctx.createOscillator(),g=this.ctx.createGain(),_=this.ctx.createStereoPanner();if(_.pan.value=Math.max(-1,Math.min(1,l)),m.type=r,m.frequency.setValueAtTime(e,f),c&&m.frequency.exponentialRampToValueAtTime(e*Math.pow(2,c/1200),f+a+.04),g.gain.setValueAtTime(1e-4,f),g.gain.linearRampToValueAtTime(s,f+a),g.gain.exponentialRampToValueAtTime(1e-4,f+t),m.connect(g),g.connect(_),_.connect(u),this.reverbSend&&h>0){const p=this.ctx.createGain();p.gain.value=h,_.connect(p),p.connect(this.reverbSend)}m.start(f),m.stop(f+t+.05)}noise(e,t={}){if(!this.ctx||!this.master||!this.noiseBuffer)return;const{gain:i=.15,type:r="bandpass",from:s=1200,to:a=s,pan:o=0,reverb:l=.25}=t,h=this.ctx.currentTime,c=this.ctx.createBufferSource();c.buffer=this.noiseBuffer;const u=this.ctx.createBiquadFilter();u.type=r,u.frequency.setValueAtTime(s,h),u.frequency.exponentialRampToValueAtTime(Math.max(60,a),h+e),u.Q.value=.8;const f=this.ctx.createGain();f.gain.setValueAtTime(i,h),f.gain.exponentialRampToValueAtTime(1e-4,h+e);const m=this.ctx.createStereoPanner();if(m.pan.value=Math.max(-1,Math.min(1,o)),c.connect(u),u.connect(f),f.connect(m),m.connect(this.master),this.reverbSend&&l>0){const g=this.ctx.createGain();g.gain.value=l,m.connect(g),g.connect(this.reverbSend)}c.start(h),c.stop(h+e+.02)}pop(){if(!this.ctx||!this.master||!this.enabled)return;const e=this.ctx.currentTime;if(e-this.lastPop<.03)return;this.lastPop=e;const t=(Math.random()-.5)*1.2,i=this.ctx.createStereoPanner();i.pan.value=Math.max(-1,Math.min(1,t));const r=this.ctx.createBiquadFilter();if(r.type="lowpass",r.frequency.value=1400,r.Q.value=.4,r.connect(i),i.connect(this.master),this.reverbSend){const c=this.ctx.createGain();c.gain.value=.22,i.connect(c),c.connect(this.reverbSend)}const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine";const o=420+Math.random()*160;s.frequency.setValueAtTime(o,e),s.frequency.exponentialRampToValueAtTime(150,e+.08),a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(.42,e+.008),a.gain.exponentialRampToValueAtTime(1e-4,e+.18),s.connect(a),a.connect(r),s.start(e),s.stop(e+.22);const l=this.ctx.createOscillator(),h=this.ctx.createGain();if(l.type="sine",l.frequency.setValueAtTime(150,e),l.frequency.exponentialRampToValueAtTime(80,e+.1),h.gain.setValueAtTime(1e-4,e),h.gain.linearRampToValueAtTime(.22,e+.008),h.gain.exponentialRampToValueAtTime(1e-4,e+.15),l.connect(h),h.connect(r),l.start(e),l.stop(e+.18),this.noiseBuffer){const c=this.ctx.createBufferSource();c.buffer=this.noiseBuffer;const u=this.ctx.createBiquadFilter();u.type="lowpass",u.frequency.value=900;const f=this.ctx.createGain();f.gain.setValueAtTime(.12,e),f.gain.exponentialRampToValueAtTime(1e-4,e+.06),c.connect(u),u.connect(f),f.connect(r),c.start(e),c.stop(e+.09)}}chime(e=0){const t=[523.25,587.33,659.25,783.99,880,987.77,1046.5],i=t[Math.min(e,t.length-1)],r=(Math.random()-.5)*.6;this.tone(i,.9,{type:"sine",gain:.22,attack:.004,pan:r,reverb:.6,glide:12}),this.tone(i*2,.5,{type:"sine",gain:.06,attack:.004,pan:r,reverb:.6}),this.tone(i*3,.35,{type:"sine",gain:.025,attack:.004,pan:r,reverb:.6}),this.tone(i*1.5,.6,{type:"triangle",gain:.04,attack:.006,pan:r,reverb:.6})}success(){const e=[523.25,659.25,783.99,1046.5,1318.5];e.forEach((t,i)=>{const r=-.4+i/(e.length-1)*.8;this.tone(t,.9,{type:"sine",gain:.18,attack:.004,delay:i*.11,pan:r,reverb:.7}),this.tone(t*2,.55,{type:"sine",gain:.04,attack:.004,delay:i*.11,pan:r,reverb:.7})}),this.tone(1046.5,1.6,{type:"sine",gain:.05,attack:.02,delay:.55,reverb:.85,glide:6})}whoosh(){this.noise(.55,{gain:.14,type:"lowpass",from:2200,to:320,pan:-.6,reverb:.4}),this.noise(.5,{gain:.08,type:"lowpass",from:1800,to:260,pan:.6,reverb:.4})}pageTurn(){this.sweep(0,1),this.sweep(1.15,.6)}sweep(e,t){if(!this.ctx||!this.master||!this.noiseBuffer)return;const i=this.ctx.currentTime+e,r=1.1,s=this.ctx.createBufferSource();s.buffer=this.noiseBuffer,s.loop=!0;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.Q.value=.6,a.frequency.setValueAtTime(500,i),a.frequency.exponentialRampToValueAtTime(2600,i+r*.45),a.frequency.exponentialRampToValueAtTime(300,i+r);const o=this.ctx.createGain();o.gain.setValueAtTime(1e-4,i),o.gain.linearRampToValueAtTime(.2*t,i+.18),o.gain.setValueAtTime(.2*t,i+r*.6),o.gain.exponentialRampToValueAtTime(1e-4,i+r);const l=this.ctx.createStereoPanner();if(l.pan.setValueAtTime(-.85,i),l.pan.linearRampToValueAtTime(.85,i+r),s.connect(a),a.connect(o),o.connect(l),l.connect(this.master),this.reverbSend){const u=this.ctx.createGain();u.gain.value=.5,l.connect(u),u.connect(this.reverbSend)}s.start(i),s.stop(i+r+.05);const h=this.ctx.createOscillator(),c=this.ctx.createGain();h.type="sine",h.frequency.setValueAtTime(120,i),h.frequency.exponentialRampToValueAtTime(60,i+r),c.gain.setValueAtTime(1e-4,i),c.gain.linearRampToValueAtTime(.14*t,i+.25),c.gain.exponentialRampToValueAtTime(1e-4,i+r),h.connect(c),c.connect(this.master),h.start(i),h.stop(i+r+.05)}scheduleAmbient(){if(!this.ctx||!this.musicGain)return;const e=this.musicGain;window.clearTimeout(this.ambientTimer);const t=[523.25,587.33,659.25,783.99,880],i=()=>{if(this.ctx&&this.enabled){const r=t[Math.floor(Math.random()*t.length)]*(Math.random()<.3?.5:1),s=(Math.random()-.5)*1.2;this.tone(r,1.8,{type:"sine",gain:.5,attack:.02,target:e,pan:s,reverb:.8}),Math.random()<.35&&this.tone(r*1.25,1.6,{type:"sine",gain:.22,attack:.03,delay:.08,target:e,pan:s,reverb:.8})}this.ambientTimer=window.setTimeout(i,1400+Math.random()*1600)};this.ambientTimer=window.setTimeout(i,800)}}class xm{constructor(e,t){this.ctx=e,this.transition=t}current=null;go(e,t={}){t.wipe&&this.transition?(this.ctx.sound.pageTurn(),this.transition.wipe(()=>this.swap(e))):this.swap(e)}swap(e){this.current?.exit(),this.current=e,e.enter(this.ctx)}update(e){this.current?.update(e)}}class bm{container;page;busy=!1;constructor(e="#efe9d8"){const t=document.createElement("div");Object.assign(t.style,{position:"fixed",inset:"0",zIndex:"50",perspective:"1500px",pointerEvents:"none",overflow:"hidden"});const i=document.createElement("div");Object.assign(i.style,{position:"absolute",inset:"0",transformOrigin:"left center",transformStyle:"preserve-3d",backfaceVisibility:"visible",backgroundColor:e,backgroundImage:`linear-gradient(100deg,
        rgba(60, 50, 36, 0.4) 0%,
        rgba(60, 50, 36, 0) 14%,
        rgba(255, 253, 245, 0) 80%,
        rgba(255, 253, 245, 0.75) 100%)`,boxShadow:"-40px 0 90px rgba(35, 29, 20, 0.45)",transform:"rotateY(-180deg)",willChange:"transform"});const r=document.createElement("div");Object.assign(r.style,{position:"absolute",top:"0",right:"0",width:"7%",height:"100%",background:"linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 100%)",pointerEvents:"none"}),i.appendChild(r),t.appendChild(i),document.body.appendChild(t),this.container=t,this.page=i}wipe(e,t=1200){if(this.busy){e();return}this.busy=!0;const{page:i,container:r}=this,s=`transform ${t}ms cubic-bezier(0.45, 0.05, 0.35, 1)`;r.style.pointerEvents="auto";const a=l=>{l.propertyName==="transform"&&(i.removeEventListener("transitionend",a),i.style.transition="none",i.style.transform="rotateY(-180deg)",r.style.pointerEvents="none",this.busy=!1)},o=l=>{l.propertyName==="transform"&&(i.removeEventListener("transitionend",o),e(),i.addEventListener("transitionend",a),requestAnimationFrame(()=>{i.style.transition=s,i.style.transform="rotateY(-540deg)"}))};i.style.transition="none",i.style.transform="rotateY(-180deg)",i.offsetWidth,i.addEventListener("transitionend",o),requestAnimationFrame(()=>{i.style.transition=s,i.style.transform="rotateY(-360deg)"})}}const Am=new Ge("#efe9d8");function Cm(){const n=document.createElement("canvas");n.width=4,n.height=256;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,n.height);t.addColorStop(0,"#f7f2e4"),t.addColorStop(.55,"#efe9d8"),t.addColorStop(1,"#e4dcc6"),e.fillStyle=t,e.fillRect(0,0,n.width,n.height);const i=new rr(n);return i.colorSpace=Ct,i}class Rm{renderer;scene=new mm;camera;interaction;hud;narrator;sound;scenes;clock=new vm;running=!1;constructor(e){this.renderer=new pm({canvas:e,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Ct,this.scene.background=Cm(),this.scene.fog=new Na(Am,18,40),this.camera=new Gt(72,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(0,1.5,0),this.interaction=new Sm(this.camera,e),this.narrator=new Tm,this.sound=new Em,this.hud=new ym(this.narrator);const t={scene:this.scene,camera:this.camera,interaction:this.interaction,hud:this.hud,narrator:this.narrator,sound:this.sound};this.scenes=new xm(t,new bm),this.resize(),window.addEventListener("resize",this.resize)}start(e){this.sound.resume(),this.scenes.go(e),!this.running&&(this.running=!0,this.clock.start(),this.renderer.setAnimationLoop(this.tick))}tick=()=>{const e=Math.min(this.clock.getDelta(),.05);this.scenes.update(e),this.hud.update(e),this.renderer.render(this.scene,this.camera)};resize=()=>{const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}}const Ns=n=>Math.min(255,Math.max(0,n));let Fs=null;function Pl(){if(Fs)return Fs;const n=512,e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d");t.fillStyle="#f3eede",t.fillRect(0,0,n,n);const i=t.getImageData(0,0,n,n),r=i.data;for(let s=0;s<n;s++)for(let a=0;a<n;a++){const o=(s*n+a)*4,l=(Math.random()-.5)*14,h=Math.PI*2/n,c=Math.sin(a*h*3+Math.cos(s*h*2))*5+Math.sin(s*h*5+Math.cos(a*h*4))*4,u=l+c;r[o]=Ns(r[o]+u),r[o+1]=Ns(r[o+1]+u),r[o+2]=Ns(r[o+2]+u*.82)}t.putImageData(i,0,0),t.strokeStyle="rgba(120, 108, 82, 0.03)",t.lineWidth=1;for(let s=2;s<n;s+=6)t.beginPath(),t.moveTo(0,s+Math.sin(s)*.5),t.lineTo(n,s+Math.cos(s)*.5),t.stroke();t.fillStyle="rgba(90, 80, 60, 0.06)";for(let s=0;s<90;s++){const a=Math.random()*n,o=Math.random()*n,l=Math.random()*1.4+.3;t.beginPath(),t.arc(a,o,l,0,Math.PI*2),t.fill()}t.fillStyle="rgba(255, 252, 240, 0.12)";for(let s=0;s<60;s++){const a=Math.random()*n,o=Math.random()*n,l=Math.random()*1.1+.2;t.beginPath(),t.arc(a,o,l,0,Math.PI*2),t.fill()}return Fs=e,e}function Rt(n){return n.createPattern(Pl(),"repeat")}function vn(n=1){const e=new rr(Pl());return e.wrapS=e.wrapT=Kr,e.repeat.set(n,n),e.colorSpace=Ct,e.anisotropy=4,e}const oe="#211d18";function Nn(n,e,t,i,r,s=1.5){const a=i-e,o=r-t,l=Math.max(2,Math.round(Math.hypot(a,o)/24));n.beginPath(),n.moveTo(e,t);for(let h=1;h<=l;h++){const c=h/l,u=e+a*c+(Math.random()-.5)*s,f=t+o*c+(Math.random()-.5)*s;n.lineTo(u,f)}n.stroke()}const Zi=["#e4572e","#f3a712","#f7e733","#3fa34d","#2b8ac9","#4b3f9e","#9b4dca"];let Sa=-1;const Yo=2.6;function Pm(){Sa=performance.now()/1e3}function wm(){if(Sa<0)return-1;const n=performance.now()/1e3-Sa;return n>Yo?-1:n/Yo}function ve(n,e){n.strokeStyle=oe,n.lineWidth=e}const Fi="#f3eede",Ee={bark:"#7c5327",barkDark:"#5c3d1d",leaf:"#5c9a3c",leafLight:"#7cbb54",leafDark:"#3f7a2a",grass:"#79ad48",grassDark:"#5c8f34",stone:"#a9a49a",stoneDark:"#7f7a70",wall:"#e7d3a4",wallDark:"#cdb078",roof:"#b8543a",roofDark:"#8f3d2a",door:"#6f4a2f",mushCap:"#d6452f",mushStem:"#efe6cf"};function It(n,e){const t=/^#?([0-9a-f]{6})$/i.exec(n.trim());if(!t)return n;const i=parseInt(t[1],16),r=l=>Math.max(0,Math.min(255,Math.round(l+e*255))),s=r(i>>16&255),a=r(i>>8&255),o=r(i&255);return`rgb(${s}, ${a}, ${o})`}function st(n,e,t){if(n.save(),e(),t){n.fillStyle=t,n.fill();const i=Rt(n);i&&(n.globalAlpha=.12,n.fillStyle=i,n.fill(),n.globalAlpha=1)}else{n.fillStyle=Fi,n.fill();const i=Rt(n);i&&(n.fillStyle=i,n.fill())}n.restore()}function ya(n,e,t,i,r,s,a){n.save(),e();const o=n.createLinearGradient(t,i,t,r);o.addColorStop(0,s),o.addColorStop(1,a),n.fillStyle=o,n.fill(),n.restore()}function ht(n,e,t,i,r,s,a){n.save(),e(),n.clip();const o=n.createRadialGradient(t-r*.35,i-r*.4,r*.1,t,i,r*1.25);o.addColorStop(0,s),o.addColorStop(1,a),n.fillStyle=o,n.fillRect(t-r*2,i-r*2,r*4,r*4),n.restore()}function Ln(n,e,t,i,r,s){n.save(),n.beginPath();const a=9;for(let o=0;o<=a;o++){const l=o/a*Math.PI*2,h=i*(.78+.22*Math.sin(o*3.1+r)*Math.cos(o*1.7+r)),c=e+Math.cos(l)*h,u=t+Math.sin(l)*h;if(o===0)n.moveTo(c,u);else{const f=(o-.5)/a*Math.PI*2,m=i*(.95+.12*Math.sin(o*5.3+r));n.quadraticCurveTo(e+Math.cos(f)*m,t+Math.sin(f)*m,c,u)}}n.closePath(),n.fillStyle=s,n.fill(),n.restore()}function Lm(n,e,t,i,r=0){const s=e/2,a=e*.14,o=t*.17,l=o+a*.95,h=o+a*1.35,c=t*.52,u=t*.87,f=e*.15,m=e*.1,g=e*.26,_=a*.33,p=wm();if(n.save(),p>=0){const I=1-(1-p)*(1-p);n.translate(s,o),n.rotate(I*Math.PI*6),n.translate(-s,-o)}const d=Zi.length*2;for(let I=0;I<d;I++){const A=I/(d-1),C=A<.5?-1:1,O=Math.abs(A-.5)*2*a*2.6,E=Math.PI+A*Math.PI,S=s+Math.cos(E)*a*.95,P=o+Math.sin(E)*a*.95-a*.2,H=Math.sin(r*2.2+I*.7)*a*(.5+Math.abs(A-.5)),z=Math.cos(r*1.7+I*.5)*a*.16,K=s+C*(a*.5+O)+H,Y=o+a*(2.4+Math.abs(A-.5)*2.6)+z;n.strokeStyle=Zi[I%Zi.length],n.lineWidth=e*.045,n.lineCap="round",n.beginPath(),n.moveTo(S,P),n.bezierCurveTo(s+C*a*2.4+H*.6,o+a*.8,s+C*a*1.6+H,o+a*2+z,K,Y),n.stroke()}n.restore(),st(n,()=>{n.beginPath(),n.moveTo(s-_,l-a*.1),n.lineTo(s-_,h+a*.3),n.lineTo(s+_,h+a*.3),n.lineTo(s+_,l-a*.1),n.closePath()}),ve(n,e*.014),n.strokeStyle=oe,n.beginPath(),n.moveTo(s-_,l-a*.1),n.lineTo(s-_,h),n.moveTo(s+_,l-a*.1),n.lineTo(s+_,h),n.stroke();const T=()=>{n.beginPath(),n.moveTo(s-f,h+a*.15),n.quadraticCurveTo(s-_*1.4,h-a*.05,s-_,h-a*.15),n.quadraticCurveTo(s,h+a*.35,s+_,h-a*.15),n.quadraticCurveTo(s+_*1.4,h-a*.05,s+f,h+a*.15),n.quadraticCurveTo(s+m*1.15,(h+c)/2,s+m,c),n.quadraticCurveTo(s+g*.7,(c+u)/2,s+g,u);for(let I=0;I<5;I++){const A=s+g-I/5*g*2,C=s+g-(I+1)/5*g*2;n.quadraticCurveTo((A+C)/2,u+t*.03,C,u)}n.quadraticCurveTo(s-g*.7,(c+u)/2,s-m,c),n.quadraticCurveTo(s-m*1.15,(h+c)/2,s-f,h+a*.15),n.closePath()};st(n,T),ht(n,T,s-e*.05,t*.6,e*.3,"rgba(255,255,250,0.3)","rgba(40,35,28,0.16)"),ve(n,e*.016),n.strokeStyle=oe,T(),n.stroke(),n.lineWidth=e*.01,n.beginPath(),n.moveTo(s-m,c),n.quadraticCurveTo(s,c+t*.01,s+m,c);for(const I of[-.5,0,.5])n.moveTo(s+I*g*.9,c+t*.03),n.lineTo(s+I*g*1.2,u-t*.02);n.stroke(),ve(n,e*.03),n.lineCap="round";for(const I of[-1,1]){const A=Math.sin(r*1.4+(I>0?1:0))*t*.01;n.beginPath(),n.moveTo(s+I*f*.92,h+a*.25),n.quadraticCurveTo(s+I*(f+e*.05),t*.44,s+I*(m+e*.06),t*.58+A),n.stroke(),n.beginPath(),n.arc(s+I*(m+e*.06),t*.59+A,e*.028,0,Math.PI*2),n.fillStyle=Fi,n.fill(),n.stroke()}ve(n,e*.03);for(const I of[-1,1])n.beginPath(),n.moveTo(s+I*g*.35,u),n.lineTo(s+I*g*.35,t*.96),n.stroke(),n.beginPath(),n.moveTo(s+I*g*.35-e*.02,t*.96),n.quadraticCurveTo(s+I*g*.35+I*e*.06,t*.99,s+I*g*.35+I*e*.07,t*.975),n.lineTo(s+I*g*.35+e*.01,t*.955),n.closePath(),n.fillStyle=oe,n.fill();const y=()=>{n.beginPath(),n.ellipse(s,o,a*.92,a,0,0,Math.PI*2)};st(n,y),ht(n,y,s-a*.25,o-a*.2,a,"rgba(255,250,240,0.4)","rgba(60,45,30,0.14)"),ve(n,e*.016),n.strokeStyle=oe,y(),n.stroke(),n.save(),n.fillStyle="rgba(230,120,110,0.35)";for(const I of[-1,1])n.beginPath(),n.ellipse(s+I*a*.5,o+a*.28,a*.2,a*.14,0,0,Math.PI*2),n.fill();n.restore();const x=r%4<.15;n.strokeStyle=oe,n.fillStyle=oe;for(const I of[-1,1]){const A=s+I*a*.34,C=o-a*.02;x?(ve(n,e*.012),n.beginPath(),n.moveTo(A-a*.14,C),n.quadraticCurveTo(A,C+a*.08,A+a*.14,C),n.stroke()):(n.beginPath(),n.arc(A,C,a*.12,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.9)",n.beginPath(),n.arc(A-a*.04,C-a*.04,a*.04,0,Math.PI*2),n.fill(),n.fillStyle=oe)}ve(n,e*.01),n.beginPath(),n.moveTo(s,o+a*.1),n.lineTo(s-a*.06,o+a*.26),n.stroke(),ve(n,e*.014),n.beginPath(),n.arc(s,o+a*.32,a*.34,.15*Math.PI,.85*Math.PI),n.stroke()}function Im(n,e,t,i){const r=a=>{const o=a/e,l=Math.sin(Math.PI*Math.min(1,Math.max(0,o)))**1.4;return t-l*t*.82},s=()=>{n.beginPath(),n.moveTo(0,t+2),n.lineTo(0,r(0));for(let a=0;a<=e;a+=e/48)n.lineTo(a,r(a));n.lineTo(e,t+2),n.closePath()};st(n,s,i?Ee.grass:null),i&&ya(n,s,e/2,t*.1,t,Ee.grass,Ee.grassDark),ve(n,e*.005),n.strokeStyle=i?Ee.grassDark:oe,n.beginPath(),n.moveTo(0,r(0));for(let a=0;a<=e;a+=e/48)n.lineTo(a,r(a));n.stroke(),n.strokeStyle=i?Ee.grassDark:oe,n.lineWidth=e*.004;for(let a=2;a<46;a++){const o=a/48*e+Math.random()*(e/60),l=r(o);if(l>t*.94)continue;const h=t*.05+Math.random()*t*.04;Nn(n,o,l,o-h*.3,l-h,.5),Nn(n,o,l,o+h*.2,l-h*.8,.5)}}function Dm(n,e,t,i){const r=e/2,s=e*.34,a=e*.12,o=e*.05,l=()=>{n.beginPath(),n.moveTo(r-s,t),n.quadraticCurveTo(r-s*.5,t*.55,r-a+o,t*.16),n.quadraticCurveTo(r-a*2.2+o,t*.08,r-a*2.6+o,t*-.02),n.lineTo(r-a*1.2+o,t*.12),n.quadraticCurveTo(r+o,t*.05,r+a*1.4+o,t*.1),n.lineTo(r+a*2.6+o,t*-.04),n.quadraticCurveTo(r+a*2+o,t*.09,r+a+o,t*.18),n.quadraticCurveTo(r+s*.5,t*.55,r+s,t),n.quadraticCurveTo(r+s*.5,t*.985,r+s*.28,t),n.quadraticCurveTo(r,t*.97,r-s*.28,t),n.quadraticCurveTo(r-s*.5,t*.985,r-s,t),n.closePath()};st(n,l,i?Ee.bark:null),ht(n,l,r-s*.3,t*.5,t*.6,i?"rgba(255,240,210,0.35)":"rgba(255,250,235,0.0)",i?"rgba(60,38,16,0.5)":"rgba(45,38,28,0.32)"),ve(n,e*.02),n.strokeStyle=i?Ee.barkDark:oe,l(),n.stroke(),n.lineWidth=e*.016,n.strokeStyle=i?"rgba(70,45,20,0.6)":"rgba(33,29,24,0.55)";for(const[h,c,u]of[[-.06,.85,.2],[.02,.9,.14],[.1,.8,.24]])n.beginPath(),n.moveTo(r+e*h,t*u),n.bezierCurveTo(r+e*(h+.04),t*(u+(c-u)*.4),r+e*(h-.02),t*(u+(c-u)*.7),r+e*(h+.02),t*c),n.stroke()}function Um(n,e,t,i){const r=e/2,s=t*.5,a=Math.min(e,t)*.46,o=[],l=7;for(let c=0;c<l;c++){const u=c/l*Math.PI*2-Math.PI/2;o.push({x:r+Math.cos(u)*a*.62,y:s+Math.sin(u)*a*.6,r:a*(.42+.08*Math.sin(c*2.7)),s:c*1.9})}o.push({x:r,y:s,r:a*.62,s:5.5});const h=i?Ee.leaf:Fi;for(const c of o)Ln(n,c.x,c.y,c.r,c.s,h);if(!i){const c=Rt(n);if(c){n.save(),n.globalAlpha=.9;for(const u of o)Ln(n,u.x,u.y,u.r,u.s,c);n.restore()}}if(i){for(const c of o){const u=(c.y-(s-a))/(2*a);Ln(n,c.x,c.y,c.r*.86,c.s+1,u>.55?Ee.leafDark:Ee.leaf)}for(const c of o.slice(0,4))Ln(n,c.x-c.r*.2,c.y-c.r*.25,c.r*.5,c.s+3,Ee.leafLight)}ht(n,()=>{n.beginPath(),n.arc(r,s,a*1.02,0,Math.PI*2)},r,s,a,"rgba(255,255,240,0.18)",i?"rgba(30,60,20,0.35)":"rgba(40,35,28,0.28)"),ve(n,e*.01),n.strokeStyle=i?Ee.leafDark:"rgba(33,29,24,0.7)";for(const c of o)n.beginPath(),n.arc(c.x,c.y,c.r*.92,Math.PI*.85,Math.PI*2.15),n.stroke();n.lineWidth=e*.006,n.strokeStyle=i?"rgba(35,70,25,0.5)":"rgba(33,29,24,0.4)";for(let c=0;c<18;c++){const u=Math.random()*Math.PI*2,f=Math.random()*a*.75,m=r+Math.cos(u)*f,g=s+Math.sin(u)*f;Nn(n,m,g,m+e*.025,g-t*.02,.4)}}function Ko(n,e,t,i=!1,r){n.save(),i&&(n.translate(e,0),n.scale(-1,1));const s=t*.55,a=()=>{n.beginPath(),n.moveTo(0,s-t*.1),n.quadraticCurveTo(e*.4,t*.3,e*.72,t*.24),n.lineTo(e*.72,t*.34),n.quadraticCurveTo(e*.4,t*.42,0,s+t*.1),n.closePath()};st(n,a,r?Ee.bark:null),ve(n,e*.01),n.strokeStyle=r?Ee.barkDark:oe,a(),n.stroke(),n.beginPath(),n.moveTo(e*.44,t*.36),n.quadraticCurveTo(e*.5,t*.55,e*.58,t*.62),n.stroke();const o=[[.7,.24,.26,-.4],[.82,.34,.22,.1],[.66,.42,.2,.5],[.58,.6,.16,.7]];for(const[l,h,c,u]of o){const f=()=>{n.save(),n.translate(e*l,t*h),n.rotate(u),n.beginPath(),n.ellipse(0,0,t*c*1.5,t*c*.7,0,0,Math.PI*2),n.restore()};st(n,f,r?Ee.leaf:null),ve(n,e*.008),n.strokeStyle=r?Ee.leafDark:oe,f(),n.stroke(),n.beginPath(),n.moveTo(e*l-Math.cos(u)*t*c*1.3,t*h-Math.sin(u)*t*c*1.3),n.lineTo(e*l+Math.cos(u)*t*c*1.3,t*h+Math.sin(u)*t*c*1.3),n.stroke()}n.restore()}function Nm(n,e,t,i){const r=t*.42;st(n,()=>{n.beginPath(),n.moveTo(e*.12,t*.96),n.lineTo(e*.12,r),n.lineTo(e*.88,r),n.lineTo(e*.88,t*.96),n.closePath()},i?Ee.wall:null),i&&ya(n,()=>{n.beginPath(),n.rect(e*.12,r,e*.76,t*.54)},e/2,r,t*.96,"rgba(255,248,225,0.25)","rgba(120,90,45,0.28)"),st(n,()=>{n.beginPath(),n.moveTo(e*.06,r+t*.02),n.lineTo(e*.5,t*.12),n.lineTo(e*.94,r+t*.02),n.closePath()},i?Ee.roof:null),i&&ya(n,()=>{n.beginPath(),n.moveTo(e*.06,r+t*.02),n.lineTo(e*.5,t*.12),n.lineTo(e*.94,r+t*.02),n.closePath()},e/2,t*.12,r,"rgba(255,235,220,0.2)","rgba(90,35,25,0.3)"),ve(n,e*.012),n.strokeStyle=i?Ee.roofDark:oe,n.beginPath(),n.moveTo(e*.06,r+t*.02),n.lineTo(e*.5,t*.12),n.lineTo(e*.94,r+t*.02),n.stroke(),n.strokeStyle=i?Ee.wallDark:oe,n.beginPath(),n.moveTo(e*.12,t*.96),n.lineTo(e*.12,r),n.lineTo(e*.88,r),n.lineTo(e*.88,t*.96),n.lineTo(e*.12,t*.96),n.stroke(),st(n,()=>{n.beginPath(),n.rect(e*.7,t*.2,e*.1,t*.16)},i?Ee.roofDark:null),st(n,()=>{n.beginPath(),n.moveTo(e*.37,t*.96),n.lineTo(e*.37,t*.74),n.arc(e*.5,t*.74,e*.13,Math.PI,0),n.lineTo(e*.63,t*.96),n.closePath()},i?Ee.door:null),ve(n,e*.012),n.strokeStyle=oe,n.beginPath(),n.moveTo(e*.37,t*.96),n.lineTo(e*.37,t*.74),n.arc(e*.5,t*.74,e*.13,Math.PI,0),n.lineTo(e*.63,t*.96),n.stroke();for(const s of[.28,.72])st(n,()=>{n.beginPath(),n.rect(e*s-e*.06,t*.58,e*.12,t*.12)},i?"#f6dd82":null),n.strokeStyle=oe,n.strokeRect(e*s-e*.06,t*.58,e*.12,t*.12),n.beginPath(),n.moveTo(e*s,t*.58),n.lineTo(e*s,t*.7),n.moveTo(e*s-e*.06,t*.64),n.lineTo(e*s+e*.06,t*.64),n.stroke()}function Fm(n,e,t){st(n,()=>{n.beginPath(),n.rect(0,0,e,t)}),n.strokeStyle="rgba(33, 29, 24, 0.35)";for(let i=0;i<3;i++){const r=t*(.55+i*.14),s=t*(.12-i*.03);n.lineWidth=e*.002,n.beginPath(),n.moveTo(0,r);for(let a=0;a<=e;a+=e/40){const o=r-Math.sin(a/e*Math.PI*(2+i))*s;n.lineTo(a,o)}n.stroke()}n.strokeStyle="rgba(33, 29, 24, 0.3)",n.lineWidth=e*.002,n.beginPath(),n.arc(e*.78,t*.22,t*.09,0,Math.PI*2),n.stroke()}function Om(n,e,t,i){const r=[{x:e*.24,y:t*.68,r:t*.32,s:.4},{x:e*.76,y:t*.66,r:t*.36,s:1.7},{x:e*.5,y:t*.46,r:t*.42,s:3.1},{x:e*.42,y:t*.72,r:t*.3,s:4.6},{x:e*.62,y:t*.74,r:t*.26,s:5.9}],s=i?Ee.leaf:Fi;for(const a of r)Ln(n,a.x,a.y,a.r,a.s,s);if(!i){const a=Rt(n);if(a)for(const o of r)Ln(n,o.x,o.y,o.r,o.s,a)}if(i){for(const a of r)a.y>t*.6&&Ln(n,a.x,a.y+a.r*.15,a.r*.82,a.s+2,Ee.leafDark);Ln(n,e*.44,t*.36,t*.2,2.2,Ee.leafLight)}ht(n,()=>{n.beginPath(),n.ellipse(e*.5,t*.6,e*.5,t*.42,0,0,Math.PI*2)},e*.5,t*.6,t*.5,"rgba(255,255,240,0.16)",i?"rgba(25,55,18,0.34)":"rgba(40,35,28,0.26)"),ve(n,e*.01),n.strokeStyle=i?Ee.leafDark:"rgba(33,29,24,0.7)";for(const a of r)n.beginPath(),n.arc(a.x,a.y,a.r*.9,Math.PI*.9,Math.PI*2.1),n.stroke();n.lineWidth=e*.008,n.strokeStyle=i?Ee.leafDark:oe;for(let a=0;a<14;a++){const o=e*(.18+Math.random()*.64),l=t*(.3+Math.random()*.44);Nn(n,o,l,o+e*.02,l-t*.05,.5)}}function Bm(n,e,t,i){const r=e/2;n.strokeStyle=i?Ee.grassDark:oe,n.lineWidth=e*.14,n.lineCap="round",n.beginPath(),n.moveTo(r,t),n.quadraticCurveTo(r-e*.12,t*.5,r,t*.06),n.stroke();const s=(a,o,l)=>{const h=r,c=t*o,u=()=>{n.beginPath(),n.moveTo(h,c),n.quadraticCurveTo(h+a*e*l*.7,c-t*.02,h+a*e*l,c-t*l*.5),n.quadraticCurveTo(h+a*e*l*.5,c+t*.02,h,c+t*.01),n.closePath()};st(n,u,i?Ee.grass:null),ve(n,e*.02),n.strokeStyle=i?Ee.grassDark:oe,u(),n.stroke()};s(-1,.58,.42),s(1,.42,.4)}function zm(n,e,t,i,r=0){const s=e/2,a=t*.5,o=8,l=Math.min(e,t)*.16,h=Math.min(e,t)*.34,c=Math.min(e,t)*.13,u=()=>Rt(n)??"#f3eede",f=(g,_,p)=>{const d=s+Math.cos(g)*l,T=a+Math.sin(g)*l,y=s+Math.cos(g)*(l+h*_),x=a+Math.sin(g)*(l+h*_),I=Math.cos(g+Math.PI/2),A=Math.sin(g+Math.PI/2),C=()=>{n.beginPath(),n.moveTo(d,T),n.quadraticCurveTo(d+I*c*_+(y-d)*.5,T+A*c*_+(x-T)*.5,y,x),n.quadraticCurveTo(d-I*c*_+(y-d)*.5,T-A*c*_+(x-T)*.5,d,T),n.closePath()};n.save(),C(),n.fillStyle=p,n.fill(),n.restore(),i&&ht(n,C,y,x,h*.6,"rgba(255,255,255,0.35)","rgba(0,0,0,0.14)"),ve(n,e*.012),n.strokeStyle=i?"rgba(90,50,20,0.35)":oe,C(),n.stroke()};for(let g=0;g<o;g++){const _=g/o*Math.PI*2+Math.PI/o;f(_,.82,i?It(i,-.12):u())}for(let g=0;g<o;g++){const _=g/o*Math.PI*2;f(_,1,i??u())}const m=()=>{n.beginPath(),n.arc(s,a,l*1.15,0,Math.PI*2)};n.save(),m(),n.fillStyle=i?"#f5b731":u(),n.fill(),n.restore(),i&&ht(n,m,s,a,l*1.15,"rgba(255,240,180,0.6)","rgba(150,90,10,0.4)"),ve(n,e*.014),n.strokeStyle=i?"#a9781a":oe,m(),n.stroke(),n.fillStyle=i?"#7c5510":oe;for(let g=0;g<12;g++){const _=g/12*Math.PI*2+r,p=l*(.3+.55*(g*7%5)/5);n.beginPath(),n.arc(s+Math.cos(_)*p,a+Math.sin(_)*p,e*.013,0,Math.PI*2),n.fill()}}function km(n,e,t,i){st(n,()=>{n.beginPath(),n.moveTo(e*.08,t),n.lineTo(e*.02,t*.6),n.lineTo(e*.32,t*.24),n.lineTo(e*.7,t*.32),n.lineTo(e*.96,t*.66),n.lineTo(e*.9,t),n.closePath()},i?Ee.stone:null),i&&(n.save(),n.beginPath(),n.moveTo(e*.7,t*.32),n.lineTo(e*.96,t*.66),n.lineTo(e*.9,t),n.lineTo(e*.4,t),n.closePath(),n.fillStyle=Ee.stoneDark,n.globalAlpha=.5,n.fill(),n.restore()),ve(n,e*.02),n.strokeStyle=i?Ee.stoneDark:oe,n.beginPath(),n.moveTo(e*.02,t*.6),n.lineTo(e*.32,t*.24),n.lineTo(e*.7,t*.32),n.lineTo(e*.96,t*.66),n.stroke(),n.lineWidth=e*.012,Nn(n,e*.32,t*.24,e*.4,t*.7,.6),Nn(n,e*.7,t*.32,e*.62,t*.72,.6)}function Hm(n,e,t,i){for(let s=0;s<9;s++){const a=s/8,o=e*(.34+a*.32)+(Math.random()-.5)*e*.04,l=a<.5?-1:1,h=Math.abs(a-.5)*2,c=o+l*e*(.08+h*.32)+(Math.random()-.5)*e*.06,u=t*(.08+Math.random()*.22),f=e*(.05-h*.015),m=()=>{n.beginPath(),n.moveTo(o-f,t),n.quadraticCurveTo((o+c)/2-l*e*.02,t*.5,c,u),n.quadraticCurveTo((o+c)/2+l*e*.02,t*.55,o+f,t),n.closePath()},g=i?s%2===0?Ee.grass:Ee.grassDark:Fi;n.save(),m(),n.fillStyle=g,n.fill(),n.restore(),ve(n,e*.008),n.strokeStyle=i?Ee.grassDark:oe,n.beginPath(),n.moveTo(o,t),n.quadraticCurveTo((o+c)/2,t*.5,c,u),n.stroke()}}function Gm(n,e,t,i){const r=e/2,s=()=>{n.beginPath(),n.moveTo(r-e*.15,t*.98),n.quadraticCurveTo(r-e*.2,t*.9,r-e*.13,t*.78),n.quadraticCurveTo(r-e*.1,t*.62,r-e*.12,t*.48),n.lineTo(r+e*.12,t*.48),n.quadraticCurveTo(r+e*.1,t*.62,r+e*.13,t*.78),n.quadraticCurveTo(r+e*.2,t*.9,r+e*.15,t*.98),n.quadraticCurveTo(r,t*1.02,r-e*.15,t*.98),n.closePath()};st(n,s,i?Ee.mushStem:null),ht(n,s,r-e*.04,t*.72,e*.2,"rgba(255,255,250,0.4)",i?"rgba(150,135,95,0.35)":"rgba(40,35,28,0.22)"),ve(n,e*.018),n.strokeStyle=i?"#c2b699":oe,s(),n.stroke(),n.beginPath(),n.moveTo(r-e*.14,t*.52),n.quadraticCurveTo(r,t*.58,r+e*.14,t*.52),n.stroke();const a=()=>{n.beginPath(),n.moveTo(r-e*.44,t*.5),n.bezierCurveTo(r-e*.46,t*.16,r+e*.46,t*.16,r+e*.44,t*.5),n.quadraticCurveTo(r,t*.6,r-e*.44,t*.5),n.closePath()};st(n,a,i?Ee.mushCap:null),ht(n,a,r-e*.1,t*.32,e*.44,i?"rgba(255,215,195,0.5)":"rgba(255,250,240,0.0)",i?"rgba(110,20,12,0.4)":"rgba(40,35,28,0.28)"),ve(n,e*.02),n.strokeStyle=i?It(Ee.mushCap,-.18):oe,a(),n.stroke(),n.fillStyle=i?"#fbf3e0":"rgba(33,29,24,0.85)";for(const[o,l,h]of[[.33,.34,.06],[.58,.27,.05],[.5,.42,.055],[.72,.4,.04],[.42,.24,.035]])n.beginPath(),n.ellipse(e*o,t*l,e*h,e*h*.85,0,0,Math.PI*2),n.fill()}function Vm(n,e,t,i,r=0){const s=e/2,a=()=>Rt(n)??"#f3eede",o=i??a(),l=i?"#e7efb0":a(),h=1+Math.sin(r*3)*.03,c=(p,d,T,y,x)=>{n.beginPath(),n.ellipse(p,d,T,y,0,0,Math.PI*2),n.fillStyle=x,n.fill()},u=(p,d,T,y,x)=>{ve(n,x),n.beginPath(),n.ellipse(p,d,T,y,0,0,Math.PI*2),n.stroke()};for(const p of[-1,1]){c(s+p*e*.33,t*.82,e*.2,t*.15,o),u(s+p*e*.33,t*.82,e*.2,t*.15,e*.012),ve(n,e*.014);for(let d=-1;d<=1;d++){const T=s+p*e*.33+d*e*.07;Nn(n,T,t*.9,T,t*.98,.5)}}const f=t*.62;if(c(s,f,e*.42,t*.34*h,o),ht(n,()=>{n.beginPath(),n.ellipse(s,f,e*.42,t*.34*h,0,0,Math.PI*2)},s-e*.1,f-t*.06,e*.42,"rgba(255,255,235,0.35)",i?"rgba(20,70,25,0.4)":"rgba(40,35,28,0.22)"),c(s,t*.72,e*.24,t*.2,l),u(s,f,e*.42,t*.34*h,e*.014),ve(n,e*.01),n.beginPath(),n.ellipse(s,t*.72,e*.24,t*.2,0,Math.PI*.15,Math.PI*.85),n.stroke(),i){n.fillStyle="rgba(20,80,30,0.35)";for(const[p,d]of[[.3,.55],[.68,.5],[.72,.68],[.28,.7]])n.beginPath(),n.ellipse(e*p,t*d,e*.035,t*.03,0,0,Math.PI*2),n.fill()}ve(n,e*.016),n.beginPath(),n.arc(s,t*.56,e*.24,.12*Math.PI,.88*Math.PI),n.stroke();for(const p of[-1,1])n.beginPath(),n.arc(s+p*e*.235,t*.575,e*.03,p<0?Math.PI*.7:Math.PI*.3,p<0?Math.PI*1.1:-Math.PI*.1,p<0),n.stroke();const m=t*.32,g=e*.17,_=r%3<.16;for(const p of[-1,1]){const d=s+p*e*.21;c(d,m,g,g,o),ht(n,()=>{n.beginPath(),n.ellipse(d,m,g,g,0,0,Math.PI*2)},d-g*.3,m-g*.3,g,"rgba(255,255,235,0.4)",i?"rgba(20,70,25,0.35)":"rgba(40,35,28,0.2)"),u(d,m,g,g,e*.012),_?(ve(n,e*.016),n.beginPath(),n.moveTo(d-g*.6,m),n.lineTo(d+g*.6,m),n.stroke()):(c(d,m,g*.6,g*.6,"#f7f3e6"),u(d,m,g*.6,g*.6,e*.008),n.fillStyle=oe,n.beginPath(),n.arc(d,m+g*.06,g*.24,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.9)",n.beginPath(),n.arc(d-g*.08,m-g*.02,g*.08,0,Math.PI*2),n.fill())}n.fillStyle=oe;for(const p of[-1,1])n.beginPath(),n.arc(s+p*e*.05,t*.46,e*.012,0,Math.PI*2),n.fill()}function Wm(n,e,t,i){const r=e/2,s=t*.58,a=Math.min(e,t)*.46,o=.35,l=()=>{n.beginPath(),n.arc(r,s,a,o,Math.PI*2-o),n.lineTo(r,s),n.closePath()};st(n,l,i?Ee.leaf:null),ht(n,l,r-a*.2,s-a*.2,a,"rgba(255,255,235,0.3)",i?"rgba(20,70,25,0.35)":"rgba(40,35,28,0.2)"),ve(n,e*.01),n.strokeStyle=i?Ee.leafDark:oe,n.beginPath(),n.arc(r,s,a,o,Math.PI*2-o),n.stroke(),n.lineWidth=e*.005,n.strokeStyle=i?"rgba(30,80,25,0.5)":"rgba(33,29,24,0.5)";for(let h=0;h<6;h++){const c=-Math.PI*.4+h/5*Math.PI*1.6;Nn(n,r,s,r+Math.cos(c)*a*.88,s+Math.sin(c)*a*.88,.6)}}function Xm(n,e,t,i){const r=e/2,s=()=>{n.beginPath(),n.moveTo(r-e*.06,t),n.quadraticCurveTo(r-e*.02,t*.5,r-e*.05,t*.1),n.lineTo(r+e*.05,t*.1),n.quadraticCurveTo(r+e*.02,t*.5,r+e*.06,t),n.closePath()};st(n,s,i?Ee.grassDark:null),ve(n,e*.012),n.strokeStyle=i?It(Ee.grassDark,-.1):oe,s(),n.stroke();for(const[o,l]of[[-1,.55],[1,.68]]){const h=()=>{n.beginPath(),n.moveTo(r,t*l),n.quadraticCurveTo(r+o*e*.5,t*(l-.2),r+o*e*.62,t*(l-.45)),n.quadraticCurveTo(r+o*e*.36,t*(l-.12),r,t*(l+.02)),n.closePath()};st(n,h,i?Ee.grass:null),ve(n,e*.01),n.strokeStyle=i?Ee.grassDark:oe,h(),n.stroke()}const a=()=>{n.beginPath(),n.ellipse(r,t*.2,e*.13,t*.17,0,0,Math.PI*2)};st(n,a,i?"#8a5a2b":null),ht(n,a,r-e*.04,t*.14,e*.15,"rgba(255,230,190,0.35)",i?"rgba(60,35,12,0.4)":"rgba(40,35,28,0.22)"),ve(n,e*.014),n.strokeStyle=i?"#5e3d1c":oe,a(),n.stroke(),n.beginPath(),n.moveTo(r,t*.03),n.lineTo(r,t*.1),n.stroke()}function qm(n,e,t,i){const r=e/2,s=t/2,a=()=>{n.beginPath(),n.ellipse(r,s,e*.46,t*.44,0,0,Math.PI*2)};if(n.save(),a(),i){const o=n.createRadialGradient(r-e*.1,s-t*.1,e*.05,r,s,e*.5);o.addColorStop(0,"#8fd0e6"),o.addColorStop(1,"#3f8fc0"),n.fillStyle=o}else n.fillStyle=Fi;if(n.fill(),!i){const o=Rt(n);o&&(n.fillStyle=o,n.fill())}n.restore(),ve(n,e*.008),n.strokeStyle=i?"#2f7ba8":oe,a(),n.stroke(),n.lineWidth=e*.004,n.strokeStyle=i?"rgba(255,255,255,0.5)":"rgba(33, 29, 24, 0.4)";for(let o=1;o<=4;o++){const l=o/5;n.beginPath(),n.ellipse(r,s,e*.46*l,t*.44*l,0,.15*Math.PI,.85*Math.PI),n.stroke()}}function Ym(n,e,t,i,r=0){const s=e/2,a=t*.5+Math.sin(r*2.5)*t*.06,o=.5+.5*Math.abs(Math.sin(r*7)),l=i??Rt(n)??"#f3eede",h=(c,u,f,m,g,_)=>{if(n.save(),n.translate(c,u),n.rotate(g),n.beginPath(),n.ellipse(0,0,f,m,0,0,Math.PI*2),n.fillStyle=l,n.fill(),i){const p=n.createLinearGradient(0,-m,0,m);p.addColorStop(0,"rgba(255,255,255,0.35)"),p.addColorStop(1,"rgba(0,0,0,0.18)"),n.fillStyle=p,n.fill(),n.strokeStyle="rgba(33,29,24,0.5)",n.lineWidth=e*.02,n.beginPath(),n.ellipse(0,0,f*.72,m*.72,0,0,Math.PI*2),n.stroke()}ve(n,e*.014),n.strokeStyle=oe,n.beginPath(),n.ellipse(0,0,f,m,0,0,Math.PI*2),n.stroke(),_&&(n.fillStyle=i?"rgba(255,250,235,0.85)":"rgba(33, 29, 24, 0.4)",n.beginPath(),n.ellipse(0,m*.25,f*.32,m*.24,0,0,Math.PI*2),n.fill(),n.fillStyle=i?"rgba(33,29,24,0.5)":"rgba(33, 29, 24, 0.6)",n.beginPath(),n.ellipse(0,m*.25,f*.14,m*.11,0,0,Math.PI*2),n.fill()),n.restore()};for(const c of[-1,1])h(s+c*(e*.04+e*.24*o),a-t*.08,e*.22*o,t*.2,c*.35,!0),h(s+c*(e*.03+e*.18*o),a+t*.16,e*.16*o,t*.15,c*-.3,!1);n.fillStyle=oe,n.beginPath(),n.ellipse(s,a,e*.035,t*.26,0,0,Math.PI*2),n.fill(),ve(n,e*.01);for(const c of[-1,1])n.beginPath(),n.moveTo(s,a-t*.24),n.quadraticCurveTo(s+c*e*.1,a-t*.36,s+c*e*.14,a-t*.34),n.stroke(),n.fillStyle=oe,n.beginPath(),n.arc(s+c*e*.14,a-t*.34,e*.02,0,Math.PI*2),n.fill()}function Km(n,e,t,i){const r=e/2,s=t*.6,a=Math.min(e,t)*.36,o=i??Rt(n)??"#f3eede",l=()=>{n.beginPath(),n.moveTo(r,s-a*.75),n.bezierCurveTo(r-a*.6,s-a*1.15,r-a*1.15,s-a*.35,r-a*1.02,s+a*.2),n.bezierCurveTo(r-a*.95,s+a*.9,r-a*.4,s+a*1.15,r,s+a*.95),n.bezierCurveTo(r+a*.4,s+a*1.15,r+a*.95,s+a*.9,r+a*1.02,s+a*.2),n.bezierCurveTo(r+a*1.15,s-a*.35,r+a*.6,s-a*1.15,r,s-a*.75),n.closePath()};n.save(),l(),n.fillStyle=o,n.fill(),n.restore(),ht(n,l,r-a*.35,s-a*.35,a*1.1,"rgba(255,255,240,0.45)",i?"rgba(110,10,15,0.4)":"rgba(40,35,28,0.2)"),ve(n,e*.018),n.strokeStyle=i?"#8f2e28":oe,l(),n.stroke(),n.lineWidth=e*.012,n.beginPath(),n.arc(r,s-a*.7,a*.24,.2*Math.PI,.8*Math.PI),n.stroke(),n.strokeStyle=i?Ee.barkDark:oe,n.lineWidth=e*.02,n.beginPath(),n.moveTo(r,s-a*.8),n.quadraticCurveTo(r+e*.03,s-a*1.15,r+e*.01,s-a*1.32),n.stroke();const h=()=>{n.beginPath(),n.ellipse(r+e*.11,s-a*1.08,e*.1,t*.05,-.5,0,Math.PI*2)};n.save(),h(),n.fillStyle=i?Ee.leaf:Rt(n)??"#f3eede",n.fill(),n.restore(),ve(n,e*.012),n.strokeStyle=i?Ee.leafDark:oe,h(),n.stroke(),i&&(n.strokeStyle="rgba(255, 255, 255, 0.6)",n.lineWidth=e*.03,n.beginPath(),n.arc(r-a*.38,s-a*.2,a*.42,-.95*Math.PI,-.4*Math.PI),n.stroke())}function $m(n,e,t,i,r=0){const s=e/2,a=()=>Rt(n)??"#f3eede",o=i??a(),l=i?It(i,-.16):"rgba(40,35,28,0.25)",h=i?"#f7f3e6":a(),c=(T,y)=>{y(),n.fillStyle=T,n.fill()},u=(T,y)=>{ve(n,T),n.strokeStyle=i?It(i,-.28):oe,y(),n.stroke()},f=()=>{n.beginPath(),n.moveTo(s+e*.14,t*.68),n.bezierCurveTo(s+e*.5,t*.5,s+e*.56,t*.9,s+e*.34,t*.96),n.bezierCurveTo(s+e*.2,t*.99,s+e*.1,t*.88,s+e*.14,t*.68),n.closePath()};c(o,f),ht(n,f,s+e*.28,t*.62,e*.28,"rgba(255,240,215,0.35)",i?"rgba(120,55,10,0.4)":"rgba(40,35,28,0.22)"),c(h,()=>{n.beginPath(),n.ellipse(s+e*.4,t*.9,e*.1,t*.09,-.7,0,Math.PI*2)}),u(e*.014,f);const m=()=>{n.beginPath(),n.ellipse(s-e*.02,t*.76,e*.24,t*.2,0,0,Math.PI*2)};c(o,m),ht(n,m,s-e*.1,t*.68,e*.24,"rgba(255,240,215,0.35)",i?"rgba(120,55,10,0.38)":"rgba(40,35,28,0.2)"),u(e*.014,m);for(const T of[-1,1]){const y=()=>{n.beginPath(),n.moveTo(s+T*e*.13,t*.82),n.lineTo(s+T*e*.16,t*.97),n.lineTo(s+T*e*.05,t*.97),n.lineTo(s+T*e*.03,t*.84),n.closePath()};c(o,y),u(e*.012,y),n.fillStyle=l,n.beginPath(),n.ellipse(s+T*e*.1,t*.965,e*.06,t*.02,0,0,Math.PI*2),n.fill()}c(h,()=>{n.beginPath(),n.moveTo(s-e*.02,t*.62),n.quadraticCurveTo(s+e*.12,t*.78,s-e*.02,t*.92),n.quadraticCurveTo(s-e*.16,t*.78,s-e*.02,t*.62),n.closePath()});const g=t*.42,_=e*.25;for(const T of[-1,1]){const y=()=>{n.beginPath(),n.moveTo(s+T*_*.7,g-_*.35),n.lineTo(s+T*_*1.15,g-_*1.45),n.lineTo(s+T*_*.1,g-_*.75),n.closePath()};c(o,y),u(e*.012,y),n.fillStyle=l,n.beginPath(),n.moveTo(s+T*_*.62,g-_*.45),n.lineTo(s+T*_*.92,g-_*1.2),n.lineTo(s+T*_*.28,g-_*.72),n.closePath(),n.fill()}const p=()=>{n.beginPath(),n.moveTo(s-_,g-_*.35),n.lineTo(s-_*1.08,g+_*.35),n.lineTo(s-_*.7,g+_*.55),n.quadraticCurveTo(s-_*.4,g+_*1.05,s,g+_*1.2),n.quadraticCurveTo(s+_*.4,g+_*1.05,s+_*.7,g+_*.55),n.lineTo(s+_*1.08,g+_*.35),n.lineTo(s+_,g-_*.35),n.quadraticCurveTo(s,g-_*.8,s-_,g-_*.35),n.closePath()};c(o,p),ht(n,p,s-_*.3,g-_*.3,_*1.1,"rgba(255,240,215,0.4)",i?"rgba(120,55,10,0.3)":"rgba(40,35,28,0.18)"),u(e*.014,p),c(h,()=>{n.beginPath(),n.moveTo(s-_*.5,g+_*.1),n.quadraticCurveTo(s-_*.2,g+_*.35,s,g+_*1.15),n.quadraticCurveTo(s+_*.2,g+_*.35,s+_*.5,g+_*.1),n.quadraticCurveTo(s,g+_*.4,s-_*.5,g+_*.1),n.closePath()});const d=r%3.2<.14;for(const T of[-1,1]){const y=s+T*_*.44,x=g;d?(ve(n,e*.014),n.strokeStyle=oe,n.beginPath(),n.moveTo(y-e*.035,x),n.quadraticCurveTo(y,x+e*.02,y+e*.035,x),n.stroke()):(n.beginPath(),n.ellipse(y,x,e*.05,e*.035,T*.3,0,Math.PI*2),n.fillStyle=i?"#e8a02a":"#f7f3e6",n.fill(),ve(n,e*.01),n.strokeStyle=oe,n.stroke(),n.fillStyle=oe,n.beginPath(),n.arc(y,x,e*.022,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.9)",n.beginPath(),n.arc(y-e*.008,x-e*.008,e*.008,0,Math.PI*2),n.fill())}n.fillStyle=oe,n.beginPath(),n.moveTo(s-e*.04,g+_*.95),n.quadraticCurveTo(s,g+_*1.15,s+e*.04,g+_*.95),n.quadraticCurveTo(s,g+_*1.02,s-e*.04,g+_*.95),n.fill(),ve(n,e*.01),n.strokeStyle=oe,n.beginPath(),n.moveTo(s,g+_*1.1),n.lineTo(s,g+_*1.25),n.moveTo(s,g+_*1.25),n.quadraticCurveTo(s-e*.06,g+_*1.35,s-e*.09,g+_*1.22),n.moveTo(s,g+_*1.25),n.quadraticCurveTo(s+e*.06,g+_*1.35,s+e*.09,g+_*1.22),n.stroke()}function Zm(n,e,t,i,r=0){const s=e/2,a=Math.sin(r*2.2)*t*.02,o=t*.56+a,l=Math.min(e,t)*.3,h=()=>Rt(n)??"#f3eede",c=i??h(),u=i?"#f6efdc":h(),f=()=>{n.beginPath(),n.moveTo(s+l*.6,o+l*.1),n.lineTo(s+l*1.7,o-l*.1),n.lineTo(s+l*1.7,o+l*.5),n.closePath()};st(n,f,i?It(i,-.1):null),ve(n,e*.012),n.strokeStyle=i?It(i,-.3):oe,f(),n.stroke();const m=()=>{n.beginPath(),n.ellipse(s,o,l*.95,l,0,0,Math.PI*2)};n.save(),m(),n.fillStyle=c,n.fill(),n.restore(),ht(n,m,s-l*.3,o-l*.35,l,"rgba(255,255,240,0.4)",i?"rgba(20,40,80,0.35)":"rgba(40,35,28,0.2)"),n.save(),n.beginPath(),n.ellipse(s-l*.2,o+l*.25,l*.6,l*.62,0,0,Math.PI*2),n.fillStyle=u,n.fill(),n.restore(),i&&(n.save(),n.beginPath(),n.ellipse(s-l*.28,o-l*.05,l*.4,l*.45,0,0,Math.PI*2),n.fillStyle="#e2703a",n.globalAlpha=.85,n.fill(),n.restore()),ve(n,e*.014),n.strokeStyle=i?It(i,-.3):oe,m(),n.stroke();const g=()=>{n.beginPath(),n.moveTo(s+l*.1,o-l*.2),n.quadraticCurveTo(s+l*.9,o-l*.1,s+l*.7,o+l*.55),n.quadraticCurveTo(s+l*.2,o+l*.4,s+l*.1,o-l*.2),n.closePath()};st(n,g,i?It(i,-.12):null),ve(n,e*.012),n.strokeStyle=i?It(i,-.3):oe,g(),n.stroke();for(let x=0;x<3;x++)n.beginPath(),n.moveTo(s+l*(.25+x*.15),o+l*.1),n.lineTo(s+l*(.5+x*.14),o+l*.42),n.stroke();const _=l*.62,p=s-l*.55,d=o-l*.7,T=()=>{n.beginPath(),n.arc(p,d,_,0,Math.PI*2)};n.save(),T(),n.fillStyle=c,n.fill(),n.restore(),ht(n,T,p-_*.3,d-_*.3,_,"rgba(255,255,240,0.45)",i?"rgba(20,40,80,0.3)":"rgba(40,35,28,0.18)"),ve(n,e*.014),n.strokeStyle=i?It(i,-.3):oe,T(),n.stroke(),n.beginPath(),n.moveTo(p-_*.9,d+_*.05),n.lineTo(p-_*1.5,d+_*.22),n.lineTo(p-_*.85,d+_*.42),n.closePath(),n.fillStyle=i?"#f0a92e":h(),n.fill(),ve(n,e*.01),n.strokeStyle=oe,n.stroke(),r%3<.14?(ve(n,e*.012),n.beginPath(),n.moveTo(p-_*.35,d-_*.05),n.lineTo(p-_*.05,d-_*.05),n.stroke()):(n.fillStyle=oe,n.beginPath(),n.arc(p-_*.2,d-_*.08,_*.16,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.9)",n.beginPath(),n.arc(p-_*.25,d-_*.13,_*.05,0,Math.PI*2),n.fill()),ve(n,e*.012),n.strokeStyle=oe;for(const x of[-1,1])n.beginPath(),n.moveTo(s+x*l*.15,o+l*.95),n.lineTo(s+x*l*.15,o+l*1.25),n.moveTo(s+x*l*.15,o+l*1.25),n.lineTo(s+x*l*.15-e*.03,o+l*1.32),n.moveTo(s+x*l*.15,o+l*1.25),n.lineTo(s+x*l*.15+e*.03,o+l*1.32),n.stroke()}function jm(n,e,t,i,r=0){const s=e/2,a=()=>Rt(n)??"#f3eede",o=i??a(),l=Math.sin(r*1.6)*.12;for(const g of[-1,1]){const _=s+g*e*.1,p=()=>{n.save(),n.translate(_,t*.34),n.rotate(g*(.12+l)),n.beginPath(),n.ellipse(0,-t*.16,e*.07,t*.2,0,0,Math.PI*2),n.restore()};n.save(),p(),n.fillStyle=o,n.fill(),n.restore(),n.save(),n.translate(_,t*.34),n.rotate(g*(.12+l)),n.beginPath(),n.ellipse(0,-t*.16,e*.035,t*.13,0,0,Math.PI*2),n.fillStyle=i?"#e7a6a6":Rt(n)??"#f3eede",n.fill(),n.restore(),ve(n,e*.012),n.strokeStyle=i?It(i,-.25):oe,p(),n.stroke()}const h=()=>{n.beginPath(),n.ellipse(s,t*.72,e*.24,t*.24,0,0,Math.PI*2)};n.save(),h(),n.fillStyle=o,n.fill(),n.restore(),ht(n,h,s-e*.08,t*.62,e*.26,"rgba(255,255,245,0.4)",i?"rgba(90,70,45,0.32)":"rgba(40,35,28,0.2)"),ve(n,e*.014),n.strokeStyle=i?It(i,-.25):oe,h(),n.stroke(),n.save(),n.beginPath(),n.ellipse(s,t*.78,e*.13,t*.15,0,0,Math.PI*2),n.fillStyle=i?"#f4ecd9":a(),n.fill(),n.restore();for(const g of[-1,1])n.beginPath(),n.ellipse(s+g*e*.09,t*.9,e*.06,t*.05,0,0,Math.PI*2),n.fillStyle=i?"#f4ecd9":a(),n.fill(),ve(n,e*.01),n.strokeStyle=i?It(i,-.25):oe,n.stroke();const c=e*.17,u=t*.44,f=()=>{n.beginPath(),n.ellipse(s,u,c,c*1.05,0,0,Math.PI*2)};n.save(),f(),n.fillStyle=o,n.fill(),n.restore(),ht(n,f,s-c*.3,u-c*.3,c,"rgba(255,255,245,0.45)",i?"rgba(90,70,45,0.28)":"rgba(40,35,28,0.18)"),ve(n,e*.014),n.strokeStyle=i?It(i,-.25):oe,f(),n.stroke(),n.save(),n.fillStyle="rgba(230,150,140,0.3)";for(const g of[-1,1])n.beginPath(),n.ellipse(s+g*c*.55,u+c*.35,c*.22,c*.16,0,0,Math.PI*2),n.fill();n.restore();const m=r%3.4<.14;n.fillStyle=oe;for(const g of[-1,1]){const _=s+g*c*.45,p=u-c*.1;m?(ve(n,e*.012),n.strokeStyle=oe,n.beginPath(),n.moveTo(_-e*.03,p),n.quadraticCurveTo(_,p+e*.015,_+e*.03,p),n.stroke()):(n.beginPath(),n.arc(_,p,c*.16,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.9)",n.beginPath(),n.arc(_-c*.05,p-c*.05,c*.05,0,Math.PI*2),n.fill(),n.fillStyle=oe)}n.fillStyle=i?"#d98a8a":oe,n.beginPath(),n.moveTo(s-c*.1,u+c*.35),n.lineTo(s+c*.1,u+c*.35),n.lineTo(s,u+c*.5),n.closePath(),n.fill(),ve(n,e*.008),n.strokeStyle=oe,n.beginPath(),n.moveTo(s,u+c*.5),n.lineTo(s,u+c*.68),n.stroke();for(const g of[-1,1])for(const _ of[-.04,.03])n.beginPath(),n.moveTo(s+g*c*.15,u+c*.5),n.quadraticCurveTo(s+g*c*.9,u+c*(.5+_)-e*.02,s+g*c*1.5,u+c*(.5+_*3)),n.stroke()}function Jm(n,e,t,i,r=0){const s=e/2,a=t/2,o=Math.min(e,t)*.28;n.strokeStyle=i?"#f3a712":oe,n.lineWidth=e*.022,n.lineCap="round";const l=12;for(let c=0;c<l;c++){const u=r*.4+c/l*Math.PI*2,f=1+Math.sin(r*2+c)*.06;n.beginPath(),n.moveTo(s+Math.cos(u)*o*1.28,a+Math.sin(u)*o*1.28),n.lineTo(s+Math.cos(u)*o*1.75*f,a+Math.sin(u)*o*1.75*f),n.stroke()}const h=()=>{n.beginPath(),n.arc(s,a,o,0,Math.PI*2)};if(n.save(),h(),i){const c=n.createRadialGradient(s-o*.3,a-o*.3,o*.1,s,a,o);c.addColorStop(0,"#ffe08a"),c.addColorStop(1,"#f3a712"),n.fillStyle=c}else n.fillStyle=Rt(n)??"#f3eede";n.fill(),n.restore(),ve(n,e*.016),n.strokeStyle=i?"#d68f0a":oe,h(),n.stroke(),n.fillStyle=oe,n.beginPath(),n.arc(s-o*.35,a-o*.1,o*.09,0,Math.PI*2),n.arc(s+o*.35,a-o*.1,o*.09,0,Math.PI*2),n.fill(),n.save(),n.fillStyle="rgba(230,120,90,0.3)";for(const c of[-1,1])n.beginPath(),n.arc(s+c*o*.5,a+o*.12,o*.13,0,Math.PI*2),n.fill();n.restore(),ve(n,e*.014),n.strokeStyle=oe,n.beginPath(),n.arc(s,a+o*.12,o*.45,.15*Math.PI,.85*Math.PI),n.stroke()}function Qm(n,e,t,i){const r=i??Rt(n)??"#f3eede",s=[[.26,.56,.18],[.42,.44,.24],[.6,.42,.22],[.76,.56,.18],[.5,.62,.26]];for(const[a,o,l]of s)n.beginPath(),n.arc(e*a,t*o,Math.min(e,t)*l,0,Math.PI*2),n.fillStyle=r,n.fill();ht(n,()=>{n.beginPath(),n.ellipse(e*.5,t*.54,e*.4,t*.28,0,0,Math.PI*2)},e*.42,t*.42,e*.4,"rgba(255,255,255,0.5)",i?"rgba(120,140,170,0.3)":"rgba(40,35,28,0.16)"),ve(n,e*.01),n.strokeStyle=i?"rgba(120,140,170,0.6)":oe;for(const[a,o,l]of s.slice(0,4))n.beginPath(),n.arc(e*a,t*o,Math.min(e,t)*l,Math.PI,2*Math.PI),n.stroke();n.beginPath(),n.moveTo(e*.14,t*.7),n.quadraticCurveTo(e*.5,t*.78,e*.86,t*.7),n.stroke()}function e0(n,e,t){const i=e/2,r=t*.98,s=Math.min(e*.48,t*.96),a=s*.085;for(let o=0;o<Zi.length;o++)n.strokeStyle=Zi[o],n.lineWidth=a*.95,n.beginPath(),n.arc(i,r,s-o*a-a/2,Math.PI,2*Math.PI),n.stroke()}const $o=.9,t0="#6f9c4a";let Os=null;function n0(){if(!Os){const t=document.createElement("canvas");t.width=t.height=64;const i=t.getContext("2d"),r=64/2,s=i.createRadialGradient(r,r,2,r,r,r);s.addColorStop(0,"rgba(255,240,170,0.9)"),s.addColorStop(1,"rgba(255,220,120,0)"),i.fillStyle=s,i.beginPath(),i.arc(r,r,r,0,Math.PI*2),i.fill(),i.beginPath();for(let a=0;a<10;a++){const o=-Math.PI/2+a*Math.PI/5,l=a%2===0?r*.82:r*.34,h=r+Math.cos(o)*l,c=r+Math.sin(o)*l;a===0?i.moveTo(h,c):i.lineTo(h,c)}i.closePath(),i.fillStyle="#ffd23f",i.fill(),i.lineWidth=2,i.strokeStyle="#e8a02a",i.stroke(),Os=t}const n=new rr(Os);return n.colorSpace=Ct,n}class Mn{root=new Qn;ctx;rig;onComplete;popups=[];elapsed=0;completed=!1;placedCount=0;girl;celebrating=!1;celebrateElapsed=0;girlBaseY=0;stars=[];onUpdate(e){}enter(e){this.ctx=e,e.scene.add(this.root),this.setup()}addPopup(e,t){e.root.position.z-=this.placedCount*.0011,this.placedCount+=1,this.guardCorridor(e),this.root.add(e.root),this.popups.push({popup:e,triggerTime:t,triggered:!1})}guardCorridor(e){const t=e.root.position;if(!(t.z<=1&&t.z>=-(this.rig.length+1))||Math.abs(t.x)-e.footprintRadius>=$o)return;const a=(t.x>=0?1:-1)*($o+e.footprintRadius);console.warn(`[StoryScene] Pop-up at x=${t.x.toFixed(2)}, z=${t.z.toFixed(2)} overlaps the camera corridor; nudged to x=${a.toFixed(2)}.`),t.x=a}complete(){this.completed||(this.completed=!0,this.celebrate(),this.colorizeWorld(),this.onComplete?.())}celebrate(){if(Pm(),!this.girl)return;this.celebrating=!0,this.celebrateElapsed=0,this.girlBaseY=this.girl.root.position.y;const e=this.girl.root.position.x,t=this.girl.root.position.z;for(let i=0;i<14;i++){const r=new Cl({map:n0(),transparent:!0,depthWrite:!1,depthTest:!1}),s=new _m(r);s.renderOrder=6;const a=.22+Math.random()*.28;s.scale.setScalar(a),s.position.set(e+(Math.random()-.5)*1.4,1.7+Math.random()*.5,t+(Math.random()-.5)*.4),this.root.add(s),this.stars.push({sprite:s,vx:(Math.random()-.5)*1.4,vy:1.6+Math.random()*1.6,life:0,ttl:1.1+Math.random()*.7,spin:(Math.random()-.5)*7,baseScale:a})}}updateCelebration(e){if(this.celebrating){if(this.celebrateElapsed+=e,this.girl){const t=this.celebrateElapsed,i=Math.abs(Math.sin(t*Math.PI*2.2)),r=Math.max(0,1-t/2.4);this.girl.root.position.y=this.girlBaseY+i*.4*r}for(const t of this.stars){t.life+=e,t.sprite.position.x+=t.vx*e,t.sprite.position.y+=t.vy*e,t.vy-=3.2*e,t.sprite.material.rotation+=t.spin*e;const i=Math.min(1,t.life/t.ttl);t.sprite.material.opacity=1-i,t.sprite.scale.setScalar(t.baseScale*(1+Math.sin(i*Math.PI)*.4))}if(this.celebrateElapsed>2.6){for(const t of this.stars)this.root.remove(t.sprite),t.sprite.material.map?.dispose(),t.sprite.material.dispose();this.stars.length=0,this.girl&&(this.girl.root.position.y=this.girlBaseY),this.celebrating=!1}}}colorizeWorld(){const e=this.ctx.camera.position.z;let t=1e-4;for(const{popup:i}of this.popups)t=Math.max(t,Math.abs(i.root.position.z-e));for(const{popup:i}of this.popups){if(i.isColored)continue;const s=Math.abs(i.root.position.z-e)/t*1.4;i.colorizeFade(i.naturalColor??t0,.9,s)}}update(e){this.elapsed+=e,this.rig.update(e);for(const t of this.popups)!t.triggered&&this.elapsed>=t.triggerTime&&(t.triggered=!0,t.popup.open(),this.ctx.sound.pop()),t.popup.update(e);this.updateCelebration(e),this.onUpdate(e)}exit(){this.ctx.interaction.clear(),this.root.removeFromParent(),this.disposeGroup(this.root)}disposeGroup(e){e.traverse(t=>{if(t instanceof We){t.geometry.dispose();const i=t.material,r=Array.isArray(i)?i:[i];for(const s of r)s.map?.dispose(),s.dispose()}})}}const i0=n=>1+2.70158*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2),Oa=n=>1-Math.pow(1-n,3),qr=(n,e,t)=>Math.min(t,Math.max(e,n));class Sn{constructor(e,t){this.camera=e,this.speed=t.speed,this.length=t.length,this.holdTime=t.holdTime??0,this.eyeHeight=t.eyeHeight??1.5,this.lookAhead=t.lookAhead??6,this.reset()}travelled=0;paused=!1;time=0;speed;length;holdTime;eyeHeight;lookAhead;reset(){this.travelled=0,this.time=0,this.paused=!1,this.apply()}pause(){this.paused=!0}resume(){this.paused=!1}get distance(){return this.travelled}get progress(){return qr(this.travelled/this.length,0,1)}get isTravelling(){return this.time>=this.holdTime}get atEnd(){return this.travelled>=this.length}update(e){this.time+=e,this.isTravelling&&!this.paused&&this.travelled<this.length&&(this.travelled=Math.min(this.length,this.travelled+this.speed*e)),this.apply()}apply(){const e=-this.travelled,t=Math.sin(this.time*1.6)*.035,i=Math.sin(this.time*.7)*.06;this.camera.position.set(i,this.eyeHeight+t,e),this.camera.lookAt(i*.5,this.eyeHeight-.35,e-this.lookAhead)}}class r0{root=new Qn;footprintRadius=.5;naturalColor=null;idleAmplitude=.02;idleFrequency=.8;idlePhase=Math.random()*Math.PI*2;hinges=[];opening=!1;opened=!1;colored=!1;currentColor=null;elapsed=0;clock=0;sinceOpen=0;pulse=0;animAccum=0;highlighted=!1;highlightClock=0;fading=!1;fadeElapsed=0;fadeDelay=0;fadeDuration=.8;mix=1;constructor(){this.root.visible=!1}setIdle(e,t){return this.idleAmplitude=e,this.idleFrequency=t,this}addHinge(e){const t=new Qn;t.position.copy(e.position),t.rotation.y=e.yaw??0;const i=e.axis??"x",r=e.from??-Math.PI/2,s=e.to??0;return t.rotation[i]=r,e.mesh.position.copy(e.meshOffset??new U(0,0,0)),t.add(e.mesh),this.root.add(t),this.hinges.push({pivot:t,mesh:e.mesh,axis:i,from:r,to:s,delay:e.delay??0,duration:e.duration??1,easing:e.easing??i0,animated:e.animated??!1}),this}open(){this.opened||this.opening||(this.opening=!0,this.root.visible=!0)}snapOpen(){this.opening=!1,this.opened=!0,this.root.visible=!0;for(const e of this.hinges)e.pivot.rotation[e.axis]=e.to}get isOpen(){return this.opened}get isColored(){return this.colored}colorize(e){if(!this.colored){this.colored=!0,this.highlighted=!1,this.currentColor=e;for(const t of this.hinges){t.mesh.scale.setScalar(1);const i=t.mesh.userData.render;i?.(e,this.clock)}this.pulse=1e-4}}colorizeFade(e,t=.8,i=0){this.colored||this.fading||(this.currentColor=e,this.fading=!0,this.fadeElapsed=0,this.fadeDelay=i,this.fadeDuration=Math.max(.001,t),this.mix=0)}setHighlighted(e){if(this.highlighted=e,!e)for(const t of this.hinges)t.mesh.scale.setScalar(1)}enlargeHitArea(){for(const e of this.hinges){const t=e.mesh.geometry,i=t.parameters?.width??1,r=t.parameters?.height??1,s=Math.max(i,r)*.95+.7,a=new We(new Fa(s,12,8),new at({transparent:!0,opacity:0,depthWrite:!1,depthTest:!1}));a.renderOrder=-1,e.mesh.add(a)}}update(e){if(this.clock+=e,this.opening){this.elapsed+=e;let t=!0;for(const i of this.hinges){const r=qr((this.elapsed-i.delay)/i.duration,0,1);i.pivot.rotation[i.axis]=th.lerp(i.from,i.to,i.easing(r)),r<1&&(t=!1)}t&&(this.opening=!1,this.opened=!0)}if(this.opening||this.opened){this.sinceOpen+=e;const t=qr(this.sinceOpen/.8,0,1);this.root.rotation.z=Math.sin(this.clock*this.idleFrequency+this.idlePhase)*this.idleAmplitude*t}if(this.pulse>0){this.pulse+=e;const t=this.pulse/.35;t>=1?(this.pulse=0,this.root.scale.setScalar(1)):this.root.scale.setScalar(1+Math.sin(t*Math.PI)*.14)}if(this.highlighted&&!this.colored&&this.opened){this.highlightClock+=e;const t=1+Math.sin(this.highlightClock*2.8)*.1;for(const i of this.hinges)i.mesh.scale.setScalar(t)}if(this.fading){this.fadeElapsed+=e;const t=qr((this.fadeElapsed-this.fadeDelay)/this.fadeDuration,0,1);if(this.mix=t,this.fadeElapsed>=this.fadeDelay&&this.currentColor)for(const i of this.hinges){const r=i.mesh.userData.render;r?.(this.currentColor,this.clock,this.mix)}t>=1&&(this.fading=!1,this.colored=!0,this.pulse=1e-4)}if(this.opened&&(this.animAccum+=e,this.animAccum>=.04)){this.animAccum=0;for(const t of this.hinges){if(!t.animated)continue;const i=t.mesh.userData.render;i?.(this.currentColor,this.clock,this.fading?this.mix:1)}}}}function wl(n){const e=n.pixelsPerUnit??256,t=Math.max(2,Math.round(n.width*e)),i=Math.max(2,Math.round(n.height*e)),r=document.createElement("canvas");r.width=t,r.height=i;const s=r.getContext("2d",{willReadFrequently:!0});s.lineJoin="round",s.lineCap="round",n.draw(s,t,i);const a=new rr(r);a.colorSpace=Ct,a.anisotropy=4,a.needsUpdate=!0;const o=new at({map:a,transparent:!0,alphaTest:n.alphaTest??.4,side:n.doubleSided?et:pn}),l=new it(n.width,n.height),h=new We(l,o);return h.renderOrder=1,h.userData.render=(c=null,u=0,f=1)=>{s.clearRect(0,0,t,i),c&&f<1?(n.draw(s,t,i,null,u),s.save(),s.globalAlpha=Math.max(0,Math.min(1,f)),n.draw(s,t,i,c,u),s.restore()):n.draw(s,t,i,c,u),a.needsUpdate=!0},h}let Xi=null;function s0(){if(Xi)return Xi;const n=128,e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d"),i=t.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);return i.addColorStop(0,"rgba(38, 32, 24, 0.5)"),i.addColorStop(.45,"rgba(38, 32, 24, 0.24)"),i.addColorStop(.75,"rgba(38, 32, 24, 0.08)"),i.addColorStop(1,"rgba(38, 32, 24, 0)"),t.fillStyle=i,t.fillRect(0,0,n,n),Xi=new rr(e),Xi.colorSpace=Ct,Xi}function V(n,e={}){const t=e.scale??1,i=new r0;let r=0;for(const s of n.parts){r=Math.max(r,s.width/2);const a=wl({draw:s.draw,width:s.width*t,height:s.height*t,pixelsPerUnit:s.pixelsPerUnit,doubleSided:n.doubleSided??!0}),o=s.position??[0,0,0],l=s.meshOffset??[0,s.height/2,0];i.addHinge({mesh:a,position:new U(o[0]*t,o[1]*t,o[2]*t),meshOffset:new U(l[0]*t,l[1]*t,l[2]*t),axis:s.axis,yaw:s.yaw,from:s.from,to:s.to,delay:s.delay,duration:s.duration,easing:s.easing,animated:s.animated})}if(i.footprintRadius=(n.footprintRadius??r)*t,i.root.position.y=n.lift??.02,i.naturalColor=n.naturalColor??null,n.shadow!==!1){const s=(n.footprintRadius??r)*t,a=new We(new it(s*2.6,s*1.5),new at({map:s0(),transparent:!0,depthWrite:!1,depthTest:!1,opacity:.5}));a.rotation.x=-Math.PI/2,a.position.y=-(n.lift??.02)+.006,a.renderOrder=.5,i.root.add(a)}if(n.idle){const s=.85+Math.random()*.3;i.setIdle(n.idle.amplitude,n.idle.frequency*s)}return i}class yn{constructor(e){this.options=e,this.remaining=e.targets.length;for(const t of e.targets)t.popup.setHighlighted(!0),t.popup.enlargeHitArea(),e.interaction.register({object:t.popup.root,cursor:"pointer",generous:!0,onClick:()=>this.colorIn(t)});this.remaining===0&&this.finish()}remaining;done=!1;colorIn(e){if(e.popup.isColored)return;e.popup.colorize(e.color),this.options.interaction.unregister(e.popup.root),this.remaining--;const t=this.options.targets.length;this.options.sound?.chime(t-this.remaining-1),this.options.onColor?.(this.remaining,t),this.remaining<=0&&this.finish()}finish(){this.done||(this.done=!0,this.options.sound?.success(),this.options.onComplete?.())}}const Tt={parts:[{draw:Im,width:12,height:2.6,pixelsPerUnit:96,duration:1.25}],footprintRadius:6,naturalColor:"#79ad48",idle:{amplitude:.006,frequency:.5}},nt={parts:[{draw:Dm,width:.7,height:2.2,duration:.85},{draw:(n,e,t,i)=>Ko(n,e,t,!1,i),width:1.3,height:.8,position:[0,1.364,.01],meshOffset:[.65,0,0],axis:"z",from:-Math.PI/2,to:-.12,delay:.65,duration:.5},{draw:(n,e,t,i)=>Ko(n,e,t,!0,i),width:1.3,height:.8,position:[0,1.1,.02],meshOffset:[-.65,0,0],axis:"z",from:Math.PI/2,to:.12,delay:.8,duration:.5},{draw:Um,width:2.7,height:2.5,position:[0,2.09,-.01],meshOffset:[0,1,0],delay:1,duration:.7}],footprintRadius:1.35,naturalColor:"#5c9a3c",idle:{amplitude:.018,frequency:.6}},Ve={parts:[{draw:Om,width:1.8,height:1.1,duration:.7}],footprintRadius:.9,naturalColor:"#5c9a3c",idle:{amplitude:.03,frequency:1}},a0={parts:[{draw:Bm,width:.5,height:.9,duration:.55},{draw:zm,width:.7,height:.7,position:[0,.855,.01],meshOffset:[0,.28,0],delay:.5,duration:.5}],footprintRadius:.35,idle:{amplitude:.05,frequency:1.4}},nn={parts:[{draw:km,width:1.1,height:.7,duration:.55}],footprintRadius:.55,naturalColor:"#a9a49a",idle:{amplitude:.006,frequency:.6}},_t={parts:[{draw:Hm,width:.9,height:.6,duration:.5}],footprintRadius:.45,naturalColor:"#79ad48",idle:{amplitude:.065,frequency:1.6}},On={parts:[{draw:Gm,width:.7,height:.7,duration:.5}],footprintRadius:.35,naturalColor:"#d6452f",idle:{amplitude:.015,frequency:.9}},o0={parts:[{draw:Nm,width:3.4,height:3.2,duration:1}],footprintRadius:1.7,naturalColor:"#e7d3a4",idle:{amplitude:.008,frequency:.5}},Tn={parts:[{draw:Lm,width:1.4,height:2.1,pixelsPerUnit:320,duration:1.4,easing:Oa,animated:!0}],footprintRadius:.7,idle:{amplitude:.02,frequency:.7}},Bn={parts:[{draw:Fm,width:60,height:18,pixelsPerUnit:48,duration:1.8,easing:Oa}],footprintRadius:30,shadow:!1,idle:{amplitude:.004,frequency:.3}},l0={parts:[{draw:Vm,width:1.5,height:1.3,duration:.8,animated:!0}],footprintRadius:.65,idle:{amplitude:.02,frequency:1}},Bs={parts:[{draw:Wm,width:1.7,height:1.1,duration:.6}],footprintRadius:.85,naturalColor:"#5c9a3c",idle:{amplitude:.02,frequency:.8}},qi={parts:[{draw:Xm,width:.8,height:2.4,duration:.7}],footprintRadius:.4,naturalColor:"#79ad48",idle:{amplitude:.05,frequency:1.2}},c0={parts:[{draw:Ym,width:1.1,height:1.1,meshOffset:[0,1.5,0],duration:.7,animated:!0}],footprintRadius:.45,shadow:!1,idle:{amplitude:.05,frequency:1.3}},h0={parts:[{draw:Km,width:.9,height:1,meshOffset:[0,2.2,0],duration:.6}],footprintRadius:.35,shadow:!1,idle:{amplitude:.03,frequency:1.1}},u0={parts:[{draw:$m,width:1.7,height:1.7,duration:.85,animated:!0}],footprintRadius:.75,idle:{amplitude:.015,frequency:.9}},d0={parts:[{draw:Zm,width:1.4,height:1.4,duration:.8,animated:!0}],footprintRadius:.6,idle:{amplitude:.02,frequency:1.1}},f0={parts:[{draw:jm,width:1.6,height:1.8,duration:.85,animated:!0}],footprintRadius:.7,idle:{amplitude:.015,frequency:.8}},p0={parts:[{draw:Jm,width:2.2,height:2.2,meshOffset:[0,3,0],duration:1,animated:!0}],footprintRadius:.9,shadow:!1,idle:{amplitude:.006,frequency:.4}},m0={parts:[{draw:Qm,width:2.2,height:1.3,meshOffset:[0,3.2,0],duration:.9}],footprintRadius:1,shadow:!1,idle:{amplitude:.01,frequency:.5}},g0={parts:[{draw:e0,width:16,height:8,pixelsPerUnit:40,meshOffset:[0,3,0],duration:1.6,easing:Oa}],footprintRadius:8,shadow:!1,idle:{amplitude:.004,frequency:.3}},Ir=-13,_0=8,v0=5.2;class M0 extends Mn{puzzleStarted=!1;colorTargets=[];seed=439041101;setup(){this.rig=new Sn(this.ctx.camera,{speed:1.6,length:_0,holdTime:v0,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildColorTargets(),this.buildGirl(),this.ctx.hud.showCaption("Once, all the colour drained out of the world — every last drop.",5),window.setTimeout(()=>{this.ctx.hud.showCaption("Only one thing kept its colour: the rainbow hair of a little girl named Mabli.",5)},5200)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const s=r??Math.max(.2,.5+(-Ir+i)*.26);return this.addPopup(e,s),e}buildGround(){const e=new We(new it(48,60),new at({map:vn(14),side:et}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new We(new it(.05,60),new at({color:"#c9c1ac",transparent:!0,opacity:.5,side:et}));t.rotation.x=-Math.PI/2,t.position.set(0,.001,-18),this.root.add(t)}buildHorizon(){this.place(V(Bn),0,Ir-9,.1)}buildHeroScenery(){this.place(V(Tt,{scale:.9}),-7,-10,.3),this.place(V(Tt,{scale:1}),7.2,-11.5,.6),this.place(V(nt,{scale:1.15}),-2.6,-5),this.place(V(nt,{scale:1}),2.7,-6.5),this.place(V(nt,{scale:1.3}),-3.3,-9),this.place(V(nt,{scale:1.05}),3.2,-10.5),this.place(V(nt,{scale:1.2}),-3,-12.5),this.place(V(o0,{scale:.95}),4.6,-12),this.place(V(Ve,{scale:1.2}),-1.7,-4),this.place(V(Ve,{scale:1.1}),1.8,-5.5),this.place(V(Ve,{scale:1.2}),2.3,-9.5),this.place(V(Ve,{scale:1}),-2,-11)}scatterUndergrowth(){for(let e=-2;e>Ir-1;e-=.55)for(const t of[-1,1]){if(this.random()>.82)continue;const i=t*(1+this.random()*2.4),r=e+(this.random()-.5)*.4,s=this.random();let a=.8+this.random()*.7,o=_t;s<.45?o=_t:s<.72?o=On:s<.9?o=nn:(o=Ve,a*=.8),this.place(V(o,{scale:a}),i,r)}}buildColorTargets(){const e=[{x:-2.2,z:-11,scale:1.15,color:"#e4572e"},{x:-1.32,z:-11,scale:1.15,color:"#ef7215"},{x:-.44,z:-11,scale:1.15,color:"#f4c20d"},{x:.44,z:-11,scale:1.15,color:"#3fa34d"},{x:1.32,z:-11,scale:1.15,color:"#2b8ac9"},{x:2.2,z:-11,scale:1.15,color:"#9b4dca"}];for(const t of e){const i=this.place(V(a0,{scale:t.scale}),t.x,t.z);this.colorTargets.push({popup:i,color:t.color})}}buildGirl(){this.girl=this.place(V(Tn,{scale:1.1}),0,Ir,1.2)}onUpdate(e){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startColorPuzzle())}startColorPuzzle(){this.ctx.hud.showCaption("Mabli found some flowers, but they have no colour. Tap each flower to colour it in!",0),new yn({interaction:this.ctx.interaction,sound:this.ctx.sound,targets:this.colorTargets,onColor:e=>{e>0&&this.ctx.hud.showCaption("So pretty! Tap the other flowers too.",0)},onComplete:()=>{this.ctx.hud.showCaption("You did it! Colour is coming back to the world. And so Mabli's journey begins.",0),this.complete()}})}}const Dr=-13,S0=8,y0=5.2,T0="#3fa34d";class E0 extends Mn{puzzleStarted=!1;colorTargets=[];seed=1373827085;setup(){this.rig=new Sn(this.ctx.camera,{speed:1.6,length:S0,holdTime:y0,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildPondLife(),this.buildGirl(),this.ctx.hud.showCaption("Mabli followed the path to a quiet, grey pond…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const s=r??Math.max(.2,.5+(-Dr+i)*.26);return this.addPopup(e,s),e}buildGround(){const e=new We(new it(48,60),new at({map:vn(14),side:et}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new We(new it(.05,60),new at({color:"#c9c1ac",transparent:!0,opacity:.5,side:et}));t.rotation.x=-Math.PI/2,t.position.set(0,.001,-18),this.root.add(t);const i=wl({draw:qm,width:8,height:5.5,pixelsPerUnit:64,doubleSided:!0});i.rotation.x=-Math.PI/2,i.position.set(0,.012,-11),this.root.add(i)}buildHorizon(){this.place(V(Bn),0,Dr-9,.1)}buildHeroScenery(){this.place(V(Tt,{scale:.9}),-7,-10,.3),this.place(V(Tt,{scale:1}),7.2,-11.5,.6),this.place(V(nt,{scale:1.15}),-3.6,-6),this.place(V(nt,{scale:1.1}),3.7,-8.5),this.place(V(nt,{scale:1.2}),-4.2,-12.5),this.place(V(Ve,{scale:1.2}),-2.2,-5),this.place(V(Ve,{scale:1.1}),2.4,-6.5),this.place(V(qi,{scale:1.1}),-2.6,-9.6),this.place(V(qi,{scale:1.25}),2.6,-10.2),this.place(V(qi,{scale:1}),-2.9,-11.6),this.place(V(qi,{scale:1.15}),2.3,-12.2)}scatterUndergrowth(){for(let e=-2;e>Dr-1;e-=.6)for(const t of[-1,1]){if(this.random()>.8)continue;const i=t*(1.2+this.random()*2.4),r=e+(this.random()-.5)*.4,s=this.random();let a=.8+this.random()*.7,o=_t;s<.4?o=_t:s<.62?o=qi:s<.8?o=On:s<.92?o=nn:(o=Ve,a*=.8),this.place(V(o,{scale:a}),i,r)}}buildPondLife(){this.place(V(Bs,{scale:1.2}),.5,-10.9),this.place(V(Bs,{scale:1}),-1.3,-10.4),this.place(V(Bs,{scale:1.1}),1.5,-11.9);const e=this.place(V(l0,{scale:1.25}),.5,-10.6,1.4);this.colorTargets.push({popup:e,color:T0})}buildGirl(){this.girl=this.place(V(Tn,{scale:1.1}),-1.7,Dr,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startFrogPuzzle())}startFrogPuzzle(){this.ctx.hud.showCaption("“Ribbit… hello! I’m a little frog, but I’ve lost all my green. Can you find me and tap me to colour me in?”",0),new yn({interaction:this.ctx.interaction,sound:this.ctx.sound,targets:this.colorTargets,onComplete:()=>{this.ctx.hud.showCaption("“Ribbit-ribbit! I’m green again! Thank you!”",0),this.complete()}})}}const Ur=-13,x0=8,b0=5.2;class A0 extends Mn{puzzleStarted=!1;colorTargets=[];seed=186515111;setup(){this.rig=new Sn(this.ctx.camera,{speed:1.6,length:x0,holdTime:b0,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildButterflies(),this.buildGirl(),this.ctx.hud.showCaption("The path opened into a bright, grey meadow…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const s=r??Math.max(.2,.5+(-Ur+i)*.26);return this.addPopup(e,s),e}buildGround(){const e=new We(new it(48,60),new at({map:vn(14),side:et}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new We(new it(.05,60),new at({color:"#c9c1ac",transparent:!0,opacity:.5,side:et}));t.rotation.x=-Math.PI/2,t.position.set(0,.001,-18),this.root.add(t)}buildHorizon(){this.place(V(Bn),0,Ur-9,.1)}buildHeroScenery(){this.place(V(Tt,{scale:.9}),-7,-10,.3),this.place(V(Tt,{scale:1}),7.2,-11.5,.6),this.place(V(nt,{scale:1.15}),-3.7,-6.5),this.place(V(nt,{scale:1.1}),3.8,-9),this.place(V(Ve,{scale:1.2}),-2.4,-5),this.place(V(Ve,{scale:1.1}),2.5,-6.5),this.place(V(Ve,{scale:1.2}),2.2,-11.5)}scatterUndergrowth(){for(let e=-2;e>Ur-1;e-=.5)for(const t of[-1,1]){if(this.random()>.85)continue;const i=t*(1.1+this.random()*2.6),r=e+(this.random()-.5)*.4,s=this.random();let a=.8+this.random()*.7,o=_t;s<.62?o=_t:s<.82?o=On:s<.93?o=nn:(o=Ve,a*=.8),this.place(V(o,{scale:a}),i,r)}}buildButterflies(){const e=[{x:-2.2,z:-11,scale:.85,color:"#e4572e"},{x:-1.1,z:-11,scale:.85,color:"#2b8ac9"},{x:0,z:-11,scale:.85,color:"#f4c20d"},{x:1.1,z:-11,scale:.85,color:"#9b4dca"},{x:2.2,z:-11,scale:.85,color:"#ef7215"}];for(const t of e){const i=this.place(V(c0,{scale:t.scale}),t.x,t.z);this.colorTargets.push({popup:i,color:t.color})}}buildGirl(){this.girl=this.place(V(Tn,{scale:1.1}),-2,Ur,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startButterflyPuzzle())}startButterflyPuzzle(){this.ctx.hud.showCaption("So many butterflies — but they're all grey! Tap each butterfly to colour its wings!",0),new yn({interaction:this.ctx.interaction,sound:this.ctx.sound,targets:this.colorTargets,onColor:e=>{e>0&&this.ctx.hud.showCaption("Wonderful! Colour the others too!",0)},onComplete:()=>{this.ctx.hud.showCaption("You did it! The whole meadow is dancing with colour!",0),this.complete()}})}}const Nr=-13,C0=8,R0=5.2;class P0 extends Mn{puzzleStarted=!1;colorTargets=[];seed=2844860133;setup(){this.rig=new Sn(this.ctx.camera,{speed:1.6,length:C0,holdTime:R0,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildApples(),this.buildGirl(),this.ctx.hud.showCaption("Beyond the meadow stood a great, grey apple tree…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const s=r??Math.max(.2,.5+(-Nr+i)*.26);return this.addPopup(e,s),e}buildGround(){const e=new We(new it(48,60),new at({map:vn(14),side:et}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new We(new it(.05,60),new at({color:"#c9c1ac",transparent:!0,opacity:.5,side:et}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}buildHorizon(){this.place(V(Bn),0,Nr-9,.1)}buildHeroScenery(){this.place(V(Tt,{scale:.9}),-7,-10,.3),this.place(V(Tt,{scale:1}),7.2,-11.5,.6),this.place(V(nt,{scale:1.7}),0,-14,.8),this.place(V(nt,{scale:1}),-4,-7),this.place(V(Ve,{scale:1.1}),-2.4,-5.5),this.place(V(Ve,{scale:1}),2.6,-6.5),this.place(V(Ve,{scale:1}),3,-11.5)}scatterUndergrowth(){for(let e=-3.2;e>Nr-1;e-=.55)for(const t of[-1,1]){if(this.random()>.78)continue;const i=t*(1.2+this.random()*2.6),r=e+(this.random()-.5)*.4,s=this.random();let a=.6+this.random()*.4,o=_t;s<.55?o=_t:s<.78?o=On:s<.92?o=nn:(o=Ve,a*=.8),this.place(V(o,{scale:a}),i,r)}}buildApples(){const e=[{x:-2.2,z:-13,scale:1.3,color:"#e4572e"},{x:-1.1,z:-13,scale:1.3,color:"#d64541"},{x:0,z:-13,scale:1.3,color:"#f4c20d"},{x:1.1,z:-13,scale:1.3,color:"#3fa34d"},{x:2.2,z:-13,scale:1.3,color:"#ef7215"}];for(const t of e){const i=this.place(V(h0,{scale:t.scale}),t.x,t.z);this.colorTargets.push({popup:i,color:t.color})}}buildGirl(){this.girl=this.place(V(Tn,{scale:1.1}),-2.1,Nr,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startApplePuzzle())}startApplePuzzle(){this.ctx.hud.showCaption("The apples have no colour! Tap each apple to fill it with colour.",0),new yn({interaction:this.ctx.interaction,sound:this.ctx.sound,targets:this.colorTargets,onColor:e=>{e>0&&this.ctx.hud.showCaption("Yum! Colour the rest too!",0)},onComplete:()=>{this.ctx.hud.showCaption("You did it! The orchard is ripe with colour!",0),this.complete()}})}}const Fr=-13,w0=8,L0=5.2,I0="#e8823a";class D0 extends Mn{puzzleStarted=!1;colorTargets=[];seed=252451383;setup(){this.rig=new Sn(this.ctx.camera,{speed:1.6,length:w0,holdTime:L0,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildFox(),this.buildGirl(),this.ctx.hud.showCaption("In a hush of grey trees, someone was waiting…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const s=r??Math.max(.2,.5+(-Fr+i)*.26);return this.addPopup(e,s),e}buildGround(){const e=new We(new it(48,60),new at({map:vn(14),side:et}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new We(new it(.05,60),new at({color:"#c9c1ac",transparent:!0,opacity:.5,side:et}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}buildHorizon(){this.place(V(Bn),0,Fr-9,.1)}buildHeroScenery(){this.place(V(Tt,{scale:.9}),-7,-10,.3),this.place(V(Tt,{scale:1}),7.2,-11.5,.6),this.place(V(nt,{scale:1.3}),-3.6,-6.5),this.place(V(nt,{scale:1.2}),3.7,-8),this.place(V(nt,{scale:1.5}),-4.2,-12),this.place(V(nt,{scale:1.35}),4,-12.8),this.place(V(Ve,{scale:1.3}),-2.4,-9.5),this.place(V(Ve,{scale:1.2}),2.4,-10.5)}scatterUndergrowth(){for(let e=-3.2;e>Fr-1;e-=.55)for(const t of[-1,1]){if(this.random()>.82)continue;const i=t*(1.2+this.random()*2.4),r=e+(this.random()-.5)*.4,s=this.random();let a=.6+this.random()*.4,o=_t;s<.5?o=_t:s<.76?o=On:s<.92?o=nn:(o=Ve,a*=.8),this.place(V(o,{scale:a}),i,r)}}buildFox(){const e=this.place(V(u0,{scale:1.05}),.5,-11.2,1.4);this.colorTargets.push({popup:e,color:I0})}buildGirl(){this.girl=this.place(V(Tn,{scale:1.1}),-2,Fr,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startFoxPuzzle())}startFoxPuzzle(){this.ctx.hud.showCaption("“Oh… I'm a little fox. I've lost my lovely orange coat. Will you colour me in?”",0),new yn({interaction:this.ctx.interaction,sound:this.ctx.sound,targets:this.colorTargets,onComplete:()=>{this.ctx.hud.showCaption("“Look at me — orange again! Thank you, friend!”",0),this.complete()}})}}const Or=-13,U0=8,N0=5.2;class F0 extends Mn{puzzleStarted=!1;colorTargets=[];seed=728876201;setup(){this.rig=new Sn(this.ctx.camera,{speed:1.6,length:U0,holdTime:N0,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildBird(),this.buildGirl(),this.ctx.hud.showCaption("A little song drifted across the still, grey meadow…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const s=r??Math.max(.2,.5+(-Or+i)*.26);return this.addPopup(e,s),e}buildGround(){const e=new We(new it(48,60),new at({map:vn(14),side:et}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new We(new it(.05,60),new at({color:"#c9c1ac",transparent:!0,opacity:.5,side:et}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}buildHorizon(){this.place(V(Bn),0,Or-9,.1)}buildHeroScenery(){this.place(V(Tt,{scale:.9}),-7,-10,.3),this.place(V(Tt,{scale:1}),7.2,-11.5,.6),this.place(V(nt,{scale:1.2}),-3.7,-6.5),this.place(V(nt,{scale:1.3}),3.9,-9),this.place(V(Ve,{scale:1.2}),-2.4,-8.5),this.place(V(Ve,{scale:1.1}),2.6,-10.5)}scatterUndergrowth(){for(let e=-3;e>Or-1;e-=.55)for(const t of[-1,1]){if(this.random()>.82)continue;const i=t*(1.2+this.random()*2.4),r=e+(this.random()-.5)*.4,s=this.random();let a=.7+this.random()*.5,o=_t;s<.55?o=_t:s<.78?o=On:s<.92?o=nn:(o=Ve,a*=.8),this.place(V(o,{scale:a}),i,r)}}buildBird(){const e=[{x:-1.7,color:"#4a90d9"},{x:0,color:"#e2703a"},{x:1.7,color:"#f4c20d"}];for(const t of e){this.place(V(nn,{scale:1.4}),t.x,-11,1.2);const i=this.place(V(d0,{scale:1}),t.x,-11,1.5);i.root.position.y=.5,this.colorTargets.push({popup:i,color:t.color})}}buildGirl(){this.girl=this.place(V(Tn,{scale:1.1}),-2,Or,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startBirdPuzzle())}startBirdPuzzle(){this.ctx.hud.showCaption("“Tweet! We're little birds, but our colours have flown away. Tap each of us to colour us in!”",0),new yn({interaction:this.ctx.interaction,sound:this.ctx.sound,targets:this.colorTargets,onColor:e=>{e>0&&this.ctx.hud.showCaption("“Tweet! Now colour my friends too!”",0)},onComplete:()=>{this.ctx.hud.showCaption("“Tweet-tweet! A whole flock of colour — thank you!”",0),this.complete()}})}}const Br=-13,O0=8,B0=5.2,z0="#b98b5e";class k0 extends Mn{puzzleStarted=!1;colorTargets=[];seed=1832554737;setup(){this.rig=new Sn(this.ctx.camera,{speed:1.6,length:O0,holdTime:B0,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildRabbit(),this.buildGirl(),this.ctx.hud.showCaption("Something soft rustled in the tall, grey grass…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const s=r??Math.max(.2,.5+(-Br+i)*.26);return this.addPopup(e,s),e}buildGround(){const e=new We(new it(48,60),new at({map:vn(14),side:et}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new We(new it(.05,60),new at({color:"#c9c1ac",transparent:!0,opacity:.5,side:et}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}buildHorizon(){this.place(V(Bn),0,Br-9,.1)}buildHeroScenery(){this.place(V(Tt,{scale:1}),-7,-10,.3),this.place(V(Tt,{scale:.95}),7.2,-11.5,.6),this.place(V(nt,{scale:1.15}),-4,-7),this.place(V(nt,{scale:1.1}),4,-9.5),this.place(V(Ve,{scale:1.3}),-2.6,-8.5),this.place(V(Ve,{scale:1.2}),2.7,-10.5)}scatterUndergrowth(){for(let e=-3;e>Br-1;e-=.5)for(const t of[-1,1]){if(this.random()>.86)continue;const i=t*(1.1+this.random()*2.6),r=e+(this.random()-.5)*.4,s=this.random();let a=.8+this.random()*.6,o=_t;s<.68?o=_t:s<.85?o=On:s<.94?o=nn:(o=Ve,a*=.8),this.place(V(o,{scale:a}),i,r)}}buildRabbit(){const e=this.place(V(f0,{scale:1.1}),.6,-11,1.4);this.colorTargets.push({popup:e,color:z0}),this.place(V(_t,{scale:1.4}),-.1,-10.4,1.6),this.place(V(_t,{scale:1.3}),1.3,-10.5,1.6)}buildGirl(){this.girl=this.place(V(Tn,{scale:1.1}),-2,Br,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startRabbitPuzzle())}startRabbitPuzzle(){this.ctx.hud.showCaption("“Hello… I'm a shy little rabbit, and my soft brown is all gone. Will you colour me in?”",0),new yn({interaction:this.ctx.interaction,sound:this.ctx.sound,targets:this.colorTargets,onComplete:()=>{this.ctx.hud.showCaption("“Warm and brown again! Thank you, kind friend.”",0),this.complete()}})}}const zr=-13,H0=8,G0=5.2,V0="#d6452f";class W0 extends Mn{puzzleStarted=!1;colorTargets=[];seed=2141307707;setup(){this.rig=new Sn(this.ctx.camera,{speed:1.6,length:H0,holdTime:G0,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildToadstools(),this.buildGirl(),this.ctx.hud.showCaption("Deeper in, a little ring of toadstools stood waiting…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const s=r??Math.max(.2,.5+(-zr+i)*.26);return this.addPopup(e,s),e}buildGround(){const e=new We(new it(48,60),new at({map:vn(14),side:et}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new We(new it(.05,60),new at({color:"#c9c1ac",transparent:!0,opacity:.5,side:et}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}buildHorizon(){this.place(V(Bn),0,zr-9,.1)}buildHeroScenery(){this.place(V(Tt,{scale:.95}),-7,-10,.3),this.place(V(Tt,{scale:1}),7.2,-11.5,.6),this.place(V(nt,{scale:1.4}),-4,-7),this.place(V(nt,{scale:1.3}),4.1,-8.5),this.place(V(nt,{scale:1.5}),-4.4,-12.5),this.place(V(Ve,{scale:1.3}),-2.6,-9),this.place(V(Ve,{scale:1.2}),2.7,-10.5)}scatterUndergrowth(){for(let e=-3;e>zr-1;e-=.6)for(const t of[-1,1]){if(this.random()>.84)continue;const i=t*(1.4+this.random()*2.2),r=e+(this.random()-.5)*.4,s=this.random();let a=.7+this.random()*.5,o=_t;s<.55?o=_t:s<.8?o=nn:(o=Ve,a*=.8),this.place(V(o,{scale:a}),i,r)}}buildToadstools(){const e=[-2.7,-1,1,2.7];for(const t of e){const i=this.place(V(On,{scale:2.3}),t,-11);this.colorTargets.push({popup:i,color:V0})}}buildGirl(){this.girl=this.place(V(Tn,{scale:1.1}),0,zr,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startToadstoolPuzzle())}startToadstoolPuzzle(){this.ctx.hud.showCaption("The toadstools have lost their cheerful red caps. Tap each one to colour it in!",0),new yn({interaction:this.ctx.interaction,sound:this.ctx.sound,targets:this.colorTargets,onColor:e=>{e>0&&this.ctx.hud.showCaption("Lovely and red! Colour the others too.",0)},onComplete:()=>{this.ctx.hud.showCaption("A whole ring of red toadstools — wonderful!",0),this.complete()}})}}const zs=-13,X0=8,q0=5.2;class Y0 extends Mn{puzzleStarted=!1;finale=!1;colorTargets=[];warmTarget=new Ge("#f7ecd2");seed=1545304577;setup(){this.rig=new Sn(this.ctx.camera,{speed:1.6,length:X0,holdTime:q0,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildSky(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildGirl(),this.ctx.hud.showCaption("At last Mabli climbed a hill beneath a wide, grey sky…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const s=r??Math.max(.2,.5+(-zs+i)*.26);return this.addPopup(e,s),e}buildGround(){const e=new We(new it(48,60),new at({map:vn(14),side:et}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new We(new it(.05,60),new at({color:"#c9c1ac",transparent:!0,opacity:.5,side:et}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}buildSky(){const e=this.place(V(p0,{scale:1.5}),0,-15.5,.4);this.colorTargets.push({popup:e,color:"#f6c744"});const t=[{x:-3.4,z:-15,scale:1.2,color:"#bcdff0"},{x:3.4,z:-15.4,scale:1.3,color:"#f4c2d0"},{x:-2,z:-17.6,scale:1.1,color:"#d9c2ec"}];for(const i of t){const r=this.place(V(m0,{scale:i.scale}),i.x,i.z,.7);this.colorTargets.push({popup:r,color:i.color})}}buildHeroScenery(){this.place(V(Tt,{scale:.8}),-7.5,-14,.3),this.place(V(Tt,{scale:.85}),7.6,-14.5,.6),this.place(V(nt,{scale:1.1}),-4.4,-7.5),this.place(V(Ve,{scale:1.1}),3.2,-9.5),this.place(V(Ve,{scale:1}),-2.8,-10.5)}scatterUndergrowth(){for(let e=-3.2;e>zs-1;e-=.6)for(const t of[-1,1]){if(this.random()>.78)continue;const i=t*(1.2+this.random()*2.6),r=e+(this.random()-.5)*.4,s=this.random();let a=.6+this.random()*.4,o=_t;s<.7?o=_t:s<.9?o=nn:(o=Ve,a*=.8),this.place(V(o,{scale:a}),i,r)}}buildGirl(){this.girl=this.place(V(Tn,{scale:1.15}),-1.9,zs,1.2)}onUpdate(e){if(!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startSkyPuzzle()),this.finale){const t=this.ctx.scene.background;t instanceof Ge&&t.lerp(this.warmTarget,Math.min(1,e*.6)),this.ctx.scene.fog?.color.lerp(this.warmTarget,Math.min(1,e*.6))}}startSkyPuzzle(){this.ctx.hud.showCaption("The whole sky is grey! Tap the sun and each cloud to colour them.",0),new yn({interaction:this.ctx.interaction,sound:this.ctx.sound,targets:this.colorTargets,onColor:e=>{e>0&&this.ctx.hud.showCaption("Beautiful! Keep colouring the sky!",0)},onComplete:()=>this.startFinale()})}startFinale(){this.finale=!0,this.ctx.hud.showCaption("Colour rushed back into every corner of the world!",0),this.place(V(g0),0,-16.5,0),window.setTimeout(()=>{this.ctx.hud.showEndCard("The End","And so Mabli, the girl with the rainbow hair, brought colour back to the whole world."),this.complete()},3400)}}const K0=document.getElementById("game"),Ta=new Rm(K0),Ll=new M0,Il=new E0,Dl=new A0,Ul=new P0,Nl=new D0,Fl=new F0,Ol=new k0,Bl=new W0,zl=new Y0,zn=n=>{window.setTimeout(()=>Ta.scenes.go(n,{wipe:!0}),6e3)};Ll.onComplete=()=>zn(Il);Il.onComplete=()=>zn(Dl);Dl.onComplete=()=>zn(Ul);Ul.onComplete=()=>zn(Nl);Nl.onComplete=()=>zn(Fl);Fl.onComplete=()=>zn(Ol);Ol.onComplete=()=>zn(Bl);Bl.onComplete=()=>zn(zl);zl.onComplete=()=>{console.info("The story is complete — colour has returned to the world.")};Ta.hud.onStart(()=>{Ta.start(Ll)});
