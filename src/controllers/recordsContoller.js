const router = require('express').Router();
const noteManager = require('../managers/noteManager')

router.get('/records', (req, res) => {

    const { search, from, to } = req.query;

    const notes = noteManager.getAll(search, from, to);

    res.render('records', { notes })
});

module.exports = router;