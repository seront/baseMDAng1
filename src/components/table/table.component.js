class TableController {
  constructor($filter, $mdMedia, $scope, $window) {
    'ngInject';
    this.$filter = $filter;
    this.$mdMedia = $mdMedia;
    this.$window = $window;
    this.$scope = $scope;
    this._actions = [];

     this.$scope.$watch(() => { return this.$mdMedia('print'); }, (print) =>{
    if (print === true && this._actions.length === 0) {
      this.beforePrint();
    } else if (print === false && this._actions.length >0 && this.actions.length === 0) {
      this.afterPrint();
    }
  });
  }
  $onInit() {
    this.newConfig = [];
    this.order();
    this.selected = [];
    if (this.pagination) {
      this.prevLimit = this.pagination.limit;
      this.prevPage = this.pagination.page;
    }
     this.$window.onbeforeprint = this.beforePrint;
    this.$window.onafterprint = this.afterPrint;
  }

  beforePrint() {
    console.log("beforePrint");
    this._actions = angular.copy(this.actions);
    this.actions = [];
    console.log(this.actions);

  }

  afterPrint() {

      console.log("afterPrint");
    this.actions = angular.copy(this._actions);
    this._actions = angular.copy([]);
    // console.log(this.actions);
     this.beforePrinting = false;

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
  }

  paginar() {
    if (this.prevLimit !== this.pagination.limit || this.prevPage !== this.pagination.page) {
      this.prevLimit = this.pagination.limit;
      this.prevPage = this.pagination.page;
      this.onPaginate({ page: this.pagination.page, limit: this.pagination.limit })
    }
  }

  $onChanges(cambios) {
    console.log("cambios tabla", cambios);
    if (cambios.pagination && cambios.pagination.currentValue) {
      this.pagination = cambios.pagination.currentValue;
    }

    if (cambios.actions && cambios.actions.currentValue) {
      this.actions = angular.copy(cambios.actions.currentValue);
    }
  }

  onSelect(object){
    this.onSelection({object:object});
  }

  applyFilter(model, filter){
    if(filter){
      return this.$filter(filter)(model);
    }else{
      return model;
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
