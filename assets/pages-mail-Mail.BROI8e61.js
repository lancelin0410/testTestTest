import{_ as A,u as t,E as e,T as a,o as s,c as l,w as B,b as i,n as o,d as g,q as d,t as c,e as n,y as r,a5 as m,f as w,i as f,C as h,G as u,k as D,l as y,F as Q}from"./index-Bt7fMP3h.js";import{r as E,a as b,b as k,u as p}from"./useMailStore.CGNUkT33.js";import{T as x}from"./toast.CdYgmjob.js";import{f as W}from"./data-formatter.DJPK8l9W.js";import{N as R}from"./NoDataSearch.JuTxyxFN.js";import"./no-data-withdraw.HhukE0_d.js";const M=""+new URL("icon-coin-gHI8ZFQT.png",import.meta.url).href,F=A({__name:"MailDetailPopup",emits:["refresh"],setup(A,{expose:h,emit:u}){const D=t(),y=u,Q=e({visible:!1,itemData:{}}),p=()=>{Q.visible=!1},R=async()=>{x.showLoading("Loading");const{code:A,data:t}=await b({mailId:Q.itemData.id});x.hideLoading(),200===A&&(x.show("Receive Success!"),Q.itemData.attachesStatus=1,y("refresh"),p())},F=async()=>{x.showLoading("Loading");const{code:A,data:t}=await k({mailId:Q.itemData.id});x.hideLoading(),200===A&&(x.show("Delete Success!"),y("refresh"),p())};return h({show:A=>{A&&(A.isRead||(E({mailId:A.id}),A.isRead=1),Q.itemData=A,Q.visible=!0)},hide:p}),(A,t)=>{const e=w,h=f,u=a("van-popup");return s(),l(u,{show:Q.visible,"onUpdate:show":t[0]||(t[0]=A=>Q.visible=A),round:!1},{default:B((()=>[i(e,{class:"popup-view"},{default:B((()=>[i(e,{class:"popup-content-view",style:o({background:g(D).theme.popup.bgColor})},{default:B((()=>[i(e,{class:"ft18",style:{"margin-top":"30rpx"}},{default:B((()=>[d(c(Q.itemData.title||""),1)])),_:1}),i(e,{class:"flex-acenter flex-sbetween w-100p",style:{"margin-top":"60rpx"}},{default:B((()=>[i(e,{class:"ft14"},{default:B((()=>[d(c(A.$t("mail.dearPlayer"))+": ",1)])),_:1}),i(e,{class:"ft12",style:o({color:g(D).theme.text.subtitle})},{default:B((()=>[d(c(Q.itemData.createTime||""),1)])),_:1},8,["style"])])),_:1}),i(e,{class:"popup-content mt32 plr30 ptb30",style:o([{"border-radius":"20rpx"},{background:g(D).theme.darkBgColor}])},{default:B((()=>[i(e,{class:"content-text ft12",style:{"word-break":"break-all"}},{default:B((()=>[d(c(Q.itemData.content||""),1)])),_:1}),Q.itemData.attaches&&0===Q.itemData.attachesStatus?(s(),l(e,{key:0,class:"item-sepline-h mt24",style:o({background:g(D).theme.darkSeplineColor})},null,8,["style"])):n("",!0),Q.itemData.attaches&&0===Q.itemData.attachesStatus?(s(),l(e,{key:1,class:"flex-acenter flex-scenter ptb30"},{default:B((()=>[i(h,{src:M,style:{width:"60rpx",height:"60rpx"}}),i(e,{class:"ft16 ml24",style:o({color:g(D).theme.text.highlight})},{default:B((()=>[d(c(g(W)(JSON.parse(Q.itemData.attaches).amount,2)),1)])),_:1},8,["style"])])),_:1})):n("",!0)])),_:1},8,["style"]),i(e,null,{default:B((()=>[Q.itemData.attaches&&0===Q.itemData.attachesStatus?(s(),l(e,{key:0,class:"flex-scenter flex-acenter popup-view-btn",style:o({background:g(D).theme.button.normal}),onClick:r(R,["stop"])},{default:B((()=>[i(e,null,{default:B((()=>[d(c(A.$t("mail.button.confirm")),1)])),_:1})])),_:1},8,["style"])):(s(),l(e,{key:1,class:"flex-scenter flex-acenter popup-view-btn",style:o({background:g(D).theme.button.cancel}),onClick:r(F,["stop"])},{default:B((()=>[i(e,null,{default:B((()=>[d(c(A.$t("mail.button.delete")),1)])),_:1})])),_:1},8,["style"]))])),_:1})])),_:1},8,["style"]),i(h,{class:"popup-close-btn",src:m,mode:"aspectFit",onClick:r(p,["stop"])})])),_:1})])),_:1},8,["show"])}}},[["__scopeId","data-v-36fdd359"]]),H=A({__name:"Mail",setup(A){const m=t(),E=p(),b=h(null);e({listData:[]}),u((()=>{k()}));const k=async()=>{x.showLoading("Loading"),await E.getMailList(),x.hideLoading()};return(A,t)=>{const e=f,h=w,u=a("mobile-sub-layout");return s(),l(u,{title:A.$t("mail.title")},{default:B((()=>[i(h,{class:"mail-container"},{default:B((()=>[i(h,{class:"plr30"},{default:B((()=>[(s(!0),D(Q,null,y(g(E).mailList,((A,t)=>(s(),l(h,{key:t,class:"mail-list-item flex-acenter",onClick:r((t=>(A=>{b.value.show(A)})(A)),["stop"]),style:o({"background-color":g(m).theme.lightBgColor})},{default:B((()=>[i(h,{class:"mail-img",style:o({background:g(m).theme.themeBgColor})},{default:B((()=>[A.isRead?(s(),l(e,{key:0,src:"data:image/png;base64,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",mode:"aspectFit",style:{width:"70rpx",height:"70rpx"}})):(s(),l(e,{key:1,style:{width:"70rpx",height:"70rpx"},src:"data:image/png;base64,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",mode:"aspectFit"})),A.attaches&&0===A.attachesStatus?(s(),l(e,{key:2,class:"mail-img-tag",src:"data:image/png;base64,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",mode:"aspectFit"})):n("",!0)])),_:2},1032,["style"]),i(h,{class:"ml24"},{default:B((()=>[i(h,{class:"flex-acenter flex-sbetween"},{default:B((()=>[i(h,{class:"mail-title ft14",style:o({color:g(m).theme.text.normal})},{default:B((()=>[d(c(A.title||""),1)])),_:2},1032,["style"]),i(h,{class:"ft11 flex-shrink-0",style:o({color:g(m).theme.text.normal})},{default:B((()=>[d(c(A.createTime||""),1)])),_:2},1032,["style"])])),_:2},1024),i(h,{class:"ft12 mt20 mail-content",style:o({color:g(m).theme.text.subtitle})},{default:B((()=>[d(c(A.content||""),1)])),_:2},1032,["style"])])),_:2},1024)])),_:2},1032,["onClick","style"])))),128)),g(E).mailList.length?n("",!0):(s(),l(R,{key:0,title:A.$t("mail.message.nodata")},null,8,["title"]))])),_:1}),i(g(F),{ref_key:"mailDetailPopupRef",ref:b,onRefresh:k},null,512)])),_:1})])),_:1},8,["title"])}}},[["__scopeId","data-v-3ea9d023"]]);export{H as default};
