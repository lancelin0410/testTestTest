import{_ as e,u as t,a as s,o as a,k as i,D as l,n as r,d as o,y as d,b as h,an as n,t as p,e as c,r as g,ao as m,ap as u,j as v,i as y}from"./index--xcqUmEY.js";const b=e({__name:"TransparentHeader",props:{title:{type:String,default:""},lineHeight:{type:Number,default:0}},setup(e){const b=t(),x=s(),H=()=>{m().length>1?u():v({url:"/pages/home/Home"})};return(t,s)=>{const m=y;return a(),i("div",{class:"mobile-sub-header-container",style:r({height:o(x).headerStyle.height+"px"})},[l("div",{class:"mobile-state-bar",style:r({height:o(x).headerStyle.statusBarHeight+"px"})},null,4),l("div",{class:"mobile-header",style:r({height:o(x).headerStyle.navigateBarHeight+"px"})},[l("div",{class:"left",onClick:d(H,["stop"])},[h(m,{src:n,mode:"aspectFit",style:{width:"80rpx",height:"36rpx"}})]),l("div",{class:"middle title"},[e.title?(a(),i("div",{key:0},p(e.title),1)):c("",!0),g(t.$slots,"title",{},void 0,!0)]),l("div",{class:"right"},[g(t.$slots,"right",{},void 0,!0)])],4),l("div",{class:"header-bottom-line",style:r({"border-bottom":`${e.lineHeight}px solid ${o(b).theme.darkSeplineColor}`})},null,4)],4)}}},[["__scopeId","data-v-2cc48159"]]);export{b as T};
