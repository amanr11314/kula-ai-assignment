import React, { useEffect } from "react";
import "./Card.scss";
import { useInView } from "react-hook-inview";
import { sample_videos } from "../../constants/sample_videos";

const Card = ({ item, current_item, videoRef }) => {
  const [ref, isVisible] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (isVisible) {
      videoRef.current.src = sample_videos[current_item % 3];
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
