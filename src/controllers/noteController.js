const router = require('express').Router();

const noteManager = require('../managers/noteManager');

router.get('/note', (req, res) => {
    console.log(noteManager.getAll());
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
        date: Number(date)
    });

    res.redirect('/records')
});

module.exports = router;