import * as Types from 'Src/constants/ActionTypes';

const STATE_DEFAULT = {
    user: null,
    isLogin: false,
}
let initialState = STATE_DEFAULT;

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_USER_SUCCESS:
            state.user = action.user;
            state.isLogin = true;

            return {...state};
        case Types.LOGOUT_USER_SUCCESS:
            state = STATE_DEFAULT;

            return {...state};
        default:
            return {...state};
    }
}

export default authReducer;
