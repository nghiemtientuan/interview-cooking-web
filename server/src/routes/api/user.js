import express from 'express';
const router = express.Router();

// controllers
import * as CategoryController from '../../controller/api/user/CategoryController';
import * as VideoController from '../../controller/api/user/VideoController';
import * as RecipeController from '../../controller/api/user/RecipeController';
import * as SubscriberController from '../../controller/api/user/SubscriberController';
import * as UserController from '../../controller/api/user/UserController';

// middlewares
import {isLoginMiddleware} from '../../middleware/isLoginMiddleware';

/* GET user */
router.get('/', UserController.getUser);
router.post('/', UserController.updateUser);

/* GET categories */
router.get('/categories', CategoryController.index);

/* GET videos */
router.get('/videos', VideoController.index);

/* GET recipes */
router.get('/recipes', RecipeController.index);
router.get('/recipes/:id', RecipeController.show);
router.get('/recipes/:id/relations', RecipeController.getRelationRecipes);
router.post('/recipes/:id/comments', [isLoginMiddleware], RecipeController.createNewComment);
router.patch('/recipes/:id/comments/:commentId', [isLoginMiddleware], RecipeController.updateComment);
router.delete('/recipes/:id/comments/:commentId', [isLoginMiddleware], RecipeController.deleteComment);

/* subscribers */
router.post('/subscribers', SubscriberController.saveSubscriber);

module.exports = router;
