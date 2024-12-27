import React, { useState } from "react";

const Tour = ({ tour, onDelete }) => {
  const [showMore, setShowMore] = useState(false);

  const handleSeeMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="tour-item" id={`tour-item-${tour.id}`}>
      <div id="main">
        {" "}
        {/* Ensure #main is wrapping the content */}
        <h2>{tour.name}</h2>
        <img src={tour.image} alt={tour.name} />
        <p id={`tour-item-para-${tour.id}`}>
          {showMore ? tour.info : `${tour.info.substring(0, 200)}...`}
        </p>
        <button id={`see-more-${tour.id}`} onClick={handleSeeMoreClick}>
          {showMore ? "Show Less" : "See more"}
        </button>
        <button id={`delete-btn-${tour.id}`} onClick={() => onDelete(tour.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Tour;
