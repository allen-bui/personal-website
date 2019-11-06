import React from 'react';
import './header.css';

const Header = () => {
  return (
    <table className='navigation-title-headers'>
      <thead>
        <td className='navigation-title'>Home</td>
        <td className='navigation-title'>About Me</td>
        <td className='navigation-title'>Portfolio</td>
        <td className='navigation-title'>Contact</td>
        <td className='navigation-title'>Resume</td>
      </thead>
    </table>
  );
};

export default Header;
