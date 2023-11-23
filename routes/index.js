const router = require('express').Router();
const passport = require('passport');
const authRoutes = require('./auth');

router.use('/api/auth', authRoutes);


// Just for testing from Postman
router.get('/api/protected', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.send({message: 'You have entered to protected page'})
});

router.get('/api/test', (req, res) => {
    res.json('Test')
})

module.exports = router;