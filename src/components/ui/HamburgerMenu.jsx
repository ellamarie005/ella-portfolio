import React from "react";
import styled from "styled-components";

export default props => {
  return (
    <HamburgerMenu {...props}>
      <span />
      <span />
      <span />
    </HamburgerMenu>
  );
};
const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 14px;
  width: 22px;
  transform: scale(1);
  transition: transform 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.1s;

  span {
    display: block;
    width: 22px;
    height: 2px;
    top: 0;
    left: 0;
    transform-origin: left center;
    transform: rotateZ(0deg) rotateY(0deg);
    position: relative;
    background-color: #999;
    transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  &.open {
    span{
      left: 3px;

      &:nth-child(1) {
        transform: rotateZ(45deg) rotateY(0deg);
        top: -2px;
      }
      &:nth-child(2) {
        transform-origin: center;
        transform: rotateZ(0deg) rotateY(90deg);
        left:0;
      }
      &:nth-child(3) {
        transform: rotateZ(-45deg) rotateY(0deg);
        top: 2px;
      }
    }
  } 
  /*desktop*/
  @media screen and (min-width: 1024px) {
    display: none;
  }
}
`;
