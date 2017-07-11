
  export function translateConfig($translateProvider){
    var translations = {
      USUARIOS: 'Usuarios',
      ADMINISTRAR: 'Administrar',
      LOTES: 'Lotes',
      GENERAR: 'Generar',
      VENTAS: 'Ventas',
      DEVOLVER_BONO: 'Devolución de bono',
      CAJAS: 'Cajas'
    }
    $translateProvider
    .translations('es-cl', translations)
    .preferredLanguage('es-cl');
  }
