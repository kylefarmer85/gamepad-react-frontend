import React, { Component } from 'react';
import Review from '../components/Review'
import Loading from '../components/Loading'
import { Waypoint } from 'react-waypoint'

class ReviewsInfiniteScrollContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: this.props.userId,
      followingsBool: this.props.followingsBool,
      reviews: [],
      pageCounter: 1,
      loading: true,
      endOfReviews: false
    }
  }

  componentDidMount() {
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
        followings_bool: this.state.followingsBool,
        user_id: this.state.userId
      })
    }

    fetch(`http://localhost:3000/api/v1/reviews/infinitescroll`, reqObj)
    .then(resp => resp.json())
    .then(gameReviews => {
      console.log(gameReviews)

      if (gameReviews.length > 0) {
        this.setState(prevState => {
          return {
            reviews: [...prevState.reviews, ...gameReviews],
            pageCounter: prevState.pageCounter += 1,
            loading: false
          }
        })
      } else {
        this.setState({loading: false, endOfReviews: true})
      }  
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

  renderGameReviews = () => {
    return this.state.reviews.map((review, i) => (
        <React.Fragment key={review.id}>

          <Review {...review} handleDelete={this.handleDelete} handleAddComment={this.handleAddComment}/>

          {i === this.state.reviews.length - 2 && (
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
            <Loading />
          :
          <div>
    
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

export default ReviewsInfiniteScrollContainer;