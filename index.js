const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', e => console.log('############ error ############', e));
db.on('open', () => {
  console.log('connected');
});
const app = express();

app.use(
  cookieSession({
    name: 'session',
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  }),
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
// require('./routes/authRoutes')(app) LO mismo que lo anterior;

const PORT = process.env.PORT || 5000;
app.listen(PORT);
