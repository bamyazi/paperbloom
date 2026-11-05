(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ma="168",Bl=0,Ga=1,zl=2,Qo=1,kl=2,_n=3,Sn=0,Dt=1,Ze=2,Un=0,Jn=1,Us=2,Va=3,Wa=4,Hl=5,$n=100,Gl=101,Vl=102,Wl=103,Xl=104,ql=200,Yl=201,$l=202,Kl=203,Ns=204,Fs=205,Zl=206,jl=207,Jl=208,Ql=209,ec=210,tc=211,nc=212,ic=213,rc=214,sc=0,ac=1,oc=2,Hr=3,lc=4,cc=5,hc=6,uc=7,el=0,dc=1,fc=2,Nn=0,pc=1,mc=2,gc=3,_c=4,vc=5,Mc=6,Sc=7,tl=300,xi=301,Ai=302,Os=303,Bs=304,Kr=306,Gr=1e3,Zn=1001,zs=1002,Vt=1003,yc=1004,tr=1005,$t=1006,rs=1007,jn=1008,yn=1009,nl=1010,il=1011,qi=1012,Sa=1013,Qn=1014,vn=1015,Ki=1016,ya=1017,Ta=1018,Ci=1020,rl=35902,sl=1021,al=1022,Kt=1023,ol=1024,ll=1025,bi=1026,Pi=1027,cl=1028,ba=1029,hl=1030,Ea=1031,xa=1033,Dr=33776,Ur=33777,Nr=33778,Fr=33779,ks=35840,Hs=35841,Gs=35842,Vs=35843,Ws=36196,Xs=37492,qs=37496,Ys=37808,$s=37809,Ks=37810,Zs=37811,js=37812,Js=37813,Qs=37814,ea=37815,ta=37816,na=37817,ia=37818,ra=37819,sa=37820,aa=37821,Or=36492,oa=36494,la=36495,ul=36283,ca=36284,ha=36285,ua=36286,Tc=3200,bc=3201,Ec=0,xc=1,In="",Ct="srgb",Bn="srgb-linear",Aa="display-p3",Zr="display-p3-linear",Vr="linear",tt="srgb",Wr="rec709",Xr="p3",ii=7680,Xa=519,Ac=512,Cc=513,Pc=514,dl=515,Rc=516,wc=517,Lc=518,Ic=519,qa=35044,Dc=35048,Ya="300 es",Mn=2e3,qr=2001;class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $a=1234567;const Gi=Math.PI/180,Yi=180/Math.PI;function Li(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function wt(n,e,t){return Math.max(e,Math.min(t,n))}function Ca(n,e){return(n%e+e)%e}function Uc(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Nc(n,e,t){return n!==e?(t-n)/(e-n):0}function Vi(n,e,t){return(1-t)*n+t*e}function Fc(n,e,t,i){return Vi(n,e,1-Math.exp(-t*i))}function Oc(n,e=1){return e-Math.abs(Ca(n,e*2)-e)}function Bc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function zc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function kc(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Hc(n,e){return n+Math.random()*(e-n)}function Gc(n){return n*(.5-Math.random())}function Vc(n){n!==void 0&&($a=n);let e=$a+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wc(n){return n*Gi}function Xc(n){return n*Yi}function qc(n){return(n&n-1)===0&&n!==0}function Yc(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function $c(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Kc(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*m,o*c);break;case"YXY":n.set(l*m,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Zt={DEG2RAD:Gi,RAD2DEG:Yi,generateUUID:Li,clamp:wt,euclideanModulo:Ca,mapLinear:Uc,inverseLerp:Nc,lerp:Vi,damp:Fc,pingpong:Oc,smoothstep:Bc,smootherstep:zc,randInt:kc,randFloat:Hc,randFloatSpread:Gc,seededRandom:Vc,degToRad:Wc,radToDeg:Xc,isPowerOfTwo:qc,ceilPowerOfTwo:Yc,floorPowerOfTwo:$c,setQuaternionFromProperEuler:Kc,normalize:Pt,denormalize:Si};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,i,r,s,a,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],_=r[0],p=r[3],f=r[6],T=r[1],y=r[4],E=r[7],I=r[2],C=r[5],A=r[8];return s[0]=a*_+o*T+l*I,s[3]=a*p+o*y+l*C,s[6]=a*f+o*E+l*A,s[1]=c*_+h*T+u*I,s[4]=c*p+h*y+u*C,s[7]=c*f+h*E+u*A,s[2]=d*_+m*T+g*I,s[5]=d*p+m*y+g*C,s[8]=d*f+m*E+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,m=c*s-a*l,g=t*u+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*c-h*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ss.makeScale(e,t)),this}rotate(e){return this.premultiply(ss.makeRotation(-e)),this}translate(e,t){return this.premultiply(ss.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ss=new Ne;function fl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Yr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zc(){const n=Yr("canvas");return n.style.display="block",n}const Ka={};function Wi(n){n in Ka||(Ka[n]=!0,console.warn(n))}function jc(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Za=new Ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ja=new Ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ni={[Bn]:{transfer:Vr,primaries:Wr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Ct]:{transfer:tt,primaries:Wr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Zr]:{transfer:Vr,primaries:Xr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(ja),fromReference:n=>n.applyMatrix3(Za)},[Aa]:{transfer:tt,primaries:Xr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(ja),fromReference:n=>n.applyMatrix3(Za).convertLinearToSRGB()}},Jc=new Set([Bn,Zr]),Ke={enabled:!0,_workingColorSpace:Bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Jc.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ni[e].toReference,r=Ni[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ni[n].primaries},getTransfer:function(n){return n===In?Vr:Ni[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Ni[e].luminanceCoefficients)}};function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function as(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ri;class Qc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ri===void 0&&(ri=Yr("canvas")),ri.width=e.width,ri.height=e.height;const i=ri.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ei(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ei(t[i]/255)*255):t[i]=Ei(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eh=0;class pl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(os(r[a].image)):s.push(os(r[a]))}else s=os(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function os(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let th=0;class It extends wi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=Zn,r=Zn,s=$t,a=jn,o=Kt,l=yn,c=It.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Li(),this.name="",this.source=new pl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gr:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case zs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gr:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case zs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=tl;It.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,E=(m+1)/2,I=(f+1)/2,C=(h+d)/4,A=(u+_)/4,O=(g+p)/4;return y>E&&y>I?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=A/i):E>I?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=O/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=A/s,r=O/s),this.set(i,r,s,t),this}let T=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(u-_)/T,this.z=(d-h)/T,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nh extends wi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new It(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new pl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends nh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ml extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ih extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const d=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==m||h!==g){let p=1-o;const f=l*d+c*m+h*g+u*_,T=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const I=Math.sqrt(y),C=Math.atan2(I,f*T);p=Math.sin(p*C)/I,o=Math.sin(o*C)/I}const E=o*T;if(l=l*p+d*E,c=c*p+m*E,h=h*p+g*E,u=u*p+_*E,p===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-o*m,e[t+2]=c*g+h*m+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ja.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ja.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ls.copy(this).projectOnVector(e),this.sub(ls)}reflect(e){return this.sub(ls.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ls=new U,Ja=new ti;class Zi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(s,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nr.copy(i.boundingBox)),nr.applyMatrix4(e.matrixWorld),this.union(nr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fi),ir.subVectors(this.max,Fi),si.subVectors(e.a,Fi),ai.subVectors(e.b,Fi),oi.subVectors(e.c,Fi),xn.subVectors(ai,si),An.subVectors(oi,ai),kn.subVectors(si,oi);let t=[0,-xn.z,xn.y,0,-An.z,An.y,0,-kn.z,kn.y,xn.z,0,-xn.x,An.z,0,-An.x,kn.z,0,-kn.x,-xn.y,xn.x,0,-An.y,An.x,0,-kn.y,kn.x,0];return!cs(t,si,ai,oi,ir)||(t=[1,0,0,0,1,0,0,0,1],!cs(t,si,ai,oi,ir))?!1:(rr.crossVectors(xn,An),t=[rr.x,rr.y,rr.z],cs(t,si,ai,oi,ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dn=[new U,new U,new U,new U,new U,new U,new U,new U],Xt=new U,nr=new Zi,si=new U,ai=new U,oi=new U,xn=new U,An=new U,kn=new U,Fi=new U,ir=new U,rr=new U,Hn=new U;function cs(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Hn.fromArray(n,s);const o=r.x*Math.abs(Hn.x)+r.y*Math.abs(Hn.y)+r.z*Math.abs(Hn.z),l=e.dot(Hn),c=t.dot(Hn),h=i.dot(Hn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const rh=new Zi,Oi=new U,hs=new U;class jr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oi.subVectors(e,this.center);const t=Oi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Oi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oi.copy(e.center).add(hs)),this.expandByPoint(Oi.copy(e.center).sub(hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new U,us=new U,sr=new U,Cn=new U,ds=new U,ar=new U,fs=new U;class Pa{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){us.copy(e).add(t).multiplyScalar(.5),sr.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(us);const s=e.distanceTo(t)*.5,a=-this.direction.dot(sr),o=Cn.dot(this.direction),l=-Cn.dot(sr),c=Cn.lengthSq(),h=Math.abs(1-a*a);let u,d,m,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(us).addScaledVector(sr,d),m}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const i=fn.dot(this.direction),r=fn.dot(fn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,i,r,s){ds.subVectors(t,e),ar.subVectors(i,e),fs.crossVectors(ds,ar);let a=this.direction.dot(fs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,e);const l=o*this.direction.dot(ar.crossVectors(Cn,ar));if(l<0)return null;const c=o*this.direction.dot(ds.cross(Cn));if(c<0||l+c>a)return null;const h=-o*Cn.dot(fs);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,r,s,a,o,l,c,h,u,d,m,g,_,p){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,d,m,g,_,p)}set(e,t,i,r,s,a,o,l,c,h,u,d,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/li.setFromMatrixColumn(e,0).length(),s=1/li.setFromMatrixColumn(e,1).length(),a=1/li.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,m=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,m=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sh,e,ah)}lookAt(e,t,i){const r=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Pn.crossVectors(i,Ot),Pn.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Pn.crossVectors(i,Ot)),Pn.normalize(),or.crossVectors(Ot,Pn),r[0]=Pn.x,r[4]=or.x,r[8]=Ot.x,r[1]=Pn.y,r[5]=or.y,r[9]=Ot.y,r[2]=Pn.z,r[6]=or.z,r[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],_=i[6],p=i[10],f=i[14],T=i[3],y=i[7],E=i[11],I=i[15],C=r[0],A=r[4],O=r[8],b=r[12],S=r[1],R=r[5],G=r[9],z=r[13],$=r[2],Y=r[6],W=r[10],j=r[14],H=r[3],le=r[7],de=r[11],_e=r[15];return s[0]=a*C+o*S+l*$+c*H,s[4]=a*A+o*R+l*Y+c*le,s[8]=a*O+o*G+l*W+c*de,s[12]=a*b+o*z+l*j+c*_e,s[1]=h*C+u*S+d*$+m*H,s[5]=h*A+u*R+d*Y+m*le,s[9]=h*O+u*G+d*W+m*de,s[13]=h*b+u*z+d*j+m*_e,s[2]=g*C+_*S+p*$+f*H,s[6]=g*A+_*R+p*Y+f*le,s[10]=g*O+_*G+p*W+f*de,s[14]=g*b+_*z+p*j+f*_e,s[3]=T*C+y*S+E*$+I*H,s[7]=T*A+y*R+E*Y+I*le,s[11]=T*O+y*G+E*W+I*de,s[15]=T*b+y*z+E*j+I*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+s*l*u-r*c*u-s*o*d+i*c*d+r*o*m-i*l*m)+_*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*h-s*l*h)+p*(+t*c*u-t*o*m-s*a*u+i*a*m+s*o*h-i*c*h)+f*(-r*o*h-t*l*u+t*o*d+r*a*u-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],T=u*p*c-_*d*c+_*l*m-o*p*m-u*l*f+o*d*f,y=g*d*c-h*p*c-g*l*m+a*p*m+h*l*f-a*d*f,E=h*_*c-g*u*c+g*o*m-a*_*m-h*o*f+a*u*f,I=g*u*l-h*_*l-g*o*d+a*_*d+h*o*p-a*u*p,C=t*T+i*y+r*E+s*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=T*A,e[1]=(_*d*s-u*p*s-_*r*m+i*p*m+u*r*f-i*d*f)*A,e[2]=(o*p*s-_*l*s+_*r*c-i*p*c-o*r*f+i*l*f)*A,e[3]=(u*l*s-o*d*s-u*r*c+i*d*c+o*r*m-i*l*m)*A,e[4]=y*A,e[5]=(h*p*s-g*d*s+g*r*m-t*p*m-h*r*f+t*d*f)*A,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*f-t*l*f)*A,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*m+t*l*m)*A,e[8]=E*A,e[9]=(g*u*s-h*_*s-g*i*m+t*_*m+h*i*f-t*u*f)*A,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*f+t*o*f)*A,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*m-t*o*m)*A,e[12]=I*A,e[13]=(h*_*r-g*u*r+g*i*d-t*_*d-h*i*p+t*u*p)*A,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*p-t*o*p)*A,e[15]=(a*u*r-h*o*r+h*i*l-t*u*l-a*i*d+t*o*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,m=s*h,g=s*u,_=a*h,p=a*u,f=o*u,T=l*c,y=l*h,E=l*u,I=i.x,C=i.y,A=i.z;return r[0]=(1-(_+f))*I,r[1]=(m+E)*I,r[2]=(g-y)*I,r[3]=0,r[4]=(m-E)*C,r[5]=(1-(d+f))*C,r[6]=(p+T)*C,r[7]=0,r[8]=(g+y)*A,r[9]=(p-T)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=li.set(r[0],r[1],r[2]).length();const a=li.set(r[4],r[5],r[6]).length(),o=li.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);const c=1/s,h=1/a,u=1/o;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=h,qt.elements[5]*=h,qt.elements[6]*=h,qt.elements[8]*=u,qt.elements[9]*=u,qt.elements[10]*=u,t.setFromRotationMatrix(qt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Mn){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r);let m,g;if(o===Mn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===qr)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Mn){const l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(a-s),d=(t+e)*c,m=(i+r)*h;let g,_;if(o===Mn)g=(a+s)*u,_=-2*u;else if(o===qr)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const li=new U,qt=new ut,sh=new U(0,0,0),ah=new U(1,1,1),Pn=new U,or=new U,Ot=new U,Qa=new ut,eo=new ti;class Tn{constructor(e=0,t=0,i=0,r=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qa,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eo.setFromEuler(this),this.setFromQuaternion(eo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Ra{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oh=0;const to=new U,ci=new ti,pn=new ut,lr=new U,Bi=new U,lh=new U,ch=new ti,no=new U(1,0,0),io=new U(0,1,0),ro=new U(0,0,1),so={type:"added"},hh={type:"removed"},hi={type:"childadded",child:null},ps={type:"childremoved",child:null};class Ut extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new U,t=new Tn,i=new ti,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ne}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.multiply(ci),this}rotateOnWorldAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.premultiply(ci),this}rotateX(e){return this.rotateOnAxis(no,e)}rotateY(e){return this.rotateOnAxis(io,e)}rotateZ(e){return this.rotateOnAxis(ro,e)}translateOnAxis(e,t){return to.copy(e).applyQuaternion(this.quaternion),this.position.add(to.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(no,e)}translateY(e){return this.translateOnAxis(io,e)}translateZ(e){return this.translateOnAxis(ro,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?lr.copy(e):lr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Bi,lr,this.up):pn.lookAt(lr,Bi,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),ci.setFromRotationMatrix(pn),this.quaternion.premultiply(ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(so),hi.child=e,this.dispatchEvent(hi),hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hh),ps.child=e,this.dispatchEvent(ps),ps.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(so),hi.child=e,this.dispatchEvent(hi),hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,e,lh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,ch,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new U(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new U,mn=new U,ms=new U,gn=new U,ui=new U,di=new U,ao=new U,gs=new U,_s=new U,vs=new U;class Qt{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yt.subVectors(r,t),mn.subVectors(i,t),ms.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(mn),l=Yt.dot(ms),c=mn.dot(mn),h=mn.dot(ms),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,m=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gn.x),l.addScaledVector(a,gn.y),l.addScaledVector(o,gn.z),l)}static isFrontFacing(e,t,i,r){return Yt.subVectors(i,t),mn.subVectors(e,t),Yt.cross(mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Yt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ui.subVectors(r,i),di.subVectors(s,i),gs.subVectors(e,i);const l=ui.dot(gs),c=di.dot(gs);if(l<=0&&c<=0)return t.copy(i);_s.subVectors(e,r);const h=ui.dot(_s),u=di.dot(_s);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(ui,a);vs.subVectors(e,s);const m=ui.dot(vs),g=di.dot(vs);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(di,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return ao.subVectors(s,r),o=(u-h)/(u-h+(m-g)),t.copy(r).addScaledVector(ao,o);const f=1/(p+_+d);return a=_*f,o=d*f,t.copy(i).addScaledVector(ui,a).addScaledVector(di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function Ms(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=Ca(e,1),t=wt(t,0,1),i=wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ms(a,s,e+1/3),this.g=Ms(a,s,e),this.b=Ms(a,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=Ct){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const i=gl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Ke.fromWorkingColorSpace(At.copy(this),e),Math.round(wt(At.r*255,0,255))*65536+Math.round(wt(At.g*255,0,255))*256+Math.round(wt(At.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(At.copy(this),t);const i=At.r,r=At.g,s=At.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Ct){Ke.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,r=At.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(cr);const i=Vi(Rn.h,cr.h,t),r=Vi(Rn.s,cr.s,t),s=Vi(Rn.l,cr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Be;Be.NAMES=gl;let uh=0;class ji extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=Jn,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ns,this.blendDst=Fs,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(i.blending=this.blending),this.side!==Sn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ns&&(i.blendSrc=this.blendSrc),this.blendDst!==Fs&&(i.blendDst=this.blendDst),this.blendEquation!==$n&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class it extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=el,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new U,hr=new Ve;class zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Wi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qa&&(e.usage=this.usage),e}}class _l extends zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vl extends zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tn extends zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let dh=0;const Ht=new ut,Ss=new Ut,fi=new U,Bt=new Zi,zi=new Zi,yt=new U;class sn extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fl(e)?vl:_l)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return Ss.lookAt(e),Ss.updateMatrix(),this.applyMatrix4(Ss.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];zi.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Bt.min,zi.min),Bt.expandByPoint(yt),yt.addVectors(Bt.max,zi.max),Bt.expandByPoint(yt)):(Bt.expandByPoint(zi.min),Bt.expandByPoint(zi.max))}Bt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)yt.fromBufferAttribute(o,c),l&&(fi.fromBufferAttribute(e,c),yt.add(fi)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<i.count;O++)o[O]=new U,l[O]=new U;const c=new U,h=new U,u=new U,d=new Ve,m=new Ve,g=new Ve,_=new U,p=new U;function f(O,b,S){c.fromBufferAttribute(i,O),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,S),d.fromBufferAttribute(s,O),m.fromBufferAttribute(s,b),g.fromBufferAttribute(s,S),h.sub(c),u.sub(c),m.sub(d),g.sub(d);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(R),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(R),o[O].add(_),o[b].add(_),o[S].add(_),l[O].add(p),l[b].add(p),l[S].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let O=0,b=T.length;O<b;++O){const S=T[O],R=S.start,G=S.count;for(let z=R,$=R+G;z<$;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new U,E=new U,I=new U,C=new U;function A(O){I.fromBufferAttribute(r,O),C.copy(I);const b=o[O];y.copy(b),y.sub(I.multiplyScalar(I.dot(b))).normalize(),E.crossVectors(C,b);const R=E.dot(l[O])<0?-1:1;a.setXYZW(O,y.x,y.y,y.z,R)}for(let O=0,b=T.length;O<b;++O){const S=T[O],R=S.start,G=S.count;for(let z=R,$=R+G;z<$;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new zt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oo=new ut,Gn=new Pa,ur=new jr,lo=new U,pi=new U,mi=new U,gi=new U,ys=new U,dr=new U,fr=new Ve,pr=new Ve,mr=new Ve,co=new U,ho=new U,uo=new U,gr=new U,_r=new U;class Ge extends Ut{constructor(e=new sn,t=new it){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){dr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(ys.fromBufferAttribute(u,e),a?dr.addScaledVector(ys,h):dr.addScaledVector(ys.sub(t),h))}t.add(dr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere),ur.applyMatrix4(s),Gn.copy(e.ray).recast(e.near),!(ur.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(ur,lo)===null||Gn.origin.distanceToSquared(lo)>(e.far-e.near)**2))&&(oo.copy(s).invert(),Gn.copy(e.ray).applyMatrix4(oo),!(i.boundingBox!==null&&Gn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],T=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=T,I=y;E<I;E+=3){const C=o.getX(E),A=o.getX(E+1),O=o.getX(E+2);r=vr(this,f,e,i,c,h,u,C,A,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const T=o.getX(p),y=o.getX(p+1),E=o.getX(p+2);r=vr(this,a,e,i,c,h,u,T,y,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],T=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=T,I=y;E<I;E+=3){const C=E,A=E+1,O=E+2;r=vr(this,f,e,i,c,h,u,C,A,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const T=p,y=p+1,E=p+2;r=vr(this,a,e,i,c,h,u,T,y,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function fh(n,e,t,i,r,s,a,o){let l;if(e.side===Dt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Sn,o),l===null)return null;_r.copy(o),_r.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(_r);return c<t.near||c>t.far?null:{distance:c,point:_r.clone(),object:n}}function vr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,pi),n.getVertexPosition(l,mi),n.getVertexPosition(c,gi);const h=fh(n,e,t,i,pi,mi,gi,gr);if(h){r&&(fr.fromBufferAttribute(r,o),pr.fromBufferAttribute(r,l),mr.fromBufferAttribute(r,c),h.uv=Qt.getInterpolation(gr,pi,mi,gi,fr,pr,mr,new Ve)),s&&(fr.fromBufferAttribute(s,o),pr.fromBufferAttribute(s,l),mr.fromBufferAttribute(s,c),h.uv1=Qt.getInterpolation(gr,pi,mi,gi,fr,pr,mr,new Ve)),a&&(co.fromBufferAttribute(a,o),ho.fromBufferAttribute(a,l),uo.fromBufferAttribute(a,c),h.normal=Qt.getInterpolation(gr,pi,mi,gi,co,ho,uo,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new U,materialIndex:0};Qt.getNormal(pi,mi,gi,u.normal),h.face=u}return h}class Ji extends sn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(h,3)),this.setAttribute("uv",new tn(u,2));function g(_,p,f,T,y,E,I,C,A,O,b){const S=E/A,R=I/O,G=E/2,z=I/2,$=C/2,Y=A+1,W=O+1;let j=0,H=0;const le=new U;for(let de=0;de<W;de++){const _e=de*R-z;for(let ze=0;ze<Y;ze++){const Je=ze*S-G;le[_]=Je*T,le[p]=_e*y,le[f]=$,c.push(le.x,le.y,le.z),le[_]=0,le[p]=0,le[f]=C>0?1:-1,h.push(le.x,le.y,le.z),u.push(ze/A),u.push(1-de/O),j+=1}}for(let de=0;de<O;de++)for(let _e=0;_e<A;_e++){const ze=d+_e+Y*de,Je=d+_e+Y*(de+1),V=d+(_e+1)+Y*(de+1),Q=d+(_e+1)+Y*de;l.push(ze,Je,Q),l.push(Je,V,Q),H+=6}o.addGroup(m,H,b),m+=H,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ri(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Rt(n){const e={};for(let t=0;t<n.length;t++){const i=Ri(n[t]);for(const r in i)e[r]=i[r]}return e}function ph(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ml(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const mh={clone:Ri,merge:Rt};var gh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gh,this.fragmentShader=_h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=ph(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sl extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new U,fo=new Ve,po=new Ve;class Gt extends Sl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(Gi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,fo,po),t.subVectors(po,fo)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gi*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=-90,vi=1;class vh extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gt(_i,vi,e,t);r.layers=this.layers,this.add(r);const s=new Gt(_i,vi,e,t);s.layers=this.layers,this.add(s);const a=new Gt(_i,vi,e,t);a.layers=this.layers,this.add(a);const o=new Gt(_i,vi,e,t);o.layers=this.layers,this.add(o);const l=new Gt(_i,vi,e,t);l.layers=this.layers,this.add(l);const c=new Gt(_i,vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Mn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class yl extends It{constructor(e,t,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:xi,super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mh extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new yl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ji(5,5,5),s=new Fn({name:"CubemapFromEquirect",uniforms:Ri(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:Un});s.uniforms.tEquirect.value=t;const a=new Ge(r,s),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=$t),new vh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Ts=new U,Sh=new U,yh=new Ne;class qn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ts.subVectors(i,t).cross(Sh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ts),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yh.getNormalMatrix(e),r=this.coplanarPoint(Ts).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new jr,Mr=new U;class Tl{constructor(e=new qn,t=new qn,i=new qn,r=new qn,s=new qn,a=new qn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],m=r[8],g=r[9],_=r[10],p=r[11],f=r[12],T=r[13],y=r[14],E=r[15];if(i[0].setComponents(l-s,d-c,p-m,E-f).normalize(),i[1].setComponents(l+s,d+c,p+m,E+f).normalize(),i[2].setComponents(l+a,d+h,p+g,E+T).normalize(),i[3].setComponents(l-a,d-h,p-g,E-T).normalize(),i[4].setComponents(l-o,d-u,p-_,E-y).normalize(),t===Mn)i[5].setComponents(l+o,d+u,p+_,E+y).normalize();else if(t===qr)i[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Mr.x=r.normal.x>0?e.max.x:e.min.x,Mr.y=r.normal.y>0?e.max.y:e.min.y,Mr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bl(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Th(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,o),u.count===-1&&d.length===0&&n.bufferSubData(c,0,h),d.length!==0){for(let m=0,g=d.length;m<g;m++){const _=d[m];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(n.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class et extends sn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const T=f*d-a;for(let y=0;y<c;y++){const E=y*u-s;g.push(E,-T,0),_.push(0,0,1),p.push(y/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const y=T+c*f,E=T+c*(f+1),I=T+1+c*(f+1),C=T+1+c*f;m.push(y,E,C),m.push(E,I,C)}this.setIndex(m),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(_,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new et(e.width,e.height,e.widthSegments,e.heightSegments)}}var bh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eh=`#ifdef USE_ALPHAHASH
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
#endif`,xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ch=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ph=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rh=`#ifdef USE_AOMAP
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
#endif`,wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lh=`#ifdef USE_BATCHING
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
#endif`,Ih=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fh=`#ifdef USE_IRIDESCENCE
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
#endif`,Oh=`#ifdef USE_BUMPMAP
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
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qh=`#define PI 3.141592653589793
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
} // validated`,Yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$h=`vec3 transformedNormal = objectNormal;
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
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",eu=`
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
}`,tu=`#ifdef USE_ENVMAP
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
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iu=`#ifdef USE_ENVMAP
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
#endif`,ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,su=`#ifdef USE_ENVMAP
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
#endif`,au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ou=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hu=`#ifdef USE_GRADIENTMAP
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
}`,uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pu=`uniform bool receiveShadow;
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
#endif`,mu=`#ifdef USE_ENVMAP
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
#endif`,gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Su=`PhysicalMaterial material;
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
#endif`,yu=`struct PhysicalMaterial {
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
}`,Tu=`
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
#endif`,bu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Au=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iu=`#if defined( USE_POINTS_UV )
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
#endif`,Du=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ou=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bu=`#ifdef USE_MORPHTARGETS
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
#endif`,zu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xu=`#ifdef USE_NORMALMAP
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
#endif`,qu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$u=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ku=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ju=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ju=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,id=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ad=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,od=`float getShadowMask() {
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
}`,ld=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cd=`#ifdef USE_SKINNING
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
#endif`,hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ud=`#ifdef USE_SKINNING
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
#endif`,dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,md=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gd=`#ifdef USE_TRANSMISSION
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
#endif`,_d=`#ifdef USE_TRANSMISSION
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
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Td=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bd=`uniform sampler2D t2D;
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
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pd=`#include <common>
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
}`,Rd=`#if DEPTH_PACKING == 3200
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
}`,wd=`#define DISTANCE
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
}`,Ld=`#define DISTANCE
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
}`,Id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ud=`uniform float scale;
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
}`,Nd=`uniform vec3 diffuse;
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
}`,Fd=`#include <common>
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
}`,Od=`uniform vec3 diffuse;
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
}`,Bd=`#define LAMBERT
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
}`,zd=`#define LAMBERT
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
}`,kd=`#define MATCAP
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
}`,Hd=`#define MATCAP
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
}`,Gd=`#define NORMAL
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
}`,Vd=`#define NORMAL
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
}`,Wd=`#define PHONG
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
}`,Xd=`#define PHONG
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
}`,qd=`#define STANDARD
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
}`,Yd=`#define STANDARD
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
}`,$d=`#define TOON
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
}`,Kd=`#define TOON
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
}`,Zd=`uniform float size;
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
}`,jd=`uniform vec3 diffuse;
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
}`,Jd=`#include <common>
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
}`,Qd=`uniform vec3 color;
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
}`,ef=`uniform float rotation;
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
}`,tf=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:bh,alphahash_pars_fragment:Eh,alphamap_fragment:xh,alphamap_pars_fragment:Ah,alphatest_fragment:Ch,alphatest_pars_fragment:Ph,aomap_fragment:Rh,aomap_pars_fragment:wh,batching_pars_vertex:Lh,batching_vertex:Ih,begin_vertex:Dh,beginnormal_vertex:Uh,bsdfs:Nh,iridescence_fragment:Fh,bumpmap_pars_fragment:Oh,clipping_planes_fragment:Bh,clipping_planes_pars_fragment:zh,clipping_planes_pars_vertex:kh,clipping_planes_vertex:Hh,color_fragment:Gh,color_pars_fragment:Vh,color_pars_vertex:Wh,color_vertex:Xh,common:qh,cube_uv_reflection_fragment:Yh,defaultnormal_vertex:$h,displacementmap_pars_vertex:Kh,displacementmap_vertex:Zh,emissivemap_fragment:jh,emissivemap_pars_fragment:Jh,colorspace_fragment:Qh,colorspace_pars_fragment:eu,envmap_fragment:tu,envmap_common_pars_fragment:nu,envmap_pars_fragment:iu,envmap_pars_vertex:ru,envmap_physical_pars_fragment:mu,envmap_vertex:su,fog_vertex:au,fog_pars_vertex:ou,fog_fragment:lu,fog_pars_fragment:cu,gradientmap_pars_fragment:hu,lightmap_pars_fragment:uu,lights_lambert_fragment:du,lights_lambert_pars_fragment:fu,lights_pars_begin:pu,lights_toon_fragment:gu,lights_toon_pars_fragment:_u,lights_phong_fragment:vu,lights_phong_pars_fragment:Mu,lights_physical_fragment:Su,lights_physical_pars_fragment:yu,lights_fragment_begin:Tu,lights_fragment_maps:bu,lights_fragment_end:Eu,logdepthbuf_fragment:xu,logdepthbuf_pars_fragment:Au,logdepthbuf_pars_vertex:Cu,logdepthbuf_vertex:Pu,map_fragment:Ru,map_pars_fragment:wu,map_particle_fragment:Lu,map_particle_pars_fragment:Iu,metalnessmap_fragment:Du,metalnessmap_pars_fragment:Uu,morphinstance_vertex:Nu,morphcolor_vertex:Fu,morphnormal_vertex:Ou,morphtarget_pars_vertex:Bu,morphtarget_vertex:zu,normal_fragment_begin:ku,normal_fragment_maps:Hu,normal_pars_fragment:Gu,normal_pars_vertex:Vu,normal_vertex:Wu,normalmap_pars_fragment:Xu,clearcoat_normal_fragment_begin:qu,clearcoat_normal_fragment_maps:Yu,clearcoat_pars_fragment:$u,iridescence_pars_fragment:Ku,opaque_fragment:Zu,packing:ju,premultiplied_alpha_fragment:Ju,project_vertex:Qu,dithering_fragment:ed,dithering_pars_fragment:td,roughnessmap_fragment:nd,roughnessmap_pars_fragment:id,shadowmap_pars_fragment:rd,shadowmap_pars_vertex:sd,shadowmap_vertex:ad,shadowmask_pars_fragment:od,skinbase_vertex:ld,skinning_pars_vertex:cd,skinning_vertex:hd,skinnormal_vertex:ud,specularmap_fragment:dd,specularmap_pars_fragment:fd,tonemapping_fragment:pd,tonemapping_pars_fragment:md,transmission_fragment:gd,transmission_pars_fragment:_d,uv_pars_fragment:vd,uv_pars_vertex:Md,uv_vertex:Sd,worldpos_vertex:yd,background_vert:Td,background_frag:bd,backgroundCube_vert:Ed,backgroundCube_frag:xd,cube_vert:Ad,cube_frag:Cd,depth_vert:Pd,depth_frag:Rd,distanceRGBA_vert:wd,distanceRGBA_frag:Ld,equirect_vert:Id,equirect_frag:Dd,linedashed_vert:Ud,linedashed_frag:Nd,meshbasic_vert:Fd,meshbasic_frag:Od,meshlambert_vert:Bd,meshlambert_frag:zd,meshmatcap_vert:kd,meshmatcap_frag:Hd,meshnormal_vert:Gd,meshnormal_frag:Vd,meshphong_vert:Wd,meshphong_frag:Xd,meshphysical_vert:qd,meshphysical_frag:Yd,meshtoon_vert:$d,meshtoon_frag:Kd,points_vert:Zd,points_frag:jd,shadow_vert:Jd,shadow_frag:Qd,sprite_vert:ef,sprite_frag:tf},se={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Jt={basic:{uniforms:Rt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Rt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Rt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Rt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Rt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Rt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Rt([se.points,se.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Rt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Rt([se.common,se.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Rt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Rt([se.sprite,se.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Rt([se.common,se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Rt([se.lights,se.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Jt.physical={uniforms:Rt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Sr={r:0,b:0,g:0},Wn=new Tn,nf=new ut;function rf(n,e,t,i,r,s,a){const o=new Be(0);let l=s===!0?0:1,c,h,u=null,d=0,m=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function _(T){let y=!1;const E=g(T);E===null?f(o,l):E&&E.isColor&&(f(E,1),y=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(T,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===Kr)?(h===void 0&&(h=new Ge(new Ji(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Ri(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Wn.copy(y.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(nf.makeRotationFromEuler(Wn)),h.material.toneMapped=Ke.getTransfer(E.colorSpace)!==tt,(u!==E||d!==E.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,m=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ge(new et(2,2),new Fn({name:"BackgroundMaterial",uniforms:Ri(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(E.colorSpace)!==tt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,m=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,y){T.getRGB(Sr,Ml(n)),i.buffers.color.setClear(Sr.r,Sr.g,Sr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(o,l)},render:_,addToRenderList:p}}function sf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(S,R,G,z,$){let Y=!1;const W=u(z,G,R);s!==W&&(s=W,c(s.object)),Y=m(S,z,G,$),Y&&g(S,z,G,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,E(S,R,G,z),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function u(S,R,G){const z=G.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let Y=$[R.id];Y===void 0&&(Y={},$[R.id]=Y);let W=Y[z];return W===void 0&&(W=d(l()),Y[z]=W),W}function d(S){const R=[],G=[],z=[];for(let $=0;$<t;$++)R[$]=0,G[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:G,attributeDivisors:z,object:S,attributes:{},index:null}}function m(S,R,G,z){const $=s.attributes,Y=R.attributes;let W=0;const j=G.getAttributes();for(const H in j)if(j[H].location>=0){const de=$[H];let _e=Y[H];if(_e===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor)),de===void 0||de.attribute!==_e||_e&&de.data!==_e.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function g(S,R,G,z){const $={},Y=R.attributes;let W=0;const j=G.getAttributes();for(const H in j)if(j[H].location>=0){let de=Y[H];de===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));const _e={};_e.attribute=de,de&&de.data&&(_e.data=de.data),$[H]=_e,W++}s.attributes=$,s.attributesNum=W,s.index=z}function _(){const S=s.newAttributes;for(let R=0,G=S.length;R<G;R++)S[R]=0}function p(S){f(S,0)}function f(S,R){const G=s.newAttributes,z=s.enabledAttributes,$=s.attributeDivisors;G[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),$[S]!==R&&(n.vertexAttribDivisor(S,R),$[S]=R)}function T(){const S=s.newAttributes,R=s.enabledAttributes;for(let G=0,z=R.length;G<z;G++)R[G]!==S[G]&&(n.disableVertexAttribArray(G),R[G]=0)}function y(S,R,G,z,$,Y,W){W===!0?n.vertexAttribIPointer(S,R,G,$,Y):n.vertexAttribPointer(S,R,G,z,$,Y)}function E(S,R,G,z){_();const $=z.attributes,Y=G.getAttributes(),W=R.defaultAttributeValues;for(const j in Y){const H=Y[j];if(H.location>=0){let le=$[j];if(le===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),le!==void 0){const de=le.normalized,_e=le.itemSize,ze=e.get(le);if(ze===void 0)continue;const Je=ze.buffer,V=ze.type,Q=ze.bytesPerElement,ge=V===n.INT||V===n.UNSIGNED_INT||le.gpuType===Sa;if(le.isInterleavedBufferAttribute){const he=le.data,Ae=he.stride,Le=le.offset;if(he.isInstancedInterleavedBuffer){for(let Oe=0;Oe<H.locationSize;Oe++)f(H.location+Oe,he.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)p(H.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let Oe=0;Oe<H.locationSize;Oe++)y(H.location+Oe,_e/H.locationSize,V,de,Ae*Q,(Le+_e/H.locationSize*Oe)*Q,ge)}else{if(le.isInstancedBufferAttribute){for(let he=0;he<H.locationSize;he++)f(H.location+he,le.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let he=0;he<H.locationSize;he++)p(H.location+he);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let he=0;he<H.locationSize;he++)y(H.location+he,_e/H.locationSize,V,de,_e*Q,_e/H.locationSize*he*Q,ge)}}else if(W!==void 0){const de=W[j];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(H.location,de);break;case 3:n.vertexAttrib3fv(H.location,de);break;case 4:n.vertexAttrib4fv(H.location,de);break;default:n.vertexAttrib1fv(H.location,de)}}}}T()}function I(){O();for(const S in i){const R=i[S];for(const G in R){const z=R[G];for(const $ in z)h(z[$].object),delete z[$];delete R[G]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const G in R){const z=R[G];for(const $ in z)h(z[$].object),delete z[$];delete R[G]}delete i[S.id]}function A(S){for(const R in i){const G=i[R];if(G[S.id]===void 0)continue;const z=G[S.id];for(const $ in z)h(z[$].object),delete z[$];delete G[S.id]}}function O(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:T}}function af(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,i,1)}function l(c,h,u,d){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)t.update(g,i,d[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function of(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Kt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const A=C===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==yn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==vn&&!A)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:f,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:E,maxSamples:I}}function lf(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new qn,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||i!==0||r;return r=d,i=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{const T=s?0:i,y=T*4;let E=f.clippingState||null;l.value=E,E=h(g,d,y,m);for(let I=0;I!==y;++I)E[I]=t[I];f.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,E=m;y!==_;++y,E+=4)a.copy(u[y]).applyMatrix4(T,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function cf(n){let e=new WeakMap;function t(a,o){return o===Os?a.mapping=xi:o===Bs&&(a.mapping=Ai),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Os||o===Bs)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Mh(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class hf extends Sl{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ti=4,mo=[.125,.215,.35,.446,.526,.582],Kn=20,bs=new hf,go=new Be;let Es=null,xs=0,As=0,Cs=!1;const Yn=(1+Math.sqrt(5))/2,Mi=1/Yn,_o=[new U(-Yn,Mi,0),new U(Yn,Mi,0),new U(-Mi,0,Yn),new U(Mi,0,Yn),new U(0,Yn,-Mi),new U(0,Yn,Mi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class vo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Es=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),As=this._renderer.getActiveMipmapLevel(),Cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=So(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Es,xs,As),this._renderer.xr.enabled=Cs,e.scissorTest=!1,yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===Ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Es=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),As=this._renderer.getActiveMipmapLevel(),Cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Ki,format:Kt,colorSpace:Bn,depthBuffer:!1},r=Mo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mo(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uf(s)),this._blurMaterial=df(s,e,t)}return r}_compileMaterial(e){const t=new Ge(this._lodPlanes[0],e);this._renderer.compile(t,bs)}_sceneToCubeUV(e,t,i,r){const o=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(go),h.toneMapping=Nn,h.autoClear=!1;const m=new it({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new Ge(new Ji,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(go),_=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):T===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const y=this._cubeSize;yr(r,T*y,f>2?y:0,y,y),h.setRenderTarget(r),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===xi||e.mapping===Ai;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=So());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ge(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;yr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,bs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_o[(r-s-1)%_o.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ge(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Kn-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):Kn;p>Kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Kn}`);const f=[];let T=0;for(let A=0;A<Kn;++A){const O=A/_,b=Math.exp(-O*O/2);f.push(b),A===0?T+=b:A<p&&(T+=2*b)}for(let A=0;A<f.length;A++)f[A]=f[A]/T;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const E=this._sizeLods[r],I=3*E*(r>y-Ti?r-y+Ti:0),C=4*(this._cubeSize-E);yr(t,I,C,3*E,2*E),l.setRenderTarget(t),l.render(u,bs)}}function uf(n){const e=[],t=[],i=[];let r=n;const s=n-Ti+1+mo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Ti?l=mo[a-n+Ti-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,f=1,T=new Float32Array(_*g*m),y=new Float32Array(p*g*m),E=new Float32Array(f*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,O=C>2?0:-1,b=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];T.set(b,_*g*C),y.set(d,p*g*C);const S=[C,C,C,C,C,C];E.set(S,f*g*C)}const I=new sn;I.setAttribute("position",new zt(T,_)),I.setAttribute("uv",new zt(y,p)),I.setAttribute("faceIndex",new zt(E,f)),e.push(I),r>Ti&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Mo(n,e,t){const i=new ei(n,e,t);return i.texture.mapping=Kr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function df(n,e,t){const i=new Float32Array(Kn),r=new U(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function So(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function yo(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function wa(){return`

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
	`}function ff(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Os||l===Bs,h=l===xi||l===Ai;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new vo(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new vo(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function pf(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Wi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mf(n,e,t,i){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const T=m.array;_=m.version;for(let y=0,E=T.length;y<E;y+=3){const I=T[y+0],C=T[y+1],A=T[y+2];d.push(I,C,C,A,A,I)}}else if(g!==void 0){const T=g.array;_=g.version;for(let y=0,E=T.length/3-1;y<E;y+=3){const I=y+0,C=y+1,A=y+2;d.push(I,C,C,A,A,I)}}else return;const p=new(fl(d)?vl:_l)(d,1);p.version=_;const f=s.get(u);f&&e.remove(f),s.set(u,p)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function gf(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){n.drawElements(i,m,s,d*a),t.update(m,i,1)}function c(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,d*a,g),t.update(m,i,g))}function h(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,i,1)}function u(d,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/a,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,_,0,g);let f=0;for(let T=0;T<g;T++)f+=m[T];for(let T=0;T<_.length;T++)t.update(f,i,_[T])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function _f(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vf(n,e,t){const i=new WeakMap,r=new Tt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let S=function(){O.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var m=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),p===!0&&(E=3);let I=o.attributes.position.count*E,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const A=new Float32Array(I*C*4*u),O=new ml(A,I,C,u);O.type=vn,O.needsUpdate=!0;const b=E*4;for(let R=0;R<u;R++){const G=f[R],z=T[R],$=y[R],Y=I*C*4*R;for(let W=0;W<G.count;W++){const j=W*b;g===!0&&(r.fromBufferAttribute(G,W),A[Y+j+0]=r.x,A[Y+j+1]=r.y,A[Y+j+2]=r.z,A[Y+j+3]=0),_===!0&&(r.fromBufferAttribute(z,W),A[Y+j+4]=r.x,A[Y+j+5]=r.y,A[Y+j+6]=r.z,A[Y+j+7]=0),p===!0&&(r.fromBufferAttribute($,W),A[Y+j+8]=r.x,A[Y+j+9]=r.y,A[Y+j+10]=r.z,A[Y+j+11]=$.itemSize===4?r.w:1)}}d={count:u,texture:O,size:new Ve(I,C)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Mf(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class El extends It{constructor(e,t,i,r,s,a,o,l,c,h=bi){if(h!==bi&&h!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===bi&&(i=Qn),i===void 0&&h===Pi&&(i=Ci),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const xl=new It,To=new El(1,1),Al=new ml,Cl=new ih,Pl=new yl,bo=[],Eo=[],xo=new Float32Array(16),Ao=new Float32Array(9),Co=new Float32Array(4);function Ii(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=bo[r];if(s===void 0&&(s=new Float32Array(r),bo[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Jr(n,e){let t=Eo[e];t===void 0&&(t=new Int32Array(e),Eo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Sf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function Tf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function bf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function Ef(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Co.set(i),n.uniformMatrix2fv(this.addr,!1,Co),St(t,i)}}function xf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Ao.set(i),n.uniformMatrix3fv(this.addr,!1,Ao),St(t,i)}}function Af(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;xo.set(i),n.uniformMatrix4fv(this.addr,!1,xo),St(t,i)}}function Cf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Pf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function Rf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function wf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function Lf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function If(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function Df(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function Uf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function Nf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(To.compareFunction=dl,s=To):s=xl,t.setTexture2D(e||s,r)}function Ff(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Cl,r)}function Of(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Pl,r)}function Bf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Al,r)}function zf(n){switch(n){case 5126:return Sf;case 35664:return yf;case 35665:return Tf;case 35666:return bf;case 35674:return Ef;case 35675:return xf;case 35676:return Af;case 5124:case 35670:return Cf;case 35667:case 35671:return Pf;case 35668:case 35672:return Rf;case 35669:case 35673:return wf;case 5125:return Lf;case 36294:return If;case 36295:return Df;case 36296:return Uf;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return Ff;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return Bf}}function kf(n,e){n.uniform1fv(this.addr,e)}function Hf(n,e){const t=Ii(e,this.size,2);n.uniform2fv(this.addr,t)}function Gf(n,e){const t=Ii(e,this.size,3);n.uniform3fv(this.addr,t)}function Vf(n,e){const t=Ii(e,this.size,4);n.uniform4fv(this.addr,t)}function Wf(n,e){const t=Ii(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Xf(n,e){const t=Ii(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qf(n,e){const t=Ii(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Yf(n,e){n.uniform1iv(this.addr,e)}function $f(n,e){n.uniform2iv(this.addr,e)}function Kf(n,e){n.uniform3iv(this.addr,e)}function Zf(n,e){n.uniform4iv(this.addr,e)}function jf(n,e){n.uniform1uiv(this.addr,e)}function Jf(n,e){n.uniform2uiv(this.addr,e)}function Qf(n,e){n.uniform3uiv(this.addr,e)}function ep(n,e){n.uniform4uiv(this.addr,e)}function tp(n,e,t){const i=this.cache,r=e.length,s=Jr(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||xl,s[a])}function np(n,e,t){const i=this.cache,r=e.length,s=Jr(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Cl,s[a])}function ip(n,e,t){const i=this.cache,r=e.length,s=Jr(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Pl,s[a])}function rp(n,e,t){const i=this.cache,r=e.length,s=Jr(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Al,s[a])}function sp(n){switch(n){case 5126:return kf;case 35664:return Hf;case 35665:return Gf;case 35666:return Vf;case 35674:return Wf;case 35675:return Xf;case 35676:return qf;case 5124:case 35670:return Yf;case 35667:case 35671:return $f;case 35668:case 35672:return Kf;case 35669:case 35673:return Zf;case 5125:return jf;case 36294:return Jf;case 36295:return Qf;case 36296:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return tp;case 35679:case 36299:case 36307:return np;case 35680:case 36300:case 36308:case 36293:return ip;case 36289:case 36303:case 36311:case 36292:return rp}}class ap{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zf(t.type)}}class op{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sp(t.type)}}class lp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ps=/(\w+)(\])?(\[|\.)?/g;function Po(n,e){n.seq.push(e),n.map[e.id]=e}function cp(n,e,t){const i=n.name,r=i.length;for(Ps.lastIndex=0;;){const s=Ps.exec(i),a=Ps.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Po(t,c===void 0?new ap(o,n,e):new op(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new lp(o),Po(t,u)),t=u}}}class Br{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);cp(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ro(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const hp=37297;let up=0;function dp(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function fp(n){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(n);let i;switch(e===t?i="":e===Xr&&t===Wr?i="LinearDisplayP3ToLinearSRGB":e===Wr&&t===Xr&&(i="LinearSRGBToLinearDisplayP3"),n){case Bn:case Zr:return[i,"LinearTransferOETF"];case Ct:case Aa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function wo(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+dp(n.getShaderSource(e),a)}else return r}function pp(n,e){const t=fp(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function mp(n,e){let t;switch(e){case pc:t="Linear";break;case mc:t="Reinhard";break;case gc:t="Cineon";break;case _c:t="ACESFilmic";break;case Mc:t="AgX";break;case Sc:t="Neutral";break;case vc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tr=new U;function gp(){Ke.getLuminanceCoefficients(Tr);const n=Tr.x.toFixed(4),e=Tr.y.toFixed(4),t=Tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _p(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function vp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Mp(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Hi(n){return n!==""}function Lo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Io(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sp=/^[ \t]*#include +<([\w\d./]+)>/gm;function da(n){return n.replace(Sp,Tp)}const yp=new Map;function Tp(n,e){let t=Ue[e];if(t===void 0){const i=yp.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return da(t)}const bp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Do(n){return n.replace(bp,Ep)}function Ep(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Uo(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function xp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Qo?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===kl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function Ap(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xi:case Ai:e="ENVMAP_TYPE_CUBE";break;case Kr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ai:e="ENVMAP_MODE_REFRACTION";break}return e}function Pp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case el:e="ENVMAP_BLENDING_MULTIPLY";break;case dc:e="ENVMAP_BLENDING_MIX";break;case fc:e="ENVMAP_BLENDING_ADD";break}return e}function Rp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function wp(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=xp(t),c=Ap(t),h=Cp(t),u=Pp(t),d=Rp(t),m=_p(t),g=vp(s),_=r.createProgram();let p,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hi).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hi).join(`
`),f.length>0&&(f+=`
`)):(p=[Uo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),f=[Uo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Nn?mp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,pp("linearToOutputTexel",t.outputColorSpace),gp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hi).join(`
`)),a=da(a),a=Lo(a,t),a=Io(a,t),o=da(o),o=Lo(o,t),o=Io(o,t),a=Do(a),o=Do(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=T+p+a,E=T+f+o,I=Ro(r,r.VERTEX_SHADER,y),C=Ro(r,r.FRAGMENT_SHADER,E);r.attachShader(_,I),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(R){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(I).trim(),$=r.getShaderInfoLog(C).trim();let Y=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,I,C);else{const j=wo(r,I,"vertex"),H=wo(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+j+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||$==="")&&(W=!1);W&&(R.diagnostics={runnable:Y,programLog:G,vertexShader:{log:z,prefix:p},fragmentShader:{log:$,prefix:f}})}r.deleteShader(I),r.deleteShader(C),O=new Br(r,_),b=Mp(r,_)}let O;this.getUniforms=function(){return O===void 0&&A(this),O};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,hp)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=up++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=C,this}let Lp=0;class Ip{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Dp(e),t.set(e,i)),i}}class Dp{constructor(e){this.id=Lp++,this.code=e,this.usedTimes=0}}function Up(n,e,t,i,r,s,a){const o=new Ra,l=new Ip,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,S,R,G,z){const $=G.fog,Y=z.geometry,W=b.isMeshStandardMaterial?G.environment:null,j=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),H=j&&j.mapping===Kr?j.image.height:null,le=g[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const de=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_e=de!==void 0?de.length:0;let ze=0;Y.morphAttributes.position!==void 0&&(ze=1),Y.morphAttributes.normal!==void 0&&(ze=2),Y.morphAttributes.color!==void 0&&(ze=3);let Je,V,Q,ge;if(le){const Xe=Jt[le];Je=Xe.vertexShader,V=Xe.fragmentShader}else Je=b.vertexShader,V=b.fragmentShader,l.update(b),Q=l.getVertexShaderID(b),ge=l.getFragmentShaderID(b);const he=n.getRenderTarget(),Ae=z.isInstancedMesh===!0,Le=z.isBatchedMesh===!0,Oe=!!b.map,at=!!b.matcap,P=!!j,ft=!!b.aoMap,je=!!b.lightMap,Qe=!!b.bumpMap,ye=!!b.normalMap,pt=!!b.displacementMap,Re=!!b.emissiveMap,Ie=!!b.metalnessMap,x=!!b.roughnessMap,v=b.anisotropy>0,B=b.clearcoat>0,K=b.dispersion>0,J=b.iridescence>0,Z=b.sheen>0,Te=b.transmission>0,ae=v&&!!b.anisotropyMap,ue=B&&!!b.clearcoatMap,De=B&&!!b.clearcoatNormalMap,ee=B&&!!b.clearcoatRoughnessMap,ce=J&&!!b.iridescenceMap,ke=J&&!!b.iridescenceThicknessMap,Pe=Z&&!!b.sheenColorMap,fe=Z&&!!b.sheenRoughnessMap,we=!!b.specularMap,Fe=!!b.specularColorMap,rt=!!b.specularIntensityMap,w=Te&&!!b.transmissionMap,te=Te&&!!b.thicknessMap,X=!!b.gradientMap,q=!!b.alphaMap,re=b.alphaTest>0,Ee=!!b.alphaHash,He=!!b.extensions;let mt=Nn;b.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(mt=n.toneMapping);const bt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:Je,fragmentShader:V,defines:b.defines,customVertexShaderID:Q,customFragmentShaderID:ge,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Le,batchingColor:Le&&z._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&z.instanceColor!==null,instancingMorph:Ae&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Bn,alphaToCoverage:!!b.alphaToCoverage,map:Oe,matcap:at,envMap:P,envMapMode:P&&j.mapping,envMapCubeUVHeight:H,aoMap:ft,lightMap:je,bumpMap:Qe,normalMap:ye,displacementMap:d&&pt,emissiveMap:Re,normalMapObjectSpace:ye&&b.normalMapType===xc,normalMapTangentSpace:ye&&b.normalMapType===Ec,metalnessMap:Ie,roughnessMap:x,anisotropy:v,anisotropyMap:ae,clearcoat:B,clearcoatMap:ue,clearcoatNormalMap:De,clearcoatRoughnessMap:ee,dispersion:K,iridescence:J,iridescenceMap:ce,iridescenceThicknessMap:ke,sheen:Z,sheenColorMap:Pe,sheenRoughnessMap:fe,specularMap:we,specularColorMap:Fe,specularIntensityMap:rt,transmission:Te,transmissionMap:w,thicknessMap:te,gradientMap:X,opaque:b.transparent===!1&&b.blending===Jn&&b.alphaToCoverage===!1,alphaMap:q,alphaTest:re,alphaHash:Ee,combine:b.combine,mapUv:Oe&&_(b.map.channel),aoMapUv:ft&&_(b.aoMap.channel),lightMapUv:je&&_(b.lightMap.channel),bumpMapUv:Qe&&_(b.bumpMap.channel),normalMapUv:ye&&_(b.normalMap.channel),displacementMapUv:pt&&_(b.displacementMap.channel),emissiveMapUv:Re&&_(b.emissiveMap.channel),metalnessMapUv:Ie&&_(b.metalnessMap.channel),roughnessMapUv:x&&_(b.roughnessMap.channel),anisotropyMapUv:ae&&_(b.anisotropyMap.channel),clearcoatMapUv:ue&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:De&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(b.sheenRoughnessMap.channel),specularMapUv:we&&_(b.specularMap.channel),specularColorMapUv:Fe&&_(b.specularColorMap.channel),specularIntensityMapUv:rt&&_(b.specularIntensityMap.channel),transmissionMapUv:w&&_(b.transmissionMap.channel),thicknessMapUv:te&&_(b.thicknessMap.channel),alphaMapUv:q&&_(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ye||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(Oe||q),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ze,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:Oe&&b.map.isVideoTexture===!0&&Ke.getTransfer(b.map.colorSpace)===tt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ze,flipSided:b.side===Dt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:He&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&b.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function f(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)S.push(R),S.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(T(S,b),y(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function T(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function y(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),b.push(o.mask)}function E(b){const S=g[b.type];let R;if(S){const G=Jt[S];R=mh.clone(G.uniforms)}else R=b.uniforms;return R}function I(b,S){let R;for(let G=0,z=h.length;G<z;G++){const $=h[G];if($.cacheKey===S){R=$,++R.usedTimes;break}}return R===void 0&&(R=new wp(n,S,b,s),h.push(R)),R}function C(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:E,acquireProgram:I,releaseProgram:C,releaseShaderCache:A,programs:h,dispose:O}}function Np(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Fp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function No(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fo(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,d,m,g,_,p){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),e++,f}function o(u,d,m,g,_,p){const f=a(u,d,m,g,_,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(u,d,m,g,_,p){const f=a(u,d,m,g,_,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Fp),i.length>1&&i.sort(d||No),r.length>1&&r.sort(d||No)}function h(){for(let u=e,d=n.length;u<d;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Op(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Fo,n.set(i,[a])):r>=s.length?(a=new Fo,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Bp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Be};break;case"SpotLight":t={position:new U,direction:new U,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function zp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let kp=0;function Hp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Gp(n){const e=new Bp,t=zp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new ut,a=new ut;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let m=0,g=0,_=0,p=0,f=0,T=0,y=0,E=0,I=0,C=0,A=0;c.sort(Hp);for(let b=0,S=c.length;b<S;b++){const R=c[b],G=R.color,z=R.intensity,$=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=G.r*z,u+=G.g*z,d+=G.b*z;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],z);A++}else if(R.isDirectionalLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,H=t.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=R.shadow.matrix,T++}i.directional[m]=W,m++}else if(R.isSpotLight){const W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(G).multiplyScalar(z),W.distance=$,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[_]=W;const j=R.shadow;if(R.map&&(i.spotLightMap[I]=R.map,I++,j.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[_]=j.matrix,R.castShadow){const H=t.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=Y,E++}_++}else if(R.isRectAreaLight){const W=e.get(R);W.color.copy(G).multiplyScalar(z),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=W,p++}else if(R.isPointLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const j=R.shadow,H=t.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=R.shadow.matrix,y++}i.point[g]=W,g++}else if(R.isHemisphereLight){const W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(z),W.groundColor.copy(R.groundColor).multiplyScalar(z),i.hemi[f]=W,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const O=i.hash;(O.directionalLength!==m||O.pointLength!==g||O.spotLength!==_||O.rectAreaLength!==p||O.hemiLength!==f||O.numDirectionalShadows!==T||O.numPointShadows!==y||O.numSpotShadows!==E||O.numSpotMaps!==I||O.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,O.directionalLength=m,O.pointLength=g,O.spotLength=_,O.rectAreaLength=p,O.hemiLength=f,O.numDirectionalShadows=T,O.numPointShadows=y,O.numSpotShadows=E,O.numSpotMaps=I,O.numLightProbes=A,i.version=kp++)}function l(c,h){let u=0,d=0,m=0,g=0,_=0;const p=h.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const y=c[f];if(y.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),u++}else if(y.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function Oo(n){const e=new Gp(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Vp(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Oo(n),e.set(r,[o])):s>=a.length?(o=new Oo(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Wp extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xp extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yp=`uniform sampler2D shadow_pass;
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
}`;function $p(n,e,t){let i=new Tl;const r=new Ve,s=new Ve,a=new Tt,o=new Wp({depthPacking:bc}),l=new Xp,c={},h=t.maxTextureSize,u={[Sn]:Dt,[Dt]:Sn,[Ze]:Ze},d=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:qp,fragmentShader:Yp}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ge(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo;let f=this.type;this.render=function(C,A,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Un),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=f!==_n&&this.type===_n,$=f===_n&&this.type!==_n;for(let Y=0,W=C.length;Y<W;Y++){const j=C[Y],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const le=H.getFrameExtents();if(r.multiply(le),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/le.x),r.x=s.x*le.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/le.y),r.y=s.y*le.y,H.mapSize.y=s.y)),H.map===null||z===!0||$===!0){const _e=this.type!==_n?{minFilter:Vt,magFilter:Vt}:{};H.map!==null&&H.map.dispose(),H.map=new ei(r.x,r.y,_e),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const de=H.getViewportCount();for(let _e=0;_e<de;_e++){const ze=H.getViewport(_e);a.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),G.viewport(a),H.updateMatrices(j,_e),i=H.getFrustum(),E(A,O,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===_n&&T(H,O),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(b,S,R)};function T(C,A){const O=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ei(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(A,null,O,d,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(A,null,O,m,_,null)}function y(C,A,O,b){let S=null;const R=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)S=R;else if(S=O.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=S.uuid,z=A.uuid;let $=c[G];$===void 0&&($={},c[G]=$);let Y=$[z];Y===void 0&&(Y=S.clone(),$[z]=Y,A.addEventListener("dispose",I)),S=Y}if(S.visible=A.visible,S.wireframe=A.wireframe,b===_n?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=n.properties.get(S);G.light=O}return S}function E(C,A,O,b,S){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===_n)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);const z=e.update(C),$=C.material;if(Array.isArray($)){const Y=z.groups;for(let W=0,j=Y.length;W<j;W++){const H=Y[W],le=$[H.materialIndex];if(le&&le.visible){const de=y(C,le,b,S);C.onBeforeShadow(n,C,A,O,z,de,H),n.renderBufferDirect(O,null,z,de,C,H),C.onAfterShadow(n,C,A,O,z,de,H)}}}else if($.visible){const Y=y(C,$,b,S);C.onBeforeShadow(n,C,A,O,z,Y,null),n.renderBufferDirect(O,null,z,Y,C,null),C.onAfterShadow(n,C,A,O,z,Y,null)}}const G=C.children;for(let z=0,$=G.length;z<$;z++)E(G[z],A,O,b,S)}function I(C){C.target.removeEventListener("dispose",I);for(const O in c){const b=c[O],S=C.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function Kp(n){function e(){let w=!1;const te=new Tt;let X=null;const q=new Tt(0,0,0,0);return{setMask:function(re){X!==re&&!w&&(n.colorMask(re,re,re,re),X=re)},setLocked:function(re){w=re},setClear:function(re,Ee,He,mt,bt){bt===!0&&(re*=mt,Ee*=mt,He*=mt),te.set(re,Ee,He,mt),q.equals(te)===!1&&(n.clearColor(re,Ee,He,mt),q.copy(te))},reset:function(){w=!1,X=null,q.set(-1,0,0,0)}}}function t(){let w=!1,te=null,X=null,q=null;return{setTest:function(re){re?ge(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(re){te!==re&&!w&&(n.depthMask(re),te=re)},setFunc:function(re){if(X!==re){switch(re){case sc:n.depthFunc(n.NEVER);break;case ac:n.depthFunc(n.ALWAYS);break;case oc:n.depthFunc(n.LESS);break;case Hr:n.depthFunc(n.LEQUAL);break;case lc:n.depthFunc(n.EQUAL);break;case cc:n.depthFunc(n.GEQUAL);break;case hc:n.depthFunc(n.GREATER);break;case uc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}X=re}},setLocked:function(re){w=re},setClear:function(re){q!==re&&(n.clearDepth(re),q=re)},reset:function(){w=!1,te=null,X=null,q=null}}}function i(){let w=!1,te=null,X=null,q=null,re=null,Ee=null,He=null,mt=null,bt=null;return{setTest:function(Xe){w||(Xe?ge(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(Xe){te!==Xe&&!w&&(n.stencilMask(Xe),te=Xe)},setFunc:function(Xe,un,jt){(X!==Xe||q!==un||re!==jt)&&(n.stencilFunc(Xe,un,jt),X=Xe,q=un,re=jt)},setOp:function(Xe,un,jt){(Ee!==Xe||He!==un||mt!==jt)&&(n.stencilOp(Xe,un,jt),Ee=Xe,He=un,mt=jt)},setLocked:function(Xe){w=Xe},setClear:function(Xe){bt!==Xe&&(n.clearStencil(Xe),bt=Xe)},reset:function(){w=!1,te=null,X=null,q=null,re=null,Ee=null,He=null,mt=null,bt=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,p=null,f=null,T=null,y=null,E=null,I=null,C=new Be(0,0,0),A=0,O=!1,b=null,S=null,R=null,G=null,z=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,W=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=W>=2);let H=null,le={};const de=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),ze=new Tt().fromArray(de),Je=new Tt().fromArray(_e);function V(w,te,X,q){const re=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(w,Ee),n.texParameteri(w,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(w,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<X;He++)w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,q,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(te+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return Ee}const Q={};Q[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ge(n.DEPTH_TEST),s.setFunc(Hr),Qe(!1),ye(Ga),ge(n.CULL_FACE),ft(Un);function ge(w){c[w]!==!0&&(n.enable(w),c[w]=!0)}function he(w){c[w]!==!1&&(n.disable(w),c[w]=!1)}function Ae(w,te){return h[w]!==te?(n.bindFramebuffer(w,te),h[w]=te,w===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=te),w===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Le(w,te){let X=d,q=!1;if(w){X=u.get(te),X===void 0&&(X=[],u.set(te,X));const re=w.textures;if(X.length!==re.length||X[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,He=re.length;Ee<He;Ee++)X[Ee]=n.COLOR_ATTACHMENT0+Ee;X.length=re.length,q=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,q=!0);q&&n.drawBuffers(X)}function Oe(w){return m!==w?(n.useProgram(w),m=w,!0):!1}const at={[$n]:n.FUNC_ADD,[Gl]:n.FUNC_SUBTRACT,[Vl]:n.FUNC_REVERSE_SUBTRACT};at[Wl]=n.MIN,at[Xl]=n.MAX;const P={[ql]:n.ZERO,[Yl]:n.ONE,[$l]:n.SRC_COLOR,[Ns]:n.SRC_ALPHA,[ec]:n.SRC_ALPHA_SATURATE,[Jl]:n.DST_COLOR,[Zl]:n.DST_ALPHA,[Kl]:n.ONE_MINUS_SRC_COLOR,[Fs]:n.ONE_MINUS_SRC_ALPHA,[Ql]:n.ONE_MINUS_DST_COLOR,[jl]:n.ONE_MINUS_DST_ALPHA,[tc]:n.CONSTANT_COLOR,[nc]:n.ONE_MINUS_CONSTANT_COLOR,[ic]:n.CONSTANT_ALPHA,[rc]:n.ONE_MINUS_CONSTANT_ALPHA};function ft(w,te,X,q,re,Ee,He,mt,bt,Xe){if(w===Un){g===!0&&(he(n.BLEND),g=!1);return}if(g===!1&&(ge(n.BLEND),g=!0),w!==Hl){if(w!==_||Xe!==O){if((p!==$n||y!==$n)&&(n.blendEquation(n.FUNC_ADD),p=$n,y=$n),Xe)switch(w){case Jn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Us:n.blendFunc(n.ONE,n.ONE);break;case Va:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wa:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Jn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Us:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Va:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wa:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}f=null,T=null,E=null,I=null,C.set(0,0,0),A=0,_=w,O=Xe}return}re=re||te,Ee=Ee||X,He=He||q,(te!==p||re!==y)&&(n.blendEquationSeparate(at[te],at[re]),p=te,y=re),(X!==f||q!==T||Ee!==E||He!==I)&&(n.blendFuncSeparate(P[X],P[q],P[Ee],P[He]),f=X,T=q,E=Ee,I=He),(mt.equals(C)===!1||bt!==A)&&(n.blendColor(mt.r,mt.g,mt.b,bt),C.copy(mt),A=bt),_=w,O=!1}function je(w,te){w.side===Ze?he(n.CULL_FACE):ge(n.CULL_FACE);let X=w.side===Dt;te&&(X=!X),Qe(X),w.blending===Jn&&w.transparent===!1?ft(Un):ft(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),s.setFunc(w.depthFunc),s.setTest(w.depthTest),s.setMask(w.depthWrite),r.setMask(w.colorWrite);const q=w.stencilWrite;a.setTest(q),q&&(a.setMask(w.stencilWriteMask),a.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),a.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Re(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(w){b!==w&&(w?n.frontFace(n.CW):n.frontFace(n.CCW),b=w)}function ye(w){w!==Bl?(ge(n.CULL_FACE),w!==S&&(w===Ga?n.cullFace(n.BACK):w===zl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),S=w}function pt(w){w!==R&&(Y&&n.lineWidth(w),R=w)}function Re(w,te,X){w?(ge(n.POLYGON_OFFSET_FILL),(G!==te||z!==X)&&(n.polygonOffset(te,X),G=te,z=X)):he(n.POLYGON_OFFSET_FILL)}function Ie(w){w?ge(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function x(w){w===void 0&&(w=n.TEXTURE0+$-1),H!==w&&(n.activeTexture(w),H=w)}function v(w,te,X){X===void 0&&(H===null?X=n.TEXTURE0+$-1:X=H);let q=le[X];q===void 0&&(q={type:void 0,texture:void 0},le[X]=q),(q.type!==w||q.texture!==te)&&(H!==X&&(n.activeTexture(X),H=X),n.bindTexture(w,te||Q[w]),q.type=w,q.texture=te)}function B(){const w=le[H];w!==void 0&&w.type!==void 0&&(n.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ee(){try{n.texStorage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ce(){try{n.texImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ke(){try{n.texImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Pe(w){ze.equals(w)===!1&&(n.scissor(w.x,w.y,w.z,w.w),ze.copy(w))}function fe(w){Je.equals(w)===!1&&(n.viewport(w.x,w.y,w.z,w.w),Je.copy(w))}function we(w,te){let X=l.get(te);X===void 0&&(X=new WeakMap,l.set(te,X));let q=X.get(w);q===void 0&&(q=n.getUniformBlockIndex(te,w.name),X.set(w,q))}function Fe(w,te){const q=l.get(te).get(w);o.get(te)!==q&&(n.uniformBlockBinding(te,q,w.__bindingPointIndex),o.set(te,q))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},H=null,le={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,p=null,f=null,T=null,y=null,E=null,I=null,C=new Be(0,0,0),A=0,O=!1,b=null,S=null,R=null,G=null,z=null,ze.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ge,disable:he,bindFramebuffer:Ae,drawBuffers:Le,useProgram:Oe,setBlending:ft,setMaterial:je,setFlipSided:Qe,setCullFace:ye,setLineWidth:pt,setPolygonOffset:Re,setScissorTest:Ie,activeTexture:x,bindTexture:v,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:ce,texImage3D:ke,updateUBOMapping:we,uniformBlockBinding:Fe,texStorage2D:De,texStorage3D:ee,texSubImage2D:Z,texSubImage3D:Te,compressedTexSubImage2D:ae,compressedTexSubImage3D:ue,scissor:Pe,viewport:fe,reset:rt}}function Bo(n,e,t,i){const r=Zp(i);switch(t){case sl:return n*e;case ol:return n*e;case ll:return n*e*2;case cl:return n*e/r.components*r.byteLength;case ba:return n*e/r.components*r.byteLength;case hl:return n*e*2/r.components*r.byteLength;case Ea:return n*e*2/r.components*r.byteLength;case al:return n*e*3/r.components*r.byteLength;case Kt:return n*e*4/r.components*r.byteLength;case xa:return n*e*4/r.components*r.byteLength;case Dr:case Ur:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nr:case Fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hs:case Vs:return Math.max(n,16)*Math.max(e,8)/4;case ks:case Gs:return Math.max(n,8)*Math.max(e,8)/2;case Ws:case Xs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ys:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $s:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ks:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Zs:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case js:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Js:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qs:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ea:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ta:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case na:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ia:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ra:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case sa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case aa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Or:case oa:case la:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ul:case ca:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ha:case ua:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zp(n){switch(n){case yn:case nl:return{byteLength:1,components:1};case qi:case il:case Ki:return{byteLength:2,components:1};case ya:case Ta:return{byteLength:2,components:4};case Qn:case Sa:case vn:return{byteLength:4,components:1};case rl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function jp(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,v){return m?new OffscreenCanvas(x,v):Yr("canvas")}function _(x,v,B){let K=1;const J=Ie(x);if((J.width>B||J.height>B)&&(K=B/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const Z=Math.floor(K*J.width),Te=Math.floor(K*J.height);u===void 0&&(u=g(Z,Te));const ae=v?g(Z,Te):u;return ae.width=Z,ae.height=Te,ae.getContext("2d").drawImage(x,0,0,Z,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+Te+")."),ae}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),x;return x}function p(x){return x.generateMipmaps&&x.minFilter!==Vt&&x.minFilter!==$t}function f(x){n.generateMipmap(x)}function T(x,v,B,K,J=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let Z=v;if(v===n.RED&&(B===n.FLOAT&&(Z=n.R32F),B===n.HALF_FLOAT&&(Z=n.R16F),B===n.UNSIGNED_BYTE&&(Z=n.R8)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.R8UI),B===n.UNSIGNED_SHORT&&(Z=n.R16UI),B===n.UNSIGNED_INT&&(Z=n.R32UI),B===n.BYTE&&(Z=n.R8I),B===n.SHORT&&(Z=n.R16I),B===n.INT&&(Z=n.R32I)),v===n.RG&&(B===n.FLOAT&&(Z=n.RG32F),B===n.HALF_FLOAT&&(Z=n.RG16F),B===n.UNSIGNED_BYTE&&(Z=n.RG8)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RG8UI),B===n.UNSIGNED_SHORT&&(Z=n.RG16UI),B===n.UNSIGNED_INT&&(Z=n.RG32UI),B===n.BYTE&&(Z=n.RG8I),B===n.SHORT&&(Z=n.RG16I),B===n.INT&&(Z=n.RG32I)),v===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),v===n.RGBA){const Te=J?Vr:Ke.getTransfer(K);B===n.FLOAT&&(Z=n.RGBA32F),B===n.HALF_FLOAT&&(Z=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Z=Te===tt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(x,v){let B;return x?v===null||v===Qn||v===Ci?B=n.DEPTH24_STENCIL8:v===vn?B=n.DEPTH32F_STENCIL8:v===qi&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Qn||v===Ci?B=n.DEPTH_COMPONENT24:v===vn?B=n.DEPTH_COMPONENT32F:v===qi&&(B=n.DEPTH_COMPONENT16),B}function E(x,v){return p(x)===!0||x.isFramebufferTexture&&x.minFilter!==Vt&&x.minFilter!==$t?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function I(x){const v=x.target;v.removeEventListener("dispose",I),A(v),v.isVideoTexture&&h.delete(v)}function C(x){const v=x.target;v.removeEventListener("dispose",C),b(v)}function A(x){const v=i.get(x);if(v.__webglInit===void 0)return;const B=x.source,K=d.get(B);if(K){const J=K[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&O(x),Object.keys(K).length===0&&d.delete(B)}i.remove(x)}function O(x){const v=i.get(x);n.deleteTexture(v.__webglTexture);const B=x.source,K=d.get(B);delete K[v.__cacheKey],a.memory.textures--}function b(x){const v=i.get(x);if(x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let J=0;J<v.__webglFramebuffer[K].length;J++)n.deleteFramebuffer(v.__webglFramebuffer[K][J]);else n.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)n.deleteFramebuffer(v.__webglFramebuffer[K]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=x.textures;for(let K=0,J=B.length;K<J;K++){const Z=i.get(B[K]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(B[K])}i.remove(x)}let S=0;function R(){S=0}function G(){const x=S;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),S+=1,x}function z(x){const v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.wrapR||0),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.colorSpace),v.join()}function $(x,v){const B=i.get(x);if(x.isVideoTexture&&pt(x),x.isRenderTargetTexture===!1&&x.version>0&&B.__version!==x.version){const K=x.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(B,x,v);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function Y(x,v){const B=i.get(x);if(x.version>0&&B.__version!==x.version){Je(B,x,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function W(x,v){const B=i.get(x);if(x.version>0&&B.__version!==x.version){Je(B,x,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function j(x,v){const B=i.get(x);if(x.version>0&&B.__version!==x.version){V(B,x,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}const H={[Gr]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[zs]:n.MIRRORED_REPEAT},le={[Vt]:n.NEAREST,[yc]:n.NEAREST_MIPMAP_NEAREST,[tr]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[rs]:n.LINEAR_MIPMAP_NEAREST,[jn]:n.LINEAR_MIPMAP_LINEAR},de={[Ac]:n.NEVER,[Ic]:n.ALWAYS,[Cc]:n.LESS,[dl]:n.LEQUAL,[Pc]:n.EQUAL,[Lc]:n.GEQUAL,[Rc]:n.GREATER,[wc]:n.NOTEQUAL};function _e(x,v){if(v.type===vn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===$t||v.magFilter===rs||v.magFilter===tr||v.magFilter===jn||v.minFilter===$t||v.minFilter===rs||v.minFilter===tr||v.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,H[v.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,H[v.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,H[v.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,le[v.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,le[v.minFilter]),v.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,de[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Vt||v.minFilter!==tr&&v.minFilter!==jn||v.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ze(x,v){let B=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",I));const K=v.source;let J=d.get(K);J===void 0&&(J={},d.set(K,J));const Z=z(v);if(Z!==x.__cacheKey){J[Z]===void 0&&(J[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[Z].usedTimes++;const Te=J[x.__cacheKey];Te!==void 0&&(J[x.__cacheKey].usedTimes--,Te.usedTimes===0&&O(v)),x.__cacheKey=Z,x.__webglTexture=J[Z].texture}return B}function Je(x,v,B){let K=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=n.TEXTURE_3D);const J=ze(x,v),Z=v.source;t.bindTexture(K,x.__webglTexture,n.TEXTURE0+B);const Te=i.get(Z);if(Z.version!==Te.__version||J===!0){t.activeTexture(n.TEXTURE0+B);const ae=Ke.getPrimaries(Ke.workingColorSpace),ue=v.colorSpace===In?null:Ke.getPrimaries(v.colorSpace),De=v.colorSpace===In||ae===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ee=_(v.image,!1,r.maxTextureSize);ee=Re(v,ee);const ce=s.convert(v.format,v.colorSpace),ke=s.convert(v.type);let Pe=T(v.internalFormat,ce,ke,v.colorSpace,v.isVideoTexture);_e(K,v);let fe;const we=v.mipmaps,Fe=v.isVideoTexture!==!0,rt=Te.__version===void 0||J===!0,w=Z.dataReady,te=E(v,ee);if(v.isDepthTexture)Pe=y(v.format===Pi,v.type),rt&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,Pe,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Pe,ee.width,ee.height,0,ce,ke,null));else if(v.isDataTexture)if(we.length>0){Fe&&rt&&t.texStorage2D(n.TEXTURE_2D,te,Pe,we[0].width,we[0].height);for(let X=0,q=we.length;X<q;X++)fe=we[X],Fe?w&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,fe.width,fe.height,ce,ke,fe.data):t.texImage2D(n.TEXTURE_2D,X,Pe,fe.width,fe.height,0,ce,ke,fe.data);v.generateMipmaps=!1}else Fe?(rt&&t.texStorage2D(n.TEXTURE_2D,te,Pe,ee.width,ee.height),w&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,ce,ke,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,ee.width,ee.height,0,ce,ke,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Fe&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,te,Pe,we[0].width,we[0].height,ee.depth);for(let X=0,q=we.length;X<q;X++)if(fe=we[X],v.format!==Kt)if(ce!==null)if(Fe){if(w)if(v.layerUpdates.size>0){const re=Bo(fe.width,fe.height,v.format,v.type);for(const Ee of v.layerUpdates){const He=fe.data.subarray(Ee*re/fe.data.BYTES_PER_ELEMENT,(Ee+1)*re/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,Ee,fe.width,fe.height,1,ce,He,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,fe.width,fe.height,ee.depth,ce,fe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Pe,fe.width,fe.height,ee.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?w&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,fe.width,fe.height,ee.depth,ce,ke,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Pe,fe.width,fe.height,ee.depth,0,ce,ke,fe.data)}else{Fe&&rt&&t.texStorage2D(n.TEXTURE_2D,te,Pe,we[0].width,we[0].height);for(let X=0,q=we.length;X<q;X++)fe=we[X],v.format!==Kt?ce!==null?Fe?w&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,fe.width,fe.height,ce,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?w&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,fe.width,fe.height,ce,ke,fe.data):t.texImage2D(n.TEXTURE_2D,X,Pe,fe.width,fe.height,0,ce,ke,fe.data)}else if(v.isDataArrayTexture)if(Fe){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,te,Pe,ee.width,ee.height,ee.depth),w)if(v.layerUpdates.size>0){const X=Bo(ee.width,ee.height,v.format,v.type);for(const q of v.layerUpdates){const re=ee.data.subarray(q*X/ee.data.BYTES_PER_ELEMENT,(q+1)*X/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,ee.width,ee.height,1,ce,ke,re)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,ke,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,ee.width,ee.height,ee.depth,0,ce,ke,ee.data);else if(v.isData3DTexture)Fe?(rt&&t.texStorage3D(n.TEXTURE_3D,te,Pe,ee.width,ee.height,ee.depth),w&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,ke,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,ee.width,ee.height,ee.depth,0,ce,ke,ee.data);else if(v.isFramebufferTexture){if(rt)if(Fe)t.texStorage2D(n.TEXTURE_2D,te,Pe,ee.width,ee.height);else{let X=ee.width,q=ee.height;for(let re=0;re<te;re++)t.texImage2D(n.TEXTURE_2D,re,Pe,X,q,0,ce,ke,null),X>>=1,q>>=1}}else if(we.length>0){if(Fe&&rt){const X=Ie(we[0]);t.texStorage2D(n.TEXTURE_2D,te,Pe,X.width,X.height)}for(let X=0,q=we.length;X<q;X++)fe=we[X],Fe?w&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ce,ke,fe):t.texImage2D(n.TEXTURE_2D,X,Pe,ce,ke,fe);v.generateMipmaps=!1}else if(Fe){if(rt){const X=Ie(ee);t.texStorage2D(n.TEXTURE_2D,te,Pe,X.width,X.height)}w&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,ke,ee)}else t.texImage2D(n.TEXTURE_2D,0,Pe,ce,ke,ee);p(v)&&f(K),Te.__version=Z.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function V(x,v,B){if(v.image.length!==6)return;const K=ze(x,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+B);const Z=i.get(J);if(J.version!==Z.__version||K===!0){t.activeTexture(n.TEXTURE0+B);const Te=Ke.getPrimaries(Ke.workingColorSpace),ae=v.colorSpace===In?null:Ke.getPrimaries(v.colorSpace),ue=v.colorSpace===In||Te===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const De=v.isCompressedTexture||v.image[0].isCompressedTexture,ee=v.image[0]&&v.image[0].isDataTexture,ce=[];for(let q=0;q<6;q++)!De&&!ee?ce[q]=_(v.image[q],!0,r.maxCubemapSize):ce[q]=ee?v.image[q].image:v.image[q],ce[q]=Re(v,ce[q]);const ke=ce[0],Pe=s.convert(v.format,v.colorSpace),fe=s.convert(v.type),we=T(v.internalFormat,Pe,fe,v.colorSpace),Fe=v.isVideoTexture!==!0,rt=Z.__version===void 0||K===!0,w=J.dataReady;let te=E(v,ke);_e(n.TEXTURE_CUBE_MAP,v);let X;if(De){Fe&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,te,we,ke.width,ke.height);for(let q=0;q<6;q++){X=ce[q].mipmaps;for(let re=0;re<X.length;re++){const Ee=X[re];v.format!==Kt?Pe!==null?Fe?w&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,0,0,Ee.width,Ee.height,Pe,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,we,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?w&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,0,0,Ee.width,Ee.height,Pe,fe,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,we,Ee.width,Ee.height,0,Pe,fe,Ee.data)}}}else{if(X=v.mipmaps,Fe&&rt){X.length>0&&te++;const q=Ie(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,te,we,q.width,q.height)}for(let q=0;q<6;q++)if(ee){Fe?w&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ce[q].width,ce[q].height,Pe,fe,ce[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,we,ce[q].width,ce[q].height,0,Pe,fe,ce[q].data);for(let re=0;re<X.length;re++){const He=X[re].image[q].image;Fe?w&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,0,0,He.width,He.height,Pe,fe,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,we,He.width,He.height,0,Pe,fe,He.data)}}else{Fe?w&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Pe,fe,ce[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,we,Pe,fe,ce[q]);for(let re=0;re<X.length;re++){const Ee=X[re];Fe?w&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,0,0,Pe,fe,Ee.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,we,Pe,fe,Ee.image[q])}}}p(v)&&f(n.TEXTURE_CUBE_MAP),Z.__version=J.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function Q(x,v,B,K,J,Z){const Te=s.convert(B.format,B.colorSpace),ae=s.convert(B.type),ue=T(B.internalFormat,Te,ae,B.colorSpace);if(!i.get(v).__hasExternalTextures){const ee=Math.max(1,v.width>>Z),ce=Math.max(1,v.height>>Z);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,Z,ue,ee,ce,v.depth,0,Te,ae,null):t.texImage2D(J,Z,ue,ee,ce,0,Te,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),ye(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,J,i.get(B).__webglTexture,0,Qe(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,J,i.get(B).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(x,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,x),v.depthBuffer){const K=v.depthTexture,J=K&&K.isDepthTexture?K.type:null,Z=y(v.stencilBuffer,J),Te=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=Qe(v);ye(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,Z,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,Z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,x)}else{const K=v.textures;for(let J=0;J<K.length;J++){const Z=K[J],Te=s.convert(Z.format,Z.colorSpace),ae=s.convert(Z.type),ue=T(Z.internalFormat,Te,ae,Z.colorSpace),De=Qe(v);B&&ye(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ue,v.width,v.height):ye(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,ue,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ue,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(x,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const K=i.get(v.depthTexture).__webglTexture,J=Qe(v);if(v.depthTexture.format===bi)ye(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(v.depthTexture.format===Pi)ye(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ae(x){const v=i.get(x),B=x.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==x.depthTexture){const K=x.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=K}if(x.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");he(v.__webglFramebuffer,x)}else if(B){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=n.createRenderbuffer(),ge(v.__webglDepthbuffer[K],x,!1);else{const J=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ge(v.__webglDepthbuffer,x,!1);else{const K=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(x,v,B){const K=i.get(x);v!==void 0&&Q(K.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ae(x)}function Oe(x){const v=x.texture,B=i.get(x),K=i.get(v);x.addEventListener("dispose",C);const J=x.textures,Z=x.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=v.version,a.memory.textures++),Z){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let ue=0;ue<v.mipmaps.length;ue++)B.__webglFramebuffer[ae][ue]=n.createFramebuffer()}else B.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)B.__webglFramebuffer[ae]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Te)for(let ae=0,ue=J.length;ae<ue;ae++){const De=i.get(J[ae]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),a.memory.textures++)}if(x.samples>0&&ye(x)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){const ue=J[ae];B.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);const De=s.convert(ue.format,ue.colorSpace),ee=s.convert(ue.type),ce=T(ue.internalFormat,De,ee,ue.colorSpace,x.isXRRenderTarget===!0),ke=Qe(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,ce,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(B.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),_e(n.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)Q(B.__webglFramebuffer[ae][ue],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else Q(B.__webglFramebuffer[ae],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(v)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ae=0,ue=J.length;ae<ue;ae++){const De=J[ae],ee=i.get(De);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),_e(n.TEXTURE_2D,De),Q(B.__webglFramebuffer,x,De,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),p(De)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ae=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,K.__webglTexture),_e(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)Q(B.__webglFramebuffer[ue],x,v,n.COLOR_ATTACHMENT0,ae,ue);else Q(B.__webglFramebuffer,x,v,n.COLOR_ATTACHMENT0,ae,0);p(v)&&f(ae),t.unbindTexture()}x.depthBuffer&&Ae(x)}function at(x){const v=x.textures;for(let B=0,K=v.length;B<K;B++){const J=v[B];if(p(J)){const Z=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Te=i.get(J).__webglTexture;t.bindTexture(Z,Te),f(Z),t.unbindTexture()}}}const P=[],ft=[];function je(x){if(x.samples>0){if(ye(x)===!1){const v=x.textures,B=x.width,K=x.height;let J=n.COLOR_BUFFER_BIT;const Z=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(x),ae=v.length>1;if(ae)for(let ue=0;ue<v.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ue=0;ue<v.length;ue++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[ue]);const De=i.get(v[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,De,0)}n.blitFramebuffer(0,0,B,K,0,0,B,K,J,n.NEAREST),l===!0&&(P.length=0,ft.length=0,P.push(n.COLOR_ATTACHMENT0+ue),x.depthBuffer&&x.resolveDepthBuffer===!1&&(P.push(Z),ft.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ft)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let ue=0;ue<v.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,Te.__webglColorRenderbuffer[ue]);const De=i.get(v[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const v=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Qe(x){return Math.min(r.maxSamples,x.samples)}function ye(x){const v=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function pt(x){const v=a.render.frame;h.get(x)!==v&&(h.set(x,v),x.update())}function Re(x,v){const B=x.colorSpace,K=x.format,J=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||B!==Bn&&B!==In&&(Ke.getTransfer(B)===tt?(K!==Kt||J!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function Ie(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=R,this.setTexture2D=$,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=Le,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ye}function Jp(n,e){function t(i,r=In){let s;const a=Ke.getTransfer(r);if(i===yn)return n.UNSIGNED_BYTE;if(i===ya)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ta)return n.UNSIGNED_SHORT_5_5_5_1;if(i===rl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nl)return n.BYTE;if(i===il)return n.SHORT;if(i===qi)return n.UNSIGNED_SHORT;if(i===Sa)return n.INT;if(i===Qn)return n.UNSIGNED_INT;if(i===vn)return n.FLOAT;if(i===Ki)return n.HALF_FLOAT;if(i===sl)return n.ALPHA;if(i===al)return n.RGB;if(i===Kt)return n.RGBA;if(i===ol)return n.LUMINANCE;if(i===ll)return n.LUMINANCE_ALPHA;if(i===bi)return n.DEPTH_COMPONENT;if(i===Pi)return n.DEPTH_STENCIL;if(i===cl)return n.RED;if(i===ba)return n.RED_INTEGER;if(i===hl)return n.RG;if(i===Ea)return n.RG_INTEGER;if(i===xa)return n.RGBA_INTEGER;if(i===Dr||i===Ur||i===Nr||i===Fr)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Dr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Dr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ur)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ks||i===Hs||i===Gs||i===Vs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ks)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ws||i===Xs||i===qs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ws||i===Xs)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ys||i===$s||i===Ks||i===Zs||i===js||i===Js||i===Qs||i===ea||i===ta||i===na||i===ia||i===ra||i===sa||i===aa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ys)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$s)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ks)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===js)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Js)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ea)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ta)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===na)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ia)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ra)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===aa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Or||i===oa||i===la)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Or)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===la)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ul||i===ca||i===ha||i===ua)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Or)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ca)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ha)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ua)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ci?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Qp extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class en extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const em={type:"move"};class Rs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(em)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new en;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const tm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nm=`
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

}`;class im{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new It,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Fn({vertexShader:tm,fragmentShader:nm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new et(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rm extends wi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const _=new im,p=t.getContextAttributes();let f=null,T=null;const y=[],E=[],I=new Ve;let C=null;const A=new Gt;A.layers.enable(1),A.viewport=new Tt;const O=new Gt;O.layers.enable(2),O.viewport=new Tt;const b=[A,O],S=new Qp;S.layers.enable(1),S.layers.enable(2);let R=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=y[V];return Q===void 0&&(Q=new Rs,y[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=y[V];return Q===void 0&&(Q=new Rs,y[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=y[V];return Q===void 0&&(Q=new Rs,y[V]=Q),Q.getHandSpace()};function z(V){const Q=E.indexOf(V.inputSource);if(Q===-1)return;const ge=y[Q];ge!==void 0&&(ge.update(V.inputSource,V.frame,c||a),ge.dispatchEvent({type:V.type,data:V.inputSource}))}function $(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Y);for(let V=0;V<y.length;V++){const Q=E[V];Q!==null&&(E[V]=null,y[V].disconnect(Q))}R=null,G=null,_.reset(),e.setRenderTarget(f),m=null,d=null,u=null,r=null,T=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new ei(m.framebufferWidth,m.framebufferHeight,{format:Kt,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ge=null,he=null;p.depth&&(he=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?Pi:bi,ge=p.stencil?Ci:Qn);const Ae={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new ei(d.textureWidth,d.textureHeight,{format:Kt,type:yn,depthTexture:new El(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(V){for(let Q=0;Q<V.removed.length;Q++){const ge=V.removed[Q],he=E.indexOf(ge);he>=0&&(E[he]=null,y[he].disconnect(ge))}for(let Q=0;Q<V.added.length;Q++){const ge=V.added[Q];let he=E.indexOf(ge);if(he===-1){for(let Le=0;Le<y.length;Le++)if(Le>=E.length){E.push(ge),he=Le;break}else if(E[Le]===null){E[Le]=ge,he=Le;break}if(he===-1)break}const Ae=y[he];Ae&&Ae.connect(ge)}}const W=new U,j=new U;function H(V,Q,ge){W.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(ge.matrixWorld);const he=W.distanceTo(j),Ae=Q.projectionMatrix.elements,Le=ge.projectionMatrix.elements,Oe=Ae[14]/(Ae[10]-1),at=Ae[14]/(Ae[10]+1),P=(Ae[9]+1)/Ae[5],ft=(Ae[9]-1)/Ae[5],je=(Ae[8]-1)/Ae[0],Qe=(Le[8]+1)/Le[0],ye=Oe*je,pt=Oe*Qe,Re=he/(-je+Qe),Ie=Re*-je;if(Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ie),V.translateZ(Re),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ae[10]===-1)V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const x=Oe+Re,v=at+Re,B=ye-Ie,K=pt+(he-Ie),J=P*at/v*x,Z=ft*at/v*x;V.projectionMatrix.makePerspective(B,K,J,Z,x,v),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function le(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let Q=V.near,ge=V.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),S.near=O.near=A.near=Q,S.far=O.far=A.far=ge,(R!==S.near||G!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,G=S.far);const he=V.parent,Ae=S.cameras;le(S,he);for(let Le=0;Le<Ae.length;Le++)le(Ae[Le],he);Ae.length===2?H(S,A,O):S.projectionMatrix.copy(A.projectionMatrix),de(V,S,he)};function de(V,Q,ge){ge===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(ge.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Yi*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let _e=null;function ze(V,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const ge=h.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let he=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,he=!0);for(let Le=0;Le<ge.length;Le++){const Oe=ge[Le];let at=null;if(m!==null)at=m.getViewport(Oe);else{const ft=u.getViewSubImage(d,Oe);at=ft.viewport,Le===0&&(e.setRenderTargetTextures(T,ft.colorTexture,d.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(T))}let P=b[Le];P===void 0&&(P=new Gt,P.layers.enable(Le),P.viewport=new Tt,b[Le]=P),P.matrix.fromArray(Oe.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Oe.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(at.x,at.y,at.width,at.height),Le===0&&(S.matrix.copy(P.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),he===!0&&S.cameras.push(P)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Le=u.getDepthInformation(ge[0]);Le&&Le.isValid&&Le.texture&&_.init(e,Le,r.renderState)}}for(let ge=0;ge<y.length;ge++){const he=E[ge],Ae=y[ge];he!==null&&Ae!==void 0&&Ae.update(he,Q,c||a)}_e&&_e(V,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Je=new bl;Je.setAnimationLoop(ze),this.setAnimationLoop=function(V){_e=V},this.dispose=function(){}}}const Xn=new Tn,sm=new ut;function am(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Ml(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,T,y,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,T,y):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Dt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Dt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const T=e.get(f),y=T.envMap,E=T.envMapRotation;y&&(p.envMap.value=y,Xn.copy(E),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),p.envMapRotation.value.setFromMatrix4(sm.makeRotationFromEuler(Xn)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,T,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*T,p.scale.value=y*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,T){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const T=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function om(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const E=y.program;i.uniformBlockBinding(T,E)}function c(T,y){let E=r[T.id];E===void 0&&(g(T),E=h(T),r[T.id]=E,T.addEventListener("dispose",p));const I=y.program;i.updateUBOMapping(T,I);const C=e.render.frame;s[T.id]!==C&&(d(T),s[T.id]=C)}function h(T){const y=u();T.__bindingPointIndex=y;const E=n.createBuffer(),I=T.__size,C=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const y=r[T.id],E=T.uniforms,I=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,A=E.length;C<A;C++){const O=Array.isArray(E[C])?E[C]:[E[C]];for(let b=0,S=O.length;b<S;b++){const R=O[b];if(m(R,C,b,I)===!0){const G=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let $=0;for(let Y=0;Y<z.length;Y++){const W=z[Y],j=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,G+$,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,$),$+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,y,E,I){const C=T.value,A=y+"_"+E;if(I[A]===void 0)return typeof C=="number"||typeof C=="boolean"?I[A]=C:I[A]=C.clone(),!0;{const O=I[A];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return I[A]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function g(T){const y=T.uniforms;let E=0;const I=16;for(let A=0,O=y.length;A<O;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,R=b.length;S<R;S++){const G=b[S],z=Array.isArray(G.value)?G.value:[G.value];for(let $=0,Y=z.length;$<Y;$++){const W=z[$],j=_(W),H=E%I,le=H%j.boundary,de=H+le;E+=le,de!==0&&I-de<j.storage&&(E+=I-de),G.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=j.storage}}}const C=E%I;return C>0&&(E+=I-C),T.__size=E,T.__cache={},this}function _(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function p(T){const y=T.target;y.removeEventListener("dispose",p);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class lm{constructor(e={}){const{canvas:t=Zc(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=Nn,this.toneMappingExposure=1;const y=this;let E=!1,I=0,C=0,A=null,O=-1,b=null;const S=new Tt,R=new Tt;let G=null;const z=new Be(0);let $=0,Y=t.width,W=t.height,j=1,H=null,le=null;const de=new Tt(0,0,Y,W),_e=new Tt(0,0,Y,W);let ze=!1;const Je=new Tl;let V=!1,Q=!1;const ge=new ut,he=new U,Ae=new Tt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function at(){return A===null?j:1}let P=i;function ft(M,L){return t.getContext(M,L)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ma}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",re,!1),P===null){const L="webgl2";if(P=ft(L,M),P===null)throw ft(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let je,Qe,ye,pt,Re,Ie,x,v,B,K,J,Z,Te,ae,ue,De,ee,ce,ke,Pe,fe,we,Fe,rt;function w(){je=new pf(P),je.init(),we=new Jp(P,je),Qe=new of(P,je,e,we),ye=new Kp(P),pt=new _f(P),Re=new Np,Ie=new jp(P,je,ye,Re,Qe,we,pt),x=new cf(y),v=new ff(y),B=new Th(P),Fe=new sf(P,B),K=new mf(P,B,pt,Fe),J=new Mf(P,K,B,pt),ke=new vf(P,Qe,Ie),De=new lf(Re),Z=new Up(y,x,v,je,Qe,Fe,De),Te=new am(y,Re),ae=new Op,ue=new Vp(je),ce=new rf(y,x,v,ye,J,d,l),ee=new $p(y,J,Qe),rt=new om(P,pt,Qe,ye),Pe=new af(P,je,pt),fe=new gf(P,je,pt),pt.programs=Z.programs,y.capabilities=Qe,y.extensions=je,y.properties=Re,y.renderLists=ae,y.shadowMap=ee,y.state=ye,y.info=pt}w();const te=new rm(y,P);this.xr=te,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(M){M!==void 0&&(j=M,this.setSize(Y,W,!1))},this.getSize=function(M){return M.set(Y,W)},this.setSize=function(M,L,N=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,W=L,t.width=Math.floor(M*j),t.height=Math.floor(L*j),N===!0&&(t.style.width=M+"px",t.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(Y*j,W*j).floor()},this.setDrawingBufferSize=function(M,L,N){Y=M,W=L,j=N,t.width=Math.floor(M*N),t.height=Math.floor(L*N),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(S)},this.getViewport=function(M){return M.copy(de)},this.setViewport=function(M,L,N,F){M.isVector4?de.set(M.x,M.y,M.z,M.w):de.set(M,L,N,F),ye.viewport(S.copy(de).multiplyScalar(j).round())},this.getScissor=function(M){return M.copy(_e)},this.setScissor=function(M,L,N,F){M.isVector4?_e.set(M.x,M.y,M.z,M.w):_e.set(M,L,N,F),ye.scissor(R.copy(_e).multiplyScalar(j).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(M){ye.setScissorTest(ze=M)},this.setOpaqueSort=function(M){H=M},this.setTransparentSort=function(M){le=M},this.getClearColor=function(M){return M.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(M=!0,L=!0,N=!0){let F=0;if(M){let D=!1;if(A!==null){const ne=A.texture.format;D=ne===xa||ne===Ea||ne===ba}if(D){const ne=A.texture.type,oe=ne===yn||ne===Qn||ne===qi||ne===Ci||ne===ya||ne===Ta,pe=ce.getClearColor(),me=ce.getClearAlpha(),xe=pe.r,Ce=pe.g,Me=pe.b;oe?(m[0]=xe,m[1]=Ce,m[2]=Me,m[3]=me,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=xe,g[1]=Ce,g[2]=Me,g[3]=me,P.clearBufferiv(P.COLOR,0,g))}else F|=P.COLOR_BUFFER_BIT}L&&(F|=P.DEPTH_BUFFER_BIT),N&&(F|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ae.dispose(),ue.dispose(),Re.dispose(),x.dispose(),v.dispose(),J.dispose(),Fe.dispose(),rt.dispose(),Z.dispose(),te.dispose(),te.removeEventListener("sessionstart",jt),te.removeEventListener("sessionend",Na),zn.stop()};function X(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=pt.autoReset,L=ee.enabled,N=ee.autoUpdate,F=ee.needsUpdate,D=ee.type;w(),pt.autoReset=M,ee.enabled=L,ee.autoUpdate=N,ee.needsUpdate=F,ee.type=D}function re(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ee(M){const L=M.target;L.removeEventListener("dispose",Ee),He(L)}function He(M){mt(M),Re.remove(M)}function mt(M){const L=Re.get(M).programs;L!==void 0&&(L.forEach(function(N){Z.releaseProgram(N)}),M.isShaderMaterial&&Z.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,N,F,D,ne){L===null&&(L=Le);const oe=D.isMesh&&D.matrixWorld.determinant()<0,pe=Ul(M,L,N,F,D);ye.setMaterial(F,oe);let me=N.index,xe=1;if(F.wireframe===!0){if(me=K.getWireframeAttribute(N),me===void 0)return;xe=2}const Ce=N.drawRange,Me=N.attributes.position;let qe=Ce.start*xe,ot=(Ce.start+Ce.count)*xe;ne!==null&&(qe=Math.max(qe,ne.start*xe),ot=Math.min(ot,(ne.start+ne.count)*xe)),me!==null?(qe=Math.max(qe,0),ot=Math.min(ot,me.count)):Me!=null&&(qe=Math.max(qe,0),ot=Math.min(ot,Me.count));const lt=ot-qe;if(lt<0||lt===1/0)return;Fe.setup(D,F,pe,N,me);let Nt,Ye=Pe;if(me!==null&&(Nt=B.get(me),Ye=fe,Ye.setIndex(Nt)),D.isMesh)F.wireframe===!0?(ye.setLineWidth(F.wireframeLinewidth*at()),Ye.setMode(P.LINES)):Ye.setMode(P.TRIANGLES);else if(D.isLine){let Se=F.linewidth;Se===void 0&&(Se=1),ye.setLineWidth(Se*at()),D.isLineSegments?Ye.setMode(P.LINES):D.isLineLoop?Ye.setMode(P.LINE_LOOP):Ye.setMode(P.LINE_STRIP)}else D.isPoints?Ye.setMode(P.POINTS):D.isSprite&&Ye.setMode(P.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Ye.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))Ye.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Se=D._multiDrawStarts,Et=D._multiDrawCounts,$e=D._multiDrawCount,Wt=me?B.get(me).bytesPerElement:1,ni=Re.get(F).currentProgram.getUniforms();for(let Ft=0;Ft<$e;Ft++)ni.setValue(P,"_gl_DrawID",Ft),Ye.render(Se[Ft]/Wt,Et[Ft])}else if(D.isInstancedMesh)Ye.renderInstances(qe,lt,D.count);else if(N.isInstancedBufferGeometry){const Se=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Et=Math.min(N.instanceCount,Se);Ye.renderInstances(qe,lt,Et)}else Ye.render(qe,lt)};function bt(M,L,N){M.transparent===!0&&M.side===Ze&&M.forceSinglePass===!1?(M.side=Dt,M.needsUpdate=!0,er(M,L,N),M.side=Sn,M.needsUpdate=!0,er(M,L,N),M.side=Ze):er(M,L,N)}this.compile=function(M,L,N=null){N===null&&(N=M),p=ue.get(N),p.init(L),T.push(p),N.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),M!==N&&M.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const F=new Set;return M.traverse(function(D){const ne=D.material;if(ne)if(Array.isArray(ne))for(let oe=0;oe<ne.length;oe++){const pe=ne[oe];bt(pe,N,D),F.add(pe)}else bt(ne,N,D),F.add(ne)}),T.pop(),p=null,F},this.compileAsync=function(M,L,N=null){const F=this.compile(M,L,N);return new Promise(D=>{function ne(){if(F.forEach(function(oe){Re.get(oe).currentProgram.isReady()&&F.delete(oe)}),F.size===0){D(M);return}setTimeout(ne,10)}je.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Xe=null;function un(M){Xe&&Xe(M)}function jt(){zn.stop()}function Na(){zn.start()}const zn=new bl;zn.setAnimationLoop(un),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(M){Xe=M,te.setAnimationLoop(M),M===null?zn.stop():zn.start()},te.addEventListener("sessionstart",jt),te.addEventListener("sessionend",Na),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(L),L=te.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,L,A),p=ue.get(M,T.length),p.init(L),T.push(p),ge.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Je.setFromProjectionMatrix(ge),Q=this.localClippingEnabled,V=De.init(this.clippingPlanes,Q),_=ae.get(M,f.length),_.init(),f.push(_),te.enabled===!0&&te.isPresenting===!0){const ne=y.xr.getDepthSensingMesh();ne!==null&&es(ne,L,-1/0,y.sortObjects)}es(M,L,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(H,le),Oe=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Oe&&ce.addToRenderList(_,M),this.info.render.frame++,V===!0&&De.beginShadows();const N=p.state.shadowsArray;ee.render(N,M,L),V===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=_.opaque,D=_.transmissive;if(p.setupLights(),L.isArrayCamera){const ne=L.cameras;if(D.length>0)for(let oe=0,pe=ne.length;oe<pe;oe++){const me=ne[oe];Oa(F,D,M,me)}Oe&&ce.render(M);for(let oe=0,pe=ne.length;oe<pe;oe++){const me=ne[oe];Fa(_,M,me,me.viewport)}}else D.length>0&&Oa(F,D,M,L),Oe&&ce.render(M),Fa(_,M,L);A!==null&&(Ie.updateMultisampleRenderTarget(A),Ie.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(y,M,L),Fe.resetDefaultState(),O=-1,b=null,T.pop(),T.length>0?(p=T[T.length-1],V===!0&&De.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function es(M,L,N,F){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)N=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Je.intersectsSprite(M)){F&&Ae.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ge);const oe=J.update(M),pe=M.material;pe.visible&&_.push(M,oe,pe,N,Ae.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Je.intersectsObject(M))){const oe=J.update(M),pe=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ae.copy(M.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ae.copy(oe.boundingSphere.center)),Ae.applyMatrix4(M.matrixWorld).applyMatrix4(ge)),Array.isArray(pe)){const me=oe.groups;for(let xe=0,Ce=me.length;xe<Ce;xe++){const Me=me[xe],qe=pe[Me.materialIndex];qe&&qe.visible&&_.push(M,oe,qe,N,Ae.z,Me)}}else pe.visible&&_.push(M,oe,pe,N,Ae.z,null)}}const ne=M.children;for(let oe=0,pe=ne.length;oe<pe;oe++)es(ne[oe],L,N,F)}function Fa(M,L,N,F){const D=M.opaque,ne=M.transmissive,oe=M.transparent;p.setupLightsView(N),V===!0&&De.setGlobalState(y.clippingPlanes,N),F&&ye.viewport(S.copy(F)),D.length>0&&Qi(D,L,N),ne.length>0&&Qi(ne,L,N),oe.length>0&&Qi(oe,L,N),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Oa(M,L,N,F){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[F.id]===void 0&&(p.state.transmissionRenderTarget[F.id]=new ei(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Ki:yn,minFilter:jn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ne=p.state.transmissionRenderTarget[F.id],oe=F.viewport||S;ne.setSize(oe.z,oe.w);const pe=y.getRenderTarget();y.setRenderTarget(ne),y.getClearColor(z),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),Oe&&ce.render(N);const me=y.toneMapping;y.toneMapping=Nn;const xe=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),p.setupLightsView(F),V===!0&&De.setGlobalState(y.clippingPlanes,F),Qi(M,N,F),Ie.updateMultisampleRenderTarget(ne),Ie.updateRenderTargetMipmap(ne),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Me=0,qe=L.length;Me<qe;Me++){const ot=L[Me],lt=ot.object,Nt=ot.geometry,Ye=ot.material,Se=ot.group;if(Ye.side===Ze&&lt.layers.test(F.layers)){const Et=Ye.side;Ye.side=Dt,Ye.needsUpdate=!0,Ba(lt,N,F,Nt,Ye,Se),Ye.side=Et,Ye.needsUpdate=!0,Ce=!0}}Ce===!0&&(Ie.updateMultisampleRenderTarget(ne),Ie.updateRenderTargetMipmap(ne))}y.setRenderTarget(pe),y.setClearColor(z,$),xe!==void 0&&(F.viewport=xe),y.toneMapping=me}function Qi(M,L,N){const F=L.isScene===!0?L.overrideMaterial:null;for(let D=0,ne=M.length;D<ne;D++){const oe=M[D],pe=oe.object,me=oe.geometry,xe=F===null?oe.material:F,Ce=oe.group;pe.layers.test(N.layers)&&Ba(pe,L,N,me,xe,Ce)}}function Ba(M,L,N,F,D,ne){M.onBeforeRender(y,L,N,F,D,ne),M.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),D.onBeforeRender(y,L,N,F,M,ne),D.transparent===!0&&D.side===Ze&&D.forceSinglePass===!1?(D.side=Dt,D.needsUpdate=!0,y.renderBufferDirect(N,L,F,D,M,ne),D.side=Sn,D.needsUpdate=!0,y.renderBufferDirect(N,L,F,D,M,ne),D.side=Ze):y.renderBufferDirect(N,L,F,D,M,ne),M.onAfterRender(y,L,N,F,D,ne)}function er(M,L,N){L.isScene!==!0&&(L=Le);const F=Re.get(M),D=p.state.lights,ne=p.state.shadowsArray,oe=D.state.version,pe=Z.getParameters(M,D.state,ne,L,N),me=Z.getProgramCacheKey(pe);let xe=F.programs;F.environment=M.isMeshStandardMaterial?L.environment:null,F.fog=L.fog,F.envMap=(M.isMeshStandardMaterial?v:x).get(M.envMap||F.environment),F.envMapRotation=F.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,xe===void 0&&(M.addEventListener("dispose",Ee),xe=new Map,F.programs=xe);let Ce=xe.get(me);if(Ce!==void 0){if(F.currentProgram===Ce&&F.lightsStateVersion===oe)return ka(M,pe),Ce}else pe.uniforms=Z.getUniforms(M),M.onBeforeCompile(pe,y),Ce=Z.acquireProgram(pe,me),xe.set(me,Ce),F.uniforms=pe.uniforms;const Me=F.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Me.clippingPlanes=De.uniform),ka(M,pe),F.needsLights=Fl(M),F.lightsStateVersion=oe,F.needsLights&&(Me.ambientLightColor.value=D.state.ambient,Me.lightProbe.value=D.state.probe,Me.directionalLights.value=D.state.directional,Me.directionalLightShadows.value=D.state.directionalShadow,Me.spotLights.value=D.state.spot,Me.spotLightShadows.value=D.state.spotShadow,Me.rectAreaLights.value=D.state.rectArea,Me.ltc_1.value=D.state.rectAreaLTC1,Me.ltc_2.value=D.state.rectAreaLTC2,Me.pointLights.value=D.state.point,Me.pointLightShadows.value=D.state.pointShadow,Me.hemisphereLights.value=D.state.hemi,Me.directionalShadowMap.value=D.state.directionalShadowMap,Me.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Me.spotShadowMap.value=D.state.spotShadowMap,Me.spotLightMatrix.value=D.state.spotLightMatrix,Me.spotLightMap.value=D.state.spotLightMap,Me.pointShadowMap.value=D.state.pointShadowMap,Me.pointShadowMatrix.value=D.state.pointShadowMatrix),F.currentProgram=Ce,F.uniformsList=null,Ce}function za(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=Br.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function ka(M,L){const N=Re.get(M);N.outputColorSpace=L.outputColorSpace,N.batching=L.batching,N.batchingColor=L.batchingColor,N.instancing=L.instancing,N.instancingColor=L.instancingColor,N.instancingMorph=L.instancingMorph,N.skinning=L.skinning,N.morphTargets=L.morphTargets,N.morphNormals=L.morphNormals,N.morphColors=L.morphColors,N.morphTargetsCount=L.morphTargetsCount,N.numClippingPlanes=L.numClippingPlanes,N.numIntersection=L.numClipIntersection,N.vertexAlphas=L.vertexAlphas,N.vertexTangents=L.vertexTangents,N.toneMapping=L.toneMapping}function Ul(M,L,N,F,D){L.isScene!==!0&&(L=Le),Ie.resetTextureUnits();const ne=L.fog,oe=F.isMeshStandardMaterial?L.environment:null,pe=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Bn,me=(F.isMeshStandardMaterial?v:x).get(F.envMap||oe),xe=F.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Ce=!!N.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Me=!!N.morphAttributes.position,qe=!!N.morphAttributes.normal,ot=!!N.morphAttributes.color;let lt=Nn;F.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(lt=y.toneMapping);const Nt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Ye=Nt!==void 0?Nt.length:0,Se=Re.get(F),Et=p.state.lights;if(V===!0&&(Q===!0||M!==b)){const kt=M===b&&F.id===O;De.setState(F,M,kt)}let $e=!1;F.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Et.state.version||Se.outputColorSpace!==pe||D.isBatchedMesh&&Se.batching===!1||!D.isBatchedMesh&&Se.batching===!0||D.isBatchedMesh&&Se.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Se.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Se.instancing===!1||!D.isInstancedMesh&&Se.instancing===!0||D.isSkinnedMesh&&Se.skinning===!1||!D.isSkinnedMesh&&Se.skinning===!0||D.isInstancedMesh&&Se.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Se.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Se.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Se.instancingMorph===!1&&D.morphTexture!==null||Se.envMap!==me||F.fog===!0&&Se.fog!==ne||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==De.numPlanes||Se.numIntersection!==De.numIntersection)||Se.vertexAlphas!==xe||Se.vertexTangents!==Ce||Se.morphTargets!==Me||Se.morphNormals!==qe||Se.morphColors!==ot||Se.toneMapping!==lt||Se.morphTargetsCount!==Ye)&&($e=!0):($e=!0,Se.__version=F.version);let Wt=Se.currentProgram;$e===!0&&(Wt=er(F,L,D));let ni=!1,Ft=!1,ts=!1;const gt=Wt.getUniforms(),En=Se.uniforms;if(ye.useProgram(Wt.program)&&(ni=!0,Ft=!0,ts=!0),F.id!==O&&(O=F.id,Ft=!0),ni||b!==M){gt.setValue(P,"projectionMatrix",M.projectionMatrix),gt.setValue(P,"viewMatrix",M.matrixWorldInverse);const kt=gt.map.cameraPosition;kt!==void 0&&kt.setValue(P,he.setFromMatrixPosition(M.matrixWorld)),Qe.logarithmicDepthBuffer&&gt.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&gt.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Ft=!0,ts=!0)}if(D.isSkinnedMesh){gt.setOptional(P,D,"bindMatrix"),gt.setOptional(P,D,"bindMatrixInverse");const kt=D.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),gt.setValue(P,"boneTexture",kt.boneTexture,Ie))}D.isBatchedMesh&&(gt.setOptional(P,D,"batchingTexture"),gt.setValue(P,"batchingTexture",D._matricesTexture,Ie),gt.setOptional(P,D,"batchingIdTexture"),gt.setValue(P,"batchingIdTexture",D._indirectTexture,Ie),gt.setOptional(P,D,"batchingColorTexture"),D._colorsTexture!==null&&gt.setValue(P,"batchingColorTexture",D._colorsTexture,Ie));const ns=N.morphAttributes;if((ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)&&ke.update(D,N,Wt),(Ft||Se.receiveShadow!==D.receiveShadow)&&(Se.receiveShadow=D.receiveShadow,gt.setValue(P,"receiveShadow",D.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(En.envMap.value=me,En.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&L.environment!==null&&(En.envMapIntensity.value=L.environmentIntensity),Ft&&(gt.setValue(P,"toneMappingExposure",y.toneMappingExposure),Se.needsLights&&Nl(En,ts),ne&&F.fog===!0&&Te.refreshFogUniforms(En,ne),Te.refreshMaterialUniforms(En,F,j,W,p.state.transmissionRenderTarget[M.id]),Br.upload(P,za(Se),En,Ie)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Br.upload(P,za(Se),En,Ie),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&gt.setValue(P,"center",D.center),gt.setValue(P,"modelViewMatrix",D.modelViewMatrix),gt.setValue(P,"normalMatrix",D.normalMatrix),gt.setValue(P,"modelMatrix",D.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const kt=F.uniformsGroups;for(let is=0,Ol=kt.length;is<Ol;is++){const Ha=kt[is];rt.update(Ha,Wt),rt.bind(Ha,Wt)}}return Wt}function Nl(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Fl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,L,N){Re.get(M.texture).__webglTexture=L,Re.get(M.depthTexture).__webglTexture=N;const F=Re.get(M);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=N===void 0,F.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,L){const N=Re.get(M);N.__webglFramebuffer=L,N.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,N=0){A=M,I=L,C=N;let F=!0,D=null,ne=!1,oe=!1;if(M){const me=Re.get(M);if(me.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(P.FRAMEBUFFER,null),F=!1;else if(me.__webglFramebuffer===void 0)Ie.setupRenderTarget(M);else if(me.__hasExternalTextures)Ie.rebindTextures(M,Re.get(M.texture).__webglTexture,Re.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Me=M.depthTexture;if(me.__boundDepthTexture!==Me){if(Me!==null&&Re.has(Me)&&(M.width!==Me.image.width||M.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(M)}}const xe=M.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(oe=!0);const Ce=Re.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ce[L])?D=Ce[L][N]:D=Ce[L],ne=!0):M.samples>0&&Ie.useMultisampledRTT(M)===!1?D=Re.get(M).__webglMultisampledFramebuffer:Array.isArray(Ce)?D=Ce[N]:D=Ce,S.copy(M.viewport),R.copy(M.scissor),G=M.scissorTest}else S.copy(de).multiplyScalar(j).floor(),R.copy(_e).multiplyScalar(j).floor(),G=ze;if(ye.bindFramebuffer(P.FRAMEBUFFER,D)&&F&&ye.drawBuffers(M,D),ye.viewport(S),ye.scissor(R),ye.setScissorTest(G),ne){const me=Re.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,me.__webglTexture,N)}else if(oe){const me=Re.get(M.texture),xe=L||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,me.__webglTexture,N||0,xe)}O=-1},this.readRenderTargetPixels=function(M,L,N,F,D,ne,oe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Re.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&oe!==void 0&&(pe=pe[oe]),pe){ye.bindFramebuffer(P.FRAMEBUFFER,pe);try{const me=M.texture,xe=me.format,Ce=me.type;if(!Qe.textureFormatReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-F&&N>=0&&N<=M.height-D&&P.readPixels(L,N,F,D,we.convert(xe),we.convert(Ce),ne)}finally{const me=A!==null?Re.get(A).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(M,L,N,F,D,ne,oe){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Re.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&oe!==void 0&&(pe=pe[oe]),pe){ye.bindFramebuffer(P.FRAMEBUFFER,pe);try{const me=M.texture,xe=me.format,Ce=me.type;if(!Qe.textureFormatReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=M.width-F&&N>=0&&N<=M.height-D){const Me=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Me),P.bufferData(P.PIXEL_PACK_BUFFER,ne.byteLength,P.STREAM_READ),P.readPixels(L,N,F,D,we.convert(xe),we.convert(Ce),0),P.flush();const qe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await jc(P,qe,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Me),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ne)}finally{P.deleteBuffer(Me),P.deleteSync(qe)}return ne}}finally{const me=A!==null?Re.get(A).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,me)}}},this.copyFramebufferToTexture=function(M,L=null,N=0){M.isTexture!==!0&&(Wi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,M=arguments[1]);const F=Math.pow(2,-N),D=Math.floor(M.image.width*F),ne=Math.floor(M.image.height*F),oe=L!==null?L.x:0,pe=L!==null?L.y:0;Ie.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,N,0,0,oe,pe,D,ne),ye.unbindTexture()},this.copyTextureToTexture=function(M,L,N=null,F=null,D=0){M.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,M=arguments[1],L=arguments[2],D=arguments[3]||0,N=null);let ne,oe,pe,me,xe,Ce;N!==null?(ne=N.max.x-N.min.x,oe=N.max.y-N.min.y,pe=N.min.x,me=N.min.y):(ne=M.image.width,oe=M.image.height,pe=0,me=0),F!==null?(xe=F.x,Ce=F.y):(xe=0,Ce=0);const Me=we.convert(L.format),qe=we.convert(L.type);Ie.setTexture2D(L,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);const ot=P.getParameter(P.UNPACK_ROW_LENGTH),lt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Nt=P.getParameter(P.UNPACK_SKIP_PIXELS),Ye=P.getParameter(P.UNPACK_SKIP_ROWS),Se=P.getParameter(P.UNPACK_SKIP_IMAGES),Et=M.isCompressedTexture?M.mipmaps[D]:M.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Et.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Et.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pe),P.pixelStorei(P.UNPACK_SKIP_ROWS,me),M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,D,xe,Ce,ne,oe,Me,qe,Et.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,D,xe,Ce,Et.width,Et.height,Me,Et.data):P.texSubImage2D(P.TEXTURE_2D,D,xe,Ce,ne,oe,Me,qe,Et),P.pixelStorei(P.UNPACK_ROW_LENGTH,ot),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,lt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Nt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ye),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Se),D===0&&L.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(M,L,N=null,F=null,D=0){M.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,F=arguments[1]||null,M=arguments[2],L=arguments[3],D=arguments[4]||0);let ne,oe,pe,me,xe,Ce,Me,qe,ot;const lt=M.isCompressedTexture?M.mipmaps[D]:M.image;N!==null?(ne=N.max.x-N.min.x,oe=N.max.y-N.min.y,pe=N.max.z-N.min.z,me=N.min.x,xe=N.min.y,Ce=N.min.z):(ne=lt.width,oe=lt.height,pe=lt.depth,me=0,xe=0,Ce=0),F!==null?(Me=F.x,qe=F.y,ot=F.z):(Me=0,qe=0,ot=0);const Nt=we.convert(L.format),Ye=we.convert(L.type);let Se;if(L.isData3DTexture)Ie.setTexture3D(L,0),Se=P.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)Ie.setTexture2DArray(L,0),Se=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);const Et=P.getParameter(P.UNPACK_ROW_LENGTH),$e=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Wt=P.getParameter(P.UNPACK_SKIP_PIXELS),ni=P.getParameter(P.UNPACK_SKIP_ROWS),Ft=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,lt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,lt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,me),P.pixelStorei(P.UNPACK_SKIP_ROWS,xe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ce),M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Se,D,Me,qe,ot,ne,oe,pe,Nt,Ye,lt.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(Se,D,Me,qe,ot,ne,oe,pe,Nt,lt.data):P.texSubImage3D(Se,D,Me,qe,ot,ne,oe,pe,Nt,Ye,lt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Et),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,$e),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Wt),P.pixelStorei(P.UNPACK_SKIP_ROWS,ni),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ft),D===0&&L.generateMipmaps&&P.generateMipmap(Se),ye.unbindTexture()},this.initRenderTarget=function(M){Re.get(M).__webglFramebuffer===void 0&&Ie.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ie.setTextureCube(M,0):M.isData3DTexture?Ie.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ie.setTexture2DArray(M,0):Ie.setTexture2D(M,0),ye.unbindTexture()},this.resetState=function(){I=0,C=0,A=null,ye.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Aa?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Zr?"display-p3":"srgb"}}class La{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=i}clone(){return new La(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class cm extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Rl extends ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zo=new ut,fa=new Pa,br=new jr,Er=new U;class hm extends Ut{constructor(e=new sn,t=new Rl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(r),br.radius+=s,e.ray.intersectsSphere(br)===!1)return;zo.copy(r).invert(),fa.copy(e.ray).applyMatrix4(zo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=d,_=m;g<_;g++){const p=c.getX(g);Er.fromBufferAttribute(u,p),ko(Er,p,l,r,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=d,_=m;g<_;g++)Er.fromBufferAttribute(u,g),ko(Er,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ko(n,e,t,i,r,s,a){const o=fa.distanceSqToPoint(n);if(o<t){const l=new U;fa.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Di extends It{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ia extends sn{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/r,m=new U,g=new Ve;for(let _=0;_<=r;_++){for(let p=0;p<=i;p++){const f=s+p/i*a;m.x=u*Math.cos(f),m.y=u*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<r;_++){const p=_*(i+1);for(let f=0;f<i;f++){const T=f+p,y=T,E=T+i+1,I=T+i+2,C=T+1;o.push(y,E,C),o.push(E,I,C)}}this.setIndex(o),this.setAttribute("position",new tn(l,3)),this.setAttribute("normal",new tn(c,3)),this.setAttribute("uv",new tn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class um{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ho(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ho();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ho(){return(typeof performance>"u"?Date:performance).now()}const Go=new ut;class wl{constructor(e,t,i=0,r=1/0){this.ray=new Pa(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ra,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Go.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Go),this}intersectObject(e,t=!0,i=[]){return pa(e,this,i,t),i.sort(Vo),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)pa(e[r],this,i,t);return i.sort(Vo),i}}function Vo(n,e){return n.distance-e.distance}function pa(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)pa(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);class dm{constructor(e){this.camera=e}raycaster=new wl;pointer=new Ve;alphaContexts=new WeakMap;pick(e,t,i,r=18){if(i.width<=0||i.height<=0||t.x<0||t.y<0||t.x>i.width||t.y>i.height)return null;this.camera.updateWorldMatrix(!0,!1),this.pointer.set(t.x/i.width*2-1,1-t.y/i.height*2),this.raycaster.setFromCamera(this.pointer,this.camera);let s=null,a=1/0,o=null;for(const l of e){if(!this.isVisible(l.object))continue;const c=this.artMeshes(l.object);for(const h of this.raycaster.intersectObjects(c,!1)){const u=h.point.clone().project(this.camera).z;u<-1||u>1||h.distance>=a||!this.isPainted(h)||(s=l,a=h.distance)}if(l.generous)for(const h of c){const u=this.screenBounds(h,i);if(!u)continue;const d=this.paddedHit(l,u,t,r);d&&(!o||this.isCloser(d,o))&&(o=d)}}return s??o?.hotspot??null}isVisible(e){for(let t=e;t;t=t.parent)if(!t.visible)return!1;return!0}artMeshes(e){const t=[];return e.updateWorldMatrix(!0,!0),e.traverseVisible(i=>{const r=i;if(!r.isMesh||!r.userData.render)return;(Array.isArray(r.material)?r.material:[r.material]).some(a=>a.visible)&&t.push(r)}),t}screenBounds(e,t){e.geometry.boundingBox||e.geometry.computeBoundingBox();const i=e.geometry.boundingBox;if(!i)return null;const r={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};for(const[s,a]of[[i.min.x,i.min.y],[i.max.x,i.min.y],[i.max.x,i.max.y],[i.min.x,i.max.y]]){const o=new U(s,a,i.min.z).applyMatrix4(e.matrixWorld).project(this.camera);if(o.z<-1||o.z>1||!Number.isFinite(o.x+o.y))return null;const l=(o.x+1)*t.width/2,c=(1-o.y)*t.height/2;r.minX=Math.min(r.minX,l),r.maxX=Math.max(r.maxX,l),r.minY=Math.min(r.minY,c),r.maxY=Math.max(r.maxY,c)}return r.maxX<0||r.maxY<0||r.minX>t.width||r.minY>t.height?null:r}paddedHit(e,t,i,r){const s=Math.max(t.minX-i.x,0,i.x-t.maxX),a=Math.max(t.minY-i.y,0,i.y-t.maxY),o=Math.hypot(s,a);if(o>r)return null;const l=(t.minX+t.maxX)/2,c=(t.minY+t.maxY)/2;return{hotspot:e,edgeDistance:o,centerDistance:Math.hypot(i.x-l,i.y-c)}}isCloser(e,t){return e.edgeDistance<t.edgeDistance||e.edgeDistance===t.edgeDistance&&e.centerDistance<t.centerDistance}isPainted(e){const r=e.object.material.map?.image;if(!e.uv||!r||typeof r.getContext!="function")return!0;let s=this.alphaContexts.get(r);if(s===void 0&&(s=r.getContext("2d",{willReadFrequently:!0}),this.alphaContexts.set(r,s)),!s)return!0;const a=Math.min(r.width-1,Math.max(0,Math.floor(e.uv.x*r.width))),o=Math.min(r.height-1,Math.max(0,Math.floor((1-e.uv.y)*r.height)));return s.getImageData(a,o,1,1).data[3]>32}}class fm{constructor(e,t){this.camera=e,this.surface=t,this.overlay=this.createOverlay()}raycaster=new wl;overlay;canvas=null;label=null;show(e,t,i,r){if(!this.overlay||!this.canvas||!this.label||t.width<=0||t.height<=0)return;Object.assign(this.overlay.style,{display:"block",left:`${t.left}px`,top:`${t.top}px`,width:`${t.width}px`,height:`${t.height}px`}),this.raycaster.setFromCamera(e,this.camera);const s=[`tap ${e.x.toFixed(2)},${e.y.toFixed(2)}  pieces:${i.length}  picked:${r?"YES":"no"}`,...this.surfaceReport(e,t)];for(const[a,o]of i.entries()){const c=this.raycaster.intersectObject(o.object,!0).filter(h=>h.object.userData.render);s.push(`#${a} gen:${o.generous?1:0} art hits:${c.length}`)}this.label.textContent=s.join(`
`),this.drawMarkers(e,t,i)}surfaceReport(e,t){const i=t.left+(e.x+1)*t.width/2,r=t.top+(1-e.y)*t.height/2,s=c=>c.toFixed(1),a=[`client ${s(i)},${s(r)}  DPR ${window.devicePixelRatio}`,`canvas CSS ${s(t.left)},${s(t.top)} ${s(t.width)}x${s(t.height)}`],o=window.visualViewport;if(o&&a.push(`visual ${s(o.width)}x${s(o.height)} offset ${s(o.offsetLeft)},${s(o.offsetTop)} scale ${s(o.scale)}`),this.camera.isPerspectiveCamera){const c=this.camera;a.push(`camera aspect ${c.aspect.toFixed(3)} FOV ${s(c.fov)}`)}const l=this.surface;if(l&&typeof l.getContext=="function"){const c=l.getContext("webgl2");if(a.push(`backing ${l.width}x${l.height}`),c){const h=Array.from(c.getParameter(c.VIEWPORT));a.push(`GL buffer ${c.drawingBufferWidth}x${c.drawingBufferHeight} viewport ${h.join(",")}`)}}return a}dispose(){this.overlay?.remove()}createOverlay(){if(typeof window>"u"||!new URLSearchParams(window.location.search).has("debug"))return null;const e=document.createElement("div");return Object.assign(e.style,{display:"none",position:"fixed",zIndex:"199",pointerEvents:"none"}),this.canvas=document.createElement("canvas"),Object.assign(this.canvas.style,{display:"block",width:"100%",height:"100%"}),this.label=document.createElement("pre"),Object.assign(this.label.style,{position:"absolute",left:"8px",top:"8px",margin:"0",padding:"8px 10px",maxWidth:"calc(100% - 16px)",font:"12px/1.35 monospace",color:"#0a0",background:"rgba(255,255,255,0.85)",borderRadius:"6px",whiteSpace:"pre-wrap"}),e.append(this.canvas,this.label),document.body.appendChild(e),e}drawMarkers(e,t,i){const r=this.canvas;if(!r)return;const s=window.devicePixelRatio||1,a=Math.round(t.width*s),o=Math.round(t.height*s);r.width!==a&&(r.width=a),r.height!==o&&(r.height=o);const l=r.getContext("2d");if(!l)return;l.setTransform(s,0,0,s,0,0),l.clearRect(0,0,t.width,t.height),l.strokeStyle="rgba(0,180,0,0.9)",l.lineWidth=2;for(const u of i)u.object.traverse(d=>{const m=d;!m.isMesh||!m.userData.render||!m.geometry||this.drawArtBox(l,m,t)});const c=(e.x*.5+.5)*t.width,h=(-e.y*.5+.5)*t.height;l.strokeStyle="red",l.beginPath(),l.moveTo(c-16,h),l.lineTo(c+16,h),l.moveTo(c,h-16),l.lineTo(c,h+16),l.stroke()}drawArtBox(e,t,i){t.geometry.boundingBox||t.geometry.computeBoundingBox();const r=t.geometry.boundingBox;if(!r)return;t.updateWorldMatrix(!0,!1);const s=[[r.min.x,r.min.y],[r.max.x,r.min.y],[r.max.x,r.max.y],[r.min.x,r.max.y]];e.beginPath();for(const[a,[o,l]]of s.entries()){const c=new U(o,l,0).applyMatrix4(t.matrixWorld).project(this.camera),h=(c.x*.5+.5)*i.width,u=(-c.y*.5+.5)*i.height;a===0?e.moveTo(h,u):e.lineTo(h,u)}e.closePath(),e.stroke()}}class pm{constructor(e,t){this.domElement=t,this.picker=new dm(e),this.diagnostics=new fm(e,t),t.addEventListener("pointermove",this.handlePointerMove),t.addEventListener("pointerdown",this.handlePointerDown),t.addEventListener("pointerup",this.handlePointerUp),t.addEventListener("pointercancel",this.handlePointerCancel),t.addEventListener("lostpointercapture",this.handlePointerCancel)}hotspots=[];presses=new Map;picker;diagnostics;hovered=null;enabled=!0;register(e){this.hotspots.push(e)}unregister(e){const t=this.hotspots.findIndex(i=>i.object===e);t<0||(this.hovered===this.hotspots[t]&&this.setHovered(null),this.hotspots.splice(t,1))}clear(){this.resetPresses(),this.setHovered(null),this.hotspots.length=0}setEnabled(e){this.enabled=e,e||(this.resetPresses(),this.setHovered(null))}dispose(){this.clear(),this.diagnostics.dispose(),this.domElement.removeEventListener("pointermove",this.handlePointerMove),this.domElement.removeEventListener("pointerdown",this.handlePointerDown),this.domElement.removeEventListener("pointerup",this.handlePointerUp),this.domElement.removeEventListener("pointercancel",this.handlePointerCancel),this.domElement.removeEventListener("lostpointercapture",this.handlePointerCancel)}point(e){const t=this.domElement.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}pick(e){const t=this.domElement.getBoundingClientRect(),i=e.pointerType==="mouse"?8:18;return this.picker.pick(this.hotspots,this.point(e),t,i)}setHovered(e){this.hovered!==e&&(this.hovered?.onHover?.(!1),this.hovered=e,this.hovered?.onHover?.(!0),this.domElement.style.cursor=e?e.cursor??"pointer":"default")}release(e){this.presses.delete(e),this.domElement.hasPointerCapture(e)&&this.domElement.releasePointerCapture(e)}resetPresses(){for(const e of this.presses.keys())this.release(e)}handlePointerMove=e=>{this.enabled&&e.pointerType==="mouse"&&this.setHovered(this.pick(e))};handlePointerDown=e=>{!this.enabled||e.button!==0||(this.presses.set(e.pointerId,{point:this.point(e),hotspot:this.pick(e)}),this.domElement.setPointerCapture(e.pointerId))};handlePointerUp=e=>{const t=this.presses.get(e.pointerId);if(this.release(e.pointerId),!this.enabled||!t)return;const i=this.point(e);if(Math.hypot(i.x-t.point.x,i.y-t.point.y)>30||t.hotspot&&!this.hotspots.includes(t.hotspot))return;const s=t.hotspot??this.pick(e),a=this.domElement.getBoundingClientRect(),o=new Ve(i.x/a.width*2-1,1-i.y/a.height*2);this.diagnostics.show(o,a,this.hotspots,s),s?.onClick()};handlePointerCancel=e=>{this.release(e.pointerId)}}class mm{constructor(e){this.narrator=e,this.titleCard=document.getElementById("title-card"),this.startButton=document.getElementById("start-button"),this.caption=document.getElementById("caption"),this.endCard=document.getElementById("end-card"),this.endTitle=document.getElementById("end-title"),this.endSubtitle=document.getElementById("end-subtitle")}titleCard;startButton;caption;endCard;endTitle;endSubtitle;captionTimer=0;onStart(e){this.startButton.addEventListener("click",()=>{this.titleCard.inert=!0,this.titleCard.classList.add("hidden"),e()},{once:!0})}showCaption(e,t=0){this.caption.textContent=e,this.caption.classList.add("visible"),this.captionTimer=t>0?t:0,this.narrator?.speak(e)}hideCaption(){this.caption.classList.remove("visible"),this.captionTimer=0}showEndCard(e,t){this.hideCaption(),this.endTitle.textContent=e,this.endSubtitle.textContent=t,this.endCard.classList.add("visible"),this.narrator?.speak(`${e}. ${t}`)}update(e){this.captionTimer>0&&(this.captionTimer-=e,this.captionTimer<=0&&this.hideCaption())}}const gm=1200,_m=5e3,vm=250,Mm=9e4;class Sm{constructor(e=()=>performance.now()){this.now=e,this.synth&&(this.pickVoice(),this.synth.addEventListener?.("voiceschanged",()=>this.pickVoice()))}synth=typeof window<"u"?window.speechSynthesis??null:null;voice=null;current=null;enabled=!0;rate=.92;pitch=1;get isSpeaking(){const e=this.current;if(!e||!this.synth)return!1;const t=this.now();if(t-e.requestedAt>Mm)return this.cancel(),!1;if(this.synth.speaking)return e.observedActivity=!0,e.lastActivityAt=t,!0;if(this.synth.pending&&!e.observedActivity)return t-e.requestedAt<=_m?!0:(this.cancel(),!1);const i=e.observedActivity?vm:gm;return t-e.lastActivityAt<=i?!0:(this.finish(e),!1)}pickVoice(){const e=this.synth?.getVoices()??[];this.voice=e.find(t=>/^en(-|_|$)/i.test(t.lang))??e[0]??null}speak(e){if(!this.enabled||!this.synth||!e.trim()||typeof SpeechSynthesisUtterance>"u")return;this.cancel();const t=new SpeechSynthesisUtterance(e);this.voice&&(t.voice=this.voice),t.rate=this.rate,t.pitch=this.pitch;const i={utterance:t,requestedAt:this.now(),lastActivityAt:this.now(),observedActivity:!1};this.current=i,t.onstart=()=>{this.current===i&&(i.observedActivity=!0,i.lastActivityAt=this.now())},t.onend=()=>this.finish(i),t.onerror=()=>this.finish(i);try{this.synth.speak(t)}catch{this.finish(i)}}cancel(){this.current=null,this.synth?.cancel()}finish(e){this.current===e&&(this.current=null)}setEnabled(e){this.enabled=e,e||this.cancel()}}class ym{ctx;master=null;musicGain=null;reverbSend=null;noiseBuffer=null;enabled=!0;lastPop=0;ambientTimer=0;constructor(){const e=window.AudioContext??window.webkitAudioContext;if(!e){this.ctx=null;return}this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.85;const t=this.ctx.createBiquadFilter();t.type="highshelf",t.frequency.value=3200,t.gain.value=-6;const i=this.ctx.createDynamicsCompressor();i.threshold.value=-10,i.knee.value=24,i.ratio.value=4,i.attack.value=.004,i.release.value=.25,this.master.connect(t),t.connect(i),i.connect(this.ctx.destination);const r=this.ctx.createConvolver();r.buffer=this.buildImpulse(2.6,2.4);const s=this.ctx.createGain();s.gain.value=.9,this.reverbSend=this.ctx.createGain(),this.reverbSend.gain.value=1,this.reverbSend.connect(r),r.connect(s),s.connect(this.master),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=0,this.musicGain.connect(this.master);const a=Math.floor(this.ctx.sampleRate*1);this.noiseBuffer=this.ctx.createBuffer(1,a,this.ctx.sampleRate);const o=this.noiseBuffer.getChannelData(0);for(let l=0;l<a;l++)o[l]=Math.random()*2-1}buildImpulse(e,t){const i=this.ctx,r=i.sampleRate,s=Math.max(1,Math.floor(e*r)),a=i.createBuffer(2,s,r);for(let o=0;o<2;o++){const l=a.getChannelData(o);for(let c=0;c<s;c++){const h=c/s,u=Math.min(1,h*40)*Math.pow(1-h,t);l[c]=(Math.random()*2-1)*u}}return a}resume(){this.ctx&&(this.ctx.state==="suspended"&&this.ctx.resume(),this.musicGain&&this.musicGain.gain.setTargetAtTime(.12,this.ctx.currentTime,2),this.scheduleAmbient())}setEnabled(e){this.enabled=e,this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?.85:0,this.ctx.currentTime,.1)}tone(e,t,i={}){if(!this.ctx||!this.master)return;const{type:r="sine",gain:s=.2,attack:a=.005,delay:o=0,pan:l=0,reverb:c=.35,glide:h=0}=i,u=i.target??this.master,d=this.ctx.currentTime+o,m=this.ctx.createOscillator(),g=this.ctx.createGain(),_=this.ctx.createStereoPanner();if(_.pan.value=Math.max(-1,Math.min(1,l)),m.type=r,m.frequency.setValueAtTime(e,d),h&&m.frequency.exponentialRampToValueAtTime(e*Math.pow(2,h/1200),d+a+.04),g.gain.setValueAtTime(1e-4,d),g.gain.linearRampToValueAtTime(s,d+a),g.gain.exponentialRampToValueAtTime(1e-4,d+t),m.connect(g),g.connect(_),_.connect(u),this.reverbSend&&c>0){const p=this.ctx.createGain();p.gain.value=c,_.connect(p),p.connect(this.reverbSend)}m.start(d),m.stop(d+t+.05)}noise(e,t={}){if(!this.ctx||!this.master||!this.noiseBuffer)return;const{gain:i=.15,type:r="bandpass",from:s=1200,to:a=s,pan:o=0,reverb:l=.25}=t,c=this.ctx.currentTime,h=this.ctx.createBufferSource();h.buffer=this.noiseBuffer;const u=this.ctx.createBiquadFilter();u.type=r,u.frequency.setValueAtTime(s,c),u.frequency.exponentialRampToValueAtTime(Math.max(60,a),c+e),u.Q.value=.8;const d=this.ctx.createGain();d.gain.setValueAtTime(i,c),d.gain.exponentialRampToValueAtTime(1e-4,c+e);const m=this.ctx.createStereoPanner();if(m.pan.value=Math.max(-1,Math.min(1,o)),h.connect(u),u.connect(d),d.connect(m),m.connect(this.master),this.reverbSend&&l>0){const g=this.ctx.createGain();g.gain.value=l,m.connect(g),g.connect(this.reverbSend)}h.start(c),h.stop(c+e+.02)}pop(){if(!this.ctx||!this.master||!this.enabled)return;const e=this.ctx.currentTime;if(e-this.lastPop<.03)return;this.lastPop=e;const t=(Math.random()-.5)*1.2,i=this.ctx.createStereoPanner();i.pan.value=Math.max(-1,Math.min(1,t));const r=this.ctx.createBiquadFilter();if(r.type="lowpass",r.frequency.value=1400,r.Q.value=.4,r.connect(i),i.connect(this.master),this.reverbSend){const h=this.ctx.createGain();h.gain.value=.22,i.connect(h),h.connect(this.reverbSend)}const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine";const o=420+Math.random()*160;s.frequency.setValueAtTime(o,e),s.frequency.exponentialRampToValueAtTime(150,e+.08),a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(.42,e+.008),a.gain.exponentialRampToValueAtTime(1e-4,e+.18),s.connect(a),a.connect(r),s.start(e),s.stop(e+.22);const l=this.ctx.createOscillator(),c=this.ctx.createGain();if(l.type="sine",l.frequency.setValueAtTime(150,e),l.frequency.exponentialRampToValueAtTime(80,e+.1),c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(.22,e+.008),c.gain.exponentialRampToValueAtTime(1e-4,e+.15),l.connect(c),c.connect(r),l.start(e),l.stop(e+.18),this.noiseBuffer){const h=this.ctx.createBufferSource();h.buffer=this.noiseBuffer;const u=this.ctx.createBiquadFilter();u.type="lowpass",u.frequency.value=900;const d=this.ctx.createGain();d.gain.setValueAtTime(.12,e),d.gain.exponentialRampToValueAtTime(1e-4,e+.06),h.connect(u),u.connect(d),d.connect(r),h.start(e),h.stop(e+.09)}}chime(e=0){const t=[523.25,587.33,659.25,783.99,880,987.77,1046.5],i=t[Math.min(e,t.length-1)],r=(Math.random()-.5)*.6;this.tone(i,.9,{type:"sine",gain:.22,attack:.004,pan:r,reverb:.6,glide:12}),this.tone(i*2,.5,{type:"sine",gain:.06,attack:.004,pan:r,reverb:.6}),this.tone(i*3,.35,{type:"sine",gain:.025,attack:.004,pan:r,reverb:.6}),this.tone(i*1.5,.6,{type:"triangle",gain:.04,attack:.006,pan:r,reverb:.6})}success(){const e=[523.25,659.25,783.99,1046.5,1318.5];e.forEach((t,i)=>{const r=-.4+i/(e.length-1)*.8;this.tone(t,.9,{type:"sine",gain:.18,attack:.004,delay:i*.11,pan:r,reverb:.7}),this.tone(t*2,.55,{type:"sine",gain:.04,attack:.004,delay:i*.11,pan:r,reverb:.7})}),this.tone(1046.5,1.6,{type:"sine",gain:.05,attack:.02,delay:.55,reverb:.85,glide:6})}whoosh(){this.noise(.55,{gain:.14,type:"lowpass",from:2200,to:320,pan:-.6,reverb:.4}),this.noise(.5,{gain:.08,type:"lowpass",from:1800,to:260,pan:.6,reverb:.4})}pageTurn(){this.sweep(0,1),this.sweep(1.15,.6)}sweep(e,t){if(!this.ctx||!this.master||!this.noiseBuffer)return;const i=this.ctx.currentTime+e,r=1.1,s=this.ctx.createBufferSource();s.buffer=this.noiseBuffer,s.loop=!0;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.Q.value=.6,a.frequency.setValueAtTime(500,i),a.frequency.exponentialRampToValueAtTime(2600,i+r*.45),a.frequency.exponentialRampToValueAtTime(300,i+r);const o=this.ctx.createGain();o.gain.setValueAtTime(1e-4,i),o.gain.linearRampToValueAtTime(.2*t,i+.18),o.gain.setValueAtTime(.2*t,i+r*.6),o.gain.exponentialRampToValueAtTime(1e-4,i+r);const l=this.ctx.createStereoPanner();if(l.pan.setValueAtTime(-.85,i),l.pan.linearRampToValueAtTime(.85,i+r),s.connect(a),a.connect(o),o.connect(l),l.connect(this.master),this.reverbSend){const u=this.ctx.createGain();u.gain.value=.5,l.connect(u),u.connect(this.reverbSend)}s.start(i),s.stop(i+r+.05);const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(120,i),c.frequency.exponentialRampToValueAtTime(60,i+r),h.gain.setValueAtTime(1e-4,i),h.gain.linearRampToValueAtTime(.14*t,i+.25),h.gain.exponentialRampToValueAtTime(1e-4,i+r),c.connect(h),h.connect(this.master),c.start(i),c.stop(i+r+.05)}scheduleAmbient(){if(!this.ctx||!this.musicGain)return;const e=this.musicGain;window.clearTimeout(this.ambientTimer);const t=[523.25,587.33,659.25,783.99,880],i=()=>{if(this.ctx&&this.enabled){const r=t[Math.floor(Math.random()*t.length)]*(Math.random()<.3?.5:1),s=(Math.random()-.5)*1.2;this.tone(r,1.8,{type:"sine",gain:.5,attack:.02,target:e,pan:s,reverb:.8}),Math.random()<.35&&this.tone(r*1.25,1.6,{type:"sine",gain:.22,attack:.03,delay:.08,target:e,pan:s,reverb:.8})}this.ambientTimer=window.setTimeout(i,1400+Math.random()*1600)};this.ambientTimer=window.setTimeout(i,800)}}class Tm{constructor(e,t){this.ctx=e,this.transition=t}current=null;go(e,t={}){t.wipe&&this.transition?(this.ctx.sound.pageTurn(),this.transition.wipe(()=>this.swap(e))):this.swap(e)}swap(e){this.current?.exit(),this.current=e,e.enter(this.ctx)}update(e){this.current?.update(e)}}async function Ln(n,e,t,i=0){const r=e[e.length-1];let s=null,a;try{typeof n.animate=="function"&&(s=n.animate(e,{duration:t,delay:i,easing:"cubic-bezier(0.36, 0.02, 0.24, 1)",fill:"both"}),await Promise.race([s.finished.catch(()=>{}),new Promise(o=>{a=setTimeout(o,t+i+250)})]))}catch{}finally{a!==void 0&&clearTimeout(a);for(const[o,l]of Object.entries(r))o!=="offset"&&o!=="easing"&&o!=="composite"&&Reflect.set(n.style,o,l);s?.cancel()}}const Wo=8,Xo="translate3d(0, 0, 0) rotateY(0deg) rotateZ(0deg)";class bm{container;sheet;shield;shadow;strips=[];reducedMotion=!1;constructor(e){this.container=this.element("page-turn"),this.container.setAttribute("aria-hidden","true"),this.container.style.setProperty("--turn-paper",e),this.shadow=this.element("page-turn-shadow"),this.shield=this.element("page-turn-shield"),this.sheet=this.element("page-turn-sheet");for(let t=0;t<Wo;t++){const i=this.element("page-turn-strip");i.style.setProperty("--strip-index",String(t));const r=this.element("page-turn-face page-turn-front"),s=this.element("page-turn-face page-turn-back");if(t===1||t===5){const a=this.element("page-turn-ornament");a.textContent=t===1?"✧":"✦",r.appendChild(a)}i.append(r,s),this.sheet.appendChild(i),this.strips.push(i)}this.sheet.appendChild(this.element("page-turn-golden-edge")),this.container.append(this.shadow,this.shield,this.sheet),(document.getElementById("app")??document.body).appendChild(this.container),this.hide()}show(){this.reducedMotion=typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)").matches===!0,this.container.style.visibility="visible",this.container.style.pointerEvents="auto",this.shield.style.opacity="0",this.shadow.style.opacity="0",this.sheet.style.display=this.reducedMotion?"none":"grid"}async cover(e){this.reducedMotion?await Ln(this.shield,[{opacity:0},{opacity:1}],Math.min(e,220)):await Promise.all([Ln(this.sheet,[{transform:"translate3d(108%, 0, 0) rotateY(-18deg) rotateZ(2deg)"},{transform:Xo}],e),Ln(this.shadow,[{opacity:0},{opacity:.48}],e),...this.strips.map((t,i)=>Ln(t,[{transform:this.curl(i,-1)},{transform:"translateZ(0px) rotateY(0deg)"}],Math.max(0,e-i*12),i*12))]),this.shield.style.opacity="1"}async reveal(e){if(this.reducedMotion){await Ln(this.shield,[{opacity:1},{opacity:0}],Math.min(e,220));return}this.shield.style.opacity="0",await Promise.all([Ln(this.sheet,[{transform:Xo},{transform:"translate3d(-108%, 0, 0) rotateY(22deg) rotateZ(-2.5deg)"}],e),Ln(this.shadow,[{opacity:.48},{opacity:0}],e),...this.strips.map((t,i)=>Ln(t,[{transform:"translateZ(0px) rotateY(0deg)"},{transform:this.curl(i,1)}],Math.max(0,e-i*10),i*10))])}hide(){this.container.style.pointerEvents="none",this.container.style.visibility="hidden",this.shield.style.opacity="0"}curl(e,t){return`translateZ(${(Math.sin((e+.5)/Wo*Math.PI)*76).toFixed(1)}px) rotateY(${t*(30-e*6)}deg)`}element(e){const t=document.createElement("div");return t.className=e,t}}class Em{view;requests=[];busy=!1;constructor(e="#f5eddb"){this.view=new bm(e)}wipe(e,t=850){this.requests.push({onCovered:e,duration:Number.isFinite(t)?Math.max(0,t):850}),this.busy||this.playRequests()}async playRequests(){for(this.busy=!0;this.requests.length>0;){const e=this.requests.shift();try{this.view.show(),await this.view.cover(e.duration),e.onCovered(),await this.view.reveal(e.duration)}catch(t){console.error("Paper Bloom could not finish a page turn.",t)}finally{this.view.hide()}}this.busy=!1}}const xm=new Be("#efe9d8"),qo=72,Yo=1.6,Am=120;function Cm(){const n=document.createElement("canvas");n.width=4,n.height=256;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,n.height);t.addColorStop(0,"#f7f2e4"),t.addColorStop(.55,"#efe9d8"),t.addColorStop(1,"#e4dcc6"),e.fillStyle=t,e.fillRect(0,0,n.width,n.height);const i=new Di(n);return i.colorSpace=Ct,i}class Pm{renderer;scene=new cm;camera;interaction;hud;narrator;sound;scenes;clock=new um;viewportObserver;running=!1;constructor(e){const t=typeof navigator<"u"&&/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);this.renderer=new lm({canvas:e,antialias:!t,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,t?1.5:2)),this.renderer.outputColorSpace=Ct,this.scene.background=Cm(),this.scene.fog=new La(xm,18,40),this.camera=new Gt(72,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(0,1.5,0),this.interaction=new pm(this.camera,e),this.narrator=new Sm,this.sound=new ym,this.hud=new mm(this.narrator);const i={scene:this.scene,camera:this.camera,interaction:this.interaction,hud:this.hud,narrator:this.narrator,sound:this.sound};this.scenes=new Tm(i,new Em),this.viewportObserver=new ResizeObserver(this.resize),this.viewportObserver.observe(e),this.resize()}start(e){this.sound.resume(),this.scenes.go(e),!this.running&&(this.running=!0,this.clock.start(),this.renderer.setAnimationLoop(this.tick))}tick=()=>{const e=Math.min(this.clock.getDelta(),.1);this.scenes.update(e),this.hud.update(e),this.renderer.render(this.scene,this.camera)};resize=()=>{const{width:e,height:t}=this.renderer.domElement.getBoundingClientRect();if(e<=0||t<=0)return;const i=e/t;if(this.camera.aspect=i,i<Yo){const r=Math.tan(Zt.degToRad(qo)/2)*Yo,s=Zt.radToDeg(2*Math.atan(r/i));this.camera.fov=Math.min(s,Am)}else this.camera.fov=qo;this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1)}}const Rm=.85,wm=1.4,Lm=4e3,Im=.6,$o=["#f16767","#ffb34e","#f9df63","#7cc77f","#6fc9ed","#9c85df","#e88ac6"];class Dm{constructor(e,t,i=3,r=2){this.kind=e,this.positions=new Float32Array(t*3),this.origins=new Float32Array(t*3),this.velocities=new Float32Array(t*3),this.births=new Float32Array(t);const s=new Float32Array(t*3);for(let l=0;l<t;l++){const c=l*3;this.positions[c]=(Math.random()-.5)*i*1.5,this.positions[c+1]=-r*(.55+Math.random()*.2),this.positions[c+2]=(Math.random()-.5)*.5,this.velocities[c]=(Math.random()-.5)*1.4,this.velocities[c+1]=r*(.55+Math.random()*.45),this.velocities[c+2]=(Math.random()-.5)*.12,this.births[l]=l/t+(e==="star"?.08:0);const h=new Be(e==="star"?"#fff0ab":$o[l%$o.length]);s.set([h.r,h.g,h.b],c)}this.origins.set(this.positions);const a=new sn;a.setDrawRange(0,0),a.setAttribute("position",new zt(this.positions,3).setUsage(Dc)),a.setAttribute("color",new zt(s,3));const o=new Rl({map:this.createTexture(),size:e==="paper"?.2:.32,sizeAttenuation:!0,vertexColors:!0,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1,blending:e==="star"?Us:Jn});this.points=new hm(a,o),this.points.frustumCulled=!1,this.points.renderOrder=e==="paper"?10:11}points;velocities;positions;origins;births;disposed=!1;update(e,t){if(this.disposed)return;let i=0;for(let a=0;a<this.births.length;a++){const o=t-this.births[a];if(o<0)break;const l=a*3,c=a*2.4,h=(1-Math.exp(-.65*o))/.65,u=(Math.sin(o*4+c)-Math.sin(c))*.12,d=this.kind==="paper"?.65:.45;this.positions[l]=this.origins[l]+this.velocities[l]*h+u,this.positions[l+1]=this.origins[l+1]+this.velocities[l+1]*o-d*o*o/2,this.positions[l+2]=this.origins[l+2]+this.velocities[l+2]*o,i++}this.points.geometry.setDrawRange(0,i),this.points.geometry.getAttribute("position").needsUpdate=!0;const r=1-Zt.smoothstep(t,2.5,4),s=this.kind==="star"?.9+Math.sin(t*7)*.1:1;this.points.material.opacity=r*s}dispose(){this.disposed||(this.disposed=!0,this.points.removeFromParent(),this.points.geometry.dispose(),this.points.material.map?.dispose(),this.points.material.dispose())}createTexture(){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d");this.kind==="star"?this.drawStar(t):this.drawPaper(t);const i=new Di(e);return i.colorSpace=Ct,i}drawPaper(e){e.beginPath(),e.moveTo(19,8),e.lineTo(49,19),e.lineTo(42,56),e.lineTo(13,44),e.closePath(),e.fillStyle="#fffdf4",e.fill(),e.strokeStyle="#8c8270",e.lineWidth=2,e.stroke()}drawStar(e){const t=e.createRadialGradient(32,32,3,32,32,32);t.addColorStop(0,"rgba(255,255,255,0.6)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),e.beginPath();for(let i=0;i<10;i++){const r=-Math.PI/2+i*Math.PI/5,s=i%2===0?24:10,a=32+Math.cos(r)*s,o=32+Math.sin(r)*s;i===0?e.moveTo(a,o):e.lineTo(a,o)}e.closePath(),e.fillStyle="#ffffff",e.fill()}}const Ko=4,ws=["#e96776","#f7ac58","#ffe276","#82cc91","#7bcbed","#a28cdd","#e8a1cf"];class Um{constructor(e,t=!1){this.root=e,this.reducedMotion=t}group=null;rings=[];ringGeometry=null;particles=[];heroine;heroineBaseY=0;elapsed=0;start(e,t){this.dispose(),this.elapsed=0,this.heroine=t,this.heroineBaseY=t?.root.position.y??0,this.group=new en,this.group.name="chapter-celebration",this.root.add(this.group),this.root.updateWorldMatrix(!0,!0),e.updateWorldMatrix(!0,!1),this.createRing(e,t),this.reducedMotion||this.createBurst(e)}update(e){if(!this.group)return;const t=Math.max(0,e);if(this.elapsed+=t,this.elapsed>=Ko){this.dispose();return}for(const i of this.particles)i.update(t,this.elapsed);this.updateRing(),this.updateHeroine()}dispose(){this.heroine&&(this.heroine.root.position.y=this.heroineBaseY),this.heroine=void 0;for(const e of this.particles)e.dispose();this.particles.length=0;for(const e of this.rings)e.material.dispose();this.rings.length=0,this.ringGeometry?.dispose(),this.ringGeometry=null,this.group?.removeFromParent(),this.group=null}createBurst(e){const t=new en,i=new U(0,-.2,-4).applyMatrix4(e.matrixWorld);t.position.copy(this.root.worldToLocal(i));const r=this.root.getWorldQuaternion(new ti),s=e.getWorldQuaternion(new ti);t.quaternion.copy(r.invert()).multiply(s),this.group.add(t);const a=e,o=a.isPerspectiveCamera?Math.tan(Zt.degToRad(a.fov)/2)*4:2.5,l=o*(a.isPerspectiveCamera?a.aspect:1.6);for(const[c,h]of[["paper",140],["star",60]]){const u=new Dm(c,h,l,o);this.particles.push(u),t.add(u.points)}}createRing(e,t){const i=new Ia(.65,1,64,7);this.ringGeometry=i;const r=i.getAttribute("position"),s=new Float32Array(r.count*3);for(let l=0;l<r.count;l++){const c=Math.hypot(r.getX(l),r.getY(l)),h=Math.min(ws.length-1,Math.floor((c-.65)/.35*ws.length)),u=new Be(ws[Math.max(0,h)]);s.set([u.r,u.g,u.b],l*3)}i.setAttribute("color",new zt(s,3));const a=new it({vertexColors:!0,transparent:!0,opacity:0,side:Ze,depthTest:!1,depthWrite:!1,fog:!1}),o=t?t.root.getWorldPosition(new U):new U(0,-1.4,-4).applyMatrix4(e.matrixWorld);this.root.worldToLocal(o);for(let l=0;l<(this.reducedMotion?1:2);l++){const c=new Ge(i,l===0?a:a.clone());c.position.set(o.x,.045+l*.002,o.z),c.rotation.x=-Math.PI/2,c.renderOrder=4,this.rings.push(c),this.group.add(c)}this.updateRing()}updateRing(){for(const[e,t]of this.rings.entries()){if(this.reducedMotion){t.scale.setScalar(1.8),t.material.opacity=Math.sin(Math.PI*Math.min(1,this.elapsed/Ko))*.38;continue}const i=Math.max(0,this.elapsed-e*.75),r=Math.min(1,i/3.2),s=1-Math.pow(1-r,3);t.scale.setScalar(.4+s*6.7);const a=Zt.smoothstep(i,0,.35);t.material.opacity=a*(1-Zt.smoothstep(i,1.5,3.3))*.65}}updateHeroine(){if(!this.heroine||this.reducedMotion)return;const e=1-Zt.smoothstep(this.elapsed,1,3.1),t=Math.pow(Math.sin(this.elapsed*Math.PI*1.2),2);this.heroine.root.position.y=this.heroineBaseY+t*e*.32}}const Ls=n=>Math.min(255,Math.max(0,n));let Is=null;function Ll(){if(Is)return Is;const n=512,e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d");t.fillStyle="#f3eede",t.fillRect(0,0,n,n);const i=t.getImageData(0,0,n,n),r=i.data;for(let s=0;s<n;s++)for(let a=0;a<n;a++){const o=(s*n+a)*4,l=(Math.random()-.5)*14,c=Math.PI*2/n,h=Math.sin(a*c*3+Math.cos(s*c*2))*5+Math.sin(s*c*5+Math.cos(a*c*4))*4,u=l+h;r[o]=Ls(r[o]+u),r[o+1]=Ls(r[o+1]+u),r[o+2]=Ls(r[o+2]+u*.82)}t.putImageData(i,0,0),t.strokeStyle="rgba(120, 108, 82, 0.03)",t.lineWidth=1;for(let s=2;s<n;s+=6)t.beginPath(),t.moveTo(0,s+Math.sin(s)*.5),t.lineTo(n,s+Math.cos(s)*.5),t.stroke();t.fillStyle="rgba(90, 80, 60, 0.06)";for(let s=0;s<90;s++){const a=Math.random()*n,o=Math.random()*n,l=Math.random()*1.4+.3;t.beginPath(),t.arc(a,o,l,0,Math.PI*2),t.fill()}t.fillStyle="rgba(255, 252, 240, 0.12)";for(let s=0;s<60;s++){const a=Math.random()*n,o=Math.random()*n,l=Math.random()*1.1+.2;t.beginPath(),t.arc(a,o,l,0,Math.PI*2),t.fill()}return Is=e,e}function dt(n){return n.createPattern(Ll(),"repeat")}function an(n=1){const e=new Di(Ll());return e.wrapS=e.wrapT=Gr,e.repeat.set(n,n),e.colorSpace=Ct,e.anisotropy=4,e}const ie="#211d18";function On(n,e,t,i,r,s=1.5){const a=i-e,o=r-t,l=Math.max(2,Math.round(Math.hypot(a,o)/24));n.beginPath(),n.moveTo(e,t);for(let c=1;c<=l;c++){const h=c/l,u=e+a*h+(Math.random()-.5)*s,d=t+o*h+(Math.random()-.5)*s;n.lineTo(u,d)}n.stroke()}const Xi=["#e4572e","#f3a712","#f7e733","#3fa34d","#2b8ac9","#4b3f9e","#9b4dca"];let ma=-1;const Zo=2.6;function Nm(){ma=performance.now()/1e3}function Fm(){if(ma<0)return-1;const n=performance.now()/1e3-ma;return n>Zo?-1:n/Zo}function ve(n,e){n.strokeStyle=ie,n.lineWidth=e}const Ui="#f3eede",be={bark:"#7c5327",barkDark:"#5c3d1d",leaf:"#5c9a3c",leafLight:"#7cbb54",leafDark:"#3f7a2a",grass:"#79ad48",grassDark:"#5c8f34",stone:"#a9a49a",stoneDark:"#7f7a70",wall:"#e7d3a4",wallDark:"#cdb078",roof:"#b8543a",roofDark:"#8f3d2a",door:"#6f4a2f",mushCap:"#d6452f",mushStem:"#efe6cf"};function Lt(n,e){const t=/^#?([0-9a-f]{6})$/i.exec(n.trim());if(!t)return n;const i=parseInt(t[1],16),r=l=>Math.max(0,Math.min(255,Math.round(l+e*255))),s=r(i>>16&255),a=r(i>>8&255),o=r(i&255);return`rgb(${s}, ${a}, ${o})`}function st(n,e,t){if(n.save(),e(),t){n.fillStyle=t,n.fill();const i=dt(n);i&&(n.globalAlpha=.12,n.fillStyle=i,n.fill(),n.globalAlpha=1)}else{n.fillStyle=Ui,n.fill();const i=dt(n);i&&(n.fillStyle=i,n.fill())}n.restore()}function ga(n,e,t,i,r,s,a){n.save(),e();const o=n.createLinearGradient(t,i,t,r);o.addColorStop(0,s),o.addColorStop(1,a),n.fillStyle=o,n.fill(),n.restore()}function ct(n,e,t,i,r,s,a){n.save(),e(),n.clip();const o=n.createRadialGradient(t-r*.35,i-r*.4,r*.1,t,i,r*1.25);o.addColorStop(0,s),o.addColorStop(1,a),n.fillStyle=o,n.fillRect(t-r*2,i-r*2,r*4,r*4),n.restore()}function Dn(n,e,t,i,r,s){n.save(),n.beginPath();const a=9;for(let o=0;o<=a;o++){const l=o/a*Math.PI*2,c=i*(.78+.22*Math.sin(o*3.1+r)*Math.cos(o*1.7+r)),h=e+Math.cos(l)*c,u=t+Math.sin(l)*c;if(o===0)n.moveTo(h,u);else{const d=(o-.5)/a*Math.PI*2,m=i*(.95+.12*Math.sin(o*5.3+r));n.quadraticCurveTo(e+Math.cos(d)*m,t+Math.sin(d)*m,h,u)}}n.closePath(),n.fillStyle=s,n.fill(),n.restore()}function Om(n,e,t,i,r=0){const s=e/2,a=e*.14,o=t*.17,l=o+a*.95,c=o+a*1.35,h=t*.52,u=t*.87,d=e*.15,m=e*.1,g=e*.26,_=a*.33,p=Fm();if(n.save(),p>=0){const I=1-(1-p)*(1-p);n.translate(s,o),n.rotate(I*Math.PI*6),n.translate(-s,-o)}const f=Xi.length*2;for(let I=0;I<f;I++){const C=I/(f-1),A=C<.5?-1:1,O=Math.abs(C-.5)*2*a*2.6,b=Math.PI+C*Math.PI,S=s+Math.cos(b)*a*.95,R=o+Math.sin(b)*a*.95-a*.2,G=Math.sin(r*2.2+I*.7)*a*(.5+Math.abs(C-.5)),z=Math.cos(r*1.7+I*.5)*a*.16,$=s+A*(a*.5+O)+G,Y=o+a*(2.4+Math.abs(C-.5)*2.6)+z;n.strokeStyle=Xi[I%Xi.length],n.lineWidth=e*.045,n.lineCap="round",n.beginPath(),n.moveTo(S,R),n.bezierCurveTo(s+A*a*2.4+G*.6,o+a*.8,s+A*a*1.6+G,o+a*2+z,$,Y),n.stroke()}n.restore(),st(n,()=>{n.beginPath(),n.moveTo(s-_,l-a*.1),n.lineTo(s-_,c+a*.3),n.lineTo(s+_,c+a*.3),n.lineTo(s+_,l-a*.1),n.closePath()}),ve(n,e*.014),n.strokeStyle=ie,n.beginPath(),n.moveTo(s-_,l-a*.1),n.lineTo(s-_,c),n.moveTo(s+_,l-a*.1),n.lineTo(s+_,c),n.stroke();const T=()=>{n.beginPath(),n.moveTo(s-d,c+a*.15),n.quadraticCurveTo(s-_*1.4,c-a*.05,s-_,c-a*.15),n.quadraticCurveTo(s,c+a*.35,s+_,c-a*.15),n.quadraticCurveTo(s+_*1.4,c-a*.05,s+d,c+a*.15),n.quadraticCurveTo(s+m*1.15,(c+h)/2,s+m,h),n.quadraticCurveTo(s+g*.7,(h+u)/2,s+g,u);for(let I=0;I<5;I++){const C=s+g-I/5*g*2,A=s+g-(I+1)/5*g*2;n.quadraticCurveTo((C+A)/2,u+t*.03,A,u)}n.quadraticCurveTo(s-g*.7,(h+u)/2,s-m,h),n.quadraticCurveTo(s-m*1.15,(c+h)/2,s-d,c+a*.15),n.closePath()};st(n,T),ct(n,T,s-e*.05,t*.6,e*.3,"rgba(255,255,250,0.3)","rgba(40,35,28,0.16)"),ve(n,e*.016),n.strokeStyle=ie,T(),n.stroke(),n.lineWidth=e*.01,n.beginPath(),n.moveTo(s-m,h),n.quadraticCurveTo(s,h+t*.01,s+m,h);for(const I of[-.5,0,.5])n.moveTo(s+I*g*.9,h+t*.03),n.lineTo(s+I*g*1.2,u-t*.02);n.stroke(),ve(n,e*.03),n.lineCap="round";for(const I of[-1,1]){const C=Math.sin(r*1.4+(I>0?1:0))*t*.01;n.beginPath(),n.moveTo(s+I*d*.92,c+a*.25),n.quadraticCurveTo(s+I*(d+e*.05),t*.44,s+I*(m+e*.06),t*.58+C),n.stroke(),n.beginPath(),n.arc(s+I*(m+e*.06),t*.59+C,e*.028,0,Math.PI*2),n.fillStyle=Ui,n.fill(),n.stroke()}ve(n,e*.03);for(const I of[-1,1])n.beginPath(),n.moveTo(s+I*g*.35,u),n.lineTo(s+I*g*.35,t*.96),n.stroke(),n.beginPath(),n.moveTo(s+I*g*.35-e*.02,t*.96),n.quadraticCurveTo(s+I*g*.35+I*e*.06,t*.99,s+I*g*.35+I*e*.07,t*.975),n.lineTo(s+I*g*.35+e*.01,t*.955),n.closePath(),n.fillStyle=ie,n.fill();const y=()=>{n.beginPath(),n.ellipse(s,o,a*.92,a,0,0,Math.PI*2)};st(n,y),ct(n,y,s-a*.25,o-a*.2,a,"rgba(255,250,240,0.4)","rgba(60,45,30,0.14)"),ve(n,e*.016),n.strokeStyle=ie,y(),n.stroke(),n.save(),n.fillStyle="rgba(230,120,110,0.35)";for(const I of[-1,1])n.beginPath(),n.ellipse(s+I*a*.5,o+a*.28,a*.2,a*.14,0,0,Math.PI*2),n.fill();n.restore();const E=r%4<.15;n.strokeStyle=ie,n.fillStyle=ie;for(const I of[-1,1]){const C=s+I*a*.34,A=o-a*.02;E?(ve(n,e*.012),n.beginPath(),n.moveTo(C-a*.14,A),n.quadraticCurveTo(C,A+a*.08,C+a*.14,A),n.stroke()):(n.beginPath(),n.arc(C,A,a*.12,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.9)",n.beginPath(),n.arc(C-a*.04,A-a*.04,a*.04,0,Math.PI*2),n.fill(),n.fillStyle=ie)}ve(n,e*.01),n.beginPath(),n.moveTo(s,o+a*.1),n.lineTo(s-a*.06,o+a*.26),n.stroke(),ve(n,e*.014),n.beginPath(),n.arc(s,o+a*.32,a*.34,.15*Math.PI,.85*Math.PI),n.stroke()}function Bm(n,e,t,i){const r=a=>{const o=a/e,l=Math.sin(Math.PI*Math.min(1,Math.max(0,o)))**1.4;return t-l*t*.82},s=()=>{n.beginPath(),n.moveTo(0,t+2),n.lineTo(0,r(0));for(let a=0;a<=e;a+=e/48)n.lineTo(a,r(a));n.lineTo(e,t+2),n.closePath()};st(n,s,i?be.grass:null),i&&ga(n,s,e/2,t*.1,t,be.grass,be.grassDark),ve(n,e*.005),n.strokeStyle=i?be.grassDark:ie,n.beginPath(),n.moveTo(0,r(0));for(let a=0;a<=e;a+=e/48)n.lineTo(a,r(a));n.stroke(),n.strokeStyle=i?be.grassDark:ie,n.lineWidth=e*.004;for(let a=2;a<46;a++){const o=a/48*e+Math.random()*(e/60),l=r(o);if(l>t*.94)continue;const c=t*.05+Math.random()*t*.04;On(n,o,l,o-c*.3,l-c,.5),On(n,o,l,o+c*.2,l-c*.8,.5)}}function zm(n,e,t,i){const r=e/2,s=e*.34,a=e*.12,o=e*.05,l=()=>{n.beginPath(),n.moveTo(r-s,t),n.quadraticCurveTo(r-s*.5,t*.55,r-a+o,t*.16),n.quadraticCurveTo(r-a*2.2+o,t*.08,r-a*2.6+o,t*-.02),n.lineTo(r-a*1.2+o,t*.12),n.quadraticCurveTo(r+o,t*.05,r+a*1.4+o,t*.1),n.lineTo(r+a*2.6+o,t*-.04),n.quadraticCurveTo(r+a*2+o,t*.09,r+a+o,t*.18),n.quadraticCurveTo(r+s*.5,t*.55,r+s,t),n.quadraticCurveTo(r+s*.5,t*.985,r+s*.28,t),n.quadraticCurveTo(r,t*.97,r-s*.28,t),n.quadraticCurveTo(r-s*.5,t*.985,r-s,t),n.closePath()};st(n,l,i?be.bark:null),ct(n,l,r-s*.3,t*.5,t*.6,i?"rgba(255,240,210,0.35)":"rgba(255,250,235,0.0)",i?"rgba(60,38,16,0.5)":"rgba(45,38,28,0.32)"),ve(n,e*.02),n.strokeStyle=i?be.barkDark:ie,l(),n.stroke(),n.lineWidth=e*.016,n.strokeStyle=i?"rgba(70,45,20,0.6)":"rgba(33,29,24,0.55)";for(const[c,h,u]of[[-.06,.85,.2],[.02,.9,.14],[.1,.8,.24]])n.beginPath(),n.moveTo(r+e*c,t*u),n.bezierCurveTo(r+e*(c+.04),t*(u+(h-u)*.4),r+e*(c-.02),t*(u+(h-u)*.7),r+e*(c+.02),t*h),n.stroke()}function km(n,e,t,i){const r=e/2,s=t*.5,a=Math.min(e,t)*.46,o=[],l=7;for(let h=0;h<l;h++){const u=h/l*Math.PI*2-Math.PI/2;o.push({x:r+Math.cos(u)*a*.62,y:s+Math.sin(u)*a*.6,r:a*(.42+.08*Math.sin(h*2.7)),s:h*1.9})}o.push({x:r,y:s,r:a*.62,s:5.5});const c=i?be.leaf:Ui;for(const h of o)Dn(n,h.x,h.y,h.r,h.s,c);if(!i){const h=dt(n);if(h){n.save(),n.globalAlpha=.9;for(const u of o)Dn(n,u.x,u.y,u.r,u.s,h);n.restore()}}if(i){for(const h of o){const u=(h.y-(s-a))/(2*a);Dn(n,h.x,h.y,h.r*.86,h.s+1,u>.55?be.leafDark:be.leaf)}for(const h of o.slice(0,4))Dn(n,h.x-h.r*.2,h.y-h.r*.25,h.r*.5,h.s+3,be.leafLight)}ct(n,()=>{n.beginPath(),n.arc(r,s,a*1.02,0,Math.PI*2)},r,s,a,"rgba(255,255,240,0.18)",i?"rgba(30,60,20,0.35)":"rgba(40,35,28,0.28)"),ve(n,e*.01),n.strokeStyle=i?be.leafDark:"rgba(33,29,24,0.7)";for(const h of o)n.beginPath(),n.arc(h.x,h.y,h.r*.92,Math.PI*.85,Math.PI*2.15),n.stroke();n.lineWidth=e*.006,n.strokeStyle=i?"rgba(35,70,25,0.5)":"rgba(33,29,24,0.4)";for(let h=0;h<18;h++){const u=Math.random()*Math.PI*2,d=Math.random()*a*.75,m=r+Math.cos(u)*d,g=s+Math.sin(u)*d;On(n,m,g,m+e*.025,g-t*.02,.4)}}function jo(n,e,t,i=!1,r){n.save(),i&&(n.translate(e,0),n.scale(-1,1));const s=t*.55,a=()=>{n.beginPath(),n.moveTo(0,s-t*.1),n.quadraticCurveTo(e*.4,t*.3,e*.72,t*.24),n.lineTo(e*.72,t*.34),n.quadraticCurveTo(e*.4,t*.42,0,s+t*.1),n.closePath()};st(n,a,r?be.bark:null),ve(n,e*.01),n.strokeStyle=r?be.barkDark:ie,a(),n.stroke(),n.beginPath(),n.moveTo(e*.44,t*.36),n.quadraticCurveTo(e*.5,t*.55,e*.58,t*.62),n.stroke();const o=[[.7,.24,.26,-.4],[.82,.34,.22,.1],[.66,.42,.2,.5],[.58,.6,.16,.7]];for(const[l,c,h,u]of o){const d=()=>{n.save(),n.translate(e*l,t*c),n.rotate(u),n.beginPath(),n.ellipse(0,0,t*h*1.5,t*h*.7,0,0,Math.PI*2),n.restore()};st(n,d,r?be.leaf:null),ve(n,e*.008),n.strokeStyle=r?be.leafDark:ie,d(),n.stroke(),n.beginPath(),n.moveTo(e*l-Math.cos(u)*t*h*1.3,t*c-Math.sin(u)*t*h*1.3),n.lineTo(e*l+Math.cos(u)*t*h*1.3,t*c+Math.sin(u)*t*h*1.3),n.stroke()}n.restore()}function Hm(n,e,t,i){const r=t*.42;st(n,()=>{n.beginPath(),n.moveTo(e*.12,t*.96),n.lineTo(e*.12,r),n.lineTo(e*.88,r),n.lineTo(e*.88,t*.96),n.closePath()},i?be.wall:null),i&&ga(n,()=>{n.beginPath(),n.rect(e*.12,r,e*.76,t*.54)},e/2,r,t*.96,"rgba(255,248,225,0.25)","rgba(120,90,45,0.28)"),st(n,()=>{n.beginPath(),n.moveTo(e*.06,r+t*.02),n.lineTo(e*.5,t*.12),n.lineTo(e*.94,r+t*.02),n.closePath()},i?be.roof:null),i&&ga(n,()=>{n.beginPath(),n.moveTo(e*.06,r+t*.02),n.lineTo(e*.5,t*.12),n.lineTo(e*.94,r+t*.02),n.closePath()},e/2,t*.12,r,"rgba(255,235,220,0.2)","rgba(90,35,25,0.3)"),ve(n,e*.012),n.strokeStyle=i?be.roofDark:ie,n.beginPath(),n.moveTo(e*.06,r+t*.02),n.lineTo(e*.5,t*.12),n.lineTo(e*.94,r+t*.02),n.stroke(),n.strokeStyle=i?be.wallDark:ie,n.beginPath(),n.moveTo(e*.12,t*.96),n.lineTo(e*.12,r),n.lineTo(e*.88,r),n.lineTo(e*.88,t*.96),n.lineTo(e*.12,t*.96),n.stroke(),st(n,()=>{n.beginPath(),n.rect(e*.7,t*.2,e*.1,t*.16)},i?be.roofDark:null),st(n,()=>{n.beginPath(),n.moveTo(e*.37,t*.96),n.lineTo(e*.37,t*.74),n.arc(e*.5,t*.74,e*.13,Math.PI,0),n.lineTo(e*.63,t*.96),n.closePath()},i?be.door:null),ve(n,e*.012),n.strokeStyle=ie,n.beginPath(),n.moveTo(e*.37,t*.96),n.lineTo(e*.37,t*.74),n.arc(e*.5,t*.74,e*.13,Math.PI,0),n.lineTo(e*.63,t*.96),n.stroke();for(const s of[.28,.72])st(n,()=>{n.beginPath(),n.rect(e*s-e*.06,t*.58,e*.12,t*.12)},i?"#f6dd82":null),n.strokeStyle=ie,n.strokeRect(e*s-e*.06,t*.58,e*.12,t*.12),n.beginPath(),n.moveTo(e*s,t*.58),n.lineTo(e*s,t*.7),n.moveTo(e*s-e*.06,t*.64),n.lineTo(e*s+e*.06,t*.64),n.stroke()}function Gm(n,e,t){st(n,()=>{n.beginPath(),n.rect(0,0,e,t)}),n.strokeStyle="rgba(33, 29, 24, 0.35)";for(let i=0;i<3;i++){const r=t*(.55+i*.14),s=t*(.12-i*.03);n.lineWidth=e*.002,n.beginPath(),n.moveTo(0,r);for(let a=0;a<=e;a+=e/40){const o=r-Math.sin(a/e*Math.PI*(2+i))*s;n.lineTo(a,o)}n.stroke()}n.strokeStyle="rgba(33, 29, 24, 0.3)",n.lineWidth=e*.002,n.beginPath(),n.arc(e*.78,t*.22,t*.09,0,Math.PI*2),n.stroke()}function Vm(n,e,t,i){const r=[{x:e*.24,y:t*.68,r:t*.32,s:.4},{x:e*.76,y:t*.66,r:t*.36,s:1.7},{x:e*.5,y:t*.46,r:t*.42,s:3.1},{x:e*.42,y:t*.72,r:t*.3,s:4.6},{x:e*.62,y:t*.74,r:t*.26,s:5.9}],s=i?be.leaf:Ui;for(const a of r)Dn(n,a.x,a.y,a.r,a.s,s);if(!i){const a=dt(n);if(a)for(const o of r)Dn(n,o.x,o.y,o.r,o.s,a)}if(i){for(const a of r)a.y>t*.6&&Dn(n,a.x,a.y+a.r*.15,a.r*.82,a.s+2,be.leafDark);Dn(n,e*.44,t*.36,t*.2,2.2,be.leafLight)}ct(n,()=>{n.beginPath(),n.ellipse(e*.5,t*.6,e*.5,t*.42,0,0,Math.PI*2)},e*.5,t*.6,t*.5,"rgba(255,255,240,0.16)",i?"rgba(25,55,18,0.34)":"rgba(40,35,28,0.26)"),ve(n,e*.01),n.strokeStyle=i?be.leafDark:"rgba(33,29,24,0.7)";for(const a of r)n.beginPath(),n.arc(a.x,a.y,a.r*.9,Math.PI*.9,Math.PI*2.1),n.stroke();n.lineWidth=e*.008,n.strokeStyle=i?be.leafDark:ie;for(let a=0;a<14;a++){const o=e*(.18+Math.random()*.64),l=t*(.3+Math.random()*.44);On(n,o,l,o+e*.02,l-t*.05,.5)}}function Wm(n,e,t,i){const r=e/2;n.strokeStyle=i?be.grassDark:ie,n.lineWidth=e*.14,n.lineCap="round",n.beginPath(),n.moveTo(r,t),n.quadraticCurveTo(r-e*.12,t*.5,r,t*.06),n.stroke();const s=(a,o,l)=>{const c=r,h=t*o,u=()=>{n.beginPath(),n.moveTo(c,h),n.quadraticCurveTo(c+a*e*l*.7,h-t*.02,c+a*e*l,h-t*l*.5),n.quadraticCurveTo(c+a*e*l*.5,h+t*.02,c,h+t*.01),n.closePath()};st(n,u,i?be.grass:null),ve(n,e*.02),n.strokeStyle=i?be.grassDark:ie,u(),n.stroke()};s(-1,.58,.42),s(1,.42,.4)}function Xm(n,e,t,i,r=0){const s=e/2,a=t*.5,o=8,l=Math.min(e,t)*.16,c=Math.min(e,t)*.34,h=Math.min(e,t)*.13,u=()=>dt(n)??"#f3eede",d=(g,_,p)=>{const f=s+Math.cos(g)*l,T=a+Math.sin(g)*l,y=s+Math.cos(g)*(l+c*_),E=a+Math.sin(g)*(l+c*_),I=Math.cos(g+Math.PI/2),C=Math.sin(g+Math.PI/2),A=()=>{n.beginPath(),n.moveTo(f,T),n.quadraticCurveTo(f+I*h*_+(y-f)*.5,T+C*h*_+(E-T)*.5,y,E),n.quadraticCurveTo(f-I*h*_+(y-f)*.5,T-C*h*_+(E-T)*.5,f,T),n.closePath()};n.save(),A(),n.fillStyle=p,n.fill(),n.restore(),i&&ct(n,A,y,E,c*.6,"rgba(255,255,255,0.35)","rgba(0,0,0,0.14)"),ve(n,e*.012),n.strokeStyle=i?"rgba(90,50,20,0.35)":ie,A(),n.stroke()};for(let g=0;g<o;g++){const _=g/o*Math.PI*2+Math.PI/o;d(_,.82,i?Lt(i,-.12):u())}for(let g=0;g<o;g++){const _=g/o*Math.PI*2;d(_,1,i??u())}const m=()=>{n.beginPath(),n.arc(s,a,l*1.15,0,Math.PI*2)};n.save(),m(),n.fillStyle=i?"#f5b731":u(),n.fill(),n.restore(),i&&ct(n,m,s,a,l*1.15,"rgba(255,240,180,0.6)","rgba(150,90,10,0.4)"),ve(n,e*.014),n.strokeStyle=i?"#a9781a":ie,m(),n.stroke(),n.fillStyle=i?"#7c5510":ie;for(let g=0;g<12;g++){const _=g/12*Math.PI*2+r,p=l*(.3+.55*(g*7%5)/5);n.beginPath(),n.arc(s+Math.cos(_)*p,a+Math.sin(_)*p,e*.013,0,Math.PI*2),n.fill()}}function qm(n,e,t,i){st(n,()=>{n.beginPath(),n.moveTo(e*.08,t),n.lineTo(e*.02,t*.6),n.lineTo(e*.32,t*.24),n.lineTo(e*.7,t*.32),n.lineTo(e*.96,t*.66),n.lineTo(e*.9,t),n.closePath()},i?be.stone:null),i&&(n.save(),n.beginPath(),n.moveTo(e*.7,t*.32),n.lineTo(e*.96,t*.66),n.lineTo(e*.9,t),n.lineTo(e*.4,t),n.closePath(),n.fillStyle=be.stoneDark,n.globalAlpha=.5,n.fill(),n.restore()),ve(n,e*.02),n.strokeStyle=i?be.stoneDark:ie,n.beginPath(),n.moveTo(e*.02,t*.6),n.lineTo(e*.32,t*.24),n.lineTo(e*.7,t*.32),n.lineTo(e*.96,t*.66),n.stroke(),n.lineWidth=e*.012,On(n,e*.32,t*.24,e*.4,t*.7,.6),On(n,e*.7,t*.32,e*.62,t*.72,.6)}function Ym(n,e,t,i){for(let s=0;s<9;s++){const a=s/8,o=e*(.34+a*.32)+(Math.random()-.5)*e*.04,l=a<.5?-1:1,c=Math.abs(a-.5)*2,h=o+l*e*(.08+c*.32)+(Math.random()-.5)*e*.06,u=t*(.08+Math.random()*.22),d=e*(.05-c*.015),m=()=>{n.beginPath(),n.moveTo(o-d,t),n.quadraticCurveTo((o+h)/2-l*e*.02,t*.5,h,u),n.quadraticCurveTo((o+h)/2+l*e*.02,t*.55,o+d,t),n.closePath()},g=i?s%2===0?be.grass:be.grassDark:Ui;n.save(),m(),n.fillStyle=g,n.fill(),n.restore(),ve(n,e*.008),n.strokeStyle=i?be.grassDark:ie,n.beginPath(),n.moveTo(o,t),n.quadraticCurveTo((o+h)/2,t*.5,h,u),n.stroke()}}function $m(n,e,t,i){const r=e/2,s=()=>{n.beginPath(),n.moveTo(r-e*.15,t*.98),n.quadraticCurveTo(r-e*.2,t*.9,r-e*.13,t*.78),n.quadraticCurveTo(r-e*.1,t*.62,r-e*.12,t*.48),n.lineTo(r+e*.12,t*.48),n.quadraticCurveTo(r+e*.1,t*.62,r+e*.13,t*.78),n.quadraticCurveTo(r+e*.2,t*.9,r+e*.15,t*.98),n.quadraticCurveTo(r,t*1.02,r-e*.15,t*.98),n.closePath()};st(n,s,i?be.mushStem:null),ct(n,s,r-e*.04,t*.72,e*.2,"rgba(255,255,250,0.4)",i?"rgba(150,135,95,0.35)":"rgba(40,35,28,0.22)"),ve(n,e*.018),n.strokeStyle=i?"#c2b699":ie,s(),n.stroke(),n.beginPath(),n.moveTo(r-e*.14,t*.52),n.quadraticCurveTo(r,t*.58,r+e*.14,t*.52),n.stroke();const a=()=>{n.beginPath(),n.moveTo(r-e*.44,t*.5),n.bezierCurveTo(r-e*.46,t*.16,r+e*.46,t*.16,r+e*.44,t*.5),n.quadraticCurveTo(r,t*.6,r-e*.44,t*.5),n.closePath()};st(n,a,i?be.mushCap:null),ct(n,a,r-e*.1,t*.32,e*.44,i?"rgba(255,215,195,0.5)":"rgba(255,250,240,0.0)",i?"rgba(110,20,12,0.4)":"rgba(40,35,28,0.28)"),ve(n,e*.02),n.strokeStyle=i?Lt(be.mushCap,-.18):ie,a(),n.stroke(),n.fillStyle=i?"#fbf3e0":"rgba(33,29,24,0.85)";for(const[o,l,c]of[[.33,.34,.06],[.58,.27,.05],[.5,.42,.055],[.72,.4,.04],[.42,.24,.035]])n.beginPath(),n.ellipse(e*o,t*l,e*c,e*c*.85,0,0,Math.PI*2),n.fill()}function Km(n,e,t,i,r=0){const s=e/2,a=()=>dt(n)??"#f3eede",o=i??a(),l=i?"#e7efb0":a(),c=1+Math.sin(r*3)*.03,h=(p,f,T,y,E)=>{n.beginPath(),n.ellipse(p,f,T,y,0,0,Math.PI*2),n.fillStyle=E,n.fill()},u=(p,f,T,y,E)=>{ve(n,E),n.beginPath(),n.ellipse(p,f,T,y,0,0,Math.PI*2),n.stroke()};for(const p of[-1,1]){h(s+p*e*.33,t*.82,e*.2,t*.15,o),u(s+p*e*.33,t*.82,e*.2,t*.15,e*.012),ve(n,e*.014);for(let f=-1;f<=1;f++){const T=s+p*e*.33+f*e*.07;On(n,T,t*.9,T,t*.98,.5)}}const d=t*.62;if(h(s,d,e*.42,t*.34*c,o),ct(n,()=>{n.beginPath(),n.ellipse(s,d,e*.42,t*.34*c,0,0,Math.PI*2)},s-e*.1,d-t*.06,e*.42,"rgba(255,255,235,0.35)",i?"rgba(20,70,25,0.4)":"rgba(40,35,28,0.22)"),h(s,t*.72,e*.24,t*.2,l),u(s,d,e*.42,t*.34*c,e*.014),ve(n,e*.01),n.beginPath(),n.ellipse(s,t*.72,e*.24,t*.2,0,Math.PI*.15,Math.PI*.85),n.stroke(),i){n.fillStyle="rgba(20,80,30,0.35)";for(const[p,f]of[[.3,.55],[.68,.5],[.72,.68],[.28,.7]])n.beginPath(),n.ellipse(e*p,t*f,e*.035,t*.03,0,0,Math.PI*2),n.fill()}ve(n,e*.016),n.beginPath(),n.arc(s,t*.56,e*.24,.12*Math.PI,.88*Math.PI),n.stroke();for(const p of[-1,1])n.beginPath(),n.arc(s+p*e*.235,t*.575,e*.03,p<0?Math.PI*.7:Math.PI*.3,p<0?Math.PI*1.1:-Math.PI*.1,p<0),n.stroke();const m=t*.32,g=e*.17,_=r%3<.16;for(const p of[-1,1]){const f=s+p*e*.21;h(f,m,g,g,o),ct(n,()=>{n.beginPath(),n.ellipse(f,m,g,g,0,0,Math.PI*2)},f-g*.3,m-g*.3,g,"rgba(255,255,235,0.4)",i?"rgba(20,70,25,0.35)":"rgba(40,35,28,0.2)"),u(f,m,g,g,e*.012),_?(ve(n,e*.016),n.beginPath(),n.moveTo(f-g*.6,m),n.lineTo(f+g*.6,m),n.stroke()):(h(f,m,g*.6,g*.6,"#f7f3e6"),u(f,m,g*.6,g*.6,e*.008),n.fillStyle=ie,n.beginPath(),n.arc(f,m+g*.06,g*.24,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.9)",n.beginPath(),n.arc(f-g*.08,m-g*.02,g*.08,0,Math.PI*2),n.fill())}n.fillStyle=ie;for(const p of[-1,1])n.beginPath(),n.arc(s+p*e*.05,t*.46,e*.012,0,Math.PI*2),n.fill()}function Zm(n,e,t,i){const r=e/2,s=t*.58,a=Math.min(e,t)*.46,o=.35,l=()=>{n.beginPath(),n.arc(r,s,a,o,Math.PI*2-o),n.lineTo(r,s),n.closePath()};st(n,l,i?be.leaf:null),ct(n,l,r-a*.2,s-a*.2,a,"rgba(255,255,235,0.3)",i?"rgba(20,70,25,0.35)":"rgba(40,35,28,0.2)"),ve(n,e*.01),n.strokeStyle=i?be.leafDark:ie,n.beginPath(),n.arc(r,s,a,o,Math.PI*2-o),n.stroke(),n.lineWidth=e*.005,n.strokeStyle=i?"rgba(30,80,25,0.5)":"rgba(33,29,24,0.5)";for(let c=0;c<6;c++){const h=-Math.PI*.4+c/5*Math.PI*1.6;On(n,r,s,r+Math.cos(h)*a*.88,s+Math.sin(h)*a*.88,.6)}}function jm(n,e,t,i){const r=e/2,s=()=>{n.beginPath(),n.moveTo(r-e*.06,t),n.quadraticCurveTo(r-e*.02,t*.5,r-e*.05,t*.1),n.lineTo(r+e*.05,t*.1),n.quadraticCurveTo(r+e*.02,t*.5,r+e*.06,t),n.closePath()};st(n,s,i?be.grassDark:null),ve(n,e*.012),n.strokeStyle=i?Lt(be.grassDark,-.1):ie,s(),n.stroke();for(const[o,l]of[[-1,.55],[1,.68]]){const c=()=>{n.beginPath(),n.moveTo(r,t*l),n.quadraticCurveTo(r+o*e*.5,t*(l-.2),r+o*e*.62,t*(l-.45)),n.quadraticCurveTo(r+o*e*.36,t*(l-.12),r,t*(l+.02)),n.closePath()};st(n,c,i?be.grass:null),ve(n,e*.01),n.strokeStyle=i?be.grassDark:ie,c(),n.stroke()}const a=()=>{n.beginPath(),n.ellipse(r,t*.2,e*.13,t*.17,0,0,Math.PI*2)};st(n,a,i?"#8a5a2b":null),ct(n,a,r-e*.04,t*.14,e*.15,"rgba(255,230,190,0.35)",i?"rgba(60,35,12,0.4)":"rgba(40,35,28,0.22)"),ve(n,e*.014),n.strokeStyle=i?"#5e3d1c":ie,a(),n.stroke(),n.beginPath(),n.moveTo(r,t*.03),n.lineTo(r,t*.1),n.stroke()}function Jm(n,e,t,i){const r=e/2,s=t/2,a=()=>{n.beginPath(),n.ellipse(r,s,e*.46,t*.44,0,0,Math.PI*2)};if(n.save(),a(),i){const o=n.createRadialGradient(r-e*.1,s-t*.1,e*.05,r,s,e*.5);o.addColorStop(0,"#8fd0e6"),o.addColorStop(1,"#3f8fc0"),n.fillStyle=o}else n.fillStyle=Ui;if(n.fill(),!i){const o=dt(n);o&&(n.fillStyle=o,n.fill())}n.restore(),ve(n,e*.008),n.strokeStyle=i?"#2f7ba8":ie,a(),n.stroke(),n.lineWidth=e*.004,n.strokeStyle=i?"rgba(255,255,255,0.5)":"rgba(33, 29, 24, 0.4)";for(let o=1;o<=4;o++){const l=o/5;n.beginPath(),n.ellipse(r,s,e*.46*l,t*.44*l,0,.15*Math.PI,.85*Math.PI),n.stroke()}}function Qm(n,e,t,i,r=0){const s=e/2,a=t*.5+Math.sin(r*2.5)*t*.06,o=.5+.5*Math.abs(Math.sin(r*7)),l=i??dt(n)??"#f3eede",c=(h,u,d,m,g,_)=>{if(n.save(),n.translate(h,u),n.rotate(g),n.beginPath(),n.ellipse(0,0,d,m,0,0,Math.PI*2),n.fillStyle=l,n.fill(),i){const p=n.createLinearGradient(0,-m,0,m);p.addColorStop(0,"rgba(255,255,255,0.35)"),p.addColorStop(1,"rgba(0,0,0,0.18)"),n.fillStyle=p,n.fill(),n.strokeStyle="rgba(33,29,24,0.5)",n.lineWidth=e*.02,n.beginPath(),n.ellipse(0,0,d*.72,m*.72,0,0,Math.PI*2),n.stroke()}ve(n,e*.014),n.strokeStyle=ie,n.beginPath(),n.ellipse(0,0,d,m,0,0,Math.PI*2),n.stroke(),_&&(n.fillStyle=i?"rgba(255,250,235,0.85)":"rgba(33, 29, 24, 0.4)",n.beginPath(),n.ellipse(0,m*.25,d*.32,m*.24,0,0,Math.PI*2),n.fill(),n.fillStyle=i?"rgba(33,29,24,0.5)":"rgba(33, 29, 24, 0.6)",n.beginPath(),n.ellipse(0,m*.25,d*.14,m*.11,0,0,Math.PI*2),n.fill()),n.restore()};for(const h of[-1,1])c(s+h*(e*.04+e*.24*o),a-t*.08,e*.22*o,t*.2,h*.35,!0),c(s+h*(e*.03+e*.18*o),a+t*.16,e*.16*o,t*.15,h*-.3,!1);n.fillStyle=ie,n.beginPath(),n.ellipse(s,a,e*.035,t*.26,0,0,Math.PI*2),n.fill(),ve(n,e*.01);for(const h of[-1,1])n.beginPath(),n.moveTo(s,a-t*.24),n.quadraticCurveTo(s+h*e*.1,a-t*.36,s+h*e*.14,a-t*.34),n.stroke(),n.fillStyle=ie,n.beginPath(),n.arc(s+h*e*.14,a-t*.34,e*.02,0,Math.PI*2),n.fill()}function e0(n,e,t,i){const r=e/2,s=t*.6,a=Math.min(e,t)*.36,o=i??dt(n)??"#f3eede",l=()=>{n.beginPath(),n.moveTo(r,s-a*.75),n.bezierCurveTo(r-a*.6,s-a*1.15,r-a*1.15,s-a*.35,r-a*1.02,s+a*.2),n.bezierCurveTo(r-a*.95,s+a*.9,r-a*.4,s+a*1.15,r,s+a*.95),n.bezierCurveTo(r+a*.4,s+a*1.15,r+a*.95,s+a*.9,r+a*1.02,s+a*.2),n.bezierCurveTo(r+a*1.15,s-a*.35,r+a*.6,s-a*1.15,r,s-a*.75),n.closePath()};n.save(),l(),n.fillStyle=o,n.fill(),n.restore(),ct(n,l,r-a*.35,s-a*.35,a*1.1,"rgba(255,255,240,0.45)",i?"rgba(110,10,15,0.4)":"rgba(40,35,28,0.2)"),ve(n,e*.018),n.strokeStyle=i?"#8f2e28":ie,l(),n.stroke(),n.lineWidth=e*.012,n.beginPath(),n.arc(r,s-a*.7,a*.24,.2*Math.PI,.8*Math.PI),n.stroke(),n.strokeStyle=i?be.barkDark:ie,n.lineWidth=e*.02,n.beginPath(),n.moveTo(r,s-a*.8),n.quadraticCurveTo(r+e*.03,s-a*1.15,r+e*.01,s-a*1.32),n.stroke();const c=()=>{n.beginPath(),n.ellipse(r+e*.11,s-a*1.08,e*.1,t*.05,-.5,0,Math.PI*2)};n.save(),c(),n.fillStyle=i?be.leaf:dt(n)??"#f3eede",n.fill(),n.restore(),ve(n,e*.012),n.strokeStyle=i?be.leafDark:ie,c(),n.stroke(),i&&(n.strokeStyle="rgba(255, 255, 255, 0.6)",n.lineWidth=e*.03,n.beginPath(),n.arc(r-a*.38,s-a*.2,a*.42,-.95*Math.PI,-.4*Math.PI),n.stroke())}function t0(n,e,t,i,r=0){const s=e/2,a=()=>dt(n)??"#f3eede",o=i??a(),l=i?Lt(i,-.16):"rgba(40,35,28,0.25)",c=i?"#f7f3e6":a(),h=(T,y)=>{y(),n.fillStyle=T,n.fill()},u=(T,y)=>{ve(n,T),n.strokeStyle=i?Lt(i,-.28):ie,y(),n.stroke()},d=()=>{n.beginPath(),n.moveTo(s+e*.14,t*.68),n.bezierCurveTo(s+e*.5,t*.5,s+e*.56,t*.9,s+e*.34,t*.96),n.bezierCurveTo(s+e*.2,t*.99,s+e*.1,t*.88,s+e*.14,t*.68),n.closePath()};h(o,d),ct(n,d,s+e*.28,t*.62,e*.28,"rgba(255,240,215,0.35)",i?"rgba(120,55,10,0.4)":"rgba(40,35,28,0.22)"),h(c,()=>{n.beginPath(),n.ellipse(s+e*.4,t*.9,e*.1,t*.09,-.7,0,Math.PI*2)}),u(e*.014,d);const m=()=>{n.beginPath(),n.ellipse(s-e*.02,t*.76,e*.24,t*.2,0,0,Math.PI*2)};h(o,m),ct(n,m,s-e*.1,t*.68,e*.24,"rgba(255,240,215,0.35)",i?"rgba(120,55,10,0.38)":"rgba(40,35,28,0.2)"),u(e*.014,m);for(const T of[-1,1]){const y=()=>{n.beginPath(),n.moveTo(s+T*e*.13,t*.82),n.lineTo(s+T*e*.16,t*.97),n.lineTo(s+T*e*.05,t*.97),n.lineTo(s+T*e*.03,t*.84),n.closePath()};h(o,y),u(e*.012,y),n.fillStyle=l,n.beginPath(),n.ellipse(s+T*e*.1,t*.965,e*.06,t*.02,0,0,Math.PI*2),n.fill()}h(c,()=>{n.beginPath(),n.moveTo(s-e*.02,t*.62),n.quadraticCurveTo(s+e*.12,t*.78,s-e*.02,t*.92),n.quadraticCurveTo(s-e*.16,t*.78,s-e*.02,t*.62),n.closePath()});const g=t*.42,_=e*.25;for(const T of[-1,1]){const y=()=>{n.beginPath(),n.moveTo(s+T*_*.7,g-_*.35),n.lineTo(s+T*_*1.15,g-_*1.45),n.lineTo(s+T*_*.1,g-_*.75),n.closePath()};h(o,y),u(e*.012,y),n.fillStyle=l,n.beginPath(),n.moveTo(s+T*_*.62,g-_*.45),n.lineTo(s+T*_*.92,g-_*1.2),n.lineTo(s+T*_*.28,g-_*.72),n.closePath(),n.fill()}const p=()=>{n.beginPath(),n.moveTo(s-_,g-_*.35),n.lineTo(s-_*1.08,g+_*.35),n.lineTo(s-_*.7,g+_*.55),n.quadraticCurveTo(s-_*.4,g+_*1.05,s,g+_*1.2),n.quadraticCurveTo(s+_*.4,g+_*1.05,s+_*.7,g+_*.55),n.lineTo(s+_*1.08,g+_*.35),n.lineTo(s+_,g-_*.35),n.quadraticCurveTo(s,g-_*.8,s-_,g-_*.35),n.closePath()};h(o,p),ct(n,p,s-_*.3,g-_*.3,_*1.1,"rgba(255,240,215,0.4)",i?"rgba(120,55,10,0.3)":"rgba(40,35,28,0.18)"),u(e*.014,p),h(c,()=>{n.beginPath(),n.moveTo(s-_*.5,g+_*.1),n.quadraticCurveTo(s-_*.2,g+_*.35,s,g+_*1.15),n.quadraticCurveTo(s+_*.2,g+_*.35,s+_*.5,g+_*.1),n.quadraticCurveTo(s,g+_*.4,s-_*.5,g+_*.1),n.closePath()});const f=r%3.2<.14;for(const T of[-1,1]){const y=s+T*_*.44,E=g;f?(ve(n,e*.014),n.strokeStyle=ie,n.beginPath(),n.moveTo(y-e*.035,E),n.quadraticCurveTo(y,E+e*.02,y+e*.035,E),n.stroke()):(n.beginPath(),n.ellipse(y,E,e*.05,e*.035,T*.3,0,Math.PI*2),n.fillStyle=i?"#e8a02a":"#f7f3e6",n.fill(),ve(n,e*.01),n.strokeStyle=ie,n.stroke(),n.fillStyle=ie,n.beginPath(),n.arc(y,E,e*.022,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.9)",n.beginPath(),n.arc(y-e*.008,E-e*.008,e*.008,0,Math.PI*2),n.fill())}n.fillStyle=ie,n.beginPath(),n.moveTo(s-e*.04,g+_*.95),n.quadraticCurveTo(s,g+_*1.15,s+e*.04,g+_*.95),n.quadraticCurveTo(s,g+_*1.02,s-e*.04,g+_*.95),n.fill(),ve(n,e*.01),n.strokeStyle=ie,n.beginPath(),n.moveTo(s,g+_*1.1),n.lineTo(s,g+_*1.25),n.moveTo(s,g+_*1.25),n.quadraticCurveTo(s-e*.06,g+_*1.35,s-e*.09,g+_*1.22),n.moveTo(s,g+_*1.25),n.quadraticCurveTo(s+e*.06,g+_*1.35,s+e*.09,g+_*1.22),n.stroke()}function n0(n,e,t,i,r=0){const s=e/2,a=Math.sin(r*2.2)*t*.02,o=t*.56+a,l=Math.min(e,t)*.3,c=()=>dt(n)??"#f3eede",h=i??c(),u=i?"#f6efdc":c(),d=()=>{n.beginPath(),n.moveTo(s+l*.6,o+l*.1),n.lineTo(s+l*1.7,o-l*.1),n.lineTo(s+l*1.7,o+l*.5),n.closePath()};st(n,d,i?Lt(i,-.1):null),ve(n,e*.012),n.strokeStyle=i?Lt(i,-.3):ie,d(),n.stroke();const m=()=>{n.beginPath(),n.ellipse(s,o,l*.95,l,0,0,Math.PI*2)};n.save(),m(),n.fillStyle=h,n.fill(),n.restore(),ct(n,m,s-l*.3,o-l*.35,l,"rgba(255,255,240,0.4)",i?"rgba(20,40,80,0.35)":"rgba(40,35,28,0.2)"),n.save(),n.beginPath(),n.ellipse(s-l*.2,o+l*.25,l*.6,l*.62,0,0,Math.PI*2),n.fillStyle=u,n.fill(),n.restore(),i&&(n.save(),n.beginPath(),n.ellipse(s-l*.28,o-l*.05,l*.4,l*.45,0,0,Math.PI*2),n.fillStyle="#e2703a",n.globalAlpha=.85,n.fill(),n.restore()),ve(n,e*.014),n.strokeStyle=i?Lt(i,-.3):ie,m(),n.stroke();const g=()=>{n.beginPath(),n.moveTo(s+l*.1,o-l*.2),n.quadraticCurveTo(s+l*.9,o-l*.1,s+l*.7,o+l*.55),n.quadraticCurveTo(s+l*.2,o+l*.4,s+l*.1,o-l*.2),n.closePath()};st(n,g,i?Lt(i,-.12):null),ve(n,e*.012),n.strokeStyle=i?Lt(i,-.3):ie,g(),n.stroke();for(let E=0;E<3;E++)n.beginPath(),n.moveTo(s+l*(.25+E*.15),o+l*.1),n.lineTo(s+l*(.5+E*.14),o+l*.42),n.stroke();const _=l*.62,p=s-l*.55,f=o-l*.7,T=()=>{n.beginPath(),n.arc(p,f,_,0,Math.PI*2)};n.save(),T(),n.fillStyle=h,n.fill(),n.restore(),ct(n,T,p-_*.3,f-_*.3,_,"rgba(255,255,240,0.45)",i?"rgba(20,40,80,0.3)":"rgba(40,35,28,0.18)"),ve(n,e*.014),n.strokeStyle=i?Lt(i,-.3):ie,T(),n.stroke(),n.beginPath(),n.moveTo(p-_*.9,f+_*.05),n.lineTo(p-_*1.5,f+_*.22),n.lineTo(p-_*.85,f+_*.42),n.closePath(),n.fillStyle=i?"#f0a92e":c(),n.fill(),ve(n,e*.01),n.strokeStyle=ie,n.stroke(),r%3<.14?(ve(n,e*.012),n.beginPath(),n.moveTo(p-_*.35,f-_*.05),n.lineTo(p-_*.05,f-_*.05),n.stroke()):(n.fillStyle=ie,n.beginPath(),n.arc(p-_*.2,f-_*.08,_*.16,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.9)",n.beginPath(),n.arc(p-_*.25,f-_*.13,_*.05,0,Math.PI*2),n.fill()),ve(n,e*.012),n.strokeStyle=ie;for(const E of[-1,1])n.beginPath(),n.moveTo(s+E*l*.15,o+l*.95),n.lineTo(s+E*l*.15,o+l*1.25),n.moveTo(s+E*l*.15,o+l*1.25),n.lineTo(s+E*l*.15-e*.03,o+l*1.32),n.moveTo(s+E*l*.15,o+l*1.25),n.lineTo(s+E*l*.15+e*.03,o+l*1.32),n.stroke()}function i0(n,e,t,i,r=0){const s=e/2,a=()=>dt(n)??"#f3eede",o=i??a(),l=Math.sin(r*1.6)*.12;for(const g of[-1,1]){const _=s+g*e*.1,p=()=>{n.save(),n.translate(_,t*.34),n.rotate(g*(.12+l)),n.beginPath(),n.ellipse(0,-t*.16,e*.07,t*.2,0,0,Math.PI*2),n.restore()};n.save(),p(),n.fillStyle=o,n.fill(),n.restore(),n.save(),n.translate(_,t*.34),n.rotate(g*(.12+l)),n.beginPath(),n.ellipse(0,-t*.16,e*.035,t*.13,0,0,Math.PI*2),n.fillStyle=i?"#e7a6a6":dt(n)??"#f3eede",n.fill(),n.restore(),ve(n,e*.012),n.strokeStyle=i?Lt(i,-.25):ie,p(),n.stroke()}const c=()=>{n.beginPath(),n.ellipse(s,t*.72,e*.24,t*.24,0,0,Math.PI*2)};n.save(),c(),n.fillStyle=o,n.fill(),n.restore(),ct(n,c,s-e*.08,t*.62,e*.26,"rgba(255,255,245,0.4)",i?"rgba(90,70,45,0.32)":"rgba(40,35,28,0.2)"),ve(n,e*.014),n.strokeStyle=i?Lt(i,-.25):ie,c(),n.stroke(),n.save(),n.beginPath(),n.ellipse(s,t*.78,e*.13,t*.15,0,0,Math.PI*2),n.fillStyle=i?"#f4ecd9":a(),n.fill(),n.restore();for(const g of[-1,1])n.beginPath(),n.ellipse(s+g*e*.09,t*.9,e*.06,t*.05,0,0,Math.PI*2),n.fillStyle=i?"#f4ecd9":a(),n.fill(),ve(n,e*.01),n.strokeStyle=i?Lt(i,-.25):ie,n.stroke();const h=e*.17,u=t*.44,d=()=>{n.beginPath(),n.ellipse(s,u,h,h*1.05,0,0,Math.PI*2)};n.save(),d(),n.fillStyle=o,n.fill(),n.restore(),ct(n,d,s-h*.3,u-h*.3,h,"rgba(255,255,245,0.45)",i?"rgba(90,70,45,0.28)":"rgba(40,35,28,0.18)"),ve(n,e*.014),n.strokeStyle=i?Lt(i,-.25):ie,d(),n.stroke(),n.save(),n.fillStyle="rgba(230,150,140,0.3)";for(const g of[-1,1])n.beginPath(),n.ellipse(s+g*h*.55,u+h*.35,h*.22,h*.16,0,0,Math.PI*2),n.fill();n.restore();const m=r%3.4<.14;n.fillStyle=ie;for(const g of[-1,1]){const _=s+g*h*.45,p=u-h*.1;m?(ve(n,e*.012),n.strokeStyle=ie,n.beginPath(),n.moveTo(_-e*.03,p),n.quadraticCurveTo(_,p+e*.015,_+e*.03,p),n.stroke()):(n.beginPath(),n.arc(_,p,h*.16,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.9)",n.beginPath(),n.arc(_-h*.05,p-h*.05,h*.05,0,Math.PI*2),n.fill(),n.fillStyle=ie)}n.fillStyle=i?"#d98a8a":ie,n.beginPath(),n.moveTo(s-h*.1,u+h*.35),n.lineTo(s+h*.1,u+h*.35),n.lineTo(s,u+h*.5),n.closePath(),n.fill(),ve(n,e*.008),n.strokeStyle=ie,n.beginPath(),n.moveTo(s,u+h*.5),n.lineTo(s,u+h*.68),n.stroke();for(const g of[-1,1])for(const _ of[-.04,.03])n.beginPath(),n.moveTo(s+g*h*.15,u+h*.5),n.quadraticCurveTo(s+g*h*.9,u+h*(.5+_)-e*.02,s+g*h*1.5,u+h*(.5+_*3)),n.stroke()}function r0(n,e,t,i,r=0){const s=e/2,a=t/2,o=Math.min(e,t)*.28;n.strokeStyle=i?"#f3a712":ie,n.lineWidth=e*.022,n.lineCap="round";const l=12;for(let h=0;h<l;h++){const u=r*.4+h/l*Math.PI*2,d=1+Math.sin(r*2+h)*.06;n.beginPath(),n.moveTo(s+Math.cos(u)*o*1.28,a+Math.sin(u)*o*1.28),n.lineTo(s+Math.cos(u)*o*1.75*d,a+Math.sin(u)*o*1.75*d),n.stroke()}const c=()=>{n.beginPath(),n.arc(s,a,o,0,Math.PI*2)};if(n.save(),c(),i){const h=n.createRadialGradient(s-o*.3,a-o*.3,o*.1,s,a,o);h.addColorStop(0,"#ffe08a"),h.addColorStop(1,"#f3a712"),n.fillStyle=h}else n.fillStyle=dt(n)??"#f3eede";n.fill(),n.restore(),ve(n,e*.016),n.strokeStyle=i?"#d68f0a":ie,c(),n.stroke(),n.fillStyle=ie,n.beginPath(),n.arc(s-o*.35,a-o*.1,o*.09,0,Math.PI*2),n.arc(s+o*.35,a-o*.1,o*.09,0,Math.PI*2),n.fill(),n.save(),n.fillStyle="rgba(230,120,90,0.3)";for(const h of[-1,1])n.beginPath(),n.arc(s+h*o*.5,a+o*.12,o*.13,0,Math.PI*2),n.fill();n.restore(),ve(n,e*.014),n.strokeStyle=ie,n.beginPath(),n.arc(s,a+o*.12,o*.45,.15*Math.PI,.85*Math.PI),n.stroke()}function s0(n,e,t,i){const r=i??dt(n)??"#f3eede",s=[[.26,.56,.18],[.42,.44,.24],[.6,.42,.22],[.76,.56,.18],[.5,.62,.26]];for(const[a,o,l]of s)n.beginPath(),n.arc(e*a,t*o,Math.min(e,t)*l,0,Math.PI*2),n.fillStyle=r,n.fill();ct(n,()=>{n.beginPath(),n.ellipse(e*.5,t*.54,e*.4,t*.28,0,0,Math.PI*2)},e*.42,t*.42,e*.4,"rgba(255,255,255,0.5)",i?"rgba(120,140,170,0.3)":"rgba(40,35,28,0.16)"),ve(n,e*.01),n.strokeStyle=i?"rgba(120,140,170,0.6)":ie;for(const[a,o,l]of s.slice(0,4))n.beginPath(),n.arc(e*a,t*o,Math.min(e,t)*l,Math.PI,2*Math.PI),n.stroke();n.beginPath(),n.moveTo(e*.14,t*.7),n.quadraticCurveTo(e*.5,t*.78,e*.86,t*.7),n.stroke()}function a0(n,e,t){const i=e/2,r=t*.98,s=Math.min(e*.48,t*.96),a=s*.085;for(let o=0;o<Xi.length;o++)n.strokeStyle=Xi[o],n.lineWidth=a*.95,n.beginPath(),n.arc(i,r,s-o*a-a/2,Math.PI,2*Math.PI),n.stroke()}const Jo=.9,o0="#6f9c4a";class on{root=new en;ctx;rig;girl;onComplete;popups=[];celebration=null;elapsed=0;completed=!1;completionElapsed=0;narrationQuietElapsed=0;completionNotified=!1;placedCount=0;onUpdate(e){}get completionReady(){return this.completed&&this.completionElapsed>=Lm/1e3&&this.narrationQuietElapsed>=Im&&!this.ctx.narrator.isSpeaking}enter(e){this.ctx=e,e.scene.add(this.root),this.setup()}addPopup(e,t){e.root.position.z-=this.placedCount*.0011,this.placedCount+=1,this.guardCorridor(e),this.root.add(e.root),this.popups.push({popup:e,triggerTime:t,triggered:!1})}guardCorridor(e){const t=e.root.position;if(!(t.z<=1&&t.z>=-(this.rig.length+1))||Math.abs(t.x)-e.footprintRadius>=Jo)return;const a=(t.x>=0?1:-1)*(Jo+e.footprintRadius);console.warn(`[StoryScene] Pop-up at x=${t.x.toFixed(2)}, z=${t.z.toFixed(2)} overlaps the camera corridor; nudged to x=${a.toFixed(2)}.`),t.x=a}complete(){this.completed||(this.completed=!0,this.celebrate(),this.colorizeWorld())}celebrate(){const e=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;e||Nm(),this.celebration=new Um(this.root,e),this.celebration.start(this.ctx.camera,this.girl)}colorizeWorld(){const e=this.ctx.camera.position.z;let t=1e-4;for(const{popup:i}of this.popups)t=Math.max(t,Math.abs(i.root.position.z-e));for(const{popup:i}of this.popups){if(i.isColored)continue;const s=Math.abs(i.root.position.z-e)/t*Rm;i.colorizeFade(i.naturalColor??o0,wm,s)}}update(e){const t=this.completed;this.elapsed+=e,this.rig.update(e);for(const i of this.popups)!i.triggered&&this.elapsed>=i.triggerTime&&(i.triggered=!0,i.popup.open(),this.ctx.sound.pop()),i.popup.update(e);this.celebration?.update(e),this.onUpdate(e),t&&this.updateCompletion(e)}updateCompletion(e){if(this.completionNotified)return;const t=Math.max(0,e);this.completionElapsed+=t,this.narrationQuietElapsed=this.ctx.narrator.isSpeaking?0:this.narrationQuietElapsed+t,this.completionReady&&(this.completionNotified=!0,this.onComplete?.())}exit(){this.completionNotified=!0,this.ctx.interaction.clear(),this.ctx.narrator.cancel(),this.celebration?.dispose(),this.celebration=null,this.root.removeFromParent(),this.disposeGroup(this.root),this.root.clear(),this.popups.length=0,this.girl=void 0}disposeGroup(e){e.traverse(t=>{if(!(t instanceof Ge))return;t.geometry.dispose();const i=Array.isArray(t.material)?t.material:[t.material];for(const r of i)r.map?.dispose(),r.dispose()})}}const l0=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,c0=n=>1+2.70158*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2),Da=n=>1-Math.pow(1-n,3),_a=(n,e,t)=>Math.min(t,Math.max(e,n));class ln{constructor(e,t){this.camera=e,this.speed=t.speed,this.length=t.length,this.holdTime=t.holdTime??0,this.eyeHeight=t.eyeHeight??1.5,this.lookAhead=t.lookAhead??6,this.reset()}travelled=0;paused=!1;time=0;speed;length;holdTime;eyeHeight;lookAhead;reset(){this.travelled=0,this.time=0,this.paused=!1,this.apply()}pause(){this.paused=!0}resume(){this.paused=!1}get distance(){return this.travelled}get progress(){return _a(this.travelled/this.length,0,1)}get isTravelling(){return this.time>=this.holdTime}get atEnd(){return this.travelled>=this.length}update(e){this.time+=e,this.isTravelling&&!this.paused&&this.travelled<this.length&&(this.travelled=Math.min(this.length,this.travelled+this.speed*e)),this.apply()}apply(){const e=-this.travelled,t=Math.sin(this.time*1.6)*.035,i=Math.sin(this.time*.7)*.06;this.camera.position.set(i,this.eyeHeight+t,e),this.camera.lookAt(i*.5,this.eyeHeight-.35,e-this.lookAhead)}}class h0{constructor(e,t=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=Math.random()*Math.PI*2){this.group=e,this.reducedMotion=t,this.phase=i}options={bob:0,drift:0,tilt:.02,breathe:0,speed:.8,reactionHeight:.16};elapsed=0;reactionStart=null;configure(e){this.options={...this.options,...e}}react(){this.reactionStart=this.elapsed}update(e,t=1){if(this.elapsed=e,this.group.position.set(0,0,0),this.group.rotation.set(0,0,0),this.group.scale.setScalar(1),this.reducedMotion)return;const i=this.options,r=e*i.speed,s=Zt.clamp(t,0,1),a=Math.sin(r*2+this.phase)*i.breathe*s;if(this.group.position.x=Math.sin(r*.85+this.phase)*i.drift*s,this.group.position.y=(.5-Math.cos(r*1.7+this.phase)*.5)*i.bob*s,this.group.rotation.z=Math.sin(r+this.phase)*i.tilt*s,this.group.scale.set(1-a*.35,1+a,1),this.reactionStart===null)return;const o=(e-this.reactionStart)/.75;if(o>=1){this.reactionStart=null;return}const l=Math.pow(Math.sin(Math.PI*Math.max(0,o)),2);this.group.position.y+=l*i.reactionHeight,this.group.rotation.z+=Math.sin(o*Math.PI*2)*l*.08}}class Il{root=new en;motionGroup=new en;motion=new h0(this.motionGroup);footprintRadius=.5;naturalColor=null;hinges=[];opening=!1;opened=!1;colored=!1;currentColor=null;elapsed=0;clock=0;sinceOpen=0;pulse=0;animAccum=0;highlighted=!1;highlightClock=0;fading=!1;fadeElapsed=0;fadeDelay=0;fadeDuration=.8;mix=1;constructor(){this.root.visible=!1,this.root.add(this.motionGroup)}setIdle(e,t){return this.motion.configure({tilt:e,speed:t}),this}configureMotion(e){return this.motion.configure(e),this}addHinge(e){const t=new en;t.position.copy(e.position),t.rotation.y=e.yaw??0;const i=e.axis??"x",r=e.from??-Math.PI/2,s=e.to??0;return t.rotation[i]=r,e.mesh.position.copy(e.meshOffset??new U(0,0,0)),t.add(e.mesh),this.motionGroup.add(t),this.hinges.push({pivot:t,mesh:e.mesh,axis:i,from:r,to:s,delay:e.delay??0,duration:e.duration??1,easing:e.easing??c0,animated:e.animated??!1}),this}open(){this.opened||this.opening||(this.opening=!0,this.root.visible=!0)}snapOpen(){this.opening=!1,this.opened=!0,this.root.visible=!0;for(const e of this.hinges)e.pivot.rotation[e.axis]=e.to}get isOpen(){return this.opened}get isColored(){return this.colored}colorize(e){if(!this.colored){this.colored=!0,this.highlighted=!1,this.currentColor=e,this.motion.react();for(const t of this.hinges){t.mesh.scale.setScalar(1);const i=t.mesh.userData.render;i?.(e,this.clock)}this.pulse=1e-4}}colorizeFade(e,t=.8,i=0){this.colored||this.fading||(this.currentColor=e,this.fading=!0,this.fadeElapsed=0,this.fadeDelay=Math.max(0,i),this.fadeDuration=Math.max(.001,t),this.mix=0)}setHighlighted(e){if(this.highlighted=e,!e)for(const t of this.hinges)t.mesh.scale.setScalar(1)}update(e){if(this.clock+=e,this.opening){this.elapsed+=e;let i=!0;for(const r of this.hinges){const s=_a((this.elapsed-r.delay)/r.duration,0,1);r.pivot.rotation[r.axis]=Zt.lerp(r.from,r.to,r.easing(s)),s<1&&(i=!1)}i&&(this.opening=!1,this.opened=!0)}if(this.opening||this.opened){this.sinceOpen+=e;const i=Zt.smoothstep(this.sinceOpen,0,.8);this.motion.update(this.clock,i)}if(this.pulse>0){this.pulse+=e;const i=this.pulse/.35;i>=1?this.pulse=0:this.motion.reducedMotion||this.motionGroup.scale.multiplyScalar(1+Math.sin(i*Math.PI)*.14)}if(this.highlighted&&!this.colored&&this.opened&&!this.motion.reducedMotion){this.highlightClock+=e;const i=1+Math.sin(this.highlightClock*2.8)*.1;for(const r of this.hinges)r.mesh.scale.setScalar(i)}const t=this.fading;if(this.fading){this.fadeElapsed+=e;const i=_a((this.fadeElapsed-this.fadeDelay)/this.fadeDuration,0,1);if(this.mix=l0(i),this.fadeElapsed>=this.fadeDelay&&this.currentColor)for(const r of this.hinges){const s=r.mesh.userData.render;s?.(this.currentColor,this.clock,this.mix)}i>=1&&(this.fading=!1,this.colored=!0,this.pulse=1e-4)}if(this.opened&&(!t||this.fadeElapsed<this.fadeDelay)&&(this.animAccum+=e,this.animAccum>=.04)){this.animAccum=0;for(const i of this.hinges){if(!i.animated)continue;const r=i.mesh.userData.render;r?.(this.currentColor,this.clock,this.fading?this.mix:1)}}}}class u0{constructor(e,t,i,r,s=!1){this.canvas=e,this.texture=t,this.draw=r,this.animated=s,this.context=e.getContext("2d",{willReadFrequently:!0}),this.colorMap={value:t},this.installShader(i),i.addEventListener("dispose",()=>this.releaseColorLayer())}context;colorMap;mix={value:0};colorCanvas=null;colorContext=null;colorTexture=null;currentColor=null;lastAnimationTime=0;render(e,t,i){const r=Zt.clamp(i,0,1);if(e&&r<1){this.currentColor!==e&&this.beginFade(e,t),this.mix.value=r,this.animated&&t-this.lastAnimationTime>=.04&&(this.drawFrame(this.context,null,t),this.drawFrame(this.colorContext,e,t),this.texture.needsUpdate=!0,this.colorTexture.needsUpdate=!0,this.lastAnimationTime=t);return}e&&this.currentColor===e&&this.colorCanvas?(this.animated&&this.drawFrame(this.colorContext,e,t),this.context.save(),this.context.setTransform(1,0,0,1,0,0),this.context.globalAlpha=1,this.context.globalCompositeOperation="source-over",this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.drawImage(this.colorCanvas,0,0),this.context.restore()):this.drawFrame(this.context,e,t),this.texture.needsUpdate=!0,this.releaseColorLayer()}beginFade(e,t){this.releaseColorLayer(),this.currentColor=e,this.colorCanvas=document.createElement("canvas"),this.colorCanvas.width=this.canvas.width,this.colorCanvas.height=this.canvas.height,this.colorContext=this.colorCanvas.getContext("2d"),this.animated&&(this.drawFrame(this.context,null,t),this.texture.needsUpdate=!0),this.drawFrame(this.colorContext,e,t),this.colorTexture=new Di(this.colorCanvas),this.colorTexture.colorSpace=this.texture.colorSpace,this.colorTexture.anisotropy=this.texture.anisotropy,this.colorMap.value=this.colorTexture,this.lastAnimationTime=t}drawFrame(e,t,i){e.save(),e.setTransform(1,0,0,1,0,0),e.globalAlpha=1,e.globalCompositeOperation="source-over",e.clearRect(0,0,this.canvas.width,this.canvas.height),e.lineJoin="round",e.lineCap="round",this.draw(e,this.canvas.width,this.canvas.height,t,i),e.restore()}installShader(e){e.customProgramCacheKey=()=>"paper-bloom-color-blend-v1",e.onBeforeCompile=t=>{t.uniforms.paperColorMap=this.colorMap,t.uniforms.paperColorMix=this.mix,t.fragmentShader=t.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
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
      `)}}releaseColorLayer(){this.mix.value=0,this.colorMap.value=this.texture,this.colorTexture?.dispose(),this.colorCanvas&&(this.colorCanvas.width=0,this.colorCanvas.height=0),this.colorCanvas=null,this.colorContext=null,this.colorTexture=null,this.currentColor=null}}function Ua(n){const e=n.pixelsPerUnit??256,t=Math.max(2,Math.round(n.width*e)),i=Math.max(2,Math.round(n.height*e)),r=document.createElement("canvas");r.width=t,r.height=i;const s=r.getContext("2d",{willReadFrequently:!0});s.lineJoin="round",s.lineCap="round",n.draw(s,t,i);const a=new Di(r);a.colorSpace=Ct,a.anisotropy=4,a.needsUpdate=!0;const o=new it({map:a,transparent:!0,alphaTest:n.alphaTest??.4,side:n.doubleSided?Ze:Sn}),l=new et(n.width,n.height),c=new Ge(l,o);c.renderOrder=1;const h=new u0(r,a,o,n.draw,n.animated);return c.userData.render=(u=null,d=0,m=1)=>{h.render(u,d,m)},c}let ki=null;function d0(){if(ki)return ki;const n=128,e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d"),i=t.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);return i.addColorStop(0,"rgba(38, 32, 24, 0.5)"),i.addColorStop(.45,"rgba(38, 32, 24, 0.24)"),i.addColorStop(.75,"rgba(38, 32, 24, 0.08)"),i.addColorStop(1,"rgba(38, 32, 24, 0)"),t.fillStyle=i,t.fillRect(0,0,n,n),ki=new Di(e),ki.colorSpace=Ct,ki}function k(n,e={}){const t=e.scale??1,i=new Il;let r=0;for(const s of n.parts){r=Math.max(r,s.width/2);const a=Ua({draw:s.draw,width:s.width*t,height:s.height*t,pixelsPerUnit:s.pixelsPerUnit,animated:s.animated,doubleSided:n.doubleSided??!0}),o=s.position??[0,0,0],l=s.meshOffset??[0,s.height/2,0];i.addHinge({mesh:a,position:new U(o[0]*t,o[1]*t,o[2]*t),meshOffset:new U(l[0]*t,l[1]*t,l[2]*t),axis:s.axis,yaw:s.yaw,from:s.from,to:s.to,delay:s.delay,duration:s.duration,easing:s.easing,animated:s.animated})}if(i.footprintRadius=(n.footprintRadius??r)*t,i.root.position.y=n.lift??.02,i.naturalColor=n.naturalColor??null,n.shadow!==!1){const s=(n.footprintRadius??r)*t,a=new Ge(new et(s*2.6,s*1.5),new it({map:d0(),transparent:!0,depthWrite:!1,depthTest:!1,opacity:.5}));a.rotation.x=-Math.PI/2,a.position.y=-(n.lift??.02)+.006,a.renderOrder=.5,i.root.add(a)}if(n.idle){const s=.85+Math.random()*.3;i.setIdle(n.idle.amplitude,n.idle.frequency*s)}return n.motion&&i.configureMotion({...n.motion,bob:(n.motion.bob??0)*t,drift:(n.motion.drift??0)*t,reactionHeight:(n.motion.reactionHeight??.16)*t}),i}class cn{constructor(e){this.options=e,this.remaining=e.targets.length;for(const t of e.targets)t.popup.setHighlighted(!0),e.interaction.register({object:t.popup.root,cursor:"pointer",generous:!0,onClick:()=>this.colorIn(t)});this.remaining===0&&this.finish()}remaining;done=!1;colorIn(e){if(e.popup.isColored)return;e.popup.colorize(e.color),this.options.interaction.unregister(e.popup.root),this.remaining--;const t=this.options.targets.length;this.options.sound?.chime(t-this.remaining-1),this.options.onColor?.(this.remaining,t),this.remaining<=0&&this.finish()}finish(){this.done||(this.done=!0,this.options.sound?.success(),this.options.onComplete?.())}}const vt={parts:[{draw:Bm,width:12,height:2.6,pixelsPerUnit:96,duration:1.25}],footprintRadius:6,naturalColor:"#79ad48",idle:{amplitude:.006,frequency:.5}},nt={parts:[{draw:zm,width:.7,height:2.2,duration:.85},{draw:(n,e,t,i)=>jo(n,e,t,!1,i),width:1.3,height:.8,position:[0,1.364,.01],meshOffset:[.65,0,0],axis:"z",from:-Math.PI/2,to:-.12,delay:.65,duration:.5},{draw:(n,e,t,i)=>jo(n,e,t,!0,i),width:1.3,height:.8,position:[0,1.1,.02],meshOffset:[-.65,0,0],axis:"z",from:Math.PI/2,to:.12,delay:.8,duration:.5},{draw:km,width:2.7,height:2.5,position:[0,2.09,-.01],meshOffset:[0,1,0],delay:1,duration:.7}],footprintRadius:1.35,naturalColor:"#5c9a3c",idle:{amplitude:.018,frequency:.6}},We={parts:[{draw:Vm,width:1.8,height:1.1,duration:.7}],footprintRadius:.9,naturalColor:"#5c9a3c",idle:{amplitude:.03,frequency:1}},zr={parts:[{draw:Wm,width:.5,height:.9,duration:.55},{draw:Xm,width:.7,height:.7,position:[0,.855,.01],meshOffset:[0,.28,0],delay:.5,duration:.5}],footprintRadius:.35,idle:{amplitude:.05,frequency:1.4}},nn={parts:[{draw:qm,width:1.1,height:.7,duration:.55}],footprintRadius:.55,naturalColor:"#a9a49a",idle:{amplitude:.006,frequency:.6}},ht={parts:[{draw:Ym,width:.9,height:.6,duration:.5}],footprintRadius:.45,naturalColor:"#79ad48",idle:{amplitude:.065,frequency:1.6}},rn={parts:[{draw:$m,width:.7,height:.7,duration:.5}],footprintRadius:.35,naturalColor:"#d6452f",idle:{amplitude:.015,frequency:.9}},f0={parts:[{draw:Hm,width:3.4,height:3.2,duration:1}],footprintRadius:1.7,naturalColor:"#e7d3a4",idle:{amplitude:.008,frequency:.5}},hn={parts:[{draw:Om,width:1.4,height:2.1,pixelsPerUnit:320,duration:1.4,easing:Da,animated:!0}],footprintRadius:.7,motion:{bob:.02,drift:.025,tilt:.025,breathe:.02,speed:.8,reactionHeight:.18}},bn={parts:[{draw:Gm,width:60,height:18,pixelsPerUnit:48,duration:1.8,easing:Da}],footprintRadius:30,shadow:!1,idle:{amplitude:.004,frequency:.3}},p0={parts:[{draw:Km,width:1.5,height:1.3,duration:.8,animated:!0}],footprintRadius:.65,motion:{bob:.045,drift:0,tilt:.025,breathe:.055,speed:1.2,reactionHeight:.3}},kr={parts:[{draw:Zm,width:1.7,height:1.1,duration:.6}],footprintRadius:.85,naturalColor:"#5c9a3c",idle:{amplitude:.02,frequency:.8}},yi={parts:[{draw:jm,width:.8,height:2.4,duration:.7}],footprintRadius:.4,naturalColor:"#79ad48",idle:{amplitude:.05,frequency:1.2}},m0={parts:[{draw:Qm,width:1.1,height:1.1,meshOffset:[0,1.5,0],duration:.7,animated:!0}],footprintRadius:.45,shadow:!1,motion:{bob:.22,drift:.18,tilt:.12,breathe:.035,speed:1.4,reactionHeight:.22}},g0={parts:[{draw:e0,width:.9,height:1,meshOffset:[0,2.2,0],duration:.6}],footprintRadius:.35,shadow:!1,idle:{amplitude:.03,frequency:1.1}},_0={parts:[{draw:t0,width:1.7,height:1.7,duration:.85,animated:!0}],footprintRadius:.75,motion:{bob:.025,drift:.035,tilt:.045,breathe:.025,speed:.8,reactionHeight:.22}},v0={parts:[{draw:n0,width:1.4,height:1.4,duration:.8,animated:!0}],footprintRadius:.6,motion:{bob:.07,drift:.065,tilt:.08,breathe:.025,speed:1.6,reactionHeight:.24}},M0={parts:[{draw:i0,width:1.6,height:1.8,duration:.85,animated:!0}],footprintRadius:.7,motion:{bob:.09,drift:.025,tilt:.035,breathe:.03,speed:1.1,reactionHeight:.36}},S0={parts:[{draw:r0,width:2.2,height:2.2,meshOffset:[0,3,0],duration:1,animated:!0}],footprintRadius:.9,shadow:!1,idle:{amplitude:.006,frequency:.4}},y0={parts:[{draw:s0,width:2.2,height:1.3,meshOffset:[0,3.2,0],duration:.9}],footprintRadius:1,shadow:!1,idle:{amplitude:.01,frequency:.5}},T0={parts:[{draw:a0,width:16,height:8,pixelsPerUnit:40,meshOffset:[0,3,0],duration:1.6,easing:Da}],footprintRadius:8,shadow:!1,idle:{amplitude:.004,frequency:.3}},xr=-13,b0=8,E0=5.2;class x0 extends on{puzzleStarted=!1;colorTargets=[];seed=439041101;setup(){this.rig=new ln(this.ctx.camera,{speed:1.6,length:b0,holdTime:E0,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildColorTargets(),this.buildGirl(),this.ctx.hud.showCaption("Once, all the colour drained out of the world — every last drop.",5),window.setTimeout(()=>{this.ctx.hud.showCaption("Only one thing kept its colour: the rainbow hair of a little girl named Mabli.",5)},5200)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const s=r??Math.max(.2,.5+(-xr+i)*.26);return this.addPopup(e,s),e}buildGround(){const e=new Ge(new et(48,60),new it({map:an(14),side:Ze}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Ge(new et(.05,60),new it({color:"#c9c1ac",transparent:!0,opacity:.5,side:Ze}));t.rotation.x=-Math.PI/2,t.position.set(0,.001,-18),this.root.add(t)}buildHorizon(){this.place(k(bn),0,xr-9,.1)}buildHeroScenery(){this.place(k(vt,{scale:.9}),-7,-10,.3),this.place(k(vt,{scale:1}),7.2,-11.5,.6),this.place(k(nt,{scale:1.15}),-2.6,-5),this.place(k(nt,{scale:1}),2.7,-6.5),this.place(k(nt,{scale:1.3}),-3.3,-9),this.place(k(nt,{scale:1.05}),3.2,-10.5),this.place(k(nt,{scale:1.2}),-3,-12.5),this.place(k(f0,{scale:.95}),4.6,-12),this.place(k(We,{scale:1.2}),-1.7,-4),this.place(k(We,{scale:1.1}),1.8,-5.5),this.place(k(We,{scale:1.2}),2.3,-9.5),this.place(k(We,{scale:1}),-2,-11)}scatterUndergrowth(){for(let e=-2;e>xr-1;e-=.55)for(const t of[-1,1]){if(this.random()>.82)continue;const i=t*(1+this.random()*2.4),r=e+(this.random()-.5)*.4,s=this.random();let a=.8+this.random()*.7,o=ht;s<.45?o=ht:s<.72?o=rn:s<.9?o=nn:(o=We,a*=.8),this.place(k(o,{scale:a}),i,r)}}buildColorTargets(){const e=[{x:-2.2,z:-11,scale:1.15,color:"#e4572e"},{x:-1.32,z:-11,scale:1.15,color:"#ef7215"},{x:-.44,z:-11,scale:1.15,color:"#f4c20d"},{x:.44,z:-11,scale:1.15,color:"#3fa34d"},{x:1.32,z:-11,scale:1.15,color:"#2b8ac9"},{x:2.2,z:-11,scale:1.15,color:"#9b4dca"}];for(const t of e){const i=this.place(k(zr,{scale:t.scale}),t.x,t.z);this.colorTargets.push({popup:i,color:t.color})}}buildGirl(){this.girl=this.place(k(hn,{scale:1.1}),0,xr,1.2)}onUpdate(e){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startColorPuzzle())}startColorPuzzle(){this.ctx.hud.showCaption("Mabli found some flowers, but they have no colour. Tap each flower to colour it in!",0),new cn({interaction:this.ctx.interaction,sound:this.ctx.sound,targets:this.colorTargets,onColor:e=>{e>0&&this.ctx.hud.showCaption("So pretty! Tap the other flowers too.",0)},onComplete:()=>{this.ctx.hud.showCaption("You did it! Colour is coming back to the world. And so Mabli's journey begins.",0),this.complete()}})}}const Ar=-13,A0=8,C0=5.2,P0="#3fa34d";class R0 extends on{puzzleStarted=!1;colorTargets=[];seed=1373827085;setup(){this.rig=new ln(this.ctx.camera,{speed:1.6,length:A0,holdTime:C0,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildPondLife(),this.buildGirl(),this.ctx.hud.showCaption("Mabli followed the path to a quiet, grey pond…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const s=r??Math.max(.2,.5+(-Ar+i)*.26);return this.addPopup(e,s),e}buildGround(){const e=new Ge(new et(48,60),new it({map:an(14),side:Ze}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Ge(new et(.05,60),new it({color:"#c9c1ac",transparent:!0,opacity:.5,side:Ze}));t.rotation.x=-Math.PI/2,t.position.set(0,.001,-18),this.root.add(t);const i=Ua({draw:Jm,width:8,height:5.5,pixelsPerUnit:64,doubleSided:!0});i.rotation.x=-Math.PI/2,i.position.set(0,.012,-11),this.root.add(i)}buildHorizon(){this.place(k(bn),0,Ar-9,.1)}buildHeroScenery(){this.place(k(vt,{scale:.9}),-7,-10,.3),this.place(k(vt,{scale:1}),7.2,-11.5,.6),this.place(k(nt,{scale:1.15}),-3.6,-6),this.place(k(nt,{scale:1.1}),3.7,-8.5),this.place(k(nt,{scale:1.2}),-4.2,-12.5),this.place(k(We,{scale:1.2}),-2.2,-5),this.place(k(We,{scale:1.1}),2.4,-6.5),this.place(k(yi,{scale:1.1}),-2.6,-9.6),this.place(k(yi,{scale:1.25}),2.6,-10.2),this.place(k(yi,{scale:1}),-2.9,-11.6),this.place(k(yi,{scale:1.15}),2.3,-12.2)}scatterUndergrowth(){for(let e=-2;e>Ar-1;e-=.6)for(const t of[-1,1]){if(this.random()>.8)continue;const i=t*(1.2+this.random()*2.4),r=e+(this.random()-.5)*.4,s=this.random();let a=.8+this.random()*.7,o=ht;s<.4?o=ht:s<.62?o=yi:s<.8?o=rn:s<.92?o=nn:(o=We,a*=.8),this.place(k(o,{scale:a}),i,r)}}buildPondLife(){this.place(k(kr,{scale:1.2}),.5,-10.9),this.place(k(kr,{scale:1}),-1.3,-10.4),this.place(k(kr,{scale:1.1}),1.5,-11.9);const e=this.place(k(p0,{scale:1.25}),.5,-10.6,1.4);this.colorTargets.push({popup:e,color:P0})}buildGirl(){this.girl=this.place(k(hn,{scale:1.1}),-1.7,Ar,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startFrogPuzzle())}startFrogPuzzle(){this.ctx.hud.showCaption("“Ribbit… hello! I’m a little frog, but I’ve lost all my green. Can you find me and tap me to colour me in?”",0),new cn({interaction:this.ctx.interaction,sound:this.ctx.sound,targets:this.colorTargets,onComplete:()=>{this.ctx.hud.showCaption("“Ribbit-ribbit! I’m green again! Thank you!”",0),this.complete()}})}}const Cr=-13,w0=8,L0=5.2;class I0 extends on{puzzleStarted=!1;colorTargets=[];seed=186515111;setup(){this.rig=new ln(this.ctx.camera,{speed:1.6,length:w0,holdTime:L0,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildButterflies(),this.buildGirl(),this.ctx.hud.showCaption("The path opened into a dull, grey meadow…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const s=r??Math.max(.2,.5+(-Cr+i)*.26);return this.addPopup(e,s),e}buildGround(){const e=new Ge(new et(48,60),new it({map:an(14),side:Ze}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Ge(new et(.05,60),new it({color:"#c9c1ac",transparent:!0,opacity:.5,side:Ze}));t.rotation.x=-Math.PI/2,t.position.set(0,.001,-18),this.root.add(t)}buildHorizon(){this.place(k(bn),0,Cr-9,.1)}buildHeroScenery(){this.place(k(vt,{scale:.9}),-7,-10,.3),this.place(k(vt,{scale:1}),7.2,-11.5,.6),this.place(k(nt,{scale:1.15}),-3.7,-6.5),this.place(k(nt,{scale:1.1}),3.8,-9),this.place(k(We,{scale:1.2}),-2.4,-5),this.place(k(We,{scale:1.1}),2.5,-6.5),this.place(k(We,{scale:1.2}),2.2,-11.5)}scatterUndergrowth(){for(let e=-2;e>Cr-1;e-=.5)for(const t of[-1,1]){if(this.random()>.85)continue;const i=t*(1.1+this.random()*2.6),r=e+(this.random()-.5)*.4,s=this.random();let a=.8+this.random()*.7,o=ht;s<.62?o=ht:s<.82?o=rn:s<.93?o=nn:(o=We,a*=.8),this.place(k(o,{scale:a}),i,r)}}buildButterflies(){const e=[{x:-2.2,z:-11,scale:.85,color:"#e4572e"},{x:-1.1,z:-11,scale:.85,color:"#2b8ac9"},{x:0,z:-11,scale:.85,color:"#f4c20d"},{x:1.1,z:-11,scale:.85,color:"#9b4dca"},{x:2.2,z:-11,scale:.85,color:"#ef7215"}];for(const t of e){const i=this.place(k(m0,{scale:t.scale}),t.x,t.z);this.colorTargets.push({popup:i,color:t.color})}}buildGirl(){this.girl=this.place(k(hn,{scale:1.1}),-2,Cr,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startButterflyPuzzle())}startButterflyPuzzle(){this.ctx.hud.showCaption("So many butterflies — but they're all grey! Tap each butterfly to colour its wings!",0),new cn({interaction:this.ctx.interaction,sound:this.ctx.sound,targets:this.colorTargets,onColor:e=>{e>0&&this.ctx.hud.showCaption("Wonderful! Colour the others too!",0)},onComplete:()=>{this.ctx.hud.showCaption("You did it! The whole meadow is dancing with colour!",0),this.complete()}})}}const Pr=-13,D0=8,U0=5.2;class N0 extends on{puzzleStarted=!1;colorTargets=[];seed=2844860133;setup(){this.rig=new ln(this.ctx.camera,{speed:1.6,length:D0,holdTime:U0,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildApples(),this.buildGirl(),this.ctx.hud.showCaption("Beyond the meadow stood a great, grey apple tree…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const s=r??Math.max(.2,.5+(-Pr+i)*.26);return this.addPopup(e,s),e}buildGround(){const e=new Ge(new et(48,60),new it({map:an(14),side:Ze}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Ge(new et(.05,60),new it({color:"#c9c1ac",transparent:!0,opacity:.5,side:Ze}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}buildHorizon(){this.place(k(bn),0,Pr-9,.1)}buildHeroScenery(){this.place(k(vt,{scale:.9}),-7,-10,.3),this.place(k(vt,{scale:1}),7.2,-11.5,.6),this.place(k(nt,{scale:1.7}),0,-14,.8),this.place(k(nt,{scale:1}),-4,-7),this.place(k(We,{scale:1.1}),-2.4,-5.5),this.place(k(We,{scale:1}),2.6,-6.5),this.place(k(We,{scale:1}),3,-11.5)}scatterUndergrowth(){for(let e=-3.2;e>Pr-1;e-=.55)for(const t of[-1,1]){if(this.random()>.78)continue;const i=t*(1.2+this.random()*2.6),r=e+(this.random()-.5)*.4,s=this.random();let a=.6+this.random()*.4,o=ht;s<.55?o=ht:s<.78?o=rn:s<.92?o=nn:(o=We,a*=.8),this.place(k(o,{scale:a}),i,r)}}buildApples(){const e=[{x:-2.2,z:-13,scale:1.3,color:"#e4572e"},{x:-1.1,z:-13,scale:1.3,color:"#d64541"},{x:0,z:-13,scale:1.3,color:"#f4c20d"},{x:1.1,z:-13,scale:1.3,color:"#3fa34d"},{x:2.2,z:-13,scale:1.3,color:"#ef7215"}];for(const t of e){const i=this.place(k(g0,{scale:t.scale}),t.x,t.z);this.colorTargets.push({popup:i,color:t.color})}}buildGirl(){this.girl=this.place(k(hn,{scale:1.1}),-2.1,Pr,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startApplePuzzle())}startApplePuzzle(){this.ctx.hud.showCaption("The apples have no colour! Tap each apple to fill it with colour.",0),new cn({interaction:this.ctx.interaction,sound:this.ctx.sound,targets:this.colorTargets,onColor:e=>{e>0&&this.ctx.hud.showCaption("Yum! Colour the rest too!",0)},onComplete:()=>{this.ctx.hud.showCaption("You did it! The orchard is ripe with colour!",0),this.complete()}})}}const Rr=-13,F0=8,O0=5.2,B0="#e8823a";class z0 extends on{puzzleStarted=!1;colorTargets=[];seed=252451383;setup(){this.rig=new ln(this.ctx.camera,{speed:1.6,length:F0,holdTime:O0,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildFox(),this.buildGirl(),this.ctx.hud.showCaption("In a hush of grey trees, someone was waiting…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const s=r??Math.max(.2,.5+(-Rr+i)*.26);return this.addPopup(e,s),e}buildGround(){const e=new Ge(new et(48,60),new it({map:an(14),side:Ze}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Ge(new et(.05,60),new it({color:"#c9c1ac",transparent:!0,opacity:.5,side:Ze}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}buildHorizon(){this.place(k(bn),0,Rr-9,.1)}buildHeroScenery(){this.place(k(vt,{scale:.9}),-7,-10,.3),this.place(k(vt,{scale:1}),7.2,-11.5,.6),this.place(k(nt,{scale:1.3}),-3.6,-6.5),this.place(k(nt,{scale:1.2}),3.7,-8),this.place(k(nt,{scale:1.5}),-4.2,-12),this.place(k(nt,{scale:1.35}),4,-12.8),this.place(k(We,{scale:1.3}),-2.4,-9.5),this.place(k(We,{scale:1.2}),2.4,-10.5)}scatterUndergrowth(){for(let e=-3.2;e>Rr-1;e-=.55)for(const t of[-1,1]){if(this.random()>.82)continue;const i=t*(1.2+this.random()*2.4),r=e+(this.random()-.5)*.4,s=this.random();let a=.6+this.random()*.4,o=ht;s<.5?o=ht:s<.76?o=rn:s<.92?o=nn:(o=We,a*=.8),this.place(k(o,{scale:a}),i,r)}}buildFox(){const e=this.place(k(_0,{scale:1.05}),.5,-11.2,1.4);this.colorTargets.push({popup:e,color:B0})}buildGirl(){this.girl=this.place(k(hn,{scale:1.1}),-2,Rr,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startFoxPuzzle())}startFoxPuzzle(){this.ctx.hud.showCaption("“Oh… I'm a little fox. I've lost my lovely orange coat. Will you colour me in?”",0),new cn({interaction:this.ctx.interaction,sound:this.ctx.sound,targets:this.colorTargets,onComplete:()=>{this.ctx.hud.showCaption("“Look at me — orange again! Thank you, friend!”",0),this.complete()}})}}const wr=-13,k0=8,H0=5.2;class G0 extends on{puzzleStarted=!1;colorTargets=[];seed=728876201;setup(){this.rig=new ln(this.ctx.camera,{speed:1.6,length:k0,holdTime:H0,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildBird(),this.buildGirl(),this.ctx.hud.showCaption("A little song drifted across the still, grey meadow…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const s=r??Math.max(.2,.5+(-wr+i)*.26);return this.addPopup(e,s),e}buildGround(){const e=new Ge(new et(48,60),new it({map:an(14),side:Ze}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Ge(new et(.05,60),new it({color:"#c9c1ac",transparent:!0,opacity:.5,side:Ze}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}buildHorizon(){this.place(k(bn),0,wr-9,.1)}buildHeroScenery(){this.place(k(vt,{scale:.9}),-7,-10,.3),this.place(k(vt,{scale:1}),7.2,-11.5,.6),this.place(k(nt,{scale:1.2}),-3.7,-6.5),this.place(k(nt,{scale:1.3}),3.9,-9),this.place(k(We,{scale:1.2}),-2.4,-8.5),this.place(k(We,{scale:1.1}),2.6,-10.5)}scatterUndergrowth(){for(let e=-3;e>wr-1;e-=.55)for(const t of[-1,1]){if(this.random()>.82)continue;const i=t*(1.2+this.random()*2.4),r=e+(this.random()-.5)*.4,s=this.random();let a=.7+this.random()*.5,o=ht;s<.55?o=ht:s<.78?o=rn:s<.92?o=nn:(o=We,a*=.8),this.place(k(o,{scale:a}),i,r)}}buildBird(){const e=[{x:-1.7,color:"#4a90d9"},{x:0,color:"#e2703a"},{x:1.7,color:"#f4c20d"}];for(const t of e){this.place(k(nn,{scale:1.4}),t.x,-11,1.2);const i=this.place(k(v0,{scale:1}),t.x,-11,1.5);i.root.position.y=.5,this.colorTargets.push({popup:i,color:t.color})}}buildGirl(){this.girl=this.place(k(hn,{scale:1.1}),-2,wr,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startBirdPuzzle())}startBirdPuzzle(){this.ctx.hud.showCaption("“Tweet! We're little birds, but our colours have flown away. Tap each of us to colour us in!”",0),new cn({interaction:this.ctx.interaction,sound:this.ctx.sound,targets:this.colorTargets,onColor:e=>{e>0&&this.ctx.hud.showCaption("“Tweet! Now colour my friends too!”",0)},onComplete:()=>{this.ctx.hud.showCaption("“Tweet-tweet! A whole flock of colour — thank you!”",0),this.complete()}})}}const Lr=-13,V0=8,W0=5.2,X0="#b98b5e";class q0 extends on{puzzleStarted=!1;colorTargets=[];seed=1832554737;setup(){this.rig=new ln(this.ctx.camera,{speed:1.6,length:V0,holdTime:W0,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildRabbit(),this.buildGirl(),this.ctx.hud.showCaption("Something soft rustled in the tall, grey grass…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const s=r??Math.max(.2,.5+(-Lr+i)*.26);return this.addPopup(e,s),e}buildGround(){const e=new Ge(new et(48,60),new it({map:an(14),side:Ze}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Ge(new et(.05,60),new it({color:"#c9c1ac",transparent:!0,opacity:.5,side:Ze}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}buildHorizon(){this.place(k(bn),0,Lr-9,.1)}buildHeroScenery(){this.place(k(vt,{scale:1}),-7,-10,.3),this.place(k(vt,{scale:.95}),7.2,-11.5,.6),this.place(k(nt,{scale:1.15}),-4,-7),this.place(k(nt,{scale:1.1}),4,-9.5),this.place(k(We,{scale:1.3}),-2.6,-8.5),this.place(k(We,{scale:1.2}),2.7,-10.5)}scatterUndergrowth(){for(let e=-3;e>Lr-1;e-=.5)for(const t of[-1,1]){if(this.random()>.86)continue;const i=t*(1.1+this.random()*2.6),r=e+(this.random()-.5)*.4,s=this.random();let a=.8+this.random()*.6,o=ht;s<.68?o=ht:s<.85?o=rn:s<.94?o=nn:(o=We,a*=.8),this.place(k(o,{scale:a}),i,r)}}buildRabbit(){const e=this.place(k(M0,{scale:1.1}),.6,-11,1.4);this.colorTargets.push({popup:e,color:X0}),this.place(k(ht,{scale:1.4}),-.1,-10.4,1.6),this.place(k(ht,{scale:1.3}),1.3,-10.5,1.6)}buildGirl(){this.girl=this.place(k(hn,{scale:1.1}),-2,Lr,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startRabbitPuzzle())}startRabbitPuzzle(){this.ctx.hud.showCaption("“Hello… I'm a shy little rabbit, and my soft brown is all gone. Will you colour me in?”",0),new cn({interaction:this.ctx.interaction,sound:this.ctx.sound,targets:this.colorTargets,onComplete:()=>{this.ctx.hud.showCaption("“Warm and brown again! Thank you, kind friend.”",0),this.complete()}})}}const Ir=-13,Y0=8,$0=5.2,K0="#d6452f";class Z0 extends on{puzzleStarted=!1;colorTargets=[];seed=2141307707;setup(){this.rig=new ln(this.ctx.camera,{speed:1.6,length:Y0,holdTime:$0,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildHorizon(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildToadstools(),this.buildGirl(),this.ctx.hud.showCaption("Deeper in, a little ring of toadstools stood waiting…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const s=r??Math.max(.2,.5+(-Ir+i)*.26);return this.addPopup(e,s),e}buildGround(){const e=new Ge(new et(48,60),new it({map:an(14),side:Ze}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Ge(new et(.05,60),new it({color:"#c9c1ac",transparent:!0,opacity:.5,side:Ze}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}buildHorizon(){this.place(k(bn),0,Ir-9,.1)}buildHeroScenery(){this.place(k(vt,{scale:.95}),-7,-10,.3),this.place(k(vt,{scale:1}),7.2,-11.5,.6),this.place(k(nt,{scale:1.4}),-4,-7),this.place(k(nt,{scale:1.3}),4.1,-8.5),this.place(k(nt,{scale:1.5}),-4.4,-12.5),this.place(k(We,{scale:1.3}),-2.6,-9),this.place(k(We,{scale:1.2}),2.7,-10.5)}scatterUndergrowth(){for(let e=-3;e>Ir-1;e-=.6)for(const t of[-1,1]){if(this.random()>.84)continue;const i=t*(1.4+this.random()*2.2),r=e+(this.random()-.5)*.4,s=this.random();let a=.7+this.random()*.5,o=ht;s<.55?o=ht:s<.8?o=nn:(o=We,a*=.8),this.place(k(o,{scale:a}),i,r)}}buildToadstools(){const e=[-2.7,-1,1,2.7];for(const t of e){const i=this.place(k(rn,{scale:2.3}),t,-11);this.colorTargets.push({popup:i,color:K0})}}buildGirl(){this.girl=this.place(k(hn,{scale:1.1}),0,Ir,1.2)}onUpdate(){!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startToadstoolPuzzle())}startToadstoolPuzzle(){this.ctx.hud.showCaption("The toadstools have lost their cheerful red caps. Tap each one to colour it in!",0),new cn({interaction:this.ctx.interaction,sound:this.ctx.sound,targets:this.colorTargets,onColor:e=>{e>0&&this.ctx.hud.showCaption("Lovely and red! Colour the others too.",0)},onComplete:()=>{this.ctx.hud.showCaption("A whole ring of red toadstools — wonderful!",0),this.complete()}})}}const Ds=-13,j0=8,J0=5.2;class Q0 extends on{puzzleStarted=!1;finale=!1;endingShown=!1;colorTargets=[];warmTarget=new Be("#f7ecd2");seed=1545304577;setup(){this.rig=new ln(this.ctx.camera,{speed:1.6,length:j0,holdTime:J0,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),this.buildGround(),this.buildSky(),this.buildHeroScenery(),this.scatterUndergrowth(),this.buildGirl(),this.ctx.hud.showCaption("At last Mabli climbed a hill beneath a wide, grey sky…",5)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}place(e,t,i,r){e.root.position.x=t,e.root.position.z=i;const s=r??Math.max(.2,.5+(-Ds+i)*.26);return this.addPopup(e,s),e}buildGround(){const e=new Ge(new et(48,60),new it({map:an(14),side:Ze}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Ge(new et(.05,60),new it({color:"#c9c1ac",transparent:!0,opacity:.5,side:Ze}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}buildSky(){const e=this.place(k(S0,{scale:1.5}),0,-15.5,.4);this.colorTargets.push({popup:e,color:"#f6c744"});const t=[{x:-3.4,z:-15,scale:1.2,color:"#bcdff0"},{x:3.4,z:-15.4,scale:1.3,color:"#f4c2d0"},{x:-2,z:-17.6,scale:1.1,color:"#d9c2ec"}];for(const i of t){const r=this.place(k(y0,{scale:i.scale}),i.x,i.z,.7);this.colorTargets.push({popup:r,color:i.color})}}buildHeroScenery(){this.place(k(vt,{scale:.8}),-7.5,-14,.3),this.place(k(vt,{scale:.85}),7.6,-14.5,.6),this.place(k(nt,{scale:1.1}),-4.4,-7.5),this.place(k(We,{scale:1.1}),3.2,-9.5),this.place(k(We,{scale:1}),-2.8,-10.5)}scatterUndergrowth(){for(let e=-3.2;e>Ds-1;e-=.6)for(const t of[-1,1]){if(this.random()>.78)continue;const i=t*(1.2+this.random()*2.6),r=e+(this.random()-.5)*.4,s=this.random();let a=.6+this.random()*.4,o=ht;s<.7?o=ht:s<.9?o=nn:(o=We,a*=.8),this.place(k(o,{scale:a}),i,r)}}buildGirl(){this.girl=this.place(k(hn,{scale:1.15}),-1.9,Ds,1.2)}onUpdate(e){if(!this.puzzleStarted&&this.rig.atEnd&&(this.puzzleStarted=!0,this.rig.pause(),this.startSkyPuzzle()),this.finale){const t=this.ctx.scene.background;t instanceof Be&&t.lerp(this.warmTarget,Math.min(1,e*.6)),this.ctx.scene.fog?.color.lerp(this.warmTarget,Math.min(1,e*.6)),!this.endingShown&&this.completionReady&&(this.endingShown=!0,this.ctx.hud.showEndCard("The End","And so Mabli, the girl with the rainbow hair, brought colour back to the whole world."))}}startSkyPuzzle(){this.ctx.hud.showCaption("The whole sky is grey! Tap the sun and each cloud to colour them.",0),new cn({interaction:this.ctx.interaction,sound:this.ctx.sound,targets:this.colorTargets,onColor:e=>{e>0&&this.ctx.hud.showCaption("Beautiful! Keep colouring the sky!",0)},onComplete:()=>this.startFinale()})}startFinale(){this.finale=!0,this.ctx.hud.showCaption("Colour rushed back into every corner of the world!",0),this.place(k(T0),0,-16.5,0),this.complete()}}function eg(n,e,t,i){n.save(),n.lineJoin="round",n.lineCap="round";const r=dt(n)??"#f3eede";if(n.beginPath(),n.moveTo(e*.045,t*.52),n.bezierCurveTo(e*.06,t*.28,e*.25,t*.13,e*.48,t*.17),n.bezierCurveTo(e*.7,t*.08,e*.91,t*.23,e*.955,t*.47),n.bezierCurveTo(e*.95,t*.71,e*.81,t*.88,e*.55,t*.84),n.bezierCurveTo(e*.32,t*.95,e*.12,t*.82,e*.045,t*.52),n.closePath(),n.fillStyle=i??r,n.fill(),i){n.save(),n.clip();const s=n.createLinearGradient(0,t*.2,0,t*.85);s.addColorStop(0,"rgba(255,255,240,0.4)"),s.addColorStop(.6,"rgba(255,255,240,0)"),s.addColorStop(1,"rgba(45,88,113,0.12)"),n.fillStyle=s,n.fillRect(0,0,e,t),n.globalAlpha=.1,n.fillStyle=r,n.fillRect(0,0,e,t),n.restore()}n.strokeStyle=ie,n.lineWidth=Math.min(e,t)*.009,n.stroke(),n.strokeStyle=i?"rgba(54,96,116,0.6)":"rgba(33,29,24,0.4)",n.lineWidth=Math.min(e,t)*.005;for(const[s,a,o]of[[.27,.36,.08],[.62,.3,.1],[.8,.49,.06],[.38,.54,.12],[.2,.64,.06],[.66,.71,.1]])n.beginPath(),n.moveTo(e*(s-o),t*a),n.bezierCurveTo(e*(s-o*.4),t*(a+.025),e*(s+o*.4),t*(a-.025),e*(s+o),t*a),n.stroke();n.restore()}class tg{constructor(e,t){this.root=e,this.place=t}build(e){this.addGround(),this.place(k(bn),0,-23,.1),this.place(k(vt,{scale:.85}),-7.5,-15,.3),this.place(k(vt,{scale:.9}),7.5,-15.5,.5);for(const t of[-1,1]){this.place(k(We,{scale:1}),t*4.2,-13.5,.7);for(const i of[-5,-7.5,-10])this.place(k(ht,{scale:.9}),t*3.9,i,1.1)}e==="stream"&&this.addStream(),e==="meadow"&&this.addMeadow(),e==="garden"&&this.addGarden(),e==="glade"&&this.addGlade()}addGround(){const e=new Ge(new et(48,60),new it({map:an(14),side:Ze}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-18),this.root.add(e);const t=new Ge(new et(.04,60),new it({color:"#c9c1ac",transparent:!0,opacity:.4}));t.rotation.x=-Math.PI/2,t.position.set(0,.004,-18),this.root.add(t)}addMeadow(){for(const e of[-1,1])this.place(k(zr,{scale:1.9}),e*3.6,-14,.8),this.place(k(zr,{scale:1.3}),e*4.3,-12.8,1.1)}addStream(){const e=Ua({draw:eg,width:8.5,height:5,pixelsPerUnit:64,doubleSided:!0});e.rotation.x=-Math.PI/2;const t=new Il().setIdle(0,0);t.naturalColor="#a8cddd",t.footprintRadius=4.25,t.root.position.y=.012,t.addHinge({mesh:e,position:new U,meshOffset:new U,from:0,to:0,duration:.6}),this.place(t,0,-12.1,.2);for(const i of[-1,1])this.place(k(yi,{scale:1.1}),i*3.7,-13,.9),this.place(k(kr,{scale:.9}),i*2.9,-14.2,1.2)}addGarden(){for(const e of[-1,1])this.place(k(zr,{scale:2.1}),e*3.8,-14.5,.8),this.place(k(rn,{scale:1.25}),e*3.5,-12.8,1)}addGlade(){for(const e of[-1,1])this.place(k(nt,{scale:1.1}),e*5.1,-12.8,.6),this.place(k(rn,{scale:1.2}),e*3.7,-13.6,1)}}class ng extends on{constructor(e){super(),this.definition=e}targets=[];puzzleStarted=!1;setup(){this.rig=new ln(this.ctx.camera,{speed:1.6,length:8,holdTime:5.2,eyeHeight:1.4,lookAhead:5}),this.rig.reset(),new tg(this.root,this.place).build(this.definition.setting);for(const e of this.definition.targets){const t=k(e.element,{scale:e.scale});t.root.position.y+=e.lift??0,this.place(t,e.x,e.z,1.3),this.targets.push({popup:t,color:e.color})}this.girl=this.place(k(hn,{scale:1.05}),-3.1,-15,1.1),this.ctx.hud.showCaption(this.definition.opening,5)}place=(e,t,i,r=.8)=>(e.root.position.x=t,e.root.position.z=i,this.addPopup(e,r),e);onUpdate(){this.puzzleStarted||!this.rig.atEnd||(this.puzzleStarted=!0,this.rig.pause(),this.ctx.hud.showCaption(this.definition.prompt,0),new cn({interaction:this.ctx.interaction,sound:this.ctx.sound,targets:this.targets,onColor:e=>{e>0&&this.ctx.hud.showCaption(this.definition.progress,0)},onComplete:()=>{this.ctx.hud.showCaption(this.definition.ending,0),this.complete()}}))}}function Qr(n,e,t,i,r,s,a=0,o=!1){if(n.save(),n.strokeStyle=ie,n.lineWidth=Math.min(i,r)*.18,n.lineCap="round",(s+a)%4.8>4.62)n.beginPath(),n.moveTo(e-i*.85,t),n.quadraticCurveTo(e,t+r*(o?-.35:.15),e+i*.85,t),n.stroke();else{n.beginPath(),n.ellipse(e,t,i,r,0,0,Math.PI*2),n.fillStyle="#fffdf2",n.fill(),n.stroke();const l=Math.sin(s*.8+a)*i*.12;n.beginPath(),n.ellipse(e+l,t+r*.08,i*.49,r*(o?.65:.58),0,0,Math.PI*2),n.fillStyle=ie,n.fill(),n.beginPath(),n.ellipse(e+l-i*.17,t-r*.19,i*.2,r*.2,0,0,Math.PI*2),n.fillStyle="#ffffff",n.fill(),n.beginPath(),n.ellipse(e+l+i*.18,t+r*.3,i*.09,r*.09,0,0,Math.PI*2),n.fill()}n.restore()}function ig(n,e,t,i,r=0){const s=dt(n)??"#f3eede",a=i??s,o=i?"#dbeef4":s,l=Math.sin(r*13)*.025;n.save(),n.scale(e,t),n.strokeStyle=ie,n.lineWidth=.014,n.lineCap="round",n.lineJoin="round";for(const[h,u,d]of[[.52,.29,-.5],[.73,.34,.4]])n.beginPath(),n.ellipse(h,u,.14,.18+l,d,0,Math.PI*2),n.fillStyle=o,n.fill(),n.stroke(),n.beginPath(),n.moveTo(h-.05,u+.09),n.quadraticCurveTo(h+.02,u,h+.04,u-.09),n.stroke();n.beginPath(),n.moveTo(.83,.56),n.lineTo(.95,.59),n.lineTo(.84,.65),n.closePath(),n.fillStyle=ie,n.fill(),n.beginPath(),n.ellipse(.58,.61,.29,.24,-.08,0,Math.PI*2),n.fillStyle=a,n.fill();const c=n.createLinearGradient(0,.36,0,.86);c.addColorStop(0,"rgba(255,255,236,0.6)"),c.addColorStop(.48,"rgba(255,255,236,0)"),c.addColorStop(1,"rgba(93,57,28,0.19)"),n.fillStyle=c,n.fill(),n.stroke(),n.save(),n.beginPath(),n.ellipse(.58,.61,.29,.24,-.08,0,Math.PI*2),n.clip(),n.strokeStyle=ie,n.lineWidth=.065;for(const h of[.57,.73])n.beginPath(),n.moveTo(h-.025,.36),n.quadraticCurveTo(h+.035,.59,h-.015,.87),n.stroke();n.restore();for(const h of[.48,.65,.76])n.beginPath(),n.moveTo(h,.79),n.quadraticCurveTo(h-.01,.9,h-.065,.9),n.stroke();for(const[h,u]of[[.23,.15],[.34,.39]]){const d=u+Math.sin(r*1.9+h*7)*.012;n.beginPath(),n.moveTo(h,.43),n.quadraticCurveTo(h,.27,d,.24),n.stroke(),n.beginPath(),n.arc(d,.24,.022,0,Math.PI*2),n.fillStyle=ie,n.fill()}n.beginPath(),n.ellipse(.29,.55,.17,.19,-.1,0,Math.PI*2),n.fillStyle=a,n.fill(),n.beginPath(),n.ellipse(.247,.452,.085,.065,-.3,0,Math.PI*2),n.fillStyle="rgba(255,255,235,0.35)",n.fill(),n.beginPath(),n.ellipse(.29,.55,.17,.19,-.1,0,Math.PI*2),n.stroke();for(const h of[.23,.34])Qr(n,h,.515,.039,.052,r,.8,!!i);if(i){n.fillStyle="rgba(239,128,124,0.52)";for(const h of[.188,.385])n.beginPath(),n.ellipse(h,.587,.025,.016,0,0,Math.PI*2),n.fill()}n.beginPath(),n.arc(.285,.585,i?.07:.055,.08,Math.PI-.08),i&&(n.closePath(),n.fillStyle="#754b35",n.fill()),n.stroke(),n.restore()}function rg(n,e,t,i,r=0){const s=dt(n)??"#f3eede",a=i??s,o=i?"#ef9238":s;n.save(),n.scale(e,t),n.strokeStyle=ie,n.lineWidth=.014,n.lineJoin="round",n.lineCap="round";for(const c of[.35,.59])n.beginPath(),n.moveTo(c-.025,.81),n.lineTo(c-.07,.91),n.lineTo(c-.015,.9),n.lineTo(c+.035,.93),n.lineTo(c+.08,.89),n.lineTo(c+.025,.81),n.closePath(),n.fillStyle=o,n.fill(),n.stroke();n.beginPath(),n.moveTo(.25,.58),n.quadraticCurveTo(.11,.57,.1,.47),n.quadraticCurveTo(.08,.68,.25,.77),n.closePath(),n.fillStyle=a,n.fill(),n.stroke(),n.beginPath(),n.ellipse(.44,.66,.3,.23,-.12,0,Math.PI*2),n.fillStyle=a,n.fill();const l=n.createLinearGradient(0,.43,0,.9);l.addColorStop(0,"rgba(255,255,238,0.55)"),l.addColorStop(.5,"rgba(255,255,238,0)"),l.addColorStop(1,"rgba(134,80,23,0.2)"),n.fillStyle=l,n.fill(),n.stroke(),n.beginPath(),n.ellipse(.41,.67,.16,.13,-.25,0,Math.PI*2),n.fillStyle=i?"#ffe9a8":s,n.fill(),n.stroke(),n.beginPath(),n.moveTo(.29,.67),n.quadraticCurveTo(.36,.76,.48,.72),n.stroke(),n.beginPath(),n.arc(.63,.37,.205,0,Math.PI*2),n.fillStyle=a,n.fill(),n.beginPath(),n.ellipse(.565,.275,.085,.066,-.4,0,Math.PI*2),n.fillStyle="rgba(255,255,238,0.4)",n.fill(),n.beginPath(),n.arc(.63,.37,.205,0,Math.PI*2),n.stroke(),n.beginPath(),n.moveTo(.56,.18),n.quadraticCurveTo(.55,.09,.6+Math.sin(r*1.4)*.007,.13),n.quadraticCurveTo(.62,.08,.65,.17),n.stroke(),n.beginPath(),n.moveTo(.79,.39),n.quadraticCurveTo(.96,.39,.94,.46),n.quadraticCurveTo(.88,.5,.78,.46),n.closePath(),n.fillStyle=o,n.fill(),n.stroke(),n.beginPath(),n.moveTo(.81,.443),n.quadraticCurveTo(.87,.455,.92,.44),n.stroke(),Qr(n,.685,.337,.048,.061,r,1.8,!!i),i&&(n.beginPath(),n.ellipse(.659,.429,.035,.022,0,0,Math.PI*2),n.fillStyle="rgba(239,146,125,0.5)",n.fill(),n.beginPath(),n.moveTo(.706,.424),n.quadraticCurveTo(.74,.46,.766,.423),n.stroke()),n.restore()}function sg(n,e,t,i,r=0){n.save(),n.lineCap="round",n.lineJoin="round",n.lineWidth=Math.min(e,t)*.014,n.strokeStyle=ie;const s=dt(n)??"#f3eede";n.beginPath(),n.moveTo(e*.08,t*.8),n.bezierCurveTo(e*.2,t*.92,e*.67,t*.93,e*.86,t*.84),n.bezierCurveTo(e*.95,t*.8,e*.94,t*.7,e*.9,t*.61),n.bezierCurveTo(e*.86,t*.49,e*.77,t*.49,e*.72,t*.58),n.bezierCurveTo(e*.68,t*.65,e*.7,t*.71,e*.62,t*.75),n.bezierCurveTo(e*.4,t*.77,e*.19,t*.7,e*.08,t*.8),n.closePath(),n.fillStyle=i?"#eeddb9":s,n.fill();const a=n.createLinearGradient(0,t*.5,0,t*.94);a.addColorStop(0,"rgba(255,255,237,0.45)"),a.addColorStop(.55,"rgba(255,255,237,0)"),a.addColorStop(1,"rgba(113,78,40,0.17)"),n.fillStyle=a,n.fill(),n.stroke(),n.beginPath(),n.moveTo(e*.2,t*.84),n.bezierCurveTo(e*.43,t*.9,e*.7,t*.88,e*.84,t*.8),n.strokeStyle="rgba(55,45,31,0.35)",n.lineWidth=Math.min(e,t)*.008,n.stroke();const o=e*.41,l=t*.54,c=e*.3,h=t*.31;n.beginPath(),n.ellipse(o,l,c,h,-.08,0,Math.PI*2),n.fillStyle=i??s,n.fill();const u=n.createRadialGradient(o-c*.4,l-h*.5,c*.06,o,l,Math.max(c,h)*1.05);u.addColorStop(0,"rgba(255,255,235,0.5)"),u.addColorStop(.5,"rgba(255,255,235,0)"),u.addColorStop(1,"rgba(48,32,44,0.2)"),n.fillStyle=u,n.fill(),n.strokeStyle=ie,n.lineWidth=Math.min(e,t)*.017,n.stroke(),n.beginPath();for(let d=0;d<=96;d++){const m=d/96,g=.35+m*Math.PI*4.6,_=.89*(1-m)+.035,p=o+Math.cos(g)*c*_,f=l+Math.sin(g)*h*_;d===0?n.moveTo(p,f):n.lineTo(p,f)}if(n.lineWidth=Math.min(e,t)*.012,n.stroke(),i){n.fillStyle="rgba(255,249,216,0.68)";for(const[d,m,g]of[[.26,.37,.02],[.33,.31,.015],[.42,.3,.011]])n.beginPath(),n.ellipse(e*d,t*m,e*g,t*g,0,0,Math.PI*2),n.fill()}for(const d of[-1,1]){const m=e*(.82+d*.065+Math.sin(r*2.1+d)*.012),g=t*(.32+Math.sin(r*1.7+d)*.018);n.beginPath(),n.moveTo(e*(.82+d*.035),t*.57),n.quadraticCurveTo(m,t*.48,m,g),n.stroke(),Qr(n,m,g,e*.044,t*.063,r,2.5,!!i)}n.beginPath(),n.moveTo(e*.79,t*.65),n.quadraticCurveTo(e*.85,t*(i?.75:.715),e*.9,t*.65),i&&(n.closePath(),n.fillStyle="#795441",n.fill()),n.strokeStyle=ie,n.stroke(),i&&(n.beginPath(),n.ellipse(e*.9,t*.625,e*.024,t*.021,0,0,Math.PI*2),n.fillStyle="rgba(228,137,146,0.5)",n.fill()),n.restore()}function ag(n,e,t,i,r=0){n.save(),n.lineCap="round",n.lineJoin="round",n.lineWidth=Math.min(e,t)*.013,n.strokeStyle=ie;const s=dt(n)??"#f3eede",a=Math.sin(r*8)*.035,o=t*.7;if(i){const c=Math.min(e*.43,t*.29),h=n.createRadialGradient(e*.5,o,0,e*.5,o,c),u=.61+Math.sin(r*2)*.07;h.addColorStop(0,`rgba(255,244,130,${u})`),h.addColorStop(.45,"rgba(255,230,97,0.25)"),h.addColorStop(1,"rgba(255,230,97,0)"),n.fillStyle=h,n.beginPath(),n.arc(e*.5,o,c,0,Math.PI*2),n.fill()}for(const c of[-1,1]){for(let d=0;d<3;d++){const m=t*(.47+d*.09);n.beginPath(),n.moveTo(e*(.5+c*.1),m),n.lineTo(e*(.5+c*.22),m+t*.025),n.lineTo(e*(.5+c*.25),m+t*.085),n.stroke()}const h=e*(.5+c*.21),u=t*.45;n.beginPath(),n.ellipse(h,u,e*(.17+a),t*.22,c*.55,0,Math.PI*2),n.fillStyle=i?"#eff2da":s,n.fill(),n.stroke(),n.beginPath(),n.moveTo(e*.5,t*.6),n.quadraticCurveTo(h,t*.46,h+c*e*.075,t*.31),n.lineWidth=Math.min(e,t)*.007,n.strokeStyle="rgba(50,48,36,0.35)",n.stroke(),n.lineWidth=Math.min(e,t)*.013,n.strokeStyle=ie}if(n.beginPath(),n.ellipse(e*.5,t*.59,e*.145,t*.28,0,0,Math.PI*2),n.fillStyle=i?"#72a65b":s,n.fill(),n.stroke(),n.beginPath(),n.ellipse(e*.5,o,e*.15,t*.18,0,0,Math.PI*2),n.fillStyle=i?"#f7d85a":s,n.fill(),i){const c=n.createLinearGradient(e*.5,t*.55,e*.5,t*.87);c.addColorStop(0,"rgba(255,250,174,0.75)"),c.addColorStop(1,"rgba(255,230,97,0.15)"),n.fillStyle=c,n.fill()}n.stroke(),n.beginPath(),n.moveTo(e*.395,t*.76),n.quadraticCurveTo(e*.5,t*.79,e*.605,t*.76),n.strokeStyle="rgba(50,48,36,0.35)",n.lineWidth=Math.min(e,t)*.007,n.stroke(),n.strokeStyle=ie,n.lineWidth=Math.min(e,t)*.013,i&&(n.beginPath(),n.ellipse(e*.462,t*.642,e*.033,t*.047,-.3,0,Math.PI*2),n.fillStyle="rgba(255,255,235,0.75)",n.fill());for(const c of[-1,1]){const h=e*(.5+c*.15),u=t*(.14+Math.sin(r*2+c)*.012);n.beginPath(),n.moveTo(e*(.5+c*.06),t*.29),n.quadraticCurveTo(h,t*.19,h,u),n.stroke(),n.beginPath(),n.ellipse(h,u,e*.018,t*.018,0,0,Math.PI*2),n.fillStyle=i?"#72a65b":s,n.fill(),n.stroke()}n.beginPath(),n.ellipse(e*.5,t*.32,e*.19,t*.145,0,0,Math.PI*2),n.fillStyle=i?"#83b66b":s,n.fill();const l=n.createLinearGradient(0,t*.175,0,t*.465);l.addColorStop(0,"rgba(255,255,234,0.48)"),l.addColorStop(.6,"rgba(255,255,234,0)"),l.addColorStop(1,"rgba(30,65,33,0.15)"),n.fillStyle=l,n.fill(),n.stroke();for(const c of[-1,1])Qr(n,e*(.5+c*.075),t*.303,e*.04,t*.049,r,.3,!!i);if(n.beginPath(),n.moveTo(e*.443,t*.37),n.quadraticCurveTo(e*.5,t*(i?.44:.414),e*.557,t*.37),i&&(n.closePath(),n.fillStyle="#4d6340",n.fill()),n.strokeStyle=ie,n.stroke(),i)for(const c of[-1,1])n.beginPath(),n.ellipse(e*(.5+c*.13),t*.36,e*.026,t*.016,0,0,Math.PI*2),n.fillStyle="rgba(237,163,133,0.55)",n.fill();n.restore()}const og={parts:[{draw:ig,width:1.2,height:1,duration:.8,animated:!0}],footprintRadius:.6,shadow:!1,naturalColor:"#f3c94b",motion:{bob:.17,drift:.14,tilt:.1,breathe:.025,speed:1.8,reactionHeight:.22}},lg={parts:[{draw:rg,width:1.3,height:1.4,duration:.8,animated:!0}],footprintRadius:.65,naturalColor:"#f7cc45",motion:{bob:.045,drift:.07,tilt:.065,breathe:.025,speed:1.7,reactionHeight:.2}},cg={parts:[{draw:sg,width:1.7,height:1.2,duration:.8,animated:!0}],footprintRadius:.85,naturalColor:"#a879c4",motion:{bob:.012,drift:.03,tilt:.025,breathe:.02,speed:.7,reactionHeight:.08}},hg={parts:[{draw:ag,width:1,height:1.2,duration:.8,animated:!0}],footprintRadius:.5,shadow:!1,naturalColor:"#f8d655",motion:{bob:.2,drift:.17,tilt:.09,breathe:.035,speed:1.2,reactionHeight:.22}},ug={id:"busy-bees",title:"The Busy Meadow",setting:"meadow",opening:"A tiny buzz led Mabli to a meadow. The bees had lost their golden stripes!",prompt:"Tap the little bees to bring back their sunshine colours.",progress:"Buzzy and bright! Help the other bees too.",ending:"The golden bees danced from flower to flower. The meadow was humming again!",targets:[-2.4,-.8,.8,2.4].map((n,e)=>({element:og,x:n,z:-11.8,scale:1.15,lift:e%2===0?.65:1,color:"#f3c94b"}))},dg={id:"stream-ducklings",title:"The Duckling Parade",setting:"stream",opening:"At a quiet stream, four grey ducklings waited for their yellow feathers.",prompt:"Tap every duckling to make the little parade golden again.",progress:"Quack, quack! There are more ducklings to help.",ending:"Four fluffy ducklings waddled away together. What a cheerful yellow parade!",targets:[-2.4,-.8,.8,2.4].map(n=>({element:lg,x:n,z:-11.8,scale:1.1,color:"#f7cc45"}))},fg={id:"snail-garden",title:"The Spiral Garden",setting:"garden",opening:"After a soft shower, Mabli found three snails with empty, colourless shells.",prompt:"Tap the snails to give each spiral shell its own colour.",progress:"Such a lovely spiral! Colour the other shells too.",ending:"Pink, purple and turquoise shells shone among the leaves. Even slow journeys can be wonderful!",targets:[{x:-2.3,color:"#e989ac"},{x:0,color:"#a879c4"},{x:2.3,color:"#51b5ad"}].map(n=>({...n,element:cg,z:-11.8,scale:1.1}))},pg={id:"lantern-glade",title:"The Lantern Glade",setting:"glade",opening:"As evening settled, Mabli heard a whisper: our little lanterns have gone out!",prompt:"Tap the fireflies to help their tiny lanterns glow.",progress:"A little light! Find the other fireflies.",ending:"Five golden lanterns twinkled in the glade and showed Mabli the path to the hilltop.",targets:[-2.5,-1.25,0,1.25,2.5].map((n,e)=>({element:hg,x:n,z:-11.8,scale:1.05,lift:.45+(2-Math.abs(e-2))*.35,color:"#f8d655"}))},mg=[ug,dg,fg,pg];function gg(){return[{id:"awakening",title:"The Grey Morning",createScene:()=>new x0},{id:"grey-pond",title:"The Grey Pond",createScene:()=>new R0},{id:"butterflies",title:"Butterfly Wings",createScene:()=>new I0},{id:"orchard",title:"The Orchard",createScene:()=>new N0},{id:"fox",title:"The Little Fox",createScene:()=>new z0},{id:"bird",title:"The Little Bird",createScene:()=>new G0},{id:"rabbit",title:"The Little Rabbit",createScene:()=>new q0},{id:"toadstools",title:"The Toadstool Ring",createScene:()=>new Z0},...mg.map(n=>({id:n.id,title:n.title,createScene:()=>new ng(n)})),{id:"painted-sky",title:"The Painted Sky",createScene:()=>new Q0}]}const _g=document.getElementById("game"),$i=new Pm(_g),va=gg();function Dl(n,e=!1){const t=va[n].createScene();n+1<va.length&&(t.onComplete=()=>Dl(n+1,!0)),e?$i.scenes.go(t,{wipe:!0}):$i.start(t)}const $r=new URLSearchParams(location.search);$r.has("debug")&&$r.has("silent")&&($i.narrator.setEnabled(!1),$i.sound.setEnabled(!1));const vg=$r.has("debug")?$r.get("episode"):null,Mg=Math.max(0,va.findIndex(n=>n.id===vg));$i.hud.onStart(()=>{Dl(Mg)});
