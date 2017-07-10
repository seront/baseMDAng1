import angular from 'angular';

import {HeaderComponent} from './header.component.js';

export default angular.module('medipass.access.login', [])
  .component('header', HeaderComponent)
  .name;
