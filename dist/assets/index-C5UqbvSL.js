(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ea="184",Nl=0,La=1,Fl=2,Ys=1,Bc=2,Qi=3,qn=0,We=1,Ze=2,Cn=0,Di=1,er=2,Da=3,Ua=4,Ol=5,ni=100,Bl=101,zl=102,kl=103,Hl=104,Gl=200,Vl=201,Wl=202,Xl=203,so=204,ro=205,Yl=206,ql=207,jl=208,$l=209,Kl=210,Zl=211,Jl=212,Ql=213,th=214,oo=0,ao=1,co=2,Ni=3,lo=4,ho=5,uo=6,fo=7,zc=0,eh=1,nh=2,xn=0,kc=1,Hc=2,Gc=3,na=4,Vc=5,Wc=6,Xc=7,Yc=300,ai=301,Fi=302,Sr=303,br=304,pr=306,is=1e3,An=1001,po=1002,Ue=1003,ih=1004,ps=1005,ze=1006,wr=1007,si=1008,Je=1009,qc=1010,jc=1011,ss=1012,ia=1013,Mn=1014,gn=1015,Pn=1016,sa=1017,ra=1018,rs=1020,$c=35902,Kc=35899,Zc=1021,Jc=1022,cn=1023,In=1026,ri=1027,Qc=1028,oa=1029,ci=1030,aa=1031,ca=1033,qs=33776,js=33777,$s=33778,Ks=33779,mo=35840,go=35841,_o=35842,xo=35843,vo=36196,Mo=37492,yo=37496,So=37488,bo=37489,nr=37490,wo=37491,Eo=37808,To=37809,Ao=37810,Co=37811,Ro=37812,Po=37813,Io=37814,Lo=37815,Do=37816,Uo=37817,No=37818,Fo=37819,Oo=37820,Bo=37821,zo=36492,ko=36494,Ho=36495,Go=36283,Vo=36284,ir=36285,Wo=36286,sh=3200,Xo=0,rh=1,Vn="",Xe="srgb",sr="srgb-linear",rr="linear",se="srgb",mi=7680,Na=519,oh=512,ah=513,ch=514,la=515,lh=516,hh=517,ha=518,dh=519,Yo=35044,Fa="300 es",_n=2e3,os=2001;function uh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fh(){const i=or("canvas");return i.style.display="block",i}const Oa={};function ar(...i){const t="THREE."+i.shift();console.log(t,...i)}function tl(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Nt(...i){i=tl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=tl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function qo(...i){const t=i.join(" ");t in Oa||(Oa[t]=!0,Nt(...i))}function ph(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const mh={[oo]:ao,[co]:uo,[lo]:fo,[Ni]:ho,[ao]:oo,[uo]:co,[fo]:lo,[ho]:Ni};class di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Er=Math.PI/180,jo=180/Math.PI;function Yn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function gh(i,t){return(i%t+t)%t}function Tr(i,t,e){return(1-e)*i+e*t}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const va=class va{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};va.prototype.isVector2=!0;let Ft=va;class zi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],h=r[o+0],f=r[o+1],_=r[o+2],S=r[o+3];if(d!==S||c!==h||l!==f||u!==_){let m=c*h+l*f+u*_+d*S;m<0&&(h=-h,f=-f,_=-_,S=-S,m=-m);let p=1-a;if(m<.9995){const x=Math.acos(m),E=Math.sin(x);p=Math.sin(p*x)/E,a=Math.sin(a*x)/E,c=c*p+h*a,l=l*p+f*a,u=u*p+_*a,d=d*p+S*a}else{c=c*p+h*a,l=l*p+f*a,u=u*p+_*a,d=d*p+S*a;const x=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=x,l*=x,u*=x,d*=x}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+u*d+c*f-l*h,t[e+1]=c*_+u*h+l*d-a*f,t[e+2]=l*_+u*f+a*h-c*d,t[e+3]=u*_-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),h=c(n/2),f=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*_,this._y=l*f*d-h*u*_,this._z=l*u*_+h*f*d,this._w=l*u*d-h*f*_;break;case"YXZ":this._x=h*u*d+l*f*_,this._y=l*f*d-h*u*_,this._z=l*u*_-h*f*d,this._w=l*u*d+h*f*_;break;case"ZXY":this._x=h*u*d-l*f*_,this._y=l*f*d+h*u*_,this._z=l*u*_+h*f*d,this._w=l*u*d-h*f*_;break;case"ZYX":this._x=h*u*d-l*f*_,this._y=l*f*d+h*u*_,this._z=l*u*_-h*f*d,this._w=l*u*d+h*f*_;break;case"YZX":this._x=h*u*d+l*f*_,this._y=l*f*d+h*u*_,this._z=l*u*_-h*f*d,this._w=l*u*d-h*f*_;break;case"XZY":this._x=h*u*d-l*f*_,this._y=l*f*d-h*u*_,this._z=l*u*_+h*f*d,this._w=l*u*d+h*f*_;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ma=class Ma{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ba.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ba.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ar.copy(this).projectOnVector(t),this.sub(Ar)}reflect(t){return this.sub(Ar.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ma.prototype.isVector3=!0;let D=Ma;const Ar=new D,Ba=new zi,ya=class ya{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],_=n[8],S=s[0],m=s[3],p=s[6],x=s[1],E=s[4],M=s[7],T=s[2],v=s[5],A=s[8];return r[0]=o*S+a*x+c*T,r[3]=o*m+a*E+c*v,r[6]=o*p+a*M+c*A,r[1]=l*S+u*x+d*T,r[4]=l*m+u*E+d*v,r[7]=l*p+u*M+d*A,r[2]=h*S+f*x+_*T,r[5]=h*m+f*E+_*v,r[8]=h*p+f*M+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,_=e*d+n*h+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=d*S,t[1]=(s*l-u*n)*S,t[2]=(a*n-s*o)*S,t[3]=h*S,t[4]=(u*e-s*c)*S,t[5]=(s*r-a*e)*S,t[6]=f*S,t[7]=(n*c-l*e)*S,t[8]=(o*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Cr.makeScale(t,e)),this}rotate(t){return this.premultiply(Cr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Cr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ya.prototype.isMatrix3=!0;let zt=ya;const Cr=new zt,za=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ka=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _h(){const i={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===se&&(s.r=Rn(s.r),s.g=Rn(s.g),s.b=Rn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===se&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[sr]:{primaries:t,whitePoint:n,transfer:rr,toXYZ:za,fromXYZ:ka,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:se,toXYZ:za,fromXYZ:ka,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),i}const jt=_h();function Rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let gi;class xh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{gi===void 0&&(gi=or("canvas")),gi.width=t.width,gi.height=t.height;const s=gi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=gi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=or("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Rn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rn(e[n]/255)*255):e[n]=Rn(e[n]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vh=0;class da{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Rr(s[o].image)):r.push(Rr(s[o]))}else r=Rr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Rr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let Mh=0;const Pr=new D;class ke extends di{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=An,s=An,r=ze,o=si,a=cn,c=Je,l=ke.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Yn(),this.name="",this.source=new da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pr).x}get height(){return this.source.getSize(Pr).y}get depth(){return this.source.getSize(Pr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case is:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case is:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Yc;ke.DEFAULT_ANISOTROPY=1;const Sa=class Sa{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],_=c[9],S=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,M=(f+1)/2,T=(p+1)/2,v=(u+h)/4,A=(d+S)/4,g=(_+m)/4;return E>M&&E>T?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=v/n,r=A/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=v/s,r=g/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=A/r,s=g/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-_)*(m-_)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(d-S)/x,this.z=(h-u)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sa.prototype.isVector4=!0;let Me=Sa;class yh extends di{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new ke(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new da(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends yh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class el extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sh extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fr=class fr{constructor(t,e,n,s,r,o,a,c,l,u,d,h,f,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,d,h,f,_,S,m)}set(t,e,n,s,r,o,a,c,l,u,d,h,f,_,S,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=_,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/_i.setFromMatrixColumn(t,0).length(),r=1/_i.setFromMatrixColumn(t,1).length(),o=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,f=o*d,_=a*u,S=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+_*l,e[5]=h-S*l,e[9]=-a*c,e[2]=S-h*l,e[6]=_+f*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,_=l*u,S=l*d;e[0]=h+S*a,e[4]=_*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-_,e[6]=S+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,_=l*u,S=l*d;e[0]=h-S*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*u,e[9]=S-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,f=o*d,_=a*u,S=a*d;e[0]=c*u,e[4]=_*l-f,e[8]=h*l+S,e[1]=c*d,e[5]=S*l+h,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,f=o*l,_=a*c,S=a*l;e[0]=c*u,e[4]=S-h*d,e[8]=_*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+_,e[10]=h-S*d}else if(t.order==="XZY"){const h=o*c,f=o*l,_=a*c,S=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+S,e[5]=o*u,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*u,e[10]=S*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bh,t,wh)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Nn.crossVectors(n,je),Nn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Nn.crossVectors(n,je)),Nn.normalize(),ms.crossVectors(je,Nn),s[0]=Nn.x,s[4]=ms.x,s[8]=je.x,s[1]=Nn.y,s[5]=ms.y,s[9]=je.y,s[2]=Nn.z,s[6]=ms.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],_=n[2],S=n[6],m=n[10],p=n[14],x=n[3],E=n[7],M=n[11],T=n[15],v=s[0],A=s[4],g=s[8],w=s[12],R=s[1],P=s[5],N=s[9],z=s[13],V=s[2],F=s[6],H=s[10],I=s[14],U=s[3],q=s[7],Z=s[11],it=s[15];return r[0]=o*v+a*R+c*V+l*U,r[4]=o*A+a*P+c*F+l*q,r[8]=o*g+a*N+c*H+l*Z,r[12]=o*w+a*z+c*I+l*it,r[1]=u*v+d*R+h*V+f*U,r[5]=u*A+d*P+h*F+f*q,r[9]=u*g+d*N+h*H+f*Z,r[13]=u*w+d*z+h*I+f*it,r[2]=_*v+S*R+m*V+p*U,r[6]=_*A+S*P+m*F+p*q,r[10]=_*g+S*N+m*H+p*Z,r[14]=_*w+S*z+m*I+p*it,r[3]=x*v+E*R+M*V+T*U,r[7]=x*A+E*P+M*F+T*q,r[11]=x*g+E*N+M*H+T*Z,r[15]=x*w+E*z+M*I+T*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],_=t[3],S=t[7],m=t[11],p=t[15],x=c*f-l*h,E=a*f-l*d,M=a*h-c*d,T=o*f-l*u,v=o*h-c*u,A=o*d-a*u;return e*(S*x-m*E+p*M)-n*(_*x-m*T+p*v)+s*(_*E-S*T+p*A)-r*(_*M-S*v+m*A)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],_=t[12],S=t[13],m=t[14],p=t[15],x=e*a-n*o,E=e*c-s*o,M=e*l-r*o,T=n*c-s*a,v=n*l-r*a,A=s*l-r*c,g=u*S-d*_,w=u*m-h*_,R=u*p-f*_,P=d*m-h*S,N=d*p-f*S,z=h*p-f*m,V=x*z-E*N+M*P+T*R-v*w+A*g;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/V;return t[0]=(a*z-c*N+l*P)*F,t[1]=(s*N-n*z-r*P)*F,t[2]=(S*A-m*v+p*T)*F,t[3]=(h*v-d*A-f*T)*F,t[4]=(c*R-o*z-l*w)*F,t[5]=(e*z-s*R+r*w)*F,t[6]=(m*M-_*A-p*E)*F,t[7]=(u*A-h*M+f*E)*F,t[8]=(o*N-a*R+l*g)*F,t[9]=(n*R-e*N-r*g)*F,t[10]=(_*v-S*M+p*x)*F,t[11]=(d*M-u*v-f*x)*F,t[12]=(a*w-o*P-c*g)*F,t[13]=(e*P-n*w+s*g)*F,t[14]=(S*E-_*T-m*x)*F,t[15]=(u*T-d*E+h*x)*F,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,_=r*d,S=o*u,m=o*d,p=a*d,x=c*l,E=c*u,M=c*d,T=n.x,v=n.y,A=n.z;return s[0]=(1-(S+p))*T,s[1]=(f+M)*T,s[2]=(_-E)*T,s[3]=0,s[4]=(f-M)*v,s[5]=(1-(h+p))*v,s[6]=(m+x)*v,s[7]=0,s[8]=(_+E)*A,s[9]=(m-x)*A,s[10]=(1-(h+S))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let o=_i.set(s[0],s[1],s[2]).length();const a=_i.set(s[4],s[5],s[6]).length(),c=_i.set(s[8],s[9],s[10]).length();r<0&&(o=-o),rn.copy(this);const l=1/o,u=1/a,d=1/c;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,e.setFromRotationMatrix(rn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=_n,c=!1){const l=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let _,S;if(c)_=r/(o-r),S=o*r/(o-r);else if(a===_n)_=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===os)_=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=_n,c=!1){const l=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s);let _,S;if(c)_=1/(o-r),S=o/(o-r);else if(a===_n)_=-2/(o-r),S=-(o+r)/(o-r);else if(a===os)_=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};fr.prototype.isMatrix4=!0;let ge=fr;const _i=new D,rn=new ge,bh=new D(0,0,0),wh=new D(1,1,1),Nn=new D,ms=new D,je=new D,Ha=new ge,Ga=new zi;class jn{constructor(t=0,e=0,n=0,s=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ha.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ha,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ga.setFromEuler(this),this.setFromQuaternion(Ga,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class nl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Eh=0;const Va=new D,xi=new zi,Sn=new ge,gs=new D,Gi=new D,Th=new D,Ah=new zi,Wa=new D(1,0,0),Xa=new D(0,1,0),Ya=new D(0,0,1),qa={type:"added"},Ch={type:"removed"},vi={type:"childadded",child:null},Ir={type:"childremoved",child:null};class Re extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new D,e=new jn,n=new zi,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new zt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(Wa,t)}rotateY(t){return this.rotateOnAxis(Xa,t)}rotateZ(t){return this.rotateOnAxis(Ya,t)}translateOnAxis(t,e){return Va.copy(t).applyQuaternion(this.quaternion),this.position.add(Va.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wa,t)}translateY(t){return this.translateOnAxis(Xa,t)}translateZ(t){return this.translateOnAxis(Ya,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gs.copy(t):gs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Gi,gs,this.up):Sn.lookAt(gs,Gi,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(Sn),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qa),vi.child=t,this.dispatchEvent(vi),vi.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ch),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qa),vi.child=t,this.dispatchEvent(vi),vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,t,Th),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Ah,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Re.DEFAULT_UP=new D(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qt extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rh={type:"move"};class Lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,n),p=this._getHandJoint(l,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&h>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rh)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Dr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=gh(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Dr(o,r,t+1/3),this.g=Dr(o,r,t),this.b=Dr(o,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=il[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rn(t.r),this.g=Rn(t.g),this.b=Rn(t.b),this}copyLinearToSRGB(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return jt.workingToColorSpace(Oe.copy(this),t),Math.round($t(Oe.r*255,0,255))*65536+Math.round($t(Oe.g*255,0,255))*256+Math.round($t(Oe.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Oe.copy(this),e);const n=Oe.r,s=Oe.g,r=Oe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Xe){jt.workingToColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,s=Oe.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(_s);const n=Tr(Fn.h,_s.h,e),s=Tr(Fn.s,_s.s,e),r=Tr(Fn.l,_s.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new Rt;Rt.NAMES=il;class ua{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rt(t),this.density=e}clone(){return new ua(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ph extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const on=new D,bn=new D,Ur=new D,wn=new D,Mi=new D,yi=new D,ja=new D,Nr=new D,Fr=new D,Or=new D,Br=new Me,zr=new Me,kr=new Me;class nn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),bn.subVectors(n,e),Ur.subVectors(t,e);const o=on.dot(on),a=on.dot(bn),c=on.dot(Ur),l=bn.dot(bn),u=bn.dot(Ur),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,_=(o*u-a*c)*h;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wn.x),c.addScaledVector(o,wn.y),c.addScaledVector(a,wn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Br.setScalar(0),zr.setScalar(0),kr.setScalar(0),Br.fromBufferAttribute(t,e),zr.fromBufferAttribute(t,n),kr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Br,r.x),o.addScaledVector(zr,r.y),o.addScaledVector(kr,r.z),o}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),bn.subVectors(t,e),on.cross(bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),on.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Mi.subVectors(s,n),yi.subVectors(r,n),Nr.subVectors(t,n);const c=Mi.dot(Nr),l=yi.dot(Nr);if(c<=0&&l<=0)return e.copy(n);Fr.subVectors(t,s);const u=Mi.dot(Fr),d=yi.dot(Fr);if(u>=0&&d<=u)return e.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Mi,o);Or.subVectors(t,r);const f=Mi.dot(Or),_=yi.dot(Or);if(_>=0&&f<=_)return e.copy(r);const S=f*l-c*_;if(S<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(yi,a);const m=u*_-f*d;if(m<=0&&d-u>=0&&f-_>=0)return ja.subVectors(r,s),a=(d-u)/(d-u+(f-_)),e.copy(s).addScaledVector(ja,a);const p=1/(m+S+h);return o=S*p,a=h*p,e.copy(n).addScaledVector(Mi,o).addScaledVector(yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class hs{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox)),xs.applyMatrix4(t.matrixWorld),this.union(xs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vi),vs.subVectors(this.max,Vi),Si.subVectors(t.a,Vi),bi.subVectors(t.b,Vi),wi.subVectors(t.c,Vi),On.subVectors(bi,Si),Bn.subVectors(wi,bi),Zn.subVectors(Si,wi);let e=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-Zn.z,Zn.y,On.z,0,-On.x,Bn.z,0,-Bn.x,Zn.z,0,-Zn.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-Zn.y,Zn.x,0];return!Hr(e,Si,bi,wi,vs)||(e=[1,0,0,0,1,0,0,0,1],!Hr(e,Si,bi,wi,vs))?!1:(Ms.crossVectors(On,Bn),e=[Ms.x,Ms.y,Ms.z],Hr(e,Si,bi,wi,vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const En=[new D,new D,new D,new D,new D,new D,new D,new D],an=new D,xs=new hs,Si=new D,bi=new D,wi=new D,On=new D,Bn=new D,Zn=new D,Vi=new D,vs=new D,Ms=new D,Jn=new D;function Hr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Jn.fromArray(i,r);const a=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),c=t.dot(Jn),l=e.dot(Jn),u=n.dot(Jn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ee=new D,ys=new Ft;let Ih=0;class sn extends di{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ih++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yo,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yo&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class sl extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rl extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Lh=new hs,Wi=new D,Gr=new D;class mr{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wi.subVectors(t,this.center);const e=Wi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Wi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wi.copy(t.center).add(Gr)),this.expandByPoint(Wi.copy(t.center).sub(Gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Dh=0;const tn=new ge,Vr=new Re,Ei=new D,$e=new hs,Xi=new hs,De=new D;class Le extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uh(t)?rl:sl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return Vr.lookAt(t),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Xi.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors($e.min,Xi.min),$e.expandByPoint(De),De.addVectors($e.max,Xi.max),$e.expandByPoint(De)):($e.expandByPoint(Xi.min),$e.expandByPoint(Xi.max))}$e.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)De.fromBufferAttribute(a,l),c&&(Ei.fromBufferAttribute(t,l),De.add(Ei)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let g=0;g<n.count;g++)a[g]=new D,c[g]=new D;const l=new D,u=new D,d=new D,h=new Ft,f=new Ft,_=new Ft,S=new D,m=new D;function p(g,w,R){l.fromBufferAttribute(n,g),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,R),h.fromBufferAttribute(r,g),f.fromBufferAttribute(r,w),_.fromBufferAttribute(r,R),u.sub(l),d.sub(l),f.sub(h),_.sub(h);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(P),a[g].add(S),a[w].add(S),a[R].add(S),c[g].add(m),c[w].add(m),c[R].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let g=0,w=x.length;g<w;++g){const R=x[g],P=R.start,N=R.count;for(let z=P,V=P+N;z<V;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const E=new D,M=new D,T=new D,v=new D;function A(g){T.fromBufferAttribute(s,g),v.copy(T);const w=a[g];E.copy(w),E.sub(T.multiplyScalar(T.dot(w))).normalize(),M.crossVectors(v,w);const P=M.dot(c[g])<0?-1:1;o.setXYZW(g,E.x,E.y,E.z,P)}for(let g=0,w=x.length;g<w;++g){const R=x[g],P=R.start,N=R.count;for(let z=P,V=P+N;z<V;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,u=new D,d=new D;if(t)for(let h=0,f=t.count;h<f;h+=3){const _=t.getX(h+0),S=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,_=0;for(let S=0,m=c.length;S<m;S++){a.isInterleavedBufferAttribute?f=c[S]*a.data.stride+a.offset:f=c[S]*u;for(let p=0;p<u;p++)h[_++]=l[f++]}return new sn(h,u,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Uh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yo,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new D;class cr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ar("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new sn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new cr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ar("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Nh=0;class ui extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=Di,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=so,this.blendDst=ro,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==so&&(n.blendSrc=this.blendSrc),this.blendDst!==ro&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ni&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Na&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fa extends ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ti;const Yi=new D,Ai=new D,Ci=new D,Ri=new Ft,qi=new Ft,ol=new ge,Ss=new D,ji=new D,bs=new D,$a=new Ft,Wr=new Ft,Ka=new Ft;class al extends Re{constructor(t=new fa){if(super(),this.isSprite=!0,this.type="Sprite",Ti===void 0){Ti=new Le;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Uh(e,5);Ti.setIndex([0,1,2,0,2,3]),Ti.setAttribute("position",new cr(n,3,0,!1)),Ti.setAttribute("uv",new cr(n,2,3,!1))}this.geometry=Ti,this.material=t,this.center=new Ft(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ai.setFromMatrixScale(this.matrixWorld),ol.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ci.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ai.multiplyScalar(-Ci.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;ws(Ss.set(-.5,-.5,0),Ci,o,Ai,s,r),ws(ji.set(.5,-.5,0),Ci,o,Ai,s,r),ws(bs.set(.5,.5,0),Ci,o,Ai,s,r),$a.set(0,0),Wr.set(1,0),Ka.set(1,1);let a=t.ray.intersectTriangle(Ss,ji,bs,!1,Yi);if(a===null&&(ws(ji.set(-.5,.5,0),Ci,o,Ai,s,r),Wr.set(0,1),a=t.ray.intersectTriangle(Ss,bs,ji,!1,Yi),a===null))return;const c=t.ray.origin.distanceTo(Yi);c<t.near||c>t.far||e.push({distance:c,point:Yi.clone(),uv:nn.getInterpolation(Yi,Ss,ji,bs,$a,Wr,Ka,new Ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ws(i,t,e,n,s,r){Ri.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(qi.x=r*Ri.x-s*Ri.y,qi.y=s*Ri.x+r*Ri.y):qi.copy(Ri),i.copy(t),i.x+=qi.x,i.y+=qi.y,i.applyMatrix4(ol)}const Tn=new D,Xr=new D,Es=new D,zn=new D,Yr=new D,Ts=new D,qr=new D;class cl{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xr.copy(t).add(e).multiplyScalar(.5),Es.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(Xr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Es),a=zn.dot(this.direction),c=-zn.dot(Es),l=zn.lengthSq(),u=Math.abs(1-o*o);let d,h,f,_;if(u>0)if(d=o*c-a,h=o*a-c,_=r*u,d>=0)if(h>=-_)if(h<=_){const S=1/u;d*=S,h*=S,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-_?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=_?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Xr).addScaledVector(Es,h),f}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,s,r){Yr.subVectors(e,t),Ts.subVectors(n,t),qr.crossVectors(Yr,Ts);let o=this.direction.dot(qr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,t);const c=a*this.direction.dot(Ts.crossVectors(zn,Ts));if(c<0)return null;const l=a*this.direction.dot(Yr.cross(zn));if(l<0||c+l>o)return null;const u=-a*zn.dot(qr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Za=new ge,Qn=new cl,As=new mr,Ja=new D,Cs=new D,Rs=new D,Ps=new D,jr=new D,Is=new D,Qa=new D,Ls=new D;class L extends Re{constructor(t=new Le,e=new ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Is.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(jr.fromBufferAttribute(d,t),o?Is.addScaledVector(jr,u):Is.addScaledVector(jr.sub(e),u))}e.add(Is)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(As.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(As,Ja)===null||Qn.origin.distanceToSquared(Ja)>(t.far-t.near)**2))&&(Za.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(Za),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,S=h.length;_<S;_++){const m=h[_],p=o[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,T=E;M<T;M+=3){const v=a.getX(M),A=a.getX(M+1),g=a.getX(M+2);s=Ds(this,p,t,n,l,u,d,v,A,g),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),S=Math.min(a.count,f.start+f.count);for(let m=_,p=S;m<p;m+=3){const x=a.getX(m),E=a.getX(m+1),M=a.getX(m+2);s=Ds(this,o,t,n,l,u,d,x,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,S=h.length;_<S;_++){const m=h[_],p=o[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,T=E;M<T;M+=3){const v=M,A=M+1,g=M+2;s=Ds(this,p,t,n,l,u,d,v,A,g),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let m=_,p=S;m<p;m+=3){const x=m,E=m+1,M=m+2;s=Ds(this,o,t,n,l,u,d,x,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Fh(i,t,e,n,s,r,o,a){let c;if(t.side===We?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===qn,a),c===null)return null;Ls.copy(a),Ls.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ls);return l<e.near||l>e.far?null:{distance:l,point:Ls.clone(),object:i}}function Ds(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Cs),i.getVertexPosition(c,Rs),i.getVertexPosition(l,Ps);const u=Fh(i,t,e,n,Cs,Rs,Ps,Qa);if(u){const d=new D;nn.getBarycoord(Qa,Cs,Rs,Ps,d),s&&(u.uv=nn.getInterpolatedAttribute(s,a,c,l,d,new Ft)),r&&(u.uv1=nn.getInterpolatedAttribute(r,a,c,l,d,new Ft)),o&&(u.normal=nn.getInterpolatedAttribute(o,a,c,l,d,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new D,materialIndex:0};nn.getNormal(Cs,Rs,Ps,h.normal),u.face=h,u.barycoord=d}return u}class Oh extends ke{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ue,u=Ue,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $r=new D,Bh=new D,zh=new zt;class ei{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=$r.subVectors(n,e).cross(Bh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta($r),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zh.getNormalMatrix(t),s=this.coplanarPoint($r).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new mr,kh=new Ft(.5,.5),Us=new D;class pa{constructor(t=new ei,e=new ei,n=new ei,s=new ei,r=new ei,o=new ei){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],_=r[8],S=r[9],m=r[10],p=r[11],x=r[12],E=r[13],M=r[14],T=r[15];if(s[0].setComponents(l-o,f-u,p-_,T-x).normalize(),s[1].setComponents(l+o,f+u,p+_,T+x).normalize(),s[2].setComponents(l+a,f+d,p+S,T+E).normalize(),s[3].setComponents(l-a,f-d,p-S,T-E).normalize(),n)s[4].setComponents(c,h,m,M).normalize(),s[5].setComponents(l-c,f-h,p-m,T-M).normalize();else if(s[4].setComponents(l-c,f-h,p-m,T-M).normalize(),e===_n)s[5].setComponents(l+c,f+h,p+m,T+M).normalize();else if(e===os)s[5].setComponents(c,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){ti.center.set(0,0,0);const e=kh.distanceTo(t.center);return ti.radius=.7071067811865476+e,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Us.x=s.normal.x>0?t.max.x:t.min.x,Us.y=s.normal.y>0?t.max.y:t.min.y,Us.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ll extends ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const tc=new ge,$o=new cl,Ns=new mr,Fs=new D;class Hh extends Re{constructor(t=new Le,e=new ll){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(s),Ns.radius+=r,t.ray.intersectsSphere(Ns)===!1)return;tc.copy(s).invert(),$o.copy(t.ray).applyMatrix4(tc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let _=h,S=f;_<S;_++){const m=l.getX(_);Fs.fromBufferAttribute(d,m),ec(Fs,m,c,s,t,e,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let _=h,S=f;_<S;_++)Fs.fromBufferAttribute(d,_),ec(Fs,_,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ec(i,t,e,n,s,r,o){const a=$o.distanceSqToPoint(i);if(a<e){const c=new D;$o.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class hl extends ke{constructor(t=[],e=ai,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gh extends ke{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Oi extends ke{constructor(t,e,n=Mn,s,r,o,a=Ue,c=Ue,l,u=In,d=1){if(u!==In&&u!==ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new da(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Vh extends Oi{constructor(t,e=Mn,n=ai,s,r,o=Ue,a=Ue,c,l=In){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class dl extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class K extends Le{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(d,2));function _(S,m,p,x,E,M,T,v,A,g,w){const R=M/A,P=T/g,N=M/2,z=T/2,V=v/2,F=A+1,H=g+1;let I=0,U=0;const q=new D;for(let Z=0;Z<H;Z++){const it=Z*P-z;for(let at=0;at<F;at++){const Et=at*R-N;q[S]=Et*x,q[m]=it*E,q[p]=V,l.push(q.x,q.y,q.z),q[S]=0,q[m]=0,q[p]=v>0?1:-1,u.push(q.x,q.y,q.z),d.push(at/A),d.push(1-Z/g),I+=1}}for(let Z=0;Z<g;Z++)for(let it=0;it<A;it++){const at=h+it+F*Z,Et=h+it+F*(Z+1),Dt=h+(it+1)+F*(Z+1),Pt=h+(it+1)+F*Z;c.push(at,Et,Pt),c.push(Et,Dt,Pt),U+=6}a.addGroup(f,U,w),f+=U,h+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new K(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class oi extends Le{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],u=e/2,d=Math.PI/2*t,h=e,f=2*d+h,_=n*2+r,S=s+1,m=new D,p=new D;for(let x=0;x<=_;x++){let E=0,M=0,T=0,v=0;if(x<=n){const w=x/n,R=w*Math.PI/2;M=-u-t*Math.cos(R),T=t*Math.sin(R),v=-t*Math.cos(R),E=w*d}else if(x<=n+r){const w=(x-n)/r;M=-u+w*e,T=t,v=0,E=d+w*h}else{const w=(x-n-r)/n,R=w*Math.PI/2;M=u+t*Math.sin(R),T=t*Math.cos(R),v=t*Math.sin(R),E=d+h+w*d}const A=Math.max(0,Math.min(1,E/f));let g=0;x===0?g=.5/s:x===_&&(g=-.5/s);for(let w=0;w<=s;w++){const R=w/s,P=R*Math.PI*2,N=Math.sin(P),z=Math.cos(P);p.x=-T*z,p.y=M,p.z=T*N,a.push(p.x,p.y,p.z),m.set(-T*z,v,T*N),m.normalize(),c.push(m.x,m.y,m.z),l.push(R+g,A)}if(x>0){const w=(x-1)*S;for(let R=0;R<s;R++){const P=w+R,N=w+R+1,z=x*S+R,V=x*S+R+1;o.push(P,N,z),o.push(N,V,z)}}}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class gr extends Le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new D,u=new Ft;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Zt extends Le{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let _=0;const S=[],m=n/2;let p=0;x(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(f,2));function x(){const M=new D,T=new D;let v=0;const A=(e-t)/n;for(let g=0;g<=r;g++){const w=[],R=g/r,P=R*(e-t)+t;for(let N=0;N<=s;N++){const z=N/s,V=z*c+a,F=Math.sin(V),H=Math.cos(V);T.x=P*F,T.y=-R*n+m,T.z=P*H,d.push(T.x,T.y,T.z),M.set(F,A,H).normalize(),h.push(M.x,M.y,M.z),f.push(z,1-R),w.push(_++)}S.push(w)}for(let g=0;g<s;g++)for(let w=0;w<r;w++){const R=S[w][g],P=S[w+1][g],N=S[w+1][g+1],z=S[w][g+1];(t>0||w!==0)&&(u.push(R,P,z),v+=3),(e>0||w!==r-1)&&(u.push(P,N,z),v+=3)}l.addGroup(p,v,0),p+=v}function E(M){const T=_,v=new Ft,A=new D;let g=0;const w=M===!0?t:e,R=M===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*R,0),h.push(0,R,0),f.push(.5,.5),_++;const P=_;for(let N=0;N<=s;N++){const V=N/s*c+a,F=Math.cos(V),H=Math.sin(V);A.x=w*H,A.y=m*R,A.z=w*F,d.push(A.x,A.y,A.z),h.push(0,R,0),v.x=F*.5+.5,v.y=H*.5*R+.5,f.push(v.x,v.y),_++}for(let N=0;N<s;N++){const z=T+N,V=P+N;M===!0?u.push(V,V+1,z):u.push(V+1,V,z),g+=3}l.addGroup(p,g,M===!0?1:2),p+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ma extends Zt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ma(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ga extends Le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const E=new D,M=new D,T=new D;for(let v=0;v<e.length;v+=3)f(e[v+0],E),f(e[v+1],M),f(e[v+2],T),c(E,M,T,x)}function c(x,E,M,T){const v=T+1,A=[];for(let g=0;g<=v;g++){A[g]=[];const w=x.clone().lerp(M,g/v),R=E.clone().lerp(M,g/v),P=v-g;for(let N=0;N<=P;N++)N===0&&g===v?A[g][N]=w:A[g][N]=w.clone().lerp(R,N/P)}for(let g=0;g<v;g++)for(let w=0;w<2*(v-g)-1;w++){const R=Math.floor(w/2);w%2===0?(h(A[g][R+1]),h(A[g+1][R]),h(A[g][R])):(h(A[g][R+1]),h(A[g+1][R+1]),h(A[g+1][R]))}}function l(x){const E=new D;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(x),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function u(){const x=new D;for(let E=0;E<r.length;E+=3){x.x=r[E+0],x.y=r[E+1],x.z=r[E+2];const M=m(x)/2/Math.PI+.5,T=p(x)/Math.PI+.5;o.push(M,1-T)}_(),d()}function d(){for(let x=0;x<o.length;x+=6){const E=o[x+0],M=o[x+2],T=o[x+4],v=Math.max(E,M,T),A=Math.min(E,M,T);v>.9&&A<.1&&(E<.2&&(o[x+0]+=1),M<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function h(x){r.push(x.x,x.y,x.z)}function f(x,E){const M=x*3;E.x=t[M+0],E.y=t[M+1],E.z=t[M+2]}function _(){const x=new D,E=new D,M=new D,T=new D,v=new Ft,A=new Ft,g=new Ft;for(let w=0,R=0;w<r.length;w+=9,R+=6){x.set(r[w+0],r[w+1],r[w+2]),E.set(r[w+3],r[w+4],r[w+5]),M.set(r[w+6],r[w+7],r[w+8]),v.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),g.set(o[R+4],o[R+5]),T.copy(x).add(E).add(M).divideScalar(3);const P=m(T);S(v,R+0,x,P),S(A,R+2,E,P),S(g,R+4,M,P)}}function S(x,E,M,T){T<0&&x.x===1&&(o[E]=x.x-1),M.x===0&&M.z===0&&(o[E]=T/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ga(t.vertices,t.indices,t.radius,t.detail)}}class ds extends ga{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ds(t.radius,t.detail)}}class ne extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=t/a,h=e/c,f=[],_=[],S=[],m=[];for(let p=0;p<u;p++){const x=p*h-o;for(let E=0;E<l;E++){const M=E*d-r;_.push(M,-x,0),S.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const E=x+l*p,M=x+l*(p+1),T=x+1+l*(p+1),v=x+1+l*p;f.push(E,M,v),f.push(M,T,v)}this.setIndex(f),this.setAttribute("position",new ie(_,3)),this.setAttribute("normal",new ie(S,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.width,t.height,t.widthSegments,t.heightSegments)}}class as extends Le{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let d=t;const h=(e-t)/s,f=new D,_=new Ft;for(let S=0;S<=s;S++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,u.push(_.x,_.y)}d+=h}for(let S=0;S<s;S++){const m=S*(n+1);for(let p=0;p<n;p++){const x=p+m,E=x,M=x+n+1,T=x+n+2,v=x+1;a.push(E,M,v),a.push(M,T,v)}}this.setIndex(a),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ye extends Le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new D,h=new D,f=[],_=[],S=[],m=[];for(let p=0;p<=n;p++){const x=[],E=p/n;let M=0;p===0&&o===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let T=0;T<=e;T++){const v=T/e;d.x=-t*Math.cos(s+v*r)*Math.sin(o+E*a),d.y=t*Math.cos(o+E*a),d.z=t*Math.sin(s+v*r)*Math.sin(o+E*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),m.push(v+M,1-E),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const E=u[p][x+1],M=u[p][x],T=u[p+1][x],v=u[p+1][x+1];(p!==0||o>0)&&f.push(E,M,v),(p!==n-1||c<Math.PI)&&f.push(M,T,v)}this.setIndex(f),this.setAttribute("position",new ie(_,3)),this.setAttribute("normal",new ie(S,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _r extends Le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],u=[],d=[],h=new D,f=new D,_=new D;for(let S=0;S<=n;S++){const m=o+S/n*a;for(let p=0;p<=s;p++){const x=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),_.subVectors(f,h).normalize(),u.push(_.x,_.y,_.z),d.push(p/s),d.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){const p=(s+1)*S+m-1,x=(s+1)*(S-1)+m-1,E=(s+1)*(S-1)+m,M=(s+1)*S+m;c.push(p,x,M),c.push(x,E,M)}this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Bi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(nc(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(nc(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ge(i){const t={};for(let e=0;e<i.length;e++){const n=Bi(i[e]);for(const s in n)t[s]=n[s]}return t}function nc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Wh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ul(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Xh={clone:Bi,merge:Ge};var Yh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yh,this.fragmentShader=qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=Wh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class jh extends ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class j extends ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $h extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kh extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class _a extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Zh extends _a{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Kr=new ge,ic=new D,sc=new D;class fl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=Je,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pa,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(ic),sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sc),e.updateMatrixWorld(),Kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===os||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Os=new D,Bs=new zi,un=new D;class pl extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Os,Bs,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Os,Bs,un.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Os,Bs,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Os,Bs,un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const kn=new D,rc=new Ft,oc=new Ft;class Ke extends pl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,rc,oc),e.subVectors(oc,rc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Er*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Jh extends fl{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0}}class Qh extends _a{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class xa extends pl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class td extends fl{constructor(){super(new xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ed extends _a{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new td}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Pi=-90,Ii=1;class nd extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ke(Pi,Ii,t,e);s.layers=this.layers,this.add(s);const r=new Ke(Pi,Ii,t,e);r.layers=this.layers,this.add(r);const o=new Ke(Pi,Ii,t,e);o.layers=this.layers,this.add(o);const a=new Ke(Pi,Ii,t,e);a.layers=this.layers,this.add(a);const c=new Ke(Pi,Ii,t,e);c.layers=this.layers,this.add(c);const l=new Ke(Pi,Ii,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class id extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class sd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const ba=class ba{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ba.prototype.isMatrix2=!0;let ac=ba;function cc(i,t,e,n){const s=rd(n);switch(e){case Zc:return i*t;case Qc:return i*t/s.components*s.byteLength;case oa:return i*t/s.components*s.byteLength;case ci:return i*t*2/s.components*s.byteLength;case aa:return i*t*2/s.components*s.byteLength;case Jc:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case ca:return i*t*4/s.components*s.byteLength;case qs:case js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $s:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case go:case xo:return Math.max(i,16)*Math.max(t,8)/4;case mo:case _o:return Math.max(i,8)*Math.max(t,8)/2;case vo:case Mo:case So:case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yo:case nr:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zo:case ko:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Go:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ir:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rd(i){switch(i){case Je:case qc:return{byteLength:1,components:1};case ss:case jc:case Pn:return{byteLength:2,components:1};case sa:case ra:return{byteLength:2,components:4};case Mn:case ia:case gn:return{byteLength:4,components:1};case $c:case Kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ea}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ea);function ml(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function od(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<d.length;f++){const _=d[h],S=d[f];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,d[h]=S)}d.length=h+1;for(let f=0,_=d.length;f<_;f++){const S=d[f];i.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cd=`#ifdef USE_ALPHAHASH
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
#endif`,ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fd=`#ifdef USE_AOMAP
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
#endif`,pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,md=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Md=`#ifdef USE_IRIDESCENCE
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
#endif`,yd=`#ifdef USE_BUMPMAP
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
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Td=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ad=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Pd=`#define PI 3.141592653589793
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
} // validated`,Id=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ld=`vec3 transformedNormal = objectNormal;
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
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Od="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jd=`#ifdef USE_GRADIENTMAP
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
}`,$d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jd=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,Qd=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,tu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,su=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,ru=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ou=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,au=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,cu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lu=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,du=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_u=`#if defined( USE_POINTS_UV )
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
#endif`,xu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Su=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bu=`#ifdef USE_MORPHTARGETS
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
#endif`,wu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Au=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ru=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pu=`#ifdef USE_NORMALMAP
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
#endif`,Iu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Du=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ou=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ku=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,Yu=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ju=`#ifdef USE_SKINNING
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
#endif`,$u=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ku=`#ifdef USE_SKINNING
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
#endif`,Zu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ju=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ef=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nf=`#ifdef USE_TRANSMISSION
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
#endif`,sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lf=`uniform sampler2D t2D;
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
}`,hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,df=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ff=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pf=`#include <common>
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
}`,mf=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gf=`#define DISTANCE
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
}`,_f=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`uniform float scale;
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
}`,yf=`uniform vec3 diffuse;
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
}`,Sf=`#include <common>
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
}`,bf=`uniform vec3 diffuse;
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
}`,wf=`#define LAMBERT
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
}`,Ef=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Tf=`#define MATCAP
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
}`,Af=`#define MATCAP
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
}`,Cf=`#define NORMAL
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
}`,Rf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pf=`#define PHONG
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
}`,If=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Lf=`#define STANDARD
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
}`,Df=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Uf=`#define TOON
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
}`,Nf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Ff=`uniform float size;
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
}`,Of=`uniform vec3 diffuse;
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
}`,Bf=`#include <common>
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
}`,zf=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,kf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:ad,alphahash_pars_fragment:cd,alphamap_fragment:ld,alphamap_pars_fragment:hd,alphatest_fragment:dd,alphatest_pars_fragment:ud,aomap_fragment:fd,aomap_pars_fragment:pd,batching_pars_vertex:md,batching_vertex:gd,begin_vertex:_d,beginnormal_vertex:xd,bsdfs:vd,iridescence_fragment:Md,bumpmap_pars_fragment:yd,clipping_planes_fragment:Sd,clipping_planes_pars_fragment:bd,clipping_planes_pars_vertex:wd,clipping_planes_vertex:Ed,color_fragment:Td,color_pars_fragment:Ad,color_pars_vertex:Cd,color_vertex:Rd,common:Pd,cube_uv_reflection_fragment:Id,defaultnormal_vertex:Ld,displacementmap_pars_vertex:Dd,displacementmap_vertex:Ud,emissivemap_fragment:Nd,emissivemap_pars_fragment:Fd,colorspace_fragment:Od,colorspace_pars_fragment:Bd,envmap_fragment:zd,envmap_common_pars_fragment:kd,envmap_pars_fragment:Hd,envmap_pars_vertex:Gd,envmap_physical_pars_fragment:Qd,envmap_vertex:Vd,fog_vertex:Wd,fog_pars_vertex:Xd,fog_fragment:Yd,fog_pars_fragment:qd,gradientmap_pars_fragment:jd,lightmap_pars_fragment:$d,lights_lambert_fragment:Kd,lights_lambert_pars_fragment:Zd,lights_pars_begin:Jd,lights_toon_fragment:tu,lights_toon_pars_fragment:eu,lights_phong_fragment:nu,lights_phong_pars_fragment:iu,lights_physical_fragment:su,lights_physical_pars_fragment:ru,lights_fragment_begin:ou,lights_fragment_maps:au,lights_fragment_end:cu,lightprobes_pars_fragment:lu,logdepthbuf_fragment:hu,logdepthbuf_pars_fragment:du,logdepthbuf_pars_vertex:uu,logdepthbuf_vertex:fu,map_fragment:pu,map_pars_fragment:mu,map_particle_fragment:gu,map_particle_pars_fragment:_u,metalnessmap_fragment:xu,metalnessmap_pars_fragment:vu,morphinstance_vertex:Mu,morphcolor_vertex:yu,morphnormal_vertex:Su,morphtarget_pars_vertex:bu,morphtarget_vertex:wu,normal_fragment_begin:Eu,normal_fragment_maps:Tu,normal_pars_fragment:Au,normal_pars_vertex:Cu,normal_vertex:Ru,normalmap_pars_fragment:Pu,clearcoat_normal_fragment_begin:Iu,clearcoat_normal_fragment_maps:Lu,clearcoat_pars_fragment:Du,iridescence_pars_fragment:Uu,opaque_fragment:Nu,packing:Fu,premultiplied_alpha_fragment:Ou,project_vertex:Bu,dithering_fragment:zu,dithering_pars_fragment:ku,roughnessmap_fragment:Hu,roughnessmap_pars_fragment:Gu,shadowmap_pars_fragment:Vu,shadowmap_pars_vertex:Wu,shadowmap_vertex:Xu,shadowmask_pars_fragment:Yu,skinbase_vertex:qu,skinning_pars_vertex:ju,skinning_vertex:$u,skinnormal_vertex:Ku,specularmap_fragment:Zu,specularmap_pars_fragment:Ju,tonemapping_fragment:Qu,tonemapping_pars_fragment:tf,transmission_fragment:ef,transmission_pars_fragment:nf,uv_pars_fragment:sf,uv_pars_vertex:rf,uv_vertex:of,worldpos_vertex:af,background_vert:cf,background_frag:lf,backgroundCube_vert:hf,backgroundCube_frag:df,cube_vert:uf,cube_frag:ff,depth_vert:pf,depth_frag:mf,distance_vert:gf,distance_frag:_f,equirect_vert:xf,equirect_frag:vf,linedashed_vert:Mf,linedashed_frag:yf,meshbasic_vert:Sf,meshbasic_frag:bf,meshlambert_vert:wf,meshlambert_frag:Ef,meshmatcap_vert:Tf,meshmatcap_frag:Af,meshnormal_vert:Cf,meshnormal_frag:Rf,meshphong_vert:Pf,meshphong_frag:If,meshphysical_vert:Lf,meshphysical_frag:Df,meshtoon_vert:Uf,meshtoon_frag:Nf,points_vert:Ff,points_frag:Of,shadow_vert:Bf,shadow_frag:zf,sprite_vert:kf,sprite_frag:Hf},gt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},pn={basic:{uniforms:Ge([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ge([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ge([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ge([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ge([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ge([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ge([gt.points,gt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ge([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ge([gt.common,gt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ge([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ge([gt.sprite,gt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:Ge([gt.common,gt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:Ge([gt.lights,gt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};pn.physical={uniforms:Ge([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const zs={r:0,b:0,g:0},Gf=new ge,gl=new zt;gl.set(-1,0,0,0,1,0,0,0,1);function Vf(i,t,e,n,s,r){const o=new Rt(0);let a=s===!0?0:1,c,l,u=null,d=0,h=null;function f(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){const M=x.backgroundBlurriness>0;E=t.get(E,M)}return E}function _(x){let E=!1;const M=f(x);M===null?m(o,a):M&&M.isColor&&(m(M,1),E=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(x,E){const M=f(E);M&&(M.isCubeTexture||M.mapping===pr)?(l===void 0&&(l=new L(new K(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Bi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,v,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Gf.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(gl),l.material.toneMapped=jt.getTransfer(M.colorSpace)!==se,(u!==M||d!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new L(new ne(2,2),new ln({name:"BackgroundMaterial",uniforms:Bi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=jt.getTransfer(M.colorSpace)!==se,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,E){x.getRGB(zs,ul(i)),e.buffers.color.setClear(zs.r,zs.g,zs.b,E,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,E=1){o.set(x),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:_,addToRenderList:S,dispose:p}}function Wf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(P,N,z,V,F){let H=!1;const I=d(P,V,z,N);r!==I&&(r=I,l(r.object)),H=f(P,V,z,F),H&&_(P,V,z,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,M(P,N,z,V),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function d(P,N,z,V){const F=V.wireframe===!0;let H=n[N.id];H===void 0&&(H={},n[N.id]=H);const I=P.isInstancedMesh===!0?P.id:0;let U=H[I];U===void 0&&(U={},H[I]=U);let q=U[z.id];q===void 0&&(q={},U[z.id]=q);let Z=q[F];return Z===void 0&&(Z=h(c()),q[F]=Z),Z}function h(P){const N=[],z=[],V=[];for(let F=0;F<e;F++)N[F]=0,z[F]=0,V[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:V,object:P,attributes:{},index:null}}function f(P,N,z,V){const F=r.attributes,H=N.attributes;let I=0;const U=z.getAttributes();for(const q in U)if(U[q].location>=0){const it=F[q];let at=H[q];if(at===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(at=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(at=P.instanceColor)),it===void 0||it.attribute!==at||at&&it.data!==at.data)return!0;I++}return r.attributesNum!==I||r.index!==V}function _(P,N,z,V){const F={},H=N.attributes;let I=0;const U=z.getAttributes();for(const q in U)if(U[q].location>=0){let it=H[q];it===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(it=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(it=P.instanceColor));const at={};at.attribute=it,it&&it.data&&(at.data=it.data),F[q]=at,I++}r.attributes=F,r.attributesNum=I,r.index=V}function S(){const P=r.newAttributes;for(let N=0,z=P.length;N<z;N++)P[N]=0}function m(P){p(P,0)}function p(P,N){const z=r.newAttributes,V=r.enabledAttributes,F=r.attributeDivisors;z[P]=1,V[P]===0&&(i.enableVertexAttribArray(P),V[P]=1),F[P]!==N&&(i.vertexAttribDivisor(P,N),F[P]=N)}function x(){const P=r.newAttributes,N=r.enabledAttributes;for(let z=0,V=N.length;z<V;z++)N[z]!==P[z]&&(i.disableVertexAttribArray(z),N[z]=0)}function E(P,N,z,V,F,H,I){I===!0?i.vertexAttribIPointer(P,N,z,F,H):i.vertexAttribPointer(P,N,z,V,F,H)}function M(P,N,z,V){S();const F=V.attributes,H=z.getAttributes(),I=N.defaultAttributeValues;for(const U in H){const q=H[U];if(q.location>=0){let Z=F[U];if(Z===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){const it=Z.normalized,at=Z.itemSize,Et=t.get(Z);if(Et===void 0)continue;const Dt=Et.buffer,Pt=Et.type,J=Et.bytesPerElement,pt=Pt===i.INT||Pt===i.UNSIGNED_INT||Z.gpuType===ia;if(Z.isInterleavedBufferAttribute){const nt=Z.data,wt=nt.stride,At=Z.offset;if(nt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<q.locationSize;Ut++)p(q.location+Ut,nt.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Ut=0;Ut<q.locationSize;Ut++)m(q.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let Ut=0;Ut<q.locationSize;Ut++)E(q.location+Ut,at/q.locationSize,Pt,it,wt*J,(At+at/q.locationSize*Ut)*J,pt)}else{if(Z.isInstancedBufferAttribute){for(let nt=0;nt<q.locationSize;nt++)p(q.location+nt,Z.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let nt=0;nt<q.locationSize;nt++)m(q.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let nt=0;nt<q.locationSize;nt++)E(q.location+nt,at/q.locationSize,Pt,it,at*J,at/q.locationSize*nt*J,pt)}}else if(I!==void 0){const it=I[U];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(q.location,it);break;case 3:i.vertexAttrib3fv(q.location,it);break;case 4:i.vertexAttrib4fv(q.location,it);break;default:i.vertexAttrib1fv(q.location,it)}}}}x()}function T(){w();for(const P in n){const N=n[P];for(const z in N){const V=N[z];for(const F in V){const H=V[F];for(const I in H)u(H[I].object),delete H[I];delete V[F]}}delete n[P]}}function v(P){if(n[P.id]===void 0)return;const N=n[P.id];for(const z in N){const V=N[z];for(const F in V){const H=V[F];for(const I in H)u(H[I].object),delete H[I];delete V[F]}}delete n[P.id]}function A(P){for(const N in n){const z=n[N];for(const V in z){const F=z[V];if(F[P.id]===void 0)continue;const H=F[P.id];for(const I in H)u(H[I].object),delete H[I];delete F[P.id]}}}function g(P){for(const N in n){const z=n[N],V=P.isInstancedMesh===!0?P.id:0,F=z[V];if(F!==void 0){for(const H in F){const I=F[H];for(const U in I)u(I[U].object),delete I[U];delete F[H]}delete z[V],Object.keys(z).length===0&&delete n[N]}}}function w(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:v,releaseStatesOfObject:g,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:m,disableUnusedAttributes:x}}function Xf(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Yf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==cn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const g=A===Pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Je&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==gn&&!g)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Nt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:M,maxSamples:T,samples:v}}function qf(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ei,a=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const x=r?0:n,E=x*4;let M=p.clippingState||null;c.value=M,M=u(_,h,E,f);for(let T=0;T!==E;++T)M[T]=e[T];p.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,_){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=c.value,_!==!0||m===null){const p=f+S*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=f;E!==S;++E,M+=4)o.copy(d[E]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const Wn=4,lc=[.125,.215,.35,.446,.526,.582],ii=20,jf=256,$i=new xa,hc=new Rt;let Zr=null,Jr=0,Qr=0,to=!1;const $f=new D;class dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=$f}=r;Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zr,Jr,Qr),this._renderer.xr.enabled=to,t.scissorTest=!1,Li(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ai||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:Pn,format:cn,colorSpace:sr,depthBuffer:!1},s=uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Kf(r)),this._blurMaterial=Jf(r,t,e),this._ggxMaterial=Zf(r,t,e)}return s}_compileMaterial(t){const e=new L(new Le,t);this._renderer.compile(e,$i)}_sceneToCubeUV(t,e,n,s,r){const c=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(hc),d.toneMapping=xn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new L(new K,new ee({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,p=!0):(m.color.copy(hc),p=!0);for(let E=0;E<6;E++){const M=E%3;M===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):M===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));const T=this._cubeSize;Li(s,M*T,E>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(S,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ai||t.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Li(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,$i)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,f=d*h,{_lodMax:_}=this,S=this._sizeLods[n],m=3*S*(n>_-Wn?n-_+Wn:0),p=4*(this._cubeSize-S);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=_-e,Li(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(a,$i),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,Li(t,m,p,3*S,2*S),s.setRenderTarget(t),s.render(a,$i)}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Kt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const h=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ii-1),S=r/_,m=isFinite(r)?1+Math.floor(u*S):ii;m>ii&&Nt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ii}`);const p=[];let x=0;for(let A=0;A<ii;++A){const g=A/S,w=Math.exp(-g*g/2);p.push(w),A===0?x+=w:A<m&&(x+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=_,h.mipInt.value=E-n;const M=this._sizeLods[s],T=3*M*(s>E-Wn?s-E+Wn:0),v=4*(this._cubeSize-M);Li(e,T,v,3*M,2*M),c.setRenderTarget(e),c.render(d,$i)}}function Kf(i){const t=[],e=[],n=[];let s=i;const r=i-Wn+1+lc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Wn?c=lc[o-i+Wn-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,_=6,S=3,m=2,p=1,x=new Float32Array(S*_*f),E=new Float32Array(m*_*f),M=new Float32Array(p*_*f);for(let v=0;v<f;v++){const A=v%3*2/3-1,g=v>2?0:-1,w=[A,g,0,A+2/3,g,0,A+2/3,g+1,0,A,g,0,A+2/3,g+1,0,A,g+1,0];x.set(w,S*_*v),E.set(h,m*_*v);const R=[v,v,v,v,v,v];M.set(R,p*_*v)}const T=new Le;T.setAttribute("position",new sn(x,S)),T.setAttribute("uv",new sn(E,m)),T.setAttribute("faceIndex",new sn(M,p)),n.push(new L(T,null)),s>Wn&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function uc(i,t,e){const n=new vn(i,t,e);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Li(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Zf(i,t,e){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Jf(i,t,e){const n=new Float32Array(ii),s=new D(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xr(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function fc(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xr(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function pc(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function xr(){return`

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
	`}class _l extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new hl(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new K(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Cn});r.uniforms.tEquirect.value=e;const o=new L(s,r),a=e.minFilter;return e.minFilter===si&&(e.minFilter=ze),new nd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function Qf(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Sr||f===br)if(t.has(h)){const _=t.get(h).texture;return a(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const S=new _l(_.height);return S.fromEquirectangularTexture(i,h),t.set(h,S),h.addEventListener("dispose",l),a(S.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,_=f===Sr||f===br,S=f===ai||f===Fi;if(_||S){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new dc(i)),m=_?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const x=h.image;return _&&x&&x.height>0||S&&x&&c(x)?(n===null&&(n=new dc(i)),m=_?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===Sr?h.mapping=ai:f===br&&(h.mapping=Fi),h}function c(h){let f=0;const _=6;for(let S=0;S<_;S++)h[S]!==void 0&&f++;return f===_}function l(h){const f=h.target;f.removeEventListener("dispose",l);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function tp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&qo("WebGLRenderer: "+n+" extension not supported."),s}}}function ep(i,t,e,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)t.update(h[f],i.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,_=d.attributes.position;let S=0;if(_===void 0)return;if(f!==null){const x=f.array;S=f.version;for(let E=0,M=x.length;E<M;E+=3){const T=x[E+0],v=x[E+1],A=x[E+2];h.push(T,v,v,A,A,T)}}else{const x=_.array;S=_.version;for(let E=0,M=x.length/3-1;E<M;E+=3){const T=E+0,v=E+1,A=E+2;h.push(T,v,v,A,A,T)}}const m=new(_.count>=65535?rl:sl)(h,1);m.version=S;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function np(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){i.drawElements(n,h,r,d*o),e.update(h,n,1)}function l(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*o,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let S=0;for(let m=0;m<f;m++)S+=h[m];e.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ip(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Kt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function sp(i,t,e){const n=new WeakMap,s=new Me;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let R=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",R)};var f=R;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),m===!0&&(M=3);let T=a.attributes.position.count*M,v=1;T>t.maxTextureSize&&(v=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const A=new Float32Array(T*v*4*d),g=new el(A,T,v,d);g.type=gn,g.needsUpdate=!0;const w=M*4;for(let P=0;P<d;P++){const N=p[P],z=x[P],V=E[P],F=T*v*4*P;for(let H=0;H<N.count;H++){const I=H*w;_===!0&&(s.fromBufferAttribute(N,H),A[F+I+0]=s.x,A[F+I+1]=s.y,A[F+I+2]=s.z,A[F+I+3]=0),S===!0&&(s.fromBufferAttribute(z,H),A[F+I+4]=s.x,A[F+I+5]=s.y,A[F+I+6]=s.z,A[F+I+7]=0),m===!0&&(s.fromBufferAttribute(V,H),A[F+I+8]=s.x,A[F+I+9]=s.y,A[F+I+10]=s.z,A[F+I+11]=V.itemSize===4?s.w:1)}}h={count:d,texture:g,size:new Ft(T,v)},n.set(a,h),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const S=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function rp(i,t,e,n,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const op={[kc]:"LINEAR_TONE_MAPPING",[Hc]:"REINHARD_TONE_MAPPING",[Gc]:"CINEON_TONE_MAPPING",[na]:"ACES_FILMIC_TONE_MAPPING",[Wc]:"AGX_TONE_MAPPING",[Xc]:"NEUTRAL_TONE_MAPPING",[Vc]:"CUSTOM_TONE_MAPPING"};function ap(i,t,e,n,s){const r=new vn(t,e,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new Oi(t,e):void 0}),o=new vn(t,e,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),a=new Le;a.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ie([0,2,0,0,2,0],2));const c=new jh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new L(a,c),u=new xa(-1,1,1,-1,0,1);let d=null,h=null,f=!1,_,S=null,m=[],p=!1;this.setSize=function(x,E){r.setSize(x,E),o.setSize(x,E);for(let M=0;M<m.length;M++){const T=m[M];T.setSize&&T.setSize(x,E)}},this.setEffects=function(x){m=x,p=m.length>0&&m[0].isRenderPass===!0;const E=r.width,M=r.height;for(let T=0;T<m.length;T++){const v=m[T];v.setSize&&v.setSize(E,M)}},this.begin=function(x,E){if(f||x.toneMapping===xn&&m.length===0)return!1;if(S=E,E!==null){const M=E.width,T=E.height;(r.width!==M||r.height!==T)&&this.setSize(M,T)}return p===!1&&x.setRenderTarget(r),_=x.toneMapping,x.toneMapping=xn,!0},this.hasRenderPass=function(){return p},this.end=function(x,E){x.toneMapping=_,f=!0;let M=r,T=o;for(let v=0;v<m.length;v++){const A=m[v];if(A.enabled!==!1&&(A.render(x,T,M,E),A.needsSwap!==!1)){const g=M;M=T,T=g}}if(d!==x.outputColorSpace||h!==x.toneMapping){d=x.outputColorSpace,h=x.toneMapping,c.defines={},jt.getTransfer(d)===se&&(c.defines.SRGB_TRANSFER="");const v=op[h];v&&(c.defines[v]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(S),x.render(l,u),S=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const xl=new ke,Ko=new Oi(1,1),vl=new el,Ml=new Sh,yl=new hl,mc=[],gc=[],_c=new Float32Array(16),xc=new Float32Array(9),vc=new Float32Array(4);function ki(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=mc[s];if(r===void 0&&(r=new Float32Array(s),mc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vr(i,t){let e=gc[t];e===void 0&&(e=new Int32Array(t),gc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function up(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;vc.set(n),i.uniformMatrix2fv(this.addr,!1,vc),Ie(e,n)}}function fp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;xc.set(n),i.uniformMatrix3fv(this.addr,!1,xc),Ie(e,n)}}function pp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;_c.set(n),i.uniformMatrix4fv(this.addr,!1,_c),Ie(e,n)}}function mp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function _p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function vp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function bp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ko.compareFunction=e.isReversedDepthBuffer()?ha:la,r=Ko):r=xl,e.setTexture2D(t||r,s)}function wp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ml,s)}function Ep(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yl,s)}function Tp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vl,s)}function Ap(i){switch(i){case 5126:return cp;case 35664:return lp;case 35665:return hp;case 35666:return dp;case 35674:return up;case 35675:return fp;case 35676:return pp;case 5124:case 35670:return mp;case 35667:case 35671:return gp;case 35668:case 35672:return _p;case 35669:case 35673:return xp;case 5125:return vp;case 36294:return Mp;case 36295:return yp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return Tp}}function Cp(i,t){i.uniform1fv(this.addr,t)}function Rp(i,t){const e=ki(t,this.size,2);i.uniform2fv(this.addr,e)}function Pp(i,t){const e=ki(t,this.size,3);i.uniform3fv(this.addr,e)}function Ip(i,t){const e=ki(t,this.size,4);i.uniform4fv(this.addr,e)}function Lp(i,t){const e=ki(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Dp(i,t){const e=ki(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Up(i,t){const e=ki(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Np(i,t){i.uniform1iv(this.addr,t)}function Fp(i,t){i.uniform2iv(this.addr,t)}function Op(i,t){i.uniform3iv(this.addr,t)}function Bp(i,t){i.uniform4iv(this.addr,t)}function zp(i,t){i.uniform1uiv(this.addr,t)}function kp(i,t){i.uniform2uiv(this.addr,t)}function Hp(i,t){i.uniform3uiv(this.addr,t)}function Gp(i,t){i.uniform4uiv(this.addr,t)}function Vp(i,t,e){const n=this.cache,s=t.length,r=vr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ko:o=xl;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Wp(i,t,e){const n=this.cache,s=t.length,r=vr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ml,r[o])}function Xp(i,t,e){const n=this.cache,s=t.length,r=vr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||yl,r[o])}function Yp(i,t,e){const n=this.cache,s=t.length,r=vr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vl,r[o])}function qp(i){switch(i){case 5126:return Cp;case 35664:return Rp;case 35665:return Pp;case 35666:return Ip;case 35674:return Lp;case 35675:return Dp;case 35676:return Up;case 5124:case 35670:return Np;case 35667:case 35671:return Fp;case 35668:case 35672:return Op;case 35669:case 35673:return Bp;case 5125:return zp;case 36294:return kp;case 36295:return Hp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return Yp}}class jp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ap(e.type)}}class $p{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qp(e.type)}}class Kp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const eo=/(\w+)(\])?(\[|\.)?/g;function Mc(i,t){i.seq.push(t),i.map[t.id]=t}function Zp(i,t,e){const n=i.name,s=n.length;for(eo.lastIndex=0;;){const r=eo.exec(n),o=eo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Mc(e,l===void 0?new jp(a,i,t):new $p(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Kp(a),Mc(e,d)),e=d}}}class Zs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Zp(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function yc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Jp=37297;let Qp=0;function tm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Sc=new zt;function em(i){jt._getMatrix(Sc,jt.workingColorSpace,i);const t=`mat3( ${Sc.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case rr:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+tm(i.getShaderSource(t),a)}else return r}function nm(i,t){const e=em(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const im={[kc]:"Linear",[Hc]:"Reinhard",[Gc]:"Cineon",[na]:"ACESFilmic",[Wc]:"AgX",[Xc]:"Neutral",[Vc]:"Custom"};function sm(i,t){const e=im[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ks=new D;function rm(){jt.getLuminanceCoefficients(ks);const i=ks.x.toFixed(4),t=ks.y.toFixed(4),e=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function om(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ts).join(`
`)}function am(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ts(i){return i!==""}function wc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ec(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zo(i){return i.replace(lm,dm)}const hm=new Map;function dm(i,t){let e=Vt[t];if(e===void 0){const n=hm.get(t);if(n!==void 0)e=Vt[n],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Zo(e)}const um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(i){return i.replace(um,fm)}function fm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ac(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const pm={[Ys]:"SHADOWMAP_TYPE_PCF",[Qi]:"SHADOWMAP_TYPE_VSM"};function mm(i){return pm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gm={[ai]:"ENVMAP_TYPE_CUBE",[Fi]:"ENVMAP_TYPE_CUBE",[pr]:"ENVMAP_TYPE_CUBE_UV"};function _m(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":gm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const xm={[Fi]:"ENVMAP_MODE_REFRACTION"};function vm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":xm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Mm={[zc]:"ENVMAP_BLENDING_MULTIPLY",[eh]:"ENVMAP_BLENDING_MIX",[nh]:"ENVMAP_BLENDING_ADD"};function ym(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Mm[i.combine]||"ENVMAP_BLENDING_NONE"}function Sm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function bm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=mm(e),l=_m(e),u=vm(e),d=ym(e),h=Sm(e),f=om(e),_=am(r),S=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ts).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ts).join(`
`),p.length>0&&(p+=`
`)):(m=[Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),p=[Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==xn?sm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,nm("linearToOutputTexel",e.outputColorSpace),rm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ts).join(`
`)),o=Zo(o),o=wc(o,e),o=Ec(o,e),a=Zo(a),a=wc(a,e),a=Ec(a,e),o=Tc(o),a=Tc(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=x+m+o,M=x+p+a,T=yc(s,s.VERTEX_SHADER,E),v=yc(s,s.FRAGMENT_SHADER,M);s.attachShader(S,T),s.attachShader(S,v),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function A(P){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(S)||"",z=s.getShaderInfoLog(T)||"",V=s.getShaderInfoLog(v)||"",F=N.trim(),H=z.trim(),I=V.trim();let U=!0,q=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,T,v);else{const Z=bc(s,T,"vertex"),it=bc(s,v,"fragment");Kt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+Z+`
`+it)}else F!==""?Nt("WebGLProgram: Program Info Log:",F):(H===""||I==="")&&(q=!1);q&&(P.diagnostics={runnable:U,programLog:F,vertexShader:{log:H,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(T),s.deleteShader(v),g=new Zs(s,S),w=cm(s,S)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(S,Jp)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qp++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=v,this}let wm=0;class Em{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Tm(t),e.set(t,n)),n}}class Tm{constructor(t){this.id=wm++,this.code=t,this.usedTimes=0}}function Am(i){return i===ci||i===nr||i===ir}function Cm(i,t,e,n,s,r){const o=new nl,a=new Em,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return c.add(g),g===0?"uv":`uv${g}`}function S(g,w,R,P,N,z){const V=P.fog,F=N.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,I=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,U=t.get(g.envMap||H,I),q=U&&U.mapping===pr?U.image.height:null,Z=f[g.type];g.precision!==null&&(h=n.getMaxPrecision(g.precision),h!==g.precision&&Nt("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));const it=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,at=it!==void 0?it.length:0;let Et=0;F.morphAttributes.position!==void 0&&(Et=1),F.morphAttributes.normal!==void 0&&(Et=2),F.morphAttributes.color!==void 0&&(Et=3);let Dt,Pt,J,pt;if(Z){const kt=pn[Z];Dt=kt.vertexShader,Pt=kt.fragmentShader}else Dt=g.vertexShader,Pt=g.fragmentShader,a.update(g),J=a.getVertexShaderID(g),pt=a.getFragmentShaderID(g);const nt=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),At=N.isInstancedMesh===!0,Ut=N.isBatchedMesh===!0,pe=!!g.map,Yt=!!g.matcap,re=!!U,fe=!!g.aoMap,Xt=!!g.lightMap,Ae=!!g.bumpMap,me=!!g.normalMap,Ye=!!g.displacementMap,B=!!g.emissiveMap,Ce=!!g.metalnessMap,qt=!!g.roughnessMap,de=g.anisotropy>0,mt=g.clearcoat>0,_e=g.dispersion>0,C=g.iridescence>0,y=g.sheen>0,G=g.transmission>0,tt=de&&!!g.anisotropyMap,ot=mt&&!!g.clearcoatMap,ct=mt&&!!g.clearcoatNormalMap,ft=mt&&!!g.clearcoatRoughnessMap,$=C&&!!g.iridescenceMap,et=C&&!!g.iridescenceThicknessMap,vt=y&&!!g.sheenColorMap,St=y&&!!g.sheenRoughnessMap,dt=!!g.specularMap,lt=!!g.specularColorMap,Bt=!!g.specularIntensityMap,Gt=G&&!!g.transmissionMap,te=G&&!!g.thicknessMap,O=!!g.gradientMap,ht=!!g.alphaMap,Q=g.alphaTest>0,Mt=!!g.alphaHash,ut=!!g.extensions;let rt=xn;g.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(rt=i.toneMapping);const Ct={shaderID:Z,shaderType:g.type,shaderName:g.name,vertexShader:Dt,fragmentShader:Pt,defines:g.defines,customVertexShaderID:J,customFragmentShaderID:pt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:Ut,batchingColor:Ut&&N._colorsTexture!==null,instancing:At,instancingColor:At&&N.instanceColor!==null,instancingMorph:At&&N.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:pe,matcap:Yt,envMap:re,envMapMode:re&&U.mapping,envMapCubeUVHeight:q,aoMap:fe,lightMap:Xt,bumpMap:Ae,normalMap:me,displacementMap:Ye,emissiveMap:B,normalMapObjectSpace:me&&g.normalMapType===rh,normalMapTangentSpace:me&&g.normalMapType===Xo,packedNormalMap:me&&g.normalMapType===Xo&&Am(g.normalMap.format),metalnessMap:Ce,roughnessMap:qt,anisotropy:de,anisotropyMap:tt,clearcoat:mt,clearcoatMap:ot,clearcoatNormalMap:ct,clearcoatRoughnessMap:ft,dispersion:_e,iridescence:C,iridescenceMap:$,iridescenceThicknessMap:et,sheen:y,sheenColorMap:vt,sheenRoughnessMap:St,specularMap:dt,specularColorMap:lt,specularIntensityMap:Bt,transmission:G,transmissionMap:Gt,thicknessMap:te,gradientMap:O,opaque:g.transparent===!1&&g.blending===Di&&g.alphaToCoverage===!1,alphaMap:ht,alphaTest:Q,alphaHash:Mt,combine:g.combine,mapUv:pe&&_(g.map.channel),aoMapUv:fe&&_(g.aoMap.channel),lightMapUv:Xt&&_(g.lightMap.channel),bumpMapUv:Ae&&_(g.bumpMap.channel),normalMapUv:me&&_(g.normalMap.channel),displacementMapUv:Ye&&_(g.displacementMap.channel),emissiveMapUv:B&&_(g.emissiveMap.channel),metalnessMapUv:Ce&&_(g.metalnessMap.channel),roughnessMapUv:qt&&_(g.roughnessMap.channel),anisotropyMapUv:tt&&_(g.anisotropyMap.channel),clearcoatMapUv:ot&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:ct&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:St&&_(g.sheenRoughnessMap.channel),specularMapUv:dt&&_(g.specularMap.channel),specularColorMapUv:lt&&_(g.specularColorMap.channel),specularIntensityMapUv:Bt&&_(g.specularIntensityMap.channel),transmissionMapUv:Gt&&_(g.transmissionMap.channel),thicknessMapUv:te&&_(g.thicknessMap.channel),alphaMapUv:ht&&_(g.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(me||de),vertexNormals:!!F.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(pe||ht),fog:!!V,useFog:g.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||F.attributes.normal===void 0&&me===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:wt,skinning:N.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Et,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:pe&&g.map.isVideoTexture===!0&&jt.getTransfer(g.map.colorSpace)===se,decodeVideoTextureEmissive:B&&g.emissiveMap.isVideoTexture===!0&&jt.getTransfer(g.emissiveMap.colorSpace)===se,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ze,flipSided:g.side===We,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ut&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&g.extensions.multiDraw===!0||Ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function m(g){const w=[];if(g.shaderID?w.push(g.shaderID):(w.push(g.customVertexShaderID),w.push(g.customFragmentShaderID)),g.defines!==void 0)for(const R in g.defines)w.push(R),w.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(p(w,g),x(w,g),w.push(i.outputColorSpace)),w.push(g.customProgramCacheKey),w.join()}function p(g,w){g.push(w.precision),g.push(w.outputColorSpace),g.push(w.envMapMode),g.push(w.envMapCubeUVHeight),g.push(w.mapUv),g.push(w.alphaMapUv),g.push(w.lightMapUv),g.push(w.aoMapUv),g.push(w.bumpMapUv),g.push(w.normalMapUv),g.push(w.displacementMapUv),g.push(w.emissiveMapUv),g.push(w.metalnessMapUv),g.push(w.roughnessMapUv),g.push(w.anisotropyMapUv),g.push(w.clearcoatMapUv),g.push(w.clearcoatNormalMapUv),g.push(w.clearcoatRoughnessMapUv),g.push(w.iridescenceMapUv),g.push(w.iridescenceThicknessMapUv),g.push(w.sheenColorMapUv),g.push(w.sheenRoughnessMapUv),g.push(w.specularMapUv),g.push(w.specularColorMapUv),g.push(w.specularIntensityMapUv),g.push(w.transmissionMapUv),g.push(w.thicknessMapUv),g.push(w.combine),g.push(w.fogExp2),g.push(w.sizeAttenuation),g.push(w.morphTargetsCount),g.push(w.morphAttributeCount),g.push(w.numDirLights),g.push(w.numPointLights),g.push(w.numSpotLights),g.push(w.numSpotLightMaps),g.push(w.numHemiLights),g.push(w.numRectAreaLights),g.push(w.numDirLightShadows),g.push(w.numPointLightShadows),g.push(w.numSpotLightShadows),g.push(w.numSpotLightShadowsWithMaps),g.push(w.numLightProbes),g.push(w.shadowMapType),g.push(w.toneMapping),g.push(w.numClippingPlanes),g.push(w.numClipIntersection),g.push(w.depthPacking)}function x(g,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),g.push(o.mask)}function E(g){const w=f[g.type];let R;if(w){const P=pn[w];R=Xh.clone(P.uniforms)}else R=g.uniforms;return R}function M(g,w){let R=u.get(w);return R!==void 0?++R.usedTimes:(R=new bm(i,w,g,s),l.push(R),u.set(w,R)),R}function T(g){if(--g.usedTimes===0){const w=l.indexOf(g);l[w]=l[l.length-1],l.pop(),u.delete(g.cacheKey),g.destroy()}}function v(g){a.remove(g)}function A(){a.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:E,acquireProgram:M,releaseProgram:T,releaseShaderCache:v,programs:l,dispose:A}}function Rm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Pm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Cc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,_,S,m,p){let x=i[t];return x===void 0?(x={id:h.id,object:h,geometry:f,material:_,materialVariant:o(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:p},i[t]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=_,x.materialVariant=o(h),x.groupOrder=S,x.renderOrder=h.renderOrder,x.z=m,x.group=p),t++,x}function c(h,f,_,S,m,p){const x=a(h,f,_,S,m,p);_.transmission>0?n.push(x):_.transparent===!0?s.push(x):e.push(x)}function l(h,f,_,S,m,p){const x=a(h,f,_,S,m,p);_.transmission>0?n.unshift(x):_.transparent===!0?s.unshift(x):e.unshift(x)}function u(h,f){e.length>1&&e.sort(h||Pm),n.length>1&&n.sort(f||Cc),s.length>1&&s.sort(f||Cc)}function d(){for(let h=t,f=i.length;h<f;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function Im(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Rc,i.set(n,[o])):s>=r.length?(o=new Rc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Lm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Rt};break;case"SpotLight":e={position:new D,direction:new D,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Dm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Um=0;function Nm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Fm(i){const t=new Lm,e=Dm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new ge,o=new ge;function a(l){let u=0,d=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,_=0,S=0,m=0,p=0,x=0,E=0,M=0,T=0,v=0,A=0;l.sort(Nm);for(let w=0,R=l.length;w<R;w++){const P=l[w],N=P.color,z=P.intensity,V=P.distance;let F=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ci?F=P.shadow.map.texture:F=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=N.r*z,d+=N.g*z,h+=N.b*z;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],z);A++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const I=P.shadow,U=e.get(P);U.shadowIntensity=I.intensity,U.shadowBias=I.bias,U.shadowNormalBias=I.normalBias,U.shadowRadius=I.radius,U.shadowMapSize=I.mapSize,n.directionalShadow[f]=U,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=H,f++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(N).multiplyScalar(z),H.distance=V,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[S]=H;const I=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,I.updateMatrices(P),P.castShadow&&v++),n.spotLightMatrix[S]=I.matrix,P.castShadow){const U=e.get(P);U.shadowIntensity=I.intensity,U.shadowBias=I.bias,U.shadowNormalBias=I.normalBias,U.shadowRadius=I.radius,U.shadowMapSize=I.mapSize,n.spotShadow[S]=U,n.spotShadowMap[S]=F,M++}S++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(N).multiplyScalar(z),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const I=P.shadow,U=e.get(P);U.shadowIntensity=I.intensity,U.shadowBias=I.bias,U.shadowNormalBias=I.normalBias,U.shadowRadius=I.radius,U.shadowMapSize=I.mapSize,U.shadowCameraNear=I.camera.near,U.shadowCameraFar=I.camera.far,n.pointShadow[_]=U,n.pointShadowMap[_]=F,n.pointShadowMatrix[_]=P.shadow.matrix,E++}n.point[_]=H,_++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(z),H.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const g=n.hash;(g.directionalLength!==f||g.pointLength!==_||g.spotLength!==S||g.rectAreaLength!==m||g.hemiLength!==p||g.numDirectionalShadows!==x||g.numPointShadows!==E||g.numSpotShadows!==M||g.numSpotMaps!==T||g.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=S,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+T-v,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=v,n.numLightProbes=A,g.directionalLength=f,g.pointLength=_,g.spotLength=S,g.rectAreaLength=m,g.hemiLength=p,g.numDirectionalShadows=x,g.numPointShadows=E,g.numSpotShadows=M,g.numSpotMaps=T,g.numLightProbes=A,n.version=Um++)}function c(l,u){let d=0,h=0,f=0,_=0,S=0;const m=u.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const E=l[p];if(E.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(E.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const M=n.hemi[S];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),S++}}}return{setup:a,setupView:c,state:n}}function Pc(i){const t=new Fm(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Om(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Pc(i),t.set(s,[a])):r>=o.length?(a=new Pc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Bm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,km=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Hm=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Ic=new ge,Ki=new D,no=new D;function Gm(i,t,e){let n=new pa;const s=new Ft,r=new Ft,o=new Me,a=new $h,c=new Kh,l={},u=e.maxTextureSize,d={[qn]:We,[We]:qn,[Ze]:Ze},h=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:Bm,fragmentShader:zm}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new Le;_.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new L(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let p=this.type;this.render=function(v,A,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===Bc&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ys);const w=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Cn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=p!==this.type;z&&A.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(F=>F.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,F=v.length;V<F;V++){const H=v[V],I=H.shadow;if(I===void 0){Nt("WebGLShadowMap:",H,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const U=I.getFrameExtents();s.multiply(U),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/U.x),s.x=r.x*U.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/U.y),s.y=r.y*U.y,I.mapSize.y=r.y));const q=i.state.buffers.depth.getReversed();if(I.camera._reversedDepth=q,I.map===null||z===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Qi){if(H.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new vn(s.x,s.y,{format:ci,type:Pn,minFilter:ze,magFilter:ze,generateMipmaps:!1}),I.map.texture.name=H.name+".shadowMap",I.map.depthTexture=new Oi(s.x,s.y,gn),I.map.depthTexture.name=H.name+".shadowMapDepth",I.map.depthTexture.format=In,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Ue,I.map.depthTexture.magFilter=Ue}else H.isPointLight?(I.map=new _l(s.x),I.map.depthTexture=new Vh(s.x,Mn)):(I.map=new vn(s.x,s.y),I.map.depthTexture=new Oi(s.x,s.y,Mn)),I.map.depthTexture.name=H.name+".shadowMap",I.map.depthTexture.format=In,this.type===Ys?(I.map.depthTexture.compareFunction=q?ha:la,I.map.depthTexture.minFilter=ze,I.map.depthTexture.magFilter=ze):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Ue,I.map.depthTexture.magFilter=Ue);I.camera.updateProjectionMatrix()}const Z=I.map.isWebGLCubeRenderTarget?6:1;for(let it=0;it<Z;it++){if(I.map.isWebGLCubeRenderTarget)i.setRenderTarget(I.map,it),i.clear();else{it===0&&(i.setRenderTarget(I.map),i.clear());const at=I.getViewport(it);o.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),N.viewport(o)}if(H.isPointLight){const at=I.camera,Et=I.matrix,Dt=H.distance||at.far;Dt!==at.far&&(at.far=Dt,at.updateProjectionMatrix()),Ki.setFromMatrixPosition(H.matrixWorld),at.position.copy(Ki),no.copy(at.position),no.add(km[it]),at.up.copy(Hm[it]),at.lookAt(no),at.updateMatrixWorld(),Et.makeTranslation(-Ki.x,-Ki.y,-Ki.z),Ic.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Ic,at.coordinateSystem,at.reversedDepth)}else I.updateMatrices(H);n=I.getFrustum(),M(A,g,I.camera,H,this.type)}I.isPointLightShadow!==!0&&this.type===Qi&&x(I,g),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,R,P)};function x(v,A){const g=t.update(S);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new vn(s.x,s.y,{format:ci,type:Pn})),h.uniforms.shadow_pass.value=v.map.depthTexture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(A,null,g,h,S,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(A,null,g,f,S,null)}function E(v,A,g,w){let R=null;const P=g.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(P!==void 0)R=P;else if(R=g.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=R.uuid,z=A.uuid;let V=l[N];V===void 0&&(V={},l[N]=V);let F=V[z];F===void 0&&(F=R.clone(),V[z]=F,A.addEventListener("dispose",T)),R=F}if(R.visible=A.visible,R.wireframe=A.wireframe,w===Qi?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,g.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const N=i.properties.get(R);N.light=g}return R}function M(v,A,g,w,R){if(v.visible===!1)return;if(v.layers.test(A.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&R===Qi)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,v.matrixWorld);const z=t.update(v),V=v.material;if(Array.isArray(V)){const F=z.groups;for(let H=0,I=F.length;H<I;H++){const U=F[H],q=V[U.materialIndex];if(q&&q.visible){const Z=E(v,q,w,R);v.onBeforeShadow(i,v,A,g,z,Z,U),i.renderBufferDirect(g,null,z,Z,v,U),v.onAfterShadow(i,v,A,g,z,Z,U)}}}else if(V.visible){const F=E(v,V,w,R);v.onBeforeShadow(i,v,A,g,z,F,null),i.renderBufferDirect(g,null,z,F,v,null),v.onAfterShadow(i,v,A,g,z,F,null)}}const N=v.children;for(let z=0,V=N.length;z<V;z++)M(N[z],A,g,w,R)}function T(v){v.target.removeEventListener("dispose",T);for(const g in l){const w=l[g],R=v.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function Vm(i,t){function e(){let O=!1;const ht=new Me;let Q=null;const Mt=new Me(0,0,0,0);return{setMask:function(ut){Q!==ut&&!O&&(i.colorMask(ut,ut,ut,ut),Q=ut)},setLocked:function(ut){O=ut},setClear:function(ut,rt,Ct,kt,Se){Se===!0&&(ut*=kt,rt*=kt,Ct*=kt),ht.set(ut,rt,Ct,kt),Mt.equals(ht)===!1&&(i.clearColor(ut,rt,Ct,kt),Mt.copy(ht))},reset:function(){O=!1,Q=null,Mt.set(-1,0,0,0)}}}function n(){let O=!1,ht=!1,Q=null,Mt=null,ut=null;return{setReversed:function(rt){if(ht!==rt){const Ct=t.get("EXT_clip_control");rt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),ht=rt;const kt=ut;ut=null,this.setClear(kt)}},getReversed:function(){return ht},setTest:function(rt){rt?nt(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(rt){Q!==rt&&!O&&(i.depthMask(rt),Q=rt)},setFunc:function(rt){if(ht&&(rt=mh[rt]),Mt!==rt){switch(rt){case oo:i.depthFunc(i.NEVER);break;case ao:i.depthFunc(i.ALWAYS);break;case co:i.depthFunc(i.LESS);break;case Ni:i.depthFunc(i.LEQUAL);break;case lo:i.depthFunc(i.EQUAL);break;case ho:i.depthFunc(i.GEQUAL);break;case uo:i.depthFunc(i.GREATER);break;case fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=rt}},setLocked:function(rt){O=rt},setClear:function(rt){ut!==rt&&(ut=rt,ht&&(rt=1-rt),i.clearDepth(rt))},reset:function(){O=!1,Q=null,Mt=null,ut=null,ht=!1}}}function s(){let O=!1,ht=null,Q=null,Mt=null,ut=null,rt=null,Ct=null,kt=null,Se=null;return{setTest:function(oe){O||(oe?nt(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(oe){ht!==oe&&!O&&(i.stencilMask(oe),ht=oe)},setFunc:function(oe,yn,hn){(Q!==oe||Mt!==yn||ut!==hn)&&(i.stencilFunc(oe,yn,hn),Q=oe,Mt=yn,ut=hn)},setOp:function(oe,yn,hn){(rt!==oe||Ct!==yn||kt!==hn)&&(i.stencilOp(oe,yn,hn),rt=oe,Ct=yn,kt=hn)},setLocked:function(oe){O=oe},setClear:function(oe){Se!==oe&&(i.clearStencil(oe),Se=oe)},reset:function(){O=!1,ht=null,Q=null,Mt=null,ut=null,rt=null,Ct=null,kt=null,Se=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h={},f=new WeakMap,_=[],S=null,m=!1,p=null,x=null,E=null,M=null,T=null,v=null,A=null,g=new Rt(0,0,0),w=0,R=!1,P=null,N=null,z=null,V=null,F=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,U=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(q)[1]),I=U>=1):q.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),I=U>=2);let Z=null,it={};const at=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),Dt=new Me().fromArray(at),Pt=new Me().fromArray(Et);function J(O,ht,Q,Mt){const ut=new Uint8Array(4),rt=i.createTexture();i.bindTexture(O,rt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<Q;Ct++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(ht+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return rt}const pt={};pt[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(i.DEPTH_TEST),o.setFunc(Ni),Ae(!1),me(La),nt(i.CULL_FACE),fe(Cn);function nt(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function wt(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function At(O,ht){return h[O]!==ht?(i.bindFramebuffer(O,ht),h[O]=ht,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ht),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Ut(O,ht){let Q=_,Mt=!1;if(O){Q=f.get(ht),Q===void 0&&(Q=[],f.set(ht,Q));const ut=O.textures;if(Q.length!==ut.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Ct=ut.length;rt<Ct;rt++)Q[rt]=i.COLOR_ATTACHMENT0+rt;Q.length=ut.length,Mt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(Q)}function pe(O){return S!==O?(i.useProgram(O),S=O,!0):!1}const Yt={[ni]:i.FUNC_ADD,[Bl]:i.FUNC_SUBTRACT,[zl]:i.FUNC_REVERSE_SUBTRACT};Yt[kl]=i.MIN,Yt[Hl]=i.MAX;const re={[Gl]:i.ZERO,[Vl]:i.ONE,[Wl]:i.SRC_COLOR,[so]:i.SRC_ALPHA,[Kl]:i.SRC_ALPHA_SATURATE,[jl]:i.DST_COLOR,[Yl]:i.DST_ALPHA,[Xl]:i.ONE_MINUS_SRC_COLOR,[ro]:i.ONE_MINUS_SRC_ALPHA,[$l]:i.ONE_MINUS_DST_COLOR,[ql]:i.ONE_MINUS_DST_ALPHA,[Zl]:i.CONSTANT_COLOR,[Jl]:i.ONE_MINUS_CONSTANT_COLOR,[Ql]:i.CONSTANT_ALPHA,[th]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(O,ht,Q,Mt,ut,rt,Ct,kt,Se,oe){if(O===Cn){m===!0&&(wt(i.BLEND),m=!1);return}if(m===!1&&(nt(i.BLEND),m=!0),O!==Ol){if(O!==p||oe!==R){if((x!==ni||T!==ni)&&(i.blendEquation(i.FUNC_ADD),x=ni,T=ni),oe)switch(O){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case er:i.blendFunc(i.ONE,i.ONE);break;case Da:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ua:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",O);break}else switch(O){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Da:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ua:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",O);break}E=null,M=null,v=null,A=null,g.set(0,0,0),w=0,p=O,R=oe}return}ut=ut||ht,rt=rt||Q,Ct=Ct||Mt,(ht!==x||ut!==T)&&(i.blendEquationSeparate(Yt[ht],Yt[ut]),x=ht,T=ut),(Q!==E||Mt!==M||rt!==v||Ct!==A)&&(i.blendFuncSeparate(re[Q],re[Mt],re[rt],re[Ct]),E=Q,M=Mt,v=rt,A=Ct),(kt.equals(g)===!1||Se!==w)&&(i.blendColor(kt.r,kt.g,kt.b,Se),g.copy(kt),w=Se),p=O,R=!1}function Xt(O,ht){O.side===Ze?wt(i.CULL_FACE):nt(i.CULL_FACE);let Q=O.side===We;ht&&(Q=!Q),Ae(Q),O.blending===Di&&O.transparent===!1?fe(Cn):fe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Mt=O.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),B(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(O){P!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),P=O)}function me(O){O!==Nl?(nt(i.CULL_FACE),O!==N&&(O===La?i.cullFace(i.BACK):O===Fl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),N=O}function Ye(O){O!==z&&(I&&i.lineWidth(O),z=O)}function B(O,ht,Q){O?(nt(i.POLYGON_OFFSET_FILL),(V!==ht||F!==Q)&&(V=ht,F=Q,o.getReversed()&&(ht=-ht),i.polygonOffset(ht,Q))):wt(i.POLYGON_OFFSET_FILL)}function Ce(O){O?nt(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function qt(O){O===void 0&&(O=i.TEXTURE0+H-1),Z!==O&&(i.activeTexture(O),Z=O)}function de(O,ht,Q){Q===void 0&&(Z===null?Q=i.TEXTURE0+H-1:Q=Z);let Mt=it[Q];Mt===void 0&&(Mt={type:void 0,texture:void 0},it[Q]=Mt),(Mt.type!==O||Mt.texture!==ht)&&(Z!==Q&&(i.activeTexture(Q),Z=Q),i.bindTexture(O,ht||pt[O]),Mt.type=O,Mt.texture=ht)}function mt(){const O=it[Z];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function _e(){try{i.compressedTexImage2D(...arguments)}catch(O){Kt("WebGLState:",O)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(O){Kt("WebGLState:",O)}}function y(){try{i.texSubImage2D(...arguments)}catch(O){Kt("WebGLState:",O)}}function G(){try{i.texSubImage3D(...arguments)}catch(O){Kt("WebGLState:",O)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Kt("WebGLState:",O)}}function ot(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Kt("WebGLState:",O)}}function ct(){try{i.texStorage2D(...arguments)}catch(O){Kt("WebGLState:",O)}}function ft(){try{i.texStorage3D(...arguments)}catch(O){Kt("WebGLState:",O)}}function $(){try{i.texImage2D(...arguments)}catch(O){Kt("WebGLState:",O)}}function et(){try{i.texImage3D(...arguments)}catch(O){Kt("WebGLState:",O)}}function vt(O){return d[O]!==void 0?d[O]:i.getParameter(O)}function St(O,ht){d[O]!==ht&&(i.pixelStorei(O,ht),d[O]=ht)}function dt(O){Dt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Dt.copy(O))}function lt(O){Pt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Pt.copy(O))}function Bt(O,ht){let Q=l.get(ht);Q===void 0&&(Q=new WeakMap,l.set(ht,Q));let Mt=Q.get(O);Mt===void 0&&(Mt=i.getUniformBlockIndex(ht,O.name),Q.set(O,Mt))}function Gt(O,ht){const Mt=l.get(ht).get(O);c.get(ht)!==Mt&&(i.uniformBlockBinding(ht,Mt,O.__bindingPointIndex),c.set(ht,Mt))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},Z=null,it={},h={},f=new WeakMap,_=[],S=null,m=!1,p=null,x=null,E=null,M=null,T=null,v=null,A=null,g=new Rt(0,0,0),w=0,R=!1,P=null,N=null,z=null,V=null,F=null,Dt.set(0,0,i.canvas.width,i.canvas.height),Pt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:wt,bindFramebuffer:At,drawBuffers:Ut,useProgram:pe,setBlending:fe,setMaterial:Xt,setFlipSided:Ae,setCullFace:me,setLineWidth:Ye,setPolygonOffset:B,setScissorTest:Ce,activeTexture:qt,bindTexture:de,unbindTexture:mt,compressedTexImage2D:_e,compressedTexImage3D:C,texImage2D:$,texImage3D:et,pixelStorei:St,getParameter:vt,updateUBOMapping:Bt,uniformBlockBinding:Gt,texStorage2D:ct,texStorage3D:ft,texSubImage2D:y,texSubImage3D:G,compressedTexSubImage2D:tt,compressedTexSubImage3D:ot,scissor:dt,viewport:lt,reset:te}}function Wm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ft,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,y){return _?new OffscreenCanvas(C,y):or("canvas")}function m(C,y,G){let tt=1;const ot=_e(C);if((ot.width>G||ot.height>G)&&(tt=G/Math.max(ot.width,ot.height)),tt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ct=Math.floor(tt*ot.width),ft=Math.floor(tt*ot.height);h===void 0&&(h=S(ct,ft));const $=y?S(ct,ft):h;return $.width=ct,$.height=ft,$.getContext("2d").drawImage(C,0,0,ct,ft),Nt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+ct+"x"+ft+")."),$}else return"data"in C&&Nt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),C;return C}function p(C){return C.generateMipmaps}function x(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,y,G,tt,ot,ct=!1){if(C!==null){if(i[C]!==void 0)return i[C];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ft;tt&&(ft=t.get("EXT_texture_norm16"),ft||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=y;if(y===i.RED&&(G===i.FLOAT&&($=i.R32F),G===i.HALF_FLOAT&&($=i.R16F),G===i.UNSIGNED_BYTE&&($=i.R8),G===i.UNSIGNED_SHORT&&ft&&($=ft.R16_EXT),G===i.SHORT&&ft&&($=ft.R16_SNORM_EXT)),y===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.R8UI),G===i.UNSIGNED_SHORT&&($=i.R16UI),G===i.UNSIGNED_INT&&($=i.R32UI),G===i.BYTE&&($=i.R8I),G===i.SHORT&&($=i.R16I),G===i.INT&&($=i.R32I)),y===i.RG&&(G===i.FLOAT&&($=i.RG32F),G===i.HALF_FLOAT&&($=i.RG16F),G===i.UNSIGNED_BYTE&&($=i.RG8),G===i.UNSIGNED_SHORT&&ft&&($=ft.RG16_EXT),G===i.SHORT&&ft&&($=ft.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RG8UI),G===i.UNSIGNED_SHORT&&($=i.RG16UI),G===i.UNSIGNED_INT&&($=i.RG32UI),G===i.BYTE&&($=i.RG8I),G===i.SHORT&&($=i.RG16I),G===i.INT&&($=i.RG32I)),y===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGB8UI),G===i.UNSIGNED_SHORT&&($=i.RGB16UI),G===i.UNSIGNED_INT&&($=i.RGB32UI),G===i.BYTE&&($=i.RGB8I),G===i.SHORT&&($=i.RGB16I),G===i.INT&&($=i.RGB32I)),y===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGBA8UI),G===i.UNSIGNED_SHORT&&($=i.RGBA16UI),G===i.UNSIGNED_INT&&($=i.RGBA32UI),G===i.BYTE&&($=i.RGBA8I),G===i.SHORT&&($=i.RGBA16I),G===i.INT&&($=i.RGBA32I)),y===i.RGB&&(G===i.UNSIGNED_SHORT&&ft&&($=ft.RGB16_EXT),G===i.SHORT&&ft&&($=ft.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),y===i.RGBA){const et=ct?rr:jt.getTransfer(ot);G===i.FLOAT&&($=i.RGBA32F),G===i.HALF_FLOAT&&($=i.RGBA16F),G===i.UNSIGNED_BYTE&&($=et===se?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&ft&&($=ft.RGBA16_EXT),G===i.SHORT&&ft&&($=ft.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function T(C,y){let G;return C?y===null||y===Mn||y===rs?G=i.DEPTH24_STENCIL8:y===gn?G=i.DEPTH32F_STENCIL8:y===ss&&(G=i.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Mn||y===rs?G=i.DEPTH_COMPONENT24:y===gn?G=i.DEPTH_COMPONENT32F:y===ss&&(G=i.DEPTH_COMPONENT16),G}function v(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ue&&C.minFilter!==ze?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){const y=C.target;y.removeEventListener("dispose",A),w(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&d.delete(y)}function g(C){const y=C.target;y.removeEventListener("dispose",g),P(y)}function w(C){const y=n.get(C);if(y.__webglInit===void 0)return;const G=C.source,tt=f.get(G);if(tt){const ot=tt[y.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&R(C),Object.keys(tt).length===0&&f.delete(G)}n.remove(C)}function R(C){const y=n.get(C);i.deleteTexture(y.__webglTexture);const G=C.source,tt=f.get(G);delete tt[y.__cacheKey],o.memory.textures--}function P(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(y.__webglFramebuffer[tt]))for(let ot=0;ot<y.__webglFramebuffer[tt].length;ot++)i.deleteFramebuffer(y.__webglFramebuffer[tt][ot]);else i.deleteFramebuffer(y.__webglFramebuffer[tt]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[tt])}else{if(Array.isArray(y.__webglFramebuffer))for(let tt=0;tt<y.__webglFramebuffer.length;tt++)i.deleteFramebuffer(y.__webglFramebuffer[tt]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let tt=0;tt<y.__webglColorRenderbuffer.length;tt++)y.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[tt]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=C.textures;for(let tt=0,ot=G.length;tt<ot;tt++){const ct=n.get(G[tt]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),o.memory.textures--),n.remove(G[tt])}n.remove(C)}let N=0;function z(){N=0}function V(){return N}function F(C){N=C}function H(){const C=N;return C>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function I(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function U(C,y){const G=n.get(C);if(C.isVideoTexture&&de(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){const tt=C.image;if(tt===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(G,C,y);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+y)}function q(C,y){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){wt(G,C,y);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+y)}function Z(C,y){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){wt(G,C,y);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+y)}function it(C,y){const G=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&G.__version!==C.version){At(G,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+y)}const at={[is]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[po]:i.MIRRORED_REPEAT},Et={[Ue]:i.NEAREST,[ih]:i.NEAREST_MIPMAP_NEAREST,[ps]:i.NEAREST_MIPMAP_LINEAR,[ze]:i.LINEAR,[wr]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},Dt={[oh]:i.NEVER,[dh]:i.ALWAYS,[ah]:i.LESS,[la]:i.LEQUAL,[ch]:i.EQUAL,[ha]:i.GEQUAL,[lh]:i.GREATER,[hh]:i.NOTEQUAL};function Pt(C,y){if(y.type===gn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ze||y.magFilter===wr||y.magFilter===ps||y.magFilter===si||y.minFilter===ze||y.minFilter===wr||y.minFilter===ps||y.minFilter===si)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,at[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,at[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,at[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Et[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Et[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Dt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ue||y.minFilter!==ps&&y.minFilter!==si||y.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function J(C,y){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));const tt=y.source;let ot=f.get(tt);ot===void 0&&(ot={},f.set(tt,ot));const ct=I(y);if(ct!==C.__cacheKey){ot[ct]===void 0&&(ot[ct]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ot[ct].usedTimes++;const ft=ot[C.__cacheKey];ft!==void 0&&(ot[C.__cacheKey].usedTimes--,ft.usedTimes===0&&R(y)),C.__cacheKey=ct,C.__webglTexture=ot[ct].texture}return G}function pt(C,y,G){return Math.floor(Math.floor(C/G)/y)}function nt(C,y,G,tt){const ct=C.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,G,tt,y.data);else{ct.sort((St,dt)=>St.start-dt.start);let ft=0;for(let St=1;St<ct.length;St++){const dt=ct[ft],lt=ct[St],Bt=dt.start+dt.count,Gt=pt(lt.start,y.width,4),te=pt(dt.start,y.width,4);lt.start<=Bt+1&&Gt===te&&pt(lt.start+lt.count-1,y.width,4)===Gt?dt.count=Math.max(dt.count,lt.start+lt.count-dt.start):(++ft,ct[ft]=lt)}ct.length=ft+1;const $=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),vt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let St=0,dt=ct.length;St<dt;St++){const lt=ct[St],Bt=Math.floor(lt.start/4),Gt=Math.ceil(lt.count/4),te=Bt%y.width,O=Math.floor(Bt/y.width),ht=Gt,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,te),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,te,O,ht,Q,G,tt,y.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function wt(C,y,G){let tt=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(tt=i.TEXTURE_3D);const ot=J(C,y),ct=y.source;e.bindTexture(tt,C.__webglTexture,i.TEXTURE0+G);const ft=n.get(ct);if(ct.version!==ft.__version||ot===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const Q=jt.getPrimaries(jt.workingColorSpace),Mt=y.colorSpace===Vn?null:jt.getPrimaries(y.colorSpace),ut=y.colorSpace===Vn||Q===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let et=m(y.image,!1,s.maxTextureSize);et=mt(y,et);const vt=r.convert(y.format,y.colorSpace),St=r.convert(y.type);let dt=M(y.internalFormat,vt,St,y.normalized,y.colorSpace,y.isVideoTexture);Pt(tt,y);let lt;const Bt=y.mipmaps,Gt=y.isVideoTexture!==!0,te=ft.__version===void 0||ot===!0,O=ct.dataReady,ht=v(y,et);if(y.isDepthTexture)dt=T(y.format===ri,y.type),te&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,dt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,dt,et.width,et.height,0,vt,St,null));else if(y.isDataTexture)if(Bt.length>0){Gt&&te&&e.texStorage2D(i.TEXTURE_2D,ht,dt,Bt[0].width,Bt[0].height);for(let Q=0,Mt=Bt.length;Q<Mt;Q++)lt=Bt[Q],Gt?O&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,lt.width,lt.height,vt,St,lt.data):e.texImage2D(i.TEXTURE_2D,Q,dt,lt.width,lt.height,0,vt,St,lt.data);y.generateMipmaps=!1}else Gt?(te&&e.texStorage2D(i.TEXTURE_2D,ht,dt,et.width,et.height),O&&nt(y,et,vt,St)):e.texImage2D(i.TEXTURE_2D,0,dt,et.width,et.height,0,vt,St,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Gt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,dt,Bt[0].width,Bt[0].height,et.depth);for(let Q=0,Mt=Bt.length;Q<Mt;Q++)if(lt=Bt[Q],y.format!==cn)if(vt!==null)if(Gt){if(O)if(y.layerUpdates.size>0){const ut=cc(lt.width,lt.height,y.format,y.type);for(const rt of y.layerUpdates){const Ct=lt.data.subarray(rt*ut/lt.data.BYTES_PER_ELEMENT,(rt+1)*ut/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,rt,lt.width,lt.height,1,vt,Ct)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,lt.width,lt.height,et.depth,vt,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,dt,lt.width,lt.height,et.depth,0,lt.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,lt.width,lt.height,et.depth,vt,St,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,dt,lt.width,lt.height,et.depth,0,vt,St,lt.data)}else{Gt&&te&&e.texStorage2D(i.TEXTURE_2D,ht,dt,Bt[0].width,Bt[0].height);for(let Q=0,Mt=Bt.length;Q<Mt;Q++)lt=Bt[Q],y.format!==cn?vt!==null?Gt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,lt.width,lt.height,vt,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,dt,lt.width,lt.height,0,lt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?O&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,lt.width,lt.height,vt,St,lt.data):e.texImage2D(i.TEXTURE_2D,Q,dt,lt.width,lt.height,0,vt,St,lt.data)}else if(y.isDataArrayTexture)if(Gt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,dt,et.width,et.height,et.depth),O)if(y.layerUpdates.size>0){const Q=cc(et.width,et.height,y.format,y.type);for(const Mt of y.layerUpdates){const ut=et.data.subarray(Mt*Q/et.data.BYTES_PER_ELEMENT,(Mt+1)*Q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Mt,et.width,et.height,1,vt,St,ut)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,vt,St,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,et.width,et.height,et.depth,0,vt,St,et.data);else if(y.isData3DTexture)Gt?(te&&e.texStorage3D(i.TEXTURE_3D,ht,dt,et.width,et.height,et.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,vt,St,et.data)):e.texImage3D(i.TEXTURE_3D,0,dt,et.width,et.height,et.depth,0,vt,St,et.data);else if(y.isFramebufferTexture){if(te)if(Gt)e.texStorage2D(i.TEXTURE_2D,ht,dt,et.width,et.height);else{let Q=et.width,Mt=et.height;for(let ut=0;ut<ht;ut++)e.texImage2D(i.TEXTURE_2D,ut,dt,Q,Mt,0,vt,St,null),Q>>=1,Mt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){const Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),et.parentNode!==Q){Q.appendChild(et),d.add(y),Q.onpaint=kt=>{const Se=kt.changedElements;for(const oe of d)Se.includes(oe.image)&&(oe.needsUpdate=!0)},Q.requestPaint();return}const Mt=0,ut=i.RGBA,rt=i.RGBA,Ct=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Mt,ut,rt,Ct,et),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(Gt&&te){const Q=_e(Bt[0]);e.texStorage2D(i.TEXTURE_2D,ht,dt,Q.width,Q.height)}for(let Q=0,Mt=Bt.length;Q<Mt;Q++)lt=Bt[Q],Gt?O&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,vt,St,lt):e.texImage2D(i.TEXTURE_2D,Q,dt,vt,St,lt);y.generateMipmaps=!1}else if(Gt){if(te){const Q=_e(et);e.texStorage2D(i.TEXTURE_2D,ht,dt,Q.width,Q.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,St,et)}else e.texImage2D(i.TEXTURE_2D,0,dt,vt,St,et);p(y)&&x(tt),ft.__version=ct.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function At(C,y,G){if(y.image.length!==6)return;const tt=J(C,y),ot=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);const ct=n.get(ot);if(ot.version!==ct.__version||tt===!0){e.activeTexture(i.TEXTURE0+G);const ft=jt.getPrimaries(jt.workingColorSpace),$=y.colorSpace===Vn?null:jt.getPrimaries(y.colorSpace),et=y.colorSpace===Vn||ft===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const vt=y.isCompressedTexture||y.image[0].isCompressedTexture,St=y.image[0]&&y.image[0].isDataTexture,dt=[];for(let rt=0;rt<6;rt++)!vt&&!St?dt[rt]=m(y.image[rt],!0,s.maxCubemapSize):dt[rt]=St?y.image[rt].image:y.image[rt],dt[rt]=mt(y,dt[rt]);const lt=dt[0],Bt=r.convert(y.format,y.colorSpace),Gt=r.convert(y.type),te=M(y.internalFormat,Bt,Gt,y.normalized,y.colorSpace),O=y.isVideoTexture!==!0,ht=ct.__version===void 0||tt===!0,Q=ot.dataReady;let Mt=v(y,lt);Pt(i.TEXTURE_CUBE_MAP,y);let ut;if(vt){O&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,te,lt.width,lt.height);for(let rt=0;rt<6;rt++){ut=dt[rt].mipmaps;for(let Ct=0;Ct<ut.length;Ct++){const kt=ut[Ct];y.format!==cn?Bt!==null?O?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ct,0,0,kt.width,kt.height,Bt,kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ct,te,kt.width,kt.height,0,kt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ct,0,0,kt.width,kt.height,Bt,Gt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ct,te,kt.width,kt.height,0,Bt,Gt,kt.data)}}}else{if(ut=y.mipmaps,O&&ht){ut.length>0&&Mt++;const rt=_e(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,te,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(St){O?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,dt[rt].width,dt[rt].height,Bt,Gt,dt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,te,dt[rt].width,dt[rt].height,0,Bt,Gt,dt[rt].data);for(let Ct=0;Ct<ut.length;Ct++){const Se=ut[Ct].image[rt].image;O?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ct+1,0,0,Se.width,Se.height,Bt,Gt,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ct+1,te,Se.width,Se.height,0,Bt,Gt,Se.data)}}else{O?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Bt,Gt,dt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,te,Bt,Gt,dt[rt]);for(let Ct=0;Ct<ut.length;Ct++){const kt=ut[Ct];O?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ct+1,0,0,Bt,Gt,kt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ct+1,te,Bt,Gt,kt.image[rt])}}}p(y)&&x(i.TEXTURE_CUBE_MAP),ct.__version=ot.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Ut(C,y,G,tt,ot,ct){const ft=r.convert(G.format,G.colorSpace),$=r.convert(G.type),et=M(G.internalFormat,ft,$,G.normalized,G.colorSpace),vt=n.get(y),St=n.get(G);if(St.__renderTarget=y,!vt.__hasExternalTextures){const dt=Math.max(1,y.width>>ct),lt=Math.max(1,y.height>>ct);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,ct,et,dt,lt,y.depth,0,ft,$,null):e.texImage2D(ot,ct,et,dt,lt,0,ft,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),qt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,ot,St.__webglTexture,0,Ce(y)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,ot,St.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(C,y,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){const tt=y.depthTexture,ot=tt&&tt.isDepthTexture?tt.type:null,ct=T(y.stencilBuffer,ot),ft=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;qt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce(y),ct,y.width,y.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce(y),ct,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ct,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,C)}else{const tt=y.textures;for(let ot=0;ot<tt.length;ot++){const ct=tt[ot],ft=r.convert(ct.format,ct.colorSpace),$=r.convert(ct.type),et=M(ct.internalFormat,ft,$,ct.normalized,ct.colorSpace);qt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce(y),et,y.width,y.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce(y),et,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,et,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Yt(C,y,G){const tt=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ot=n.get(y.depthTexture);if(ot.__renderTarget=y,(!ot.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),tt){if(ot.__webglInit===void 0&&(ot.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),ot.__webglTexture===void 0){ot.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,y.depthTexture);const vt=r.convert(y.depthTexture.format),St=r.convert(y.depthTexture.type);let dt;y.depthTexture.format===In?dt=i.DEPTH_COMPONENT24:y.depthTexture.format===ri&&(dt=i.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,dt,y.width,y.height,0,vt,St,null)}}else U(y.depthTexture,0);const ct=ot.__webglTexture,ft=Ce(y),$=tt?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,et=y.depthTexture.format===ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===In)qt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,$,ct,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,et,$,ct,0);else if(y.depthTexture.format===ri)qt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,$,ct,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,et,$,ct,0);else throw new Error("Unknown depthTexture format")}function re(C){const y=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const tt=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),tt){const ot=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,tt.removeEventListener("dispose",ot)};tt.addEventListener("dispose",ot),y.__depthDisposeCallback=ot}y.__boundDepthTexture=tt}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(G)for(let tt=0;tt<6;tt++)Yt(y.__webglFramebuffer[tt],C,tt);else{const tt=C.texture.mipmaps;tt&&tt.length>0?Yt(y.__webglFramebuffer[0],C,0):Yt(y.__webglFramebuffer,C,0)}else if(G){y.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[tt]),y.__webglDepthbuffer[tt]===void 0)y.__webglDepthbuffer[tt]=i.createRenderbuffer(),pe(y.__webglDepthbuffer[tt],C,!1);else{const ot=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,ct)}}else{const tt=C.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),pe(y.__webglDepthbuffer,C,!1);else{const ot=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(C,y,G){const tt=n.get(C);y!==void 0&&Ut(tt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&re(C)}function Xt(C){const y=C.texture,G=n.get(C),tt=n.get(y);C.addEventListener("dispose",g);const ot=C.textures,ct=C.isWebGLCubeRenderTarget===!0,ft=ot.length>1;if(ft||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=y.version,o.memory.textures++),ct){G.__webglFramebuffer=[];for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[$]=[];for(let et=0;et<y.mipmaps.length;et++)G.__webglFramebuffer[$][et]=i.createFramebuffer()}else G.__webglFramebuffer[$]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let $=0;$<y.mipmaps.length;$++)G.__webglFramebuffer[$]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ft)for(let $=0,et=ot.length;$<et;$++){const vt=n.get(ot[$]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&qt(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let $=0;$<ot.length;$++){const et=ot[$];G.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[$]);const vt=r.convert(et.format,et.colorSpace),St=r.convert(et.type),dt=M(et.internalFormat,vt,St,et.normalized,et.colorSpace,C.isXRRenderTarget===!0),lt=Ce(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,dt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,G.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,y);for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)Ut(G.__webglFramebuffer[$][et],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,et);else Ut(G.__webglFramebuffer[$],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(y)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let $=0,et=ot.length;$<et;$++){const vt=ot[$],St=n.get(vt);let dt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,St.__webglTexture),Pt(dt,vt),Ut(G.__webglFramebuffer,C,vt,i.COLOR_ATTACHMENT0+$,dt,0),p(vt)&&x(dt)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&($=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,tt.__webglTexture),Pt($,y),y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)Ut(G.__webglFramebuffer[et],C,y,i.COLOR_ATTACHMENT0,$,et);else Ut(G.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,$,0);p(y)&&x($),e.unbindTexture()}C.depthBuffer&&re(C)}function Ae(C){const y=C.textures;for(let G=0,tt=y.length;G<tt;G++){const ot=y[G];if(p(ot)){const ct=E(C),ft=n.get(ot).__webglTexture;e.bindTexture(ct,ft),x(ct),e.unbindTexture()}}}const me=[],Ye=[];function B(C){if(C.samples>0){if(qt(C)===!1){const y=C.textures,G=C.width,tt=C.height;let ot=i.COLOR_BUFFER_BIT;const ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(C),$=y.length>1;if($)for(let vt=0;vt<y.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);const et=C.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let vt=0;vt<y.length;vt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[vt]);const St=n.get(y[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,St,0)}i.blitFramebuffer(0,0,G,tt,0,0,G,tt,ot,i.NEAREST),c===!0&&(me.length=0,Ye.length=0,me.push(i.COLOR_ATTACHMENT0+vt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(me.push(ct),Ye.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ye)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let vt=0;vt<y.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[vt]);const St=n.get(y[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,St,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ce(C){return Math.min(s.maxSamples,C.samples)}function qt(C){const y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function de(C){const y=o.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function mt(C,y){const G=C.colorSpace,tt=C.format,ot=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==sr&&G!==Vn&&(jt.getTransfer(G)===se?(tt!==cn||ot!==Je)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",G)),y}function _e(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.getTextureUnits=V,this.setTextureUnits=F,this.setTexture2D=U,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=it,this.rebindTextures=fe,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Xm(i,t){function e(n,s=Vn){let r;const o=jt.getTransfer(s);if(n===Je)return i.UNSIGNED_BYTE;if(n===sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qc)return i.BYTE;if(n===jc)return i.SHORT;if(n===ss)return i.UNSIGNED_SHORT;if(n===ia)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===Pn)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===Jc)return i.RGB;if(n===cn)return i.RGBA;if(n===In)return i.DEPTH_COMPONENT;if(n===ri)return i.DEPTH_STENCIL;if(n===Qc)return i.RED;if(n===oa)return i.RED_INTEGER;if(n===ci)return i.RG;if(n===aa)return i.RG_INTEGER;if(n===ca)return i.RGBA_INTEGER;if(n===qs||n===js||n===$s||n===Ks)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mo||n===go||n===_o||n===xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vo||n===Mo||n===yo||n===So||n===bo||n===nr||n===wo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vo||n===Mo)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===So)return r.COMPRESSED_R11_EAC;if(n===bo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===nr)return r.COMPRESSED_RG11_EAC;if(n===wo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Eo||n===To||n===Ao||n===Co||n===Ro||n===Po||n===Io||n===Lo||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===Bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Eo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===To)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ao)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Co)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Po)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Io)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===No)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===ko||n===Ho)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zo)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Go||n===Vo||n===ir||n===Wo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ir)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Ym=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qm=`
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

}`;class jm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new dl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ln({vertexShader:Ym,fragmentShader:qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new L(new ne(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $m extends di{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,_=null;const S=typeof XRWebGLBinding<"u",m=new jm,p={},x=e.getContextAttributes();let E=null,M=null;const T=[],v=[],A=new Ft;let g=null;const w=new Ke;w.viewport=new Me;const R=new Ke;R.viewport=new Me;const P=[w,R],N=new id;let z=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let pt=T[J];return pt===void 0&&(pt=new Lr,T[J]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(J){let pt=T[J];return pt===void 0&&(pt=new Lr,T[J]=pt),pt.getGripSpace()},this.getHand=function(J){let pt=T[J];return pt===void 0&&(pt=new Lr,T[J]=pt),pt.getHandSpace()};function F(J){const pt=v.indexOf(J.inputSource);if(pt===-1)return;const nt=T[pt];nt!==void 0&&(nt.update(J.inputSource,J.frame,l||o),nt.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",I);for(let J=0;J<T.length;J++){const pt=v[J];pt!==null&&(v[J]=null,T[J].disconnect(pt))}z=null,V=null,m.reset();for(const J in p)delete p[J];t.setRenderTarget(E),f=null,h=null,d=null,s=null,M=null,Pt.stop(),n.isPresenting=!1,t.setPixelRatio(g),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(A),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,wt=null,At=null;x.depth&&(At=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=x.stencil?ri:In,wt=x.stencil?rs:Mn);const Ut={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ut),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new vn(h.textureWidth,h.textureHeight,{format:cn,type:Je,depthTexture:new Oi(h.textureWidth,h.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const nt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new vn(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Je,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Pt.setContext(s),Pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function I(J){for(let pt=0;pt<J.removed.length;pt++){const nt=J.removed[pt],wt=v.indexOf(nt);wt>=0&&(v[wt]=null,T[wt].disconnect(nt))}for(let pt=0;pt<J.added.length;pt++){const nt=J.added[pt];let wt=v.indexOf(nt);if(wt===-1){for(let Ut=0;Ut<T.length;Ut++)if(Ut>=v.length){v.push(nt),wt=Ut;break}else if(v[Ut]===null){v[Ut]=nt,wt=Ut;break}if(wt===-1)break}const At=T[wt];At&&At.connect(nt)}}const U=new D,q=new D;function Z(J,pt,nt){U.setFromMatrixPosition(pt.matrixWorld),q.setFromMatrixPosition(nt.matrixWorld);const wt=U.distanceTo(q),At=pt.projectionMatrix.elements,Ut=nt.projectionMatrix.elements,pe=At[14]/(At[10]-1),Yt=At[14]/(At[10]+1),re=(At[9]+1)/At[5],fe=(At[9]-1)/At[5],Xt=(At[8]-1)/At[0],Ae=(Ut[8]+1)/Ut[0],me=pe*Xt,Ye=pe*Ae,B=wt/(-Xt+Ae),Ce=B*-Xt;if(pt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ce),J.translateZ(B),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),At[10]===-1)J.projectionMatrix.copy(pt.projectionMatrix),J.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const qt=pe+B,de=Yt+B,mt=me-Ce,_e=Ye+(wt-Ce),C=re*Yt/de*qt,y=fe*Yt/de*qt;J.projectionMatrix.makePerspective(mt,_e,C,y,qt,de),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function it(J,pt){pt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(pt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let pt=J.near,nt=J.far;m.texture!==null&&(m.depthNear>0&&(pt=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),N.near=R.near=w.near=pt,N.far=R.far=w.far=nt,(z!==N.near||V!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),z=N.near,V=N.far),N.layers.mask=J.layers.mask|6,w.layers.mask=N.layers.mask&-5,R.layers.mask=N.layers.mask&-3;const wt=J.parent,At=N.cameras;it(N,wt);for(let Ut=0;Ut<At.length;Ut++)it(At[Ut],wt);At.length===2?Z(N,w,R):N.projectionMatrix.copy(w.projectionMatrix),at(J,N,wt)};function at(J,pt,nt){nt===null?J.matrix.copy(pt.matrixWorld):(J.matrix.copy(nt.matrixWorld),J.matrix.invert(),J.matrix.multiply(pt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(pt.projectionMatrix),J.projectionMatrixInverse.copy(pt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=jo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(J){c=J,h!==null&&(h.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(J){return p[J]};let Et=null;function Dt(J,pt){if(u=pt.getViewerPose(l||o),_=pt,u!==null){const nt=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let wt=!1;nt.length!==N.cameras.length&&(N.cameras.length=0,wt=!0);for(let Yt=0;Yt<nt.length;Yt++){const re=nt[Yt];let fe=null;if(f!==null)fe=f.getViewport(re);else{const Ae=d.getViewSubImage(h,re);fe=Ae.viewport,Yt===0&&(t.setRenderTargetTextures(M,Ae.colorTexture,Ae.depthStencilTexture),t.setRenderTarget(M))}let Xt=P[Yt];Xt===void 0&&(Xt=new Ke,Xt.layers.enable(Yt),Xt.viewport=new Me,P[Yt]=Xt),Xt.matrix.fromArray(re.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(re.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(fe.x,fe.y,fe.width,fe.height),Yt===0&&(N.matrix.copy(Xt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),wt===!0&&N.cameras.push(Xt)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const Yt=d.getDepthInformation(nt[0]);Yt&&Yt.isValid&&Yt.texture&&m.init(Yt,s.renderState)}if(At&&At.includes("camera-access")&&S){t.state.unbindTexture(),d=n.getBinding();for(let Yt=0;Yt<nt.length;Yt++){const re=nt[Yt].camera;if(re){let fe=p[re];fe||(fe=new dl,p[re]=fe);const Xt=d.getCameraImage(re);fe.sourceTexture=Xt}}}}for(let nt=0;nt<T.length;nt++){const wt=v[nt],At=T[nt];wt!==null&&At!==void 0&&At.update(wt,pt,l||o)}Et&&Et(J,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),_=null}const Pt=new ml;Pt.setAnimationLoop(Dt),this.setAnimationLoop=function(J){Et=J},this.dispose=function(){}}}const Km=new ge,Sl=new zt;Sl.set(-1,0,0,0,1,0,0,0,1);function Zm(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ul(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,E,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),E=x.envMap,M=x.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Km.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Sl),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jm(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,E){const M=E.program;n.uniformBlockBinding(x,M)}function l(x,E){let M=s[x.id];M===void 0&&(_(x),M=u(x),s[x.id]=M,x.addEventListener("dispose",m));const T=E.program;n.updateUBOMapping(x,T);const v=t.render.frame;r[x.id]!==v&&(h(x),r[x.id]=v)}function u(x){const E=d();x.__bindingPointIndex=E;const M=i.createBuffer(),T=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const E=s[x.id],M=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let v=0,A=M.length;v<A;v++){const g=Array.isArray(M[v])?M[v]:[M[v]];for(let w=0,R=g.length;w<R;w++){const P=g[w];if(f(P,v,w,T)===!0){const N=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let F=0;F<z.length;F++){const H=z[F],I=S(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,N+V,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):ArrayBuffer.isView(H)?P.__data.set(new H.constructor(H.buffer,H.byteOffset,P.__data.length)):(H.toArray(P.__data,V),V+=I.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,E,M,T){const v=x.value,A=E+"_"+M;if(T[A]===void 0)return typeof v=="number"||typeof v=="boolean"?T[A]=v:ArrayBuffer.isView(v)?T[A]=v.slice():T[A]=v.clone(),!0;{const g=T[A];if(typeof v=="number"||typeof v=="boolean"){if(g!==v)return T[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(g.equals(v)===!1)return g.copy(v),!0}}return!1}function _(x){const E=x.uniforms;let M=0;const T=16;for(let A=0,g=E.length;A<g;A++){const w=Array.isArray(E[A])?E[A]:[E[A]];for(let R=0,P=w.length;R<P;R++){const N=w[R],z=Array.isArray(N.value)?N.value:[N.value];for(let V=0,F=z.length;V<F;V++){const H=z[V],I=S(H),U=M%T,q=U%I.boundary,Z=U+q;M+=q,Z!==0&&T-Z<I.storage&&(M+=T-Z),N.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=I.storage}}}const v=M%T;return v>0&&(M+=T-v),x.__size=M,x.__cache={},this}function S(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",x),E}function m(x){const E=x.target;E.removeEventListener("dispose",m);const M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}const Qm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fn=null;function t0(){return fn===null&&(fn=new Oh(Qm,16,16,ci,Pn),fn.name="DFG_LUT",fn.minFilter=ze,fn.magFilter=ze,fn.wrapS=An,fn.wrapT=An,fn.generateMipmaps=!1,fn.needsUpdate=!0),fn}class e0{constructor(t={}){const{canvas:e=fh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Je}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const S=f,m=new Set([ca,aa,oa]),p=new Set([Je,Mn,ss,rs,sa,ra]),x=new Uint32Array(4),E=new Int32Array(4),M=new D;let T=null,v=null;const A=[],g=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,N=null;this._outputColorSpace=Xe;let z=0,V=0,F=null,H=-1,I=null;const U=new Me,q=new Me;let Z=null;const it=new Rt(0);let at=0,Et=e.width,Dt=e.height,Pt=1,J=null,pt=null;const nt=new Me(0,0,Et,Dt),wt=new Me(0,0,Et,Dt);let At=!1;const Ut=new pa;let pe=!1,Yt=!1;const re=new ge,fe=new D,Xt=new Me,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let me=!1;function Ye(){return F===null?Pt:1}let B=n;function Ce(b,k){return e.getContext(b,k)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ea}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",kt,!1),B===null){const k="webgl2";if(B=Ce(k,b),B===null)throw Ce(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Kt("WebGLRenderer: "+b.message),b}let qt,de,mt,_e,C,y,G,tt,ot,ct,ft,$,et,vt,St,dt,lt,Bt,Gt,te,O,ht,Q;function Mt(){qt=new tp(B),qt.init(),O=new Xm(B,qt),de=new Yf(B,qt,t,O),mt=new Vm(B,qt),de.reversedDepthBuffer&&h&&mt.buffers.depth.setReversed(!0),_e=new ip(B),C=new Rm,y=new Wm(B,qt,mt,C,de,O,_e),G=new Qf(R),tt=new od(B),ht=new Wf(B,tt),ot=new ep(B,tt,_e,ht),ct=new rp(B,ot,tt,ht,_e),Bt=new sp(B,de,y),St=new qf(C),ft=new Cm(R,G,qt,de,ht,St),$=new Zm(R,C),et=new Im,vt=new Om(qt),lt=new Vf(R,G,mt,ct,_,c),dt=new Gm(R,ct,de),Q=new Jm(B,_e,de,mt),Gt=new Xf(B,qt,_e),te=new np(B,qt,_e),_e.programs=ft.programs,R.capabilities=de,R.extensions=qt,R.properties=C,R.renderLists=et,R.shadowMap=dt,R.state=mt,R.info=_e}Mt(),S!==Je&&(w=new ap(S,e.width,e.height,s,r));const ut=new $m(R,B);this.xr=ut,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=qt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=qt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Pt},this.setPixelRatio=function(b){b!==void 0&&(Pt=b,this.setSize(Et,Dt,!1))},this.getSize=function(b){return b.set(Et,Dt)},this.setSize=function(b,k,Y=!0){if(ut.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=b,Dt=k,e.width=Math.floor(b*Pt),e.height=Math.floor(k*Pt),Y===!0&&(e.style.width=b+"px",e.style.height=k+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(Et*Pt,Dt*Pt).floor()},this.setDrawingBufferSize=function(b,k,Y){Et=b,Dt=k,Pt=Y,e.width=Math.floor(b*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,b,k)},this.setEffects=function(b){if(S===Je){Kt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let k=0;k<b.length;k++)if(b[k].isOutputPass===!0){Nt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(U)},this.getViewport=function(b){return b.copy(nt)},this.setViewport=function(b,k,Y,W){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,k,Y,W),mt.viewport(U.copy(nt).multiplyScalar(Pt).round())},this.getScissor=function(b){return b.copy(wt)},this.setScissor=function(b,k,Y,W){b.isVector4?wt.set(b.x,b.y,b.z,b.w):wt.set(b,k,Y,W),mt.scissor(q.copy(wt).multiplyScalar(Pt).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(b){mt.setScissorTest(At=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){pt=b},this.getClearColor=function(b){return b.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,Y=!0){let W=0;if(b){let X=!1;if(F!==null){const xt=F.texture.format;X=m.has(xt)}if(X){const xt=F.texture.type,bt=p.has(xt),_t=lt.getClearColor(),Tt=lt.getClearAlpha(),It=_t.r,Ht=_t.g,Wt=_t.b;bt?(x[0]=It,x[1]=Ht,x[2]=Wt,x[3]=Tt,B.clearBufferuiv(B.COLOR,0,x)):(E[0]=It,E[1]=Ht,E[2]=Wt,E[3]=Tt,B.clearBufferiv(B.COLOR,0,E))}else W|=B.COLOR_BUFFER_BIT}k&&(W|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),N=b},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",kt,!1),lt.dispose(),et.dispose(),vt.dispose(),C.dispose(),G.dispose(),ct.dispose(),ht.dispose(),Q.dispose(),ft.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",wa),ut.removeEventListener("sessionend",Ea),Kn.stop()};function rt(b){b.preventDefault(),ar("WebGLRenderer: Context Lost."),P=!0}function Ct(){ar("WebGLRenderer: Context Restored."),P=!1;const b=_e.autoReset,k=dt.enabled,Y=dt.autoUpdate,W=dt.needsUpdate,X=dt.type;Mt(),_e.autoReset=b,dt.enabled=k,dt.autoUpdate=Y,dt.needsUpdate=W,dt.type=X}function kt(b){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Se(b){const k=b.target;k.removeEventListener("dispose",Se),oe(k)}function oe(b){yn(b),C.remove(b)}function yn(b){const k=C.get(b).programs;k!==void 0&&(k.forEach(function(Y){ft.releaseProgram(Y)}),b.isShaderMaterial&&ft.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,Y,W,X,xt){k===null&&(k=Ae);const bt=X.isMesh&&X.matrixWorld.determinant()<0,_t=Rl(b,k,Y,W,X);mt.setMaterial(W,bt);let Tt=Y.index,It=1;if(W.wireframe===!0){if(Tt=ot.getWireframeAttribute(Y),Tt===void 0)return;It=2}const Ht=Y.drawRange,Wt=Y.attributes.position;let Lt=Ht.start*It,ae=(Ht.start+Ht.count)*It;xt!==null&&(Lt=Math.max(Lt,xt.start*It),ae=Math.min(ae,(xt.start+xt.count)*It)),Tt!==null?(Lt=Math.max(Lt,0),ae=Math.min(ae,Tt.count)):Wt!=null&&(Lt=Math.max(Lt,0),ae=Math.min(ae,Wt.count));const be=ae-Lt;if(be<0||be===1/0)return;ht.setup(X,W,_t,Y,Tt);let xe,le=Gt;if(Tt!==null&&(xe=tt.get(Tt),le=te,le.setIndex(xe)),X.isMesh)W.wireframe===!0?(mt.setLineWidth(W.wireframeLinewidth*Ye()),le.setMode(B.LINES)):le.setMode(B.TRIANGLES);else if(X.isLine){let Ne=W.linewidth;Ne===void 0&&(Ne=1),mt.setLineWidth(Ne*Ye()),X.isLineSegments?le.setMode(B.LINES):X.isLineLoop?le.setMode(B.LINE_LOOP):le.setMode(B.LINE_STRIP)}else X.isPoints?le.setMode(B.POINTS):X.isSprite&&le.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(qt.get("WEBGL_multi_draw"))le.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ne=X._multiDrawStarts,yt=X._multiDrawCounts,qe=X._multiDrawCount,Jt=Tt?tt.get(Tt).bytesPerElement:1,Qe=C.get(W).currentProgram.getUniforms();for(let dn=0;dn<qe;dn++)Qe.setValue(B,"_gl_DrawID",dn),le.render(Ne[dn]/Jt,yt[dn])}else if(X.isInstancedMesh)le.renderInstances(Lt,be,X.count);else if(Y.isInstancedBufferGeometry){const Ne=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,yt=Math.min(Y.instanceCount,Ne);le.renderInstances(Lt,be,yt)}else le.render(Lt,be)};function hn(b,k,Y){b.transparent===!0&&b.side===Ze&&b.forceSinglePass===!1?(b.side=We,b.needsUpdate=!0,fs(b,k,Y),b.side=qn,b.needsUpdate=!0,fs(b,k,Y),b.side=Ze):fs(b,k,Y)}this.compile=function(b,k,Y=null){Y===null&&(Y=b),v=vt.get(Y),v.init(k),g.push(v),Y.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),b!==Y&&b.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),v.setupLights();const W=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xt=X.material;if(xt)if(Array.isArray(xt))for(let bt=0;bt<xt.length;bt++){const _t=xt[bt];hn(_t,Y,X),W.add(_t)}else hn(xt,Y,X),W.add(xt)}),v=g.pop(),W},this.compileAsync=function(b,k,Y=null){const W=this.compile(b,k,Y);return new Promise(X=>{function xt(){if(W.forEach(function(bt){C.get(bt).currentProgram.isReady()&&W.delete(bt)}),W.size===0){X(b);return}setTimeout(xt,10)}qt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Mr=null;function Al(b){Mr&&Mr(b)}function wa(){Kn.stop()}function Ea(){Kn.start()}const Kn=new ml;Kn.setAnimationLoop(Al),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(b){Mr=b,ut.setAnimationLoop(b),b===null?Kn.stop():Kn.start()},ut.addEventListener("sessionstart",wa),ut.addEventListener("sessionend",Ea),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(b,k);const Y=ut.enabled===!0&&ut.isPresenting===!0,W=w!==null&&(F===null||Y)&&w.begin(R,F);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(k),k=ut.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,k,F),v=vt.get(b,g.length),v.init(k),v.state.textureUnits=y.getTextureUnits(),g.push(v),re.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ut.setFromProjectionMatrix(re,_n,k.reversedDepth),Yt=this.localClippingEnabled,pe=St.init(this.clippingPlanes,Yt),T=et.get(b,A.length),T.init(),A.push(T),ut.enabled===!0&&ut.isPresenting===!0){const bt=R.xr.getDepthSensingMesh();bt!==null&&yr(bt,k,-1/0,R.sortObjects)}yr(b,k,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(J,pt),me=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,me&&lt.addToRenderList(T,b),this.info.render.frame++,pe===!0&&St.beginShadows();const X=v.state.shadowsArray;if(dt.render(X,b,k),pe===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&w.hasRenderPass())===!1){const bt=T.opaque,_t=T.transmissive;if(v.setupLights(),k.isArrayCamera){const Tt=k.cameras;if(_t.length>0)for(let It=0,Ht=Tt.length;It<Ht;It++){const Wt=Tt[It];Aa(bt,_t,b,Wt)}me&&lt.render(b);for(let It=0,Ht=Tt.length;It<Ht;It++){const Wt=Tt[It];Ta(T,b,Wt,Wt.viewport)}}else _t.length>0&&Aa(bt,_t,b,k),me&&lt.render(b),Ta(T,b,k)}F!==null&&V===0&&(y.updateMultisampleRenderTarget(F),y.updateRenderTargetMipmap(F)),W&&w.end(R),b.isScene===!0&&b.onAfterRender(R,b,k),ht.resetDefaultState(),H=-1,I=null,g.pop(),g.length>0?(v=g[g.length-1],y.setTextureUnits(v.state.textureUnits),pe===!0&&St.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,N!==null&&N.renderEnd()};function yr(b,k,Y,W){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLightProbeGrid)v.pushLightProbeGrid(b);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ut.intersectsSprite(b)){W&&Xt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(re);const bt=ct.update(b),_t=b.material;_t.visible&&T.push(b,bt,_t,Y,Xt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ut.intersectsObject(b))){const bt=ct.update(b),_t=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Xt.copy(b.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Xt.copy(bt.boundingSphere.center)),Xt.applyMatrix4(b.matrixWorld).applyMatrix4(re)),Array.isArray(_t)){const Tt=bt.groups;for(let It=0,Ht=Tt.length;It<Ht;It++){const Wt=Tt[It],Lt=_t[Wt.materialIndex];Lt&&Lt.visible&&T.push(b,bt,Lt,Y,Xt.z,Wt)}}else _t.visible&&T.push(b,bt,_t,Y,Xt.z,null)}}const xt=b.children;for(let bt=0,_t=xt.length;bt<_t;bt++)yr(xt[bt],k,Y,W)}function Ta(b,k,Y,W){const{opaque:X,transmissive:xt,transparent:bt}=b;v.setupLightsView(Y),pe===!0&&St.setGlobalState(R.clippingPlanes,Y),W&&mt.viewport(U.copy(W)),X.length>0&&us(X,k,Y),xt.length>0&&us(xt,k,Y),bt.length>0&&us(bt,k,Y),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Aa(b,k,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[W.id]===void 0){const Lt=qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[W.id]=new vn(1,1,{generateMipmaps:!0,type:Lt?Pn:Je,minFilter:si,samples:Math.max(4,de.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const xt=v.state.transmissionRenderTarget[W.id],bt=W.viewport||U;xt.setSize(bt.z*R.transmissionResolutionScale,bt.w*R.transmissionResolutionScale);const _t=R.getRenderTarget(),Tt=R.getActiveCubeFace(),It=R.getActiveMipmapLevel();R.setRenderTarget(xt),R.getClearColor(it),at=R.getClearAlpha(),at<1&&R.setClearColor(16777215,.5),R.clear(),me&&lt.render(Y);const Ht=R.toneMapping;R.toneMapping=xn;const Wt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),v.setupLightsView(W),pe===!0&&St.setGlobalState(R.clippingPlanes,W),us(b,Y,W),y.updateMultisampleRenderTarget(xt),y.updateRenderTargetMipmap(xt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let ae=0,be=k.length;ae<be;ae++){const xe=k[ae],{object:le,geometry:Ne,material:yt,group:qe}=xe;if(yt.side===Ze&&le.layers.test(W.layers)){const Jt=yt.side;yt.side=We,yt.needsUpdate=!0,Ca(le,Y,W,Ne,yt,qe),yt.side=Jt,yt.needsUpdate=!0,Lt=!0}}Lt===!0&&(y.updateMultisampleRenderTarget(xt),y.updateRenderTargetMipmap(xt))}R.setRenderTarget(_t,Tt,It),R.setClearColor(it,at),Wt!==void 0&&(W.viewport=Wt),R.toneMapping=Ht}function us(b,k,Y){const W=k.isScene===!0?k.overrideMaterial:null;for(let X=0,xt=b.length;X<xt;X++){const bt=b[X],{object:_t,geometry:Tt,group:It}=bt;let Ht=bt.material;Ht.allowOverride===!0&&W!==null&&(Ht=W),_t.layers.test(Y.layers)&&Ca(_t,k,Y,Tt,Ht,It)}}function Ca(b,k,Y,W,X,xt){b.onBeforeRender(R,k,Y,W,X,xt),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(R,k,Y,W,b,xt),X.transparent===!0&&X.side===Ze&&X.forceSinglePass===!1?(X.side=We,X.needsUpdate=!0,R.renderBufferDirect(Y,k,W,X,b,xt),X.side=qn,X.needsUpdate=!0,R.renderBufferDirect(Y,k,W,X,b,xt),X.side=Ze):R.renderBufferDirect(Y,k,W,X,b,xt),b.onAfterRender(R,k,Y,W,X,xt)}function fs(b,k,Y){k.isScene!==!0&&(k=Ae);const W=C.get(b),X=v.state.lights,xt=v.state.shadowsArray,bt=X.state.version,_t=ft.getParameters(b,X.state,xt,k,Y,v.state.lightProbeGridArray),Tt=ft.getProgramCacheKey(_t);let It=W.programs;W.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,W.fog=k.fog;const Ht=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;W.envMap=G.get(b.envMap||W.environment,Ht),W.envMapRotation=W.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,It===void 0&&(b.addEventListener("dispose",Se),It=new Map,W.programs=It);let Wt=It.get(Tt);if(Wt!==void 0){if(W.currentProgram===Wt&&W.lightsStateVersion===bt)return Pa(b,_t),Wt}else _t.uniforms=ft.getUniforms(b),N!==null&&b.isNodeMaterial&&N.build(b,Y,_t),b.onBeforeCompile(_t,R),Wt=ft.acquireProgram(_t,Tt),It.set(Tt,Wt),W.uniforms=_t.uniforms;const Lt=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=St.uniform),Pa(b,_t),W.needsLights=Il(b),W.lightsStateVersion=bt,W.needsLights&&(Lt.ambientLightColor.value=X.state.ambient,Lt.lightProbe.value=X.state.probe,Lt.directionalLights.value=X.state.directional,Lt.directionalLightShadows.value=X.state.directionalShadow,Lt.spotLights.value=X.state.spot,Lt.spotLightShadows.value=X.state.spotShadow,Lt.rectAreaLights.value=X.state.rectArea,Lt.ltc_1.value=X.state.rectAreaLTC1,Lt.ltc_2.value=X.state.rectAreaLTC2,Lt.pointLights.value=X.state.point,Lt.pointLightShadows.value=X.state.pointShadow,Lt.hemisphereLights.value=X.state.hemi,Lt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Lt.spotLightMatrix.value=X.state.spotLightMatrix,Lt.spotLightMap.value=X.state.spotLightMap,Lt.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=v.state.lightProbeGridArray.length>0,W.currentProgram=Wt,W.uniformsList=null,Wt}function Ra(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=Zs.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Pa(b,k){const Y=C.get(b);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Cl(b,k){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(k.matrixWorld);for(let Y=0,W=b.length;Y<W;Y++){const X=b[Y];if(X.texture!==null&&X.boundingBox.containsPoint(M))return X}return null}function Rl(b,k,Y,W,X){k.isScene!==!0&&(k=Ae),y.resetTextureUnits();const xt=k.fog,bt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?k.environment:null,_t=F===null?R.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:jt.workingColorSpace,Tt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,It=G.get(W.envMap||bt,Tt),Ht=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Wt=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Lt=!!Y.morphAttributes.position,ae=!!Y.morphAttributes.normal,be=!!Y.morphAttributes.color;let xe=xn;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(xe=R.toneMapping);const le=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ne=le!==void 0?le.length:0,yt=C.get(W),qe=v.state.lights;if(pe===!0&&(Yt===!0||b!==I)){const ue=b===I&&W.id===H;St.setState(W,b,ue)}let Jt=!1;W.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==qe.state.version||yt.outputColorSpace!==_t||X.isBatchedMesh&&yt.batching===!1||!X.isBatchedMesh&&yt.batching===!0||X.isBatchedMesh&&yt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&yt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&yt.instancing===!1||!X.isInstancedMesh&&yt.instancing===!0||X.isSkinnedMesh&&yt.skinning===!1||!X.isSkinnedMesh&&yt.skinning===!0||X.isInstancedMesh&&yt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&yt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&yt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&yt.instancingMorph===!1&&X.morphTexture!==null||yt.envMap!==It||W.fog===!0&&yt.fog!==xt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==St.numPlanes||yt.numIntersection!==St.numIntersection)||yt.vertexAlphas!==Ht||yt.vertexTangents!==Wt||yt.morphTargets!==Lt||yt.morphNormals!==ae||yt.morphColors!==be||yt.toneMapping!==xe||yt.morphTargetsCount!==Ne||!!yt.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(Jt=!0):(Jt=!0,yt.__version=W.version);let Qe=yt.currentProgram;Jt===!0&&(Qe=fs(W,k,X),N&&W.isNodeMaterial&&N.onUpdateProgram(W,Qe,yt));let dn=!1,Ln=!1,fi=!1;const he=Qe.getUniforms(),we=yt.uniforms;if(mt.useProgram(Qe.program)&&(dn=!0,Ln=!0,fi=!0),W.id!==H&&(H=W.id,Ln=!0),yt.needsLights){const ue=Cl(v.state.lightProbeGridArray,X);yt.lightProbeGrid!==ue&&(yt.lightProbeGrid=ue,Ln=!0)}if(dn||I!==b){mt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),he.setValue(B,"projectionMatrix",b.projectionMatrix),he.setValue(B,"viewMatrix",b.matrixWorldInverse);const Un=he.map.cameraPosition;Un!==void 0&&Un.setValue(B,fe.setFromMatrixPosition(b.matrixWorld)),de.logarithmicDepthBuffer&&he.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&he.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),I!==b&&(I=b,Ln=!0,fi=!0)}if(yt.needsLights&&(qe.state.directionalShadowMap.length>0&&he.setValue(B,"directionalShadowMap",qe.state.directionalShadowMap,y),qe.state.spotShadowMap.length>0&&he.setValue(B,"spotShadowMap",qe.state.spotShadowMap,y),qe.state.pointShadowMap.length>0&&he.setValue(B,"pointShadowMap",qe.state.pointShadowMap,y)),X.isSkinnedMesh){he.setOptional(B,X,"bindMatrix"),he.setOptional(B,X,"bindMatrixInverse");const ue=X.skeleton;ue&&(ue.boneTexture===null&&ue.computeBoneTexture(),he.setValue(B,"boneTexture",ue.boneTexture,y))}X.isBatchedMesh&&(he.setOptional(B,X,"batchingTexture"),he.setValue(B,"batchingTexture",X._matricesTexture,y),he.setOptional(B,X,"batchingIdTexture"),he.setValue(B,"batchingIdTexture",X._indirectTexture,y),he.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&he.setValue(B,"batchingColorTexture",X._colorsTexture,y));const Dn=Y.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Bt.update(X,Y,Qe),(Ln||yt.receiveShadow!==X.receiveShadow)&&(yt.receiveShadow=X.receiveShadow,he.setValue(B,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&k.environment!==null&&(we.envMapIntensity.value=k.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=t0()),Ln){if(he.setValue(B,"toneMappingExposure",R.toneMappingExposure),yt.needsLights&&Pl(we,fi),xt&&W.fog===!0&&$.refreshFogUniforms(we,xt),$.refreshMaterialUniforms(we,W,Pt,Dt,v.state.transmissionRenderTarget[b.id]),yt.needsLights&&yt.lightProbeGrid){const ue=yt.lightProbeGrid;we.probesSH.value=ue.texture,we.probesMin.value.copy(ue.boundingBox.min),we.probesMax.value.copy(ue.boundingBox.max),we.probesResolution.value.copy(ue.resolution)}Zs.upload(B,Ra(yt),we,y)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Zs.upload(B,Ra(yt),we,y),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&he.setValue(B,"center",X.center),he.setValue(B,"modelViewMatrix",X.modelViewMatrix),he.setValue(B,"normalMatrix",X.normalMatrix),he.setValue(B,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const ue=W.uniformsGroups;for(let Un=0,pi=ue.length;Un<pi;Un++){const Ia=ue[Un];Q.update(Ia,Qe),Q.bind(Ia,Qe)}}return Qe}function Pl(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Il(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,k,Y){const W=C.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),C.get(b.texture).__webglTexture=k,C.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const Y=C.get(b);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const Ll=B.createFramebuffer();this.setRenderTarget=function(b,k=0,Y=0){F=b,z=k,V=Y;let W=null,X=!1,xt=!1;if(b){const _t=C.get(b);if(_t.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(B.FRAMEBUFFER,_t.__webglFramebuffer),U.copy(b.viewport),q.copy(b.scissor),Z=b.scissorTest,mt.viewport(U),mt.scissor(q),mt.setScissorTest(Z),H=-1;return}else if(_t.__webglFramebuffer===void 0)y.setupRenderTarget(b);else if(_t.__hasExternalTextures)y.rebindTextures(b,C.get(b.texture).__webglTexture,C.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ht=b.depthTexture;if(_t.__boundDepthTexture!==Ht){if(Ht!==null&&C.has(Ht)&&(b.width!==Ht.image.width||b.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(b)}}const Tt=b.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(xt=!0);const It=C.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(It[k])?W=It[k][Y]:W=It[k],X=!0):b.samples>0&&y.useMultisampledRTT(b)===!1?W=C.get(b).__webglMultisampledFramebuffer:Array.isArray(It)?W=It[Y]:W=It,U.copy(b.viewport),q.copy(b.scissor),Z=b.scissorTest}else U.copy(nt).multiplyScalar(Pt).floor(),q.copy(wt).multiplyScalar(Pt).floor(),Z=At;if(Y!==0&&(W=Ll),mt.bindFramebuffer(B.FRAMEBUFFER,W)&&mt.drawBuffers(b,W),mt.viewport(U),mt.scissor(q),mt.setScissorTest(Z),X){const _t=C.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,_t.__webglTexture,Y)}else if(xt){const _t=k;for(let Tt=0;Tt<b.textures.length;Tt++){const It=C.get(b.textures[Tt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Tt,It.__webglTexture,Y,_t)}}else if(b!==null&&Y!==0){const _t=C.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,_t.__webglTexture,Y)}H=-1},this.readRenderTargetPixels=function(b,k,Y,W,X,xt,bt,_t=0){if(!(b&&b.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=C.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Tt=Tt[bt]),Tt){mt.bindFramebuffer(B.FRAMEBUFFER,Tt);try{const It=b.textures[_t],Ht=It.format,Wt=It.type;if(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_t),!de.textureFormatReadable(Ht)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Wt)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-W&&Y>=0&&Y<=b.height-X&&B.readPixels(k,Y,W,X,O.convert(Ht),O.convert(Wt),xt)}finally{const It=F!==null?C.get(F).__webglFramebuffer:null;mt.bindFramebuffer(B.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(b,k,Y,W,X,xt,bt,_t=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=C.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Tt=Tt[bt]),Tt)if(k>=0&&k<=b.width-W&&Y>=0&&Y<=b.height-X){mt.bindFramebuffer(B.FRAMEBUFFER,Tt);const It=b.textures[_t],Ht=It.format,Wt=It.type;if(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_t),!de.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Lt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Lt),B.bufferData(B.PIXEL_PACK_BUFFER,xt.byteLength,B.STREAM_READ),B.readPixels(k,Y,W,X,O.convert(Ht),O.convert(Wt),0);const ae=F!==null?C.get(F).__webglFramebuffer:null;mt.bindFramebuffer(B.FRAMEBUFFER,ae);const be=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await ph(B,be,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Lt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,xt),B.deleteBuffer(Lt),B.deleteSync(be),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,Y=0){const W=Math.pow(2,-Y),X=Math.floor(b.image.width*W),xt=Math.floor(b.image.height*W),bt=k!==null?k.x:0,_t=k!==null?k.y:0;y.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,bt,_t,X,xt),mt.unbindTexture()};const Dl=B.createFramebuffer(),Ul=B.createFramebuffer();this.copyTextureToTexture=function(b,k,Y=null,W=null,X=0,xt=0){let bt,_t,Tt,It,Ht,Wt,Lt,ae,be;const xe=b.isCompressedTexture?b.mipmaps[xt]:b.image;if(Y!==null)bt=Y.max.x-Y.min.x,_t=Y.max.y-Y.min.y,Tt=Y.isBox3?Y.max.z-Y.min.z:1,It=Y.min.x,Ht=Y.min.y,Wt=Y.isBox3?Y.min.z:0;else{const we=Math.pow(2,-X);bt=Math.floor(xe.width*we),_t=Math.floor(xe.height*we),b.isDataArrayTexture?Tt=xe.depth:b.isData3DTexture?Tt=Math.floor(xe.depth*we):Tt=1,It=0,Ht=0,Wt=0}W!==null?(Lt=W.x,ae=W.y,be=W.z):(Lt=0,ae=0,be=0);const le=O.convert(k.format),Ne=O.convert(k.type);let yt;k.isData3DTexture?(y.setTexture3D(k,0),yt=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(y.setTexture2DArray(k,0),yt=B.TEXTURE_2D_ARRAY):(y.setTexture2D(k,0),yt=B.TEXTURE_2D),mt.activeTexture(B.TEXTURE0),mt.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),mt.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),mt.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const qe=mt.getParameter(B.UNPACK_ROW_LENGTH),Jt=mt.getParameter(B.UNPACK_IMAGE_HEIGHT),Qe=mt.getParameter(B.UNPACK_SKIP_PIXELS),dn=mt.getParameter(B.UNPACK_SKIP_ROWS),Ln=mt.getParameter(B.UNPACK_SKIP_IMAGES);mt.pixelStorei(B.UNPACK_ROW_LENGTH,xe.width),mt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xe.height),mt.pixelStorei(B.UNPACK_SKIP_PIXELS,It),mt.pixelStorei(B.UNPACK_SKIP_ROWS,Ht),mt.pixelStorei(B.UNPACK_SKIP_IMAGES,Wt);const fi=b.isDataArrayTexture||b.isData3DTexture,he=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const we=C.get(b),Dn=C.get(k),ue=C.get(we.__renderTarget),Un=C.get(Dn.__renderTarget);mt.bindFramebuffer(B.READ_FRAMEBUFFER,ue.__webglFramebuffer),mt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let pi=0;pi<Tt;pi++)fi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,C.get(b).__webglTexture,X,Wt+pi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,C.get(k).__webglTexture,xt,be+pi)),B.blitFramebuffer(It,Ht,bt,_t,Lt,ae,bt,_t,B.DEPTH_BUFFER_BIT,B.NEAREST);mt.bindFramebuffer(B.READ_FRAMEBUFFER,null),mt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||C.has(b)){const we=C.get(b),Dn=C.get(k);mt.bindFramebuffer(B.READ_FRAMEBUFFER,Dl),mt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ul);for(let ue=0;ue<Tt;ue++)fi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.__webglTexture,X,Wt+ue):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,we.__webglTexture,X),he?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dn.__webglTexture,xt,be+ue):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Dn.__webglTexture,xt),X!==0?B.blitFramebuffer(It,Ht,bt,_t,Lt,ae,bt,_t,B.COLOR_BUFFER_BIT,B.NEAREST):he?B.copyTexSubImage3D(yt,xt,Lt,ae,be+ue,It,Ht,bt,_t):B.copyTexSubImage2D(yt,xt,Lt,ae,It,Ht,bt,_t);mt.bindFramebuffer(B.READ_FRAMEBUFFER,null),mt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else he?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(yt,xt,Lt,ae,be,bt,_t,Tt,le,Ne,xe.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(yt,xt,Lt,ae,be,bt,_t,Tt,le,xe.data):B.texSubImage3D(yt,xt,Lt,ae,be,bt,_t,Tt,le,Ne,xe):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,xt,Lt,ae,bt,_t,le,Ne,xe.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,xt,Lt,ae,xe.width,xe.height,le,xe.data):B.texSubImage2D(B.TEXTURE_2D,xt,Lt,ae,bt,_t,le,Ne,xe);mt.pixelStorei(B.UNPACK_ROW_LENGTH,qe),mt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Jt),mt.pixelStorei(B.UNPACK_SKIP_PIXELS,Qe),mt.pixelStorei(B.UNPACK_SKIP_ROWS,dn),mt.pixelStorei(B.UNPACK_SKIP_IMAGES,Ln),xt===0&&k.generateMipmaps&&B.generateMipmap(yt),mt.unbindTexture()},this.initRenderTarget=function(b){C.get(b).__webglFramebuffer===void 0&&y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?y.setTextureCube(b,0):b.isData3DTexture?y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?y.setTexture2DArray(b,0):y.setTexture2D(b,0),mt.unbindTexture()},this.resetState=function(){z=0,V=0,F=null,mt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const Te={roads:[-150,-90,-30,30,90,150],centers:[-120,-60,0,60,120],block:44,roadWidth:16},Js={asphalt:2369846,sidewalk:9080987,curb:11843773,grass:5077078},es=[{id:"mall",name:"Harbor Mall",short:"MALL",type:"mall",category:"Shopping",col:2,row:2,front:"south",size:[42,30],height:22,floors:3,color:"#d8c6ad",accent:"#ff8a5b",signColor:"#ffd7a2",tagline:"Three floors. One hundred ways to treat yourself.",interior:"mall",landmark:!0},{id:"supermarket",name:"FreshMart",short:"MART",type:"supermarket",category:"Food & Groceries",col:3,row:2,front:"west",size:[34,26],height:9,floors:2,color:"#d6e0d4",accent:"#57c785",signColor:"#b8ffcd",tagline:"Fresh food, cold drinks, and late-night snacks.",interior:"supermarket"},{id:"clothing",name:"Threadline",short:"WEAR",type:"clothing",category:"Fashion",col:1,row:2,front:"east",size:[30,24],height:12,floors:3,color:"#e5c8c0",accent:"#ff6f91",signColor:"#ffc2d4",tagline:"Streetwear with a little downtown polish.",interior:"clothing"},{id:"salon",name:"Glow Salon",short:"GLOW",type:"salon",category:"Self Care",col:0,row:2,front:"east",size:[24,20],height:8,floors:2,color:"#cfc3e8",accent:"#b78bff",signColor:"#e5d4ff",tagline:"A fresh cut, a hot towel, a better day.",interior:"salon"},{id:"restaurant",name:"The Copper Spoon",short:"EAT",type:"restaurant",category:"Dining",col:4,row:2,front:"west",size:[30,24],height:10,floors:2,color:"#d9aa7f",accent:"#ff9e58",signColor:"#ffe1b3",tagline:"Comfort food and a window seat on Harbor Street.",interior:"restaurant"},{id:"bar",name:"The Velvet Room",short:"BAR",type:"bar",category:"Nightlife",col:2,row:3,front:"north",size:[28,22],height:11,floors:2,color:"#4c4665",accent:"#d46bff",signColor:"#eab6ff",tagline:"Low lights, good music, and a very long cocktail list.",interior:"bar"},{id:"gym",name:"Iron Harbor",short:"GYM",type:"gym",category:"Fitness",col:1,row:3,front:"north",size:[34,26],height:13,floors:2,color:"#5b6676",accent:"#ffd34d",signColor:"#fff1a8",tagline:"Train hard. The skyline does not lift itself.",interior:"gym"},{id:"hotel",name:"Harborview Hotel",short:"HOTEL",type:"hotel",category:"Stay",col:4,row:1,front:"west",size:[30,28],height:31,floors:9,color:"#c2b59e",accent:"#ffc46b",signColor:"#ffe7ba",tagline:"Rooms above the city lights.",interior:"hotel",landmark:!0},{id:"dealership",name:"Volt Motors",short:"AUTO",type:"dealership",category:"Vehicles",col:3,row:3,front:"north",size:[36,26],height:10,floors:2,color:"#b9c6d4",accent:"#4fd8ff",signColor:"#bdefff",tagline:"Electric, classic, and everything between.",interior:"dealership"},{id:"realestate",name:"Key & Stone",short:"HOME",type:"realestate",category:"Homes",col:4,row:3,front:"north",size:[26,22],height:9,floors:2,color:"#c9d0b9",accent:"#8fd46a",signColor:"#dcffbc",tagline:"Find your corner of Harbor City.",interior:"realestate"},{id:"petstore",name:"Paws & Co.",short:"PETS",type:"petstore",category:"Pets",col:0,row:1,front:"east",size:[26,22],height:8,floors:2,color:"#ead6b7",accent:"#ffad5c",signColor:"#ffe1b0",tagline:"Adopt a friend. Buy the good treats.",interior:"petstore"},{id:"jobcenter",name:"CityWorks",short:"JOBS",type:"jobcenter",category:"Work",col:3,row:1,front:"west",size:[30,24],height:12,floors:3,color:"#b7c9d4",accent:"#59b8ff",signColor:"#c3e8ff",tagline:"A city runs on people who show up.",interior:"jobcenter"},{id:"hospital",name:"Harbor General",short:"HOSP",type:"hospital",category:"Health",col:1,row:0,front:"south",size:[36,28],height:24,floors:6,color:"#d8e2e5",accent:"#ff6b78",signColor:"#ffc4ca",tagline:"Open twenty-four hours.",interior:"hospital",landmark:!0},{id:"police",name:"9th Precinct",short:"POLICE",type:"police",category:"Civic",col:2,row:0,front:"south",size:[32,26],height:17,floors:4,color:"#8a98a8",accent:"#4b8dff",signColor:"#bfd6ff",tagline:"Keeping Harbor City moving.",interior:"police"},{id:"cafe",name:"Byte Café",short:"CAFÉ",type:"cafe",category:"Coffee",col:0,row:3,front:"north",size:[24,20],height:8,floors:2,color:"#b9a58f",accent:"#ffb45c",signColor:"#ffe0b0",tagline:"Strong coffee. Fast Wi-Fi. Soft jazz.",interior:"cafe"},{id:"house",name:"Maple House",short:"HOME",type:"house",category:"Residence",col:3,row:4,front:"south",size:[30,20],height:8,floors:2,color:"#d4b48d",accent:"#8fd46a",signColor:"#fff0cf",tagline:"A little porch, a little yard, a lot of quiet.",interior:"house",residential:!0},{id:"apartments",name:"Bayview Apartments",short:"APT",type:"residential",category:"Residence",col:1,row:4,front:"south",size:[30,24],height:25,floors:7,color:"#c7b7a6",accent:"#ffb46b",signColor:"#ffe4c4",tagline:"Home is a view of the water."},{id:"arcade",name:"Seaside Arcade",short:"PLAY",type:"arcade",category:"Fun",col:0,row:4,front:"north",size:[24,20],height:8,floors:2,color:"#7b6bb0",accent:"#ff5cb8",signColor:"#ffb8ed",tagline:"Tokens, neon, and one more round."},{id:"library",name:"Harbor Library",short:"LIB",type:"library",category:"Civic",col:0,row:0,front:"south",size:[28,24],height:12,floors:3,color:"#c9c2ad",accent:"#7fd4c4",signColor:"#d4fff7",tagline:"Quietly open to everyone."},{id:"techhub",name:"Meridian Tower",short:"TECH",type:"office",category:"Business",col:2,row:1,front:"south",size:[32,26],height:39,floors:12,color:"#aab6c5",accent:"#54d7ff",signColor:"#c8f4ff",tagline:"Ideas at altitude."},{id:"tower1",name:"Northline",short:"N",type:"office",category:"Business",col:3,row:0,front:"south",size:[30,24],height:34,floors:10,color:"#9ca9ba",accent:"#ffca72",signColor:"#ffe1ae",tagline:"The north side, rising."},{id:"tower2",name:"Marina Tower",short:"M",type:"office",category:"Business",col:4,row:4,front:"north",size:[30,26],height:43,floors:13,color:"#b3bdc9",accent:"#69e3cb",signColor:"#c8fff3",tagline:"Harbor City at your feet."},{id:"tower3",name:"Civic Hall",short:"CIVIC",type:"office",category:"Civic",col:4,row:0,front:"west",size:[28,24],height:29,floors:8,color:"#c2c7c9",accent:"#ffb36b",signColor:"#ffe3bf",tagline:"A city with a long memory."}],lr={supermarket:[{id:"burger",name:"Harbor Burger",icon:"🍔",price:9,desc:"Hot, messy, perfect.",effect:{hunger:42,mood:5}},{id:"salad",name:"Green Bowl",icon:"🥗",price:8,desc:"Crisp greens and lemon dressing.",effect:{hunger:30,health:5}},{id:"energy",name:"Volt Energy",icon:"⚡",price:5,desc:"Tastes like a lightning storm.",effect:{energy:35,health:-2}},{id:"water",name:"Spring Water",icon:"💧",price:2,desc:"Cold, clean, reliable.",effect:{hunger:6,hygiene:3}},{id:"petfood",name:"Pet Food",icon:"🦴",price:7,desc:"For the four-legged roommate.",effect:{pet:25}},{id:"flowers",name:"Wildflowers",icon:"💐",price:12,desc:"A small bright thing for your place.",effect:{mood:12},item:"flowers"}],clothing:[{id:"jacket",name:"Harbor Bomber",icon:"🧥",price:85,desc:"Water-resistant, city-approved.",style:{shirt:"#e86b4f",pants:"#293241",accessory:"none"}},{id:"tee",name:"Neon Tee",icon:"👕",price:32,desc:"A little loud. On purpose.",style:{shirt:"#38c9b0",pants:"#2d3340",accessory:"none"}},{id:"jeans",name:"Relaxed Jeans",icon:"👖",price:48,desc:"Soft denim with room to move.",style:{shirt:"#f2c14e",pants:"#3a4d72",accessory:"none"}},{id:"sneakers",name:"Cloudstep Sneakers",icon:"👟",price:65,desc:"You will feel the difference.",style:{shirt:"#f3f1ea",pants:"#2a2d36",accessory:"sneakers"}},{id:"shades",name:"Sunset Shades",icon:"🕶️",price:42,desc:"For looking effortlessly unbothered.",style:{shirt:"#8f7cf6",pants:"#23252c",accessory:"shades"}},{id:"dress",name:"After Hours Dress",icon:"👗",price:120,desc:"Made for a night on Harbor Street.",style:{shirt:"#c45a86",pants:"#1e2028",accessory:"none"}}],salon:[{id:"cut",name:"Fresh Cut",icon:"✂️",price:35,desc:"A clean shape and a hot towel.",effect:{hygiene:35,mood:12},style:{hair:"#3a2a24"}},{id:"color",name:"Color Pop",icon:"🎨",price:70,desc:"Copper, teal, or something bolder.",effect:{hygiene:30,mood:20},style:{hair:"#d87a4b"}},{id:"spa",name:"Glow Spa",icon:"🧖",price:95,desc:"Steam, scrub, and silence.",effect:{hygiene:65,mood:25,energy:15}},{id:"shave",name:"Hot Towel Shave",icon:"🪒",price:28,desc:"A proper reset.",effect:{hygiene:25,mood:10}}],restaurant:[{id:"spoonburger",name:"Copper Burger",icon:"🍔",price:16,desc:"House sauce, crispy onions.",effect:{hunger:55,mood:8}},{id:"pasta",name:"Midnight Pasta",icon:"🍝",price:19,desc:"Rich, slow-cooked, worth it.",effect:{hunger:65,mood:10}},{id:"coffee",name:"Pour Over",icon:"☕",price:5,desc:"A little clarity in a cup.",effect:{energy:22}},{id:"cake",name:"Lemon Cake",icon:"🍰",price:9,desc:"Sharp, sweet, gone too fast.",effect:{hunger:20,mood:14}}],bar:[{id:"cocktail",name:"Velvet Hour",icon:"🍸",price:14,desc:"The house cocktail. Ask no questions.",effect:{mood:22,energy:-8}},{id:"beer",name:"Harbor Lager",icon:"🍺",price:8,desc:"Cold local lager.",effect:{mood:12,energy:-4}},{id:"mocktail",name:"Zero Tide",icon:"🍹",price:7,desc:"All the ceremony, none of the proof.",effect:{mood:10,hunger:5}},{id:"wings",name:"Late Wings",icon:"🍗",price:13,desc:"Sticky, spicy, shared.",effect:{hunger:38,mood:7}}],gym:[{id:"daypass",name:"Day Pass",icon:"🎟️",price:18,desc:"One session, all equipment.",effect:{energy:-15,mood:15,health:8}},{id:"membership",name:"Monthly Membership",icon:"🏋️",price:85,desc:"Train whenever you like.",unlock:"gym",effect:{mood:12}},{id:"shake",name:"Protein Shake",icon:"🥤",price:9,desc:"Banana, cocoa, ambition.",effect:{hunger:20,health:5}},{id:"trainer",name:"Personal Training",icon:"💪",price:60,desc:"Someone to count the last three.",effect:{energy:-20,health:12,mood:20}}],hotel:[{id:"nap",name:"Power Nap",icon:"🛌",price:45,desc:"Two hours. Fresh sheets.",effect:{energy:35,hygiene:10},hours:2},{id:"room",name:"City View Room",icon:"🏨",price:120,desc:"Sleep until morning.",effect:{energy:100,hygiene:25,mood:20},sleep:!0},{id:"suite",name:"Harbor Suite",icon:"🌃",price:240,desc:"Top floor, breakfast included.",effect:{energy:100,hygiene:40,mood:35},sleep:!0}],mall:[{id:"hoodie",name:"Midnight Hoodie",icon:"🧥",price:58,desc:"Soft fleece for late walks.",style:{shirt:"#34304a",pants:"#22242c",accessory:"none"}},{id:"headphones",name:"Wave Headphones",icon:"🎧",price:95,desc:"The city, with your own soundtrack.",item:"headphones",effect:{mood:8}},{id:"watch",name:"Chrono Watch",icon:"⌚",price:140,desc:"You will be on time. Probably.",item:"watch",effect:{mood:10}},{id:"lamp",name:"Glow Lamp",icon:"🛋️",price:45,desc:"A warm corner for your place.",item:"lamp",effect:{mood:6}},{id:"gift",name:"Little Gift",icon:"🎁",price:20,desc:"For someone, or for later.",item:"gift",effect:{mood:10}},{id:"phonecase",name:"Harbor Case",icon:"📱",price:25,desc:"A tiny piece of the city.",item:"phonecase"}],dealership:[{id:"car_scooter",name:"Mint Scooter",icon:"🛵",price:650,desc:"Cheap, nimble, slightly embarrassing.",vehicle:{id:"scooter",name:"Mint Scooter",color:7660467,speed:15,type:"scooter"}},{id:"car_compact",name:"Pebble Compact",icon:"🚗",price:1800,desc:"Small car, big city energy.",vehicle:{id:"compact",name:"Pebble Compact",color:6731752,speed:24,type:"car"}},{id:"car_sport",name:"Kite GT",icon:"🏎️",price:5200,desc:"Low, loud, and extremely fun.",vehicle:{id:"sport",name:"Kite GT",color:15752021,speed:36,type:"car"}},{id:"car_suv",name:"Ridge SUV",icon:"🚙",price:3900,desc:"Room for friends and groceries.",vehicle:{id:"suv",name:"Ridge SUV",color:14997437,speed:27,type:"car"}},{id:"car_taxi",name:"Harbor Cab",icon:"🚕",price:2600,desc:"The city will assume you are working.",vehicle:{id:"taxi",name:"Harbor Cab",color:16764746,speed:26,type:"taxi"}}],realestate:[{id:"house_maple",name:"Maple House",icon:"🏡",price:8500,desc:"Two bedrooms, a porch, and a yard in the south district.",house:!0}],petstore:[{id:"dog",name:"Adopt a Dog",icon:"🐕",price:140,desc:"A scruffy little best friend.",pet:{type:"dog",name:"Biscuit",color:12749658}},{id:"cat",name:"Adopt a Cat",icon:"🐈",price:110,desc:"Independent, warm, secretly affectionate.",pet:{type:"cat",name:"Miso",color:14270883}},{id:"petfood",name:"Good Pet Food",icon:"🦴",price:7,desc:"Tail-wagging quality.",effect:{pet:30}},{id:"toy",name:"Squeaky Toy",icon:"🧸",price:9,desc:"Instant chaos. Worth it.",effect:{pet:15,mood:5}}],cafe:[{id:"latte",name:"Oat Latte",icon:"☕",price:5,desc:"Silky, warm, dependable.",effect:{energy:24,mood:4}},{id:"coldbrew",name:"Cold Brew",icon:"🧊",price:6,desc:"A cool, focused kind of awake.",effect:{energy:32}},{id:"croissant",name:"Butter Croissant",icon:"🥐",price:4,desc:"Flaky layers, no regrets.",effect:{hunger:22,mood:6}},{id:"sandwich",name:"Breakfast Sandwich",icon:"🥪",price:8,desc:"Egg, cheese, green chile.",effect:{hunger:38}}],hospital:[{id:"checkup",name:"Quick Checkup",icon:"🩺",price:45,desc:"A doctor will patch you up.",effect:{health:60}},{id:"full",name:"Full Treatment",icon:"💉",price:110,desc:"Everything, checked and fixed.",effect:{health:100,energy:20}},{id:"flu",name:"Flu Shot",icon:"🩹",price:20,desc:"A tiny pinch, a safer season.",effect:{health:12}}],police:[],jobcenter:[],arcade:[],library:[],office:[],residential:[],house:[]},Gn={courier:{id:"courier",name:"Courier Rush",icon:"📦",color:"#ffb45c",pay:185,timer:240,desc:"Pick up a package at Byte Café and run it to Maple House. The city rewards speed.",steps:[{label:"Collect package from Byte Café",x:-118,z:45,place:"Byte Café"},{label:"Deliver package to Maple House",x:60,z:136,place:"Maple House"}]},taxi:{id:"taxi",name:"Night Cab",icon:"🚕",color:"#ffd34d",pay:240,timer:260,needsCar:!0,desc:"Pick up a fare outside the mall and drive them across town. Smooth driving pays better.",steps:[{label:"Pick up fare at Harbor Mall",x:0,z:19,place:"Harbor Mall"},{label:"Drop off at Harborview Hotel",x:104,z:-60,place:"Harborview Hotel"}]},barista:{id:"barista",name:"Café Shift",icon:"☕",color:"#8fd46a",pay:130,timer:180,desc:"Take the counter at Byte Café. Match five orders before the rush ends.",steps:[{label:"Report to the counter at Byte Café",x:-118,z:45,place:"Byte Café"}]}},Lc={police:["Keep your wheels on the road and your feet on the pavement.","Nothing to report tonight. That is exactly how I like it.","Harbor City is quiet. Enjoy it while it lasts."],doctor:["You look tired. Water, food, sleep. In that order.","The clinic is open all night if you need us.","Take care of yourself out there."],worker:["Welcome in. Take your time.","Everything on the shelves is fresh today.","Let me know if you need a hand."],pedestrian:["Beautiful evening, huh?","Have you been to the new mall yet?","I am just out for a walk.","The café on the corner makes the best cold brew.","Traffic gets wild around five. Watch yourself.","I heard Maple House is for sale."],driver:["Hop in if you need a ride.","Keep the city moving."]},Xn=["Mara","Jonah","Iris","Theo","Nia","Felix","Sana","Owen","Rae","Miles","Lena","Kai","June","Ellis","Tara","Noah","Vera","Sam","Ada","Leo","Priya","Dante","Mina","Rory","Cleo","Ash","Nora","Eli","Zuri","Finn"],n0=[15231823,5219304,10124543,15909198,3721648,15987178,13916806,6253434,8047466,16752216],i0=[2699841,3820914,2962240,5593958,7031867,2040880],Qs=[15779491,14262899,12155727,9132604,6241579,15251855],tr=[2760989,4863014,8016434,13146714,1447446,14187083,7171437],hr={dayNames:["MON","TUE","WED","THU","FRI","SAT","SUN"],startMinutes:980},Ot=(i,t,e)=>Math.max(t,Math.min(e,i)),Dc=(i,t,e)=>i+(t-i)*e,ve=i=>i[Math.floor(Math.random()*i.length)];function li(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function cs(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t;const s=n.getContext("2d");e(s,i,t);const r=new Gh(n);return r.colorSpace=Xe,r.anisotropy=4,r}function bl({base:i="#b9b2a6",accent:t="#ffc46b",cols:e=5,rows:n=8,seed:s=1,lit:r=.35,style:o="grid"}){const a=li(s),c=cs(256,512,(u,d,h)=>{const f=u.createLinearGradient(0,0,d,h);f.addColorStop(0,i),f.addColorStop(.55,Hs(i,-8)),f.addColorStop(1,Hs(i,-18)),u.fillStyle=f,u.fillRect(0,0,d,h),u.globalAlpha=.22,u.fillStyle=Hs(i,16);for(let x=0;x<d;x+=d/(e+1))u.fillRect(x,0,3,h);u.globalAlpha=1;const _=h*.08,S=h*.84,m=d/e,p=S/n;for(let x=0;x<n;x++){u.fillStyle=Hs(i,x%2===0?-3:-7),u.fillRect(0,_+x*p,d,2);for(let E=0;E<e;E++){const M=E*m+m*.18,T=_+x*p+p*.2,v=m*.64,A=p*.56,g=a()<r,w=u.createLinearGradient(M,T,M+v,T+A);g?(w.addColorStop(0,"#ffe9b0"),w.addColorStop(1,"#e8a75f")):(w.addColorStop(0,"#2d4250"),w.addColorStop(1,"#16222c")),u.fillStyle=w,u.fillRect(M,T,v,A),u.strokeStyle="rgba(12,18,24,.45)",u.lineWidth=2,u.strokeRect(M,T,v,A),o==="lux"&&E%2===0&&(u.fillStyle="rgba(255,255,255,.1)",u.fillRect(M+v*.12,T,2,A))}}u.globalAlpha=.1;for(let x=0;x<80;x++)u.fillStyle=x%2?"#000":"#fff",u.fillRect(a()*d,a()*h,a()*18+2,1);u.globalAlpha=1,u.fillStyle=t,u.globalAlpha=.8,u.fillRect(0,0,d,4),u.globalAlpha=1}),l=cs(256,512,(u,d,h)=>{u.fillStyle="#000",u.fillRect(0,0,d,h);const f=li(s+99),_=h*.08,S=h*.84,m=d/e,p=S/n;for(let x=0;x<n;x++)for(let E=0;E<e;E++)if(f()<r){const M=E*m+m*.18,T=_+x*p+p*.2,v=m*.64,A=p*.56,g=u.createLinearGradient(M,T,M+v,T+A);g.addColorStop(0,"#fff4d2"),g.addColorStop(1,"#ffbb68"),u.fillStyle=g,u.fillRect(M,T,v,A)}});return c.wrapS=c.wrapT=is,l.wrapS=l.wrapT=is,{diffuse:c,emissive:l}}function Hs(i,t){const e=new Rt(i);return e.offsetHSL(0,0,t/255),`#${e.getHexString()}`}function hi(i,{color:t="#ffd7a2",bg:e="#11141d",accent:n="#ff8a5b",sub:s="",width:r=1024,height:o=256}={}){return cs(r,o,(a,c,l)=>{a.clearRect(0,0,c,l);const u=30;a.fillStyle=e,dr(a,6,6,c-12,l-12,u),a.fill(),a.strokeStyle=n,a.lineWidth=8,dr(a,12,12,c-24,l-24,u-6),a.stroke(),a.shadowColor=t,a.shadowBlur=28,a.fillStyle=t,a.textAlign="center",a.textBaseline="middle",a.font=`900 ${s?112:128}px "Arial Black", Impact, sans-serif`,a.fillText(i.toUpperCase(),c/2,s?l*.44:l*.52),a.shadowBlur=0,s&&(a.fillStyle="rgba(255,255,255,.72)",a.font='600 34px "Segoe UI", Arial, sans-serif',a.letterSpacing="8px",a.fillText(s.toUpperCase(),c/2,l*.79)),a.fillStyle=n,a.fillRect(c*.08,l-22,c*.12,5),a.fillRect(c*.8,l-22,c*.12,5)})}function s0(i,{color:t="#ffffff",bg:e="rgba(10,14,20,.86)",accent:n="#58e6d2",width:s=512,height:r=128,font:o=56}={}){return cs(s,r,(a,c,l)=>{a.clearRect(0,0,c,l),a.fillStyle=e,dr(a,4,4,c-8,l-8,26),a.fill(),a.strokeStyle=n,a.lineWidth=4,dr(a,8,8,c-16,l-16,22),a.stroke(),a.fillStyle=t,a.textAlign="center",a.textBaseline="middle",a.font=`800 ${o}px "Segoe UI", Arial, sans-serif`,a.fillText(i,c/2,l/2+2)})}function dr(i,t,e,n,s,r){const o=Math.min(r,n/2,s/2);i.beginPath(),i.moveTo(t+o,e),i.arcTo(t+n,e,t+n,e+s,o),i.arcTo(t+n,e+s,t,e+s,o),i.arcTo(t,e+s,t,e,o),i.arcTo(t,e,t+n,e,o),i.closePath()}let Gs=null;function r0(){return Gs||(Gs=cs(128,128,(i,t,e)=>{const n=i.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.2,"rgba(255,255,255,.8)"),n.addColorStop(.5,"rgba(255,255,255,.2)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)}),Gs)}function Hi(i=16761963,t=2,e=.8){const n=new fa({map:r0(),color:i,transparent:!0,opacity:e,blending:er,depthWrite:!1}),s=new al(n);return s.scale.set(t,t,1),s}function Ve(i){return`$${Math.round(i).toLocaleString("en-US")}`}function Jo(i){const t=(i%1440+1440)%1440,e=Math.floor(t/60),n=Math.floor(t%60),s=e>=12?"PM":"AM";return`${e%12||12}:${String(n).padStart(2,"0")} ${s}`}const Zi=new D;function en(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Zi.copy(t),Zi[n]=0,Zi.normalize();const l=.5*o/(o+a),u=1-Zi.angleTo(i)/c;return Math.sign(Zi[e])===1?u*l:a/(o+a)+l+l*(1-u)}class Be extends K{constructor(t=1,e=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new D,l=new D,u=new D(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,_=d.length/6,S=new D,m=.5/o;for(let p=0,x=0;p<d.length;p+=3,x+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[p+0]=u.x*Math.sign(c.x)+l.x*r,d[p+1]=u.y*Math.sign(c.y)+l.y*r,d[p+2]=u.z*Math.sign(c.z)+l.z*r,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/_)){case 0:S.set(1,0,0),f[x+0]=en(S,l,"z","y",r,n),f[x+1]=1-en(S,l,"y","z",r,e);break;case 1:S.set(-1,0,0),f[x+0]=1-en(S,l,"z","y",r,n),f[x+1]=1-en(S,l,"y","z",r,e);break;case 2:S.set(0,1,0),f[x+0]=1-en(S,l,"x","z",r,t),f[x+1]=en(S,l,"z","x",r,n);break;case 3:S.set(0,-1,0),f[x+0]=1-en(S,l,"x","z",r,t),f[x+1]=1-en(S,l,"z","x",r,n);break;case 4:S.set(0,0,1),f[x+0]=1-en(S,l,"x","y",r,t),f[x+1]=1-en(S,l,"y","x",r,e);break;case 5:S.set(0,0,-1),f[x+0]=en(S,l,"x","y",r,t),f[x+1]=1-en(S,l,"y","x",r,e);break}}static fromJSON(t){return new Be(t.width,t.height,t.depth,t.segments,t.radius)}}const o0=new gr(1,20),a0=new ee({color:0,transparent:!0,opacity:.2,depthWrite:!1}),c0=new ee({color:0,transparent:!0,opacity:.12,depthWrite:!1});function $n(i,t,e,n=1,s=!1){const r=new L(o0,s?c0:a0);return r.rotation.x=-Math.PI/2,r.position.set(t,.025,e),r.scale.set(n,n,n),r.renderOrder=1,i.add(r),r}function ns({shirt:i=15231823,pants:t=2699841,skin:e=15779491,hair:n=2760989,role:s="pedestrian",height:r=1,shoes:o=1645346}={}){const a=new Qt,c=new Qt;a.add(c);const l=new j({color:e,roughness:.72}),u=new j({color:i,roughness:.8}),d=new j({color:t,roughness:.86}),h=new j({color:n,roughness:.9}),f=new j({color:o,roughness:.7}),_=new Qt,S=new Qt,m=new oi(.105,.52,4,8),p=new Be(.19,.13,.34,2,.05);for(const[z,V]of[[_,-1],[S,1]]){z.position.set(V*.145,.82,0);const F=new L(m,d);F.position.y=-.34,z.add(F);const H=new L(p,f);H.position.set(0,-.72,.07),z.add(H),c.add(z)}const x=new L(new oi(.27,.42,4,10),u);x.position.y=1.08,x.scale.z=.82,c.add(x);const E=new L(new Be(.5,.22,.34,2,.08),d);E.position.y=.77,c.add(E);const M=new L(new Zt(.09,.1,.12,8),l);M.position.y=1.49,c.add(M);const T=new L(new ye(.225,16,12),l);T.position.y=1.69,T.scale.set(.93,1.05,.94),c.add(T);const v=new L(new ye(.235,14,10,0,Math.PI*2,0,Math.PI*.62),h);v.position.y=1.73,v.scale.set(.96,.92,.98),c.add(v);const A=new ee({color:1776416});for(const z of[-1,1]){const V=new L(new ye(.022,6,5),A);V.position.set(z*.078,1.7,.205),c.add(V)}const g=new oi(.09,.44,4,7),w=new ye(.095,8,6),R=new Qt,P=new Qt;for(const[z,V]of[[R,-1],[P,1]]){z.position.set(V*.345,1.3,0),z.rotation.z=V*.08;const F=new L(g,u);F.position.y=-.28,z.add(F);const H=new L(w,l);H.position.y=-.55,z.add(H),c.add(z)}let N=null;if(s==="police"){u.color.set(2833237),d.color.set(1844532);const z=new L(new Be(.56,.52,.36,2,.06),new j({color:4084852,roughness:.6}));z.position.y=1.13,c.add(z);const V=new L(new K(.1,.12,.02),new j({color:16765276,metalness:.7,roughness:.3}));V.position.set(-.13,1.23,.19),c.add(V);const F=new L(new Zt(.235,.245,.16,12),new j({color:1713984,roughness:.7}));F.position.y=1.9,c.add(F);const H=new L(new K(.32,.04,.2),new j({color:988968}));H.position.set(0,1.84,.16),c.add(H)}else if(s==="doctor"){const z=new L(new Be(.6,.92,.42,2,.08),new j({color:15922159,roughness:.85}));z.position.y=1.03,c.add(z);const V=new L(new _r(.15,.012,6,16,Math.PI*1.4),new j({color:3820636,metalness:.4}));V.position.set(0,1.27,.22),V.rotation.z=Math.PI,c.add(V)}else if(s==="worker"){const z=new L(new Be(.5,.72,.04,2,.02),new j({color:3116904,roughness:.9}));z.position.set(0,.92,.245),c.add(z);const V=new L(new ye(.225,12,6,0,Math.PI*2,0,Math.PI*.5),new j({color:3116904}));V.position.y=1.78,c.add(V)}else if(s==="barista"){const z=new L(new Be(.5,.76,.04,2,.02),new j({color:7162941,roughness:.9}));z.position.set(0,.9,.245),c.add(z);const V=new L(new Zt(.24,.24,.12,12),new j({color:3812646}));V.position.y=1.88,c.add(V)}else if(s==="chef"){const z=new L(new Zt(.18,.22,.3,12),new j({color:16052971}));z.position.y=1.95,c.add(z);const V=new L(new Be(.52,.8,.04,2,.02),new j({color:15657437}));V.position.set(0,.9,.245),c.add(V)}else if(s==="player"){const z=new L(new Be(.4,.52,.22,3,.08),new j({color:2042163,roughness:.8}));z.position.set(0,1.12,-.32),c.add(z);const V=new j({color:1120288});for(const F of[-1,1]){const H=new L(new K(.07,.56,.04),V);H.position.set(F*.22,1.16,.18),c.add(H)}N="backpack"}if(s==="pedestrian"&&Math.random()<.25){const z=new L(new K(.18,.3,.34),new j({color:5981750,roughness:.9}));z.position.set(.35,.95,.02),c.add(z)}return a.scale.setScalar(r),$n(a,0,0,.62,!0),a.userData={kind:"human",role:s,parts:{body:c,legL:_,legR:S,armL:R,armR:P,head:T,torso:x,hairCap:v},phase:Math.random()*Math.PI*2,speed:0,baseY:0,accessory:N,shirtMat:u,pantsMat:d,hairMat:h,skinMat:l,shoeMat:f},a}function ls(i,t,e=0){const n=i.userData;if(!n||n.kind!=="human")return;const s=n.parts;n.phase+=t*(2.8+e*1.25);const r=e>.12,o=r?Math.sin(n.phase)*.55:Math.sin(n.phase*.45)*.035;s.legL.rotation.x=o,s.legR.rotation.x=-o,s.armL.rotation.x=-o*.8,s.armR.rotation.x=o*.8,s.body.position.y=r?Math.abs(Math.sin(n.phase*2))*.035:Math.sin(n.phase*.5)*.008,s.head.rotation.y=r?0:Math.sin(n.phase*.18)*.08}function io(i,t={}){const e=i.userData;if(e?.parts)if(t.shirt&&e.shirtMat.color.set(t.shirt),t.pants&&e.pantsMat.color.set(t.pants),t.hair&&e.hairMat.color.set(t.hair),e.shoeMat&&e.shoeMat.color.set(t.accessory==="sneakers"?"#eef4f7":"#191b22"),t.accessory==="shades"){if(!e.shades){const n=new L(new K(.3,.08,.06),new j({color:1118744,metalness:.6,roughness:.25}));n.position.set(0,1.73,.21),e.parts.body.add(n),e.shades=n}e.shades.visible=!0}else e.shades&&(e.shades.visible=!1)}function Qo({color:i=14703189,type:t="car",police:e=!1,taxi:n=!1,headlights:s=!0}={}){const r=new Qt,o=new j({color:i,metalness:.45,roughness:.28}),a=new j({color:1583672,metalness:.6,roughness:.12}),c=new j({color:1185309,roughness:.55}),l=new j({color:14212579,metalness:.85,roughness:.2}),u=new j({color:16774604,emissive:16767114,emissiveIntensity:2.2}),d=new j({color:16727100,emissive:16718362,emissiveIntensity:1.6});let h=4.2,f=1.86;if(t==="scooter"){h=1.7,f=.7;const g=new L(new Be(f,.35,h,3,.1),o);g.position.y=.55,r.add(g);const w=new L(new Zt(.045,.06,.8,8),l);w.position.set(0,.85,.5),w.rotation.x=-.18,r.add(w);const R=new L(new K(.5,.05,.05),c);R.position.set(0,1.18,.57),r.add(R);for(const N of[-.52,.58]){const z=new L(new Zt(.22,.22,.13,12),c);z.rotation.z=Math.PI/2,z.position.set(0,.23,N),r.add(z)}const P=new L(new ye(.08,8,6),u);return P.position.set(0,.85,.85),r.add(P),$n(r,0,0,.7),r.userData={kind:"car",type:t,wheels:[],headMat:u,tailMat:d,paint:o,width:f,length:h},r}t==="suv"&&(h=4.8,f=2.05);const _=new L(new Be(f,.58,h,4,.2),o);_.position.y=.66,r.add(_);const S=new L(new Be(f*.92,.18,h*.32,3,.08),o);S.position.set(0,.98,h*.3),r.add(S);const m=t==="suv"?2.65:2.1,p=t==="suv"?.72:.56,x=new L(new Be(f*.84,p,m,4,.18),a);x.position.set(0,1.18,-.18),r.add(x);const E=new L(new Be(f*.8,.08,m*.88,3,.03),o);E.position.set(0,1.18+p/2+.02,-.18),r.add(E);const M=new L(new Be(f*.98,.22,.22,3,.06),c);M.position.set(0,.48,h/2-.05),r.add(M);const T=M.clone();T.position.z=-h/2+.05,r.add(T);const v=[];for(const g of[-1,1])for(const w of[-h*.31,h*.31]){const R=new Qt,P=new L(new Zt(.35,.35,.25,14),c);P.rotation.z=Math.PI/2,R.add(P);const N=new L(new Zt(.19,.19,.26,10),l);N.rotation.z=Math.PI/2,R.add(N),R.position.set(g*(f/2-.03),.36,w),r.add(R),v.push(R)}for(const g of[-1,1]){const w=new L(new K(.34,.16,.06),u);w.position.set(g*.58,.76,h/2+.01),r.add(w);const R=new L(new K(.3,.14,.06),d);R.position.set(g*.62,.76,-h/2-.01),r.add(R)}const A=new L(new K(.52,.15,.03),new j({color:15790309}));if(A.position.set(0,.48,h/2+.12),r.add(A),n){const g=new L(new K(.7,.22,.32),new j({color:16764746,emissive:16757504,emissiveIntensity:1.2}));g.position.set(0,1.64,-.2),r.add(g)}if(e){const g=new L(new K(1.1,.12,.3),c);g.position.set(0,1.62,-.2),r.add(g);const w=new L(new K(.42,.13,.26),new j({color:16722731,emissive:16711680,emissiveIntensity:3}));w.position.set(-.3,1.71,-.2),r.add(w);const R=new L(new K(.42,.13,.26),new j({color:2853887,emissive:26367,emissiveIntensity:3}));R.position.set(.3,1.71,-.2),r.add(R),r.userData.policeLights=[w,R]}if(s)for(const g of[-1,1]){const w=Hi(16765562,1.6,.4);w.position.set(g*.58,.8,h/2+.12),r.add(w)}return $n(r,0,0,t==="suv"?1.65:1.35),r.userData={kind:"car",type:t,wheels:v,headMat:u,tailMat:d,paint:o,width:f,length:h,baseY:0,police:e,taxi:n},r}function wl(i,t=0,e=0){const n=i.userData;if(!(!n||n.kind!=="car")){for(const s of n.wheels||[])s.rotation.x+=t*e*1.7;if(n.policeLights){const s=performance.now()*.006;n.policeLights[0].material.emissiveIntensity=1.5+Math.max(0,Math.sin(s))*3,n.policeLights[1].material.emissiveIntensity=1.5+Math.max(0,-Math.sin(s))*3}}}function ur(i="dog",t=12749658){const e=new Qt,n=new j({color:t,roughness:.95}),s=new j({color:2760989,roughness:.8}),r=i==="cat"?.62:1,o=new L(new ye(.3,12,9),n);o.scale.set(.75,.7,1.25),o.position.y=.48*r,e.add(o);const a=new L(new ye(.22,12,9),n);a.position.set(0,.63*r,.4*r),e.add(a);const c=new L(new ye(.13,9,7),n);c.position.set(0,.58*r,.58*r),c.scale.set(1,.7,1.2),e.add(c);const l=new L(new ye(.04,6,5),s);l.position.set(0,.6*r,.7*r),e.add(l);for(const h of[-1,1]){const f=new L(new ma(.1,.2,5),n);f.position.set(h*.12,.79*r,.38*r),f.rotation.z=h*.18,e.add(f);const _=new L(new ye(.028,5,4),s);_.position.set(h*.08,.67*r,.6*r),e.add(_)}const u=[];for(const h of[-1,1])for(const f of[-.18,.18]){const _=new Qt;_.position.set(h*.16,.34*r,f*r);const S=new L(new Zt(.055,.045,.33,6),n);S.position.y=-.16,_.add(S),e.add(_),u.push(_)}const d=new L(new Zt(.04,.02,.42,6),n);return d.position.set(0,.6*r,-.4*r),d.rotation.x=i==="cat"?1.1:.6,e.add(d),e.userData={kind:"pet",type:i,body:o,head:a,tail:d,legs:u,phase:Math.random()*6},e.scale.setScalar(r),$n(e,0,0,.42,!0),e}function ta(i,t,e=0){const n=i.userData;if(!n||n.kind!=="pet")return;n.phase+=t*(4+e);const s=e>.1?Math.sin(n.phase)*.5:0;n.legs[0].rotation.x=s,n.legs[1].rotation.x=-s,n.legs[2].rotation.x=-s,n.legs[3].rotation.x=s,n.tail.rotation.z=Math.sin(n.phase*1.6)*.22,n.head.position.y+=Math.sin(n.phase*.5)*5e-4}function El(i=1,t=!1){const e=new Qt,n=new j({color:5981491,roughness:1}),s=new j({color:t?13203774:5213271,roughness:.95}),r=new j({color:t?14261077:6989672,roughness:.95}),o=new L(new Zt(.16*i,.25*i,2.2*i,7),n);return o.position.y=1.1*i,e.add(o),[[0,2.7,0,1.15],[-.55,2.45,.2,.75],[.55,2.5,-.15,.8],[.1,3.15,.2,.7]].forEach(([c,l,u,d],h)=>{const f=new L(new ds(d*i,1),h%2?r:s);f.position.set(c*i,l*i,u*i),f.scale.y=.86,e.add(f)}),$n(e,0,0,1.1*i,!0),e}function l0(){const i=new Qt,t=new j({color:2764856,metalness:.5,roughness:.5}),e=new L(new Zt(.07,.1,5.6,7),t);e.position.y=2.8,i.add(e);const n=new L(new Zt(.05,.05,1.1,6),t);n.rotation.z=Math.PI/2,n.position.set(.5,5.5,0),i.add(n);const s=new j({color:16769704,emissive:16761963,emissiveIntensity:1.5}),r=new L(new ye(.17,8,6),s);r.position.set(1.02,5.43,0),i.add(r);const o=Hi(16761963,2.4,.5);return o.position.copy(r.position),i.add(o),i.userData={kind:"streetlight",lampMat:s,glow:o},i}function Tl(){const i=new Qt,t=new j({color:9135940,roughness:.9}),e=new j({color:2764856,metalness:.5,roughness:.5}),n=new L(new K(1.9,.12,.55),t);n.position.y=.55,i.add(n);const s=new L(new K(1.9,.5,.1),t);s.position.set(0,.86,-.24),s.rotation.x=-.12,i.add(s);for(const r of[-1,1]){const o=new L(new K(.09,.55,.5),e);o.position.set(r*.78,.27,0),i.add(o)}return i}function h0(){const i=new Qt,t=new L(new Zt(.48,.38,.55,8),new j({color:6249044,roughness:.95}));t.position.y=.27,i.add(t);const e=new L(new ds(.5,1),new j({color:6002270,roughness:.95}));return e.position.y=.8,e.scale.y=.8,i.add(e),i}function d0(){const i=new Qt,t=new j({color:2436148,metalness:.5,roughness:.5}),e=new L(new Zt(.07,.09,3.4,7),t);e.position.y=1.7,i.add(e);const n=new L(new K(.3,.76,.24),new j({color:1580323}));n.position.y=3.5,i.add(n);const s=[];return[16727357,16762947,5169281].forEach((o,a)=>{const c=new j({color:o,emissive:o,emissiveIntensity:a===2?1.5:.1}),l=new L(new ye(.075,7,6),c);l.position.set(0,3.74-a*.22,.14),n.add(l),s.push(c)}),i.userData={kind:"trafficlight",lights:s},i}function u0(){const i=new Qt,t=new L(new Zt(.28,.24,.8,8),new j({color:4152144,roughness:.85}));t.position.y=.4,i.add(t);const e=new L(new _r(.28,.035,5,10),new j({color:2305322}));return e.rotation.x=Math.PI/2,e.position.y=.81,i.add(e),i}const Vs=new D(0,1,0),f0={south:0,north:Math.PI,east:Math.PI/2,west:-Math.PI/2};function p0(i,{onShop:t,onTalk:e,onCar:n,onHome:s,onJobBoard:r}){const o=new Qt;o.name="Harbor City",i.add(o);const a=[],c=[],l=[],u=new Map,d=[],h=[],f=[],_=[],S=[],m=[],p=[],x=[],E=[],M=[];let T=[];const v=new ed(16766881,2.2);v.position.set(70,110,50),v.castShadow=!0,v.shadow.mapSize.set(1536,1536),v.shadow.camera.near=1,v.shadow.camera.far=320,v.shadow.camera.left=-105,v.shadow.camera.right=105,v.shadow.camera.top=105,v.shadow.camera.bottom=-105,v.shadow.bias=-25e-5,v.shadow.normalBias=.035,i.add(v),i.add(v.target);const A=new Zh(12376303,4865848,1.1);i.add(A);const g=m0(i),w=g0(i),R=new ua(10466754,.0038);i.fog=R,i.background=new Rt(10466754),_0(o),x0(o),v0(o,d),es.forEach((I,U)=>{const q=I.col*60-120,Z=I.row*60-120,it=f0[I.front],at=M0(I,U,d,_);at.group.position.set(q,.18,Z),at.group.rotation.y=it,o.add(at.group);const Et=I.front==="east"||I.front==="west"?{w:I.size[1],d:I.size[0]}:{w:I.size[0],d:I.size[1]},Dt={id:I.id,name:I.name,minX:q-Et.w/2,maxX:q+Et.w/2,minZ:Z-Et.d/2,maxZ:Z+Et.d/2};a.push(Dt),l.push({...I,x:q,z:Z,rot:it,group:at.group,collider:Dt}),u.set(I.id,l[l.length-1]);const J=new D(0,0,I.size[1]/2+2.3).clone().applyAxisAngle(Vs,it).add(new D(q,0,Z)),pt={id:`door-${I.id}`,type:"shop",position:new D(J.x,.2,J.z),radius:3.1,label:I.interior?`Enter ${I.name}`:`Knock on ${I.name}`,icon:I.interior?"🚪":"🔒",data:{businessId:I.id},handler:()=>t(I.id)};if(c.push(pt),["supermarket","cafe","clothing","salon","restaurant","bar","gym","hotel","petstore"].includes(I.type)){const nt=I.type==="cafe"?"barista":"worker",wt=new D(I.size[0]*.28,0,I.size[1]/2+1.4).applyAxisAngle(Vs,it).add(new D(q,0,Z)),At=ns({shirt:new Rt(I.accent).getHex(),pants:2699841,skin:ve(Qs),hair:ve(tr),role:nt,height:.98});At.position.set(wt.x,.2,wt.z),At.rotation.y=it+Math.PI+(Math.random()-.5)*.5,o.add(At),p.push(At),c.push({id:`staff-${I.id}`,type:"npc",position:new D(wt.x,.2,wt.z),radius:2.2,label:`Talk to ${ve(Xn)}`,icon:"💬",data:{role:"worker",businessId:I.id},handler:()=>e({role:"worker",businessId:I.id,name:ve(Xn)})})}if(I.type==="police"||I.type==="hospital"){const nt=I.type==="police"?"police":"doctor",wt=new D(-I.size[0]*.31,0,I.size[1]/2+1.7).applyAxisAngle(Vs,it).add(new D(q,0,Z)),At=ns({shirt:nt==="police"?2833237:15922159,pants:nt==="police"?1844532:3492706,skin:ve(Qs),hair:ve(tr),role:nt,height:1});At.position.set(wt.x,.2,wt.z),At.rotation.y=it+Math.PI+(Math.random()-.5)*.4,o.add(At),p.push(At),c.push({id:`staff-${I.id}`,type:"npc",position:new D(wt.x,.2,wt.z),radius:2.2,label:nt==="police"?"Talk to Officer Reed":"Talk to Dr. Chen",icon:"💬",data:{role:nt,name:nt==="police"?"Officer Reed":"Dr. Chen"},handler:()=>e({role:nt,name:nt==="police"?"Officer Reed":"Dr. Chen"})})}if(I.id==="jobcenter"){const nt=new D(0,0,I.size[1]/2+2.4).applyAxisAngle(Vs,it).add(new D(q,0,Z));c.push({id:"job-board",type:"jobboard",position:new D(nt.x,.2,nt.z),radius:3.2,label:"Browse city jobs",icon:"💼",data:{},handler:r})}if(I.id==="house"){const nt=new Qt;nt.position.copy(at.group.position),nt.rotation.y=it;const wt=new L(new ne(39,29),new j({color:5406551,roughness:1}));wt.rotation.x=-Math.PI/2,wt.position.y=-.02,nt.add(wt);const At=new L(new ne(3.2,9),new j({color:12235170,roughness:1}));At.rotation.x=-Math.PI/2,At.position.set(0,.01,15.5),nt.add(At),o.add(nt)}}),S0(o),y0(o,d,h,f,M),[[1,2],[2,2],[3,2],[2,3],[1,3],[0,2],[4,2],[1,1],[3,1],[4,1],[0,3],[3,3],[4,3],[2,4]].forEach(([I,U],q)=>{const Z=q%3===0?2:1;for(let it=0;it<Z;it++){const at=ns({shirt:ve(n0),pants:ve(i0),skin:ve(Qs),hair:ve(tr),role:"pedestrian",height:.92+Math.random()*.13}),Et={group:at,blockX:I*60-120,blockZ:U*60-120,segment:Math.floor(Math.random()*4),t:Math.random(),speed:1.1+Math.random()*.75,offset:19.2+Math.random()*1.4,phase:Math.random()*10};if(Uc(Et),o.add(at),m.push(Et),Math.random()<.2){const Dt=ur(Math.random()<.75?"dog":"cat",Math.random()<.5?12749658:14270883);Dt.position.copy(at.position),o.add(Dt),Et.pet=Dt}}});for(let I=0;I<4;I++){const U=ur(I%2?"cat":"dog",I%2?14270883:9070153),q=Math.random()*Math.PI*2,Z=7+Math.random()*12;U.position.set(Math.cos(q)*Z,.2,120+Math.sin(q)*Z),U.rotation.y=Math.random()*Math.PI*2,o.add(U),x.push({group:U,phase:Math.random()*10,center:U.position.clone()})}for(let I=0;I<22;I++){const U=I===2||I===15,q=Qo({color:U?15921900:[14179154,5215705,15259300,5988205,5812619,13863755,9137333][I%7],type:I%6===0?"suv":"car",police:U,taxi:!U&&I%5===0}),Z=N();q.position.copy(Z.position),q.rotation.y=Z.rotation,o.add(q),S.push({group:q,...Z})}Ws(o,c,E,n,{x:13,z:21,rotation:Math.PI*.5,color:4165578,type:"car",label:"Drive the blue hatchback"}),Ws(o,c,E,n,{x:-13,z:20,rotation:-Math.PI*.5,color:15194035,type:"suv",label:"Drive the cream SUV"}),Ws(o,c,E,n,{x:48,z:44,rotation:Math.PI,color:15686485,type:"car",label:"Drive the red coupe"}),Ws(o,c,E,n,{x:55,z:44,rotation:Math.PI,color:6731752,type:"car",label:"Drive the blue compact"}),b0(o);function N(I=Math.random()){const U=li(Math.floor(I*1e9)),q=U()<.5?"x":"z",Z=U()<.5?1:-1,it=Math.floor(U()*6),at=3.3;let Et,Dt;if(q==="x"){const Pt=Te.roads[it]+(Z>0?at:-at),J=Z>0?-165:165,pt=Z>0?165:-165;Et=new D(J,0,Pt),Dt=new D(pt,0,Pt)}else{const Pt=Te.roads[it]+(Z>0?-at:at),J=Z>0?-165:165,pt=Z>0?165:-165;Et=new D(Pt,0,J),Dt=new D(Pt,0,pt)}return{from:Et,to:Dt,position:Et.clone(),rotation:Math.atan2(Dt.x-Et.x,Dt.z-Et.z),speed:7.5+U()*4.5,progress:U()*.8,axis:q,dir:Z,laneOffset:at}}function z(I){for(const U of S){if(U.progress+=U.speed*I/Math.max(1,U.from.distanceTo(U.to)),U.progress>=1){U.progress=0,U.from.copy(U.to);const q=Math.abs(U.to.x)>160,Z=Math.abs(U.to.z)>160;if(q||Z||Math.random()<.22)if(U.axis==="x"){U.axis="z";const it=Math.random()<.5?1:-1,at=U.from.x+(it>0?-U.laneOffset:U.laneOffset);U.from.x=at,U.to.set(at,0,it>0?165:-165),U.dir=it}else{U.axis="x";const it=Math.random()<.5?1:-1,at=U.from.z+(it>0?U.laneOffset:-U.laneOffset);U.from.z=at,U.to.set(it>0?165:-165,0,at),U.dir=it}}U.position.lerpVectors(U.from,U.to,U.progress),U.rotation=Math.atan2(U.to.x-U.from.x,U.to.z-U.from.z),U.group.position.copy(U.position),U.group.rotation.y=U.rotation,wl(U.group,U.speed,I)}}function V(I){for(const U of m)if(U.t+=U.speed*I/38,U.t>=1&&(U.t=0,U.segment=(U.segment+1)%4,Math.random()<.18&&(U.segment=(U.segment+3)%4)),Uc(U),ls(U.group,I,U.speed),U.pet){const q=U.group.position.x-Math.sin(U.group.rotation.y)*.9,Z=U.group.position.z-Math.cos(U.group.rotation.y)*.9;U.pet.position.lerp(new D(q,.2,Z),1-Math.pow(.001,I)),U.pet.rotation.y=U.group.rotation.y,ta(U.pet,I,U.speed)}for(const U of x)U.phase+=I,ta(U.group,I,.4),U.group.position.y=.2+Math.sin(U.phase*1.5)*.015;for(const U of p)ls(U,I,0)}function F(I,U){const q=(I%1440+1440)%1440,Z=(q-360)/1440*Math.PI*2,it=Math.sin(Z),at=Ot(it*1.5+.12,0,1),Et=1-at,Dt=Math.max(0,1-Math.abs(it)*3.4)*(q>300&&q<1020?1:.4),Pt=new D(Math.cos(Z)*.85,Math.max(.05,it),.5).normalize();v.position.copy(Pt).multiplyScalar(150).add(new D(U.x,0,U.z)),v.target.position.set(U.x,0,U.z),v.intensity=.15+at*2.5,v.color.setHSL(.09+Dt*.02,.55,.62+at*.18),A.intensity=.18+at*.95,A.color.setHSL(.55,.35,.5+at*.3),A.groundColor.setHSL(.07,.2,.1+at*.16),g.update({daylight:at,sunset:Dt,sunDir:Pt}),w.material.opacity=Et*.75,w.visible=Et>.04,w.position.copy(U);const J=new Rt().setHSL(.56,.22,.12+at*.55);R.color.copy(J),i.background.copy(J),R.density=.0038+Et*.0015;const pt=.12+Et*1.15;for(const nt of d)nt.emissiveIntensity=pt;for(const nt of _)nt.emissiveIntensity=.7+Et*1.5;for(const nt of h)nt.emissiveIntensity=.35+Et*2.2;for(const nt of f)nt.material.opacity=.12+Et*.55;for(const nt of M)nt.lights.forEach((wt,At)=>{const Ut=Math.floor(q/.35)%3===At;wt.emissiveIntensity=Ut?2.3:.08});return{daylight:at,night:Et,sunHeight:it}}function H(I,U,q){return z(I),V(I),F(U,q)}return{world:o,buildings:l,businessMap:u,colliders:a,interactables:c,traffic:S,pedestrians:m,parkedCars:E,trafficLights:M,streetlightMats:h,windowMaterials:d,sun:v,hemi:A,sky:g,update:H,getBuilding:I=>u.get(I),spawnOwnedCar(I){const U=Qo({color:I.color,type:I.type==="scooter"?"scooter":"car",taxi:I.type==="taxi"}),q=new D(43+T.length*6.5,.2,41.5+T.length%2*2.6);U.position.copy(q),U.rotation.y=Math.PI,o.add(U),T.push(U);const Z={id:`owned-${I.id}-${T.length}`,type:"car",position:q.clone(),radius:2.8,label:`Drive ${I.name}`,icon:"🚗",data:{carGroup:U,vehicle:I},handler:()=>n(U,I)};return c.push(Z),{car:U,entry:Z}}}}function Uc(i){const t=i.offset,e=[new Ft(-t,-t),new Ft(t,-t),new Ft(t,t),new Ft(-t,t)],n=e[i.segment],s=e[(i.segment+1)%4],r=i.blockX+n.x+(s.x-n.x)*i.t,o=i.blockZ+n.y+(s.y-n.y)*i.t;i.group.position.set(r,.2,o),i.group.rotation.y=Math.atan2(s.x-n.x,s.y-n.y)}function Ws(i,t,e,n,{x:s,z:r,rotation:o,color:a,type:c,label:l}){const u=Qo({color:a,type:c});u.position.set(s,.2,r),u.rotation.y=o,i.add(u),e.push(u);const d={id:`parked-${s}-${r}`,type:"car",position:new D(s,.2,r),radius:3,label:l,icon:"🚗",data:{carGroup:u,vehicle:null},handler:()=>n(u,null)};return t.push(d),u}function m0(i){const t={topColor:{value:new Rt(3432348)},bottomColor:{value:new Rt(16763275)},sunColor:{value:new Rt(16766881)},sunDir:{value:new D(.4,.6,.2)},offset:{value:12}},e=new ln({uniforms:t,side:We,depthWrite:!1,fog:!1,vertexShader:`
      varying vec3 vWorld;
      void main() {
        vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform vec3 sunColor;
      uniform vec3 sunDir;
      varying vec3 vWorld;
      void main() {
        vec3 dir = normalize(vWorld);
        float h = smoothstep(-0.15, 0.7, dir.y);
        vec3 col = mix(bottomColor, topColor, h);
        float horizon = pow(1.0 - abs(dir.y), 8.0);
        col += sunColor * horizon * 0.2;
        float sun = pow(max(dot(dir, normalize(sunDir)), 0.0), 180.0);
        col += sunColor * sun * 1.4;
        gl_FragColor = vec4(col, 1.0);
      }
    `}),n=new L(new ye(750,32,20),e);return n.frustumCulled=!1,i.add(n),n.update=({daylight:s,sunset:r,sunDir:o})=>{t.sunDir.value.copy(o);const a=new Rt(3038357),c=new Rt(12113375),l=new Rt(2829662),u=new Rt(16751970),d=new Rt(330004),h=new Rt(1516601),f=new Rt().copy(d).lerp(a,s),_=new Rt().copy(h).lerp(c,s);r>.05&&(f.lerp(l,r*.5),_.lerp(u,r*.8)),t.topColor.value.copy(f),t.bottomColor.value.copy(_),t.sunColor.value.setHSL(.07+s*.03,.8,.65)},n}function g0(i){const e=new Le,n=new Float32Array(650*3),s=li(321);for(let a=0;a<650;a++){const c=s()*Math.PI*2,l=Math.acos(s()*.85),u=580;n[a*3]=Math.sin(l)*Math.cos(c)*u,n[a*3+1]=Math.cos(l)*u+30,n[a*3+2]=Math.sin(l)*Math.sin(c)*u}e.setAttribute("position",new sn(n,3));const r=new ll({color:16774096,size:1.8,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0}),o=new Hh(e,r);return o.frustumCulled=!1,i.add(o),o}function _0(i){const t=new L(new ne(900,900),new j({color:3160891,roughness:1}));t.rotation.x=-Math.PI/2,t.position.y=-.12,t.receiveShadow=!0,i.add(t);const e=new L(new ne(360,360),new j({color:2895928,roughness:1}));e.rotation.x=-Math.PI/2,e.position.y=-.07,e.receiveShadow=!0,i.add(e)}function x0(i,t){const e=new j({color:Js.asphalt,roughness:.96}),n=new j({color:Js.sidewalk,roughness:.95}),s=new j({color:Js.curb,roughness:.9});for(const h of Te.roads){const f=new L(new ne(Te.roadWidth,360),e);f.rotation.x=-Math.PI/2,f.position.set(h,0,0),f.receiveShadow=!0,i.add(f)}for(const h of Te.roads){const f=new L(new ne(360,Te.roadWidth),e);f.rotation.x=-Math.PI/2,f.position.set(0,0,h),f.receiveShadow=!0,i.add(f)}for(const h of Te.centers)for(const f of Te.centers){if(h===0&&f===120)continue;const _=new L(new K(Te.block,.18,Te.block),n);_.position.set(h,.09,f),_.receiveShadow=!0,i.add(_);const S=new L(new K(Te.block+.6,.08,Te.block+.6),s);S.position.set(h,.04,f),i.add(S);const m=new ee({color:6646902,transparent:!0,opacity:.55});for(let p=-1;p<=1;p+=2){const x=new L(new ne(.08,Te.block-2),m);x.rotation.x=-Math.PI/2,x.position.set(h+p*14,.185,f),i.add(x)}}const r=new K(.13,.02,3.1),o=new K(.11,.02,4.6),a=new ee({color:15855331,transparent:!0,opacity:.7}),c=new ee({color:15780186,transparent:!0,opacity:.8});for(const h of Te.roads)for(let f=-170;f<170;f+=8){for(const m of[-1,1]){const p=new L(r,a);p.position.set(h+m*4.1,.015,f),i.add(p)}const _=new L(o,c);_.position.set(h-.16,.016,f),i.add(_);const S=new L(o,c);S.position.set(h+.16,.016,f),i.add(S)}for(const h of Te.roads)for(let f=-170;f<170;f+=8){for(const m of[-1,1]){const p=new L(new K(3.1,.02,.13),a);p.position.set(f,.015,h+m*4.1),i.add(p)}const _=new L(new K(4.6,.02,.11),c);_.position.set(f,.016,h-.16),i.add(_);const S=new L(new K(4.6,.02,.11),c);S.position.set(f,.016,h+.16),i.add(S)}const l=new ee({color:15921126,transparent:!0,opacity:.82}),u=new K(.75,.025,4.2),d=new K(4.2,.025,.75);for(const h of Te.roads)for(const f of Te.roads)for(const _ of[-1,1])for(let S=-3;S<=3;S++){const m=new L(u,l);m.position.set(h+S*1.1,.03,f+_*(Te.roadWidth/2+3)),i.add(m);const p=new L(d,l);p.position.set(h+_*(Te.roadWidth/2+3),.03,f+S*1.1),i.add(p)}}function v0(i,t){const e=li(8855),n=new j({color:5793396,roughness:.9});for(let s=0;s<34;s++){const r=s/34*Math.PI*2+e()*.1,o=210+e()*130,a=14+e()*26,c=14+e()*26,l=20+e()*80,{diffuse:u,emissive:d}=bl({base:"#67717c",accent:"#ffc46b",cols:4,rows:Math.max(5,Math.floor(l/7)),seed:s+400,lit:.22}),h=new j({map:u,emissiveMap:d,emissive:16777215,emissiveIntensity:.2,roughness:.9});t.push(h);const f=new L(new K(a,l,c),h);if(f.position.set(Math.cos(r)*o,l/2-2,Math.sin(r)*o),f.rotation.y=e()*Math.PI,i.add(f),e()<.35){const _=new L(new K(a*.5,6+e()*8,c*.5),n);_.position.set(f.position.x,l+3,f.position.z),_.rotation.y=f.rotation.y,i.add(_)}}}function M0(i,t,e,n){const s=new Qt,[r,o]=i.size,a=i.height,c=new Rt(i.color),l=new Rt(i.accent),u=i.type==="house",d=i.type==="mall",h=a>18,f=bl({base:i.color,accent:i.accent,cols:h?6:5,rows:Math.max(3,i.floors*2),seed:t+12,lit:.28+i.floors%3*.06,style:h?"lux":"grid"}),_=new j({map:f.diffuse,emissiveMap:f.emissive,emissive:16777215,emissiveIntensity:.2,roughness:.82,metalness:.06});e.push(_);const S=new j({color:c.clone().offsetHSL(0,0,-.08),roughness:.9}),m=[_,_,S,S,_,_],p=u?a:4.3,x=Math.max(1,a-p);if(!u){const F=new L(new K(r,x,o),m);if(F.position.y=p+x/2,F.castShadow=!0,F.receiveShadow=!0,s.add(F),d){const H=new j({color:2833220,emissive:6130577,emissiveIntensity:.5,metalness:.5,roughness:.18});for(let Dt=1;Dt<=3;Dt++){const Pt=new L(new K(r+.2,.22,o+.2),H);Pt.position.y=4.3+Dt*5.1,s.add(Pt)}const I=new j({color:10146776,transparent:!0,opacity:.55,metalness:.5,roughness:.1,emissive:5934739,emissiveIntensity:.35}),U=new L(new K(r*.62,13.5,.35),I);U.position.set(0,11.4,o/2+.14),s.add(U);for(let Dt=-3;Dt<=3;Dt++){const Pt=new L(new K(.13,13.5,.5),new j({color:9411490,metalness:.6,roughness:.3}));Pt.position.set(Dt*(r*.62/7),11.4,o/2+.34),s.add(Pt)}const q=new L(new K(r*.55,.18,4.3),new j({color:3357767,metalness:.5,roughness:.3}));q.position.set(0,4.35,o/2+2.1),s.add(q);const Z=new L(new K(r*.53,.04,4.1),new ee({color:16763276,transparent:!0,opacity:.55}));Z.position.set(0,4.24,o/2+2.1),s.add(Z);const it=new ee({map:hi("HARBOR MALL",{color:"#ffe6b9",bg:"#17202c",accent:"#ff8a5b",sub:"SHOP  ·  EAT  ·  STAY",width:1024,height:220}),transparent:!0,depthWrite:!1});n.push(it);const at=new L(new ne(22,4.6),it);at.position.set(0,21.3,o/2+.18),s.add(at);const Et=new L(new K(22.6,5.1,.2),new j({color:1844271,metalness:.4,roughness:.4}));Et.position.set(0,21.3,o/2+.08),s.add(Et)}if(h){const H=r*.58,I=o*.6,U=new L(new K(H,5.5,I),S);U.position.y=a+2.75,U.castShadow=!0,s.add(U);const q=new L(new Zt(.08,.13,7,6),new j({color:3028288,metalness:.7,roughness:.4}));q.position.y=a+9,s.add(q);const Z=new L(new ye(.22,8,6),new j({color:16731726,emissive:16720418,emissiveIntensity:2.5}));Z.position.y=a+12.5,s.add(Z)}else{const H=new L(new K(r+.4,.6,o+.4),S);H.position.y=a+.25,s.add(H);for(let I=0;I<2;I++){const U=new L(new K(2.2,1,2.2),new j({color:7371394,metalness:.4,roughness:.6}));U.position.set((I-.5)*5,a+1.1,-o*.18),s.add(U)}}}const E=new j({color:5998480,emissive:l,emissiveIntensity:.38,metalness:.25,roughness:.18,transparent:!0,opacity:.82});if(n.push(E),u){const F=new L(new K(r*.82,6.2,o*.8),m);F.position.y=3.2,F.castShadow=!0,F.receiveShadow=!0,s.add(F);const H=new j({color:7097660,roughness:.95});for(const Z of[-1,1]){const it=new L(new K(r*.88,.24,o*.52),H);it.position.set(0,7.1,Z*o*.2),it.rotation.x=Z*-.55,it.castShadow=!0,s.add(it)}const I=new L(new K(.8,2.2,.8),new j({color:9136724}));I.position.set(r*.28,8.1,-o*.18),s.add(I);const U=new L(new K(r*.55,.16,3.2),new j({color:9071180}));U.position.set(0,.45,o*.58),s.add(U);for(const Z of[-1,1]){const it=new L(new Zt(.11,.13,2.8,7),new j({color:15130060}));it.position.set(Z*r*.22,1.75,o*.68),s.add(it)}const q=new L(new K(1.7,2.7,.14),new j({color:4024934,roughness:.55}));q.position.set(0,1.55,o*.41),s.add(q);for(const Z of[-1,1]){const it=new j({color:3691612,emissive:16761963,emissiveIntensity:.45,roughness:.2}),at=new L(new K(2.5,1.9,.1),it);at.position.set(Z*r*.26,3.4,o*.41),s.add(at)}return $n(s,0,0,2.2,!0),Nc(s,i,r,o,6.5,n),{group:s}}const M=Math.min(r*.72,17),T=new L(new K(M,2.9,.12),E);T.position.set(0,2.15,o/2+.06),s.add(T);const v=new j({color:2830907,metalness:.5,roughness:.45});for(let F=-2;F<=2;F++){const H=new L(new K(.1,3.1,.16),v);H.position.set(F*M/4.6,2.15,o/2+.14),s.add(H)}const A=new L(new K(M+.5,.22,.3),new j({color:10130313,roughness:.8}));A.position.set(0,.55,o/2+.1),s.add(A);const g=new L(new K(2.1,2.9,.14),new j({color:2901584,metalness:.3,roughness:.2,emissive:2573387,emissiveIntensity:.4}));g.position.set(0,1.9,o/2+.17),s.add(g);const w=new L(new K(.06,.5,.06),new j({color:15321205,metalness:.8,roughness:.2}));w.position.set(.55,1.9,o/2+.25),s.add(w);const R=new L(new K(M+1.1,.14,1.6),new j({color:2830907,metalness:.5,roughness:.35}));R.position.set(0,3.8,o/2+.75),s.add(R);const P=new L(new K(M+.8,.04,1.4),new ee({color:l,transparent:!0,opacity:.65}));P.position.set(0,3.72,o/2+.75),s.add(P);const N=Hi(l,4.2,.25);N.position.set(0,3,o/2+1.2),s.add(N),Nc(s,i,r,o,5.25,n),$n(s,0,0,Math.max(r,o)*.42,!0);const z=new j({color:4015438,metalness:.4,roughness:.5}),V=new L(new K(r+.6,.18,o+.6),z);return V.position.y=4.35,s.add(V),{group:s}}function Nc(i,t,e,n,s,r){const o=Math.min(e*.62,10.5),a=o*.2,c=new ee({map:hi(t.name,{color:t.signColor,bg:"#131923",accent:t.accent,sub:t.category,width:1024,height:220}),transparent:!0,depthWrite:!1});r.push(c);const l=new L(new ne(o,a),c);l.position.set(0,s,n/2+.22),i.add(l);const u=new L(new K(o+.35,a+.35,.18),new j({color:1514532,roughness:.6}));u.position.set(0,s,n/2+.12),i.add(u);const d=Hi(t.accent,o*.75,.25);if(d.position.set(0,s,n/2+.4),i.add(d),t.height>17){t.name.toUpperCase().replace(/\s+/g,`
`);const h=new ee({map:hi(t.short,{color:t.signColor,bg:"#121822",accent:t.accent,width:256,height:640}),transparent:!0,depthWrite:!1});r.push(h);const f=new L(new ne(2.1,5.2),h);f.position.set(e/2+.02,s+6.5,n/2-1.8),f.rotation.y=Math.PI/2,i.add(f)}}function y0(i,t,e,n,s){const r=li(5521),o=Te.centers;for(const c of o)for(const l of o){if(c===0&&l===120)continue;if((c+l)%120!==0||r()<.55){const h=El(.85+r()*.45,r()<.2);h.position.set(c+(r()<.5?-19:19),.2,l+(r()<.5?-19:19)),i.add(h)}const u=l0();u.position.set(c+20.5,.2,l-20.5),u.rotation.y=Math.PI*.75,i.add(u),e.push(u.userData.lampMat),n.push(u.userData.glow);const d=u0();d.position.set(c-18.5,.2,l+19.5),i.add(d)}for(const[c,l]of[[-14,17],[14,17],[-14,43],[14,43],[-4,17],[4,17]]){const u=h0();u.position.set(c,.2,l),i.add(u)}for(const[c,l,u]of[[-20,12,0],[20,12,0],[-20,42,Math.PI],[20,42,Math.PI],[0,100,Math.PI/2],[-12,128,0],[12,128,Math.PI]]){const d=Tl();d.position.set(c,.2,l),d.rotation.y=u,i.add(d)}for(const c of[-90,-30,30,90])for(const l of[-90,-30,30,90]){const u=d0();u.position.set(c+8.5,.2,l+8.5),i.add(u),s.push(u.userData)}[{x:-60,z:-120,rot:0,text:"HARBOR CITY",sub:"OPEN ALL NIGHT",accent:"#58e6d2"},{x:60,z:-120,rot:0,text:"VOLT",sub:"DRIVE THE CURRENT",accent:"#4fd8ff"},{x:120,z:120,rot:Math.PI,text:"GLOW",sub:"SELF CARE CLUB",accent:"#b78bff"}].forEach((c,l)=>{const u=new ee({map:hi(c.text,{color:"#fff2d7",bg:"#111722",accent:c.accent,sub:c.sub,width:1024,height:280}),transparent:!0,depthWrite:!1});t.push(u);const d=new L(new ne(16,4.4),u);d.position.set(c.x,26+l*2,c.z),d.rotation.y=c.rot,i.add(d);const h=new L(new K(16.5,4.9,.2),new j({color:1778220}));h.position.set(c.x,26+l*2,c.z+(c.rot?.1:-.1)),h.rotation.y=c.rot,i.add(h)})}function S0(i){const n=new L(new K(44,.2,44),new j({color:Js.grass,roughness:1}));n.position.set(0,.1,120),n.receiveShadow=!0,i.add(n);const s=new j({color:12957598,roughness:1}),r=new L(new ne(4,42),s);r.rotation.x=-Math.PI/2,r.position.set(0,.22,120),i.add(r);const o=new L(new ne(42,4),s);o.rotation.x=-Math.PI/2,o.position.set(0,.22,120),i.add(o);const a=new L(new Zt(4.2,4.6,.7,20),new j({color:11972e3,roughness:.85}));a.position.set(0,.55,120),i.add(a);const c=new L(new Zt(3.6,3.6,.18,20),new j({color:5814473,metalness:.2,roughness:.12,transparent:!0,opacity:.85}));c.position.set(0,.95,120),i.add(c);const l=new L(new Zt(.35,.5,2.6,10),new j({color:11972e3}));l.position.set(0,2.1,120),i.add(l);const u=new L(new ye(.55,12,9),new j({color:5814473,metalness:.3,roughness:.15}));u.position.set(0,3.5,120),i.add(u);const d=li(919);for(let f=0;f<13;f++){const _=d()*Math.PI*2,S=8+d()*12,m=0+Math.cos(_)*S,p=120+Math.sin(_)*S;if(Math.abs(m-0)<3.5||Math.abs(p-120)<3.5)continue;const x=El(.8+d()*.55,d()<.25);x.position.set(m,.22,p),i.add(x)}for(const[f,_,S]of[[-7,111,0],[7,111,0],[-7,129,Math.PI],[7,129,Math.PI],[-13,120,Math.PI/2],[13,120,-Math.PI/2]]){const m=Tl();m.position.set(f,.22,_),m.rotation.y=S,i.add(m)}const h=new L(new ne(4,3),new j({color:13851477,roughness:1}));h.rotation.x=-Math.PI/2,h.rotation.z=.3,h.position.set(-10,.23,112),i.add(h)}function b0(i){const t=new ee({map:hi("HARBOR CITY",{color:"#fff0cc",bg:"#111722",accent:"#58e6d2",sub:"A CITY THAT NEVER SITS STILL",width:1024,height:260}),transparent:!0,depthWrite:!1}),e=new L(new ne(11,2.8),t);e.position.set(-21,7.2,21.8),e.rotation.y=.25,i.add(e);const n=new L(new K(11.5,3.3,.2),new j({color:1383204}));n.position.set(-21,7.2,21.6),n.rotation.y=.25,i.add(n);const s=Hi(5826258,7,.25);s.position.set(-21,7.2,22),i.add(s)}const w0={mall:[28,20],gym:[25,18],dealership:[26,18],hotel:[23,17],hospital:[24,17],house:[23,17],restaurant:[23,17],bar:[23,16]};function E0(i,{onShop:t,onExit:e,onSleep:n,onJobBoard:s,onTalk:r}){const o=new Qt;o.name="Interiors",i.add(o);const a=new Map,c=[];let l=0;for(const d of es){if(!d.interior)continue;const h=w0[d.type]||[20,15],f=new Qt,_=l*72,S=-900;f.position.set(_,S,0),o.add(f);const m=new Rt(d.accent),p=T0(f,h,m,d),x=A0(d,f,h,m,c),E=new D(_,S+.1,h[1]/2-5.6),M=new D(_,S+.1,h[1]/2-.4),T={minX:_-h[0]/2+.8,maxX:_+h[0]/2-.8,minZ:-h[1]/2+.8,maxZ:h[1]/2-.8,baseY:S},v=[],A=ns({shirt:new Rt(d.accent).getHex(),pants:2699841,skin:ve(Qs),hair:ve(tr),role:d.type==="cafe"?"barista":d.type==="restaurant"?"chef":d.type==="hospital"?"doctor":d.type==="police"?"police":"worker",height:1}),g=new D(x.workerOffset?.x??3.1,0,x.workerOffset?.z??-h[1]/2+2.4);A.position.copy(g).add(new D(_,S+.1,0)),A.rotation.y=Math.PI+(x.workerFacing??0),f.add(A);const w=new D(0,0,x.counterZ??-h[1]/2+3.2);!d.residential&&d.type!=="house"&&v.push({id:`counter-${d.id}`,type:"counter",position:new D(w.x+_,S+.1,w.z+1.55),radius:2.6,label:d.type==="jobcenter"?"Browse city jobs":d.type==="cafe"?"Order at the counter":`Browse ${d.name}`,icon:d.type==="jobcenter"?"💼":"🛍️",data:{businessId:d.id},handler:()=>{d.type==="jobcenter"?s():d.type==="police"?r({role:"police",name:"Officer Reed"}):lr[d.type]?.length?t(d.id):r({role:"worker",name:ve(Xn),businessId:d.id})}}),d.type==="house"&&v.push({id:"bed-house",type:"bed",position:new D(_-6.5,S+.1,-1.5),radius:3.1,label:"Sleep until morning",icon:"🛌",data:{},handler:n}),d.type==="hotel"&&v.push({id:"bed-hotel",type:"bed",position:new D(_+7.2,S+.1,-3),radius:2.8,label:"Book a room at the front desk",icon:"🛌",data:{},handler:()=>t("hotel")}),v.push({id:`exit-${d.id}`,type:"exit",position:M,radius:2.1,label:`Leave ${d.name}`,icon:"↩️",data:{businessId:d.id},handler:e}),v.push({id:`inside-staff-${d.id}`,type:"npc",position:A.position.clone().add(new D(0,0,1.4)),radius:2.2,label:`Talk to ${d.type==="police"?"Officer Reed":d.type==="hospital"?"Dr. Chen":ve(Xn)}`,icon:"💬",data:{role:d.type==="police"?"police":d.type==="hospital"?"doctor":"worker",name:ve(Xn),businessId:d.id},handler:()=>r({role:d.type==="police"?"police":d.type==="hospital"?"doctor":"worker",name:ve(Xn),businessId:d.id})}),a.set(d.id,{business:d,group:f,size:h,entry:E,exitPos:M,bounds:T,interactables:v,worker:A,counterPos:new D(w.x+_,S+.1,w.z+1.55),light:p.light}),l++}function u(d,h){for(const f of a.values())ls(f.worker,d,0),h===f.business.id&&(f.light.intensity=22+Math.sin(performance.now()*.0012+f.entry.x)*1.5)}return{root:o,interiors:a,update:u,accentMats:c}}function T0(i,[t,e],n,s){const r=new j({color:5593696,roughness:.88}),o=new j({color:new Rt(s.color).offsetHSL(0,-.05,-.14),roughness:.9});new j({color:2237996,roughness:.8});const a=new j({color:13155752,roughness:.85}),c=new L(new ne(t,e),r);c.rotation.x=-Math.PI/2,c.position.y=0,c.receiveShadow=!0,i.add(c);const l=new j({color:n.clone().multiplyScalar(.38),roughness:1}),u=new L(new ne(t*.42,e*.28),l);u.rotation.x=-Math.PI/2,u.position.set(0,.012,1.2),i.add(u);const d=new L(new K(t,4.3,.26),o);d.position.set(0,2.15,-e/2),d.receiveShadow=!0,i.add(d);for(const R of[-1,1]){const P=new L(new K(.26,4.3,e),o);P.position.set(R*t/2,2.15,0),P.receiveShadow=!0,i.add(P)}const h=3.4,f=(t-h)/2;for(const R of[-1,1]){const P=new L(new K(f,4.3,.26),o);P.position.set(R*(h/2+f/2),2.15,e/2),i.add(P)}const _=new L(new K(h+.4,.8,.3),o);_.position.set(0,3.9,e/2),i.add(_);const S=new j({color:2370097,metalness:.4,roughness:.5});for(const R of[-1,1]){const P=new L(new K(.15,3.2,.18),S);P.position.set(R*h/2,1.6,e/2-.08),i.add(P)}const m=new L(new K(h+.2,.14,.2),S);m.position.set(0,3.22,e/2-.08),i.add(m);const p=new j({color:8833208,emissive:5826258,emissiveIntensity:.9}),x=new L(new K(h-.2,.06,.08),p);x.position.set(0,.03,e/2-.2),i.add(x);const E=new L(new ne(h-.3,1.2),new j({color:7036496,roughness:1}));E.rotation.x=-Math.PI/2,E.position.set(0,.014,e/2-.7),i.add(E);const M=new L(new K(t,.22,e),new j({color:2369582,roughness:.9}));M.position.set(0,4.42,0),i.add(M);const T=new ee({color:16771268});for(const R of[-t*.24,t*.24])for(const P of[-e*.22,e*.18]){const N=new L(new ne(2.8,1),T);N.rotation.x=Math.PI/2,N.position.set(R,4.29,P),i.add(N)}const v=new Qh(16766624,34,30,2);v.position.set(0,3.6,1.2),i.add(v);for(const R of[-1,1]){const P=new L(new K(.08,.16,e-.4),a);P.position.set(R*(t/2-.16),.1,0),i.add(P)}const A=new L(new K(t-.4,.16,.08),a);A.position.set(0,.1,-e/2+.18),i.add(A);const g=new ee({map:hi(s.name,{color:s.signColor,bg:"#161b22",accent:s.accent,sub:s.category,width:1024,height:240}),transparent:!0}),w=new L(new ne(6.2,1.55),g);return w.position.set(0,3.5,-e/2+.15),i.add(w),{light:v,doorW:h}}function A0(i,t,[e,n],s,r){const o=new j({color:2435633,roughness:.75}),a=new j({color:9200196,roughness:.8}),c=new j({color:15197144,roughness:.65}),l=new j({color:10265515,metalness:.6,roughness:.3}),u=new j({color:s,roughness:.6}),d=-n/2+3.4;let h={x:3.1,z:d-.8},f=0;const _=(M=0,T=d,v=5.2)=>{const A=new L(new K(v,1.05,1.15),a);A.position.set(M,.55,T),A.castShadow=!0,t.add(A);const g=new L(new K(v+.2,.09,1.3),u);g.position.set(M,1.1,T),t.add(g);const w=new L(new K(v,.35,.06),u);w.position.set(M,.55,T+.6),t.add(w);const R=new L(new K(.65,.35,.45),o);R.position.set(M+v*.27,1.32,T),t.add(R);const P=new L(new K(.55,.4,.04),new j({color:1582893,emissive:5826258,emissiveIntensity:.6}));P.position.set(M+v*.27,1.62,T+.08),P.rotation.x=-.18,t.add(P)},S=(M,T,v=3.2,A=2.1,g=0,w=!0)=>{const R=new Qt;R.position.set(M,0,T),R.rotation.y=g;for(let P=0;P<3;P++){const N=new L(new K(v,.08,.55),l);N.position.y=.45+P*.55,R.add(N)}for(const P of[-1,1]){const N=new L(new K(.07,A,.55),l);N.position.set(P*v/2,A/2,0),R.add(N)}if(w){const P=[16743531,5826258,15909198,10124543,8047466,16757852];for(let N=0;N<3;N++)for(let z=0;z<4;z++){const V=new L(new K(.3,.3,.3),new j({color:P[(N*4+z)%P.length],roughness:.7}));V.position.set(-v/2+.45+z*(v-.9)/3,.65+N*.55,0),R.add(V)}}t.add(R)},m=(M,T,v=!1)=>{const A=v?new L(new Zt(.75,.75,.1,12),a):new L(new K(1.8,.1,1.1),a);A.position.set(M,.78,T),t.add(A);const g=new L(new Zt(.08,.12,.75,8),l);g.position.set(M,.38,T),t.add(g);for(const w of[-1,1]){const R=new L(new K(.5,.45,.5),o);R.position.set(M+w*1.15,.34,T),t.add(R);const P=new L(new K(.5,.6,.08),o);P.position.set(M+w*1.15,.7,T-.21),t.add(P)}},p=(M,T,v=1)=>{const A=new L(new Zt(.32*v,.26*v,.5*v,8),c);A.position.set(M,.25*v,T),t.add(A);const g=new L(new ds(.55*v,1),new j({color:6134628,roughness:.95}));g.position.set(M,.9*v,T),g.scale.y=1.2,t.add(g)},x=(M,T,v,A=0,g=4.2,w=i.accent)=>{const R=new ee({map:hi(M,{color:"#fff0d2",bg:"#121820",accent:w,width:1024,height:220}),transparent:!0});r.push(R);const P=new L(new ne(g,g*.22),R);P.position.set(T,2.9,v),P.rotation.y=A,t.add(P);const N=Hi(w,g*.8,.18);N.position.set(T,2.9,v+(A===0?.15:0)),t.add(N)},E=i.type;if(E==="supermarket")_(2.8,d,5),S(-5.2,-2.5,3.4,2.2,Math.PI/2),S(-1.5,-2.5,3.4,2.2,Math.PI/2),S(2.2,-2.5,3.4,2.2,Math.PI/2),S(5.7,-2.5,3.4,2.2,Math.PI/2),S(-4.2,2.5,3,2,Math.PI/2),S(4.2,2.5,3,2,Math.PI/2),p(-8.2,5.7,.9),x("FRESH DAILY",-e*.24,-n/2+.3,0,4.8,"#7acb6a"),h={x:2.8,z:d-.9},f=0;else if(E==="clothing"){_(-6.7,d,4.3),S(-2.4,-3.8,3.2,2,0,!1),S(2.4,-3.8,3.2,2,0,!1);const M=[16743531,5826258,15909198,10124543,15987178,3721648];for(let T=0;T<6;T++){const v=new Qt,A=new L(new oi(.22,.55,4,8),new j({color:M[T],roughness:.8}));A.position.y=1.15,v.add(A);const g=new L(new ye(.16,10,8),new j({color:14070669}));g.position.y=1.72,v.add(g);const w=new L(new Zt(.03,.3,.8,8),l);w.position.y=.4,v.add(w),v.position.set(-6.8+T*2.7,0,2.7),v.rotation.y=Math.random()*.6-.3,t.add(v)}p(7.8,5.4,1),x("NEW SEASON",2,-n/2+.3,0,4.8,"#ff6f91"),h={x:-6.7,z:d-.9}}else if(E==="salon"){_(-6.8,d,4);for(let M=0;M<3;M++){const T=new L(new K(1,.35,1),new j({color:4865628}));T.position.set(-3.8+M*3.5,.55,-.7),t.add(T);const v=new L(new K(1,1.2,.18),new j({color:4865628}));v.position.set(-3.8+M*3.5,1.2,-1.15),t.add(v);const A=new L(new K(1.2,1.7,.06),new j({color:10467264,metalness:.8,roughness:.1}));A.position.set(-3.8+M*3.5,2.2,-n/2+.25),t.add(A);const g=new L(new ye(.09,8,6),new ee({color:16769712}));g.position.set(-3.8+M*3.5,3.1,-n/2+.2),t.add(g)}p(8.2,5.2,.9),x("GLOW",0,-n/2+.3,0,3.4,"#b78bff"),h={x:-6.8,z:d-.9}}else if(E==="restaurant")_(0,d,6.2),m(-5.7,1.8,!0),m(5.7,1.8,!0),m(-5.7,4.8,!0),m(5.7,4.8,!0),p(-8.3,5.6,1),x("COPPER SPOON",0,-n/2+.3,0,6.5,"#ff9e58"),h={x:0,z:d-.9};else if(E==="bar"){const M=new L(new K(8,1.1,1.5),new j({color:3875890,roughness:.5}));M.position.set(0,.55,d),t.add(M);const T=new L(new K(8.2,.1,1.65),new j({color:13605986,metalness:.25,roughness:.35}));T.position.set(0,1.13,d),t.add(T);for(let v=0;v<5;v++){const A=new L(new Zt(.3,.3,.14,10),u);A.position.set(-2.8+v*1.4,.78,d+1.55),t.add(A);const g=new L(new Zt(.05,.12,.78,8),l);g.position.set(-2.8+v*1.4,.4,d+1.55),t.add(g)}for(let v=0;v<4;v++){const A=new L(new Zt(.06,.09,.45,7),new j({color:[16757852,9426026,16743531,5826258][v],emissive:[16757852,9426026,16743531,5826258][v],emissiveIntensity:.2}));A.position.set(-2.5+v*1.6,1.65,-n/2+.65),t.add(A)}m(-6,4.6,!0),m(6,4.6,!0),x("VELVET ROOM",0,-n/2+.3,0,6,"#d46bff"),h={x:0,z:d-.9}}else if(E==="gym"){_(-8,d,4);const M=new L(new ne(6,4),new j({color:2964036,roughness:1}));M.rotation.x=-Math.PI/2,M.position.set(0,.02,2.5),t.add(M);for(let v=0;v<3;v++){const A=new Qt,g=new L(new K(1.1,.18,2.3),o);g.position.y=.25,A.add(g);const w=new L(new K(.86,.04,1.8),new j({color:1382686}));w.position.y=.35,A.add(w);const R=new L(new K(.08,1.2,.08),l);R.position.set(0,.9,.9),A.add(R);const P=new L(new K(.7,.3,.12),o);P.position.set(0,1.45,.9),A.add(P),A.position.set(-3.5+v*3.4,0,2.4),t.add(A)}const T=new L(new K(4.4,.15,.8),l);T.position.set(4.8,1.7,-3.2),t.add(T);for(let v=0;v<6;v++){const A=new L(new Zt(.3,.3,.16,10),o);A.rotation.z=Math.PI/2,A.position.set(3.2+v*.62,1.15,-3.2),t.add(A)}p(-10,5.4,.9),x("IRON HARBOR",2,-n/2+.3,0,6,"#ffd34d"),h={x:-8,z:d-.9}}else if(E==="hotel"){_(-5.5,d,5.2);const M=new L(new K(4.4,.7,1.4),new j({color:5982816,roughness:.8}));M.position.set(5.8,.45,1.8),t.add(M);const T=new L(new K(4.4,.9,.3),new j({color:5982816,roughness:.8}));T.position.set(5.8,.95,1.2),t.add(T);const v=new L(new K(3.2,.55,5),new j({color:15261647,roughness:.9}));v.position.set(7.4,.45,-3.2),t.add(v);const A=new L(new K(3.4,1.6,.18),a);A.position.set(7.4,1,-5.6),t.add(A),p(-9.2,5.3,1),x("HARBORVIEW",-5.5,-n/2+.3,0,5.6,"#ffc46b"),h={x:-5.5,z:d-.9}}else if(E==="mall"){_(0,d,7.2),S(-7.5,1.2,3.6,2,Math.PI/2),S(-7.5,5.2,3.6,2,Math.PI/2),S(7.5,1.2,3.6,2,Math.PI/2),S(7.5,5.2,3.6,2,Math.PI/2);for(let M=0;M<4;M++){const T=new Qt,v=new L(new oi(.24,.6,4,8),new j({color:[16743531,5826258,15909198,10124543][M]}));v.position.y=1.2,T.add(v);const A=new L(new ye(.16,10,8),new j({color:14070669}));A.position.y=1.8,T.add(A),T.position.set(-4.5+M*3,0,-1.8),t.add(T)}p(-12,7,1.2),p(12,7,1.2),x("EVERYTHING",0,-n/2+.3,0,7,"#ff8a5b"),h={x:0,z:d-.9}}else if(E==="dealership"){_(-8.5,d,4.2);const M=new Qt,T=new L(new K(2,.65,4.2),new j({color:5232895,metalness:.6,roughness:.2}));T.position.y=.7,M.add(T);const v=new L(new K(1.7,.5,2),new j({color:1583672,metalness:.5,roughness:.15}));v.position.set(0,1.22,-.1),M.add(v);for(const g of[-.95,.95])for(const w of[-1.35,1.35]){const R=new L(new Zt(.34,.34,.2,12),o);R.rotation.z=Math.PI/2,R.position.set(g,.35,w),M.add(R)}M.position.set(4.2,0,2.3),M.rotation.y=-.3,t.add(M);const A=new L(new as(3.1,3.25,40),new ee({color:5232895,transparent:!0,opacity:.55,side:Ze}));A.rotation.x=-Math.PI/2,A.position.set(4.2,.03,2.3),t.add(A),x("VOLT MOTORS",3.8,-n/2+.3,0,7,"#4fd8ff"),h={x:-8.5,z:d-.9}}else if(E==="realestate"){_(-5.8,d,4.4);const M=new L(new K(5.2,2.4,.12),o);M.position.set(5.7,2.2,-n/2+.3),t.add(M);const T=new ee({color:10008994}),v=new L(new ne(4.6,1.9),T);v.position.set(5.7,2.2,-n/2+.38),t.add(v);for(let g=0;g<7;g++){const w=new L(new gr(.08,8),new ee({color:g===3?16761963:6130802}));w.position.set(4+g%4*1.1,1.65+Math.floor(g/4)*.7,-n/2+.4),t.add(w)}const A=new L(new K(3.8,.65,1.3),new j({color:6122330}));A.position.set(5.6,.4,3.3),t.add(A),p(-9,5.2,1),x("KEY & STONE",3.8,-n/2+.3,0,5.2,"#8fd46a"),h={x:-5.8,z:d-.9}}else if(E==="petstore"){_(-6.5,d,4.2);for(let M=0;M<3;M++){const T=new Qt,v=new L(new K(2,.5,1.7),c);v.position.y=.25,T.add(v);for(let g=0;g<4;g++){const w=new L(new K(.04,1.3,.04),l);w.position.set(-.9+g*.6,1.15,.82),T.add(w)}const A=new L(new K(2,.08,1.7),c);A.position.y=1.82,T.add(A),T.position.set(-1.5+M*3.2,0,-1.5),t.add(T)}S(6.8,2,2.6,2,Math.PI/2),p(9,5.2,.9),x("PAWS & CO.",3.8,-n/2+.3,0,5.2,"#ffad5c"),h={x:-6.5,z:d-.9}}else if(E==="jobcenter"){_(-6.2,d,4.6);for(let A=0;A<3;A++){const g=new L(new K(2.6,.9,1.2),a);g.position.set(-1.8+A*3.5,.5,2.2),t.add(g);const w=new L(new K(.7,.45,.06),new j({color:1713966,emissive:5880063,emissiveIntensity:.5}));w.position.set(-1.8+A*3.5,1.2,2.3),t.add(w)}const M=new L(new K(5,2.2,.12),o);M.position.set(5.6,2.2,-n/2+.3),t.add(M);const T=new ee({color:14149615}),v=new L(new ne(4.4,1.8),T);v.position.set(5.6,2.2,-n/2+.38),t.add(v),x("CITYWORKS",3.8,-n/2+.3,0,5.8,"#59b8ff"),h={x:-6.2,z:d-.9}}else if(E==="hospital"){_(-6.2,d,5);const M=new L(new K(3,.55,5.2),c);M.position.set(6.8,.45,-2.4),t.add(M);const T=new L(new K(1.7,.25,.9),new j({color:16249834}));T.position.set(6.8,.82,-4.4),t.add(T);const v=new L(new K(2.2,1.8,.8),c);v.position.set(6.8,.9,1),t.add(v);const A=new ee({color:16739192}),g=new L(new K(.5,.16,.05),A);g.position.set(6.8,2.2,-n/2+.2),t.add(g);const w=new L(new K(.16,.5,.05),A);w.position.set(6.8,2.2,-n/2+.2),t.add(w),x("HARBOR GENERAL",3.8,-n/2+.3,0,6.4,"#ff6b78"),h={x:-6.2,z:d-.9}}else if(E==="police"){_(-6.2,d,4.6);for(let A=0;A<3;A++){const g=new L(new K(2.4,.9,1.2),o);g.position.set(-1.8+A*3.4,.5,2.2),t.add(g)}const M=new L(new K(5.2,2.2,.12),o);M.position.set(5.7,2.2,-n/2+.3),t.add(M);const T=new ee({color:9086901}),v=new L(new ne(4.6,1.8),T);v.position.set(5.7,2.2,-n/2+.38),t.add(v),x("9TH PRECINCT",3.8,-n/2+.3,0,6.2,"#4b8dff"),h={x:-6.2,z:d-.9}}else if(E==="cafe"){_(0,d,7),m(-6.2,2,!0),m(6.2,2,!0),m(-6.2,5,!0),m(6.2,5,!0);const M=new L(new K(2.4,.35,.8),new j({color:7228213}));M.position.set(-2.5,1.35,d),t.add(M);for(let T=0;T<4;T++){const v=new L(new ye(.13,8,6),new j({color:14261077}));v.scale.set(1.5,.7,1),v.position.set(-3.3+T*.55,1.58,d),t.add(v)}p(-9.2,5.6,.9),x("BYTE CAFÉ",3.8,-n/2+.3,0,4.8,"#ffb45c"),h={x:0,z:d-.9}}else if(E==="house"){const M=new L(new K(3.4,.55,5.2),new j({color:9138006}));M.position.set(-6.4,.45,-2),t.add(M);const T=new L(new K(3.2,.2,3.7),new j({color:5864056}));T.position.set(-6.4,.78,-1.5),t.add(T);const v=new L(new K(3.5,1.7,.18),a);v.position.set(-6.4,1,-4.6),t.add(v);const A=new L(new K(4,.7,1.4),new j({color:8084043}));A.position.set(4.7,.45,1.8),t.add(A);const g=new L(new K(3.2,1.8,.1),o);g.position.set(4.7,2.1,-n/2+.3),t.add(g);const w=new L(new ne(2.9,1.55),new ee({color:2837589}));w.position.set(4.7,2.1,-n/2+.37),t.add(w);const R=new L(new K(4,.9,1),c);R.position.set(4,.5,-n/2+1.5),t.add(R),p(-9.4,5,1),x("MAPLE HOUSE",3.8,-n/2+.3,0,5.6,"#8fd46a"),h={x:0,z:d-.9}}else if(E==="arcade"){for(let M=0;M<6;M++){const T=new Qt,v=new L(new K(1.1,2.1,.8),o);v.position.y=1.05,T.add(v);const A=new L(new ne(.8,.6),new ee({color:[16735416,5826258,16757852][M%3]}));A.position.set(0,1.55,.41),T.add(A);const g=new L(new K(.8,.12,.5),u);g.position.set(0,1.08,.5),T.add(g),T.position.set(-7+M%3*3.5,0,-2+Math.floor(M/3)*4.5),T.rotation.y=Math.PI,t.add(T)}x("SEASIDE ARCADE",0,-n/2+.3,0,6.2,"#ff5cb8"),h={x:7,z:5}}else if(E==="library"){for(let M=0;M<4;M++){const T=new L(new K(1.4,3,5),a);T.position.set(-7+M*4.7,1.5,-3.4),t.add(T);const v=new L(new K(1.1,2.4,4.6),new j({color:7176047}));v.position.set(-7+M*4.7,1.5,-3.4),t.add(v)}m(-4,3.4),m(4,3.4),x("HARBOR LIBRARY",0,-n/2+.3,0,6.4,"#7fd4c4"),h={x:7.5,z:5}}else{_(-6,d,4.4);const M=new L(new K(4,.7,1.4),new j({color:6253434}));M.position.set(5.8,.45,2.2),t.add(M),p(-9,5.2,1),x(i.short,3.8,-n/2+.3,0,5,i.accent),h={x:-6,z:d-.9}}return $n(t,0,0,Math.min(e,n)*.3,!0),{counterZ:d,workerOffset:h,workerFacing:f}}class C0{constructor(){this.enabled=!0,this.ctx=null,this.master=null,this.ambient=null,this.engine=null}init(){if(this.ctx){this.ctx.resume?.();return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?.22:0,this.master.connect(this.ctx.destination),this.startAmbient())}startAmbient(){if(!this.ctx||this.ambient)return;const t=this.ctx,e=t.createGain();e.gain.value=.05;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=480,n.Q.value=.8,e.connect(n).connect(this.master);const r=[55,82.5,110,164.8].map((h,f)=>{const _=t.createOscillator();_.type=f%2?"sine":"triangle",_.frequency.value=h;const S=t.createGain();return S.gain.value=.08/(f+1),_.connect(S).connect(e),_.start(),_}),o=t.createBuffer(1,t.sampleRate*3,t.sampleRate),a=o.getChannelData(0);let c=0;for(let h=0;h<a.length;h++)c=(c+(Math.random()*2-1)*.02)*.995,a[h]=c;const l=t.createBufferSource();l.buffer=o,l.loop=!0;const u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=240;const d=t.createGain();d.gain.value=.22,l.connect(u).connect(d).connect(this.master),l.start(),this.ambient={gain:e,oscillators:r,noise:l}}setEnabled(t){this.enabled=t,this.master&&this.master.gain.setTargetAtTime(t?.22:0,this.ctx.currentTime,.05)}tone(t,e=.12,n="sine",s=.25,r=0){if(!this.ctx||!this.enabled)return;const o=this.ctx,a=o.createOscillator(),c=o.createGain();a.type=n,a.frequency.setValueAtTime(t,o.currentTime),r&&a.frequency.exponentialRampToValueAtTime(Math.max(30,t+r),o.currentTime+e),c.gain.setValueAtTime(1e-4,o.currentTime),c.gain.exponentialRampToValueAtTime(s,o.currentTime+.012),c.gain.exponentialRampToValueAtTime(1e-4,o.currentTime+e),a.connect(c).connect(this.master),a.start(),a.stop(o.currentTime+e+.02)}click(){this.tone(520,.055,"triangle",.12)}cash(){this.tone(880,.08,"triangle",.16),setTimeout(()=>this.tone(1320,.14,"triangle",.12),70)}door(){this.tone(180,.16,"sine",.12,-60),setTimeout(()=>this.tone(90,.2,"sine",.08),40)}success(){[523,659,784].forEach((t,e)=>setTimeout(()=>this.tone(t,.18,"triangle",.12),e*85))}error(){this.tone(180,.18,"sawtooth",.09,-50)}enterCar(){this.tone(120,.2,"sine",.16),setTimeout(()=>this.tone(90,.35,"sawtooth",.04),100)}setEngine(t=0){if(!this.ctx||!this.enabled)return;if(!this.engine){const n=this.ctx,s=n.createOscillator();s.type="sawtooth",s.frequency.value=60;const r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=220;const o=n.createGain();o.gain.value=0,s.connect(r).connect(o).connect(this.master),s.start(),this.engine={osc:s,filter:r,gain:o}}const e=Math.min(.1,Math.abs(t)*.003);this.engine.gain.gain.setTargetAtTime(e,this.ctx.currentTime,.08),this.engine.osc.frequency.setTargetAtTime(45+Math.abs(t)*3.2,this.ctx.currentTime,.08),this.engine.filter.frequency.setTargetAtTime(180+Math.abs(t)*14,this.ctx.currentTime,.08)}}const Xs="harbor-city-save-v1",R0=new D(0,.2,20.5),P0=-Math.PI/2,Fc=Math.PI/2;function I0(){return{version:1,cash:250,day:0,minutes:hr.startMinutes,stats:{health:100,energy:100,hunger:84,hygiene:79,mood:86},inventory:{},wardrobe:[{id:"starter",name:"Harbor Casual",icon:"👕",style:{shirt:"#e86b4f",pants:"#293241",hair:"#2a211d",accessory:"none"}}],style:{shirt:"#e86b4f",pants:"#293241",hair:"#2a211d",accessory:"none"},outfitName:"Harbor Casual",ownedCars:[],house:!1,pet:null,petHappiness:80,gymMember:!1,jobsDone:0,sound:!0,job:null}}class L0{constructor(t){this.container=t,this.state=this.loadState(),this.audio=new C0,this.audio.enabled=this.state.sound!==!1,this.started=!1,this.blocking=!1,this.insideId=null,this.currentInterior=null,this.driving=null,this.currentInteractable=null,this.returnPosition=new D,this.returnRotation=0,this.returnYaw=0,this.cameraYaw=Fc,this.cameraPitch=.17,this.cameraDistance=6.4,this.cameraTarget=new D,this.attractAngle=.4,this.lastHud=0,this.lastSave=0,this.jobMarker=null,this.collisionCooldown=0,this.dead=!1,this.keys=new Set,this.touchMove={x:0,y:0},this.touchSprint=!1,this.lookPointer=null,this.joystickPointer=null,this.petFollower=null,this.scene=new Ph,this.camera=new Ke(58,window.innerWidth/window.innerHeight,.08,1700),this.renderer=new e0({antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=Xe,this.renderer.toneMapping=na,this.renderer.toneMappingExposure=1.08,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Bc,this.renderer.domElement.setAttribute("aria-label","Harbor City 3D world"),t.appendChild(this.renderer.domElement),this.clock=new sd,this.city=p0(this.scene,{onShop:e=>this.enterBusiness(e),onTalk:e=>this.talkTo(e),onCar:(e,n)=>this.enterCar(e,n),onHome:()=>this.goHome(),onJobBoard:()=>this.ui?.openJobBoard()}),this.interiors=E0(this.scene,{onShop:e=>this.openShopCounter(e),onExit:()=>this.exitInterior(),onSleep:()=>this.sleepAtHome(),onJobBoard:()=>this.ui?.openJobBoard(),onTalk:e=>this.talkTo(e)}),this.player=ns({shirt:new Rt(this.state.style.shirt).getHex(),pants:new Rt(this.state.style.pants).getHex(),skin:14988683,hair:new Rt(this.state.style.hair).getHex(),role:"player",height:1}),this.player.position.copy(R0),this.player.rotation.y=P0,this.scene.add(this.player),io(this.player,this.state.style),this.createMissionMarker(),this.restorePet(),this.bindEvents(),this.snapCamera(),this.animate()}setUI(t){this.ui=t,this.ui.refreshSaveHint?.(this.hasSave()),this.ui.updateSound?.(this.state.sound!==!1)}hasSave(){try{return!!localStorage.getItem(Xs)}catch{return!1}}loadState(){const t=I0();try{const e=localStorage.getItem(Xs);if(!e)return t;const n=JSON.parse(e);if(!n||typeof n!="object")return t;const s={...t,...n,stats:{...t.stats,...n.stats||{}},style:{...t.style,...n.style||{}},inventory:{...n.inventory||{}},wardrobe:Array.isArray(n.wardrobe)&&n.wardrobe.length?n.wardrobe:t.wardrobe,ownedCars:Array.isArray(n.ownedCars)?n.ownedCars:[],job:null};return s.cash=Number.isFinite(s.cash)?s.cash:t.cash,s.minutes=Number.isFinite(s.minutes)?s.minutes:t.minutes,s.day=Number.isFinite(s.day)?s.day:t.day,s}catch{return t}}save(){try{const t={...this.state,job:null};localStorage.setItem(Xs,JSON.stringify(t)),this.lastSave=performance.now(),this.ui?.refreshSaveHint?.(!0)}catch{}}resetSave(){try{localStorage.removeItem(Xs)}catch{}window.location.reload()}start(){this.started||(this.started=!0,this.audio.init(),this.audio.setEnabled(this.state.sound!==!1),this.ui?.hideStart(),this.ui?.showHUD(),this.ui?.updateSound?.(this.state.sound!==!1),this.ui?.toast("Welcome to Harbor City. The city is yours.","🌆","good"),this.cameraYaw=Fc,this.cameraPitch=.17,this.cameraDistance=6.4,this.snapCamera(),this.ui?.tick?.(!0))}bindEvents(){window.addEventListener("resize",()=>this.resize()),window.addEventListener("beforeunload",()=>this.save()),setInterval(()=>{this.started&&this.save()},9e3),window.addEventListener("keydown",o=>{if(o.code==="Tab"){if(o.preventDefault(),!this.started)return;this.togglePhone();return}if(o.code==="Escape"){if(!this.started||this.ui?.closeTop?.())return;this.ui?.togglePause?.();return}if(this.started&&!this.blocking){if(o.code==="KeyE"){o.preventDefault(),this.interact();return}if(o.code==="KeyM"){o.preventDefault(),this.togglePhone("map");return}["KeyW","KeyA","KeyS","KeyD","ShiftLeft","ShiftRight","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(o.code)&&(o.preventDefault(),this.keys.add(o.code))}}),window.addEventListener("keyup",o=>this.keys.delete(o.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.touchMove={x:0,y:0}});const t=this.renderer.domElement;t.addEventListener("mousedown",o=>{!this.started||this.blocking||o.button!==0||window.matchMedia("(pointer: fine)").matches&&(document.pointerLockElement!==t&&t.requestPointerLock?.(),this.dragging=!0)}),window.addEventListener("mouseup",()=>{this.dragging=!1}),window.addEventListener("mousemove",o=>{!this.started||this.blocking||!(document.pointerLockElement===t)&&!this.dragging||(this.cameraYaw-=o.movementX*.0026,this.cameraPitch=Ot(this.cameraPitch+o.movementY*.0019,-.06,.8))}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==t&&(this.dragging=!1)}),t.addEventListener("pointerdown",o=>{!this.started||this.blocking||o.pointerType==="mouse"||this.lookPointer===null&&(this.lookPointer={id:o.pointerId,x:o.clientX,y:o.clientY},t.setPointerCapture?.(o.pointerId))}),t.addEventListener("pointermove",o=>{if(!this.lookPointer||o.pointerId!==this.lookPointer.id)return;const a=o.clientX-this.lookPointer.x,c=o.clientY-this.lookPointer.y;this.lookPointer.x=o.clientX,this.lookPointer.y=o.clientY,this.cameraYaw-=a*.005,this.cameraPitch=Ot(this.cameraPitch+c*.004,-.06,.8)});const e=o=>{this.lookPointer&&o.pointerId===this.lookPointer.id&&(this.lookPointer=null)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e);const n=document.getElementById("joystick"),s=n?.querySelector(".joystick-knob");if(n&&s){const o=c=>{const l=n.getBoundingClientRect(),u=l.left+l.width/2,d=l.top+l.height/2;let h=c.clientX-u,f=c.clientY-d;const _=l.width*.32,S=Math.hypot(h,f);S>_&&(h=h/S*_,f=f/S*_),s.style.transform=`translate(${h}px, ${f}px)`,this.touchMove.x=h/_,this.touchMove.y=f/_};n.addEventListener("pointerdown",c=>{this.joystickPointer=c.pointerId,n.setPointerCapture(c.pointerId),o(c)}),n.addEventListener("pointermove",c=>{c.pointerId===this.joystickPointer&&o(c)});const a=c=>{c.pointerId===this.joystickPointer&&(this.joystickPointer=null,this.touchMove={x:0,y:0},s.style.transform="translate(0px, 0px)")};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a)}document.getElementById("mobileAction")?.addEventListener("pointerdown",o=>{o.preventDefault(),this.interact()});const r=document.getElementById("mobileSprint");r?.addEventListener("pointerdown",o=>{o.preventDefault(),this.touchSprint=!0}),r?.addEventListener("pointerup",()=>{this.touchSprint=!1}),r?.addEventListener("pointercancel",()=>{this.touchSprint=!1})}resize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.setSize(window.innerWidth,window.innerHeight)}togglePhone(t){this.started&&(this.audio.click(),this.ui?.phoneOpen?this.ui.closePhone():this.ui?.openPhone(t))}setBlocking(t){this.blocking=t,t&&(this.keys.clear(),this.touchMove={x:0,y:0},this.currentInteractable=null,this.ui?.setPrompt?.(null))}animate=()=>{requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.055);if(!this.started){this.attractAngle+=t*.055,this.city.update(t*.35,this.state.minutes,this.player.position),this.interiors.update(t*.2,null),this.updateAttractCamera(t),this.renderer.render(this.scene,this.camera);return}this.blocking||(this.updateTime(t),this.updateStats(t),this.updatePlayer(t),this.updateDriving(t),this.updatePet(t),this.updateJob(t),this.city.update(t,this.state.minutes,this.player.position),this.interiors.update(t,this.insideId),this.updateCamera(t),this.updateInteractions(),this.syncCarEntries(),performance.now()-this.lastHud>180&&(this.lastHud=performance.now(),this.ui?.tick?.())),this.renderer.render(this.scene,this.camera)};updateAttractCamera(t){const n=Math.cos(this.attractAngle)*54+10,s=Math.sin(this.attractAngle)*54+20,r=24+Math.sin(this.attractAngle*.6)*4;this.camera.position.lerp(new D(n,r,s),1-Math.exp(-2*t)),this.camera.lookAt(0,7,0)}updateTime(t){this.state.minutes+=t,this.state.minutes>=1440&&(this.state.minutes-=1440,this.state.day=(this.state.day+1)%7)}updateStats(t){const e=this.state.stats,n=t;e.hunger=Ot(e.hunger-.045*n,0,100),e.energy=Ot(e.energy-.028*n,0,100),e.hygiene=Ot(e.hygiene-.018*n,0,100),e.mood=Ot(e.mood-.012*n,0,100),e.hunger<15&&(e.mood=Ot(e.mood-.03*n,0,100)),e.energy<12&&(e.mood=Ot(e.mood-.02*n,0,100)),e.hunger<=0&&(e.health=Ot(e.health-.055*n,0,100)),e.energy<=0&&(e.health=Ot(e.health-.02*n,0,100)),e.hunger>55&&e.energy>45&&e.health<100&&(e.health=Ot(e.health+.007*n,0,100)),e.health<=0&&!this.dead&&this.collapse()}updatePlayer(t){if(this.driving||this.blocking)return;let e=0,n=0;(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(e-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(e+=1),(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(n+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(n-=1),e+=this.touchMove.x,n-=this.touchMove.y;const s=Math.hypot(e,n);if(s<.08){ls(this.player,t,0);return}e/=Math.max(1,s),n/=Math.max(1,s);const r=new D(-Math.sin(this.cameraYaw),0,-Math.cos(this.cameraYaw)),o=new D(Math.cos(this.cameraYaw),0,-Math.sin(this.cameraYaw)),a=r.multiplyScalar(n).add(o.multiplyScalar(e)).normalize(),c=(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.touchSprint)&&this.state.stats.energy>5;let l=c?7.1:4.25;this.state.stats.energy<12&&(l*=.7),this.insideId&&(l*=.82);const u=l*t,d=this.player.position.x+a.x*u,h=this.player.position.z+a.z*u,f=this.tryMove(d,h);f&&(this.player.rotation.y=Math.atan2(a.x,a.z)),c&&f&&(this.state.stats.energy=Ot(this.state.stats.energy-t*.15,0,100)),ls(this.player,t,f?l:0),this.player.position.y=this.insideId?this.currentInterior.bounds.baseY+.1:.2}tryMove(t,e){if(this.insideId){const a=this.currentInterior.bounds;return this.player.position.x=Ot(t,a.minX,a.maxX),this.player.position.z=Ot(e,a.minZ,a.maxZ),!0}const n=.45,s=Ot(t,-166,166),r=Ot(e,-166,166);let o=!1;for(const a of this.city.colliders)if(s+n>a.minX&&s-n<a.maxX&&r+n>a.minZ&&r-n<a.maxZ){o=!0;break}return o?!1:(this.player.position.x=s,this.player.position.z=r,!0)}updateDriving(t){if(!this.driving)return;const e=this.driving;let n=0,s=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(n+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(n-=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(s+=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(s-=1),n+=-this.touchMove.y,s+=-this.touchMove.x,n=Ot(n,-1,1),s=Ot(s,-1,1);const r=e.vehicle?.speed||24;Math.abs(n)>.05?e.speed+=n*11*t:e.speed*=Math.exp(-1.05*t),e.speed=Ot(e.speed,-r*.32,r),Math.abs(e.speed)<.08&&(e.speed=0);const o=.75+Math.abs(e.speed)*.022;e.heading+=s*o*t*Math.sign(e.speed||1)*Ot(Math.abs(e.speed)/5,0,1);const a=new D(Math.sin(e.heading),0,Math.cos(e.heading)),c=e.group.position.clone().add(a.multiplyScalar(e.speed*t));this.canDriveTo(c.x,c.z)?(e.group.position.x=Ot(c.x,-165,165),e.group.position.z=Ot(c.z,-165,165)):(e.speed*=-.18,this.collisionCooldown<=0&&(this.audio.tone(70,.18,"sawtooth",.12),this.collisionCooldown=1.1)),this.collisionCooldown=Math.max(0,this.collisionCooldown-t),e.group.rotation.y=e.heading,e.group.position.y=.2,wl(e.group,e.speed,t),this.audio.setEngine(e.speed),this.player.position.copy(e.group.position),this.player.rotation.y=e.heading,!this.lookPointer&&!this.dragging&&Math.abs(e.speed)>1.5&&(this.cameraYaw=this.lerpAngle(this.cameraYaw,e.heading+Math.PI,1-Math.exp(-2.5*t)))}canDriveTo(t,e){if(Math.abs(t)>165||Math.abs(e)>165)return!1;const n=1.3;for(const s of this.city.colliders)if(t+n>s.minX&&t-n<s.maxX&&e+n>s.minZ&&e-n<s.maxZ)return!1;return!0}updatePet(t){if(!this.petFollower)return;const e=!this.insideId&&!this.driving;if(this.petFollower.visible=e,!e)return;const n=new D(this.player.position.x-Math.sin(this.player.rotation.y)*1.3+Math.cos(this.player.rotation.y)*.9,.2,this.player.position.z-Math.cos(this.player.rotation.y)*1.3-Math.sin(this.player.rotation.y)*.9),s=this.petFollower.position.distanceTo(n);this.petFollower.position.lerp(n,1-Math.exp(-4.5*t)),s>.3&&(this.petFollower.rotation.y=Math.atan2(n.x-this.petFollower.position.x,n.z-this.petFollower.position.z)),ta(this.petFollower,t,s>1?2:0)}updateCamera(t){const e=new D;let n=this.cameraDistance;this.driving?(e.copy(this.driving.group.position),e.y=1.25,n=8.2):(e.copy(this.player.position),e.y+=1.35,this.insideId&&(n=4.2));const s=Ot(this.cameraPitch,-.06,.8),r=Math.cos(s)*n,o=new D(e.x+Math.sin(this.cameraYaw)*r,e.y+Math.sin(s)*n+.55,e.z+Math.cos(this.cameraYaw)*r);if(this.insideId){const c=this.currentInterior.bounds;o.x=Ot(o.x,c.minX+.4,c.maxX-.4),o.z=Ot(o.z,c.minZ+.4,c.maxZ-.4),o.y=Ot(o.y,c.baseY+.8,c.baseY+4.1)}else{o.y=Math.max(.55,o.y);const c=this.cameraObstruction(e,o);c<1&&(o.lerpVectors(e,o,Math.max(.16,c*.88)),o.y=Math.max(.6,o.y))}const a=this.driving?5.5:8;this.camera.position.lerp(o,1-Math.exp(-a*t)),this.camera.lookAt(e)}cameraObstruction(t,e){for(let s=2;s<=12;s++){const r=s/12,o=Dc(t.x,e.x,r),a=Dc(t.z,e.z,r);for(const c of this.city.colliders)if(o>c.minX-.25&&o<c.maxX+.25&&a>c.minZ-.25&&a<c.maxZ+.25)return Math.max(.12,r-.08)}return 1}snapCamera(){const t=new D;let e=this.insideId?4.2:6.4;this.driving?(t.copy(this.driving.group.position),t.y=1.25,e=8.2):(t.copy(this.player.position),t.y+=1.35);const n=Ot(this.cameraPitch,-.06,.8),s=Math.cos(n)*e;if(this.camera.position.set(t.x+Math.sin(this.cameraYaw)*s,t.y+Math.sin(n)*e+.55,t.z+Math.cos(this.cameraYaw)*s),this.insideId){const r=this.currentInterior.bounds;this.camera.position.x=Ot(this.camera.position.x,r.minX+.4,r.maxX-.4),this.camera.position.z=Ot(this.camera.position.z,r.minZ+.4,r.maxZ-.4),this.camera.position.y=Ot(this.camera.position.y,r.baseY+.8,r.baseY+4.1)}this.camera.lookAt(t)}lerpAngle(t,e,n){let s=(e-t+Math.PI)%(Math.PI*2)-Math.PI;return s<-Math.PI&&(s+=Math.PI*2),t+s*n}updateInteractions(){if(this.blocking){this.currentInteractable&&(this.currentInteractable=null,this.ui?.setPrompt?.(null));return}let t=null,e=1/0;if(this.driving){const n=this.getMissionPrompt();if(n){const s=Math.hypot(n.position.x-this.player.position.x,n.position.z-this.player.position.z);s<4.2&&(t=n,e=s)}t||(t={type:"exitcar",label:`Exit ${this.driving.vehicle?.name||"vehicle"}`,sub:"Leave the driver seat",icon:"🚪",handler:()=>this.exitCar()},e=0)}else{const n=this.insideId?this.currentInterior.interactables:this.city.interactables,s=this.player.position.x,r=this.player.position.z;for(const a of n){const c=Math.hypot(a.position.x-s,a.position.z-r);c<a.radius&&c<e&&(t=a,e=c)}const o=this.getMissionPrompt();if(o){const a=Math.hypot(o.position.x-s,o.position.z-r);a<3.1&&a<e&&(t=o,e=a)}}t!==this.currentInteractable&&(this.currentInteractable=t,this.ui?.setPrompt?.(t))}getMissionPrompt(){const t=this.state.job;if(!t||t.id==="barista")return null;const e=Gn[t.id],n=e?.steps?.[t.stage];return n?{type:"mission",position:new D(n.x,.2,n.z),label:t.stage===e.steps.length-1?t.id==="taxi"?"Drop off your fare":"Deliver the package":t.id==="taxi"?"Pick up your fare":"Collect the package",sub:n.place,icon:t.id==="taxi"?"🚕":"📦",handler:()=>this.advanceJob()}:null}interact(){if(!this.started||this.blocking)return;if(!this.currentInteractable){this.ui?.toast?.("Nothing close enough to interact with.","•");return}const t=this.currentInteractable;this.currentInteractable=null,this.ui?.setPrompt?.(null),t.handler?.(),this.updateInteractions()}talkTo(t){const e=t?.role||"pedestrian",n=Lc[e]||Lc.pedestrian;let s=ve(n);if(e==="worker"&&t?.businessId){const o=es.find(a=>a.id===t.businessId);o&&(s=ve([`Welcome to ${o.name}. Take a look around.`,`${o.name} is open. Let me know if you need anything.`,`Busy day. ${o.tagline}`]))}const r=t?.name||(e==="police"?"Officer Reed":e==="doctor"?"Dr. Chen":ve(Xn));this.ui?.showDialogue?.(r,s,e==="police"?"👮":e==="doctor"?"🩺":e==="worker"?"🧑‍🍳":"💬"),this.audio.click()}enterBusiness(t){const e=es.find(s=>s.id===t);if(!e)return;if(t==="house"&&!this.state.house){this.ui?.toast?.("Maple House is for sale at Key & Stone. The listing is $8,500.","🏡","bad");return}if(!e.interior||!this.interiors.interiors.has(t)){this.ui?.toast?.(`${e.name} is closed right now.`,"🔒","bad");return}this.driving&&this.exitCar();const n=this.interiors.interiors.get(t);this.returnPosition.copy(this.player.position),this.returnRotation=this.player.rotation.y,this.returnYaw=this.cameraYaw,this.insideId=t,this.currentInterior=n,this.player.position.copy(n.entry),this.player.position.y=n.bounds.baseY+.1,this.player.rotation.y=Math.PI,this.cameraYaw=0,this.cameraPitch=.16,this.cameraDistance=4.2,this.audio.door(),this.ui?.setInside?.(e),this.ui?.toast?.(`Welcome to ${e.name}.`,e.type==="cafe"?"☕":e.type==="hospital"?"🏥":"🚪","good"),this.snapCamera(),this.ui?.tick?.(!0)}exitInterior(){if(!this.insideId)return;const t=this.currentInterior?.business;this.insideId=null,this.currentInterior=null,this.player.position.copy(this.returnPosition),this.player.position.y=.2,this.player.rotation.y=this.returnRotation,this.cameraYaw=this.returnYaw,this.cameraPitch=.17,this.cameraDistance=6.4,this.audio.door(),this.ui?.setOutside?.(t),this.ui?.toast?.(`Back out on ${t?.name||"the street"}.`,"🌆"),this.snapCamera(),this.ui?.tick?.(!0)}openShopCounter(t){if(this.state.job?.id==="barista"&&this.state.job.stage===0&&t==="cafe"){this.startBaristaShift();return}const e=es.find(n=>n.id===t);if(e){if(t==="jobcenter"){this.ui?.openJobBoard?.();return}lr[e.type]?.length?(this.audio.click(),this.ui?.openShop?.(e)):this.talkTo({role:"worker",name:ve(Xn),businessId:t})}}purchase(t,e){if(!t)return!1;if(this.state.cash<t.price)return this.ui?.toast?.("Not enough cash for that yet.","💸","bad"),this.audio.error(),!1;if(t.vehicle&&this.state.ownedCars.some(s=>s.id===t.vehicle.id))return this.ui?.toast?.("You already own that one. Check the dealership lot.","🚗"),!1;if(t.house&&this.state.house)return this.ui?.toast?.("Maple House is already yours.","🏡","good"),!1;if(t.pet&&this.state.pet)return this.ui?.toast?.(`You already have ${this.state.pet.name} waiting at home.`,"🐾"),!1;this.state.cash-=t.price;let n=`${t.name} purchased.`;return t.vehicle?(this.state.ownedCars.push(t.vehicle),this.city.spawnOwnedCar(t.vehicle),n=`${t.name} is waiting in the Volt Motors lot.`):t.house?(this.state.house=!0,n="Maple House is yours. Fast travel home from your phone."):t.pet?(this.adoptPet(t.pet),n=`${t.pet.name} adopted. They will follow you outside.`):t.style?(this.state.wardrobe.some(s=>s.id===t.id)||this.state.wardrobe.push({id:t.id,name:t.name,icon:t.icon,style:t.style}),this.state.style={...this.state.style,...t.style},this.state.outfitName=t.name,io(this.player,this.state.style),n=`${t.name} added to your wardrobe and equipped.`):t.item&&this.addInventory(t,1),t.effect&&this.applyEffects(t.effect),t.hours&&this.advanceHours(t.hours),t.sleep&&(this.sleep(8,!0),this.ui?.closeShop?.()),t.unlock==="gym"&&(this.state.gymMember=!0),(t.id==="petfood"||t.id==="toy")&&(this.state.petHappiness=Ot(this.state.petHappiness+(t.effect?.pet||10),0,100)),["burger","salad","energy","water","spoonburger","pasta","coffee","cake","cocktail","beer","mocktail","wings","shake","latte","coldbrew","croissant","sandwich","petfood"].includes(t.id)&&this.addInventory(t,1),this.audio.cash(),this.ui?.toast?.(n,t.icon||"✓","money"),this.ui?.refreshShop?.(e),this.ui?.tick?.(!0),this.save(),!0}addInventory(t,e=1){const n=this.state.inventory[t.id];n?n.count+=e:this.state.inventory[t.id]={id:t.id,name:t.name,icon:t.icon,count:e,desc:t.desc}}applyEffects(t){const e=this.state.stats;t.health&&(e.health=Ot(e.health+t.health,0,100)),t.energy&&(e.energy=Ot(e.energy+t.energy,0,100)),t.hunger&&(e.hunger=Ot(e.hunger+t.hunger,0,100)),t.hygiene&&(e.hygiene=Ot(e.hygiene+t.hygiene,0,100)),t.mood&&(e.mood=Ot(e.mood+t.mood,0,100)),t.pet&&(this.state.petHappiness=Ot(this.state.petHappiness+t.pet,0,100))}equipWardrobe(t){const e=this.state.wardrobe.find(n=>n.id===t);e&&(this.state.style={...this.state.style,...e.style},this.state.outfitName=e.name,io(this.player,this.state.style),this.audio.click(),this.ui?.toast?.(`Now wearing ${e.name}.`,e.icon||"👕","good"),this.ui?.tick?.(!0),this.save())}adoptPet(t){this.petFollower&&(this.scene.remove(this.petFollower),this.petFollower=null),this.state.pet=t,this.state.petHappiness=85;const e=ur(t.type,t.color);e.position.copy(this.player.position),e.visible=!this.insideId,this.scene.add(e),this.petFollower=e}restorePet(){if(!this.state.pet)return;const t=ur(this.state.pet.type,this.state.pet.color);t.position.copy(this.player.position).add(new D(1,0,1)),t.visible=!this.insideId,this.scene.add(t),this.petFollower=t}enterCar(t,e){if(this.driving||this.insideId)return;const n={id:"citycar",name:"City Car",speed:24,type:"car"};this.driving={group:t,vehicle:e||n,speed:0,heading:t.rotation.y},this.player.visible=!1,this.petFollower&&(this.petFollower.visible=!1),this.cameraDistance=8.2,this.cameraYaw=t.rotation.y+Math.PI,this.audio.enterCar(),this.ui?.toast?.(`You are driving the ${this.driving.vehicle.name}.`,"🚗","good"),this.ui?.setPrompt?.(null)}exitCar(){if(!this.driving)return;const t=this.driving,e=new D(Math.sin(t.heading),0,Math.cos(t.heading)),n=new D(Math.cos(t.heading),0,-Math.sin(t.heading)),s=[t.group.position.clone().add(n.clone().multiplyScalar(2.4)),t.group.position.clone().add(n.clone().multiplyScalar(-2.4)),t.group.position.clone().add(e.clone().multiplyScalar(-3.4))];let r=s[0];for(const o of s)if(this.canDriveTo(o.x,o.z)){r=o;break}this.player.position.set(r.x,.2,r.z),this.player.rotation.y=t.heading,this.player.visible=!0,this.driving=null,this.cameraYaw=t.heading+Math.PI,this.cameraDistance=6.4,this.audio.setEngine(0),this.audio.door(),this.ui?.toast?.("Back on your feet.","🚶"),this.syncCarEntries()}syncCarEntries(){for(const t of this.city.interactables)t.type==="car"&&t.data?.carGroup&&(t.position.copy(t.data.carGroup.position),t.position.y=.2)}createMissionMarker(){const t=new Qt,e=new ee({color:16757852,transparent:!0,opacity:.75,side:Ze}),n=new L(new as(1.15,1.36,36),e);n.rotation.x=-Math.PI/2,n.position.y=.06,t.add(n);const s=new L(new as(1.65,1.72,36),new ee({color:16766882,transparent:!0,opacity:.35,side:Ze}));s.rotation.x=-Math.PI/2,s.position.y=.05,t.add(s);const r=new ee({color:16757852,transparent:!0,opacity:.16,side:Ze,depthWrite:!1,blending:er}),o=new L(new Zt(.5,1.2,11,18,1,!0),r);o.position.y=5.5,t.add(o);const a=new ee({map:s0("!",{color:"#1b140b",bg:"#ffb45c",accent:"#fff0cf",width:256,height:256,font:160}),transparent:!0,depthWrite:!1}),c=new al(new fa({map:a.map,transparent:!0,depthWrite:!1}));c.scale.set(1.4,1.4,1),c.position.y=2.4,t.add(c),t.visible=!1,this.scene.add(t),this.jobMarker={group:t,ring:n,ring2:s,beam:o,icon:c,time:0}}setJobTarget(t){!this.jobMarker||!t||(this.jobMarker.group.position.set(t.x,.2,t.z),this.jobMarker.group.visible=!0)}hideJobMarker(){this.jobMarker&&(this.jobMarker.group.visible=!1)}startJob(t){if(this.state.job){this.ui?.toast?.("Finish your current gig first.","⏱️","bad");return}const e=Gn[t];if(!e)return;if(e.needsCar&&!this.driving){this.ui?.toast?.("Get behind the wheel of a car first, then start Night Cab.","🚕","bad");return}this.state.job={id:t,stage:0,timeLeft:e.timer};const n=e.steps[0];this.setJobTarget(n),this.ui?.closeJobBoard?.(),this.ui?.closePhone?.(),this.ui?.toast?.(`${e.name} started. ${e.steps[0].label}.`,e.icon,"good"),this.audio.success(),this.ui?.tick?.(!0)}advanceJob(){const t=this.state.job;if(!t)return;const e=Gn[t.id];if(!e)return;if(t.stage>=e.steps.length-1){const s=Math.round(Math.max(0,t.timeLeft)*.45),r=e.pay+s;this.state.cash+=r,this.state.jobsDone+=1,this.state.job=null,this.hideJobMarker(),this.audio.cash(),this.ui?.toast?.(`Gig complete. +${Ve(r)}${s?` (incl. ${Ve(s)} tip)`:""}.`,"💵","money"),this.ui?.clearObjective?.(),this.save();return}t.stage+=1,t.timeLeft+=35;const n=e.steps[t.stage];this.setJobTarget(n),this.audio.success(),this.ui?.toast?.(n.label,"📍","good"),this.ui?.tick?.(!0)}updateJob(t){const e=this.state.job;if(!e){this.hideJobMarker();return}e.timeLeft-=t;const n=Gn[e.id];if(!n){this.state.job=null;return}if(e.timeLeft<=0){this.state.job=null,this.hideJobMarker(),this.audio.error(),this.ui?.toast?.(`${n.name} failed. The timer ran out.`,"⌛","bad"),this.ui?.clearObjective?.();return}const s=n.steps[e.stage];s&&this.setJobTarget(s),this.jobMarker&&(this.jobMarker.time+=t,this.jobMarker.ring.rotation.z+=t*.9,this.jobMarker.ring2.rotation.z-=t*.5,this.jobMarker.icon.position.y=2.35+Math.sin(this.jobMarker.time*2.2)*.12,this.jobMarker.beam.material.opacity=.1+Math.sin(this.jobMarker.time*2)*.035)}startBaristaShift(){!this.state.job||this.state.job.id!=="barista"||(this.audio.click(),this.ui?.startBarista?.((t,e)=>{if(!(!this.state.job||this.state.job.id!=="barista")){if(e){const n=Gn.barista.pay+t*12;this.state.cash+=n,this.state.jobsDone+=1,this.ui?.toast?.(`Café shift complete. +${Ve(n)}.`,"☕","money"),this.audio.cash()}else this.ui?.toast?.("The rush got away from you. No pay this time.","☕","bad"),this.audio.error();this.state.job=null,this.hideJobMarker(),this.ui?.clearObjective?.(),this.save(),this.ui?.tick?.(!0)}}))}sleepAtHome(){if(!this.state.house){this.ui?.toast?.("You do not have a home yet. Maple House is listed at Key & Stone.","🏡","bad");return}const t=this.city.getBuilding("house");if(!(t&&Math.hypot(this.player.position.x-t.x,this.player.position.z-t.z)<24)&&this.insideId!=="house"){this.ui?.toast?.("Go home first — your bed is in the south district.","🛏️","bad");return}this.sleep(8,!0)}sleep(t=8,e=!0){if(e){let r=420-this.state.minutes;r<=0&&(r+=1440);let o=this.state.minutes+r;o>=1440&&(o-=1440,this.state.day=(this.state.day+1)%7),this.state.minutes=o}else{let s=this.state.minutes+t*60;for(;s>=1440;)s-=1440,this.state.day=(this.state.day+1)%7;this.state.minutes=s}const n=this.state.stats;n.energy=Ot(n.energy+70,0,100),n.health=Ot(n.health+16,0,100),n.hunger=Ot(n.hunger-10,0,100),n.hygiene=Ot(n.hygiene+10,0,100),n.mood=Ot(n.mood+12,0,100),this.ui?.fade?.(),this.audio.success(),this.ui?.toast?.("You slept until morning. Energy restored.","🌅","good"),this.ui?.closePhone?.(),this.save(),this.ui?.tick?.(!0)}advanceHours(t){for(this.state.minutes+=t*60;this.state.minutes>=1440;)this.state.minutes-=1440,this.state.day=(this.state.day+1)%7}goHome(){if(!this.state.house){this.ui?.toast?.("No home yet. Visit Key & Stone to buy Maple House.","🏡","bad");return}this.driving&&this.exitCar(),this.insideId&&(this.insideId=null,this.currentInterior=null,this.ui?.setOutside?.(null)),this.player.position.set(60,.2,136),this.player.rotation.y=Math.PI,this.cameraYaw=0,this.cameraPitch=.17,this.player.visible=!0,this.ui?.closePhone?.(),this.audio.door(),this.ui?.toast?.("Fast travelled to Maple House.","🏡","good"),this.snapCamera(),this.ui?.tick?.(!0)}collapse(){this.dead=!0,this.blocking=!0;const t=Math.min(120,this.state.cash);this.state.cash-=t,this.state.stats.health=60,this.state.stats.energy=55,this.state.stats.hunger=Math.max(25,this.state.stats.hunger),this.state.stats.hygiene=Math.max(50,this.state.stats.hygiene),this.state.stats.mood=Math.max(35,this.state.stats.mood),this.ui?.showDeath?.(t),this.save()}respawn(){this.dead=!1,this.blocking=!1,this.insideId=null,this.currentInterior=null,this.driving&&(this.driving=null,this.audio.setEngine(0)),this.player.visible=!0,this.player.position.set(-60,.2,-103),this.player.rotation.y=0,this.cameraYaw=Math.PI,this.cameraPitch=.17,this.ui?.hideDeath?.(),this.ui?.setOutside?.(null),this.ui?.toast?.("Discharged from Harbor General. Take better care of yourself.","🏥","good"),this.snapCamera(),this.ui?.tick?.(!0)}toggleSound(){this.state.sound=!this.state.sound,this.audio.setEnabled(this.state.sound),this.ui?.updateSound?.(this.state.sound),this.ui?.toast?.(this.state.sound?"Sound on.":"Sound muted.",this.state.sound?"🔊":"🔇"),this.save()}getLocationName(){if(this.insideId)return this.currentInterior?.business.name||"Inside";let t=null,e=1/0;for(const n of this.city.buildings){const s=Math.hypot(this.player.position.x-n.x,this.player.position.z-n.z);s<e&&(t=n,e=s)}return t&&e<33?t.name:this.player.position.z<-80?"North Harbor":this.player.position.z>80?"South Harbor":this.player.position.x<-80?"West End":this.player.position.x>80?"East Dock":"Central District"}getDistrictName(){if(this.insideId)return this.currentInterior?.business.category||"INTERIOR";const{x:t,z:e}=this.player.position;return Math.abs(t)<45&&Math.abs(e)<45?"CENTER CITY":e<-60?"NORTH HARBOR":e>60?"SOUTH HARBOR":t<-60?"WEST END":t>60?"EAST DOCK":"CENTER CITY"}getWeatherName(){const t=this.state.minutes;return t<330?"Late night":t<430?"First light":t<720?"Clear morning":t<960?"Bright afternoon":t<1110?"Golden hour":t<1260?"Blue hour":"Neon night"}getDayLabel(){return`${hr.dayNames[this.state.day]} ${Jo(this.state.minutes)}`}getMissionInfo(){const t=this.state.job;if(!t)return null;const e=Gn[t.id];if(!e)return null;const n=e.steps[t.stage];return{job:e,step:n,timeLeft:t.timeLeft,distance:n?Math.hypot(this.player.position.x-n.x,this.player.position.z-n.z):0,stage:t.stage,total:e.steps.length}}}const st=i=>document.getElementById(i);class D0{constructor(t){this.game=t,this.phoneOpen=!1,this.activeTab="map",this.shopOpen=!1,this.jobOpen=!1,this.howOpen=!1,this.pauseOpen=!1,this.baristaOpen=!1,this.deathOpen=!1,this.currentShop=null,this.barista=null,this.dialogueTimer=null,this.toastId=0,this.resetArmed=!1,this.cache(),this.bind(),this.updateSound(t.state.sound!==!1)}cache(){this.startScreen=st("startScreen"),this.hud=st("hud"),this.cashLabel=st("cashLabel"),this.dayLabel=st("dayLabel"),this.weatherLabel=st("weatherLabel"),this.locationLabel=st("locationLabel"),this.districtLabel=st("districtLabel"),this.interiorTag=st("interiorTag"),this.barHealth=st("barHealth"),this.barEnergy=st("barEnergy"),this.barHunger=st("barHunger"),this.barMood=st("barMood"),this.valHealth=st("valHealth"),this.valEnergy=st("valEnergy"),this.valHunger=st("valHunger"),this.valMood=st("valMood"),this.prompt=st("interactPrompt"),this.promptKey=st("promptKey"),this.promptLabel=st("promptLabel"),this.promptSub=st("promptSub"),this.objectivePanel=st("objectivePanel"),this.objIcon=st("objIcon"),this.objTag=st("objTag"),this.objText=st("objText"),this.objSub=st("objSub"),this.objTimer=st("objTimer"),this.phonePanel=st("phonePanel"),this.shopModal=st("shopModal"),this.jobModal=st("jobModal"),this.howModal=st("howModal"),this.pauseModal=st("pauseModal"),this.deathModal=st("deathModal"),this.baristaModal=st("baristaModal"),this.toastStack=st("toastStack"),this.dialoguePanel=st("dialoguePanel"),this.dialogueAvatar=st("dialogueAvatar"),this.dialogueName=st("dialogueName"),this.dialogueText=st("dialogueText"),this.minimap=st("minimap"),this.bigMap=st("bigMap"),this.phoneDay=st("phoneDay"),this.phoneCash=st("phoneCash"),this.inventoryList=st("inventoryList"),this.wardrobeList=st("wardrobeList"),this.homeStatus=st("homeStatus"),this.jobList=st("jobList"),this.jobModalList=st("jobModalList"),this.shopItems=st("shopItems"),this.shopCash=st("shopCash"),this.fadeEl=st("fade"),this.soundState=st("soundState"),this.saveHint=st("saveHint"),this.hintLine=st("hintLine"),this.bagCount=st("bagCount")}bind(){st("startBtn")?.addEventListener("click",()=>{this.game.audio.init(),this.game.start()}),st("howBtn")?.addEventListener("click",()=>this.openHow()),st("helpBtn")?.addEventListener("click",()=>this.openHow()),st("helpBtn2")?.addEventListener("click",()=>this.openHow()),st("soundToggleStart")?.addEventListener("click",()=>this.game.toggleSound()),st("soundToggle")?.addEventListener("click",()=>this.game.toggleSound()),st("phoneBtn")?.addEventListener("click",()=>this.game.togglePhone()),st("phoneClose")?.addEventListener("click",()=>this.closePhone()),st("dialogueNext")?.addEventListener("click",()=>this.hideDialogue()),st("sleepHomeBtn")?.addEventListener("click",()=>this.game.sleepAtHome()),st("goHomeBtn")?.addEventListener("click",()=>this.game.goHome()),st("respawnBtn")?.addEventListener("click",()=>this.game.respawn()),st("resumeBtn")?.addEventListener("click",()=>this.togglePause()),st("pausePhoneBtn")?.addEventListener("click",()=>{this.togglePause(!1),this.openPhone()}),st("pauseHelpBtn")?.addEventListener("click",()=>{this.togglePause(!1),this.openHow()}),document.querySelectorAll(".phone-tab").forEach(t=>{t.addEventListener("click",()=>this.switchTab(t.dataset.tab))}),document.querySelectorAll("[data-close]").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.close;e==="shop"&&this.closeShop(),e==="jobs"&&this.closeJobBoard(),e==="how"&&this.closeHow()})}),st("resetSaveBtn")?.addEventListener("click",()=>{if(!this.resetArmed){this.resetArmed=!0;const t=st("resetSaveBtn");t&&(t.querySelector("b").textContent="TAP AGAIN"),setTimeout(()=>{this.resetArmed=!1,t&&(t.querySelector("b").textContent="RESET")},2600),this.toast("Tap reset once more to erase your Harbor City progress.","⚠️","bad");return}this.game.resetSave()}),this.bigMap?.addEventListener("click",t=>{const e=this.bigMap.getBoundingClientRect(),n=(t.clientX-e.left)/e.width,s=(t.clientY-e.top)/e.height,r=n*340-170,o=s*340-170;this.game.waypoint={x:r,z:o},this.game.audio.click(),this.toast("Waypoint set on the city map.","📍","good"),this.drawBigMap(),this.drawMinimap()})}refreshSaveHint(t){this.saveHint&&(this.saveHint.textContent=t?"Save found — continue your life":"New life — start fresh");const e=st("startNote");e&&(e.textContent=t?"Your cash, home, wardrobe, cars, and pet are saved in this browser.":"A full day and night cycle. Your progress saves automatically.")}hideStart(){this.startScreen?.classList.add("leaving"),setTimeout(()=>this.startScreen?.classList.add("hidden"),700);const t=st("loadingBar");t&&(t.style.opacity="0")}showHUD(){this.hud?.classList.remove("hidden"),this.tick(!0)}tick(t=!1){this.updateHUD(),this.drawMinimap(),this.phoneOpen&&(this.drawBigMap(),t&&this.updatePhone()),t&&this.updatePhone()}updateHUD(){const t=this.game.state,e=t.stats;this.cashLabel.textContent=Ve(t.cash),this.dayLabel.textContent=this.game.getDayLabel(),this.weatherLabel.textContent=this.game.getWeatherName(),this.locationLabel.textContent=this.game.getLocationName(),this.districtLabel.textContent=this.game.getDistrictName(),this.interiorTag.classList.toggle("hidden",!this.game.insideId),this.setBar(this.barHealth,this.valHealth,e.health),this.setBar(this.barEnergy,this.valEnergy,e.energy),this.setBar(this.barHunger,this.valHunger,e.hunger),this.setBar(this.barMood,this.valMood,e.mood),this.phoneDay.textContent=`${hr.dayNames[t.day]} · ${Jo(t.minutes)}`,this.phoneCash.textContent=Ve(t.cash),this.shopCash.textContent=Ve(t.cash),this.updateObjective(),this.hintLine&&(this.hintLine.innerHTML=this.game.insideId?'<span class="pulse-dot"></span> Walk to the counter and press <kbd>E</kbd> to shop':'<span class="pulse-dot"></span> Walk into a glowing door and press <kbd>E</kbd>')}setBar(t,e,n){const s=Ot(Math.round(n),0,100);t.style.width=`${s}%`,e.textContent=s}updateObjective(){const t=this.game.getMissionInfo();if(!t){this.objectivePanel.classList.add("hidden");return}this.objectivePanel.classList.remove("hidden");const e=t.step;this.objIcon.textContent=t.job.icon,this.objTag.textContent=`ACTIVE GIG · ${t.stage+1}/${t.total}`,this.objText.textContent=e?.label||t.job.name,this.objSub.textContent=e?`${e.place} · ${Math.round(t.distance)} m`:t.job.desc;const n=Math.max(0,Math.ceil(t.timeLeft));this.objTimer.textContent=`${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`,this.objTimer.style.color=t.timeLeft<30?"#ff7c6b":"#ffd7a2"}setPrompt(t){if(!t){this.prompt.classList.add("hidden");return}this.prompt.classList.remove("hidden"),this.promptLabel.textContent=t.label||"Interact",this.promptSub.textContent=t.sub||(this.game.driving?"Press E to get out":"Press E"),this.promptKey.textContent="E";const e=st("mobileAction");if(e){const n=e.querySelector("small");n&&(n.textContent=t.type==="car"?"DRIVE":t.type==="exitcar"?"EXIT":"USE")}}toast(t,e="•",n=""){if(!this.toastStack)return;const s=document.createElement("div");s.className=`toast ${n}`,s.innerHTML=`<span>${e}</span><div>${t}</div>`,this.toastStack.appendChild(s);const r=++this.toastId;for(setTimeout(()=>{s.parentElement&&(s.classList.add("out"),setTimeout(()=>s.remove(),320))},3600);this.toastStack.children.length>4;)this.toastStack.firstElementChild.remove();return r}showDialogue(t,e,n="💬"){this.dialogueName.textContent=t,this.dialogueText.textContent=e,this.dialogueAvatar.textContent=n,this.dialoguePanel.classList.remove("hidden"),clearTimeout(this.dialogueTimer),this.dialogueTimer=setTimeout(()=>this.hideDialogue(),9e3)}hideDialogue(){this.dialoguePanel.classList.add("hidden"),clearTimeout(this.dialogueTimer)}setInside(t){this.interiorTag.classList.remove("hidden"),this.locationLabel.textContent=t?.name||"Inside",this.districtLabel.textContent=t?.category?.toUpperCase()||"INTERIOR"}setOutside(){this.interiorTag.classList.add("hidden")}openPhone(t=null){t&&(this.activeTab=t),this.phoneOpen=!0,this.phonePanel.classList.remove("hidden"),this.syncBlocking(),this.switchTab(this.activeTab),this.updatePhone(),this.drawBigMap(),this.game.audio.click()}closePhone(){this.phoneOpen&&(this.phoneOpen=!1,this.phonePanel.classList.add("hidden"),this.syncBlocking(),this.game.audio.click())}switchTab(t){t&&(this.activeTab=t,document.querySelectorAll(".phone-tab").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),document.querySelectorAll(".phone-tab-page").forEach(e=>e.classList.toggle("active",e.dataset.page===t)),t==="map"&&this.drawBigMap(),t==="inventory"&&this.renderInventory(),t==="wardrobe"&&this.renderWardrobe(),t==="home"&&this.renderHome(),t==="jobs"&&this.renderJobs(),this.game.audio.click())}updatePhone(){this.phoneDay.textContent=`${hr.dayNames[this.game.state.day]} · ${Jo(this.game.state.minutes)}`,this.phoneCash.textContent=Ve(this.game.state.cash),this.renderInventory(),this.renderWardrobe(),this.renderHome(),this.renderJobs()}renderInventory(){const t=Object.values(this.game.state.inventory||{});if(this.bagCount.textContent=`${t.reduce((e,n)=>e+n.count,0)} items`,!t.length){this.inventoryList.innerHTML='<div class="empty-state"><b>👜</b>Your bag is empty.<br>Grab a coffee, a snack, or some new clothes.</div>';return}this.inventoryList.innerHTML=t.map(e=>`
      <div class="inv-item">
        <div class="inv-icon">${e.icon||"📦"}</div>
        <div class="inv-copy"><strong>${e.name}</strong><span>${e.desc||"A little piece of the city."}</span></div>
        <div class="inv-qty">×${e.count}</div>
      </div>
    `).join("")}renderWardrobe(){const t=this.game.state,e=t.outfitName||"Harbor Casual";st("outfitName").textContent=e,st("outfitShirt").style.background=t.style.shirt||"#e86b4f",st("outfitPants").style.background=t.style.pants||"#293241",st("outfitHead").style.background=t.style.hair||"#2a211d",st("outfitBonus").textContent=`${t.wardrobe.length} pieces owned`,this.wardrobeList.innerHTML=t.wardrobe.map(n=>`
      <button class="wear-item ${n.name===e?"active":""}" data-wear="${n.id}">
        <span class="inv-icon">${n.icon||"👕"}</span>
        <strong>${n.name}</strong>
        <span>${n.name===e?"WEARING":"WEAR"}</span>
      </button>
    `).join(""),this.wardrobeList.querySelectorAll("[data-wear]").forEach(n=>{n.addEventListener("click",()=>{this.game.equipWardrobe(n.dataset.wear),this.renderWardrobe()})})}renderHome(){const t=this.game.state;if(!t.house){this.homeStatus.className="home-status locked",this.homeStatus.innerHTML="<h3>No home yet</h3><p>Maple House in the south district is listed for <strong>$8,500</strong>. Visit Key &amp; Stone on Harbor Street to buy it.</p>",st("sleepHomeBtn").disabled=!0,st("goHomeBtn").disabled=!0;return}st("sleepHomeBtn").disabled=!1,st("goHomeBtn").disabled=!1;const e=t.pet?`${t.pet.name} the ${t.pet.type} is waiting. Pet happiness ${Math.round(t.petHappiness)}%.`:"No pet yet. Paws & Co. has a few friends looking for a home.";this.homeStatus.className="home-status",this.homeStatus.innerHTML=`<h3>Maple House</h3><p>South district · two bedrooms · yours.<br>${e}<br>${t.ownedCars.length} vehicle${t.ownedCars.length===1?"":"s"} in the garage · ${t.jobsDone} gigs completed.</p>`}renderJobs(){const t=this.game.state.job;this.jobList.innerHTML=Object.values(Gn).map(e=>{const n=t||e.needsCar&&!this.game.driving;let s="";return t?s=t.id===e.id?"IN PROGRESS":"FINISH CURRENT GIG":e.needsCar&&!this.game.driving?s="GET IN A CAR FIRST":s=`START · ${Ve(e.pay)}`,`
        <div class="job-card">
          <div class="job-card-top"><div class="job-icon">${e.icon}</div><div><h3>${e.name}</h3><div class="job-meta"><span>PAY <b>${Ve(e.pay)}</b></span><span>${Math.round(e.timer/60)} MIN</span></div></div></div>
          <p>${e.desc}</p>
          <button class="job-btn" data-start-job="${e.id}" ${n?"disabled":""}>${s}</button>
        </div>
      `}).join(""),this.jobList.querySelectorAll("[data-start-job]").forEach(e=>{e.addEventListener("click",()=>{this.game.startJob(e.dataset.startJob),this.renderJobs()})})}openShop(t){if(!t)return;this.currentShop=t,this.shopOpen=!0;const e=lr[t.type]||[];st("shopBadge").textContent=t.type==="hospital"?"🏥":t.type==="dealership"?"🚗":t.type==="realestate"?"🏡":t.type==="petstore"?"🐾":t.type==="restaurant"?"🍽️":t.type==="cafe"?"☕":t.type==="bar"?"🍸":t.type==="gym"?"🏋️":t.type==="hotel"?"🏨":"🛍️",st("shopCategory").textContent=t.category.toUpperCase(),st("shopName").textContent=t.name,st("shopTagline").textContent=t.tagline,st("shopFootNote").textContent=e.some(n=>n.sleep)?"Room purchases include a full night of sleep.":"Purchases are instant. Food and services apply immediately.",this.renderShopItems(e),this.shopModal.classList.remove("hidden"),this.syncBlocking(),this.game.audio.click()}renderShopItems(t){const e=this.game.state;if(this.shopCash.textContent=Ve(e.cash),!t.length){this.shopItems.innerHTML='<div class="empty-state" style="grid-column:1/-1"><b>🗝️</b>This counter is not selling anything right now.</div>';return}this.shopItems.innerHTML=t.map(n=>{const s=n.vehicle&&e.ownedCars.some(c=>c.id===n.vehicle.id)||n.house&&e.house||n.pet&&e.pet||n.style&&e.wardrobe.some(c=>c.id===n.id),r=n.style&&s,o=e.cash>=n.price,a=r?`<button class="buy-btn" data-wear-shop="${n.id}">WEAR</button>`:s?'<button class="buy-btn" disabled>OWNED</button>':`<button class="buy-btn" data-buy="${n.id}" ${o?"":"disabled"}>${n.sleep?"BOOK":"BUY"} · ${Ve(n.price)}</button>`;return`
        <div class="shop-item ${s?"owned":""}">
          <div class="shop-item-top"><div class="item-icon">${n.icon}</div><div><h3>${n.name}</h3><p>${n.desc}</p></div></div>
          <div class="item-price">${Ve(n.price)}</div>
          ${a}
        </div>
      `}).join(""),this.shopItems.querySelectorAll("[data-buy]").forEach(n=>{n.addEventListener("click",()=>{const s=t.find(r=>r.id===n.dataset.buy);this.game.purchase(s,this.currentShop)&&this.renderShopItems(t)})}),this.shopItems.querySelectorAll("[data-wear-shop]").forEach(n=>{n.addEventListener("click",()=>{this.game.equipWardrobe(n.dataset.wearShop),this.renderShopItems(t)})})}refreshShop(){this.shopOpen&&this.currentShop&&this.renderShopItems(lr[this.currentShop.type]||[])}closeShop(){this.shopOpen=!1,this.shopModal.classList.add("hidden"),this.currentShop=null,this.syncBlocking()}openJobBoard(){this.jobOpen=!0;const t=this.game.state.job;st("jobModalList").innerHTML=Object.values(Gn).map(e=>{const n=t||e.needsCar&&!this.game.driving;let s=`START · ${Ve(e.pay)}`;return t?s=t.id===e.id?"IN PROGRESS":"FINISH CURRENT GIG":e.needsCar&&!this.game.driving&&(s="GET IN A CAR FIRST"),`
        <div class="job-pick">
          <div class="job-icon">${e.icon}</div>
          <h3>${e.name}</h3>
          <p>${e.desc}</p>
          <div class="job-meta"><span>PAY <b>${Ve(e.pay)}</b></span><span>${Math.round(e.timer/60)} MIN</span></div>
          <button class="job-btn" data-pick-job="${e.id}" ${n?"disabled":""}>${s}</button>
        </div>
      `}).join(""),this.jobModalList.querySelectorAll("[data-pick-job]").forEach(e=>{e.addEventListener("click",()=>this.game.startJob(e.dataset.pickJob))}),this.jobModal.classList.remove("hidden"),this.syncBlocking(),this.game.audio.click()}closeJobBoard(){this.jobOpen=!1,this.jobModal.classList.add("hidden"),this.syncBlocking()}openHow(){this.howOpen=!0,this.howModal.classList.remove("hidden"),this.syncBlocking(),this.game.audio.click()}closeHow(){this.howOpen=!1,this.howModal.classList.add("hidden"),this.syncBlocking()}togglePause(t){const e=typeof t=="boolean"?t:!this.pauseOpen;e&&(this.phoneOpen||this.shopOpen||this.jobOpen||this.baristaOpen||this.deathOpen)||(this.pauseOpen=e,this.pauseModal.classList.toggle("hidden",!e),this.syncBlocking(),e&&this.game.audio.click())}showDeath(t){this.deathOpen=!0;const e=this.deathModal.querySelector("p");e&&(e.textContent=`Harbor General patched you up. A ${Ve(t)} fee was charged.`),this.deathModal.classList.remove("hidden"),this.phonePanel.classList.add("hidden"),this.phoneOpen=!1,this.shopModal.classList.add("hidden"),this.shopOpen=!1,this.syncBlocking()}hideDeath(){this.deathOpen=!1,this.deathModal.classList.add("hidden"),this.syncBlocking()}syncBlocking(){const t=this.phoneOpen||this.shopOpen||this.jobOpen||this.howOpen||this.pauseOpen||this.baristaOpen||this.deathOpen;this.game.setBlocking(t)}closeTop(){return this.deathOpen||this.baristaOpen?!0:this.shopOpen?(this.closeShop(),!0):this.jobOpen?(this.closeJobBoard(),!0):this.howOpen?(this.closeHow(),!0):this.pauseOpen?(this.togglePause(!1),!0):this.phoneOpen?(this.closePhone(),!0):this.dialoguePanel.classList.contains("hidden")?!1:(this.hideDialogue(),!0)}fade(){this.fadeEl.classList.add("on"),setTimeout(()=>this.fadeEl.classList.remove("on"),520)}updateSound(t){this.soundState&&(this.soundState.textContent=t?"ON":"OFF");const e=st("soundToggleStart");e&&(e.textContent=t?"♪":"×")}drawMinimap(){if(!this.minimap)return;const t=this.minimap.getContext("2d"),e=this.minimap.width,n=this.minimap.height,s=e/180,r=this.game.player.position.x,o=this.game.player.position.z,a=e/2,c=n/2,l=h=>a+(h-r)*s,u=h=>c+(h-o)*s;t.clearRect(0,0,e,n),t.fillStyle="#171e27",t.fillRect(0,0,e,n),t.fillStyle="#232c37";for(const h of[-120,-60,0,60,120])for(const f of[-120,-60,0,60,120])h===0&&f===120?t.fillStyle="#2b4735":t.fillStyle="#232c37",t.fillRect(l(h-22),u(f-22),44*s,44*s);t.strokeStyle="#3d4855",t.lineWidth=15*s;for(const h of[-150,-90,-30,30,90,150])t.beginPath(),t.moveTo(l(h),0),t.lineTo(l(h),n),t.stroke();for(const h of[-150,-90,-30,30,90,150])t.beginPath(),t.moveTo(0,u(h)),t.lineTo(e,u(h)),t.stroke();for(const h of this.game.city.buildings)Math.abs(h.x-r)>100||Math.abs(h.z-o)>100||(t.fillStyle=h.id==="house"&&!this.game.state.house?"#66594a":"#354251",t.fillRect(l(h.collider.minX),u(h.collider.minZ),(h.collider.maxX-h.collider.minX)*s,(h.collider.maxZ-h.collider.minZ)*s),(h.landmark||["mall","supermarket","clothing","restaurant","bar","gym","hotel","dealership","jobcenter","petstore","cafe","house"].includes(h.id))&&(t.fillStyle=h.id==="jobcenter"?"#59b8ff":h.id==="house"?"#8fd46a":"#ffb45c",t.fillRect(l(h.x)-2,u(h.z)-2,4,4)));t.fillStyle="rgba(210,220,230,.45)";for(const h of this.game.city.traffic)Math.abs(h.position.x-r)>90||Math.abs(h.position.z-o)>90||t.fillRect(l(h.position.x)-1,u(h.position.z)-1,2,2);const d=this.game.getMissionInfo();d?.step&&this.drawMarker(t,l(d.step.x),u(d.step.z),"#ff7c6b","#fff0d0"),this.game.waypoint&&this.drawMarker(t,l(this.game.waypoint.x),u(this.game.waypoint.z),"#58e6d2","#0c1716"),t.save(),t.translate(a,c),t.rotate(Math.PI-this.game.player.rotation.y),t.fillStyle="#58e6d2",t.shadowColor="#58e6d2",t.shadowBlur=12,t.beginPath(),t.moveTo(0,-10),t.lineTo(7,7),t.lineTo(0,3),t.lineTo(-7,7),t.closePath(),t.fill(),t.restore(),t.strokeStyle="rgba(255,255,255,.12)",t.lineWidth=2,t.strokeRect(1,1,e-2,n-2),t.fillStyle="rgba(255,255,255,.55)",t.font="700 18px system-ui",t.textAlign="center",t.fillText("N",e/2,24)}drawMarker(t,e,n,s,r){t.save(),t.strokeStyle=s,t.lineWidth=2,t.beginPath(),t.arc(e,n,9,0,Math.PI*2),t.stroke(),t.fillStyle=r,t.beginPath(),t.arc(e,n,4,0,Math.PI*2),t.fill(),t.restore()}drawBigMap(){if(!this.bigMap)return;const t=this.bigMap.getContext("2d"),e=this.bigMap.width,n=this.bigMap.height,s=e/340,r=u=>(u+170)*s,o=u=>(u+170)*s;t.clearRect(0,0,e,n),t.fillStyle="#10161e",t.fillRect(0,0,e,n),t.fillStyle="#151c25",t.fillRect(r(-170),o(-170),340*s,340*s);for(const u of[-120,-60,0,60,120])for(const d of[-120,-60,0,60,120])t.fillStyle=u===0&&d===120?"#254334":"#202832",t.fillRect(r(u-22),o(d-22),44*s,44*s);t.strokeStyle="#3d4856",t.lineWidth=15*s;for(const u of[-150,-90,-30,30,90,150])t.beginPath(),t.moveTo(r(u),o(-170)),t.lineTo(r(u),o(170)),t.stroke();for(const u of[-150,-90,-30,30,90,150])t.beginPath(),t.moveTo(r(-170),o(u)),t.lineTo(r(170),o(u)),t.stroke();t.fillStyle="#2d5039",t.fillRect(r(-22),o(98),44*s,44*s),t.fillStyle="#58b8c9",t.beginPath(),t.arc(r(0),o(120),4*s,0,Math.PI*2),t.fill();for(const u of this.game.city.buildings){const d=u.id==="house"?this.game.state.house?"#8fd46a":"#7b6651":u.landmark?"#c98d56":"#364553";t.fillStyle=d,t.fillRect(r(u.collider.minX),o(u.collider.minZ),(u.collider.maxX-u.collider.minX)*s,(u.collider.maxZ-u.collider.minZ)*s),t.strokeStyle="rgba(0,0,0,.25)",t.lineWidth=1,t.strokeRect(r(u.collider.minX),o(u.collider.minZ),(u.collider.maxX-u.collider.minX)*s,(u.collider.maxZ-u.collider.minZ)*s),["mall","supermarket","clothing","salon","restaurant","bar","gym","hotel","dealership","realestate","petstore","jobcenter","hospital","police","cafe","house"].includes(u.id)&&(t.fillStyle="rgba(6,10,15,.75)",t.font=`800 ${Math.max(9,9*s)}px system-ui`,t.textAlign="center",t.fillText(u.short,r(u.x),o(u.z)+3))}const a=this.game.getMissionInfo();a?.step&&this.drawMarker(t,r(a.step.x),o(a.step.z),"#ff7c6b","#fff0d0"),this.game.waypoint&&this.drawMarker(t,r(this.game.waypoint.x),o(this.game.waypoint.z),"#58e6d2","#0b1816");const c=r(this.game.player.position.x),l=o(this.game.player.position.z);t.save(),t.translate(c,l),t.rotate(Math.PI-this.game.player.rotation.y),t.fillStyle="#58e6d2",t.shadowColor="#58e6d2",t.shadowBlur=12,t.beginPath(),t.moveTo(0,-10),t.lineTo(7,7),t.lineTo(0,3),t.lineTo(-7,7),t.closePath(),t.fill(),t.restore(),t.strokeStyle="rgba(255,255,255,.12)",t.lineWidth=2,t.strokeRect(1,1,e-2,n-2),t.fillStyle="rgba(255,255,255,.7)",t.font="800 18px system-ui",t.textAlign="center",t.fillText("N",e/2,24)}startBarista(t){if(this.baristaOpen)return;this.baristaOpen=!0,this.syncBlocking();const e=[{icon:"☕",name:"Oat Latte",line:"An oat latte, please."},{icon:"🧊",name:"Cold Brew",line:"One cold brew, no sugar."},{icon:"🥐",name:"Butter Croissant",line:"Just a warm croissant."},{icon:"🥪",name:"Breakfast Sandwich",line:"The breakfast sandwich, please."},{icon:"☕🥐",name:"Latte + Croissant",line:"A latte and a croissant."},{icon:"🧊🥐",name:"Cold Brew + Croissant",line:"Cold brew and a croissant."},{icon:"🥪☕",name:"Sandwich + Latte",line:"Sandwich and a latte, thanks."}];this.barista={orders:e,score:0,needed:5,time:45,maxTime:50,round:0,locked:!1,onComplete:t,interval:null},st("baristaScore").textContent="0 / 5",st("baristaTimer").style.width="100%",st("baristaFeedback").textContent="Make five orders before the timer runs out.",this.baristaModal.classList.remove("hidden"),this.nextBaristaOrder(),this.barista.interval=setInterval(()=>{!this.barista||this.barista.locked||(this.barista.time-=.1,st("baristaTimer").style.width=`${Ot(this.barista.time/this.barista.maxTime*100,0,100)}%`,this.barista.time<=0&&this.finishBarista(!1))},100),this.game.audio.click()}nextBaristaOrder(){const t=this.barista;if(!t)return;if(t.score>=t.needed){this.finishBarista(!0);return}t.locked=!1;const e=ve(t.orders),n=[e];for(;n.length<3;){const r=ve(t.orders);n.some(o=>o.name===r.name)||n.push(r)}n.sort(()=>Math.random()-.5);const s=Math.floor(Math.random()*4);st("customerAvatar").textContent=["🧑","👩","🧔","👱","🧓"][s],st("customerOrder").textContent=e.line,st("customerHint").textContent="Pick the matching order.",st("baristaOptions").innerHTML=n.map(r=>`
      <button class="order-option" data-order="${r.name}">
        <span>${r.icon}</span>
        <strong>${r.name}</strong>
      </button>
    `).join(""),st("baristaOptions").querySelectorAll("[data-order]").forEach(r=>{r.addEventListener("click",()=>{!this.barista||this.barista.locked||(this.barista.locked=!0,r.dataset.order===e.name?(r.classList.add("correct"),this.barista.score+=1,this.barista.time=Math.min(this.barista.maxTime,this.barista.time+3),st("baristaScore").textContent=`${this.barista.score} / ${this.barista.needed}`,st("baristaFeedback").textContent="Perfect. +3 seconds.",this.game.audio.success(),setTimeout(()=>this.nextBaristaOrder(),340)):(r.classList.add("wrong"),this.barista.time=Math.max(0,this.barista.time-5),st("baristaFeedback").textContent="That is not it. −5 seconds.",this.game.audio.error(),setTimeout(()=>{this.barista&&(this.barista.locked=!1)},280)))})})}finishBarista(t){const e=this.barista;if(!e)return;clearInterval(e.interval),this.barista=null,this.baristaOpen=!1,this.baristaModal.classList.add("hidden"),this.syncBlocking();const n=e.score;e.onComplete&&e.onComplete(n,t)}}const Oc=document.querySelector("#loadingBar i"),Hn=document.getElementById("startBtn");function Ji(i){Oc&&(Oc.style.width=`${i}%`)}async function U0(){try{Ji(12),Hn.disabled=!0,Hn.textContent="Building city…",await new Promise(e=>requestAnimationFrame(e)),Ji(34);const i=new L0(document.getElementById("game"));window.harborGame=i,Ji(78),await new Promise(e=>requestAnimationFrame(e));const t=new D0(i);window.harborUI=t,i.setUI(t),Ji(100),Hn.disabled=!1,Hn.innerHTML="Play Now <b>→</b>",document.querySelector(".start-content")?.classList.add("ready")}catch(i){console.error(i),Ji(100),Hn&&(Hn.disabled=!1,Hn.textContent="Retry",Hn.addEventListener("click",()=>window.location.reload(),{once:!0}));const t=document.getElementById("startNote");t&&(t.textContent="Harbor City had trouble starting. Tap Retry to reload the city.")}}U0();
