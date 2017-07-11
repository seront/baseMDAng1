class AccessComponentController{
  constructor($log){
    //  console.log("AccessMainController componente");
    $log.log("Access componente");
  }
}
export const AccessComponent = {
  template: require('./access.html'),
  controller: AccessComponentController,
  bindings: {
  }
};

