import express from 'express';
const router = express.Router();

router.use('/user', require('./user'));

router.use('/admin', require('./admin'));

module.exports = router;
