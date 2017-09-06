import angular from 'angular';

import FinanciadorService from './financiador.service';

export default angular.module('financiador', [])
  .service("FinanciadorService", FinanciadorService)
  .name;
