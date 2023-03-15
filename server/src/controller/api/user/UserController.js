// utils
import {responseFormat} from '../../../utils/responseFormat';
import {response400} from '../../../utils/response400';

import {UserRepository} from '../../../repositories/UserRepository';

export const getUser = async (req, res, next) => {
    const user = await UserRepository.getUserLogin();
    if (user) {
        return res.json(responseFormat(user));
    }

    return response400(res, 'User not found!');
};
