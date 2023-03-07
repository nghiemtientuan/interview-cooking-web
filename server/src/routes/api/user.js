import express from 'express';
const router = express.Router();

import { index } from '../../controller/api/user/CategoryController'

/* GET categories */
router.get('/categories', index);

module.exports = router;
