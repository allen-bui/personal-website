import React from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import './contact.css';

const modalCustomStyles = {
  content: {
    height: '30em',
    width: '25em',
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
      isMouseOverSend: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.onUserMouseOver = this.onUserMouseOver.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  onUserMouseOver() {
    this.setState({ isMouseOverSend: !this.state.isMouseOverSend });
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
    const sendCustomStyles = {
      backgroundColor: this.state.isMouseOverSend ? '#21c4ff' : '#000',
    };

    return (
      <div className='contact-button'>
        <button className='contact-text' onClick={this.openModal}>
          CONTACT
        </button>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          style={modalCustomStyles}
        >
          <div className='modal-header'>
            <div className='modal-title'>CONTACT ME</div>
            <form
              id='contact-form'
              onSubmit={this.sendEmail}
              className='contact-form'
            >
              <input type='hidden' name='contact_number' />
              <label>
                Name
                <input type='text' name='user_name' className='form-name' required/>
              </label>
              <label>
                Email
                <input type='email' name='user_email' className='form-email' reuired/>
              </label>
              <label>
                Message
                <textarea name='message' className='form-text' required/>
              </label>
              <input
                type='submit'
                value='Send'
                className='form-submit'
                style={sendCustomStyles}
                onMouseOver={this.onUserMouseOver}
                onMouseOut={this.onUserMouseOver}
              />
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}
