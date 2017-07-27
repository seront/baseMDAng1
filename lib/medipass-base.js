(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("angular-material"), require("angular-translate"), require("angular-material-data-table"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "angular-material", "angular-translate", "angular-material-data-table"], factory);
	else if(typeof exports === 'object')
		exports["medipass-base"] = factory(require("angular"), require("angular-material"), require("angular-translate"), require("angular-material-data-table"));
	else
		root["medipass-base"] = factory(root["angular"], root["angular-material"], root["angular-translate"], root["angular-material-data-table"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_26__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SideMenuController = function () {
  function SideMenuController($state) {
    'ngInject';

    _classCallCheck(this, SideMenuController);

    this.go = $state.go;
  }

  _createClass(SideMenuController, [{
    key: '$onInit',
    value: function $onInit() {}
  }, {
    key: 'toggleExpand',
    value: function toggleExpand(item) {
      item.expanded = !item.expanded;
    }
  }, {
    key: 'action',
    value: function action(item) {
      if (item.items) {
        this.toggleExpand(item);
      } else {
        this.go(item.state);
      }
    }
  }]);

  return SideMenuController;
}();

var SidemenuComponent = exports.SidemenuComponent = {
  template: __webpack_require__(18),
  controller: SideMenuController,
  bindings: {
    menu: '<',
    config: '<'
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideMenu = exports.CommonsModule = exports.ComponentsModule = undefined;

var _components = __webpack_require__(4);

Object.defineProperty(exports, 'ComponentsModule', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_components).default;
  }
});

var _common = __webpack_require__(19);

Object.defineProperty(exports, 'CommonsModule', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_common).default;
  }
});

var _sidemenu = __webpack_require__(21);

Object.defineProperty(exports, 'SideMenu', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sidemenu).default;
  }
});

__webpack_require__(22);

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _angularMaterial = __webpack_require__(1);

var _angularMaterial2 = _interopRequireDefault(_angularMaterial);

var _angularTranslate = __webpack_require__(23);

var _angularTranslate2 = _interopRequireDefault(_angularTranslate);

var _components2 = _interopRequireDefault(_components);

var _common2 = _interopRequireDefault(_common);

var _medipassTheme = __webpack_require__(24);

var _medipassTheme2 = _interopRequireDefault(_medipassTheme);

var _table = __webpack_require__(25);

var _table2 = _interopRequireDefault(_table);

var _financiador = __webpack_require__(29);

var _financiador2 = _interopRequireDefault(_financiador);

var _prestador = __webpack_require__(31);

var _prestador2 = _interopRequireDefault(_prestador);

var _medipassTranslate = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {SidemenuComponent} from './components/sidemenu/sidemenu.component'

// export var MedipassBase = angular.module('medipass.base', [
exports.default = _angular2.default.module('medipass.base', [_angularMaterial2.default, _angularTranslate2.default, _components2.default, _table2.default, _financiador2.default, _prestador2.default, _common2.default]).config(_medipassTranslate.translateConfig).config(_medipassTheme2.default).name;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _access = __webpack_require__(5);

var _access2 = _interopRequireDefault(_access);

var _header = __webpack_require__(16);

var _sidemenu = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('medipass.components', [_access2.default
// ,
// Sidemenu
]).component('header', _header.HeaderComponent).component('sidemenu', _sidemenu.SidemenuComponent).name;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _angularMaterial = __webpack_require__(1);

var _angularMaterial2 = _interopRequireDefault(_angularMaterial);

var _url = __webpack_require__(6);

var _url2 = _interopRequireDefault(_url);

var _access = __webpack_require__(7);

var _accessLogin = __webpack_require__(9);

var _accessRecuperarModule = __webpack_require__(11);

var _accessRecuperarModule2 = _interopRequireDefault(_accessRecuperarModule);

var _access2 = __webpack_require__(14);

var _access3 = _interopRequireDefault(_access2);

