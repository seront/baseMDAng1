export default  class DashboardController {
  constructor() {
    this.img1 = require('../images/1024.jpg');
    this.img2 = require('../images/200.jpg');
    this.datos = 'Datos!!';
  }
  changeDatos(datos) {
    this.datos = datos;
  }
}
