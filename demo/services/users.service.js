import angular from 'angular';
import axios from 'axios';
var Promise = require('promise');

class UsersService{
  getUsers(){
    return new Promise(
      function (resolve, reject) {
        axios.get('/users')
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}

export default angular.module('services.random-names', [])
  .service('UsersService', UsersService)
  .name;
