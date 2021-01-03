import React from 'react';
import { connect } from 'react-redux';
import Comment from '../components/Comment'
import CommentForm from '../components/CommentForm'
import { Link } from 'react-router-dom'

const CommentsContainer = ({comments, reviewId, reviewUserId, reviewUsername, gameName, gameApiId, handleDeleteComment, handleAddComment, user}) => {

  const renderComments = () => {
    return comments.map(comment => {
      return <Comment {...comment} handleDeleteComment={handleDeleteComment} key={comment.id}/>
    })
  }

  return (
    <div>
      {renderComments()}

      {
      user ?
        <CommentForm reviewUsername={reviewUsername} reviewUserId={reviewUserId} reviewId={reviewId} gameName={gameName} gameApiId={gameApiId} handleAddComment={handleAddComment} />
      :
        <Link to="/login">
          <button type="button" className="btn-nes mt-4">Login to add a comment!</button>
        </Link>
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {  
  user: state.user
  }
}

export default connect (mapStateToProps, null) (CommentsContainer);

