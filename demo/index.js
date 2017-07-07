// import '../src/bootstrap/Supernice.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/medipass.css';

import angular from 'angular';
import axios from 'axios';
import uirouter from 'angular-ui-router';

import access from '../src';
import components from '../src';
import routing from './app.config';


// let app = angular.module('app',[uirouter, access, components])
let app = angular.module('app',[uirouter, access, components])
  .config(routing);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/dashboard");
  axios.defaults.baseURL = 'http://localhost:3001';
}]);

