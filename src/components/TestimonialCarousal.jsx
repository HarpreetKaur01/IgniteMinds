import React from "react";
import instrutorPhoto from "../assets/instructor.jpg";
import testimonials from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";

function TestimonialCarousal() {
  return (
    <div>
      <div id="myCarousel" className="carousel slide justify-content-center" data-bs-ride="carousel">
        <div className="carousel-indicators">
            {testimonials.map( (testimony, index) => (<button key={testimony.id} data-bs-target="#myCarousel" data-bs-slide-to={index} className= { index === 0 ? "active" : ""}></button>))}

        </div>

        <div className="carousel-inner ">
            {testimonials.map( (testimony, index) => (
                <div key={testimony.id} className= {`carousel-item    ${index === 0 ? "active" : ""}` } >
                     <div className="d-flex justify-content-center">
                        <TestimonialCard name={testimony.name} message = {testimony.message} image={testimony.image} />
                </div>
                </div>
                
        //     <div key={testimony.id} className= {`carousel-item ${index === 0 ? "active" : ""}` }>
        //     <img src={testimony.image} alt="" style={{ width: "100%" }} />
        //   </div>
        ))}

        </div>

        <button className="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" href="#myCarousel" data-bs-slide="next" >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </div>
  );
}

export default TestimonialCarousal;



          {/* {testimonials.map( testimonial => (
    <div className="carousel-item active">
        <img src={testimonial.image} alt="Los Angeles" style= {{width: "100%"}}/>
      </div>
))} */}
