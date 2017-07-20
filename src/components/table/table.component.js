class TableController {
  constructor($log) {
    'ngInject';
    //  console.log("AccessMainController componente");
    this.$log = $log;
  }
  $onInit() {
    this.newConfig = [];
    this.order();
    // this.$log.log(this.pagination);
    this.selected = [];
  }

  $onChange(changes) {
    if (changes.config) {
      this.$log.log("La configuracion ha cambiado");
      this.config = changes.config;
    }

    if (changes.headers) {
      this.$log.log("Los headers han cambiado");
      this.headers = changes.headers;
    }

    if (changes.objects) {
      this.$log.log("Los objetos han cambiado");
      this.objects = this.objects;
    }
    if(changes.pagination){
      this.pagination = changes.pagination;
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
  $onChanges(cambios){
    if(cambios.objects && cambios.objects.currentValue){
      this.objects = cambios.objects.currentValue;
    }

    if(cambios.pagination && cambios.pagination.currentValue){
      this.pagination = cambios.pagination.currentValue;
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
    'objects': '<',
    'actions': '<',
    'pagination': '<',
    'onPaginate': '&',
    'onAction': '&',
    'onSelection': '&',
    'onDeselection': '&'
  }
};
