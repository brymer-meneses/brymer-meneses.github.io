function O(E,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in E)){const T=Object.getOwnPropertyDescriptor(r,e);T&&Object.defineProperty(E,e,T.get?T:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}))}var N,L;function o(){if(L)return N;L=1,N=E,E.displayName="fortran",E.aliases=[];function E(t){t.languages.fortran={"quoted-number":{pattern:/[BOZ](['"])[A-F0-9]+\1/i,alias:"number"},string:{pattern:/(?:\b\w+_)?(['"])(?:\1\1|&(?:\r\n?|\n)(?:[ \t]*!.*(?:\r\n?|\n)|(?![ \t]*!))|(?!\1).)*(?:\1|&)/,inside:{comment:{pattern:/(&(?:\r\n?|\n)\s*)!.*/,lookbehind:!0}}},comment:{pattern:/!.*/,greedy:!0},boolean:/\.(?:FALSE|TRUE)\.(?:_\w+)?/i,number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[ED][+-]?\d+)?(?:_\w+)?/i,keyword:[/\b(?:CHARACTER|COMPLEX|DOUBLE ?PRECISION|INTEGER|LOGICAL|REAL)\b/i,/\b(?:END ?)?(?:BLOCK ?DATA|DO|FILE|FORALL|FUNCTION|IF|INTERFACE|MODULE(?! PROCEDURE)|PROGRAM|SELECT|SUBROUTINE|TYPE|WHERE)\b/i,/\b(?:ALLOCATABLE|ALLOCATE|BACKSPACE|CALL|CASE|CLOSE|COMMON|CONTAINS|CONTINUE|CYCLE|DATA|DEALLOCATE|DIMENSION|DO|END|EQUIVALENCE|EXIT|EXTERNAL|FORMAT|GO ?TO|IMPLICIT(?: NONE)?|INQUIRE|INTENT|INTRINSIC|MODULE PROCEDURE|NAMELIST|NULLIFY|OPEN|OPTIONAL|PARAMETER|POINTER|PRINT|PRIVATE|PUBLIC|READ|RETURN|REWIND|SAVE|SELECT|STOP|TARGET|WHILE|WRITE)\b/i,/\b(?:ASSIGNMENT|DEFAULT|ELEMENTAL|ELSE|ELSEIF|ELSEWHERE|ENTRY|IN|INCLUDE|INOUT|KIND|NULL|ONLY|OPERATOR|OUT|PURE|RECURSIVE|RESULT|SEQUENCE|STAT|THEN|USE)\b/i],operator:[/\*\*|\/\/|=>|[=\/]=|[<>]=?|::|[+\-*=%]|\.[A-Z]+\./i,{pattern:/(^|(?!\().)\/(?!\))/,lookbehind:!0}],punctuation:/\(\/|\/\)|[(),;:&]/}}return N}var A=o();const I=O({__proto__:null,default:A},[A]);export{I as f};
