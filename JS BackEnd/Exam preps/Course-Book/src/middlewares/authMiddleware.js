const jwt = require('../lib/jwt');
const { SECRET } = require('../constants');

exports.authMiddleware = async (req, res, next) => {
  const token = req.cookies['auth'];
  if (!token) {
    return next();
  }

  try {
    const decodedToken = await jwt.verify(token, SECRET);
    req.user = decodedToken;

    //this here is for handlebars
    res.locals.isAuthenticated = true;
    res.locals.user = decodedToken;

    next();
  } catch (error) {
    res.clearCookie('auth');
    res.redirect('auth/login');
  }
};

exports.isAuth = async (req, res, next) => {
  if (!req.user) {
    //path may change
    return res.redirect('auth/login');
  }

  next();
};

exports.userIsLogged = async (req, res, next) => {
  if (req.user) {
    //path may change
    return res.redirect('/');
  }

  next();
};
