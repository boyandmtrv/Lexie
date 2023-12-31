const router = require('express').Router();

const homeController = require('./controllers/homeController');
const noteContoller = require('./controllers/noteController');
const userController = require('./controllers/userController');

router.use(homeController);
router.use('/notes', noteContoller);
router.use('/users', userController);

router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;