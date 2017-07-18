class AccessRecuperarController{
  constructor(AccessService){
      this.AccessService = AccessService;
  }
  resetPwd(){
    this.AccessService.resetPwd(this.username, this.email).then((respose) => {});
  }
}
export const AccessRecuperar = {
  template: require('./access-recuperar.html'),
  controller: AccessRecuperarController,
  bindings: {
  }
};
