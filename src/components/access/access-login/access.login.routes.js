routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {

  $stateProvider
    .state('access.login', {
      url: '/login',
      component: 'accessLogin'
    })

    ;
}
