class SideMenuController{
  constructor($state, $mdSidenav, $log){
    'ngInject';
    this.go = $state.go;
    this.$mdSidenav = $mdSidenav;
    this.$log = $log;
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
        this.toggleSideMenu();
        this.go(item.state);
      }
    }

    toggleSideMenu(){
      if(this.config.componentId){
        this.$mdSidenav(this.config.componentId).toggle().then(response=>{
          this.$log.log('toggled');
        });
      }else{
        this.$log.error("the sidemenu requires an 'componentId'");
      }

    }

    $onChanges(cambios){
      if(cambios.menu){
        this.menu = angular.copy(cambios.menu.currentValue);
      }
      if(cambios.config){
        this.config = angular.copy(cambios.config.currentValue);
      }
      if(cambios.toolbar){

        this.toolbar = angular.copy(cambios.toolbar.currentValue);

      }
    }
}

export const SidemenuComponent = {
  template: require('./sideMenu.html'),
  controller: SideMenuController,
  bindings: {
    menu: '<',
    config:'<',
    toolbar: '<',
    onAction: "&"
  }
};
