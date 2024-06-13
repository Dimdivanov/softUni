const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
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
