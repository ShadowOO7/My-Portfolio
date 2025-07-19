import React, { useState } from 'react';
import './Contact.css';
import NotificationModal from './NotificationModal'; // Import the new modal component

function Contact() {
  const [status, setStatus] = useState(""); // Current submission status
  const [modalMessage, setModalMessage] = useState(""); // Message for the modal
  const [modalType, setModalType] = useState(""); // Type for the modal ('success' or 'error')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting"); // Set status to show loading indicator on button

    const form = e.target;
    const data = new FormData(form);
    const formspreeUrl = form.action;

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        setModalMessage("Thank you for contacting me! I'll get back to you soon.");
        setModalType("success");
        form.reset(); // Clear the form fields
      } else {
        const errorData = await response.json();
        console.error("Form submission error:", errorData);
        setStatus("error");
        setModalMessage("Oops! There was an error sending your message. Please try again later.");
        setModalType("error");
      }
    } catch (error) {
      console.error("Network or fetch error:", error);
      setStatus("error");
      setModalMessage("A network error occurred. Please check your internet connection and try again.");
      setModalType("error");
    }
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setModalMessage("");
    setModalType("");
    setStatus(""); // Reset status after modal is closed
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2>Get In Touch</h2>
      </div>
      <div className="contact-content">
        <p>
          I'm always open to new opportunities, collaborations, or just a friendly chat! Feel free to reach out to me.
        </p>
        <div className="contact-info">
          <p>Email: <a href="mailto:shekharn402@gmail.com" className="contact-link">shekharn402@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/shekhar-nayak-21ab1b212/" target="_blank" rel="noopener noreferrer" className="contact-link">Shekhar Nayak</a></p>
        </div>

        <form className="contact-form" action="https://formspree.io/f/xqalareo" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="_replyto" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>

        <p className="form-note">
          {/* <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer">This form is powered by Formspree.</a> */}
        </p>
      </div>

      {/* Notification Modal rendered here */}
      <NotificationModal
        message={modalMessage}
        type={modalType}
        onClose={handleCloseModal}
      />
    </section>
  );
}

export default Contact;