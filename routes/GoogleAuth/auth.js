const GoogleStrategy = require( 'passport-google-oauth2').Strategy;
const passport = require('passport');
const { saveNewUser, getMemberData } = require('../../db/db.functions');
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, DOMAIN } = process.env;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `${DOMAIN}/api/v1/auth/google/callback`,
    passReqToCallback: true
  },
  async function(request, accessToken, refreshToken, profile, done) {
    let userObject = {
        userID: profile.id,
        username: profile.displayName,
        avatar: profile.picture,
        provider: profile.provider
    }
    await saveNewUser(userObject);
    return done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});
