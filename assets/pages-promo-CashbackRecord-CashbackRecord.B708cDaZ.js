import{_ as s,a,B as t,o as e,k as l,b as r,w as c,n as o,d as u,F as d,f as n,m as w,p as i,c as m,l as p,q as A,S as k,i as h}from"./index-D6FzdE0N.js";import{H as U}from"./Header.Da9XTUsz.js";import{N as q}from"./NoData.BxWwpekP.js";import"./back.u9WpicZP.js";/* empty css                                                               */import"./no-data-withdraw.BQz0OKhQ.js";const v=s({__name:"CashbackRecord",setup(s){const v=a();let G=t(0),f=t([]);const y=s=>{G.value=s};let C=t(!1),V=t(!0);const S=()=>{C.value=!0,V.value=!0,console.log("下拉刷新"),setTimeout((()=>{C.value=!1}),2e3)},x=()=>{V.value&&console.log("上拉加载更多")};return(s,a)=>{const t=A,V=n,g=h,H=k;return e(),l(d,null,[r(U,{title:"Cashback Record"}),r(V,{class:"cashback-record-body",style:o({height:`calc(100vh - ${u(v).headerStyle.height}px)`})},{default:c((()=>[r(V,{class:"cashback-record-search"},{default:c((()=>[r(V,{class:"cashback-record-search-item"},{default:c((()=>[r(t,{class:w(0==u(G)?"active":""),onClick:a[0]||(a[0]=s=>y(0))},{default:c((()=>[i("Today")])),_:1},8,["class"])])),_:1}),r(V,{class:"cashback-record-search-item"},{default:c((()=>[r(t,{class:w(1==u(G)?"active":""),onClick:a[1]||(a[1]=s=>y(1))},{default:c((()=>[i("7 Days")])),_:1},8,["class"])])),_:1}),r(V,{class:"cashback-record-search-item"},{default:c((()=>[r(t,{class:w(2==u(G)?"active":""),onClick:a[2]||(a[2]=s=>y(2))},{default:c((()=>[i("30 Days")])),_:1},8,["class"])])),_:1})])),_:1}),r(V,{class:"cashback-record-total"},{default:c((()=>[r(t,null,{default:c((()=>[i("2023-09-20")])),_:1}),r(t,null,{default:c((()=>[i("Total :12,800")])),_:1})])),_:1}),u(f).length>0?(e(),m(V,{key:0,class:"cashback-record-list"},{default:c((()=>[r(H,{class:"scroll-view","scroll-y":"true","show-scrollbar":!1,"refresher-enabled":!0,"refresher-triggered":u(C),onRefresherrefresh:S,onScrolltolower:x,"refresher-background":"#630606"},{default:c((()=>[(e(),l(d,null,p(20,((s,a)=>r(V,{class:"cashback-record-item"},{default:c((()=>[r(g,{class:"status-icon",src:"data:image/png;base64,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"}),r(V,{class:"cashback-record-item-right"},{default:c((()=>[r(V,{class:"cashback-record-item-right-item1"},{default:c((()=>[r(V,null,{default:c((()=>[i("2023-09-20 11:23:10")])),_:1}),r(V,{class:"text-color"},{default:c((()=>[i("Deposit：999,999,999")])),_:1})])),_:1}),r(V,{class:"cashback-record-item-right-item2"},{default:c((()=>[r(V,{class:"text-color"},{default:c((()=>[i("Bouns")])),_:1}),r(V,null,{default:c((()=>[i("+999")])),_:1})])),_:1})])),_:1})])),_:1}))),64))])),_:1},8,["refresher-triggered"])])),_:1})):(e(),m(V,{key:1,class:"nodata-body"},{default:c((()=>[r(q,{text:"No data available"})])),_:1}))])),_:1},8,["style"])],64)}}},[["__scopeId","data-v-0ff9e63c"]]);export{v as default};
