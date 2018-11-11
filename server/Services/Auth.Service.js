const passport = require('passport');
const LocalStrategy = require('passport-local');

const {Strategy, ExtractJwt} = require('passport-jwt');

const User = require('../Modules/User/User');
const constants = require('../config/config');

// Local strategy
const localOpts = {
    usernameField: 'email',
};

const localStrategy = new LocalStrategy(
    localOpts,
    async (email, password, done) => {
        try {
            const user = await User.findOne({email});
            if (!user) {
                return done(null, false);
            } else if (!user.authenticateUser(password)) {
                return done(null, false);
            }

            return done(null, user);
        } catch (e) {
            return done(e, false);
        }
    },
);

// Jwt strategy
const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('authorization'),
    secretOrKey: constants.default.JWT_SECRET,
};

const jwtStrategy = new Strategy(jwtOpts, async (payload, done) => {
    try {
        const user = await User.findById(payload._id);

        if (!user) {
            return done(null, false);
        }

        return done(null, user);
    } catch (e) {
        return done(e, false);
    }
});

passport.use(localStrategy);
passport.use(jwtStrategy);

module.exports.authLocal = passport.authenticate('local', {session: false});
module.exports.authJwt = passport.authenticate('jwt', {session: false});