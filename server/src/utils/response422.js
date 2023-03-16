import {HTTP_STATUS, responseFormat} from './responseFormat';

export const response422 = (res, errors) => res.status(HTTP_STATUS.http_422)
    .json(responseFormat(errors, HTTP_STATUS.http_422, 'Validation error'));
