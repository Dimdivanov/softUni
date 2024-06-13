const User = require('../models/User');
const bcrypt = require('bcrypt');
const { SECRET } = require('../config/config');
//jwt mini lib
const jwt = require('../lib/jwt');

// TO DO check if user exists
exports.register = (userData) => User.create(userData);

exports.login = async (email, password) => {
  // Existing User - find user in db
  const user = await User.findOne({ email });
  // if it exists
  if (!user) {
    throw new Error('Invalid username or password.');
  }
  // Check if password is valid
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error('Invalid username or password.');
  }
  // generate jwt token
  const payload = {
    _id: user._id,
    email: user.email,
  };

  // return token
  const token = await jwt.sign(payload, SECRET, { expiresIn: '3h' });
  return token;
};
