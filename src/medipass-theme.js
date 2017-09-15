function themeConfig($mdThemingProvider) {
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
    .primaryPalette('customPrimary', {
      'default': '200',
      'hue-1': '800',
      'hue-2': '900',
      'hue-3': 'A700'
    })
    .accentPalette('customAccent', {
      'default': '200',
      'hue-1': '800',
      'hue-2': '900',
      'hue-3': 'A700'
    })
    .warnPalette('red')
    .backgroundPalette('grey');
}

export default ["$mdThemingProvider", themeConfig];
