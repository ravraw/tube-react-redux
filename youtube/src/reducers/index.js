import { combineReducers } from 'redux';

export const getVideosReducer = (videoList = [], action) => {
  if (action.type === 'GET_VIDEOS') {
    return action.payload;
  }
  return videoList;
};

export const selectedVideoReducer = (selectedVideo = null, action) => {
  if (action.type === 'SELECTED_VIDEO') {
    return action.payload;
  }
  return selectedVideo;
};

export default combineReducers({
  video: selectedVideoReducer,
  getVideos: getVideosReducer
});
