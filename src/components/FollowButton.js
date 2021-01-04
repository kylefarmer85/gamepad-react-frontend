import React from 'react';
import { connect } from 'react-redux'
import { followUser, unfollowUser } from '../actions/follows'

const FollowButton = ({followedUserId, followerId, addFollowerToProfile, removeFollowerFromProfile, followUser, unfollowUser, following}) => {

  const follow = () => {
    followUser(followedUserId, followerId)
    addFollowerToProfile()
  }

  const unfollow = () => {
    unfollowUser(followedUserId, followerId)
    removeFollowerFromProfile()
  }

  const alreadyFollowed = following.find(f => {
  return f.id === followedUserId
  })

  return (
    <div>
      {
        alreadyFollowed ?

        <button type="button" className="btn-nes secondary" onClick={unfollow}>Unfollow</button>
      :
        <button type="button" className="btn-nes primary" onClick={follow}>Follow</button>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    following: state.following
  }
}

export default connect(mapStateToProps, {followUser, unfollowUser}) (FollowButton);
