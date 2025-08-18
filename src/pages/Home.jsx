import React from "react";
import instrutorPhoto from "../assets/instructor.jpg";

import courses from "../data/courses";
import CourseCard from "../components/CourseCard";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div style={{ border: "1px solid green" }}>
      <section className="Hero-section custom-container  py-5">
        <h1>Achieve Your Dream IELTS Score</h1>
        {/* <img
          src={instrutorPhoto}
          className="logo react"
          alt="Instructor Photo"
        /> */}
        <p>
          Personalized coaching to help you succeed in IELTS Listening, Reading,
          Writing, and Speaking
        </p>
        <div>
          <Link to="/courses" className="btn btn-primary btn-lg">
            Explore Courses
          </Link>
        </div>
      </section>

      <section
        className="instructor-intro custom-container  py-5"
        style={{ border: "1px solid black" }}
      >
        <h2>Meet Your Instructor</h2>
        <p>
          Hi, I'm Sukhjit, a certified IELTS instructor with over 5 years of
          experience helping students reach Band 7+. My teaching focuses on
          building confidence, mastering test strategies, and giving personal
          feedback to improve fast.
        </p>
        <p>
          Whether you're aiming for immigration, study, or work — I’ll help you
          get there step-by-step.
        </p>
      </section>

      <section
        className="learn-with-us custom-container  py-5"
        style={{ border: "1px solid black" }}
      >
        <h2>Why Learn With Us?</h2>

        <h3>Proven Results:</h3>
        <p>
          Students consistently achieve their target bands using our tested
          strategies and resources.
        </p>

        <h3>Flexible Learning:</h3>
        <p>
          Choose from live classes or self-paced lessons to fit your schedule
          and learning style.
        </p>

        <h3>1-on-1 Feedback:</h3>
        <p>
          Personalized speaking and writing feedback to improve quickly and
          effectively.
        </p>
      </section>
      <section
        className="preview-of-courses custom-container  py-5"
        style={{ border: "1px solid black" }}
      >
        <h2>Our Courses</h2>
        <div className="row">
 {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            price={course.price}Link 
            image={course.image}
          />
        ))}
        </div>
       
        <Link to="/courses" className="btn btn-primary" >View All Courses</Link>
      </section>
      <section
        className="call-to-action custom-container  py-5"
        style={{ border: "1px solid black" }}
      >
        <h3>Ready to Get Started?</h3>
        <p>Let’s prepare for your IELTS test the right way.</p>
        <Link to="/contact"  className="btn btn-primary">Contact Me</Link >
      </section>
    </div>
  );
}

export default Home;
