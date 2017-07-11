import angular from 'angular';
import uirouter from 'angular-ui-router';
// import material from 'angular-material'

// import routes from './access.login.routes';

import { AccessLogin } from './access-login.component.js';

export default angular.module('medipass.access.login', [uirouter])
  .component('accessLogin', AccessLogin)
  // .config(function($stateProvider){
  //   $stateProvider
  //   .state('access.login', {
  //     url: 'login',
  //     component: 'accessLogin'
  //   })

  // .config(routes)
  .name;
