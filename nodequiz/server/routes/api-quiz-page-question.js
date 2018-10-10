var express = require('express');
var router = express.Router();

var quizPageQuestionController = require('../controllers/quizPageQuestionController');

router.get('/', quizPageQuestionController.findAllQuestions);

module.exports = router;