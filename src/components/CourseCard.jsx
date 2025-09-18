import React from "react";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
function CourseCard({ title, price, image, description }) {
  // const [count, setCount] = useState(0);
  // const location = useLocation();
  // const bgColor = location.pathname === "/courses" ? "#F0F0FF" : "#F0F0FF";
   const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const sendWhatsApp = (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const phone = e.target.phone.value;
  // const courseName = e.target.course.value;

  const message = `Hello, my name is ${name}. My number is ${phone} My contact email is ${email}.I am interested in the course: ${title}`
;

  window.open(`https://wa.me/919872308512?text=${encodeURIComponent(message)}`, "_blank");
};
  return (
    
      
        <div className="col-md-4">
          <div className="card-course" style={{backgroundColor: "#F0F0FF", borderRadius: "0.5rem"}}>
            <h2>{title} </h2>
            <img src={image} alt={title} className="card-image" />
            <p>{description}</p>
           
            <p style={{"fontWeight": "bold"}}>{price}</p>
            <button
              className="btn btn-primary"
              onClick={openModal}
            >
              Book Now
            </button>
          </div>

          {showModal && (
              <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              
              <div className="modal-header">
                <h5 className="modal-title">Book: {title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>

              <div className="modal-body" style={{"textAlign" : "left"}}>
                <p >{description}</p>
                <p>Price: {price}</p>
                {/* You can add your booking form here */}
                <form onSubmit={sendWhatsApp}>
                  <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input type="text" className="form-control" name="name"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="phone" className="form-control" name="phone"/>
                  </div>
                   <div className="modal-footer" style={{"border" : "none"}}>
                <button
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button className="btn btn-primary" type="submit">Confirm Booking</button>
              </div>
                </form>
              </div>

             
            </div>
          </div>
        </div>
      )}
        </div>
    
  );
}

export default CourseCard;
