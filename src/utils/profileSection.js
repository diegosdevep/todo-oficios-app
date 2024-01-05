import { screen } from './screen';

export const profileSections = [
  {
    title: 'Mi Actividad',
    items: [
      { title: 'Notificaciones', onPress: (navigation) => {} },
      {
        title: 'Mis Demandas',
        onPress: (navigation) => navigation.navigate(screen.account.myDemands),
      },
      { title: 'Solicitud a mis Demandas', onPress: (navigation) => {} },
      { title: 'Mis Comentarios', onPress: (navigation) => {} },
      { title: 'Profesionales Favoritos', onPress: (navigation) => {} },
    ],
  },
  {
    title: 'Acerca de Todo Oficios',
    items: [
      { title: 'Preguntas frecuentes', onPress: (navigation) => {} },
      { title: 'Contáctanos', onPress: (navigation) => {} },
      { title: 'Terminos y Condiciones', onPress: (navigation) => {} },
    ],
  },
  {
    title: 'Mi Cuenta',
    items: [
      { title: 'Cambiar tipo de cuenta', onPress: (navigation) => {} },
      { title: 'Cambiar nombre de Usuario', onPress: (navigation) => {} },
      { title: 'Cambiar contraseña', onPress: (navigation) => {} },
    ],
  },
];
