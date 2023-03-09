import * as Types from 'Src/constants/ActionTypes';

export const fetchVideosRequest = () => {
  return {
    type: Types.FETCH_VIDEOS
  };
}

export const fetchVideosRequestSuccess = (videos) => {
  return {
    type: Types.FETCH_VIDEOS_SUCCESS,
    videos
  };
}
