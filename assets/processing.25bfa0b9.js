function l(e,r){for(var s=0;s<r.length;s++){const t=r[s];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in e)){const o=Object.getOwnPropertyDescriptor(t,n);o&&Object.defineProperty(e,n,o.get?o:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,i;function u(){if(i)return a;i=1,a=e,e.displayName="processing",e.aliases=[];function e(r){r.languages.processing=r.languages.extend("clike",{keyword:/\b(?:break|case|catch|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,function:/\b\w+(?=\s*\()/,operator:/<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/}),r.languages.insertBefore("processing","number",{constant:/\b(?!XML\b)[A-Z][A-Z\d_]+\b/,type:{pattern:/\b(?:boolean|byte|char|color|double|float|int|[A-Z]\w*)\b/,alias:"class-name"}})}return a}var c=u();const p=l({__proto__:null,default:c},[c]);export{p};
