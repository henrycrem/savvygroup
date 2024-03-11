import React from 'react';
import { FaStar } from 'react-icons/fa';

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const totalRating = [];

  for (let i = 0; i < 5; i++) {
    totalRating.push(
      <FaStar
        key={`rating-key${i}`}
        className={`text-xl ${i < rating ? 'text-yellow-500' : 'text-gray-300'} inline-block mr-1`}
      />
    );
  }

  return <div className="rating">{totalRating}</div>;
};

export default Rating;
