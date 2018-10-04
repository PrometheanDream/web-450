var mongoose = require('mongoose');

var quizSelectionSchema = new mongoose.Schema({
    id: Number,
    name: String
    
});

const quizSelection = module.exports = mongoose.model('quizSelection', quizSelectionSchema);

module.exports.getByName = (name, callback) => {
    var query = {name: name};
    quizSelection.findByName(query, callback);
}