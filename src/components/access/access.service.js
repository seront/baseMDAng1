export class AccessService {
  constructor($log, $http, UrlService) {
    // 'ngInject';
    this.$log = $log;
    this.$http = $http;
    this.UrlService = UrlService;
  }
  login(username, pwd) {

    this.$log.log("login username: " + username + " pwd: " + pwd);
    return this.$http.get(this.UrlService.login,{username: username, password: pwd}).then(response => response.data);
  }
  logout(){
    this.$log.log("logout");
  }
  resetPwd(username, email){
    this.$log.log("reset pwd " + username + " " + email);
    return this.$http.get(this.UrlService.resetPwd,{username: username, email: email}).then(response => response.data);
  }
}
