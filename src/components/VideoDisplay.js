import React from 'react';

function VideoDisplay({ selectedVideo }) {
  if (!selectedVideo) {
    return <div>No video selected</div>;
  }
  const { title, description } = selectedVideo.snippet;
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  return (
    <div>
      <iframe src={videoSrc} frameborder="0" title={title} />
      <h2>{title}</h2>
      <h2> {description}</h2>
    </div>
  );
}

export default VideoDisplay;
