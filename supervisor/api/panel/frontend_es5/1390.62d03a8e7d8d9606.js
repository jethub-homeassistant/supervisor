"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["1390"],{48825:function(t,a,i){i.r(a);var e=i(73577),o=(i(71695),i(40251),i(47021),i(31622),i(57243)),n=i(50778),r=i(27486),s=i(36522),l=(i(73729),i(29073),i(56785)),c=i(74617),u=i(28008);let d,h,m,p=t=>t;const f=(0,r.Z)((()=>[{name:"default_backup_mount",required:!0,selector:{backup_location:{}}}]));(0,e.Z)([(0,n.Mo)("dialog-hassio-backup-location")],(function(t,a){return{F:class extends a{constructor(...a){super(...a),t(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_dialogParams",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_data",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_waiting",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_error",value:void 0},{kind:"method",key:"showDialog",value:async function(t){this._dialogParams=t}},{kind:"method",key:"closeDialog",value:function(){this._data=void 0,this._error=void 0,this._waiting=void 0,this._dialogParams=void 0,(0,s.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._dialogParams?(0,o.dy)(d||(d=p` <ha-dialog open scrimClickAction escapeKeyAction .heading="${0}" @closed="${0}"> ${0} <ha-form .hass="${0}" .data="${0}" .schema="${0}" .computeLabel="${0}" .computeHelper="${0}" @value-changed="${0}" dialogInitialFocus></ha-form> <mwc-button slot="secondaryAction" @click="${0}" dialogInitialFocus> ${0} </mwc-button> <mwc-button .disabled="${0}" slot="primaryAction" @click="${0}"> ${0} </mwc-button> </ha-dialog> `),this._dialogParams.supervisor.localize("dialog.backup_location.title"),this.closeDialog,this._error?(0,o.dy)(h||(h=p`<ha-alert alert-type="error">${0}</ha-alert>`),this._error):o.Ld,this.hass,this._data,f(),this._computeLabelCallback,this._computeHelperCallback,this._valueChanged,this.closeDialog,this._dialogParams.supervisor.localize("common.cancel"),this._waiting||!this._data,this._changeMount,this._dialogParams.supervisor.localize("common.save")):o.Ld}},{kind:"field",key:"_computeLabelCallback",value(){return t=>this._dialogParams.supervisor.localize(`dialog.backup_location.options.${t.name}.name`)||t.name}},{kind:"field",key:"_computeHelperCallback",value(){return t=>this._dialogParams.supervisor.localize(`dialog.backup_location.options.${t.name}.description`)}},{kind:"method",key:"_valueChanged",value:function(t){const a=t.detail.value.default_backup_mount;this._data={default_backup_mount:"/backup"===a?null:a}}},{kind:"method",key:"_changeMount",value:async function(){if(this._data){this._error=void 0,this._waiting=!0;try{await(0,c.Cl)(this.hass,this._data)}catch(t){return this._error=(0,l.js)(t),void(this._waiting=!1)}this.closeDialog()}}},{kind:"get",static:!0,key:"styles",value:function(){return[u.Qx,u.yu,(0,o.iv)(m||(m=p`.delete-btn{--mdc-theme-primary:var(--error-color)}`))]}}]}}),o.oi)},74617:function(t,a,i){i.d(a,{Cl:function(){return r},eX:function(){return o},mw:function(){return e},rE:function(){return n}});i(40251);let e=function(t){return t.BIND="bind",t.CIFS="cifs",t.NFS="nfs",t}({}),o=function(t){return t.BACKUP="backup",t.MEDIA="media",t.SHARE="share",t}({});const n=async t=>t.callWS({type:"supervisor/api",endpoint:"/mounts",method:"get",timeout:null}),r=async(t,a)=>t.callWS({type:"supervisor/api",endpoint:"/mounts/options",method:"post",timeout:null,data:a})},30338:function(t,a,i){var e=i(97934),o=i(71998),n=i(4576),r=i(36760);t.exports=function(t,a){a&&"string"==typeof t||o(t);var i=r(t);return n(o(void 0!==i?e(i,t):t))}},60933:function(t,a,i){var e=i(40810),o=i(57877),n=i(63983),r=i(12360),s=i(13053),l=i(47645);e({target:"Array",proto:!0},{flatMap:function(t){var a,i=r(this),e=s(i);return n(t),(a=l(i,0)).length=o(a,i,i,e,0,1,t,arguments.length>1?arguments[1]:void 0),a}})},32126:function(t,a,i){i(35709)("flatMap")},25677:function(t,a,i){var e=i(40810),o=i(97934),n=i(63983),r=i(71998),s=i(4576),l=i(30338),c=i(79995),u=i(14181),d=i(92288),h=c((function(){for(var t,a,i=this.iterator,e=this.mapper;;){if(a=this.inner)try{if(!(t=r(o(a.next,a.iterator))).done)return t.value;this.inner=null}catch(n){u(i,"throw",n)}if(t=r(o(this.next,i)),this.done=!!t.done)return;try{this.inner=l(e(t.value,this.counter++),!1)}catch(n){u(i,"throw",n)}}}));e({target:"Iterator",proto:!0,real:!0,forced:d},{flatMap:function(t){return r(this),n(t),new h(s(this),{mapper:t,inner:null})}})},34810:function(t,a,i){i(25677)}}]);
//# sourceMappingURL=1390.62d03a8e7d8d9606.js.map