import React from 'react';
import './header.css';

const Header = () => {
  return (
    <table className='title-headers'>
      <thead className='title-headers'>
        <td className='title-headers'>Home</td>
        <td>Portfolio</td>
        <td>Resume</td>
        <td>About Me</td>
      </thead>
    </table>
  );
};

export default Header;
