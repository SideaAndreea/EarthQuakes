import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className='about-container'>
      <h1 className='title'>About</h1>
      <section className='about'>
        <div className='main'>
          <img
            src={require("./img/img.jpeg")}
            alt='About Me'
            className='profile-img'
          />
          <div className='about-text'>
            <h4>Name: YOUR_NAME</h4>
            <h4>Age: YOUR_AGE</h4>
            <h4>Contact: YOUR_EMAIL</h4>
          </div>
        </div>
        <p className='paragraf'>
          Good vibes only
          <br />
          Incredible change happens in your life when you decide to take control
          of what you do have power over instead of craving control over what
          you don't. Difficult roads often lead to beautiful destinations. Look
          for something positive in each day, even if some days you have to look
          a little harder. Every day is a new beginning. Take a deep breath,
          smile and start again. Never give up on the things that make you
          smile.
        </p>
      </section>
    </div>
  );
};

export default About;
