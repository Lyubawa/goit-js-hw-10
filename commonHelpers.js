import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as m,i as d}from"./assets/vendor-651d7991.js";const s=document.querySelector("button[data-start]"),h=document.querySelector("span[data-days]"),p=document.querySelector("span[data-hours]"),y=document.querySelector("span[data-minutes]"),C=document.querySelector("span[data-seconds]"),D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0],o=new Date;t<o?(d.error({title:"Error",message:"Please choose a date in the future",position:"topRight",messageColor:"#ffffff",titleColor:"#ffffff",iconColor:"#ffffff",backgroundColor:"#B51B1B"}),s.disabled=!0):s.disabled=!1}},g=m("#datetime-picker",D);s.addEventListener("click",b);function b(){const e=g.selectedDates[0],t=new Date;if(e<=t){d.error({title:"Error",message:"Please choose a date in the future",position:"topRight",messageColor:"#ffffff",titleColor:"#ffffff",iconColor:"#ffffff",backgroundColor:"#B51B1B"});return}s.disabled=!0,setInterval(E,1e3,e)}function E(e,t){const o=new Date,n=e-o;if(n<=0){clearInterval(t),u(0,0,0,0);return}const{days:i,hours:a,minutes:c,seconds:f}=S(n);u(i,a,c,f)}function u(e,t,o,n){h.textContent=r(e),p.textContent=r(t),y.textContent=r(o),C.textContent=r(n)}function r(e){return e.toString().padStart(2,"0")}function S(e){const a=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:c,minutes:f,seconds:l}}
//# sourceMappingURL=commonHelpers.js.map