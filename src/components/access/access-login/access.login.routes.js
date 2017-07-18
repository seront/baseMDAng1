// routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
'ngInject';
  $stateProvider
    .state('access.login', {
      url: '/login',
      component: 'accessLogin'
    })

    ;
}
