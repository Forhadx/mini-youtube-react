import React from "react";

const StreamVideo = (props) => {
  if (!props.stremVid) {
    return <div>nothing</div>;
  }
  return (
    <div className="stream__video">
      <iframe
        className="stream__video--view"
        src={`https://www.youtube.com/embed/${props.stremVid.id.videoId}`}
        title="YouTube video player"
      ></iframe>
      <div className="stream__video-details">
        <h1 className="stream__video-details-title">
          {" "}
          {props.stremVid.snippet.title}{" "}
        </h1>
        <p className="stream__video-details-channel">
          {props.stremVid.snippet.channelTitle}
        </p>
      </div>
    </div>
  );
};

export default StreamVideo;
