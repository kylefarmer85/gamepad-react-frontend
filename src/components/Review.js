import React from 'react';
import Media from 'react-bootstrap/Media'
import { connect } from 'react-redux'
import { deleteReview } from '../actions/reviews'
import Button from 'react-bootstrap/Button'

const Review = ({ game_name, user_pic, content, rating, username, id, user_id, user, deleteReview, handleDelete }) => {


  const handleClick = () => {
    deleteReview(id)

    if (handleDelete) {
      handleDelete(id)
    }
    alert("Review Deleted!")
  }

  const mediaStyle = {
    margin: "2%",
    outline: "solid",
    outlineColor: "blue"
  }

  const bodyStyle = {
    backgroundColor: "lightGray",
    padding: "2% 10%",
  }

  return (
    <Media style={mediaStyle}>
        <img 
        width={64}
        height={64}
        className="mt-5 p-2"
        src={user_pic}
        alt="user pic"
        />
      <Media.Body style={bodyStyle}>
        <p>{content}</p>
        <em>{game_name}</em><br></br>
        <strong>Rating: {rating}</strong>
        <p>by: {username}</p>
        {
          user ?
            user.id === user_id ?
              <Button onClick={handleClick}>Delete Review</Button>
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
