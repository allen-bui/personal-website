import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const pages = [
  {
    title: 'Home',
    alias: '/',
  },
  {
    title: 'About Me',
    alias: '/about',
  },
  {
    title: 'Portfolio',
    alias: '/portfolio',
  },
  {
    title: 'Contact',
    alias: '/contact',
  },
  {
    title: 'Resume',
    alias: '/resume',
  },
];

const Header = () => {
  return (
    <table className='navigation-title-headers'>
      <tbody>
        <tr>
          {pages.map((header, index) => {
            return (
              <SingleHeader
                key={index}
                headerTitle={header.title}
                alias={header.alias}
              />
            );
          })}
        </tr>
      </tbody>
    </table>
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

    return (
      <td>
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
      </td>
    );
  }
}

export default Header;
