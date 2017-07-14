class SideMenuController{
  constructor(){
    //  console.log("sideMenuController componente");
  }
  $onInit() {

    }
}

export const SidemenuComponent = {
  template: require('./sideMenu.html'),
  controller: SideMenuController,
  bindings: {
    menu: '<',
    config:'<'
  }
};
