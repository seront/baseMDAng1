class mainController{
  constructor($log){
     $log.log("Main componente");
     this.menu = [
       {state: "app.main.financiador", icon: "user", name: "FINANCIADOR"},
       {state: "app.dashboard.usuarios", icon: "people", name: "USUARIOS"}
     ];
  }


}

export const Main = {
  template: require('./main.html'),
  controller: mainController,
  bindings: {
  }
};
