function s(e,t){for(var n=0;n<t.length;n++){const u=t[n];if(typeof u!="string"&&!Array.isArray(u)){for(const r in u)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(u,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>u[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,i;function f(){if(i)return a;i=1,a=e,e.displayName="jexl",e.aliases=[];function e(t){t.languages.jexl={string:/(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/,transform:{pattern:/(\|\s*)[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*/,alias:"function",lookbehind:!0},function:/[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*\s*(?=\()/,number:/\b\d+(?:\.\d+)?\b|\B\.\d+\b/,operator:/[<>!]=?|-|\+|&&|==|\|\|?|\/\/?|[?:*^%]/,boolean:/\b(?:false|true)\b/,keyword:/\bin\b/,punctuation:/[{}[\](),.]/}}return a}var l=f();const b=s({__proto__:null,default:l},[l]);export{b as j};
