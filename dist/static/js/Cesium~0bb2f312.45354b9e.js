(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~0bb2f312"],{"0260":function(t,e,n){"use strict";var i=n("be18"),s=n("535a"),r=n("2f63"),a=n("5e57"),o=n("93da"),c=n("df07");function u(t,e,n,i){this.x=Object(s["a"])(t,0),this.y=Object(s["a"])(e,0),this.z=Object(s["a"])(n,0),this.w=Object(s["a"])(i,0)}let h=new i["a"];u.fromAxisAngle=function(t,e,n){const s=e/2,a=Math.sin(s);h=i["a"].normalize(t,h);const o=h.x*a,c=h.y*a,l=h.z*a,d=Math.cos(s);return Object(r["a"])(n)?(n.x=o,n.y=c,n.z=l,n.w=d,n):new u(o,c,l,d)};const l=[1,2,0],d=new Array(3);u.fromRotationMatrix=function(t,e){let n,i,s,a,o;const h=t[c["a"].COLUMN0ROW0],m=t[c["a"].COLUMN1ROW1],p=t[c["a"].COLUMN2ROW2],g=h+m+p;if(g>0)n=Math.sqrt(g+1),o=.5*n,n=.5/n,i=(t[c["a"].COLUMN1ROW2]-t[c["a"].COLUMN2ROW1])*n,s=(t[c["a"].COLUMN2ROW0]-t[c["a"].COLUMN0ROW2])*n,a=(t[c["a"].COLUMN0ROW1]-t[c["a"].COLUMN1ROW0])*n;else{const e=l;let r=0;m>h&&(r=1),p>h&&p>m&&(r=2);const u=e[r],g=e[u];n=Math.sqrt(t[c["a"].getElementIndex(r,r)]-t[c["a"].getElementIndex(u,u)]-t[c["a"].getElementIndex(g,g)]+1);const f=d;f[r]=.5*n,n=.5/n,o=(t[c["a"].getElementIndex(g,u)]-t[c["a"].getElementIndex(u,g)])*n,f[u]=(t[c["a"].getElementIndex(u,r)]+t[c["a"].getElementIndex(r,u)])*n,f[g]=(t[c["a"].getElementIndex(g,r)]+t[c["a"].getElementIndex(r,g)])*n,i=-f[0],s=-f[1],a=-f[2]}return Object(r["a"])(e)?(e.x=i,e.y=s,e.z=a,e.w=o,e):new u(i,s,a,o)};const m=new u;let p=new u,g=new u,f=new u;u.fromHeadingPitchRoll=function(t,e){return f=u.fromAxisAngle(i["a"].UNIT_X,t.roll,m),g=u.fromAxisAngle(i["a"].UNIT_Y,-t.pitch,e),e=u.multiply(g,f,g),p=u.fromAxisAngle(i["a"].UNIT_Z,-t.heading,m),u.multiply(p,e,e)};const y=new i["a"],_=new i["a"],w=new u,x=new u,S=new u;u.packedLength=4,u.pack=function(t,e,n){return n=Object(s["a"])(n,0),e[n++]=t.x,e[n++]=t.y,e[n++]=t.z,e[n]=t.w,e},u.unpack=function(t,e,n){return e=Object(s["a"])(e,0),Object(r["a"])(n)||(n=new u),n.x=t[e],n.y=t[e+1],n.z=t[e+2],n.w=t[e+3],n},u.packedInterpolationLength=3,u.convertPackedArrayForInterpolation=function(t,e,n,i){u.unpack(t,4*n,S),u.conjugate(S,S);for(let s=0,a=n-e+1;s<a;s++){const n=3*s;u.unpack(t,4*(e+s),w),u.multiply(w,S,w),w.w<0&&u.negate(w,w),u.computeAxis(w,y);const a=u.computeAngle(w);Object(r["a"])(i)||(i=[]),i[n]=y.x*a,i[n+1]=y.y*a,i[n+2]=y.z*a}},u.unpackInterpolationResult=function(t,e,n,s,a){Object(r["a"])(a)||(a=new u),i["a"].fromArray(t,0,_);const o=i["a"].magnitude(_);return u.unpack(e,4*s,x),0===o?u.clone(u.IDENTITY,w):u.fromAxisAngle(_,o,w),u.multiply(w,x,a)},u.clone=function(t,e){if(Object(r["a"])(t))return Object(r["a"])(e)?(e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e):new u(t.x,t.y,t.z,t.w)},u.conjugate=function(t,e){return e.x=-t.x,e.y=-t.y,e.z=-t.z,e.w=t.w,e},u.magnitudeSquared=function(t){return t.x*t.x+t.y*t.y+t.z*t.z+t.w*t.w},u.magnitude=function(t){return Math.sqrt(u.magnitudeSquared(t))},u.normalize=function(t,e){const n=1/u.magnitude(t),i=t.x*n,s=t.y*n,r=t.z*n,a=t.w*n;return e.x=i,e.y=s,e.z=r,e.w=a,e},u.inverse=function(t,e){const n=u.magnitudeSquared(t);return e=u.conjugate(t,e),u.multiplyByScalar(e,1/n,e)},u.add=function(t,e,n){return n.x=t.x+e.x,n.y=t.y+e.y,n.z=t.z+e.z,n.w=t.w+e.w,n},u.subtract=function(t,e,n){return n.x=t.x-e.x,n.y=t.y-e.y,n.z=t.z-e.z,n.w=t.w-e.w,n},u.negate=function(t,e){return e.x=-t.x,e.y=-t.y,e.z=-t.z,e.w=-t.w,e},u.dot=function(t,e){return t.x*e.x+t.y*e.y+t.z*e.z+t.w*e.w},u.multiply=function(t,e,n){const i=t.x,s=t.y,r=t.z,a=t.w,o=e.x,c=e.y,u=e.z,h=e.w,l=a*o+i*h+s*u-r*c,d=a*c-i*u+s*h+r*o,m=a*u+i*c-s*o+r*h,p=a*h-i*o-s*c-r*u;return n.x=l,n.y=d,n.z=m,n.w=p,n},u.multiplyByScalar=function(t,e,n){return n.x=t.x*e,n.y=t.y*e,n.z=t.z*e,n.w=t.w*e,n},u.divideByScalar=function(t,e,n){return n.x=t.x/e,n.y=t.y/e,n.z=t.z/e,n.w=t.w/e,n},u.computeAxis=function(t,e){const n=t.w;if(Math.abs(n-1)<o["a"].EPSILON6)return e.x=e.y=e.z=0,e;const i=1/Math.sqrt(1-n*n);return e.x=t.x*i,e.y=t.y*i,e.z=t.z*i,e},u.computeAngle=function(t){return Math.abs(t.w-1)<o["a"].EPSILON6?0:2*Math.acos(t.w)};let b=new u;u.lerp=function(t,e,n,i){return b=u.multiplyByScalar(e,n,b),i=u.multiplyByScalar(t,1-n,i),u.add(b,i,i)};let O=new u,I=new u,M=new u;u.slerp=function(t,e,n,i){let s=u.dot(t,e),r=e;if(s<0&&(s=-s,r=O=u.negate(e,O)),1-s<o["a"].EPSILON6)return u.lerp(t,r,n,i);const a=Math.acos(s);return I=u.multiplyByScalar(t,Math.sin((1-n)*a),I),M=u.multiplyByScalar(r,Math.sin(n*a),M),i=u.add(I,M,i),u.multiplyByScalar(i,1/Math.sin(a),i)},u.log=function(t,e){const n=o["a"].acosClamped(t.w);let s=0;return 0!==n&&(s=n/Math.sin(n)),i["a"].multiplyByScalar(t,s,e)},u.exp=function(t,e){const n=i["a"].magnitude(t);let s=0;return 0!==n&&(s=Math.sin(n)/n),e.x=t.x*s,e.y=t.y*s,e.z=t.z*s,e.w=Math.cos(n),e};const z=new i["a"],k=new i["a"],H=new u,T=new u;u.computeInnerQuadrangle=function(t,e,n,s){const r=u.conjugate(e,H);u.multiply(r,n,T);const a=u.log(T,z);u.multiply(r,t,T);const o=u.log(T,k);return i["a"].add(a,o,a),i["a"].multiplyByScalar(a,.25,a),i["a"].negate(a,a),u.exp(a,H),u.multiply(e,H,s)},u.squad=function(t,e,n,i,s,r){const a=u.slerp(t,e,s,H),o=u.slerp(n,i,s,T);return u.slerp(a,o,2*s*(1-s),r)};const v=new u,j=1.9011074535173003,R=a["a"].supportsTypedArrays()?new Float32Array(8):[],q=a["a"].supportsTypedArrays()?new Float32Array(8):[],A=a["a"].supportsTypedArrays()?new Float32Array(8):[],N=a["a"].supportsTypedArrays()?new Float32Array(8):[];for(let E=0;E<7;++E){const t=E+1,e=2*t+1;R[E]=1/(t*e),q[E]=t/e}R[7]=j/136,q[7]=8*j/17,u.fastSlerp=function(t,e,n,i){let s,r=u.dot(t,e);r>=0?s=1:(s=-1,r=-r);const a=r-1,o=1-n,c=n*n,h=o*o;for(let u=7;u>=0;--u)A[u]=(R[u]*c-q[u])*a,N[u]=(R[u]*h-q[u])*a;const l=s*n*(1+A[0]*(1+A[1]*(1+A[2]*(1+A[3]*(1+A[4]*(1+A[5]*(1+A[6]*(1+A[7])))))))),d=o*(1+N[0]*(1+N[1]*(1+N[2]*(1+N[3]*(1+N[4]*(1+N[5]*(1+N[6]*(1+N[7])))))))),m=u.multiplyByScalar(t,d,v);return u.multiplyByScalar(e,l,i),u.add(m,i,i)},u.fastSquad=function(t,e,n,i,s,r){const a=u.fastSlerp(t,e,s,H),o=u.fastSlerp(n,i,s,T);return u.fastSlerp(a,o,2*s*(1-s),r)},u.equals=function(t,e){return t===e||Object(r["a"])(t)&&Object(r["a"])(e)&&t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w},u.equalsEpsilon=function(t,e,n){return n=Object(s["a"])(n,0),t===e||Object(r["a"])(t)&&Object(r["a"])(e)&&Math.abs(t.x-e.x)<=n&&Math.abs(t.y-e.y)<=n&&Math.abs(t.z-e.z)<=n&&Math.abs(t.w-e.w)<=n},u.ZERO=Object.freeze(new u(0,0,0,0)),u.IDENTITY=Object.freeze(new u(0,0,0,1)),u.prototype.clone=function(t){return u.clone(this,t)},u.prototype.equals=function(t){return u.equals(this,t)},u.prototype.equalsEpsilon=function(t,e){return u.equalsEpsilon(this,t,e)},u.prototype.toString=function(){return`(${this.x}, ${this.y}, ${this.z}, ${this.w})`},e["a"]=u},"0646":function(t,e,n){"use strict";var i=n("1518"),s=n("93da"),r=n("b071");const a={};function o(t,e,n,a){const o=t*t,c=e-3*o/8,u=n-e*t/2+o*t/8,h=a-n*t/4+e*o/16-3*o*o/256,l=i["a"].computeRealRoots(1,2*c,c*c-4*h,-u*u);if(l.length>0){const e=-t/4,n=l[l.length-1];if(Math.abs(n)<s["a"].EPSILON14){const t=r["a"].computeRealRoots(1,c,h);if(2===t.length){const n=t[0],i=t[1];let s;if(n>=0&&i>=0){const t=Math.sqrt(n),s=Math.sqrt(i);return[e-s,e-t,e+t,e+s]}if(n>=0&&i<0)return s=Math.sqrt(n),[e-s,e+s];if(n<0&&i>=0)return s=Math.sqrt(i),[e-s,e+s]}return[]}if(n>0){const t=Math.sqrt(n),i=(c+n-u/t)/2,s=(c+n+u/t)/2,a=r["a"].computeRealRoots(1,t,i),o=r["a"].computeRealRoots(1,-t,s);return 0!==a.length?(a[0]+=e,a[1]+=e,0!==o.length?(o[0]+=e,o[1]+=e,a[1]<=o[0]?[a[0],a[1],o[0],o[1]]:o[1]<=a[0]?[o[0],o[1],a[0],a[1]]:a[0]>=o[0]&&a[1]<=o[1]?[o[0],a[0],a[1],o[1]]:o[0]>=a[0]&&o[1]<=a[1]?[a[0],o[0],o[1],a[1]]:a[0]>o[0]&&a[0]<o[1]?[o[0],a[0],o[1],a[1]]:[a[0],o[0],a[1],o[1]]):a):0!==o.length?(o[0]+=e,o[1]+=e,o):[]}}return[]}function c(t,e,n,a){const o=n*n,c=e*e,u=t*t,h=-2*e,l=n*t+c-4*a,d=u*a-n*e*t+o,m=i["a"].computeRealRoots(1,h,l,d);if(m.length>0){const i=m[0],o=e-i,c=o*o,h=t/2,l=o/2,d=c-4*a,p=c+4*Math.abs(a),g=u-4*i,f=u+4*Math.abs(i);let y,_,w,x,S,b;if(i<0||d*f<g*p){const e=Math.sqrt(g);y=e/2,_=0===e?0:(t*l-n)/e}else{const e=Math.sqrt(d);y=0===e?0:(t*l-n)/e,_=e/2}0===h&&0===y?(w=0,x=0):s["a"].sign(h)===s["a"].sign(y)?(w=h+y,x=i/w):(x=h-y,w=i/x),0===l&&0===_?(S=0,b=0):s["a"].sign(l)===s["a"].sign(_)?(S=l+_,b=a/S):(b=l-_,S=a/b);const O=r["a"].computeRealRoots(1,w,S),I=r["a"].computeRealRoots(1,x,b);if(0!==O.length)return 0!==I.length?O[1]<=I[0]?[O[0],O[1],I[0],I[1]]:I[1]<=O[0]?[I[0],I[1],O[0],O[1]]:O[0]>=I[0]&&O[1]<=I[1]?[I[0],O[0],O[1],I[1]]:I[0]>=O[0]&&I[1]<=O[1]?[O[0],I[0],I[1],O[1]]:O[0]>I[0]&&O[0]<I[1]?[I[0],O[0],I[1],O[1]]:[O[0],I[0],O[1],I[1]]:O;if(0!==I.length)return I}return[]}a.computeDiscriminant=function(t,e,n,i,s){const r=t*t,a=r*t,o=e*e,c=o*e,u=n*n,h=u*n,l=i*i,d=l*i,m=s*s,p=m*s,g=o*u*l-4*c*d-4*t*h*l+18*t*e*n*d-27*r*l*l+256*a*p+s*(18*c*n*i-4*o*h+16*t*u*u-80*t*e*u*i-6*t*o*l+144*r*n*l)+m*(144*t*o*n-27*o*o-128*r*u-192*r*e*i);return g},a.computeRealRoots=function(t,e,n,r,a){if(Math.abs(t)<s["a"].EPSILON15)return i["a"].computeRealRoots(e,n,r,a);const u=e/t,h=n/t,l=r/t,d=a/t;let m=u<0?1:0;switch(m+=h<0?m+1:m,m+=l<0?m+1:m,m+=d<0?m+1:m,m){case 0:return o(u,h,l,d);case 1:return c(u,h,l,d);case 2:return c(u,h,l,d);case 3:return o(u,h,l,d);case 4:return o(u,h,l,d);case 5:return c(u,h,l,d);case 6:return o(u,h,l,d);case 7:return o(u,h,l,d);case 8:return c(u,h,l,d);case 9:return o(u,h,l,d);case 10:return o(u,h,l,d);case 11:return c(u,h,l,d);case 12:return o(u,h,l,d);case 13:return o(u,h,l,d);case 14:return o(u,h,l,d);case 15:return o(u,h,l,d);default:return}},e["a"]=a},"38f2":function(t,e,n){"use strict";var i=n("535a"),s=n("2f63"),r=n("0260"),a=n("66fb");function o(t){const e=t.points,n=t.times;return function(i,a){Object(s["a"])(a)||(a=new r["a"]);const o=t._lastTimeIndex=t.findTimeInterval(i,t._lastTimeIndex),c=(i-n[o])/(n[o+1]-n[o]),u=e[o],h=e[o+1];return r["a"].fastSlerp(u,h,c,a)}}function c(t){t=Object(i["a"])(t,i["a"].EMPTY_OBJECT);const e=t.points,n=t.times;this._times=n,this._points=e,this._evaluateFunction=o(this),this._lastTimeIndex=0}Object.defineProperties(c.prototype,{times:{get:function(){return this._times}},points:{get:function(){return this._points}}}),c.prototype.findTimeInterval=a["a"].prototype.findTimeInterval,c.prototype.wrapTime=a["a"].prototype.wrapTime,c.prototype.clampTime=a["a"].prototype.clampTime,c.prototype.evaluate=function(t,e){return this._evaluateFunction(t,e)},e["a"]=c},9410:function(t,e,n){"use strict";function i(){this._array=[],this._offset=0,this._length=0}Object.defineProperties(i.prototype,{length:{get:function(){return this._length}}}),i.prototype.enqueue=function(t){this._array.push(t),this._length++},i.prototype.dequeue=function(){if(0===this._length)return;const t=this._array;let e=this._offset;const n=t[e];return t[e]=void 0,e++,e>10&&2*e>t.length&&(this._array=t.slice(e),e=0),this._offset=e,this._length--,n},i.prototype.peek=function(){if(0!==this._length)return this._array[this._offset]},i.prototype.contains=function(t){return-1!==this._array.indexOf(t)},i.prototype.clear=function(){this._array.length=this._offset=this._length=0},i.prototype.sort=function(t){this._offset>0&&(this._array=this._array.slice(this._offset),this._offset=0),this._array.sort(t)},e["a"]=i},b071:function(t,e,n){"use strict";var i=n("93da");const s={};function r(t,e,n){const s=t+e;return i["a"].sign(t)!==i["a"].sign(e)&&Math.abs(s/Math.max(Math.abs(t),Math.abs(e)))<n?0:s}s.computeDiscriminant=function(t,e,n){const i=e*e-4*t*n;return i},s.computeRealRoots=function(t,e,n){let s;if(0===t)return 0===e?[]:[-n/e];if(0===e){if(0===n)return[0,0];const e=Math.abs(n),r=Math.abs(t);if(e<r&&e/r<i["a"].EPSILON14)return[0,0];if(e>r&&r/e<i["a"].EPSILON14)return[];if(s=-n/t,s<0)return[];const a=Math.sqrt(s);return[-a,a]}if(0===n)return s=-e/t,s<0?[s,0]:[0,s];const a=e*e,o=4*t*n,c=r(a,-o,i["a"].EPSILON14);if(c<0)return[];const u=-.5*r(e,i["a"].sign(e)*Math.sqrt(c),i["a"].EPSILON14);return e>0?[u/t,n/u]:[n/u,u/t]},e["a"]=s},d0ea:function(t,e,n){"use strict";var i=n("cef5"),s=n("670c"),r=n("be18"),a=n("535a"),o=n("2f63"),c=n("0123"),u=n("c8f9"),h=n("93da"),l=n("78e5"),d=n("6a29"),m=n("6cdc"),p=n("0769"),g=n("4261");function f(t){this._quantizedVertices=t.quantizedVertices,this._encodedNormals=t.encodedNormals,this._indices=t.indices,this._minimumHeight=t.minimumHeight,this._maximumHeight=t.maximumHeight,this._boundingSphere=t.boundingSphere,this._orientedBoundingBox=t.orientedBoundingBox,this._horizonOcclusionPoint=t.horizonOcclusionPoint,this._credits=t.credits;const e=this._quantizedVertices.length/3,n=this._uValues=this._quantizedVertices.subarray(0,e),i=this._vValues=this._quantizedVertices.subarray(e,2*e);function s(t,e){return i[t]-i[e]}function r(t,e){return n[t]-n[e]}this._heightValues=this._quantizedVertices.subarray(2*e,3*e),this._westIndices=_(t.westIndices,s,e),this._southIndices=_(t.southIndices,r,e),this._eastIndices=_(t.eastIndices,s,e),this._northIndices=_(t.northIndices,r,e),this._westSkirtHeight=t.westSkirtHeight,this._southSkirtHeight=t.southSkirtHeight,this._eastSkirtHeight=t.eastSkirtHeight,this._northSkirtHeight=t.northSkirtHeight,this._childTileMask=Object(a["a"])(t.childTileMask,15),this._createdByUpsampling=Object(a["a"])(t.createdByUpsampling,!1),this._waterMask=t.waterMask,this._mesh=void 0}Object.defineProperties(f.prototype,{credits:{get:function(){return this._credits}},waterMask:{get:function(){return this._waterMask}},childTileMask:{get:function(){return this._childTileMask}},canUpsample:{get:function(){return Object(o["a"])(this._mesh)}}});const y=[];function _(t,e,n){y.length=t.length;let i=!1;for(let s=0,r=t.length;s<r;++s)y[s]=t[s],i=i||s>0&&e(t[s-1],t[s])>0;return i?(y.sort(e),c["a"].createTypedArray(n,y)):t}const w="createVerticesFromQuantizedTerrainMesh",x=new d["a"](w),S=new d["a"](w,m["a"].maximumAsynchronousTasks);f.prototype.createMesh=function(t){t=Object(a["a"])(t,a["a"].EMPTY_OBJECT);const e=t.tilingScheme,n=t.x,i=t.y,s=t.level,u=Object(a["a"])(t.exaggeration,1),h=Object(a["a"])(t.exaggerationRelativeHeight,0),l=Object(a["a"])(t.throttle,!0),d=e.ellipsoid,m=e.tileXYToRectangle(n,i,s),f=l?S:x,y=f.scheduleTask({minimumHeight:this._minimumHeight,maximumHeight:this._maximumHeight,quantizedVertices:this._quantizedVertices,octEncodedNormals:this._encodedNormals,includeWebMercatorT:!0,indices:this._indices,westIndices:this._westIndices,southIndices:this._southIndices,eastIndices:this._eastIndices,northIndices:this._northIndices,westSkirtHeight:this._westSkirtHeight,southSkirtHeight:this._southSkirtHeight,eastSkirtHeight:this._eastSkirtHeight,northSkirtHeight:this._northSkirtHeight,rectangle:m,relativeToCenter:this._boundingSphere.center,ellipsoid:d,exaggeration:u,exaggerationRelativeHeight:h});if(!Object(o["a"])(y))return;const _=this;return Promise.resolve(y).then((function(t){const e=_._quantizedVertices.length/3,n=e+_._westIndices.length+_._southIndices.length+_._eastIndices.length+_._northIndices.length,i=c["a"].createTypedArray(n,t.indices),s=new Float32Array(t.vertices),o=t.center,u=t.minimumHeight,h=t.maximumHeight,l=_._boundingSphere,d=_._orientedBoundingBox,m=Object(a["a"])(r["a"].clone(t.occludeePointInScaledSpace),_._horizonOcclusionPoint),f=t.vertexStride,y=p["a"].clone(t.encoding);return _._mesh=new g["a"](o,s,i,t.indexCountWithoutSkirts,e,u,h,l,m,f,d,y,t.westIndicesSouthToNorth,t.southIndicesEastToWest,t.eastIndicesNorthToSouth,t.northIndicesWestToEast),_._quantizedVertices=void 0,_._encodedNormals=void 0,_._indices=void 0,_._uValues=void 0,_._vValues=void 0,_._heightValues=void 0,_._westIndices=void 0,_._southIndices=void 0,_._eastIndices=void 0,_._northIndices=void 0,_._mesh}))};const b=new d["a"]("upsampleQuantizedTerrainMesh",m["a"].maximumAsynchronousTasks);f.prototype.upsample=function(t,e,n,s,a,u,h){const d=this._mesh;if(!Object(o["a"])(this._mesh))return;const m=2*e!==a,p=2*n===u,g=t.ellipsoid,y=t.tileXYToRectangle(a,u,h),_=b.scheduleTask({vertices:d.vertices,vertexCountWithoutSkirts:d.vertexCountWithoutSkirts,indices:d.indices,indexCountWithoutSkirts:d.indexCountWithoutSkirts,encoding:d.encoding,minimumHeight:this._minimumHeight,maximumHeight:this._maximumHeight,isEastChild:m,isNorthChild:p,childRectangle:y,ellipsoid:g});if(!Object(o["a"])(_))return;let w=Math.min(this._westSkirtHeight,this._eastSkirtHeight);w=Math.min(w,this._southSkirtHeight),w=Math.min(w,this._northSkirtHeight);const x=m?.5*w:this._westSkirtHeight,S=p?.5*w:this._southSkirtHeight,O=m?this._eastSkirtHeight:.5*w,I=p?this._northSkirtHeight:.5*w,M=this._credits;return Promise.resolve(_).then((function(t){const e=new Uint16Array(t.vertices),n=c["a"].createTypedArray(e.length/3,t.indices);let s;return Object(o["a"])(t.encodedNormals)&&(s=new Uint8Array(t.encodedNormals)),new f({quantizedVertices:e,indices:n,encodedNormals:s,minimumHeight:t.minimumHeight,maximumHeight:t.maximumHeight,boundingSphere:i["a"].clone(t.boundingSphere),orientedBoundingBox:l["a"].clone(t.orientedBoundingBox),horizonOcclusionPoint:r["a"].clone(t.horizonOcclusionPoint),westIndices:t.westIndices,southIndices:t.southIndices,eastIndices:t.eastIndices,northIndices:t.northIndices,westSkirtHeight:x,southSkirtHeight:S,eastSkirtHeight:O,northSkirtHeight:I,childTileMask:0,credits:M,createdByUpsampling:!0})}))};const O=32767,I=new r["a"];function M(t,e,n,i,s,r,a,o){const c=Math.min(n,s,a),u=Math.max(n,s,a),h=Math.min(i,r,o),l=Math.max(i,r,o);return t>=c&&t<=u&&e>=h&&e<=l}f.prototype.interpolateHeight=function(t,e,n){let i=h["a"].clamp((e-t.west)/t.width,0,1);i*=O;let s=h["a"].clamp((n-t.south)/t.height,0,1);return s*=O,Object(o["a"])(this._mesh)?T(this,i,s):v(this,i,s)};const z=new s["a"],k=new s["a"],H=new s["a"];function T(t,e,n){const i=t._mesh,s=i.vertices,r=i.encoding,a=i.indices;for(let o=0,c=a.length;o<c;o+=3){const t=a[o],i=a[o+1],c=a[o+2],h=r.decodeTextureCoordinates(s,t,z),l=r.decodeTextureCoordinates(s,i,k),d=r.decodeTextureCoordinates(s,c,H);if(M(e,n,h.x,h.y,l.x,l.y,d.x,d.y)){const a=u["a"].computeBarycentricCoordinates(e,n,h.x,h.y,l.x,l.y,d.x,d.y,I);if(a.x>=-1e-15&&a.y>=-1e-15&&a.z>=-1e-15){const e=r.decodeHeight(s,t),n=r.decodeHeight(s,i),o=r.decodeHeight(s,c);return a.x*e+a.y*n+a.z*o}}}}function v(t,e,n){const i=t._uValues,s=t._vValues,r=t._heightValues,a=t._indices;for(let o=0,c=a.length;o<c;o+=3){const c=a[o],l=a[o+1],d=a[o+2],m=i[c],p=i[l],g=i[d],f=s[c],y=s[l],_=s[d];if(M(e,n,m,f,p,y,g,_)){const i=u["a"].computeBarycentricCoordinates(e,n,m,f,p,y,g,_,I);if(i.x>=-1e-15&&i.y>=-1e-15&&i.z>=-1e-15){const e=i.x*r[c]+i.y*r[l]+i.z*r[d];return h["a"].lerp(t._minimumHeight,t._maximumHeight,e/O)}}}}f.prototype.isChildAvailable=function(t,e,n,i){let s=2;return n!==2*t&&++s,i!==2*e&&(s-=2),0!==(this._childTileMask&1<<s)},f.prototype.wasCreatedByUpsampling=function(){return this._createdByUpsampling},e["a"]=f}}]);