import './medipass.css';
// aun no logro hacer que esto funcione, estudiando posibilidades
import angular from 'angular';
import ngMaterial from 'angular-material';
import ngSanitize from 'angular-sanitize';
import translate from 'angular-translate';
import moment from 'moment';

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
  .config(["$mdDateLocaleProvider", function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function(date) {
        if(date) {
            return moment(date).format('DD-MM-YYYY');
        } else {
          return "";
        }
    };
    $mdDateLocaleProvider.parseDate = function(dateString) {
      var m = moment(dateString, 'DD-MM-YYYY', true);
      return m.isValid() ? m.toDate() : new Date(NaN);
  };

    $mdDateLocaleProvider.months = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    $mdDateLocaleProvider.shortMonths = ['Ene', 'Feb', 'Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    $mdDateLocaleProvider.days = ['domingo', 'lunes', 'martes','miércoles','jueves', 'viernes', 'sábado', 'domingo'];
    $mdDateLocaleProvider.shortDays = ['Do', 'Lu', 'Ma', 'Mi','Ju','Vi','Sa'];



  }])
  .name;
