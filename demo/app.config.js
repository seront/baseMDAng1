routing.$inject = ['$stateProvider'];

export default function routing($stateProvider) {
  // $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      abstract: true,
      url: '/',
      template: '<ui-view></ui-view>'
    })
    .state('app.dashboard', {
      // abstract: true,
      url: 'dashboard',
      component: 'main'
      // template: 'hola side menu'
    })
    .state('app.dashboard.usuarios', {
      // abstract: true,
      url: '/usuarios',
      // component: 'main'
      template: 'USUARIOS AQUI'
    })
    ;
}
