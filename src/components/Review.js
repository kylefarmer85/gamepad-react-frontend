import React from 'react';
import Media from 'react-bootstrap/Media'
import { connect } from 'react-redux'
import { deleteReview } from '../actions/reviews'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Review = ({ game_name, user_pic, game_api_id, content, rating, username, id, user_id, user, deleteReview, handleDelete }) => {


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
    outlineColor: "lightGreen",
    textAlign: "left",
  }

  const bodyStyle = {
    backgroundColor: "lightGray",
    padding: "2% 10%",
  }

  return (
   
    <Media style={mediaStyle}>
      <Link to={`/users/${user_id}/profile`}>
          <img 
          width={64}
          height={64}
          className="mt-5 p-2"
          src={user_pic}
          alt="user pic"
          />
        </Link>

      <Media.Body style={bodyStyle}>
        <p>{content}</p>
        <Link to={`/games/${game_api_id}`}>
          <em>{game_name}</em><br></br>
        </Link>
        
        <strong>Rating: {rating}</strong>

        <Link to={`/users/${user_id}/profile`}>
          <p>by: {username}</p>
        </Link>

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
