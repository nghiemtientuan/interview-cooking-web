import {HTTP_STATUS, RESPONSE_MESSAGE} from './responseFormat';

export function paginateResponse(data, status = HTTP_STATUS.http_200, message = RESPONSE_MESSAGE.SUCCESS) {
    const [result, total, page, limit] = data;
    const lastPage = Math.ceil(total / limit);
    const nextPage = (page + 1) >lastPage ? null : page + 1;
    const prevPage= (page - 1) < 1 ? null : page - 1;

    return {
        status,
        message,
        data: [...result],
        count: total,
        currentPage: page,
        nextPage: nextPage,
        prevPage: prevPage,
        lastPage: lastPage,
    }
}
