import React from 'react';
import { useHistory } from "react-router-dom"


const UserThumb = ({id, username, photo}) => {

  let history = useHistory()   
  
  const goToUser = () => {
    history.push(`/users/${id}/profile`)
  }

  const picStyle = {
    width: "128px",
    height: "128px",
    border: "4px solid white",
    borderRadius: "3%"
  }

  let photoUrl = `http://localhost:3000${photo}` 

  return (
    <div className="m-2 text-center fade-in">

      <img onClick={goToUser} src={photoUrl} style={picStyle} alt="user pic"/>

      <h4 onClick={goToUser}>{username}</h4>

    </div>
  );
}

export default UserThumb;
