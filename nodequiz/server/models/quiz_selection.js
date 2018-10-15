var mongoose = require('mongoose');

var quizSelectionSchema = new mongoose.Schema({
    id: Number,
    name: String 
},
    { collection: 'Quiz_Collection'});

const quizSelection = module.exports = mongoose.model('quizselection', quizSelectionSchema);

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    quizSelection.findById(query, callback);
}
