const router = require('express').Router();
const passport = require('passport');
const authRoutes = require('./auth');

router.use('/auth', authRoutes);


// Just for testing from Postman
router.get('/protected', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.send('You have entered to protected page')
});

router.get('/test', (req, res) => {
    res.json('Test')
})

module.exports = router;