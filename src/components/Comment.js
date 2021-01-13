import React from 'react';
import Media from 'react-bootstrap/Media'
import { connect } from 'react-redux'
import { deleteComment } from '../actions/comments'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"


const Comment = ({id, content, user_id, review_id, username, user_pic, review_username, review_user_id, game_name, game_api_id, created_at, deleteComment, user }) => {

  let history = useHistory()  

  const handleClick = () => {
    deleteComment(id)
  }

  const goToUser = () => {
    history.push(`/users/${user_id}/profile`)
  }

  const mediaStyle = {
    margin: "2% 5%",
    padding: "10px",
    outline: "solid white 4px",
    textAlign: "left"
  }

  const bodyStyle = {
    padding: "1% 2%",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    wordBreak: "break-word"

  }

  const date = new Date(created_at)

  return (
    <Media style={mediaStyle}>
     
      <img onClick={goToUser} className="user-thumb" src={user_pic} alt="user pic"/>
        
      <Media.Body style={bodyStyle}>
      <strong><p className="comment">{content}</p></strong>
        <br/>
        <em>response to <Link to={`/users/${review_user_id}/profile`}> {review_username}'s </Link>
        <Link to={`/reviews/${review_id}`}> review </Link> of <Link to={`/games/${game_api_id}`}> {game_name}</Link></em> by: 
        <Link to={`/users/${user_id}/profile`}> {username}</Link>
         
        <br/>
        {
          user ?
            user.id === user_id ?
              <button type="button" className="btn-nes delete" onClick={handleClick}>Delete Comment</button>   
            :
              null
          :
            null
        }
        
        <br/>
        <Link to={`/reviews/${review_id}`}>
        {
          created_at ?
            <em>Posted on {date.toLocaleString()}</em>
          : 
            <em>Posted just now</em> 
        }
        </Link>

      </Media.Body>
    </Media>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps, { deleteComment }) (Comment);

