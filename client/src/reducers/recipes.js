import * as Types from 'Src/constants/ActionTypes';

let initialState = {
    data: [],
    count: 1,
    currentPage: 1,
    nextPage: null,
    prevPage: null,
    lastPage: 1
};

let recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_RECIPES_SUCCESS:
            state = action.recipes;

            return {...state};
        default:
            return {...state};
    }
}

export default recipesReducer;
