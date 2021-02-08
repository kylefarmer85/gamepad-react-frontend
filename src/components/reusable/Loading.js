import React from 'react';
import Sonic from '../../assets/gifs/sonic-foot-tap.gif';
import Mario from '../../assets/gifs/mario-sleeping.gif';

const randomGif = () => {
  const gifs = [Sonic, Sonic, Mario];

  return gifs[Math.floor(Math.random() * gifs.length)];
};

const imgStyle = {
  maxHeight: '150px',
  maxWidth: '150px',
  margin: '4% auto'
};

const Loading = () => {
  return (
    <div className='m-4 d-flex flex-wrap justify-content-center'>
      <img style={imgStyle} src={randomGif()} alt='waiting gif' />
    </div>
  );
};

export default Loading;
