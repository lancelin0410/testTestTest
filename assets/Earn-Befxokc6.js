import{z as c,g as w,E as p,y as b,J as y,F as h,G as B,H as T,L as S,M as j,d as g,t as D,j as O,C as U,D as L,i as H,o as M,h as N}from"./@ionic-DMGIWTh5.js";import{j as A,r as z,G as o,J as f,B as t,I as a,D as e,N as r,O as n,L as d,F as v,K as R,H as I,W as E,X as F}from"./@vue-hr5trhWq.js";import{u as G}from"./vue-i18n-BwdP5-YB.js";import{u as P,c as J}from"./index-B-AJNu5a.js";import{a as K,b as W}from"./@capacitor-BXp5o1ZG.js";import{c as X}from"./ionicons-BiXz7hlK.js";import"./@stencil-DBaMOtEh.js";import"./vue-router-Z22CwvRX.js";import"./localforage-qzmIiYbH.js";import"./@adjustcom-Dev-Q0DI.js";import"./@intlify-BAcCFw_v.js";import"./pinia-s_8tzVDy.js";import"./pinia-plugin-persistedstate-2-DcGv4gw_.js";import"./@awesome-cordova-plugins-CT7d7gQP.js";import"./rxjs-C3tg6S9t.js";import"./tslib-BHBn2Msb.js";const q={class:"reward"},Q={class:"btn-claim"},Y={__name:"MyRewards",setup($){const l=A({inviteCount:0,availableRebate:0,todayRebate:0,totalRebate:0}),u=z([]);return(s,_)=>(o(),f("div",q,[t(e(b),{class:"ion-justify-content-between"},{default:a(()=>[t(e(c),{class:"count-item left",size:"5.6"},{default:a(()=>[t(e(w),null,{default:a(()=>[r(n(s.$t("earn.myRewards.rewardToday")),1)]),_:1}),t(e(p),null,{default:a(()=>[r(n(l.todayRebate),1)]),_:1})]),_:1}),t(e(c),{class:"count-item right",size:"5.6"},{default:a(()=>[t(e(w),null,{default:a(()=>[r(n(s.$t("earn.myRewards.totalRewards")),1)]),_:1}),t(e(p),null,{default:a(()=>[r(n(l.todayRebate),1)]),_:1})]),_:1})]),_:1}),t(e(h),null,{default:a(()=>[t(e(y),null,{default:a(()=>[t(e(w),null,{default:a(()=>[r(n(s.$t("earn.myRewards.numberOfInviters"))+":",1)]),_:1}),t(e(p),{style:{color:"#ffffff","margin-left":"12px"}},{default:a(()=>[r(n(l.inviteCount),1)]),_:1})]),_:1})]),_:1}),t(e(h),null,{default:a(()=>[t(e(y),null,{default:a(()=>[t(e(w),null,{default:a(()=>[r(n(s.$t("earn.myRewards.amountAvailable"))+":",1)]),_:1}),t(e(p),{style:{color:"#ffdf3f","margin-left":"12px"}},{default:a(()=>[r(n(l.availableRebate),1)]),_:1}),d("div",Q,n(s.$t("earn.myRewards.claim")),1)]),_:1})]),_:1}),t(e(h),null,{default:a(()=>[t(e(B),null,{default:a(()=>[t(e(b),{class:"ion-align-items-center ion-justify-content-center"},{default:a(()=>[t(e(c),null,{default:a(()=>[t(e(T),{class:"title-text"},{default:a(()=>[r(n(s.$t("earn.myRewards.date")),1)]),_:1})]),_:1}),t(e(c),null,{default:a(()=>[t(e(T),null,{default:a(()=>[r(n(s.$t("earn.myRewards.rewards")),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(e(y),{class:"reward-content"},{default:a(()=>[t(e(S),null,{default:a(()=>[(o(!0),f(v,null,R(u.value,(i,x)=>(o(),I(e(j),{key:"reward_".concat(x),class:"reward-list",lines:"none"},{default:a(()=>[t(e(b),{class:"ion-align-items-center ion-justify-content-center"},{default:a(()=>[t(e(c),null,{default:a(()=>[r(n(i.day),1)]),_:2},1024),t(e(c),null,{default:a(()=>[r(n(i.rebate),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]))}},Z={class:"rules"},ee={class:"rule-icon"},te={class:"rule-marker-text"},ae={class:"rule-marker-text"},le={__name:"Rules",setup($){const{t:l}=G(),{getPublicUrl:u}=P(),s=[{icon:u("/earn/rule1.png"),children:[{number:"5 ",text:l("earn.rule.text"),name:l("earn.rule.cashBonus")},{number:"0.5% ",text:l("earn.rule.text"),name:l("earn.rule.cashBalance")}]},{icon:u("/earn/rule2.png"),children:[{number:"0.3% ",text:l("earn.rule.text"),name:l("earn.rule.cashBalance")}]},{icon:u("/earn/rule3.png"),children:[{number:"0.2% ",text:l("earn.rule.text"),name:l("earn.rule.cashBonus")}]}],_=[{title:l("earn.rule.tipOneProblem"),text:l("earn.rule.tipOneText")},{title:l("earn.rule.tipTwoProblem"),text:l("earn.rule.tipTwoText")},{title:l("earn.rule.tipThreeProblem"),text:l("earn.rule.tipThreeText")}];return(i,x)=>(o(),f("div",Z,[t(e(h),{class:"rules-top"},{default:a(()=>[t(e(y),null,{default:a(()=>[t(e(g),{src:e(u)("/earn/earn-tree.png"),style:{width:"100%",margin:"auto"}},null,8,["src"])]),_:1})]),_:1}),t(e(S),null,{default:a(()=>[(o(),f(v,null,R(s,(m,k)=>t(e(j),{key:"rule_".concat(k),class:"rule-list",lines:"none"},{default:a(()=>[d("div",ee,[t(e(g),{src:m.icon},null,8,["src"]),t(e(g),{class:"rule-segment",src:e(u)("/account/icon/segmentation.png")},null,8,["src"])]),t(e(p),{class:"rule-text"},{default:a(()=>[(o(!0),f(v,null,R(m.children,(C,V)=>(o(),f("div",{key:V},[d("span",te,n(C.number),1),d("span",null,n(C.text),1),d("span",ae,n(C.name),1)]))),128))]),_:2},1024)]),_:2},1024)),64))]),_:1}),t(e(h),null,{default:a(()=>[(o(),f(v,null,R(_,(m,k)=>d("span",{key:k},[t(e(B),null,{default:a(()=>[t(e(T),null,{default:a(()=>[r(n(m.title),1)]),_:2},1024)]),_:2},1024),t(e(y),null,{default:a(()=>[r(n(m.text),1)]),_:2},1024)])),64))]),_:1})]))}},ne={class:"share-content"},re={__name:"ShareContent",setup($){const{getPublicUrl:l}=P(),u=J(),s=async()=>{await K.share({title:"",text:"",url:u.inviteLink})},_=async()=>{await W.write({url:u.inviteLink}),await(await D.create({message:"Success",duration:1500,position:"top",translucent:!0,icon:X,color:"success"})).present()};return(i,x)=>(o(),f("div",ne,[t(e(b),{class:"ion-justify-content-evenly"},{default:a(()=>[t(e(c),{size:"2"},{default:a(()=>[r(n(i.$t("earn.footer.myLink"))+":",1)]),_:1}),t(e(c),{size:"8",class:"share-url"},{default:a(()=>[r(n(e(u).inviteLink),1)]),_:1}),t(e(c),{size:"2"},{default:a(()=>[d("div",{class:"btn-copy",onClick:_},n(i.$t("earn.footer.copy")),1)]),_:1})]),_:1}),d("div",{class:"btn-share",onClick:s},[t(e(g),{src:e(l)("/earn/share-icon.png"),style:{height:"80%","margin-right":"12px"}},null,8,["src"]),d("span",null,n(i.$t("earn.footer.share")),1)])]))}},Re={__name:"Earn",setup($){const l=z("Rules"),u={MyRewards:Y,Rules:le};return(s,_)=>(o(),I(e(N),{class:"earn"},{default:a(()=>[t(e(H),null,{default:a(()=>[t(e(O),null,{default:a(()=>[t(e(U),{modelValue:l.value,"onUpdate:modelValue":_[0]||(_[0]=i=>l.value=i),mode:"ios"},{default:a(()=>[t(e(L),{value:"MyRewards"},{default:a(()=>[r(n(s.$t("earn.header.myRewards")),1)]),_:1}),t(e(L),{value:"Rules"},{default:a(()=>[r(n(s.$t("earn.header.rules")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(e(M),null,{default:a(()=>[(o(),I(E,null,[(o(),I(F(u[l.value])))],1024)),t(re)]),_:1})]),_:1}))}};export{Re as default};
