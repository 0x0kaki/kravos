(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{7265:function(e,t,n){Promise.resolve().then(n.bind(n,5704)),Promise.resolve().then(n.t.bind(n,7601,23)),Promise.resolve().then(n.t.bind(n,8456,23)),Promise.resolve().then(n.t.bind(n,4491,23)),Promise.resolve().then(n.t.bind(n,3276,23)),Promise.resolve().then(n.t.bind(n,7472,23)),Promise.resolve().then(n.bind(n,8614))},5704:function(e,t,n){"use strict";var a=n(7437),r=n(2736),l=n(8298),s=n(2265);t.default=()=>{let[e,t]=(0,s.useState)(!1),{systemTheme:n,theme:o,setTheme:i}=(0,l.F)(),c="system"===o?n:o;return(0,s.useEffect)(()=>{t(!0)},[]),e?(0,a.jsx)("div",{className:"toggle-button fixed right-5 z-[10000000000] max-lg:bottom-2.5 lg:top-1/3",children:(0,a.jsxs)("button",{onClick:()=>i("dark"===c?"light":"dark"),type:"button",className:"flex h-10 w-10 items-center justify-center rounded-md border border-paragraph/25 text-paragraph focus:outline-none focus:ring-0 focus:ring-gray-200 dark:border-borderColor-dark dark:text-white",children:[(0,a.jsx)(r.LightMode,{}),(0,a.jsx)(r.DarkMode,{})]})}):null}},8298:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return d}});var a=n(2265);let r=["light","dark"],l="(prefers-color-scheme: dark)",s="undefined"==typeof window,o=(0,a.createContext)(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,a.useContext)(o))&&void 0!==e?e:i},d=e=>(0,a.useContext)(o)?a.createElement(a.Fragment,null,e.children):a.createElement(u,e),m=["light","dark"],u=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:s=!0,storageKey:i="theme",themes:c=m,defaultTheme:d=n?"system":"light",attribute:u="data-theme",value:y,children:v,nonce:g})=>{let[k,p]=(0,a.useState)(()=>h(i,d)),[$,S]=(0,a.useState)(()=>h(i)),x=y?Object.values(y):c,w=(0,a.useCallback)(e=>{let a=e;if(!a)return;"system"===e&&n&&(a=_());let l=y?y[a]:a,o=t?b():null,i=document.documentElement;if("class"===u?(i.classList.remove(...x),l&&i.classList.add(l)):l?i.setAttribute(u,l):i.removeAttribute(u),s){let e=r.includes(d)?d:null,t=r.includes(a)?a:e;i.style.colorScheme=t}null==o||o()},[]),C=(0,a.useCallback)(e=>{p(e);try{localStorage.setItem(i,e)}catch(e){}},[e]),E=(0,a.useCallback)(t=>{S(_(t)),"system"===k&&n&&!e&&w("system")},[k,e]);(0,a.useEffect)(()=>{let e=window.matchMedia(l);return e.addListener(E),E(e),()=>e.removeListener(E)},[E]),(0,a.useEffect)(()=>{let e=e=>{e.key===i&&C(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,a.useEffect)(()=>{w(null!=e?e:k)},[e,k]);let T=(0,a.useMemo)(()=>({theme:k,setTheme:C,forcedTheme:e,resolvedTheme:"system"===k?$:k,themes:n?[...c,"system"]:c,systemTheme:n?$:void 0}),[k,C,e,$,n,c]);return a.createElement(o.Provider,{value:T},a.createElement(f,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:s,storageKey:i,themes:c,defaultTheme:d,attribute:u,value:y,children:v,attrs:x,nonce:g}),v)},f=(0,a.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:s,enableColorScheme:o,defaultTheme:i,value:c,attrs:d,nonce:m})=>{let u="system"===i,f="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=o?r.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",b=(e,t=!1,a=!0)=>{let l=c?c[e]:e,s=t?e+"|| ''":`'${l}'`,i="";return o&&a&&!t&&r.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?i+=t||l?`c.add(${s})`:"null":l&&(i+=`d[s](n,${s})`),i},_=e?`!function(){${f}${b(e)}}()`:s?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${b("dark")}}else{${b("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${b(c?"x[e]":"e",!0)}}${u?"":"else{"+b(i,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${b(c?"x[e]":"e",!0)}}else{${b(i,!1,!1)};}${h}}catch(t){}}();`;return a.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:_}})},()=>!0),h=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},b=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},_=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")},8614:function(e,t,n){"use strict";n.d(t,{default:function(){return l}});var a=n(7437),r=n(8298);function l(e){let{children:t,...n}=e;return(0,a.jsx)(r.f,{...n,children:t})}},7472:function(){},3276:function(){},7601:function(e){e.exports={style:{fontFamily:"'__Inter_b08f06', '__Inter_Fallback_b08f06'",fontStyle:"normal"},className:"__className_b08f06",variable:"__variable_b08f06"}},4491:function(e){e.exports={style:{fontFamily:"'__Playfair_Display_0f9bad', '__Playfair_Display_Fallback_0f9bad'",fontWeight:600,fontStyle:"normal"},className:"__className_0f9bad",variable:"__variable_0f9bad"}},8456:function(e){e.exports={style:{fontFamily:"'__Plus_Jakarta_Sans_085bd6', '__Plus_Jakarta_Sans_Fallback_085bd6'",fontStyle:"normal"},className:"__className_085bd6",variable:"__variable_085bd6"}}},function(e){e.O(0,[5814,3713,6223,2736,2971,2117,1744],function(){return e(e.s=7265)}),_N_E=e.O()}]);