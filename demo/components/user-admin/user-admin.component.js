class UserAdminController {
  constructor($log) {
    this.action1Value = false;
    this.log = $log.log;
    this.headers = [
      { name: "header1", numeric: false, tooltip:{text: "MENSAJE_TOOLTIP"} },
      { name: "header2", numeric: false },
      { name: "header3", numeric: false },
      { name: "header4", numeric: false },
      { name: "numero", numeric: true }
    ];

    this.config = {
      rowSelect: true, // seleccionar filas?
      multiple: false, // seleccionar mas de una fila a la vez?
      progress: "", //promesa para mostrar barra de carga o cambio en
      autoSelect: true, //true
      rowSelect: true,
      selectId: "", // propiedad del objeto que lo identifica como unico
      rowSelectDisable: "" //propiedad del objeto en la fila que dice si la fila se puede seleccionar o no
    };

    this.objectConfig = {
      key1: { type: "text" },
      key2: {
        type: "date", options: {
          format: ""
        }
      },
      key3: { type: "switch" },
      key4: { type: "switch", trueValue: 1, falseValue: 0 },
      key5: { type: "inputNumber", action: 'input-change', text: "NUMERO" },
      key6: { type: "text", avoid: '{"@nil":true}'}
    };

    let action1 = {
      style: ["md-raised", "md-primary", "md-fab"],
      text: "action1",
      name: "action1",
      icon: {
        name: "people",
        style: []
      },
      tooltip: {
        text: "ACTION1", //texto a desplegar en el tooltip, se le aplica el filtro $translate
        // direction: "top", //opcional, Direccion en la que se desplega el tooltip, default: bottom
        // style: [], //opcional, array de strings nombre de clases a aplciar al elemento
        // zIndex: 0, //opcional
        // delay: 500, //opcional
        // autohide: true //opcional, default: true
      },
      type: "button"
    };

    let action2 = {
      style: [],
      text: "action2",
      name: "action2",//Nombre dentro del formulario
      model: '', //Nombre de la propiedad del objeto asociada a este switch
      tooltip: {
        style: [],
        zIndex: 0,
        // visible: true,
        // delay: 500,
        direction: "top",
        text: "action switch"
      },
      type: "switch"
    };
    this.actions = [action1, action2];

    // this.objects = [];
    var object1 = {
      key1: "value1",
      key2: "value2",
      key3: "value3",
      key4: 1,
    };
    var object2 = {
      key1: "value1",
      key2: "value2",
      key3: "value3",
      key4: "0",
    };
    this.objects = [object1, object2];

    // https://github.com/daniel-nagy/md-data-table#pagination
    this.pagination = {
      style: ["pagination-label"], //array de strings, nombres de clases a aplicar, opcional
      limit: 2,
      page: 1,
      total: 5,
      pageSelect: 1,
      boundaryLinks: true, //boolean, default: false
      label: "{of: 'DE', page: 'PAGINA', rowsPerPage: 'FILAS_PAGINAS'}", //formato del string q se le pasa a la tabla
      limitOptions: [5, 10, 15]
    };
  }

  accionTabla(name, object) {
    this.log("accionTabla " + name);

    switch (name) {
      case 'action1':
        this.log("accionTabla sw action1");
        break;
      case 'action2':
        this.log("accionTabla sw action2");
        this.action2(object);
        break;

      default:
        this.log(name);
        this.log(object);
    }
  }

  action2(value) {
    this.log("action2 ");
    this.log(value);
  }

  onSelect(object){
    console.log("onSelect user admin");
    console.log(object);
  }
  onDeselect(object){
    console.log("onDeselect user admin");
    console.log(object);
  }

  $onInit() {
    this.log("user admin componente");
    // this.action1Value = false;
    this.objects = [];
  }

  masObjetos(){
    let ar = this.objects;
    this.objects = [];
    var object2 = {
      key1: "value1",
      key2: "value2",
      key3: true,
      key4: 1,
      key5: 5,
      key6: { "@nil": true}
    };

    ar.push(object2);
    console.log(ar);
    this.objects = ar;
  }

  onPaginate(page, limit){
    console.log("page " + page + " limit: " + limit);
  }
}

export const UserAdmin = {
  template: require('./user-admin.html'),
  controller: UserAdminController,
  bindings: {

  }
};
