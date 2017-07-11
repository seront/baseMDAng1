routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {

  $stateProvider
    .state('access', {
      abstract: true,
      // url: '',
      component: 'access'
    })
    .state('access.login', {
      url: '/login',
      component: 'accessLogin'
    })
    .state('access.recuperar', {
      url: '/recuperar',
      component: 'accessRecuperar'
    })
    ;
}
