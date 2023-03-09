import express from 'express';
const router = express.Router();

/* web */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* api */
router.use('/api', require('./api'));

/* not found */
router.use('*', (req, res, next) => {
  const err = new Error('404 Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
