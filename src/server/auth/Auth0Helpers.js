import passport from 'passport';

const env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL
};

exports.authVerify = passport.authenticate('auth0', { failureRedirect: '/failed-login' });

exports.login = (req, res) => res.render('login', { env: env });

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};
