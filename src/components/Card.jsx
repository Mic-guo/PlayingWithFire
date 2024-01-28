import React, { useState } from 'react'
import PropTypes from 'prop-types';
import '../styles/Card.css'

// Docs {@link https://tailwindcss.com/docs/text-color}

export function Card({ cardName, progressList, svgUrl }) {
  const calculateProgressFraction = (progress) => {
    if (progress.length === 0) {
      return 0; // Return 0 if the progress list is empty
    }
  
    const trueCount = progress.filter(Boolean).length;
    const fraction = trueCount / progress.length;
  
    return fraction * 150;
  };
  const [progressWidth, setProgressWidth] = useState(calculateProgressFraction(progressList) + 'px'); // Initial width, replace with your logic
  const [isHovered, setIsHovered] = useState(false);
  

  // Function to update the progress width
  const handleCardClick = () => {
    // Assuming cardName and cardProgress are available in your component
    // Update the progress bar width when the card is clicked
    setProgressWidth(progressWidth + 10);

    // Redirect to the dashboard page with card information
  };

  const handleHoverEnter = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };
  Card.propTypes = {
    cardName: PropTypes.string.isRequired,
    progressList: PropTypes.array.isRequired,
  };
  return (
    <div class="card" onClick={handleCardClick} onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
      <h3 className="title">{cardName}</h3>
      <div class="bar">
        <div class="emptybar"></div>
        <div class="filledbar" style={{ width: isHovered ? progressWidth : 'auto' }}></div>
      </div>
      <div class="circle">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="120" height="120">
          <circle class="stroke" cx="60" cy="60" r="50"/>
          <image color="yellow" href={svgUrl} x="25%" y="25%" width="50%" height="50%" />
        </svg>
      </div>


    </div>
  );
}


export default Card
