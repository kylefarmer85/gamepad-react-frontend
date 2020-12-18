import React from 'react';
import bananas from '../images/bananas3.png'
import heart from '../images/heart.png'
import sword from '../images/sword.png'
import fire from '../images/fire.png'
import ring from '../images/ringflipped.png'

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
