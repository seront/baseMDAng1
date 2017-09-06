import angular from 'angular';

import PrestadorService from './prestador.service'

export default angular.module('prestador', [])
  .service("PrestadorService", PrestadorService)
  .name;
