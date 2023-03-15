import * as Types from 'Src/constants/ActionTypes';

let initialState = {
    user: null,
    isLogin: false,
};

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_USER_SUCCESS:
            state = action.user;
            state.isLogin = true;

            return {...state};
        default:
            return {...state};
    }
}

export default authReducer;
