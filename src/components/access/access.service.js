export class AccessService {
  constructor($log, $http) {
    'ngInject';
    this.$log = $log;
    this.$http = $http;
    this.url = {
      login: "http://dev.wso2:8280/usuarios/login",
      cambioContrasenia: "http://dev.wso2:8280/usuarios/updatePassword"
    };
  }
  login(username, pwd) {

    this.$log.log("login username: " + username + " pwd: " + pwd);
    return this.$http.post(this.url.login,
      {usuario: username,
        contrasenia: pwd})
      // .then((response) => {return response.data});
  }
  logout(){
    this.$log.log("logout");
  }
  resetPwd(username, email){
    this.$log.log("reset pwd " + username + " " + email);
    return this.$http.get(this.url.cambioContrasenia,{username: username, email: email}).then(response => response.data);
  }
}
