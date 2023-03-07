import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
const errorHandler = require('errorhandler');
const session = require('express-session');
const bodyParser = require('body-parser');
import 'reflect-metadata';

// routers
import indexRouter from './routes';

// configs
import { dataConnection } from './config/database';

const isProduction = process.env.NODE_ENV === 'production';

let app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'LightBlog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));


// path for file static
app.use(express.static(path.join(__dirname, '../public')));

// establish database connection
dataConnection.initialize().then(() => {
    console.log("Data Source has been initialized!")
}).catch((err) => {
    console.error("Error during Data Source initialization:", err)
})

// routers
app.use('/', indexRouter);

// Handle exception
if (!isProduction) {
    app.use(errorHandler());
}
app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
        errors: {
            message: err.message,
            error: isProduction ? {} : err,
        },
    });
});

export default app;
