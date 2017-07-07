import angular from 'angular';



import {SideMenu} from './sideMenu.js';

export default angular.module('app.components', [])
  .component('sideMenu', SideMenu).name;

