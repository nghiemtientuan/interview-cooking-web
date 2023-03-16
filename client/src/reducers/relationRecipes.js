import * as Types from 'Src/constants/ActionTypes';

let initialState = [];

let relationRecipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_RELATION_RECIPES_SUCCESS:
            state = action.recipes;

            return [...state];
        default:
            return [...state];
    }
}

export default relationRecipesReducer;
