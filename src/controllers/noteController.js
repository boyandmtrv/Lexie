const router = require('express').Router();

const noteManager = require('../managers/noteManager');

router.get('/note', (req, res) => {
    res.render('note');
});

router.post('/note', (req, res) => {
    console.log(req.body);
    const {
        name,
        description,
        typeRelated,
        date
    } = req.body;

    noteManager.create({
        name,
        description,
        typeRelated,
        date
    });

    res.redirect('/records')
});

router.get('/:noteId/details', (req, res) => {
    const note = noteManager.getOne(req.params.noteId);

    if (!note) {
        return res.redirect('/404');    
    };

    res.render('details', { note });
});

module.exports = router;