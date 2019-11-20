import React from 'react';
import Header from './../header/header.jsx';
import './resume.css';

const Resume = () => {
  return (
    <div className='resume'>
      <Header />
      <div className='resume-container'>
        <div className='resume-title'>Click the Résumé to Download</div>
        <a
          href='https://github.com/allen-bui/resume/raw/master/Resume%20-%20Allen%20Bui.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='resume-link'
        >
          <img
            src='https://i.imgur.com/ZXbv6ou.png'
            alt='resume'
            className='resume-image'
          />
        </a>
      </div>
    </div>
  );
};

export default Resume;
