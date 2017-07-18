import angular from 'angular';
class UrlService {
  constructor() {
    // 'ngInject';
    this.login = "http://medipass.cl/login";
    this.resetPwd = "http://medipass.cl/resetPWD";
  }
}

export default angular.module('medipass.url', [])
  .service("UrlService", UrlService)
  .name;

