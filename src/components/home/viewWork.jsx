import React from 'react';
import { Link } from 'react-router-dom';

export default class ViewWork extends React.Component {
  constructor() {
    super();
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
      backgroundColor: this.state.isHoverOver ? '#000' : '#fff',
      fontWeight: this.state.isHoverOver ? '400' : '200',
      color: this.state.isHoverOver ? '#fff' : '#000',
      cursor: this.state.isHoverOver ? 'pointer' : 'default',
    };
    return (
      <Link to='/portfolio'>
      <button
        style={style}
        className='view-work-button'
        onMouseOver={this.onUserHover}
        onMouseOut={this.onUserHover}
      >
        View my work
      </button>
      </Link>
    );
  }
}