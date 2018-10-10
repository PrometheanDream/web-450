var quizPageQuestionSelection = require('../models/quiz_question_selection');

exports.findAllQuestions = function(req, res, next) {
  quizPageQuestionSelection.find(function (err, questions) {
    if (err) return next(err);
    console.log(questions);
    res.json(questions);
  })
};