import{_ as a,u as e,L as s,a as o,g as c,C as t,o as l,c as p,w as i,n as d,d as m,f as g,b as n,q as r,t as y,e as k,a2 as u,J as I,K as F,Z as h,ap as f,i as b,$ as v,v as C}from"./index-mXoUIcYK.js";import{_ as B,a as _,b as w,c as x,d as L,e as j,f as T,g as z,h as V,i as S,j as $,k as O,l as P,m as U,n as q,o as D,p as G,q as H,r as A,s as J,t as K,u as N,v as R,w as W,x as Z,y as E,z as M,A as Q,B as X,C as Y,D as aa,E as ea,F as sa,G as oa,H as ca,I as ta,J as la,K as pa,L as ia,M as da,N as ma,O as ga,P as na,Q as ra,R as ya,S as ka,T as ua,U as Ia,V as Fa,W as ha,X as fa,Y as ba,Z as va,$ as Ca,a0 as Ba,a1 as _a,a2 as wa,a3 as xa,a4 as La,a5 as ja,a6 as Ta,a7 as za,a8 as Va,a9 as Sa,aa as $a,ab as Oa,ac as Pa,ad as Ua,ae as qa,af as Da,ag as Ga,ah as Ha,ai as Aa,aj as Ja,ak as Ka,al as Na,am as Ra,an as Wa,ao as Za,ap as Ea,aq as Ma,ar as Qa,as as Xa,at as Ya,au as ae,av as ee,aw as se,ax as oe,ay as ce,az as te,aA as le}from"./login-logo.DtyFnH5B.js";import{_ as pe}from"./segmentation.Dynn20Ej.js";import{_ as ie}from"./Check.DGTr72Di.js";import{L as de}from"./LoginHeader.B7Qq8WCj.js";import{h as me}from"./account.DblnEnZ7.js";import{T as ge}from"./toast.pxpcy4F1.js";import"./back.DsRJx4W9.js";const ne=a({__name:"PhoneBinding",setup(a){const ne=e(),{t:re}=s(),ye=o(),ke=c();let ue=t(!0),Ie=t(null),Fe=t(0),he=t(re("account.button.otp")),fe=t(""),be=t("");const ve=()=>{ue.value=!ue.value},Ce=async()=>{if(0==Fe.value){if(""==be.value)return void ge.show(re("account.phoneBinding.toast.phone"));ge.showLoading("Loading");const{code:a,data:e}=await h({tel:be.value});ge.hideLoading(),200==a&&(Fe.value=e,Be())}},Be=()=>{he.value=Fe.value+"s",Ie.value=setInterval((()=>{Fe.value>0?(Fe.value--,he.value=Fe.value+"s"):(he.value=re("account.button.otp"),Fe.value=0,clearInterval(Ie.value))}),1e3)},_e=async()=>{if(ue.value){if(""==be.value)return void ge.show("The phone number cannot be empty");if(""==fe.value)return void ge.show("The Verification code cannot be empty");ge.showLoading("Loading");const{code:a,data:e}=await me({mobile:be.value,verificationCode:fe.value,referralCode:ye.inviteCode});ge.hideLoading(),200==a&&(ge.showLoading("Loading"),await ke.getUserTotalInfo(),ge.hideLoading(),ge.showSuccess(),setTimeout((()=>{f()}),1e3))}else ue.value=!0};return(a,e)=>{const s=g,o=b,c=v,t=C;return l(),p(s,{class:"phone-binding-body",style:d({background:m(ne).theme.home.bgColor,backgroundSize:"100% 100%"})},{default:i((()=>[n(s,{style:d({height:m(ye).headerStyle.statusBarHeight+"px"})},null,8,["style"]),n(de,{title:a.$t("account.header.phoneBindingTitle")},null,8,["title"]),n(s,{class:"content-body"},{default:i((()=>[n(s,{class:"phone-binding-logo"},{default:i((()=>[191===m(ye).appId?(l(),p(o,{key:0,class:"logo-image",src:B,mode:"aspectFit"})):192===m(ye).appId?(l(),p(o,{key:1,class:"logo-image",src:_,mode:"aspectFit"})):193===m(ye).appId?(l(),p(o,{key:2,class:"logo-image",src:w,mode:"aspectFit"})):194===m(ye).appId?(l(),p(o,{key:3,class:"logo-image",src:x,mode:"aspectFit"})):195===m(ye).appId?(l(),p(o,{key:4,class:"logo-image",src:L,mode:"aspectFit"})):1101===m(ye).appId?(l(),p(o,{key:5,class:"logo-image",src:j,mode:"aspectFit"})):1102===m(ye).appId?(l(),p(o,{key:6,class:"logo-image",src:T,mode:"aspectFit"})):1103===m(ye).appId?(l(),p(o,{key:7,class:"logo-image",src:z,mode:"aspectFit"})):1104===m(ye).appId?(l(),p(o,{key:8,class:"logo-image",src:V,mode:"aspectFit"})):1105===m(ye).appId?(l(),p(o,{key:9,class:"logo-image",src:S,mode:"aspectFit"})):1106===m(ye).appId?(l(),p(o,{key:10,class:"logo-image",src:$,mode:"aspectFit"})):1107===m(ye).appId?(l(),p(o,{key:11,class:"logo-image",src:O,mode:"aspectFit"})):1108===m(ye).appId?(l(),p(o,{key:12,class:"logo-image",src:P,mode:"aspectFit"})):1109===m(ye).appId?(l(),p(o,{key:13,class:"logo-image",src:U,mode:"aspectFit"})):1110===m(ye).appId?(l(),p(o,{key:14,class:"logo-image",src:q,mode:"aspectFit"})):1111===m(ye).appId?(l(),p(o,{key:15,class:"logo-image",src:D,mode:"aspectFit"})):1112===m(ye).appId?(l(),p(o,{key:16,class:"logo-image",src:G,mode:"aspectFit"})):1113===m(ye).appId?(l(),p(o,{key:17,class:"logo-image",src:H,mode:"aspectFit"})):1114===m(ye).appId?(l(),p(o,{key:18,class:"logo-image",src:A,mode:"aspectFit"})):1115===m(ye).appId?(l(),p(o,{key:19,class:"logo-image",src:J,mode:"aspectFit"})):1116===m(ye).appId?(l(),p(o,{key:20,class:"logo-image",src:K,mode:"aspectFit"})):1117===m(ye).appId?(l(),p(o,{key:21,class:"logo-image",src:N,mode:"aspectFit"})):1118===m(ye).appId?(l(),p(o,{key:22,class:"logo-image",src:R,mode:"aspectFit"})):1119===m(ye).appId?(l(),p(o,{key:23,class:"logo-image",src:W,mode:"aspectFit"})):1120===m(ye).appId?(l(),p(o,{key:24,class:"logo-image",src:Z,mode:"aspectFit"})):1121===m(ye).appId?(l(),p(o,{key:25,class:"logo-image",src:E,mode:"aspectFit"})):1122===m(ye).appId?(l(),p(o,{key:26,class:"logo-image",src:M,mode:"aspectFit"})):1123===m(ye).appId?(l(),p(o,{key:27,class:"logo-image",src:Q,mode:"aspectFit"})):1124===m(ye).appId?(l(),p(o,{key:28,class:"logo-image",src:X,mode:"aspectFit"})):1125===m(ye).appId?(l(),p(o,{key:29,class:"logo-image",src:Y,mode:"aspectFit"})):1126===m(ye).appId?(l(),p(o,{key:30,class:"logo-image",src:aa,mode:"aspectFit"})):1127===m(ye).appId?(l(),p(o,{key:31,class:"logo-image",src:ea,mode:"aspectFit"})):1128===m(ye).appId?(l(),p(o,{key:32,class:"logo-image",src:sa,mode:"aspectFit"})):1129===m(ye).appId?(l(),p(o,{key:33,class:"logo-image",src:oa,mode:"aspectFit"})):1130===m(ye).appId?(l(),p(o,{key:34,class:"logo-image",src:ca,mode:"aspectFit"})):1901===m(ye).appId?(l(),p(o,{key:35,class:"logo-image",src:ta,mode:"aspectFit"})):1902===m(ye).appId?(l(),p(o,{key:36,class:"logo-image",src:la,mode:"aspectFit"})):1131===m(ye).appId?(l(),p(o,{key:37,class:"logo-image",src:pa,mode:"aspectFit"})):1132===m(ye).appId?(l(),p(o,{key:38,class:"logo-image",src:ia,mode:"aspectFit"})):1133===m(ye).appId?(l(),p(o,{key:39,class:"logo-image",src:da,mode:"aspectFit"})):1134===m(ye).appId?(l(),p(o,{key:40,class:"logo-image",src:ma,mode:"aspectFit"})):1135===m(ye).appId?(l(),p(o,{key:41,class:"logo-image",src:ga,mode:"aspectFit"})):1136===m(ye).appId?(l(),p(o,{key:42,class:"logo-image",src:na,mode:"aspectFit"})):1137===m(ye).appId?(l(),p(o,{key:43,class:"logo-image",src:ra,mode:"aspectFit"})):1138===m(ye).appId?(l(),p(o,{key:44,class:"logo-image",src:ya,mode:"aspectFit"})):1139===m(ye).appId?(l(),p(o,{key:45,class:"logo-image",src:ka,mode:"aspectFit"})):1140===m(ye).appId?(l(),p(o,{key:46,class:"logo-image",src:ua,mode:"aspectFit"})):1141===m(ye).appId?(l(),p(o,{key:47,class:"logo-image",src:Ia,mode:"aspectFit"})):1142===m(ye).appId?(l(),p(o,{key:48,class:"logo-image",src:Fa,mode:"aspectFit"})):1143===m(ye).appId?(l(),p(o,{key:49,class:"logo-image",src:ha,mode:"aspectFit"})):1144===m(ye).appId?(l(),p(o,{key:50,class:"logo-image",src:fa,mode:"aspectFit"})):1145===m(ye).appId?(l(),p(o,{key:51,class:"logo-image",src:ba,mode:"aspectFit"})):1146===m(ye).appId?(l(),p(o,{key:52,class:"logo-image",src:va,mode:"aspectFit"})):1147===m(ye).appId?(l(),p(o,{key:53,class:"logo-image",src:Ca,mode:"aspectFit"})):1148===m(ye).appId?(l(),p(o,{key:54,class:"logo-image",src:Ba,mode:"aspectFit"})):1149===m(ye).appId?(l(),p(o,{key:55,class:"logo-image",src:_a,mode:"aspectFit"})):1150===m(ye).appId?(l(),p(o,{key:56,class:"logo-image",src:wa,mode:"aspectFit"})):1151===m(ye).appId?(l(),p(o,{key:57,class:"logo-image",src:xa,mode:"aspectFit"})):1152===m(ye).appId?(l(),p(o,{key:58,class:"logo-image",src:La,mode:"aspectFit"})):1153===m(ye).appId?(l(),p(o,{key:59,class:"logo-image",src:ja,mode:"aspectFit"})):1154===m(ye).appId?(l(),p(o,{key:60,class:"logo-image",src:Ta,mode:"aspectFit"})):1155===m(ye).appId?(l(),p(o,{key:61,class:"logo-image",src:za,mode:"aspectFit"})):1156===m(ye).appId?(l(),p(o,{key:62,class:"logo-image",src:Va,mode:"aspectFit"})):1157===m(ye).appId?(l(),p(o,{key:63,class:"logo-image",src:Sa,mode:"aspectFit"})):1158===m(ye).appId?(l(),p(o,{key:64,class:"logo-image",src:$a,mode:"aspectFit"})):1159===m(ye).appId?(l(),p(o,{key:65,class:"logo-image",src:Oa,mode:"aspectFit"})):1160===m(ye).appId?(l(),p(o,{key:66,class:"logo-image",src:Pa,mode:"aspectFit"})):1161===m(ye).appId?(l(),p(o,{key:67,class:"logo-image",src:Ua,mode:"aspectFit"})):1162===m(ye).appId?(l(),p(o,{key:68,class:"logo-image",src:qa,mode:"aspectFit"})):1163===m(ye).appId?(l(),p(o,{key:69,class:"logo-image",src:Da,mode:"aspectFit"})):1164===m(ye).appId?(l(),p(o,{key:70,class:"logo-image",src:Ga,mode:"aspectFit"})):1165===m(ye).appId?(l(),p(o,{key:71,class:"logo-image",src:Ha,mode:"aspectFit"})):1166===m(ye).appId?(l(),p(o,{key:72,class:"logo-image",src:Aa,mode:"aspectFit"})):1167===m(ye).appId?(l(),p(o,{key:73,class:"logo-image",src:Ja,mode:"aspectFit"})):1168===m(ye).appId?(l(),p(o,{key:74,class:"logo-image",src:Ka,mode:"aspectFit"})):1169===m(ye).appId?(l(),p(o,{key:75,class:"logo-image",src:Na,mode:"aspectFit"})):1170===m(ye).appId?(l(),p(o,{key:76,class:"logo-image",src:Ra,mode:"aspectFit"})):1171===m(ye).appId?(l(),p(o,{key:77,class:"logo-image",src:Wa,mode:"aspectFit"})):1172===m(ye).appId?(l(),p(o,{key:78,class:"logo-image",src:Za,mode:"aspectFit"})):1173===m(ye).appId?(l(),p(o,{key:79,class:"logo-image",src:Ea,mode:"aspectFit"})):1174===m(ye).appId?(l(),p(o,{key:80,class:"logo-image",src:Ma,mode:"aspectFit"})):1175===m(ye).appId?(l(),p(o,{key:81,class:"logo-image",src:Qa,mode:"aspectFit"})):1176===m(ye).appId?(l(),p(o,{key:82,class:"logo-image",src:Xa,mode:"aspectFit"})):1177===m(ye).appId?(l(),p(o,{key:83,class:"logo-image",src:Ya,mode:"aspectFit"})):1178===m(ye).appId?(l(),p(o,{key:84,class:"logo-image",src:ae,mode:"aspectFit"})):1179===m(ye).appId?(l(),p(o,{key:85,class:"logo-image",src:ee,mode:"aspectFit"})):1180===m(ye).appId?(l(),p(o,{key:86,class:"logo-image",src:se,mode:"aspectFit"})):2101===m(ye).appId?(l(),p(o,{key:87,class:"logo-image",src:oe,mode:"aspectFit"})):5101===m(ye).appId?(l(),p(o,{key:88,class:"logo-image",src:ce,mode:"aspectFit"})):5102===m(ye).appId?(l(),p(o,{key:89,class:"logo-image",src:te,mode:"aspectFit"})):(l(),p(o,{key:90,class:"logo-image",src:le,mode:"aspectFit"}))])),_:1}),n(s,{class:"phone-binding-form"},{default:i((()=>[n(s,{class:"phone-binding-form-item",style:d({borderColor:m(ne).theme.account.phoneBinding.formItemBorderColor,backgroundColor:m(ne).theme.account.phoneBinding.formItemBgColor})},{default:i((()=>[n(s,{class:"phone-binding-form-item-icon"},{default:i((()=>[n(s,{class:"icon-size ft16",style:d({color:m(ne).theme.text.theme2})},{default:i((()=>[r(y(m(ye).phoneNumberPrefix),1)])),_:1},8,["style"]),m(ne).theme.account.phoneBinding.isShowDivisionImage?(l(),p(o,{key:0,class:"segmentation-size",src:pe})):k("",!0)])),_:1}),n(c,{type:"number",modelValue:m(be),"onUpdate:modelValue":e[0]||(e[0]=a=>u(be)?be.value=a:be=a),maxlength:"10",class:"phone-input",style:d({color:m(ne).theme.account.phoneBinding.text.inputColor}),placeholder:a.$t("login.placeholder.phone")},null,8,["modelValue","style","placeholder"])])),_:1},8,["style"]),n(s,{class:"phone-binding-form-code"},{default:i((()=>[n(s,{class:"phone-binding-form-code-item",style:d({borderColor:m(ne).theme.account.phoneBinding.formItemBorderColor,backgroundColor:m(ne).theme.account.phoneBinding.formItemBgColor})},{default:i((()=>[n(s,{class:"phone-binding-form-item-icon"},{default:i((()=>[n(s,{class:"icon-size ft16",style:d({color:m(ne).theme.text.theme2})},{default:i((()=>[r(" OTP ")])),_:1},8,["style"]),m(ne).theme.account.phoneBinding.isShowDivisionImage?(l(),p(o,{key:0,class:"segmentation-size",src:pe})):k("",!0)])),_:1}),n(c,{type:"number",modelValue:m(fe),"onUpdate:modelValue":e[1]||(e[1]=a=>u(fe)?fe.value=a:fe=a),class:"phone-input",style:d({color:m(ne).theme.account.phoneBinding.text.inputColor}),placeholder:a.$t("login.placeholder.otp")},null,8,["modelValue","style","placeholder"])])),_:1},8,["style"]),n(s,{class:"get-otp-btn",style:d({color:m(ne).theme.account.phoneBinding.getOtpBtn.textColor,backgroundColor:m(ne).theme.account.phoneBinding.getOtpBtn.background}),onClick:Ce},{default:i((()=>[r(y(m(he)),1)])),_:1},8,["style"])])),_:1}),n(s,{class:"phone-binding-form-check"},{default:i((()=>[n(s,{onClick:ve,class:"check-block",style:d({backgroundColor:m(ne).theme.account.phoneBinding.check.bgColor,borderColor:m(ne).theme.account.phoneBinding.check.borderColor})},null,8,["style"]),n(t,{class:"check-text",style:d({color:m(ne).theme.account.phoneBinding.text.normal})},{default:i((()=>[r("I agree all statements in Terms and Conditions")])),_:1},8,["style"]),I(n(o,{onClick:ve,src:ie,class:"check-image-size"},null,512),[[F,m(ue)]])])),_:1}),n(s,{class:"config-btn-block"},{default:i((()=>[n(s,{class:"config-btn",style:d({color:m(ne).theme.button.linearGoldenText,background:m(ne).theme.button.linearGolden}),onClick:_e},{default:i((()=>[r(y(a.$t("account.button.confirmCapital")),1)])),_:1},8,["style"])])),_:1})])),_:1})])),_:1})])),_:1},8,["style"])}}},[["__scopeId","data-v-b37a40ff"]]);export{ne as default};
