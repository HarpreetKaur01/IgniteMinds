import React from "react";

function About() {
  return (
    <div >
      <section
        className="intro custom-container  py-5"
         >
        <h2>About Me</h2>

        <p>
          Hi! I'm Sukhjeet — a passionate IELTS instructor dedicated to helping
          students achieve their desired band scores.
        </p>

        <p>
          With over 15 years of experience in IELTS training , I blend clear communication with effective teaching
          strategies. I’ve supported learners from different backgrounds,
          levels, and goals — from students applying for universities abroad to
          professionals seeking immigration.
        </p>
      </section>
      <section
        className="teaching-philosphy custom-container py-5"   style={{ backgroundColor: "white"}}
     
      >
        <h3>My Teaching Approach</h3>

        <p>
          Every learner is unique. That’s why I focus on personalized feedback,
          practical test strategies, and building strong fundamentals. I help
          students understand their strengths and turn their weak areas into
          progress with supportive and structured guidance.
        </p>
      </section>
      <section
        className="cert-exp custom-container  py-5"
       
      >
        <h3>Qualifications</h3>
        <ul style={{ listStylePosition: "inside"}}>
          <li> Certified IELTS Trainer</li>
          <li>15+ years of IELTS teaching experience</li>
          <li>Successfully coached 200+ student</li>
          <li>Specialized in Band 7+ strategy</li>
        </ul>
      </section>
      <section
        className="vision-statement custom-container  py-5"
         style={{ backgroundColor: "white"}}
      >
        <h3>My Goal</h3>
        <p>
          Your success is my priority. Whether you're aiming for study, work, or
          permanent residency abroad — I’m here to guide you every step of the
          way toward your IELTS goals.
        </p>
      </section>
    </div>
  );
}

export default About;
