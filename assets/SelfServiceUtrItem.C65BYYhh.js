import{_ as e,a as t,u as a,g as s,L as o,o as r,c as A,w as n,b as l,n as d,d as m,y as g,q as i,t as p,D as u,B as C,z as I,f as c,i as D}from"./index--xcqUmEY.js";import{T as K}from"./toast.BA8gxJ6P.js";const Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAAAXNSR0IArs4c6QAABQ9JREFUWEfFmdtvVFUUxn/rzLS1BUoMEA0KEmqJBKMQUSOJBuKDARURGGTaacEW+qDyJ2jGN2OMj14a6GVmeoFCBIzgizcSEzVKVJBbqW0VoaAmEG1rO3P20nNaxk47lJn2DHMe55L9O9+399prf1s0VLMJkWdQKQPTjWUdwfxzjFisT0DJ8SNaVduCsg7VEsQaRM1Z0AP47BYikYu5hhCtrPkakUeSL6pqI3IaaGZo+IB0RLtzKYJoZe0XCE+kDOJAIGfARLB1H+1NvblSwgGoRzQEUjwRAseOVgqJ0Nj4m4DxWg3HgrWI1IE+lRZC5BxCK7a2SmvDz94DrK+ZRak4FuwAWQM6e9wgNqqdoDHE2ktsT5eXdogzmD5bV8Ks+OOIVYfIk2kh4PyoEjGWLOyRcNgTO1yAJMTtiVWovIjK06gpRST5PWADXSj7EJq9UmLsAOhjgWIWl6wC3zZE1gFzxtnhvLUD0QZmLy2Np6drRwqAq8SuXUX8OfAoltaCrAXmpYHoRmknMdzC0rKz07FjAkAS4o/+h/GxHWQ9qnPH2eEo0QN0YNtNJPo7paPDsSjrJy2ACxEIFOKbuRLLCmHxPHBnGiV6UTrAjlG+6KepKHFDgCREQelyRKrBbADmp1FiBEK0laG/TmarxKQALkQ47Kf34gMkzHbQDSh3AdYYNRw7fkV1P5hmhvtPZQNxUwAXgtV+QouXgYSAALBgAoRyAeEDhuwm6D+RKURGAKN2+CievQzbBBHZAixKgVBVLLkAcgCbGPFr32cCkTHAqB0Wnb33gRVC2AyUTYSwLrp2FPgi3DP/RwmHE5MtjawAkhDnfynHsoIY3QrcC/hS5oTIJYwewtZGSv0/SH19/EYQWQMkIc71lLlWiFWJ6hJE/odw7HAgVA67daK9+zvh87RKTAlgZGIivLBtMX5rC0gQZCmCP/mmIxCXUTmIMRFm+b9Np8SUAZIQGysWUlK8FSGIYdkECOQKmIMYaebqpeNy9OjQWDumBZCEqK6ej+0PYEk1yv1AQaoS1hWMfQSx9jDD981YJaYNkNzOn9u6gNKZ61GnYMmDKRAjP+rDsB+x66Wl6cT1/3kG4KoRDN6Bf8Zm1FQhsgKlcNyc6MHY7+M3MQYH+5w64S2AMzGDdXPwmY2oOqV7BSJFOJ+P+JVA+Aqj7xG/7ZB0vPO3pwBJOwKBeRSWrkOkFszK1GZXrqGmETP4hrS1Xc4JwIgddXOReBWW9dJosbrOZ1A+BPtVZy7kDMCFqNjxED7eQnV1aiWUY4j9ukQbP80twPady4mbtxHWpAAox/D5whKp/yxnAFr98hwSA5WIvIJI+RgA59h3mPjQa7I3ejInADrpJOQq0IA98Kbnk9DdHzJZhsq7DBcd9nwZ5rUQab5KsSv7zTej3zH2R55vRu7gmWzHIoewTZOn23FGDQnSh3IQ1ainDYmGwxaZtmSqjbR2HfesJXMHz1dT6g6eTVtewInJOmKnOmZcCTUQyN/BJK9Hs7weTt2MIF/H86wCCosoZQtOeRZQuDlRviKaLEKqNhLDrZ6GVBnFdKpdIG1Y0k509xnPYjo3Lc1XUJlVVItEKbu7dyoTLl1GIJrvsDr/cX2oZjdQkb8Li9COL0FXpR4cbuWVzXgA976IU4hEbs2lVVVtG8omFEEY+O9YedaN2YokRkPDpemu88kiOrcf0OqduzCmAtSHSCc2H2P6P6G9PeeDOwD/AvvwMmhugQ8gAAAAAElFTkSuQmCC",R=e({__name:"SelfServiceUtrItem",props:{orderId:{type:String,default:""},pendingCount:{type:Number,default:0}},setup(e){const R=t(),S=a(),f=s(),{t:w}=o(),x=e,h=()=>{if(x.orderId){if(R.appConfig.manualPendingMaxCount&&R.appConfig.manualPendingMaxCount>0&&x.pendingCount>=R.appConfig.manualPendingMaxCount)return void K.show(`${w("deposit.toast.text5")} ${R.appConfig.manualPendingMaxCount} ${w("deposit.toast.text6")}`);C(`${R.manualRechargeUrl}?userId=${f.userInfo.id}&orderId=${x.orderId}`)}else I({url:"/pages/wallet/SelfUtrInfo"})};return(e,t)=>{const a=c,s=D;return r(),A(a,{class:"self-service-utr-container"},{default:n((()=>[l(a,{class:"self-service-utr-card plr30 ptb24 flex-acenter flex-sbetween",style:d([{"border-radius":"30rpx"},{background:m(S).theme.lightBgColor}]),onClick:g(h,["stop"])},{default:n((()=>[l(a,null,{default:n((()=>[l(a,{class:"ft12",style:d({color:m(S).theme.text.normal})},{default:n((()=>[i(p(e.$t("deposit.message.tipsUtr1"))+":",1),u("span",{class:"ml24",style:d({color:m(S).theme.text.theme})},p(e.$t("deposit.message.tipsUtr2")),5)])),_:1},8,["style"]),l(a,{class:"ft9 mt12",style:d({color:m(S).theme.text.subtitle})},{default:n((()=>[i(p(e.$t("deposit.message.tipsUtr3")),1)])),_:1},8,["style"])])),_:1}),l(s,{src:Q,mode:"aspectFit",style:{width:"16rpx",height:"30rpx"}})])),_:1},8,["style"])])),_:1})}}},[["__scopeId","data-v-6eecbb76"]]);export{R as S,Q as _};
