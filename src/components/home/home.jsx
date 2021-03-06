import React from 'react';
import './home.css';
import Header from './../header/header.jsx';
import ViewWork from './viewWork.jsx';

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

class Welcome extends React.Component {
  componentDidMount() {
    let elements = document.getElementsByClassName('txt-rotate');
    for (let i = 0; i < elements.length; i++) {
      let toRotate = elements[i].getAttribute('data-rotate');
      let period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }

    // Inject CSS
    let css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #000 }';
    document.body.appendChild(css);
  }

  render() {
    return (
      <div className='welcome-background'>
        <Header />
        <div className='welcome'>
          <h1 className='welcome-text'>
            Hi, my name is <span className='real-name'>Allen Bui</span>.
          </h1>
          <h1 className='welcome-text'>
            I'm a
            <span
              className='txt-rotate'
              data-period='2000'
              data-rotate='[  " front-end developer.", " web designer.", " photographer.", " tennis player.", " dog.....lover." ]'
            ></span>
          </h1>
          <ViewWork />
        </div>
      </div>
    );
  }
}

export default Welcome;
