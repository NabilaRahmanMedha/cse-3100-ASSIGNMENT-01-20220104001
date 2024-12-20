import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section className="contact-us d-flex justify-content-between align-items-start mt-4">
  {/* Left Side - Contact Form */}
  <div className="form-container" style={{ flex: 1 }}>
    <h2>Contact Us</h2>
    <p>We'd love to hear from you! Please fill out the form below to get in touch.</p>

    {submitted ? (
      <div className="alert alert-success" role="alert">
        Thank you for contacting us! We will get back to you shortly.
      </div>
    ) : (
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label htmlFor="name" className="name form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="email form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="msg form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-submit">
          Submit
        </button>
      </form>
    )}
  </div>

  {/* Right Side - Additional Text */}
  <div className="info-container ms-4" style={{ flex: 1 }}>
    <h3>Our Contact Info</h3>
    <p>
      Feel free to reach out to us via email or phone for any inquiries or assistance:
    </p>
    <ul>
      <li><strong>Email:</strong> support@purrfectadoption.com</li>
      <li><strong>Phone:</strong> +1 (555) 123-4567</li>
      <li><strong>Address:</strong> 123 Billabilli Street, bhungchung</li>
    </ul>
    <p>
      We are available Monday to Friday, 9 AM to 5 PM. We look forward to hearing from you!
    </p>
  </div>
</section>
  );
}