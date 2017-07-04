class AccessMainController{
  constructor(){
     console.log("AccessMainController componente");
  }
}

export const Componente = {
  template: require('./accessMain.html'),
  controller: AccessMainController,
  bindings: {
  }
};
