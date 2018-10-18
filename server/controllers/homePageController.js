var quizSelection = require('../models/quiz_selection');

exports.findAllQuizzes = function(req, res, next) {
  quizSelection.find(function (err, quizzes) {
    if (err) return next(err);
    console.log(quizzes);
    res.json(quizzes);
  })
};

