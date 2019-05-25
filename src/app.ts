import express, { Application, Request, Response, NextFunction, response} from 'express'
import {router as UserRouter } from './routes/user.route';
import {router as AdminRouter } from './routes/admin.route';
import {router as NewsRouter } from './routes/news.route';
import { mongoose } from './exports/mongoose';
const session = require('express-session');
import * as path from 'path';
import morgan = require('morgan');
import { request } from 'https';

const app: Application = express();
const port = 5000 || process.env.PORT 

mongoose.connect('mongodb://localhost/SchoolManagment',
 { useNewUrlParser: true, autoIndex: false })
.then(() => {
    console.log('Mongodb Connected');
})
.catch((err) => {
    console.log(err)
})

app.use(session({
     secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
  }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'pages')));
app.use('/js', express.static(path.join(__dirname, 'static/js')))
app.use('/css', express.static(path.join(__dirname, 'static/css')))
app.use(morgan('combined'))


app.all('/', (req: Request, res:Response) => {
    res.render('index');
})

app.use('/api/user', UserRouter);
app.use('/api/admin', AdminRouter);
app.use('/api/news', NewsRouter);

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})