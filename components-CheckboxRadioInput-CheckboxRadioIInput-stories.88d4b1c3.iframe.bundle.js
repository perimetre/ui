(self.webpackChunk_perimetre_ui=self.webpackChunk_perimetre_ui||[]).push([[5842],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/CheckboxRadioInput/CheckboxRadioIInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Indeterminate:()=>Indeterminate,JSXLabel:()=>JSXLabel,NoLabel:()=>NoLabel,RadioNoLabel:()=>RadioNoLabel,RadioWithLabel:()=>RadioWithLabel,WithError:()=>WithError,WithHelp:()=>WithHelp,WithLabel:()=>WithLabel,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _WithLabel$parameters,_WithLabel$parameters2,_Indeterminate$parame,_Indeterminate$parame2,_NoLabel$parameters,_NoLabel$parameters2,_JSXLabel$parameters,_JSXLabel$parameters2,_WithHelp$parameters,_WithHelp$parameters2,_WithError$parameters,_WithError$parameters2,_RadioWithLabel$param,_RadioWithLabel$param2,_RadioNoLabel$paramet,_RadioNoLabel$paramet2,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_prebuiltTailwindTheme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/prebuiltTailwindTheme.ts"),classnames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/CheckboxRadioInput/index.tsx"),_storybookMappers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/storybookMappers.tsx"),_excluded=["color","className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var labels={string:"Label text content",jsx:__jsx("p",null,"Agree with"," ",__jsx("a",{href:"#",target:"_blank",rel:"noreferrer noopener",className:"pui-link"},"terms"))};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Inputs/Checkbox Radio",component:___WEBPACK_IMPORTED_MODULE_4__.W,argTypes:{color:{options:_prebuiltTailwindTheme__WEBPACK_IMPORTED_MODULE_2__.uY,control:{type:"select"}},label:{options:Object.keys(labels),mapping:labels,control:{type:"select",labels:{string:"Text label",jsx:"JSX component"}}},defaultChecked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},className:{control:{type:"text"}},onChange:{action:"onChange"},onBlur:{action:"onBlur"},onFocus:{action:"onFocus"}},args:{type:"checkbox",color:"pui-primary",label:labels.string}};var Template=function Template(_ref){var color=_ref.color,className=_ref.className,props=(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref,_excluded);return __jsx(___WEBPACK_IMPORTED_MODULE_4__.W,(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},props,{className:classnames__WEBPACK_IMPORTED_MODULE_3___default()((0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},_storybookMappers__WEBPACK_IMPORTED_MODULE_5__.rb[color||"transparent"],"pui-primary"!==color),className)}))};Template.displayName="Template";var WithLabel=Template.bind({}),Indeterminate=Template.bind({});Indeterminate.args={indeterminate:!0};var NoLabel=Template.bind({});NoLabel.args={label:void 0};var JSXLabel=Template.bind({});JSXLabel.args={label:labels.jsx};var WithHelp=Template.bind({});WithHelp.args={help:"You can also have a help text"};var WithError=Template.bind({});WithError.args={error:"Input is required"};var RadioWithLabel=Template.bind({});RadioWithLabel.args={type:"radio"};var RadioNoLabel=Template.bind({});RadioNoLabel.args={type:"radio",label:void 0},WithLabel.parameters=_objectSpread(_objectSpread({},WithLabel.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithLabel$parameters=WithLabel.parameters)||void 0===_WithLabel$parameters?void 0:_WithLabel$parameters.docs),{},{source:_objectSpread({originalSource:"({\n  color,\n  className,\n  ...props\n}) => <CheckboxRadioInput {...props} className={classnames({\n  [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary'\n}, className)} />"},null===(_WithLabel$parameters2=WithLabel.parameters)||void 0===_WithLabel$parameters2||null===(_WithLabel$parameters2=_WithLabel$parameters2.docs)||void 0===_WithLabel$parameters2?void 0:_WithLabel$parameters2.source)})}),Indeterminate.parameters=_objectSpread(_objectSpread({},Indeterminate.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Indeterminate$parame=Indeterminate.parameters)||void 0===_Indeterminate$parame?void 0:_Indeterminate$parame.docs),{},{source:_objectSpread({originalSource:"({\n  color,\n  className,\n  ...props\n}) => <CheckboxRadioInput {...props} className={classnames({\n  [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary'\n}, className)} />"},null===(_Indeterminate$parame2=Indeterminate.parameters)||void 0===_Indeterminate$parame2||null===(_Indeterminate$parame2=_Indeterminate$parame2.docs)||void 0===_Indeterminate$parame2?void 0:_Indeterminate$parame2.source)})}),NoLabel.parameters=_objectSpread(_objectSpread({},NoLabel.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_NoLabel$parameters=NoLabel.parameters)||void 0===_NoLabel$parameters?void 0:_NoLabel$parameters.docs),{},{source:_objectSpread({originalSource:"({\n  color,\n  className,\n  ...props\n}) => <CheckboxRadioInput {...props} className={classnames({\n  [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary'\n}, className)} />"},null===(_NoLabel$parameters2=NoLabel.parameters)||void 0===_NoLabel$parameters2||null===(_NoLabel$parameters2=_NoLabel$parameters2.docs)||void 0===_NoLabel$parameters2?void 0:_NoLabel$parameters2.source)})}),JSXLabel.parameters=_objectSpread(_objectSpread({},JSXLabel.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_JSXLabel$parameters=JSXLabel.parameters)||void 0===_JSXLabel$parameters?void 0:_JSXLabel$parameters.docs),{},{source:_objectSpread({originalSource:"({\n  color,\n  className,\n  ...props\n}) => <CheckboxRadioInput {...props} className={classnames({\n  [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary'\n}, className)} />"},null===(_JSXLabel$parameters2=JSXLabel.parameters)||void 0===_JSXLabel$parameters2||null===(_JSXLabel$parameters2=_JSXLabel$parameters2.docs)||void 0===_JSXLabel$parameters2?void 0:_JSXLabel$parameters2.source)})}),WithHelp.parameters=_objectSpread(_objectSpread({},WithHelp.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithHelp$parameters=WithHelp.parameters)||void 0===_WithHelp$parameters?void 0:_WithHelp$parameters.docs),{},{source:_objectSpread({originalSource:"({\n  color,\n  className,\n  ...props\n}) => <CheckboxRadioInput {...props} className={classnames({\n  [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary'\n}, className)} />"},null===(_WithHelp$parameters2=WithHelp.parameters)||void 0===_WithHelp$parameters2||null===(_WithHelp$parameters2=_WithHelp$parameters2.docs)||void 0===_WithHelp$parameters2?void 0:_WithHelp$parameters2.source)})}),WithError.parameters=_objectSpread(_objectSpread({},WithError.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithError$parameters=WithError.parameters)||void 0===_WithError$parameters?void 0:_WithError$parameters.docs),{},{source:_objectSpread({originalSource:"({\n  color,\n  className,\n  ...props\n}) => <CheckboxRadioInput {...props} className={classnames({\n  [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary'\n}, className)} />"},null===(_WithError$parameters2=WithError.parameters)||void 0===_WithError$parameters2||null===(_WithError$parameters2=_WithError$parameters2.docs)||void 0===_WithError$parameters2?void 0:_WithError$parameters2.source)})}),RadioWithLabel.parameters=_objectSpread(_objectSpread({},RadioWithLabel.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_RadioWithLabel$param=RadioWithLabel.parameters)||void 0===_RadioWithLabel$param?void 0:_RadioWithLabel$param.docs),{},{source:_objectSpread({originalSource:"({\n  color,\n  className,\n  ...props\n}) => <CheckboxRadioInput {...props} className={classnames({\n  [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary'\n}, className)} />"},null===(_RadioWithLabel$param2=RadioWithLabel.parameters)||void 0===_RadioWithLabel$param2||null===(_RadioWithLabel$param2=_RadioWithLabel$param2.docs)||void 0===_RadioWithLabel$param2?void 0:_RadioWithLabel$param2.source)})}),RadioNoLabel.parameters=_objectSpread(_objectSpread({},RadioNoLabel.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_RadioNoLabel$paramet=RadioNoLabel.parameters)||void 0===_RadioNoLabel$paramet?void 0:_RadioNoLabel$paramet.docs),{},{source:_objectSpread({originalSource:"({\n  color,\n  className,\n  ...props\n}) => <CheckboxRadioInput {...props} className={classnames({\n  [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary'\n}, className)} />"},null===(_RadioNoLabel$paramet2=RadioNoLabel.parameters)||void 0===_RadioNoLabel$paramet2||null===(_RadioNoLabel$paramet2=_RadioNoLabel$paramet2.docs)||void 0===_RadioNoLabel$paramet2?void 0:_RadioNoLabel$paramet2.source)})})},"./src/components/CheckboxRadioInput/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>CheckboxRadioInput});var _home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_HTMLParsedContent__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/HTMLParsedContent/index.tsx"),_excluded=["label","help","error","size","className","indeterminate","type"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,sizeClassnameMap={small:"pui-check-radio-small",medium:"pui-check-radio-medium",large:"pui-check-radio-large"},CheckboxRadioInput=function CheckboxRadioInput(_ref){var label=_ref.label,help=_ref.help,error=_ref.error,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,className=_ref.className,indeterminate=_ref.indeterminate,type=_ref.type,props=(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded),inputRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){void 0!==indeterminate&&null!=inputRef&&inputRef.current&&(inputRef.current.indeterminate=indeterminate)}),[indeterminate]);var input=__jsx("input",(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({ref:inputRef},props,{type,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({"pui-checkbox":!label&&"checkbox"===type,"pui-radio":!label&&"checkbox"!==type},sizeClassnameMap[size],className)})),bottom=__jsx("div",null,help&&!error&&__jsx("p",{className:"pui-help-text-input"},help),error&&__jsx("p",{className:"pui-animate-fadeDown pui-help-text-input text-pui-error"},error));return __jsx("div",null,"string"==typeof label?__jsx("label",{className:"".concat("checkbox"===type?"pui-checkbox-label-clickable":"pui-radio-label-clickable")},input,__jsx("span",null,__jsx(_HTMLParsedContent__WEBPACK_IMPORTED_MODULE_2__.s,{content:label,className:"max-w-none"}))):label?__jsx("div",{className:"".concat("checkbox"===type?"pui-checkbox-label":"pui-radio-label")},input,__jsx("span",null,label)):__jsx("span",null,input),bottom)};CheckboxRadioInput.__docgenInfo={description:"A checkbox or radio input\n@param props The input props\n@param props.type The input type\n@param props.indeterminate Whether or not the checkbox is currently indeterminate\n@param props.label If provided, displays a label above the input\n@param props.help If provided, displays a help text under the input\n@param props.error The error text to replace the help text with\n@param props.size The size\n@param props.className The input className",methods:[],displayName:"CheckboxRadioInput",props:{size:{defaultValue:{value:"'medium'",computed:!1},required:!1}}};try{CheckboxRadioInput.displayName="CheckboxRadioInput",CheckboxRadioInput.__docgenInfo={description:"A checkbox or radio input",displayName:"CheckboxRadioInput",props:{indeterminate:{defaultValue:null,description:"Whether or not the checkbox is currently indeterminate",name:"indeterminate",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"If provided, displays a label above the input. If value provided is of type string, the content will be parsed as rich text/html content",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"If provided, displays a help text under the input",name:"help",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"The error text to replace the help text with",name:"error",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxRadioInput/index.tsx#CheckboxRadioInput"]={docgenInfo:CheckboxRadioInput.__docgenInfo,name:"CheckboxRadioInput",path:"src/components/CheckboxRadioInput/index.tsx#CheckboxRadioInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/HTMLParsedContent/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>HTMLParsedContent});var _home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),html_react_parser__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/html-react-parser/esm/index.mjs"),isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/isomorphic-dompurify/browser.js"),isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_3__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_excluded=["content","parserOptions","sanitizerOptions","className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,HTMLParsedContent=function HTMLParsedContent(_ref){var content=_ref.content,parserOptions=_ref.parserOptions,sanitizerOptions=_ref.sanitizerOptions,className=_ref.className,props=(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded);return content?__jsx("div",(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},props,{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("pui-prose",className)}),(0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__.ZP)(sanitizerOptions?isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_3___default().sanitize(content,sanitizerOptions):isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_3___default().sanitize(content,{ADD_ATTR:["target"]}),parserOptions)):null};HTMLParsedContent.__docgenInfo={description:"A component that sanitizes then parses and styles a plain rich text/html content\n@param props The component props\n@param props.content The content that should be parsed\n@param props.parserOptions The options that are passed down to the parser\n@param props.sanitizerOptions The options that are passed down to the sanitizer\n@param props.className The component className values",methods:[],displayName:"HTMLParsedContent"};try{HTMLParsedContent.displayName="HTMLParsedContent",HTMLParsedContent.__docgenInfo={description:"A component that sanitizes then parses and styles a plain rich text/html content",displayName:"HTMLParsedContent",props:{parserOptions:{defaultValue:null,description:"The options that are passed down to the parser",name:"parserOptions",required:!1,type:{name:"HTMLReactParserOptions"}},sanitizerOptions:{defaultValue:null,description:"The options that are passed down to the sanitizer",name:"sanitizerOptions",required:!1,type:{name:"Config"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HTMLParsedContent/index.tsx#HTMLParsedContent"]={docgenInfo:HTMLParsedContent.__docgenInfo,name:"HTMLParsedContent",path:"src/components/HTMLParsedContent/index.tsx#HTMLParsedContent"})}catch(__react_docgen_typescript_loader_error){}},"./src/plugins/gapPlugin.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),plugin=__webpack_require__("./node_modules/tailwindcss/plugin.js"),flatMap=__webpack_require__("./node_modules/lodash/flatMap.js"),nameClass=__webpack_require__("./node_modules/tailwindcss/lib/util/nameClass.js").default;module.exports=plugin((function(_ref){var addUtilities=_ref.addUtilities,theme=_ref.theme;addUtilities(flatMap([function(size,modifier){var _ref2;return _defineProperty(_ref2={},nameClass("pui-gap",modifier),{"> *":{"&:not(:first-child)":{"margin-top":"".concat(size),"margin-left":"".concat(size)}}}),_defineProperty(_ref2,nameClass("pui-gap-p",modifier),{"> *":{"&:not(:first-child)":{"padding-top":"".concat(size),"padding-left":"".concat(size)}}}),_ref2},function(size,modifier){var _ref3;return _defineProperty(_ref3={},nameClass("pui-gap-y",modifier),{"> *":{"&:not(:first-child)":{"margin-top":"".concat(size)}}}),_defineProperty(_ref3,nameClass("pui-gap-x",modifier),{"> *":{"&:not(:first-child)":{"margin-left":"".concat(size)}}}),_defineProperty(_ref3,nameClass("pui-gap-y-p",modifier),{"> *":{"&:not(:first-child)":{"padding-top":"".concat(size)}}}),_defineProperty(_ref3,nameClass("pui-gap-x-p",modifier),{"> *":{"&:not(:first-child)":{"padding-left":"".concat(size)}}}),_ref3}],(function(generator){return flatMap(theme("margin"),generator)})))}))},"./src/plugins/varPlaceholderColorPlugin.js":(module,__unused_webpack_exports,__webpack_require__)=>{var plugin=__webpack_require__("./node_modules/tailwindcss/plugin.js"),makeColorUtilities=__webpack_require__("./src/utils/tailwindPlugin.js").makeColorUtilities;module.exports=plugin((function(pluginOpts){(0,pluginOpts.addUtilities)(makeColorUtilities(pluginOpts,"pui-color","--pui-placeholder-color"))}))},"./src/prebuiltTailwindTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A0:()=>clampOptions,A4:()=>marginPaddingOptions,Cx:()=>weightOptions,KO:()=>minWidthOptions,YG:()=>gridRowOptions,Yq:()=>widthHeightOptions,ZW:()=>gridColumnOptions,pt:()=>borderStyleOptions,uY:()=>colorOptions});var _fullConfig$theme,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwindcss/resolveConfig.js"),tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_0__),_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./tailwind.config.js"),_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__),tailwindcss_lib_util_flattenColorPalette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tailwindcss/lib/util/flattenColorPalette.js"),fullConfig=tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_0___default()(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default()),prebuildTailwindTheme=Object.assign(fullConfig,{flattenedColors:(0,tailwindcss_lib_util_flattenColorPalette__WEBPACK_IMPORTED_MODULE_2__.Z)(null===(_fullConfig$theme=fullConfig.theme)||void 0===_fullConfig$theme?void 0:_fullConfig$theme.colors)},{}),colorOptions=Object.entries(prebuildTailwindTheme.flattenedColors).map((function(x){return x[0]})),weightOptions=Object.entries(prebuildTailwindTheme.theme.fontWeight).map((function(x){return x[0]})),borderStyleOptions=["dashed","dotted","double","none"],widthHeightOptions=(Object.entries(prebuildTailwindTheme.theme.fontSize).map((function(x){return x[0]})),Object.entries(prebuildTailwindTheme.theme.width).map((function(x){return x[0]}))),clampOptions=["none"].concat((0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(Object.entries(prebuildTailwindTheme.theme.lineClamp).map((function(x){return x[0]})))),minWidthOptions=Object.entries(prebuildTailwindTheme.theme.minWidth).map((function(x){return x[0]})),marginPaddingOptions=Object.entries(prebuildTailwindTheme.theme.margin).map((function(x){return x[0]})),gridColumnOptions=[].concat((0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(Object.entries(prebuildTailwindTheme.theme.gridTemplateColumns).map((function(x){return x[0]}))),[void 0]),gridRowOptions=[].concat((0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(Object.entries(prebuildTailwindTheme.theme.gridTemplateColumns).map((function(x){return x[0]}))),[void 0])},"./src/presets/default-preset.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}module.exports={theme:{extend:{colors:{"pui-primary":"var(--pui-primary, #00BF6F)","pui-secondary":"var(--pui-secondary, #2A3C47)","pui-paragraph":{0:"var(--pui-paragraph-0, #fff)",300:"var(--pui-paragraph-300, #ABABAB)",500:"var(--pui-paragraph-500, #666666)",900:"var(--pui-paragraph-900, #333333)"},"pui-btn-text":{0:"var(--pui-btn-text-0, #fff)"},"pui-initial":"initial","pui-placeholder-color":"var(--pui-placeholder-color, var(--pui-primary, #00BF6F))","pui-error":"var(--pui-error-color, #EF4444)","pui-success":"var(--pui-success-color, #34D399)"},keyframes:{"fade-into":{from:{opacity:"0"},to:{transform:"translateY(0)",opacity:"1"}},"fade-in":{from:{opacity:"0"},to:{opacity:"1"}},"skeleton-background":{from:{backgroundPosition:"100vw"},to:{backgroundPosition:"0vw"}}},animation:{"fade-into":"fade-into 0.5s ease-out 0s both","fade-in":"fade-in 0.5s ease-out both","skeleton-background":"skeleton-background 2s ease infinite, pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"},minWidth:function minWidth(theme){return _objectSpread(_objectSpread({auto:"auto"},theme("spacing")),{},{"1/2vw":"50vw","1/3vw":"33.333333vw","2/3vw":"66.666667vw","1/4vw":"25vw","2/4vw":"50vw","3/4vw":"75vw","1/5vw":"20vw","2/5vw":"40vw","3/5vw":"60vw","4/5vw":"80vw","1/6vw":"16.666667vw","2/6vw":"33.333333vw","3/6vw":"50vw","4/6vw":"66.666667vw","5/6vw":"83.333333vw","1/12vw":"8.333333vw","2/12vw":"16.666667vw","3/12vw":"25vw","4/12vw":"33.333333vw","5/12vw":"41.666667vw","6/12vw":"50vw","7/12vw":"58.333333vw","8/12vw":"66.666667vw","9/12vw":"75vw","10/12vw":"83.333333vw","11/12vw":"91.666667vw",full:"100%","screen-90":"90vw",screen:"100vw",min:"min-content",max:"max-content",initial:"initial"})},minHeight:function minHeight(theme){return _objectSpread({auto:"auto"},theme("spacing"))},height:{"5/12vh":"41.666667vh"},typography:function typography(theme){return{DEFAULT:{css:{color:theme("colors.pui-paragraph.500"),a:{color:theme("colors.pui-primary"),"&:hover":{color:theme("colors.pui-secondary")},"&:visited":{color:theme("colors.pui-secondary")}},strong:{color:theme("colors.pui-paragraph.900")},blockquote:{color:theme("colors.pui-paragraph.300")},h1:{color:theme("colors.pui-paragraph.900")},h2:{color:theme("colors.pui-paragraph.900")},h3:{color:theme("colors.pui-paragraph.900")},h4:{color:theme("colors.pui-paragraph.900")},"figure figcaption":{color:theme("colors.pui-paragraph.300")},code:{color:theme("colors.pui-paragraph.900")},"a code":{color:theme("colors.pui-paragraph.900")},pre:{color:theme("colors.pui-paragraph.300")},thead:{color:theme("colors.pui-paragraph.900")},"ol > li::before":{color:theme("colors.pui-paragraph.900"),fontWeight:"600"},"ul > li::before":{backgroundColor:theme("colors.pui-paragraph.900")}}}}}}},plugins:[__webpack_require__("./node_modules/@tailwindcss/typography/src/index.js"),__webpack_require__("./src/plugins/varPlaceholderColorPlugin.js"),__webpack_require__("./src/plugins/gapPlugin.js")]}},"./src/utils/tailwindPlugin.js":(module,__unused_webpack_exports,__webpack_require__)=>{var flattenColorPalette=__webpack_require__("./node_modules/tailwindcss/lib/util/flattenColorPalette.js").Z,withAlphaVariable=__webpack_require__("./node_modules/tailwindcss/lib/util/withAlphaVariable.js").default,toColorValue=__webpack_require__("./node_modules/tailwindcss/lib/util/toColorValue.js").default,nameClass=__webpack_require__("./node_modules/tailwindcss/lib/util/nameClass.js").default,fromPairs=__webpack_require__("./node_modules/lodash/fromPairs.js"),map=__webpack_require__("./node_modules/lodash/map.js");module.exports={makeColorUtilities:function makeColorUtilities(_ref,classPrefix,cssProperty){var theme=_ref.theme,corePlugins=_ref.corePlugins,colors=flattenColorPalette(theme("colors")),getProperties=function getProperties(value){return corePlugins("opacity")?withAlphaVariable({color:value,property:cssProperty,variable:cssProperty+"-opacity"}):{cssProperty:toColorValue(value)}};return fromPairs(map(colors,(function(value,modifier){return[nameClass(classPrefix,modifier),getProperties(value)]})))}}},"./tailwind.config.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports={content:["./src/**/*.{js,ts,jsx,tsx,css}","./.storybook/**/*.{js,ts,jsx,tsx,css}"],presets:[__webpack_require__("./src/presets/default-preset.js")],safelist:["cursor-col-resize"]}}}]);