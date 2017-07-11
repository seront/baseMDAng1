export class AccessService {
  constructor($log) {
    // 'ngInject';
    this.$log = $log;
  }
  login(username, pwd) {
    // return this.$http.get('/api/todos').then(response => response.data);
    this.$log.log("login username: " + username + " pwd: " + pwd);
  }
  logout(){
    this.$log.log("logout");
  }
  resetPwd(){
    this.$log.log("reset pwd");
  }
}
