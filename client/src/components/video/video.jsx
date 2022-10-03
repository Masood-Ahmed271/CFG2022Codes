import React from "react";
import ReactPlayer from "react-player";
import Vimeo from "@u-wave/react-vimeo";
import YouTube from "@u-wave/react-youtube";
import { useNavigate } from "react-router-dom"
import "./video.css"

const Video = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1> JP Morgan</h1>
      <div className="App">
        <Vimeo
          video="https://vimeo.com/560785461"
          autoplay={false}
          loop
          muted={false}
          showPortrait
          background={true}
          controls={false}
        />
      </div>
      <div className="button" onClick={()=> navigate('/checkout')} >Go to Task</div>
      <div className="button" onClick={()=> navigate('/comments')} >Go to Reviews</div>
    </div>
  );
};

export default Video;
