import express from 'express';
import BookRouter from './book';
import AuthRouter from './auth';
import UserRouter from './user';

const router = express.Router();

router.use('/auth', AuthRouter);
router.use('/book', BookRouter);
router.use('/user', UserRouter);

router.get('/', (req, res) => {
  res.send('BookSharing Api v1.0');
});

export default router;
