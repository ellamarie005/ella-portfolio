import React, { Component } from 'react';
import styled from 'styled-components';

class AboutMe extends Component {
  render() {
    return (
      <Portfolio>
        <Row className='row'>
          <div className='col-md-6'>
            <h1>AB<span>OU</span>T ME</h1>
            <p>I am a Research Assistant turned Software Developer. I've always been the type of person that loves taking up hobbies, and one of the things needed to be checked off of my bucket list was to "Learn how to code". Basics, of course.
              I didn't know that I would enjoy it so much, and so I decided to take it up as a permanent hobby. As I continued learning, my drive and passion for coding kept on growing, which then brings me to where I am.
              After a year of self-learning, I've decided to take a plunge into Software Development.
            </p>
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

p {
  padding: 30px;
}
`

export default AboutMe;
