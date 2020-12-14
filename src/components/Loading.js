import React from 'react';
import Sonic from '../gifs/sonic-foot-tap.gif'


const divStyle = {
  display: 'block',
  margin: '25% auto'
}

const Loading = () => {
  return (
    <div >
     <img style={divStyle} src={Sonic} alt="sonic waiting" />
    </div>
  );
}

export default Loading;
