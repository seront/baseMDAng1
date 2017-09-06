(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("angular-material"), require("angular-translate"), require("angular-material-data-table"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "angular-material", "angular-translate", "angular-material-data-table"], factory);
	else if(typeof exports === 'object')
		exports["medipass-base"] = factory(require("angular"), require("angular-material"), require("angular-translate"), require("angular-material-data-table"));
	else
		root["medipass-base"] = factory(root["angular"], root["angular-material"], root["angular-translate"], root["angular-material-data-table"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_18__) {
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
  function SideMenuController($state, $mdSidenav, $log) {
    'ngInject';

    _classCallCheck(this, SideMenuController);

    this.go = $state.go;
    this.$mdSidenav = $mdSidenav;
    this.$log = $log;
  }

  _createClass(SideMenuController, [{
    key: '$onInit',
    value: function $onInit() {}
  }, {
    key: 'toggleExpand',
    value: function toggleExpand(item) {

      // item.expanded = !item.expanded;

      for (var i = 0; i < this.menu.length; i++) {
        if (angular.equals(this.menu[i], item) && item.items) {
          this.menu[i].expanded = !item.expanded;
          // console.log("Es el mismo", this.menu[i].name, this.menu[i].expanded);
        } else if (item.items && !angular.equals(this.menu[i], item)) {
          this.menu[i].expanded = false;
          // console.log("Es deferente", this.menu[i].name, this.menu[i].expanded);
        }
      }
    }
  }, {
    key: 'action',
    value: function action(item) {
      if (item.items) {
        this.toggleExpand(item);
      } else {
        this.toggleSideMenu();
        this.go(item.state);
      }
    }
  }, {
    key: 'toggleSideMenu',
    value: function toggleSideMenu() {
      var _this = this;

      if (this.config.componentId) {
        this.$mdSidenav(this.config.componentId).toggle().then(function (response) {
          _this.$log.log('toggled');
        });
      } else {
        this.$log.error("the sidemenu requires an 'componentId'");
      }
    }
  }, {
    key: '$onChanges',
    value: function $onChanges(cambios) {
      if (cambios.menu) {
        this.menu = angular.copy(cambios.menu.currentValue);
      }
      if (cambios.config) {
        this.config = angular.copy(cambios.config.currentValue);
      }
      if (cambios.toolbar) {

        this.toolbar = angular.copy(cambios.toolbar.currentValue);
      }
    }
  }]);

  return SideMenuController;
}();

var SidemenuComponent = exports.SidemenuComponent = {
  template: __webpack_require__(7),
  controller: SideMenuController,
  bindings: {
    menu: '<',
    config: '<',
    toolbar: '<',
    onAction: "&"
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

var _common = __webpack_require__(8);

Object.defineProperty(exports, 'CommonsModule', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_common).default;
  }
});

var _sidemenu = __webpack_require__(13);

Object.defineProperty(exports, 'SideMenu', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sidemenu).default;
  }
});

__webpack_require__(14);

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _angularMaterial = __webpack_require__(1);

var _angularMaterial2 = _interopRequireDefault(_angularMaterial);

var _angularTranslate = __webpack_require__(15);

var _angularTranslate2 = _interopRequireDefault(_angularTranslate);

var _components2 = _interopRequireDefault(_components);

var _common2 = _interopRequireDefault(_common);

var _medipassTheme = __webpack_require__(16);

var _medipassTheme2 = _interopRequireDefault(_medipassTheme);

var _table = __webpack_require__(17);

var _table2 = _interopRequireDefault(_table);

var _financiador = __webpack_require__(21);

var _financiador2 = _interopRequireDefault(_financiador);

var _prestador = __webpack_require__(23);

var _prestador2 = _interopRequireDefault(_prestador);

var _medipassTranslate = __webpack_require__(25);

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

var _header = __webpack_require__(5);

var _sidemenu = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('medipass.components', []).component('header', _header.HeaderComponent).component('sidemenu', _sidemenu.SidemenuComponent).name;

