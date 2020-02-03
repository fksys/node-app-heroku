// #### Autentificacion con google Funcionando OK ####

const passport = require('passport');

module.exports = app => {
  app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['profile'],
    }));

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      successFlash: true,
      successMessage: 'Bienvenido',
      successRedirect: '/surveys',
      failureRedirect: '/',
    }),
  );

  app.get('/api/logout', (req, res) => {
    console.log('res', req);
    req.logout();
    res.redirect('/');
  });

  app.get('/', (req, res) => {
    res.send('LA API FUNCIONA CORRECTAMENTE');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
