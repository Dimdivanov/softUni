const mongoose = require('mongoose');
const ObjectIdType = mongoose.Types.ObjectId;

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    min: [1800, 'Cannot be before {VALUE}'],
    max: [2024, 'Cannot be after {VALUE}'],
  },
  rating: {
    type: Number,
    required: true,
    min: [0, "Rating can't be below {VALUE} stars"],
    max: [10, "Rating can't be above {VALUE} stars"],
  },
  description: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 500,
  },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        // Regular expression to match HTTP and HTTPS URLs
        return /^(http|https):\/\/[^ "]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  // a collection of objId's and ref to Cast Model
  //   cast: {
  //     type: ObjectIdType,
  //     ref: 'Cast',
  //   },
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
