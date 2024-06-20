const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//change USER info as required
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    minLength: [2, 'Username should be minimum 2 characters long.'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
    minLength: [10, 'Email should be minimum 10 characters long.'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minLength: [4, 'Password should be more than 4 characters long.'],
  },
  createdCourses: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Course',
    },
  ],
  signedUpCourses: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Course',
    },
  ],
});

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

const User = mongoose.model('User', userSchema);
module.exports = User;
