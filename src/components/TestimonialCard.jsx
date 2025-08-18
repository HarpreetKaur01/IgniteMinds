import React from 'react'

function TestimonialCard({name, message, image}) {
  return (
    <div className='col-md-4 py-5 px-5' style={{border: "2px solid black" }}>
        <img src={image} alt="" className="card-image"/>
         <h3>{name}</h3>
         <p>{message}</p>
        
    </div>
  )
}

export default TestimonialCard
