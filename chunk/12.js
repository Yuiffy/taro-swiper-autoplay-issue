/*! For license information please see 12.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"311":function(t,e,i){"use strict";i.r(e),i.d(e,"taro_video_control",(function(){return r})),i.d(e,"taro_video_core",(function(){return s})),i.d(e,"taro_video_danmu",(function(){return a}));var o=i(53),n=i(314),__awaiter=function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function fulfilled(t){try{step(o.next(t))}catch(t){r(t)}}function rejected(t){try{step(o.throw(t))}catch(t){r(t)}}function step(t){t.done?n(t.value):function adopt(t){return t instanceof i?t:new i((function(e){e(t)}))}(t.value).then(fulfilled,rejected)}step((o=o.apply(t,e||[])).next())}))},__generator=function(t,e){var i,o,n,r,s={"label":0,"sent":function(){if(1&n[0])throw n[1];return n[1]},"trys":[],"ops":[]};return r={"next":verb(0),"throw":verb(1),"return":verb(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function verb(r){return function(a){return function step(r){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(n=2&r[0]?o.return:r[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,r[1])).done)return n;switch(o=0,n&&(r=[2&r[0],n.value]),r[0]){case 0:case 1:n=r;break;case 4:return s.label++,{"value":r[1],"done":!1};case 5:s.label++,o=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(n=s.trys,(n=n.length>0&&n[n.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!n||r[1]>n[0]&&r[1]<n[3])){s.label=r[1];break}if(6===r[0]&&s.label<n[1]){s.label=n[1],n=r;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(r);break}n[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(t){r=[6,t],o=0}finally{i=n=0}if(5&r[0])throw r[1];return{"value":r[0]?r[1]:void 0,"done":!0}}([r,a])}}},__spreadArrays=function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;var o=Array(t),n=0;for(e=0;e<i;e++)for(var r=arguments[e],s=0,a=r.length;s<a;s++,n++)o[n]=r[s];return o},formatTime=function(t){if(null===t)return"";var e=Math.round(t%60),i=Math.round((t-e)/60);return(i<10?"0"+i:i)+":"+(e<10?"0"+e:e)},normalizeNumber=function(t){return Math.max(-1,Math.min(t,1))},r=function(){function class_1(t){var e=this;Object(o.g)(this,t),this.visible=!1,this.isDraggingProgressBall=!1,this.percentage=0,this.progressDimentions={"left":0,"width":0},this.calcPercentage=function(t){var i=t-e.progressDimentions.left;return i=Math.max(i,0),(i=Math.min(i,e.progressDimentions.width))/e.progressDimentions.width},this.onDragProgressBallStart=function(){e.isDraggingProgressBall=!0,e.hideControlsTimer&&clearTimeout(e.hideControlsTimer)},this.onClickProgress=function(t){t.stopPropagation();var i=e.calcPercentage(t.pageX);e.seekFunc(i*e.duration),e.toggleVisibility(!0)}}return class_1.prototype.onDocumentTouchMove=function(t){if(this.isDraggingProgressBall){var e=t.touches[0].pageX;this.percentage=this.calcPercentage(e),this.setProgressBall(this.percentage),this.setCurrentTime(this.percentage*this.duration)}},class_1.prototype.onDocumentTouchEnd=function(){this.isDraggingProgressBall&&(this.isDraggingProgressBall=!1,this.seekFunc(this.percentage*this.duration),this.toggleVisibility(!0))},class_1.prototype.setProgressBall=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return this.progressBallRef&&(this.progressBallRef.style.left=100*t+"%"),[2]}))}))},class_1.prototype.toggleVisibility=function(t){return __awaiter(this,void 0,void 0,(function(){var e,i=this;return __generator(this,(function(o){return(e=void 0===t?!this.visible:t)?(this.hideControlsTimer&&clearTimeout(this.hideControlsTimer),this.isPlaying&&(this.hideControlsTimer=setTimeout((function(){i.toggleVisibility(!1)}),2e3)),this.controlsRef.style.visibility="visible"):this.controlsRef.style.visibility="hidden",this.visible=!!e,[2]}))}))},class_1.prototype.getIsDraggingProgressBall=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.isDraggingProgressBall]}))}))},class_1.prototype.setCurrentTime=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return this.currentTimeRef.innerHTML=formatTime(t),[2]}))}))},class_1.prototype.render=function(){var t,e=this,i=this,n=i.controls,r=i.currentTime,s=i.duration,a=i.isPlaying,l=i.pauseFunc,c=i.playFunc,u=i.showPlayBtn,d=i.showProgress,h=formatTime(s);return t=u?a?Object(o.f)("div",{"class":"taro-video-control-button taro-video-control-button-pause","onClick":l}):Object(o.f)("div",{"class":"taro-video-control-button taro-video-control-button-play","onClick":c}):null,Object(o.f)(o.a,{"class":"taro-video-bar taro-video-bar-full"},n&&Object(o.f)("div",{"class":"taro-video-controls"},t,d&&Object(o.f)("div",{"class":"taro-video-current-time","ref":function(t){return e.currentTimeRef=t}},formatTime(r)),d&&Object(o.f)("div",{"class":"taro-video-progress-container","onClick":this.onClickProgress},Object(o.f)("div",{"class":"taro-video-progress","ref":function(t){if(t){var i=t.getBoundingClientRect();e.progressDimentions.left=i.left,e.progressDimentions.width=i.width}}},Object(o.f)("div",{"class":"taro-video-progress-buffered","style":{"width":"100%"}}),Object(o.f)("div",{"class":"taro-video-ball","ref":function(t){return e.progressBallRef=t},"onTouchStart":this.onDragProgressBallStart,"style":{"left":(h?this.currentTime/s*100:0)+"%"}},Object(o.f)("div",{"class":"taro-video-inner"})))),d&&Object(o.f)("div",{"class":"taro-video-duration"},h)),Object(o.f)("slot",null))},Object.defineProperty(class_1.prototype,"controlsRef",{"get":function(){return Object(o.e)(this)},"enumerable":!0,"configurable":!0}),class_1}(),s=function(){function class_2(t){var e,i,n,r=this;Object(o.g)(this,t),this.currentTime=0,this.isDraggingProgress=!1,this.gestureType="none",this.controls=!0,this.autoplay=!1,this.loop=!1,this.muted=!1,this.initialTime=0,this.objectFit="contain",this.showProgress=!0,this.showFullscreenBtn=!0,this.showPlayBtn=!0,this.showCenterPlayBtn=!0,this.showMuteBtn=!1,this.danmuBtn=!1,this.enableDanmu=!1,this.enablePlayGesture=!1,this.enableProgressGesture=!0,this.vslideGesture=!1,this.vslideGestureInFullscreen=!0,this._enableDanmu=!1,this.isPlaying=!1,this.isFirst=!0,this.isFullScreen=!1,this.isMute=!1,this.analyseGesture=function(t){var e,i,o,n={"type":"none"},s=t.touches[0].screenX,a=t.touches[0].screenY,l=s-r.lastTouchScreenX,c=a-r.lastTouchScreenY,u=r.isFullScreen?r.vslideGestureInFullscreen:r.vslideGesture;if("none"===r.gestureType){if((i=l,o=c,Math.sqrt(Math.pow(i,2)+Math.pow(o,2)))<10)return n;if(Math.abs(c)>=Math.abs(l)){if(!u)return n;r.gestureType="adjustVolume",r.lastVolume=r.videoRef.volume}else if(Math.abs(c)<Math.abs(l)){if(!r.enableProgressGesture)return n;r.gestureType="adjustProgress",r.lastPercentage=r.currentTime/(null!=(e=r.duration)?e:r._duration)}}return n.type=r.gestureType,n.dataX=normalizeNumber(l/200),n.dataY=normalizeNumber(c/200),n},this.handlePlay=function(){r.isPlaying=!0,r.isFirst=!1,r.controlsRef.toggleVisibility(!0),r.onPlay.emit()},this.handlePause=function(){r.isPlaying=!1,r.controlsRef.toggleVisibility(!0),r.onPause.emit()},this.handleEnded=function(){r.isFirst=!0,r.pause(),r.controlsRef.toggleVisibility(),r.onEnded.emit()},this.handleTimeUpdate=(e=function(t){return __awaiter(r,void 0,void 0,(function(){var e,i,o,n;return __generator(this,(function(r){switch(r.label){case 0:return this.currentTime=this.videoRef.currentTime,o=this.duration||this._duration,[4,this.controlsRef.getIsDraggingProgressBall()];case 1:return n=r.sent(),this.controls&&this.showProgress&&(n||this.isDraggingProgress||(this.controlsRef.setProgressBall(this.currentTime/o),this.controlsRef.setCurrentTime(this.currentTime))),this.danmuRef.tick(this.currentTime),this.onTimeUpdate.emit({"duration":null===(e=t.target)||void 0===e?void 0:e.duration,"currentTime":null===(i=t.target)||void 0===i?void 0:i.currentTime}),this.duration&&this.currentTime>=this.duration&&(this.seek(0),this.handleEnded()),[2]}}))}))},i=250,n=0,function(){var t=Date.now();t-n>i&&(e.apply(this,arguments),n=t)}),this.handleError=function(t){var e,i;r.onError.emit({"errMsg":null===(i=null===(e=t.target)||void 0===e?void 0:e.error)||void 0===i?void 0:i.message})},this.handleDurationChange=function(){r._duration=r.videoRef.duration},this.handleProgress=function(){r.onProgress.emit()},this.handleLoadedMetaData=function(t){var e=t.target;r.onLoadedMetaData.emit({"width":e.videoWidth,"height":e.videoHeight,"duration":e.duration})},this.play=function(){r.videoRef.play()},this.pause=function(){r.videoRef.pause()},this.stop=function(){r.videoRef.pause(),r.seek(0)},this.seek=function(t){r.videoRef.currentTime=t},this.onTouchStartContainer=function(t){r.lastTouchScreenX=t.touches[0].screenX,r.lastTouchScreenY=t.touches[0].screenY},this.onClickContainer=function(){if(r.enablePlayGesture){var t=Date.now();t-r.lastClickedTime<300&&(r.isPlaying?r.pause():r.play()),r.lastClickedTime=t}r.controlsRef.toggleVisibility()},this.onClickFullScreenBtn=function(t){t.stopPropagation(),r.toggleFullScreen()},this.toggleFullScreen=function(t){var e=void 0===t?!r.isFullScreen:t;r.isFullScreen=e,r.controlsRef.toggleVisibility(!0),r.onFullScreenChange.emit({"fullScreen":e,"direction":"vertical"})},this.toggleMute=function(t){t.stopPropagation(),r.videoRef.muted=!r.isMute,r.controlsRef.toggleVisibility(!0),r.isMute=!r.isMute},this.toggleDanmu=function(t){t.stopPropagation(),r.controlsRef.toggleVisibility(!0),r._enableDanmu=!r._enableDanmu},this.onPlay=Object(o.d)(this,"play",7),this.onPause=Object(o.d)(this,"pause",7),this.onEnded=Object(o.d)(this,"ended",7),this.onTimeUpdate=Object(o.d)(this,"timeupdate",7),this.onError=Object(o.d)(this,"error",7),this.onFullScreenChange=Object(o.d)(this,"fullscreenchange",7),this.onProgress=Object(o.d)(this,"progress",7),this.onLoadedMetaData=Object(o.d)(this,"loadedmetadata",7)}return class_2.prototype.componentWillLoad=function(){this._enableDanmu=this.enableDanmu},class_2.prototype.componentDidLoad=function(){this.initialTime&&(this.videoRef.currentTime=this.initialTime),this.danmuRef.sendDanmu(this.danmuList)},class_2.prototype.componentDidRender=function(){var t=this.el.parentElement,e=t.tagName;if(this.isFullScreen)"BODY"!==e&&(t.removeChild(this.el),document.body.appendChild(this.el));else if("DIV"!==e||!t.className.includes("taro-video"))if(this.wrapperElement)t.removeChild(this.el),this.wrapperElement.appendChild(this.el);else{var i=document.createElement("div");i.className="taro-video",t.removeChild(this.el),i.appendChild(this.el),t.appendChild(i),this.wrapperElement=i}},class_2.prototype.watchEnableDanmu=function(t){this._enableDanmu=t},class_2.prototype.onDocumentTouchMove=function(t){return __awaiter(this,void 0,void 0,(function(){var e,i,o;return __generator(this,(function(n){switch(n.label){case 0:return void 0===this.lastTouchScreenX||void 0===this.lastTouchScreenY?[2]:[4,this.controlsRef.getIsDraggingProgressBall()];case 1:return n.sent()||("adjustVolume"===(e=this.analyseGesture(t)).type?(this.toastVolumeRef.style.visibility="visible",i=Math.max(Math.min(this.lastVolume-e.dataY,1),0),this.videoRef.volume=i,this.toastVolumeBarRef.style.width=100*i+"%"):"adjustProgress"===e.type&&(this.isDraggingProgress=!0,this.nextPercentage=Math.max(Math.min(this.lastPercentage+e.dataX,1),0),this.controls&&this.showProgress&&(this.controlsRef.setProgressBall(this.nextPercentage),this.controlsRef.toggleVisibility(!0)),o=this.duration||this._duration,this.toastProgressTitleRef.innerHTML=formatTime(this.nextPercentage*o)+" / "+formatTime(o),this.toastProgressRef.style.visibility="visible")),[2]}}))}))},class_2.prototype.onDocumentTouchEnd=function(){var t;"adjustVolume"===this.gestureType?this.toastVolumeRef.style.visibility="hidden":"adjustProgress"===this.gestureType&&(this.toastProgressRef.style.visibility="hidden"),this.isDraggingProgress&&(this.isDraggingProgress=!1,this.seek(this.nextPercentage*(null!=(t=this.duration)?t:this._duration))),this.gestureType="none",this.lastTouchScreenX=void 0,this.lastTouchScreenY=void 0},class_2.prototype.render=function(){var t=this,e=this,i=e.src,r=e.controls,s=e.autoplay,a=e.loop,l=e.muted,c=e.poster,u=e.objectFit,d=e.isFirst,h=e.isMute,g=e.isFullScreen,A=e.duration,p=e._duration,b=e.showCenterPlayBtn,f=e.isPlaying,v=e._enableDanmu,m=e.showMuteBtn,y=e.danmuBtn,w=e.showFullscreenBtn,x=formatTime(A||p||null);return Object(o.f)(o.a,{"class":Object(n.a)("taro-video-container",{"taro-video-type-fullscreen":g}),"onTouchStart":this.onTouchStartContainer,"onClick":this.onClickContainer},Object(o.f)("video",{"class":"taro-video-video","style":{"object-fit":u},"ref":function(e){return t.videoRef=e},"src":i,"autoplay":s,"loop":a,"muted":l,"poster":r?c:void 0,"playsinline":!0,"webkit-playsinline":!0,"onPlay":this.handlePlay,"onPause":this.handlePause,"onEnded":this.handleEnded,"onTimeUpdate":this.handleTimeUpdate,"onError":this.handleError,"onDurationChange":this.handleDurationChange,"onProgress":this.handleProgress,"onLoadedMetaData":this.handleLoadedMetaData},"暂时不支持播放该视频"),Object(o.f)("taro-video-control",{"ref":function(e){e&&(t.controlsRef=e)},"controls":r,"currentTime":this.currentTime,"duration":this.duration||this._duration||void 0,"isPlaying":this.isPlaying,"pauseFunc":this.pause,"playFunc":this.play,"seekFunc":this.seek,"showPlayBtn":this.showPlayBtn,"showProgress":this.showProgress},m&&Object(o.f)("div",{"class":Object(n.a)("taro-video-mute",{"taro-video-type-mute":h}),"onClick":this.toggleMute}),y&&Object(o.f)("div",{"class":Object(n.a)("taro-video-danmu-button",{"taro-video-danmu-button-active":v}),"onClick":this.toggleDanmu},"弹幕"),w&&Object(o.f)("div",{"class":Object(n.a)("taro-video-fullscreen",{"taro-video-type-fullscreen":g}),"onClick":this.onClickFullScreenBtn})),Object(o.f)("taro-video-danmu",{"ref":function(e){e&&(t.danmuRef=e)},"enable":v}),d&&b&&!f&&Object(o.f)("div",{"class":"taro-video-cover"},Object(o.f)("div",{"class":"taro-video-cover-play-button","onClick":this.play}),Object(o.f)("p",{"class":"taro-video-cover-duration"},x)),Object(o.f)("div",{"class":"taro-video-toast taro-video-toast-volume","ref":function(e){e&&(t.toastVolumeRef=e)}},Object(o.f)("div",{"class":"taro-video-toast-title"},"音量"),Object(o.f)("div",{"class":"taro-video-toast-icon"}),Object(o.f)("div",{"class":"taro-video-toast-value"},Object(o.f)("div",{"class":"taro-video-toast-value-content","ref":function(e){e&&(t.toastVolumeBarRef=e)}},Object(o.f)("div",{"class":"taro-video-toast-volume-grids"},Array(10).fill(1).map((function(){return Object(o.f)("div",{"class":"taro-video-toast-volume-grids-item"})})))))),Object(o.f)("div",{"class":"taro-video-toast taro-video-toast-progress","ref":function(e){e&&(t.toastProgressRef=e)}},Object(o.f)("div",{"class":"taro-video-toast-title","ref":function(e){e&&(t.toastProgressTitleRef=e)}})))},Object.defineProperty(class_2.prototype,"el",{"get":function(){return Object(o.e)(this)},"enumerable":!0,"configurable":!0}),Object.defineProperty(class_2,"watchers",{"get":function(){return{"enableDanmu":["watchEnableDanmu"]}},"enumerable":!0,"configurable":!0}),Object.defineProperty(class_2,"style",{"get":function(){return'.taro-video{width:100%;height:225px;display:inline-block;line-height:0;overflow:hidden;position:relative}.taro-video[hidden]{display:none}.taro-video-container{width:100%;height:100%;background-color:#000;display:inline-block;position:absolute;top:0;left:0;overflow:hidden;-o-object-position:inherit;object-position:inherit}.taro-video-container.taro-video-type-fullscreen{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999}.taro-video-container.taro-video-type-fullscreen.taro-video-type-rotate-left{-webkit-transform:translate(-50%,-50%) rotate(-90deg);transform:translate(-50%,-50%) rotate(-90deg)}.taro-video-container.taro-video-type-fullscreen.taro-video-type-rotate-right{-webkit-transform:translate(-50%,-50%) rotate(90deg);transform:translate(-50%,-50%) rotate(90deg)}.taro-video-video{width:100%;height:100%;-o-object-position:inherit;object-position:inherit}.taro-video-cover{position:absolute;top:0;left:0;bottom:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:rgba(1,1,1,.5);z-index:1}.taro-video-cover-play-button{width:40px;height:40px;background-size:50%;background-repeat:no-repeat;background-position:50% 50%}.taro-video-cover-duration{color:#fff;font-size:16px;line-height:1;margin-top:10px}.taro-video-bar{visibility:hidden;height:44px;background-color:rgba(0,0,0,.5);overflow:hidden;position:absolute;bottom:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 10px;z-index:0}.taro-video-bar.taro-video-bar-full{left:0}.taro-video-controls{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin:0 8.5px}.taro-video-control-button{width:13px;height:15px;padding:14.5px 12.5px 14.5px 12.5px;margin-left:-8.5px;-webkit-box-sizing:content-box;box-sizing:content-box}.taro-video-control-button:after{content:"";display:block;width:100%;height:100%;background-size:100%;background-position:50% 50%;background-repeat:no-repeat}.taro-video-control-button.taro-video-control-button-play:after,.taro-video-cover-play-button{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAAAAXNSR0IArs4c6QAAAWhJREFUSA1j+P///0cgBoHjQGzCQCsAtgJB/AMy5wCxGNXtQ9iBwvoA5BUCMQvVLEQxHpNzDSjkRhXLMM3GKrIeKKpEkYVYjcUu+AMo3ALE3GRZiN1MvKKPgbIRJFuG10j8koeA0gZEW4jfLIKyf4EqpgOxMEELCRpFnIJ3QGU5QMyM00LizCFa1SWgSkeslhFtBGkKVwGVy6FYSJp+klR/A6quB2JOkIWMIK0oNlOf8xBoZDE9LAI7nYn6HsBq4l96WHQEaLUpAyiOaASeAM2NgvuPBpaACt82IEYtfKls0UagecpwXyAzqGTRdaA57sjmYrAptAjUsCkGYlYMg9EFyLQI1IiZB8Ti6Obh5JNh0QmgHlOcBuKSIMGi50C18UDMiMssvOJEWPQLqKYbiHnxGkRIkoBF24DyaoTMIEoeh0W3geI+RBlArCI0iz4D+RVAzEasfqLVAQ19AcSg5LoYiKWI1kiiQgCMBLnEEcfDSgAAAABJRU5ErkJggg==)}.taro-video-control-button.taro-video-control-button-pause:after{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAAAXNSR0IArs4c6QAAAFlJREFUSA3tksEKACAIQ7X//5zq98wOgQayum8QaGweHhMzG/6OujzKAymn+0LMqivu1XznWmX8/echTIyMyAgTwA72iIwwAexgj8gIE8CO3aMRbDPMaEy5BRGaKcZv8YxRAAAAAElFTkSuQmCC)}.taro-video-current-time,.taro-video-duration{height:14.5px;line-height:14.5px;margin-top:15px;margin-bottom:14.5px;font-size:12px;color:#cbcbcb}.taro-video-progress-container{-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;position:relative}.taro-video-progress{height:2px;margin:21px 12px;background-color:hsla(0,0%,100%,.4);position:relative}.taro-video-progress-buffered{position:absolute;left:0;top:0;width:0;height:100%;-webkit-transition:width .1s;transition:width .1s;background-color:hsla(0,0%,100%,.8)}.taro-video-ball{width:16px;height:16px;padding:14px;position:absolute;top:-21px;-webkit-box-sizing:content-box;box-sizing:content-box;left:0;margin-left:-22px}.taro-video-inner{width:100%;height:100%;background-color:#fff;border-radius:50%}.taro-video-danmu-button{white-space:nowrap;line-height:1;padding:2px 10px;border:1px solid #fff;border-radius:5px;font-size:13px;color:#fff;margin:0 8.5px}.taro-video-danmu-button.taro-video-danmu-button-active{border-color:#48c23d;color:#48c23d}.taro-video-fullscreen,.taro-video-mute{width:17px;height:17px;padding:8.5px;-webkit-box-sizing:content-box;box-sizing:content-box;background-size:50%;background-position:50% 50%;background-repeat:no-repeat}.taro-video-fullscreen{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAhUlEQVRYR+2WSwrAMAhEnZO3PfmULLooGEFTiIXJ2s/kRY2wzQeb85sE9CRA8jSzY1YfAFzhJBnU1AVgxH2dSiArCnD9QgGzRNnOech48SRABHoSyFb5in3PSbhyo6yvCPQkEM3u7BsPe/0FIvBfAh/vhKmVbO9SWun1qk/PSVi9TcVPBG6R1YIhgWwNpQAAAABJRU5ErkJggg==)}.taro-video-fullscreen.taro-video-type-fullscreen{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABPUlEQVRYR+2Xu0pDURBF1/ZLxNcHKNiIlfhA7C0UBSEE8RNEBNFPUEQEEbGxFiSSSrCwEHsf5E/ccsSUuWfUhKQ40947+y42Z8+ZK/pcinzf9hhwD1xJ2q/qsb0JHAOzkl5y+lGAGnCWICQtZgAS6DxQk3TeLYA6cAo0JSXxjmW7CcwBdUkJurKiDhSA4kBvHbA9CqwBQx2O7BSw8ssU3ALPFRF4knT3nQLbr8B4LjLBOdAAFgJaLUkjbYC9n+zm+i4kXWbmwCqwnRMCHiXthuZAQOzPrxSA4kBxYDAcsH0EzATCfCLpJjOINoCtgFZabg7bk7AFDAeaGpKWgitZTu5N0kQbYBmYrujo9mX0CVxL+gidAdu9vY5zXhWA4sAgOND3X7NJ4AHYCaxkB8B62gslvecSFpoDOZH/PP8Cnt7hIaM5xCEAAAAASUVORK5CYII=)}.taro-video-mute{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDQtMTFUMTA6MTg6MjArMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjIyKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjIyKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk3YmE4Yjg0LTFhNTYtNGM1MS04NDVkLTNiZmYyMGI0ZDc0ZiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjg1NGQ3MjlkLWUwNjctZjU0OC1hMTlhLTBlZjQ4OGRkYjJiOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjA1ODY3ZDFlLWQ3NGEtNDgyNC04MDU3LTYzYmRmMTdjODk5ZSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDU4NjdkMWUtZDc0YS00ODI0LTgwNTctNjNiZGYxN2M4OTllIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjE4OjIwKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OTdiYThiODQtMWE1Ni00YzUxLTg0NWQtM2JmZjIwYjRkNzRmIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjIyOjIyKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz459+FoAAABqElEQVRYhc2XPWsVQRSGnxPjF4oGRfxoRQKGWCU2Ft7CykrQWosEyf/If0hhIPgHDEmbNJZqCFxiQEgTUGxsBUVEHgvnyrjZZJO92V1fGIaZnTPvszPszNlQ6VIjnbr/DwCoDLMNak/dUVfUK0f2rQugnlcX/FevWgFQH6gf3autRgHUC+piiXHzAOmtPx9gXgug8itQx9SXwDpw47AGKXZWvXvQmNFCwE3gCXA2dY0Az4GrRzHONA9cU/vAbERsllEOyh31e8USV2mrMPdG9uyn+rDom2/BHHCm5puWKiKmgdtAnz+rvaxO5mNygEvHaZ5BfADuARvAaWBpP4DGFBHfgBngFzClTrUKkCDeA+9S837rAEnbqb7VFcCpVJ/oCmCw959aB1AfAROpudYqgDoOLKRmPyLelAF8bcD4pPoMeAtcB34AT4uDBqXXwFG8XXUU/72MIuK1OgE8Bs6l7mEvo8up7lN1Ge0n9aK6VHMFZvJTr9S3CiALaCQhqZOSvegMIAvu2UVSWpigLC1fbQ0gm6in7qpfLCQbhwGIYcyPQ53/G3YO8BtUtd35bvKcVwAAAABJRU5ErkJggg==)}.taro-video-mute.taro-video-type-mute{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAYAAAB3j6rJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDQtMTFUMTA6MTk6MDMrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjMzKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjMzKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAzYjJmNjE2LTZmZTUtNDJjNC1iNTgwLTczNzZjZjI2NzdmNSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjYzZjQ2NTYzLWE0ZjktOGQ0Mi1hM2FhLTY3ODJhNDBhYWNjMSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjIyYWNjMWFlLTg4ZmMtNDBlZi1iMWM1LTNmODgwY2QzYWI2MiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjJhY2MxYWUtODhmYy00MGVmLWIxYzUtM2Y4ODBjZDNhYjYyIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjE5OjAzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDNiMmY2MTYtNmZlNS00MmM0LWI1ODAtNzM3NmNmMjY3N2Y1IiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjIyOjMzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5PmxYVAAACLklEQVRYhc2XP2sVQRRHz40hKoqaQgVBCy1EozFlGiVFxMLGh4piYWEh+hkEP4YKAVFEEFTyughaCH6DqIVpAhYWEgIxoJE8cywyi5tNHu/tJmvyg2WZO3dmzt47/zZUtoJ6Nhsg09YDiYhKDzACTAFNYH9lEpUq80TdrT5wpV5n/ZV9KoGoo+pXV2uyKkipOaLuUceAt8DhUvQd1FsCYhR4ChzaSIBMHSOi7lOfsByFWiCgEBH1GHAF2JlMPcBt4GC3HUYEaj9wF3gVEVPtfNVTwAXgWX7CDKq/1piAZTSZBmim8qJ6sQ3EgDqb/L7kU3MH2NHtl3dQX3r3Ak21UYAYAj4A/cl0JB+RF+uMRj4iQ+p8zt7KYFLdXKHuRi0gacBhV6a6pd5bA6KRNagFJPU9qv5u47toLmW1HnoR8Q5oAK1CVQu4FBHj/wUkaXsb+4pzpVaQFPqXrN7Be4Fx9VztIOr1BLEtmX4A94E/qdwHTKjDWYM6lu81dSlnn3V570BtuLxaMs2rZ/IgYxsBovaoPwsQA4VoFWEm8ql5DiysNyURsQTMpOIMcDYiPhd8xoGr/FtNC2G6FKXD6ihwGdiVHMoeeh8jYlA9ANwE3kTEp3bO6vE03qOONzR1r/q4RGrquaFFxFxE3ALOA9+6jExpdb180y55AhirhaRTatq0GXEzL8+ZIuI9cBJ4WKiartJf9nWV/mty7UfUafW7erpqRGI9EBuprffvu9n6C1KOmsqwI5A1AAAAAElFTkSuQmCC)}.taro-video-danmu{position:absolute;top:0;left:0;bottom:0;width:100%;margin-top:14px;margin-bottom:44px;font-size:14px;line-height:14px;overflow:visible}.taro-video-danmu-item{line-height:1;position:absolute;color:#fff;white-space:nowrap;left:100%;-webkit-transform:translatex(0);transform:translatex(0);-webkit-transition-property:left,-webkit-transform;transition-property:left,-webkit-transform;transition-property:left,transform;transition-property:left,transform,-webkit-transform;-webkit-transition-duration:3s;transition-duration:3s;-webkit-transition-timing-function:linear;transition-timing-function:linear}.taro-video-toast{pointer-events:none;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:5px;background-color:hsla(0,0%,100%,.8);color:#000;display:block;visibility:hidden}.taro-video-toast.taro-video-toast-volume{width:100px;height:100px;display:block}.taro-video-toast-volume .taro-video-toast-title{width:100%;font-size:12px;line-height:16px;text-align:center;margin-top:10px;display:block}.taro-video-toast-volume .taro-video-toast-icon{fill:#000;width:50%;height:50%;margin-left:25%;display:block;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFhklEQVR4Xu2aeaxfQxTHP1VBES0NIQitWtpaaxeCUkQtaYVa0tiClAq1ExIiQTVppaWxt8RWSa2tWkJQRGgtQaSIpUKEpG0ssbbk28yV2+mZO/e9e3vvu/e98897mZnfzPl+75mZs0wvurn06ub46SGgxwLqZaA3sB/wO/A+8G/V6tS5BU4BJgJbO9DvAMOB36okoQ4CNgAeBEYbQK8Bbm4zAdsBc4EdAyA/APZoKwHHAA8DG2UA/AnYrG0ErAVcD1yXA9gfQJ8c40obsqbPgH7AY8CROTVuFQFD3X7fJid4DWsNAWOAGZ0w58YTsDZwKzChA189PbTRBGwKzAYO6iT4srbAMHfTfAksjulS1iG4JzAH2Dy2YKS/qAVcCdzi1vgZOBZ4PWvNGAG6wgYCW0IwctzNmf06BcEXtYABwOeA4otEfgEOdnGGqV6IAAUopwM6zDYuAVjeKYpYwCjgCWOhH513+b2lhE+Avrj89NPyalzyuCIE6EN9BfQ1dHoPOAD40+9LE6D/5aoqSqtLsgiQC60DTiHzfGCFoaSsQAexZdlTgEuyCDgLuK8u5G7dEAHyKN8CBrtxLwDHAX8Z+l4N3GS0L3db4aN0X5opmc+2XZQAfb2LPd2eciG1lUSRJZ9qYHkZONwiYAjwSc3gs24BXWWWfzEVuMjQez13HljX8v7A28lvEgsInaBVcxLaAvr6sgJLtBWeNTrOB+4w2p8DRvoEnAPcXTVaY70QAbrbXwIONX7zBSAL/tvrk1+iviTllnRry2irr/QSEws4D7izCxMg1XQLLAQGGXpeCkw22kOWI49RMUujCJC+uwAfGtfcImAng4AtAMsBeg04pIkESOfbgQsMsNoGnxrtSrfv7rXrSlwXWN6kLZBgEBiB8iWUUZZPIN/AF1nMoiYSICDfAlt5iB4CxhpAzwXuMtqPBuY1lYB5wFEeqFeAwwyguvIUqvuiQO/xphJwP3Cmhyh0EKrOoGDIF7n+M5pKwEwXrqdBCaQSM77Ig7SSIicDs5pKwIvACA+pzFwZIF9OlKm36QyQV7jEqDDJk5VD58uFgGIGX1Se+6yJFqAKsqI6X84GdDb4Mh0Y5zUqjFYFakUTCXja5QLSmBQHbAL8ahAgT1AeYVreSKLLphGwF/CuAfLJQLldGSTFD75c5d4mNCoWyAqG9gYWGED1AOMKo12ZbiWA/idA++deY2DVTZ0Jh5UJPsFQtD/wDaAHGWl5EzgwaUi2gK4UXS11S0cTIjrMFBtYQdAk4DID0BnAAz4B6wNLgTKKG0VIDBHwqitwpOcW+OOB540FdeipNKbUWFrUtn06o5xOij4KyDuqU0IE3Obl/rLA63pTzm9XA8jKACjdniZAaSKFmUpB1yUhAlTsUEpMh913wEkuTe7rKTzPAHqO44vpKPkFhH3cWWBVV6ogJVYZUgz/tXtIYelzI3Ct0fExIGx6j7iKWBUUveyYBehv1RIjIEsfqziq8Xp4pSBJOYTVJFQcVY3wCFeKUjVGyYfQWB00+5bEVBECrNS+qsOKBpVHNCVWHs+LS7H5PV5pOu9v0+OKEOAXR39w1e1C7wM6AkJ1eLmkRcrpRQiQrqobXO5S3vL3/4kBKMsCknV0k+iasVLUMV3UX5SAPGtED8EOT+L9YENnCasUIXNO2goChFWHqAIRyxXN4qI1BCQg9dJESYq8LnbrCBAR8t50Lig6i0krCRBoVWhVlt45wkBrCRBuRZyPuAguxIPe9lXqhpd9DcZMXOvdkPF0Xu/8dohNUmZ/1QQkuitXr+d4fryuFx3jywQYm6suAqSX8vLTXKJDt4QqO6rtLYspXWZ/nQQkOJTAUJZGIav19q9MvKvN1RUIWKMAY5P3EBBjqO393d4C/gMVHwRQlpx21QAAAABJRU5ErkJggg==);background-size:50%;background-position:50% 50%;background-repeat:no-repeat}.taro-video-toast-volume .taro-video-toast-value{width:80px;height:5px;margin-top:5px;margin-left:10px}.taro-video-toast-volume .taro-video-toast-value>.taro-video-toast-value-content{overflow:hidden}.taro-video-toast-volume-grids{width:80px;height:5px}.taro-video-toast-volume-grids-item{float:left;width:7.1px;height:5px;background-color:#000}.taro-video-toast-volume-grids-item:not(:first-child){margin-left:1px}.taro-video-toast.taro-video-toast-progress{background-color:rgba(0,0,0,.8);color:#fff;font-size:14px;line-height:18px;padding:6px}'},"enumerable":!0,"configurable":!0}),class_2}(),a=function(){function class_3(t){Object(o.g)(this,t),this.list=[],this.danmuElList=[],this.currentTime=0,this.enable=!1,this.danmuList=[]}return class_3.prototype.ensureProperties=function(t){var e=Object.assign({},t);return"time"in t||(e.time=this.currentTime),e.key=Math.random(),e.bottom=90*Math.random()+5+"%",e},class_3.prototype.sendDanmu=function(t){return void 0===t&&(t=[]),__awaiter(this,void 0,void 0,(function(){var e,i=this;return __generator(this,(function(o){return Array.isArray(t)?this.list=__spreadArrays(this.list,t.map((function(t){return i.ensureProperties(t)}))):(e=t,this.list=__spreadArrays(this.list,[Object.assign({},this.ensureProperties(e))])),[2]}))}))},class_3.prototype.tick=function(t){return __awaiter(this,void 0,void 0,(function(){var e,i,o;return __generator(this,(function(n){return this.currentTime=t,this.enable?(e=this.list,i=e.filter((function(e){var i=e.time;return t-i<4&&t>i})),!1,o=this.danmuList,(i.length!==o.length||i.some((function(t){var e=t.key;return o.every((function(t){return e!==t.key}))})))&&(this.danmuList=i),[2]):[2]}))}))},class_3.prototype.componentDidUpdate=function(){var t=this;requestAnimationFrame((function(){setTimeout((function(){t.danmuElList.splice(0).forEach((function(t){t.style.left="0",t.style.webkitTransform="translateX(-100%)",t.style.transform="translateX(-100%)"}))}))}))},class_3.prototype.render=function(){var t=this;return this.enable?Object(o.f)(o.a,{"class":"taro-video-danmu"},this.danmuList.map((function(e){var i=e.text,n=e.color,r=e.bottom,s=e.key;return Object(o.f)("p",{"class":"taro-video-danmu-item","key":s,"style":{"color":n,"bottom":r},"ref":function(e){e&&t.danmuElList.push(e)}},i)}))):""},class_3}()},"314":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var o=function createCommonjsModule(t,e){return t(e={"exports":{}},e.exports),e.exports}((function(t){!function(){var e={}.hasOwnProperty;function classNames(){for(var t=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var n=typeof o;if("string"===n||"number"===n)t.push(o);else if(Array.isArray(o)&&o.length){var r=classNames.apply(null,o);r&&t.push(r)}else if("object"===n)for(var s in o)e.call(o,s)&&o[s]&&t.push(s)}}return t.join(" ")}t.exports?(classNames.default=classNames,t.exports=classNames):window.classNames=classNames}()}))}}]);