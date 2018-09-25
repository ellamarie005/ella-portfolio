import React, { Component } from 'react';
import styled from 'styled-components';

class Contact extends Component {
  render() {
    return (
      <ContactForm className='col-md-8'>
        <form className='row' action='/thanks' method='POST'>
          <div className='col-sm-6 form-group'>
            <input className='form-control' id='firstName' name='firstName' placeholder='Name' type='text' required />
          </div>
          <div className='col-sm-6 form-group'>
            <input className='form-control' id='email' name='email' placeholder='Email' type='email' required />
          </div>
          <textarea className='form-control' id='comment' name='comment' placeholder='Comment' rows='5' />
          <br />
          <div className='row'>
            <div className='col-md-12 form-group'>
              <button className='btn pull-right' type='submit'>Send</button>
            </div>
          </div>
        </form>
      </ContactForm>
    )
  }
}

const ContactForm = styled.div`
margin: 0 auto;
`

export default Contact;
