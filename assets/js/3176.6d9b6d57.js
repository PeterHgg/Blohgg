"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[3176],{3176:(t,i,s)=>{s.r(i),s.d(i,{HLSProvider:()=>p});var e=s(3694),a=s(5342),n=s(1902),r=s(5363),h=s(4615),o=s(8750),d=s(753),c=s(5649),l=s(4601);class u{constructor(t,i){this.m=t,this.b=i,this.d=null,this.qb=null,this.rb={},this.sb=new Set}get instance(){return this.d}setup(t){const{streamType:i}=this.b.$state,s=(0,r.se)(i).includes("live"),e=(0,r.se)(i).includes("ll-");this.d=new t({lowLatencyMode:e,backBufferLength:e?4:s?8:void 0,renderTextTracksNatively:!1,...this.rb});const a=this.Oi.bind(this);for(const i of Object.values(t.Events))this.d.on(i,a);this.d.on(t.Events.ERROR,this.Q.bind(this));for(const t of this.sb)t(this.d);this.b.player.dispatch("hls-instance",{detail:this.d}),this.d.attachMedia(this.m),this.d.on(t.Events.AUDIO_TRACK_SWITCHED,this.Qi.bind(this)),this.d.on(t.Events.LEVEL_SWITCHED,this.Ri.bind(this)),this.d.on(t.Events.LEVEL_LOADED,this.Si.bind(this)),this.d.on(t.Events.NON_NATIVE_TEXT_TRACKS_FOUND,this.Ti.bind(this)),this.d.on(t.Events.CUES_PARSED,this.Ui.bind(this)),this.b.qualities[h.k.Ia]=this.je.bind(this),(0,r.k6)(this.b.qualities,"change",this.ke.bind(this)),(0,r.k6)(this.b.audioTracks,"change",this.le.bind(this)),this.qb=(0,r.QZ)(this.me.bind(this))}aa(t,i){return new r.vP((t=>(0,r.BW)(t))(t),{detail:i})}me(){if(!this.b.$state.live())return;const t=new c.e(this.ne.bind(this));return t.Xa(),t.$.bind(t)}ne(){this.b.$state.liveSyncPosition.set(this.d?.liveSyncPosition??1/0)}Oi(t,i){this.b.player?.dispatch(this.aa(t,i))}Ti(t,i){const s=this.aa(t,i);let e=-1;for(let t=0;t<i.tracks.length;t++){const a=i.tracks[t],n=a.subtitleTrack??a.closedCaptions,r=new o.to({id:`hls-${a.kind}-${t}`,src:n?.url,label:a.label,language:n?.lang,kind:a.kind,default:a.default});r[o.Hp.ma]=2,r[o.Hp.hb]=()=>{"showing"===r.mode?(this.d.subtitleTrack=t,e=t):e===t&&(this.d.subtitleTrack=-1,e=-1)},this.b.textTracks.add(r,s)}}Ui(t,i){const s=this.d?.subtitleTrack,e=this.b.textTracks.getById(`hls-${i.type}-${s}`);if(!e)return;const a=this.aa(t,i);for(const t of i.cues)t.positionAlign="auto",e.addCue(t,a)}Qi(t,i){const s=this.b.audioTracks[i.id];if(s){const e=this.aa(t,i);this.b.audioTracks[d.j.ea](s,!0,e)}}Ri(t,i){const s=this.b.qualities[i.level];if(s){const e=this.aa(t,i);this.b.qualities[d.j.ea](s,!0,e)}}Si(t,i){if(this.b.$state.canPlay())return;const{type:s,live:e,totalduration:a,targetduration:n}=i.details,o=this.aa(t,i);this.b.delegate.c("stream-type-change",e?"EVENT"===s&&Number.isFinite(a)&&n>=10?"live:dvr":"live":"on-demand",o),this.b.delegate.c("duration-change",a,o);const c=this.d.media;-1===this.d.currentLevel&&this.b.qualities[h.k.Wa](!0,o);for(const t of this.d.audioTracks){const i={id:t.id.toString(),label:t.name,language:t.lang||"",kind:"main"};this.b.audioTracks[d.j.da](i,o)}for(const t of this.d.levels){const i={id:t.id?.toString()??t.height+"p",width:t.width,height:t.height,codec:t.codecSet,bitrate:t.bitrate};this.b.qualities[d.j.da](i,o)}c.dispatchEvent(new r.vP("canplay",{trigger:o}))}Q(t,i){i.fatal&&("mediaError"===i.type?this.d?.recoverMediaError():this.qc(i.error))}qc(t){this.b.delegate.c("error",{message:t.message,code:1,error:t})}je(){this.d&&(this.d.currentLevel=-1)}ke(){const{qualities:t}=this.b;this.d&&!t.auto&&(this.d[t.switch+"Level"]=t.selectedIndex,a.G_&&(this.m.currentTime=this.m.currentTime))}le(){const{audioTracks:t}=this.b;this.d&&this.d.audioTrack!==t.selectedIndex&&(this.d.audioTrack=t.selectedIndex)}Vi(t){(0,r.Kg)(t.src)&&this.d?.loadSource(t.src)}Wi(){this.d?.destroy(),this.d=null,this.qb?.(),this.qb=null}}class b{constructor(t,i,s){this.L=t,this.b=i,this.La=s,this.qe()}async qe(){const t={onLoadStart:this.Ma.bind(this),onLoaded:this.tb.bind(this),onLoadError:this.re.bind(this)};let i=await async function(t,i={}){if((0,r.Kg)(t)){i.onLoadStart?.();try{if(await(0,e.k0)(t),!(0,r.Tn)(window.Hls))throw Error("");const s=window.Hls;return i.onLoaded?.(s),s}catch(t){i.onLoadError?.(t)}}}(this.L,t);if((0,r.b0)(i)&&!(0,r.Kg)(this.L)&&(i=await async function(t,i={}){if(!(0,r.b0)(t)){if(i.onLoadStart?.(),t.prototype&&t.prototype!==Function)return i.onLoaded?.(t),t;try{const s=(await t())?.default;if(!s||!s.isSupported)throw Error("");return i.onLoaded?.(s),s}catch(t){i.onLoadError?.(t)}}}(this.L,t)),!i)return null;if(!i.isSupported()){const t="[vidstack] `hls.js` is not supported in this environment";return this.b.player.dispatch(new r.vP("hls-unsupported")),this.b.delegate.c("error",{message:t,code:4}),null}return i}Ma(){this.b.player.dispatch(new r.vP("hls-lib-load-start"))}tb(t){this.b.player.dispatch(new r.vP("hls-lib-loaded",{detail:t})),this.La(t)}re(t){const i=(0,l.r)(t);this.b.player.dispatch(new r.vP("hls-lib-load-error",{detail:i})),this.b.delegate.c("error",{message:i.message,code:4,error:i})}}class p extends n.VideoProvider{constructor(){super(...arguments),this.$$PROVIDER_TYPE="HLS",this.rc=null,this.e=new u(this.video,this.b),this.oa="https://cdn.jsdelivr.net/npm/hls.js@^1.5.0/dist/hls.min.js"}get ctor(){return this.rc}get instance(){return this.e.instance}static{this.supported=(0,a.m0)()}get type(){return"hls"}get canLiveSync(){return!0}get config(){return this.e.rb}set config(t){this.e.rb=t}get library(){return this.oa}set library(t){this.oa=t}preconnect(){(0,r.Kg)(this.oa)&&(0,e.kZ)(this.oa)}setup(){super.setup(),new b(this.oa,this.b,(t=>{this.rc=t,this.e.setup(t),this.b.delegate.c("provider-setup",this);const i=(0,r.se)(this.b.$state.source);i&&this.loadSource(i)}))}async loadSource(t,i){(0,r.Kg)(t.src)?(this.a.preload=i||"",this.ge(t,"application/x-mpegurl"),this.e.Vi(t),this.K=t):this.oc()}onInstance(t){const i=this.e.instance;return i&&t(i),this.e.sb.add(t),()=>this.e.sb.delete(t)}destroy(){this.e.Wi()}}}}]);