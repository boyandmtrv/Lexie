const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');

const app = express();
const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/note', (req, res) => {
    res.render('note')
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
});

app.get('/create', (req, res) => {
    res.render('create')
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
