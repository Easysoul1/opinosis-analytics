import React from 'react';
import './BusinessInsightsSection.css';
import microsoftOutageImage from '../assets/business-insight/5-Key-Lessons-from-the-Microsoft-Outage-1024x536.webp';
import genaiMythsImage from '../assets/business-insight/blog-images-5-common-genai-myths-1024x536.webp';
import llmHallucinationsImage from '../assets/business-insight/blog-images-6-Can-LLM-hallucinations-be-eliminated_--1024x536.webp';
import walmartAIImage from '../assets/business-insight/walmart-ai-use-cases-1024x536.webp';

// Card data with updated image paths
const cardData = [
  {
    description: 'Explore our experiments across large language models to uncover insights...',
    image: llmHallucinationsImage,
  },
  {
    description: 'The Microsoft outage on July 19th, 2024, was a wake-up call, showing just how vulnerable...',
    image: microsoftOutageImage,
  },
  {
    description: 'Discover how Walmart pioneers AI integration to enhance customer service, personalize shopping, and boost employee...',
    image: walmartAIImage,
  },
  {
    description: 'This article dispels three common myths about implementing Generative AI (GenAI) in business that prevent...',
    image: genaiMythsImage,
  },
];

const Card = ({ title, description, image }) => (
  <div className="card">
    <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="read-more-btn">Read More</button>
    </div>
  </div>
);

const BusinessInsightsSection = () => {
  return (
    <section className="business-insights-section">
      <h2>AI for Business Tips & Insights</h2>
      <div className="card-grid">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </section>
  );
};

export default BusinessInsightsSection;