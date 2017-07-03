import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './dashboard.routes';
import DashboardController from './dashboard.controller';
// var Componente = require('./componente');
import {Componente} from './componente.js';

export default angular.module('app.dashboard', [uirouter])
  .component('componente', Componente)
  .config(routing)
  .controller('DashboardController', DashboardController)
  .name;
