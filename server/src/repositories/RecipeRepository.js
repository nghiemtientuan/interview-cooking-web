// config
import {dataConnection} from '../config/database';

// entities
import {Recipe} from '../entities/Recipe';
import {RecipeStep} from '../entities/RecipeStep';
import {RecipeIngredient} from '../entities/RecipeIngredient';
import {RecipeComment} from '../entities/RecipeComment';

// utils
import {constant} from '../utils/const';

export const RecipeRepository = dataConnection.getRepository(Recipe).extend({
    async getRecipes(queryParam) {
        const take = queryParam?.take || 10;
        const page = queryParam?.page || 1;
        const skip = (page - 1) * take ;

        let query = this.createQueryBuilder('recipe');
        if (queryParam?.keyword && queryParam?.subCategory) {
            query.where('recipe.sub_category_id = :value', {value: queryParam?.subCategory});
            query.andWhere('recipe.title LIKE :value', {value: `%${queryParam?.keyword}%`});
        } else {
            if (queryParam?.keyword) {
                query.where('recipe.title LIKE :value', {value: `%${queryParam?.keyword}%`});
            }
            if (queryParam?.subCategory) {
                query.where('recipe.sub_category_id = :value', {value: queryParam?.subCategory});
            }
        }
        query.orderBy('recipe.created_at', 'DESC')
        query.take(take)
            .skip(skip)

        const result = await query.getMany();
        const total = await query.getCount();

        return [result, total, page, take];
    },

    async findRecipe(id, isAuthContent: false) {
        let recipe = null;
        if (isAuthContent) {
            recipe = await this.findOne({
                where: {
                    id: id,
                },
                relations: [
                    'recipeIngredients',
                    'recipeSteps',
                    'recipeTags',
                    'subCategory',
                ],
            });
            recipe.recipeComments = await dataConnection.getRepository(RecipeComment)
              .createQueryBuilder('recipeComment')
              .where('recipeComment.recipe_id = :id', {id})
              .leftJoinAndSelect('recipeComment.user', 'user')
              .orderBy('recipeComment.created_at', 'ASC')
              .getMany();

            return recipe;
        }

        const limitContent = constant.limitContent;
        recipe = await this.findOne({
            where: {
                id: id,
            },
            relations: [
                'recipeTags',
                'subCategory',
            ],
        });
        recipe.recipeSteps = await dataConnection.getRepository(RecipeStep)
          .createQueryBuilder('RecipeStep')
          .where('recipe_id = :id', {id})
          .limit(limitContent)
          .getMany();
        recipe.recipeIngredients = await dataConnection.getRepository(RecipeIngredient)
          .createQueryBuilder('RecipeIngredient')
          .where('recipe_id = :id', {id})
          .limit(limitContent)
          .getMany();
        recipe.recipeComments = await dataConnection.getRepository(RecipeComment)
          .createQueryBuilder('recipeComment')
          .where('recipeComment.recipe_id = :id', {id})
          .leftJoinAndSelect('recipeComment.user', 'user')
          .orderBy('recipeComment.created_at', 'ASC')
          .getMany();

        return recipe;
    },

    getRelationRecipes(id) {
        return this.createQueryBuilder('recipe')
          .where(`recipe.id != ${id}`)
          .orderBy('RAND()')
          .take(4)
          .getMany();
    }
});
