const mongoose = require('mongoose');
require('dotenv').config();

const devConnection = process.env.DB_STRING;

if(process.env.NODE_ENV === 'development'){
    mongoose.connect(devConnection);
    mongoose.connection.on('connected', () => {
        console.log('Database connected');
    })
}