const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config();
require('./config/passport');

const authRoutes = require('./routes/auth');
const invoiceRoutes = require('./routes/invoice');

const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/invoices', invoiceRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
