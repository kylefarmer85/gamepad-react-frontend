import React from 'react';
import UserThumb from '../components/UserThumb'

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

        <button type="button" className="btn-nes secondary" onClick={nextFollowers}>more{'>'}</button>
      </>
      }
    </>
  );
}

export default FollowersContainer;

