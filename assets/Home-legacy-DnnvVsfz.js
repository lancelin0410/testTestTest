System.register(["./@ionic-legacy-CdgF_T6b.js","./index-legacy-C_ll2muB.js","./Marquee-legacy-D7GCgvc-.js","./UserInfo-legacy-D3rafThc.js","./@vue-legacy-D6coodBY.js","./vue-router-legacy-f55MWKZg.js","./pinia-legacy-C_Ccd9rn.js","./useMailStore-legacy-BBDe5et6.js","./swiper-legacy-CVdaogR7.js","./@stencil-legacy-B3F1rWbF.js","./@capacitor-legacy-DN4LNBqm.js","./localforage-legacy-D0pVUvDl.js","./@adjustcom-legacy-QP0zxLxB.js","./vue-i18n-legacy-Dfssw_XK.js","./@intlify-legacy-DDHA1rkh.js","./pinia-plugin-persistedstate-2-legacy-CtlOhiZd.js","./@awesome-cordova-plugins-legacy-CuOL20OL.js","./rxjs-legacy-C12cs3ed.js","./tslib-legacy-BRpw1qYg.js"],(function(e,a){"use strict";var t,i,l,s,o,n,m,r,g,c,u,d,p,f,h,y,v,b,w,x,L,_,G,k,j,I,S,z,U,D,T,C,F,$,K,N,R,M,P,V,A,q,H,B,E,O,W,J,Q,X,Y,Z,ee,ae,te;return{setters:[e=>{t=e.d,i=e.t,l=e.x,s=e.y,o=e.z,n=e.h,m=e.A,r=e.B,g=e.C,c=e.D,u=e.i,d=e.o},e=>{p=e.g,f=e.a,h=e.b,y=e.c,v=e.u,b=e.d,w=e.s,x=e.e,L=e.f,_=e.h,G=e.i,k=e.j},e=>{j=e._},e=>{I=e._},e=>{S=e.r,z=e.c,U=e.G,D=e.J,T=e.L,C=e.B,F=e.D,$=e.H,K=e.P,N=e.S,R=e.U,M=e.O,P=e.A,V=e.j,A=e.I,q=e.F,H=e.K,B=e.M,E=e.N,O=e.V,W=e.W},e=>{J=e.b},e=>{Q=e.d},e=>{X=e._,Y=e.u},e=>{Z=e.S,ee=e.A,ae=e.P,te=e.a},null,null,null,null,null,null,null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent=".game-item{position:relative;height:100%;width:100%;display:flex;flex-direction:column}.game-item .game-image{flex:5;height:80%;width:100%;margin-bottom:2px;border-radius:12px;overflow:hidden;filter:drop-shadow(0 3px 2px #FDF062)}.game-item .game-image ion-img.game-icon{width:100%;min-height:10vh}.game-item .game-image ion-img.game-icon::part(image){aspect-ratio:1/1;object-fit:cover}.game-item .game-image.large{height:100%}.game-item .game-image.large ion-img.game-icon::part(image){aspect-ratio:auto}.game-item .game-image ion-img.game-tag{position:absolute;top:6px;left:0;width:38px;z-index:1}.game-item .game-image .game-collect{position:absolute;top:6px;right:6px;z-index:1}.game-item .game-name{flex:1;text-align:center;font-size:.7rem;padding-top:2px}.game-list,.game-list ion-grid,.game-list ion-row.ion-justify-content-start{position:relative;height:100%;width:100%;padding:0;margin:0}.game-list .game-menu{position:relative;height:100%;overflow-y:scroll;display:flex;flex-direction:column}.game-list .game-menu .game-label{position:relative;margin-bottom:4px}.game-list .game-menu .game-label .game-img{position:relative}.game-list .games{height:100%;overflow-y:scroll}.game-sub,.game-sub ion-grid,.game-sub ion-row.ion-justify-content-start{position:relative;width:100%;padding:0;margin:0;overflow-y:scroll}.home{position:relative;height:100%;padding:16px 8px 0}.home .activity-icon{position:relative;width:35px}.home .activity-icon:not(:last-child){margin-right:12px}.home .activity-icon ion-img::part(image){position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.home .activity-icon .activity-icon-tag{display:block;--background: red;min-width:12px;min-height:12px;padding:0;border-radius:50%;position:absolute;top:0;right:0;transform:translate(50%,-50%)}.home .swiper{position:relative;width:100%}.home .swiper .swiper-pagination-bullet{--bullet-background: #fff;--bullet-background-active: #fff;--swiper-pagination-bullet-inactive-opacity: .5;border:1px solid #333}.home .user-info .item-button{display:flex;flex-direction:column;align-items:center;margin-left:16px;font-size:.6rem;font-weight:500}.home .user-info .item-button ion-img{width:34px;height:34px}.home ion-segment.md{min-height:5vh;margin-bottom:8px}.home ion-segment.md ion-segment-button.md{min-height:4vh}.home ion-segment.md ion-segment-button.md::part(native){color:#fff;font-size:.9rem;font-weight:500}.home ion-segment.md ion-segment-button.md::part(indicator-background){height:2px;background:#ffdf3f}.home ion-segment.md .segment-button-checked.md::part(native){color:#ffdf3f}.home .bottom-view{position:relative;height:100%}\n",document.head.appendChild(a);const ie=Q("game",(()=>{const e=S([]),a=S([]),t=S([]),i=S([]),l=S([]),s=S([]);return{favoriteGameList:e,getFavoriteGames:async()=>{const a=await p();"200"===a.state&&(e.value=a.resultData||[])},recentGameList:a,getRecentGames:async()=>{const e=await f();"200"===e.state&&(a.value=e.resultData||[])},recentSearches:t,popularSearches:i,hotGameList:l,recommendGameList:s,getGameSearchData:async()=>{const e=await h();return e.state,200===code&&e&&(t.value=e.resultData.recentSearches||[],i.value=e.resultData.popularSearches||[],a.value=e.resultData.recentGameList||[],l.value=e.resultData.hotGameList||[],s.value=e.resultData.recommendGameList||[]),!0}}}),{persistedState:{persist:!1}}),le={key:0,class:"game-name"},se={__name:"GameItem",props:{game:{type:Object,require:!0}},setup(e){const{getPublicUrl:a}=v(),l=e,s=J(),o=y(),n=ie(),m=async()=>{if(2==l.game.iconType);else{o.fullLoading=!0;const e=l.game.gameId||l.game.id,a=await b({gameId:e});if("200"===a.state){const t=Capacitor.convertFileSrc(a.resultData);await n.getRecentGames(),s.push({name:"GameWeb",query:{gameId:e,url:encodeURIComponent(t)}})}else{const e=await i.create({message:a.msg,duration:1500,position:"top",color:"danger",translucent:!0});await e.present()}o.fullLoading=!1}},r=z((()=>n.favoriteGameList.filter((e=>e.gameId==l.game.gameId||e.gameId==l.game.id)).length>0)),g=async()=>{if(2==l.game.iconType);else{o.fullLoading=!0;const e=l.game.gameId||l.game.id,a=await w({gameId:e,opt:r.value?2:1});if("200"===a.state)n.getFavoriteGames();else{const e=await i.create({message:a.msg,duration:1500,position:"top",color:"danger",translucent:!0});await e.present()}o.fullLoading=!1}};return(i,l)=>(U(),D("div",{class:"game-item",onClick:N(m,["stop"])},[T("div",{class:R(["game-image",{large:2==e.game.imageSize}])},[C(F(t),{class:"game-icon",src:e.game.imageUrl},null,8,["src"]),1==e.game.cornerMark?(U(),$(F(t),{key:0,class:"game-tag",src:F(a)("/home/icon-new.png")},null,8,["src"])):K("",!0),2==e.game.cornerMark?(U(),$(F(t),{key:1,class:"game-tag",src:F(a)("/home/icon-best.png")},null,8,["src"])):K("",!0),2!=e.game.iconType?(U(),D("div",{key:2,class:"game-collect",onClick:N(g,["stop"])},[r.value?(U(),$(F(t),{key:0,src:F(a)("/home/icon-collection-select.png"),style:{width:"24px",height:"24px"}},null,8,["src"])):(U(),$(F(t),{key:1,src:F(a)("/home/icon-collection-normal.png"),style:{width:"24px",height:"24px"}},null,8,["src"]))])):K("",!0)],2),2!=e.game.imageSize?(U(),D("div",le,M(e.game.name),1)):K("",!0)]))}},oe=["onClick"],ne={__name:"GameList",setup(e){const a=y(),{preLoadImg:m}=_(),r=S(1),g=S([]);let c=!1;P((async()=>await p()));const u=V({}),d=V({}),p=async()=>{const e=await x();if("200"===e.state){g.value=e.resultData.labelList||[],r.value=Number(g.value[0].labelId);const t=e.resultData.firstLabelGameList,i=e.resultData.categoryList;g.value[0].gameList=e.resultData.gameAndCategoryList.map((e=>{if(1==e.iconType){const a=t.filter((a=>a.status&&a.gameId==e.id));e.name=a.length>0?a[0].gameName:""}if(2==e.iconType){const a=i.filter((a=>a.categoryId==e.id));e.name=a.length>0?a[0].categoryName:""}return e}));for(const[e,a]of g.value[0].gameList.entries())e<=12&&await m(a.imageUrl);a.startLoading=!1;for(const[e,a]of g.value.entries())m(a.imageUrlSelected),m(a.imageUrlUnselected),e>0&&(a.gameList=await f(a.labelId),a.gameList.forEach((e=>m(e.imageUrl))))}else{const a=await i.create({message:e.msg,duration:1500,position:"top",color:"danger",translucent:!0});await a.present()}},f=async e=>{const a=await L({labelId:e});if("200"===a.state){const e=a.resultData.gameList.filter((e=>e.status))||[];return a.resultData.gameAndCategoryList.map((a=>{const t=e.filter((e=>e.status&&e.gameId==a.id));return a.name=t.length>0?t[0].gameName:"",a})).filter((e=>e.imageUrl))}{const e=await i.create({message:a.msg,duration:1500,position:"top",color:"danger",translucent:!0});return await e.present(),[]}},h=e=>{if(c){const a=u[r.value].$el.offsetTop,t=a+u[r.value].$el.offsetHeight;a<=e.target.scrollTop&&e.target.scrollTop<=t&&(c=!1)}else for(const a in u)u[a].$el.offsetTop<=e.target.scrollTop&&(r.value=Number(a),d[a].scrollIntoView())};return(e,a)=>(U(),$(F(n),{class:"game-list"},{default:A((()=>[C(F(l),null,{default:A((()=>[C(F(s),{class:"ion-justify-content-start"},{default:A((()=>[C(F(o),{class:"game-menu",size:"2.2"},{default:A((()=>[(U(!0),D(q,null,H(g.value,(e=>(U(),D("div",{ref_for:!0,ref:a=>d[e.labelId]=a,key:e.labelId,class:"game-label",onClick:a=>{return t=e.labelId,c=!0,r.value=Number(t),void u[t].$el.scrollIntoView({behavior:"smooth"});var t}},[C(B,{name:"fade"},{default:A((()=>[r.value==Number(e.labelId)?(U(),$(F(t),{key:0,src:e.imageUrlSelected,class:"game-img"},null,8,["src"])):(U(),$(F(t),{key:1,src:e.imageUrlUnselected,class:"game-img"},null,8,["src"]))])),_:2},1024)],8,oe)))),128))])),_:1}),C(F(o),{size:"9.8",class:"games",onScroll:h},{default:A((()=>[(U(!0),D(q,null,H(g.value,(e=>(U(),$(F(s),{ref_for:!0,ref:a=>u[e.labelId]=a,key:e.labelId},{default:A((()=>[(U(!0),D(q,null,H(e.gameList,(e=>(U(),$(F(o),{size:2==e.imageSize?12:3==e.imageSize?8:4},{default:A((()=>[C(se,{game:e},null,8,["game"])])),_:2},1032,["size"])))),256))])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1}))}},me={__name:"GameSub",props:{gameKey:{type:String,require:!0}},setup(e){const a=e,t=y(),i=ie(),{preLoadImg:m}=_();return P((async()=>{t.fullLoading=!0,"recentGameList"==a.gameKey&&await i.getRecentGames(),"favoriteGameList"==a.gameKey&&await i.getFavoriteGames();for(const[e,t]of i[a.gameKey].entries())e<=16?await m(t.imageUrl):m(t.imageUrl);t.fullLoading=!1})),(a,t)=>(U(),$(F(n),{class:"game-sub"},{default:A((()=>[F(i)[e.gameKey].length>0?(U(),$(F(l),{key:0},{default:A((()=>[C(F(s),{class:"ion-justify-content-start"},{default:A((()=>[(U(!0),D(q,null,H(F(i)[e.gameKey],(e=>(U(),$(F(o),{size:"3"},{default:A((()=>[C(se,{game:e},null,8,["game"])])),_:2},1024)))),256))])),_:1})])),_:1})):(U(),$(X,{key:1,class:"no-data"}))])),_:1}))}},re={key:0,class:"activity-icon"},ge={class:"activity-icon"},ce={class:"item-button"},ue={class:"item-button"};e("default",{__name:"Home",setup(e){const a=y(),p=Y(),f=G(),{getPublicUrl:h}=v(),{preLoadImg:b}=_(),w=S("GameList"),x={GameList:ne,GameRecent:me,GameFavorite:me},L={GameList:null,GameRecent:"recentGameList",GameFavorite:"favoriteGameList"},z=S([]);return P((async()=>{await(async()=>{const e=await k();if("200"===e.state)z.value=e.resultData.bannerList||[];else{const a=await i.create({message:e.msg,duration:1500,position:"top",color:"danger",translucent:!0});await a.present()}})();for(const[e,a]of z.value.entries())e<=1&&await b(a.imageUrl);await p.getMailList()})),(e,i)=>(U(),$(F(n),{class:"home"},{default:A((()=>[C(F(u),null,{default:A((()=>[C(F(l),{style:{padding:"0"}},{default:A((()=>[C(F(s),{class:"ion-justify-content-between"},{default:A((()=>[C(F(o),{size:"6"},{default:A((()=>[C(F(t),{src:F(a).imgLogo.headerLogo,style:{width:"100%",margin:"auto"}},null,8,["src"])])),_:1}),C(F(o),{size:"auto",style:{display:"flex"}},{default:A((()=>[F(f).isShowTurnplate?(U(),D("div",re,[C(F(t),{src:F(h)("/home/icon-home-game.png")},null,8,["src"]),F(f).turnplate.totalRemainTimes>0?(U(),$(F(m),{key:0,'"':"",class:"activity-icon-tag"},{default:A((()=>[E(M(F(f).turnplate.totalRemainTimes||10),1)])),_:1})):K("",!0)])):K("",!0),T("div",ge,[C(F(t),{src:F(h)("/home/icon-mail.png"),"router-link":"/account/mail"},null,8,["src"]),F(p).hasUnread?(U(),$(F(m),{key:0,class:"activity-icon-tag"})):K("",!0)])])),_:1})])),_:1})])),_:1}),C(F(Z),{modules:[F(ee),F(ae),F(r)],centeredSlides:!0,pagination:{clickable:!0},autoplay:{delay:3e3},loop:!0,lazyPreloadPrevNext:1},{default:A((()=>[(U(!0),D(q,null,H(z.value,((e,a)=>(U(),$(F(te),{key:`banner_${a}`},{default:A((()=>[C(F(t),{src:e.imageUrl,loading:"lazy"},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["modules"]),C(j),C(I,{class:"user-info"},{default:A((()=>[T("div",ce,[C(F(t),{src:F(h)("/home/icon-deposit.png"),style:{height:"100%","margin-bottom":"5px"}},null,8,["src"]),T("div",null,M(e.$t("home.deposit")),1)]),T("div",ue,[C(F(t),{src:F(h)("/home/icon-withdraw.png"),style:{height:"100%","margin-bottom":"5px"}},null,8,["src"]),T("div",null,M(e.$t("home.withdraw")),1)])])),_:1}),C(F(g),{modelValue:w.value,"onUpdate:modelValue":i[0]||(i[0]=e=>w.value=e),mode:"md"},{default:A((()=>[C(F(c),{class:"ion-text-capitalize",value:"GameList"},{default:A((()=>[E(M(e.$t("home.allgames")),1)])),_:1}),C(F(c),{class:"ion-text-capitalize",value:"GameRecent"},{default:A((()=>[E(M(e.$t("home.recent")),1)])),_:1}),C(F(c),{class:"ion-text-capitalize",value:"GameFavorite"},{default:A((()=>[E(M(e.$t("home.favorite")),1)])),_:1})])),_:1},8,["modelValue"])])),_:1}),C(F(d),null,{default:A((()=>[(U(),$(O,{exclude:"GameSub"},[(U(),$(W(x[w.value]),{class:"bottom-view",gameKey:L[w.value]},null,8,["gameKey"]))],1024))])),_:1})])),_:1}))}})}}}));
