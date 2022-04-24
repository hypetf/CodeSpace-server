const express = require('express');
const router = express.Router();
const googleAuth = require('./GoogleAuth');
const githubAuth = require('./GithubAuth');
const getUser = require('./getUser');

router.use('/v1/auth/', googleAuth);
router.use('/v1/auth/', githubAuth);
router.use('/v1/auth/', githubAuth);
router.use('/v1/user/', getUser);
router.use('/v1/user/logout', (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
});

module.exports = router;