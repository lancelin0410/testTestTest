import{d as c,E as d}from"./@ionic-DW2CtbHZ.js";import{j as u,r as a}from"./index-BA_uPNhW.js";import{G as m,J as p,B as i,D as r,I as f,N as h,O as _,r as g,c as n}from"./@vue-CTzZmrEY.js";import{d as S}from"./pinia-DKQUv1OW.js";const M={class:"no-data"},D={__name:"NoData",props:{desc:{type:String,default:"No records!"}},setup(e){const{getUrl:s}=u();return(o,l)=>(m(),p("div",M,[i(r(c),{src:r(s)("/app/no-data-search.png")},null,8,["src"]),i(r(d),{class:"desc"},{default:f(()=>[h(_(e.desc),1)]),_:1})]))}};function v(e){return a({url:"/mail/list",method:"POST",data:e})}function I(e){return a({url:"/mail/read",method:"POST",data:e})}function P(e){return a({url:"/mail/receive",method:"POST",data:e})}function y(e){return a({url:"/mail/del",method:"POST",data:e})}const B=S("mail",()=>{const e=g([]),s=n(()=>e.value.length>0),o=n(()=>e.value.some(t=>!t.isRead));return{mailList:e,hasMail:s,hasUnread:o,getMailList:async()=>{const t=await v();t.state==="200"&&(e.value=t.resultData||[])}}},{persistedState:{persist:!1}});export{D as _,P as a,y as d,I as r,B as u};
