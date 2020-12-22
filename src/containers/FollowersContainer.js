import React from 'react';
import UserThumb from '../components/UserThumb'

const FollowersContainer = ({followers}) => {
  
  const renderFollowers = () => {
    return followers.map(user => {
      return <UserThumb {...user} key={user.id} />
    })
  }
  
  return (
    <div>
      {
      followers.length === 0 ?
        <h3>No followers.</h3>
      :
        renderFollowers()

      }
    </div>
  );
}

export default FollowersContainer;

