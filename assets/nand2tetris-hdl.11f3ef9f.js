function l(e,n){for(var a=0;a<n.length;a++){const t=n[a];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(t,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i,d;function u(){if(d)return i;d=1,i=e,e.displayName="nand2tetrisHdl",e.aliases=[];function e(n){n.languages["nand2tetris-hdl"]={comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,keyword:/\b(?:BUILTIN|CHIP|CLOCKED|IN|OUT|PARTS)\b/,boolean:/\b(?:false|true)\b/,function:/\b[A-Za-z][A-Za-z0-9]*(?=\()/,number:/\b\d+\b/,operator:/=|\.\./,punctuation:/[{}[\];(),:]/}}return i}var s=u();const f=l({__proto__:null,default:s},[s]);export{f as n};
