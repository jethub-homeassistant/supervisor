"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[1686],{83447:function(e,t,i){i.d(t,{l:function(){return a}});var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_",i="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",a="aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz".concat(t).concat(t).concat(t).concat(t).concat(t).concat(t),o=new RegExp(i.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,t).replace(o,(function(e){return a.charAt(i.indexOf(e))})).replace(/&/g,"".concat(t,"and").concat(t)).replace(/[^\w-]+/g,"").replace(/-/g,t).replace(new RegExp("(".concat(t,")\\1+"),"g"),"$1").replace(new RegExp("^".concat(t,"+")),"").replace(new RegExp("".concat(t,"+$")),"")}},71281:function(e,t,i){var a=i(76775),o=i(88962),r=i(33368),n=i(71650),s=i(82390),l=i(69205),d=i(70906),c=i(91808),u=i(88771),v=i(47838),h=i(68144),p=i(79932),b=i(30153),m=i(76538),f=i(58831),y=i(22311),g=i(56007),k=i(46097);var _=i(83447);var x,Z,C,w,O,M,I=new Set(["alarm_control_panel","alert","automation","binary_sensor","calendar","camera","climate","cover","device_tracker","fan","group","humidifier","input_boolean","light","lock","media_player","person","plant","remote","schedule","script","siren","sun","switch","timer","update","vacuum"]),L=function(e,t){if((void 0!==t?t:null==e?void 0:e.state)===g.nZ)return"var(--state-unavailable-color)";var i,a=P(e,t);return a?(i=a,Array.isArray(i)?i.reverse().reduce((function(e,t){return"var(".concat(t).concat(e?", ".concat(e):"",")")}),void 0):"var(".concat(i,")")):void 0},B=function(e,t,i){var a=void 0!==i?i:t.state,o=function(e,t){var i=(0,f.M)(e.entity_id),a=void 0!==t?t:null==e?void 0:e.state;if(["button","input_button","scene"].includes(i))return a!==g.nZ;if((0,g.rk)(a))return!1;if(a===g.PX&&"alert"!==i)return!1;switch(i){case"alarm_control_panel":return"disarmed"!==a;case"alert":return"idle"!==a;case"cover":return"closed"!==a;case"device_tracker":case"person":return"not_home"!==a;case"lock":return"locked"!==a;case"media_player":return"standby"!==a;case"vacuum":return!["idle","docked","paused"].includes(a);case"plant":return"problem"===a;case"group":return["on","home","open","locked","problem"].includes(a);case"timer":return"active"===a;case"camera":return"streaming"===a}return!0}(t,i),r=[],n=(0,_.l)(a,"_"),s=o?"active":"inactive",l=t.attributes.device_class;return l&&r.push("--state-".concat(e,"-").concat(l,"-").concat(n,"-color")),r.push("--state-".concat(e,"-").concat(n,"-color"),"--state-".concat(e,"-").concat(s,"-color"),"--state-".concat(s,"-color")),r},P=function(e,t){var i=void 0!==t?t:null==e?void 0:e.state,a=(0,f.M)(e.entity_id),o=e.attributes.device_class;if("sensor"===a&&"battery"===o){var r=function(e){var t=Number(e);if(!isNaN(t))return t>=70?"--state-sensor-battery-high-color":t>=30?"--state-sensor-battery-medium-color":"--state-sensor-battery-low-color"}(i);if(r)return[r]}if("group"===a){var n=function(e){var t=e.attributes.entity_id||[],i=(0,k.Z)(new Set(t.map((function(e){return(0,f.M)(e)}))));return 1===i.length?i[0]:void 0}(e);if(n&&I.has(n))return B(n,e,t)}if(I.has(a))return B(a,e,t)},V=(0,h.iv)(x||(x=(0,o.Z)(["ha-state-icon[data-domain=alarm_control_panel][data-state=arming],ha-state-icon[data-domain=alarm_control_panel][data-state=pending],ha-state-icon[data-domain=alarm_control_panel][data-state=triggered],ha-state-icon[data-domain=lock][data-state=jammed]{animation:pulse 1s infinite}@keyframes pulse{0%{opacity:1}50%{opacity:0}100%{opacity:1}}ha-state-icon[data-state=unavailable]{color:var(--state-unavailable-color)}"]))),j=(i(22814),function(e,t,i){return"".concat(e,"&width=").concat(t,"&height=").concat(i)}),E={cooling:"cool",drying:"dry",fan:"fan_only",heating:"heat",idle:"off",off:"off"},A=i(49706),R=i(93980),N=(i(52039),(0,c.Z)([(0,p.Mo)("ha-state-icon")],(function(e,t){var i=function(t){(0,l.Z)(a,t);var i=(0,d.Z)(a);function a(){var t;(0,n.Z)(this,a);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return t=i.call.apply(i,[this].concat(r)),e((0,s.Z)(t)),t}return(0,r.Z)(a)}(t);return{F:i,d:[{kind:"field",decorators:[(0,p.Cb)({attribute:!1})],key:"state",value:void 0},{kind:"field",decorators:[(0,p.Cb)()],key:"icon",value:void 0},{kind:"method",key:"render",value:function(){var e,t,i;return this.icon||null!==(e=this.state)&&void 0!==e&&e.attributes.icon?(0,h.dy)(Z||(Z=(0,o.Z)(['<ha-icon .icon="','"></ha-icon>'])),this.icon||(null===(t=this.state)||void 0===t?void 0:t.attributes.icon)):(0,h.dy)(C||(C=(0,o.Z)(['<ha-svg-icon .path="','"></ha-svg-icon>'])),(i=this.state)?(0,R.K)((0,f.M)(i.entity_id),i):A.Rb)}}]}}),h.oi),(0,c.Z)(null,(function(e,t){var i=function(t){(0,l.Z)(a,t);var i=(0,d.Z)(a);function a(){var t;(0,n.Z)(this,a);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return t=i.call.apply(i,[this].concat(r)),e((0,s.Z)(t)),t}return(0,r.Z)(a)}(t);return{F:i,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,p.Cb)()],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,p.Cb)()],key:"overrideIcon",value:void 0},{kind:"field",decorators:[(0,p.Cb)()],key:"overrideImage",value:void 0},{kind:"field",decorators:[(0,p.Cb)({type:Boolean})],key:"stateColor",value:void 0},{kind:"field",decorators:[(0,p.Cb)()],key:"color",value:void 0},{kind:"field",decorators:[(0,p.Cb)({type:Boolean,reflect:!0,attribute:"icon"})],key:"_showIcon",value:function(){return!0}},{kind:"field",decorators:[(0,p.SB)()],key:"_iconStyle",value:function(){return{}}},{kind:"method",key:"connectedCallback",value:function(){var e,t;(0,u.Z)((0,v.Z)(i.prototype),"connectedCallback",this).call(this),this.hasUpdated&&void 0===this.overrideImage&&(null!==(e=this.stateObj)&&void 0!==e&&e.attributes.entity_picture||null!==(t=this.stateObj)&&void 0!==t&&t.attributes.entity_picture_local)&&this.requestUpdate("stateObj")}},{kind:"method",key:"disconnectedCallback",value:function(){var e,t;(0,u.Z)((0,v.Z)(i.prototype),"disconnectedCallback",this).call(this),void 0===this.overrideImage&&(null!==(e=this.stateObj)&&void 0!==e&&e.attributes.entity_picture||null!==(t=this.stateObj)&&void 0!==t&&t.attributes.entity_picture_local)&&(this.style.backgroundImage="")}},{kind:"get",key:"_stateColor",value:function(){var e=this.stateObj?(0,y.N)(this.stateObj):void 0;return this.stateColor||"light"===e&&!1!==this.stateColor}},{kind:"method",key:"render",value:function(){var e=this.stateObj;if(!e&&!this.overrideIcon&&!this.overrideImage)return(0,h.dy)(w||(w=(0,o.Z)(['<div class="missing"> <ha-svg-icon .path="','"></ha-svg-icon> </div>'])),"M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z");if(!this._showIcon)return h.Ld;var t=e?(0,y.N)(e):void 0;return(0,h.dy)(O||(O=(0,o.Z)(['<ha-state-icon style="','" data-domain="','" data-state="','" .icon="','" .state="','"></ha-state-icon>'])),(0,m.V)(this._iconStyle),(0,b.o)(t),(0,b.o)(null==e?void 0:e.state),this.overrideIcon,e)}},{kind:"method",key:"willUpdate",value:function(e){if((0,u.Z)((0,v.Z)(i.prototype),"willUpdate",this).call(this,e),e.has("stateObj")||e.has("overrideImage")||e.has("overrideIcon")||e.has("stateColor")||e.has("color")){var t=this.stateObj,o={},r={backgroundImage:""};if(this._showIcon=!0,t&&void 0===this.overrideImage)if(!t.attributes.entity_picture_local&&!t.attributes.entity_picture||this.overrideIcon){if(this.color)o.color=this.color;else if(this._stateColor){var n=L(t);if(n&&(o.color=n),t.attributes.rgb_color&&(o.color="rgb(".concat(t.attributes.rgb_color.join(","),")")),t.attributes.brightness){var s=t.attributes.brightness;if("number"!=typeof s){var l="Type error: state-badge expected number, but type of ".concat(t.entity_id,".attributes.brightness is ").concat((0,a.Z)(s)," (").concat(s,")");console.warn(l)}o.filter="brightness(".concat((s+245)/5,"%)")}if(t.attributes.hvac_action){var d=t.attributes.hvac_action;d in E?o.color=L(t,E[d]):delete o.color}}}else{var c=t.attributes.entity_picture_local||t.attributes.entity_picture;this.hass&&(c=this.hass.hassUrl(c)),"camera"===(0,f.M)(t.entity_id)&&(c=j(c,80,80)),r.backgroundImage="url(".concat(c,")"),this._showIcon=!1}else if(this.overrideImage){var h=this.overrideImage;this.hass&&(h=this.hass.hassUrl(h)),r.backgroundImage="url(".concat(h,")"),this._showIcon=!1}this._iconStyle=o,Object.assign(this.style,r)}}},{kind:"get",static:!0,key:"styles",value:function(){return[V,(0,h.iv)(M||(M=(0,o.Z)([":host{position:relative;display:inline-block;width:40px;color:var(--paper-item-icon-color,#44739e);border-radius:50%;height:40px;text-align:center;background-size:cover;line-height:40px;vertical-align:middle;box-sizing:border-box;--state-inactive-color:initial}:host(:focus){outline:0}:host(:not([icon]):focus){border:2px solid var(--divider-color)}:host([icon]:focus){background:var(--divider-color)}ha-state-icon{transition:color .3s ease-in-out,filter .3s ease-in-out}.missing{color:#fce588}"])))]}}]}}),h.oi));customElements.define("state-badge",N)},77576:function(e,t,i){var a,o,r,n,s,l,d=i(99312),c=i(81043),u=i(33368),v=i(71650),h=i(82390),p=i(69205),b=i(70906),m=i(91808),f=i(88771),y=i(47838),g=i(88962),k=i(29530),_=(i(63873),i(53947)),x=i(68144),Z=i(79932),C=i(30153),w=i(47181);i(5666),i(73366),i(3555);(0,_.hC)("vaadin-combo-box-item",(0,x.iv)(a||(a=(0,g.Z)([':host{padding:0!important}:host([focused]:not([disabled])){background-color:rgba(var(--rgb-primary-text-color,0,0,0),.12)}:host([selected]:not([disabled])){background-color:transparent;color:var(--mdc-theme-primary);--mdc-ripple-color:var(--mdc-theme-primary);--mdc-theme-text-primary-on-background:var(--mdc-theme-primary)}:host([selected]:not([disabled])):before{background-color:var(--mdc-theme-primary);opacity:.12;content:"";position:absolute;top:0;left:0;width:100%;height:100%}:host([selected][focused]:not([disabled])):before{opacity:.24}:host(:hover:not([disabled])){background-color:transparent}[part=content]{width:100%}[part=checkmark]{display:none}']))));(0,m.Z)([(0,Z.Mo)("ha-combo-box")],(function(e,t){var i,a,m=function(t){(0,p.Z)(a,t);var i=(0,b.Z)(a);function a(){var t;(0,v.Z)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return t=i.call.apply(i,[this].concat(r)),e((0,h.Z)(t)),t}return(0,u.Z)(a)}(t);return{F:m,d:[{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"validationMessage",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean})],key:"invalid",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean})],key:"icon",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"items",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"filteredItems",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"dataProvider",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({attribute:"allow-custom-value",type:Boolean})],key:"allowCustomValue",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({attribute:"item-value-path"})],key:"itemValuePath",value:function(){return"value"}},{kind:"field",decorators:[(0,Z.Cb)({attribute:"item-label-path"})],key:"itemLabelPath",value:function(){return"label"}},{kind:"field",decorators:[(0,Z.Cb)({attribute:"item-id-path"})],key:"itemIdPath",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"renderer",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean})],key:"required",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean,reflect:!0,attribute:"opened"})],key:"opened",value:void 0},{kind:"field",decorators:[(0,Z.IO)("vaadin-combo-box-light",!0)],key:"_comboBox",value:void 0},{kind:"field",decorators:[(0,Z.IO)("ha-textfield",!0)],key:"_inputElement",value:void 0},{kind:"field",key:"_overlayMutationObserver",value:void 0},{kind:"field",key:"_bodyMutationObserver",value:void 0},{kind:"method",key:"open",value:(a=(0,c.Z)((0,d.Z)().mark((function e(){var t;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:null===(t=this._comboBox)||void 0===t||t.open();case 3:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{kind:"method",key:"focus",value:(i=(0,c.Z)((0,d.Z)().mark((function e(){var t,i;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:return e.next=4,null===(t=this._inputElement)||void 0===t?void 0:t.updateComplete;case 4:null===(i=this._inputElement)||void 0===i||i.focus();case 5:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{kind:"method",key:"disconnectedCallback",value:function(){(0,f.Z)((0,y.Z)(m.prototype),"disconnectedCallback",this).call(this),this._overlayMutationObserver&&(this._overlayMutationObserver.disconnect(),this._overlayMutationObserver=void 0),this._bodyMutationObserver&&(this._bodyMutationObserver.disconnect(),this._bodyMutationObserver=void 0)}},{kind:"get",key:"selectedItem",value:function(){return this._comboBox.selectedItem}},{kind:"method",key:"setInputValue",value:function(e){this._comboBox.value=e}},{kind:"method",key:"render",value:function(){var e;return(0,x.dy)(o||(o=(0,g.Z)([' <vaadin-combo-box-light .itemValuePath="','" .itemIdPath="','" .itemLabelPath="','" .items="','" .value="','" .filteredItems="','" .dataProvider="','" .allowCustomValue="','" .disabled="','" .required="','" ',' @opened-changed="','" @filter-changed="','" @value-changed="','" attr-for-value="value"> <ha-textfield label="','" placeholder="','" ?disabled="','" ?required="','" validationMessage="','" .errorMessage="','" class="input" autocapitalize="none" autocomplete="off" autocorrect="off" spellcheck="false" .suffix="','" .icon="','" .invalid="','" helper="','" helperPersistent> <slot name="icon" slot="leadingIcon"></slot> </ha-textfield> ',' <ha-svg-icon role="button" tabindex="-1" aria-label="','" aria-expanded="','" class="toggle-button" .path="','" @click="','"></ha-svg-icon> </vaadin-combo-box-light> '])),this.itemValuePath,this.itemIdPath,this.itemLabelPath,this.items,this.value||"",this.filteredItems,this.dataProvider,this.allowCustomValue,this.disabled,this.required,(0,k.t)(this.renderer||this._defaultRowRenderer),this._openedChanged,this._filterChanged,this._valueChanged,(0,C.o)(this.label),(0,C.o)(this.placeholder),this.disabled,this.required,(0,C.o)(this.validationMessage),this.errorMessage,(0,x.dy)(r||(r=(0,g.Z)(['<div style="width:28px" role="none presentation"></div>']))),this.icon,this.invalid,(0,C.o)(this.helper),this.value?(0,x.dy)(n||(n=(0,g.Z)(['<ha-svg-icon role="button" tabindex="-1" aria-label="','" class="clear-button" .path="','" @click="','"></ha-svg-icon>'])),(0,C.o)(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.clear")),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",this._clearValue):"",(0,C.o)(this.label),this.opened?"true":"false",this.opened?"M7,15L12,10L17,15H7Z":"M7,10L12,15L17,10H7Z",this._toggleOpen)}},{kind:"field",key:"_defaultRowRenderer",value:function(){var e=this;return function(t){return(0,x.dy)(s||(s=(0,g.Z)(["<ha-list-item> "," </ha-list-item>"])),e.itemLabelPath?t[e.itemLabelPath]:t)}}},{kind:"method",key:"_clearValue",value:function(e){e.stopPropagation(),(0,w.B)(this,"value-changed",{value:void 0})}},{kind:"method",key:"_toggleOpen",value:function(e){var t,i;this.opened?(null===(t=this._comboBox)||void 0===t||t.close(),e.stopPropagation()):null===(i=this._comboBox)||void 0===i||i.inputElement.focus()}},{kind:"method",key:"_openedChanged",value:function(e){var t=this;e.stopPropagation();var i=e.detail.value;if(setTimeout((function(){t.opened=i}),0),(0,w.B)(this,"opened-changed",{value:e.detail.value}),i){var a=document.querySelector("vaadin-combo-box-overlay");a&&(a.setAttribute("required-vertical-space","0"),this._removeInert(a)),this._observeBody()}else{var o;null===(o=this._bodyMutationObserver)||void 0===o||o.disconnect(),this._bodyMutationObserver=void 0}}},{kind:"method",key:"_observeBody",value:function(){var e=this;"MutationObserver"in window&&!this._bodyMutationObserver&&(this._bodyMutationObserver=new MutationObserver((function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){"VAADIN-COMBO-BOX-OVERLAY"===t.nodeName&&e._removeInert(t)})),t.removedNodes.forEach((function(t){var i;"VAADIN-COMBO-BOX-OVERLAY"===t.nodeName&&(null===(i=e._overlayMutationObserver)||void 0===i||i.disconnect(),e._overlayMutationObserver=void 0)}))}))})),this._bodyMutationObserver.observe(document.body,{childList:!0}))}},{kind:"method",key:"_removeInert",value:function(e){var t,i=this;if(e.inert)return e.inert=!1,null===(t=this._overlayMutationObserver)||void 0===t||t.disconnect(),void(this._overlayMutationObserver=void 0);"MutationObserver"in window&&!this._overlayMutationObserver&&(this._overlayMutationObserver=new MutationObserver((function(e){e.forEach((function(e){if("inert"===e.attributeName){var t,a=e.target;if(a.inert)null===(t=i._overlayMutationObserver)||void 0===t||t.disconnect(),i._overlayMutationObserver=void 0,a.inert=!1}}))})),this._overlayMutationObserver.observe(e,{attributes:!0}))}},{kind:"method",key:"_filterChanged",value:function(e){e.stopPropagation(),(0,w.B)(this,"filter-changed",{value:e.detail.value})}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();var t=e.detail.value;t!==this.value&&(0,w.B)(this,"value-changed",{value:t||void 0})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,x.iv)(l||(l=(0,g.Z)([":host{display:block;width:100%}vaadin-combo-box-light{position:relative;--vaadin-combo-box-overlay-max-height:calc(45vh)}ha-textfield{width:100%}ha-textfield>ha-icon-button{--mdc-icon-button-size:24px;padding:2px;color:var(--secondary-text-color)}ha-svg-icon{color:var(--input-dropdown-icon-color);position:absolute;cursor:pointer}.toggle-button{right:12px;top:-10px;inset-inline-start:initial;inset-inline-end:12px;direction:var(--direction)}:host([opened]) .toggle-button{color:var(--primary-color)}.clear-button{--mdc-icon-size:20px;top:-7px;right:36px;inset-inline-start:initial;inset-inline-end:36px;direction:var(--direction)}"])))}}]}}),x.oi)},73366:function(e,t,i){var a,o=i(88962),r=i(33368),n=i(71650),s=i(82390),l=i(69205),d=i(70906),c=i(91808),u=i(88771),v=i(47838),h=i(61092),p=i(96762),b=i(68144),m=i(79932);(0,c.Z)([(0,m.Mo)("ha-list-item")],(function(e,t){var i=function(t){(0,l.Z)(a,t);var i=(0,d.Z)(a);function a(){var t;(0,n.Z)(this,a);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return t=i.call.apply(i,[this].concat(r)),e((0,s.Z)(t)),t}return(0,r.Z)(a)}(t);return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,u.Z)((0,v.Z)(i.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[p.W,(0,b.iv)(a||(a=(0,o.Z)([":host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}"])))]}}]}}),h.K)}}]);
//# sourceMappingURL=1686-UvliOktHFhQ.js.map