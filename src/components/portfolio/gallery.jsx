import React from 'react';
import Carousel from 'react-images';

const images = [
  { src: 'https://imgur.com/dcZZdMU.gif' },
  { src: 'https://imgur.com/7imSCpF.gif' },
  { src: 'https://imgur.com/wUcNthk.gif' },
  { src: 'https://imgur.com/yVwl6aZ.gif' },
];

const customStyles = {
  header: (base, state) => ({
    ...base,
    borderBottom: '1px dotted pink',
    padding: 20,
  }),
  container: (base) => ({
    ...base,
    backgroundColor: '#fafafa',
    boxShadow:
      '0 1px 10px -1px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.04), 0 1px 0 rgba(0,0,0,0.04)',
    padding: 10,
  }),
  footer: (base, state) => ({
    ...base,
    color: 'black',
    minHeight: 42,
    paddingBottom: 0,
  }),
  footerCount: (base) => ({
    ...base,
    color: '#afafaf',
    fontFamily: 'Raleway',
    margin: '10% 50%',
    fontSize: '20px',
  }),
  navigationPrev: (base) => ({
    ...base,
    color: 'black',
  }),
  navigationNext: (base) => ({
    ...base,
    color: 'black',
  }),
};

class Gallery extends React.Component {
  render() {
    return <Carousel styles={customStyles} views={images} />;
  }
}

export default Gallery;
