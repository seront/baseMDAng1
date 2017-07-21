class AccessLoginController {

  constructor($log, AccessService, $state) {
    'ngInject';
    $log.log("AccessLoginController componente");
    this.$state = $state;
    this.AccessService = AccessService;
     this.mensaje = {
      texto: "",
      visible: false
    };
  }

  login() {
    this.mensaje.visible = false;
    this.AccessService.login(this.username, this.pwd).then((response) => {
      if (response.data.response) {
        console.log("sesion iniciada correctamente");
        console.log(response.data.response.data);
        this.AccessService.usuarioActual = response.data.response.data;
        this.$state.go("app.dashboard");

      } else {

        // console.log("error inicio de sesión");
        // console.log(response);
        this.mensaje.texto = "Los datos ingresados no coinciden con los existentes en nuestra base de datos";
        this.mensaje.visible = true;
        // console.log( this.mensaje);
      }
    }, (error) => {
      console.log("Login error");
      console.log(error);
       this.mensaje.texto = "Ha ocurrido un error inesperado, por favor intentelo mas tarde";
       this.mensaje.visible = true;
    });
  }
}
// AccessLoginController.$inject = ['$log', 'AccessService'];

export const AccessLogin = {
  template: require('./access-login.html'),
  controller: AccessLoginController,
  bindings: {
  }
};


