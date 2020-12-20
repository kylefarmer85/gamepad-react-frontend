import React from 'react';
import FollowShow from '../components/FollowShow'
import Button from 'react-bootstrap/Button'

const FollowingContainer = ({followings, toggleShowFollowers}) => {
  
  const renderFollowings = () => {
    return followings.map(user => {
      return <FollowShow {...user} key={user.id} />
    })
  }
  
  return (
    <div>
      <Button onClick={toggleShowFollowers}>Show Followers</Button>
      
      <h3>Following</h3>
      {renderFollowings()}
    </div>
  );
}

export default FollowingContainer;
