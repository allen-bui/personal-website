import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const pages = [
  {
    title: 'Resume',
    alias: '/resume',
  },
  {
    title: 'Portfolio',
    alias: '/portfolio',
  },
  {
    title: 'About Me',
    alias: '/about',
  },
  {
    title: 'Home',
    alias: '/',
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
      borderBottom: this.state.isHoverOver ? '2px solid black' : 'none',
      fontWeight: this.state.isHoverOver ? '800' : '500',
    };

    const linkStyle = {
      textDecoration: 'none',
      color: '#000',
    };

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
