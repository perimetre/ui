/*! For license information please see 840.da636ff9.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_perimetre_ui=self.webpackChunk_perimetre_ui||[]).push([[840],{"./node_modules/hammerjs/hammer.js":(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(window,document,exportName,undefined){"use strict";var assign,VENDOR_PREFIXES=["","webkit","Moz","MS","ms","o"],TEST_ELEMENT=document.createElement("div"),TYPE_FUNCTION="function",round=Math.round,abs=Math.abs,now=Date.now;function setTimeoutContext(fn,timeout,context){return setTimeout(bindFn(fn,context),timeout)}function invokeArrayArg(arg,fn,context){return!!Array.isArray(arg)&&(each(arg,context[fn],context),!0)}function each(obj,iterator,context){var i;if(obj)if(obj.forEach)obj.forEach(iterator,context);else if(obj.length!==undefined)for(i=0;i<obj.length;)iterator.call(context,obj[i],i,obj),i++;else for(i in obj)obj.hasOwnProperty(i)&&iterator.call(context,obj[i],i,obj)}function deprecate(method,name,message){var deprecationMessage="DEPRECATED METHOD: "+name+"\n"+message+" AT \n";return function(){var e=new Error("get-stack-trace"),stack=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",log=window.console&&(window.console.warn||window.console.log);return log&&log.call(window.console,deprecationMessage,stack),method.apply(this,arguments)}}assign="function"!=typeof Object.assign?function assign(target){if(target===undefined||null===target)throw new TypeError("Cannot convert undefined or null to object");for(var output=Object(target),index=1;index<arguments.length;index++){var source=arguments[index];if(source!==undefined&&null!==source)for(var nextKey in source)source.hasOwnProperty(nextKey)&&(output[nextKey]=source[nextKey])}return output}:Object.assign;var extend=deprecate((function extend(dest,src,merge){for(var keys=Object.keys(src),i=0;i<keys.length;)(!merge||merge&&dest[keys[i]]===undefined)&&(dest[keys[i]]=src[keys[i]]),i++;return dest}),"extend","Use `assign`."),merge=deprecate((function merge(dest,src){return extend(dest,src,!0)}),"merge","Use `assign`.");function inherit(child,base,properties){var childP,baseP=base.prototype;(childP=child.prototype=Object.create(baseP)).constructor=child,childP._super=baseP,properties&&assign(childP,properties)}function bindFn(fn,context){return function boundFn(){return fn.apply(context,arguments)}}function boolOrFn(val,args){return typeof val==TYPE_FUNCTION?val.apply(args&&args[0]||undefined,args):val}function ifUndefined(val1,val2){return val1===undefined?val2:val1}function addEventListeners(target,types,handler){each(splitStr(types),(function(type){target.addEventListener(type,handler,!1)}))}function removeEventListeners(target,types,handler){each(splitStr(types),(function(type){target.removeEventListener(type,handler,!1)}))}function hasParent(node,parent){for(;node;){if(node==parent)return!0;node=node.parentNode}return!1}function inStr(str,find){return str.indexOf(find)>-1}function splitStr(str){return str.trim().split(/\s+/g)}function inArray(src,find,findByKey){if(src.indexOf&&!findByKey)return src.indexOf(find);for(var i=0;i<src.length;){if(findByKey&&src[i][findByKey]==find||!findByKey&&src[i]===find)return i;i++}return-1}function toArray(obj){return Array.prototype.slice.call(obj,0)}function uniqueArray(src,key,sort){for(var results=[],values=[],i=0;i<src.length;){var val=key?src[i][key]:src[i];inArray(values,val)<0&&results.push(src[i]),values[i]=val,i++}return sort&&(results=key?results.sort((function sortUniqueArray(a,b){return a[key]>b[key]})):results.sort()),results}function prefixed(obj,property){for(var prefix,prop,camelProp=property[0].toUpperCase()+property.slice(1),i=0;i<VENDOR_PREFIXES.length;){if((prop=(prefix=VENDOR_PREFIXES[i])?prefix+camelProp:property)in obj)return prop;i++}return undefined}var _uniqueId=1;function getWindowForElement(element){var doc=element.ownerDocument||element;return doc.defaultView||doc.parentWindow||window}var SUPPORT_TOUCH="ontouchstart"in window,SUPPORT_POINTER_EVENTS=prefixed(window,"PointerEvent")!==undefined,SUPPORT_ONLY_TOUCH=SUPPORT_TOUCH&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),COMPUTE_INTERVAL=25,INPUT_START=1,INPUT_END=4,INPUT_CANCEL=8,DIRECTION_NONE=1,DIRECTION_LEFT=2,DIRECTION_RIGHT=4,DIRECTION_UP=8,DIRECTION_DOWN=16,DIRECTION_HORIZONTAL=DIRECTION_LEFT|DIRECTION_RIGHT,DIRECTION_VERTICAL=DIRECTION_UP|DIRECTION_DOWN,DIRECTION_ALL=DIRECTION_HORIZONTAL|DIRECTION_VERTICAL,PROPS_XY=["x","y"],PROPS_CLIENT_XY=["clientX","clientY"];function Input(manager,callback){var self=this;this.manager=manager,this.callback=callback,this.element=manager.element,this.target=manager.options.inputTarget,this.domHandler=function(ev){boolOrFn(manager.options.enable,[manager])&&self.handler(ev)},this.init()}function inputHandler(manager,eventType,input){var pointersLen=input.pointers.length,changedPointersLen=input.changedPointers.length,isFirst=eventType&INPUT_START&&pointersLen-changedPointersLen==0,isFinal=eventType&(INPUT_END|INPUT_CANCEL)&&pointersLen-changedPointersLen==0;input.isFirst=!!isFirst,input.isFinal=!!isFinal,isFirst&&(manager.session={}),input.eventType=eventType,function computeInputData(manager,input){var session=manager.session,pointers=input.pointers,pointersLength=pointers.length;session.firstInput||(session.firstInput=simpleCloneInputData(input));pointersLength>1&&!session.firstMultiple?session.firstMultiple=simpleCloneInputData(input):1===pointersLength&&(session.firstMultiple=!1);var firstInput=session.firstInput,firstMultiple=session.firstMultiple,offsetCenter=firstMultiple?firstMultiple.center:firstInput.center,center=input.center=getCenter(pointers);input.timeStamp=now(),input.deltaTime=input.timeStamp-firstInput.timeStamp,input.angle=getAngle(offsetCenter,center),input.distance=getDistance(offsetCenter,center),function computeDeltaXY(session,input){var center=input.center,offset=session.offsetDelta||{},prevDelta=session.prevDelta||{},prevInput=session.prevInput||{};input.eventType!==INPUT_START&&prevInput.eventType!==INPUT_END||(prevDelta=session.prevDelta={x:prevInput.deltaX||0,y:prevInput.deltaY||0},offset=session.offsetDelta={x:center.x,y:center.y});input.deltaX=prevDelta.x+(center.x-offset.x),input.deltaY=prevDelta.y+(center.y-offset.y)}(session,input),input.offsetDirection=getDirection(input.deltaX,input.deltaY);var overallVelocity=getVelocity(input.deltaTime,input.deltaX,input.deltaY);input.overallVelocityX=overallVelocity.x,input.overallVelocityY=overallVelocity.y,input.overallVelocity=abs(overallVelocity.x)>abs(overallVelocity.y)?overallVelocity.x:overallVelocity.y,input.scale=firstMultiple?function getScale(start,end){return getDistance(end[0],end[1],PROPS_CLIENT_XY)/getDistance(start[0],start[1],PROPS_CLIENT_XY)}(firstMultiple.pointers,pointers):1,input.rotation=firstMultiple?function getRotation(start,end){return getAngle(end[1],end[0],PROPS_CLIENT_XY)+getAngle(start[1],start[0],PROPS_CLIENT_XY)}(firstMultiple.pointers,pointers):0,input.maxPointers=session.prevInput?input.pointers.length>session.prevInput.maxPointers?input.pointers.length:session.prevInput.maxPointers:input.pointers.length,function computeIntervalInputData(session,input){var velocity,velocityX,velocityY,direction,last=session.lastInterval||input,deltaTime=input.timeStamp-last.timeStamp;if(input.eventType!=INPUT_CANCEL&&(deltaTime>COMPUTE_INTERVAL||last.velocity===undefined)){var deltaX=input.deltaX-last.deltaX,deltaY=input.deltaY-last.deltaY,v=getVelocity(deltaTime,deltaX,deltaY);velocityX=v.x,velocityY=v.y,velocity=abs(v.x)>abs(v.y)?v.x:v.y,direction=getDirection(deltaX,deltaY),session.lastInterval=input}else velocity=last.velocity,velocityX=last.velocityX,velocityY=last.velocityY,direction=last.direction;input.velocity=velocity,input.velocityX=velocityX,input.velocityY=velocityY,input.direction=direction}(session,input);var target=manager.element;hasParent(input.srcEvent.target,target)&&(target=input.srcEvent.target);input.target=target}(manager,input),manager.emit("hammer.input",input),manager.recognize(input),manager.session.prevInput=input}function simpleCloneInputData(input){for(var pointers=[],i=0;i<input.pointers.length;)pointers[i]={clientX:round(input.pointers[i].clientX),clientY:round(input.pointers[i].clientY)},i++;return{timeStamp:now(),pointers,center:getCenter(pointers),deltaX:input.deltaX,deltaY:input.deltaY}}function getCenter(pointers){var pointersLength=pointers.length;if(1===pointersLength)return{x:round(pointers[0].clientX),y:round(pointers[0].clientY)};for(var x=0,y=0,i=0;i<pointersLength;)x+=pointers[i].clientX,y+=pointers[i].clientY,i++;return{x:round(x/pointersLength),y:round(y/pointersLength)}}function getVelocity(deltaTime,x,y){return{x:x/deltaTime||0,y:y/deltaTime||0}}function getDirection(x,y){return x===y?DIRECTION_NONE:abs(x)>=abs(y)?x<0?DIRECTION_LEFT:DIRECTION_RIGHT:y<0?DIRECTION_UP:DIRECTION_DOWN}function getDistance(p1,p2,props){props||(props=PROPS_XY);var x=p2[props[0]]-p1[props[0]],y=p2[props[1]]-p1[props[1]];return Math.sqrt(x*x+y*y)}function getAngle(p1,p2,props){props||(props=PROPS_XY);var x=p2[props[0]]-p1[props[0]],y=p2[props[1]]-p1[props[1]];return 180*Math.atan2(y,x)/Math.PI}Input.prototype={handler:function(){},init:function(){this.evEl&&addEventListeners(this.element,this.evEl,this.domHandler),this.evTarget&&addEventListeners(this.target,this.evTarget,this.domHandler),this.evWin&&addEventListeners(getWindowForElement(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&removeEventListeners(this.element,this.evEl,this.domHandler),this.evTarget&&removeEventListeners(this.target,this.evTarget,this.domHandler),this.evWin&&removeEventListeners(getWindowForElement(this.element),this.evWin,this.domHandler)}};var MOUSE_INPUT_MAP={mousedown:INPUT_START,mousemove:2,mouseup:INPUT_END},MOUSE_ELEMENT_EVENTS="mousedown",MOUSE_WINDOW_EVENTS="mousemove mouseup";function MouseInput(){this.evEl=MOUSE_ELEMENT_EVENTS,this.evWin=MOUSE_WINDOW_EVENTS,this.pressed=!1,Input.apply(this,arguments)}inherit(MouseInput,Input,{handler:function MEhandler(ev){var eventType=MOUSE_INPUT_MAP[ev.type];eventType&INPUT_START&&0===ev.button&&(this.pressed=!0),2&eventType&&1!==ev.which&&(eventType=INPUT_END),this.pressed&&(eventType&INPUT_END&&(this.pressed=!1),this.callback(this.manager,eventType,{pointers:[ev],changedPointers:[ev],pointerType:"mouse",srcEvent:ev}))}});var POINTER_INPUT_MAP={pointerdown:INPUT_START,pointermove:2,pointerup:INPUT_END,pointercancel:INPUT_CANCEL,pointerout:INPUT_CANCEL},IE10_POINTER_TYPE_ENUM={2:"touch",3:"pen",4:"mouse",5:"kinect"},POINTER_ELEMENT_EVENTS="pointerdown",POINTER_WINDOW_EVENTS="pointermove pointerup pointercancel";function PointerEventInput(){this.evEl=POINTER_ELEMENT_EVENTS,this.evWin=POINTER_WINDOW_EVENTS,Input.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}window.MSPointerEvent&&!window.PointerEvent&&(POINTER_ELEMENT_EVENTS="MSPointerDown",POINTER_WINDOW_EVENTS="MSPointerMove MSPointerUp MSPointerCancel"),inherit(PointerEventInput,Input,{handler:function PEhandler(ev){var store=this.store,removePointer=!1,eventTypeNormalized=ev.type.toLowerCase().replace("ms",""),eventType=POINTER_INPUT_MAP[eventTypeNormalized],pointerType=IE10_POINTER_TYPE_ENUM[ev.pointerType]||ev.pointerType,isTouch="touch"==pointerType,storeIndex=inArray(store,ev.pointerId,"pointerId");eventType&INPUT_START&&(0===ev.button||isTouch)?storeIndex<0&&(store.push(ev),storeIndex=store.length-1):eventType&(INPUT_END|INPUT_CANCEL)&&(removePointer=!0),storeIndex<0||(store[storeIndex]=ev,this.callback(this.manager,eventType,{pointers:store,changedPointers:[ev],pointerType,srcEvent:ev}),removePointer&&store.splice(storeIndex,1))}});var SINGLE_TOUCH_INPUT_MAP={touchstart:INPUT_START,touchmove:2,touchend:INPUT_END,touchcancel:INPUT_CANCEL};function SingleTouchInput(){this.evTarget="touchstart",this.evWin="touchstart touchmove touchend touchcancel",this.started=!1,Input.apply(this,arguments)}function normalizeSingleTouches(ev,type){var all=toArray(ev.touches),changed=toArray(ev.changedTouches);return type&(INPUT_END|INPUT_CANCEL)&&(all=uniqueArray(all.concat(changed),"identifier",!0)),[all,changed]}inherit(SingleTouchInput,Input,{handler:function TEhandler(ev){var type=SINGLE_TOUCH_INPUT_MAP[ev.type];if(type===INPUT_START&&(this.started=!0),this.started){var touches=normalizeSingleTouches.call(this,ev,type);type&(INPUT_END|INPUT_CANCEL)&&touches[0].length-touches[1].length==0&&(this.started=!1),this.callback(this.manager,type,{pointers:touches[0],changedPointers:touches[1],pointerType:"touch",srcEvent:ev})}}});var TOUCH_INPUT_MAP={touchstart:INPUT_START,touchmove:2,touchend:INPUT_END,touchcancel:INPUT_CANCEL},TOUCH_TARGET_EVENTS="touchstart touchmove touchend touchcancel";function TouchInput(){this.evTarget=TOUCH_TARGET_EVENTS,this.targetIds={},Input.apply(this,arguments)}function getTouches(ev,type){var allTouches=toArray(ev.touches),targetIds=this.targetIds;if(type&(2|INPUT_START)&&1===allTouches.length)return targetIds[allTouches[0].identifier]=!0,[allTouches,allTouches];var i,targetTouches,changedTouches=toArray(ev.changedTouches),changedTargetTouches=[],target=this.target;if(targetTouches=allTouches.filter((function(touch){return hasParent(touch.target,target)})),type===INPUT_START)for(i=0;i<targetTouches.length;)targetIds[targetTouches[i].identifier]=!0,i++;for(i=0;i<changedTouches.length;)targetIds[changedTouches[i].identifier]&&changedTargetTouches.push(changedTouches[i]),type&(INPUT_END|INPUT_CANCEL)&&delete targetIds[changedTouches[i].identifier],i++;return changedTargetTouches.length?[uniqueArray(targetTouches.concat(changedTargetTouches),"identifier",!0),changedTargetTouches]:void 0}inherit(TouchInput,Input,{handler:function MTEhandler(ev){var type=TOUCH_INPUT_MAP[ev.type],touches=getTouches.call(this,ev,type);touches&&this.callback(this.manager,type,{pointers:touches[0],changedPointers:touches[1],pointerType:"touch",srcEvent:ev})}});var DEDUP_TIMEOUT=2500;function TouchMouseInput(){Input.apply(this,arguments);var handler=bindFn(this.handler,this);this.touch=new TouchInput(this.manager,handler),this.mouse=new MouseInput(this.manager,handler),this.primaryTouch=null,this.lastTouches=[]}function recordTouches(eventType,eventData){eventType&INPUT_START?(this.primaryTouch=eventData.changedPointers[0].identifier,setLastTouch.call(this,eventData)):eventType&(INPUT_END|INPUT_CANCEL)&&setLastTouch.call(this,eventData)}function setLastTouch(eventData){var touch=eventData.changedPointers[0];if(touch.identifier===this.primaryTouch){var lastTouch={x:touch.clientX,y:touch.clientY};this.lastTouches.push(lastTouch);var lts=this.lastTouches;setTimeout((function(){var i=lts.indexOf(lastTouch);i>-1&&lts.splice(i,1)}),DEDUP_TIMEOUT)}}function isSyntheticEvent(eventData){for(var x=eventData.srcEvent.clientX,y=eventData.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var t=this.lastTouches[i],dx=Math.abs(x-t.x),dy=Math.abs(y-t.y);if(dx<=25&&dy<=25)return!0}return!1}inherit(TouchMouseInput,Input,{handler:function TMEhandler(manager,inputEvent,inputData){var isTouch="touch"==inputData.pointerType,isMouse="mouse"==inputData.pointerType;if(!(isMouse&&inputData.sourceCapabilities&&inputData.sourceCapabilities.firesTouchEvents)){if(isTouch)recordTouches.call(this,inputEvent,inputData);else if(isMouse&&isSyntheticEvent.call(this,inputData))return;this.callback(manager,inputEvent,inputData)}},destroy:function destroy(){this.touch.destroy(),this.mouse.destroy()}});var PREFIXED_TOUCH_ACTION=prefixed(TEST_ELEMENT.style,"touchAction"),NATIVE_TOUCH_ACTION=PREFIXED_TOUCH_ACTION!==undefined,TOUCH_ACTION_MAP=function getTouchActionProps(){if(!NATIVE_TOUCH_ACTION)return!1;var touchMap={},cssSupports=window.CSS&&window.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(val){touchMap[val]=!cssSupports||window.CSS.supports("touch-action",val)})),touchMap}();function TouchAction(manager,value){this.manager=manager,this.set(value)}TouchAction.prototype={set:function(value){"compute"==value&&(value=this.compute()),NATIVE_TOUCH_ACTION&&this.manager.element.style&&TOUCH_ACTION_MAP[value]&&(this.manager.element.style[PREFIXED_TOUCH_ACTION]=value),this.actions=value.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var actions=[];return each(this.manager.recognizers,(function(recognizer){boolOrFn(recognizer.options.enable,[recognizer])&&(actions=actions.concat(recognizer.getTouchAction()))})),function cleanTouchActions(actions){if(inStr(actions,"none"))return"none";var hasPanX=inStr(actions,"pan-x"),hasPanY=inStr(actions,"pan-y");if(hasPanX&&hasPanY)return"none";if(hasPanX||hasPanY)return hasPanX?"pan-x":"pan-y";if(inStr(actions,"manipulation"))return"manipulation";return"auto"}(actions.join(" "))},preventDefaults:function(input){var srcEvent=input.srcEvent,direction=input.offsetDirection;if(this.manager.session.prevented)srcEvent.preventDefault();else{var actions=this.actions,hasNone=inStr(actions,"none")&&!TOUCH_ACTION_MAP.none,hasPanY=inStr(actions,"pan-y")&&!TOUCH_ACTION_MAP["pan-y"],hasPanX=inStr(actions,"pan-x")&&!TOUCH_ACTION_MAP["pan-x"];if(hasNone){var isTapPointer=1===input.pointers.length,isTapMovement=input.distance<2,isTapTouchTime=input.deltaTime<250;if(isTapPointer&&isTapMovement&&isTapTouchTime)return}if(!hasPanX||!hasPanY)return hasNone||hasPanY&&direction&DIRECTION_HORIZONTAL||hasPanX&&direction&DIRECTION_VERTICAL?this.preventSrc(srcEvent):void 0}},preventSrc:function(srcEvent){this.manager.session.prevented=!0,srcEvent.preventDefault()}};var STATE_POSSIBLE=1;function Recognizer(options){this.options=assign({},this.defaults,options||{}),this.id=function uniqueId(){return _uniqueId++}(),this.manager=null,this.options.enable=ifUndefined(this.options.enable,!0),this.state=STATE_POSSIBLE,this.simultaneous={},this.requireFail=[]}function stateStr(state){return 16&state?"cancel":8&state?"end":4&state?"move":2&state?"start":""}function directionStr(direction){return direction==DIRECTION_DOWN?"down":direction==DIRECTION_UP?"up":direction==DIRECTION_LEFT?"left":direction==DIRECTION_RIGHT?"right":""}function getRecognizerByNameIfManager(otherRecognizer,recognizer){var manager=recognizer.manager;return manager?manager.get(otherRecognizer):otherRecognizer}function AttrRecognizer(){Recognizer.apply(this,arguments)}function PanRecognizer(){AttrRecognizer.apply(this,arguments),this.pX=null,this.pY=null}function PinchRecognizer(){AttrRecognizer.apply(this,arguments)}function PressRecognizer(){Recognizer.apply(this,arguments),this._timer=null,this._input=null}function RotateRecognizer(){AttrRecognizer.apply(this,arguments)}function SwipeRecognizer(){AttrRecognizer.apply(this,arguments)}function TapRecognizer(){Recognizer.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function Hammer(element,options){return(options=options||{}).recognizers=ifUndefined(options.recognizers,Hammer.defaults.preset),new Manager(element,options)}Recognizer.prototype={defaults:{},set:function(options){return assign(this.options,options),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(otherRecognizer){if(invokeArrayArg(otherRecognizer,"recognizeWith",this))return this;var simultaneous=this.simultaneous;return simultaneous[(otherRecognizer=getRecognizerByNameIfManager(otherRecognizer,this)).id]||(simultaneous[otherRecognizer.id]=otherRecognizer,otherRecognizer.recognizeWith(this)),this},dropRecognizeWith:function(otherRecognizer){return invokeArrayArg(otherRecognizer,"dropRecognizeWith",this)||(otherRecognizer=getRecognizerByNameIfManager(otherRecognizer,this),delete this.simultaneous[otherRecognizer.id]),this},requireFailure:function(otherRecognizer){if(invokeArrayArg(otherRecognizer,"requireFailure",this))return this;var requireFail=this.requireFail;return-1===inArray(requireFail,otherRecognizer=getRecognizerByNameIfManager(otherRecognizer,this))&&(requireFail.push(otherRecognizer),otherRecognizer.requireFailure(this)),this},dropRequireFailure:function(otherRecognizer){if(invokeArrayArg(otherRecognizer,"dropRequireFailure",this))return this;otherRecognizer=getRecognizerByNameIfManager(otherRecognizer,this);var index=inArray(this.requireFail,otherRecognizer);return index>-1&&this.requireFail.splice(index,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(otherRecognizer){return!!this.simultaneous[otherRecognizer.id]},emit:function(input){var self=this,state=this.state;function emit(event){self.manager.emit(event,input)}state<8&&emit(self.options.event+stateStr(state)),emit(self.options.event),input.additionalEvent&&emit(input.additionalEvent),state>=8&&emit(self.options.event+stateStr(state))},tryEmit:function(input){if(this.canEmit())return this.emit(input);this.state=32},canEmit:function(){for(var i=0;i<this.requireFail.length;){if(!(this.requireFail[i].state&(32|STATE_POSSIBLE)))return!1;i++}return!0},recognize:function(inputData){var inputDataClone=assign({},inputData);if(!boolOrFn(this.options.enable,[this,inputDataClone]))return this.reset(),void(this.state=32);56&this.state&&(this.state=STATE_POSSIBLE),this.state=this.process(inputDataClone),30&this.state&&this.tryEmit(inputDataClone)},process:function(inputData){},getTouchAction:function(){},reset:function(){}},inherit(AttrRecognizer,Recognizer,{defaults:{pointers:1},attrTest:function(input){var optionPointers=this.options.pointers;return 0===optionPointers||input.pointers.length===optionPointers},process:function(input){var state=this.state,eventType=input.eventType,isRecognized=6&state,isValid=this.attrTest(input);return isRecognized&&(eventType&INPUT_CANCEL||!isValid)?16|state:isRecognized||isValid?eventType&INPUT_END?8|state:2&state?4|state:2:32}}),inherit(PanRecognizer,AttrRecognizer,{defaults:{event:"pan",threshold:10,pointers:1,direction:DIRECTION_ALL},getTouchAction:function(){var direction=this.options.direction,actions=[];return direction&DIRECTION_HORIZONTAL&&actions.push("pan-y"),direction&DIRECTION_VERTICAL&&actions.push("pan-x"),actions},directionTest:function(input){var options=this.options,hasMoved=!0,distance=input.distance,direction=input.direction,x=input.deltaX,y=input.deltaY;return direction&options.direction||(options.direction&DIRECTION_HORIZONTAL?(direction=0===x?DIRECTION_NONE:x<0?DIRECTION_LEFT:DIRECTION_RIGHT,hasMoved=x!=this.pX,distance=Math.abs(input.deltaX)):(direction=0===y?DIRECTION_NONE:y<0?DIRECTION_UP:DIRECTION_DOWN,hasMoved=y!=this.pY,distance=Math.abs(input.deltaY))),input.direction=direction,hasMoved&&distance>options.threshold&&direction&options.direction},attrTest:function(input){return AttrRecognizer.prototype.attrTest.call(this,input)&&(2&this.state||!(2&this.state)&&this.directionTest(input))},emit:function(input){this.pX=input.deltaX,this.pY=input.deltaY;var direction=directionStr(input.direction);direction&&(input.additionalEvent=this.options.event+direction),this._super.emit.call(this,input)}}),inherit(PinchRecognizer,AttrRecognizer,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(input){return this._super.attrTest.call(this,input)&&(Math.abs(input.scale-1)>this.options.threshold||2&this.state)},emit:function(input){if(1!==input.scale){var inOut=input.scale<1?"in":"out";input.additionalEvent=this.options.event+inOut}this._super.emit.call(this,input)}}),inherit(PressRecognizer,Recognizer,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return["auto"]},process:function(input){var options=this.options,validPointers=input.pointers.length===options.pointers,validMovement=input.distance<options.threshold,validTime=input.deltaTime>options.time;if(this._input=input,!validMovement||!validPointers||input.eventType&(INPUT_END|INPUT_CANCEL)&&!validTime)this.reset();else if(input.eventType&INPUT_START)this.reset(),this._timer=setTimeoutContext((function(){this.state=8,this.tryEmit()}),options.time,this);else if(input.eventType&INPUT_END)return 8;return 32},reset:function(){clearTimeout(this._timer)},emit:function(input){8===this.state&&(input&&input.eventType&INPUT_END?this.manager.emit(this.options.event+"up",input):(this._input.timeStamp=now(),this.manager.emit(this.options.event,this._input)))}}),inherit(RotateRecognizer,AttrRecognizer,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(input){return this._super.attrTest.call(this,input)&&(Math.abs(input.rotation)>this.options.threshold||2&this.state)}}),inherit(SwipeRecognizer,AttrRecognizer,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:DIRECTION_HORIZONTAL|DIRECTION_VERTICAL,pointers:1},getTouchAction:function(){return PanRecognizer.prototype.getTouchAction.call(this)},attrTest:function(input){var velocity,direction=this.options.direction;return direction&(DIRECTION_HORIZONTAL|DIRECTION_VERTICAL)?velocity=input.overallVelocity:direction&DIRECTION_HORIZONTAL?velocity=input.overallVelocityX:direction&DIRECTION_VERTICAL&&(velocity=input.overallVelocityY),this._super.attrTest.call(this,input)&&direction&input.offsetDirection&&input.distance>this.options.threshold&&input.maxPointers==this.options.pointers&&abs(velocity)>this.options.velocity&&input.eventType&INPUT_END},emit:function(input){var direction=directionStr(input.offsetDirection);direction&&this.manager.emit(this.options.event+direction,input),this.manager.emit(this.options.event,input)}}),inherit(TapRecognizer,Recognizer,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return["manipulation"]},process:function(input){var options=this.options,validPointers=input.pointers.length===options.pointers,validMovement=input.distance<options.threshold,validTouchTime=input.deltaTime<options.time;if(this.reset(),input.eventType&INPUT_START&&0===this.count)return this.failTimeout();if(validMovement&&validTouchTime&&validPointers){if(input.eventType!=INPUT_END)return this.failTimeout();var validInterval=!this.pTime||input.timeStamp-this.pTime<options.interval,validMultiTap=!this.pCenter||getDistance(this.pCenter,input.center)<options.posThreshold;if(this.pTime=input.timeStamp,this.pCenter=input.center,validMultiTap&&validInterval?this.count+=1:this.count=1,this._input=input,0===this.count%options.taps)return this.hasRequireFailures()?(this._timer=setTimeoutContext((function(){this.state=8,this.tryEmit()}),options.interval,this),2):8}return 32},failTimeout:function(){return this._timer=setTimeoutContext((function(){this.state=32}),this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){8==this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),Hammer.VERSION="2.0.7",Hammer.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[RotateRecognizer,{enable:!1}],[PinchRecognizer,{enable:!1},["rotate"]],[SwipeRecognizer,{direction:DIRECTION_HORIZONTAL}],[PanRecognizer,{direction:DIRECTION_HORIZONTAL},["swipe"]],[TapRecognizer],[TapRecognizer,{event:"doubletap",taps:2},["tap"]],[PressRecognizer]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function Manager(element,options){this.options=assign({},Hammer.defaults,options||{}),this.options.inputTarget=this.options.inputTarget||element,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=element,this.input=function createInputInstance(manager){return new(manager.options.inputClass||(SUPPORT_POINTER_EVENTS?PointerEventInput:SUPPORT_ONLY_TOUCH?TouchInput:SUPPORT_TOUCH?TouchMouseInput:MouseInput))(manager,inputHandler)}(this),this.touchAction=new TouchAction(this,this.options.touchAction),toggleCssProps(this,!0),each(this.options.recognizers,(function(item){var recognizer=this.add(new item[0](item[1]));item[2]&&recognizer.recognizeWith(item[2]),item[3]&&recognizer.requireFailure(item[3])}),this)}function toggleCssProps(manager,add){var prop,element=manager.element;element.style&&(each(manager.options.cssProps,(function(value,name){prop=prefixed(element.style,name),add?(manager.oldCssProps[prop]=element.style[prop],element.style[prop]=value):element.style[prop]=manager.oldCssProps[prop]||""})),add||(manager.oldCssProps={}))}Manager.prototype={set:function(options){return assign(this.options,options),options.touchAction&&this.touchAction.update(),options.inputTarget&&(this.input.destroy(),this.input.target=options.inputTarget,this.input.init()),this},stop:function(force){this.session.stopped=force?2:1},recognize:function(inputData){var session=this.session;if(!session.stopped){var recognizer;this.touchAction.preventDefaults(inputData);var recognizers=this.recognizers,curRecognizer=session.curRecognizer;(!curRecognizer||curRecognizer&&8&curRecognizer.state)&&(curRecognizer=session.curRecognizer=null);for(var i=0;i<recognizers.length;)recognizer=recognizers[i],2===session.stopped||curRecognizer&&recognizer!=curRecognizer&&!recognizer.canRecognizeWith(curRecognizer)?recognizer.reset():recognizer.recognize(inputData),!curRecognizer&&14&recognizer.state&&(curRecognizer=session.curRecognizer=recognizer),i++}},get:function(recognizer){if(recognizer instanceof Recognizer)return recognizer;for(var recognizers=this.recognizers,i=0;i<recognizers.length;i++)if(recognizers[i].options.event==recognizer)return recognizers[i];return null},add:function(recognizer){if(invokeArrayArg(recognizer,"add",this))return this;var existing=this.get(recognizer.options.event);return existing&&this.remove(existing),this.recognizers.push(recognizer),recognizer.manager=this,this.touchAction.update(),recognizer},remove:function(recognizer){if(invokeArrayArg(recognizer,"remove",this))return this;if(recognizer=this.get(recognizer)){var recognizers=this.recognizers,index=inArray(recognizers,recognizer);-1!==index&&(recognizers.splice(index,1),this.touchAction.update())}return this},on:function(events,handler){if(events!==undefined&&handler!==undefined){var handlers=this.handlers;return each(splitStr(events),(function(event){handlers[event]=handlers[event]||[],handlers[event].push(handler)})),this}},off:function(events,handler){if(events!==undefined){var handlers=this.handlers;return each(splitStr(events),(function(event){handler?handlers[event]&&handlers[event].splice(inArray(handlers[event],handler),1):delete handlers[event]})),this}},emit:function(event,data){this.options.domEvents&&function triggerDomEvent(event,data){var gestureEvent=document.createEvent("Event");gestureEvent.initEvent(event,!0,!0),gestureEvent.gesture=data,data.target.dispatchEvent(gestureEvent)}(event,data);var handlers=this.handlers[event]&&this.handlers[event].slice();if(handlers&&handlers.length){data.type=event,data.preventDefault=function(){data.srcEvent.preventDefault()};for(var i=0;i<handlers.length;)handlers[i](data),i++}},destroy:function(){this.element&&toggleCssProps(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},assign(Hammer,{INPUT_START,INPUT_MOVE:2,INPUT_END,INPUT_CANCEL,STATE_POSSIBLE,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:32,DIRECTION_NONE,DIRECTION_LEFT,DIRECTION_RIGHT,DIRECTION_UP,DIRECTION_DOWN,DIRECTION_HORIZONTAL,DIRECTION_VERTICAL,DIRECTION_ALL,Manager,Input,TouchAction,TouchInput,MouseInput,PointerEventInput,TouchMouseInput,SingleTouchInput,Recognizer,AttrRecognizer,Tap:TapRecognizer,Pan:PanRecognizer,Swipe:SwipeRecognizer,Pinch:PinchRecognizer,Rotate:RotateRecognizer,Press:PressRecognizer,on:addEventListeners,off:removeEventListeners,each,merge,extend,assign,inherit,bindFn,prefixed}),(void 0!==window?window:"undefined"!=typeof self?self:{}).Hammer=Hammer,(__WEBPACK_AMD_DEFINE_RESULT__=function(){return Hammer}.call(exports,__webpack_require__,exports,module))===undefined||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}(window,document)}}]);