import React from 'react';

const ReviewCard = ({ name, review, rating }) => {
  return (
    <div className="w-full sm:w-40 md:w-80 p-4 bg-white shadow-md rounded-lg flex-shrink-0">
      {/* Star Rating */}
      <div className="flex mb-2 text-sm sm:text-xs">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-yellow-400">⭐</span>
          ))}
      </div>
      {/* Review Text */}
      <p className="text-gray-700 mb-4 text-base sm:text-sm">{review}</p>
      {/* Name */}
      <h3 className="text-lg sm:text-base font-semibold text-gray-800">{name}</h3>
    </div>
  );
};

export default ReviewCard;
