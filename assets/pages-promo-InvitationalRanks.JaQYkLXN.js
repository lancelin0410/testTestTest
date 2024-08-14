import{_ as t,a as e,g as a,u as l,D as s,a7 as i,o as n,c as o,w as r,b as u,n as d,d as c,p as m,t as p,x as f,e as h,y as k,f as y,i as g,q as v,E as b,k as _,F as A,l as x,K as R,B as C,R as w,I as T,J as I}from"./index-D6FzdE0N.js";import{T as B,N as S}from"./TipsPopup.Bsb2Qo1g.js";import{u as D}from"./usePromoStore.D0w4JkI4.js";import{_ as V}from"./share-icon.DUdrQ5EC.js";import{a as U}from"./runtime-core.esm-bundler.CJBgPqDo.js";import{c as E,s as J}from"./system.CkeYPCym.js";import{a as N}from"./data-formatter.DJPK8l9W.js";import{j as P,k as M,l as F,m as Z,n as $}from"./promo.Dw5aP2qH.js";import{e as L}from"./encipherPhone.QHWvuj37.js";import{_ as z,a as O}from"./no-check.DI2V6W0O.js";import{T as j}from"./toast.BErREgqV.js";import{_ as W}from"./rz.CuturHuW.js";/* empty css                                                                  */import"./date-formatter.WRZnbcvu.js";const G=t({__name:"InvitationRanksHome",setup(t){const b=D(),_=e(),A=a(),x=l(),R=s({inviteLink:"",inviteCode:""});U((()=>{C()}));const C=async()=>{const{code:t,data:e}=await i();if(200==t&&(R.inviteLink=e.referralUrl||"",e.referralUrl)){const t=e.referralUrl.split("?");if(t.length>1){t[1].split("&").forEach((t=>{t.includes("invite_code=")&&(R.inviteCode=t.replace("invite_code=",""))}))}}},w=t=>{b.inviterank.tabIndex=3,b.inviterank.rulsTabIndex=t},T=()=>{b.inviterank.tabIndex=1},I=()=>{b.inviterank.tabIndex=2},B=()=>{k({url:"/pages/account/PhoneBinding/PhoneBinding"})};return(t,e)=>{const a=y,l=g,s=v;return n(),o(a,{class:"invitation-ranks-home-container plr30 pt30"},{default:r((()=>[u(a,{class:"item-card",style:d({background:c(x).theme.lightBgColor})},{default:r((()=>[u(a,{class:"item-title"},{default:r((()=>[m(p(t.$t("promo.invitationRanks.homeText1")),1)])),_:1}),u(a,{class:"item-subtitle ft12 mt16",style:d({color:c(x).theme.text.highlight})},{default:r((()=>[m(p(t.$t("promo.invitationRanks.homeText2")),1)])),_:1},8,["style"]),u(a,{class:"item-reward flex-acenter flex-scenter ft15 mt16"},{default:r((()=>[u(a,null,{default:r((()=>[m(p(t.$t("promo.invitationRanks.homeText3")),1)])),_:1}),u(a,{class:"plr16",style:d([{"font-size":"50rpx"},{color:c(x).theme.text.highlight}])},{default:r((()=>[m(p(c(_).currencySign)+p(c(N)(c(b).inviterank.uptoRewards)),1)])),_:1},8,["style"]),u(a,null,{default:r((()=>[m(p(t.$t("promo.invitationRanks.homeText4")),1)])),_:1})])),_:1}),u(a,{class:"item-des ft12 mt16"},{default:r((()=>[m(p(t.$t("promo.invitationRanks.homeText5")),1)])),_:1}),u(a,{class:"flex-acenter mt16 ft10 w-100p",style:d([{"justify-content":"space-around"},{color:c(x).theme.text.theme2}])},{default:r((()=>[u(a,{class:"item-small-btn",style:d({background:c(x).theme.button.bgColor}),onClick:e[0]||(e[0]=f((t=>w(0)),["stop"]))},{default:r((()=>[m(p(t.$t("promo.invitationRanks.rules")),1)])),_:1},8,["style"]),u(a,{class:"item-small-btn",style:d({background:c(x).theme.button.bgColor}),onClick:f(I,["stop"])},{default:r((()=>[m(p(t.$t("promo.invitationRanks.myRewards")),1)])),_:1},8,["style"]),c(A).userInfo.mobile?h("",!0):(n(),o(a,{key:0,class:"item-small-btn",style:d({background:c(x).theme.button.bgColor}),onClick:f(B,["stop"])},{default:r((()=>[m(p(t.$t("promo.invitationRanks.bindToJoin")),1)])),_:1},8,["style"]))])),_:1},8,["style"])])),_:1},8,["style"]),u(a,{class:"item-card mt32",style:d({background:c(x).theme.lightBgColor})},{default:r((()=>[u(a,{class:"item-title"},{default:r((()=>[m(p(t.$t("promo.invitationRanks.homeText6")),1)])),_:1}),u(a,{class:"item-subtitle ft12 mt16",style:d({color:c(x).theme.text.highlight})},{default:r((()=>[m(p(t.$t("promo.invitationRanks.homeText7")),1)])),_:1},8,["style"]),u(a,{class:"item-reward flex-acenter flex-scenter ft15 mt16"},{default:r((()=>[u(a,null,{default:r((()=>[m(p(t.$t("promo.invitationRanks.homeText8")),1)])),_:1}),u(a,{class:"plr16",style:d([{"font-size":"50rpx"},{color:c(x).theme.text.highlight}])},{default:r((()=>[m(p(c(_).currencySign)+p(c(N)(c(b).inviterank.topRewards)),1)])),_:1},8,["style"])])),_:1}),u(a,{class:"item-des ft12 mt16"},{default:r((()=>[m(p(t.$t("promo.invitationRanks.homeText9")),1)])),_:1}),u(a,{class:"flex-acenter mt16 ft10 w-100p",style:d([{"justify-content":"space-around"},{color:c(x).theme.text.theme2}])},{default:r((()=>[u(a,{class:"item-small-btn",style:d({background:c(x).theme.button.bgColor}),onClick:e[1]||(e[1]=f((t=>w(1)),["stop"]))},{default:r((()=>[m(p(t.$t("promo.invitationRanks.rules")),1)])),_:1},8,["style"]),u(a,{class:"item-small-btn",style:d({background:c(x).theme.button.bgColor}),onClick:f(T,["stop"])},{default:r((()=>[m(p(t.$t("promo.invitationRanks.rank")),1)])),_:1},8,["style"]),c(A).userInfo.mobile?h("",!0):(n(),o(a,{key:0,class:"item-small-btn",style:d({background:c(x).theme.button.bgColor}),onClick:f(B,["stop"])},{default:r((()=>[m(p(t.$t("promo.invitationRanks.bindToJoin")),1)])),_:1},8,["style"]))])),_:1},8,["style"])])),_:1},8,["style"]),c(b).inviterank.isActivityEnd?h("",!0):(n(),o(a,{key:0,class:"earn-footer-body",style:d({background:c(x).theme.bgColor})},{default:r((()=>[u(a,{style:d([{height:"1rpx"},{background:c(x).theme.seplineColor}])},null,8,["style"]),u(a,{class:"my-link-label plr30 mt24"},{default:r((()=>[m(p(t.$t("promo.invitationRanks.inviteLink"))+": ",1)])),_:1}),u(a,{class:"my-link"},{default:r((()=>[u(a,{class:"my-link-content",style:d({background:c(x).theme.input.bgColor})},{default:r((()=>[m(p(R.inviteLink),1)])),_:1},8,["style"]),u(a,{class:"coby-btn",style:d({background:c(x).theme.earn.gradientBtn}),onClick:e[2]||(e[2]=f((t=>c(E)({text:R.inviteLink})),["stop"]))},{default:r((()=>[m(p(t.$t("earn.footer.copy")),1)])),_:1},8,["style"])])),_:1}),u(a,{class:"my-link-label plr30"},{default:r((()=>[m(p(t.$t("promo.invitationRanks.inviteCode"))+": ",1)])),_:1}),u(a,{class:"my-link"},{default:r((()=>[u(a,{class:"my-link-content",style:d({background:c(x).theme.input.bgColor})},{default:r((()=>[m(p(R.inviteCode),1)])),_:1},8,["style"]),u(a,{class:"coby-btn",style:d({background:c(x).theme.earn.gradientBtn}),onClick:e[3]||(e[3]=f((t=>c(E)({text:R.inviteCode})),["stop"]))},{default:r((()=>[m(p(t.$t("earn.footer.copy")),1)])),_:1},8,["style"])])),_:1}),u(a,{class:"share-btn",style:d({background:c(x).theme.button.normal}),onClick:e[4]||(e[4]=f((t=>c(J)(R.inviteLink)),["stop"]))},{default:r((()=>[u(l,{src:V,class:"share-icon"}),u(s,null,{default:r((()=>[m(p(t.$t("earn.footer.share")),1)])),_:1})])),_:1},8,["style"])])),_:1},8,["style"])),c(b).inviterank.isActivityEnd?(n(),o(a,{key:1,class:"earn-footer-body",style:d({background:c(x).theme.bgColor})},{default:r((()=>[u(a,{style:d([{height:"1rpx"},{background:c(x).theme.seplineColor}])},null,8,["style"]),u(a,{class:"ptb30 plr30 ft15"},{default:r((()=>[m(p(t.$t("promo.invitationRanks.homeText10")),1)])),_:1}),u(a,{class:"share-btn",style:d({background:c(x).theme.button.normal}),onClick:e[5]||(e[5]=f((t=>I()),["stop"]))},{default:r((()=>[u(s,null,{default:r((()=>[m(p(t.$t("promo.invitationRanks.myRewards")),1)])),_:1})])),_:1},8,["style"])])),_:1},8,["style"])):h("",!0)])),_:1})}}},[["__scopeId","data-v-af746a43"]]),Y=t({__name:"InvitationRanksRank",setup(t){D();const i=e(),f=a(),h=l(),k=s({list:[],first:{},second:{},third:{},myRank:0,myInviteCount:0});b((()=>{g()}));const g=async()=>{const{code:t,data:e}=await P({page:1,pageSize:20});if(200!==t)return;const a=e.ranks||[];k.myInviteCount=e.inviteCount||0,k.myRank=e.rank||0,k.list=a.filter(((t,e)=>e>2)),a.length>0&&(k.first=a[0]),a.length>1&&(k.second=a[1]),a.length>2&&(k.third=a[2])};return(t,e)=>{const a=y;return n(),o(a,{class:"ptb30 plr30"},{default:r((()=>[u(a,{class:"flex-sbetween top3-view plr30"},{default:r((()=>[u(a,{class:"top3-item second"},{default:r((()=>[u(a,{class:"phone"},{default:r((()=>[m(p(c(L)(k.second.mobile)),1)])),_:1}),u(a,{class:"value"},{default:r((()=>[m(p(k.second.inviteCount),1)])),_:1})])),_:1}),u(a,{class:"top3-item first"},{default:r((()=>[u(a,{class:"phone"},{default:r((()=>[m(p(c(L)(k.first.mobile)),1)])),_:1}),u(a,{class:"value"},{default:r((()=>[m(p(k.first.inviteCount),1)])),_:1})])),_:1}),u(a,{class:"top3-item third"},{default:r((()=>[u(a,{class:"phone"},{default:r((()=>[m(p(c(L)(k.third.mobile)),1)])),_:1}),u(a,{class:"value"},{default:r((()=>[m(p(k.third.inviteCount),1)])),_:1})])),_:1})])),_:1}),u(a,{class:"list-container mt40 plr30"},{default:r((()=>[u(a,{class:"list-item",style:d({background:c(h).theme.list.headerBgColor})},{default:r((()=>[u(a,{class:"list-value",style:d({color:c(h).theme.text.highlight})},{default:r((()=>[m(p(t.$t("promo.invitationRanks.rank")),1)])),_:1},8,["style"]),u(a,{class:"list-value"},{default:r((()=>[m(p(t.$t("promo.invitationRanks.phoneNumber")),1)])),_:1}),u(a,{class:"list-value"},{default:r((()=>[m(p(t.$t("promo.invitationRanks.invite")),1)])),_:1})])),_:1},8,["style"]),u(a,{class:"list-scroll",style:d({height:`calc(100vh - 665rpx - ${c(i).headerStyle.height}px)`})},{default:r((()=>[(n(!0),_(A,null,x(k.list,((t,e)=>(n(),o(a,{class:"list-item",style:d({background:c(h).theme.list.listBgColor})},{default:r((()=>[u(a,{class:"list-value",style:d({color:c(h).theme.text.highlight})},{default:r((()=>[m(p(t.rank)+"th ",1)])),_:2},1032,["style"]),u(a,{class:"list-value"},{default:r((()=>[m(p(c(L)(t.mobile)),1)])),_:2},1024),u(a,{class:"list-value"},{default:r((()=>[m(p(t.inviteCount),1)])),_:2},1024)])),_:2},1032,["style"])))),256))])),_:1},8,["style"]),u(a,{class:"list-item",style:d({background:c(h).theme.list.headerBgColor})},{default:r((()=>[u(a,{class:"list-value flex-acenter",style:d({color:c(h).theme.text.highlight})},{default:r((()=>[u(a,{class:"my-rank-tag"},{default:r((()=>[m(" Me ")])),_:1}),u(a,null,{default:r((()=>[m(p(k.myRank<1?">10000th":k.myRank+"th"),1)])),_:1})])),_:1},8,["style"]),u(a,{class:"list-value"},{default:r((()=>[m(p(c(L)(c(f).userInfo.mobile)),1)])),_:1}),u(a,{class:"list-value"},{default:r((()=>[m(p(k.myInviteCount),1)])),_:1})])),_:1},8,["style"])])),_:1})])),_:1})}}},[["__scopeId","data-v-03d5fe2b"]]),K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAMAAAB1owf/AAAAulBMVEUAAAD////////HvArrvzTrvC/////rvzT////rvjP////rvzPswDT////////////rvzP////rvjPrvzP////qvzP////////tvzDswDTswDPrvzPrvzPrvzP////qvTHtwDH////////////////////////////////////////////////////////swDTsvzT////svzT////////////////vvjHsvS/pvCzouS7rxCf////rvzSqOlr5AAAAPHRSTlMA7WIE61YF6OVLP/gn9yXfq/rh2rSopTs3+/DTtZ+aU0YvIhUMCfDo4NbTq6mhoJ6UjmtpVEkzLxsXFg3O8RVxAAAAvklEQVQoz63Q1w6CQBAF0KVYERREwUIV7L2X3f//LWeDDxjvo/flJnMyyWRYkcdO792ps5N7sFg5viOcmNpb2NNNWpZGTegVjVVVhXOzb2EpCIskJLZJtLaAKNs25/Yq+ZX6RSUyXSBeLkkB0mSZupyHUFieeBMsMn+Wp9/SsATOiEZIhkJ0K1oMZGxIioDcOgOiQAe3tTq0ZQyAFCSQSMJC1DNIIiBEQ2PkM1Y9z3j7yr5oPz6+qFNXCT//fwM/BSCAN7UWowAAAABJRU5ErkJggg==",Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAMAAAB1owf/AAAAeFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////GqOSsAAAAJ3RSTlMA6wZiVgTlPuj5S+7gJSfZtKuo9J4MU0c00qWhai4eF5eUjl8wFhR1J3tjAAAAsklEQVQoz63JRxKDMBBE0UFEWQJEEMEk57n/DT0qbcDM0r35Vf3Ab2tVvVLtbB457JdqTHrXUqrpQJcMgwhAPBVic81/JQYRBogoiVghqnNOZOOoYCSYNFH1OkvSh44MI6l1pDgBG466ZQXEkm68uP1Z3kMheGn1GAlWFGIZiZ4RIx11yVmWylGrzgKFo0Yy4gkZ8cQL5LUk6YBEHYWokeUAEHcZaupuxd3Mlrqa4Pbx1xdXchYq7J5ITAAAAABJRU5ErkJggg==",H=t({__name:"RoundSegmentControl",props:{defaultIndex:{type:Number,default:0},modelValue:{type:Number,default:0},list:{type:Array,default:()=>[]}},emits:["update:modelValue","change"],setup(t,{emit:e}){const a=l(),s=e,i=t;return(e,l)=>{const h=y;return n(),o(h,{class:"round-segmentcontrol-container",style:d({background:c(a).theme.tabsRound.bgColor})},{default:r((()=>[(n(!0),_(A,null,x(t.list,((e,l)=>(n(),o(h,{class:"segment-item",style:d({background:l===t.modelValue?c(a).theme.tabsRound.selectBgColor:"",color:l===t.modelValue?c(a).theme.tabsRound.selectTextColor:c(a).theme.tabsRound.textColor}),onClick:f((t=>(t=>{i.modelValue!==t&&(s("change",t),s("update:modelValue",t))})(l)),["stop"])},{default:r((()=>[u(h,null,{default:r((()=>[m(p(e),1)])),_:2},1024)])),_:2},1032,["style","onClick"])))),256))])),_:1},8,["style"])}}},[["__scopeId","data-v-523144de"]]),q=t({__name:"InvitationRanksTeams",setup(t,{expose:i}){const{t:k}=R(),v=D(),w=e();a();const T=l(),I=C(null),S=s({originList:[],list:[],headerData:{},teamList:[],sortByTime:!1,sortByDeposit:!1,hideInvalid:!0,currentStatus:-1,statusList:[{title:k("promo.invitationRanks.all"),key:-1},{title:k("promo.invitationRanks.underReview"),key:2},{title:k("promo.invitationRanks.pass"),key:1},{title:k("promo.invitationRanks.claimable"),key:0}],statusSelectPopupVisible:!1});b((()=>{V()}));const V=()=>{U(),E(),J()},U=async()=>{const{code:t,data:e}=await M({status:S.currentStatus});200===t&&(S.originList=e||[],S.list=e||[])},E=async()=>{const{code:t,data:e}=await F({page:1,pageSize:50,inviteTimeSrot:Number(S.sortByTime),rechargeTotalSort:Number(S.sortByDeposit),hideInvalid:Number(S.hideInvalid)});200===t&&(S.teamList=e.belows||[])},J=async()=>{const{code:t,data:e}=await Z();200===t&&(S.headerData=e)},P=t=>{1===t&&(S.sortByTime=!S.sortByTime,S.sortByTime&&(S.sortByDeposit=!1)),2===t&&(S.sortByDeposit=!S.sortByDeposit,S.sortByDeposit&&(S.sortByTime=!1)),E()},L=()=>{S.hideInvalid=!S.hideInvalid,E()},W=t=>{S.statusSelectPopupVisible=!0},G=async t=>{j.showLoading("Loading");const{code:e,data:a}=await $({id:t.id});j.hideLoading(),200===e&&(j.show("The reward application has been submitted and we will review it for you as soon as possible"),V())},Y=()=>{I.value.show()};return i({loadAllData:V}),(t,e)=>{const a=y,l=g;return n(),o(a,{class:"container plr30 ptb30"},{default:r((()=>[u(a,{class:"item-card flex-wrap",style:d({background:c(T).theme.promo.invitationRanks.teamCardBg})},{default:r((()=>[u(a,{class:"item-view flex-acenter flex-column"},{default:r((()=>[u(a,{class:"ft14"},{default:r((()=>[m(p(t.$t("promo.invitationRanks.teamText1")),1)])),_:1}),u(a,{class:"ft20",style:d({color:c(T).theme.text.highlight})},{default:r((()=>[m(p(S.headerData.inviteCountTotal||0),1)])),_:1},8,["style"])])),_:1}),u(a,{class:"item-view flex-acenter flex-column"},{default:r((()=>[u(a,{class:"ft14"},{default:r((()=>[m(p(t.$t("promo.invitationRanks.teamText2")),1)])),_:1}),u(a,{class:"ft20 flex-acenter",style:d({color:c(T).theme.text.highlight})},{default:r((()=>[u(a,null,{default:r((()=>[m(p(S.headerData.inviteCount||0),1)])),_:1}),u(l,{onClick:Y,class:"ml24 mt12",src:"data:image/png;base64,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",style:{width:"40rpx",height:"40rpx"}})])),_:1},8,["style"])])),_:1}),u(a,{class:"item-view flex-acenter flex-column"},{default:r((()=>[u(a,{class:"ft14"},{default:r((()=>[m(p(t.$t("promo.invitationRanks.teamText3")),1)])),_:1}),u(a,{class:"ft20",style:d({color:c(T).theme.text.highlight})},{default:r((()=>[m(p(c(N)(S.headerData.award)),1)])),_:1},8,["style"])])),_:1}),u(a,{class:"item-view flex-acenter flex-column"},{default:r((()=>[u(a,{class:"ft14"},{default:r((()=>[m(p(t.$t("promo.invitationRanks.teamText4")),1)])),_:1}),u(a,{class:"ft20",style:d({color:c(T).theme.text.highlight})},{default:r((()=>[m(p(c(N)(S.headerData.auditHeadAward)),1)])),_:1},8,["style"])])),_:1})])),_:1},8,["style"]),u(a,{class:"ft14 mt24"},{default:r((()=>[m(p(t.$t("promo.invitationRanks.teamText5"))+" "+p(c(w).currencySign)+" "+p(S.headerData.nextAward||0)+" "+p(t.$t("promo.invitationRanks.teamText6"))+" "+p(S.headerData.nextInviteRequired||0)+" "+p(t.$t("promo.invitationRanks.teamText10")),1)])),_:1}),u(a,{class:"flex-scenter pt30"},{default:r((()=>[u(H,{modelValue:c(v).inviterank.teamTabIndex,"onUpdate:modelValue":e[0]||(e[0]=t=>c(v).inviterank.teamTabIndex=t),list:[t.$t("promo.invitationRanks.teams"),t.$t("promo.invitationRanks.rewards")]},null,8,["modelValue","list"])])),_:1}),1===c(v).inviterank.teamTabIndex?(n(),o(a,{key:0,class:"list-container ptb30"},{default:r((()=>[u(a,{class:"list-item",style:d({background:c(T).theme.list.headerBgColor})},{default:r((()=>[u(a,{class:"list-value"},{default:r((()=>[m(" ID ")])),_:1}),u(a,{class:"list-value"},{default:r((()=>[m(p(t.$t("promo.invitationRanks.rewards")),1)])),_:1}),u(a,{class:"list-value",onClick:f(W,["stop"])},{default:r((()=>[u(a,null,{default:r((()=>[m(p(t.$t("promo.invitationRanks.teamText11")),1)])),_:1}),u(a,{class:"ml16 mt12"},{default:r((()=>[u(l,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAMCAYAAABm+U3GAAAAAXNSR0IArs4c6QAAAWxJREFUOE+dkk0rrWEUhq97dIaMOOTISH6EP2GAlHQkoqhzDCgl+SjSLslXbJKiTn4Bv8LIDzDzbfuYGLC8a7e2Xpu9cZ7R+7w963qu515LZjYOtAGHwJKkE/5zmVkjMAc0ycwmgAHgB7AHzEg6/S47oCNAB3Dr4FqgJ9n8DdgCsCHp7KtwM6tPxGaBFsClFuXFZvYTGAM6A7bjByWdl4Obmdc3AMMhlwOmgd08OODVQF/KPANkJV2UgpuZQx3kptfACrAuKfcKTpmPAl3AM7AFZCRdFsPNrC4k+gE3nUya9k/SnZ99Aw54VcrcgHlgU5IbFV73K0Ct3ihgGViT5N/59Q6cgrt5N/AIrHqxpJto9hAwGKZTwH4aWhJclPkf4Cnm8yCB+b4dePC590sLz0/H9aFx6skei5v/jn9XSSyerWdeMM1nWrzKgsO8JprZC1TEnGaBbUn3pSbmU3DAK4HmZEq8acfAUTmo17wAxe+COaPnf9gAAAAASUVORK5CYII=",mode:"aspectFit",style:{width:"26rpx",height:"26rpx"}})])),_:1})])),_:1})])),_:1},8,["style"]),u(a,{class:"list-scroll",style:d({height:`calc(100vh - 750rpx - ${c(w).headerStyle.height}px)`})},{default:r((()=>[(n(!0),_(A,null,x(S.list,((e,l)=>(n(),o(a,{class:"list-item",style:d({background:c(T).theme.list.listBgColor})},{default:r((()=>[u(a,{class:"list-value"},{default:r((()=>[m(p(e.userId),1)])),_:2},1024),u(a,{class:"list-value"},{default:r((()=>[m(p(e.award),1)])),_:2},1024),u(a,{class:"list-value"},{default:r((()=>[0===e.status?(n(),o(a,{key:0,class:"claimable-btn",style:d({background:c(T).theme.button.other}),onClick:f((t=>G(e)),["stop"])},{default:r((()=>[m(p(t.$t("promo.invitationRanks.claim")),1)])),_:2},1032,["style","onClick"])):h("",!0),3===e.status?(n(),o(a,{key:1,class:"claimable-btn",style:d({background:c(T).theme.button.other}),onClick:f((t=>G(e)),["stop"])},{default:r((()=>[m(p(t.$t("promo.invitationRanks.reClaim")),1)])),_:2},1032,["style","onClick"])):h("",!0),1===e.status||4===e.status?(n(),o(a,{key:2},{default:r((()=>[m(p(t.$t("promo.invitationRanks.pass")),1)])),_:1})):h("",!0),2===e.status?(n(),o(a,{key:3},{default:r((()=>[m(p(t.$t("promo.invitationRanks.underReview")),1)])),_:1})):h("",!0)])),_:2},1024)])),_:2},1032,["style"])))),256))])),_:1},8,["style"])])),_:1})):h("",!0),0===c(v).inviterank.teamTabIndex?(n(),o(a,{key:1,class:"list-container ptb30"},{default:r((()=>[u(a,{class:"ft14 flex-acenter"},{default:r((()=>[u(a,{onClick:f(L,["stop"]),class:"mr12"},{default:r((()=>[S.hideInvalid?(n(),o(l,{key:0,src:z,mode:"aspectFit",style:{width:"38rpx",height:"38rpx"}})):(n(),o(l,{key:1,src:O,mode:"aspectFit",style:{width:"38rpx",height:"38rpx"}}))])),_:1}),u(a,null,{default:r((()=>[m(p(t.$t("promo.invitationRanks.teamText7")),1)])),_:1})])),_:1}),u(a,{class:"list-item mt16",style:d({background:c(T).theme.list.headerBgColor})},{default:r((()=>[u(a,{class:"list-value"},{default:r((()=>[m(" ID ")])),_:1}),u(a,{class:"list-value flex-acenter"},{default:r((()=>[u(a,null,{default:r((()=>[m(p(t.$t("promo.invitationRanks.teamText8")),1)])),_:1}),u(a,{class:"ml16 mt10",onClick:e[1]||(e[1]=f((t=>P(1)),["stop"]))},{default:r((()=>[S.sortByTime?(n(),o(l,{key:0,src:K,mode:"aspectFit",style:{width:"26rpx",height:"26rpx"}})):(n(),o(l,{key:1,src:Q,mode:"aspectFit",style:{width:"26rpx",height:"26rpx"}}))])),_:1})])),_:1}),u(a,{class:"list-value flex-acenter"},{default:r((()=>[u(a,null,{default:r((()=>[m(p(t.$t("promo.invitationRanks.teamText9")),1)])),_:1}),u(a,{class:"ml16 mt10",onClick:e[2]||(e[2]=f((t=>P(2)),["stop"]))},{default:r((()=>[S.sortByDeposit?(n(),o(l,{key:0,src:K,mode:"aspectFit",style:{width:"26rpx",height:"26rpx"}})):(n(),o(l,{key:1,src:Q,mode:"aspectFit",style:{width:"26rpx",height:"26rpx"}}))])),_:1})])),_:1})])),_:1},8,["style"]),u(a,{class:"list-scroll",style:d({height:`calc(100vh - 790rpx - ${c(w).headerStyle.height}px)`})},{default:r((()=>[(n(!0),_(A,null,x(S.teamList,((t,e)=>(n(),o(a,{class:"list-item",style:d({background:c(T).theme.list.listBgColor})},{default:r((()=>[u(a,{class:"list-value"},{default:r((()=>[m(p(t.userId),1)])),_:2},1024),u(a,{class:"list-value"},{default:r((()=>[m(p(t.inviteTimeFormat),1)])),_:2},1024),u(a,{class:"list-value"},{default:r((()=>[m(p(t.rechargeTotal),1)])),_:2},1024)])),_:2},1032,["style"])))),256))])),_:1},8,["style"])])),_:1})):h("",!0),S.statusSelectPopupVisible?(n(),o(a,{key:2,class:"status-popup-view",onClick:e[3]||(e[3]=f((t=>S.statusSelectPopupVisible=!1),["stop"]))},{default:r((()=>[u(a,{class:"content",style:d({background:c(T).theme.lightBgColor,border:`2rpx solid ${c(T).theme.bgColor}`,top:`calc(100vh - 760rpx - ${c(w).headerStyle.height}px)`})},{default:r((()=>[(n(!0),_(A,null,x(S.statusList,((t,e)=>(n(),o(a,{key:e,class:"select-item",onClick:f((e=>(t=>{S.statusSelectPopupVisible=!1,S.currentStatus=t.key,U()})(t)),["stop"])},{default:r((()=>[m(p(t.title),1)])),_:2},1032,["onClick"])))),128))])),_:1},8,["style"])])),_:1})):h("",!0),u(B,{ref_key:"tipsPopupRef",ref:I,text:"Valid invitation: The user you invite needs to deposit ≥1000 to be defined as a valid invitation"},null,512)])),_:1})}}},[["__scopeId","data-v-3345df8a"]]),X=t({__name:"RewardsList",props:{title1:{type:String,default:""},title2:{type:String,default:""},key1:{type:String,default:""},key2:{type:String,default:""},list:{type:Array,default:()=>[]}},setup(t){const e=l();return(a,l)=>{const s=y;return n(),o(s,{class:"award-list-container"},{default:r((()=>[u(s,{class:"activity-award-content-item",style:d({background:c(e).theme.list.headerBgColor})},{default:r((()=>[u(s,{class:"depoist-amoout"},{default:r((()=>[m(p(t.title1),1)])),_:1}),u(s,{class:"reward-amoout"},{default:r((()=>[m(p(t.title2),1)])),_:1})])),_:1},8,["style"]),(n(!0),_(A,null,x(t.list,((a,l)=>(n(),o(s,{class:"activity-award-content-item",style:d({background:c(e).theme.list.listBgColor})},{default:r((()=>[u(s,{class:"depoist-amoout"},{default:r((()=>[m(p(a[t.key1]),1)])),_:2},1024),u(s,{class:"reward-amoout"},{default:r((()=>[m(p(c(N)(a[t.key2],0)),1)])),_:2},1024)])),_:2},1032,["style"])))),256))])),_:1})}}},[["__scopeId","data-v-70cf2f09"]]),tt={__name:"InvitationRanksRuls",setup(t){const a=D();e();const i=l();return s({list1:[{rank:5,rewards:9999},{rank:20,rewards:9999},{rank:40,rewards:9999},{rank:90,rewards:9999}],list2:[{rank:1,rewards:9999},{rank:2,rewards:9999},{rank:3,rewards:9999},{rank:90,rewards:9999}]}),(t,e)=>{const l=y,s=g;return n(),o(l,null,{default:r((()=>[u(l,{class:"ft15 pt30 plr30"},{default:r((()=>[m(p(t.$t("promo.invitationRanks.eventRewards")),1)])),_:1}),u(l,{class:"flex-scenter pt30"},{default:r((()=>[u(H,{modelValue:c(a).inviterank.rulsTabIndex,"onUpdate:modelValue":e[0]||(e[0]=t=>c(a).inviterank.rulsTabIndex=t),list:[t.$t("promo.invitationRanks.commission"),t.$t("promo.invitationRanks.ranking")]},null,8,["modelValue","list"])])),_:1}),0===c(a).inviterank.rulsTabIndex?(n(),o(l,{key:0,style:{padding:"30rpx"}},{default:r((()=>[u(X,{list:c(a).inviterank.content.headConfig||[],title1:t.$t("promo.invitationRanks.rank"),title2:t.$t("promo.invitationRanks.rewards"),key1:"count",key2:"award"},null,8,["list","title1","title2"])])),_:1})):h("",!0),1===c(a).inviterank.rulsTabIndex?(n(),o(l,{key:1,style:{padding:"30rpx"}},{default:r((()=>[u(X,{list:c(a).inviterank.content.config||[],title1:t.$t("promo.invitationRanks.rank"),title2:t.$t("promo.invitationRanks.rewards"),key1:"rankRangeShow",key2:"award"},null,8,["list","title1","title2"]),u(l,{class:"ft15 pt30 plr30 text-a-center"},{default:r((()=>[m(p(t.$t("promo.invitationRanks.rulsTip1"))+": "+p(c(a).inviterank.content.times)+" "+p(t.$t("promo.invitationRanks.times")),1)])),_:1}),u(l,{class:"ft12",style:{"line-height":"1.5"}},{default:r((()=>[u(l,{class:"flex-acenter ptb16"},{default:r((()=>[u(s,{src:W,style:{width:"30rpx",height:"30rpx"}}),u(l,{class:"ml12",style:d({color:c(i).theme.text.highlight})},{default:r((()=>[m(p(t.$t("promo.invitationRanks.rulsTipTitle1")),1)])),_:1},8,["style"])])),_:1}),u(l,null,{default:r((()=>[m(p(c(a).inviterank.startTime)+" - "+p(c(a).inviterank.endTime),1)])),_:1}),u(l,{class:"flex-acenter ptb16"},{default:r((()=>[u(s,{src:W,style:{width:"30rpx",height:"30rpx"}}),u(l,{class:"ml12",style:d({color:c(i).theme.text.highlight})},{default:r((()=>[m(p(t.$t("promo.invitationRanks.rulsTipTitle2")),1)])),_:1},8,["style"])])),_:1}),u(l,null,{default:r((()=>[m(p(t.$t("promo.invitationRanks.rulsTipDes1-1")),1)])),_:1}),u(l,null,{default:r((()=>[m(p(t.$t("promo.invitationRanks.rulsTipDes1-2")),1)])),_:1}),u(l,null,{default:r((()=>[m(p(t.$t("promo.invitationRanks.rulsTipDes1-3")),1)])),_:1}),u(l,{class:"flex-acenter ptb16"},{default:r((()=>[u(s,{src:W,style:{width:"30rpx",height:"30rpx"}}),u(l,{class:"ml12",style:d({color:c(i).theme.text.highlight})},{default:r((()=>[m(p(t.$t("promo.invitationRanks.rulsTipTitle3")),1)])),_:1},8,["style"])])),_:1}),u(l,null,{default:r((()=>[m(p(t.$t("promo.invitationRanks.rulsTipDes2-1")),1)])),_:1}),u(l,null,{default:r((()=>[m(p(t.$t("promo.invitationRanks.rulsTipDes2-2")),1)])),_:1}),u(l,null,{default:r((()=>[m(p(t.$t("promo.invitationRanks.rulsTipDes2-3")),1)])),_:1})])),_:1})])),_:1})):h("",!0)])),_:1})}}},et=t({__name:"InvitationalRanks",setup(t){const{t:a}=R(),i=D(),m=l(),p=e(),f=C(null),h=s({tabList:[{title:a("promo.invitationRanks.tab1")},{title:a("promo.invitationRanks.tab2")},{title:a("promo.invitationRanks.tab3")},{title:a("promo.invitationRanks.tab4")}]});b((()=>{k()}));const k=async()=>{await i.getPromoList(),console.log(i.inviterank)},g=({index:t})=>{2===t&&f.value.loadAllData()};return(t,e)=>{const a=y,l=w("mobile-sub-layout");return n(),o(l,{title:c(i).inviterank.title,"line-height":4},{default:r((()=>[u(a,{class:"invitationranks-container"},{default:r((()=>[u(a,{class:"tabs-view",style:d({background:c(m).theme.bgColor,top:c(p).headerStyle.height+"px"})},{default:r((()=>[u(S,{modelValue:c(i).inviterank.tabIndex,"onUpdate:modelValue":e[0]||(e[0]=t=>c(i).inviterank.tabIndex=t),normalColor:c(m).theme.tabs.normal,activeColor:c(m).theme.tabs.active,tabList:h.tabList,onChange:g},null,8,["modelValue","normalColor","activeColor","tabList"]),u(a,{style:d([{height:"1rpx"},{background:c(m).theme.seplineColor}])},null,8,["style"])])),_:1},8,["style"]),u(a,{class:"container-body"},{default:r((()=>[T(u(a,null,{default:r((()=>[u(G)])),_:1},512),[[I,0===c(i).inviterank.tabIndex]]),T(u(a,null,{default:r((()=>[u(Y)])),_:1},512),[[I,1===c(i).inviterank.tabIndex]]),T(u(a,null,{default:r((()=>[u(q,{ref_key:"invitationRanksTeamsRef",ref:f},null,512)])),_:1},512),[[I,2===c(i).inviterank.tabIndex]]),T(u(a,null,{default:r((()=>[u(tt)])),_:1},512),[[I,3===c(i).inviterank.tabIndex]])])),_:1})])),_:1})])),_:1},8,["title"])}}},[["__scopeId","data-v-373f273e"]]);export{et as default};
