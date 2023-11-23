const router = require('express').Router();
const User = require('../models/user');
const utils = require('../lib/utils');
router.get('/register', (req, res, next) => {
    res.render('register')
});

router.post('/register', async (req, res) => {
    const isLoginExists = await User.findOne({ username: req.body.username });
    if (isLoginExists) {
        res.json({message: 'Such a login already exists'});
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

router.get('/login', (req, res, next) => {
    res.render('login')
});

router.post('/login', async (req, res, next) => {
    try {

        const user = await User.findOne({ username: req.body.username });

        if (!user) {
            return res.status(401).json({message: 'User not found'})
        }

        const isValid = utils.isPasswordValid(req.body.password, user.hash, user.salt);

        if (isValid) {
            const tokenObject = utils.issueJWT(user);
            res.status(200).json({ token: tokenObject.token })
        } else {
            res.status(401).json({message: 'Wrong password'})
        }
    } catch (e) {
        next(e)
    }

});

module.exports = router;