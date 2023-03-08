import express from 'express';
const router = express.Router();

// controllers
import * as CategoryController from '../../controller/api/user/CategoryController';
import * as VideoController from '../../controller/api/user/VideoController';

/* GET categories */
router.get('/categories', CategoryController.index);

/* GET videos */
router.get('/videos', VideoController.index);

module.exports = router;
