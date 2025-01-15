"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["2669"],{20165:function(e,i,t){t.d(i,{m:function(){return r}});var o=t(73577),s=(t(71695),t(47021),t(57243)),a=t(50778);t(37583);let l,n,d=e=>e;const r=e=>{switch(e.level){case 0:return"M11,10H13V16H11V10M22,12H19V20H5V12H2L12,3L22,12M15,10A2,2 0 0,0 13,8H11A2,2 0 0,0 9,10V16A2,2 0 0,0 11,18H13A2,2 0 0,0 15,16V10Z";case 1:return"M12,3L2,12H5V20H19V12H22L12,3M10,8H14V18H12V10H10V8Z";case 2:return"M12,3L2,12H5V20H19V12H22L12,3M9,8H13A2,2 0 0,1 15,10V12A2,2 0 0,1 13,14H11V16H15V18H9V14A2,2 0 0,1 11,12H13V10H9V8Z";case 3:return"M12,3L22,12H19V20H5V12H2L12,3M15,11.5V10C15,8.89 14.1,8 13,8H9V10H13V12H11V14H13V16H9V18H13A2,2 0 0,0 15,16V14.5A1.5,1.5 0 0,0 13.5,13A1.5,1.5 0 0,0 15,11.5Z";case-1:return"M12,3L2,12H5V20H19V12H22L12,3M11,15H7V13H11V15M15,18H13V10H11V8H15V18Z"}return"M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"};(0,o.Z)([(0,a.Mo)("ha-floor-icon")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"floor",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"icon",value:void 0},{kind:"method",key:"render",value:function(){if(this.floor.icon)return(0,s.dy)(l||(l=d`<ha-icon .icon="${0}"></ha-icon>`),this.floor.icon);const e=r(this.floor);return(0,s.dy)(n||(n=d`<ha-svg-icon .path="${0}"></ha-svg-icon>`),e)}}]}}),s.oi)},88801:function(e,i,t){t.a(e,(async function(e,i){try{var o=t(73577),s=(t(19083),t(71695),t(19423),t(40251),t(61006),t(39527),t(92181),t(99790),t(41360),t(13334),t(36993),t(47021),t(57243)),a=t(50778),l=t(35359),n=t(27486),d=t(36522),r=t(73850),c=t(83377),u=t(82100),h=t(71857),f=t(36595),v=t(76131),_=t(53955),m=t(94279),k=(t(20165),t(23043),t(7285),e([m]));m=(k.then?(await k)():k)[0];let b,y,p=e=>e;const g="___ADD_NEW___",H="___NO_FLOORS___",V="___ADD_NEW_SUGGESTION___",C=e=>(0,s.dy)(b||(b=p`<ha-list-item graphic="icon" class="${0}"> <ha-floor-icon slot="graphic" .floor="${0}"></ha-floor-icon> ${0} </ha-list-item>`),(0,l.$)({"add-new":e.floor_id===g}),e,e.name);(0,o.Z)([(0,a.Mo)("ha-floor-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,attribute:"no-add"})],key:"noAdd",value(){return!1}},{kind:"field",decorators:[(0,a.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Array,attribute:"exclude-floor"})],key:"excludeFloors",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"required",value(){return!1}},{kind:"field",decorators:[(0,a.SB)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,a.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_suggestion",value:void 0},{kind:"field",key:"_init",value(){return!1}},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.open())}},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.focus())}},{kind:"field",key:"_getFloors",value(){return(0,n.Z)(((e,i,t,o,s,a,l,n,d,c,u)=>{let v,_,m={};(s||a||l||n||d)&&(m=(0,h.R6)(o),v=t,_=o.filter((e=>e.area_id)),s&&(v=v.filter((e=>{const i=m[e.id];return!(!i||!i.length)&&m[e.id].some((e=>s.includes((0,r.M)(e.entity_id))))})),_=_.filter((e=>s.includes((0,r.M)(e.entity_id))))),a&&(v=v.filter((e=>{const i=m[e.id];return!i||!i.length||o.every((e=>!a.includes((0,r.M)(e.entity_id))))})),_=_.filter((e=>!a.includes((0,r.M)(e.entity_id))))),l&&(v=v.filter((e=>{const i=m[e.id];return!(!i||!i.length)&&m[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&(i.attributes.device_class&&l.includes(i.attributes.device_class))}))})),_=_.filter((e=>{const i=this.hass.states[e.entity_id];return i.attributes.device_class&&l.includes(i.attributes.device_class)}))),n&&(v=v.filter((e=>n(e)))),d&&(v=v.filter((e=>{const i=m[e.id];return!(!i||!i.length)&&m[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&d(i)}))})),_=_.filter((e=>{const i=this.hass.states[e.entity_id];return!!i&&d(i)}))));let k,b=e;var y;(v&&(k=v.filter((e=>e.area_id)).map((e=>e.area_id))),_)&&(k=(null!==(y=k)&&void 0!==y?y:[]).concat(_.filter((e=>e.area_id)).map((e=>e.area_id))));if(k){const e=(0,f.N5)(i);b=b.filter((i=>{var t;return null===(t=e[i.floor_id])||void 0===t?void 0:t.some((e=>k.includes(e.area_id)))}))}return u&&(b=b.filter((e=>!u.includes(e.floor_id)))),b.length||(b=[{floor_id:H,name:this.hass.localize("ui.components.floor-picker.no_floors"),icon:null,level:null,aliases:[],created_at:0,modified_at:0}]),c?b:[...b,{floor_id:g,name:this.hass.localize("ui.components.floor-picker.add_new"),icon:"mdi:plus",level:null,aliases:[],created_at:0,modified_at:0}]}))}},{kind:"method",key:"updated",value:function(e){if(!this._init&&this.hass||this._init&&e.has("_opened")&&this._opened){this._init=!0;const e=this._getFloors(Object.values(this.hass.floors),Object.values(this.hass.areas),Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeFloors).map((e=>Object.assign(Object.assign({},e),{},{strings:[e.floor_id,e.name,...e.aliases]})));this.comboBox.items=e,this.comboBox.filteredItems=e}}},{kind:"method",key:"render",value:function(){var e;return(0,s.dy)(y||(y=p` <ha-combo-box .hass="${0}" .helper="${0}" item-value-path="floor_id" item-id-path="floor_id" item-label-path="name" .value="${0}" .disabled="${0}" .required="${0}" .label="${0}" .placeholder="${0}" .renderer="${0}" @filter-changed="${0}" @opened-changed="${0}" @value-changed="${0}"> </ha-combo-box> `),this.hass,this.helper,this._value,this.disabled,this.required,void 0===this.label&&this.hass?this.hass.localize("ui.components.floor-picker.floor"):this.label,this.placeholder?null===(e=this.hass.floors[this.placeholder])||void 0===e?void 0:e.name:void 0,C,this._filterChanged,this._openedChanged,this._floorChanged)}},{kind:"method",key:"_filterChanged",value:function(e){var i;const t=e.target,o=e.detail.value;if(!o)return void(this.comboBox.filteredItems=this.comboBox.items);const s=(0,c.q)(o,(null===(i=t.items)||void 0===i?void 0:i.filter((e=>![H,g].includes(e.label_id))))||[]);0===s.length?this.noAdd?this.comboBox.filteredItems=[{floor_id:H,name:this.hass.localize("ui.components.floor-picker.no_match"),icon:null,level:null,aliases:[],created_at:0,modified_at:0}]:(this._suggestion=o,this.comboBox.filteredItems=[{floor_id:V,name:this.hass.localize("ui.components.floor-picker.add_new_sugestion",{name:this._suggestion}),icon:"mdi:plus",level:null,aliases:[],created_at:0,modified_at:0}]):this.comboBox.filteredItems=s}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_floorChanged",value:function(e){e.stopPropagation();let i=e.detail.value;if(i===H)return i="",void this.comboBox.setInputValue("");[V,g].includes(i)?(e.target.value=this._value,this.hass.loadFragmentTranslation("config"),(0,_.y)(this,{suggestedName:i===V?this._suggestion:"",createEntry:async(e,i)=>{try{const t=await(0,f.z3)(this.hass,e);i.forEach((e=>{(0,u.IO)(this.hass,e,{floor_id:t.floor_id})}));const o=[...Object.values(this.hass.floors),t];this.comboBox.filteredItems=this._getFloors(o,Object.values(this.hass.areas),Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeFloors),await this.updateComplete,await this.comboBox.updateComplete,this._setValue(t.floor_id)}catch(t){(0,v.Ys)(this,{title:this.hass.localize("ui.components.floor-picker.failed_create_floor"),text:t.message})}}}),this._suggestion=void 0,this.comboBox.setInputValue("")):i!==this._value&&this._setValue(i)}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,d.B)(this,"value-changed",{value:e}),(0,d.B)(this,"change")}),0)}}]}}),s.oi);i()}catch(b){i(b)}}))},36595:function(e,i,t){t.d(i,{N5:function(){return s},z3:function(){return o}});t(71695),t(92745),t(19423),t(47021),t(1416),t(43839);const o=(e,i)=>e.callWS(Object.assign({type:"config/floor_registry/create"},i)),s=e=>{const i={};for(const t of e)t.floor_id&&(t.floor_id in i||(i[t.floor_id]=[]),i[t.floor_id].push(t));return i}},53955:function(e,i,t){t.d(i,{y:function(){return a}});t(71695),t(40251),t(47021);var o=t(36522);const s=()=>Promise.all([t.e("7983"),t.e("8006"),t.e("2311"),t.e("2308"),t.e("2836")]).then(t.bind(t,43604)),a=(e,i)=>{(0,o.B)(e,"show-dialog",{dialogTag:"dialog-floor-registry-detail",dialogImport:s,dialogParams:i})}}}]);
//# sourceMappingURL=2669.cf04cd897e9b6999.js.map