import React from 'react';

import VideoItem from './VideoItem';

function VideoList({ videoList, onVideoSelectHandler }) {
  const renderedList = videoList.map(video => (
    <VideoItem
      video={video}
      onVideoSelectHandler={onVideoSelectHandler}
      key={video.id.vedioId}
    />
  ));
  return <div>{renderedList}</div>;
}
export default VideoList;
