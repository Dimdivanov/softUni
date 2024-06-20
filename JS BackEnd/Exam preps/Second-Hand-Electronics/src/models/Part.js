const mongoose = require('mongoose');

const partSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 10,
    },
    type: {
      type: String,
      required: true,
      minLength: 2,
    },
    damages: {
      type: String,
      required: true,
      minLength: 10,
    },
    image: {
      type: String,
      required: true,
      validate: /^https?:\/\//i,
    },
    description: {
      type: String,
      required: true,
      minLenght: 10,
      maxLength: 200,
    },
    production: {
      type: Number,
      required: true,
      min: 1900,
      max: 2024,
    },
    exploitation: {
      type: Number,
      required: true,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    buyingList: [
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

const Part = mongoose.model('Part', partSchema);

module.exports = Part;
