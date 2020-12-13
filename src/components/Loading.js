import React from 'react';
import Sonic from '../gifs/sonic-foot-tap.gif'


const divStyle = {
  margin: "auto",
  paddingTop: "25%"
}

const Loading = () => {
  return (
    <div style={divStyle}>
     <img src={Sonic} alt="sonic waiting" />
    </div>
  );
}

export default Loading;
