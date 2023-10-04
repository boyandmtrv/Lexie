const router = require('express').Router();

router.get('/note', (req, res) => {
    res.render('note')
});

router.post('/note', (req, res) => {
    console.log(req.body);

    res.redirect('/records')
});

module.exports = router;