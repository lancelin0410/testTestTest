import{_ as e,u as t,E as a,T as s,o as l,c as r,w as o,b as c,d as n,n as p,k as u,l as m,F as d,q as h,t as i,e as f,f as x,y}from"./index--xcqUmEY.js";import{o as _}from"./uni-app.es.Ch1hhmq9.js";import{S as g}from"./SearchInput.jCbozem7.js";import{u as b,H as k}from"./HomeGamesItem.DbmLm8lc.js";import{e as w}from"./game.CbAMmgDb.js";import{N as S}from"./NoDataSearch.CByDGpcY.js";import"./icon-search-clear.C3jlIHgr.js";import"./no-data-withdraw.BQz0OKhQ.js";const R=e({__name:"SearchResult",setup(e){const R=t(),C=b(),j=a({searchText:"",searchResultList:[],isShowResult:!1});_((e=>{$()}));const $=async()=>{await C.getGameSearchData()},T=()=>{j.isShowResult=!1,j.searchResultList=[]},I=async()=>{if(!j.searchText)return;const{code:e,data:t}=await w({words:j.searchText});j.searchResultList=t||[],j.isShowResult=!0,$()},L=e=>{j.searchText=e,I()};return(e,t)=>{const a=x,_=s("mobile-sub-layout");return l(),r(_,{title:e.$t("search.searchResult")},{default:o((()=>[c(a,{class:"search-container",style:p({"background-color":n(R).theme.bgColor})},{default:o((()=>[c(n(g),{modelValue:j.searchText,"onUpdate:modelValue":t[0]||(t[0]=e=>j.searchText=e),onSearch:I,onChange:T},null,8,["modelValue"]),j.isShowResult?(l(),r(a,{key:0},{default:o((()=>[j.searchResultList.length?(l(),r(a,{key:0,style:p([{padding:"24rpx 15rpx"},{"border-top":`1rpx solid ${n(R).theme.seplineColor}`}])},{default:o((()=>[c(a,{class:"flex-wrap"},{default:o((()=>[(l(!0),u(d,null,m(j.searchResultList,((e,t)=>(l(),r(a,{key:t,style:{"margin-bottom":"20rpx"}},{default:o((()=>[c(k,{itemData:e,style:{width:"180rpx",height:"185rpx",padding:"0rpx 15rpx"}},null,8,["itemData"])])),_:2},1024)))),128))])),_:1})])),_:1},8,["style"])):(l(),r(a,{key:1},{default:o((()=>[c(n(S),{title:`${e.$t("search.message.nodata")} '${j.searchText}'`},null,8,["title"])])),_:1}))])),_:1})):(l(),r(a,{key:1},{default:o((()=>[n(C).recentSearches.length?(l(),r(a,{key:0,class:"plr30"},{default:o((()=>[c(a,{class:"ptb24",style:p([{"font-size":"30rpx"},{color:n(R).theme.text.normal}])},{default:o((()=>[h(i(e.$t("search.recentlySearches")),1)])),_:1},8,["style"]),c(a,{class:"flex-wrap"},{default:o((()=>[(l(!0),u(d,null,m(n(C).recentSearches,((e,t)=>(l(),r(a,{key:t,class:"flex-acenter flex-scenter plr24 ft13 mr24 mb24",style:p({"background-color":n(R).theme.selectItem.bgColor,color:n(R).theme.selectItem.text,"border-radius":"33rpx",height:"66rpx"}),onClick:y((t=>L(e)),["stop"])},{default:o((()=>[c(a,null,{default:o((()=>[h(i(e),1)])),_:2},1024)])),_:2},1032,["style","onClick"])))),128))])),_:1})])),_:1})):f("",!0),n(C).popularSearches.length?(l(),r(a,{key:1,class:"plr30 pb24"},{default:o((()=>[c(a,{class:"ptb24",style:p([{"font-size":"30rpx"},{color:n(R).theme.text.normal}])},{default:o((()=>[h(i(e.$t("search.popularSearches")),1)])),_:1},8,["style"]),c(a,{class:"flex-wrap"},{default:o((()=>[(l(!0),u(d,null,m(n(C).popularSearches,((e,t)=>(l(),r(a,{key:t,class:"flex-acenter flex-scenter plr24 ft13 mr24 mb24",style:p({"background-color":n(R).theme.selectItem.bgColor,color:n(R).theme.selectItem.text,"border-radius":"33rpx",height:"66rpx"}),onClick:y((t=>L(e)),["stop"])},{default:o((()=>[c(a,null,{default:o((()=>[h(i(e),1)])),_:2},1024)])),_:2},1032,["style","onClick"])))),128))])),_:1})])),_:1})):f("",!0)])),_:1})),n(C).recommendGameList.length?(l(),r(a,{key:2,style:p([{padding:"24rpx 15rpx"},{"border-top":`1rpx solid ${n(R).theme.seplineColor}`}])},{default:o((()=>[c(a,{class:"pb24 plr16",style:p([{"font-size":"30rpx"},{color:n(R).theme.text.normal}])},{default:o((()=>[h(i(e.$t("search.recommentGames")),1)])),_:1},8,["style"]),c(a,{class:"flex-wrap"},{default:o((()=>[(l(!0),u(d,null,m(n(C).recommendGameList,((e,t)=>(l(),r(a,{key:t,style:{"margin-bottom":"20rpx"}},{default:o((()=>[c(k,{itemData:e,style:{width:"180rpx",height:"180rpx",padding:"0rpx 15rpx"}},null,8,["itemData"])])),_:2},1024)))),128))])),_:1})])),_:1},8,["style"])):f("",!0)])),_:1},8,["style"])])),_:1},8,["title"])}}},[["__scopeId","data-v-f0cb8d4f"]]);export{R as default};
