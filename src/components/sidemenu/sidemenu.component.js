class SideMenuController{
  constructor($state){
    'ngInject';
    this.go = $state.go;
  }
  $onInit() {

    }

    toggleExpand(item){

      // item.expanded = !item.expanded;

      for(let i = 0; i < this.menu.length; i++){
        if(angular.equals(this.menu[i], item) && item.items){
          this.menu[i].expanded = !item.expanded;
          // console.log("Es el mismo", this.menu[i].name, this.menu[i].expanded);
        }else if(item.items && !angular.equals(this.menu[i], item)){
          this.menu[i].expanded = false;
          // console.log("Es deferente", this.menu[i].name, this.menu[i].expanded);
        }
      }
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
    config:'<',
    onAction: "&"
  }
};
