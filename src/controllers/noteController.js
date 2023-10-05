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

    const isOwner = note.owner?.toString() === req.user._id;

    res.render('notes/details', { note, isOwner });
});

router.get('/:noteId/delete', async (req, res) => {
    const note = await noteManager.getOne(req.params.noteId).lean();
    res.render('notes/delete', { note })
})

router.post('/:noteId/delete', async (req, res) => {
    await noteManager.delete(req.params.noteId);

    res.redirect('/records')
});


router.get('/:noteId/edit', async (req, res) => {
    const note = await noteManager.getOne(req.params.noteId).lean();
    res.render('notes/edit', { note })
})

router.post('/:noteId/edit', async (req, res) => {
    const noteData = req.body;

    await noteManager.update(req.params.noteId, noteData);

    res.redirect(`/notes/${req.params.noteId}/details`)
});

module.exports = router;