class HeaderController{
  constructor($log){
    //  console.log("AccessMainController componente");
    $log.log("Access componente");
  }
}
// HeaderController.$inject = ["$log"];
export const HeaderComponent = {
  template: require('./header.html'),
  // controller: HeaderController,
  controller: ["$log", HeaderController],
  bindings: {
  }
};
