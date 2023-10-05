const router = require('express').Router();
const noteManager = require('../managers/noteManager')

router.get('/records', async (req, res) => {

    const { search, from, to } = req.query;

    const notes = await noteManager.getAll(search, from, to);

    res.render('records', { notes, search, from, to })
});

module.exports = router;