var s=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var K=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var b=(l,e,i)=>e in l?s(l,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[e]=i;var V=l=>s(l,"__esModule",{value:!0}),h=(l,e)=>s(l,"name",{value:e,configurable:!0});var d=(l,e)=>{for(var i in e)s(l,i,{get:e[i],enumerable:!0})},y=(l,e,i,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of K(e))!p.call(l,n)&&(i||n!=="default")&&s(l,n,{get:()=>e[n],enumerable:!(t=f(e,n))||t.enumerable});return l};var v=(l=>(e,i)=>l&&l.get(e)||(i=y(V({}),e,1),l&&l.set(e,i),i))(typeof WeakMap!="undefined"?new WeakMap:0);var a=(l,e,i)=>(b(l,typeof e!="symbol"?e+"":e,i),i);var T={};d(T,{Collection:()=>c,default:()=>k});var r=class extends Map{ensure(e,i){if(this.has(e))return this.get(e);let t=i(e,this);return this.set(e,t),t}hasAll(...e){return e.every(i=>super.has(i))}hasAny(...e){return e.some(i=>super.has(i))}first(e){if(typeof e=="undefined")return this.values().next().value;if(e<0)return this.last(e*-1);e=Math.min(this.size,e);let i=this.values();return Array.from({length:e},()=>i.next().value)}firstKey(e){if(typeof e=="undefined")return this.keys().next().value;if(e<0)return this.lastKey(e*-1);e=Math.min(this.size,e);let i=this.keys();return Array.from({length:e},()=>i.next().value)}last(e){let i=[...this.values()];return typeof e=="undefined"?i[i.length-1]:e<0?this.first(e*-1):e?i.slice(-e):[]}lastKey(e){let i=[...this.keys()];return typeof e=="undefined"?i[i.length-1]:e<0?this.firstKey(e*-1):e?i.slice(-e):[]}at(e){return e=Math.floor(e),[...this.values()].at(e)}keyAt(e){return e=Math.floor(e),[...this.keys()].at(e)}random(e){let i=[...this.values()];return typeof e=="undefined"?i[Math.floor(Math.random()*i.length)]:!i.length||!e?[]:Array.from({length:Math.min(e,i.length)},()=>i.splice(Math.floor(Math.random()*i.length),1)[0])}randomKey(e){let i=[...this.keys()];return typeof e=="undefined"?i[Math.floor(Math.random()*i.length)]:!i.length||!e?[]:Array.from({length:Math.min(e,i.length)},()=>i.splice(Math.floor(Math.random()*i.length),1)[0])}reverse(){let e=[...this.entries()].reverse();this.clear();for(let[i,t]of e)this.set(i,t);return this}find(e,i){typeof i!="undefined"&&(e=e.bind(i));for(let[t,n]of this)if(e(n,t,this))return n}findKey(e,i){typeof i!="undefined"&&(e=e.bind(i));for(let[t,n]of this)if(e(n,t,this))return t}sweep(e,i){typeof i!="undefined"&&(e=e.bind(i));let t=this.size;for(let[n,o]of this)e(o,n,this)&&this.delete(n);return t-this.size}filter(e,i){typeof i!="undefined"&&(e=e.bind(i));let t=new this.constructor[Symbol.species];for(let[n,o]of this)e(o,n,this)&&t.set(n,o);return t}partition(e,i){typeof i!="undefined"&&(e=e.bind(i));let t=[new this.constructor[Symbol.species],new this.constructor[Symbol.species]];for(let[n,o]of this)e(o,n,this)?t[0].set(n,o):t[1].set(n,o);return t}flatMap(e,i){let t=this.map(e,i);return new this.constructor[Symbol.species]().concat(...t)}map(e,i){typeof i!="undefined"&&(e=e.bind(i));let t=this.entries();return Array.from({length:this.size},()=>{let[n,o]=t.next().value;return e(o,n,this)})}mapValues(e,i){typeof i!="undefined"&&(e=e.bind(i));let t=new this.constructor[Symbol.species];for(let[n,o]of this)t.set(n,e(o,n,this));return t}some(e,i){typeof i!="undefined"&&(e=e.bind(i));for(let[t,n]of this)if(e(n,t,this))return!0;return!1}every(e,i){typeof i!="undefined"&&(e=e.bind(i));for(let[t,n]of this)if(!e(n,t,this))return!1;return!0}reduce(e,i){let t;if(typeof i!="undefined"){t=i;for(let[o,u]of this)t=e(t,u,o,this);return t}let n=!0;for(let[o,u]of this){if(n){t=u,n=!1;continue}t=e(t,u,o,this)}if(n)throw new TypeError("Reduce of empty collection with no initial value");return t}each(e,i){return this.forEach(e,i),this}tap(e,i){return typeof i!="undefined"&&(e=e.bind(i)),e(this),this}clone(){return new this.constructor[Symbol.species](this)}concat(...e){let i=this.clone();for(let t of e)for(let[n,o]of t)i.set(n,o);return i}equals(e){if(!e)return!1;if(this===e)return!0;if(this.size!==e.size)return!1;for(let[i,t]of this)if(!e.has(i)||t!==e.get(i))return!1;return!0}sort(e=r.defaultSort){let i=[...this.entries()];i.sort((t,n)=>e(t[1],n[1],t[0],n[0])),super.clear();for(let[t,n]of i)super.set(t,n);return this}intersect(e){let i=new this.constructor[Symbol.species];for(let[t,n]of e)this.has(t)&&i.set(t,n);return i}difference(e){let i=new this.constructor[Symbol.species];for(let[t,n]of e)this.has(t)||i.set(t,n);for(let[t,n]of this)e.has(t)||i.set(t,n);return i}sorted(e=r.defaultSort){return new this.constructor[Symbol.species](this).sort((i,t,n,o)=>e(i,t,n,o))}toJSON(){return[...this.values()]}static defaultSort(e,i){return Number(e>i)||Number(e===i)-1}},c=r;h(c,"Collection"),a(c,"default",r);var k=c;module.exports=v(T);0&&(module.exports={Collection});
//# sourceMappingURL=index.js.map