const router = require('express').Router();
const usersRoutes = require('./root');

router.use('/', usersRoutes);

module.exports = router;