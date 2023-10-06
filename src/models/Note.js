const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    name: String,
    description: String,
    typeRelated: String,
    date: String,
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;