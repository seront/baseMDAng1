class ComponenteController{
  constructor(){
     console.log("componente");
  }
}

export const Componente = {
  template: require('./componente.html'),
  controller: ComponenteController,
  bindings: {
  }
};
// module.exports = {
//   template: require('./componente.html'),
//   controller: ComponenteController,
//   bindings: {
//   }
// };
