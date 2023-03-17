const express = require('express');
const passport = require('passport');
const router = express.Router();
require('./auth');

router.get('/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

router.get('/google/callback',
  passport.authenticate( 'google', {
    successRedirect: `${process.env.DOMAIN}/api/v1/auth/google/success`,
    failureRedirect: `${process.env.DOMAIN}/api/v1/auth/google/failure`
  })
);

router.get('/google/success', (req, res) => {
    if(req.user) {
        req.session.user = req.user;
        res.redirect(`${process.env.CLIENT_DOMAIN}/signin`)
    }
});

router.get('/google/failure', (req, res) => {
    res.redirect(`${process.env.CLIENT_DOMAIN}/signin`);
});

module.exports = router;