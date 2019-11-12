import React from 'react';
import Header from './../header/header.jsx';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import './about.css';

const customStyles = {
  h2: {
    color: 'lightskyblue',
  },
  content: {
    height: '800px',
    width: '1000px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overlay: {
      backgroundColor: 'papayawhip',
    },
  },
};

Modal.setAppElement('#root');

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  sendEmail(event) {
    event.preventDefault();
    emailjs
      .sendForm(
        'allen_vbui_gmail_com',
        'contact_form',
        event.target,
        'user_HQvr7X2Izd5mYMxRf7GHP',
      )
      .then(() => {
        console.log('Your message has been successfully!');
        this.closeModal();
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className='about-me-grid-container'>
          <div>
            <img
              src='https://i.pinimg.com/originals/76/11/73/761173b79751f1f8a87681e676af7348.jpg'
              className='my-photo'
              alt=''
            />
          </div>
          <div className='text-block'>
            <div className='position-title'>SOFTWARE ENGINEER</div>
            <br />
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
              ultrices dui sapien eget mi proin. Posuere sollicitudin aliquam
              ultrices sagittis orci a scelerisque. Pellentesque diam volutpat
              commodo sed egestas egestas fringilla phasellus faucibus. Sed cras
              ornare arcu dui vivamus arcu felis bibendum ut. Odio aenean sed
              adipiscing diam donec adipiscing. Vitae justo eget magna fermentum
              iaculis eu non diam. Feugiat nisl pretium fusce id velit ut
              tortor. In est ante in nibh. Vel elit scelerisque mauris
              pellentesque pulvinar pellentesque habitant morbi tristique. Massa
              sapien faucibus et molestie ac feugiat sed lectus vestibulum.
              Tristique senectus et netus et malesuada fames ac turpis egestas.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
              ultrices dui sapien eget mi proin. Posuere sollicitudin aliquam
              ultrices sagittis orci a scelerisque. Pellentesque diam volutpat
              commodo sed egestas egestas fringilla phasellus faucibus. Sed cras
              ornare arcu dui vivamus arcu felis bibendum ut. Odio aenean sed
              adipiscing diam donec adipiscing. Vitae justo eget magna fermentum
              iaculis eu non diam. Feugiat nisl pretium fusce id velit ut
              tortor. In est ante in nibh. Vel elit scelerisque mauris
              pellentesque pulvinar pellentesque habitant morbi tristique. Massa
              sapien faucibus et molestie ac feugiat sed lectus vestibulum.
              Tristique senectus et netus et malesuada fames ac turpis egestas.
            </div>
            <br />
            <div className='contact-box'>
              <div className='contact-button'>
                <button className='contact-text' onClick={this.openModal}>
                  CONTACT
                </button>
                <Modal
                  isOpen={this.state.isModalOpen}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                >
                  <form id='contact-form' onSubmit={this.sendEmail}>
                    <input type='hidden' name='contact_number' />
                    <label>Name</label>
                    <input type='text' name='user_name' />
                    <label>Email</label>
                    <input type='email' name='user_email' />
                    <label>Message</label>
                    <textarea name='message'></textarea>
                    <input type='submit' value='Send' />
                  </form>
                </Modal>
              </div>
              <div className='contact-button'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.linkedin.com/in/allenvbui'
                >
                  <img
                    src='https://image.flaticon.com/icons/png/512/174/174857.png'
                    alt='linkedin'
                    className='contact-icon'
                  />
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/allen-bui'
                >
                  <img
                    src='https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/github-square-social-media-512.png'
                    alt='github'
                    className='contact-icon'
                  />
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://twitter.com'
                >
                  <img
                    src='https://cdn1.iconfinder.com/data/icons/logotypes/32/square-twitter-512.png'
                    alt='twitter'
                    className='contact-icon'
                  />
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.instagram.com/allen.bui/'
                >
                  <img
                    src='https://www.freepngimg.com/thumb/logo/62773-blog-logo-computer-instagram-icons-free-clipart-hd.png'
                    alt='instagram'
                    className='contact-icon'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
