/*! For license information please see 1754.c1f3b0c1755ca48e.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["1754"],{4918:function(e,t,i){i.d(t,{a:()=>y});i("71695"),i("40251"),i("47021");var r=i("9065"),a=i("80573"),o={ROOT:"mdc-form-field"},n={LABEL_SELECTOR:".mdc-form-field > label"};const l=function(e){function t(i){var a=e.call(this,(0,r.__assign)((0,r.__assign)({},t.defaultAdapter),i))||this;return a.click=function(){a.handleClick()},a}return(0,r.__extends)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return o},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return n},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},t.prototype.handleClick=function(){var e=this;this.adapter.activateInputRipple(),requestAnimationFrame((function(){e.adapter.deactivateInputRipple()}))},t}(a.K);var d=i("11911"),c=i("88618"),s=i("78611"),f=i("57243"),p=i("50778"),m=i("35359");let h,g=e=>e;class y extends d.H{constructor(){super(...arguments),this.alignEnd=!1,this.spaceBetween=!1,this.nowrap=!1,this.label="",this.mdcFoundationClass=l}createAdapter(){return{registerInteractionHandler:(e,t)=>{this.labelEl.addEventListener(e,t)},deregisterInteractionHandler:(e,t)=>{this.labelEl.removeEventListener(e,t)},activateInputRipple:async()=>{const e=this.input;if(e instanceof c.Wg){const t=await e.ripple;t&&t.startPress()}},deactivateInputRipple:async()=>{const e=this.input;if(e instanceof c.Wg){const t=await e.ripple;t&&t.endPress()}}}}get input(){var e,t;return null!==(t=null===(e=this.slottedInputs)||void 0===e?void 0:e[0])&&void 0!==t?t:null}render(){const e={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return(0,f.dy)(h||(h=g` <div class="mdc-form-field ${0}"> <slot></slot> <label class="mdc-label" @click="${0}">${0}</label> </div>`),(0,m.$)(e),this._labelClick,this.label)}click(){this._labelClick()}_labelClick(){const e=this.input;e&&(e.focus(),e.click())}}(0,r.__decorate)([(0,p.Cb)({type:Boolean})],y.prototype,"alignEnd",void 0),(0,r.__decorate)([(0,p.Cb)({type:Boolean})],y.prototype,"spaceBetween",void 0),(0,r.__decorate)([(0,p.Cb)({type:Boolean})],y.prototype,"nowrap",void 0),(0,r.__decorate)([(0,p.Cb)({type:String}),(0,s.P)((async function(e){var t;null===(t=this.input)||void 0===t||t.setAttribute("aria-label",e)}))],y.prototype,"label",void 0),(0,r.__decorate)([(0,p.IO)(".mdc-form-field")],y.prototype,"mdcRoot",void 0),(0,r.__decorate)([(0,p.vZ)("",!0,"*")],y.prototype,"slottedInputs",void 0),(0,r.__decorate)([(0,p.IO)("label")],y.prototype,"labelEl",void 0)},6394:function(e,t,i){i.d(t,{W:function(){return a}});let r;const a=(0,i(57243).iv)(r||(r=(e=>e)`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight,400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform,inherit);color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}.mdc-form-field>label[dir=rtl],[dir=rtl] .mdc-form-field>label{margin-left:auto;margin-right:0}.mdc-form-field>label[dir=rtl],[dir=rtl] .mdc-form-field>label{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}.mdc-form-field--align-end>label[dir=rtl],[dir=rtl] .mdc-form-field--align-end>label{margin-left:0;margin-right:auto}.mdc-form-field--align-end>label[dir=rtl],[dir=rtl] .mdc-form-field--align-end>label{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}.mdc-form-field--space-between>label[dir=rtl],[dir=rtl] .mdc-form-field--space-between>label{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight,400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform,inherit);color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}::slotted(mwc-switch){margin-right:10px}::slotted(mwc-switch[dir=rtl]),[dir=rtl] ::slotted(mwc-switch){margin-left:10px}`))},83456:function(e,t,i){var r=i(73577),a=(i(71695),i(47021),i(92444)),o=i(76688),n=i(57243),l=i(50778);let d,c=e=>e;(0,r.Z)([(0,l.Mo)("ha-checkbox")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value(){return[o.W,(0,n.iv)(d||(d=c`:host{--mdc-theme-secondary:var(--primary-color)}`))]}}]}}),a.A)},68752:function(e,t,i){i.r(t),i.d(t,{HaFormBoolean:()=>g});var r=i("73577"),a=(i("71695"),i("47021"),i("9065")),o=i("50778"),n=i("4918"),l=i("6394");let d=class extends n.a{};d.styles=[l.W],d=(0,a.__decorate)([(0,o.Mo)("mwc-formfield")],d);var c=i("57243"),s=i("36522");i("83456");let f,p,m,h=e=>e,g=(0,r.Z)([(0,o.Mo)("ha-form-boolean")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,o.IO)("ha-checkbox",!0)],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){return(0,c.dy)(f||(f=h` <mwc-formfield .label="${0}"> <ha-checkbox .checked="${0}" .disabled="${0}" @change="${0}"></ha-checkbox> <span slot="label"> <p class="primary">${0}</p> ${0} </span> </mwc-formfield> `),this.label,this.data,this.disabled,this._valueChanged,this.label,this.helper?(0,c.dy)(p||(p=h`<p class="secondary">${0}</p>`),this.helper):c.Ld)}},{kind:"method",key:"_valueChanged",value:function(e){(0,s.B)(this,"value-changed",{value:e.target.checked})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,c.iv)(m||(m=h`ha-formfield{display:flex;min-height:56px;align-items:center;--mdc-typography-body2-font-size:1em}p{margin:0}.secondary{direction:var(--direction);padding-top:4px;box-sizing:border-box;color:var(--secondary-text-color);font-size:.875rem;font-weight:var(--mdc-typography-body2-font-weight,400)}`))}}]}}),c.oi)}}]);
//# sourceMappingURL=1754.c1f3b0c1755ca48e.js.map