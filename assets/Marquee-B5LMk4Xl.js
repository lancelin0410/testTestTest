import{t as g,d as m,j as u}from"./@ionic-Dolm7zi0.js";import{i as f,j as _}from"./index-Cesi6PjI.js";import{r as d,A as h,G as x,J as y,B as n,I as M,D as a,L as l}from"./@vue-CTzZmrEY.js";const w={class:"marquee"},B={slot:"primary",class:"roll-box"},L=["innerHTML"],C={__name:"Marquee",setup(v){const o=d(""),{getPublicUrl:c}=_();h(()=>{i()});const i=async()=>{const s=await f();if(s.state==="200"){const e=s.resultData.msgList||[];o.value=e.reduce((r,p)=>{let t=p.msgContent.replace(/<\/c>/g,"</span>");return t=t.replace(/<color=/g,'<span style="color:'),t=t.replace(/#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g,'#$1"'),r+='<span style="margin-right: 20px;">'.concat(t,"</span>"),r},'<span style="color: #ffffff">')}else await(await g.create({message:s.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present()};return(s,e)=>(x(),y("div",w,[n(a(u),null,{default:M(()=>[n(a(m),{slot:"start",class:"notice-icon",src:a(c)("/home/icon-notice.png"),style:{width:"24px",height:"24px",margin:"0 4px 0 0"}},null,8,["src"]),l("div",B,[l("span",{class:"roll-text",innerHTML:o.value},null,8,L)])]),_:1})]))}};export{C as _};
