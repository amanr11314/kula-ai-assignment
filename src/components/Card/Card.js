import React, { useEffect } from "react";
import "./Card.scss";
import { useInView } from "react-hook-inview";

const Card = ({ item, current_item, videoRef }) => {
  const [ref, isVisible] = useInView({
    threshold: 0.3,
  });

  const sameple1 =
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4";
  const sameple2 =
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4";
  const sameple3 =
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4";

  useEffect(() => {
    if (isVisible) {
      if (current_item === 0) {
        videoRef.current.src = sameple1;
      } else if (current_item === 1) {
        videoRef.current.src = sameple2;
      } else {
        videoRef.current.src = sameple3;
      }
    }
  }, [isVisible, current_item, videoRef]);

  return (
    <div className="card-container" ref={ref} current_item={current_item}>
      <h4 className="card-item-heading">{item.heading}</h4>
      <h1 className="card-item-subheading">{item.subHeading}</h1>
      <p className="card-item-description">{item.description}</p>
    </div>
  );
};

export default Card;
