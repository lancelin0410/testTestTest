import{_ as t,u as e,E as a,T as s,o as l,c as A,w as o,b as i,n as r,d as n,q as m,t as c,e as p,y as g,a5 as d,f as u,i as w,C as h,G as b,k as f,l as y,F as B}from"./index-DukxopBg.js";import{r as Q,a as v,b as k,u as W}from"./useMailStore.BN9T3EvF.js";import{T as X}from"./toast.Cnh95VuC.js";import{f as T}from"./data-formatter.DJPK8l9W.js";import{N as Y}from"./NoDataSearch.c_uT7WXZ.js";import"./no-data-withdraw.BWl6q6ue.js";const L=t({__name:"MailDetailPopup",emits:["refresh"],setup(t,{expose:h,emit:b}){const f=e(),y=b,B=a({visible:!1,itemData:{}}),W=()=>{B.visible=!1},Y=async()=>{X.showLoading("Loading");const{code:t,data:e}=await v({mailId:B.itemData.id});X.hideLoading(),200===t&&(X.show("Receive Success!"),B.itemData.attachesStatus=1,y("refresh"),W())},L=async()=>{X.showLoading("Loading");const{code:t,data:e}=await k({mailId:B.itemData.id});X.hideLoading(),200===t&&(X.show("Delete Success!"),y("refresh"),W())};return h({show:t=>{t&&(t.isRead||(Q({mailId:t.id}),t.isRead=1),B.itemData=t,B.visible=!0)},hide:W}),(t,e)=>{const a=u,h=w,b=s("van-popup");return l(),A(b,{show:B.visible,"onUpdate:show":e[0]||(e[0]=t=>B.visible=t),round:!1},{default:o((()=>[i(a,{class:"popup-view"},{default:o((()=>[i(a,{class:"popup-content-view",style:r({background:n(f).theme.popup.bgColor})},{default:o((()=>[i(a,{class:"ft18",style:{"margin-top":"30rpx"}},{default:o((()=>[m(c(B.itemData.title||""),1)])),_:1}),i(a,{class:"flex-acenter flex-sbetween w-100p",style:{"margin-top":"60rpx"}},{default:o((()=>[i(a,{class:"ft14"},{default:o((()=>[m(c(t.$t("mail.dearPlayer"))+": ",1)])),_:1}),i(a,{class:"ft12",style:r({color:n(f).theme.text.subtitle})},{default:o((()=>[m(c(B.itemData.createTime||""),1)])),_:1},8,["style"])])),_:1}),i(a,{class:"popup-content mt32 plr30 ptb30",style:r([{"border-radius":"20rpx"},{background:n(f).theme.darkBgColor}])},{default:o((()=>[i(a,{class:"content-text ft12",style:{"word-break":"break-all"}},{default:o((()=>[m(c(B.itemData.content||""),1)])),_:1}),B.itemData.attaches&&0===B.itemData.attachesStatus?(l(),A(a,{key:0,class:"item-sepline-h mt24",style:r({background:n(f).theme.darkSeplineColor})},null,8,["style"])):p("",!0),B.itemData.attaches&&0===B.itemData.attachesStatus?(l(),A(a,{key:1,class:"flex-acenter flex-scenter ptb30"},{default:o((()=>[i(h,{src:"data:image/png;base64,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",style:{width:"60rpx",height:"60rpx"}}),i(a,{class:"ft16 ml24",style:r({color:n(f).theme.text.highlight})},{default:o((()=>[m(c(n(T)(JSON.parse(B.itemData.attaches).amount,2)),1)])),_:1},8,["style"])])),_:1})):p("",!0)])),_:1},8,["style"]),i(a,null,{default:o((()=>[B.itemData.attaches&&0===B.itemData.attachesStatus?(l(),A(a,{key:0,class:"flex-scenter flex-acenter popup-view-btn",style:r({background:n(f).theme.button.normal}),onClick:g(Y,["stop"])},{default:o((()=>[i(a,null,{default:o((()=>[m(c(t.$t("mail.button.confirm")),1)])),_:1})])),_:1},8,["style"])):(l(),A(a,{key:1,class:"flex-scenter flex-acenter popup-view-btn",style:r({background:n(f).theme.button.cancel}),onClick:g(L,["stop"])},{default:o((()=>[i(a,null,{default:o((()=>[m(c(t.$t("mail.button.delete")),1)])),_:1})])),_:1},8,["style"]))])),_:1})])),_:1},8,["style"]),i(h,{class:"popup-close-btn",src:d,mode:"aspectFit",onClick:g(W,["stop"])})])),_:1})])),_:1},8,["show"])}}},[["__scopeId","data-v-36fdd359"]]),x=t({__name:"Mail",setup(t){const d=e(),Q=W(),v=h(null);a({listData:[]}),b((()=>{k()}));const k=async()=>{X.showLoading("Loading"),await Q.getMailList(),X.hideLoading()};return(t,e)=>{const a=w,h=u,b=s("mobile-sub-layout");return l(),A(b,{title:t.$t("mail.title")},{default:o((()=>[i(h,{class:"mail-container"},{default:o((()=>[i(h,{class:"plr30"},{default:o((()=>[(l(!0),f(B,null,y(n(Q).mailList,((t,e)=>(l(),A(h,{key:e,class:"mail-list-item flex-acenter",onClick:g((e=>(t=>{v.value.show(t)})(t)),["stop"]),style:r({"background-color":n(d).theme.lightBgColor})},{default:o((()=>[i(h,{class:"mail-img",style:r({background:n(d).theme.themeBgColor})},{default:o((()=>[t.isRead?(l(),A(a,{key:0,src:"data:image/png;base64,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",mode:"aspectFit",style:{width:"70rpx",height:"70rpx"}})):(l(),A(a,{key:1,style:{width:"70rpx",height:"70rpx"},src:"data:image/png;base64,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",mode:"aspectFit"})),t.attaches&&0===t.attachesStatus?(l(),A(a,{key:2,class:"mail-img-tag",src:"data:image/png;base64,UklGRqgFAABXRUJQVlA4WAoAAAAQAAAAeQAASQAAQUxQSEEBAAABgFtr29rma0OmFvow7sE8ACcTMAwht3IZTjYwThBSFzSH6U/3lZLO0dNHxASI34mRLTtzWzUapObW6hW/wzP2nQa11ezLyLnRIM80exbeqmrQWx6Ft34VsNeThaoiWh60FxTScbfyq5S/bpoPFNRF4lKpektKNfSqVL2vSpUoKVXzpWIdKNaCYrX/cRUUa0GxwjWuPcUKf3KtK1eJa1K5zrnChmtSuWywe664cg+DbYDZYBmuP4er0eBy/rgyym2DbYCNg8W57oXLBhvn+g9xXQjXOFdJuDa4XmNc+4L1GuKaF6yiYP11cK0J1pFgXYawSkmheu0RqtcBoSr1CNVlUqiOQuLSYJg1ce1QFDvEfYqhPi9eDhCYrZB4mwq8+lZMvG7KBJq5GBU/m1KB9ZCeC4nfAynHBIqpO5n01mhS/AYAVlA4IEAEAACQFwCdASp6AEoAPm0ulUYkLKIksZI5WZANiWYC4ZkEs6gyf4n8XujF5e8E9DIiWpV9m/3AeqH1APMB+0nq4/6L1begB/S/8B1vfoAeWh+pPwhfuT+w/tgXQuiQsH3z+PwBUS6EV63DZ+LVjlq3Hn67QFhMuARkVrKtvlUQMkP41K1Ao6LbNmQ3MxmteswBx01EeB8Olh4QQpmlA+RZ1stICTl9TJVi5k2capiWs4JRDb+jA1nfisylr25tg/VJibuYtGetoAD+9vT//ykP/+UHv//JQMX/6c2ogEXQwqp+VYf/8Z30LyD5HQ7DCZVoN+qrYc3uGjxmP3vHJLcsQcJgBGkI/klvi00XsrYoO6HJkKj6aBmGfIdtXeB4qq9se3cPuiOhZn3PU4FDl3EEIKCJkMYhAd+d1hV1glROhruR9cgdsx6KC54kwRtzAYTMBDpJMbMnkuolT1/5mXdF3WvvGQuRvoTrARFPlvYUW7qFBjURiWwZ+tqw8YlBN0f/YPlA3bNmA25478lCuzpFi2GwuIDvU9/UOIH0fNzN+CgoomanvHXS6njn+lyN+JAkDl0qpbd19C2Arao95ndP/QeX9OQL/9KSxoKRrj2fAbiUc9U7+2qtQLebdV/xqsDxeX0U8h4/UXnb+aGpCtXVKxJIZ/Puf/GmdyUlVv61d8lI0wXTtEozM9vKTXv7MRgUM505nPbrQyLJrY6oumHdhVH6KT+YGr1vhT1MwVZUwVyJU4A3gaPfTyZjRCkTtM3vSVnxMA1ayOtLgrIZPRn5oKlJvBV3+wvYPLnMvSpavV96Hz5Mvwoundj3dB/PgFr3B5NXY8DWZ7jQlPyLocLFg3bA0S5rW5nXT0yeQVpwiWpnXJ1CgT9XOG1BbW+57CcqqlAtX7SoZ4T6CyjUPhMy4OmVxLk9T9/O+0PTCfBHjvrD51405I4PE+/2KoJbyvuGzLLWwP9lzBWlvxAEoGp+bMNb1E5bonRGrCqsCu1oYaEut+j5b9yQeb3kJJBd2DUvrO8Ms5hfxc3GyFl9puf4KQ5J/+cTUvm81WWLsbRw+8oWM1pQfUwZjQucmdmsvngm9u5ycsOYHhGx8OJaAlRF9aB+59P5vwIs0lYNifDWst4JFWP0RE7KtFCUoGVGe4QsH+QZ/0sIVmTLPAKATLYHJAohd6zmv2YwHgatsIW2y/Amkft/+6PcSsTIwnYaP1t/70Ov54/pxqI5Lp5t3l+v13EBHUE+8Ly0ef3gvcQ/4epe3vwIc7v//HreTupPBvA942bc6rk8U84rfljkgiUxLNyMfe+QJ7X3ZfFHxeCyn8E2rS8wVECGPqHUGijhnGeTeHWVSzN+/M7d8peSeOsi62gw8iC7gatju6UeKieX/hvP//ktErwY/joi+E4O19Dq/y+eqVizNhuuoXk/7ezls7R/SKjE+r8jMu4lP/yNtcdAAA==",mode:"aspectFit"})):p("",!0)])),_:2},1032,["style"]),i(h,{class:"ml24"},{default:o((()=>[i(h,{class:"flex-acenter flex-sbetween"},{default:o((()=>[i(h,{class:"mail-title ft14",style:r({color:n(d).theme.text.normal})},{default:o((()=>[m(c(t.title||""),1)])),_:2},1032,["style"]),i(h,{class:"ft11 flex-shrink-0",style:r({color:n(d).theme.text.normal})},{default:o((()=>[m(c(t.createTime||""),1)])),_:2},1032,["style"])])),_:2},1024),i(h,{class:"ft12 mt20 mail-content",style:r({color:n(d).theme.text.subtitle})},{default:o((()=>[m(c(t.content||""),1)])),_:2},1032,["style"])])),_:2},1024)])),_:2},1032,["onClick","style"])))),128)),n(Q).mailList.length?p("",!0):(l(),A(Y,{key:0,title:t.$t("mail.message.nodata")},null,8,["title"]))])),_:1}),i(n(L),{ref_key:"mailDetailPopupRef",ref:v,onRefresh:k},null,512)])),_:1})])),_:1},8,["title"])}}},[["__scopeId","data-v-3ea9d023"]]);export{x as default};
