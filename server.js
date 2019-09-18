var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
// Setup express static public folder for CSS, JS and images
app.use(express.static('public'));
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    // res.send('Welcome to Brutto/s personal website!');
    res.render('home');
});


app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
