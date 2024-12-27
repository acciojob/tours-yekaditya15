import React, { useState } from "react";

const Tour = ({ tour, onDelete }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleInfo = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="tour">
      <img src={tour.image} alt={tour.name} />
      <h2>{tour.name}</h2>
      <p>{showMore ? tour.info : `${tour.info.slice(0, 200)}...`}</p>
      <button onClick={toggleInfo}>
        {showMore ? "See less" : "Show more"}
      </button>
      <p>Price: ${tour.price}</p>
      <button onClick={() => onDelete(tour.id)}>Delete Tour</button>
    </div>
  );
};

export default Tour;
