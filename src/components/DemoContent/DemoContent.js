import React, { useRef } from "react";
import Card from "../Card";
import "./DemoContent.scss";

const DemoContent = ({ data }) => {
  const videoPlayerRef = useRef(null);

  return (
    <div className="demo-content-container">
      <div className="demo-content-info-container">
        {data?.texts?.map((item, index) => {
          return (
            <Card
              key={item.heading}
              current_item={index}
              videoRef={videoPlayerRef}
              item={item}
            />
          );
        })}
      </div>
      <div className="demo-content-video-container">
        <video
          ref={videoPlayerRef}
          className="video-object"
          autoPlay
          muted
          loop
        />
      </div>
    </div>
  );
};

export default DemoContent;
