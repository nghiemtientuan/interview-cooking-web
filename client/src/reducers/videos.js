import * as Types from 'Src/constants/ActionTypes';

let initialState = [];

let videosReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_VIDEOS_SUCCESS:
            state = action.videos;

            return [...state];
        default:
            return [...state];
    }
}

export default videosReducer;
