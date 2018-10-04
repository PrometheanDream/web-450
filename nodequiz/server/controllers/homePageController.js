var quizselection = require('../models/quiz_selection');

exports.findAllQuizzes = function(req, res, next) {
        quizselection.find({'quizselection': req.params.name})
    .sort({'_id': -1})
    .exec(function(err, name) {
        if (err) { return next (err); }
        
        res.json(name);
        
    });
    
};

