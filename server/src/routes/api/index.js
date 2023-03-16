import express from 'express';
const router = express.Router();

// middlewares
import {userLoginMiddleware} from '../../middleware/userLoginMiddleware';

/* user api */
router.use('/user', [userLoginMiddleware], require('./user'));

/* admin api */
router.use('/admin', require('./admin'));

module.exports = router;
