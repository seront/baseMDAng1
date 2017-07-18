
  export function translateConfig($translateProvider){
    var translations = {
      USUARIOS: 'Usuarios',
      ADMINISTRAR: 'Administrar',
      LOTES: 'Lotes',
      GENERAR: 'Generar',
      VENTAS: 'Ventas',
      DEVOLVER_BONO: 'Devolución de bono',
      CAJAS: 'Cajas',
      USERNAME: 'Cédula',
      PASSWORD: 'Contraseña',
      LOGIN: 'Iniciar sesión',
      FORGOT_PWD: "Recuperar contraseña",
      PASSWORD_REQUIRED: "La contraseña es requerida",
      USERNAME_REQUIRED: "La cédula es requerida",
      EMAIL_REQUIRED: "El correo electronico es requerido",
      EMAIL: "Correo electrónico"
    }
    $translateProvider
    .translations('es-cl', translations)
    .preferredLanguage('es-cl');
  }
