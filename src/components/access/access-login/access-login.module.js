import angular from 'angular';
// import uirouter from 'angular-ui-router';
// import material from 'angular-material'
// import routing from './access.routes';

import {AccessLogin} from './access-login.component.js';

export default angular.module('medipass.access.login', [])
  .component('accessLogin', AccessLogin)
  .name;
