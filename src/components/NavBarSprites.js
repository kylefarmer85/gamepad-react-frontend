import React from 'react';
import bananas from '../assets/images/bananas3.png'
import heart from '../assets/images/heart.png'
import sword from '../assets/images/sword.png'
import fire from '../assets/images/fire.png'
import ring from '../assets/images/ringflipped.png'

const NavBarSprites = () => {
  return (
    <div className="mr-2">
      <img src={bananas} style={{width: "48px", height: "48px"}} alt="bananas"/>
      <img src={heart} style={{width: "48px", height: "48px"}} alt="heart"/>
      <img src={sword} style={{width: "48px", height: "48px"}} alt="sword"/>
      <img src={fire} style={{width: "48px", height: "48px"}} alt="fire"/>
      <img src={ring} style={{width: "48px", height: "48px"}} alt="sword"/>
    </div>
  );
}

export default NavBarSprites;
