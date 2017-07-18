class UrlService {
  constructor() {
    // 'ngInject';
    this.login = "http://medipass.cl/login";
    this.resetPwd = "http://medipass.cl/resetPWD";
  }
}

export var UrlModule = angular.module('medipass.url', [])
  .service("UrlService", UrlService)
  .name;
