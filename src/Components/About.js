import React from 'react';

function About() {
    const handleButtonClick = () => {
        console.log('Button clicked');
      };
  return (
    <section className="about column container" id="about">
      <div className="about-img">
      <img src="../Assets/logo_files/about.png" alt=""/>
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to Black Diamond, where every piece of jewelry tells a
          story, and every gemstone sparkles with the memories of generations.
          For over eight remarkable decades, we've been dedicated to crafting
          the most exquisite and cherished jewelry in the industry.
        </p>
        <p></p>
        <button className="page-btn" onClick={handleButtonClick}>
  More on our history
</button>
      </div>
    </section>
  );
}

export default About