var _access4 = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('medipass.access', [_angularMaterial2.default, _url2.default,
// AccessLoginModule,
_accessRecuperarModule2.default]).component('access', _access.AccessComponent).component('accessLogin', _accessLogin.AccessLogin).service('AccessService', _access4.AccessService).config(_access3.default).config(['$httpProvider', function ($httpProvider) {
  if (!$httpProvider.defaults.headers.post) {
    $httpProvider.defaults.headers.post = {};
  }

  // Answer edited to include suggestions from comments
  // because previous version of code introduced browser-related errors
  // extra
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
  $httpProvider.defaults.headers.post['Cache-Control'] = 'no-cache';
  // $httpProvider.defaults.headers.post['content-type'] = 'application/json';
  // $httpProvider.defaults.headers.post['Pragma'] = 'no-cache';
}]).name;
// import {default as AccessLoginModule} from './access-login/access-login.module.js';

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UrlService = function UrlService() {
  _classCallCheck(this, UrlService);

  // 'ngInject';
  this.login = "http://dev.wso2:8280/usuarios/login";
};

exports.default = _angular2.default.module('medipass.url', []).service("UrlService", UrlService).name;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AccessComponentController = function AccessComponentController($log) {
  _classCallCheck(this, AccessComponentController);

  //  console.log("AccessMainController componente");
  $log.log("Access componente");
};

