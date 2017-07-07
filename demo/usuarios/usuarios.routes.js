routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('usuarios', {
      url: '/usuarios',
      template: require('./usuarios.html'),
      controller: 'UsuariosController',
      controllerAs: 'ctrl'
    });
}
