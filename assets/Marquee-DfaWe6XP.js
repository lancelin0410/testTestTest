import{r as g,o as u,Y as m,F as f,c as _,l as d,g as r,e as h,f as a,j as x,q as l,I as y}from"./index-D2gUhAWD.js";const M={class:"marquee"},w={slot:"primary",class:"roll-box"},v=["innerHTML"],L={__name:"Marquee",setup(B){const c="/",o=g("");u(()=>{i()});const i=async()=>{const t=await m();if(t.state==="200"){const e=t.resultData.msgList||[];o.value=e.reduce((n,p)=>{let s=p.msgContent.replace(/<\/c>/g,"</span>");return s=s.replace(/<color=/g,'<span style="color:'),s=s.replace(/#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g,'#$1"'),n+='<span style="margin-right: 20px;">'.concat(s,"</span>"),n},'<span style="color: #ffffff">')}else await(await f.create({message:t.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present()};return(t,e)=>(_(),d("div",M,[r(a(y),null,{default:h(()=>[r(a(x),{slot:"start",class:"notice-icon",src:"".concat(a(c),"home/icon-notice.png"),style:{width:"24px",height:"24px",margin:"0 4px 0 0"}},null,8,["src"]),l("div",w,[l("span",{class:"roll-text",innerHTML:o.value},null,8,v)])]),_:1})]))}};export{L as _};
