const router = require('express').Router();
const noteManager = require('../managers/noteManager')

router.get('/records', (req, res) => {
    const notes = noteManager.getAll();

    res.render('records', { notes })
});

module.exports = router;