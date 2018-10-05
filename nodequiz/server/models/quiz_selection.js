var mongoose = require('mongoose');

var quizSelectionSchema = new mongoose.Schema({
    id: Number,
    name: String
    
});

const quizSelection = module.exports = mongoose.model('quizSelection', quizSelectionSchema);

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    quizSelection.findById(query, callback);
}