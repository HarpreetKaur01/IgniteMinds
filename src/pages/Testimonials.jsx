import React from 'react'
import testimonials from '../data/testimonials'
import TestimonialCard from '../components/TestimonialCard'
import TestimonialCarousal from '../components/TestimonialCarousal'

function Testimonials() {
  return (
    <div style={{ border: "1px solid green" }}>
      <section className='custom-container  py-5'>
        <h2>What My Students Say</h2>
        <div className="row">
{testimonials.map( testimony => (<TestimonialCard key={testimony.id} name={testimony.name} message={testimony.message} image={testimony.image}/>) )}
        </div>
        
      </section>

      <section style={{backgroundColor: '#bfe28e'}} className='py-5'>
        <TestimonialCarousal />
      </section>
      
      
    </div>
  )
}

export default Testimonials
