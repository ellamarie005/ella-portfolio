import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
  render() {
    return (
      <footer class="container-fluid text-center">
        <div class="col-md-12">
          <a href="#cover" class="btn btn-default">Back to the Top</a>
          <a href="#about" class="btn btn-default">About Me</a>
          <a href="#portfolio" class="btn btn-default">Portfolio</a>
        </div>
        <p>Copyright Ella Marie 2017. All Rights Reserved</p>
      </footer>
    )
  }
}

export default Footer;
