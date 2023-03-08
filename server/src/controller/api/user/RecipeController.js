// utils
import {paginateResponse} from '../../../utils/paginateResponse';

import {RecipeRepository} from '../../../repositories/RecipeRepository';

export const index = async (req, res, next) => {
    const query = req.query;
    const result = await RecipeRepository.getRecipes(query);

    return res.json(paginateResponse(result));
};
