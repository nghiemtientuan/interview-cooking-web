import validator from 'validator';

// utils
import {responseFormat} from '../../../utils/responseFormat';
import {response400} from '../../../utils/response400';

import {SubscriberRepository} from '../../../repositories/SubscriberRepository';

export const saveSubscriber = async (req, res, next) => {
    const {body} = req;
    const {email = ''} = body;
    let errors = [];

    // validate email
    if (!email) {
        errors.push('Email is required');
    } else {
        if (!validator.isEmail(email)) {
            errors.push('Email is wrong format');
        }
    }
    if (errors && errors.length) {
        return response400(res, errors);
    }

    await SubscriberRepository.saveSubscribe(email);

    return res.json(responseFormat(true));
};
