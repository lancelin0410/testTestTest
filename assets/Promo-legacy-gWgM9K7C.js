System.register(["./@ionic-legacy-DPSKJYXl.js","./index-legacy-BfwNR54Q.js","./@vue-legacy-Bd-ybgzA.js","./@stencil-legacy-B3F1rWbF.js","./@capacitor-legacy-DN4LNBqm.js","./vue-router-legacy-D1r9FOl6.js","./ionicons-legacy-DYh71j0f.js","./localforage-legacy-D0pVUvDl.js","./@adjustcom-legacy-QP0zxLxB.js","./pinia-legacy-Dm_oCeSh.js","./vue-i18n-legacy-C-H4GryL.js","./@intlify-legacy-DDHA1rkh.js","./pinia-plugin-persistedstate-2-legacy-CtlOhiZd.js","./@awesome-cordova-plugins-legacy-CuOL20OL.js","./rxjs-legacy-C12cs3ed.js","./tslib-legacy-BRpw1qYg.js"],(function(t,l){"use strict";var e,o,n,i,u,a,r,m,s,c,d,p,g,f,y,_,h,j,x,v,L,w,$,C,b,P,z,U,k,I,T,V,B,E,F,H,J;return{setters:[t=>{e=t.q,o=t.d,n=t.h,i=t.z,u=t.A,a=t.B,r=t.E,m=t.F,s=t.G,c=t.H,d=t.J,p=t.j,g=t.n,f=t.o,y=t.i},t=>{_=t.c,h=t.i,j=t.u},t=>{x=t.B,v=t.j,L=t.H,w=t.I,$=t.J,C=t.a,b=t.C,P=t.E,z=t.K,U=t.F,k=t.L,I=t.S,T=t.O,V=t.P,B=t.M,E=t.V,F=t.r,H=t.X,J=t.Y},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent=".promo-list{position:relative;height:100%;padding:16px 8px 0}.promo-list ion-img{margin-bottom:12px}.community{position:relative;height:100%;padding:16px 8px 0}.community ion-card{padding:8px 0}.community ion-card ion-card-header{padding:8px 16px}.community ion-card ion-card-header ion-card-title{color:#fff;font-size:1.2rem}.community ion-card ion-card-content{color:#fa8484;font-size:1rem}.community .btn-join{position:sticky;bottom:12px;margin:auto;display:flex;align-items:center;justify-content:center;font-size:1rem;width:90%;height:40px;background:linear-gradient(90deg,#f78d22,#e34e04);border-radius:20px}.promo{padding:16px 8px 0}\n",document.head.appendChild(l);const N={__name:"PromoList",setup(t){const l=_(),i=h(),{preLoadImg:u}=j();x((async()=>{l.fullLoading=!0,await i.getPromoInfo();for(const[t,l]of i.promoList.entries())t<=3?await u(l.picUrl):u(l.picUrl);l.fullLoading=!1}));const a=v({});return(t,u)=>(L(),w(P(n),{class:"promo-list"},{default:$((()=>[C(b(P(e),null,{default:$((()=>[(L(!0),z(U,null,k(P(i).promoList,(t=>(L(),w(P(o),{ref_for:!0,ref:l=>a[t.id]=l,key:t.id,src:t.picUrl},null,8,["src"])))),128))])),_:1},512),[[I,!P(l).fullLoading]])])),_:1}))}},S={__name:"Community",setup(t){const l=_(),p=h(),{getImgUrl:g}=j(),f=()=>{window.open(p.community.joinNowLink)};return(t,y)=>(L(),w(P(n),{class:"community"},{default:$((()=>[b(P(e),null,{default:$((()=>[b(P(i),{style:{padding:"0"}},{default:$((()=>[b(P(u),{class:"ion-align-items-center"},{default:$((()=>[b(P(a),{size:"6"},{default:$((()=>[b(P(o),{src:P(l).imgLogo.headerLogo,style:{width:"100%",margin:"auto"}},null,8,["src"])])),_:1}),b(P(a),{size:"auto"},{default:$((()=>[b(P(r),null,{default:$((()=>[T(V(t.$t("promo.header.community")),1)])),_:1})])),_:1})])),_:1})])),_:1}),b(P(m),null,{default:$((()=>[b(P(s),null,{default:$((()=>[b(P(c),null,{default:$((()=>[T(V(t.$t("promo.community.oneTitle")),1)])),_:1})])),_:1}),b(P(d),null,{default:$((()=>[T(V(t.$t("promo.community.oneContent"))+" "+V(P("Rs"))+V(P(p).community.rewordBonus),1)])),_:1}),b(P(s),null,{default:$((()=>[b(P(c),null,{default:$((()=>[T(V(t.$t("promo.community.twoTitle")),1)])),_:1})])),_:1}),b(P(d),null,{default:$((()=>[T(V(t.$t("promo.community.twoContent")),1)])),_:1}),b(P(s),null,{default:$((()=>[b(P(c),null,{default:$((()=>[T(V(t.$t("promo.community.threeTitle")),1)])),_:1})])),_:1}),b(P(d),null,{default:$((()=>[T(V(t.$t("promo.community.threeContent")),1)])),_:1}),b(P(s),null,{default:$((()=>[b(P(c),null,{default:$((()=>[T(V(t.$t("promo.community.foreTitle")),1)])),_:1})])),_:1}),b(P(d),null,{default:$((()=>[T(V(t.$t("promo.community.foreContent")),1)])),_:1})])),_:1}),B("div",{class:"btn-join",onClick:E(f,["stop"])},[b(P(o),{src:P(g)("/promo/tg.png"),style:{height:"80%","margin-right":"12px"}},null,8,["src"]),B("span",null,V(t.$t("promo.button.joinNow")),1)])])),_:1})])),_:1}))}};t("default",{__name:"Promo",setup(t){const{getImgUrl:l}=j(),e=F("PromoList"),i={PromoList:N,Community:S};return(t,u)=>(L(),w(P(n),{class:"promo"},{default:$((()=>[b(P(y),null,{default:$((()=>[b(P(p),null,{default:$((()=>[b(P(g),{modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=t=>e.value=t),mode:"ios"},{default:$((()=>[b(P(f),{value:"PromoList"},{default:$((()=>[T(V(t.$t("promo.header.promo")),1)])),_:1}),b(P(f),{value:"Community"},{default:$((()=>[T(V(t.$t("promo.header.community")),1)])),_:1})])),_:1},8,["modelValue"]),b(P(o),{slot:"end",src:P(l)("/promo/dh-icon.png"),style:{width:"34px",height:"34px"}},null,8,["src"])])),_:1})])),_:1}),(L(),w(H,null,[(L(),w(J(i[e.value])))],1024))])),_:1}))}})}}}));
