import React, { Component } from 'react';
import styled from 'styled-components';

class AboutMe extends Component {
  render() {
    return (
      <Portfolio>
        <Row className='row'>
          <div className='col-md-5'>
            <h1>AB<span>OU</span>T ME</h1>
            <p>I am a Research Assistant turned Software Developer. I've always been the type of person that loves taking up hobbies,
              and one that is needed to be checked off of my bucket list was to "Learn how to code". Basics, of course.
              I didn't know that I would enjoy it so much, and so I decided to take it up as a permanent hobby.
              As I continued learning, my drive and passion for coding kept on growing, which then brings me to where I am.
              After a year of self-learning, I've decided to join Origin Code Academy, and take a plunge into Software Development.
            </p>
            <p>
              One of my favorite quotes is "Sometimes the impossible just takes a little longer.", and with dedication and hard work, that becomes a fact.
              With that being said, a career change that seemed impossible is now right in front of my eyes.
              As I grow as developer, I look forward to improving and honing my strongest traits: 
              determination, curiosity, and the love of learning. 
            </p>
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
margin: 50px;
}`

const Row = styled.div`
display: flex;
flex-direction: row;

h1 {
  font-size: 40px;
  text-align: center;
  border: solid;
  border-color: #020323;
  padding: 10px;
  margin-bottom: 20px;
}
h1 span {
  color: #ff0500;
}

p {
  padding: 20px;
  font-size: 20px;
}
`

export default AboutMe;
