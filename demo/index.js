import 'bootswatch/cerulean/bootstrap.min.css';

import angular from 'angular';
import axios from 'axios';
import uirouter from 'angular-ui-router';

import NavbarController from '../src/navbar/navbar.controller';
import access from '../src/access';
// import components from '../src/components';
import routing from './app.config';


// let app = angular.module('app',[uirouter, access, components])
let app = angular.module('app',[uirouter, access])
  .config(routing);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/dashboard");
  axios.defaults.baseURL = 'http://localhost:3001';
}]);

