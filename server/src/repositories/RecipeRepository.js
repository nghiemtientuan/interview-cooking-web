// config
import {dataConnection} from '../config/database';

// entities
import {Recipe} from '../entities/Recipe';

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

    findRecipe(id) {
        return this.findOne({
            where: {
                id: id,
            },
            relations: [
                'recipeIngredients',
                'recipeSteps',
                'recipeTags',
                'recipeComments.user',
                'subCategory',
            ],
        });
    }
});
