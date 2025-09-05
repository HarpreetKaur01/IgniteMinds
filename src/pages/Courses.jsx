import React from "react";
import {Link} from 'react-router-dom'
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

function Courses() {
  return (
    <div >
      <section className="custom-container  py-5" >
        <h2>IELTS Courses Tailored to Your Goals</h2>
        <p>
          Choose from a range of flexible and focused IELTS courses designed to
          help you master every section of the test — Listening, Reading,
          Writing, and Speaking. Whether you're just starting or targeting Band
          7+, there's a course for you.
        </p>
      </section>
      <section
        className="custom-container  py-5"  style={{backgroundColor: "white"}}
      
      >
        <h3>Our IELTS Courses</h3>
        <div className="row">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              price={course.price}
              image={course.image}
              description= {course.description}
            />
          ))}
        </div>
      </section>
      <section
        className="custom-container  py-5"
       
      >
        <h3>Not Sure Which Course to Choose?</h3>

        <p>
          Contact me for a free consultation and we'll find the right course for
          your goals.
        </p>
        <Link to="/contact" className="btn btn-primary">Contact Me</Link>
      </section>
    </div>
  );
}

export default Courses;
