import angular from 'angular';
import material from 'angular-material'

import {Header} from './header/header.module.js';

export default angular.module('medipass.common', [material])
  .component('header', Header)
  .config(routing).name;
