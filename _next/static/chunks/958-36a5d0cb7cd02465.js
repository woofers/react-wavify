"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[958],{9050:function(e,t,r){r.d(t,{Gc:function(){return er},zY:function(){return ee},zo:function(){return Q}});var i=r(2265),n="colors",l="sizes",o="space",a={gap:o,gridGap:o,columnGap:o,gridColumnGap:o,rowGap:o,gridRowGap:o,inset:o,insetBlock:o,insetBlockEnd:o,insetBlockStart:o,insetInline:o,insetInlineEnd:o,insetInlineStart:o,margin:o,marginTop:o,marginRight:o,marginBottom:o,marginLeft:o,marginBlock:o,marginBlockEnd:o,marginBlockStart:o,marginInline:o,marginInlineEnd:o,marginInlineStart:o,padding:o,paddingTop:o,paddingRight:o,paddingBottom:o,paddingLeft:o,paddingBlock:o,paddingBlockEnd:o,paddingBlockStart:o,paddingInline:o,paddingInlineEnd:o,paddingInlineStart:o,top:o,right:o,bottom:o,left:o,scrollMargin:o,scrollMarginTop:o,scrollMarginRight:o,scrollMarginBottom:o,scrollMarginLeft:o,scrollMarginX:o,scrollMarginY:o,scrollMarginBlock:o,scrollMarginBlockEnd:o,scrollMarginBlockStart:o,scrollMarginInline:o,scrollMarginInlineEnd:o,scrollMarginInlineStart:o,scrollPadding:o,scrollPaddingTop:o,scrollPaddingRight:o,scrollPaddingBottom:o,scrollPaddingLeft:o,scrollPaddingX:o,scrollPaddingY:o,scrollPaddingBlock:o,scrollPaddingBlockEnd:o,scrollPaddingBlockStart:o,scrollPaddingInline:o,scrollPaddingInlineEnd:o,scrollPaddingInlineStart:o,fontSize:"fontSizes",background:n,backgroundColor:n,backgroundImage:n,borderImage:n,border:n,borderBlock:n,borderBlockEnd:n,borderBlockStart:n,borderBottom:n,borderBottomColor:n,borderColor:n,borderInline:n,borderInlineEnd:n,borderInlineStart:n,borderLeft:n,borderLeftColor:n,borderRight:n,borderRightColor:n,borderTop:n,borderTopColor:n,caretColor:n,color:n,columnRuleColor:n,fill:n,outline:n,outlineColor:n,stroke:n,textDecorationColor:n,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:l,minBlockSize:l,maxBlockSize:l,inlineSize:l,minInlineSize:l,maxInlineSize:l,width:l,minWidth:l,maxWidth:l,height:l,minHeight:l,maxHeight:l,flexBasis:l,gridTemplateColumns:l,gridTemplateRows:l,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},s=(e,t)=>"function"==typeof t?{"()":Function.prototype.toString.call(t)}:t,d=()=>{let e=Object.create(null);return(t,r,...i)=>{let n=JSON.stringify(t,s);return n in e?e[n]:e[n]=r(t,...i)}},c=Symbol.for("sxs.internal"),p=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),g=e=>{for(let t in e)return!0;return!1},{hasOwnProperty:u}=Object.prototype,f=e=>e.includes("-")?e:e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase()),m=/\s+(?![^()]*\))/,h=e=>t=>e(..."string"==typeof t?String(t).split(m):[t]),b={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:h((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:h((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:h((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:h((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:h((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:h((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},S=/([\d.]+)([^]*)/,k=(e,t)=>e.length?e.reduce((e,r)=>(e.push(...t.map(e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(e)?`:is(${r})`:r):r+" "+e)),e),[]):t,y=(e,t)=>e in B&&"string"==typeof t?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(t,r,i,n)=>r+("stretch"===i?`-moz-available${n};${f(e)}:${r}-webkit-fill-available`:`-moz-fit-content${n};${f(e)}:${r}fit-content`)+n):String(t),B={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},x=e=>e?e+"-":"",R=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(e,i,n,l,o)=>"$"==l==!!n?e:(i||"--"==l?"calc(":"")+"var(--"+("$"===l?x(t)+(o.includes("$")?"":x(r))+o.replace(/\$/g,"-"):o)+")"+(i||"--"==l?"*"+(i||"")+(n||"1")+")":"")),$=/\s*,\s*(?![^()]*\))/,I=Object.prototype.toString,W=(e,t,r,i,n)=>{let l,o,a;let s=(e,t,r)=>{let d,c;let p=e=>{var g;for(d in e){let u=64===d.charCodeAt(0);for(c of u&&Array.isArray(e[d])?e[d]:[e[d]]){let e=/[A-Z]/.test(g=d)?g:g.replace(/-[^]/g,e=>e[1].toUpperCase()),m="object"==typeof c&&c&&c.toString===I&&(!i.utils[e]||!t.length);if(e in i.utils&&!m){let t=i.utils[e];if(t!==o){o=t,p(t(c)),o=null;continue}}else if(e in b){let t=b[e];if(t!==a){a=t,p(t(c)),a=null;continue}}if(u&&(d=(d.slice(1) in i.media?"@media "+i.media[d.slice(1)]:d).replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(e,t,r,i,n,l)=>{let o=S.test(t),a=.0625*(o?-1:1),[s,d]=o?[i,t]:[t,i];return"("+("="===r[0]?"":">"===r[0]===o?"max-":"min-")+s+":"+("="!==r[0]&&1===r.length?d.replace(S,(e,t,i)=>Number(t)+a*(">"===r?1:-1)+i):d)+(n?") and ("+(">"===n[0]?"min-":"max-")+s+":"+(1===n.length?l.replace(S,(e,t,r)=>Number(t)+a*(">"===n?-1:1)+r):l):"")+")"})),m){let e=u?r.concat(d):[...r],i=u?[...t]:k(t,d.split($));void 0!==l&&n(z(...l)),l=void 0,s(c,i,e)}else void 0===l&&(l=[[],t,r]),d=u||36!==d.charCodeAt(0)?d:`--${x(i.prefix)}${d.slice(1).replace(/\$/g,"-")}`,c=m?c:"number"==typeof c?c&&e in j?String(c)+"px":String(c):R(y(e,null==c?"":c),i.prefix,i.themeMap[e]),l[0].push(`${u?`${d} `:`${f(d)}:`}${c}`)}}};p(e),void 0!==l&&n(z(...l)),l=void 0};s(e,t,r)},z=(e,t,r)=>`${r.map(e=>`${e}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,j={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},E=e=>String.fromCharCode(e+(e>25?39:97)),w=e=>(e=>{let t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=E(t%52)+r;return E(t%52)+r})(((e,t)=>{let r=t.length;for(;r;)e=33*e^t.charCodeAt(--r);return e})(5381,JSON.stringify(e))>>>0),T=["themed","global","styled","onevar","resonevar","allvar","inline"],v=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch(e){return!1}},C=e=>{let t;let r=()=>{let{cssRules:e}=t.sheet;return[].map.call(e,(r,i)=>{let{cssText:n}=r,l="";if(n.startsWith("--sxs"))return"";if(e[i-1]&&(l=e[i-1].cssText).startsWith("--sxs")){if(!r.cssRules.length)return"";for(let e in t.rules)if(t.rules[e].group===r)return`--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${n}`;return r.cssRules.length?`${l}${n}`:""}return n}).join("")},i=()=>{if(t){let{rules:e,sheet:r}=t;if(!r.deleteRule){for(;3===Object(Object(r.cssRules)[0]).type;)r.cssRules.splice(0,1);r.cssRules=[]}for(let t in e)delete e[t]}for(let n of Object(e).styleSheets||[])if(v(n)){for(let e=0,l=n.cssRules;l[e];++e){let o=Object(l[e]);if(1!==o.type)continue;let a=Object(l[e+1]);if(4!==a.type)continue;++e;let{cssText:s}=o;if(!s.startsWith("--sxs"))continue;let d=s.slice(14,-3).trim().split(/\s+/),c=T[d[0]];c&&(t||(t={sheet:n,reset:i,rules:{},toString:r}),t.rules[c]={group:a,index:e,cache:new Set(d)})}if(t)break}if(!t){let n=(e,t)=>({type:t,cssRules:[],insertRule(e,t){this.cssRules.splice(t,0,n(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return"@media{}"===e?`@media{${[].map.call(this.cssRules,e=>e.cssText).join("")}}`:e}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:n("","text/css"),rules:{},reset:i,toString:r}}let{sheet:n,rules:l}=t;for(let e=T.length-1;e>=0;--e){let t=T[e];if(!l[t]){let r=T[e+1],i=l[r]?l[r].index:n.cssRules.length;n.insertRule("@media{}",i),n.insertRule(`--sxs{--sxs:${e}}`,i),l[t]={group:n.cssRules[i+1],index:i,cache:new Set([e])}}P(l[t])}};return i(),t},P=e=>{let t=e.group,r=t.cssRules.length;e.apply=e=>{try{t.insertRule(e,r),++r}catch(e){}}},M=Symbol(),L=d(),O=(e,t)=>L(e,()=>(...r)=>{let i={type:null,composers:new Set};for(let t of r)if(null!=t){if(t[c])for(let e of(null==i.type&&(i.type=t[c].type),t[c].composers))i.composers.add(e);else t.constructor!==Object||t.$$typeof?null==i.type&&(i.type=t):i.composers.add(_(t,e))}return null==i.type&&(i.type="span"),i.composers.size||i.composers.add(["PJLV",{},[],[],{},[]]),A(e,i,t)}),_=({variants:e,compoundVariants:t,defaultVariants:r,...i},n)=>{let l=`${x(n.prefix)}c-${w(i)}`,o=[],a=[],s=Object.create(null),d=[];for(let e in r)s[e]=String(r[e]);if("object"==typeof e&&e)for(let t in e){u.call(s,t)||(s[t]="undefined");let r=e[t];for(let e in r){let i={[t]:String(e)};"undefined"===String(e)&&d.push(t);let n=r[e],l=[i,n,!g(n)];o.push(l)}}if("object"==typeof t&&t)for(let e of t){let{css:t,...r}=e;for(let e in t="object"==typeof t&&t||{},r)r[e]=String(r[e]);let i=[r,t,!g(t)];a.push(i)}return[l,i,o,a,s,d]},A=(e,t,r)=>{let[i,n,l,o]=N(t.composers),a="function"==typeof t.type||t.type.$$typeof?(e=>{function t(){for(let r=0;r<t[M].length;r++){let[i,n]=t[M][r];e.rules[i].apply(n)}return t[M]=[],null}return t[M]=[],t.rules={},T.forEach(e=>t.rules[e]={apply:r=>t[M].push([e,r])}),t})(r):null,s=(a||r).rules,d=`.${i}${n.length>1?`:where(.${n.slice(1).join(".")})`:""}`,g=c=>{let{css:p,...g}=c="object"==typeof c&&c||H,u={};for(let e in l)if(delete g[e],e in c){let t=c[e];"object"==typeof t&&t?u[e]={"@initial":l[e],...t}:(t=String(t),u[e]="undefined"!==t||o.has(e)?t:l[e])}else u[e]=l[e];let f=new Set([...n]);for(let[i,n,l,o]of t.composers){r.rules.styled.cache.has(i)||(r.rules.styled.cache.add(i),W(n,[`.${i}`],[],e,e=>{s.styled.apply(e)}));let t=D(l,u,e.media),a=D(o,u,e.media,!0);for(let n of t)if(void 0!==n)for(let[t,l,o]of n){let n=`${i}-${w(l)}-${t}`;f.add(n);let a=(o?r.rules.resonevar:r.rules.onevar).cache,d=o?s.resonevar:s.onevar;a.has(n)||(a.add(n),W(l,[`.${n}`],[],e,e=>{d.apply(e)}))}for(let t of a)if(void 0!==t)for(let[n,l]of t){let t=`${i}-${w(l)}-${n}`;f.add(t),r.rules.allvar.cache.has(t)||(r.rules.allvar.cache.add(t),W(l,[`.${t}`],[],e,e=>{s.allvar.apply(e)}))}}if("object"==typeof p&&p){let t=`${i}-i${w(p)}-css`;f.add(t),r.rules.inline.cache.has(t)||(r.rules.inline.cache.add(t),W(p,[`.${t}`],[],e,e=>{s.inline.apply(e)}))}for(let e of String(c.className||"").trim().split(/\s+/))e&&f.add(e);let m=g.className=[...f].join(" ");return{type:t.type,className:m,selector:d,props:g,toString:()=>m,deferredInjector:a}};return p(g,{className:i,selector:d,[c]:t,toString:()=>(r.rules.styled.cache.has(i)||g(),i)})},N=e=>{let t="",r=[],i={},n=[];for(let[l,,,,o,a]of e)for(let e in""===t&&(t=l),r.push(l),n.push(...a),o){let t=o[e];(void 0===i[e]||"undefined"!==t||a.includes(t))&&(i[e]=t)}return[t,r,i,new Set(n)]},D=(e,t,r,i)=>{let n=[];e:for(let[l,o,a]of e){if(a)continue;let e,s=0,d=!1;for(e in l){let i=l[e],n=t[e];if(n!==i){if("object"!=typeof n||!n)continue e;{let e,t,l=0;for(let o in n){if(i===String(n[o])){if("@initial"!==o){let e=o.slice(1);(t=t||[]).push(e in r?r[e]:o.replace(/^@media ?/,"")),d=!0}s+=l,e=!0}++l}if(t&&t.length&&(o={["@media "+t.join(", ")]:o}),!e)continue e}}}(n[s]=n[s]||[]).push([i?"cv":`${e}-${l[e]}`,o,d])}return n},H={},G=d(),F=(e,t)=>G(e,()=>(...r)=>{let i=()=>{for(let i of r){let r=w(i="object"==typeof i&&i||{});if(!t.rules.global.cache.has(r)){if(t.rules.global.cache.add(r),"@import"in i){let e=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let r of[].concat(i["@import"]))r=r.includes('"')||r.includes("'")?r:`"${r}"`,t.sheet.insertRule(`@import ${r};`,e++);delete i["@import"]}W(i,[],[],e,e=>{t.rules.global.apply(e)})}}return""};return p(i,{toString:i})}),V=d(),U=(e,t)=>V(e,()=>r=>{let i=`${x(e.prefix)}k-${w(r)}`,n=()=>{if(!t.rules.global.cache.has(i)){t.rules.global.cache.add(i);let n=[];W(r,[],[],e,e=>n.push(e));let l=`@keyframes ${i}{${n.join("")}}`;t.rules.global.apply(l)}return i};return p(n,{get name(){return n()},toString:n})}),Y=class{constructor(e,t,r,i){this.token=null==e?"":String(e),this.value=null==t?"":String(t),this.scale=null==r?"":String(r),this.prefix=null==i?"":String(i)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+x(this.prefix)+x(this.scale)+this.token}toString(){return this.computedValue}},J=d(),X=(e,t)=>J(e,()=>(r,i)=>{i="object"==typeof r&&r||Object(i);let n=`.${r=(r="string"==typeof r?r:"")||`${x(e.prefix)}t-${w(i)}`}`,l={},o=[];for(let t in i)for(let r in l[t]={},i[t]){let n=`--${x(e.prefix)}${t}-${r}`,a=R(String(i[t][r]),e.prefix,t);l[t][r]=new Y(r,a,t,e.prefix),o.push(`${n}:${a}`)}let a=()=>{if(o.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);let n=`${i===e.theme?":root,":""}.${r}{${o.join(";")}}`;t.rules.themed.apply(n)}return r};return{...l,get className(){return a()},selector:n,toString:a}}),Z=d(),q=d();let{styled:Q,css:K,globalCss:ee,keyframes:et,getCssText:er,theme:ei,createTheme:en,config:el}=(e=>{let t=(e=>{let t=!1,r=Z(e,e=>{t=!0;let r="prefix"in(e="object"==typeof e&&e||{})?String(e.prefix):"",i="object"==typeof e.media&&e.media||{},n="object"==typeof e.root?e.root||null:globalThis.document||null,l="object"==typeof e.theme&&e.theme||{},o={prefix:r,media:i,theme:l,themeMap:"object"==typeof e.themeMap&&e.themeMap||{...a},utils:"object"==typeof e.utils&&e.utils||{}},s=C(n),d={css:O(o,s),globalCss:F(o,s),keyframes:U(o,s),createTheme:X(o,s),reset(){s.reset(),d.theme.toString()},theme:{},sheet:s,config:o,prefix:r,getCssText:s.toString,toString:s.toString};return String(d.theme=d.createTheme(l)),d});return t||r.reset(),r})(e);return t.styled=(({config:e,sheet:t})=>q(e,()=>{let r=O(e,t);return(...e)=>{let t=r(...e),n=t[c].type,l=i.forwardRef((e,r)=>{let l=e&&e.as||n,{props:o,deferredInjector:a}=t(e);return delete o.as,o.ref=r,a?i.createElement(i.Fragment,null,i.createElement(l,o),i.createElement(a,null)):i.createElement(l,o)});return l.className=t.className,l.displayName=`Styled.${n.displayName||n.name||n}`,l.selector=t.selector,l.toString=()=>t.selector,l[c]=t[c],l}}))(t),t})({theme:{colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",primary:"#bf8855",primaryHover:"#bf8855e6",secondary:"#fadc96",blue:"#5e9ef1",darkBlue:"#3268ce",selection:"#fff9cc"},fonts:{title:"'Quicksand', sans-serif"},space:{},sizes:{},fontSizes:{},fontWeights:{},lineHeights:{},letterSpacings:{},radii:{1:"3px",2:"4px",3:"8px",4:"16px",round:"50%",pill:"9999px"},shadows:{},zIndices:{1:"100",2:"200",3:"300",4:"400",max:"999"}},media:{xsm:"(min-width: 405px)",sm:"(min-width: 550px)",motion:"(prefers-reduced-motion)",dark:"(prefers-color-scheme: dark)",light:"(prefers-color-scheme: light)"},utils:{p:e=>({paddingTop:e,paddingBottom:e,paddingLeft:e,paddingRight:e}),pt:e=>({paddingTop:e}),pr:e=>({paddingRight:e}),pb:e=>({paddingBottom:e}),pl:e=>({paddingLeft:e}),px:e=>({paddingLeft:e,paddingRight:e}),py:e=>({paddingTop:e,paddingBottom:e}),m:e=>({marginTop:e,marginBottom:e,marginLeft:e,marginRight:e}),mt:e=>({marginTop:e}),mr:e=>({marginRight:e}),mb:e=>({marginBottom:e}),ml:e=>({marginLeft:e}),mx:e=>({marginLeft:e,marginRight:e}),my:e=>({marginTop:e,marginBottom:e}),ta:e=>({textAlign:e}),fd:e=>({flexDirection:e}),fw:e=>({flexWrap:e}),ai:e=>({alignItems:e}),ac:e=>({alignContent:e}),jc:e=>({justifyContent:e}),as:e=>({alignSelf:e}),fg:e=>({flexGrow:e}),fs:e=>({flexShrink:e}),fb:e=>({flexBasis:e}),bc:e=>({backgroundColor:e}),br:e=>({borderRadius:e}),btrr:e=>({borderTopRightRadius:e}),bbrr:e=>({borderBottomRightRadius:e}),bblr:e=>({borderBottomLeftRadius:e}),btlr:e=>({borderTopLeftRadius:e}),bs:e=>({boxShadow:e}),lh:e=>({lineHeight:e}),ox:e=>({overflowX:e}),oy:e=>({overflowY:e}),pe:e=>({pointerEvents:e}),us:e=>({WebkitUserSelect:e,userSelect:e}),size:e=>({width:e,height:e}),linearGradient:e=>({backgroundImage:`linear-gradient(${e})`}),appearance:e=>({WebkitAppearance:e,appearance:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e})}})},622:function(e,t,r){var i=r(2265),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var i,l={},d=null,c=null;for(i in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,i)&&!s.hasOwnProperty(i)&&(l[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===l[i]&&(l[i]=t[i]);return{$$typeof:n,type:e,key:d,ref:c,props:l,_owner:a.current}}t.Fragment=l,t.jsx=d,t.jsxs=d},7437:function(e,t,r){e.exports=r(622)}}]);