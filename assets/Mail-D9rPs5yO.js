import{ai as z,z as L,r as w,c as o,d as r,e as d,q as i,g as h,f as a,j as g,D as u,l as S,m as I,a5 as b,B as y,R as k,an as B,F as f,o as D,ag as N,O as P,N as O,p as R,ah as V,Z as F}from"./index-C8Uh67RU.js";import{u as C,r as A,a as U,d as j,_ as q}from"./useMailStore-FifsjKrR.js";const E={class:"wrapper"},J={class:"mail-title"},Z={class:"mail-sub-title"},G={style:{"font-size":"0.9rem"}},H={style:{"font-size":"0.7rem",color:"#FD5959"}},K={class:"mail-content"},Q={key:0,class:"mail-attaches"},W={__name:"MailPopup",setup(T,{expose:_}){const{t:p}=z(),s=L(),m=C(),v="/testTestTest/",n=w(!1),e=w({}),c=async t=>{if(s.barLoading=!0,t.isRead==0){const l=await A({mailId:t.id});l.state==="200"?t.isRead=1:await(await f.create({message:l.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present()}e.value=t,s.barLoading=!1,n.value=!0},M=async()=>{s.barLoading=!0;const t=await U({mailId:e.value.id});t.state==="200"?(await m.getMailList(),s.barLoading=!1,n.value=!1,e.value.attachesStatus=1,await(await f.create({message:p("mail.message.receiveSuccess"),duration:1500,position:"top",color:"success",translucent:!0})).present()):(s.barLoading=!1,await(await f.create({message:t.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present())},x=async()=>{s.barLoading=!0;const t=await j({mailId:e.value.id});t.state==="200"?(await m.getMailList(),s.barLoading=!1,n.value=!1,await(await f.create({message:p("mail.message.deleteSuccess"),duration:1500,position:"top",color:"success",translucent:!0})).present()):(await(await f.create({message:t.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present(),s.barLoading=!1)};return _({showMail:c}),(t,l)=>(o(),r(a(B),{class:"mail-popup",isOpen:n.value,onDidDismiss:l[1]||(l[1]=$=>n.value=!1)},{default:d(()=>[i("div",E,[h(a(g),{class:"btn-close",src:"".concat(a(v),"mail/icon-popup-close.png"),onClick:l[0]||(l[0]=$=>n.value=!1)},null,8,["src"]),i("h3",J,u(e.value.title||""),1),i("div",Z,[i("div",G,u(t.$t("mail.dearPlayer"))+":",1),i("div",H,u(e.value.createTime||""),1)]),i("div",K,u(e.value.content||""),1),e.value.attaches&&e.value.attachesStatus===0?(o(),S("div",Q,[h(a(g),{src:"".concat(a(v),"mail/icon-coin.png"),style:{width:"35px",height:"35px"}},null,8,["src"]),i("div",null,u(Math.round(JSON.parse(e.value.attaches).amount*100)/100),1)])):I("",!0),e.value.attaches&&e.value.attachesStatus===0?(o(),r(a(b),{key:1,class:"btn-confirm ion-text-capitalize",fill:"solid",shape:"round",onClick:y(M,["stop"])},{default:d(()=>[k(u(t.$t("mail.button.confirm")),1)]),_:1})):(o(),r(a(b),{key:2,class:"btn-del ion-text-capitalize",fill:"solid",shape:"round",onClick:y(x,["stop"])},{default:d(()=>[k(u(t.$t("mail.button.delete")),1)]),_:1}))])]),_:1},8,["isOpen"]))}},X={slot:"start",class:"mail-icon"},Y={class:"mail-title"},aa={style:{"font-size":"1rem"}},ta={style:{"font-size":"0.7rem"}},ea={class:"mail-detail"},ia={__name:"Mail",setup(T){const _=L(),p=C(),s="/testTestTest/",m=w(null);D(async()=>{_.barLoading=!0,await p.getMailList(),_.barLoading=!1});const v=n=>{m.value.showMail(n)};return(n,e)=>(o(),r(a(R),{class:"mail"},{default:d(()=>[a(p).hasMail?(o(),r(a(N),{key:0},{default:d(()=>[(o(!0),S(O,null,P(a(p).mailList,c=>(o(),r(a(V),{key:c.id,class:"mail-item",lines:"none",onClick:y(M=>v(c),["stop"])},{default:d(()=>[i("div",X,[c.isRead?(o(),r(a(g),{key:0,class:"mail-img",src:"".concat(a(s),"mail/icon-mail-open.png")},null,8,["src"])):(o(),r(a(g),{key:1,class:"mail-img",src:"".concat(a(s),"mail/icon-mail.png")},null,8,["src"])),c.attaches&&c.attachesStatus===0?(o(),r(a(g),{key:2,class:"mail-tag",src:"".concat(a(s),"mail/icon-mail-gift.png")},null,8,["src"])):I("",!0)]),h(a(F),{class:"mail-content"},{default:d(()=>[i("div",Y,[i("div",aa,u(c.title||""),1),i("div",ta,u(c.createTime||""),1)]),i("div",ea,u(c.content||""),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})):(o(),r(q,{key:1,class:"no-data",desc:n.$t("mail.message.nodata")},null,8,["desc"])),h(W,{ref_key:"mailPopup",ref:m},null,512)]),_:1}))}};export{ia as default};
