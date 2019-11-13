import React from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import './contact.css';

const customStyles = {
  content: {
    height: '50%',
    width: '50%',
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

export default class Contact extends React.Component {
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
      <div className='contact-button'>
        <button className='contact-text' onClick={this.openModal}>
          CONTACT
        </button>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <div className='modal-header'>
            <div className='modal-title'>Contact Me</div>
            <form
              id='contact-form'
              onSubmit={this.sendEmail}
              className='contact-form'
            >
              <input type='hidden' name='contact_number' />
              <label>Name</label>
              <input type='text' name='user_name' className='form-name' />
              <label>Email</label>
              <input type='email' name='user_email' className='form-email' />
              <label>Message</label>
              <textarea name='message' className='form-text' />
              <input type='submit' value='Send' className='form-submit' />
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}
