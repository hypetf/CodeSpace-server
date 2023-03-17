const GitHubStrategy = require( 'passport-github2').Strategy;
const passport = require('passport');
const { saveNewUser, getMemberData } = require('../../db/db.functions');
const {GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, DOMAIN} = process.env;

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: `${DOMAIN}/api/v1/auth/github/callback`
  },
  async function(accessToken, refreshToken, profile, done) {
    let userObject = {
      userID: profile.id,
      username: profile.username,
      avatar: profile._json.avatar_url,
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
