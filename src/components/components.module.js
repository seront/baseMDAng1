import angular from 'angular';

import {default as Access} from './access/access.module';
import {HeaderComponent} from './header/header.component'
import {SidemenuComponent} from './sidemenu/sidemenu.component'

export default angular.module('medipass.components', [
  Access
  // ,
  // Sidemenu
  ])
  .component('header', HeaderComponent)
  .component('sidemenu', SidemenuComponent)
  .name;

