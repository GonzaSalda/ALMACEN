import express from 'express';
import session from 'express-session';
import util from 'util';

const app = express();

app.use(express.static('public'));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));