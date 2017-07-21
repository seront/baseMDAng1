routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {

  $stateProvider
    .state('access', {
      abstract: true,
      // url: '',
      component: 'access',
      authenticate: false
    })
    .state('access.login', {
      url: '/login',
      component: 'accessLogin',
      authenticate: false
    })
    .state('access.recuperar', {
      url: '/recuperar',
      component: 'accessRecuperar',
      authenticate: false
    })
    ;
}
