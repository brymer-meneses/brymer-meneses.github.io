function p(t,o){for(var r=0;r<o.length;r++){const e=o[r];if(typeof e!="string"&&!Array.isArray(e)){for(const a in e)if(a!=="default"&&!(a in t)){const s=Object.getOwnPropertyDescriptor(e,a);s&&Object.defineProperty(t,a,s.get?s:{enumerable:!0,get:()=>e[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var n,i;function b(){if(i)return n;i=1,n=t,t.displayName="protobuf",t.aliases=[];function t(o){(function(r){var e=/\b(?:bool|bytes|double|s?fixed(?:32|64)|float|[su]?int(?:32|64)|string)\b/;r.languages.protobuf=r.languages.extend("clike",{"class-name":[{pattern:/(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,lookbehind:!0},{pattern:/(\b(?:rpc\s+\w+|returns)\s*\(\s*(?:stream\s+)?)\.?[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s*\))/,lookbehind:!0}],keyword:/\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|returns|rpc(?=\s+\w)|service|stream|syntax|to)\b(?!\s*=\s*\d)/,function:/\b[a-z_]\w*(?=\s*\()/i}),r.languages.insertBefore("protobuf","operator",{map:{pattern:/\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[a-z_]\w*\s*[=;])/i,alias:"class-name",inside:{punctuation:/[<>.,]/,builtin:e}},builtin:e,"positional-class-name":{pattern:/(?:\b|\B\.)[a-z_]\w*(?:\.[a-z_]\w*)*(?=\s+[a-z_]\w*\s*[=;])/i,alias:"class-name",inside:{punctuation:/\./}},annotation:{pattern:/(\[\s*)[a-z_]\w*(?=\s*=)/i,lookbehind:!0}})})(o)}return n}var u=b();const l=p({__proto__:null,default:u},[u]);export{l as p};
