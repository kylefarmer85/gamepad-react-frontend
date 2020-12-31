import React, { Component } from 'react';
import Review from '../components/Review'
import Loading from '../components/Loading'

class ReviewsPageContainer extends Component {
  state = {
    reviews: [],
    pageCounter: 1,
    loading: true,
    endOfPosts: false
  }

  componentDidMount() {
    this.fetchReviews()
  }  

  fetchReviews() {
    fetch(`http://localhost:3000/api/v1/reviews/${this.state.pageCounter}`)
    .then(resp => resp.json())
    .then(gameReviews => {
      console.log(gameReviews)
      
      this.setState(prevState => {
        return {
          reviews: [...prevState.reviews, ...gameReviews],
          pageCounter: prevState.pageCounter += 1,
          loading: false
        }
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
