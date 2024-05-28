/*! For license information please see components-DragFileUploadInput-DragFileUploadInput-stories.c1d3e3d0.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_perimetre_ui=self.webpackChunk_perimetre_ui||[]).push([[8088],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/DragFileUploadInput/DragFileUploadInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FileSize:()=>FileSize,FileType:()=>FileType,FileUpload:()=>FileUpload,InitialDescription:()=>InitialDescription,PreviewContent:()=>PreviewContent,WithError:()=>WithError,WithHelp:()=>WithHelp,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _FileUpload$parameter,_FileUpload$parameter2,_WithHelp$parameters,_WithHelp$parameters2,_WithError$parameters,_WithError$parameters2,_FileSize$parameters,_FileSize$parameters2,_FileType$parameters,_FileType$parameters2,_InitialDescription$p,_InitialDescription$p2,_PreviewContent$param,_PreviewContent$param2,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/DragFileUploadInput/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Inputs/DragFileUploadInput",component:___WEBPACK_IMPORTED_MODULE_2__.o,argTypes:{disabled:{control:{type:"boolean"}},onError:{action:"onError"},onReset:{action:"onReset"}},args:{id:"input-id"}};var Template=function Template(props){return __jsx(___WEBPACK_IMPORTED_MODULE_2__.o,props)};Template.displayName="Template";var FileUpload=Template.bind({}),WithHelp=Template.bind({});WithHelp.args={help:"You can also have a help text"};var WithError=Template.bind({});WithError.args={error:"Input is required"};var FileSize=Template.bind({});FileSize.args={sizeInBytes:1024,help:"Maximum file size of 1MB"};var FileType=Template.bind({});FileType.args={accept:"pdf",help:"Only .pdf files allowed"};var InitialDescription=Template.bind({});InitialDescription.args={initialFilesDescription:"image.png"};var PreviewContent=Template.bind({});PreviewContent.args={initialFilesDescription:"cat.png",previewSrc:"https://cataas.com/cat",previewClassName:"max-h-64",previewLoaderClassName:"h-64 w-72"},FileUpload.parameters=_objectSpread(_objectSpread({},FileUpload.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_FileUpload$parameter=FileUpload.parameters)||void 0===_FileUpload$parameter?void 0:_FileUpload$parameter.docs),{},{source:_objectSpread({originalSource:"props => <DragFileUploadInput {...props} />"},null===(_FileUpload$parameter2=FileUpload.parameters)||void 0===_FileUpload$parameter2||null===(_FileUpload$parameter2=_FileUpload$parameter2.docs)||void 0===_FileUpload$parameter2?void 0:_FileUpload$parameter2.source)})}),WithHelp.parameters=_objectSpread(_objectSpread({},WithHelp.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithHelp$parameters=WithHelp.parameters)||void 0===_WithHelp$parameters?void 0:_WithHelp$parameters.docs),{},{source:_objectSpread({originalSource:"props => <DragFileUploadInput {...props} />"},null===(_WithHelp$parameters2=WithHelp.parameters)||void 0===_WithHelp$parameters2||null===(_WithHelp$parameters2=_WithHelp$parameters2.docs)||void 0===_WithHelp$parameters2?void 0:_WithHelp$parameters2.source)})}),WithError.parameters=_objectSpread(_objectSpread({},WithError.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithError$parameters=WithError.parameters)||void 0===_WithError$parameters?void 0:_WithError$parameters.docs),{},{source:_objectSpread({originalSource:"props => <DragFileUploadInput {...props} />"},null===(_WithError$parameters2=WithError.parameters)||void 0===_WithError$parameters2||null===(_WithError$parameters2=_WithError$parameters2.docs)||void 0===_WithError$parameters2?void 0:_WithError$parameters2.source)})}),FileSize.parameters=_objectSpread(_objectSpread({},FileSize.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_FileSize$parameters=FileSize.parameters)||void 0===_FileSize$parameters?void 0:_FileSize$parameters.docs),{},{source:_objectSpread({originalSource:"props => <DragFileUploadInput {...props} />"},null===(_FileSize$parameters2=FileSize.parameters)||void 0===_FileSize$parameters2||null===(_FileSize$parameters2=_FileSize$parameters2.docs)||void 0===_FileSize$parameters2?void 0:_FileSize$parameters2.source)})}),FileType.parameters=_objectSpread(_objectSpread({},FileType.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_FileType$parameters=FileType.parameters)||void 0===_FileType$parameters?void 0:_FileType$parameters.docs),{},{source:_objectSpread({originalSource:"props => <DragFileUploadInput {...props} />"},null===(_FileType$parameters2=FileType.parameters)||void 0===_FileType$parameters2||null===(_FileType$parameters2=_FileType$parameters2.docs)||void 0===_FileType$parameters2?void 0:_FileType$parameters2.source)})}),InitialDescription.parameters=_objectSpread(_objectSpread({},InitialDescription.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_InitialDescription$p=InitialDescription.parameters)||void 0===_InitialDescription$p?void 0:_InitialDescription$p.docs),{},{source:_objectSpread({originalSource:"props => <DragFileUploadInput {...props} />"},null===(_InitialDescription$p2=InitialDescription.parameters)||void 0===_InitialDescription$p2||null===(_InitialDescription$p2=_InitialDescription$p2.docs)||void 0===_InitialDescription$p2?void 0:_InitialDescription$p2.source)})}),PreviewContent.parameters=_objectSpread(_objectSpread({},PreviewContent.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_PreviewContent$param=PreviewContent.parameters)||void 0===_PreviewContent$param?void 0:_PreviewContent$param.docs),{},{source:_objectSpread({originalSource:"props => <DragFileUploadInput {...props} />"},null===(_PreviewContent$param2=PreviewContent.parameters)||void 0===_PreviewContent$param2||null===(_PreviewContent$param2=_PreviewContent$param2.docs)||void 0===_PreviewContent$param2?void 0:_PreviewContent$param2.source)})})},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);