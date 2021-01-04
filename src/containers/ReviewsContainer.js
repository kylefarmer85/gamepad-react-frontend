import React, { Component } from 'react';
import Loading from '../components/Loading'
import Review from '../components/Review'
import ReviewForm from '../components/ReviewForm'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ReviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      loading: true
    }  
  }  

  componentDidMount(){
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        game_api_id: this.props.gameApiId,
      })
    }
    fetch("http://localhost:3000/api/v1/reviews/gamereviews", reqObj)
    .then(resp => resp.json())
    .then(gameReviews => {
      console.log(gameReviews)
      this.setState({
        reviews: gameReviews,
        loading: false
      })
    })
  }  


  handleDelete = (id) => {
    const updatedReviews = this.state.reviews.filter(review => {
      return review.id !== id
    })
    this.setState({
      reviews: updatedReviews
    })
  }

  handleAddReview = (review) => {
    this.setState(prevState => {
      return {
        reviews: [...prevState.reviews, review]
      }
    })
  }


  handleAddComment = (comment) => {
    const reviewCommentsUpdated = this.state.reviews.map(review => {
      if (review.id === comment.review_id) {
        return {
          ...review,
          comments: [...review.comments, comment]
        }
      } else {
        return review
      }
    })
    this.setState({
      reviews: reviewCommentsUpdated
    })
  }

  handleDeleteComment = (commentId, reviewId) => {
    const reviewsCommentDeleted = this.state.reviews.map(review => {
      if (review.id === reviewId) {
        const updatedComments = review.comments.filter(comment => comment.id !== commentId)
        return {
          ...review,
          comments: updatedComments
        }
      } else {
        return review
      }
    })
    this.setState({
      reviews: reviewsCommentDeleted
    })
  }

  renderGameReviews = () => {
    return this.state.reviews.map(review => {
      return <Review {...review} key={review.id} handleDelete={this.handleDelete} handleDeleteComment={this.handleDeleteComment} handleAddComment={this.handleAddComment} />
    })
  }

  render() {
    return (
      <div>
        <Container>
        {
          this.state.loading ?
          <Loading />
        :
          <div style={{textAlign: "center", marginTop: "3%"}}>

            {
              this.state.reviews.length === 0 ? 
                <h3>Leave the first review!</h3>
              :
                <h3>Reviews</h3>
            }

            { this.renderGameReviews() }

          </div>
        }

        {
          this.props.user ?
        
          <ReviewForm gameApiId={this.props.gameApiId} gameName={this.props.gameName} gameImage={this.props.gameImage} handleAddReview={this.handleAddReview} />

        :
          <Link to="/login">
            <button type="button" className="btn-nes primary mt-3">Login to add a review!</button>
          </Link>
        } 

        </Container>
      </div>
    );
  }
}

const addStateToProps = (state) => {
  return {  
    user: state.user
  }
}

export default connect (addStateToProps, null) (ReviewsContainer);
