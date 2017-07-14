class mainController{
  constructor($log){
     $log.log("Main componente");
     this.menu = [
       {state: "app.main.financiador", icon: "user", name: "FINANCIADOR"},
       {state: "app.dashboard.usuarios", icon: "people", name: "USUARIOS"}
     ];

     this.configMenu = {
       class: ["md-sidenav-left", "md-whiteframe-4dp"],
       disableScrollTarget: "body",
       isOpen: true,
       isLockedOpen: true,
       componentId: 'right',
       toolbar: {
         class: ["md-theme-light", "md-hue-1"],
          text: "Financiador"
       }
     };
  }


}

export const Main = {
  template: require('./main.html'),
  controller: mainController,
  bindings: {
  }
};
