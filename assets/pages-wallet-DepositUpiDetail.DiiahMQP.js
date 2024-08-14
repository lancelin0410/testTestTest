import{_ as t,u as e,E as s,T as o,o as l,c as a,w as i,b as p,n as u,d as n,r as c,a5 as d,y as r,f as m,i as f,L as _,x as h,C as b,q as y,t as g,z as x,ae as k,ag as I,ah as $}from"./index-Df03ozpu.js";import{_ as w,M as C}from"./MoneyInput.f-T2CE6Y.js";import{_ as v}from"./img-upi.4u_4NsBl.js";import{o as A}from"./uni-app.es.C2ccc7XD.js";/* empty css                                                                           */import{N as j}from"./NormalInput.C_YFbzYo.js";import{T as N}from"./toast.DsGiX9kl.js";import{D as R}from"./DepositConfirmPopup.wYELyXQV.js";import{D}from"./DepositSuccessPopup.YWBPmjxw.js";import"./icon-search-clear.VJ0IQbDc.js";import"./data-formatter.DJPK8l9W.js";const F=""+new URL("icon-upi-pop-1NW5Fb2_.png",import.meta.url).href,U=t({__name:"NormalPopup",setup(t,{expose:_}){const h=e(),b=s({visible:!1}),y=()=>{b.visible=!1};return _({show:()=>{b.visible=!0},hide:y}),(t,e)=>{const s=m,_=f,g=o("van-popup");return l(),a(g,{show:b.visible,"onUpdate:show":e[0]||(e[0]=t=>b.visible=t),round:!1},{default:i((()=>[p(s,{class:"popup-view"},{default:i((()=>[p(s,{class:"popup-content-view",style:u({background:n(h).theme.popup.bgColor})},{default:i((()=>[c(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"]),p(_,{class:"popup-close-btn",src:d,mode:"aspectFit",onClick:r(y,["stop"])})])),_:3})])),_:3},8,["show"])}}},[["__scopeId","data-v-bd672258"]]),P=t({__name:"DepositUpiDetail",setup(t){const{t:c}=_(),d=e(),P=h(),V=b(null),S=b(null),L=b(null),T=s({depositAmount:"",utr:""});A((t=>{T.depositAmount=t.amount,P.getChargeInfo()}));const q=()=>{x({url:"/pages/wallet/DepositHistory"})},H=()=>{V.value.show()},z=async()=>{T.depositAmount?Number(T.depositAmount)<P.upiInfo.minAmount||Number(T.depositAmount)>P.upiInfo.maxAmount?N.show(`${c("deposit.toast.text2")} ${P.upiInfo.minAmount} - ${P.upiInfo.maxAmount}`):T.utr?S.value.show({amount:T.depositAmount,utr:T.utr}):N.show(c("deposit.toast.text3")):N.show(c("deposit.toast.text1"))},M=async()=>{N.showLoading();const{code:t,data:e}=await k({amount:T.depositAmount,rechargeType:"F",utr:T.utr});N.hideLoading(),200===t&&(S.value.hide(),P.getChargeInfo(),L.value.show())},E=t=>{I({data:t,success(){$({title:c("deposit.toast.text4"),icon:"success"})}})};return(t,e)=>{const s=f,c=m,_=o("mobile-sub-layout");return l(),a(_,{title:t.$t("deposit.title4"),lineHeight:4},{"header-right":i((()=>[p(s,{src:w,mode:"aspectFit",style:{width:"40rpx",height:"40rpx"},onClick:r(q,["stop"])})])),default:i((()=>[p(c,{class:"deposit-order-detail-container",style:u({background:n(d).theme.bgColor})},{default:i((()=>[p(c,{class:"plr30 ptb30 flex-acenter flex-sbetween"},{default:i((()=>[p(s,{class:"flex-shrink-0 mr24",src:v,mode:"aspectFit",style:{width:"320rpx",height:"130rpx"}}),p(c,{class:"ft12"},{default:i((()=>[y(g(t.$t("deposit.message.tipsImps1")),1)])),_:1})])),_:1}),p(c,{class:"pb30"},{default:i((()=>[p(c,{class:"list-item-content"},{default:i((()=>[p(c,{class:"ft15"},{default:i((()=>[y(g(t.$t("deposit.bankAccountInfo")),1)])),_:1})])),_:1}),p(c,{class:"flex-sbetween flex-acenter"},{default:i((()=>[p(c,{class:"flex-1"},{default:i((()=>[p(c,{class:"list-item-content"},{default:i((()=>[p(c,{class:"title",style:u({color:n(d).theme.text.subtitle})},{default:i((()=>[y(g(t.$t("deposit.name"))+":",1)])),_:1},8,["style"]),p(c,{class:"subtitle"},{default:i((()=>[y(g(n(P).upiInfo.accountName),1)])),_:1}),p(c,{class:"copy-btn",onClick:e[0]||(e[0]=r((t=>E(n(P).upiInfo.accountName)),["stop"]))},{default:i((()=>[y(g(t.$t("deposit.button.copy")),1)])),_:1})])),_:1}),p(c,{class:"list-item-content"},{default:i((()=>[p(c,{class:"title",style:u({color:n(d).theme.text.subtitle})},{default:i((()=>[y(g(t.$t("deposit.upi"))+":",1)])),_:1},8,["style"]),p(c,{class:"subtitle"},{default:i((()=>[y(g(n(P).upiInfo.upi),1)])),_:1}),p(c,{class:"copy-btn",onClick:e[1]||(e[1]=r((t=>E(n(P).upiInfo.upi)),["stop"]))},{default:i((()=>[y(g(t.$t("deposit.button.copy")),1)])),_:1})])),_:1}),p(c,{class:"list-item-content"},{default:i((()=>[p(c,{class:"title",style:u({color:n(d).theme.text.subtitle})},{default:i((()=>[y(g(t.$t("deposit.remark"))+":",1)])),_:1},8,["style"]),p(c,{class:"subtitle"},{default:i((()=>[y(g(n(P).chargeInfo.accountRemark),1)])),_:1}),p(c,{class:"copy-btn",onClick:e[2]||(e[2]=r((t=>E(n(P).chargeInfo.accountRemark)),["stop"]))},{default:i((()=>[y(g(t.$t("deposit.button.copy")),1)])),_:1})])),_:1})])),_:1}),p(s,{class:"flex-shrink-0 ml32 mr32",src:n(P).upiInfo.qrcodeUrl,mode:"aspectFit",style:{width:"152rpx",height:"152rpx"},onClick:r(H,["stop"])},null,8,["src"])])),_:1})])),_:1}),p(c,{style:u([{height:"8rpx"},{background:n(d).theme.darkSeplineColor}])},null,8,["style"]),p(c,{class:"plr30 ptb24 ft15"},{default:i((()=>[p(c,{class:"mb24"},{default:i((()=>[y(g(t.$t("deposit.transferAmount"))+": ",1)])),_:1}),p(C,{modelValue:T.depositAmount,"onUpdate:modelValue":e[3]||(e[3]=t=>T.depositAmount=t),placeholder:t.$t("deposit.transferAmount")},null,8,["modelValue","placeholder"])])),_:1}),p(c,{style:u([{height:"8rpx"},{background:n(d).theme.darkSeplineColor}])},null,8,["style"]),p(c,{class:"plr30 ptb24 ft15"},{default:i((()=>[p(c,{class:"mb24"},{default:i((()=>[y(g(t.$t("deposit.utr"))+":",1)])),_:1}),p(j,{modelValue:T.utr,"onUpdate:modelValue":e[4]||(e[4]=t=>T.utr=t),maxlength:32,reg:/[^A-Za-z0-9]/g,placeholder:t.$t("deposit.message.tipsImps5")},null,8,["modelValue","placeholder"])])),_:1}),p(c,{class:"plr30 ptb8 ft12"},{default:i((()=>[y(g(t.$t("deposit.message.tipsImps2")),1)])),_:1}),p(c,{class:"plr30 ptb24 ft15"},{default:i((()=>[y(g(t.$t("deposit.depositTips"))+": ",1)])),_:1}),p(c,{class:"ft10 plr30"},{default:i((()=>[p(c,null,{default:i((()=>[y(g(t.$t("deposit.message.tipsImps3")),1)])),_:1}),p(c,null,{default:i((()=>[y(g(t.$t("deposit.message.tipsImps4")),1)])),_:1})])),_:1}),p(c,{class:"noraml-bottom-action-container",style:u({background:n(d).theme.bgColor}),onClick:r(z,["stop"])},{default:i((()=>[p(c,{class:"normal-theme-btn-radius",style:u({background:n(d).theme.button.normal})},{default:i((()=>[p(c,null,{default:i((()=>[y(g(t.$t("deposit.button.transferCompleted")),1)])),_:1})])),_:1},8,["style"])])),_:1},8,["style"]),p(U,{ref_key:"upiCodePopupRef",ref:V},{default:i((()=>[p(c,{class:"flex-column flex-acenter ptb30",style:{width:"100%"}},{default:i((()=>[p(s,{class:"mt60",src:n(P).upiInfo.qrcodeUrl,mode:"aspectFit",style:{width:"250rpx",height:"250rpx"}},null,8,["src"]),p(c,{class:"mt60",style:{width:"100%"}},{default:i((()=>[p(c,{class:"list-item-content"},{default:i((()=>[p(c,{class:"title",style:u({color:n(d).theme.text.subtitle})},{default:i((()=>[y(g(t.$t("deposit.name"))+":",1)])),_:1},8,["style"]),p(c,{class:"subtitle"},{default:i((()=>[y(g(n(P).upiInfo.accountName),1)])),_:1}),p(c,{class:"copy-btn",onClick:e[5]||(e[5]=r((t=>E(n(P).upiInfo.accountName)),["stop"]))},{default:i((()=>[y(g(t.$t("deposit.button.copy")),1)])),_:1})])),_:1}),p(c,{class:"list-item-content"},{default:i((()=>[p(c,{class:"title",style:u({color:n(d).theme.text.subtitle})},{default:i((()=>[y(g(t.$t("deposit.upi"))+":",1)])),_:1},8,["style"]),p(c,{class:"subtitle"},{default:i((()=>[y(g(n(P).upiInfo.upi),1)])),_:1}),p(c,{class:"copy-btn",onClick:e[6]||(e[6]=r((t=>E(n(P).upiInfo.upi)),["stop"]))},{default:i((()=>[y(g(t.$t("deposit.button.copy")),1)])),_:1})])),_:1}),p(c,{class:"list-item-content"},{default:i((()=>[p(c,{class:"title",style:u({color:n(d).theme.text.subtitle})},{default:i((()=>[y(g(t.$t("deposit.remark"))+":",1)])),_:1},8,["style"]),p(c,{class:"subtitle"},{default:i((()=>[y(g(n(P).chargeInfo.accountRemark),1)])),_:1}),p(c,{class:"copy-btn",onClick:e[7]||(e[7]=r((t=>E(n(P).chargeInfo.accountRemark)),["stop"]))},{default:i((()=>[y(g(t.$t("deposit.button.copy")),1)])),_:1})])),_:1})])),_:1}),p(s,{class:"mt60",src:F,mode:"aspectFit",style:{width:"123rpx",height:"43rpx"}})])),_:1})])),_:1},512),p(R,{ref_key:"depositConfirmPopupRef",ref:S,onConfirm:M},null,512),p(D,{ref_key:"depositSuccessPopupRef",ref:L},null,512)])),_:1},8,["style"])])),_:1},8,["title"])}}},[["__scopeId","data-v-391ad5ba"]]);export{P as default};
