import React from "react";

const VideoList = (props) => {
  return (
    <div className="video__list">
      {props.videos.map((video) => (
        <div
          className="video__list--item"
          key={video.id.videoId}
          onClick={() => props.videoClickHandler(video)}
        >
          <img
            className="video__list--item-img"
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.description}
          />
          <div className="video__list--item-details">
            <h1>{video.snippet.title.slice(0, 50)}</h1>
            <p>{video.snippet.channelTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
