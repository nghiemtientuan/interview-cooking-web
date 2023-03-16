import {HTTP_STATUS, responseFormat} from './responseFormat';

export const response404 = (res) => res.status(HTTP_STATUS.http_404)
    .json(responseFormat('404 Not found', HTTP_STATUS.http_404, 'failed'));
