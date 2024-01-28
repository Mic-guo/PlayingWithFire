import Card from './Card'; // Import the Card component
import './Modules.css'

// Docs {@link https://tailwindcss.com/docs/text-color}
import React from 'react';

export function Modules() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
  
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Section 1: Getting Started</h2>
          
          <div className="flex overflow-x-auto space-x-4">
            <div className="flex-none w-64 bg-white p-4 rounded-md shadow-md">
              {/* Lesson card 1 */}
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            
            <div className="flex-none w-64 bg-white p-4 rounded-md shadow-md">
              {/* Lesson card 2 */}
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            {/* Add more lesson cards as needed */}
          </div>
        </div>
      </div>
    </div>

  );
}


export default Modules
