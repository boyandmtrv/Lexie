const Note = require('../models/Note');

exports.getAll = async (search, from, to) => {
    let result = await Note.find().lean();

    if (search) {
        result = result.filter(note => note.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    };

    if (from) {
        result = result.filter(note => note.date >= from);
    };

    if (to) {
        result = result.filter(note => note.date <= to)
    };

    return result;
}

exports.getOne = (noteId) => Note.findById(noteId);

exports.create = async (noteData) => {
    
    const note = new Note(noteData);

    await note.save();

    return note;
};