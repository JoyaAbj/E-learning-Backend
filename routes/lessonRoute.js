const express = require('express');
const router = express.Router();
const {addLesson, getLessonByID} = require('../controllers/lessonController');

router.post('/add', addLesson);
router.get('/get/:id', getLessonByID);

module.exports = router;