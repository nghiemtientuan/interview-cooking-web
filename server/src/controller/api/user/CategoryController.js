// utils
import {responseFormat} from '../../../utils/responseFormat';

import {CategoryRepository} from '../../../repositories/CategoryRepository';

export const index = async (req, res, next) => {
    const categories = await CategoryRepository.getCategories();

    return res.json(responseFormat(categories))
};
