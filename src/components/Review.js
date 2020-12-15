import React from 'react';
import Media from 'react-bootstrap/Media'
import { connect } from 'react-redux'
import { deleteReview } from '../actions/reviews'

const Review = ({id, user_id, game_name, content, rating, username, user, handleDelete, deleteReview}) => {

  const handleClick = () => {
    
    deleteReview(id)
    handleDelete(id)
  }

  return (
    <Media>
      <Media.Body>
        <p>{content}</p>
        <p>{game_name}</p>
        <p>Rating: {rating}</p>
        <p>by: {username}</p>
        {
          user ?
            user.id === user_id ?
              <button onClick={handleClick}>Delete Review</button>
            :
              null
          :
            null
        }
      </Media.Body>
    </Media>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { deleteReview }) (Review);

