const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const courseService = require('../services/courseService');
const { getErrorMessage } = require('../utils/errorUtils');

router.get('/', async (req, res) => {
  const courses = await courseService.getAll().lean();
  res.render('courses/catalog', { courses });
});
//details
router.get('/:courseId/details', async (req, res) => {
  const course = await courseService.getOneDetailed(req.params.courseId).lean();

  const signUpUsers = course.signUpList.map((user) => user.username).join(', ');
  const isOwner = course.owner && course.owner._id == req.user?._id;
  const isSigned = course.signUpList.some((user) => user._id == req.user?._id);

  res.render('courses/details', { ...course, signUpUsers, isOwner, isSigned });
});
//edit
router.get('/:courseId/edit', isOwner, async (req, res) => {
  const course = await courseService.getOne(req.params.courseId).lean();
  res.render('courses/edit', { ...course });
});
router.post('/:courseId/edit', isOwner, async (req, res) => {
  const courseData = req.body;
  try {
    await courseService.updateOne(req.params.courseId, courseData);
    res.redirect(`/courses/${req.params.courseId}/details`);
  } catch (err) {
    res.render('courses/edit', { ...courseData, error: getErrorMessage(err) });
  }
});
//delete
router.get('/:courseId/delete', isOwner, async (req, res) => {
  await courseService.delete(req.params.courseId);
  res.redirect('/courses');
});

router.get('/:courseId/sign-up', async (req, res) => {
  await courseService.signUp(req.params.courseId, req.user._id);
  res.redirect(`/courses/${req.params.courseId}/details`);
});
//create
router.get('/create', isAuth, (req, res) => {
  res.render('courses/create');
});

router.post('/create', isAuth, async (req, res) => {
  const courseData = req.body;
  try {
    await courseService.create(req.user._id, courseData);
    res.redirect('/courses');
  } catch (err) {
    res.render('courses/create', { ...courseData, error: getErrorMessage(err) });
  }
});

async function isOwner(req, res, next) {
  const course = await courseService.getOne(req.params.courseId);
  if (course.owner != req.user?._id) {
    return res.redirect(`/courses/${req.params.courseId}/details`);
  }
  next();
}

module.exports = router;
