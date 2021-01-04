import React from 'react';
import bananas from '../assets/images/bananas3.png'
import heart from '../assets/images/heart.png'
import sword from '../assets/images/sword.png'
import ring from '../assets/images/ringflipped.png'
import fire from '../assets/images/fire.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const SpritesDiv = styled.div`
  @media (max-width: 1075px) {
    display: none
  }
`

const FruitImg = styled.img`
  width: 48px;
  height: 48px
`

const NavBarSprites = () => {
  return (
    <SpritesDiv className="ml-auto" as={Link} to={'/'}>
      <FruitImg src={bananas} alt="bananas"/>
      <FruitImg src={heart} alt="heart"/>
      <FruitImg src={sword} alt="sword"/>
      <FruitImg src={fire} alt="fire"/>
      <FruitImg src={ring} alt="ring"/>
    </SpritesDiv>
  );
}

export default NavBarSprites;
