import{d as ve,r as F,g as he,a as be,b as Le,u as Ce,c as pe,e as we,o as y,f as O,h as V,i as h,j as s,I as B,k as G,l as q,w as re,n as Se,t as H,m as $e,p as W,s as Ie,q as se,v as oe,x as Te,y as _e,z as C,A as ie,B as ee,C as j,F as J,D as Q,T as Ge,E as ne,G as xe,H as De,J as ce,K as Z,L as ke,M as ae,N as Me,O as Ee,P as Be,Q as ze}from"./index-Bz0nnWdi.js";import{_ as Ae}from"./Marquee-CVEGkND7.js";import{_ as Fe}from"./UserInfo-BObBY7qB.js";import{_ as Oe,u as Pe}from"./useMailStore-DkIp5xqy.js";import{e as Ne,c as Re,m as N,a as Ue,b as ue,d as He,g as te,S as qe,I as Ke,f as Ve}from"./ionic-swiper-BR7zrmLg.js";import"./index-fvtpETuL.js";const de=ve("game",()=>{const f=F([]),e=async()=>{const p=await he();p.state==="200"&&(f.value=p.resultData||[])},o=F([]),c=async()=>{const p=await be();p.state==="200"&&(o.value=p.resultData||[])},i=F([]),n=F([]),w=F([]),$=F([]);return{favoriteGameList:f,getFavoriteGames:e,recentGameList:o,getRecentGames:c,recentSearches:i,popularSearches:n,hotGameList:w,recommendGameList:$,getGameSearchData:async()=>{const p=await Le();return p.state,code===200&&p&&(i.value=p.resultData.recentSearches||[],n.value=p.resultData.popularSearches||[],o.value=p.resultData.recentGameList||[],w.value=p.resultData.hotGameList||[],$.value=p.resultData.recommendGameList||[]),!0}}}),je={key:0,class:"game-name"},fe={__name:"GameItem",props:{game:{type:Object,require:!0}},setup(f){const e="/testTestTest/",o=f,c=Ce(),i=pe(),n=de(),w=async()=>{if(o.game.iconType!=2){i.fullLoading=!0;const p=o.game.gameId||o.game.id,u=await $e({gameId:p});if(u.state==="200"){const r=Capacitor.convertFileSrc(u.resultData);await n.getRecentGames(),c.push({name:"GameWeb",query:{gameId:p,url:encodeURIComponent(r)}})}else await(await W.create({message:u.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present();i.fullLoading=!1}},$=we(()=>n.favoriteGameList.filter(u=>u.gameId==o.game.gameId||u.gameId==o.game.id).length>0),E=async()=>{if(o.game.iconType!=2){i.fullLoading=!0;const p=o.game.gameId||o.game.id,u=await Ie({gameId:p,opt:$.value?2:1});u.state==="200"?n.getFavoriteGames():await(await W.create({message:u.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present(),i.fullLoading=!1}};return(p,u)=>(y(),O("div",{class:"game-item",onClick:re(w,["stop"])},[V("div",{class:Se(["game-image",{large:f.game.imageSize==2}])},[h(s(B),{class:"game-icon",src:f.game.imageUrl},null,8,["src"]),f.game.cornerMark==1?(y(),G(s(B),{key:0,class:"game-tag",src:"".concat(s(e),"home/icon-new.png")},null,8,["src"])):q("",!0),f.game.cornerMark==2?(y(),G(s(B),{key:1,class:"game-tag",src:"".concat(s(e),"home/icon-best.png")},null,8,["src"])):q("",!0),f.game.iconType!=2?(y(),O("div",{key:2,class:"game-collect",onClick:re(E,["stop"])},[$.value?(y(),G(s(B),{key:0,src:"".concat(s(e),"home/icon-collection-select.png"),style:{width:"24px",height:"24px"}},null,8,["src"])):(y(),G(s(B),{key:1,src:"".concat(s(e),"home/icon-collection-normal.png"),style:{width:"24px",height:"24px"}},null,8,["src"]))])):q("",!0)],2),f.game.imageSize!=2?(y(),O("div",je,H(f.game.name),1)):q("",!0)]))}},Xe=["onClick"],Ye={__name:"GameList",setup(f){const e=F(1),o=F([]);let c=!1;se(async()=>await $());const i=oe({}),n=oe({}),w=r=>{const d=new Image;d.src=r},$=async()=>{const r=await Te();if(r.state==="200"){o.value=r.resultData.labelList||[],e.value=Number(o.value[0].labelId);const d=r.resultData.firstLabelGameList,g=r.resultData.categoryList;o.value[0].gameList=r.resultData.gameAndCategoryList.map(m=>{if(m.iconType==1){const T=d.filter(k=>k.status&&k.gameId==m.id);m.name=T.length>0?T[0].gameName:""}if(m.iconType==2){const T=g.filter(k=>k.categoryId==m.id);m.name=T.length>0?T[0].categoryName:""}return m});for(const[m,T]of o.value.entries())w(T.imageUrlSelected),w(T.imageUrlUnselected),m>0&&(T.gameList=await E(T.labelId)),T.gameList&&T.gameList.forEach(k=>w(k.imageUrl))}else await(await W.create({message:r.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present()},E=async r=>{const d=await _e({labelId:r});if(d.state==="200"){const g=d.resultData.gameList.filter(m=>m.status)||[];return d.resultData.gameAndCategoryList.map(m=>{const T=g.filter(k=>k.status&&k.gameId==m.id);return m.name=T.length>0?T[0].gameName:"",m}).filter(m=>m.imageUrl)}else return await(await W.create({message:d.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present(),[]},p=r=>{c=!0,e.value=Number(r),i[r].$el.scrollIntoView({behavior:"smooth"})},u=r=>{if(c){const d=i[e.value].$el.offsetTop,g=d+i[e.value].$el.offsetHeight;d<=r.target.scrollTop&&r.target.scrollTop<=g&&(c=!1)}else for(const d in i)i[d].$el.offsetTop<=r.target.scrollTop&&(e.value=Number(d),n[d].scrollIntoView())};return(r,d)=>(y(),G(s(ne),{class:"game-list"},{default:C(()=>[h(s(ie),null,{default:C(()=>[h(s(ee),{class:"ion-justify-content-start"},{default:C(()=>[h(s(j),{class:"game-menu",size:"2.2"},{default:C(()=>[(y(!0),O(J,null,Q(o.value,g=>(y(),O("div",{ref_for:!0,ref:m=>n[g.labelId]=m,key:g.labelId,class:"game-label",onClick:m=>p(g.labelId)},[h(Ge,{name:"fade"},{default:C(()=>[e.value==Number(g.labelId)?(y(),G(s(B),{key:0,src:g.imageUrlSelected,class:"game-img"},null,8,["src"])):(y(),G(s(B),{key:1,src:g.imageUrlUnselected,class:"game-img"},null,8,["src"]))]),_:2},1024)],8,Xe))),128))]),_:1}),h(s(j),{size:"9.8",class:"games",onScroll:u},{default:C(()=>[(y(!0),O(J,null,Q(o.value,g=>(y(),G(s(ee),{ref_for:!0,ref:m=>i[g.labelId]=m,key:g.labelId},{default:C(()=>[(y(!0),O(J,null,Q(g.gameList,m=>(y(),G(s(j),{size:m.imageSize==2?12:m.imageSize==3?8:4},{default:C(()=>[h(fe,{game:m},null,8,["game"])]),_:2},1032,["size"]))),256))]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}))}},me={__name:"GameSub",props:{gameKey:{type:String,require:!0}},setup(f){const e=f,o=de(),c=i=>{const n=new Image;n.src=i};return se(async()=>{e.gameKey=="recentGameList"&&await o.getRecentGames(),e.gameKey=="favoriteGameList"&&await o.getFavoriteGames(),o[e.gameKey].forEach(i=>c(i.imageUrl))}),(i,n)=>(y(),G(s(ne),{class:"game-sub"},{default:C(()=>[s(o)[f.gameKey].length>0?(y(),G(s(ie),{key:0},{default:C(()=>[h(s(ee),{class:"ion-justify-content-start"},{default:C(()=>[(y(!0),O(J,null,Q(s(o)[f.gameKey],w=>(y(),G(s(j),{size:"3"},{default:C(()=>[h(fe,{game:w},null,8,["game"])]),_:2},1024))),256))]),_:1})]),_:1})):(y(),G(Oe,{key:1,class:"no-data"}))]),_:1}))}};function Je(f,e,o,c){return f.params.createElements&&Object.keys(c).forEach(i=>{if(!o[i]&&o.auto===!0){let n=Ne(f.el,".".concat(c[i]))[0];n||(n=Re("div",c[i]),n.className=c[i],f.el.append(n)),o[i]=n,e[i]=n}}),o}function Y(f){return f===void 0&&(f=""),".".concat(f.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,"."))}function Qe(f){let{swiper:e,extendParams:o,on:c,emit:i}=f;const n="swiper-pagination";o({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:"".concat(n,"-bullet"),bulletActiveClass:"".concat(n,"-bullet-active"),modifierClass:"".concat(n,"-"),currentClass:"".concat(n,"-current"),totalClass:"".concat(n,"-total"),hiddenClass:"".concat(n,"-hidden"),progressbarFillClass:"".concat(n,"-progressbar-fill"),progressbarOppositeClass:"".concat(n,"-progressbar-opposite"),clickableClass:"".concat(n,"-clickable"),lockClass:"".concat(n,"-lock"),horizontalClass:"".concat(n,"-horizontal"),verticalClass:"".concat(n,"-vertical"),paginationDisabledClass:"".concat(n,"-disabled")}}),e.pagination={el:null,bullets:[]};let w,$=0;function E(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function p(a,t){const{bulletActiveClass:l}=e.params.pagination;a&&(a=a["".concat(t==="prev"?"previous":"next","ElementSibling")],a&&(a.classList.add("".concat(l,"-").concat(t)),a=a["".concat(t==="prev"?"previous":"next","ElementSibling")],a&&a.classList.add("".concat(l,"-").concat(t,"-").concat(t))))}function u(a){const t=a.target.closest(Y(e.params.pagination.bulletClass));if(!t)return;a.preventDefault();const l=ue(t)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===l)return;e.slideToLoop(l)}else e.slideTo(l)}function r(){const a=e.rtl,t=e.params.pagination;if(E())return;let l=e.pagination.el;l=N(l);let b,M;const z=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,K=e.params.loop?Math.ceil(z/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(M=e.previousRealIndex||0,b=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(b=e.snapIndex,M=e.previousSnapIndex):(M=e.previousIndex||0,b=e.activeIndex||0),t.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const L=e.pagination.bullets;let x,S,R;if(t.dynamicBullets&&(w=Ue(L[0],e.isHorizontal()?"width":"height"),l.forEach(I=>{I.style[e.isHorizontal()?"width":"height"]="".concat(w*(t.dynamicMainBullets+4),"px")}),t.dynamicMainBullets>1&&M!==void 0&&($+=b-(M||0),$>t.dynamicMainBullets-1?$=t.dynamicMainBullets-1:$<0&&($=0)),x=Math.max(b-$,0),S=x+(Math.min(L.length,t.dynamicMainBullets)-1),R=(S+x)/2),L.forEach(I=>{const _=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(D=>"".concat(t.bulletActiveClass).concat(D))].map(D=>typeof D=="string"&&D.includes(" ")?D.split(" "):D).flat();I.classList.remove(..._)}),l.length>1)L.forEach(I=>{const _=ue(I);_===b?I.classList.add(...t.bulletActiveClass.split(" ")):e.isElement&&I.setAttribute("part","bullet"),t.dynamicBullets&&(_>=x&&_<=S&&I.classList.add(..."".concat(t.bulletActiveClass,"-main").split(" ")),_===x&&p(I,"prev"),_===S&&p(I,"next"))});else{const I=L[b];if(I&&I.classList.add(...t.bulletActiveClass.split(" ")),e.isElement&&L.forEach((_,D)=>{_.setAttribute("part",D===b?"bullet-active":"bullet")}),t.dynamicBullets){const _=L[x],D=L[S];for(let U=x;U<=S;U+=1)L[U]&&L[U].classList.add(..."".concat(t.bulletActiveClass,"-main").split(" "));p(_,"prev"),p(D,"next")}}if(t.dynamicBullets){const I=Math.min(L.length,t.dynamicMainBullets+4),_=(w*I-w)/2-R*w,D=a?"right":"left";L.forEach(U=>{U.style[e.isHorizontal()?D:"top"]="".concat(_,"px")})}}l.forEach((L,x)=>{if(t.type==="fraction"&&(L.querySelectorAll(Y(t.currentClass)).forEach(S=>{S.textContent=t.formatFractionCurrent(b+1)}),L.querySelectorAll(Y(t.totalClass)).forEach(S=>{S.textContent=t.formatFractionTotal(K)})),t.type==="progressbar"){let S;t.progressbarOpposite?S=e.isHorizontal()?"vertical":"horizontal":S=e.isHorizontal()?"horizontal":"vertical";const R=(b+1)/K;let I=1,_=1;S==="horizontal"?I=R:_=R,L.querySelectorAll(Y(t.progressbarFillClass)).forEach(D=>{D.style.transform="translate3d(0,0,0) scaleX(".concat(I,") scaleY(").concat(_,")"),D.style.transitionDuration="".concat(e.params.speed,"ms")})}t.type==="custom"&&t.renderCustom?(L.innerHTML=t.renderCustom(e,b+1,K),x===0&&i("paginationRender",L)):(x===0&&i("paginationRender",L),i("paginationUpdate",L)),e.params.watchOverflow&&e.enabled&&L.classList[e.isLocked?"add":"remove"](t.lockClass)})}function d(){const a=e.params.pagination;if(E())return;const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let l=e.pagination.el;l=N(l);let b="";if(a.type==="bullets"){let M=e.params.loop?Math.ceil(t/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&M>t&&(M=t);for(let z=0;z<M;z+=1)a.renderBullet?b+=a.renderBullet.call(e,z,a.bulletClass):b+="<".concat(a.bulletElement," ").concat(e.isElement?'part="bullet"':"",' class="').concat(a.bulletClass,'"></').concat(a.bulletElement,">")}a.type==="fraction"&&(a.renderFraction?b=a.renderFraction.call(e,a.currentClass,a.totalClass):b='<span class="'.concat(a.currentClass,'"></span>')+" / "+'<span class="'.concat(a.totalClass,'"></span>')),a.type==="progressbar"&&(a.renderProgressbar?b=a.renderProgressbar.call(e,a.progressbarFillClass):b='<span class="'.concat(a.progressbarFillClass,'"></span>')),e.pagination.bullets=[],l.forEach(M=>{a.type!=="custom"&&(M.innerHTML=b||""),a.type==="bullets"&&e.pagination.bullets.push(...M.querySelectorAll(Y(a.bulletClass)))}),a.type!=="custom"&&i("paginationRender",l[0])}function g(){e.params.pagination=Je(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let t;typeof a.el=="string"&&e.isElement&&(t=e.el.querySelector(a.el)),!t&&typeof a.el=="string"&&(t=[...document.querySelectorAll(a.el)]),t||(t=a.el),!(!t||t.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(t)&&t.length>1&&(t=[...e.el.querySelectorAll(a.el)],t.length>1&&(t=t.filter(l=>He(l,".swiper")[0]===e.el)[0])),Array.isArray(t)&&t.length===1&&(t=t[0]),Object.assign(e.pagination,{el:t}),t=N(t),t.forEach(l=>{a.type==="bullets"&&a.clickable&&l.classList.add(...(a.clickableClass||"").split(" ")),l.classList.add(a.modifierClass+a.type),l.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(l.classList.add("".concat(a.modifierClass).concat(a.type,"-dynamic")),$=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&l.classList.add(a.progressbarOppositeClass),a.clickable&&l.addEventListener("click",u),e.enabled||l.classList.add(a.lockClass)}))}function m(){const a=e.params.pagination;if(E())return;let t=e.pagination.el;t&&(t=N(t),t.forEach(l=>{l.classList.remove(a.hiddenClass),l.classList.remove(a.modifierClass+a.type),l.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&(l.classList.remove(...(a.clickableClass||"").split(" ")),l.removeEventListener("click",u))})),e.pagination.bullets&&e.pagination.bullets.forEach(l=>l.classList.remove(...a.bulletActiveClass.split(" ")))}c("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const a=e.params.pagination;let{el:t}=e.pagination;t=N(t),t.forEach(l=>{l.classList.remove(a.horizontalClass,a.verticalClass),l.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),c("init",()=>{e.params.pagination.enabled===!1?k():(g(),d(),r())}),c("activeIndexChange",()=>{typeof e.snapIndex>"u"&&r()}),c("snapIndexChange",()=>{r()}),c("snapGridLengthChange",()=>{d(),r()}),c("destroy",()=>{m()}),c("enable disable",()=>{let{el:a}=e.pagination;a&&(a=N(a),a.forEach(t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),c("lock unlock",()=>{r()}),c("click",(a,t)=>{const l=t.target,b=N(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&b&&b.length>0&&!l.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&l===e.navigation.nextEl||e.navigation.prevEl&&l===e.navigation.prevEl))return;const M=b[0].classList.contains(e.params.pagination.hiddenClass);i(M===!0?"paginationShow":"paginationHide"),b.forEach(z=>z.classList.toggle(e.params.pagination.hiddenClass))}});const T=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=N(a),a.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),g(),d(),r()},k=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=N(a),a.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:T,disable:k,render:d,update:r,init:g,destroy:m})}function We(f){let{swiper:e,extendParams:o,on:c,emit:i,params:n}=f;e.autoplay={running:!1,paused:!1,timeLeft:0},o({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let w,$,E=n&&n.autoplay?n.autoplay.delay:3e3,p=n&&n.autoplay?n.autoplay.delay:3e3,u,r=new Date().getTime(),d,g,m,T,k,a,t;function l(v){!e||e.destroyed||!e.wrapperEl||v.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",l),!(t||v.detail&&v.detail.bySwiperTouchMove)&&S())}const b=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(p=u,d=!1);const v=e.autoplay.paused?u:r+p-new Date().getTime();e.autoplay.timeLeft=v,i("autoplayTimeLeft",v,v/E),$=requestAnimationFrame(()=>{b()})},M=()=>{let v;return e.virtual&&e.params.virtual.enabled?v=e.slides.filter(A=>A.classList.contains("swiper-slide-active"))[0]:v=e.slides[e.activeIndex],v?parseInt(v.getAttribute("data-swiper-autoplay"),10):void 0},z=v=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame($),b();let P=typeof v>"u"?e.params.autoplay.delay:v;E=e.params.autoplay.delay,p=e.params.autoplay.delay;const A=M();!Number.isNaN(A)&&A>0&&typeof v>"u"&&(P=A,E=A,p=A),u=P;const X=e.params.speed,le=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(X,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,X,!0,!0),i("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(X,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,X,!0,!0),i("autoplay")),e.params.cssMode&&(r=new Date().getTime(),requestAnimationFrame(()=>{z()})))};return P>0?(clearTimeout(w),w=setTimeout(()=>{le()},P)):requestAnimationFrame(()=>{le()}),P},K=()=>{r=new Date().getTime(),e.autoplay.running=!0,z(),i("autoplayStart")},L=()=>{e.autoplay.running=!1,clearTimeout(w),cancelAnimationFrame($),i("autoplayStop")},x=(v,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(w),v||(a=!0);const A=()=>{i("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",l):S()};if(e.autoplay.paused=!0,P){k&&(u=e.params.autoplay.delay),k=!1,A();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-r),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),A())},S=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(r=new Date().getTime(),a?(a=!1,z(u)):z(),e.autoplay.paused=!1,i("autoplayResume"))},R=()=>{if(e.destroyed||!e.autoplay.running)return;const v=te();v.visibilityState==="hidden"&&(a=!0,x(!0)),v.visibilityState==="visible"&&S()},I=v=>{v.pointerType==="mouse"&&(a=!0,t=!0,!(e.animating||e.autoplay.paused)&&x(!0))},_=v=>{v.pointerType==="mouse"&&(t=!1,e.autoplay.paused&&S())},D=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",I),e.el.addEventListener("pointerleave",_))},U=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",I),e.el.removeEventListener("pointerleave",_))},ge=()=>{te().addEventListener("visibilitychange",R)},ye=()=>{te().removeEventListener("visibilitychange",R)};c("init",()=>{e.params.autoplay.enabled&&(D(),ge(),K())}),c("destroy",()=>{U(),ye(),e.autoplay.running&&L()}),c("_freeModeStaticRelease",()=>{(m||a)&&S()}),c("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?L():x(!0,!0)}),c("beforeTransitionStart",(v,P,A)=>{e.destroyed||!e.autoplay.running||(A||!e.params.autoplay.disableOnInteraction?x(!0,!0):L())}),c("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){L();return}g=!0,m=!1,a=!1,T=setTimeout(()=>{a=!0,m=!0,x(!0)},200)}}),c("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!g)){if(clearTimeout(T),clearTimeout(w),e.params.autoplay.disableOnInteraction){m=!1,g=!1;return}m&&e.params.cssMode&&S(),m=!1,g=!1}}),c("slideChange",()=>{e.destroyed||!e.autoplay.running||(k=!0)}),Object.assign(e.autoplay,{start:K,stop:L,pause:x,resume:S})}const Ze={key:0,class:"activity-icon"},ea={class:"activity-icon"},aa={class:"item-button"},ta={class:"item-button"},ca={__name:"Home",setup(f){const e=pe(),o=Pe(),c=xe(),i="/testTestTest/",n=F("GameList"),w={GameList:Ye,GameRecent:me,GameFavorite:me},$={GameList:null,GameRecent:"recentGameList",GameFavorite:"favoriteGameList"},E=F([]),p=async()=>{const u=await De();u.state==="200"?E.value=u.resultData.bannerList||[]:await(await W.create({message:u.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present()};return se(async()=>{await p(),await o.getMailList()}),(u,r)=>(y(),G(s(ne),{class:"home"},{default:C(()=>[h(s(Me),null,{default:C(()=>[h(s(ie),{style:{padding:"0"}},{default:C(()=>[h(s(ee),{class:"ion-justify-content-between"},{default:C(()=>[h(s(j),{size:"6"},{default:C(()=>[h(s(B),{src:s(e).imgLogo.headerLogo,style:{width:"100%",margin:"auto"}},null,8,["src"])]),_:1}),h(s(j),{size:"auto",style:{display:"flex"}},{default:C(()=>[s(c).isShowTurnplate?(y(),O("div",Ze,[h(s(B),{src:"".concat(s(i),"home/icon-home-game.png")},null,8,["src"]),s(c).turnplate.totalRemainTimes>0?(y(),G(s(ce),{key:0,'"':"",class:"activity-icon-tag"},{default:C(()=>[Z(H(s(c).turnplate.totalRemainTimes||10),1)]),_:1})):q("",!0)])):q("",!0),V("div",ea,[h(s(B),{src:"".concat(s(i),"home/icon-mail.png"),"router-link":"/mail"},null,8,["src"]),s(o).hasUnread?(y(),G(s(ce),{key:0,class:"activity-icon-tag"})):q("",!0)])]),_:1})]),_:1})]),_:1}),h(s(qe),{modules:[s(We),s(Qe),s(Ke)],centeredSlides:!0,pagination:{clickable:!0},autoplay:{delay:3e3},loop:!0,lazyPreloadPrevNext:1},{default:C(()=>[(y(!0),O(J,null,Q(E.value,(d,g)=>(y(),G(s(Ve),{key:"banner_".concat(g)},{default:C(()=>[h(s(B),{src:d.imageUrl,loading:"lazy"},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["modules"]),h(Ae),h(Fe,{class:"user-info"},{default:C(()=>[V("div",aa,[h(s(B),{src:"".concat(s(i),"home/icon-deposit.png"),style:{width:"35px","margin-bottom":"5px"}},null,8,["src"]),V("div",null,H(u.$t("home.deposit")),1)]),V("div",ta,[h(s(B),{src:"".concat(s(i),"home/icon-withdraw.png"),style:{width:"35px","margin-bottom":"5px"}},null,8,["src"]),V("div",null,H(u.$t("home.withdraw")),1)])]),_:1}),h(s(ke),{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=d=>n.value=d),mode:"md"},{default:C(()=>[h(s(ae),{class:"ion-text-capitalize",value:"GameList"},{default:C(()=>[Z(H(u.$t("home.allgames")),1)]),_:1}),h(s(ae),{class:"ion-text-capitalize",value:"GameRecent"},{default:C(()=>[Z(H(u.$t("home.recent")),1)]),_:1}),h(s(ae),{class:"ion-text-capitalize",value:"GameFavorite"},{default:C(()=>[Z(H(u.$t("home.favorite")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1}),h(s(ze),null,{default:C(()=>[(y(),G(Ee,{exclude:"GameSub"},[(y(),G(Be(w[n.value]),{class:"bottom-view",gameKey:$[n.value]},null,8,["gameKey"]))],1024))]),_:1})]),_:1}))}};export{ca as default};
