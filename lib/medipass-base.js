(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("angular-ui-router"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "angular-ui-router"], factory);
	else if(typeof exports === 'object')
		exports["medipass-base"] = factory(require("angular"), require("angular-ui-router"));
	else
		root["medipass-base"] = factory(root["angular"], root["angular-ui-router"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _angularUiRouter = __webpack_require__(2);

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _access = __webpack_require__(3);

var _access2 = _interopRequireDefault(_access);

var _accessMain = __webpack_require__(4);

var _accessLogin = __webpack_require__(6);

var _accessRecuperar = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('app.access', [_angularUiRouter2.default]).component('accessMain', _accessMain.AccessMain).component('accessLogin', _accessLogin.AccessLogin).component('accessRecuperar', _accessRecuperar.AccessRecuperar).config(_access2.default).name;

// let AccessModule = angular.module('app.access', [uirouter])
//   .component('accessMain', AccessMain)
//   .component('accessLogin', AccessLogin)
//   .component('accessRecuperar', AccessRecuperar)
//   .config(routing).name;

// export {AccessModule};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;
routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
  $stateProvider.state('access', {
    abstract: true,
    url: '/',
    component: 'accessMain'
  }).state('access.login', {
    url: 'login',
    component: 'accessLogin'
  }).state('access.recuperar', {
    url: 'recuperar',
    component: 'accessRecuperar'
  });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AccessMainController = function AccessMainController() {
  _classCallCheck(this, AccessMainController);

  console.log("AccessMainController componente");
};

var AccessMain = exports.AccessMain = {
  template: __webpack_require__(5),
  controller: AccessMainController,
  bindings: {}
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n  <ul class=\"nav navbar-nav\">\n    <li><a class=\"navbar-warn\" ui-sref=\"access.login\">Medipass</a></li>\n    <!--<li><a ui-sref=\"usuarios\">Usuarios</a></li>-->\n  </ul>\n</div>\n<ui-view></ui-view>\n"

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AccessLoginController = function AccessLoginController() {
  _classCallCheck(this, AccessLoginController);

  console.log("AccessLoginController componente");
};

var AccessLogin = exports.AccessLogin = {
  template: __webpack_require__(7),
  controller: AccessLoginController,
  bindings: {}
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\n"

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AccessRecuperarController = function AccessRecuperarController() {
  _classCallCheck(this, AccessRecuperarController);

  console.log("AccessLoginController componente");
};

var AccessRecuperar = exports.AccessRecuperar = {
  template: __webpack_require__(9),
  controller: AccessRecuperarController,
  bindings: {}
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<h2>Recuperar contraseña</h2>\n"

/***/ })
/******/ ]);
});
//# sourceMappingURL=medipass-base.js.map