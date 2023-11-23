const express = require('express');
const routes = require('./routes');
require('./config/database.js')

require('dotenv').config();
const app = express();


app.use(routes);

app.listen(3000, () => {
    console.log('App is listening on port 3000')
})