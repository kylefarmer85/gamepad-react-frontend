import React from 'react';
import Sonic from '../assets/gifs/sonic-foot-tap.gif'
import Mario from  '../assets/gifs/mario-sleeping.gif'
import Mario2 from  '../assets/gifs/mario-sleeping-2.gif'


const randomGif = () => {
  const gifs = [Sonic, Sonic, Mario, Mario2]

  return gifs[Math.floor(Math.random() * gifs.length)]
}

// const imgStyle = {
//   display: 'block',
//   margin: '20% auto',
//   maxHeight: "10em",
//   maxWidth: "10em"
// }

const imgStyle = {
  maxHeight: "150px",
  maxWidth: "150px",
  margin: "4% auto",
  
}

const Loading = () => {
  return (
    <div className="m-4 d-flex flex-wrap justify-content-center">
      <img style={imgStyle} src={randomGif()} alt="waiting gif" />
    </div>
  );
}

export default Loading;
