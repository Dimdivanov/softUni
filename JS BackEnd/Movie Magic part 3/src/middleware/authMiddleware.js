const jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');

exports.auth = async (req, res, next) => {
  const token = req.cookies['auth'];

  if (!token) {
    return next();
  }
  try {
    const decodedToken = await jwt.verify(token, SECRET);
    // req.user = id , email
    req.user = decodedToken;
    //authenticate user to every page to display menu
    res.locals.isAuthenticated = true;
    next();
  } catch (error) {
    //display error here
    res.clearCookie('auth');
    res.redirect('/auth/login');
  }
};

exports.isAuth = (req, res, next) => {
  if (!req.user) {
    return res.redirect('/auth/login');
  }
  next();
};
