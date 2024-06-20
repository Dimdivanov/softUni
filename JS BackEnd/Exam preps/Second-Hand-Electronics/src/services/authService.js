const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const User = require('../models/User');
const { SECRET } = require('../constants');

exports.register = async (userData) => {
  if (userData.password !== userData.rePassword) {
    throw new Error('Password missmatch');
  }
  const user = await User.findOne({ email: userData.email });
  if (user) {
    throw new Error('Email already exists');
  }
  return User.create(userData);
};
exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Email or password is invalid');
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error('Email or password do not match');
  }
  //generate jwt token
  const payload = {
    _id: user._id,
    username: user.username,
    email: user.email,
  };
  const token = await jwt.sign(payload, SECRET, { expiresIn: '3h' });
  //return token
  return token;
};
