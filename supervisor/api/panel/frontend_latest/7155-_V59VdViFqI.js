export const id=7155;export const ids=[7155];export const modules={77576:(e,t,i)=>{var o=i(17463),a=i(34541),n=i(47838),d=i(29530),l=(i(63873),i(53947)),r=i(68144),s=i(79932),c=i(30153),h=i(47181);i(5666),i(73366),i(3555);(0,l.hC)("vaadin-combo-box-item",r.iv`:host{padding:0!important}:host([focused]:not([disabled])){background-color:rgba(var(--rgb-primary-text-color,0,0,0),.12)}:host([selected]:not([disabled])){background-color:transparent;color:var(--mdc-theme-primary);--mdc-ripple-color:var(--mdc-theme-primary);--mdc-theme-text-primary-on-background:var(--mdc-theme-primary)}:host([selected]:not([disabled])):before{background-color:var(--mdc-theme-primary);opacity:.12;content:"";position:absolute;top:0;left:0;width:100%;height:100%}:host([selected][focused]:not([disabled])):before{opacity:.24}:host(:hover:not([disabled])){background-color:transparent}[part=content]{width:100%}[part=checkmark]{display:none}`);(0,o.Z)([(0,s.Mo)("ha-combo-box")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"validationMessage",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"invalid",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"icon",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"items",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"filteredItems",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"dataProvider",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"allow-custom-value",type:Boolean})],key:"allowCustomValue",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({attribute:"item-value-path"})],key:"itemValuePath",value:()=>"value"},{kind:"field",decorators:[(0,s.Cb)({attribute:"item-label-path"})],key:"itemLabelPath",value:()=>"label"},{kind:"field",decorators:[(0,s.Cb)({attribute:"item-id-path"})],key:"itemIdPath",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"renderer",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0,attribute:"opened"})],key:"opened",value:void 0},{kind:"field",decorators:[(0,s.IO)("vaadin-combo-box-light",!0)],key:"_comboBox",value:void 0},{kind:"field",decorators:[(0,s.IO)("ha-textfield",!0)],key:"_inputElement",value:void 0},{kind:"field",key:"_overlayMutationObserver",value:void 0},{kind:"field",key:"_bodyMutationObserver",value:void 0},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,null===(e=this._comboBox)||void 0===e||e.open()}},{kind:"method",key:"focus",value:async function(){var e,t;await this.updateComplete,await(null===(e=this._inputElement)||void 0===e?void 0:e.updateComplete),null===(t=this._inputElement)||void 0===t||t.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,n.Z)(i.prototype),"disconnectedCallback",this).call(this),this._overlayMutationObserver&&(this._overlayMutationObserver.disconnect(),this._overlayMutationObserver=void 0),this._bodyMutationObserver&&(this._bodyMutationObserver.disconnect(),this._bodyMutationObserver=void 0)}},{kind:"get",key:"selectedItem",value:function(){return this._comboBox.selectedItem}},{kind:"method",key:"setInputValue",value:function(e){this._comboBox.value=e}},{kind:"method",key:"render",value:function(){var e;return r.dy` <vaadin-combo-box-light .itemValuePath="${this.itemValuePath}" .itemIdPath="${this.itemIdPath}" .itemLabelPath="${this.itemLabelPath}" .items="${this.items}" .value="${this.value||""}" .filteredItems="${this.filteredItems}" .dataProvider="${this.dataProvider}" .allowCustomValue="${this.allowCustomValue}" .disabled="${this.disabled}" .required="${this.required}" ${(0,d.t)(this.renderer||this._defaultRowRenderer)} @opened-changed="${this._openedChanged}" @filter-changed="${this._filterChanged}" @value-changed="${this._valueChanged}" attr-for-value="value"> <ha-textfield label="${(0,c.o)(this.label)}" placeholder="${(0,c.o)(this.placeholder)}" ?disabled="${this.disabled}" ?required="${this.required}" validationMessage="${(0,c.o)(this.validationMessage)}" .errorMessage="${this.errorMessage}" class="input" autocapitalize="none" autocomplete="off" autocorrect="off" spellcheck="false" .suffix="${r.dy`<div style="width:28px" role="none presentation"></div>`}" .icon="${this.icon}" .invalid="${this.invalid}" helper="${(0,c.o)(this.helper)}" helperPersistent> <slot name="icon" slot="leadingIcon"></slot> </ha-textfield> ${this.value?r.dy`<ha-svg-icon role="button" tabindex="-1" aria-label="${(0,c.o)(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.clear"))}" class="clear-button" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" @click="${this._clearValue}"></ha-svg-icon>`:""} <ha-svg-icon role="button" tabindex="-1" aria-label="${(0,c.o)(this.label)}" aria-expanded="${this.opened?"true":"false"}" class="toggle-button" .path="${this.opened?"M7,15L12,10L17,15H7Z":"M7,10L12,15L17,10H7Z"}" @click="${this._toggleOpen}"></ha-svg-icon> </vaadin-combo-box-light> `}},{kind:"field",key:"_defaultRowRenderer",value(){return e=>r.dy`<ha-list-item> ${this.itemLabelPath?e[this.itemLabelPath]:e} </ha-list-item>`}},{kind:"method",key:"_clearValue",value:function(e){e.stopPropagation(),(0,h.B)(this,"value-changed",{value:void 0})}},{kind:"method",key:"_toggleOpen",value:function(e){var t,i;this.opened?(null===(t=this._comboBox)||void 0===t||t.close(),e.stopPropagation()):null===(i=this._comboBox)||void 0===i||i.inputElement.focus()}},{kind:"method",key:"_openedChanged",value:function(e){e.stopPropagation();const t=e.detail.value;if(setTimeout((()=>{this.opened=t}),0),(0,h.B)(this,"opened-changed",{value:e.detail.value}),t){const e=document.querySelector("vaadin-combo-box-overlay");e&&(e.setAttribute("required-vertical-space","0"),this._removeInert(e)),this._observeBody()}else{var i;null===(i=this._bodyMutationObserver)||void 0===i||i.disconnect(),this._bodyMutationObserver=void 0}}},{kind:"method",key:"_observeBody",value:function(){"MutationObserver"in window&&!this._bodyMutationObserver&&(this._bodyMutationObserver=new MutationObserver((e=>{e.forEach((e=>{e.addedNodes.forEach((e=>{"VAADIN-COMBO-BOX-OVERLAY"===e.nodeName&&this._removeInert(e)})),e.removedNodes.forEach((e=>{var t;"VAADIN-COMBO-BOX-OVERLAY"===e.nodeName&&(null===(t=this._overlayMutationObserver)||void 0===t||t.disconnect(),this._overlayMutationObserver=void 0)}))}))})),this._bodyMutationObserver.observe(document.body,{childList:!0}))}},{kind:"method",key:"_removeInert",value:function(e){var t;if(e.inert)return e.inert=!1,null===(t=this._overlayMutationObserver)||void 0===t||t.disconnect(),void(this._overlayMutationObserver=void 0);"MutationObserver"in window&&!this._overlayMutationObserver&&(this._overlayMutationObserver=new MutationObserver((e=>{e.forEach((e=>{if("inert"===e.attributeName){const i=e.target;var t;if(i.inert)null===(t=this._overlayMutationObserver)||void 0===t||t.disconnect(),this._overlayMutationObserver=void 0,i.inert=!1}}))})),this._overlayMutationObserver.observe(e,{attributes:!0}))}},{kind:"method",key:"_filterChanged",value:function(e){e.stopPropagation(),(0,h.B)(this,"filter-changed",{value:e.detail.value})}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.detail.value;t!==this.value&&(0,h.B)(this,"value-changed",{value:t||void 0})}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`:host{display:block;width:100%}vaadin-combo-box-light{position:relative;--vaadin-combo-box-overlay-max-height:calc(45vh)}ha-textfield{width:100%}ha-textfield>ha-icon-button{--mdc-icon-button-size:24px;padding:2px;color:var(--secondary-text-color)}ha-svg-icon{color:var(--input-dropdown-icon-color);position:absolute;cursor:pointer}.toggle-button{right:12px;top:-10px;inset-inline-start:initial;inset-inline-end:12px;direction:var(--direction)}:host([opened]) .toggle-button{color:var(--primary-color)}.clear-button{--mdc-icon-size:20px;top:-7px;right:36px;inset-inline-start:initial;inset-inline-end:36px;direction:var(--direction)}`}}]}}),r.oi)},73366:(e,t,i)=>{var o=i(17463),a=i(34541),n=i(47838),d=i(61092),l=i(96762),r=i(68144),s=i(79932);(0,o.Z)([(0,s.Mo)("ha-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,a.Z)((0,n.Z)(i.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[l.W,r.iv`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`]}}]}}),d.K)},57155:(e,t,i)=>{var o=i(17463),a=i(68144),n=i(79932),d=i(47181);const l=e=>e.replace(/^_*(.)|_+(.)/g,((e,t,i)=>t?t.toUpperCase():" "+i.toUpperCase())),r=(e,t,i)=>e.sendMessagePromise({type:"lovelace/config",url_path:t,force:i});i(77576);const s=[],c=e=>a.dy` <mwc-list-item graphic="icon" .twoline="${!!e.title}"> <ha-icon .icon="${e.icon}" slot="graphic"></ha-icon> <span>${e.title||e.path}</span> <span slot="secondary">${e.path}</span> </mwc-list-item> `,h=(e,t,i)=>{var o,a,n;return{path:`/${e}/${null!==(o=t.path)&&void 0!==o?o:i}`,icon:null!==(a=t.icon)&&void 0!==a?a:"mdi:view-compact",title:null!==(n=t.title)&&void 0!==n?n:t.path?l(t.path):`${i}`}},u=(e,t)=>{var i;return{path:`/${t.url_path}`,icon:null!==(i=t.icon)&&void 0!==i?i:"mdi:view-dashboard",title:t.url_path===e.defaultPanel?e.localize("panel.states"):e.localize(`panel.${t.title}`)||t.title||(t.url_path?l(t.url_path):"")}};(0,o.Z)([(0,n.Mo)("ha-navigation-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_opened",value:()=>!1},{kind:"field",key:"navigationItemsLoaded",value:()=>!1},{kind:"field",key:"navigationItems",value:()=>s},{kind:"field",decorators:[(0,n.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"method",key:"render",value:function(){return a.dy` <ha-combo-box .hass="${this.hass}" item-value-path="path" item-label-path="path" .value="${this._value}" allow-custom-value .filteredItems="${this.navigationItems}" .label="${this.label}" .helper="${this.helper}" .disabled="${this.disabled}" .required="${this.required}" .renderer="${c}" @opened-changed="${this._openedChanged}" @value-changed="${this._valueChanged}" @filter-changed="${this._filterChanged}"> </ha-combo-box> `}},{kind:"method",key:"_openedChanged",value:async function(e){this._opened=e.detail.value,this._opened&&!this.navigationItemsLoaded&&this._loadNavigationItems()}},{kind:"method",key:"_loadNavigationItems",value:async function(){this.navigationItemsLoaded=!0;const e=Object.entries(this.hass.panels).map((([e,t])=>({id:e,...t}))),t=e.filter((e=>"lovelace"===e.component_name)),i=await Promise.all(t.map((e=>r(this.hass.connection,"lovelace"===e.url_path?null:e.url_path,!0).then((t=>[e.id,t])).catch((t=>[e.id,void 0]))))),o=new Map(i);this.navigationItems=[];for(const t of e){this.navigationItems.push(u(this.hass,t));const e=o.get(t.id);e&&e.views.forEach(((e,i)=>this.navigationItems.push(h(t.url_path,e,i))))}this.comboBox.filteredItems=this.navigationItems}},{kind:"method",key:"shouldUpdate",value:function(e){return!this._opened||e.has("_opened")}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation(),this._setValue(e.detail.value)}},{kind:"method",key:"_setValue",value:function(e){this.value=e,(0,d.B)(this,"value-changed",{value:this._value},{bubbles:!1,composed:!1})}},{kind:"method",key:"_filterChanged",value:function(e){const t=e.detail.value.toLowerCase();if(t.length>=2){const e=[];this.navigationItems.forEach((i=>{(i.path.toLowerCase().includes(t)||i.title.toLowerCase().includes(t))&&e.push(i)})),e.length>0?this.comboBox.filteredItems=e:this.comboBox.filteredItems=[]}else this.comboBox.filteredItems=this.navigationItems}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`ha-icon,ha-svg-icon{color:var(--primary-text-color);position:relative;bottom:0px}[slot=prefix]{margin-right:8px}`}}]}}),a.oi)}};
//# sourceMappingURL=7155-_V59VdViFqI.js.map