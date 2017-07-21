export class AccessService {
  constructor($log, $http) {
    'ngInject';
    this.$log = $log;
    this.$http = $http;
    // this.usuarioActual = "";
    this.url = {
      login: "http://dev.wso2:8280/usuarios/login",
      cambioContrasenia: "http://dev.wso2:8280/usuarios/updatePassword"
    };
  }
  login(username, pwd) {
    let params = { usuario: username, contrasenia: pwd };
    let data = JSON.stringify(params);
    var options = {
      "headers": {
        "content-type": "application/json",
        "Accept": "*/*"
      }
    };
    return this.$http.post(this.url.login, data, options)

  }
  logout() {
    this.$log.log("logout");
  }
  resetPwd(username, email) {
    this.$log.log("reset pwd " + username + " " + email);
    return this.$http.get(this.url.cambioContrasenia, { username: username, email: email }).then(response => response.data);
  }

  isAuthenticated(){
    if(this.usuarioActual){
      return true;
    }else{
      return false;
    }
  }
}
