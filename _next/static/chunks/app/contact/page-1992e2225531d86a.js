(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1327],{7593:function(e,t,a){Promise.resolve().then(a.bind(a,2966)),Promise.resolve().then(a.bind(a,4348)),Promise.resolve().then(a.bind(a,2728)),Promise.resolve().then(a.bind(a,5111)),Promise.resolve().then(a.bind(a,2736)),Promise.resolve().then(a.t.bind(a,5878,23)),Promise.resolve().then(a.t.bind(a,2972,23)),Promise.resolve().then(a.bind(a,7796)),Promise.resolve().then(a.bind(a,8455))},2966:function(e,t,a){"use strict";a.r(t);var r=a(7437),n=a(2037),i=a(6697),s=a(718),o=a.n(s);let l=e=>{let{children:t,className:a}=e;return(0,r.jsx)(i.E.div,{variants:n.QR,initial:"initial",animate:"animate",className:a,children:t})};l.propTypes={children:o().node,className:o().string},t.default=l},4348:function(e,t,a){"use strict";var r=a(7437),n=a(2037),i=a(6811),s=a(3674),o=a(6697),l=a(2265),d=a(1906);t.default=()=>{let{FAQData:e}=i,t=(0,l.useRef)(null),a=(0,s.Z)(t),[c,u]=(0,l.useState)(0),[m,h]=(0,l.useState)(null),p=e=>{h(t=>t===e?null:e)};return(0,r.jsx)(o.E.div,{className:"mx-auto max-w-[850px]",ref:t,initial:"initial",animate:a,variants:n.QR,children:(0,r.jsx)("div",{className:"tab-content",children:(0,r.jsx)("div",{className:"tab-pane tabActive",children:(0,r.jsx)("div",{className:"[&>*:not(:last-child)]:mb-5",children:e.map(e=>(0,r.jsx)(d.Z,{question:e.question,answer:e.answer,isOpen:m===e.id,onClick:()=>p(e.id)},e.id))})})})})}},5111:function(e,t,a){"use strict";var r=a(7437),n=a(2037),i=a(3674),s=a(6697),o=a(2265);t.default=()=>{let e=(0,o.useRef)(null),t=(0,i.Z)(e);return(0,r.jsxs)("section",{className:"relative mb-150",children:[(0,r.jsx)("div",{className:"absolute left-1/2  -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"}),(0,r.jsx)(s.E.div,{className:"container relative",ref:e,initial:"initial",animate:t,variants:n.QR,children:(0,r.jsx)("div",{className:"relative z-10 mx-auto max-w-[850px]",children:(0,r.jsx)("div",{className:" rounded-medium bg-white p-2.5 shadow-nav  dark:bg-dark-200",children:(0,r.jsx)("div",{className:"rounded border border-dashed border-gray-100 bg-white p-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:p-5  ",children:(0,r.jsx)("form",{children:(0,r.jsxs)("div",{className:"grid grid-cols-12 max-md:gap-y-10 md:gap-8 md:gap-x-12",children:[(0,r.jsxs)("div",{className:"max-md:col-span-full md:col-span-6",children:[(0,r.jsx)("label",{htmlFor:"username",className:"mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white",children:"Your name"}),(0,r.jsx)("input",{type:"text",name:"first-name",id:"username",placeholder:"Name",className:"block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"})]}),(0,r.jsxs)("div",{className:"max-md:col-span-full md:col-span-6",children:[(0,r.jsx)("label",{htmlFor:"email",className:"mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white",children:"Your Email"}),(0,r.jsx)("input",{type:"email",name:"first-name",id:"email",placeholder:"Email",className:"block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light   outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"})]}),(0,r.jsxs)("div",{className:"col-span-full",children:[(0,r.jsx)("label",{htmlFor:"message",className:"mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white",children:"Message"}),(0,r.jsx)("textarea",{name:"first-name",id:"message",rows:"10",className:"block w-full resize-none rounded border border-borderColor bg-white px-5 py-2.5   text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"})]}),(0,r.jsx)("div",{className:"col-span-full mx-auto text-center",children:(0,r.jsx)("button",{className:"btn",children:"Contact Now"})})]})})})})})})]})}},1906:function(e,t,a){"use strict";var r=a(7437),n=a(2265);t.Z=e=>{var t;let{question:a,answer:i,isOpen:s,onClick:o}=e,l=(0,n.useRef)();return(0,r.jsxs)("div",{className:"faq-item rounded-medium bg-white p-2.5 dark:bg-dark-200",children:[(0,r.jsxs)("button",{className:"faq-header flex w-full cursor-pointer items-center rounded border border-dashed border-gray-100 bg-white px-5 py-3 dark:border-borderColor-dark  dark:bg-dark-200 max-md:gap-x-2.5",onClick:o,children:[(0,r.jsxs)("span",{className:"text-left text-xl font-semibold",children:["Q. ",a]}),s?(0,r.jsx)("span",{className:"ml-auto shrink-0",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:(0,r.jsx)("path",{d:"M6.25 10H13.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z",stroke:"",strokeWidth:"1.5",strokeLinecap:"round",className:"stroke-paragraph dark:stroke-primary"})})}):(0,r.jsx)("span",{className:"ml-auto shrink-0",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:(0,r.jsx)("path",{d:"M6.25 10H13.75M10 6.25V13.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z",stroke:"",strokeWidth:"1.5",strokeLinecap:"round",className:"stroke-paragraph dark:stroke-primary"})})})]}),(0,r.jsx)("div",{ref:l,className:"faq-body overflow-hidden",style:s?{height:null==l?void 0:null===(t=l.current)||void 0===t?void 0:t.scrollHeight}:{height:"0px"},children:(0,r.jsx)("p",{className:"px-6 pb-3.5 pt-6 text-paragraph-light dark:text-[#A1A49D]",children:i})})]})}},2037:function(e,t,a){"use strict";a.d(t,{M0:function(){return o},QR:function(){return r},Yl:function(){return d},m9:function(){return l},o5:function(){return i},r4:function(){return s},tm:function(){return n}});let r={initial:{opacity:0,y:100},animate:{opacity:1,y:0,transition:{duration:.5}}},n={initial:{opacity:0,y:100},animate:{opacity:1,y:0,transition:{duration:.5,delay:.2}}},i={initial:{opacity:0,x:100},animate:{opacity:1,x:0,transition:{duration:.5,delay:.2}}},s={initial:{opacity:0,x:100},animate:{opacity:1,x:0,transition:{duration:.5,delay:.4}}},o={initial:{opacity:0,x:100},animate:{opacity:1,x:0,transition:{duration:.5,delay:.6}}},l={initial:{opacity:0,x:-100},animate:{opacity:1,x:0,transition:{duration:.5,delay:.2}},viewPort:{once:!0}},d={initial:{opacity:0,x:-100},animate:{opacity:1,x:0,transition:{duration:.5,delay:.6}},viewPort:{once:!0}}},3674:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var r=a(2265),n=a(5699);let i={some:0,all:1};var s=a(2035),o=a(8771),l=a(5647);function d(e,t){[...t].reverse().forEach(a=>{let r=e.getVariant(a);r&&(0,o.C)(e,r),e.variantChildren&&e.variantChildren.forEach(e=>{d(e,t)})})}function c(){let e=!1,t=new Set,a={subscribe:e=>(t.add(e),()=>void t.delete(e)),start(a,r){(0,s.k)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");let n=[];return t.forEach(e=>{n.push((0,l.d)(e,a,{transitionOverride:r}))}),Promise.all(n)},set:a=>((0,s.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach(e=>{Array.isArray(a)?d(e,a):"string"==typeof a?d(e,[a]):(0,o.C)(e,a)})),stop(){t.forEach(e=>{!function(e){e.values.forEach(e=>e.stop())}(e)})},mount:()=>(e=!0,()=>{e=!1,a.stop()})};return a}var u=a(3576),m=a(1534);let h=function(){let e=(0,u.h)(c);return(0,m.L)(e.mount,[]),e};var p=e=>{let t=function(e,{root:t,margin:a,amount:s,once:o=!1}={}){let[l,d]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!e.current||o&&l)return;let r={root:t&&t.current||void 0,margin:a,amount:s};return function(e,t,{root:a,margin:r,amount:s="some"}={}){let o=(0,n.IG)(e),l=new WeakMap,d=new IntersectionObserver(e=>{e.forEach(e=>{let a=l.get(e.target);if(!!a!==e.isIntersecting){if(e.isIntersecting){let a=t(e);"function"==typeof a?l.set(e.target,a):d.unobserve(e.target)}else"function"==typeof a&&(a(e),l.delete(e.target))}})},{root:a,rootMargin:r,threshold:"number"==typeof s?s:i[s]});return o.forEach(e=>d.observe(e)),()=>d.disconnect()}(e.current,()=>(d(!0),o?void 0:()=>d(!1)),r)},[t,e,a,o,s]),l}(e,{once:!0}),a=h();return(0,r.useEffect)(()=>{t&&a.start("animate")},[t,a]),a}},9376:function(e,t,a){"use strict";var r=a(5475);a.o(r,"usePathname")&&a.d(t,{usePathname:function(){return r.usePathname}})},6811:function(e){"use strict";e.exports=JSON.parse('{"FAQData":[{"id":1,"type":["general"],"question":"What is the main focus of Kravos Security?","answer":"Kravos Security concentrates on addressing intricate Web2-to-Web3 attack vectors, often known as \\"zeroday\\" vulnerabilities. These threats are especially hazardous since they stay undetected until exploited."},{"id":2,"type":["general","technical"],"question":"What do Web2 on Web3 attack vectors mean?","answer":"Web2 on Web3 attack vectors are weaknesses that emerge when Web2 systems connect with Web3 frameworks. Such flaws can be leveraged to undermine decentralized applications (Dapps) and blockchain ecosystems."},{"id":3,"type":["general","technical"],"question":"Why are zeroday vulnerabilities seen as so dangerous?","answer":"Zeroday vulnerabilities pose a significant risk because they remain hidden from everyone, including developers and security professionals, until attackers deploy them. This absence of prior awareness leaves no immediate safeguards or fixes available."},{"id":4,"type":["general","history"],"question":"How was Kravos Security founded?","answer":"Kravos Security came into existence to meet the growing demand for stronger safeguards in Web3 environments. Even with the decentralized design of many Dapps, issues stemming from Web2 technologies persist, and Kravos Security works to close this security gap with robust solutions."},{"id":5,"type":["general"],"question":"Why is Kravos Security\'s role in Web3 protection important?","answer":"Kravos Security acts as a vital link between Web2 and Web3 security domains. By tackling weaknesses caused by combining Web2 apps with Web3 systems, Kravos Security ensures the reliability and performance of decentralized platforms remain intact."},{"id":6,"type":["general","technical"],"question":"How does Kravos Security help secure Dapps?","answer":"Kravos Security excels at spotting and neutralizing weaknesses in Dapps, making them robust against potential threats. Through customized services designed for Web3’s distinct security needs, Kravos Security strengthens Dapps to withstand new and evolving risks."}]}')}},function(e){e.O(0,[3676,9631,6697,2736,8027,2971,2117,1744],function(){return e(e.s=7593)}),_N_E=e.O()}]);