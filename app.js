const express = require('express');
const path = require('path');
const routes = require('./routes');
const passport = require('passport');
require('./config/database.js');
require('./config/passport')(passport);

require('dotenv').config();
const app = express();

// require('./config/passport')(passport);
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(3000, () => {
    console.log('App is listening on port 3000')
})