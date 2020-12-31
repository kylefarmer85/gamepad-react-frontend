import React, { Component } from 'react';
import Review from '../components/Review'
import Loading from '../components/Loading'

class ReviewsPageContainer extends Component {
  state = {
    reviews: [],
    loading: true
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/reviews")
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

  renderGameReviews = () => {
    return this.state.reviews.map(review => {
      return <Review {...review} key={review.id} handleDelete={this.handleDelete}/>
    })
  }


  render() {
    return (
      <div>
        {
        this.state.loading ?
            <Loading />
          :
          <div>
            {this.renderGameReviews()}
          </div>  
        }
      </div>
    );
  }
}

export default ReviewsPageContainer;
