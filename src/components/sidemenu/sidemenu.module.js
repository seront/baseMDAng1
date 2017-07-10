import angular from 'angular';
import uirouter from 'angular-ui-router';
import material from 'angular-material'
import routing from './access.routes';

import {SidemenuComponent} from './accessMain.js';
import {AccessLogin} from './access-login/access-login.module.js';
import {AccessRecuperar} from './accessRecuperar.js';

export default angular.module('sidemenu', [material])
  .component('sidemenu', SidemenuComponent)
  .config(routing).name;

