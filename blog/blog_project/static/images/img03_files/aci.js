(function(l){l(window,"undefined"===typeof window._acic?{}:window._acic,"undefined"===typeof window._aci_debug?!1:window._aci_debug)})(function(l,k,s){function f(){if(!(this instanceof f))return new f;this.version="0.0.20";this.urlHit="//www.acint.net/hit/";this.urlJump="//www.acint.net/jump/";this.urlPing="//www.acint.net/ping/";this.urlMatchCookie="//www.acint.net/mc/";this.urlRid="//dsp-rtb.sape.ru/getrid/";this.cookieName="aid";this.cookieValueOptOut="opt-out";this.uid="";this.presence={startTimeout:1E4,
maxNofRequests:2,timeoutMultiplier:2,nofRequests:0};this.dspTrack={timeout:50,maxNofRequests:4,nofRequests:0,ready:!1,bidRequestId:""};this.config={dataProvider:"",allowExtLinksTrack:!0,allowPresenceTrack:!0,allowDspTrack:!1,customData:null}}var t=!!s,q={};"object"==typeof JSON&&"function"==typeof JSON.stringify?q.stringify=function(a){return JSON.stringify(a)}:function(){function a(a){function b(a){return 10>a?"0"+a:a}if(a&&"object"==typeof a){if(a instanceof Date)return isFinite(a.valueOf())?a.getUTCFullYear()+
"-"+b(a.getUTCMonth()+1)+"-"+b(a.getUTCDate())+"T"+b(a.getUTCHours())+":"+b(a.getUTCMinutes())+":"+b(a.getUTCSeconds())+"Z":null;if(a instanceof String||a instanceof Number||a instanceof Boolean)return a.valueOf()}return a}function c(a){g.lastIndex=0;return g.test(a)?'"'+a.replace(g,function(a){var b=r[a];return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function b(g,r){var n,f,k,l,q=d,p,m=r[g],m=a(m);"function"===typeof h&&(m=h.call(r,g,m));switch(typeof m){case "string":return c(m);
case "number":return isFinite(m)?String(m):"null";case "boolean":case "null":return String(m);case "object":if(!m)return"null";d+=e;p=[];if("[object Array]"===Object.prototype.toString.apply(m)){l=m.length;for(n=0;n<l;n+=1)p[n]=b(n,m)||"null";k=0===p.length?"[]":d?"[\n"+d+p.join(",\n"+d)+"\n"+q+"]":"["+p.join(",")+"]";d=q;return k}if(h&&"object"===typeof h)for(l=h.length,n=0;n<l;n+=1)f=h[n],"string"===typeof f&&(k=b(f,m))&&p.push(c(f)+(d?": ":":")+k);else for(f in m)Object.prototype.hasOwnProperty.call(m,
f)&&(k=b(f,m))&&p.push(c(f)+(d?": ":":")+k);k=0===p.length?"{}":d?"{\n"+d+p.join(",\n"+d)+"\n"+q+"}":"{"+p.join(",")+"}";d=q;return k}}var g,d,e,r,h;"function"!==typeof q.stringify&&(g=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,r={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},q.stringify=function(a,c,g){var f;e=d="";if("number"===typeof g)for(f=0;f<g;f+=1)e+=" ";else"string"===typeof g&&
(e=g);if((h=c)&&"function"!==typeof c&&("object"!==typeof c||"number"!==typeof c.length))throw Error("JSONStub.stringify");return b("",{"":a})})}();var e={generateUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var c=16*Math.random()|0;return("x"==a?c:c&3|8).toString(16)}).toLowerCase()},stringTrimLimit:function(a){if(null==a)return"";a=a.replace(/\s+/gmi," ").replace(/^\s+|\s+$/g,"");1E3<a.length&&(a=a.substr(0,1E3));return a},padInt:function(a){return 10>
a?"0"+a:""+a},getTimeZoneOffsetIso8601:function(){var a=(new Date).getTimezoneOffset();return(0<a?"-":"+")+this.padInt(Math.floor(Math.abs(a)/60))+":"+this.padInt(Math.abs(a)%60)},getDateTimeIso8601:function(a){var c=new Date;return c.getFullYear()+"-"+this.padInt(c.getMonth()+1)+"-"+this.padInt(c.getDate())+"T"+this.padInt(c.getHours())+":"+this.padInt(c.getMinutes())+":"+this.padInt(c.getSeconds())+"."+String((c.getMilliseconds()/1E3).toFixed(3)).slice(2,5)+(!0===a?this.getTimeZoneOffsetIso8601:
"")},isObject:function(a){return"object"===typeof a&&"[object Object]"===Object.prototype.toString.call(a)},isArray:function(a){return"undefined"!==typeof Array.isArray?Array.isArray(a):"[object Array]"===Object.prototype.toString.call(a)},isEmptyObject:function(a){for(var c in a)return!1;return!0},isString:function(a){return"string"===typeof a||a instanceof String},encodeUriParam:function(a){if(null==a)return"";a=""+a;return encodeURIComponent instanceof Function?encodeURIComponent(a):escape(a)},
implodeUriParams:function(a){var c,b=[];for(c in a)a.hasOwnProperty(c)&&b.push(c+"="+a[c]);return b.join("&")},makeRequestUri:function(a,c){var b=e.implodeUriParams(c);8E3<b.length&&(b=b.substr(0,8E3));return a+"?"+b},makeRequestImage:function(a){(window.Image?new Image:document.createElement("img")).src=a},makeRequestScript:function(a){var c=document.createElement("script");c&&(c.setAttribute("src",a),document.body.appendChild(c))},makeRequestIframe:function(a){var c=document.createElement("iframe");
c&&(c.setAttribute("src",a),c.setAttribute("style","width:1px;height:1px;display:none;"),c.setAttribute("frameBorder","0"),c.setAttribute("width","0"),c.setAttribute("height","0"),document.body.appendChild(c))},addReadOnlyProperty:function(a,c,b){Object.defineProperty(a,c,{value:b,writeable:!1,enumerable:!0,configurable:!1})},addEventListenerCrossBrowser:function(a,c,b){if(a.addEventListener)a.addEventListener(c,b,!1);else if(a.attachEvent)a.attachEvent("on"+c,b);else throw"Cannot add event listener: no Event API support in client";
},removeEventListenerCrossBrowser:function(a,c,b){if(a.removeEventListener)a.removeEventListener(c,b,!1);else if(a.attachEvent)a.detachEvent("on"+c,b);else throw"Cannot remove event listener: no Event API support in client";},fireEventCrossBrowser:function(a,c){var b,g=document;if(g.createEvent){var d=null;switch(c){case "click":case "dblclick":case "mousedown":case "mouseup":case "mouseover":case "mousemove":case "mouseout":case "mouseenter":case "mouseleave":d="MouseEvent";break;case "wheel":d=
"WheelEvent";break;case "load":case "unload":case "abort":case "error":case "select":case "resize":case "scroll":d="UIEvent";break;case "focus":case "focusin":case "focusout":case "blur":d="FocusEvent";break;case "beforeinput":case "input":d="InputEvent";break;case "keydown":case "keyup":d="KeyboardEvent";break;case "compositionstart":case "compositionupdate":case "compositionend":d="CompositionEvent"}try{b=g.createEvent(d)}catch(e){try{b=g.createEvent("HtmlEvents")}catch(f){try{b=g.createEvent("Event")}catch(h){throw Error("Cannot create event object for specified event: "+
c);}}}b.initEvent(c,!0,!1);a.dispatchEvent(b)}else if(g.createEventObject)b=g.createEventObject(),b.eventType=c,a.fireEvent("on"+c,b);else if("function"==typeof a["on"+c])a["on"+c]()},fireSameEventCrosBrowser:function(a,c,b){var g=document,d;if(g.createEvent)try{d=new b.constructor(c,b),a.dispatchEvent(d)}catch(e){d=g.createEvent("MouseEvent"),d.initMouseEvent(b.type,!0,!0,window,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget||null),a.dispatchEvent(d)}else if(g.createEventObject)d=
g.createEventObject(b),d.eventType=c,a.fireEvent("on"+c,d);else if("function"==typeof a["on"+c])a["on"+c]()},bindOnReady:function(a){function c(){g||(g=!0,a())}function b(){if(!g)try{f.doScroll("left"),c()}catch(a){setTimeout(b,10)}}var g=!1,d=window,e=document,f=e.documentElement;if(e.addEventListener)e.addEventListener("DOMContentLoaded",c,!1);else if(e.attachEvent){try{var h=null!=d.frameElement}catch(k){}f.doScroll&&!h&&b();e.attachEvent("onreadystatechange",function(){"complete"===e.readyState&&
c()})}else if(d.addEventListener)d.addEventListener("load",c,!1);else if(d.attachEvent)d.attachEvent("onload",c);else{var l=d.onload;d.onload=function(){l&&l();c()}}},cookies:{getItem:function(a){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(a,c,b,g,d,e){if(!a||/^(?:expires|max\-age|path|domain|secure)$/i.test(a))return!1;var f="";if(b)switch(b.constructor){case Number:f=
Infinity===b?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+b;break;case String:f="; expires="+b;break;case Date:f="; expires="+b.toUTCString()}document.cookie=encodeURIComponent(a)+"="+encodeURIComponent(c)+f+(d?"; domain="+d:"")+(g?"; path="+g:"")+(e?"; secure":"");return!0},removeItem:function(a,c,b){if(!a||!this.hasItem(a))return!1;document.cookie=encodeURIComponent(a)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(b?"; domain="+b:"")+(c?"; path="+c:"");return!0},hasItem:function(a){return(new RegExp("(?:^|;\\s*)"+
encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=")).test(document.cookie)},keys:function(){for(var a=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),c=0;c<a.length;c++)a[c]=decodeURIComponent(a[c]);return a}}};f.prototype.init=function(){if(!(this.isAlreadyLoaded()||e.cookies.hasItem(this.cookieName)&&this.cookieValueOptOut==e.cookies.getItem(this.cookieName))){this.uid=e.generateUUID();this.parseConfig();var a=this,c=
function(){a.initHit();a.initCookieMatch();!0===a.config.allowExtLinksTrack&&a.initExtLinksTrack();!0===a.config.allowPresenceTrack&&a.initPresenceTrack()};if(!0===this.config.allowDspTrack){this.initDspTrack();var b=function(){!1===a.dspTrack.ready&&a.dspTrack.nofRequests<a.dspTrack.maxNofRequests?(a.dspTrack.nofRequests++,setTimeout(b,a.dspTrack.timeout)):c()};b()}else c()}};f.prototype.initHit=function(){var a=e.makeRequestUri(this.urlHit,this.collectDataOnInit());e.makeRequestImage(a)};f.prototype.initCookieMatch=
function(){var a=e.makeRequestUri(this.urlMatchCookie,this.collectDataOnCookieMatch());e.makeRequestIframe(a)};f.prototype.initExtLinksTrack=function(){var a=this,c=document,b=function(b){var c=window,f=!1,k;b=b||c.event;var h=b.target||b.srcElement,l=h;if(!("tagName"in h&&"a"==h.tagName.toLowerCase())){for(f=h.parentNode;f;){if("tagName"in f&&"a"==f.tagName.toLowerCase()){k=f;break}if("parentNode"in f)f=f.parentNode;else break}if(k)h=k;else return}if("href"in h&&/^(http:|https:|)\/\/.+/.test(h.href)&&
!("hostname"in h&&h.hostname===c.location.hostname)){if(b.shiftKey||b.altKey||b.ctrlKey||b.metaKey)f=!0;f=!0;h.hasOwnProperty("_delayClick")?!1===h.hasOwnProperty("_canSkipDelay")?"preventDefault"in b?b.preventDefault():b.returnValue=!1:(delete h._canSkipDelay,delete h._delayClick):(c=e.makeRequestUri(a.urlJump,a.collectDataOnClick(b,h)),e.makeRequestImage(c),!1===f&&(h._delayClick=!0,setTimeout(function(){h._canSkipDelay=!0;e.fireSameEventCrosBrowser(l,"click",b)},200),"preventDefault"in b?b.preventDefault():
b.returnValue=!1))}};"interactive"==c.readyState||"complete"==c.readyState?e.addEventListenerCrossBrowser(c.body,"click",b):e.bindOnReady(function(){e.addEventListenerCrossBrowser(c.body,"click",b)})};f.prototype.initPresenceTrack=function(){var a=this,c=function(){var b=e.makeRequestUri(a.urlPing,a.collectDataOnPresencePing());e.makeRequestImage(b);a.presence.nofRequests+=1;a.presence.nofRequests<a.presence.maxNofRequests&&(b=a.presence.startTimeout*Math.pow(a.presence.timeoutMultiplier,a.presence.nofRequests),
setTimeout(c,b))};setTimeout(c,this.presence.startTimeout)};f.prototype.initDspTrack=function(){var a=this,c="cbrid_"+(new Date).getTime();window[c]=function(b){a.dspTrack.bidRequestId=b;a.dspTrack.ready=!0;delete window[c]};var b=e.makeRequestUri(a.urlRid,{cb:c});e.makeRequestScript(b)};f.prototype.isAlreadyLoaded=function(){if("object"==typeof l._acil&&"function"==typeof l._acil.isLoaded)return!0;"undefined"!==typeof Object.defineProperty?(e.addReadOnlyProperty(l,"_acil",{}),e.addReadOnlyProperty(l._acil,
"isLoaded",function(){return!0})):l._acil=function(){return{isLoaded:function(){return!0}}}();return!1};f.prototype.parseConfig=function(){if(e.isObject(k)&&!e.isEmptyObject(k)){var a=["dataProvider"],c=["allowExtLinksTrack","allowPresenceTrack","allowDspTrack"],b=["customData"],g,d;for(d=0;d<a.length;d++)g=a[d],k.hasOwnProperty(g)&&(this.config[g]=isNaN(parseInt(k[g],10))?this.config[g]:Math.abs(parseInt(k[g],10)));for(d=0;d<c.length;d++)g=c[d],k.hasOwnProperty(g)&&(this.config[g]=!0===k[g]);for(d=
0;d<b.length;d++)if(g=b[d],k.hasOwnProperty(g)&&(a=k[g],!("undefined"===typeof a||null==a||"function"==typeof a||e.isString(a)&&0===a.length||e.isObject(a)&&e.isEmptyObject(a)||e.isArray(a)&&0===a.length))){try{if(e.isObject(a)||e.isArray(a)){if(a=q.stringify(a),"{}"===a||"[]"===a)a=null}else e.isString(a)||(a=a.toString(),0===a.length&&(a=null))}catch(f){if(a=null,!0===s)throw f;}this.config[g]=a}}};f.prototype.dataAddObligatoryParams=function(a){a.v=this.version;a.uid=this.uid;a.dp=this.config.dataProvider;
a.tz=e.encodeUriParam(e.getTimeZoneOffsetIso8601());a.nc=Math.random().toString().substr(2,8);!0===this.config.allowDspTrack&&(a.brid=e.encodeUriParam(e.stringTrimLimit(this.dspTrack.bidRequestId)));return a};f.prototype.collectDataOnInit=function(){var a=document,c=window,b=this.dataAddObligatoryParams({});b.u=e.encodeUriParam(e.stringTrimLimit(c.location.href));b.r=e.encodeUriParam(e.stringTrimLimit(a.referrer||""));b.rs=c.screen.width+"x"+c.screen.height;b.t=e.encodeUriParam(e.stringTrimLimit(a.title));
b.oE=+this.config.allowExtLinksTrack;b.oP=+this.config.allowPresenceTrack;b.dT=e.encodeUriParam(e.getDateTimeIso8601(!1));null!==this.config.customData&&(b.cd=e.encodeUriParam(e.stringTrimLimit(this.config.customData)));c.parent!==c&&(b["if"]=e.encodeUriParam(c.location.href),b.u=e.encodeUriParam(a.referrer||""),b.r="");return b};f.prototype.collectDataOnCookieMatch=function(){return{dp:this.config.dataProvider}};f.prototype.collectDataOnClick=function(a,c){var b=document,g=window,b=a.target.ownerDocument||
b,d=b.documentElement,f=b.body,b=this.dataAddObligatoryParams({});b.u="";b.r="";b.vP="";b.c="";b.aT="";b.hT=0;b.vP=(g.innerWidth||d.clientWidth||f.clientWidth)+"x"+(g.innerHeight||d.clientHeight||f.clientHeight);null==a.pageX&&null!=a.clientX?b.c=a.clientX+(d&&d.scrollLeft||f&&f.scrollLeft||0)-(d&&d.clientLeft||f&&f.clientLeft||0)+"x"+(a.clientY+(d&&d.scrollTop||f&&f.scrollTop||0)-(d&&d.clientTop||f&&f.clientTop||0)):null!==a.pageX&&(b.c=a.pageX+"x"+a.pageY);b.r=e.encodeUriParam(e.stringTrimLimit(g.location.href));
b.u=e.encodeUriParam(e.stringTrimLimit(c.href));var g=c.childNodes,k=0,h=0,l=0;if(1<=g.length){for(d=0;d<g.length;d++)f=g[d],3!==f.nodeType&&1!==f.nodeType||1!==f.nodeType||(h+=1,"tagName"in g[d]&&"img"===g[d].tagName.toLowerCase()&&(k+=1,l=d));1==k&&k==h?b.hT=1:0<h&&(b.hT=2)}switch(b.hT){case 1:b.aT=g[l].getAttribute("alt")||"";break;case 2:case 0:b.aT=c.innerHTML?c.innerHTML.toString().replace(/<\/?[^>]+>/gmi,""):""}0<b.aT.length&&(b.aT=e.stringTrimLimit(b.aT),""!==b.aT&&(b.aT=/^(\S+(\s|)){1,10}/gmi.exec(b.aT)[0].replace(/^\s+|\s+$/g,
"")));b.aT=e.encodeUriParam(b.aT);return b};f.prototype.collectDataOnPresencePing=function(){var a=this.dataAddObligatoryParams({});a.dT=e.encodeUriParam(e.getDateTimeIso8601(!1));return a};try{(new f).init()}catch(u){if(!0===t)throw u;}});