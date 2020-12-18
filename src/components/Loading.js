import React from 'react';
import Sonic from '../gifs/sonic-foot-tap.gif'
import Mario from  '../gifs/mario-sleeping.gif'
import Mario2 from  '../gifs/mario-sleeping-2.gif'


const randomGif = () => {
  const gifs = [Sonic, Mario, Mario2]

  return gifs[Math.floor(Math.random() * gifs.length)]
}

const imgStyle = {
  display: 'block',
  margin: '20% auto',
  maxHeight: "10em",
  maxWidth: "10em"
}

const Loading = () => {
  return (
    <div>
      <img style={imgStyle} src={randomGif()} alt="sonic waiting" />
    </div>
  );
}

export default Loading;
