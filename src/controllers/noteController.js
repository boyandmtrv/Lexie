const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const noteManager = require('../managers/noteManager');
const { generateOptions } = require('../utils/viewHelpers');

router.use(isAuth)

router.get('/note', (req, res) => {
    res.render('record/note',);
});

router.post('/note', async (req, res) => {
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

    res.render('record/details', { note });
});

router.get('/:noteId/delete', async (req, res) => {
    const note = await noteManager.getOne(req.params.noteId).lean();

    res.render('record/delete', { note });
});

router.post('/:noteId/delete', async (req, res) => {
    await noteManager.delete(req.params.noteId);

    res.redirect('/records')
});


router.get('/:noteId/edit', async (req, res) => {
    const note = await noteManager.getOne(req.params.noteId).lean();

    const options = generateOptions(note.typeRelated);

    res.render('record/edit', { note, options })
});

router.post('/:noteId/edit', async (req, res) => {
    const noteData = req.body;

    await noteManager.update(req.params.noteId, noteData);

    res.redirect(`/notes/${req.params.noteId}/details`)
});

module.exports = router;