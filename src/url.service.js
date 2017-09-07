import angular from 'angular';
class UrlService {
  constructor() {
    // 'ngInject';
    this.login = "http://api.medipass.cl/usuarios/login";
  }
}

export default angular.module('medipass.url', [])
  .service("UrlService", UrlService)
  .name;

