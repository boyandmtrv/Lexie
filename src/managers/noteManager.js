const notes = [];

exports.getAll = () => notes.slice();

exports.create = (noteData) => {
    
    const newNote = {
        id: notes.length + 1,
        ...noteData
    };

    notes.push(newNote);

    return newNote;
};