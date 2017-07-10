class SideMenuController{
  constructor(){
     console.log("sideMenuController componente");
  }
}

export const SideMenu = {
  template: require('./sideMenu.html'),
  controller: SideMenuController,
  bindings: {
  }
};
