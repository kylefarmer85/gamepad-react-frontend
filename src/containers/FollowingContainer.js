import React from 'react';
import UserThumb from '../components/UserThumb'

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
        
        <button type="button" className="btn-nes secondary" onClick={nextFollowings}>more{'>'}</button>
      </>
      }
    </>
  );
}

export default FollowingContainer;
