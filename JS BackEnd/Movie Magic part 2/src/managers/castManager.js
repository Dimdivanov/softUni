const Cast = require('../models/Cast');

exports.create = (castData) => Cast.create(castData);
exports.findOne = (castData) => Cast.findById(castData);
exports.getAll = () => Cast.find();
