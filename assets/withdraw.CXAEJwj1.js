import{aa as a,ab as t}from"./index--xcqUmEY.js";const r={getWithdrawInfoUrl:t.api_app+"/withdraw/getWithdrawInfo",getIsSetWithdrawalPasswordUrl:t.api_app+"/withdraw/hasSetPwd",createWithdrawOrderUrl:t.api_app+"/withdraw/createWithdrawOrder",getWithdrawContentUrl:t.api_app+"/withdraw/getWithdrawContent",getWithdrawListUrl:t.api_app+"/withdraw/list"},d=t=>a.post({url:r.getWithdrawInfoUrl,data:t}),i=t=>a.post({url:r.getIsSetWithdrawalPasswordUrl,data:t}),e=t=>a.post({url:r.createWithdrawOrderUrl,data:t}),w=t=>a.post({url:r.getWithdrawContentUrl,data:t}),s=t=>a.post({url:r.getWithdrawListUrl,data:t});export{i as a,w as b,e as c,s as d,d as g};
