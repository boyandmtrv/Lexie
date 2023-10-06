eaf6f671

<div class="user-create-box">
                            <li><a href="/notes/note">Create Note</a></li>
                    </div>


If there is issue first check and remove {auth} in express config and then authMiddleware









const router = require('express').Router();
const noteManager = require('../managers/noteManager');

router.get('/records', async (req, res) => {

    const { search, from, to } = req.query;

    const notes = await noteManager.getAll(search, from, to);

    const note = await noteManager.getOne(req.params.noteId).lean();

    const isOwner = note.owner.toString() === req.user._id;

    res.render('records', { notes, search, from, to }, isOwner)
});

module.exports = router;