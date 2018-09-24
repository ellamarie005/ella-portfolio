import React, { Component } from 'react';
import styled from 'styled-components';

class AboutMe extends Component {
  render() {
    return (
      <Portfolio>
        <Row>
          <div>
            <h1>ABOUT ME</h1>
            <p>Ella Tolentino</p>
          </div>
          <div>Picture</div>
        </Row>
      </Portfolio>
    )
  }
}

const Portfolio = styled.div`
background-color: white;
color: #020323;
margin: 90px;
}`

const Row = styled.div`
display: flex;
flex-direction: row;

h1 {
  font-size: 40px;
  text-align: center;
  
`

export default AboutMe;
