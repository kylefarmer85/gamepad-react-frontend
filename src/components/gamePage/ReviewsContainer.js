import React, { Component } from 'react';
import Loading from '../reusable/Loading';
import Review from '../review/Review';
import ReviewForm from './ReviewForm';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFetchedReviews } from '../../actions/reviews';
import API from '../../API';

class ReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        game_api_id: this.props.gameApiId
      })
    };
    fetch(`${API}/api/v1/reviews/gamereviews`, reqObj)
      .then(resp => resp.json())
      .then(gameReviews => {
        this.props.addFetchedReviews(gameReviews);

        this.setState({
          loading: false
        });
      });
  }

  renderGameReviews = () => {
    return this.props.reviews.map(review => {
      return <Review {...review} key={review.id} />;
    });
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Loading />
        ) : (
          <div style={{ textAlign: 'center', marginTop: '3%' }}>
            {this.props.reviews.length === 0 ? (
              <h3>Leave the first review!</h3>
            ) : (
              <h3>Reviews</h3>
            )}

            {this.renderGameReviews()}
          </div>
        )}

        {this.props.user ? (
          <ReviewForm
            gameApiId={this.props.gameApiId}
            gameName={this.props.gameName}
            gameImage={this.props.gameImage}
          />
        ) : (
          <Link to='/login'>
            <button type='button' className='btn-nes primary mt-3'>
              Login to add a review!
            </button>
          </Link>
        )}
      </div>
    );
  }
}

const addStateToProps = state => {
  return {
    user: state.user,
    reviews: state.reviews
  };
};

export default connect(addStateToProps, { addFetchedReviews })(
  ReviewsContainer
);
