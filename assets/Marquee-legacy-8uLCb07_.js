System.register(["./@ionic-legacy-CdgF_T6b.js","./index-legacy-Cyyu_nqc.js","./@vue-legacy-D6coodBY.js"],(function(e,t){"use strict";var n,a,i,r,o,s,l,c,p,g,d,m;return{setters:[e=>{n=e.t,a=e.d,i=e.j},e=>{r=e.i},e=>{o=e.r,s=e.A,l=e.G,c=e.J,p=e.B,g=e.I,d=e.D,m=e.L}],execute:function(){var t=document.createElement("style");t.textContent=".marquee{position:relative;width:100%;height:25px;margin:8px 4px}.marquee ion-toolbar{--min-height: 25px;--padding-start: 0px;--padding-end: 0px;--padding-top: 0px;--padding-bottom: 0px;position:relative;height:25px;background:url(/testTestTest/home/icon-notice-bg.png) no-repeat!important;background-size:100% 100%!important}.marquee .roll-box{position:relative;width:100%;text-align:center;vertical-align:middle;white-space:nowrap;transition:all .2s ease-in-out;margin:0 8px 0 4px;overflow:hidden}.marquee .roll-box .roll-text{display:inline-block;color:#fff;font-size:.7rem;font-weight:700;line-height:25px;letter-spacing:.0125em;animation:scroll 250s linear infinite;z-index:4}@keyframes scroll{0%{transform:translate(0)}to{transform:translate(-100%)}}\n",document.head.appendChild(t);const u={class:"marquee"},x={slot:"primary",class:"roll-box"},f=["innerHTML"];e("_",{__name:"Marquee",setup(e){const t=o("");s((()=>{h()}));const h=async()=>{const e=await r();if("200"===e.state){const n=e.resultData.msgList||[];t.value=n.reduce(((e,t)=>{let n=t.msgContent.replace(/<\/c>/g,"</span>");return n=n.replace(/<color=/g,'<span style="color:'),n=n.replace(/#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g,'#$1"'),e+=`<span style="margin-right: 20px;">${n}</span>`}),'<span style="color: #ffffff">')}else{const t=await n.create({message:e.msg,duration:1500,position:"top",color:"danger",translucent:!0});await t.present()}};return(e,n)=>(l(),c("div",u,[p(d(i),null,{default:g((()=>[p(d(a),{slot:"start",class:"notice-icon",src:"/home/icon-notice.png",style:{width:"24px",height:"24px",margin:"0 4px 0 0"}}),m("div",x,[m("span",{class:"roll-text",innerHTML:t.value},null,8,f)])])),_:1})]))}})}}}));
