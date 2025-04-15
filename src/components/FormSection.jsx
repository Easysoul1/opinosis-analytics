import React, { useState } from 'react';
import './FormSection.css';

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    reason: 'AI-Driven Workflow Optimization',
    description: '',
    captcha: '',
    isNotRobot: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <div className="form-section">
      <div className="form-header">
        <h2>Ready to put AI to work for your business?</h2>
        <p>
          Contact us to learn how our AI and machine learning consulting services can help move your AI agenda forward. Complete the form below and we’ll get back to you within 24-48 hours.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Your Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Your Email <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">
            Company Name & Job Title <span className="required">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="reason">
            Reason for Contacting <span className="required">*</span>
          </label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          >
            <option value="AI-Driven Workflow Optimization">AI-Driven Workflow Optimization</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">
            How can we help you? <span className="required">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Short description of your current needs."
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="captcha">
            Custom Captcha <span className="required">*</span>
          </label>
          <div className="captcha-container">
            <span className="captcha-text">13 + 9 =</span>
            <input
              type="text"
              id="captcha"
              name="captcha"
              value={formData.captcha}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="isNotRobot"
            name="isNotRobot"
            checked={formData.isNotRobot}
            onChange={handleChange}
            required
          />
          <label htmlFor="isNotRobot">I'm not a robot</label>
          <span className="recaptcha-text">reCAPTCHA Privacy - Terms</span>
        </div>

        <button type="submit" className="submit-btn">
          <span>↑</span>
        </button>
      </form>
    </div>
  );
};

export default FormSection;