/***/ }),
/* 5 */
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
  template: __webpack_require__(6),
  controller: HeaderController,
  bindings: {}
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"tall\" md-whiteframe=\"4\">\n  <img src=\"../assets/img/medipass-logo.png\">\n</md-toolbar>\n"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<md-sidenav ng-class=\"$ctrl.config.class\"\n  md-whiteframe=\"4\"\nmd-disable-scroll-target=\"{{$ctrl.config.disableScrollTarget}}\"\nmd-is-open=\"$ctrl.config.isOpen\"\n  md-is-locked-open=\"{{$ctrl.config.isLockedOpen}}\"\n  md-component-id=\"{{$ctrl.config.componentId}}\">\n  <md-toolbar ng-if=\"$ctrl.toolbar\" class=\"md-theme-light md-hue-1\" layout=\"row\" layout-align=\"center center\" layout-padding>\n    <!-- <span ng-class=\"$ctrl.toolbar.class\" translate=\"{{$ctrl.toolbar.text}}\">\n    </span> -->\n    <span ng-class=\"$ctrl.toolbar.class\">\n      {{$ctrl.toolbar.text}}\n    </span>\n\n    <md-menu ng-if=\"$ctrl.toolbar.menu\">\n      <md-button aria-label=\"config-menu\" class=\"md-icon-button\" ng-click=\"$mdMenu.open()\">\n        <md-icon md-menu-origin>{{$ctrl.toolbar.menu.icon}}</md-icon>\n      </md-button>\n      <md-menu-content width=\"4\" ng-mouseleave=\"$mdMenu.close()\">\n        <md-menu-item ng-repeat=\"option in $ctrl.toolbar.menu.options track by $index\">\n          <md-button ng-class=\"$ctrl.toolbar.menu.style\" ng-click=\"$ctrl.onAction({name: $ctrl.toolbar.menu.action, object: option})\">\n            {{option[$ctrl.toolbar.menu.display]}}\n          </md-button>\n        </md-menu-item>\n    </md-menu>\n\n  </md-toolbar>\n\n    <md-input-container ng-if=\"$ctrl.config.mainSelect\" flex>\n      <label translate=\"{{$ctrl.config.mainSelect.label}}\"></label>\n    <md-select ng-model=\"$ctrl.config.mainSelect.current\" ng-change=\"$ctrl.onAction({name: $ctrl.config.mainSelect.action, object: $ctrl.config.mainSelect.current})\">\n      <md-option ng-repeat=\"option in $ctrl.config.mainSelect.options\" ng-value=\"user\">{{option[$ctrl.config.mainSelect.display]}}</md-option>\n    </md-select>\n    </md-input-container>\n\n  <md-content layout-padding ng-class=\"$ctrl.config.contentStyle\">\n     <md-list>\n      <md-list-item ng-repeat-start=\"item in $ctrl.menu\" ng-click=\"$ctrl.action(item)\">\n        <md-icon>{{item.icon}}</md-icon>\n        <span flex translate=\"{{item.name}}\">\n        </span>\n      </md-list-item>\n      <md-content ng-if=\"item.expanded\" style=\"padding: 0px;\">\n        <md-divider></md-divider>\n        <md-list ng-if=\"item.items\" style=\"padding: 0px;\">\n          <!-- <md-list-item layout=\"row\" ng-repeat=\"subitem in item.items\" ui-sref=\"{{subitem.state}}\"> -->\n          <md-list-item layout=\"row\" ng-repeat=\"subitem in item.items\" ng-click=\"$ctrl.action(subitem)\">\n            <span flex=\"15\">\n        </span>\n            <md-icon>{{subitem.icon}}</md-icon>\n             <span flex=\"5\">\n        </span>\n            <span flex translate=\"{{subitem.name}}\">\n        </span>\n            <md-divider ng-hide=\"$last\"></md-divider>\n          </md-list-item>\n        </md-list>\n      </md-content>\n      <md-divider ng-repeat-end ng-hide=\"$last\"></md-divider>\n    </md-list>\n\n\n  </md-content>\n</md-sidenav>\n"

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _angularMaterial = __webpack_require__(1);

var _angularMaterial2 = _interopRequireDefault(_angularMaterial);

__webpack_require__(9);

var _miles = __webpack_require__(10);

var _miles2 = _interopRequireDefault(_miles);

var _capitalize = __webpack_require__(11);

var _capitalize2 = _interopRequireDefault(_capitalize);

var _header = __webpack_require__(12);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('medipass.common', [_angularMaterial2.default, _header2.default, 'platanus.rut']).filter("miles", _miles2.default).filter("capitalize", _capitalize2.default).name;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Chilean RUT module for angular
 * @version v1.0.2 - 2016-12-16
 * @link https://github.com/angular-platanus/rut
 * @author Jaime Bunzli <jpbunzli@gmail.com>, Ignacio Baixas <ignacio@platan.us>, René Morales <rene.morales.sanchez@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

