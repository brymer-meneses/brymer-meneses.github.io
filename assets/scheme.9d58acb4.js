import{r as a}from"./scheme.4d0ec086.js";function f(t,s){for(var o=0;o<s.length;o++){const e=s[o];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const n=Object.getOwnPropertyDescriptor(e,r);n&&Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var c=a();const p=f({__proto__:null,default:c},[c]);export{p as s};
