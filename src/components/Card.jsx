import React, { useState } from 'react'
import '../styles/Card.css'

// Docs {@link https://tailwindcss.com/docs/text-color}

export function Card() {
  const width = Math.floor(Math.random() * 200)
  const [progressWidth, setProgressWidth] = useState(width + 'px'); // Initial width, replace with your logic
  const [isHovered, setIsHovered] = useState(false);

  // Function to update the progress width
  const handleCardClick = () => {
    // Assuming cardName and cardProgress are available in your component
    const cardName = 'Create a Budget'; // Replace with actual card name
    const cardProgress = '150px'; // Replace with actual card progress

    // Update the progress bar width when the card is clicked
    setProgressWidth(cardProgress);

    // Redirect to the dashboard page with card information
    history.push({
      pathname: '/dashboard',
      state: { cardName, cardProgress },
    });
  };

  const handleHoverEnter = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };
  return (
    
    <div class="card" onClick={handleCardClick} onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
      <p>TODO MAKE TRANSITION SMOOTHER</p>
      <h3 class="title">Create a Budget</h3>
      <div class="bar">
        <div class="emptybar"></div>
        <div class="filledbar" style={{ width: isHovered ? progressWidth : 'auto' }}></div>
      </div>
      <div class="circle">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle class="stroke" cx="60" cy="60" r="50"/>
      </svg>
      </div>
    </div>
  );
}


export default Card
