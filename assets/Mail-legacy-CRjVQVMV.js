System.register(["./index-legacy-Bjhbpx3o.js","./useMailStore-legacy-4P1JkZUJ.js"],(function(a,i){"use strict";var t,e,l,n,o,s,r,c,p,m,d,u,g,h,f,v,b,w,x,y,k,L,_,M,$,z,S,j,C,T;return{setters:[a=>{t=a.ae,e=a.c,l=a.r,n=a.o,o=a.k,s=a.z,r=a.h,c=a.i,p=a.j,m=a.I,d=a.t,u=a.f,g=a.l,h=a.$,f=a.w,v=a.K,b=a.ai,w=a.p,x=a.q,y=a.ac,k=a.D,L=a.F,_=a.E,M=a.ad,$=a.R},a=>{z=a.u,S=a.r,j=a.a,C=a.d,T=a._}],execute:function(){var i=document.createElement("style");i.textContent=".mail-popup{--background: var(--ion-background-light-color);--width: 88vw;--height: fit-content;--box-shadow: 0 28px 48px rgba(0, 0, 0, .4);--border-radius: 6px}.mail-popup .wrapper{margin:16px 8px;padding:0 12px;height:fit-content}.mail-popup .wrapper ion-img.btn-close{width:32px;height:32px;position:absolute;top:0;right:0}.mail-popup .wrapper .mail-title{text-align:center;margin-bottom:24px}.mail-popup .wrapper .mail-sub-title{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%}.mail-popup .wrapper .mail-content{height:20vh;background:var(--ion-background-color);border-radius:6px;font-size:.8rem;color:#fff;line-height:24px;white-space:pre-wrap;padding:8px 12px;margin:16px 0;overflow-y:scroll}.mail-popup .wrapper .mail-attaches{position:relative;left:50%;transform:translate(-50%);width:80%;display:flex;align-items:center;justify-content:space-around;background:var(--ion-background-color);border-radius:6px;color:#fff;padding:8px 12px;margin:12px 0 24px}.mail-popup .wrapper ion-button{position:relative;left:50%;transform:translate(-50%);width:40%;color:#fff}.mail-popup .wrapper ion-button.btn-confirm{--background: linear-gradient(90deg, #f78d22, #e34e04);--background-activated: linear-gradient(45deg, #f78d22, #e34e04)}.mail-popup .wrapper ion-button.btn-del{--background: linear-gradient(0deg, #32b12f 0%, #10740b 100%);--background-activated: linear-gradient(30deg, #32b12f 0%, #10740b 100%)}.mail{position:relative}.mail .mail-item{position:relative;height:10vh;min-height:68px;margin-bottom:12px;border-radius:8px}.mail .mail-item::part(native){position:relative;height:100%}.mail .mail-item .mail-icon{position:relative;background:var(--ion-background-color);height:80%;aspect-ratio:1/1;padding:12px;margin-right:4px;border-radius:8px}.mail .mail-item .mail-icon ion-img{position:absolute}.mail .mail-item .mail-icon ion-img.mail-img{width:50%;top:50%;left:50%;transform:translate(-50%,-50%)}.mail .mail-item .mail-icon ion-img.mail-tag{width:40%;bottom:0;right:0}.mail .mail-item .mail-content{position:relative;width:100%;height:100%;padding:12px 8px;overflow:hidden}.mail .mail-item .mail-content .mail-title{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;height:20%}.mail .mail-item .mail-content .mail-title>div:first-child{width:55%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mail .mail-item .mail-content .mail-detail{color:#fa8484;font-size:.8rem;margin:8px 2px;text-align:justify;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.mail .no-data{position:relative;top:10vh}\n",document.head.appendChild(i);const D={class:"wrapper"},I={class:"mail-title"},R={class:"mail-sub-title"},O={style:{"font-size":"0.9rem"}},P={style:{"font-size":"0.7rem",color:"#FD5959"}},E={class:"mail-content"},F={key:0,class:"mail-attaches"},q={__name:"MailPopup",setup(a,{expose:i}){const{t:x}=t(),y=e(),k=z(),L="/testTestTest/",_=l(!1),M=l({}),$=async()=>{y.barLoading=!0;const a=await j({mailId:M.value.id});if("200"===a.state){await k.getMailList(),y.barLoading=!1,_.value=!1,M.value.attachesStatus=1;const a=await w.create({message:x("mail.message.receiveSuccess"),duration:1500,position:"top",color:"success",translucent:!0});await a.present()}else{y.barLoading=!1;const i=await w.create({message:a.msg,duration:1500,position:"top",color:"danger",translucent:!0});await i.present()}},T=async()=>{y.barLoading=!0;const a=await C({mailId:M.value.id});if("200"===a.state){await k.getMailList(),y.barLoading=!1,_.value=!1;const a=await w.create({message:x("mail.message.deleteSuccess"),duration:1500,position:"top",color:"success",translucent:!0});await a.present()}else{const i=await w.create({message:a.msg,duration:1500,position:"top",color:"danger",translucent:!0});await i.present(),y.barLoading=!1}};return i({showMail:async a=>{if(y.barLoading=!0,0==a.isRead){const i=await S({mailId:a.id});if("200"===i.state)a.isRead=1;else{const a=await w.create({message:i.msg,duration:1500,position:"top",color:"danger",translucent:!0});await a.present()}}M.value=a,y.barLoading=!1,_.value=!0}}),(a,i)=>(n(),o(p(b),{class:"mail-popup",isOpen:_.value,onDidDismiss:i[1]||(i[1]=a=>_.value=!1)},{default:s((()=>[r("div",D,[c(p(m),{class:"btn-close",src:`${p(L)}mail/icon-popup-close.png`,onClick:i[0]||(i[0]=a=>_.value=!1)},null,8,["src"]),r("h3",I,d(M.value.title||""),1),r("div",R,[r("div",O,d(a.$t("mail.dearPlayer"))+":",1),r("div",P,d(M.value.createTime||""),1)]),r("div",E,d(M.value.content||""),1),M.value.attaches&&0===M.value.attachesStatus?(n(),u("div",F,[c(p(m),{src:`${p(L)}mail/icon-coin.png`,style:{width:"35px",height:"35px"}},null,8,["src"]),r("div",null,d(Math.round(100*JSON.parse(M.value.attaches).amount)/100),1)])):g("",!0),M.value.attaches&&0===M.value.attachesStatus?(n(),o(p(h),{key:1,class:"btn-confirm ion-text-capitalize",fill:"solid",shape:"round",onClick:f($,["stop"])},{default:s((()=>[v(d(a.$t("mail.button.confirm")),1)])),_:1})):(n(),o(p(h),{key:2,class:"btn-del ion-text-capitalize",fill:"solid",shape:"round",onClick:f(T,["stop"])},{default:s((()=>[v(d(a.$t("mail.button.delete")),1)])),_:1}))])])),_:1},8,["isOpen"]))}},J={slot:"start",class:"mail-icon"},K={class:"mail-title"},N={style:{"font-size":"1rem"}},A={style:{"font-size":"0.7rem"}},B={class:"mail-detail"};a("default",{__name:"Mail",setup(a){const i=e(),t=z(),h="/testTestTest/",v=l(null);return x((async()=>{i.barLoading=!0,await t.getMailList(),i.barLoading=!1})),(a,i)=>(n(),o(p(_),{class:"mail"},{default:s((()=>[p(t).hasMail?(n(),o(p(y),{key:0},{default:s((()=>[(n(!0),u(L,null,k(p(t).mailList,(a=>(n(),o(p(M),{key:a.id,class:"mail-item",lines:"none",onClick:f((i=>(a=>{v.value.showMail(a)})(a)),["stop"])},{default:s((()=>[r("div",J,[a.isRead?(n(),o(p(m),{key:0,class:"mail-img",src:`${p(h)}mail/icon-mail-open.png`},null,8,["src"])):(n(),o(p(m),{key:1,class:"mail-img",src:`${p(h)}mail/icon-mail.png`},null,8,["src"])),a.attaches&&0===a.attachesStatus?(n(),o(p(m),{key:2,class:"mail-tag",src:`${p(h)}mail/icon-mail-gift.png`},null,8,["src"])):g("",!0)]),c(p($),{class:"mail-content"},{default:s((()=>[r("div",K,[r("div",N,d(a.title||""),1),r("div",A,d(a.createTime||""),1)]),r("div",B,d(a.content||""),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})):(n(),o(T,{key:1,class:"no-data",desc:a.$t("mail.message.nodata")},null,8,["desc"])),c(q,{ref_key:"mailPopup",ref:v},null,512)])),_:1}))}})}}}));
