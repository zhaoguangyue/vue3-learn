var Vue =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/reactive.js":
/*!*************************!*\
  !*** ./src/reactive.js ***!
  \*************************/
/*! exports provided: reactive, effect, computed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reactive\", function() { return reactive; });\n/* harmony import */ var _reactivity_effect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reactivity/effect.js */ \"./src/reactivity/effect.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"effect\", function() { return _reactivity_effect_js__WEBPACK_IMPORTED_MODULE_0__[\"effect\"]; });\n\n/* harmony import */ var _reactivity_computed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactivity/computed.js */ \"./src/reactivity/computed.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"computed\", function() { return _reactivity_computed_js__WEBPACK_IMPORTED_MODULE_1__[\"computed\"]; });\n\n\n\n\nconst reactive = (target)=>{\n    const observed = new Proxy(target, baseHandler)\n    return observed\n}\n\n\nlet baseHandler = {\n    get: createdGetter(),\n    set: createSetter()\n}\n\nfunction createdGetter(){\n    return function get(target, key, receiver){\n        const res = Reflect.get(target, key);\n        // 如果是计算属性，计算属性返回的是一个对象\n        console.log('----------------------------')\n        console.log(res)\n        if(res.__v_isRef){\n            return res.value\n        }\n        Object(_reactivity_effect_js__WEBPACK_IMPORTED_MODULE_0__[\"listen\"])(target, key)\n        return isObject(target) ? reactive(res) : res\n    }\n}\n\nfunction createSetter(){\n    return function set(target, key, value, receiver){\n        const oldValue = Reflect.get(target, key);\n        let result = Reflect.set(target, key, value, receiver)\n        Object(_reactivity_effect_js__WEBPACK_IMPORTED_MODULE_0__[\"trigger\"])(target, key)\n        return result\n    }\n}\n\n// let activeEffect\n// function effect (fn, option = {}){\n//     let effect = createReactiveEffect(fn);\n//     // 一共有三处使用effect： mount，watch，computed\n//     // watch 和 computed的lazy为true\n//     if(!option.lazy){\n//         effect();\n//     }\n//     return effect\n// }\n\n// // let effectStack = []\n// function createReactiveEffect(fn){\n//     let effect = function reactiveEffect(){\n//         // if (!effectStack.includes(effect))\n//         try{\n//             // effectStack.push(effect)\n//             activeEffect = effect\n//             fn()\n//         } finally {\n//             // activeEffect = null\n//             // effectStack.pop(effect)\n//             // activeEffect = effectStack[effectStack.length-1]\n//         }\n//     } \n//     effect.deps = [];\n//     effect.raw = fn;\n//     return effect\n// }\n\nlet isObject = (v)=>{\n    typeof v === 'object'\n}\n\n\n\n\n//# sourceURL=webpack://Vue/./src/reactive.js?");

/***/ }),

/***/ "./src/reactivity/computed.js":
/*!************************************!*\
  !*** ./src/reactivity/computed.js ***!
  \************************************/
