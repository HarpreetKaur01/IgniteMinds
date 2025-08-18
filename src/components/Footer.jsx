import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  
  // useEffect(() => {

  // },[])

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
  };

  return (
    <footer style={{ backgroundColor: "#ced57cff" }}>
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
          <section className="contact-info">
            <p>📍 Location: Punjab, India</p>

            <p>📧 Email: info@ieltsexpert.com</p>

            <p>📞 Phone: +1 (123) 456-7890</p>
          </section>
        </div>

        <div className="col-md-4">
          <section className="social-media">
            <ul className="" style={{ listStyle: "none" }}>
              <li>
                <a href="https://www.facebook.com" target="_blank">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.whatsapp.com" target="_blank">
                  Whatsapp
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <hr className="border-light" />
      <section>
        <p> © 2025 Ignite Minds. All rights reserved.</p>
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
        <button onClick={toggleTheme}>Toggle Mode</button>
      </section>
    </footer>
  );
}

export default Footer;
