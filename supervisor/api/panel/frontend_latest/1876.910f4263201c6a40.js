export const ids=["1876"];export const modules={45061:function(e,i,t){t.d(i,{K:function(){return a}});const a=e=>{switch(e.language){case"cs":case"de":case"fi":case"fr":case"sk":case"sv":return" ";default:return""}}},59826:function(e,i,t){var a=t(44249),o=t(31622),n=t(57243),s=t(50778),l=t(22344);(0,a.Z)([(0,s.Mo)("ha-button")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[l.W,n.iv`::slotted([slot=icon]){margin-inline-start:0px;margin-inline-end:8px;direction:var(--direction);display:block}.mdc-button{height:var(--button-height,36px)}.trailing-icon{display:flex}.slot-container{overflow:var(--button-slot-container-overflow,visible)}`]}]}}),o.z)},78951:function(e,i,t){var a=t(44249),o=t(72621),n=(t(13334),t(24427),t(57243)),s=t(50778),l=t(35359),r=t(36522),d=(t(59826),t(23043),t(45061)),c=t(95262),u=t(90698);const h="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",p="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13.5,16V19H10.5V16H8L12,12L16,16H13.5M13,9V3.5L18.5,9H13Z";(0,a.Z)([(0,s.Mo)("ha-file-upload")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"accept",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"icon",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"secondary",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"supports",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Object})],key:"value",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"multiple",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"uploading",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Number})],key:"progress",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"auto-open-file-dialog"})],key:"autoOpenFileDialog",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_drag",value:()=>!1},{kind:"field",decorators:[(0,s.IO)("#input")],key:"_input",value:void 0},{kind:"method",key:"firstUpdated",value:function(e){(0,o.Z)(t,"firstUpdated",this,3)([e]),this.autoOpenFileDialog&&this._openFilePicker()}},{kind:"get",key:"_name",value:function(){if(void 0===this.value)return"";if("string"==typeof this.value)return this.value;return(this.value instanceof FileList?Array.from(this.value):(0,c.r)(this.value)).map((e=>e.name)).join(", ")}},{kind:"method",key:"render",value:function(){return n.dy` ${this.uploading?n.dy`<div class="container"> <div class="row"> <span class="header">${this.value?this.hass?.localize("ui.components.file-upload.uploading_name",{name:this._name}):this.hass?.localize("ui.components.file-upload.uploading")}</span> ${this.progress?n.dy`<span class="progress">${this.progress}${(0,d.K)(this.hass.locale)}%</span>`:""} </div> <mwc-linear-progress .indeterminate="${!this.progress}" .progress="${this.progress?this.progress/100:void 0}"></mwc-linear-progress> </div>`:n.dy`<label for="${this.value?"":"input"}" class="container ${(0,l.$)({dragged:this._drag,multiple:this.multiple,value:Boolean(this.value)})}" @drop="${this._handleDrop}" @dragenter="${this._handleDragStart}" @dragover="${this._handleDragStart}" @dragleave="${this._handleDragEnd}" @dragend="${this._handleDragEnd}">${this.value?"string"==typeof this.value?n.dy`<div class="row"> <div class="value" @click="${this._openFilePicker}"> <ha-svg-icon .path="${this.icon||p}"></ha-svg-icon> ${this.value} </div> <ha-icon-button @click="${this._clearValue}" .label="${this.hass?.localize("ui.common.delete")||"Delete"}" .path="${h}"></ha-icon-button> </div>`:(this.value instanceof FileList?Array.from(this.value):(0,c.r)(this.value)).map((e=>n.dy`<div class="row"> <div class="value" @click="${this._openFilePicker}"> <ha-svg-icon .path="${this.icon||p}"></ha-svg-icon> ${e.name} - ${(0,u.d)(e.size)} </div> <ha-icon-button @click="${this._clearValue}" .label="${this.hass?.localize("ui.common.delete")||"Delete"}" .path="${h}"></ha-icon-button> </div>`)):n.dy`<ha-svg-icon class="big-icon" .path="${this.icon||p}"></ha-svg-icon> <ha-button unelevated @click="${this._openFilePicker}"> ${this.label||this.hass?.localize("ui.components.file-upload.label")} </ha-button> <span class="secondary">${this.secondary||this.hass?.localize("ui.components.file-upload.secondary")}</span> <span class="supports">${this.supports}</span>`} <input id="input" type="file" class="file" .accept="${this.accept}" .multiple="${this.multiple}" @change="${this._handleFilePicked}"></label>`} `}},{kind:"method",key:"_openFilePicker",value:function(){this._input?.click()}},{kind:"method",key:"_handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer?.files&&(0,r.B)(this,"file-picked",{files:this.multiple||1===e.dataTransfer.files.length?Array.from(e.dataTransfer.files):[e.dataTransfer.files[0]]}),this._drag=!1}},{kind:"method",key:"_handleDragStart",value:function(e){e.preventDefault(),e.stopPropagation(),this._drag=!0}},{kind:"method",key:"_handleDragEnd",value:function(e){e.preventDefault(),e.stopPropagation(),this._drag=!1}},{kind:"method",key:"_handleFilePicked",value:function(e){0!==e.target.files.length&&(this.value=e.target.files,(0,r.B)(this,"file-picked",{files:e.target.files}))}},{kind:"method",key:"_clearValue",value:function(e){e.preventDefault(),this._input.value="",this.value=void 0,(0,r.B)(this,"change"),(0,r.B)(this,"files-cleared")}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host{display:block;height:240px}:host([disabled]){pointer-events:none;color:var(--disabled-text-color)}.container{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;border:solid 1px var(--mdc-text-field-idle-line-color,rgba(0,0,0,.42));border-radius:var(--mdc-shape-small,4px);height:100%}label.container{border:dashed 1px var(--mdc-text-field-idle-line-color,rgba(0,0,0,.42));cursor:pointer}:host([disabled]) .container{border-color:var(--disabled-color)}label.dragged{border-color:var(--primary-color)}.dragged:before{position:absolute;top:0;right:0;bottom:0;left:0;background-color:var(--primary-color);content:"";opacity:var(--dark-divider-opacity);pointer-events:none;border-radius:var(--mdc-shape-small,4px)}label.value{cursor:default}label.value.multiple{justify-content:unset;overflow:auto}.highlight{color:var(--primary-color)}.row{display:flex;width:100%;align-items:center;justify-content:space-between;padding:0 16px;box-sizing:border-box}ha-button{margin-bottom:4px}.supports{color:var(--secondary-text-color);font-size:12px}:host([disabled]) .secondary{color:var(--disabled-text-color)}input.file{display:none}.value{cursor:pointer}.value ha-svg-icon{margin-right:8px;margin-inline-end:8px;margin-inline-start:initial}.big-icon{--mdc-icon-size:48px;margin-bottom:8px}ha-button{--mdc-button-outline-color:var(--primary-color);--mdc-icon-button-size:24px}mwc-linear-progress{width:100%;padding:16px;box-sizing:border-box}.header{font-weight:500}.progress{color:var(--secondary-text-color)}button.link{background:0 0;border:none;padding:0;font-size:14px;color:var(--primary-color);text-decoration:underline;cursor:pointer}`}}]}}),n.oi)},56002:function(e,i,t){var a=t("44249"),o=t("57243"),n=t("50778"),s=t("36522"),l=t("28008"),r=t("6343"),d=t("76131");const c=()=>Promise.all([t.e("3895"),t.e("7983"),t.e("5141"),t.e("7860")]).then(t.bind(t,77333));t("59826"),t("82104"),t("78951");var u=t("40944");(0,a.Z)([(0,n.Mo)("ha-picture-upload")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"value",value:()=>null},{kind:"field",decorators:[(0,n.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"secondary",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"supports",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"currentImageAltText",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"crop",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"select-media"})],key:"selectMedia",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"cropOptions",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"original",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Number})],key:"size",value:()=>512},{kind:"field",decorators:[(0,n.SB)()],key:"_uploading",value:()=>!1},{kind:"method",key:"render",value:function(){if(!this.value){const e=this.secondary||(this.selectMedia?o.dy`${this.hass.localize("ui.components.picture-upload.secondary",{select_media:o.dy`<button class="link" @click="${this._chooseMedia}"> ${this.hass.localize("ui.components.picture-upload.select_media")} </button>`})}`:void 0);return o.dy` <ha-file-upload .hass="${this.hass}" .icon="${"M18 15V18H15V20H18V23H20V20H23V18H20V15H18M13.3 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V13.3C20.4 13.1 19.7 13 19 13C17.9 13 16.8 13.3 15.9 13.9L14.5 12L11 16.5L8.5 13.5L5 18H13.1C13 18.3 13 18.7 13 19C13 19.7 13.1 20.4 13.3 21Z"}" .label="${this.label||this.hass.localize("ui.components.picture-upload.label")}" .secondary="${e}" .supports="${this.supports||this.hass.localize("ui.components.picture-upload.supported_formats")}" .uploading="${this._uploading}" @file-picked="${this._handleFilePicked}" @change="${this._handleFileCleared}" accept="image/png, image/jpeg, image/gif"></ha-file-upload> `}return o.dy`<div class="center-vertical"> <div class="value"> <img .src="${this.value}" alt="${this.currentImageAltText||this.hass.localize("ui.components.picture-upload.current_image_alt")}"> <div> <ha-button @click="${this._handleChangeClick}" .label="${this.hass.localize("ui.components.picture-upload.clear_picture")}"> </ha-button> </div> </div> </div>`}},{kind:"method",key:"_handleChangeClick",value:function(){this.value=null,(0,s.B)(this,"change")}},{kind:"method",key:"_handleFilePicked",value:async function(e){const i=e.detail.files[0];this.crop?this._cropFile(i):this._uploadFile(i)}},{kind:"method",key:"_handleFileCleared",value:async function(){this.value=null}},{kind:"method",key:"_cropFile",value:async function(e,i){var t,a;["image/png","image/jpeg","image/gif"].includes(e.type)?(t=this,a={file:e,options:this.cropOptions||{round:!1,aspectRatio:NaN},croppedCallback:t=>{i&&t===e?(this.value=(0,r.p6)(i,this.size,this.original),(0,s.B)(this,"change")):this._uploadFile(t)}},(0,s.B)(t,"show-dialog",{dialogTag:"image-cropper-dialog",dialogImport:c,dialogParams:a})):(0,d.Ys)(this,{text:this.hass.localize("ui.components.picture-upload.unsupported_format")})}},{kind:"method",key:"_uploadFile",value:async function(e){if(["image/png","image/jpeg","image/gif"].includes(e.type)){this._uploading=!0;try{const i=await(0,r.Bi)(this.hass,e);this.value=(0,r.p6)(i.id,this.size,this.original),(0,s.B)(this,"change")}catch(e){(0,d.Ys)(this,{text:e.toString()})}finally{this._uploading=!1}}else(0,d.Ys)(this,{text:this.hass.localize("ui.components.picture-upload.unsupported_format")})}},{kind:"field",key:"_chooseMedia",value(){return()=>{(0,u.B)(this,{action:"pick",entityId:"browser",navigateIds:[{media_content_id:void 0,media_content_type:void 0},{media_content_id:r.dg,media_content_type:"app"}],minimumNavigateLevel:2,mediaPickedCallback:async e=>{const i=(0,r.TT)(e.item.media_content_id);if(i)if(this.crop){const t=(0,r.p6)(i,void 0,!0);let a;try{a=await(0,r.n$)(t)}catch(e){return void(0,d.Ys)(this,{text:e.toString()})}const o={type:e.item.media_content_type},n=new File([a],e.item.title,o);this._cropFile(n,i)}else this.value=(0,r.p6)(i,this.size,this.original),(0,s.B)(this,"change")}})}}},{kind:"get",static:!0,key:"styles",value:function(){return[l.Qx,o.iv`:host{display:block;height:240px}ha-file-upload{height:100%}.center-vertical{display:flex;align-items:center;height:100%}.value{width:100%;display:flex;flex-direction:column;align-items:center}img{max-width:100%;max-height:200px;margin-bottom:4px;border-radius:var(--file-upload-image-border-radius)}`]}}]}}),o.oi)},40944:function(e,i,t){t.d(i,{B:function(){return o}});var a=t(36522);const o=(e,i)=>{(0,a.B)(e,"show-dialog",{dialogTag:"dialog-media-player-browse",dialogImport:()=>Promise.all([t.e("513"),t.e("2206"),t.e("3578"),t.e("7983"),t.e("6945"),t.e("8865"),t.e("7681"),t.e("4959"),t.e("7659"),t.e("759")]).then(t.bind(t,84961)),dialogParams:i})}},6343:function(e,i,t){t.d(i,{Bi:function(){return l},JS:function(){return a},TT:function(){return n},ao:function(){return r},dg:function(){return o},n$:function(){return d},p6:function(){return s}});const a="/api/image/serve/",o="media-source://image_upload",n=e=>{let i;if(e.startsWith(a)){i=e.substring(a.length);const t=i.indexOf("/");t>=0&&(i=i.substring(0,t))}else e.startsWith(o)&&(i=e.substring(o.length+1));return i},s=(e,i,t=!1)=>{if(!t&&!i)throw new Error("Size must be provided if original is false");return t?`/api/image/serve/${e}/original`:`/api/image/serve/${e}/${i}x${i}`},l=async(e,i)=>{const t=new FormData;t.append("file",i);const a=await e.fetchWithAuth("/api/image/upload",{method:"POST",body:t});if(413===a.status)throw new Error(`Uploaded image is too large (${i.name})`);if(200!==a.status)throw new Error("Unknown error");return a.json()},r=(e,i)=>e.callWS({type:"image/delete",image_id:i}),d=async e=>{const i=await fetch(e);if(!i.ok)throw new Error(`Failed to fetch image: ${i.statusText?i.statusText:i.status}`);return i.blob()}},90698:function(e,i,t){t.d(i,{d:function(){return a}});const a=(e=0,i=2)=>{if(0===e)return"0 Bytes";i=i<0?0:i;const t=Math.floor(Math.log(e)/Math.log(1024));return`${parseFloat((e/1024**t).toFixed(i))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`}}};
//# sourceMappingURL=1876.910f4263201c6a40.js.map