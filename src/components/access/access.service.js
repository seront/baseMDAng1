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

    // let params = {"usuario": username, "contrasenia": pwd};
    let params = {usuario: username, contrasenia: pwd};
    let data = JSON.stringify(params);
    // let data = JSON.stringify(JSON.stringify(params));
   console.log(data);
    let config = {
      method: "POST",
      url: this.url.login,
      // headers: {
      //   'Content-Type': "application/json",
      //   'content-type': "application/json",
      //   // "cache-control": "no-cache"
      // },

      data: data,

      // data: params,
      // params: data
    };
    return this.$http(config)
    // return this.$http.post(this.url.login,
    //   {usuario: username,
    //     contrasenia: pwd})
    //   // .then((response) => {return response.data});
  }
  logout(){
    this.$log.log("logout");
  }
  resetPwd(username, email){
    this.$log.log("reset pwd " + username + " " + email);
    return this.$http.get(this.url.cambioContrasenia,{username: username, email: email}).then(response => response.data);
  }
}
