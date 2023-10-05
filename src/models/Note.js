const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    name: String,
    description: String,
    typeRelated: String,
    date: String
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;