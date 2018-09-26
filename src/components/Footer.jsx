import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
  render() {
    return (
      <FooterInfo>
        <footer className="container-fluid text-center">
          <div className="col-md-12">
            <a href="#cover" className="btn">Back to the Top</a>
            <a href="#about" className="btn">About Me</a>
            <a href="#portfolio" className="btn">Portfolio</a>
          </div>
          <p>Copyright Ella Marie 2017. All Rights Reserved</p>
        </footer>
      </FooterInfo>
    )
  }
}

const FooterInfo = styled.div`
background-color: #020323;
color: white;
padding: 20px;

a {
  color: white;
}
`
export default Footer;
