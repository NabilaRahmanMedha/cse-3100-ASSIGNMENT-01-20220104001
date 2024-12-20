import React, { useState, useEffect } from 'react';

const AboutUs = () => {
  const [catImage, setCatImage] = useState(null);

  useEffect(() => {
    const fetchCatImage = async () => {
      try {
        // Fetch a single cat image from the API
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        setCatImage(data[0].url);  // Store the URL of the fetched image
      } catch (error) {
        console.error('Error fetching cat image:', error);
      }
    };

    fetchCatImage();
  }, []);

  return (
    <section className="about-us">
      <h2>About Us</h2>
      <div className="content">
        <div className="text-content">
          <p>
            Welcome to our organization! We are dedicated to making a difference in the lives of pets and their families.
            Our mission is to connect loving homes with adorable pets in need of care.
          </p>

          <p>
            Established in 2020, our team has grown into a community-driven platform where every pet has a chance to find
            their forever home. Thank you for being a part of our journey.
          </p>

          <p>
            Follow us on social media to stay updated on our latest news and initiatives. Together, we can make a positive
            impact!
          </p>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
        
        {catImage && (
          <div className="cat-image">
            <img src={catImage} alt="A cute cat" />
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutUs;
