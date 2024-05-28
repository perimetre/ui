(self.webpackChunk_perimetre_ui=self.webpackChunk_perimetre_ui||[]).push([[7586],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/Alert/Alert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Colored:()=>Colored,Errored:()=>Errored,Success:()=>Success,WithIcon:()=>WithIcon,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Colored$parameters,_Colored$parameters2,_Errored$parameters,_Errored$parameters2,_Success$parameters,_Success$parameters2,_WithIcon$parameters,_WithIcon$parameters2,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_prebuiltTailwindTheme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/prebuiltTailwindTheme.ts"),_Icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icons/index.tsx"),classnames__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__),_storybookMappers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/storybookMappers.tsx"),_excluded=["color","content","text","weight","className"],_excluded2=["color","content","text","weight","className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Alert",argTypes:{color:{options:_prebuiltTailwindTheme__WEBPACK_IMPORTED_MODULE_2__.uY,control:{type:"select"}},text:{options:_prebuiltTailwindTheme__WEBPACK_IMPORTED_MODULE_2__.uY,control:{type:"select"}},weight:{options:_prebuiltTailwindTheme__WEBPACK_IMPORTED_MODULE_2__.Cx,control:{type:"select"}},content:{control:{type:"text"}},className:{control:{type:"text"}}},args:{color:"pui-primary",weight:"normal",content:"A simple alert!"}};var Template=function Template(_ref){var _classnames,color=_ref.color,content=_ref.content,text=_ref.text,weight=_ref.weight,className=_ref.className,props=(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref,_excluded);return __jsx("div",(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},props,{className:classnames__WEBPACK_IMPORTED_MODULE_4___default()("pui-alert",(_classnames={},(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_classnames,_storybookMappers__WEBPACK_IMPORTED_MODULE_5__.rb[color||"transparent"],"pui-primary"!==color),(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_classnames,_storybookMappers__WEBPACK_IMPORTED_MODULE_5__.FF[text||"transparent"],text&&text.length>0),(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_classnames,_storybookMappers__WEBPACK_IMPORTED_MODULE_5__.h0[weight||"normal"],weight&&weight.length>0),_classnames),className)}),content)};Template.displayName="Template";var Colored=Template.bind({}),Errored=Template.bind({});Errored.args={color:"pui-error"};var Success=Template.bind({});Success.args={color:"pui-success"};var WithIconTemplate=function WithIconTemplate(_ref2){var _classnames2,color=_ref2.color,content=_ref2.content,text=_ref2.text,weight=_ref2.weight,className=_ref2.className,props=(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref2,_excluded2);return __jsx("div",(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},props,{className:classnames__WEBPACK_IMPORTED_MODULE_4___default()("pui-alert",(_classnames2={},(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_classnames2,_storybookMappers__WEBPACK_IMPORTED_MODULE_5__.rb[color],"pui-primary"!==color),(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_classnames2,_storybookMappers__WEBPACK_IMPORTED_MODULE_5__.FF[text],text&&text.length>0),(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_classnames2,_storybookMappers__WEBPACK_IMPORTED_MODULE_5__.h0[weight],weight&&weight.length>0),_classnames2),"flex items-center space-x-4",className)}),__jsx("div",null,__jsx(_Icons__WEBPACK_IMPORTED_MODULE_3__.AttentionIcon,null)),__jsx("div",null,content))};WithIconTemplate.displayName="WithIconTemplate";var WithIcon=WithIconTemplate.bind({});WithIcon.args={color:"pui-error"},Colored.parameters=_objectSpread(_objectSpread({},Colored.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Colored$parameters=Colored.parameters)||void 0===_Colored$parameters?void 0:_Colored$parameters.docs),{},{source:_objectSpread({originalSource:"({\n  color,\n  content,\n  text,\n  weight,\n  className,\n  ...props\n}) => <div {...props} className={classnames('pui-alert', {\n  [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary',\n  [textColorClassnameMap[text || 'transparent']]: text && text.length > 0,\n  [fontWeightClassnameMap[weight || 'normal']]: weight && weight.length > 0\n}, className)}>\n    {content}\n  </div>"},null===(_Colored$parameters2=Colored.parameters)||void 0===_Colored$parameters2||null===(_Colored$parameters2=_Colored$parameters2.docs)||void 0===_Colored$parameters2?void 0:_Colored$parameters2.source)})}),Errored.parameters=_objectSpread(_objectSpread({},Errored.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Errored$parameters=Errored.parameters)||void 0===_Errored$parameters?void 0:_Errored$parameters.docs),{},{source:_objectSpread({originalSource:"({\n  color,\n  content,\n  text,\n  weight,\n  className,\n  ...props\n}) => <div {...props} className={classnames('pui-alert', {\n  [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary',\n  [textColorClassnameMap[text || 'transparent']]: text && text.length > 0,\n  [fontWeightClassnameMap[weight || 'normal']]: weight && weight.length > 0\n}, className)}>\n    {content}\n  </div>"},null===(_Errored$parameters2=Errored.parameters)||void 0===_Errored$parameters2||null===(_Errored$parameters2=_Errored$parameters2.docs)||void 0===_Errored$parameters2?void 0:_Errored$parameters2.source)})}),Success.parameters=_objectSpread(_objectSpread({},Success.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Success$parameters=Success.parameters)||void 0===_Success$parameters?void 0:_Success$parameters.docs),{},{source:_objectSpread({originalSource:"({\n  color,\n  content,\n  text,\n  weight,\n  className,\n  ...props\n}) => <div {...props} className={classnames('pui-alert', {\n  [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary',\n  [textColorClassnameMap[text || 'transparent']]: text && text.length > 0,\n  [fontWeightClassnameMap[weight || 'normal']]: weight && weight.length > 0\n}, className)}>\n    {content}\n  </div>"},null===(_Success$parameters2=Success.parameters)||void 0===_Success$parameters2||null===(_Success$parameters2=_Success$parameters2.docs)||void 0===_Success$parameters2?void 0:_Success$parameters2.source)})}),WithIcon.parameters=_objectSpread(_objectSpread({},WithIcon.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithIcon$parameters=WithIcon.parameters)||void 0===_WithIcon$parameters?void 0:_WithIcon$parameters.docs),{},{source:_objectSpread({originalSource:"({\n  color,\n  content,\n  text,\n  weight,\n  className,\n  ...props\n}) => <div {...props} className={classnames('pui-alert', {\n  [puiColorClassnameMap[color]]: color !== 'pui-primary',\n  [textColorClassnameMap[text]]: text && text.length > 0,\n  [fontWeightClassnameMap[weight]]: weight && weight.length > 0\n}, 'flex items-center space-x-4', className)}>\n    <div>\n      <AttentionIcon />\n    </div>\n    <div>{content}</div>\n  </div>"},null===(_WithIcon$parameters2=WithIcon.parameters)||void 0===_WithIcon$parameters2||null===(_WithIcon$parameters2=_WithIcon$parameters2.docs)||void 0===_WithIcon$parameters2?void 0:_WithIcon$parameters2.source)})})},"./src/plugins/gapPlugin.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),plugin=__webpack_require__("./node_modules/tailwindcss/plugin.js"),flatMap=__webpack_require__("./node_modules/lodash/flatMap.js"),nameClass=__webpack_require__("./node_modules/tailwindcss/lib/util/nameClass.js").default;module.exports=plugin((function(_ref){var addUtilities=_ref.addUtilities,theme=_ref.theme;addUtilities(flatMap([function(size,modifier){var _ref2;return _defineProperty(_ref2={},nameClass("pui-gap",modifier),{"> *":{"&:not(:first-child)":{"margin-top":"".concat(size),"margin-left":"".concat(size)}}}),_defineProperty(_ref2,nameClass("pui-gap-p",modifier),{"> *":{"&:not(:first-child)":{"padding-top":"".concat(size),"padding-left":"".concat(size)}}}),_ref2},function(size,modifier){var _ref3;return _defineProperty(_ref3={},nameClass("pui-gap-y",modifier),{"> *":{"&:not(:first-child)":{"margin-top":"".concat(size)}}}),_defineProperty(_ref3,nameClass("pui-gap-x",modifier),{"> *":{"&:not(:first-child)":{"margin-left":"".concat(size)}}}),_defineProperty(_ref3,nameClass("pui-gap-y-p",modifier),{"> *":{"&:not(:first-child)":{"padding-top":"".concat(size)}}}),_defineProperty(_ref3,nameClass("pui-gap-x-p",modifier),{"> *":{"&:not(:first-child)":{"padding-left":"".concat(size)}}}),_ref3}],(function(generator){return flatMap(theme("margin"),generator)})))}))},"./src/plugins/varPlaceholderColorPlugin.js":(module,__unused_webpack_exports,__webpack_require__)=>{var plugin=__webpack_require__("./node_modules/tailwindcss/plugin.js"),makeColorUtilities=__webpack_require__("./src/utils/tailwindPlugin.js").makeColorUtilities;module.exports=plugin((function(pluginOpts){(0,pluginOpts.addUtilities)(makeColorUtilities(pluginOpts,"pui-color","--pui-placeholder-color"))}))},"./src/prebuiltTailwindTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A0:()=>clampOptions,A4:()=>marginPaddingOptions,Cx:()=>weightOptions,KO:()=>minWidthOptions,YG:()=>gridRowOptions,Yq:()=>widthHeightOptions,ZW:()=>gridColumnOptions,pt:()=>borderStyleOptions,uY:()=>colorOptions});var _fullConfig$theme,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwindcss/resolveConfig.js"),tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_0__),_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./tailwind.config.js"),_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__),tailwindcss_lib_util_flattenColorPalette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tailwindcss/lib/util/flattenColorPalette.js"),fullConfig=tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_0___default()(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default()),prebuildTailwindTheme=Object.assign(fullConfig,{flattenedColors:(0,tailwindcss_lib_util_flattenColorPalette__WEBPACK_IMPORTED_MODULE_2__.Z)(null===(_fullConfig$theme=fullConfig.theme)||void 0===_fullConfig$theme?void 0:_fullConfig$theme.colors)},{}),colorOptions=Object.entries(prebuildTailwindTheme.flattenedColors).map((function(x){return x[0]})),weightOptions=Object.entries(prebuildTailwindTheme.theme.fontWeight).map((function(x){return x[0]})),borderStyleOptions=["dashed","dotted","double","none"],widthHeightOptions=(Object.entries(prebuildTailwindTheme.theme.fontSize).map((function(x){return x[0]})),Object.entries(prebuildTailwindTheme.theme.width).map((function(x){return x[0]}))),clampOptions=["none"].concat((0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(Object.entries(prebuildTailwindTheme.theme.lineClamp).map((function(x){return x[0]})))),minWidthOptions=Object.entries(prebuildTailwindTheme.theme.minWidth).map((function(x){return x[0]})),marginPaddingOptions=Object.entries(prebuildTailwindTheme.theme.margin).map((function(x){return x[0]})),gridColumnOptions=[].concat((0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(Object.entries(prebuildTailwindTheme.theme.gridTemplateColumns).map((function(x){return x[0]}))),[void 0]),gridRowOptions=[].concat((0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(Object.entries(prebuildTailwindTheme.theme.gridTemplateColumns).map((function(x){return x[0]}))),[void 0])},"./src/presets/default-preset.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}module.exports={theme:{extend:{colors:{"pui-primary":"var(--pui-primary, #00BF6F)","pui-secondary":"var(--pui-secondary, #2A3C47)","pui-paragraph":{0:"var(--pui-paragraph-0, #fff)",300:"var(--pui-paragraph-300, #ABABAB)",500:"var(--pui-paragraph-500, #666666)",900:"var(--pui-paragraph-900, #333333)"},"pui-btn-text":{0:"var(--pui-btn-text-0, #fff)"},"pui-initial":"initial","pui-placeholder-color":"var(--pui-placeholder-color, var(--pui-primary, #00BF6F))","pui-error":"var(--pui-error-color, #EF4444)","pui-success":"var(--pui-success-color, #34D399)"},keyframes:{"fade-into":{from:{opacity:"0"},to:{transform:"translateY(0)",opacity:"1"}},"fade-in":{from:{opacity:"0"},to:{opacity:"1"}},"skeleton-background":{from:{backgroundPosition:"100vw"},to:{backgroundPosition:"0vw"}}},animation:{"fade-into":"fade-into 0.5s ease-out 0s both","fade-in":"fade-in 0.5s ease-out both","skeleton-background":"skeleton-background 2s ease infinite, pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"},minWidth:function minWidth(theme){return _objectSpread(_objectSpread({auto:"auto"},theme("spacing")),{},{"1/2vw":"50vw","1/3vw":"33.333333vw","2/3vw":"66.666667vw","1/4vw":"25vw","2/4vw":"50vw","3/4vw":"75vw","1/5vw":"20vw","2/5vw":"40vw","3/5vw":"60vw","4/5vw":"80vw","1/6vw":"16.666667vw","2/6vw":"33.333333vw","3/6vw":"50vw","4/6vw":"66.666667vw","5/6vw":"83.333333vw","1/12vw":"8.333333vw","2/12vw":"16.666667vw","3/12vw":"25vw","4/12vw":"33.333333vw","5/12vw":"41.666667vw","6/12vw":"50vw","7/12vw":"58.333333vw","8/12vw":"66.666667vw","9/12vw":"75vw","10/12vw":"83.333333vw","11/12vw":"91.666667vw",full:"100%","screen-90":"90vw",screen:"100vw",min:"min-content",max:"max-content",initial:"initial"})},minHeight:function minHeight(theme){return _objectSpread({auto:"auto"},theme("spacing"))},height:{"5/12vh":"41.666667vh"},typography:function typography(theme){return{DEFAULT:{css:{color:theme("colors.pui-paragraph.500"),a:{color:theme("colors.pui-primary"),"&:hover":{color:theme("colors.pui-secondary")},"&:visited":{color:theme("colors.pui-secondary")}},strong:{color:theme("colors.pui-paragraph.900")},blockquote:{color:theme("colors.pui-paragraph.300")},h1:{color:theme("colors.pui-paragraph.900")},h2:{color:theme("colors.pui-paragraph.900")},h3:{color:theme("colors.pui-paragraph.900")},h4:{color:theme("colors.pui-paragraph.900")},"figure figcaption":{color:theme("colors.pui-paragraph.300")},code:{color:theme("colors.pui-paragraph.900")},"a code":{color:theme("colors.pui-paragraph.900")},pre:{color:theme("colors.pui-paragraph.300")},thead:{color:theme("colors.pui-paragraph.900")},"ol > li::before":{color:theme("colors.pui-paragraph.900"),fontWeight:"600"},"ul > li::before":{backgroundColor:theme("colors.pui-paragraph.900")}}}}}}},plugins:[__webpack_require__("./node_modules/@tailwindcss/typography/src/index.js"),__webpack_require__("./src/plugins/varPlaceholderColorPlugin.js"),__webpack_require__("./src/plugins/gapPlugin.js")]}},"./src/utils/tailwindPlugin.js":(module,__unused_webpack_exports,__webpack_require__)=>{var flattenColorPalette=__webpack_require__("./node_modules/tailwindcss/lib/util/flattenColorPalette.js").Z,withAlphaVariable=__webpack_require__("./node_modules/tailwindcss/lib/util/withAlphaVariable.js").default,toColorValue=__webpack_require__("./node_modules/tailwindcss/lib/util/toColorValue.js").default,nameClass=__webpack_require__("./node_modules/tailwindcss/lib/util/nameClass.js").default,fromPairs=__webpack_require__("./node_modules/lodash/fromPairs.js"),map=__webpack_require__("./node_modules/lodash/map.js");module.exports={makeColorUtilities:function makeColorUtilities(_ref,classPrefix,cssProperty){var theme=_ref.theme,corePlugins=_ref.corePlugins,colors=flattenColorPalette(theme("colors")),getProperties=function getProperties(value){return corePlugins("opacity")?withAlphaVariable({color:value,property:cssProperty,variable:cssProperty+"-opacity"}):{cssProperty:toColorValue(value)}};return fromPairs(map(colors,(function(value,modifier){return[nameClass(classPrefix,modifier),getProperties(value)]})))}}},"./tailwind.config.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports={content:["./src/**/*.{js,ts,jsx,tsx,css}","./.storybook/**/*.{js,ts,jsx,tsx,css}"],presets:[__webpack_require__("./src/presets/default-preset.js")],safelist:["cursor-col-resize"]}}}]);