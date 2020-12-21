import React from 'react';
import FollowShow from '../components/FollowShow'

const FollowingContainer = ({followings}) => {
  
  const renderFollowings = () => {
    return followings.map(user => {
      return <FollowShow {...user} key={user.id} />
    })
  }
  
  return (
    <div>
      {
      followings.length === 0 ?
        <h3>Not following anyone</h3>
      :
        renderFollowings()
      }
    </div>
  );
}

export default FollowingContainer;
