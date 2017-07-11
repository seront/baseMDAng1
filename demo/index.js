import '../src/medipass.css';
import '../node_modules/angular-material/angular-material.css'
import angular from 'angular';
import ngMaterial from 'angular-material';
import axios from 'axios';
import uirouter from 'angular-ui-router';

import { default as MedipassBase } from '../src/medipass.module.js';
import { Main } from './components/main/main.component';

import routing from './app.config';

let app = angular.module('app', [
  uirouter,
  ngMaterial,
  MedipassBase
])
.component('main', Main)
  .config(routing);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/dashboard");
  axios.defaults.baseURL = 'http://localhost:3001';
}]);
