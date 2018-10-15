var mongoose = require('mongoose');

var quizPageQuestionSelectionSchema = new mongoose.Schema({
    id: Number,
    quiz: String,
    questions: 
    [{question1: String}, 
        {question2: String}, 
        {question3: String}, 
        {question4: String},
        {question5: String},
        {question6: String},
        {question7: String},
        {question8: String},
        {question9: String},
        {question10: String},
            {answers: 
                [{answer1: String}, 
                {answer2: String}, 
                {answer3: String}, 
                {answer4: String}]},
    ],

    /*questions: [
        {question1: String,
            answers: [{answer1: String}, 
                {answer2: String}, 
                {answer3: String}, 
                {answer4: String}]}, 
        {question2: String,
            answers: [{answer1: String}, 
                {answer2: String}, 
                {answer3: String}, 
                {answer4: String}]},
        {question3: String,
            answers: [{answer1: String}, 
                {answer2: String}, 
                {answer3: String}, 
                {answer4: String}]},
        {question4: String,
            answers: [{answer1: String}, 
                {answer2: String}, 
                {answer3: String}, 
                {answer4: String}]},
        {question5: String,
            answers: [{answer1: String}, 
                {answer2: String}, 
                {answer3: String}, 
                {answer4: String}]},
        {question6: String,
            answers: [{answer1: String}, 
                {answer2: String}, 
                {answer3: String}, 
                {answer4: String}]},
        {question7: String,
            answers: [{answer1: String}, 
                {answer2: String}, 
                {answer3: String}, 
                {answer4: String}]},
        {question8: String,
            answers: [{answer1: String}, 
                {answer2: String}, 
                {answer3: String}, 
                {answer4: String}]},
        {question9: String,
            answers: [{answer1: String}, 
                {answer2: String}, 
                {answer3: String}, 
                {answer4: String}]},
        {question10: String,
            answers: [{answer1: String}, 
                {answer2: String}, 
                {answer3: String}, 
                {answer4: String}]}],
              */


     },
    { collection: 'Quiz_Questions'});

const quizPageQuestionSelection = module.exports = mongoose.model('quizpagequestionselection', quizPageQuestionSelectionSchema);

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    quizPageQuestionSelection.findById(query, callback);
}