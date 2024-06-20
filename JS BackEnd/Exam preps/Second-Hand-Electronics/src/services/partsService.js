const Part = require('../models/Part');
const User = require('../models/User');

exports.create = async (userId, partData) => {
  const createdPart = await Part.create({
    owner: userId,
    ...partData,
  });
  console.log(createdPart);
  await User.findByIdAndUpdate(userId, { $addToSet: { createdParts: createdPart._id } });
  return createdPart;
};
//catalogs
exports.getAll = () => Part.find();
//details
exports.getOne = (partId) => Part.findById(partId);
exports.getOneDetailed = (partId) => this.getOne(partId).populate('owner').populate('buyingList');

//edit and update
exports.updateOne = (partId, partData) => Part.findByIdAndUpdate(partId, partData, { runValidators: true });
//delete
exports.delete = (partId) => Part.findByIdAndDelete(partId);
//when buying/liking/etc an item
exports.buyUp = async (partId, userId) => {
  await Part.findByIdAndUpdate(partId, { $addToSet: { buyingList: userId } });
  await User.findByIdAndUpdate(userId, { $addToSet: { buyPart: partId } });
};
//searching
exports.search = (name, type) => {
  let query = {};
  if (name) {
    query.name = { $regex: new RegExp(name, 'i') };
  }

  if (type) {
    query.type = { $regex: new RegExp(type, 'i') };
  }
  return Part.find(query);
};
