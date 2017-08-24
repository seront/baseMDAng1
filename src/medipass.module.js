import './medipass.css';

// aun no logro hacer que esto funcione, estudiando posibilidades
import angular from 'angular';
import ngMaterial from 'angular-material';
import translate from 'angular-translate';

//Asi funciona para exportar multiples modulos por separado

export { default as ComponentsModule } from "./components/components.module";

export { default as CommonsModule } from './common/common.module';
export { default as SideMenu } from './components/sidemenu/sidemenu.module'

import { default as ComponentsModule } from "./components/components.module";
import { default as CommonsModule } from './common/common.module';
import { default as themeConfig } from './medipass-theme';
import { default as CustomTableModule } from './components/table/table.module';
import { default as FinanciadorModule } from './components/financiador/financiador.module';
import { default as PrestadorModule } from './components/prestador/prestador.module';
import { translateConfig } from './medipass-translate';
// import {SidemenuComponent} from './components/sidemenu/sidemenu.component'

// export var MedipassBase = angular.module('medipass.base', [
export default angular.module('medipass.base', [
  ngMaterial,
  translate,
  ComponentsModule,
  CustomTableModule,
  FinanciadorModule,
  PrestadorModule,
  CommonsModule])
  .config(translateConfig)
  .config(themeConfig)
  .filter("miles", () => {
    return (input, simbol) => {
      let fv = input;
      let out= "";
      if (typeof input === 'number') {
        fv = input.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        out = simbol ? simbol +  fv : fv;
        return out;
      } else if (typeof input === 'string') {
        fv = input.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        out = simbol ? simbol +  fv : fv;
        return out
      }else{
        return fv;
      }

    }
  })
  .filter('capitalize', function() {
    return function(input, all) {
    var reg = all ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
    return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
    })
  .name;
