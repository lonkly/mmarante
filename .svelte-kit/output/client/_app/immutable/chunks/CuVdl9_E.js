import{i as d,ak as C,aE as E,aF as h,aG as I}from"./BqbYSrUx.js";import{d as V,f as j,g as q,i as B}from"./DkR66JHa.js";import{a as F,n as G,b as M}from"./EURyEsC8.js";function $(s){var r,i,a="";if(typeof s=="string"||typeof s=="number")a+=s;else if(typeof s=="object")if(Array.isArray(s)){var u=s.length;for(r=0;r<u;r++)s[r]&&(i=$(s[r]))&&(a&&(a+=" "),a+=i)}else for(i in s)s[i]&&(a&&(a+=" "),a+=i);return a}function D(){for(var s,r,i=0,a="",u=arguments.length;i<u;i++)(s=arguments[i])&&(r=$(s))&&(a&&(a+=" "),a+=r);return a}function K(s){return typeof s=="object"?D(s):s??""}function J(s){if(d){var r=!1,i=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var a=s.value;g(s,"value",null),s.value=a}if(s.hasAttribute("checked")){var u=s.checked;g(s,"checked",null),s.checked=u}}};s.__on_r=i,E(i),V()}}function P(s,r){r?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function g(s,r,i,a){var u=s.__attributes??(s.__attributes={});d&&(u[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||u[r]!==(u[r]=i)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[h]=i),i==null?s.removeAttribute(r):typeof i!="string"&&w(s).includes(r)?s[r]=i:s.setAttribute(r,i))}function Q(s,r,i,a,u=!1,v=!1,R=!1){var l=r||{},y=s.tagName==="OPTION";for(var p in r)p in i||(i[p]=null);i.class&&(i.class=K(i.class));var z=w(s),L=s.__attributes??(s.__attributes={});for(const t in i){let f=i[t];if(y&&t==="value"&&f==null){s.value=s.__value="",l[t]=f;continue}var A=l[t];if(f!==A){l[t]=f;var k=t[0]+t[1];if(k!=="$$"){if(k==="on"){const e={},_="$$"+t;let c=t.slice(2);var n=M(c);if(F(c)&&(c=c.slice(0,-7),e.capture=!0),!n&&A){if(f!=null)continue;s.removeEventListener(c,l[_],e),l[_]=null}if(f!=null)if(n)s[`__${c}`]=f,q([c]);else{let O=function(T){l[t].call(this,T)};l[_]=j(c,s,O,e)}else n&&(s[`__${c}`]=void 0)}else if(t==="style"&&f!=null)s.style.cssText=f+"";else if(t==="autofocus")B(s,!!f);else if(t==="__value"||t==="value"&&f!=null)s.value=s[t]=s.__value=f;else if(t==="selected"&&y)P(s,f);else{var o=t;u||(o=G(o));var b=o==="defaultValue"||o==="defaultChecked";if(f==null&&!v&&!b)if(L[t]=null,o==="value"||o==="checked"){let e=s;if(o==="value"){let _=e.defaultValue;e.removeAttribute(o),e.defaultValue=_}else{let _=e.defaultChecked;e.removeAttribute(o),e.defaultChecked=_}}else s.removeAttribute(t);else b||z.includes(o)&&(v||typeof f!="string")?s[o]=f:typeof f!="function"&&(d&&(o==="src"||o==="href"||o==="srcset")||g(s,o,f))}t==="style"&&"__styles"in s&&(s.__styles={})}}}return l}var N=new Map;function w(s){var r=N.get(s.nodeName);if(r)return r;N.set(s.nodeName,r=[]);for(var i,a=s,u=Element.prototype;u!==a;){i=I(a);for(var v in i)i[v].set&&r.push(v);a=C(a)}return r}function U(s){if(!d&&s.loading==="lazy"){var r=s.src;s[h]=null,s.loading="eager",s.removeAttribute("src"),requestAnimationFrame(()=>{s[h]!=="eager"&&(s.loading="lazy"),s.src=r})}}export{Q as a,U as h,J as r,g as s};
