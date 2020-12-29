import React from 'react';
import UserThumb from '../components/UserThumb'
import Button from 'react-bootstrap/Button'

const FollowersContainer = ({followers, nextFollowers, followersCount}) => {
  
  const renderFollowers = () => {
    return followers.map(user => {
      return <UserThumb {...user} key={user.id} />
    })
  }
  
  return (
    <>
      {
      followersCount === 0 ?
        <h3>No followers.</h3>
      :
      <>
        {renderFollowers()}
        <Button style={{fontSize: "17px"}} variant="none" onClick={nextFollowers}>more→</Button>
      </>
      }
    </>
  );
}

export default FollowersContainer;

