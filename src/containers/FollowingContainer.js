import React from 'react';
import UserThumb from '../components/UserThumb'
import Button from 'react-bootstrap/Button'

const FollowingContainer = ({followings, nextFollowings}) => {
  
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
      <>
        {renderFollowings()}
        <Button style={{fontSize: "30px", marginLeft: "1%"}} variant="dark" onClick={nextFollowings}>→</Button>
      </>
      }
    </div>
  );
}

export default FollowingContainer;
