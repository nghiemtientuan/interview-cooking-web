// utils
import {responseFormat} from '../../../utils/responseFormat';
import {response400} from '../../../utils/response400';

import {UserRepository} from '../../../repositories/UserRepository';
import {response422} from "../../../utils/response422";

export const getUser = async (req, res, next) => {
    if (req?.userFirebase?.uid) {
        const user = await UserRepository.getUserByFirebaseUID(req?.userFirebase?.uid);
        if (user) {
            return res.json(responseFormat(user));
        }
    }

    return response400(res, 'User not found!');
};

export const updateUser = async (req, res, next) => {
    if (!req?.userFirebase?.uid) {
        return response400(res, 'User not found!');
    }

    let user = await UserRepository.getUserByFirebaseUID(req?.userFirebase?.uid);
    if (!user) {
        return response400(res, 'User not found!');
    }

    const {body} = req;
    const {fullname = '', username = '', birthday = null} = body;

    // Validation
    let errors = [];
    // fullname
    if (fullname) {
        if (fullname.length > 255) {
            errors.push({
                field: 'fullname',
                message: 'Tên đầy đủ không được lơn hơn 255 ký tự',
            });
        }
    } else {
        errors.push({
            field: 'fullname',
            message: 'Tên đầy đủ không được để trống',
        });
    }
    // username
    if (username) {
        if (username.length > 255) {
            errors.push({
                field: 'username',
                message: 'Tên hiển thị không được lơn hơn 255 ký tự',
            });
        }
    } else {
        errors.push({
            field: 'username',
            message: 'Tên hiển thị không được để trống',
        });
    }
    // birthday
    if (!birthday) {
        errors.push({
            field: 'birthday',
            message: 'Ngày sinh không được để trống',
        });
    }
    if (errors && errors.length) {
        return response422(res, errors);
    }

    user.fullname = fullname;
    user.username = username;
    user.birthday = birthday;
    user = await UserRepository.updateUser(user);

    return res.json(responseFormat(user));
};
