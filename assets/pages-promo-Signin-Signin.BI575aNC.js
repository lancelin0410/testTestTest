import{_ as s,L as e,a as t,u as a,C as o,E as n,G as i,T as l,o as c,c as d,w as r,b as g,q as u,t as m,n as h,d as T,k as A,l as y,F as f,e as I,f as p,v as b,i as C}from"./index-D3JOlfsW.js";import{_}from"./close.Dr_fSlU0.js";import{R as k,S as B}from"./index.C8p_RHRZ.js";import{p as v,q as w}from"./promo.CTMOP9IK.js";import{T as D}from"./toast.DwwlpOqS.js";import"./rz.CuturHuW.js";const E="/testTestTest/assets/lbi-DSArVHRh.png",S=s({__name:"Signin",setup(s){const{t:S}=e();t();const P=a();let R=o(!1),V=o(0),Y=n({list:[],betAmountTodayConfig:0,rechargeAmountTodayConfig:0,userBetAmountToday:0,userRechargeAmountToday:0,signinIdToday:""});const N=()=>{R.value=!1},F=async()=>{D.showLoading(S("promo.toast.loading"));const{code:s,data:e}=await v();if(200==s){let s=JSON.parse(e.config),t=[];s.items.forEach(((s,a)=>{let o={deposit:s[1],bet:s[2],rewards:s[0],status:e.signinData[a]};t.push(o)})),Y.signinIdToday=e.signinIdToday,Y.betAmountTodayConfig=t[e.signinIdToday].deposit,Y.rechargeAmountTodayConfig=t[e.signinIdToday].bet,Y.userBetAmountToday=e.betAmountToday,Y.userRechargeAmountToday=e.rechargeAmountToday,Y.list=t,D.hideLoading()}else D.hideLoading()};return i((()=>{F()})),(s,e)=>{const t=p,a=b,o=C,n=l("mobile-sub-layout");return c(),d(n,{title:s.$t("promo.header.siginTitle"),lineHeight:4},{"header-right":r((()=>[g(t,{class:"claim-all-btn",style:h({background:T(P).theme.button.other}),onClick:e[0]||(e[0]=s=>(async s=>{const{code:e,data:t}=await w({signinId:s});200==e&&(F(),D.show(S("promo.toast.receiveSuccessfully")))})(0))},{default:r((()=>[u(m(s.$t("promo.button.claimAll")),1)])),_:1},8,["style"])])),default:r((()=>[g(t,{class:"signin-body"},{default:r((()=>[g(t,{class:"signin-content"},{default:r((()=>[g(t,{class:"signin-content-top"},{default:r((()=>[g(t,{class:"signin-content-top-item",style:h({background:T(P).theme.lightBgColor})},{default:r((()=>[g(t,{class:"signin-content-top-item-view",style:h({color:T(P).theme.text.normal})},{default:r((()=>[u(m(s.$t("promo.public.requiredDeposit"))+" ",1),g(a,{style:h({color:T(P).theme.text.highlight})},{default:r((()=>[u(m(T(Y).userBetAmountToday)+"/"+m(T(Y).betAmountTodayConfig),1)])),_:1},8,["style"])])),_:1},8,["style"]),g(t,{class:"signin-content-top-item-view",style:h({color:T(P).theme.text.normal})},{default:r((()=>[u(m(s.$t("promo.public.requiredBets"))+" ",1),g(a,{style:h({color:T(P).theme.text.highlight})},{default:r((()=>[u(m(T(Y).userRechargeAmountToday)+"/"+m(T(Y).rechargeAmountTodayConfig),1)])),_:1},8,["style"])])),_:1},8,["style"])])),_:1},8,["style"])])),_:1}),g(t,{class:"signin-days-content",style:h({background:T(P).theme.lightBgColor})},{default:r((()=>[(c(!0),A(f,null,y(T(Y).list,((e,a)=>(c(),d(t,{class:"signin-days-item",key:a},{default:r((()=>[g(t,{class:"signin-days-item-day"},{default:r((()=>[u(m(s.$t("promo.public.day"))+" "+m(a+1),1)])),_:2},1024),g(o,{class:"signin-days-item-icon",src:E}),1==e.status?(c(),d(o,{key:0,class:"signin-days-item-image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAAECAMAAABFnVECAAAAllBMVEUAAAD+g4P4goL/gID5hIT6hIT5hIT7hIT5g4P6hIT6hIT7hIT6hIT7hIT6hIT7hIT/g4P6hIT6hIT6hIT6hIT6hIT6hIT6g4P7hIT6g4P/fn76hIT6hIT6g4P6hIT6hIT6hIT6hIT6g4P7hIT+gYH6g4P7hIT6g4P7hIT7hIT6g4P6hIT6hIT6g4P6g4P6g4P6hIT5g4Mnofs5AAAAMnRSTlMAFhsGIeYmeSv48D21qVtHEvXf1c+7nmc4MwrrkVX82mGYbUIOwa+kf3NMysaEUS+MieKcK0EAAAFrSURBVDjLjdPZcoJAFARQjaKJIlFBHEX2fZf//7n0HZkMFYnYD1ap1ECfomfL6BrteeYiH48sKSvkk9K2F4SxLRKG4TdSFE1j27amaZ7nnZEgyPM1kmV13XX3++12833TNNN0t9sliaqqp9MpjquqLA3D0HXXdY/Ho6IolmVtNpvD4fCFOI6DT3zBT5aFf3GN6+q6bhhlWVVxjENwVIIz09Q0fR+3uXddnWVrJM+D4Hz2PDyVbTdNUeBBw3C7ZeyCtC2qoBJVe7SkwvtrtJwtZmNZiFwpEcKheh7YkAxYGGeRJiCRIORBHFIjIY0/FpBAeglyEBBg6B2IwSAGrgADiUAGNQykgOgv2rfUnNemyvsoQqG+3LDwFASX4A4SYvUfhDYNoQ4h9HEIREAooxCQeAEBCf4iAAISHIIkJATyDCGnMR+fBmU4DfY8DbGN4O1pVKQwPg2HZ3oa8q3gGoLjxTTY7zQQOQ0KpvEDdvBTYuMTKY8AAAAASUVORK5CYII="})):I("",!0),1!=e.status?(c(),d(t,{key:1,class:"signin-days-item-money"},{default:r((()=>[u(m(e.rewards),1)])),_:2},1024)):(c(),d(t,{key:2,class:"claimed-btn",onClick:s=>(async(s,e)=>{const{code:t,data:a}=await w({signinId:e+1});200==t&&(F(),V.value=s.rewards,R.value=!0)})(e,a)},{default:r((()=>[u(m(s.$t("promo.button.claim")),1)])),_:2},1032,["onClick"])),2==e.status?(c(),d(t,{key:3,class:"signin-days-item-claimed"},{default:r((()=>[g(o,{src:"/testTestTest/assets/Claimed-BCua-UXf.png",class:"claimed-image"})])),_:1})):I("",!0),1==e.status?(c(),d(t,{key:4,class:"signin-days-item-noclaimed"})):I("",!0)])),_:2},1024)))),128))])),_:1},8,["style"]),g(k,{list:T(B)},null,8,["list"])])),_:1})])),_:1}),T(R)?(c(),d(t,{key:0,class:"receive-success-body"},{default:r((()=>[g(o,{class:"receive-success-image",src:"/testTestTest/assets/t-BAb_snHP.png"}),g(t,{class:"receive-success-content"},{default:r((()=>[g(o,{class:"close-receive-success-content",onClick:N,src:_}),g(t,{class:"receive-success-content-title"},{default:r((()=>[u(m(s.$t("promo.public.bonusContent")),1)])),_:1}),g(t,{class:"receive-success-content-icon"},{default:r((()=>[g(o,{class:"icon-size",src:E})])),_:1}),g(t,{class:"amount"},{default:r((()=>[u(m(T(V)),1)])),_:1}),g(t,{class:"bet-now-btn",onClick:N},{default:r((()=>[u(m(s.$t("promo.button.betNow")),1)])),_:1})])),_:1})])),_:1})):I("",!0)])),_:1},8,["title"])}}},[["__scopeId","data-v-288fd716"]]);export{S as default};
