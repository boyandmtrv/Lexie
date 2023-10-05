const router = require('express').Router();
const noteManager = require('../managers/noteManager');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/records', isAuth, async (req, res) => {

    const { search, from, to } = req.query;

    const notes = await noteManager.getAll(search, from, to);

    res.render('records', { notes, search, from, to })
});

module.exports = router;