import React, { Component } from 'react';
import Review from '../components/Review'
import Loading from '../components/Loading'
import { Waypoint } from 'react-waypoint'

class ReviewsPageContainer extends Component {
  constructor() {
    super()
    this.state = {
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

    fetch(`http://localhost:3000/api/v1/reviews/${this.state.pageCounter}`)
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

  renderGameReviews = () => {
    return this.state.reviews.map((review, i) => (
        <React.Fragment key={review.id}>
          <Review {...review} handleDelete={this.handleDelete}/>
          {i === this.state.reviews.length - 2 && (
            <Waypoint onEnter={this.fetchReviews} />
          )}
        </React.Fragment>
      ))}



  render() {
    return (
      <div className="m-4">
        {
        this.state.loading ?
            <Loading />
          :
          <div style={{textAlign: "center"}}>
            <h3>All User Reviews</h3>
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

export default ReviewsPageContainer;
