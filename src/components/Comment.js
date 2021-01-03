import React from 'react';
import Media from 'react-bootstrap/Media'
import { connect } from 'react-redux'
import { deleteComment } from '../actions/comments'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"

const Comment = ({id, content, user_id, review_id, username, user_pic, review_username, review_user_id, game_name, game_api_id, created_at, deleteComment, handleDeleteComment, user }) => {

  let history = useHistory()  

  const handleClick = () => {
    deleteComment(id)
    handleDeleteComment(id, review_id)
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
        

        <Link to={`/users/${user_id}/profile`}>
          <p>by: {username}</p>
        </Link>
          
        {
          user ?
            user.id === user_id ?
              <Button onClick={handleClick}>Delete Comment</Button>
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

