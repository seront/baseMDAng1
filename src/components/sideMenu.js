class sideMenuController{
  constructor(){
     console.log("sideMenuController componente");
  }
}

export const SideMenu = {
  template: require('./sideMenu.html'),
  controller: sideMenuController,
  bindings: {
  }
};
// https://bootsnipp.com/snippets/featured/admin-side-menu
