class UserAdminController {
  constructor($log) {
    this.$log = $log;
    this.headers = [
      {name: "header1", numeric: false},
      {name: "header2", numeric: false},
      {name: "header3", numeric: false},
      {name: "header4", numeric: false}
    ];
    this.config = {
      key1: { type: "text" },
      key2: {
        type: "date", options: {
          format: ""
        }
      },
      key3: { type: "number" },
      key4: { type: "text" }
    };
    this.actions = {
      action1: {
        action: function () {
          this.$log.log("action1");
        },
        name: "action1",
        tooltip: "ACTION1",
        type: "switch"
      },
      action2: {
        action: function () {
          this.$log.log("action1");
        },
        // condition:
        name: "action2",
        tooltip: "ACTION2",
        type: "switch"
      }
    }
      ;
    // this.objects = [];
    var object1 = {
      key1: "value1",
      key2: "value2",
      key3: "value3",
      key4: "value4"
    };
    var object2 = {
       key1: "value1",
      key2: "value2",
      key3: "value3",
      key4: "value4"
    };
    this.objects = [object1, object2];
  }

  $onInit() {
    this.$log.log("user admin componente");
  }
}

export const UserAdmin = {
  template: require('./user-admin.html'),
  controller: UserAdminController,
  bindings: {

  }
};
