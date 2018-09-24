import React from 'react';
import styled from 'styled-components';
import bg from 'assets/background.jpg';
// import profilePic from 'assets/Ella.jpg';

const Hero = () => {
  return (
    <Content>
      <Background />
      <h1>E<span>LL</span>A TOLENTINO</h1>
      <h3>Software Developer</h3>
      {/* <img className='profile-pic' src={profilePic} alt='Profile Pic' /> */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        id='Layer_1'
        width='64'
        height='64'
        viewBox='0 0 64 64'
      >
        <path
          strokeLinejoin='bevel'
          strokeMiterlimit='10'
          d='M15,24L32,41L49,24'
          strokeDasharray='49,51'
        />
      </svg>
    </Content>
  );
};

const Background = styled.div`
  background: url(${bg}) #999;
  background-size: cover;
  background-position: center;
  filter: brightness(0.9);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h1 {
    font-size: 65px;
    margin-top: 250px;
    margin-bottom: 10px;
  }
  h1 span {
    color: #ff0500;
  }
  h3 {
    font-size: 30px;
    margin-bottom: 75px;
  }
  .profile-pic {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 5px solid white;
    margin-bottom: 25px;
  }
  svg {
    fill: none;
    stroke: white;
    stroke-width: 2;
    margin-top: 200px;
  }

  @media screen and (min-width: 1024px) {
    height: 100%;
    min-height: 700px;
    padding: 63px 0px;
  }
`;

export default Hero;
