import{_ as e,g as t,u as l,L as a,a as o,C as c,E as s,T as n,o as r,c as d,w as u,b as i,n as f,d as m,q as b,t as p,k,F as y,l as g,ap as h,f as C,$ as B,aw as x}from"./index--xcqUmEY.js";import{u as _}from"./account.CfChO8lg.js";const I=e({__name:"FeedBack",setup(e){const I=t(),$=l().theme.account.feedBack,{t:H}=a();o(),console.log(I,"===========");let V=c([H("account.feedBack.screen.game"),H("account.feedBack.screen.deposit"),H("account.feedBack.screen.withdraw"),H("account.feedBack.screen.vip"),H("account.feedBack.screen.invite"),H("account.feedBack.screen.account"),H("account.feedBack.screen.other")]),v=c(0),w=null==I.userInfo.mobile||""==I.userInfo.mobile,N=s({userId:I.userInfo.id,phone:null==I.userInfo.mobile?"":I.userInfo.mobile,email:"",content:""});const P=async()=>{const{code:e,data:t}=await _({type:v.value,userId:N.userId,email:N.email,mobile:N.phone,content:N.content,appPackageName:"com.RoyalCasino.India.game"});200==e&&h()};return(e,t)=>{const l=C,a=B,o=x,c=n("mobile-sub-layout");return r(),d(c,{title:e.$t("account.header.feedbackTitle"),lineHeight:4},{default:u((()=>[i(l,{class:"feed-back-body"},{default:u((()=>[i(l,{class:"feed-back-content",style:f({backgroundColor:m($).lightBgColor})},{default:u((()=>[i(l,{class:"feed-back-content-item",style:f({color:m($).text.lable})},{default:u((()=>[i(l,{class:"feed-back-content-item-left"},{default:u((()=>[b(p(e.$t("account.feedBack.label.yourId"))+":",1)])),_:1}),i(l,{class:"feed-back-content-item-right"},{default:u((()=>[b(p(m(N).userId),1)])),_:1})])),_:1},8,["style"]),i(l,{class:"feed-back-content-item",style:f({color:m($).text.lable})},{default:u((()=>[i(l,{class:"feed-back-content-item-left"},{default:u((()=>[b(p(e.$t("account.feedBack.label.phoneNumber"))+":",1)])),_:1}),m(w)?(r(),k(y,{key:1},[i(l,{style:{width:"70rpx","margin-left":"24rpx"}},{default:u((()=>[b(p(e.$t("account.feedBack.label.areaCode")),1)])),_:1}),i(a,{class:"feed-back-content-item-input",style:f({color:m($).text.inputColor,borderColor:""==m(N).phone?m($).placeHolderBorderColor:m($).borderColor,backgroundColor:""==m(N).phone?m($).placeHolderBgColor:m($).feedBackItemBg}),modelValue:m(N).phone,"onUpdate:modelValue":t[0]||(t[0]=e=>m(N).phone=e),"placeholder-style":JSON.stringify({color:m($).text.placeHolderColor}),placeholder:e.$t("account.feedBack.label.phonePlaceholder")},null,8,["style","modelValue","placeholder-style","placeholder"])],64)):(r(),d(l,{key:0,class:"feed-back-content-item-right"},{default:u((()=>[b(p(e.$t("account.feedBack.label.areaCode"))+" "+p(m(N).phone.substring(2)),1)])),_:1}))])),_:1},8,["style"]),i(l,{class:"feed-back-content-item",style:{"margin-top":"10rpx"}},{default:u((()=>[i(l,{class:"feed-back-content-item-left",style:f({color:m($).text.lable})},{default:u((()=>[b(p(e.$t("account.feedBack.label.email"))+":",1)])),_:1},8,["style"]),i(a,{class:"feed-back-content-item-input",style:f({marginLeft:"24rpx",color:m($).text.inputColor,borderColor:""==m(N).email?m($).placeHolderBorderColor:m($).borderColor,backgroundColor:""==m(N).email?m($).placeHolderBgColor:m($).feedBackItemBg}),modelValue:m(N).email,"onUpdate:modelValue":t[1]||(t[1]=e=>m(N).email=e),"placeholder-style":JSON.stringify({color:m($).text.placeHolderColor}),placeholder:e.$t("account.feedBack.label.emailPlaceholder")},null,8,["style","modelValue","placeholder-style","placeholder"])])),_:1}),i(l,{class:"feed-back-content-item-scenes",style:f({color:m($).text.lable})},{default:u((()=>[i(l,{class:"feed-back-content-item-scenes-list"},{default:u((()=>[(r(!0),k(y,null,g(m(V),((e,t)=>(r(),d(l,{class:"feed-back-content-item-scenes-list-item",key:t,style:f({color:t==m(v)?m($).text.scenesItemActiveColor:m($).text.scenesItemColor,backgroundColor:t==m(v)?m($).scenesItemActiveBgColor:m($).scenesItemBgColor}),onClick:e=>(e=>{v.value=e})(t)},{default:u((()=>[b(p(e),1)])),_:2},1032,["style","onClick"])))),128))])),_:1})])),_:1},8,["style"]),i(l,{class:"feed-back-content-item-textarea-label",style:f({color:m($).text.lable})},{default:u((()=>[b(p(e.$t("account.feedBack.label.suggestion"))+":",1)])),_:1},8,["style"]),i(l,{class:"feed-back-content-item-textarea"},{default:u((()=>[i(o,{type:"textarea",rows:"7","placeholder-style":JSON.stringify({color:m($).text.placeHolderColor}),style:f({color:m($).text.inputColor,backgroundColor:m($).placeHolderBgColor}),modelValue:m(N).content,"onUpdate:modelValue":t[2]||(t[2]=e=>m(N).content=e),class:"feed-back-content-item-textarea-style",placeholder:e.$t("account.feedBack.label.suggestionPlaceholder")},null,8,["placeholder-style","style","modelValue","placeholder"])])),_:1}),i(l,{class:"submit-content"},{default:u((()=>[i(l,{class:"submit-btn",style:f({background:m($).btnBg,color:m($).text.btnColor}),onClick:P},{default:u((()=>[b(p(e.$t("account.button.submit")),1)])),_:1},8,["style"])])),_:1})])),_:1},8,["style"])])),_:1})])),_:1},8,["title"])}}},[["__scopeId","data-v-d0d8fa32"]]);export{I as default};
