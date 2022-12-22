const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

// create an express server
const app = express();

// get express to serve static content to the user (images, css, js, etc)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// register handlebars as the templating engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) =>{
    res.render('home');
});

app.get('/1', (req, res) => {
    res.render('1');
});

app.get('/2', (req, res) => {
    res.render('2');
});

app.get('/3', (req, res) => {
    res.render('3');
});

app.get('/4', (req, res) => {
    res.render('4');
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