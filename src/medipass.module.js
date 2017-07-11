import './medipass.css';

// aun no logro hacer que esto funcione, estudiando posibilidades
import angular from 'angular';
import ngMaterial from 'angular-material';
import translate from 'angular-translate';

//Asi funciona para exportar multiples modulos por separado

export {default as ComponentsModule} from "./components/components.module";

export {default as CommonsModule} from './common/common.module';

import {default as ComponentsModule} from "./components/components.module";
import {default as CommonsModule} from './common/common.module';
import {default as themeConfig} from './medipass-theme';
import {translateConfig} from './medipass-translate';
// import {SidemenuComponent} from './components/sidemenu/sidemenu.component'

// export var MedipassBase = angular.module('medipass.base', [
export default angular.module('medipass.base', [
  ngMaterial,
  translate,
  ComponentsModule,
  CommonsModule])
  .config(translateConfig)
  .config(themeConfig)
  .name;
