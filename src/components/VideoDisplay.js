import React from 'react';

function VideoDisplay({ selectedVideo }) {
  if (!selectedVideo) {
    return <div>Loading ....</div>;
  }
  const { title, description } = selectedVideo.snippet;
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  return (
    <div>
      <iframe src={videoSrc} frameborder="0" title={title} />
      <h3>{title}</h3>
      <p> {description}</p>
    </div>
  );
}

export default VideoDisplay;
