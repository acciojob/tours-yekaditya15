import React, { useState } from "react";

const Tour = ({ tour, onDelete }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id={`tour-item-${tour.id}`} className="tour-item">
      <h3>{tour.name}</h3>
      <p id={`tour-item-para-${tour.id}`}>
        {showMore ? tour.info : `${tour.info.slice(0, 200)}...`}
      </p>
      <button
        id={`show-more-btn-${tour.id}`}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
      <button id={`delete-btn-${tour.id}`} onClick={() => onDelete(tour.id)}>
        Delete Tour
      </button>
    </div>
  );
};

export default Tour;
