const express = require('express');
const routes = require('./routes');
const passport = require('passport');
require('./config/database.js');

require('dotenv').config();
const app = express();

require('./config/passport')(passport);

app.use(routes);

app.listen(3000, () => {
    console.log('App is listening on port 3000')
})