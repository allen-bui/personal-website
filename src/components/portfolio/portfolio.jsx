import React from 'react';
import Header from './../header/header.jsx';
import './portfolio.css';

const Portfolio = () => {
  return (
    <div>
      <Header />
      <div className='portfolio-container'>
        <div>
          <div className='image-gallery'></div>
        </div>
        <div className='text-block'>
          <div className='position-title'>RECREATING AIRBNB</div>
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
              <a
                href='https://airbnb-project-clone-allen-bui.netlify.com/'
                className='checkout-button'
                target='_blank'
                rel='noopener noreferrer'
              >
                CHECK IT OUT
              </a>
            </div>
            <div className='contact-button'>
              <a
                href='https://github.com/allen-bui/airbnb-project-clone'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/github-square-social-media-512.png'
                  alt='github'
                  className='contact-icons'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
