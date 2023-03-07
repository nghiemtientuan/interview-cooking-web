import express from 'express';
const router = express.Router();

/* user api */
router.use('/user', require('./user'));

/* admin api */
router.use('/admin', require('./admin'));

module.exports = router;
