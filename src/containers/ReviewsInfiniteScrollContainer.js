import React, { Component } from 'react';
import Review from '../components/Review'
import { Waypoint } from 'react-waypoint'
import { connect } from 'react-redux'
import { addReviews, emptyReviews } from '../actions/reviews'

class ReviewsInfiniteScrollContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: this.props.userId,
      sortByNewest: this.props.sortByNewest,
      // reviews: this.props.reviews,
      pageCounter: 1,
      loading: true,
      endOfReviews: false
    }
  }

  componentDidMount() {
    this.props.emptyReviews()
    this.fetchReviews()
  }  

  fetchReviews = () => {
    if (this.state.endOfReviews) {
      return
    }

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        page_counter: this.state.pageCounter,
        sort_by_newest: this.state.sortByNewest,
        user_id: this.state.userId
      })
    }

    fetch(`http://localhost:3000/api/v1/reviews/infinitescroll`, reqObj)
    .then(resp => resp.json())
    .then(gameReviews => {
      console.log(gameReviews)

      if (gameReviews.length > 0) {

        this.props.addReviews(gameReviews)

        this.setState(prevState => {
          return {
            // reviews: [...prevState.reviews, ...gameReviews],
            pageCounter: prevState.pageCounter += 1,
            loading: false
          }
        })
      } else {
        this.setState({loading: false, endOfReviews: true})
      }  
    })
  }


  // handleDelete = (id) => {
  //   const updatedReviews = this.state.reviews.filter(review => {
  //     return review.id !== id
  //   })
  //   this.setState({
  //     reviews: updatedReviews
  //   })
  // }


  // handleAddComment = (comment) => {
  //   const reviewCommentsUpdated = this.state.reviews.map(review => {
  //     if (review.id === comment.review_id) {
  //       return {
  //         ...review,
  //         comments: [...review.comments, comment]
  //       }
  //     } else {
  //       return review
  //     }
  //   })
  //   this.setState({
  //     reviews: reviewCommentsUpdated
  //   })
  // }

  // handleDeleteComment = (commentId, reviewId) => {
  //   const reviewsCommentDeleted = this.state.reviews.map(review => {
  //     if (review.id === reviewId) {
  //       const updatedComments = review.comments.filter(comment => comment.id !== commentId)
  //       return {
  //         ...review,
  //         comments: updatedComments
  //       }
  //     } else {
  //       return review
  //     }
  //   })
  //   this.setState({
  //     reviews: reviewsCommentDeleted
  //   })
  // }

  renderGameReviews = () => {
    return this.props.reviews.map((review, i) => (

        <React.Fragment key={review.id}>

          <Review {...review} />
          {/* handleDelete={this.handleDelete} handleDeleteComment={this.handleDeleteComment}  handleAddComment={this.handleAddComment}/> */}

          {i === this.props.reviews.length - 2 && (
            <Waypoint onEnter={this.fetchReviews} />
          )}

        </React.Fragment>
      )
    )
  }

  render() {
    return (
      <div className="m-4">
        {
        this.state.loading ?
            null
          :

          <div className="slide-from-bottom">
            {this.renderGameReviews()}

            {this.state.endOfReviews ?
              <h3>End of Reviews</h3>

            :
              null
            }

          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

export default connect (mapStateToProps, { addReviews, emptyReviews }) (ReviewsInfiniteScrollContainer);
