// Actions
const SELECT_VIDEO = 'SELECT_VIDEO';
const GET_VIDEOS = 'GET_VIDEOS';

// Generators

export const selectVideo = video => {
  return {
    type: SELECT_VIDEO,
    payload: video
  };
};

export const getVideos = videos => {
  return {
    type: GET_VIDEOS,
    payload: videos
  };
};
