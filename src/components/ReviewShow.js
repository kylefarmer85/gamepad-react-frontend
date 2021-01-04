import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import Review from './Review'

const ReviewShow = (props) => {

  const [review, setReview] = useState({})
  const [loading, setLoading] = useState(true)

  let history = useHistory()

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/reviews/${props.match.params.id}`)
    .then(resp => resp.json())
    .then(fetchedReview => {
      setReview(fetchedReview)
      setLoading(false)
    }) 
  }, [props.match.params.id]);


  const handleDelete = () => {
    history.push('/')
  }

  const handleAddComment = (comment) => {
    const updatedReview = {...review,
      comments: [...review.comments, comment]
    }
    setReview(updatedReview)
  } 

  const handleDeleteComment = (commentId) => {
    const updatedComments = review.comments.filter(comment => comment.id !== commentId) 

    const reviewCommentDeleted = {
      ...review,
      comments: updatedComments
    }
    setReview(reviewCommentDeleted)
  }


  return (
    <div>
      {
        loading ?
        null
      :
        <Review {...review} handleDelete={handleDelete} handleAddComment={handleAddComment} handleDeleteComment={handleDeleteComment}/>
      }
    </div>
  );
}

export default ReviewShow;
