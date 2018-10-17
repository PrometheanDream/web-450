var quizPageQuestionSelection = require('../models/quiz_page_question_selection');

exports.findAllQuestions = function(req, res, next) {
  quizPageQuestionSelection.findOne(req.params.quizId, function (err, quiz) {
    if (err) return next(err);
    console.log(quiz);
    res.json(quiz);
  })
};