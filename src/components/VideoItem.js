import React from 'react';

function VideoItem({ video, onVideoSelectHandler }) {
  const title = video.snippet.title;
  const thumbnail = video.snippet.thumbnails.medium.url;
  return (
    <div
      onClick={() => {
        onVideoSelectHandler(video);
      }}
    >
      <img src={thumbnail} alt="img" width="100px" />
      {title}
    </div>
  );
}
export default VideoItem;
