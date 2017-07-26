class TableController {
  constructor($log) {
    'ngInject';
    //  console.log("AccessMainController componente");
    this.$log = $log;
  }
  $onInit() {
    this.newConfig = [];
    this.order();
    this.selected = [];
  }

  order() {
    var salida = [];
    for (var item in this.objectConfig) {
        var ob = [item, this.objectConfig[item]];
        salida.push(ob);
    }
    salida.sort(function (a, b) {
      return (parseInt(a[1].order, 10) > parseInt(b[1].order, 10) ? 1 : -1);
    });
    this.newConfig = salida;
    // this.$log.log(salida);
  }

  $onChanges(cambios){
    if(cambios.pagination && cambios.pagination.currentValue){
      this.pagination = cambios.pagination.currentValue;
    }

    // if(cambios.actions && cambios.actions.currentValue){
    //   this.actions = angular.copy(cambios.actions.currentValue);
    // }


  }
}

export const TableComponent = {
  template: require('./table.html'),
  controller: TableController,
  bindings: {
    'config': '<',
    'headers': '<',
    'objectConfig': '<',
    'objects': "=",
    'actions': '<',
    'pagination': '<',
    'onPaginate': '&',
    'onAction': '&',
    'onSelection': '&',
    'onDeselection': '&'
  }
};
