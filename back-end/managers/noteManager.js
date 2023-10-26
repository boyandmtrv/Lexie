const Note = require('../models/Note');

exports.getAll = async (userId) => {
    let result = await Note.find({ owner: userId }).lean();

    return result;
}

exports.getOne = (noteId) => Note.findById(noteId);

exports.create = (noteData) => {

    const note = new Note(noteData);

    return note.save();
};

exports.update = (noteId, noteData) => Note.findByIdAndUpdate(noteId, noteData);

exports.delete = (noteId) => Note.findByIdAndDelete(noteId);