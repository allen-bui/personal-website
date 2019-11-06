import React from 'react';
import './welcome.css';

let TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  let that = this;
  let delta = 275 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  let elements = document.getElementsByClassName('txt-rotate');
  for (let i = 0; i < elements.length; i++) {
    let toRotate = elements[i].getAttribute('data-rotate');
    let period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  let css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
  document.body.appendChild(css);
};

function welcome() {
  return (
    <div className='welcome'>
      <h1 className='welcome-text'>
        Hi, my name is <span className='real-name'>Allen Bui</span>.
      </h1>
      <h1 className='welcome-text'>
        I'm a
        <span
          className='txt-rotate'
          data-period='2000'
          data-rotate='[ " software engineer.", " designer.", " photographer." ]'
        ></span>
      </h1>
      <ViewWork/>
    </div>
  );
}

class ViewWork extends React.Component {
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
      fontWeight: this.state.isHoverOver ? '300' : '100',
      color: this.state.isHoverOver ? '#fff' : '#aaa',
      cursor: this.state.isHoverOver ? 'pointer' : 'default',
    }
    return (
      <h3
        style={style}
        className='view-work-button'
        onMouseEnter={this.onUserHover}
        onMouseLeave={this.onUserHover}
      >
        View my work
      </h3>
    );
  }
}

export default welcome;
