import React, { useState } from "react";

const StarRating = ({ maxStars = 5 }) => {
  const [hoveredStars, setHoveredStars] = useState(0);
  const [selectedStars, setSelectedStars] = useState(0);

  const handleMouseEnter = (index) => {
    setHoveredStars(index + 1);
  };

  const handleMouseLeave = () => {
    setHoveredStars(0);
  };

  const handleClick = (index) => {
    setSelectedStars(index + 1);
  };

  return (
    <div className="flex flex-row items-center gap-1">
      {[...Array(maxStars)].map((_, index) => (
        <img
          key={index}
          className="w-6 h-6 cursor-pointer transition-all duration-200"
          alt="star"
          src={
            index < (hoveredStars || selectedStars) ? "/star.svg" : "/emptystar.svg"
          }
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default StarRating
