import React, { Component } from 'react';
import styled from 'styled-components';
import logo from 'assets/2-copy.png';
import HamburgerMenu from 'components/ui/HamburgerMenu';
import logoWhite from 'assets/1-copy.png';

class Header extends Component {
  state = {
    open: false
  };

  toggleMenu = () => {
    // the exclamation point says the opposite of the 'open' state
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;
    return (
      <HeaderWrapper>
        <nav className='nav__left'>
          <span>
            <a href=''>About</a>
          </span>
          <span>
            <a href=''>Projects</a>
          </span>
        </nav>
        <img className='logo__blue' src={logo} alt='logo' />
        <img className='logo__white' src={logoWhite} alt='logo' />
        <nav className='nav__right'>
          <span>
            <a href=''>Skills</a>
          </span>
          <span>
            <a href=''>Blog</a>
          </span>
        </nav>
        <HamburgerMenu
          onClick={this.toggleMenu}
          className={open ? 'open' : ''}
        />
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.header`
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
  background-color: white;

  nav {
    display: none;

    span {
      padding: 15px;

      &:hover {
        a {
          opacity: 1;
          &:after {
            transform: rotate3d(0, 0, 0, 90deg);
          }
        }
      }
    }

    a {
      color: white;
      text-decoration: none;
      font-size: 18px;
      position: relative;
      /* opacity: 0.7; */
      transition: opacity 0.4s ease-in-out;

      &:after {
        content: '';
        position: absolute;
        bottom: -7px;
        left: 0;
        background-color: white;
        height: 3px;
        width: 100%;
        transform: rotate3d(0, 1, 0, 90deg);
        pointer-events: none;
        transition: transform 0.3s ease-in-out;
      }
    }
  }

  img {
    height: 50px;
    width: 50px;

    &.logo {
      &__blue {
        opacity: 0.7;
        display: block;
      }
      &__white {
        display: none;
      }
    }
  }
  /* tablet */
  @media screen and (min-width: 768px) {
    padding: 0 28px;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    background-color: transparent;
    top: 40px;

    nav {
      display: block;
    }
    img {
      height: 50px;
      width: 50px;
      margin: 0 20px;

      &.logo {
        &__blue {
          display: none;
        }
        &__white {
          opacity: 0.7;
          display: block;
        }
      }
    }
  }
`;

export default Header;
