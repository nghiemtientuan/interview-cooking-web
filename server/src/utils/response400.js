import {HTTP_STATUS, responseFormat} from './responseFormat';

export const response400 = (res, error) => res.status(HTTP_STATUS.http_400)
    .json(responseFormat(error, HTTP_STATUS.http_400, 'failed'));
