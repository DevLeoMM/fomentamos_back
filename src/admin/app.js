const config = {
    locales: [
      'es'
    ],
    translations: {
      es: {
        'Auth.form.welcome.title': 'Clientes Fomentamos',
        'Auth.form.welcome.subtitle': 'Inicie sesión en su cuenta para continuar',
        'app.components.LeftMenu.navbrand.workplace': 'Clientes Fomentamos',
        'app.components.LeftMenu.navbrand.title': 'Panel de control',
        'global.content-manager': 'Administrador de Información',
        'content-manager.header.name': 'Contenido', 
      },
      en: {
        'Auth.form.welcome.title': 'Clientes Fomentamos',
        'Auth.form.welcome.subtitle': 'Sign in to your account to continue',
        'app.components.LeftMenu.navbrand.workplace': 'Clientes Fomentamos',
        'app.components.LeftMenu.navbrand.title': 'Control Panel',
        'global.content-manager': 'Information Manager',
        'content-manager.header.name': 'Contents',
      }
    },
    tutorials: false,
    notifications: { release: false },
  };
  
  const bootstrap = (app) => {
    console.log(app);
  };
  
  export default {
    config,
    bootstrap,
  };