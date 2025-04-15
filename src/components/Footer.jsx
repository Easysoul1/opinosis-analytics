import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="container">
        <div className="links-section">
          <h3>Consulting Links</h3>
          <ul>
            <li>AI & Machine Learning Consulting</li>
            <li>NLP Consulting</li>
            <li>AI Strategy Consulting</li>
            <li>AI Transformation Workshops</li>
          </ul>
        </div>

        <div className="image-section">
          <img
            src="path-to-goldman-sachs-image.png"
            alt="Goldman Sachs: 10,000 Small Businesses"
          />
        </div>

        <div className="newsletter-section">
          <h3>Join 5000+ Leaders in Our Newsletter.</h3>
          <p>Zero Fluff. Practical AI Tips.</p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>

        <div className="book-section">
          <img src="path-to-book-image.png" alt="The Business Case for AI" />
          <div className="book-description">
            <p>We've authored an international bestseller</p>
          </div>
        </div>

        <div className="scroll-up-button">
          <button>&uarr;</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="copyright">
          Copyright © 2025 Opinosis Analytics
        </div>
        <div className="links">
          <a href="#">AI & Generative AI Consulting</a>
          <a href="#">AI Transformation Workshops</a>
          <a href="#">AI Strategy Development</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;