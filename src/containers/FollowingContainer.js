import React from 'react';
import UserThumb from '../components/UserThumb'

const FollowingContainer = ({followings}) => {
  
  const renderFollowings = () => {
    return followings.map(user => {
      return <UserThumb {...user} key={user.id} />
    })
  }
  
  return (
    <div>
      {
      followings.length === 0 ?
        <h3>Not following anyone.</h3>
      :
        renderFollowings()
      }
    </div>
  );
}

export default FollowingContainer;
