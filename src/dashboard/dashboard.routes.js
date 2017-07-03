routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      template: require('./dashboard.html'),
      controller: 'DashboardController',
      controllerAs: 'ctrl'
    })
    .state('componente', {
      url: '/componente',
      component: 'componente',
      // controller: 'DashboardController',
      // controllerAs: 'ctrl'
    })
    ;
}
