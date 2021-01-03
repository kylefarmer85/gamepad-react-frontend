import React from 'react';
import Media from 'react-bootstrap/Media'
import { connect } from 'react-redux'
import { deleteReview } from '../actions/reviews'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"
import Accordion from 'react-bootstrap/Accordion'
import CommentsContainer from '../containers/CommentsContainer'

const Review = ({ game_name, user_pic, game_api_id, content, rating, username, id, created_at, user_id, user, comments, deleteReview, handleDelete, handleAddComment, handleDeleteComment }) => {

  let history = useHistory()  

  const handleClick = () => {
    deleteReview(id)

    if (handleDelete) {
      handleDelete(id)
    }

  }

  const goToUser = () => {
    history.push(`/users/${user_id}/profile`)
  }

  const mediaStyle = {
    margin: "3% 5%",
    padding: "10px",
    outline: "solid white 4px",
    textAlign: "left"
  }

  const bodyStyle = {
    padding: "3%",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    wordBreak: "break_word"

  }

  const date = new Date(created_at)

  return (
    <Media style={mediaStyle}>
     
      <img onClick={goToUser}
      style={{margin: "auto", width: "128px", height: "128px"}}
      className="img-thumbnail"
      src={user_pic}
      alt="user pic"
      />
        
      <Media.Body style={bodyStyle}>
        <p>{content}</p>
        <Link to={`/games/${game_api_id}`}>
          <h5>{game_name}</h5>
        </Link>
        
        <p>Rating: {rating}</p>

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
        <br/>

        {
          created_at ?
          <>
          <em>Posted on {date.toLocaleString()}</em>
          </>  
        : 
          <em>Posted just now</em>
        }
        
        <Accordion>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <h5>Comments ({comments.length})</h5>
          </Accordion.Toggle>
      
          <Accordion.Collapse eventKey="0">
            
            <CommentsContainer comments={comments} reviewId={id} reviewUsername={username} reviewUserId={user_id} gameName={game_name} gameApiId={game_api_id} handleAddComment={handleAddComment} handleDeleteComment={handleDeleteComment} />

          </Accordion.Collapse>
        </Accordion>

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
