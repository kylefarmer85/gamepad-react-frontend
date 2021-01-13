import React from 'react';
import { connect } from 'react-redux';
import Comment from '../components/Comment';
import CommentForm from '../components/CommentForm';
import { Link } from 'react-router-dom';

const CommentsContainer = ({
  comments,
  reviewId,
  reviewUserId,
  reviewUsername,
  gameName,
  gameApiId,
  user,
}) => {
  
  const renderComments = () => {
    return comments.map((comment) => {
      return <Comment {...comment} key={comment.id} />;
    });
  };

  return (
    <div>
      {renderComments()}

      {user ? (
        <CommentForm
          reviewUsername={reviewUsername}
          reviewUserId={reviewUserId}
          reviewId={reviewId}
          gameName={gameName}
          gameApiId={gameApiId}
        />
      ) : (
        <Link to='/login'>
          <button type='button' className='btn-nes primary mt-4'>
            Login to add a comment!
          </button>
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(CommentsContainer);
