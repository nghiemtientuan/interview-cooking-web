// utils
import {paginateResponse} from '../../../utils/paginateResponse';
import {responseFormat} from '../../../utils/responseFormat';
import {response404} from '../../../utils/response404';

// repositories
import {RecipeRepository} from '../../../repositories/RecipeRepository';

export const index = async (req, res, next) => {
    const query = req.query;
    const result = await RecipeRepository.getRecipes(query);

    return res.json(paginateResponse(result));
};

export const show = async (req, res, next) => {
    const isAuthContent = !!req?.userFirebase
    const query = req.params;
    const {id} = query;
    const result = await RecipeRepository.findRecipe(id, isAuthContent);

    if (result) {
        return res.json(responseFormat(result));
    }

    return response404(res);
};

export const getRelationRecipes = async (req, res, next) => {
    const query = req.params;
    const {id} = query;
    const result = await RecipeRepository.getRelationRecipes(id);
    console.log(result)

    return res.json(responseFormat(result));
};
