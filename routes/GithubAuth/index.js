const express = require('express');
const passport = require('passport');
const router = express.Router();
require('./auth');

router.get('/github',
    passport.authenticate('github', {
        scope: ['read:user', 'user:email']
    })
);

router.get('/github/callback',
  passport.authenticate( 'github', {
    successRedirect: `${process.env.DOMAIN}/api/v1/auth/github/success`,
    failureRedirect: `${process.env.DOMAIN}/api/v1/auth/github/failure`
  })
);

router.get('/github/success', (req, res) => {
    if(req.user) {
        req.session.user = req.user;
        res.redirect(`${process.env.CLIENT_DOMAIN}/signin`)
    }
});

router.get('/github/failure', (req, res) => {
    res.redirect(`${process.env.CLIENT_DOMAIN}/signin`);
});

module.exports = router;
