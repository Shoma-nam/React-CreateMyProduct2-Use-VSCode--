import React from 'react';
import YouTube from 'react-youtube';

function YoutubePlayer() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1, // このオプションで動画を自動再生します。
    },
  };

  return (
    <YouTube
      videoId="Y0Qt8xn9MCs" // YouTube動画のIDを指定します。
      opts={opts}
    />
  );
}

export default YoutubePlayer;
