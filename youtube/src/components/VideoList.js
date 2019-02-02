import React from 'react';
import { connect } from 'react-redux';

import VideoItem from './VideoItem';
import { selectVideo, getVideos } from '../actions';

function VideoList({
  videoList,
  onVideoSelectHandler,
  selectVideo,
  getVideos
}) {
  const renderedList = videoList.map(video => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onVideoSelectHandler={() => onVideoSelectHandler}
      onClick={() => selectVideo(video)}
    />
  ));
  return <div>{renderedList}</div>;
}
//
const mapStateToProps = state => {
  console.log('from videoList', state);
  return {
    videos: state.getVideos
  };
};
//
const mapDispatchToProps = {
  selectVideo,
  getVideos
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);
