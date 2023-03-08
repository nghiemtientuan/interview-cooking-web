import * as Types from 'Src/constants/ActionTypes';

let initialState = {};

let recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_RECIPES_SUCCESS:
            state = action.recipes;

            return {...state};
        default:
            return {...state};
    }
}

export default recipeReducer;
