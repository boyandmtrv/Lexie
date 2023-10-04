const uniqid = require('uniqid');
const notes = [
    {
        id: 'v5l7e8clnbqntn0',
        name: 'Cube 1',
        description: 'Something random here',
        typeRelated: 'personal',
        date: 2022-1-10
    },
    {
        id: 'v5l7e8clnbqntn0',
        name: 'Cube 2',
        description: 'Something here here here',
        typeRelated: 'work',
        date: 2023-10-12
    },
];

exports.getAll = (search, from, to) => {
    let result = notes.slice();

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

exports.getOne = (noteId) => notes.find(n => n.id == noteId);

exports.create = (noteData) => {
    
    const newNote = {
        id: uniqid(),
        ...noteData
    };

    notes.push(newNote);

    return newNote;
};