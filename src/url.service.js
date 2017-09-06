import angular from 'angular';
class UrlService {
  constructor() {
    'ngInject';
    this.login = "http://dev.wso2:8280/usuarios/login";
  }
}

export default angular.module('medipass.url', [])
  .service("UrlService", UrlService)
  .name;

