"use strict";(self.webpackChunkpayload_template_ts_blank=self.webpackChunkpayload_template_ts_blank||[]).push([[771],{59771:(e,a,t)=>{t.r(a),t.d(a,{default:()=>h});var l=t(67294),i=t(16550),s=t(9980),o=t(28630),n=t(75091),d=t(47489),r=t(2143),u=t(88348),c=t(83780);const f=(e,a)=>a?e.fields.filter((e=>(0,c.fieldAffectsData)(e)&&"id"!==e.name||!0)):e.fields;var p=t(19826),v=t(40684),m=t(45074),$=t(91455),b=t(30894);const h=e=>{var a,t,c;const{collection:h,isEditing:k}=e,{slug:E,labels:{plural:S},admin:{useAsTitle:g,components:{views:{Edit:w}={}}={}}={}}=h,[C]=(0,l.useState)((()=>f(h,k))),[_]=(0,l.useState)((()=>({...h,fields:C}))),[P,Z]=(0,l.useState)(),y=(0,v.bU)(),{serverURL:L,routes:{admin:U,api:A}}=(0,s.Z)(),{params:{id:D}={}}=(0,i.$B)(),{state:N}=(0,i.TH)(),R=(0,i.k6)(),{setStepNav:T}=(0,n.FP)(),[x,B]=(0,l.useState)(),{permissions:F,user:G}=(0,o.a)(),{getVersions:H,preferencesKey:K}=(0,m.x5)(),{getPreference:V}=(0,$.G)(),j=(0,l.useCallback)((async e=>{var a;if(H(),k){const a=await(0,p.Z)({fieldSchema:_.fields,data:e.doc,user:G,id:D,operation:"update",locale:y});B(a)}else Z(`${U}/collections/${_.slug}/${null===(a=null==e?void 0:e.doc)||void 0===a?void 0:a.id}`)}),[U,_,k,H,G,D,y]),[{data:q,isLoading:z,isError:I}]=(0,d.Z)(k?`${L}${A}/${E}/${D}`:null,{initialParams:{"fallback-locale":"null",depth:0,draft:"true"}}),J=(null==N?void 0:N.data)||q;if((0,l.useEffect)((()=>{const e=[{url:`${U}/collections/${E}`,label:S}];if(k){let a="";J&&(a=g?J[g]?J[g]:"[Untitled]":J.id),e.push({label:a})}else e.push({label:"Create New"});T(e)}),[T,k,S,J,E,g,U]),(0,l.useEffect)((()=>{if(z)return;(async()=>{const e=await(0,p.Z)({fieldSchema:C,data:J,user:G,operation:k?"update":"create",id:D,locale:y});await V(K),B(e)})()}),[J,C,k,D,G,y,z,K,V]),(0,l.useEffect)((()=>{P&&R.push(P)}),[R,P]),I)return l.createElement(i.l_,{to:`${U}/not-found`});const M=null===(a=null==F?void 0:F.collections)||void 0===a?void 0:a[E],O=`${L}${A}/${E}/${D}${_.versions.drafts?"?draft=true":""}`,Q=`${L}${A}/${E}${k?`/${D}`:""}?locale=${y}&depth=0&fallback-locale=null`,W=k&&(null===(t=null==M?void 0:M.update)||void 0===t?void 0:t.permission)||!k&&(null===(c=null==M?void 0:M.create)||void 0===c?void 0:c.permission);return l.createElement(b.f.Provider,{value:1},l.createElement(r.Z,{DefaultComponent:u.Z,CustomComponent:w,componentProps:{id:D,isLoading:!x,data:J,collection:_,permissions:M,isEditing:k,onSave:j,initialState:x,hasSavePermission:W,apiURL:O,action:Q}}))}}}]);