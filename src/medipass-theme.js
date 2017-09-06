
themeConfig.$inject = ['$mdThemingProvider'];
export default  function themeConfig($mdThemingProvider) {
  'ngInject';
  $mdThemingProvider.theme('default')
          .primaryPalette('orange')
          .accentPalette('blue-grey')
          .warnPalette('red');

//  $mdThemingProvider.theme('default')
//          .primaryPalette('orange')
//          .accentPalette('light-green')
//          .warnPalette('teal');

//  $mdThemingProvider.definePalette('naranjamedipass', {
//    '50': 'fef1e8',
//    '100': 'fdddc6',
//    '200': 'fbc6a0',
//    '300': 'f9af79',
//    '400': 'f89d5d',
//    '500': 'f78c40',
//    '600': 'f6843a',
//    '700': 'f57932',
//    '800': 'f36f2a',
//    '900': 'f15c1c',
//    'A100': 'ffffff',
//    'A200': 'fff6f2',
//    'A400': 'ffd0bf',
//    'A700': 'ffbea6',
//    'contrastDefaultColor': 'light',
//    'contrastDarkColors': [
//      '50',
//      '100',
//      '200',
//      '300',
//      '400',
//      '500',
//      '600',
//      '700',
//      '800',
//      '900',
//      'A100',
//      'A200',
//      'A400',
//      'A700'
//    ],
//    'contrastLightColors': []
//  });
  $mdThemingProvider.definePalette('mcgpalette0', {
    50: 'eff0f3',
    100: 'd8dae1',
    200: 'bec1cd',
    300: 'a4a8b8',
    400: '9195a9',
    500: '7d829a',
    600: '757a92',
    700: '6a6f88',
    800: '60657e',
    900: '4d526c',
    A100: 'cfd7ff',
    A200: '9cacff',
    A400: '6981ff',
    A700: '506bff',
    contrastDefaultColor: 'light',
    contrastDarkColors: [
      '50',
      '100',
      '200',
      '300',
      '400',
      '500',
      'A100',
      'A200',
      'A400'
    ],
    contrastLightColors: [
      '600',
      '700',
      '800',
      '900',
      'A700'
    ]
  });

  $mdThemingProvider.theme('dark')
          .backgroundPalette('mcgpalette0')
          .primaryPalette('orange')
          .accentPalette('blue-grey')
          .warnPalette('red');
}
