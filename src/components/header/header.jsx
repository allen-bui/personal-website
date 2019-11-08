import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const pages = [
  {
    title: 'Resume',
    alias: '/resume',
    linkStyle: { textDecoration: 'none', color: '#000' },
  },
  {
    title: 'Portfolio',
    alias: '/portfolio',
    linkStyle: { textDecoration: 'none', color: '#000' },
  },
  {
    title: 'About Me',
    alias: '/about',
    linkStyle: { textDecoration: 'none', color: '#000' },
  },
  {
    title: 'Home',
    alias: '/',
    linkStyle: { textDecoration: 'none', color: '#fff' },
  },
];

const Header = () => {
  return (
    <div>
      {pages.map((header, index) => {
        return (
          <SingleHeader
            key={index}
            headerTitle={header.title}
            alias={header.alias}
          />
        );
      })}
    </div>
  );
};

class SingleHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHoverOver: false,
    };
    this.onUserHover = this.onUserHover.bind(this);
  }

  onUserHover() {
    this.setState({
      isHoverOver: !this.state.isHoverOver,
    });
  }

  render() {
    const style = {
      cursor: this.state.isHoverOver ? 'pointer' : 'default',
      borderBottom: this.state.isHoverOver ? '2px solid white' : 'none',
      fontWeight: this.state.isHoverOver ? '800' : '500',
    };

    const linkStyle = {
      textDecoration: 'none',
      color: '#fff',
    };

    if (window.location.href.split('3000')[1] !== '/') {
      linkStyle['color'] = '#000';
      style['borderBottom'] = this.state.isHoverOver
        ? '2px solid black'
        : 'none';
    }

    return (
      <div>
        <Link to={this.props.alias} style={linkStyle}>
          <div
            className='navigation-title'
            style={style}
            onMouseOver={this.onUserHover}
            onMouseOut={this.onUserHover}
          >
            {this.props.headerTitle}
          </div>
        </Link>
      </div>
    );
  }
}

export default Header;
