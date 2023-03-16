export const HTTP_STATUS = {
    http_200: 200,
    http_201: 201,
    http_400: 400,
    http_401: 401,
    http_403: 403,
    http_404: 404,
    http_422: 422,
};

export const RESPONSE_MESSAGE = {
    SUCCESS: 'success',
    FAILED: 'failed',
};

export const responseFormat = (data, status = HTTP_STATUS.http_200, message = RESPONSE_MESSAGE.SUCCESS) => ({
    status,
    message,
    data: data
});
