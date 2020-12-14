import React, { Component } from 'react';

class ReviewsContainer extends Component {
  state = {
    reviews: [],
    loading: true
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

    fetch("http://localhost:3000/api/v1/games/reviews/all", reqObj)
    .then(resp => resp.json())
    .then(gameReviews => {
      console.log(gameReviews)
      this.setState({
        reviews: gameReviews,
        loading: false
      })
    })
  }  

  render() {
    return (
      <div>

        
      </div>
    );
  }
}

export default ReviewsContainer;
