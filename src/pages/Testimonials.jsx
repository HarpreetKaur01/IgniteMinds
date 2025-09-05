import React from 'react'
import testimonials from '../data/testimonials'
import TestimonialCard from '../components/TestimonialCard'
import TestimonialCarousal from '../components/TestimonialCarousal'

function Testimonials() {
  return (
    <div >
      <section className='custom-container  py-5'>
        <h2>What My Students Say</h2>
        <div className="row">
{[...testimonials].reverse().map( testimony => (<TestimonialCard key={testimony.id} name={testimony.name} message={testimony.message} image={testimony.image} trf = {testimony.trf}/>) )}
        </div>
        
      </section>

    
      
      
    </div>
  )
}

export default Testimonials