(function (angular, undefined) {
  'use strict';

  function cleanRut(_value) {
    var out = "";
    if (typeof _value === 'string') {
      out = _value.replace(/[^0-9kK]+/g, '').toUpperCase();
    } else if (typeof _value === 'number') {
      out = _value + '';
    }
    return out;
  }

  function formatRut(_value, _default) {
    _value = cleanRut(_value);
    if (!_value) return _default;
    if (_value.length <= 1) return _value;

    var result = _value.slice(-4, -1) + '-' + _value.substr(_value.length - 1);

    for (var i = 4; i < _value.length; i += 3) {
      result = _value.slice(-3 - i, -i) + '.' + result;
    }return result;
  }

  function validateRut(_value) {
    if (typeof _value !== 'string') return false;
    var t = parseInt(_value.slice(0, -1), 10),
        m = 0,
        s = 1;
    while (t > 0) {
      s = (s + t % 10 * (9 - m++ % 6)) % 11;
      t = Math.floor(t / 10);
    }
    var v = s > 0 ? s - 1 + '' : 'K';
    return v === _value.slice(-1);
  }

  function addValidatorToNgModel(ngModel) {
    var validate = function validate(value) {
      var valid = value.length > 0 ? validateRut(value) : true;
      ngModel.$setValidity('rut', valid);
      return valid;
    };

    var validateAndFilter = function validateAndFilter(_value) {
      _value = cleanRut(_value);
      return validate(_value) ? _value : null;
    };

    var validateAndFormat = function validateAndFormat(_value) {
      _value = cleanRut(_value);
      validate(_value);
      return formatRut(_value);
    };

    ngModel.$parsers.unshift(validateAndFilter);
    ngModel.$formatters.unshift(validateAndFormat);
  }

  function formatRutOnWatch($scope, ngModel) {
    $scope.$watch(function () {
      return ngModel.$viewValue;
    }, function () {
      ngModel.$setViewValue(formatRut(ngModel.$viewValue));
      ngModel.$render();
    });
  }

  function formatRutOnBlur($element, ngModel) {
    $element.on('blur', function () {
      ngModel.$setViewValue(formatRut(ngModel.$viewValue));
      ngModel.$render();
    });
  }

  angular.module('platanus.rut', []).directive('ngRut', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function link($scope, $element, $attrs, ngModel) {
        if (typeof $attrs.rutFormat === 'undefined') {
          $attrs.rutFormat = 'live';
        }

        addValidatorToNgModel(ngModel);

        switch ($attrs.rutFormat) {
          case 'live':
            formatRutOnWatch($scope, ngModel);
            break;
          case 'blur':
            formatRutOnBlur($element, ngModel);
            break;
        }
      }
    };
  }).filter('rut', function () {
    return formatRut;
  }).constant('RutHelper', {
    format: formatRut,
    clean: cleanRut,
    validate: function validate(value) {
      return validateRut(cleanRut(value));
    }
  });
})(angular);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return function (input, simbol) {
    var fv = input;
    var out = "";
    if (typeof input === 'number') {
      fv = input.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      out = simbol ? simbol + fv : fv;
      return out;
    } else if (typeof input === 'string') {
      fv = input.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      out = simbol ? simbol + fv : fv;
      return out;
    } else {
      return fv;
    }
  };
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return function (input, all) {
    var reg = all ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
    return input ? input.replace(reg, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }) : '';
  };
};

/***/ }),
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _angularMaterial = __webpack_require__(1);

var _angularMaterial2 = _interopRequireDefault(_angularMaterial);

var _angularMaterialDataTable = __webpack_require__(18);

var _angularMaterialDataTable2 = _interopRequireDefault(_angularMaterialDataTable);

