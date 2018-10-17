var express = require('express');
var router = express.Router();

var quizPageQuestionController = require('../controllers/quizPageQuestionController');

router.get('/quizpage/1', quizPageQuestionController.findAllQuestions);
router.get('/quizpage/2', quizPageQuestionController.findAllQuestions);
router.get('/quizpage/3', quizPageQuestionController.findAllQuestions);




module.exports = router;