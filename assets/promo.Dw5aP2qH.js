import{a9 as a,aa as t}from"./index-D6FzdE0N.js";const i={getPromoListUrl:t.api_app+"/activity/list",exchangeUrl:t.api_app+"/activity/exchange",getBetRankDataUrl:t.api_app+"/activity/betRankData",getSigninInfoUrl:t.api_app+"/signin/getSigninInfo",recvRewardUrl:t.api_app+"/signin/recvReward",canGiftCode:t.api_app+"/activity/giftCode",registerActivityData:t.api_app+"/activity/registerActivityData",registerActivityReward:t.api_app+"/activity/registerActivityReward",inviteRechageRankData:t.api_app+"/activity/inviteRechageRankData",inviteRechageRankHeadAwardList:t.api_app+"/activity/inviteRechageRankHeadAwardList",inviteRechageRankBelowData:t.api_app+"/activity/inviteRechageRankBelowData",inviteRechageRankBelowList:t.api_app+"/activity/inviteRechageRankBelowList",inviteRechageRankHeadAwardReceive:t.api_app+"/activity/inviteRechageRankHeadAwardReceive",getSpinBigAward:t.api_app+"/activity/getSpinBigAward"},e=t=>a.post({url:i.getSpinBigAward,data:t}),p=t=>a.post({url:i.getPromoListUrl,data:t}),r=t=>a.post({url:i.exchangeUrl,data:t}),n=t=>a.post({url:i.getBetRankDataUrl,data:t}),s=t=>a.post({url:i.getSigninInfoUrl,data:t}),c=t=>a.post({url:i.recvRewardUrl,data:t}),g=t=>a.post({url:i.canGiftCode,data:t}),d=t=>a.post({url:i.registerActivityData,data:t}),v=t=>a.post({url:i.registerActivityReward,data:t}),R=t=>a.post({url:i.inviteRechageRankData,data:t}),o=t=>a.post({url:i.inviteRechageRankHeadAwardList,data:t}),l=t=>a.post({url:i.inviteRechageRankBelowData,data:t}),w=t=>a.post({url:i.inviteRechageRankBelowList,data:t}),y=t=>a.post({url:i.inviteRechageRankHeadAwardReceive,data:t}),h=i=>a.post({url:t.api_app+"/activity/getSpinReward",data:i}),k=i=>a.post({url:t.api_app+"/activity/getSpinAwardLog",data:i}),u=i=>a.post({url:t.api_app+"/activity/getSpinActivityData",data:i}),A=i=>a.post({url:t.api_app+"/activity/claimSpinAward",data:i});export{A as a,k as b,e as c,d,r as e,v as f,p as g,g as h,u as i,R as j,o as k,w as l,l as m,y as n,n as o,s as p,c as q,h as r};
