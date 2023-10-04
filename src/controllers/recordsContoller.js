const router = require('express').Router();

router.get('/records', (req, res) => {
    res.render('records')
});

module.exports = router;