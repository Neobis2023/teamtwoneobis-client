import React from 'react'
import YouTube from "react-youtube";

const VideoPlayer = React.memo(({ videoUrl }) => {
    const match = videoUrl.match(/v=([a-zA-Z0-9_-]{11})/);
    const videoId = match ? match[1] : null;
    const opts = {
      height: "200px",
      width: "100%",
      playerVars: {
        autoplay: 0,
      },
    };
  
    function onReady(event) {
      event.target.pauseVideo();
    }
  
    return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
  });

export default VideoPlayer