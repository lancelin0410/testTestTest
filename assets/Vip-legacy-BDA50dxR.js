System.register(["./@vue-legacy-D6coodBY.js","./@ionic-legacy-BvCo94mv.js","./swiper-legacy-CVdaogR7.js","./index-legacy-wrZ_FSIx.js","./@stencil-legacy-B3F1rWbF.js","./@capacitor-legacy-DN4LNBqm.js","./vue-router-legacy-f55MWKZg.js","./localforage-legacy-D0pVUvDl.js","./@adjustcom-legacy-QP0zxLxB.js","./pinia-legacy-C_Ccd9rn.js","./vue-i18n-legacy-Dfssw_XK.js","./@intlify-legacy-DDHA1rkh.js","./pinia-plugin-persistedstate-2-legacy-CtlOhiZd.js","./@awesome-cordova-plugins-legacy-CuOL20OL.js","./rxjs-legacy-C12cs3ed.js","./tslib-legacy-BRpw1qYg.js"],(function(e,i){"use strict";var t,l,a,p,s,n,o,v,r,u,d,c,g,f,x,h,b,y,m,_,w,z,k,j,$,L,V,I,C,P,S,R,F,B;return{setters:[e=>{t=e.r,l=e.A,a=e.G,p=e.H,s=e.I,n=e.B,o=e.D,v=e.N,r=e.O,u=e.a,d=e.Q,c=e.L,g=e.X,f=e.P,x=e.J,h=e.K,b=e.F},e=>{y=e.j,m=e.m,_=e.i,w=e.x,z=e.y,k=e.z,j=e.d,$=e.E,L=e.K,V=e.B,I=e.o,C=e.h},e=>{P=e.S,S=e.a},e=>{R=e.c,F=e.l,B=e.u},null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var i=document.createElement("style");i.textContent=".vip .vip-text{color:#ffdf3f}.vip .vip-top{position:relative;width:100%;height:210px;background:url(/vip/vip-bg.png);background-size:100% 100%}.vip .vip-top .vip-icon{height:60%;display:flex;flex-direction:column;align-items:center;justify-content:center}.vip .vip-top .vip-icon ion-img{filter:drop-shadow(0 1px 2px #FDF062)}.vip .vip-top .vip-icon .vip-icon-text{margin-top:2px;background-color:var(--ion-background-color);border-radius:10px;width:50%;text-align:center}.vip .vip-top .excessive-img{position:relative;top:50%;left:50%;transform:translate(-50%,-50%);width:80px;height:45px}.vip .vip-top .vip-exp{position:relative;width:100%;height:16px;box-sizing:border-box;border-radius:8px;margin:auto;background-color:var(--ion-background-color);overflow:hidden}.vip .vip-top .vip-exp .vip-grading-img{mix-blend-mode:screen;position:absolute;left:0;top:50%;transform:translate(-50%,-50%)}.vip .vip-top .vip-exp .vip-exp-text{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:.7rem;font-weight:700;text-stroke:.4px #610505;-webkit-text-stroke:.4px #610505}.vip .vip-top .vip-exp .vip-current-exp{position:absolute;left:0;top:0;height:100%;background:linear-gradient(90deg,#ffd202,#feffa0);border-radius:8px}.vip .vip-top .deposit-btn{--background: linear-gradient(0deg, #31b12f, #10740b);--background-activated: linear-gradient(45deg, #31b12f, #10740b);--border-radius: 14px}.vip .vip-body{background-color:var(--ion-background-light-color);margin-top:12px;box-sizing:border-box;border-radius:12px;height:50vh;padding:16px 16px 48px;align-content:flex-start}.vip .vip-body .vip-badge{width:206px;height:35px;background:url(/vip/Privileges-bg.png);background-size:100% 100%;text-align:center;line-height:35px;margin:auto;color:#3d0303;font-size:1rem;font-weight:700}.vip .vip-body .vip-bonus{display:flex;justify-content:space-evenly;padding:16px 4px}.vip .vip-body .vip-bonus ion-img{flex:1}.vip .vip-body .vip-bonus ion-text{flex:3;padding-left:8px;font-size:1rem;text-align:left}.vip .vip-body .vip-info{display:flex;justify-content:space-between;padding:8px 0;font-size:1rem}.vip .vip-body .vip-info .btn-service{--padding-start: .9em;--padding-end: .9em;position:relative}.vip .vip-body .vip-info .btn-service .service-icon{height:18px;margin-right:4px}\n",document.head.appendChild(i);const M={style:{"font-size":"0.7rem",height:"100%","margin-left":"8px","line-height":"40px"}},T={class:"vip-text"},U={class:"vip-badge"},D={class:"vip-text"},G={class:"vip-text"},N={class:"vip-text"},A={class:"vip-text"},E={class:"vip-text"},K={class:"vip-text"},q={class:"vip-text"},H={class:"vip-text"},J={class:"vip-text"},O={key:0};e("default",{__name:"Vip",setup(e){const i=R(),Q=F(),{getPublicUrl:X}=B(),W=t(null),Y=t(1),Z=t(0),ee=t(0),ie=t(""),te=t({}),le=t({}),ae=t([]);l((async()=>{Q.isLogin&&(i.fullLoading=!0,await Q.getUserTotalInfo(),Y.value=0==Q.currVipLevel?1:Q.currVipLevel,Z.value=Q.vipInfo.exp,ee.value=Q.vipInfo.expMax,ie.value=Math.round(Z.value/ee.value*1e4)/100+"%",te.value=Q.vipInfo.currentVipConfig,le.value=Q.vipInfo.nextVipConfig,ae.value=Q.vipInfo.vipConfigList.filter((e=>e.level>0)),i.fullLoading=!1)}));const pe=t(!0),se=e=>{W.value=e},ne=e=>{pe.value=!1,oe(e)},oe=e=>{if(pe.value)return;const i=e.realIndex;Y.value=ae.value[i].level};return(e,t)=>(a(),p(o(C),{class:"vip"},{default:s((()=>[n(o(_),null,{default:s((()=>[n(o(y),null,{default:s((()=>[n(o(m),null,{default:s((()=>[v(r(e.$t("vip.VIP")),1)])),_:1})])),_:1})])),_:1}),u(n(o(I),{class:"ion-padding"},{default:s((()=>[n(o(w),null,{default:s((()=>[n(o(z),{class:"vip-top"},{default:s((()=>[n(o(k),{size:"4",class:"vip-icon"},{default:s((()=>[n(o(j),{src:te.value.picUrl},null,8,["src"]),n(o($),{class:"vip-icon-text"},{default:s((()=>[v(r(e.$t("vip.VIP"))+" "+r(te.value.level),1)])),_:1})])),_:1}),n(o(k),{size:"4"},{default:s((()=>[n(o(j),{class:"excessive-img",src:o(X)("/vip/excessive.png")},null,8,["src"])])),_:1}),n(o(k),{size:"4",class:"vip-icon"},{default:s((()=>[n(o(j),{src:le.value.picUrl},null,8,["src"]),n(o($),{class:"vip-icon-text"},{default:s((()=>[v(r(e.$t("vip.VIP"))+" "+r(le.value.level),1)])),_:1})])),_:1}),n(o(k),{size:"11",class:"vip-exp"},{default:s((()=>[c("div",{class:"vip-current-exp",style:g({width:ie.value})},null,4),ie.value>0?(a(),p(o(j),{key:0,class:"vip-grading-img",src:o(X)("/vip/g.png"),style:g({left:ie.value})},null,8,["src","style"])):f("",!0),n(o($),{class:"vip-exp-text"},{default:s((()=>[v(r(Z.value)+" / "+r(ee.value),1)])),_:1})])),_:1}),n(o(k),{size:"9"},{default:s((()=>[c("div",M,[v(r(e.$t("vip.continueToDeposit"))+" ",1),c("span",T,r(ee.value-Z.value),1),v(" "+r(e.$t("vip.toReach"))+" "+r(le.value.name),1)])])),_:1}),n(o(k),{size:"3"},{default:s((()=>[n(o(L),{class:"deposit-btn",size:"small"},{default:s((()=>[v(r(e.$t("vip.deposit")),1)])),_:1})])),_:1})])),_:1}),n(o(z),{class:"vip-body"},{default:s((()=>[n(o(k),{size:"2"},{default:s((()=>[n(o(j),{src:o(X)("/vip/prev.png"),style:{width:"24px",height:"32px",position:"absolute",left:"10px"},onClick:t[0]||(t[0]=e=>W.value.slidePrev())},null,8,["src"])])),_:1}),n(o(k),{size:"8"},{default:s((()=>[c("div",U,[n(o($),null,{default:s((()=>[v(r(e.$t("vip.VIP"))+" "+r(Y.value||1)+" "+r(e.$t("vip.privileges")),1)])),_:1})])])),_:1}),n(o(k),{size:"2"},{default:s((()=>[n(o(j),{src:o(X)("/vip/next.png"),style:{width:"24px",height:"32px",position:"absolute",right:"10px"},onClick:t[1]||(t[1]=e=>W.value.slideNext())},null,8,["src"])])),_:1}),n(o(P),{modules:[o(V)],centeredSlides:!0,loop:!0,allowTouchMove:!0,onSwiper:se,onSliderFirstMove:ne,onSlideNextTransitionStart:ne,onSlidePrevTransitionStart:ne,onSlideChange:oe},{default:s((()=>[(a(!0),x(b,null,h(ae.value,(i=>(a(),p(o(S),{key:`vipConfig_${i.id}`},{default:s((()=>[n(o(z),null,{default:s((()=>[n(o(k),{class:"vip-bonus",size:"6"},{default:s((()=>[n(o(j),{src:o(X)("/vip/UpGrade-icon.png"),style:{width:"35px",height:"35px"}},null,8,["src"]),n(o($),null,{default:s((()=>[v(r(e.$t("vip.upGradeBonus"))+" ",1),c("div",D,r(i.upgradeReward),1)])),_:2},1024)])),_:2},1024),n(o(k),{class:"vip-bonus",size:"6"},{default:s((()=>[n(o(j),{src:o(X)("/vip/bet-icon.png"),style:{width:"35px",height:"35px"}},null,8,["src"]),n(o($),null,{default:s((()=>[v(r(e.$t("vip.betRebate"))+" ",1),c("div",G,r(Math.round(1e4*i.betRebateRate)/100)+"%",1)])),_:2},1024)])),_:2},1024),n(o(k),{class:"vip-bonus",size:"6"},{default:s((()=>[n(o(j),{src:o(X)("/vip/weekly-icon.png"),style:{width:"35px",height:"35px"}},null,8,["src"]),n(o($),null,{default:s((()=>[v(r(e.$t("vip.weeklyBonus"))+" ",1),c("div",N,r(i.weekReward),1)])),_:2},1024)])),_:2},1024),n(o(k),{class:"vip-bonus",size:"6"},{default:s((()=>[n(o(j),{src:o(X)("/vip/Birthday-icon.png"),style:{width:"35px",height:"35px"}},null,8,["src"]),n(o($),null,{default:s((()=>[v(r(e.$t("vip.birthdayBonus"))+" ",1),c("div",A,r(i.birthdayReward),1)])),_:2},1024)])),_:2},1024),n(o(k),{size:"12"},{default:s((()=>[n(o($),{class:"vip-info"},{default:s((()=>[v(r(e.$t("vip.withdrawDailyLimited"))+": ",1),c("div",E,r(i.withdrawLimit),1)])),_:2},1024)])),_:2},1024),n(o(k),{size:"12"},{default:s((()=>[n(o($),{class:"vip-info"},{default:s((()=>[v(r(e.$t("vip.withdrawFee"))+": ",1),c("div",K,r(Math.round(1e4*i.withdrawFee)/100)+"%",1)])),_:2},1024)])),_:2},1024),n(o(k),{size:"12"},{default:s((()=>[n(o($),{class:"vip-info"},{default:s((()=>[v(r(e.$t("vip.withdrawDailyTimes"))+": ",1),c("div",q,r(i.withdrawCountLimit),1)])),_:2},1024)])),_:2},1024),n(o(k),{size:"12"},{default:s((()=>[n(o($),{class:"vip-info"},{default:s((()=>[v(r(e.$t("vip.relegationRequirements"))+": ",1),c("div",H,r(i.relegationRechargeAmount),1)])),_:2},1024)])),_:2},1024),n(o(k),{size:"12"},{default:s((()=>[n(o($),{class:"vip-info"},{default:s((()=>[v(r(e.$t("vip.VIPCustomerService"))+": ",1),c("div",J,[Y.value<o(Q).minVipLevel||o(Q).currVipLevel<o(Q).minVipLevel?(a(),x("span",O,r(e.$t("vip.exclusiveForVlP"))+" > "+r(o(Q).minVipLevel),1)):(a(),p(o(L),{key:1,class:"btn-service",color:"light",href:o(Q).serviceUrl,target:"_blank",shape:"round",size:"small"},{default:s((()=>[n(o(j),{class:"service-icon",src:o(X)("/vip/dh.png")},null,8,["src"]),c("span",null,r(e.$t("vip.customer")),1)])),_:1},8,["href"]))])])),_:1})])),_:1})])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["modules"])])),_:1})])),_:1})])),_:1},512),[[d,!o(i).fullLoading]])])),_:1}))}})}}}));
