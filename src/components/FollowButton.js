import React from 'react';
import { connect } from 'react-redux'
import { followUser, unfollowUser } from '../actions/follows'
import Button from 'react-bootstrap/Button'

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
        <Button onClick={unfollow}>Unfollow</Button>
      :
        <Button onClick={follow}>Follow</Button>
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
