import React from "react";

const Video = ({ Id, Titile, View, Time, Verified }) => {
  return (
    <div className="card">
      <div className="thumbnail">
        <img
          src={`https://picsum.photos/id/${Id}/200/300`}
          alt="youtube thumbnail"
          width="250"
          height="100"
        />
        <div className="play-button"></div> {/* YouTube play button overlay */}
      </div>
      <div className="details">
        <span className="title">{`${Titile}`}</span>
        <span className="title">{Verified ? "✅" : null}</span>
        <div className="views">
          {View} views • {Time} ago
        </div>
      </div>
    </div>
  );
};

export default Video;
