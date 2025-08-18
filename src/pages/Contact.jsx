import React from "react";
import { useState } from "react";

function Contact() {
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.clientName.trim()) {
      newErrors.cname = "Name is required";
    }
    if (!formData.clientEmail.trim()) {
      newErrors.cemail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.clientEmail)) {
      newErrors.cemail = "Email is not valid";
    }
    if (!formData.clientMessage.trim()) {
      newErrors.cmessage = "Message is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({
        clientName: "",
        clientEmail: "",
        clientMessage: "",
      });
    }

    alert(
      `Hello ${formData.clientName}  ${formData.clientEmail}  ${formData.clientMessage}`
    );
  };
  return (
    <div style={{ border: "1px solid green" }}>
      <section className="custom-container  py-5" style={{ border: "1px solid black" }}>
        <h2>Get in Touch</h2>
        <p>Have a question about the courses? Want to know which IELTS program is right for you?
Fill out the form below or email me directly — I’d love to help you on your IELTS journey!</p>

      </section>
      <section className="contat-form custom-container  py-5">
        
        {submitted && (
          <p style={{ color: "green" }}>Thank you! We’ll get back to you.</p>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="clientName">
            Name:
            <input
              name="clientName"
              type="text"
              value={formData.clientName}
              onChange={handleChange}
            />
          </label>
          {errors.cname && <p style={{ color: "red" }}>{errors.cname}</p>}
          <br /><br />
          <label htmlFor="clientEmail">
            Email:
            <input
              name="clientEmail"
              type="email"
              value={formData.clientEmail}
              onChange={handleChange}
            />
          </label>
          {errors.cemail && <p style={{ color: "red" }}>{errors.cemail}</p>}
          <br /><br />
          <label htmlFor="clientMessage">
            Message:
            <input
              name="clientMessage"
              type="text"
              value={formData.clientMessage}
              onChange={handleChange}
            />
          </label>
          {errors.cmessage && <p style={{ color: "red" }}>{errors.cmessage}</p>}
          <br /><br />
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="custom-container  py-5" style={{ border: "1px solid black" }}>
        <p>Email: ieltswithsukhjit@igniteminds.com</p>
<p>Phone: +1 (123) 456-7890</p>
<p>Location: Punjab, India</p>
<p>(Online coaching available worldwide)</p>
      </section>

      <section className="call-to-action-line custom-container  py-5"  style={{ border: "1px solid black" }}>
        <h2>Looking forward to helping you achieve your dream IELTS score!</h2>
      </section>
    </div>
  );
}

export default Contact;
