const crypto = require('crypto');
const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const pathToKey = path.join(__dirname, '..', 'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');

function genPassword(password) {
    const salt = crypto.randomBytes(32).toString();
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString();

    return {
        salt,
        hash
    }
}

function issueJWT(user){
    const id = user._id;
    const expiresIn = '1d';
    const payload = {
        sub: id,
        iat: Date.now()
    }

    const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {expiresIn, algorithm: 'RS256'});

    return {
        token: 'Bearer ' + signedToken,
        expires: expiresIn
    }
}

module.exports.genPassword = genPassword;
module.exports.issueJWT = issueJWT;