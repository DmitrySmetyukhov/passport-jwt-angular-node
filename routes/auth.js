const router = require('express').Router();

//TODO
router.get('/register', (req, res, next) => {
   res.send('REGISTER')
});

//TODO
router.get('/login', (req, res, next) => {
    res.send('Login')
});

//TODO
router.get('/protected', (req, res, next) => {
    res.send('Protected')
});

module.exports = router;