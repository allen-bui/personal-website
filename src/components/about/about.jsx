import React from 'react';
import Header from './../header/header.jsx';
import './about.css';

const About = () => {
  return (
    <div>
      <Header />
      <div className='about-me-grid-container'>
        <div>
          <img
            src='https://i.pinimg.com/originals/76/11/73/761173b79751f1f8a87681e676af7348.jpg'
            className='my-photo'
            alt=''
          />
        </div>
        <div className='text-block'>
          <div className='position-title'>SOFTWARE ENGINEER</div>
          <br />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
            ultrices dui sapien eget mi proin. Posuere sollicitudin aliquam
            ultrices sagittis orci a scelerisque. Pellentesque diam volutpat
            commodo sed egestas egestas fringilla phasellus faucibus. Sed cras
            ornare arcu dui vivamus arcu felis bibendum ut. Odio aenean sed
            adipiscing diam donec adipiscing. Vitae justo eget magna fermentum
            iaculis eu non diam. Feugiat nisl pretium fusce id velit ut tortor.
            In est ante in nibh. Vel elit scelerisque mauris pellentesque
            pulvinar pellentesque habitant morbi tristique. Massa sapien
            faucibus et molestie ac feugiat sed lectus vestibulum. Tristique
            senectus et netus et malesuada fames ac turpis egestas.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
            ultrices dui sapien eget mi proin. Posuere sollicitudin aliquam
            ultrices sagittis orci a scelerisque. Pellentesque diam volutpat
            commodo sed egestas egestas fringilla phasellus faucibus. Sed cras
            ornare arcu dui vivamus arcu felis bibendum ut. Odio aenean sed
            adipiscing diam donec adipiscing. Vitae justo eget magna fermentum
            iaculis eu non diam. Feugiat nisl pretium fusce id velit ut tortor.
            In est ante in nibh. Vel elit scelerisque mauris pellentesque
            pulvinar pellentesque habitant morbi tristique. Massa sapien
            faucibus et molestie ac feugiat sed lectus vestibulum. Tristique
            senectus et netus et malesuada fames ac turpis egestas.
          </div>
          <br />
          <div className='contact-box'>
            <div className='contact-button'>
              <div className='contact-text'>CONTACT</div>
            </div>
            <div className='contact-button'>
              <img
                src='https://image.flaticon.com/icons/svg/174/174857.svg'
                alt='linkedin'
                className='contact-icon'
              />
              <img
                src='https://image.flaticon.com/icons/svg/25/25657.svg'
                alt='github'
                className='contact-icon'
              />
              <img
                src='https://image.flaticon.com/icons/svg/174/174876.svg'
                alt='twitter'
                className='contact-icon'
              />
              <img
                src='https://image.flaticon.com/icons/svg/174/174855.svg'
                alt='instagram'
                className='contact-icon'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
