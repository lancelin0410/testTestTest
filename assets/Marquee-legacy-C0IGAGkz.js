System.register(["./@ionic-legacy-CdgF_T6b.js","./index-legacy-D4wxTBO4.js","./@vue-legacy-D6coodBY.js"],(function(e,t){"use strict";var n,a,i,r,o,s,l,c,p,g,d,m,u;return{setters:[e=>{n=e.t,a=e.d,i=e.j},e=>{r=e.i,o=e.j},e=>{s=e.r,l=e.A,c=e.G,p=e.J,g=e.B,d=e.I,m=e.D,u=e.L}],execute:function(){var t=document.createElement("style");t.textContent=".marquee{position:relative;width:100%;height:25px;margin:8px 4px}.marquee ion-toolbar{--min-height: 25px;--padding-start: 0px;--padding-end: 0px;--padding-top: 0px;--padding-bottom: 0px;position:relative;height:25px;background:url(/testTestTest/home/icon-notice-bg.png) no-repeat!important;background-size:100% 100%!important}.marquee .roll-box{position:relative;width:100%;text-align:center;vertical-align:middle;white-space:nowrap;transition:all .2s ease-in-out;margin:0 8px 0 4px;overflow:hidden}.marquee .roll-box .roll-text{display:inline-block;color:#fff;font-size:.7rem;font-weight:700;line-height:25px;letter-spacing:.0125em;animation:scroll 250s linear infinite;z-index:4}@keyframes scroll{0%{transform:translate(0)}to{transform:translate(-100%)}}\n",document.head.appendChild(t);const x={class:"marquee"},f={slot:"primary",class:"roll-box"},h=["innerHTML"];e("_",{__name:"Marquee",setup(e){const t=s(""),{getPublicUrl:y}=o();l((()=>{v()}));const v=async()=>{const e=await r();if("200"===e.state){const n=e.resultData.msgList||[];t.value=n.reduce(((e,t)=>{let n=t.msgContent.replace(/<\/c>/g,"</span>");return n=n.replace(/<color=/g,'<span style="color:'),n=n.replace(/#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g,'#$1"'),e+=`<span style="margin-right: 20px;">${n}</span>`}),'<span style="color: #ffffff">')}else{const t=await n.create({message:e.msg,duration:1500,position:"top",color:"danger",translucent:!0});await t.present()}};return(e,n)=>(c(),p("div",x,[g(m(i),null,{default:d((()=>[g(m(a),{slot:"start",class:"notice-icon",src:m(y)("/home/icon-notice.png"),style:{width:"24px",height:"24px",margin:"0 4px 0 0"}},null,8,["src"]),u("div",f,[u("span",{class:"roll-text",innerHTML:t.value},null,8,h)])])),_:1})]))}})}}}));
