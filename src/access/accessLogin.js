class AccessLoginController{
  constructor(){
     console.log("AccessLoginController componente");
  }
}

export const AccessLogin = {
  template: require('./accessLogin.html'),
  controller: AccessLoginController,
  bindings: {
  }
};
