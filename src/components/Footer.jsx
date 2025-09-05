import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  
  // useEffect(() => {

  // },[])

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
  };

  return (
    <footer style={{ backgroundColor: "#0000ff" , paddingTop: "30px", paddingBottom: "30px"}}>
      <div className="row">
        <div className="col-md-4">
          <section className="quick-links">
            <ul style={{ listStyle: "none" }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </section>
        </div>

        <div className="col-md-4">
          <section className="contact-info" style={{color: "black"}} >
            <p>📍 Location: Takhtupura Sahib, Moga - Punjab, India</p>

            <p>📧 Email: ignitemindsinstitute@gmail.com</p>

            <p>📞 Phone: +91 98723 08512</p>
          </section>
        </div>

        <div className="col-md-4">
          <section className="social-media">
            <ul className="" style={{ listStyle: "none" }}>
              <li>
                <a href="https://www.facebook.com/sukhi.gill.3150/" target="_blank">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/sukhjeet_machhike/" target="_blank">
                  Instagram
                </a>
              </li>
              
              <li>
                <a href="https://wa.me/919872308512" target="_blank">
                  Whatsapp
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <hr className="border-light" />
      <section>
        <p style={{color: "black"}}> © 2025 Ignite Minds. All rights reserved.</p>
        {/* <p className="text-center small">
          Designed & developed by{" "}
          <a
            href="https://yourportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Harpreet Kaur
          </a>
        </p> */}

        {/* <button onClick={toggleTheme}>Toggle Mode</button> */}
      </section>
    </footer>
  );
}

export default Footer;
