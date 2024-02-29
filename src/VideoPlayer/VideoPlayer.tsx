import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';
import videoFile from '../assets/videos/SatisfyingVideo.mp4';

const VideoPlayer = () => {
  return (
    <div className='video-player-container'>
      <ReactPlayer
        url={videoFile}
        controls
        width='100%'
        height='100%'
      />
    </div>
  );
}

export default VideoPlayer;