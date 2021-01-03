import React from 'react';
import Comment from '../components/Comment'
import CommentForm from '../components/CommentForm'

const CommentsContainer = ({comments, reviewId, reviewUserId, reviewUsername, gameName, gameApiId, handleDeleteComment, handleAddComment}) => {

  const renderComments = () => {
    return comments.map(comment => {
      return <Comment {...comment} handleDeleteComment={handleDeleteComment} key={comment.id}/>
    })
  }

  return (
    <div>
      {renderComments()}
      
      <CommentForm reviewUsername={reviewUsername} reviewUserId={reviewUserId} reviewId={reviewId} gameName={gameName} gameApiId={gameApiId} handleAddComment={handleAddComment} />
    </div>
  );
}

export default CommentsContainer;

