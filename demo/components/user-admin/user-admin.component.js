class UserAdminController {
  constructor($log) {
    // this.$log = $log;
    this.action1Value = false;
    this.log = $log.log;
    this.headers = [
      { name: "header1", numeric: false },
      { name: "header2", numeric: false },
      { name: "header3", numeric: false },
      { name: "header4", numeric: false }
    ];
    this.config ={
      rowSelect: true, // seleccionar filas?
      multiple: true, // seleccionar mas de una fila a la vez?
      progress: //promesa para mostrar barra de carga o cambio en 
    };

    this.objectConfig = {
      key1: { type: "text" },
      key2: {
        type: "date", options: {
          format: ""
        }
      },
      key3: { type: "number" },
      key4: { type: "text" }
    };

    let action1 = {
      action: this.action1,
      style: ["md-raised", "md-primary"],
      text: "action1",
      icon: {
        name: "people",
        style: []
      },
      tooltip: {
        text: "ACTION1",
        direction: "up",
        style: []
      },
      type: "button",
      value: 'switch'
    };
    let action2 = {
      action: this.action2,
      // condition:
      name: "action2",
      tooltip: "ACTION2",
      type: "switch"
    };
    this.actions = [action1, action2];

    // this.objects = [];
    var object1 = {
      key1: "value1",
      key2: "value2",
      key3: "value3",
      key4: "value4",
      switch: true
    };
    var object2 = {
      key1: "value1",
      key2: "value2",
      key3: "value3",
      key4: "value4",
      switch: false
    };
    this.objects = [object1, object2];
  }
  // action1(value) {
  //   console.log(value);
  //   console.log(this.action1Value);
  //   this.action1Value = !this.action1Value;
  //   // this.log("action1 ");
  //   // this.log(value);
  // }
    accionTabla(name, object){
      this.log("accionTabla");
      this.log(name);
      this.log(object);
    }

  action2(value) {
    this.log("action2 ");
    this.log(value);
  }

  $onInit() {
    this.log("user admin componente");
    // this.action1Value = false;
  }
}

export const UserAdmin = {
  template: require('./user-admin.html'),
  controller: UserAdminController,
  bindings: {

  }
};
