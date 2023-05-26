"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[4025],{57966:(t,i,e)=>{e.d(i,{z:()=>s});const s=t=>(i,e)=>t.includes(i,e)},56280:(t,i,e)=>{e.r(i),e.d(i,{HaStatisticSelector:()=>v});var s=e(17463),a=e(68144),n=e(14243),d=e(47181),l=e(14516),c=e(76680),o=e(85415),r=e(91741);const u=(t,i,e)=>{const s=t.states[i];return s?(0,r.C)(s):(null==e?void 0:e.name)||i};var h=e(27322);e(77576),e(52039),e(71281);(0,s.Z)([(0,n.Mo)("ha-statistic-picker")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"statistic-types"})],key:"statisticTypes",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"allow-custom-entity"})],key:"allowCustomEntity",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array})],key:"statisticIds",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-statistics-unit-of-measurement"})],key:"includeStatisticsUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"include-unit-class"})],key:"includeUnitClass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"include-device-class"})],key:"includeDeviceClass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"entities-only"})],key:"entitiesOnly",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,n.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"field",key:"_rowRenderer",value(){return t=>a.dy`<mwc-list-item graphic="avatar" twoline> ${t.state?a.dy`<state-badge slot="graphic" .stateObj="${t.state}"></state-badge>`:""} <span>${t.name}</span> <span slot="secondary">${""===t.id||"__missing"===t.id?a.dy`<a target="_blank" rel="noopener noreferrer" href="${(0,h.R)(this.hass,"/more-info/statistics/")}">${this.hass.localize("ui.components.statistic-picker.learn_more")}</a>`:t.id}</span> </mwc-list-item>`}},{kind:"field",key:"_getStatistics",value(){return(0,l.Z)(((t,i,e,s,a)=>{if(!t.length)return[{id:"",name:this.hass.localize("ui.components.statistic-picker.no_statistics")}];if(i){const e=(0,c.r)(i);t=t.filter((t=>e.includes(t.statistics_unit_of_measurement)))}if(e){const i=(0,c.r)(e);t=t.filter((t=>i.includes(t.unit_class)))}if(s){const i=(0,c.r)(s);t=t.filter((t=>{const e=this.hass.states[t.statistic_id];return!e||i.includes(e.attributes.device_class||"")}))}const n=[];return t.forEach((t=>{const i=this.hass.states[t.statistic_id];i?n.push({id:t.statistic_id,name:u(this.hass,t.statistic_id,t),state:i}):a||n.push({id:t.statistic_id,name:u(this.hass,t.statistic_id,t)})})),n.length?(n.length>1&&n.sort(((t,i)=>(0,o.$)(t.name||"",i.name||"",this.hass.locale.language))),n.push({id:"__missing",name:this.hass.localize("ui.components.statistic-picker.missing_entity")}),n):[{id:"",name:this.hass.localize("ui.components.statistic-picker.no_match")}]}))}},{kind:"method",key:"open",value:function(){var t;null===(t=this.comboBox)||void 0===t||t.open()}},{kind:"method",key:"focus",value:function(){var t;null===(t=this.comboBox)||void 0===t||t.focus()}},{kind:"method",key:"willUpdate",value:function(t){(!this.hasUpdated&&!this.statisticIds||t.has("statisticTypes"))&&this._getStatisticIds(),(!this._init&&this.statisticIds||t.has("_opened")&&this._opened)&&(this._init=!0,this.hasUpdated?this.comboBox.items=this._getStatistics(this.statisticIds,this.includeStatisticsUnitOfMeasurement,this.includeUnitClass,this.includeDeviceClass,this.entitiesOnly):this.updateComplete.then((()=>{this.comboBox.items=this._getStatistics(this.statisticIds,this.includeStatisticsUnitOfMeasurement,this.includeUnitClass,this.includeDeviceClass,this.entitiesOnly)})))}},{kind:"method",key:"render",value:function(){return a.dy` <ha-combo-box .hass="${this.hass}" .label="${void 0===this.label&&this.hass?this.hass.localize("ui.components.statistic-picker.statistic"):this.label}" .value="${this._value}" .renderer="${this._rowRenderer}" .disabled="${this.disabled}" .allowCustomValue="${this.allowCustomEntity}" item-value-path="id" item-id-path="id" item-label-path="name" @opened-changed="${this._openedChanged}" @value-changed="${this._statisticChanged}"></ha-combo-box> `}},{kind:"method",key:"_getStatisticIds",value:async function(){var t,i;this.statisticIds=await(t=this.hass,i=this.statisticTypes,t.callWS({type:"recorder/list_statistic_ids",statistic_type:i}))}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_statisticChanged",value:function(t){t.stopPropagation();let i=t.detail.value;"__missing"===i&&(i=""),i!==this._value&&this._setValue(i)}},{kind:"method",key:"_openedChanged",value:function(t){this._opened=t.detail.value}},{kind:"method",key:"_setValue",value:function(t){this.value=t,setTimeout((()=>{(0,d.B)(this,"value-changed",{value:t}),(0,d.B)(this,"change")}),0)}}]}}),a.oi),(0,s.Z)([(0,n.Mo)("ha-statistics-picker")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array})],key:"value",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array})],key:"statisticIds",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"statistic-types"})],key:"statisticTypes",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"picked-statistic-label"})],key:"pickedStatisticLabel",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"pick-statistic-label"})],key:"pickStatisticLabel",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"allow-custom-entity"})],key:"allowCustomEntity",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"include-statistics-unit-of-measurement"})],key:"includeStatisticsUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"include-unit-class"})],key:"includeUnitClass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"include-device-class"})],key:"includeDeviceClass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"ignore-restrictions-on-first-statistic"})],key:"ignoreRestrictionsOnFirstStatistic",value:()=>!1},{kind:"method",key:"render",value:function(){if(!this.hass)return a.Ld;const t=this.ignoreRestrictionsOnFirstStatistic&&this._currentStatistics.length<=1,i=t?void 0:this.includeStatisticsUnitOfMeasurement,e=t?void 0:this.includeUnitClass,s=t?void 0:this.includeDeviceClass,n=t?void 0:this.statisticTypes;return a.dy` ${this._currentStatistics.map((t=>a.dy` <div> <ha-statistic-picker .curValue="${t}" .hass="${this.hass}" .includeStatisticsUnitOfMeasurement="${i}" .includeUnitClass="${e}" .includeDeviceClass="${s}" .value="${t}" .statisticTypes="${n}" .statisticIds="${this.statisticIds}" .label="${this.pickedStatisticLabel}" .allowCustomEntity="${this.allowCustomEntity}" @value-changed="${this._statisticChanged}"></ha-statistic-picker> </div> `))} <div> <ha-statistic-picker .hass="${this.hass}" .includeStatisticsUnitOfMeasurement="${this.includeStatisticsUnitOfMeasurement}" .includeUnitClass="${this.includeUnitClass}" .includeDeviceClass="${this.includeDeviceClass}" .statisticTypes="${this.statisticTypes}" .statisticIds="${this.statisticIds}" .label="${this.pickStatisticLabel}" .allowCustomEntity="${this.allowCustomEntity}" @value-changed="${this._addStatistic}"></ha-statistic-picker> </div> `}},{kind:"get",key:"_currentStatistics",value:function(){return this.value||[]}},{kind:"method",key:"_updateStatistics",value:async function(t){this.value=t,(0,d.B)(this,"value-changed",{value:t})}},{kind:"method",key:"_statisticChanged",value:function(t){t.stopPropagation();const i=t.currentTarget.curValue,e=t.detail.value;if(e===i)return;const s=this._currentStatistics;e&&!s.includes(e)?this._updateStatistics(s.map((t=>t===i?e:t))):this._updateStatistics(s.filter((t=>t!==i)))}},{kind:"method",key:"_addStatistic",value:async function(t){t.stopPropagation();const i=t.detail.value;if(!i)return;if(t.currentTarget.value="",!i)return;const e=this._currentStatistics;e.includes(i)||this._updateStatistics([...e,i])}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{width:200px;display:block}ha-statistic-picker{display:block;width:100%;margin-top:8px}`}}]}}),a.oi);let v=(0,s.Z)([(0,n.Mo)("ha-selector-statistic")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[(0,n.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return this.selector.statistic.multiple?a.dy` ${this.label?a.dy`<label>${this.label}</label>`:""} <ha-statistics-picker .hass="${this.hass}" .value="${this.value}" .helper="${this.helper}" .disabled="${this.disabled}" .required="${this.required}"></ha-statistics-picker> `:a.dy`<ha-statistic-picker .hass="${this.hass}" .value="${this.value}" .label="${this.label}" .helper="${this.helper}" .disabled="${this.disabled}" .required="${this.required}" allow-custom-entity></ha-statistic-picker>`}}]}}),a.oi)},22814:(t,i,e)=>{e.d(i,{iI:()=>a,oT:()=>s});location.protocol,location.host;const s=t=>t.map((t=>{if("string"!==t.type)return t;switch(t.name){case"username":return{...t,autocomplete:"username"};case"password":return{...t,autocomplete:"current-password"};case"code":return{...t,autocomplete:"one-time-code"};default:return t}})),a=(t,i)=>t.callWS({type:"auth/sign_path",path:i})},56007:(t,i,e)=>{e.d(i,{PX:()=>d,V_:()=>l,lz:()=>n,nZ:()=>a,rk:()=>o});var s=e(57966);const a="unavailable",n="unknown",d="off",l=[a,n],c=[a,n,d],o=(0,s.z)(l);(0,s.z)(c)},27322:(t,i,e)=>{e.d(i,{R:()=>s});const s=(t,i)=>`https://${t.config.version.includes("b")?"rc":t.config.version.includes("dev")?"next":"www"}.home-assistant.io${i}`}}]);
//# sourceMappingURL=4025-_ezs8OIWSX4.js.map