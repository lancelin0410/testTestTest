import{o as c,f as u,i as o,j as r,I as d,z as m,K as f,t as p,R as h,aj as t,d as _,r as g,e as i}from"./index-Bz0nnWdi.js";const M={class:"no-data"},v={__name:"NoData",props:{desc:{type:String,default:"No records!"}},setup(e){const s="/testTestTest/";return(n,l)=>(c(),u("div",M,[o(r(d),{src:"".concat(r(s),"app/no-data-search.png")},null,8,["src"]),o(r(h),{class:"desc"},{default:m(()=>[f(p(e.desc),1)]),_:1})]))}};function S(e){return t({url:"/mail/list",method:"POST",data:e})}function x(e){return t({url:"/mail/read",method:"POST",data:e})}function I(e){return t({url:"/mail/receive",method:"POST",data:e})}function N(e){return t({url:"/mail/del",method:"POST",data:e})}const O=_("mail",()=>{const e=g([]),s=i(()=>e.value.length>0),n=i(()=>e.value.some(a=>!a.isRead));return{mailList:e,hasMail:s,hasUnread:n,getMailList:async()=>{const a=await S();a.state==="200"&&(e.value=a.resultData||[])}}});export{v as _,I as a,N as d,x as r,O as u};
