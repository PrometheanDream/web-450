var quizSelection = require('../models/quiz_selection');

exports.findAllQuizzes = function(req, res, next) {
        quizSelection.find({}).then(function(list) {res.json(list)}
        )};

