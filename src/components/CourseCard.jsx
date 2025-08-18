import React from "react";
import { useState } from "react";
function CourseCard({ title, price, image }) {
  const [count, setCount] = useState(0);
  return (
    
      
        <div className="col-md-4">
          <div className="card-course">
            <h2>{title} </h2>
            <img src={image} alt={title} className="card-image" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis illo quam, vel facilis sequi dolores soluta qui
              architecto nostrum! Minus temporibus nam ea harum. Mollitia
              blanditiis itaque earum tenetur corrupti.
            </p>
            <p>{price}</p>
            <button
              className="btn btn-primary"
              onClick={() => setCount((count) => count + 1)}
            >
              Book Now / Learn More {count}
            </button>
          </div>
        </div>
    
  );
}

export default CourseCard;
