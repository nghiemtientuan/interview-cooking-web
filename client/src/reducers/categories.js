import * as Types from 'Src/constants/ActionTypes';

let initialState = [
    {
        id: 1,
        name: 'Dish Type',
        parent_id: null,
        childCategories: [
            {
                id: 2,
                name: 'Appetizers & Snacks',
                parent_id: 1
            },
            {
                id: 3,
                name: 'Bread Recipes',
                parent_id: 1
            },
            {
                id: 4,
                name: 'Cake Recipes',
                parent_id: 1
            }
        ]
    },
    {
        id: 4,
        name: 'Meal Type',
        parent_id: null,
        childCategories: [
            {
                id: 5,
                name: 'Breakfast and Brunch',
                parent_id: 1
            },
            {
                id: 6,
                name: 'Desserts',
                parent_id: 1
            },
            {
                id: 7,
                name: 'Dinners',
                parent_id: 1
            },
            {
                id: 8,
                name: 'Lunch',
                parent_id: 1
            }
        ]
    }
];

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
