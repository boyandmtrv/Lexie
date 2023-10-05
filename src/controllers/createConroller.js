const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('notes/create')
});

module.exports = router;