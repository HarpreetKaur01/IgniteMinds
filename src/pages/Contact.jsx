import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser"

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

    // setErrors({});
    // if (Object.keys(newErrors).length === 0) {
    //   setSubmitted(true);
    //   setFormData({
    //     clientName: "",
    //     clientEmail: "",
    //     clientMessage: "",
    //   });
    // }

    // alert(
    //   `Hello ${formData.clientName}  ${formData.clientEmail}  ${formData.clientMessage}`
    // );

    emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, { clientName: formData.clientName,
    clientEmail: formData.clientEmail,
    clientMessage: formData.clientMessage,}, import.meta.env.VITE_EMAILJS_PUBLIC_KEY )
    .then((result) => {
      console.log("Success:", result.text);
      setSubmitted(true);
      setFormData({ clientName: "",  clientEmail: "",  clientMessage: ""});
    }, (error) => {console.error("Error", error.text); });
  };
  return (
    <div >
      <section className="custom-container  py-5" >
        <h2>Get in Touch</h2>
        <p>Have a question about the courses? Want to know which IELTS program is right for you?
Fill out the form below or email me directly — I’d love to help you on your IELTS journey!</p>

      </section>
      <section className="contat-form custom-container  py-5" style={{backgroundColor: "white"}}>
        
        {submitted && (
          <p style={{ color: "green" }}>Thank you! We’ll get back to you.</p>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="clientName" style={{display: "block", marginBottom: "10px"}}>
            Name:
            <input
              name="clientName"
              type="text"
              value={formData.clientName}
              onChange={handleChange}
            />
            {errors.cname && <p style={{ color: "red" }}>{errors.cname}</p>}
          </label>
          
          
          <label htmlFor="clientEmail" style={{display: "block", marginBottom: "10px"}}>
            Email:
            <input
              name="clientEmail"
              type="email"
              value={formData.clientEmail}
              onChange={handleChange}
            />
            {errors.cemail && <p style={{ color: "red" }}>{errors.cemail}</p>}
          </label>

          <label htmlFor="clientMessage" style={{display: "block", marginBottom: "10px"}}>
            Message:
            <input
              name="clientMessage"
              type="textarea"
              value={formData.clientMessage}
              onChange={handleChange}
            />
       {errors.cmessage && <p style={{ color: "red" }}>{errors.cmessage}</p>}
          </label>
          
        
          <button type="submit" style={{backgroundColor: "#3C6EFD"}}>Send Message</button>
        </form>
      </section>

      <section className="custom-container  py-5" >
        <p>Email: ignitemindsinstitute@gmail.com</p>
<p>Phone: +91 98723 08512</p>
<p>Location: Takhtupura Sahib, Moga - Punjab, India</p>
<p>(Online coaching available worldwide)</p>
      </section>

      <section className="call-to-action-line custom-container  py-5"  style={{backgroundColor: "white"}}>
        <h2>Looking forward to helping you achieve your dream IELTS score!</h2>
      </section>
    </div>
  );
}

export default Contact;
