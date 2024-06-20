const Course = require('../models/Course');
const User = require('../models/User');

exports.create = async (userId, courseData) => {
  const createdCourse = await Course.create({
    owner: userId,
    ...courseData,
  });

  await User.findByIdAndUpdate(userId, { $addToSet: { createdCourses: createdCourse._id } });
  return createdCourse;
};

exports.getAll = () => Course.find();
exports.getLatest = () => Course.find().sort({ createdAt: -1 }).limit(3);
exports.getOne = (courseId) => Course.findById(courseId);
exports.getOneDetailed = (courseId) => this.getOne(courseId).populate('owner').populate('signUpList');

exports.updateOne = (courseId, courseData) => Course.findByIdAndUpdate(courseId, courseData, { runValidators: true });

exports.signUp = async (courseId, userId) => {
  await Course.findByIdAndUpdate(courseId, { $addToSet: { signUpList: userId } });
  await User.findByIdAndUpdate(userId, { $addToSet: { signedUpCourses: courseId } });
};

exports.delete = (courseId) => Course.findByIdAndDelete(courseId);

// if search 
// exports.search = (stoneText) => {
//   if (stoneText) {
//       return (Stone.find({ name: { $regex: stoneText, $options: 'i' } }).lean());
//   }
// }
// find the 3
// exports.findTheThree = () => Stone.find({}).sort({ createdAt: -1 }).lean();