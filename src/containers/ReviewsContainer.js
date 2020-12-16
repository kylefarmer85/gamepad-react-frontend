import React, { Component } from 'react';
import Loading from '../components/Loading'
import Review from '../components/Review'
import ReviewForm from '../components/ReviewForm'
import Container from 'react-bootstrap/Container'

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
    fetch("http://localhost:3000/api/v1/reviews/all", reqObj)
    .then(resp => resp.json())
    .then(gameReviews => {
      console.log(gameReviews)
      this.setState({
        reviews: gameReviews,
        loading: false
      })
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

  
  handleAddReview = (review) => {
    this.setState(prevState => {
      return {
        reviews: [...prevState.reviews, review]
      }
    })
  }


  renderGameReviews = () => {
    if (this.state.reviews === null) {
      return "There Are No Reviews Yet"
    }
    return this.state.reviews.map(review => {
      return <Review {...review} key={review.id} handleDelete={this.handleDelete}/>
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
           this.renderGameReviews()
        }
        </Container>
        <ReviewForm gameApiId={this.props.gameApiId} gameName={this.props.gameName} gameImage={this.props.gameImage} handleAddReview={this.handleAddReview} />
      </div>
    );
  }
}

export default ReviewsContainer;
