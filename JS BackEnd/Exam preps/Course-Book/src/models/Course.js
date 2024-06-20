const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Invalid input.'],
      minLength: 5,
    },
    type: {
      type: String,
      required: true,
      minLength: 3,
    },
    certificate: {
      type: String,
      required: true,
      minLength: 2,
    },
    image: {
      type: String,
      required: true,
      validate: /^https?:\/\//i,
    },
    description: {
      type: String,
      minLength: 10,
      required: true,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    signUpList: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    ],
    owner: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
