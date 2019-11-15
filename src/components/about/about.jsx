import React from 'react';
import Header from './../header/header.jsx';
import Contact from './contact.jsx';
import SocialMedia from './socialMedia.jsx';
import './about.css';

const About = () => {
  return (
    <div>
      <Header />
      <div className="about-me-grid-container">
        <div>
          <img
            src="https://i.imgur.com/QWXqdQz.jpg"
            className="my-photo"
            alt=""
          />
        </div>
        <div className="text-block">
          <div className="position-title">SOFTWARE ENGINEER</div>
          <br />
          <div className="about-me-description">
            Hi there! My name is Allen and I'm a software engineer in the Bay
            Area who enjoys tinkering with and building web applications. I get
            excited when I come across a simple yet beautifully designed
            website, often wondering how the heck it was built. I'm a Hack
            Reactor graduate, where I learned the fundamental skills to to be a
            full-stack developer. However, my passion lies in front-end
            development because I have a knack for visuals and enjoy making
            designs come to life. Prior to engineering, my background
            was in data analytics at two tech giants: Salesforce and LinkedIn, where I coded
            executive facing data visualizations, wrote Python scripts to
            automate and process millions of rows of data, and mentored my interns
            at the time on how to code in Python and SAQL.
            <br />
            <br />
            Outside of programming, you'll find me playing fetch with my dog Ollie,
            playing tennis, drinking boba tea, or getting lost reading
            Wikipedia; often starting at one subject and ending on something
            completely unrelated.
            <br />
          </div>
          <br />
          <div className="contact-box">
            <Contact />
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
