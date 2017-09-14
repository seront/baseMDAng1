
   function translateConfig($translateProvider){
    var translations = {

    }
    $translateProvider
    .translations('es-cl', translations)
    .preferredLanguage('es-cl');

    $translateProvider.useSanitizeValueStrategy('sanitize');

  }
  export default ['$translateProvider', translateConfig];
