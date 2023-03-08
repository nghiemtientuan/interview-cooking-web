import express from 'express';
const router = express.Router();

// controllers
import * as CategoryController from '../../controller/api/user/CategoryController';
import * as VideoController from '../../controller/api/user/VideoController';
import * as RecipeController from '../../controller/api/user/RecipeController';
import * as SubscriberController from '../../controller/api/user/SubscriberController';

/* GET categories */
router.get('/categories', CategoryController.index);

/* GET videos */
router.get('/videos', VideoController.index);

/* GET recipes */
router.get('/recipes', RecipeController.index);
router.get('/recipes/:id', RecipeController.show);

/* subscribers */
router.post('/subscribers', SubscriberController.saveSubscriber);

module.exports = router;
