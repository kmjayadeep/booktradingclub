import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { configureStore } from './store';
import Routes from './routes';
import config from './config';
import { renderFullHtml } from './render';
import { validateAuthHeaders } from './middlewares/auth';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(express.static('public'));
app.use(morgan('tiny'));
app.use(cookieParser(config.cookieSecret));

mongoose.connect(config.dbUrl).then(
  () => {
    console.log('Mongodb connected');
  },
  err => {
    console.error('Mongodb error :', err);
  }
);

import localStrategy from './helpers/passport/localStrategy';
import googleStrategy from './helpers/passport/googleStrategy';
passport.use(localStrategy);
passport.use(googleStrategy);

app.use(validateAuthHeaders);
app.use('/api', Routes);

app.use('*', async (req, res) => {
  const store = await configureStore(req);
  res.send(renderFullHtml(req.originalUrl, store));
});

app.listen(PORT, () => {
  console.log('Server is listening at :', PORT);
});
