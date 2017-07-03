
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/cerulean/bootstrap.min.css';

import angular from 'angular';
import axios from 'axios';
import uirouter from 'angular-ui-router';

import NavbarController from './navbar/navbar.controller';
import usuarios from './usuarios';
import dashboard from './dashboard';

import routing from './app.config';


console.log("asdfasdf")
let app = angular.module('app',[uirouter,usuarios,dashboard])
  .config(routing);
app.controller('NavbarController',NavbarController);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/dashboard");
  axios.defaults.baseURL = 'http://localhost:3001';
}]);

