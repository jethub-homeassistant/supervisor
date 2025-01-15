"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["7979"],{49976:function(e,t,i){i.d(t,{U:function(){return n}});const n=e=>e.stopPropagation()},7285:function(e,t,i){var n=i(73577),a=i(72621),s=(i(71695),i(47021),i(65703)),o=i(46289),r=i(57243),d=i(50778);let l,c,u,h=e=>e;(0,n.Z)([(0,d.Mo)("ha-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,a.Z)(i,"renderRipple",this,3)([])}},{kind:"get",static:!0,key:"styles",value:function(){return[o.W,(0,r.iv)(l||(l=h`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-inline-start:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px));padding-inline-end:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`)),"rtl"===document.dir?(0,r.iv)(c||(c=h`span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important;--direction:rtl}`)):(0,r.iv)(u||(u=h``))]}}]}}),s.K)},92824:function(e,t,i){var n=i(73577),a=i(72621),s=(i(71695),i(40251),i(47021),i(60930)),o=i(9714),r=i(57243),d=i(50778),l=i(22381),c=i(76320);i(23043);let u,h,p,m,v=e=>e;(0,n.Z)([(0,d.Mo)("ha-select")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"icon",value(){return!1}},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0})],key:"clearable",value(){return!1}},{kind:"field",decorators:[(0,d.Cb)({attribute:"inline-arrow",type:Boolean})],key:"inlineArrow",value(){return!1}},{kind:"method",key:"render",value:function(){return(0,r.dy)(u||(u=v` ${0} ${0} `),(0,a.Z)(i,"render",this,3)([]),this.clearable&&!this.required&&!this.disabled&&this.value?(0,r.dy)(h||(h=v`<ha-icon-button label="clear" @click="${0}" .path="${0}"></ha-icon-button>`),this._clearValue,"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"):r.Ld)}},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?(0,r.dy)(p||(p=v`<span class="mdc-select__icon"><slot name="icon"></slot></span>`)):r.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)(i,"connectedCallback",this,3)([]),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"firstUpdated",value:async function(){var e;((0,a.Z)(i,"firstUpdated",this,3)([]),this.inlineArrow)&&(null===(e=this.shadowRoot)||void 0===e||null===(e=e.querySelector(".mdc-select__selected-text-container"))||void 0===e||e.classList.add("inline-arrow"))}},{kind:"method",key:"updated",value:function(e){if((0,a.Z)(i,"updated",this,3)([e]),e.has("inlineArrow")){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".mdc-select__selected-text-container");this.inlineArrow?null==e||e.classList.add("inline-arrow"):null==e||e.classList.remove("inline-arrow")}}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)(i,"disconnectedCallback",this,3)([]),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"_clearValue",value:function(){!this.disabled&&this.value&&(this.valueSetDirectly=!0,this.select(-1),this.mdcFoundation.handleChange())}},{kind:"field",key:"_translationsUpdated",value(){return(0,l.D)((async()=>{await(0,c.y)(),this.layoutOptions()}),500)}},{kind:"field",static:!0,key:"styles",value(){return[o.W,(0,r.iv)(m||(m=v`:host([clearable]){position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-select__anchor{height:var(--ha-select-height,56px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}.mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,0px)}:host([clearable]) .mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,12px)}ha-icon-button{position:absolute;top:10px;right:28px;--mdc-icon-button-size:36px;--mdc-icon-size:20px;color:var(--secondary-text-color);inset-inline-start:initial;inset-inline-end:28px;direction:var(--direction)}.inline-arrow{flex-grow:0}`))]}}]}}),s.K)},52922:function(e,t,i){i.r(t),i.d(t,{HaBackupLocationSelector:()=>x});var n=i("73577"),a=(i("71695"),i("47021"),i("57243")),s=i("50778"),o=(i("19083"),i("61893"),i("40251"),i("61006"),i("39527"),i("99790"),i("13334"),i("27486")),r=i("72344"),d=i("36522"),l=i("49976"),c=i("1416"),u=i("74617");i("99426"),i("7285"),i("92824");let h,p,m,v,k,f=e=>e;const y="/backup";(0,n.Z)([(0,s.Mo)("ha-mount-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"required",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)()],key:"usage",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_mounts",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_error",value:void 0},{kind:"method",key:"firstUpdated",value:function(){this._getMounts()}},{kind:"method",key:"render",value:function(){if(this._error)return(0,a.dy)(h||(h=f`<ha-alert alert-type="error">${0}</ha-alert>`),this._error);if(!this._mounts)return a.Ld;const e=(0,a.dy)(p||(p=f`<ha-list-item graphic="icon" .value="${0}"> <span> ${0} </span> <ha-svg-icon slot="graphic" .path="${0}"></ha-svg-icon> </ha-list-item>`),y,this.hass.localize("ui.components.mount-picker.use_datadisk")||"Use data disk for backup","M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M12,4A6,6 0 0,0 6,10C6,13.31 8.69,16 12.1,16L11.22,13.77C10.95,13.29 11.11,12.68 11.59,12.4L12.45,11.9C12.93,11.63 13.54,11.79 13.82,12.27L15.74,14.69C17.12,13.59 18,11.9 18,10A6,6 0 0,0 12,4M12,9A1,1 0 0,1 13,10A1,1 0 0,1 12,11A1,1 0 0,1 11,10A1,1 0 0,1 12,9M7,18A1,1 0 0,0 6,19A1,1 0 0,0 7,20A1,1 0 0,0 8,19A1,1 0 0,0 7,18M12.09,13.27L14.58,19.58L17.17,18.08L12.95,12.77L12.09,13.27Z");return(0,a.dy)(m||(m=f` <ha-select .label="${0}" .value="${0}" .required="${0}" .disabled="${0}" .helper="${0}" @selected="${0}" @closed="${0}" fixedMenuPosition naturalMenuWidth> ${0} ${0} ${0} </ha-select> `),void 0===this.label&&this.hass?this.hass.localize("ui.components.mount-picker.mount"):this.label,this._value,this.required,this.disabled,this.helper,this._mountChanged,l.U,this.usage!==u.eX.BACKUP||this._mounts.default_backup_mount&&this._mounts.default_backup_mount!==y?a.Ld:e,this._filterMounts(this._mounts,this.usage).map((e=>(0,a.dy)(v||(v=f`<ha-list-item twoline graphic="icon" .value="${0}"> <span>${0}</span> <span slot="secondary">${0}${0}${0}</span> <ha-svg-icon slot="graphic" .path="${0}"></ha-svg-icon> </ha-list-item>`),e.name,e.name,e.server,e.port?`:${e.port}`:a.Ld,e.type===u.mw.NFS?e.path:`:${e.share}`,e.usage===u.eX.MEDIA?"M19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3M10 16V8L15 12":e.usage===u.eX.SHARE?"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z":"M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z"))),this.usage===u.eX.BACKUP&&this._mounts.default_backup_mount?e:a.Ld)}},{kind:"field",key:"_filterMounts",value(){return(0,o.Z)(((e,t)=>{let i=e.mounts.filter((e=>[u.mw.CIFS,u.mw.NFS].includes(e.type)));return t&&(i=e.mounts.filter((e=>e.usage===t))),i.sort(((t,i)=>t.name===e.default_backup_mount?-1:i.name===e.default_backup_mount?1:(0,c.f)(t.name,i.name,this.hass.locale.language)))}))}},{kind:"method",key:"_getMounts",value:async function(){try{(0,r.p)(this.hass,"hassio")?(this._mounts=await(0,u.rE)(this.hass),this.usage!==u.eX.BACKUP||this.value||(this.value=this._mounts.default_backup_mount||y)):this._error=this.hass.localize("ui.components.mount-picker.error.no_supervisor")}catch(e){this._error=this.hass.localize("ui.components.mount-picker.error.fetch_mounts")}}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_mountChanged",value:function(e){e.stopPropagation();const t=e.target.value;t!==this._value&&this._setValue(t)}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,d.B)(this,"value-changed",{value:e}),(0,d.B)(this,"change")}),0)}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,a.iv)(k||(k=f`ha-select{width:100%}`))]}}]}}),a.oi);let g,_,b=e=>e,x=(0,n.Z)([(0,s.Mo)("ha-selector-backup_location")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"required",value(){return!0}},{kind:"method",key:"render",value:function(){return(0,a.dy)(g||(g=b`<ha-mount-picker .hass="${0}" .value="${0}" .label="${0}" .helper="${0}" .disabled="${0}" .required="${0}" usage="backup"></ha-mount-picker>`),this.hass,this.value,this.label,this.helper,this.disabled,this.required)}},{kind:"field",static:!0,key:"styles",value(){return(0,a.iv)(_||(_=b`ha-mount-picker{width:100%}`))}}]}}),a.oi)},74617:function(e,t,i){i.d(t,{Cl:function(){return o},eX:function(){return a},mw:function(){return n},rE:function(){return s}});i(40251);let n=function(e){return e.BIND="bind",e.CIFS="cifs",e.NFS="nfs",e}({}),a=function(e){return e.BACKUP="backup",e.MEDIA="media",e.SHARE="share",e}({});const s=async e=>e.callWS({type:"supervisor/api",endpoint:"/mounts",method:"get",timeout:null}),o=async(e,t)=>e.callWS({type:"supervisor/api",endpoint:"/mounts/options",method:"post",timeout:null,data:t})}}]);
//# sourceMappingURL=7979.6a016da5136b3678.js.map