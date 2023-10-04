const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const homeController = require('./controllers/homeController')
const noteController = require('./controllers/noteController')

const app = express();
const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

app.use(homeController);
app.use('/notes', noteController);

app.get('/note', (req, res) => {
    res.render('note')
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
