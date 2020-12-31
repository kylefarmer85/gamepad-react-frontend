import React from 'react';
import UserThumb from '../components/UserThumb'
import Button from 'react-bootstrap/Button'

const FollowingContainer = ({followings, nextFollowings, followingsCount}) => {
  
  const renderFollowings = () => {
    return followings.map(user => {
      return <UserThumb {...user} key={user.id} />
    })
  }
  
  return (
    <>
      {
      followingsCount === 0 ?
        <h3>Not following anyone.</h3>
      :
      <>  
        {renderFollowings()}
        
        <Button style={{fontSize: "17px"}} variant="outline-light" onClick={nextFollowings}>more→</Button>
      </>
      }
    </>
  );
}

export default FollowingContainer;
