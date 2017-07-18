class AccessLoginController{

  constructor($log, AccessService){
    'ngInject';
      $log.log("AccessLoginController componente");
      this.AccessService = AccessService;
  }

  login(){
    this.AccessService.login(this.username, this.pwd);
  }
}
// AccessLoginController.$inject = ['$log', 'AccessService'];

export const AccessLogin = {
  template: require('./access-login.html'),
  controller: AccessLoginController,
  bindings: {
  }
};