var _table = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('medipass.table', [_angularMaterial2.default, _angularMaterialDataTable2.default]).component('customTable', _table.TableComponent).name;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TableController = function () {
  function TableController($filter) {
    'ngInject';

    _classCallCheck(this, TableController);

    this.$filter = $filter;
  }

  _createClass(TableController, [{
    key: '$onInit',
    value: function $onInit() {
      this.newConfig = [];
      this.order();
      this.selected = [];
      if (this.pagination) {
        this.prevLimit = this.pagination.limit;
        this.prevPage = this.pagination.page;
      }
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
    }
  }, {
    key: 'paginar',
    value: function paginar() {
      if (this.prevLimit !== this.pagination.limit || this.prevPage !== this.pagination.page) {
        this.prevLimit = this.pagination.limit;
        this.prevPage = this.pagination.page;
        this.onPaginate({ page: this.pagination.page, limit: this.pagination.limit });
      }
    }
  }, {
    key: '$onChanges',
    value: function $onChanges(cambios) {
      if (cambios.pagination && cambios.pagination.currentValue) {
        this.pagination = cambios.pagination.currentValue;
      }

      if (cambios.actions && cambios.actions.currentValue) {
        if (!angular.isUndefined(cambios.actions.currentValue[0]) && !angular.isUndefined(cambios.actions.currentValue[0].order)) {
          var salida = [];
          salida.sort(function (a, b) {
            return parseInt(a[1].order, 10) > parseInt(b[1].order, 10) ? 1 : -1;
          });
        } else {
          this.actions = angular.copy(cambios.actions.currentValue);
        }
      }
    }
  }, {
    key: 'onSelect',
    value: function onSelect(object) {
      this.onSelection({ object: object });
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(model, filter, option) {
      if (filter) {
        return this.$filter(filter)(model, option);
      } else {
        return model;
      }
    }
  }]);

  return TableController;
}();

var TableComponent = exports.TableComponent = {
  template: __webpack_require__(20),
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
/* 20 */
/***/ (function(module, exports) {

module.exports = "<md-table-container>\n  <table print-table=\"$ctrl.objects\" md-table md-row-select=\"$ctrl.config.rowSelect\" multiple=\"{{$ctrl.config.multiple}}\" ng-model=\"$ctrl.selected\"\n    md-progress=\"promise\">\n    <thead md-head>\n      <tr md-row>\n        <th md-column ng-repeat=\"header in $ctrl.headers\" md-numeric=\"header.numeric\" flex class=\"table-header\">\n          <p translate=\"{{header.name}}\"></p>\n          <md-tooltip ng-if=\"header.tooltip\" ng-class=\"header.tooltip.style\" md-z-index=\"header.tooltip.zIndex\" md-delay=\"header.tooltip.delay\"\n              md-autohide=\"header.tooltip.autohide\">\n              {{header.tooltip.text | translate}}\n            </md-tooltip>\n        </th>\n      </tr>\n    </thead>\n    <tbody md-body>\n      <tr md-row ng-repeat=\"object in $ctrl.objects track by $index\" md-select=\"object\" md-select-id=\"name\" md-on-select=\"$ctrl.onSelection(object)\"\n        md-on-deselect=\"$ctrl.onDeselection(object)\" x-md-auto-select=\"$ctrl.config.autoSelect\" ng-disabled=\"object[$ctrl.config.rowSelectDisable]\"\n        md-auto-select>\n        <td md-cell ng-repeat=\"conf in $ctrl.newConfig\" ng-class=\"conf[1].cellStyle\">\n          <!-- {{conf[0]}} -->\n\n          <md-checkbox ng-if=\"(conf[1].type === 'checkbox'&&conf[1].ic !== 'checkbox')\" ng-model=\"object[conf[0]]\" aria-label=\"{{conf[0]}}\"\n            ng-change=\"$ctrl.change(object)\" ng-class=\"conf[1].style\" ng-disabled=\"conf[1].disabled\" class=\"md-primary\">\n          </md-checkbox>\n\n          <md-icon ng-if=\"(conf[1].type === 'checkbox'&&conf[1].ic !== undefined && object[conf[0]] === true)\" style=\"color: #5A97D5\">check</md-icon>\n          <md-icon ng-if=\"(conf[1].type === 'checkbox'&&conf[1].ic !== undefined && object[conf[0]] !== true)\">cancel</md-icon>\n\n          <md-input-container ng-if=\"(conf[1].type === 'input')\" ng-model=\"object[conf[0]]\" aria-label=\"{{conf[0]}}\" ng-class=\"conf[1].style\">\n            <label></label>\n            <input ng-model=\"object[conf[0]]\" ng-change=\"$ctrl.onAction({name: conf[1].action, object: object})\" ng-disabled=\"conf[1].disabled\">\n          </md-input-container>\n\n          <md-input-container ng-if=\"(conf[1].type === 'inputNumber')\" ng-model=\"object[conf[0]]\" aria-label=\"{{conf[0]}}\" ng-class=\"conf[1].style\">\n            <label translate=\"{{conf[1].text}}\"></label>\n            <input ng-model=\"object[conf[0]]\"\n            ng-change=\"$ctrl.onAction({name: conf[1].action, object: object})\"\n            type=\"number\"\n             ng-disabled=\"conf[1].disabled || object[conf[1].options.depends]\"\n             min=\"{{conf[1].options.min}}\"\n             max=\"{{conf[1].options.max}}\">\n          </md-input-container>\n\n          <span ng-if=\"(conf[1].type === 'text')\" flex=\"{{conf[1].flex}}\" ng-class=\"conf[1].style\" ng-disabled=\"conf[1].disabled\" translate=\"{{object[conf[0]]}}\">\n          </span>\n\n          <md-icon ng-if=\"(conf[1].type === 'icon')\" ng-class=\"conf[1].style\">\n            {{object[conf[0]]}}\n          </md-icon>\n\n          <div ng-if=\"(conf[1].type === 'icon-set')\">\n            <div ng-repeat=\"option in conf[1].options\">\n              <md-icon ng-if=\"object[conf[0]] == option.value\" ng-class=\"option.style\" >\n            {{option.icon}}\n            </md-icon>\n            </div>\n          </div>\n          <div ng-if=\"(conf[1].type === 'array-text')\">\n              <span ng-repeat=\"value in object[conf[0]]\">\n                <span>\n                  {{value|translate}}\n                  <span ng-if=\"!$last\"></span>\n                </span>\n              </span>\n          </div>\n\n          <div ng-if=\"(conf[1].type === 'array-object')\">\n              <span ng-repeat=\"value in object[conf[0]]\">\n                <span>\n                  {{value[conf[1].value]}}\n                </span>\n              </span>\n          </div>\n\n\n          <span ng-if=\"(conf[1].type === 'text-filter')\" flex=\"{{conf[1].flex}}\" ng-class=\"conf[1].style\">\n              {{$ctrl.applyFilter(object[conf[0]], conf[1].filter, conf[1].option)}}\n          </span>\n\n          <span ng-if=\"conf[1].type === 'phone'\" flex=\"{{conf[1].flex}}\" ng-class=\"conf[1].style\" ng-disabled=\"conf[1].disabled\">\n          {{object[conf[0]]}}\n          </span>\n\n\n          <span ng-if=\"conf[1].type === 'number'\" flex=\"{{conf[1].flex}}\" ng-class=\"conf[1].style\" ng-disabled=\"conf[1].disabled\">\n            {{$ctrl.applyFilter(object[conf[0]], conf[1].filter, conf[1].simbol)}}\n          </span>\n          <span ng-if=\"conf[1].type === 'text-format'\" flex=\"{{conf[1].flex}}\" ng-class=\"conf[1].style\" ng-disabled=\"conf[1].disabled\">\n            {{$ctrl.applyFilter(object[conf[0]], conf[1].filter, conf[1].simbol)}}\n          </span>\n          <span ng-if=\"conf[1].type === 'currency'\">\n          {{$ctrl.applyFilterCurrency(object[conf[0]], conf[1].symbol, conf[1].fractionSize)}}\n          </span>\n          <span ng-if=\"(conf[1].type === 'child')\" flex=\"{{conf[1].flex}}\" ng-class=\"conf[1].style\" ng-disabled=\"conf[1].disabled\">\n         {{object[conf[0]][conf[1].options.child]}}\n      </span>\n          <span ng-if=\"(conf[1].type === 'copy')\" flex=\"{{conf[1].flex}}\" ng-class=\"conf[1].style\" ng-disabled=\"conf[1].disabled\">\n         {{object[conf[1].options.child]}}\n      </span>\n          <span ng-if=\"(conf[1].type === 'copy-filter')\" flex=\"{{conf[1].flex}}\" ng-class=\"conf[1].style\" ng-disabled=\"conf[1].disabled\">\n              {{$ctrl.applyFilter(object[conf[1].options.child], conf[1].filter, conf[1].simbol)}}\n      </span>\n          <img ng-if=\"(conf[1].type === 'image')\" ng-src=\"{{object[conf[0]]}}\" ng-class=\"conf[1].style\" alt=\"{{conf[1].alt}}\" ng-click=\"conf[1].action(object)\"\n          />\n          <span ng-if=\"(conf[1].type === 'date')\" flex=\"{{conf[1].flex}}\" ng-class=\"conf[1].style\" ng-disabled=\"conf[1].disabled\">\n         {{object[conf[0]]|date: conf[1].format}}\n      </span>\n        <div ng-if=\"conf[1].type === 'switch'\" layout=\"row\">\n        <span  flex></span>\n          <md-switch ng-if=\"conf[1].type === 'switch' && typeof(conf[1].trueValue) == 'undefined' && typeof(conf[1].falseValue) == 'undefined'\"\n            ng-model=\"object[conf[0]]\" ng-change=\"$ctrl.onAction({name: conf[1].action, object: object})\" aria-label=\"Switch 1\"\n            ng-disabled=\"conf[1].disabled\">\n\n          </md-switch>\n          <md-switch ng-if=\"conf[1].type === 'switch' && typeof(conf[1].trueValue) != 'undefined' && typeof(conf[1].falseValue) != 'undefined'\"\n            ng-model=\"object[conf[0]]\" ng-true-value=\"{{conf[1].trueValue}}\" ng-false-value=\"{{conf[1].falseValue}}\" ng-change=\"$ctrl.onAction({name: conf[1].action, object: object})\"\n            aria-label=\"Switch 1\" ng-disabled=\"conf[1].disabled\">\n\n          </md-switch>\n          <span flex></span>\n        </div>\n        </td>\n        <td md-cell ng-if=\"$ctrl.actions && $ctrl.actions.length > 0\" ng-repeat=\"action in $ctrl.actions\" ng-class=\"action.cellStyle\">\n          <!-- <div ng-if=\"(action.type === 'switch')\" layout=\"row\" ng-hide=\"object[action.hide.property] === action.hide.value\"> -->\n          <div ng-if=\"(action.type === 'switch')\" layout=\"row\" ng-hide=\"(action.hide && (object[action.hide.property] === action.hide.value))\">\n            <span  flex></span>\n          <md-switch ng-change=\"$ctrl.onAction({name: action.name, object: object})\" aria-label=\"Switch 1\"\n            ng-model=\"object[action.value]\" translate=\"{{action.text|translate}}\">\n            <md-tooltip ng-if=\"action.tooltip\" ng-class=\"action.tooltip.style\" md-z-index=\"action.tooltip.zIndex\" md-delay=\"action.tooltip.delay\"\n              md-autohide=\"action.tooltip.autohide\" md-direction=\"{{action.tooltip.direction}}\">\n              {{action.tooltip.text | translate}}\n            </md-tooltip>\n          </md-switch>\n           <span flex></span>\n          </div>\n\n\n          <md-button ng-if=\"(action.type === 'button')\" ng-class=\"action.style\" ng-click=\"$ctrl.onAction({name: action.name, object: object})\"\n            aria-label=\"{{action.name}}\" ng-hide=\"(action.hide && (object[action.hide.property] === action.hide.value))\">\n            <md-icon ng-if=\"action.icon\" ng-class=\"action.icon.style\">\n              {{action.icon.name}}\n            </md-icon>\n            <md-tooltip ng-if=\"action.tooltip\" ng-class=\"action.tooltip.style\" md-z-index=\"action.tooltip.zIndex\" md-delay=\"action.tooltip.delay\"\n              md-autohide=\"action.tooltip.autohide\" md-direction=\"{{action.tooltip.direction}}\">\n              {{action.tooltip.text | translate}}\n            </md-tooltip>\n            <span ng-if=\"action.text\">\n              {{action.text|translate}}\n            </span>\n          </md-button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</md-table-container>\n\n<md-table-pagination print-remove ng-if=\"$ctrl.pagination\" ng-class=\"$ctrl.pagination.style\" md-limit=\"$ctrl.pagination.limit\"\nmd-limit-options=\"$ctrl.pagination.limitOptions\"\n  md-page=\"$ctrl.pagination.page\" md-total=\"{{$ctrl.pagination.total}}\" md-page-select=\"$ctrl.pagination.pageSelect\" md-boundary-links=\"$ctrl.pagination.boundaryLinks\"\n  md-on-paginate=\"$ctrl.paginar(page, limit)\" md-label=\"{{$ctrl.pagination.label}}\" md-foot-label=\"$ctrl.pagination.footLabel\">\n</md-table-pagination>\n"

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _financiador = __webpack_require__(22);

var _financiador2 = _interopRequireDefault(_financiador);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('financiador', []).service("FinanciadorService", _financiador2.default).name;

/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _prestador = __webpack_require__(24);

var _prestador2 = _interopRequireDefault(_prestador);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('prestador', []).service("PrestadorService", _prestador2.default).name;

/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateConfig = translateConfig;
function translateConfig($translateProvider) {
  var translations = {};
  $translateProvider.translations('es-cl', translations).preferredLanguage('es-cl');
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=medipass-base.js.map