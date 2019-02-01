import React from 'react';

import VideoItem from './VideoItem';

function VideoList({ videoList }) {
  const renderedList = videoList.map(video => <VideoItem video={video} />);
  return <div>{renderedList}</div>;
}
export default VideoList;
