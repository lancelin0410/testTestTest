System.register(["./@vue-legacy-CF-u1Xlm.js","./@ionic-legacy-CJRJ39Iz.js","./vue-router-legacy-CEeKFIz6.js","./index-legacy-DHrZV9se.js"],(function(e,n){"use strict";var s,o,i,r,t,l,u,a,c,f,d,p,m,g,y,h;return{setters:[e=>{s=e.G,o=e.J,i=e.B,r=e.I,t=e.D,l=e.L,u=e.O,a=e.S,c=e.Y},e=>{f=e.z,d=e.d,p=e.y},e=>{m=e.u},e=>{g=e.c,y=e.l,h=e.u}],execute:function(){var n=document.createElement("style");n.textContent=".user-info{width:96vw}.user-info .user-info-col{display:flex;flex-direction:column;justify-content:space-evenly}.user-info .user-info-col .user-name{display:inline-block;text-align:left;font-weight:700;font-size:1.1rem}.user-info .user-info-col .user-name .vip-badge{background-color:#e79928;border-radius:16px;font-size:.7rem;line-height:20px;font-weight:700;padding:2px 8px;margin-left:8px}.user-info .user-info-col .user-money{position:relative;display:flex;align-items:center;justify-content:space-between;background-color:rgba(0,0,0,.6);min-width:50%;max-width:140px;height:30px;padding:4px 8px;margin-top:4px;border-radius:15px}.user-info .user-info-col .user-money .user-money-icon{position:relative;height:24px}.user-info .user-info-col .user-money .user-money-icon ion-img{height:100%;aspect-ratio:1/1}.user-info .user-info-col .user-money .user-money-icon .user-money-sign{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#000;text-align:center;line-height:24px;font-size:.7rem}.user-info .user-info-col .user-money .amount{color:#ffde01;font-weight:600;font-size:1rem;padding:0 8px}.user-info .user-info-col .user-money .icon-refresh{height:60%;aspect-ratio:1/1;color:red}\n",document.head.appendChild(n);const x={class:"user-info"},v={class:"user-name"},b={key:0},I={key:1},w={class:"vip-badge"},j={class:"user-money"},z={class:"user-money-icon"},k={class:"user-money-sign"},_={class:"amount"};e("_",{__name:"UserInfo",setup(e){const n=m(),L=g(),C=y(),{getPublicUrl:D}=h(),U=async()=>{L.fullLoading=!0,await C.getUserTotalInfo(),L.fullLoading=!1};return(e,m)=>(s(),o("div",x,[i(t(p),{class:"ion-justify-content-around"},{default:r((()=>[i(t(f),{size:"2",style:{height:"100%"}},{default:r((()=>[i(t(d),{src:t(D)("/home/icon-avatar.png")},null,8,["src"])])),_:1}),i(t(f),{size:"6",class:"user-info-col"},{default:r((()=>[l("div",v,["Home"==t(n).name?(s(),o("span",b,"ID: "+u(t(C).userInfo.id),1)):(s(),o("span",I,u(t(C).userInfo.nikeName)+"(ID: "+u(t(C).userInfo.id)+") ",1)),l("span",w,u(t(C).vipInfo.vipLevel),1)]),l("div",j,[l("div",z,[i(t(d),{src:t(D)("/home/icon-coin.png")},null,8,["src"]),l("div",k,u(t("Rs")),1)]),l("div",_,u(Number(t(C).userInfo.totalAssets).toFixed(2)),1),i(t(d),{class:"icon-refresh",src:t(D)("/home/icon-refresh.png"),onClick:a(U,["stop"])},null,8,["src"])])])),_:1}),i(t(f),{size:"4",style:{display:"flex","justify-content":"flex-end"}},{default:r((()=>[c(e.$slots,"default")])),_:3})])),_:3})]))}})}}}));
