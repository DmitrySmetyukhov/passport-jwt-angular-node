const express = require('express');
const path = require('path');
const routes = require('./routes');
const passport = require('passport');
require('./config/database.js');
require('./config/passport')(passport);
require('dotenv').config();


const app = express();

app.use(passport.initialize());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
    console.log('App is listening on port 3000')
})