import React from 'react';
import Media from 'react-bootstrap/Media'
import { connect } from 'react-redux'
import { deleteReview } from '../actions/reviews'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"
import Accordion from 'react-bootstrap/Accordion'
import CommentsContainer from '../containers/CommentsContainer'

const Review = ({ game_name, user_pic, game_api_id, content, rating, username, id, created_at, user_id, user, comments, deleteReview }) => {

  let history = useHistory()  

  const handleClick = () => {
    deleteReview(id)
  }

  const goToUser = () => {
    history.push(`/users/${user_id}/profile`)
  }

  const mediaStyle = {
    margin: "20px 6%",
    padding: "10px",
    outline: "solid white 4px",
    textAlign: "left"
  }

  const bodyStyle = {
    padding: "1% 2%",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    wordBreak: "break-word",
  }

  const date = new Date(created_at)

  return (
    <Media style={mediaStyle}>
     
      <img onClick={goToUser} src={user_pic} className="user-thumb mt-3" alt="user pic"/>
        
      <Media.Body style={bodyStyle}>

        <strong><p className="review">{content}</p></strong>
        <br/>
        <p>
        <Link to={`/games/${game_api_id}`}>
          {game_name}<br/>
          Rating: {rating}
        </Link></p>

        <Link to={`/users/${user_id}/profile`}>
          <p>by: {username}</p>
        </Link>
          
        {
          user ?
            user.id === user_id ?
            
              <button type="button" className="btn-nes delete" onClick={handleClick}>Delete Review</button>
            :
              null
          :
            null
        }
        
        <br/>

        <Link to={`/reviews/${id}`}>
        {
          created_at ?
            <em>Posted on {date.toLocaleString()}</em>
        : 
            <em>Posted just now</em>
        }
        </Link>

        <Accordion>
          <Accordion.Toggle as={Button} variant="none" eventKey="0">
            <h4>Comments ({comments.length})</h4>
          </Accordion.Toggle>
      
          <Accordion.Collapse eventKey="0">
            
            <CommentsContainer comments={comments} reviewId={id} reviewUsername={username} reviewUserId={user_id} gameName={game_name} gameApiId={game_api_id} />

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
