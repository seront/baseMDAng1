class mainController{
  constructor($log){
     $log.log("Main componente");
     this.menu = [
       {state: "app.main.financiador", icon: "attach_money", name: "FINANCIADOR", expanded: false, items: [
        {
          state: "app.main.financiador", icon: "location_on", name: "Financiar algo"
        },
        {
          state: "app.main.financiador", icon: "location_on", name: "Financiar otra cosa"
        }
       ]
      },
       {state: "app.dashboard.usuarios", icon: "people", name: "USUARIOS"},
       {state: "app.main.financiador", icon: "attach_money", name: "otro", expanded: false, items: [
        {
          state: "app.main.financiador", icon: "location_on", name: "segunda"
        },
        {
          state: "app.main.financiador", icon: "location_on", name: "tercera"
        }
       ]
      }
     ];

     this.configMenu = {
       class: ["md-sidenav-left", "md-whiteframe-4dp"],
       disableScrollTarget: "body",
       isOpen: true,
      //  isLockedOpen: 'gt-md',
       isLockedOpen: "$mdMedia('gt-md')",
       componentId: 'right',
       toolbar: {
         class: ["md-theme-light", "md-hue-1", "flex"],
          text: "Financiador",
          menu: {
            icon: "settings",
          display: "name",
          action: "cambio-prestador",
          options:[
            {name: "Prestador 1"},
            {name: "Prestador 2"},
            {name: "Prestador 3"}
          ]
        }
       },
        mainSelect: {
          display: "name",
          action: "cambio-prestador",
          options:[
            {name: "Prestador 1"},
            {name: "Prestador 2"},
            {name: "Prestador 3"}
          ]
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
