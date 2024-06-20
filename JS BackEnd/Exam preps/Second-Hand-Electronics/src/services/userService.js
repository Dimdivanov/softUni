const User = require('../models/User');

exports.getInfo = (userId) => User.findById(userId).populate('createdParts').populate('buyPart');
