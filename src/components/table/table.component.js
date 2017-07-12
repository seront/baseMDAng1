class TableController {
  constructor($log) {
    //  console.log("AccessMainController componente");
    this.$log = $log;
  }
  $onInit() {
    this.$log.log("Table componente headers");
    this.$log.log(this.headers);
    this.newConfig = [];
    this.order();
    this.$log.log(this.objects);
  }

  $onChange(changes) {
    if (changes.config) {
      this.$log.log("La configuracion ha cambiado");
    }

    if (changes.headers) {
      this.$log.log("Los headers han cambiado");
    }

    if (changes.objects) {
      this.$log.log("Los objetos han cambiado");
    }
  }

  order() {
    var salida = [];
    for (var item in this.config) {
      if (this.config[item] === undefined) {
        // Nada
      } else {
        var ob = [item, this.config[item]];
        salida.push(ob);
      }
    }
    salida.sort(function (a, b) {
      return (parseInt(a[1].order, 10) > parseInt(b[1].order, 10) ? 1 : -1);
    });

    this.newConfig = salida;
    this.$log.log(salida);
  }
}

export const TableComponent = {
  template: require('./table.html'),
  controller: TableController,
  bindings: {
    config: '<',
    headers: '<',
    objects: '<'
  }
};
