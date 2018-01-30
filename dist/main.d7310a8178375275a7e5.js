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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/my-context/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Couldn't find preset \"@babel/babel-preset-preset-env\" relative to directory \"/home/jim/dev/create-js-app/src\"\n    at /home/jim/dev/create-js-app/node_modules/babel-core/lib/transformation/file/options/option-manager.js:298:19\n    at Array.map (native)\n    at OptionManager.resolvePresets (/home/jim/dev/create-js-app/node_modules/babel-core/lib/transformation/file/options/option-manager.js:269:20)\n    at OptionManager.mergePresets (/home/jim/dev/create-js-app/node_modules/babel-core/lib/transformation/file/options/option-manager.js:258:10)\n    at OptionManager.mergeOptions (/home/jim/dev/create-js-app/node_modules/babel-core/lib/transformation/file/options/option-manager.js:243:14)\n    at OptionManager.init (/home/jim/dev/create-js-app/node_modules/babel-core/lib/transformation/file/options/option-manager.js:373:12)\n    at File.initOptions (/home/jim/dev/create-js-app/node_modules/babel-core/lib/transformation/file/index.js:221:65)\n    at new File (/home/jim/dev/create-js-app/node_modules/babel-core/lib/transformation/file/index.js:141:24)\n    at Pipeline.transform (/home/jim/dev/create-js-app/node_modules/babel-core/lib/transformation/pipeline.js:46:16)\n    at transpile (/home/jim/dev/create-js-app/node_modules/babel-loader/index.js:38:20)");

/***/ })
/******/ ]);
//# sourceMappingURL=main.d7310a8178375275a7e5.js.map