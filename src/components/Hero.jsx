import React from "react";
import styled from "styled-components";
import bg from "assets/BG_5.jpg";
import profilePic from "assets/Jacob-Heflin-2017.jpg";
import down from "assets/down.svg";

const Hero = () => {
  return (
    <HeroWrapper>
      <BackgroundImage />
      <Content>
        <h1>Jacob Heflin</h1>
        <h3>User Experience Designer</h3>
        <img className="profile-pic" src={profilePic} alt="Profile Pic" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          width="64"
          height="64"
          viewBox="0 0 64 64"
        >
          <path
            strokeLinejoin="bevel"
            strokeMiterlimit="10"
            d="M15,24L32,41L49,24"
            strokeDasharray="49,51"
          />
        </svg>
      </Content>
    </HeroWrapper>
  );
};

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  h1 {
    font-size: 54px;
    margin-bottom: 5px;
  }
  h3 {
    font-size: 27.2px;
    margin-bottom: 55px;
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
  }
`;

const BackgroundImage = styled.div`
  background: url(${bg}) #999;
  background-size: cover;
  background-position: center;
  padding-top: calc(9 / 16 * 100%);
  filter: brightness(0.9);
`;

const HeroWrapper = styled.div`
  /* max-height: 850px; */
  overflow: hidden;
  position: relative;
`;

export default Hero;
