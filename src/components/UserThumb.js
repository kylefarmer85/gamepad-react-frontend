import React from 'react';
import { useHistory } from 'react-router-dom';
import API from '../API'

const UserThumb = ({ id, username, photo }) => {
  
  let history = useHistory();

  const goToUser = () => {
    history.push(`/users/${id}/profile`);
  };

  let photoUrl = `${API}/${photo}`;

  return (
    <div className='m-2 text-center fade-in'>
      <img
        className='user-thumb'
        onClick={goToUser}
        src={photoUrl}
        alt='user pic'
      />

      <h4 onClick={goToUser}>{username}</h4>
    </div>
  );
};

export default UserThumb;
