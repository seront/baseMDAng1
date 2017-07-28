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
    if(this.pagination){
      this.prevLimit = this.pagination.limit;
    this.prevPage = this.pagination.page;
    }
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

  paginar(){
    if(this.prevLimit !== this.pagination.limit || this.prevPage !== this.pagination.page){
       console.log("paginar ", this.pagination.page, this.pagination.limit);
        this.prevLimit = this.pagination.limit;
    this.prevPage = this.pagination.page;
    this.onPaginate({page: this.pagination.page, limit: this.pagination.limit})
    }
  }

  $onChanges(cambios){
    if(cambios.pagination && cambios.pagination.currentValue){
      this.pagination = cambios.pagination.currentValue;
    }

    if(cambios.actions && cambios.actions.currentValue){
      this.actions = angular.copy(cambios.actions.currentValue);
    }


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
