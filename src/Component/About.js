import React, { useState } from 'react';

export function About() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className='container'>
        <br></br>
      <h2 className='center'>About Us</h2>
      <p className='fw-bold'>Welcome to our website! We are a team of passionate individuals dedicated to providing the best solutions for our clients. Our mission is to deliver high-quality products and services that meet the unique needs of each customer.</p>

      {showDetails ? (
        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure debitis id inventore itaque est unde facere ab sequi earum. Sed tempore praesentium corporis itaque qui deleniti? Perspiciatis officiis ducimus corrupti!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure debitis id inventore itaque est unde facere ab sequi earum. Sed tempore praesentium corporis itaque qui deleniti? Perspiciatis officiis ducimus corrupti!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure debitis id inventore itaque est unde facere ab sequi earum. Sed tempore praesentium corporis itaque qui deleniti? Perspiciatis officiis ducimus corrupti!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure debitis id inventore itaque est unde facere ab sequi earum. Sed tempore praesentium corporis itaque qui deleniti? Perspiciatis officiis ducimus corrupti!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure debitis id inventore itaque est unde facere ab sequi earum. Sed tempore praesentium corporis itaque qui deleniti? Perspiciatis officiis ducimus corrupti!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure debitis id inventore itaque est unde facere ab sequi earum. Sed tempore praesentium corporis itaque qui deleniti? Perspiciatis officiis ducimus corrupti!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure debitis id inventore itaque est unde facere ab sequi earum. Sed tempore praesentium corporis itaque qui deleniti? Perspiciatis officiis ducimus corrupti!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure debitis id inventore itaque est unde facere ab sequi earum. Sed tempore praesentium corporis itaque qui deleniti? Perspiciatis officiis ducimus corrupti!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure debitis id inventore itaque est unde facere ab sequi earum. Sed tempore praesentium corporis itaque qui deleniti? Perspiciatis officiis ducimus corrupti!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure debitis id inventore itaque est unde facere ab sequi earum. Sed tempore praesentium corporis itaque qui deleniti? Perspiciatis officiis ducimus corrupti!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure debitis id inventore itaque est unde facere ab sequi earum. Sed tempore praesentium corporis itaque qui deleniti? Perspiciatis officiis ducimus corrupti!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure debitis id inventore itaque est unde facere ab sequi earum. Sed tempore praesentium corporis itaque qui deleniti? Perspiciatis officiis ducimus corrupti!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure debitis id inventore itaque est unde facere ab sequi earum. Sed tempore praesentium corporis itaque qui deleniti? Perspiciatis officiis ducimus corrupti!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure debitis id inventore itaque est unde facere ab sequi earum. Sed tempore praesentium corporis itaque qui deleniti? Perspiciatis officiis ducimus corrupti!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure debitis id inventore itaque est unde facere ab sequi earum. Sed tempore praesentium corporis itaque qui deleniti? Perspiciatis officiis ducimus corrupti!
          </p>
         
  
  
  
  

          </div>

      ) : (
        <button className="btn btn-outline-primary" onClick={toggleDetails}>Show More</button>
      )}
    </div>
  );
}
