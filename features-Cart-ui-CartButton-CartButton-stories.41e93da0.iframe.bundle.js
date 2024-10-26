"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[329],{"./src/features/Cart/ui/CartButton/CartButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LimitedCartButton:()=>LimitedCartButton,WithProductCartButton:()=>WithProductCartButton,WithoutProductCartButton:()=>WithoutProductCartButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _CartButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/features/Cart/ui/CartButton/CartButton.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/app/App.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Template=function Template(args){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(args.count),2),count=_useState2[0],setCount=_useState2[1];console.log(count);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{height:"30px",width:"100px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_CartButton__WEBPACK_IMPORTED_MODULE_0__.Z,_objectSpread(_objectSpread({},args),{},{count,onCountChange:function onInputChange(value){return setCount(value)}}))})};Template.displayName="Template";const __WEBPACK_DEFAULT_EXPORT__={title:"Features/CartButton",component:Template,tags:["autodocs"],parameters:{}};var WithoutProductCartButton={args:{count:0,max:void 0,disabled:!1}},WithProductCartButton={args:{count:5,max:void 0,disabled:!1}},LimitedCartButton=Template.bind({});LimitedCartButton.args={count:3,min:0,max:5,disabled:!1},WithoutProductCartButton.parameters={...WithoutProductCartButton.parameters,docs:{...WithoutProductCartButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    count: 0,\n    max: undefined,\n    disabled: false\n  }\n}",...WithoutProductCartButton.parameters?.docs?.source}}},WithProductCartButton.parameters={...WithProductCartButton.parameters,docs:{...WithProductCartButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    count: 5,\n    max: undefined,\n    disabled: false\n  }\n}",...WithProductCartButton.parameters?.docs?.source}}},LimitedCartButton.parameters={...LimitedCartButton.parameters,docs:{...LimitedCartButton.parameters?.docs,source:{originalSource:"(args: CartButtonProps) => {\n  const [count, setCount] = useState(args.count);\n  console.log(count);\n  const onInputChange = (value: number) => setCount(value);\n  return <div style={{\n    height: '30px',\n    width: '100px'\n  }}>\n      <CartButton {...args} count={count} onCountChange={onInputChange} />\n    </div>;\n}",...LimitedCartButton.parameters?.docs?.source}}};const __namedExportsOrder=["WithoutProductCartButton","WithProductCartButton","LimitedCartButton"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/app/App.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.App {\n    text-align: center;\n}\n\n.App-logo {\n    height: 40vmin;\n    pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n    .App-logo {\n        animation: App-logo-spin infinite 20s linear;\n    }\n}\n\n.App-header {\n    background-color: #282c34;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    color: white;\n}\n\n.App-link {\n    color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n    from {\n        transform: rotate(0deg);\n    }\n\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n/* Светлая тема */\n:root {\n    --background-color: #ffffff;\n    --text-color: #000000;\n    --primary-color: #007bff;\n    --secondary-color: #6c757d;\n    --active-color: #e5e5e5;\n    \n    --disable-color:#EFEFEF4C;\n    --disable-text-color:#1616164C;\n}\n\n/* Тёмная тема */\n[data-theme="dark"] {\n    --background-color: #333333;\n    --text-color: #f0f0f0;\n    --primary-color: #17a2b8;\n    --secondary-color: #adb5bd;\n    --active-color: #3E3E3E;\n\n    --disable-color:#1901014C;\n    --disable-text-color:#FFFFFF4C;\n}',"",{version:3,sources:["webpack://./src/app/App.css"],names:[],mappings:"AAAA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI;QACI,4CAA4C;IAChD;AACJ;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI;QACI,uBAAuB;IAC3B;;IAEA;QACI,yBAAyB;IAC7B;AACJ;;AAEA,iBAAiB;AACjB;IACI,2BAA2B;IAC3B,qBAAqB;IACrB,wBAAwB;IACxB,0BAA0B;IAC1B,uBAAuB;;IAEvB,yBAAyB;IACzB,8BAA8B;AAClC;;AAEA,gBAAgB;AAChB;IACI,2BAA2B;IAC3B,qBAAqB;IACrB,wBAAwB;IACxB,0BAA0B;IAC1B,uBAAuB;;IAEvB,yBAAyB;IACzB,8BAA8B;AAClC",sourcesContent:['.App {\n    text-align: center;\n}\n\n.App-logo {\n    height: 40vmin;\n    pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n    .App-logo {\n        animation: App-logo-spin infinite 20s linear;\n    }\n}\n\n.App-header {\n    background-color: #282c34;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    color: white;\n}\n\n.App-link {\n    color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n    from {\n        transform: rotate(0deg);\n    }\n\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n/* Светлая тема */\n:root {\n    --background-color: #ffffff;\n    --text-color: #000000;\n    --primary-color: #007bff;\n    --secondary-color: #6c757d;\n    --active-color: #e5e5e5;\n    \n    --disable-color:#EFEFEF4C;\n    --disable-text-color:#1616164C;\n}\n\n/* Тёмная тема */\n[data-theme="dark"] {\n    --background-color: #333333;\n    --text-color: #f0f0f0;\n    --primary-color: #17a2b8;\n    --secondary-color: #adb5bd;\n    --active-color: #3E3E3E;\n\n    --disable-color:#1901014C;\n    --disable-text-color:#FFFFFF4C;\n}'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/app/App.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/app/App.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_App_css__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_App_css__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_App_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_App_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);