import './medipass.css';
// aun no logro hacer que esto funcione, estudiando posibilidades
import angular from 'angular';
import ngMaterial from 'angular-material';
import ngSanitize from 'angular-sanitize';
import translate from 'angular-translate';

//Asi funciona para exportar multiples modulos por separado

export { default as ComponentsModule } from "./components/components.module";

export { default as CommonsModule } from './common/common.module';
export { default as SideMenu } from './components/sidemenu/sidemenu.module';

import { default as ComponentsModule } from "./components/components.module";
import { default as CommonsModule } from './common/common.module';

import { default as CustomTableModule } from './components/table/table.module';
import { default as FinanciadorModule } from './components/financiador/financiador.module';
import { default as PrestadorModule } from './components/prestador/prestador.module';

import  translateConfig  from './medipass-translate';
import { default as themeConfig } from './medipass-theme';

export default angular.module('medipass.base', [
  ngMaterial,
  ngSanitize,
  translate,
  ComponentsModule,
  CustomTableModule,
  FinanciadorModule,
  PrestadorModule,
  CommonsModule])
  .config(translateConfig)
  .config(themeConfig)
  .name;
