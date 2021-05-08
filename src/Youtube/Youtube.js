import React, { useState } from "react";

import Axios from "./api";
import Search from "./Search";
import StreamVideo from "./StreamVideo";
import VideoList from "./VideoList";

import "./style.css";

const YouTube = () => {
  const [videos, setVideos] = useState();
  const [stremVid, setStreamVid] = useState(null);

  const searchHandler = (val) => {
    Axios.get("/search", {
      params: {
        q: val,
      },
    }).then((result) => {
      setVideos(result.data.items); 
      setStreamVid(result.data.items[0]);
    });
  };

  const videoClickHandler = (val) => {
    setStreamVid( val );
  };

  return (
    <div className="main">
      <Search searchHandler={searchHandler} />
      {videos ? (
        <div className="vides">
          <StreamVideo stremVid={stremVid} />
          <VideoList videos={videos} videoClickHandler={videoClickHandler} />
        </div>
      ) : <div className="no-video">Search for Videos</div>}
    </div>
  );
};

export default YouTube;
