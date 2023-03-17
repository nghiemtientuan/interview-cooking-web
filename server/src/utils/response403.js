import {HTTP_STATUS, responseFormat} from './responseFormat';

export const response403 = (res, error) => res.status(HTTP_STATUS.http_403)
    .json(responseFormat(error, HTTP_STATUS.http_403, 'Unauthorized'));
