import React from 'react';

function VideoDisplay({ selectedVideo, onClick }) {
  if (!selectedVideo) {
    return <div>Loading ....</div>;
  }
  const { title, description } = selectedVideo.snippet;
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  return (
    <div onClick={onClick}>
      <iframe src={videoSrc} frameBorder="0" title={title} />
      <h3>{title}</h3>
      <p> {description}</p>
    </div>
  );
}

export default VideoDisplay;
