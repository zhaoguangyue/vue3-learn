/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src */ \"./src/index.js\");\n\nconsole.log(_src__WEBPACK_IMPORTED_MODULE_0__[\"vue\"])\nconsole.log(_src__WEBPACK_IMPORTED_MODULE_0__[\"createApp\"])\nwindow.vue = _src__WEBPACK_IMPORTED_MODULE_0__[\"vue\"]\n\nfunction aa(){\n    console.log(123)\n    var a = new Promise((resolve)=>{\n        console.log('aapromise')\n        resolve()\n    })\n    a.then(()=>{\n        console.log('aa的then')\n    })\n}\nfunction bb(){\n    console.log(12222)\n\n    var a = new Promise((resolve)=>{\n        console.log('bbpromise')\n        resolve()\n    })\n    a.then(()=>{\n        console.log('bb的then')\n    })\n}\n\naa()\nbb()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: vue, createApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vue\", function() { return vue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createApp\", function() { return createApp; });\n/* harmony import */ var _runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runtime-core */ \"./src/runtime-core.js\");\nconst vue = {\n\n}\n\nconst createApp = (...args)=>{\n    let app = Object(_runtime_core__WEBPACK_IMPORTED_MODULE_1__[\"getApp\"])();\n    app.mount()\n    return app\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/runtime-core.js":
/*!*****************************!*\
  !*** ./src/runtime-core.js ***!
  \*****************************/
/*! exports provided: getApp, createApp, createRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getApp\", function() { return getApp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createApp\", function() { return createApp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRenderer\", function() { return createRenderer; });\nconst getApp = (rootComponent, props = mnull)=>{\n    return {\n        _component:rootComponent,\n        _props: props,\n        _container: null,\n        _context: context,\n        use: ()=>{\n            console.log('使用vue插件')\n        },\n        mixin: ()=>{\n            console.log('mixin')\n        },\n        component: ()=>{\n            console.log('component')\n        },\n        directive: ()=>{\n            console.log('directive')\n        },\n        mount: ()=>{\n            console.log('mount')\n        },\n        unmount: ()=>{\n            console.log('unmount')\n        },\n        provide: ()=>{\n            console.log('provide')\n        },\n\n    }\n}\n\nconst createApp = (...args) => {\n    const app = ensureRenderer().createApp(...args)\n  \n    const { mount } = app\n    app.mount = (containerOrSelector) => {\n        const container = normalizeContainer(containerOrSelector)\n        return mount(container)\n    }\n    return app\n}  \n\nfunction createRenderer(options) {\n  return baseCreateRenderer(options)\n}\n\n//# sourceURL=webpack:///./src/runtime-core.js?");

/***/ })

/******/ });