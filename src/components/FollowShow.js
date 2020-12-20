import React from 'react';
import { useHistory } from "react-router-dom"


const FollowShow = ({id, username, pic}) => {

  let history = useHistory()   
  
  const goToUser = () => {
    history.push(`/users/${id}/profile`)
  }

  return (
    <div>
      <img onClick={goToUser}
          style={{margin: "auto", width: "128px", height: "128px"}}
          className="img-thumbnail"
          src={pic}
          alt="user pic"
          />
      <h5>{username}</h5>
    </div>
  );
}

export default FollowShow;
