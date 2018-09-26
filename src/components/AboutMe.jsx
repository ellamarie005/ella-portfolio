import React, { Component } from 'react';
import styled from 'styled-components';

class AboutMe extends Component {
  render() {
    return (
      <Portfolio>
        <Row className='row'>
          <div className='col-md-6'>
            <h1>AB<span>OU</span>T ME</h1>
            <p>I am a Research Assistant turned Software Developer.</p>
            <br />
            <p>During my free time, I enjoy...</p>
          </div>
          <div className='col-md'>
            Picture
          </div>
        </Row>
      </Portfolio>
    )
  }
}

const Portfolio = styled.div`
background-color: white;
color: #020323;
margin: 90px;
border: solid;
border-color: #020323;
}`

const Row = styled.div`
display: flex;
flex-direction: row;

h1 {
  font-size: 40px;
  text-align: center;
  margin: 20px;
}
h1 span {
  color: #ff0500;
}
`

export default AboutMe;
