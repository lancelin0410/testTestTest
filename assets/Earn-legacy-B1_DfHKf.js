System.register(["./index-legacy-CMBovBQk.js","./index-legacy-CnnUhyXd.js"],(function(e,t){"use strict";var a,r,n,i,l,o,d,s,u,c,p,f,g,b,m,x,h,w,y,v,_,k,R,T,z,$,C,j,B,I,A,P,S,D,E,M,V,W;return{setters:[e=>{a=e.a8,r=e.a9,n=e.aa,i=e.q,l=e.r,o=e.o,d=e.e,s=e.h,u=e.y,c=e.i,p=e.B,f=e.ab,g=e.K,b=e.t,m=e.Q,x=e.A,h=e.V,w=e.R,y=e.f,v=e.S,_=e.U,k=e.ac,R=e.F,T=e.C,z=e.j,$=e.ad,C=e.ae,j=e.I,B=e.W,I=e.H,A=e.J,P=e.L,S=e.X,D=e.M,E=e.N,M=e.D,V=e.m},e=>{W=e.c}],execute:function(){var F=document.createElement("style");F.textContent='.reward{position:relative;padding:16px 8px 0}.reward .count-item{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:center;height:7vh;padding:0 20px;font-size:1rem;font-weight:700}.reward .count-item.left{background:url(/testTestTest/earn/rewards-top1.png);background-size:100% 100%}.reward .count-item.right{background:url(/testTestTest/earn/rewards-top2.png);background-size:100% 100%}.reward ion-card{--ion-background-color: var(--ion-background-light-color);padding:0;margin:16px 0}.reward ion-card ion-card-header{padding:8px 16px;border-bottom:2px solid #210403}.reward ion-card ion-card-header ion-card-title{font-size:1.2rem;text-align:center}.reward ion-card ion-card-content{color:#fd5959;font-size:.9rem;padding:8px 16px}.reward ion-card ion-card-content .btn-claim{position:absolute;top:50%;right:12px;transform:translateY(-50%);width:18%;color:#fff;line-height:24px;text-align:center;padding:0 2px;background:linear-gradient(0deg,#32b12f,#10740b);border-radius:16px}.reward ion-card ion-card-content.reward-content{height:44vh;overflow-y:scroll}.reward ion-card ion-card-content.reward-content .reward-list ion-row{width:100%;text-align:center}.rules{position:relative;padding:16px 8px 0}.rules ion-card{padding:4px;margin:0}.rules ion-card ion-card-header{padding:4px}.rules ion-card ion-card-header ion-card-title{font-size:.8rem;color:#fff}.rules ion-card ion-card-content{color:#fa8484;font-size:.7rem;padding:4px 0}.rules ion-card.rules-top{--ion-background-color: var(--ion-background-light-color)}.rules .rule-list{position:relative;width:100%;margin:8px 0;padding:0;border-radius:10px}.rules .rule-list::part(native){height:6vh}.rules .rule-list .rule-icon{position:relative;height:60%;display:flex}.rules .rule-list .rule-icon .rule-segment{height:100%;margin:0 8px}.rules .rule-list .rule-text{font-size:.7rem;width:100%;padding:0}.rules .rule-list .rule-text>div:before{display:inline-block;content:"";transform:translate(-50%,-50%);background-color:#fa4c49;width:3px;height:3px;border-radius:50%;margin-left:0;margin-right:4px}.rules .rule-list .rule-text .rule-marker-text{color:#ffdf3f}.earn{position:relative;height:100%;padding:16px 8px 0}.earn ion-segment{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:80%;height:40px;background:#610606;border-radius:20px}.earn ion-segment ion-segment-button.ios::part(native){color:#fd5959;font-size:1.2rem;font-weight:700}.earn ion-segment .segment-button-checked.ios::part(native){color:#fff}.earn ion-segment ion-segment-button.ios::part(indicator-background){border-radius:20px;background:linear-gradient(0deg,#fa4c49,#9a130c)}.earn .fixed-content{position:sticky;bottom:0;margin:12px auto auto;display:flex;flex-direction:column;align-items:center;width:100%;padding:12px 8px}.earn .fixed-content ion-row{position:relative;width:100%;font-size:.8rem;align-items:center;padding:4px;margin-bottom:12px;text-align:center;border-radius:8px;background-color:var(--ion-background-color)}.earn .fixed-content ion-row .share-url{background-color:#3d0303;border-radius:5px;margin:4px 0}.earn .fixed-content ion-row .btn-copy{line-height:32px;text-align:center;padding:0 2px;background:linear-gradient(0deg,#32b12f,#10740b);border-radius:16px}.earn .fixed-content .btn-share{display:flex;align-items:center;justify-content:center;font-size:1rem;width:90%;height:40px;background:linear-gradient(90deg,#f78d22,#e34e04);border-radius:20px}\n',document.head.appendChild(F);const L=a("Share",{web:()=>r((()=>t.import("./web-legacy-WBWZlQQL.js")),void 0).then((e=>new e.ShareWeb))});class O extends n{async write(e){if("undefined"==typeof navigator||!navigator.clipboard)throw this.unavailable("Clipboard API not available in this browser");if(void 0!==e.string)await this.writeText(e.string);else if(e.url)await this.writeText(e.url);else{if(!e.image)throw new Error("Nothing to write");if("undefined"==typeof ClipboardItem)throw this.unavailable("Writing images to the clipboard is not supported in this browser");try{const t=await(await fetch(e.image)).blob(),a=new ClipboardItem({[t.type]:t});await navigator.clipboard.write([a])}catch(t){throw new Error("Failed to write image")}}}async read(){if("undefined"==typeof navigator||!navigator.clipboard)throw this.unavailable("Clipboard API not available in this browser");if("undefined"==typeof ClipboardItem)return this.readText();try{const e=await navigator.clipboard.read(),t=e[0].types[0],a=await e[0].getType(t);return{value:await this._getBlobData(a,t),type:t}}catch(e){return this.readText()}}async readText(){if("undefined"==typeof navigator||!navigator.clipboard||!navigator.clipboard.readText)throw this.unavailable("Reading from clipboard not supported in this browser");return{value:await navigator.clipboard.readText(),type:"text/plain"}}async writeText(e){if("undefined"==typeof navigator||!navigator.clipboard||!navigator.clipboard.writeText)throw this.unavailable("Writting to clipboard not supported in this browser");await navigator.clipboard.writeText(e)}_getBlobData(e,t){return new Promise(((a,r)=>{const n=new FileReader;t.includes("image")?n.readAsDataURL(e):n.readAsText(e),n.onloadend=()=>{const e=n.result;a(e)},n.onerror=e=>{r(e)}}))}}const U=a("Clipboard",{web:()=>new O}),N={class:"reward"},q={class:"btn-claim"},H={__name:"MyRewards",setup(e){const t=i({inviteCount:0,availableRebate:0,todayRebate:0,totalRebate:0}),a=l([]);return(e,r)=>(o(),d("div",N,[s(c(x),{class:"ion-justify-content-between"},{default:u((()=>[s(c(p),{class:"count-item left",size:"5.6"},{default:u((()=>[s(c(f),null,{default:u((()=>[g(b(e.$t("earn.myRewards.rewardToday")),1)])),_:1}),s(c(m),null,{default:u((()=>[g(b(t.todayRebate),1)])),_:1})])),_:1}),s(c(p),{class:"count-item right",size:"5.6"},{default:u((()=>[s(c(f),null,{default:u((()=>[g(b(e.$t("earn.myRewards.totalRewards")),1)])),_:1}),s(c(m),null,{default:u((()=>[g(b(t.todayRebate),1)])),_:1})])),_:1})])),_:1}),s(c(w),null,{default:u((()=>[s(c(h),null,{default:u((()=>[s(c(f),null,{default:u((()=>[g(b(e.$t("earn.myRewards.numberOfInviters"))+":",1)])),_:1}),s(c(m),{style:{color:"#ffffff","margin-left":"12px"}},{default:u((()=>[g(b(t.inviteCount),1)])),_:1})])),_:1})])),_:1}),s(c(w),null,{default:u((()=>[s(c(h),null,{default:u((()=>[s(c(f),null,{default:u((()=>[g(b(e.$t("earn.myRewards.amountAvailable"))+":",1)])),_:1}),s(c(m),{style:{color:"#ffdf3f","margin-left":"12px"}},{default:u((()=>[g(b(t.availableRebate),1)])),_:1}),y("div",q,b(e.$t("earn.myRewards.claim")),1)])),_:1})])),_:1}),s(c(w),null,{default:u((()=>[s(c(v),null,{default:u((()=>[s(c(x),{class:"ion-align-items-center ion-justify-content-center"},{default:u((()=>[s(c(p),null,{default:u((()=>[s(c(_),{class:"title-text"},{default:u((()=>[g(b(e.$t("earn.myRewards.date")),1)])),_:1})])),_:1}),s(c(p),null,{default:u((()=>[s(c(_),null,{default:u((()=>[g(b(e.$t("earn.myRewards.rewards")),1)])),_:1})])),_:1})])),_:1})])),_:1}),s(c(h),{class:"reward-content"},{default:u((()=>[s(c(k),null,{default:u((()=>[(o(!0),d(R,null,T(a.value,((e,t)=>(o(),z(c($),{key:`reward_${t}`,class:"reward-list",lines:"none"},{default:u((()=>[s(c(x),{class:"ion-align-items-center ion-justify-content-center"},{default:u((()=>[s(c(p),null,{default:u((()=>[g(b(e.day),1)])),_:2},1024),s(c(p),null,{default:u((()=>[g(b(e.rebate),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})]))}},J={class:"rules"},K={class:"rule-icon"},Q={class:"rule-marker-text"},X={class:"rule-marker-text"},Y={__name:"Rules",setup(e){const{t:t}=C(),a=[{icon:"/earn/rule1.png",children:[{number:"5 ",text:t("earn.rule.text"),name:t("earn.rule.cashBonus")},{number:"0.5% ",text:t("earn.rule.text"),name:t("earn.rule.cashBalance")}]},{icon:"/earn/rule2.png",children:[{number:"0.3% ",text:t("earn.rule.text"),name:t("earn.rule.cashBalance")}]},{icon:"/earn/rule3.png",children:[{number:"0.2% ",text:t("earn.rule.text"),name:t("earn.rule.cashBonus")}]}],r=[{title:t("earn.rule.tipOneProblem"),text:t("earn.rule.tipOneText")},{title:t("earn.rule.tipTwoProblem"),text:t("earn.rule.tipTwoText")},{title:t("earn.rule.tipThreeProblem"),text:t("earn.rule.tipThreeText")}];return(e,t)=>(o(),d("div",J,[s(c(w),{class:"rules-top"},{default:u((()=>[s(c(h),null,{default:u((()=>[s(c(j),{src:"/earn/earn-tree.png",style:{width:"100%",margin:"auto"}})])),_:1})])),_:1}),s(c(k),null,{default:u((()=>[(o(),d(R,null,T(a,((e,t)=>s(c($),{key:`rule_${t}`,class:"rule-list",lines:"none"},{default:u((()=>[y("div",K,[s(c(j),{src:e.icon},null,8,["src"]),s(c(j),{class:"rule-segment",src:"/account/icon/segmentation.png"})]),s(c(m),{class:"rule-text"},{default:u((()=>[(o(!0),d(R,null,T(e.children,((e,t)=>(o(),d("div",{key:t},[y("span",Q,b(e.number),1),y("span",null,b(e.text),1),y("span",X,b(e.name),1)])))),128))])),_:2},1024)])),_:2},1024))),64))])),_:1}),s(c(w),null,{default:u((()=>[(o(),d(R,null,T(r,((e,t)=>y("span",{key:t},[s(c(v),null,{default:u((()=>[s(c(_),null,{default:u((()=>[g(b(e.title),1)])),_:2},1024)])),_:2},1024),s(c(h),null,{default:u((()=>[g(b(e.text),1)])),_:2},1024)]))),64))])),_:1})]))}},G={class:"fixed-content"},Z="http://www.ainongai0n.com?invite_code=00000db2";e("default",{__name:"Earn",setup(e){const t=l("Rules"),a={MyRewards:H,Rules:Y},r=async()=>{await L.share({title:"",text:"",url:Z})},n=async()=>{await U.write({url:Z});const e=await V.create({message:"Success",duration:1500,position:"middle",translucent:!0,icon:W,color:"success"});await e.present()};return(e,i)=>(o(),z(c(M),{class:"earn"},{default:u((()=>[s(c(P),null,{default:u((()=>[s(c(B),null,{default:u((()=>[s(c(I),{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),mode:"ios"},{default:u((()=>[s(c(A),{value:"MyRewards"},{default:u((()=>[g(b(e.$t("earn.header.myRewards")),1)])),_:1}),s(c(A),{value:"Rules"},{default:u((()=>[g(b(e.$t("earn.header.rules")),1)])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),s(c(E),null,{default:u((()=>[(o(),z(S,null,[(o(),z(D(a[t.value])))],1024)),y("div",G,[s(c(x),{class:"ion-justify-content-evenly"},{default:u((()=>[s(c(p),{size:"2"},{default:u((()=>[g(b(e.$t("earn.footer.myLink"))+":",1)])),_:1}),s(c(p),{size:"8",class:"share-url"},{default:u((()=>[g(b(Z))])),_:1}),s(c(p),{size:"2"},{default:u((()=>[y("div",{class:"btn-copy",onClick:n},b(e.$t("earn.footer.copy")),1)])),_:1})])),_:1}),y("div",{class:"btn-share",onClick:r},[s(c(j),{src:"/earn/share-icon.png",style:{height:"80%","margin-right":"12px"}}),y("span",null,b(e.$t("earn.footer.share")),1)])])])),_:1})])),_:1}))}})}}}));
