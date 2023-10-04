const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const homeController = require('./controllers/homeController');
const dashboardController = require('./controllers/dashboardController');
const createContoller = require('./controllers/createConroller');
const noteContoller = require('./controllers/noteController');
const recordController = require('./controllers/recordsContoller');

const app = express();
const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

app.use(homeController);
app.use(dashboardController);
app.use(createContoller);
app.use('/notes', noteContoller);
app.use(recordController);

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
