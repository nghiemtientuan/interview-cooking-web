// config
import {dataConnection} from '../config/database';

// entities
import {RecipeComment} from '../entities/RecipeComment';

export const RecipeCommentRepository = dataConnection.getRepository(RecipeComment).extend({
  findRecipeCommentById(recipeId, commentId, userId) {
    return this.findOne({
      where: {
        id: commentId,
        recipe_id: recipeId,
        user_id: userId,
      }
    });
  },

  createRecipeComment(recipeId, userId, content) {
    let newComment = new RecipeComment();
    newComment.recipe_id = recipeId;
    newComment.user_id = userId;
    newComment.content = content;

    return this.save(newComment);
  },
});
