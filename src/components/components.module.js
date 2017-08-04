import angular from 'angular';

import {HeaderComponent} from './header/header.component'
import {SidemenuComponent} from './sidemenu/sidemenu.component'

export default angular.module('medipass.components', [])
  .component('header', HeaderComponent)
  .component('sidemenu', SidemenuComponent)
  .name;

