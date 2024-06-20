const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { HASH } = require('../constants');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    minLength: 10,
  },
  password: {
    type: String,
    required: true,
    minLength: 4,
  },
  createdParts: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Part',
    },
  ],
  buyPart: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Part',
    },
  ],
});

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, HASH);
});

const User = mongoose.model('User', userSchema);
module.exports = User;
