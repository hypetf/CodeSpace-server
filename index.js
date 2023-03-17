require('dotenv').config();
const express = require('express');
const app = express();
const { PORT, MONGODB_URI, SESSION_SECRET } = process.env;
const routes = require('./routes');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(
    session({
        secret: SESSION_SECRET,
        name: 'connect.sid',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 3600000 * 24
            // maxAge: 5000
        }
    })
);
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

cors({
    origin: 'http://localhost:3000',
    credentials: true
});


mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch((err) => console.log(err));

app.use('/api', routes);

app.use((req, res, next) => {
    req.setTimeout(30000, () => {
        let err = new Error('Request Timeout');
        err.status = 408;
        next(err);
    });
    res.setTimeout(20000, () => {
        let err = new Error('Service Unavailable');
        err.status = 503;
        next(err);
    });
    next();
});

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});