var AccessComponent = exports.AccessComponent = {
  template: __webpack_require__(8),
  controller: AccessComponentController,
  bindings: {}
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"tall\">\n  <!--<h2>Access Header component</h2>-->\n</md-toolbar>\n\n<ui-view></ui-view>\n"

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AccessLoginController = function () {
  function AccessLoginController($log, AccessService, $state) {
    'ngInject';

    _classCallCheck(this, AccessLoginController);

    $log.log("AccessLoginController componente");
    this.$state = $state;
    this.AccessService = AccessService;
    this.mensaje = {
      texto: "",
      visible: false
    };
  }

  _createClass(AccessLoginController, [{
    key: "login",
    value: function login() {
      var _this = this;

      this.mensaje.visible = false;
      this.AccessService.login(this.username, this.pwd).then(function (response) {
        if (response.data.response) {
          console.log("sesion iniciada correctamente");
          console.log(response.data.response.data);
          _this.AccessService.usuarioActual = response.data.response.data;
          _this.$state.go("app.dashboard");
        } else {

          // console.log("error inicio de sesión");
          // console.log(response);
          _this.mensaje.texto = "Los datos ingresados no coinciden con los existentes en nuestra base de datos";
          _this.mensaje.visible = true;
          // console.log( this.mensaje);
        }
      }, function (error) {
        console.log("Login error");
        console.log(error);
        _this.mensaje.texto = "Ha ocurrido un error inesperado, por favor intentelo mas tarde";
        _this.mensaje.visible = true;
      });
    }
  }]);

  return AccessLoginController;
}();
// AccessLoginController.$inject = ['$log', 'AccessService'];

var AccessLogin = exports.AccessLogin = {
  template: __webpack_require__(10),
  controller: AccessLoginController,
  bindings: {}
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<md-content layout=\"row\" layout-align=\"center center\">\n  <md-card>\n    <md-card-title layout=\"row\" layout-align=\"center center\">\n      Iniciar sesión en Medipass\n    </md-card-title>\n    <md-card-content layout=\"column\" layout-align=\"center center\">\n      <div ng-show=\"$ctrl.mensaje.visible\" style=\"color:red\" layout-padding>\n        <p>{{$ctrl.mensaje.texto}}</p>\n        </div>\n      <form name=\"loginForm\" layout=\"column\" layout-align=\"center center\">\n      <md-input-container>\n        <label translate=\"USERNAME\">\n\n        </label>\n        <input type=\"text\" name=\"username\" ng-model=\"$ctrl.username\" required>\n        <div  ng-messages=\"loginForm.username.$error && loginForm.$invalid\">\n            <div ng-message=\"required\">\n              <span translate=\"USERNAME_REQUIRED\"></span>\n            </div>\n          </div>\n      </md-input-container>\n      <md-input-container>\n        <label translate=\"PASSWORD\">\n\n        </label>\n        <input type=\"password\" name=\"password\" ng-model=\"$ctrl.pwd\" required>\n        <!-- <div ng-if=\"loginForm.password.$dirty\" ng-messages=\"loginForm.password.$error\"> -->\n        <div  ng-messages=\"(loginForm.password.$error && loginForm.$invalid)\">\n            <div ng-message=\"required\">\n              <span translate=\"PASSWORD_REQUIRED\"></span>\n            </div>\n          </div>\n      </md-input-container>\n        <md-button class=\"md-primary md-raised\" type=\"submit\" translate=\"LOGIN\" aria-label=\"LOGIN\" ng-disabled=\"loginForm.$invalid\" ng-submit=\"$ctrl.login()\" ng-click=\"$ctrl.login()\">\n        <span translate=\"LOGIN\"></span>\n      </md-button>\n      </form>\n    </md-card-content>\n    <md-car-actions layout=\"column\">\n      <!-- <md-button class=\"md-primary md-raised\" type=\"submit\" translate=\"LOGIN\" aria-label=\"LOGIN\" ng-disabled=\"loginForm.$invalid\" ng-submit=\"$ctrl.login()\" ng-click=\"$ctrl.login()\">\n        <span translate=\"LOGIN\"></span>\n      </md-button> -->\n      <md-button class=\"\" ui-sref=\"access.recuperar\" aria-label=\"FORGOT_PWD\">\n        <span translate=\"FORGOT_PWD\"></span>\n      </md-button>\n    </md-car-actions>\n  </md-card>\n</md-content>\n\n"

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _accessRecuperarComponent = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('medipass.access.recuperar', []).component('accessRecuperar', _accessRecuperarComponent.AccessRecuperar).name;
// import uirouter from 'angular-ui-router';
// import material from 'angular-material'
// import routing from './access.routes';

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AccessRecuperarController = function () {
  function AccessRecuperarController(AccessService) {
    'ngInject';

    _classCallCheck(this, AccessRecuperarController);

    this.AccessService = AccessService;
  }

  _createClass(AccessRecuperarController, [{
    key: 'resetPwd',
    value: function resetPwd() {
      this.AccessService.resetPwd(this.username, this.email).then(function (response) {
        return response;
      });
    }
  }]);

  return AccessRecuperarController;
}();

var AccessRecuperar = exports.AccessRecuperar = {
  template: __webpack_require__(13),
  controller: AccessRecuperarController,
  bindings: {}
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<md-content layout=\"row\" layout-align=\"center center\">\n  <md-card>\n    <md-card-title>\n      <span translate=\"FORGOT_PWD\">\n    </md-card-title>\n\n    <md-card-content >\n      <form name=\"recuperarForm\" layout=\"column\" layout-align=\"center center\">\n      <md-input-container>\n        <label translate=\"USERNAME\">\n\n        </label>\n        <input type=\"text\" name=\"username\" ng-model=\"$ctrl.username\" required>\n        <div ng-messages=\"recuperarForm.username.$error\">\n            <div ng-message=\"required\">\n              <span translate=\"USERNAME_REQUIRED\"></span>\n      </div>\n      </div>\n      </md-input-container>\n      <md-input-container>\n        <label translate=\"EMAIL\">\n        </label>\n        <input type=\"email\" name=\"email\" ng-model=\"$ctrl.email\" required>\n        <div ng-messages=\"recuperarForm.email.$error\">\n          <div ng-message=\"required\">\n            <span translate=\"EMAIL_REQUIRED\"></span>\n          </div>\n        </div>\n      </md-input-container>\n\n      </md-card-content>\n      <md-car-actions layout=\"column\">\n        <md-button class=\"md-primary md-raised\" ng-disabled=\"recuperarForm.$invalid\" aria-label=\"FORGOT_PWD\" ng-click=\"$ctrl.resetPwd()\">\n          <span translate=\"FORGOT_PWD\"></span>\n        </md-button>\n        <md-button class=\"\" ui-sref=\"access.login\" aria-label=\"LOGIN\">\n          <span translate=\"LOGIN\"></span>\n        </md-button>\n      </md-car-actions>\n\n  </md-card>\n</md-content>\n"

/***/ }),
/* 14 */
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
    // url: '',
    component: 'access',
    authenticate: false
  }).state('access.login', {
    url: '/login',
    component: 'accessLogin',
    authenticate: false
  }).state('access.recuperar', {
    url: '/recuperar',
    component: 'accessRecuperar',
    authenticate: false
  });
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AccessService = exports.AccessService = function () {
  function AccessService($log, $http) {
    'ngInject';

    _classCallCheck(this, AccessService);

    this.$log = $log;
    this.$http = $http;
    // this.usuarioActual = "";
    this.url = {
      login: "http://dev.wso2:8280/usuarios/login",
      cambioContrasenia: "http://dev.wso2:8280/usuarios/updatePassword"
    };
  }

  _createClass(AccessService, [{
    key: "login",
    value: function login(username, pwd) {
      var params = { usuario: username, contrasenia: pwd };
      var data = JSON.stringify(params);
      var options = {
        "headers": {
          "content-type": "application/json",
          "Accept": "*/*"
        }
      };
      return this.$http.post(this.url.login, data, options);
    }
  }, {
    key: "logout",
    value: function logout() {
      this.$log.log("logout");
    }
  }, {
    key: "resetPwd",
    value: function resetPwd(username, email) {
      this.$log.log("reset pwd " + username + " " + email);
      return this.$http.get(this.url.cambioContrasenia, { username: username, email: email }).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "isAuthenticated",
    value: function isAuthenticated() {
      if (this.usuarioActual) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return AccessService;
}();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderController = ['$log', function HeaderController($log) {
  _classCallCheck(this, HeaderController);

  //  console.log("AccessMainController componente");
  $log.log("Access componente");
}];
var HeaderComponent = exports.HeaderComponent = {
  template: __webpack_require__(17),
  controller: HeaderController,
  bindings: {}
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"tall\">\n  <img src=\"../assets/img/medipass-logo.png\">\n</md-toolbar>\n"

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<md-sidenav style=\"height: 100%\" ng-class=\"$ctrl.config.class\" md-disable-scroll-target=\"{{$ctrl.config.disableScrollTarget}}\" md-is-open=\"$ctrl.config.isOpen\"\n  md-is-locked-open=\"{{$ctrl.config.isLockedOpen}}\" md-component-id=\"{{$ctrl.config.componentId}}\">\n  <md-toolbar ng-if=\"$ctrl.config.toolbar\" class=\"md-theme-light md-hue-1\">\n    <h1 ng-class=\"$ctrl.config.toolbar.class\" translate=\"{{$ctrl.config.toolbar.text}}\">\n    </h1>\n  </md-toolbar>\n  <md-content layout-padding style=\"height: 100%\">\n     <md-list>\n      <md-list-item ng-repeat-start=\"item in $ctrl.menu\" ng-click=\"$ctrl.action(item)\">\n        <md-icon>{{item.icon}}</md-icon>\n        <span flex translate=\"{{item.name}}\">\n        </span>\n      </md-list-item>\n      <md-content ng-if=\"item.expanded\" style=\"padding: 0px;\">\n        <md-divider></md-divider>\n        <md-list ng-if=\"item.items\" style=\"padding: 0px;\">\n          <md-list-item layout=\"row\" ng-repeat=\"subitem in item.items\" ui-sref=\"{{subitem.state}}\">\n            <span flex=\"15\">\n        </span>\n            <md-icon>{{subitem.icon}}</md-icon>\n             <span flex=\"5\">\n        </span>\n            <span flex translate=\"{{subitem.name}}\">\n        </span>\n            <md-divider ng-hide=\"$last\"></md-divider>\n          </md-list-item>\n        </md-list>\n      </md-content>\n      <md-divider ng-repeat-end ng-hide=\"$last\"></md-divider>\n    </md-list>\n\n\n  </md-content>\n</md-sidenav>\n"

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _angularMaterial = __webpack_require__(1);

var _angularMaterial2 = _interopRequireDefault(_angularMaterial);

var _header = __webpack_require__(20);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('medipass.common', [_angularMaterial2.default, _header2.default]).name;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {HeaderComponent} from './header.component.js';

exports.default = _angular2.default.module('medipass.common.header', [])
// .component('header', HeaderComponent)
.name;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _angularMaterial = __webpack_require__(1);

var _angularMaterial2 = _interopRequireDefault(_angularMaterial);

var _sidemenu = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('sidemenu', [_angularMaterial2.default]).component('sidemenu', _sidemenu.SidemenuComponent).name;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = themeConfig;

themeConfig.$inject = ['$mdThemingProvider'];
function themeConfig($mdThemingProvider) {
  $mdThemingProvider.theme('default').primaryPalette('orange').accentPalette('blue-grey').warnPalette('red');

  //  $mdThemingProvider.theme('default')
  //          .primaryPalette('orange')
  //          .accentPalette('light-green')
  //          .warnPalette('teal');

  //  $mdThemingProvider.definePalette('naranjamedipass', {
  //    '50': 'fef1e8',
  //    '100': 'fdddc6',
  //    '200': 'fbc6a0',
  //    '300': 'f9af79',
  //    '400': 'f89d5d',
  //    '500': 'f78c40',
  //    '600': 'f6843a',
  //    '700': 'f57932',
  //    '800': 'f36f2a',
  //    '900': 'f15c1c',
  //    'A100': 'ffffff',
  //    'A200': 'fff6f2',
  //    'A400': 'ffd0bf',
  //    'A700': 'ffbea6',
  //    'contrastDefaultColor': 'light',
  //    'contrastDarkColors': [
  //      '50',
  //      '100',
  //      '200',
  //      '300',
  //      '400',
  //      '500',
  //      '600',
  //      '700',
  //      '800',
  //      '900',
  //      'A100',
  //      'A200',
  //      'A400',
  //      'A700'
  //    ],
  //    'contrastLightColors': []
  //  });
  $mdThemingProvider.definePalette('mcgpalette0', {
    50: 'eff0f3',
    100: 'd8dae1',
    200: 'bec1cd',
    300: 'a4a8b8',
    400: '9195a9',
    500: '7d829a',
    600: '757a92',
    700: '6a6f88',
    800: '60657e',
    900: '4d526c',
    A100: 'cfd7ff',
    A200: '9cacff',
    A400: '6981ff',
    A700: '506bff',
    contrastDefaultColor: 'light',
    contrastDarkColors: ['50', '100', '200', '300', '400', '500', 'A100', 'A200', 'A400'],
    contrastLightColors: ['600', '700', '800', '900', 'A700']
  });

  $mdThemingProvider.theme('dark').backgroundPalette('mcgpalette0').primaryPalette('orange').accentPalette('blue-grey').warnPalette('red');
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _angularMaterial = __webpack_require__(1);

var _angularMaterial2 = _interopRequireDefault(_angularMaterial);

var _angularMaterialDataTable = __webpack_require__(26);

var _angularMaterialDataTable2 = _interopRequireDefault(_angularMaterialDataTable);

var _table = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('medipass.table', [_angularMaterial2.default, _angularMaterialDataTable2.default]).component('customTable', _table.TableComponent).name;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TableController = function () {
  function TableController($log) {
    'ngInject';
    //  console.log("AccessMainController componente");

    _classCallCheck(this, TableController);

    this.$log = $log;
  }

  _createClass(TableController, [{
    key: '$onInit',
    value: function $onInit() {
      this.newConfig = [];
      this.order();
      this.selected = [];
    }
  }, {
    key: 'order',
    value: function order() {
      var salida = [];
      for (var item in this.objectConfig) {
        var ob = [item, this.objectConfig[item]];
        salida.push(ob);
      }
      salida.sort(function (a, b) {
        return parseInt(a[1].order, 10) > parseInt(b[1].order, 10) ? 1 : -1;
      });
      this.newConfig = salida;
      // this.$log.log(salida);
    }
  }, {
    key: '$onChanges',
    value: function $onChanges(cambios) {
      if (cambios.pagination && cambios.pagination.currentValue) {
        this.pagination = cambios.pagination.currentValue;
      }

      if (cambios.actions && cambios.actions.currentValue) {
        this.actions = angular.copy(cambios.actions.currentValue);
      }
    }
  }]);

  return TableController;
}();

var TableComponent = exports.TableComponent = {
  template: __webpack_require__(28),
  controller: TableController,
  bindings: {
    'config': '<',
    'headers': '<',
    'objectConfig': '<',
    'objects': "=",
    'actions': '<',
    'pagination': '<',
    'onPaginate': '&',
    'onAction': '&',
    'onSelection': '&',
    'onDeselection': '&'
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "<md-table-container>\n  <table print-table=\"$ctrl.objects\" md-table md-row-select=\"$ctrl.config.rowSelect\" multiple=\"{{$ctrl.config.multiple}}\" ng-model=\"$ctrl.selected\"\n    md-progress=\"promise\">\n    <thead md-head>\n      <tr md-row>\n        <th md-column ng-repeat=\"header in $ctrl.headers\" md-numeric=\"header.numeric\" flex>\n          <span translate=\"{{header.name}}\"></span>\n        </th>\n      </tr>\n    </thead>\n    <tbody md-body>\n      <tr md-row ng-repeat=\"object in $ctrl.objects track by $index\" md-select=\"object\" md-select-id=\"name\" md-on-select=\"$ctrl.onSelection({object:object})\"\n        md-on-deselect=\"$ctrl.onDeselection({object:object})\" x-md-auto-select=\"$ctrl.config.autoSelect\" ng-disabled=\"object[$ctrl.config.rowSelectDisable]\"\n        md-auto-select>\n        <td md-cell ng-repeat=\"conf in $ctrl.newConfig\">\n          <!-- {{conf[0]}} -->\n\n          <md-checkbox ng-if=\"(conf[1].type === 'checkbox'&&conf[1].ic !== 'checkbox')\" ng-model=\"object[conf[0]]\" aria-label=\"{{conf[0]}}\"\n            ng-change=\"$ctrl.change(object)\" ng-class=\"conf[1].style\" ng-disabled=\"conf[1].disabled\" class=\"md-primary\">\n          </md-checkbox>\n\n          <md-icon ng-if=\"(conf[1].type === 'checkbox'&&conf[1].ic !== undefined && object[conf[0]] === true)\" style=\"color: #5A97D5\">check</md-icon>\n          <md-icon ng-if=\"(conf[1].type === 'checkbox'&&conf[1].ic !== undefined && object[conf[0]] !== true)\">cancel</md-icon>\n\n          <md-input-container ng-if=\"(conf[1].type === 'input')\" ng-model=\"object[conf[0]]\" aria-label=\"{{conf[0]}}\" ng-class=\"conf[1].style\">\n            <label></label>\n            <input ng-model=\"object[conf[0]]\" ng-change=\"$ctrl.onAction({name: conf[1].action, object: object})\" ng-disabled=\"conf[1].disabled\">\n          </md-input-container>\n\n          <md-input-container ng-if=\"(conf[1].type === 'inputNumber')\" ng-model=\"object[conf[0]]\" aria-label=\"{{conf[0]}}\" ng-class=\"conf[1].style\">\n            <label translate=\"{{conf[1].text}}\"></label>\n            <input ng-model=\"object[conf[0]]\"\n            ng-change=\"$ctrl.onAction({name: conf[1].action, object: object})\"\n            type=\"number\"\n             ng-disabled=\"conf[1].disabled || object[conf[1].options.depends]\"\n             min=\"{{conf[1].options.min}}\"\n             max=\"{{conf[1].options.max}}\">\n          </md-input-container>\n\n          <span ng-if=\"conf[1].type === 'text'\" flex=\"{{conf[1].flex}}\" ng-class=\"conf[1].style\" ng-disabled=\"conf[1].disabled\" translate=\"{{object[conf[0]]}}\">\n          </span>\n\n          <span ng-if=\"conf[1].type === 'phone'\" flex=\"{{conf[1].flex}}\" ng-class=\"conf[1].style\" ng-disabled=\"conf[1].disabled\">\n          {{object[conf[0]]}}\n          </span>\n\n          <span ng-if=\"conf[1].type === 'number'\" flex=\"{{conf[1].flex}}\" ng-class=\"conf[1].style\" ng-disabled=\"conf[1].disabled\">\n          <span ng-if=\"conf[1].currency === '$'\">{{conf[1].currency}} {{object[conf[0]] | currency:\"\":0}}</span>\n          </span>\n          <span ng-if=\"(conf[1].type === 'child')\" flex=\"{{conf[1].flex}}\" ng-class=\"conf[1].style\" ng-disabled=\"conf[1].disabled\">\n         {{object[conf[0]][conf[1].options.child]}}\n      </span>\n          <img ng-if=\"(conf[1].type === 'image')\" ng-src=\"{{object[conf[0]]}}\" ng-class=\"conf[1].style\" alt=\"{{conf[1].alt}}\" ng-click=\"conf[1].action(object)\"\n          />\n          <span ng-if=\"(conf[1].type === 'date')\" flex=\"{{conf[1].flex}}\" ng-class=\"conf[1].style\" ng-disabled=\"conf[1].disabled\">\n         {{object[conf[0]]|date: conf[1].format}}\n      </span>\n          <md-switch ng-if=\"conf[1].type === 'switch' && typeof(conf[1].trueValue) == 'undefined' && typeof(conf[1].falseValue) == 'undefined'\"\n            ng-model=\"object[conf[0]]\" ng-change=\"$ctrl.onAction({name: conf[1].action, object: object})\" aria-label=\"Switch 1\"\n            ng-disabled=\"conf[1].disabled\">\n\n          </md-switch>\n          <md-switch ng-if=\"conf[1].type === 'switch' && typeof(conf[1].trueValue) != 'undefined' && typeof(conf[1].falseValue) != 'undefined'\"\n            ng-model=\"object[conf[0]]\" ng-true-value=\"{{conf[1].trueValue}}\" ng-false-value=\"{{conf[1].falseValue}}\" ng-change=\"$ctrl.onAction({name: conf[1].action, object: object})\"\n            aria-label=\"Switch 1\" ng-disabled=\"conf[1].disabled\">\n\n          </md-switch>\n        </td>\n        <td print-remove md-cell ng-if=\"$ctrl.actions.length > 0\" ng-repeat=\"action in $ctrl.actions\" ng-class=\"action.cellStyle\">\n          <md-switch ng-if=\"(action.type === 'switch')\" ng-change=\"$ctrl.onAction({name: action.name, object: object})\" aria-label=\"Switch 1\"\n            ng-model=\"object[action.value]\">\n            {{action.text|translate}}\n            <md-tooltip ng-if=\"action.tooltip\" ng-class=\"action.tooltip.style\" md-z-index=\"action.tooltip.zIndex\" md-delay=\"action.tooltip.delay\"\n              md-autohide=\"action.tooltip.autohide\" md-direction=\"{{action.tooltip.direction}}\">\n              {{action.tooltip.text | translate}}\n            </md-tooltip>\n          </md-switch>\n\n          <md-button ng-if=\"(action.type === 'button')\" ng-class=\"action.style\" ng-click=\"$ctrl.onAction({name: action.name, object: object})\"\n            aria-label=\"{{action.name}}\">\n            <md-icon ng-if=\"action.icon\" ng-class=\"action.icon.style\">\n              {{action.icon.name}}\n            </md-icon>\n            <md-tooltip ng-if=\"action.tooltip\" ng-class=\"action.tooltip.style\" md-z-index=\"action.tooltip.zIndex\" md-delay=\"action.tooltip.delay\"\n              md-autohide=\"action.tooltip.autohide\" md-direction=\"{{action.tooltip.direction}}\">\n              {{action.tooltip.text | translate}}\n            </md-tooltip>\n            <span ng-if=\"action.text\">\n              {{action.text|translate}}\n            </span>\n          </md-button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</md-table-container>\n\n<md-table-pagination print-remove ng-if=\"$ctrl.pagination\" ng-class=\"$ctrl.pagination.style\" md-limit=\"$ctrl.pagination.limit\"\n  md-page=\"$ctrl.pagination.page\" md-total=\"{{$ctrl.pagination.total}}\" md-page-select=\"$ctrl.pagination.pageSelect\" md-boundary-links=\"$ctrl.pagination.boundaryLinks\"\n  md-on-paginate=\"$ctrl.onPaginate({page: $ctrl.pagination.page, limit: $ctrl.pagination.limit, total: total})\" md-label=\"{{$ctrl.pagination.label}}\">\n</md-table-pagination>\n"

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _financiador = __webpack_require__(30);

var _financiador2 = _interopRequireDefault(_financiador);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('financiador', []).service("FinanciadorService", _financiador2.default).name;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FinanciadorService = function () {
  function FinanciadorService(Url, $http) {
    'ngInject';

    _classCallCheck(this, FinanciadorService);

    this.$http = $http;
    this.url = Url.urlBase + "/financiador";
  }

  _createClass(FinanciadorService, [{
    key: "getAll",
    value: function getAll() {
      return this.$http.get(this.url);
    }
  }]);

  return FinanciadorService;
}();

exports.default = FinanciadorService;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _prestador = __webpack_require__(32);

var _prestador2 = _interopRequireDefault(_prestador);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('prestador', []).service("PrestadorService", _prestador2.default).name;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PrestadorService = function () {
  function PrestadorService(Url, $http) {
    'ngInject';

    _classCallCheck(this, PrestadorService);

    this.$http = $http;
    this.url = Url.urlBase + "/prestador";
  }

  _createClass(PrestadorService, [{
    key: "getAll",
    value: function getAll() {
      return this.$http.get(this.url);
    }
  }]);

  return PrestadorService;
}();

exports.default = PrestadorService;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateConfig = translateConfig;
function translateConfig($translateProvider) {
  var translations = {
    USUARIOS: 'Usuarios',
    ADMINISTRAR: 'Administrar',
    LOTES: 'Lotes',
    GENERAR: 'Generar',
    VENTAS: 'Ventas',
    DEVOLVER_BONO: 'Devolución de bono',
    CAJAS: 'Cajas',
    USERNAME: 'Cédula',
    PASSWORD: 'Contraseña',
    LOGIN: 'Iniciar sesión',
    FORGOT_PWD: "Recuperar contraseña",
    PASSWORD_REQUIRED: "La contraseña es requerida",
    USERNAME_REQUIRED: "La cédula es requerida",
    EMAIL_REQUIRED: "El correo electronico es requerido",
    EMAIL: "Correo electrónico"
  };
  $translateProvider.translations('es-cl', translations).preferredLanguage('es-cl');
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=medipass-base.js.map