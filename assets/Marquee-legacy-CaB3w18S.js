System.register(["./@ionic-legacy-BvCo94mv.js","./index-legacy-DuuCZMs8.js","./@stencil-legacy-B3F1rWbF.js","./@vue-legacy-D6coodBY.js"],(function(e,t){"use strict";var n,a,l,r,i,o,s,c,p,g,u,d,m,x,f;return{setters:[e=>{n=e.t,a=e.s,l=e.d,r=e.j},e=>{i=e.k,o=e.u},null,e=>{s=e.r,c=e.A,p=e.w,g=e.G,u=e.J,d=e.B,m=e.I,x=e.D,f=e.L}],execute:function(){var t=document.createElement("style");t.textContent=".marquee{position:relative;height:25px;margin:8px 4px}.marquee ion-toolbar{--min-height: 25px;--padding-start: 0px;--padding-end: 0px;--padding-top: 0px;--padding-bottom: 0px;position:relative;height:25px;background:url(/testTestTest/home/icon-notice-bg.png) no-repeat!important;background-size:100% 100%!important}.marquee .roll-box{position:relative;width:100%;text-align:center;vertical-align:middle;white-space:nowrap;transition:all .2s ease-in-out;margin:0 8px 0 4px;overflow:hidden}.marquee .roll-box .roll-text{display:inline-block;color:#fff;font-size:.7rem;font-weight:700;line-height:25px;letter-spacing:.0125em}\n",document.head.appendChild(t);const h={class:"marquee"},y={slot:"primary",class:"roll-box"},v=["innerHTML"];e("_",{__name:"Marquee",setup(e){const{getPublicUrl:t}=o(),b=s(null);let w;const q=s("");c((()=>{T()}));const T=async()=>{const e=await i();if("200"===e.state){const t=e.resultData.msgList||[];q.value=t.reduce(((e,t)=>{let n=t.msgContent.replace(/<\/c>/g,"</span>");return n=n.replace(/<color=/g,'<span style="color:'),n=n.replace(/#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g,'#$1"'),e+=`<span style="margin-right: 20px;">${n}</span>`}),'<span style="color: #ffffff">')}else{const t=await n.create({message:e.msg,duration:1500,position:"top",color:"danger",translucent:!0});await t.present()}};return p(q,(e=>{e.length>0&&(w=a().addElement(b.value).duration(25e4).fill("both").iterations(1/0).fromTo("transform","translateX(0)","translateX(-100%)"),w.play())})),(e,n)=>(g(),u("div",h,[d(x(r),null,{default:m((()=>[d(x(l),{slot:"start",class:"notice-icon",src:x(t)("/home/icon-notice.png"),style:{width:"24px",height:"24px",margin:"0 4px 0 0"}},null,8,["src"]),f("div",y,[f("span",{ref_key:"rollText",ref:b,class:"roll-text",innerHTML:q.value},null,8,v)])])),_:1})]))}})}}}));
