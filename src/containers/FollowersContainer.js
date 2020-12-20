import React from 'react';
import FollowShow from '../components/FollowShow'
import Button from 'react-bootstrap/Button'

const FollowersContainer = ({followers, toggleShowFollowers}) => {
  
  const renderFollowers = () => {
      return followers.map(user => {
        return <FollowShow {...user} key={user.id} />
      })
  }
  
  return (
    <div>
      <Button onClick={toggleShowFollowers}>Show Following</Button>

      <h3>Followers</h3>
      {renderFollowers()}
    </div>
  );
}

export default FollowersContainer;

