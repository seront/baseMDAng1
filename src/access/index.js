import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './access.routes';

import {AccessMain} from './accessMain.js';
import {AccessLogin} from './accessLogin.js';
import {AccessRecuperar} from './accessRecuperar.js';

export default angular.module('app.access', [uirouter])
  .component('accessMain', AccessMain)
  .component('accessLogin', AccessLogin)
  .component('accessRecuperar', AccessRecuperar)
  .config(routing).name;

// let AccessModule = angular.module('app.access', [uirouter])
//   .component('accessMain', AccessMain)
//   .component('accessLogin', AccessLogin)
//   .component('accessRecuperar', AccessRecuperar)
//   .config(routing).name;

// export {AccessModule};
