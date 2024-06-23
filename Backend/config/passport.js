const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User'); // Ensure the path is correct

require('../config/passport');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
    // Check if user already exists in database
    const existingUser = await User.findOne({ googleId: profile.id });
    if (existingUser) {
        return done(null, existingUser); // User already exists, so return that user
    }

    // If user doesn't exist, create a new user record
    const newUser = new User({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value
    });
    await newUser.save();
    done(null, newUser); // Return newly created user
}));

passport.serializeUser((user, done) => {
    done(null, user.id); // Serialize user ID to store in session
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id); // Deserialize user from stored ID
    done(null, user); // Return user object
});
