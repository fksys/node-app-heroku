// #### Autentificacion con google Funcionando OK ####

const passport = require('passport');

module.exports = app => {
  app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['profile'],
    }));

  app.get('/auth/google/callback',
    passport.authenticate('google', {
      failureRedirect: 'auth/google/failure',
    }), (req, res) => {
      // console.log('BIENVENIDO', res);
      //res.redirect('/');
    });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // app.use('/', (req, res) => {
  //   res.status(200).send('LA API FUNCIONA CORRECTAMENTE');
  // });
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
