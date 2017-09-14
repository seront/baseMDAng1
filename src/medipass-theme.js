// themeConfig.$inject = ['$mdThemingProvider'];
function themeConfig($mdThemingProvider) {
  // $mdThemingProvider.theme('default')
  //         .primaryPalette('orange')
  //         .accentPalette('blue-grey')
  //         .warnPalette('red');
  var customPrimary = {
    '50': '#89cddd',
    '100': '#75c5d7',
    '200': '#61bdd1',
    '300': '#4eb4cb',
    '400': '#3aacc5',
    '500': '#349bb2',
    '600': '#2e8a9e',
    '700': '#28798a',
    '800': '#236777',
    '900': '#1d5663',
    'A100': '#9dd6e2',
    'A200': '#b0dee8',
    'A400': '#c4e6ee',
    'A700': '#17454f',
    contrastDefaultColor: 'light',
    contrastLightColors: [
      '50',
      '100',
      'A100',
      'A200',
      '500'
    ]
  };
  $mdThemingProvider
    .definePalette('customPrimary',
      customPrimary);

  var customAccent = {
    '50': '#586268',
    '100': '#646f75',
    '200': '#707c83',
    '300': '#7d8890',
    '400': '#8a959b',
    '500': '#98a1a7',
    '600': '#b4babf',
    '700': '#c1c7ca',
    '800': '#cfd4d6',
    '900': '#dde0e2',
    'A100': '#b4babf',
    'A200': '#a6aeb3',
    'A400': '#98a1a7',
    'A700': '#ebedee'
  };
  $mdThemingProvider
    .definePalette('customAccent',
      customAccent);

  $mdThemingProvider.theme('default')
    .primaryPalette('customPrimary')
    .accentPalette('customAccent')
    .warnPalette('red')
    .backgroundPalette('grey');


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

export default ["$mdThemingProvider", themeConfig];
