import React from 'react';
import { useHistory } from "react-router-dom"


const UserThumb = ({id, username, photo}) => {

  let history = useHistory()   
  
  const goToUser = () => {
    history.push(`/users/${id}/profile`)
  }

  let photoUrl = `http://localhost:3000${photo}` 

  return (
    <div className="m-2 text-center">
      <img onClick={goToUser}
          style={{width: "128px", height: "128px"}}
          className="img-thumbnail"
          src={photoUrl}
          alt="user pic"
          />
      <h5 onClick={goToUser}>{username}</h5>
    </div>
  );
}

export default UserThumb;
