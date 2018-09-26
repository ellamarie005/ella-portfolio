import React, { Component } from 'react';
import styled from 'styled-components';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    };
    this.updateStateValues = this.updateStateValues.bind(this);
    this.sendHandler = this.sendHandler.bind(this);
  }

  updateStateValues(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  sendHandler() {

  }
  
  render() {
    return (
      <ContactForm>
        <h1>CONTACT ME</h1>
        <form id='Form' className='col-md-7'>
          <div className='row' action='/thanks' method='POST'>
            <div id='firstName' className='col-sm-6 form-group'>
              <input className='form-control' value={this.state.name} onChange={this.updateStateValues} id='name' name='name' placeholder='Name' type='text' required />
            </div>
            <div className='col-sm-6 form-group'>
              <input className='form-control' value={this.state.email} onChange={this.updateStateValues} id='email' name='email' placeholder='Email' type='email' required />
            </div>
            <div className='col-md'>
              <textarea className='form-control' value={this.state.message} onChange={this.updateStateValues} id='message' name='message' placeholder='Message' rows='5' />
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='form-group'>
              <button className='btn pull-right' type='submit'>Send</button>
            </div>
          </div>
        </form>
      </ContactForm>
    )
  }
}

const ContactForm = styled.div`
padding: 30px;
background-color: #020323;
color: white;

h1 {
  font-size: 20px;
  text-align: center;
  margin: 20px;
}

#Form {
  margin: 0 auto;
}

button {
  margin: 20px;
}


`

export default Contact;
