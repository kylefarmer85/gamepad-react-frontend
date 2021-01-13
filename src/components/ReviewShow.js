import React, { useEffect, useState } from 'react';
import Review from './Review'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addFetchedReviews } from '../actions/reviews'
import { Redirect } from 'react-router-dom'

const ReviewShow = ({reviews, addFetchedReviews, match}) => {

  const [loading, setLoading] = useState(true)

  let history = useHistory()

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/reviews/${match.params.id}`)
    .then(resp => resp.json())
    .then(fetchedReview => {
      fetchedReview.error ?
        history.push('/')
      :
        addFetchedReviews([fetchedReview])
        setLoading(false)
    }) 
  }, [match.params.id, addFetchedReviews, history]);


  const renderReview = () => {
    return reviews.map(review => {
      return <Review {...review} key={review.id} />
    })
  }

  
  return (
    <div>
      {
      loading ?
        null
      :
        reviews.length ? 
          renderReview()
        :
          <Redirect to="/" />          
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

export default connect (mapStateToProps, { addFetchedReviews }) (ReviewShow);
