import angular from 'angular';
// import uirouter from 'angular-ui-router';
// import material from 'angular-material'
// import routing from './access.routes';

import {AccessRecuperar} from './access-recuperar.component.js';

export default angular.module('medipass.access.recuperar', [])
  .component('accessRecuperar', AccessRecuperar)
  .name;
