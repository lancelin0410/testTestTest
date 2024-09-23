import{r as w,H as i,I as r,J as u,M as n,C as h,E as t,P as c,K as I,R as S,V as y,O as k,B as D,L as N,F as O}from"./@vue-KvDcA5L4.js";import{d as _,K as b,O as V,t as g,L as E,h as R,M as T,E as F}from"./@ionic-CQtneEHh.js";import{c as $,u as C,l as J}from"./index-DbfdoCpI.js";import{u as x,r as K,a as U,d as H}from"./useMailStore-BACf7OvP.js";import{_ as j}from"./NoData-ikPDkLHo.js";import{u as q}from"./vue-i18n-CPl1SEIs.js";import"./@stencil-DBaMOtEh.js";import"./@capacitor-BXp5o1ZG.js";import"./vue-router-D1p6pxpQ.js";import"./ionicons-T4lv_k6t.js";import"./localforage-qzmIiYbH.js";import"./@adjustcom-Dev-Q0DI.js";import"./pinia-7EZHWT0u.js";import"./pinia-plugin-persistedstate-2-DcGv4gw_.js";import"./@awesome-cordova-plugins-CT7d7gQP.js";import"./rxjs-C3tg6S9t.js";import"./tslib-BHBn2Msb.js";import"./@intlify-BAcCFw_v.js";const G={class:"wrapper"},Q={class:"mail-title"},W={class:"mail-sub-title"},X={style:{"font-size":"0.9rem"}},Y={style:{"font-size":"0.7rem",color:"#FD5959"}},Z={class:"mail-content"},tt={key:0,class:"mail-attaches"},at={__name:"MailPopup",setup(A,{expose:d}){const{t:m}=q(),o=$(),p=x(),{getImgUrl:v}=C(),{popupEnter:f,popupLeave:M}=J(),a=w(!1),s=w({}),B=async e=>{if(o.barLoading=!0,e.isRead==0){const l=await K({mailId:e.id});l.state==="200"?e.isRead=1:await(await g.create({message:l.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present()}s.value=e,o.barLoading=!1,a.value=!0},z=async()=>{o.barLoading=!0;const e=await U({mailId:s.value.id});e.state==="200"?(await p.getMailList(),o.barLoading=!1,a.value=!1,s.value.attachesStatus=1,await(await g.create({message:m("mail.message.receiveSuccess"),duration:1500,position:"top",color:"success",translucent:!0})).present()):(o.barLoading=!1,await(await g.create({message:e.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present())},P=async()=>{o.barLoading=!0;const e=await H({mailId:s.value.id});e.state==="200"?(await p.getMailList(),o.barLoading=!1,a.value=!1,await(await g.create({message:m("mail.message.deleteSuccess"),duration:1500,position:"top",color:"success",translucent:!0})).present()):(await(await g.create({message:e.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present(),o.barLoading=!1)};return d({showMail:B}),(e,l)=>(i(),r(t(V),{class:"mail-popup",isOpen:a.value,enterAnimation:t(f),leaveAnimation:t(M),onDidDismiss:l[1]||(l[1]=L=>a.value=!1)},{default:u(()=>[n("div",G,[h(t(_),{class:"btn-close",src:t(v)("/mail/icon-popup-close.png"),onClick:l[0]||(l[0]=L=>a.value=!1)},null,8,["src"]),n("h3",Q,c(s.value.title||""),1),n("div",W,[n("div",X,c(e.$t("mail.dearPlayer"))+":",1),n("div",Y,c(s.value.createTime||""),1)]),n("div",Z,c(s.value.content||""),1),s.value.attaches&&s.value.attachesStatus===0?(i(),I("div",tt,[h(t(_),{src:t(v)("/mail/icon-coin.png"),style:{width:"35px",height:"35px"}},null,8,["src"]),n("div",null,c(Math.round(JSON.parse(s.value.attaches).amount*100)/100),1)])):S("",!0),s.value.attaches&&s.value.attachesStatus===0?(i(),r(t(b),{key:1,class:"btn-confirm ion-text-capitalize",fill:"solid",shape:"round",onClick:y(z,["stop"])},{default:u(()=>[k(c(e.$t("mail.button.confirm")),1)]),_:1})):(i(),r(t(b),{key:2,class:"btn-del ion-text-capitalize",fill:"solid",shape:"round",onClick:y(P,["stop"])},{default:u(()=>[k(c(e.$t("mail.button.delete")),1)]),_:1}))])]),_:1},8,["isOpen","enterAnimation","leaveAnimation"]))}},et={slot:"start",class:"mail-icon"},st={class:"mail-title"},ot={style:{"font-size":"1rem"}},it={style:{"font-size":"0.7rem"}},nt={class:"mail-detail"},It={__name:"Mail",setup(A){const d=$(),m=x(),{getImgUrl:o}=C(),p=w(null);D(async()=>{d.barLoading=!0,await m.getMailList(),d.barLoading=!1});const v=f=>{p.value.showMail(f)};return(f,M)=>(i(),r(t(R),{class:"mail"},{default:u(()=>[t(d).barLoading||!t(m).hasMail?(i(),r(j,{key:0,class:"no-data",desc:f.$t("mail.message.nodata")},null,8,["desc"])):(i(),r(t(E),{key:1},{default:u(()=>[(i(!0),I(O,null,N(t(m).mailList,a=>(i(),r(t(T),{key:a.id,class:"mail-item",lines:"none",onClick:y(s=>v(a),["stop"])},{default:u(()=>[n("div",et,[a.isRead?(i(),r(t(_),{key:0,class:"mail-img",src:t(o)("/mail/icon-mail-open.png")},null,8,["src"])):(i(),r(t(_),{key:1,class:"mail-img",src:t(o)("/mail/icon-mail.png")},null,8,["src"])),a.attaches&&a.attachesStatus===0?(i(),r(t(_),{key:2,class:"mail-tag",src:t(o)("/mail/icon-mail-gift.png")},null,8,["src"])):S("",!0)]),h(t(F),{class:"mail-content"},{default:u(()=>[n("div",st,[n("div",ot,c(a.title||""),1),n("div",it,c(a.createTime||""),1)]),n("div",nt,c(a.content||""),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})),h(at,{ref_key:"mailPopup",ref:p},null,512)]),_:1}))}};export{It as default};
