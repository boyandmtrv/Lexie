const Note = require('../models/Note');

exports.getAll = async (search, from, to, userId) => {
    let result = await Note.find({ owner: userId }).lean();

    if (search) {
        result = result.filter(note => note.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(note => note.date >= from);
    }

    if (to) {
        result = result.filter(note => note.date <= to);
    }

    return result;
}

exports.getOne = (noteId) => Note.findById(noteId);

exports.create = (noteData) => {

    const note = new Note(noteData);

    return note.save();
};

exports.update = (noteId, noteData) => Note.findByIdAndUpdate(noteId, noteData);

exports.delete = (noteId) => Note.findByIdAndDelete(noteId);