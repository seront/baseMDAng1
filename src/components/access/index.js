import angular from 'angular';
import uirouter from 'angular-ui-router';
import material from 'angular-material'
import routing from './access.routes';

import {AccessMain} from './accessMain.js';
import {AccessLogin} from './accessLogin.js';
import {AccessRecuperar} from './accessRecuperar.js';

export default angular.module('app.access', [uirouter, material])
  .component('accessMain', AccessMain)
  .component('accessLogin', AccessLogin)
  .component('accessRecuperar', AccessRecuperar)
  .config(routing).name;

