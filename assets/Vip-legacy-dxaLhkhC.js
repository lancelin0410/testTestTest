System.register(["./@vue-legacy-Bd-ybgzA.js","./@ionic-legacy-DPSKJYXl.js","./swiper-legacy-D0hpgEM9.js","./index-legacy-BfwNR54Q.js","./@stencil-legacy-B3F1rWbF.js","./@capacitor-legacy-DN4LNBqm.js","./vue-router-legacy-D1r9FOl6.js","./ionicons-legacy-DYh71j0f.js","./localforage-legacy-D0pVUvDl.js","./@adjustcom-legacy-QP0zxLxB.js","./pinia-legacy-Dm_oCeSh.js","./vue-i18n-legacy-C-H4GryL.js","./@intlify-legacy-DDHA1rkh.js","./pinia-plugin-persistedstate-2-legacy-CtlOhiZd.js","./@awesome-cordova-plugins-legacy-CuOL20OL.js","./rxjs-legacy-C12cs3ed.js","./tslib-legacy-BRpw1qYg.js"],(function(e,i){"use strict";var t,l,a,n,s,p,o,v,r,u,d,c,g,f,x,h,b,y,m,_,w,z,k,j,$,L,V,I,C,S,P,R,T,F;return{setters:[e=>{t=e.r,l=e.B,a=e.H,n=e.I,s=e.J,p=e.C,o=e.E,v=e.O,r=e.P,u=e.a,d=e.S,c=e.M,g=e.Z,f=e.R,x=e.K,h=e.L,b=e.F},e=>{y=e.j,m=e.m,_=e.i,w=e.z,z=e.A,k=e.B,j=e.d,$=e.E,L=e.K,V=e.D,I=e.q,C=e.h},e=>{S=e.S,P=e.a},e=>{R=e.c,T=e.e,F=e.u},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var i=document.createElement("style");i.textContent=".vip .vip-text{color:#ffdf3f}.vip .vip-top{position:relative;width:100%;height:210px;background:url(/testTestTest/vip/vip-bg.png);background-size:100% 100%}.vip .vip-top .vip-icon{height:60%;display:flex;flex-direction:column;align-items:center;justify-content:center}.vip .vip-top .vip-icon ion-img{filter:drop-shadow(0 1px 2px #FDF062)}.vip .vip-top .vip-icon .vip-icon-text{margin-top:2px;background-color:var(--ion-background-color);border-radius:10px;width:50%;text-align:center}.vip .vip-top .excessive-img{position:relative;top:50%;left:50%;transform:translate(-50%,-50%);width:80px;height:45px}.vip .vip-top .vip-exp{position:relative;width:100%;height:16px;box-sizing:border-box;border-radius:8px;margin:auto;background-color:var(--ion-background-color);overflow:hidden}.vip .vip-top .vip-exp .vip-grading-img{mix-blend-mode:screen;position:absolute;left:0;top:50%;transform:translate(-50%,-50%)}.vip .vip-top .vip-exp .vip-exp-text{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:.7rem;font-weight:700;text-stroke:.4px #610505;-webkit-text-stroke:.4px #610505}.vip .vip-top .vip-exp .vip-current-exp{position:absolute;left:0;top:0;height:100%;background:linear-gradient(90deg,#ffd202,#feffa0);border-radius:8px}.vip .vip-top .deposit-btn{--background: linear-gradient(0deg, #31b12f, #10740b);--background-activated: linear-gradient(45deg, #31b12f, #10740b);--border-radius: 14px}.vip .vip-body{background-color:var(--ion-background-light-color);margin-top:12px;box-sizing:border-box;border-radius:12px;height:fit-content;padding:16px 16px 48px;align-content:flex-start}.vip .vip-body .vip-badge{width:100%;background:url(/testTestTest/vip/Privileges-bg.png);background-size:100% 100%;text-align:center;line-height:35px;margin:auto;color:#3d0303;font-size:1rem;font-weight:700}.vip .vip-body .vip-bonus{display:flex;justify-content:space-evenly;padding:16px 4px}.vip .vip-body .vip-bonus ion-img{flex:1}.vip .vip-body .vip-bonus ion-text{flex:3;display:flex;flex-direction:column;justify-content:space-between;padding-left:8px;font-size:.8rem;text-align:left}.vip .vip-body .vip-info{display:flex;justify-content:space-between;padding:8px 0;font-size:.9rem}.vip .vip-body .vip-info .btn-service{--padding-start: .9em;--padding-end: .9em;position:relative}.vip .vip-body .vip-info .btn-service .service-icon{height:18px;margin-right:4px}\n",document.head.appendChild(i);const M={style:{"font-size":"0.66rem",height:"100%","margin-left":"8px","line-height":"40px"}},B={class:"vip-text"},U={class:"vip-badge"},D={class:"vip-text"},E={class:"vip-text"},q={class:"vip-text"},A={class:"vip-text"},G={class:"vip-text"},K={class:"vip-text"},N={class:"vip-text"},H={class:"vip-text"},J={class:"vip-text"},O={key:0};e("default",{__name:"Vip",setup(e){const i=R(),Z=T(),{getImgUrl:Q}=F(),W=t(null),X=t(1),Y=t(0),ee=t(0),ie=t(""),te=t({}),le=t({}),ae=t([]);l((async()=>{Z.isLogin&&(i.fullLoading=!0,await Z.getUserTotalInfo(),X.value=0==Z.currVipLevel?1:Z.currVipLevel,Y.value=Z.vipInfo.exp,ee.value=Z.vipInfo.expMax,ie.value=Math.round(Y.value/ee.value*1e4)/100+"%",te.value=Z.vipInfo.currentVipConfig,le.value=Z.vipInfo.nextVipConfig,ae.value=Z.vipInfo.vipConfigList.filter((e=>e.level>0)),i.fullLoading=!1)}));const ne=t(!0),se=e=>{W.value=e},pe=e=>{ne.value=!1,oe(e)},oe=e=>{if(ne.value)return;const i=e.realIndex;X.value=ae.value[i].level};return(e,t)=>(a(),n(o(C),{class:"vip"},{default:s((()=>[p(o(_),null,{default:s((()=>[p(o(y),null,{default:s((()=>[p(o(m),null,{default:s((()=>[v(r(e.$t("vip.VIP")),1)])),_:1})])),_:1})])),_:1}),u(p(o(I),{class:"ion-padding"},{default:s((()=>[p(o(w),null,{default:s((()=>[p(o(z),{class:"vip-top"},{default:s((()=>[p(o(k),{size:"4",class:"vip-icon"},{default:s((()=>[p(o(j),{src:te.value.picUrl},null,8,["src"]),p(o($),{class:"vip-icon-text"},{default:s((()=>[v(r(e.$t("vip.VIP"))+" "+r(te.value.level),1)])),_:1})])),_:1}),p(o(k),{size:"4"}),p(o(k),{size:"4",class:"vip-icon"},{default:s((()=>[p(o(j),{src:le.value.picUrl},null,8,["src"]),p(o($),{class:"vip-icon-text"},{default:s((()=>[v(r(e.$t("vip.VIP"))+" "+r(le.value.level),1)])),_:1})])),_:1}),p(o(k),{size:"11",class:"vip-exp"},{default:s((()=>[c("div",{class:"vip-current-exp",style:g({width:ie.value})},null,4),ie.value>0?(a(),n(o(j),{key:0,class:"vip-grading-img",src:o(Q)("/vip/g.png"),style:g({left:ie.value})},null,8,["src","style"])):f("",!0),p(o($),{class:"vip-exp-text"},{default:s((()=>[v(r(Y.value)+" / "+r(ee.value),1)])),_:1})])),_:1}),p(o(k),{size:"8.4"},{default:s((()=>[c("div",M,[v(r(e.$t("vip.continueToDeposit"))+" ",1),c("span",B,r(ee.value-Y.value),1),v(" "+r(e.$t("vip.toReach"))+" "+r(le.value.name),1)])])),_:1}),p(o(k),{size:"3.6"},{default:s((()=>[p(o(L),{class:"deposit-btn",size:"small","router-link":"/account/deposit"},{default:s((()=>[v(r(e.$t("vip.deposit")),1)])),_:1})])),_:1})])),_:1}),p(o(z),{class:"vip-body"},{default:s((()=>[p(o(k),{size:"2"},{default:s((()=>[p(o(j),{src:o(Q)("/vip/prev.png"),style:{height:"70%",position:"absolute",left:"10px"},onClick:t[0]||(t[0]=e=>W.value.slidePrev())},null,8,["src"])])),_:1}),p(o(k),{size:"8"},{default:s((()=>[c("div",U,[p(o($),null,{default:s((()=>[v(r(e.$t("vip.VIP"))+" "+r(X.value||1)+" "+r(e.$t("vip.privileges")),1)])),_:1})])])),_:1}),p(o(k),{size:"2"},{default:s((()=>[p(o(j),{src:o(Q)("/vip/next.png"),style:{height:"70%",position:"absolute",right:"10px"},onClick:t[1]||(t[1]=e=>W.value.slideNext())},null,8,["src"])])),_:1}),p(o(S),{modules:[o(V)],centeredSlides:!0,loop:!0,allowTouchMove:!0,onSwiper:se,onSliderFirstMove:pe,onSlideNextTransitionStart:pe,onSlidePrevTransitionStart:pe,onSlideChange:oe},{default:s((()=>[(a(!0),x(b,null,h(ae.value,(i=>(a(),n(o(P),{key:`vipConfig_${i.id}`},{default:s((()=>[p(o(z),null,{default:s((()=>[p(o(k),{class:"vip-bonus",size:"6"},{default:s((()=>[p(o(j),{src:o(Q)("/vip/UpGrade-icon.png"),style:{width:"35px",height:"35px"}},null,8,["src"]),p(o($),null,{default:s((()=>[v(r(e.$t("vip.upGradeBonus"))+" ",1),c("div",D,r(i.upgradeReward),1)])),_:2},1024)])),_:2},1024),p(o(k),{class:"vip-bonus",size:"6"},{default:s((()=>[p(o(j),{src:o(Q)("/vip/bet-icon.png"),style:{width:"35px",height:"35px"}},null,8,["src"]),p(o($),null,{default:s((()=>[v(r(e.$t("vip.betRebate"))+" ",1),c("div",E,r(Math.round(1e4*i.betRebateRate)/100)+"%",1)])),_:2},1024)])),_:2},1024),p(o(k),{class:"vip-bonus",size:"6"},{default:s((()=>[p(o(j),{src:o(Q)("/vip/weekly-icon.png"),style:{width:"35px",height:"35px"}},null,8,["src"]),p(o($),null,{default:s((()=>[v(r(e.$t("vip.weeklyBonus"))+" ",1),c("div",q,r(i.weekReward),1)])),_:2},1024)])),_:2},1024),p(o(k),{class:"vip-bonus",size:"6"},{default:s((()=>[p(o(j),{src:o(Q)("/vip/Birthday-icon.png"),style:{width:"35px",height:"35px"}},null,8,["src"]),p(o($),null,{default:s((()=>[v(r(e.$t("vip.birthdayBonus"))+" ",1),c("div",A,r(i.birthdayReward),1)])),_:2},1024)])),_:2},1024),p(o(k),{size:"12"},{default:s((()=>[p(o($),{class:"vip-info"},{default:s((()=>[v(r(e.$t("vip.withdrawDailyLimited"))+": ",1),c("div",G,r(i.withdrawLimit),1)])),_:2},1024)])),_:2},1024),p(o(k),{size:"12"},{default:s((()=>[p(o($),{class:"vip-info"},{default:s((()=>[v(r(e.$t("vip.withdrawFee"))+": ",1),c("div",K,r(Math.round(1e4*i.withdrawFee)/100)+"%",1)])),_:2},1024)])),_:2},1024),p(o(k),{size:"12"},{default:s((()=>[p(o($),{class:"vip-info"},{default:s((()=>[v(r(e.$t("vip.withdrawDailyTimes"))+": ",1),c("div",N,r(i.withdrawCountLimit),1)])),_:2},1024)])),_:2},1024),p(o(k),{size:"12"},{default:s((()=>[p(o($),{class:"vip-info"},{default:s((()=>[v(r(e.$t("vip.relegationRequirements"))+": ",1),c("div",H,r(i.relegationRechargeAmount),1)])),_:2},1024)])),_:2},1024),p(o(k),{size:"12"},{default:s((()=>[p(o($),{class:"vip-info"},{default:s((()=>[v(r(e.$t("vip.VIPCustomerService"))+": ",1),c("div",J,[X.value<o(Z).minVipLevel||o(Z).currVipLevel<o(Z).minVipLevel?(a(),x("span",O,r(e.$t("vip.exclusiveForVlP"))+" > "+r(o(Z).minVipLevel),1)):(a(),n(o(L),{key:1,class:"btn-service",color:"light",href:o(Z).serviceUrl,target:"_blank",shape:"round",size:"small"},{default:s((()=>[p(o(j),{class:"service-icon",src:o(Q)("/vip/dh.png")},null,8,["src"]),c("span",null,r(e.$t("vip.customer")),1)])),_:1},8,["href"]))])])),_:1})])),_:1})])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["modules"])])),_:1})])),_:1})])),_:1},512),[[d,!o(i).fullLoading]])])),_:1}))}})}}}));
