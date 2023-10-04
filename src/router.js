const router = require('express').Router();

const homeController = require('./controllers/homeController');
const dashboardController = require('./controllers/dashboardController');
const createContoller = require('./controllers/createConroller');
const noteContoller = require('./controllers/noteController');
const recordController = require('./controllers/recordsContoller');

router.use(homeController);
router.use(dashboardController);
router.use(createContoller);
router.use('/notes', noteContoller);
router.use(recordController);

router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;
