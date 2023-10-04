const uniqid = require('uniqid');
const notes = [];

exports.getAll = () => notes.slice();

exports.create = (noteData) => {
    
    const newNote = {
        id: uniqid(),
        ...noteData
    };

    notes.push(newNote);

    return newNote;
};