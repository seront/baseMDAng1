class HeaderController{
  constructor($log){
    'ngInject';
    //  console.log("AccessMainController componente");
    $log.log("Access componente");
  }
}
export const HeaderComponent = {
  template: require('./header.html'),
  controller: HeaderController,
  bindings: {
  }
};
