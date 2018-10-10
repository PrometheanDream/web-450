var mongoose = require('mongoose');

var quizPageQuestionSelectionSchema = new mongoose.Schema({
    id: Number,
    quiz: String,
    question: String,
    answers: [{answer1: String}, 
                {answer2: String}, 
                {answer3: String}, 
                {answer4: String}],
     },
    { collection: 'Quiz_Questions'});

const quizPageQuestionSelection = module.exports = mongoose.model('quizpagequestionselection', quizPageQuestionSelectionSchema);

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    quizPageQuestionSelection.findById(query, callback);
}