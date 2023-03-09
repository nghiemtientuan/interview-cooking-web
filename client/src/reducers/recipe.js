import * as Types from 'Src/constants/ActionTypes';

let initialState = {};

let recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SINGLE_RECIPE_SUCCESS:
            state = action.recipe;

            return {...state};
        default:
            return {...state};
    }
}

export default recipeReducer;
