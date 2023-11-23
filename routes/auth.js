const router = require('express').Router();
const User = require('../models/user');
const utils = require('../lib/utils');

//TODO
router.get('/register', (req, res, next) => {
    res.render('register')
});

router.post('/register', async (req, res) => {
    const isLoginExists = await User.findOne({ username: req.body.login });
    if (isLoginExists) {
        res.json('Such a login already exists');
    } else {
        const { salt, hash } = utils.genPassword(req.body.password);

        const newUser = new User({
            username: req.body.username,
            hash,
            salt
        });

        try {
            const user = await newUser.save();
            res.json({ user })
        } catch (e) {
            res.json(e)
        }
    }
})

//TODO
router.get('/login', (req, res, next) => {
    res.send('Login')
});

//TODO
router.get('/protected', (req, res, next) => {
    res.send('Protected')
});

module.exports = router;