/*! exports provided: computed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"computed\", function() { return computed; });\n/* harmony import */ var _effect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./effect.js */ \"./src/reactivity/effect.js\");\n\n/**\n * \n * @param {*} getterOrOption \n * 一个getter 或者 { get(){}, set(){} }\n * 使用\n * var countAdd = computed(()=>{state.count++})\n * var countAdd = computed({\n *  get(){}\n *  set(val){}\n * })\n */\n\nfunction computed(getterOrOption){\n    let getter, setter;\n    if(typeof getterOrOption === 'function'){\n        getter = getterOrOption;\n        setter = () => {}\n    }else {\n        getter = getterOrOption.get;\n        setter = getterOrOption.set;\n    }\n\n    // value 需要缓存\n    let value;\n    let dirty = true;\n    const runner = Object(_effect_js__WEBPACK_IMPORTED_MODULE_0__[\"effect\"])(getter, {\n        lazy: true, //创建一个effect，但是不立即执行\n        computed: true, //标记该effect为计算属性的\n        // 为该effect添加scheduler，在订阅发布器，进行发布的时候，就不会执行getter，而是执行scheduler函数\n        // 第一次获取该值后时，将该计算属性加入了订阅，所以之后有trigger时，肯定会走\n        scheduler(){\n            // 第一次获取后为false，第二次获取该值才走这里\n            if(!dirty){\n                dirty = true\n                Object(_effect_js__WEBPACK_IMPORTED_MODULE_0__[\"trigger\"])(computed, 'value')\n            }\n        }\n    })\n    const computed = {\n        __v_isRef: true, //标记为计算属性，计算属性，最终返回的是一个对象，所以应该返回computed.value\n        effect: runner,\n        // 计算属性 缓存需要实现\n        get value(){\n            // dirty为true，就重新计算value\n            if (dirty) {\n                // 运行getter, \n                value = runner()\n                // 在第一次获取计算属性的值后，dirty为false\n                dirty = false\n            }\n            // 订阅该计算属性\n            Object(_effect_js__WEBPACK_IMPORTED_MODULE_0__[\"listen\"])(computed, 'value');\n            return value\n        },\n        set value(newVal){\n            setter(newVal)\n        }\n    }\n\n    return computed\n}\n\n//# sourceURL=webpack://Vue/./src/reactivity/computed.js?");

/***/ }),

/***/ "./src/reactivity/effect.js":
/*!**********************************!*\
  !*** ./src/reactivity/effect.js ***!
  \**********************************/
/*! exports provided: effect, listen, trigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"effect\", function() { return effect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listen\", function() { return listen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trigger\", function() { return trigger; });\n\nlet activeEffect;\nfunction effect(fn, options = {computed: false}){\n    const effect = createReactiveEffect(fn, options);\n    if(!options.lazy){\n        effect();\n    }\n    return effect\n}\n\nlet effectStack = []\nfunction createReactiveEffect(fn, options){\n    let effect = function reactiveEffect(){\n        if(!effectStack.includes(effect)){\n            try{\n                effectStack.push()\n                activeEffect = effect\n                return fn();\n            } finally {\n                effectStack.pop();\n                activeEffect = effectStack[effectStack.length - 1]\n            }\n        }\n    }\n    effect.deps = [];\n    effect.raw = fn\n    effect.options = options;\n    return effect\n}\n\n\n\n\n// 发布订阅\nlet targetMap = new WeakMap();\nfunction listen(target, key){\n    let depsMap = targetMap.get(target);\n    if (!depsMap){\n        depsMap = new Map();\n        targetMap.set(target, depsMap);\n    }\n    let deps = depsMap.get(key);\n    if(!deps) {\n        deps = new Set();\n        depsMap.set(key, deps);\n    }\n\n    if(!deps.has(activeEffect)){\n        deps.add(activeEffect)\n    }\n}\n\nfunction trigger(target, key){\n    let depsMap = targetMap.get(target);\n    if(!depsMap){\n        return \n    }\n    let deps = depsMap.get(key);\n    let computedRunners = [];\n    let effects = [];\n\n    deps && deps.forEach(effect=>{\n        if (effect !== activeEffect) {\n            if (effect.options.computed) {\n                computedRunners.push(effect)\n            } else {\n                effects.push(effect)\n            }\n        }\n    })\n    function run(effect){\n        if(effect.options.scheduler){\n            effect.options.scheduler()\n        } else {\n            effect();\n        }\n    }\n    computedRunners.forEach(run)\n    effects.forEach(run)\n}\n\n\n\n//# sourceURL=webpack://Vue/./src/reactivity/effect.js?");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/reactive.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/reactive.js */\"./src/reactive.js\");\n\n\n//# sourceURL=webpack://Vue/multi_./src/reactive.js?");

/***/ })

/******/ });