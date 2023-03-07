import * as Types from 'Src/constants/ActionTypes';

let initialState = [
    {
        id: 1,
        title: 'White calzones with marinara sauce',
        link: 'https://www.youtube.com/watch?v=2S2Zs4SOuVs',
    },
    {
        id: 2,
        title: 'Chef John\'s Turkey Sloppy Joes',
        link: 'https://www.youtube.com/watch?v=2S2Zs4SOuVs',
    },
    {
        id: 3,
        title: 'Brown Sugar Meatloaf',
        link: 'https://www.youtube.com/watch?v=2S2Zs4SOuVs',
    },
    {
        id: 4,
        title: 'Awesome Slow Cooker Pot Roast',
        link: 'https://www.youtube.com/watch?v=2S2Zs4SOuVs',
    },
];

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
