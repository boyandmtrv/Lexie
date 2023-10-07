const router = require('express').Router();

const homeController = require('./controllers/homeController');
const dashboardController = require('./controllers/dashboardController');
const noteContoller = require('./controllers/noteController');
const recordController = require('./controllers/recordsContoller');
const userController = require('./controllers/userController');

router.use(homeController);
router.use(dashboardController);
router.use('/notes', noteContoller);
router.use(recordController);
router.use('/users', userController);

router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;