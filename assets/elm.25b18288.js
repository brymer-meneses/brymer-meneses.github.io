function u(e,n){for(var a=0;a<n.length;a++){const r=n[a];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const i=Object.getOwnPropertyDescriptor(r,t);i&&Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o,s;function f(){if(s)return o;s=1,o=e,e.displayName="elm",e.aliases=[];function e(n){n.languages.elm={comment:/--.*|\{-[\s\S]*?-\}/,char:{pattern:/'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+|u\{[0-9a-fA-F]+\}))'/,greedy:!0},string:[{pattern:/"""[\s\S]*?"""/,greedy:!0},{pattern:/"(?:[^\\"\r\n]|\\.)*"/,greedy:!0}],"import-statement":{pattern:/(^[\t ]*)import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+(?:[A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m,lookbehind:!0,inside:{keyword:/\b(?:as|exposing|import)\b/}},keyword:/\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/,builtin:/\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/,number:/\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i,operator:/\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/,hvariable:/\b(?:[A-Z]\w*\.)*[a-z]\w*\b/,constant:/\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/,punctuation:/[{}[\]|(),.:]/}}return o}var l=f();const m=u({__proto__:null,default:l},[l]);export{m as e};
