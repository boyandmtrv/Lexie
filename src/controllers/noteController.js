const router = require('express').Router();

const noteManager = require('../managers/noteManager');

router.get('/note', (req, res) => {
    res.render('notes/note');
});

router.post('/note', async (req, res) => {
    console.log(req.body);
    const {
        name,
        description,
        typeRelated,
        date
    } = req.body;

    await noteManager.create({
        name,
        description,
        typeRelated,
        date,
        owner: req.user._id
    });

    res.redirect('/records')
});

router.get('/:noteId/details', async (req, res) => {
    const note = await noteManager.getOne(req.params.noteId).lean();

    if (!note) {
        return res.redirect('/404');
    };

    res.render('notes/details', { note });
});

router.get('/:noteId/delete', async (req, res) => {
    const note = await noteManager.getOne(req.params.noteId).lean()
    res.render('notes/delete', { note })
})

module.exports = router;