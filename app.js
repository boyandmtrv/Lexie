const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const PORT = 5000;

app.use(express.static('./src/public'));

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/note', (req, res) => {
    res.render('note')
})

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

app.get('/create', (req, res) => {
    res.render('create')
})

app.listen(PORT, () => console.log('Server is listening'))
