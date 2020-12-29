import React from 'react';
import UserThumb from '../components/UserThumb'
import Button from 'react-bootstrap/Button'

const FollowersContainer = ({followers, nextFollowers}) => {
  
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
      <>
        {renderFollowers()}
        <Button style={{fontSize: "30px", marginLeft: "1%"}} variant="dark" onClick={nextFollowers}>→</Button>
      </>
      }
    </div>
  );
}

export default FollowersContainer;

