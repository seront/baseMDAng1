class SideMenuController{
  constructor($state){
    'ngInject';
    this.go = $state.go;
  }
  $onInit() {

    }

    toggleExpand(item){
      item.expanded = !item.expanded;
    }

    action(item){
      if(item.items){
        this.toggleExpand(item);
      }else{
        this.go(item.state);
      }
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
