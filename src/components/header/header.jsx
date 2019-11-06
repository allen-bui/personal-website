import React from 'react';
import './header.css';

const Header = () => {
  return (
    <table className='navigation-title-headers'>
      <tbody>
        <tr>
          {['Home', 'About Me', 'Portfolio', 'Contact', 'Resume'].map(
            (header, index) => {
              return <SingleHeader key={index} headerTitle={header} />;
            },
          )}
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
      fontWeight: this.state.isHoverOver ? '800' : '500'
    };
    return (
      <td
        className='navigation-title'
        style={style}
        onMouseEnter={this.onUserHover}
        onMouseLeave={this.onUserHover}
      >
        {this.props.headerTitle}
      </td>
    );
  }
}

export default Header;
