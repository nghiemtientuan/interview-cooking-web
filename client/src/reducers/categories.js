import * as Types from 'Src/constants/ActionTypes';

let initialState = [];

let categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_CATEGORIES_SUCCESS:
            state = action.categories;

            return [...state];
        default:
            return [...state];
    }
}

export default categoriesReducer;
