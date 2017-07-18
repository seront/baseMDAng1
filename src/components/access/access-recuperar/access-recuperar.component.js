class AccessRecuperarController{
  constructor(AccessService){
    'ngInject';
      this.AccessService = AccessService;
  }
  resetPwd(){
    this.AccessService.resetPwd(this.username, this.email).then((response) => { return response});
  }
}
export const AccessRecuperar = {
  template: require('./access-recuperar.html'),
  controller: AccessRecuperarController,
  bindings: {
  }
};
