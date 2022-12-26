const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) =>{
    res.render('home');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/movies', (req, res) => {
    res.render('movies');
});

app.get('/flowers', (req, res) => {
    res.render('flowers');
});

app.get('/countries', (req, res) => {
    res.render('countries');
});

app.get('/pointplotter', (req, res) => {
    res.render('pointplotter');
});

app.get('/sierpinski', (req, res) => {
    res.render('sierpinski');
});

app.get('/dicegame', (req, res) => {
    res.render('dicegame');
});

app.get('/2playerdicegame', (req, res) => {
    res.render('2playerdicegame');
});


app.listen(3030, () => {
    console.log('app listening on http://localhost:3030');
});