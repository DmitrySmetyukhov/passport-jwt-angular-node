const mongoose = require('mongoose');

const UserSchema = new mongoose.Scheema({
    username: String,
    hash: String,
    salt: String
});

mongoose.model('User', UserSchema);