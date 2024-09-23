import{r as f,H as k,I as B,J as i,M as a,P as t,C as n,E as e,V as g,O as $,j as M,B as Y,a as Z,S as x,K as T,R as z,L as tt,F as at,$ as et,W as st}from"./@vue-KvDcA5L4.js";import{u as ot}from"./vue-i18n-CPl1SEIs.js";import{b as F}from"./vue-router-D1p6pxpQ.js";import{K as y,O as V,t as A,d as nt,P as R,R as U,A as it,L as E,M as C,q as j,Q as rt,j as lt,m as dt,k as ut,h as ct,B as wt}from"./@ionic-CQtneEHh.js";import{b as pt,e as ht}from"./ionicons-T4lv_k6t.js";import{l as H,c as mt,e as ft,m as gt,u as _t}from"./index-DbfdoCpI.js";import{g as vt,a as bt,b as At,c as $t}from"./withdraw-CqqmClu1.js";import"./@intlify-BAcCFw_v.js";import"./@stencil-DBaMOtEh.js";import"./@capacitor-BXp5o1ZG.js";import"./localforage-qzmIiYbH.js";import"./@adjustcom-Dev-Q0DI.js";import"./pinia-7EZHWT0u.js";import"./pinia-plugin-persistedstate-2-DcGv4gw_.js";import"./@awesome-cordova-plugins-CT7d7gQP.js";import"./rxjs-C3tg6S9t.js";import"./tslib-BHBn2Msb.js";const kt={class:"wrapper"},yt={class:"dialog-title"},Pt={class:"dialog-content"},Ct={class:"btn-group"},Dt={__name:"SetPasswordPopup",setup(O,{expose:P}){const D=F(),{popupEnter:h,popupLeave:N}=H(),w=f(!1),_=async()=>{w.value=!0},L=()=>{w.value=!1,D.push({name:"WithdrawPassword"})};return P({showDialog:_}),(c,u)=>(k(),B(e(V),{class:"setPassword-popup",isOpen:w.value,enterAnimation:e(h),leaveAnimation:e(N),onDidDismiss:u[1]||(u[1]=v=>w.value=!1)},{default:i(()=>[a("div",kt,[a("h3",yt,t(c.$t("withdraw.setPasswordPopup.title")),1),a("div",Pt,t(c.$t("withdraw.setPasswordPopup.des")),1),a("div",Ct,[n(e(y),{class:"btn-cancel ion-text-capitalize",fill:"solid",shape:"round",onClick:u[0]||(u[0]=g(v=>w.value=!1,["stop"]))},{default:i(()=>[$(t(c.$t("withdraw.button.cancel")),1)]),_:1}),n(e(y),{class:"btn-confirm ion-text-capitalize",fill:"solid",shape:"round",onClick:g(L,["stop"])},{default:i(()=>[$(t(c.$t("withdraw.button.goToSetPassword")),1)]),_:1})])])]),_:1},8,["isOpen","enterAnimation","leaveAnimation"]))}},Lt={class:"wrapper"},It={class:"dialog-title"},St={class:"dialog-content"},Bt={class:"btn-group"},Nt={__name:"BankCardPopup",setup(O,{expose:P}){const D=F(),{popupEnter:h,popupLeave:N}=H(),w=f(!1),_=async()=>{w.value=!0},L=()=>{w.value=!1,D.push({name:"BankCardList"})};return P({showDialog:_}),(c,u)=>(k(),B(e(V),{class:"bankCard-popup",isOpen:w.value,enterAnimation:e(h),leaveAnimation:e(N),onDidDismiss:u[1]||(u[1]=v=>w.value=!1)},{default:i(()=>[a("div",Lt,[a("h3",It,t(c.$t("withdraw.bankCardPopup.title")),1),a("div",St,t(c.$t("withdraw.bankCardPopup.des")),1),a("div",Bt,[n(e(y),{class:"btn-cancel ion-text-capitalize",fill:"solid",shape:"round",onClick:u[0]||(u[0]=g(v=>w.value=!1,["stop"]))},{default:i(()=>[$(t(c.$t("withdraw.button.cancel")),1)]),_:1}),n(e(y),{class:"btn-confirm ion-text-capitalize",fill:"solid",shape:"round",onClick:g(L,["stop"])},{default:i(()=>[$(t(c.$t("withdraw.button.addNewAccount")),1)]),_:1})])])]),_:1},8,["isOpen","enterAnimation","leaveAnimation"]))}},Wt={class:"balance-card"},zt={class:"balance-content"},Ft={class:"balance-title"},Vt={class:"balance-amount"},Ot={style:{margin:"4px 0"}},Mt={class:"block-title ion-justify-content-between",style:{display:"flex"}},Tt={style:{color:"#fdea5a"}},Rt={style:{margin:"4px 0"}},Ut={class:"block-title"},Et={key:0},jt=a("hr",null,null,-1),Ht={slot:"start",style:{color:"#FD5959","font-size":"0.8rem"}},Jt={slot:"end"},Kt={slot:"start",style:{color:"#FD5959","font-size":"0.8rem"}},qt={slot:"end"},Qt={slot:"start",style:{color:"#FD5959","font-size":"0.8rem"}},Gt={slot:"end"},Xt={slot:"start",style:{color:"#FD5959","font-size":"0.8rem"}},Yt={slot:"end"},Zt=a("hr",null,null,-1),xt={style:{margin:"4px 0"}},ta={class:"block-title"},aa={style:{"font-size":"0.8rem"}},ea={style:{color:"#ffdf3f","margin-left":"4px"}},sa={style:{color:"#ffdf3f","margin-left":"4px"}},oa={class:"account-number"},na={class:"account-text"},ia=a("br",null,null,-1),ra={slot:"start",style:{color:"#FD5959","font-size":"0.8rem"}},la={slot:"end"},da={slot:"start",style:{color:"#FD5959","font-size":"0.8rem"}},ua={slot:"end"},ca={style:{"font-size":"0.8rem",color:"#fa8484"}},wa={style:{color:"#ffdf3f",margin:"0 4px"}},pa={style:{margin:"4px 0"}},ha={class:"block-title"},ma={slot:"start",style:{color:"#FD5959","font-size":"0.8rem"}},fa={slot:"end"},ga={style:{margin:"4px 0"}},_a={class:"block-title"},Oa={__name:"Withdraw",setup(O){const{t:P}=ot(),D=F(),h=mt(),N=ft(),{getImgUrl:w}=_t(),_=f(null),L=f(null),c=f(!1),u=f(!1),v=f(1),m="Rs",I=f(0),W=f(0),S=f([]),r=M({withdrawAmount:0,remainingWithdrawLimit:"",remainingWithdrawCount:"",withdrawLimit:"",vipDailyLimit:"",balance:"",bankInfo:{},withdrawAccounts:[]}),l=M({withdrawAmount:0,withdrawFee:0,arrivalAmount:0,bankAccount:"",serviceCharge:0,withdrawPassword:""});Y(async()=>{var b;h.barLoading=!0;const s=await gt({userId:N.userInfo.id});s.state==="200"?r.withdrawAccounts=((b=s.resultData.withdrawAccounts)==null?void 0:b.map(o=>(o.withdrawAccount=JSON.parse(o.withdrawAccount),o)))||[]:await(await A.create({message:s.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present();const d=await vt();d.state==="200"?(u.value=d.resultData,u.value||_.value.showDialog()):await(await A.create({message:d.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present();const p=await bt();p.state==="200"?(console.log(p.resultData),v.value=p.resultData.configType,r.remainingWithdrawLimit=p.resultData.remainingWithdrawLimit,r.withdrawLimit=p.resultData.withdrawLimit,r.remainingWithdrawCount=p.resultData.remainingWithdrawCount,r.vipDailyLimit=p.resultData.vipDailyLimit,r.balance=p.resultData.balance,p.resultData.amountParam&&(S.value=p.resultData.amountParam.split(",").map(o=>Number(o)),I.value=S.value[0],W.value=S.value[S.value.length-1],r.withdrawAmount=I.value)):await(await A.create({message:p.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present(),h.barLoading=!1});const J=s=>{r.withdrawAmount=Number(s)},K=()=>{u.value?D.push({name:"BankCardList"}):_.value.showDialog()},q=()=>{u.value?D.push({name:"BankCardList"}):_.value.showDialog()},Q=async()=>{if(!u.value){_.value.showDialog();return}if(r.withdrawAccounts.length==0){L.value.showDialog();return}if(v.value==1&&Number(r.withdrawAmount)<=0){await(await A.create({message:P("withdraw.toast.text3"),duration:1500,position:"top",color:"danger",translucent:!0})).present();return}if(Number(r.withdrawAmount)<I.value||Number(r.withdrawAmount)>W.value){await(await A.create({message:"Min: ".concat(I.value," Max: ").concat(W.value),duration:1500,position:"top",color:"danger",translucent:!0})).present();return}h.fullLoading=!0;const s=await At({withdrawAmount:r.withdrawAmount});s.state==="200"?(l.arrivalAmount=s.arrivalAmount,l.bankAccount=s.bankAccount||r.bankInfo.withdrawAccount.accountNumber,l.serviceCharge=s.serviceCharge,l.withdrawAmount=s.withdrawAmount,l.withdrawFee=s.withdrawFee,l.withdrawPassword="",c.value=!0):await(await A.create({message:s.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present(),h.fullLoading=!1},G=async()=>{if(l.withdrawPassword.length==0){await(await A.create({message:P("withdraw.toast.text1"),duration:1500,position:"top",color:"warning",translucent:!0})).present();return}h.fullLoading=!0;const s=await $t({withdrawAmount:l.withdrawAmount,withdrawPasswd:l.withdrawPassword,withdrawTypeId:r.bankInfo.withdrawTypeId});s.state==="200"?(await(await A.create({message:P("withdraw.toast.text2"),duration:1500,position:"top",color:"success",translucent:!0})).present(),c.value=!1):await(await A.create({message:s.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present(),h.fullLoading=!1};return(s,d)=>{const p=et("ion-header");return Z((k(),B(e(ct),{class:"withdraw"},{default:i(()=>[n(e(j),null,{default:i(()=>{var b;return[a("div",Wt,[n(e(nt),{src:e(w)("/wallet/img-bg-balance.png")},null,8,["src"]),a("div",zt,[a("div",Ft,t(s.$t("withdraw.myBalance")),1),a("div",Vt,t(e(m))+" "+t((b=r.balance)==null?void 0:b.toLocaleString()),1)])]),a("div",Ot,[a("div",Mt,[a("span",null,t(s.$t("withdraw.bankAccount")),1),a("span",{class:"btn-change-account",onClick:g(q,["stop"])},t(s.$t("withdraw.changeBankAccount")),1)]),n(e(y),{color:"danger",expand:"block",onClick:g(K,["stop"])},{default:i(()=>[n(e(R),{slot:"start",icon:e(pt),style:{color:"#fdea5a"}},null,8,["icon"]),a("span",Tt,t(s.$t("withdraw.addNewAccount")),1)]),_:1})]),a("div",Rt,[a("div",Ut,[$(t(s.$t("withdraw.withdrawAmount"))+" ",1),v.value==1?(k(),T("span",Et,"("+t(e(m))+" "+t(I.value)+" - "+t(W.value)+" )",1)):z("",!0)]),v.value==1?(k(),B(e(U),{key:0,modelValue:r.withdrawAmount,"onUpdate:modelValue":d[0]||(d[0]=o=>r.withdrawAmount=o),label:e(m),type:"number",placeholder:s.$t("withdraw.withdrawAmount"),max:W.value,min:I.value,clearInput:!0},null,8,["modelValue","label","placeholder","max","min"])):z("",!0),v.value==2?(k(),B(e(it),{key:1,style:{margin:"8px 0"}},{default:i(()=>[(k(!0),T(at,null,tt(S.value,(o,X)=>(k(),B(e(wt),{key:X,size:"3.8",class:st(["amount-item",{select:Number(o)==Number(r.withdrawAmount)}]),onClick:g(va=>J(o),["stop"])},{default:i(()=>[a("div",null,t(e(m))+" "+t(o==null?void 0:o.toLocaleString()),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})):z("",!0)]),jt,n(e(E),null,{default:i(()=>[n(e(C),{class:"limit-item",lines:"none"},{default:i(()=>{var o;return[a("span",Ht,t(s.$t("withdraw.items1"))+":",1),a("span",Jt,t(e(m))+" "+t((o=r.remainingWithdrawLimit)==null?void 0:o.toLocaleString()),1)]}),_:1}),n(e(C),{class:"limit-item",lines:"none"},{default:i(()=>{var o;return[a("span",Kt,t(s.$t("withdraw.items2"))+":",1),a("span",qt,t(e(m))+" "+t((o=r.vipDailyLimit)==null?void 0:o.toLocaleString()),1)]}),_:1}),n(e(C),{class:"limit-item",lines:"none"},{default:i(()=>{var o;return[a("span",Qt,t(s.$t("withdraw.items3"))+":",1),a("span",Gt,t(e(m))+" "+t((o=r.withdrawLimit)==null?void 0:o.toLocaleString()),1)]}),_:1}),n(e(C),{class:"limit-item",lines:"none"},{default:i(()=>{var o;return[a("span",Xt,t(s.$t("withdraw.items4"))+":",1),a("span",Yt,t((o=r.remainingWithdrawCount)==null?void 0:o.toLocaleString()),1)]}),_:1})]),_:1}),Zt,a("div",xt,[a("div",ta,t(s.$t("withdraw.tips.title"))+": ",1),a("span",aa,[a("span",null,t(s.$t("withdraw.tips.tips1")),1),a("span",ea,t(s.$t("withdraw.tips.tips2")),1),a("span",null,t(s.$t("withdraw.tips.tips3")),1),a("span",sa,t(s.$t("withdraw.tips.tips4")),1),$(". ")])])]}),_:1}),n(e(rt),null,{default:i(()=>[n(e(y),{class:"btn-withdraw",expand:"block",shape:"round",onClick:g(Q,["stop"])},{default:i(()=>[$(t(s.$t("withdraw.button.withdraw")),1)]),_:1})]),_:1}),n(Dt,{ref_key:"setPasswordPopup",ref:_},null,512),n(Nt,{ref_key:"bankCardPopup",ref:L},null,512),n(e(V),{class:"withdraw-info","is-open":c.value,"initial-breakpoint":1,breakpoints:[0,1]},{default:i(()=>[n(p,null,{default:i(()=>[n(e(lt),null,{default:i(()=>[n(e(dt),null,{default:i(()=>[$(t(s.$t("withdraw.configPopup.title")),1)]),_:1}),n(e(ut),{style:{position:"absolute",top:"0",right:"16px"}},{default:i(()=>[n(e(y),{onClick:d[1]||(d[1]=g(b=>c.value=!1,["stop"]))},{default:i(()=>[n(e(R),{slot:"icon-only",icon:e(ht),color:"light"},null,8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1}),n(e(j),{class:"ion-padding"},{default:i(()=>{var b;return[a("div",oa,t(e(m))+" "+t((b=l.arrivalAmount)==null?void 0:b.toLocaleString()),1),a("div",na,t(s.$t("withdraw.configPopup.arrivalAmount")),1),ia,n(e(E),null,{default:i(()=>[n(e(C),{class:"detail-item",lines:"none"},{default:i(()=>{var o;return[a("span",ra,t(s.$t("withdraw.configPopup.title"))+":",1),a("span",la,t(e(m))+" "+t((o=l.withdrawAmount)==null?void 0:o.toLocaleString()),1)]}),_:1}),n(e(C),{class:"detail-item",lines:"none"},{default:i(()=>{var o;return[a("span",da,t(s.$t("withdraw.configPopup.serviceCharge"))+":",1),a("span",ua,t(e(m))+" "+t((o=l.serviceCharge)==null?void 0:o.toLocaleString()),1)]}),_:1}),a("div",ca,[a("span",null,t(s.$t("withdraw.configPopup.des1")),1),a("span",wa,t(l.withdrawFee)+"%",1),a("span",null,t(s.$t("withdraw.configPopup.des2")),1)]),a("div",pa,[a("div",ha,t(s.$t("withdraw.configPopup.chooseBankAccount")),1),n(e(C),{class:"detail-item",lines:"none"},{default:i(()=>[a("span",ma,t(s.$t("withdraw.configPopup.yourBankAccount"))+":",1),a("span",fa,t(l.bankAccount),1)]),_:1})])]),_:1}),a("div",ga,[a("div",_a,t(s.$t("withdraw.configPopup.withdrawPassword")),1),n(e(U),{modelValue:l.withdrawPassword,"onUpdate:modelValue":d[2]||(d[2]=o=>l.withdrawPassword=o),placeholder:s.$t("withdraw.configPopup.placeHolder")},null,8,["modelValue","placeholder"])]),n(e(y),{class:"btn-withdraw",expand:"block",shape:"round",onClick:g(G,["stop"])},{default:i(()=>[$(t(s.$t("withdraw.button.withdraw")),1)]),_:1})]}),_:1})]),_:1},8,["is-open"])]),_:1},512)),[[x,S.value.length>0]])}}};export{Oa as default};
