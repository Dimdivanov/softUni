const {
  Schema,
  model,
  Schema: { Types },
} = require('mongoose');

const castSchema = new Schema({
  name: { type: String, required: true },
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 120,
  },
  born: {
    type: String,
    required: true,
  },
  nameInMovie: {
    type: String,
    required: true,
  },
  castImg: {
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
  movie: {
    type: Types.ObjectId,
    ref: 'Movie',
  },
});

const Cast = model('Article', castSchema);

module.exports = { Cast };
