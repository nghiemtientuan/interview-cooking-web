import express from 'express';
const router = express.Router();

// controllers
import * as CategoryController from '../../controller/api/user/CategoryController';
import * as VideoController from '../../controller/api/user/VideoController';
import * as RecipeController from '../../controller/api/user/RecipeController';

/* GET categories */
router.get('/categories', CategoryController.index);

/* GET videos */
router.get('/videos', VideoController.index);

/* GET recipes */
router.get('/recipes', RecipeController.index);
router.get('/recipes/:id', RecipeController.show);

module.exports = router;
