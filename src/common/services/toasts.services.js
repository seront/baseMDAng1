export default class ToastsService{

      constructor($mdToast) {
        this.$mdToast = $mdToast;
      }

      // showWarning()
      // @params msg
      // return  response request
      //
      showWarning(msg){

        this.$mdToast.show({
            hideDelay: 5000,
            position: 'top right',
            template: '<md-toast><md-icon style="color: #ffeb3b">warning</md-icon><span class="md-toast-text" flex>'+msg+'</span></md-toast>',
            parent: '#main'
        });
      }

      // showError()
      // @params msg
      // return  response request
      //
      showError(msg){

        this.$mdToast.show(
          {
            hideDelay: 5000,
            position: 'top right',
            template: '<md-toast><md-icon style="color: #f44336">error</md-icon><span class="md-toast-text" flex>'+msg+'</span></md-toast>',
            parent: '#main'
          }
        );
      }

      // showSuccess()
      // @params msg
      // return  response request
      //
      showSuccess(msg){

        this.$mdToast.show(
          {
            hideDelay: 5000,
            position: 'top right',
            template: '<md-toast><md-icon style="color: #4caf50">check</md-icon><span class="md-toast-text" flex>'+msg+'</span></md-toast>',
            parent: '#main'
          }
        );
      }

      // incluyendo un cambio loco a ver si cambia la vaina xq q ladilla
      showResponseError(status) {
        let text = "";
        switch (status) {
          case -1:
            text = "No se ha podido establecer conexión";
            break;
          case 404:
            text = "No se encuentra el recurso solicitado";
            break;
          case 405:
            text = "No esta autorizado para ver este contenido";
            break;
          case 500:
            text = "Ha ocurrido un error, intente mas tarde";
            break;
          default:
            text = "Ha ocurrido un error";
            break;
        }
        this.showError(text);
      }

    }
