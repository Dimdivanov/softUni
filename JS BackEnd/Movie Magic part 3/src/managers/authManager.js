const User = require('../models/User');
const bcrypt = require('bcrypt');
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
  // return token
};
