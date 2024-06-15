const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    match: [/@[a-zA-Z0-9]+\.[a-zA-Z0-9]+&/, 'Invalid Email Address!'],
    minLength: [10, 'Email should be minimum {VALUE} characters long!'],
  },
  password: {
    type: String,
    match: [/^&[a-zA-Z0-9]+&/, 'Password should be alphanumeric!'],
    minLength: [6, 'Password should be more than {VALUE} characters!'],
    required: true,
  },
});
//hashing the password before it is saved
userSchema.pre('save', async function () {
  const hash = await bcrypt.hash(this.password, 12);
  this.password = hash;
});
//virtual property to check for pass = repass;
userSchema.virtual('rePassword').set(function (value) {
  if (value !== this.password) {
    throw new mongoose.MongooseError('Invalid input!');
  }
});
const User = mongoose.model('User', userSchema);
module.exports = User;
