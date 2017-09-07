
  export function translateConfig($translateProvider){
    'ngInject';
    var translations = {

    }
    $translateProvider
    .translations('es-cl', translations)
    .preferredLanguage('es-cl');

    $translateProvider.useSanitizeValueStrategy('sanitize');
  }
