System.register(["./@capacitor-legacy-DN4LNBqm.js","./@ionic-legacy-CdgF_T6b.js","./ionicons-legacy-B8vlfZgV.js","./@vue-legacy-D6coodBY.js","./vue-i18n-legacy-Dfssw_XK.js","./@stencil-legacy-B3F1rWbF.js","./vue-router-legacy-f55MWKZg.js","./localforage-legacy-D0pVUvDl.js","./@adjustcom-legacy-QP0zxLxB.js","./@intlify-legacy-DDHA1rkh.js"],(function(e,t){"use strict";var n,r,a,l,i,o,d,s,u,c,f,g,p,m,x,b,h,w,y,_,v,k,R,$,j,z,T,C,B,M,O,V,E,L,P,D,F;return{setters:[e=>{n=e.a,r=e.b},e=>{a=e.z,l=e.g,i=e.E,o=e.y,d=e.J,s=e.F,u=e.G,c=e.H,f=e.L,g=e.M,p=e.d,m=e.j,x=e.C,b=e.D,h=e.i,w=e.o,y=e.h,_=e.t},e=>{v=e.c},e=>{k=e.j,R=e.r,$=e.G,j=e.J,z=e.B,T=e.I,C=e.D,B=e.N,M=e.O,O=e.L,V=e.F,E=e.K,L=e.H,P=e.V,D=e.W},e=>{F=e.u},null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent='.reward{position:relative;padding:16px 8px 0}.reward .count-item{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:center;height:7vh;padding:0 20px;font-size:1rem;font-weight:700}.reward .count-item.left{background:url(/testTestTest/earn/rewards-top1.png);background-size:100% 100%}.reward .count-item.right{background:url(/testTestTest/earn/rewards-top2.png);background-size:100% 100%}.reward ion-card{--ion-background-color: var(--ion-background-light-color);padding:0;margin:16px 0}.reward ion-card ion-card-header{padding:8px 16px;border-bottom:2px solid #210403}.reward ion-card ion-card-header ion-card-title{font-size:1.2rem;text-align:center}.reward ion-card ion-card-content{color:#fd5959;font-size:.9rem;padding:8px 16px}.reward ion-card ion-card-content .btn-claim{position:absolute;top:50%;right:12px;transform:translateY(-50%);width:18%;color:#fff;line-height:24px;text-align:center;padding:0 2px;background:linear-gradient(0deg,#32b12f,#10740b);border-radius:16px}.reward ion-card ion-card-content.reward-content{height:44vh;overflow-y:scroll}.reward ion-card ion-card-content.reward-content .reward-list ion-row{width:100%;text-align:center}.rules{position:relative;padding:16px 8px 0}.rules ion-card{padding:4px;margin:0}.rules ion-card ion-card-header{padding:4px}.rules ion-card ion-card-header ion-card-title{font-size:.8rem;color:#fff}.rules ion-card ion-card-content{color:#fa8484;font-size:.7rem;padding:4px 0}.rules ion-card.rules-top{--ion-background-color: var(--ion-background-light-color)}.rules .rule-list{position:relative;width:100%;margin:8px 0;padding:0;border-radius:10px}.rules .rule-list::part(native){height:6vh}.rules .rule-list .rule-icon{position:relative;height:60%;display:flex}.rules .rule-list .rule-icon .rule-segment{height:100%;margin:0 8px}.rules .rule-list .rule-text{font-size:.7rem;width:100%;padding:0}.rules .rule-list .rule-text>div:before{display:inline-block;content:"";transform:translate(-50%,-50%);background-color:#fa4c49;width:3px;height:3px;border-radius:50%;margin-left:0;margin-right:4px}.rules .rule-list .rule-text .rule-marker-text{color:#ffdf3f}.earn{position:relative;height:100%;padding:16px 8px 0}.earn ion-segment{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:80%;height:40px;background:#610606;border-radius:20px}.earn ion-segment ion-segment-button.ios::part(native){color:#fd5959;font-size:1.2rem;font-weight:700}.earn ion-segment .segment-button-checked.ios::part(native){color:#fff}.earn ion-segment ion-segment-button.ios::part(indicator-background){border-radius:20px;background:linear-gradient(0deg,#fa4c49,#9a130c)}.earn .fixed-content{position:sticky;bottom:0;margin:12px auto auto;display:flex;flex-direction:column;align-items:center;width:100%;padding:12px 8px}.earn .fixed-content ion-row{position:relative;width:100%;font-size:.8rem;align-items:center;padding:4px;margin-bottom:12px;text-align:center;border-radius:8px;background-color:var(--ion-background-color)}.earn .fixed-content ion-row .share-url{background-color:#3d0303;border-radius:5px;margin:4px 0}.earn .fixed-content ion-row .btn-copy{line-height:32px;text-align:center;padding:0 2px;background:linear-gradient(0deg,#32b12f,#10740b);border-radius:16px}.earn .fixed-content .btn-share{display:flex;align-items:center;justify-content:center;font-size:1rem;width:90%;height:40px;background:linear-gradient(90deg,#f78d22,#e34e04);border-radius:20px}\n',document.head.appendChild(t);const G={class:"reward"},H={class:"btn-claim"},I={__name:"MyRewards",setup(e){const t=k({inviteCount:0,availableRebate:0,todayRebate:0,totalRebate:0}),n=R([]);return(e,r)=>($(),j("div",G,[z(C(o),{class:"ion-justify-content-between"},{default:T((()=>[z(C(a),{class:"count-item left",size:"5.6"},{default:T((()=>[z(C(l),null,{default:T((()=>[B(M(e.$t("earn.myRewards.rewardToday")),1)])),_:1}),z(C(i),null,{default:T((()=>[B(M(t.todayRebate),1)])),_:1})])),_:1}),z(C(a),{class:"count-item right",size:"5.6"},{default:T((()=>[z(C(l),null,{default:T((()=>[B(M(e.$t("earn.myRewards.totalRewards")),1)])),_:1}),z(C(i),null,{default:T((()=>[B(M(t.todayRebate),1)])),_:1})])),_:1})])),_:1}),z(C(s),null,{default:T((()=>[z(C(d),null,{default:T((()=>[z(C(l),null,{default:T((()=>[B(M(e.$t("earn.myRewards.numberOfInviters"))+":",1)])),_:1}),z(C(i),{style:{color:"#ffffff","margin-left":"12px"}},{default:T((()=>[B(M(t.inviteCount),1)])),_:1})])),_:1})])),_:1}),z(C(s),null,{default:T((()=>[z(C(d),null,{default:T((()=>[z(C(l),null,{default:T((()=>[B(M(e.$t("earn.myRewards.amountAvailable"))+":",1)])),_:1}),z(C(i),{style:{color:"#ffdf3f","margin-left":"12px"}},{default:T((()=>[B(M(t.availableRebate),1)])),_:1}),O("div",H,M(e.$t("earn.myRewards.claim")),1)])),_:1})])),_:1}),z(C(s),null,{default:T((()=>[z(C(u),null,{default:T((()=>[z(C(o),{class:"ion-align-items-center ion-justify-content-center"},{default:T((()=>[z(C(a),null,{default:T((()=>[z(C(c),{class:"title-text"},{default:T((()=>[B(M(e.$t("earn.myRewards.date")),1)])),_:1})])),_:1}),z(C(a),null,{default:T((()=>[z(C(c),null,{default:T((()=>[B(M(e.$t("earn.myRewards.rewards")),1)])),_:1})])),_:1})])),_:1})])),_:1}),z(C(d),{class:"reward-content"},{default:T((()=>[z(C(f),null,{default:T((()=>[($(!0),j(V,null,E(n.value,((e,t)=>($(),L(C(g),{key:`reward_${t}`,class:"reward-list",lines:"none"},{default:T((()=>[z(C(o),{class:"ion-align-items-center ion-justify-content-center"},{default:T((()=>[z(C(a),null,{default:T((()=>[B(M(e.day),1)])),_:2},1024),z(C(a),null,{default:T((()=>[B(M(e.rebate),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})]))}},J={class:"rules"},S={class:"rule-icon"},A={class:"rule-marker-text"},K={class:"rule-marker-text"},N={__name:"Rules",setup(e){const{t:t}=F(),n="/testTestTest/",r=[{icon:`${n}earn/rule1.png`,children:[{number:"5 ",text:t("earn.rule.text"),name:t("earn.rule.cashBonus")},{number:"0.5% ",text:t("earn.rule.text"),name:t("earn.rule.cashBalance")}]},{icon:`${n}earn/rule2.png`,children:[{number:"0.3% ",text:t("earn.rule.text"),name:t("earn.rule.cashBalance")}]},{icon:`${n}earn/rule3.png`,children:[{number:"0.2% ",text:t("earn.rule.text"),name:t("earn.rule.cashBonus")}]}],a=[{title:t("earn.rule.tipOneProblem"),text:t("earn.rule.tipOneText")},{title:t("earn.rule.tipTwoProblem"),text:t("earn.rule.tipTwoText")},{title:t("earn.rule.tipThreeProblem"),text:t("earn.rule.tipThreeText")}];return(e,t)=>($(),j("div",J,[z(C(s),{class:"rules-top"},{default:T((()=>[z(C(d),null,{default:T((()=>[z(C(p),{src:`${C(n)}earn/earn-tree.png`,style:{width:"100%",margin:"auto"}},null,8,["src"])])),_:1})])),_:1}),z(C(f),null,{default:T((()=>[($(),j(V,null,E(r,((e,t)=>z(C(g),{key:`rule_${t}`,class:"rule-list",lines:"none"},{default:T((()=>[O("div",S,[z(C(p),{src:e.icon},null,8,["src"]),z(C(p),{class:"rule-segment",src:`${C(n)}account/icon/segmentation.png`},null,8,["src"])]),z(C(i),{class:"rule-text"},{default:T((()=>[($(!0),j(V,null,E(e.children,((e,t)=>($(),j("div",{key:t},[O("span",A,M(e.number),1),O("span",null,M(e.text),1),O("span",K,M(e.name),1)])))),128))])),_:2},1024)])),_:2},1024))),64))])),_:1}),z(C(s),null,{default:T((()=>[($(),j(V,null,E(a,((e,t)=>O("span",{key:t},[z(C(u),null,{default:T((()=>[z(C(c),null,{default:T((()=>[B(M(e.title),1)])),_:2},1024)])),_:2},1024),z(C(d),null,{default:T((()=>[B(M(e.text),1)])),_:2},1024)]))),64))])),_:1})]))}},U={class:"fixed-content"},W="http://www.ainongai0n.com?invite_code=00000db2";e("default",{__name:"Earn",setup(e){const t=R("Rules"),l={MyRewards:I,Rules:N},i=async()=>{await n.share({title:"",text:"",url:W})},d=async()=>{await r.write({url:W});const e=await _.create({message:"Success",duration:1500,position:"middle",translucent:!0,icon:v,color:"success"});await e.present()};return(e,n)=>($(),L(C(y),{class:"earn"},{default:T((()=>[z(C(h),null,{default:T((()=>[z(C(m),null,{default:T((()=>[z(C(x),{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),mode:"ios"},{default:T((()=>[z(C(b),{value:"MyRewards"},{default:T((()=>[B(M(e.$t("earn.header.myRewards")),1)])),_:1}),z(C(b),{value:"Rules"},{default:T((()=>[B(M(e.$t("earn.header.rules")),1)])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),z(C(w),null,{default:T((()=>[($(),L(P,null,[($(),L(D(l[t.value])))],1024)),O("div",U,[z(C(o),{class:"ion-justify-content-evenly"},{default:T((()=>[z(C(a),{size:"2"},{default:T((()=>[B(M(e.$t("earn.footer.myLink"))+":",1)])),_:1}),z(C(a),{size:"8",class:"share-url"},{default:T((()=>[B(M(W))])),_:1}),z(C(a),{size:"2"},{default:T((()=>[O("div",{class:"btn-copy",onClick:d},M(e.$t("earn.footer.copy")),1)])),_:1})])),_:1}),O("div",{class:"btn-share",onClick:i},[z(C(p),{src:`${C("/testTestTest/")}earn/share-icon.png`,style:{height:"80%","margin-right":"12px"}},null,8,["src"]),O("span",null,M(e.$t("earn.footer.share")),1)])])])),_:1})])),_:1}))}})}}}));
