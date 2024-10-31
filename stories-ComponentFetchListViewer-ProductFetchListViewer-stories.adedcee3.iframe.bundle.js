"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[504],{"./src/stories/ComponentFetchListViewer/ProductFetchListViewer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SimpleProductFetchListViewer:()=>SimpleProductFetchListViewer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProductFetchListViewer_stories});var react=__webpack_require__("./node_modules/react/index.js"),fakeGenerators=__webpack_require__("./src/shared/lib/fakeGenerators/fakeGenerators.ts"),ProductItem=__webpack_require__("./src/entities/Product/ui/ProductItem/ProductItem.tsx"),ComponentFetchList=__webpack_require__("./src/shared/ui/ComponentFetchList/ComponentFetchList.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ProductFetchListViewer=function ProductFetchListViewer(){var _useState2=_slicedToArray((0,react.useState)(Array.from({length:20}).map((function(){return(0,fakeGenerators.qN)((0,fakeGenerators.yN)(new Date("2022-01-01"),new Date("2022-12-31")))}))),2),items=_useState2[0],setItems=_useState2[1];return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(ComponentFetchList.Z,{items,itemElement:ProductItem.Z,fetchItems:function doFetch(){setItems([].concat(_toConsumableArray(items),_toConsumableArray(Array.from({length:20}).map((function(){return(0,fakeGenerators.qN)((0,fakeGenerators.yN)(new Date("2022-01-01"),new Date("2022-12-31")))})))))},mapItem:function mapItem(item){return _objectSpread(_objectSpread({},item),{},{categoryName:item.category.name})}})})};const ComponentFetchListViewer_ProductFetchListViewer=ProductFetchListViewer;try{ProductFetchListViewer.displayName="ProductFetchListViewer",ProductFetchListViewer.__docgenInfo={description:"",displayName:"ProductFetchListViewer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/ComponentFetchListViewer/ProductFetchListViewer.tsx#ProductFetchListViewer"]={docgenInfo:ProductFetchListViewer.__docgenInfo,name:"ProductFetchListViewer",path:"src/stories/ComponentFetchListViewer/ProductFetchListViewer.tsx#ProductFetchListViewer"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/app/localization/index.ts");var ThemeProvider=__webpack_require__("./src/shared/providers/ThemeProvider/ThemeProvider.tsx"),LanguageProvider=__webpack_require__("./src/shared/providers/LanguageProvider/LanguageProvider.tsx");const ProductFetchListViewer_stories={title:"Shared/ComponentFetchListViewer/Product",component:ComponentFetchListViewer_ProductFetchListViewer,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[function(story){return(0,jsx_runtime.jsx)(ThemeProvider.Z,{children:(0,jsx_runtime.jsx)(LanguageProvider.i,{children:story()})})}]};var SimpleProductFetchListViewer={};SimpleProductFetchListViewer.parameters={...SimpleProductFetchListViewer.parameters,docs:{...SimpleProductFetchListViewer.parameters?.docs,source:{originalSource:"{}",...SimpleProductFetchListViewer.parameters?.docs?.source}}};const __namedExportsOrder=["SimpleProductFetchListViewer"]},"./src/app/localization/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./src/app/localization/settings.ts")},"./src/app/localization/settings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Languages});var i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),i18nextBrowserLanguageDetector=__webpack_require__("./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js");const en_namespaceObject=JSON.parse('{"category":{},"operation":{"amount":"{{amount, currency}}","description_undefined":"undefined"},"product":{"price":"{{price, currency}}","oldPrice":"{{oldPrice, currency}}","description_undefined":"undefined","photo_alt":"Product {{name}}"},"OperationDetail":{"edit":"Edit"},"ProductDetail":{},"ProductItem":{},"CartButton":{"button":"Add to cart"},"CartItem":{"button":"Remove"}}'),ru_namespaceObject=JSON.parse('{"categoty":{},"operation":{"amount":"{{amount, currency}}","description_undefined":"неописуемо"},"product":{"price":"{{price, currency}}","oldPrice":"{{oldPrice, currency}}","description_undefined":"неописуемо","photo_alt":"Продукт {{name}}"},"OperationDetail":{"edit":"Редактировать"},"ProductDetail":{},"ProductItem":{},"CartButton":{"button":"В корзину"},"CartItem":{"button":"Удалить"}}');var Languages=function(Languages){return Languages.en="en",Languages.ru="ru",Languages}({});i18next.ZP.use(i18nextBrowserLanguageDetector.Z).use(es.Db).init({resources:{en:{translation:en_namespaceObject},ru:{translation:ru_namespaceObject}},fallbackLng:Languages.ru,interpolation:{format:function format(value,_format,lng){if("currency"===_format){return new Intl.NumberFormat(lng,{style:"currency",currency:"RUB",currencyDisplay:"symbol"}).format(value).replace("RUB","₽")}return"date"===_format?new Intl.DateTimeFormat(lng).format(value):value},escapeValue:!1}})},"./src/shared/contexts/LanguageContext/LanguageContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>LanguageContext,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),LanguageContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);const __WEBPACK_DEFAULT_EXPORT__=function useLanguage(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LanguageContext);if(!context)throw new Error("useLanguage must be used within a LanguageProvider");return context}},"./src/shared/contexts/ThemeContext/ThemeContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>ThemeContext,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ThemeContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);const __WEBPACK_DEFAULT_EXPORT__=function useTheme(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);if(!context)throw new Error("useTheme must be used within a ThemeProvider");return context}},"./src/shared/lib/fakeGenerators/fakeGenerators.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZB:()=>createRandomOperation,qN:()=>createRandomProduct,yN:()=>getRandomDate});var uuid__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),createRandomProduct=function createRandomProduct(createdAt){var id=getRandomId(),category=getRandomCategory(),price=getRandom(10,1e3,2);return{id,name:"Продукт ".concat(id),photo:"store/photos/products/".concat(id,".jpeg"),createdAt,category,price,oldPrice:Math.random()<.5?price+Math.trunc(100*price*getRandom(-.2,.2,2))/100:void 0,desc:Math.random()<.5?"Это ".concat(category.name.toLowerCase(),"."):void 0}},createRandomOperation=function createRandomOperation(createdAt){var id=getRandomId(),category=getRandomCategory(),type=Math.random()<.5?"Cost":"Profit";return{id,name:"Операция ".concat(id),createdAt,category,amount:getRandom(10,1e3,2)*("Cost"===type?-1:1),desc:Math.random()<.5?"Операция ".concat(type," id(").concat(id,")."):void 0,type}},getRandomId=function getRandomId(){return(0,uuid__WEBPACK_IMPORTED_MODULE_0__.Z)()},getRandomDate=function getRandomDate(start,end){var date=new Date(+start+Math.random()*(end.getTime()-start.getTime())),hour=Math.floor(24*Math.random()),minute=0===hour?1:Math.floor(60*Math.random());return date.setHours(hour),date.setMinutes(minute),date.toLocaleString("ru-RU",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})},getRandom=function getRandom(min,max,digits){return Math.round((min+Math.random()*(max-min))*Math.pow(10,digits))/Math.pow(10,digits)},getRandomCategory=function getRandomCategory(){var categories=[{id:"1",name:"Прям вот очень нужное"},{id:"2",name:"Не так, что бы нужное",photo:"store/photos/categories/2.jpeg"},{id:"3",name:"Совсем выбрось",photo:"store/photos/categories/3.jpeg"},{id:"4",name:"Необходимое"},{id:"5",name:"Вроде некуда, а жаль"}];return categories[Math.trunc(Math.random()*categories.length)]}},"./src/shared/providers/LanguageProvider/LanguageProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>LanguageProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_i18next__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),_contexts_LanguageContext_LanguageContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/contexts/LanguageContext/LanguageContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var LanguageProvider=function LanguageProvider(_ref){var children=_ref.children,i18n=(0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.$G)().i18n,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(i18n.language),2),currentLanguage=_useState2[0],setCurrentLanguage=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_contexts_LanguageContext_LanguageContext__WEBPACK_IMPORTED_MODULE_2__.A.Provider,{value:{currentLanguage,switchLanguage:function switchLanguage(language){i18n.changeLanguage(language),setCurrentLanguage(language)}},children})};LanguageProvider.displayName="LanguageProvider";try{LanguageProvider.displayName="LanguageProvider",LanguageProvider.__docgenInfo={description:"",displayName:"LanguageProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/providers/LanguageProvider/LanguageProvider.tsx#LanguageProvider"]={docgenInfo:LanguageProvider.__docgenInfo,name:"LanguageProvider",path:"src/shared/providers/LanguageProvider/LanguageProvider.tsx#LanguageProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/providers/ThemeProvider/ThemeProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_contexts_ThemeContext_ThemeContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/contexts/ThemeContext/ThemeContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ThemeProvider=function ThemeProvider(_ref){var children=_ref.children,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("light"),2),theme=_useState2[0],setTheme=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){document.body.parentElement.setAttribute("data-theme",theme)}),[theme]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_contexts_ThemeContext_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.N.Provider,{value:{theme,toggleTheme:function toggleTheme(){setTheme((function(prevTheme){return"light"===prevTheme?"dark":"light"}))}},children})};ThemeProvider.displayName="ThemeProvider";const __WEBPACK_DEFAULT_EXPORT__=ThemeProvider;try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/providers/ThemeProvider/ThemeProvider.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/shared/providers/ThemeProvider/ThemeProvider.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/ComponentFetchList/ComponentFetchList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ComponentFetchList_ComponentFetchList});var react=__webpack_require__("./node_modules/react/index.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const useIntersectionObserver=function useIntersectionObserve(ref,onIntersect,options){(0,react.useEffect)((function(){var observer=new IntersectionObserver((function(_ref){_slicedToArray(_ref,1)[0].isIntersecting&&onIntersect()}),options),currentRef=ref.current;return currentRef&&observer.observe(currentRef),function(){currentRef&&observer.unobserve(currentRef)}}),[options,ref])};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return ComponentFetchList_arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||ComponentFetchList_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ComponentFetchList_slicedToArray(arr,i){return function ComponentFetchList_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function ComponentFetchList_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||ComponentFetchList_unsupportedIterableToArray(arr,i)||function ComponentFetchList_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ComponentFetchList_unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return ComponentFetchList_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ComponentFetchList_arrayLikeToArray(o,minLen):void 0}}function ComponentFetchList_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ComponentFetchList=function ComponentFetchList(_ref){var items=_ref.items,ItemElement=_ref.itemElement,fetchItems=_ref.fetchItems,mapItem=_ref.mapItem,_useState2=ComponentFetchList_slicedToArray((0,react.useState)((function(){return items.map((function(value,index){return{value,index}}))})),2),visibleItems=_useState2[0],setVisibleItems=_useState2[1];(0,react.useEffect)((function(){setVisibleItems([].concat(_toConsumableArray(visibleItems),_toConsumableArray(items.map((function(value,index){return{value,index}})).filter((function(value){return!visibleItems.some((function(item){return item.index===value.index}))})))))}),[items,visibleItems]);var targetRef=(0,react.useRef)(null);return useIntersectionObserver(targetRef,(function onIntersect(){fetchItems()}),{threshold:.5}),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:visibleItems.map((function(item){return(0,jsx_runtime.jsx)("div",{ref:item.index===visibleItems.length-2?targetRef:null,children:(0,jsx_runtime.jsx)(ItemElement,_objectSpread({},mapItem(item.value)))},item.value.id)}))})};const ComponentFetchList_ComponentFetchList=ComponentFetchList;try{ComponentFetchList.displayName="ComponentFetchList",ComponentFetchList.__docgenInfo={description:"",displayName:"ComponentFetchList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},itemElement:{defaultValue:null,description:"",name:"itemElement",required:!0,type:{name:"ComponentType<P>"}},fetchItems:{defaultValue:null,description:"",name:"fetchItems",required:!0,type:{name:"() => void"}},mapItem:{defaultValue:null,description:"",name:"mapItem",required:!0,type:{name:"(item: T) => P"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/ComponentFetchList/ComponentFetchList.tsx#ComponentFetchList"]={docgenInfo:ComponentFetchList.__docgenInfo,name:"ComponentFetchList",path:"src/shared/ui/ComponentFetchList/ComponentFetchList.tsx#ComponentFetchList"})}catch(__react_docgen_typescript_loader_error){}}}]);