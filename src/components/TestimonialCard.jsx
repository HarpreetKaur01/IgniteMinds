import React, { useState } from 'react'

function TestimonialCard({name, message, image, trf, score}) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className='col-md-4' >
      <div  style={{backgroundColor: "white",   padding: "2em",
  
  margin: "10px" , borderRadius: "0.5rem"}}>
          <img src={image} alt="" className="card-image rounded-circle"/>
         <h3>{name}</h3>
         <p>{message}</p>
         <p style={{"fontWeight": "bold"}}>Overall Band Score: {score}</p>
         <img
          src={trf}
          alt="TRF"
          className="trf-thumb d-block mx-auto"
          onClick={openModal}
        />

          {showModal && (
        <div className="modal show d-block" tabIndex="-1" >
          <div > 
            <button  onClick={closeModal} > ✕ </button>
            <img src={trf} alt="Full TRF" style={{ maxWidth: "90vw", maxHeight: "80vh", "display": "block"  ,"margin" : "0 auto"}} />
          </div>
        </div>
      )}
      </div>
        
    </div>
  )
}

export default TestimonialCard
