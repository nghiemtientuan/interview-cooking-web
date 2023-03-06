import express from 'express';
const router = express.Router();

/* user api */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* apis */
router.use('/api', require('./api/index'));

router.use('*', (req, res, next) => {
  const err = new Error('404 Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
