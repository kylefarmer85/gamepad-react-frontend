import React, { Component } from 'react';
import Review from '../review/Review';
import { Waypoint } from 'react-waypoint';
import { connect } from 'react-redux';
import { addReviews, emptyReviews } from '../../actions/reviews';
import API from '../../API';

class ReviewsInfiniteScrollContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userId,
      sortByNewest: this.props.sortByNewest,
      pageCounter: 1,
      loading: true,
      endOfReviews: false
    };
  }

  componentDidMount() {
    this.props.emptyReviews();
    this.fetchReviews();
  }

  fetchReviews = () => {
    if (this.state.endOfReviews) {
      return;
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
    };

    fetch(`${API}/api/v1/reviews/infinitescroll`, reqObj)
      .then(resp => resp.json())
      .then(gameReviews => {
        if (gameReviews.length > 0) {
          this.props.addReviews(gameReviews);
          this.setState(prevState => {
            return {
              pageCounter: (prevState.pageCounter += 1),
              loading: false
            };
          });
        } else {
          this.setState({ loading: false, endOfReviews: true });
        }
      });
  };

  renderGameReviews = () => {
    return this.props.reviews.map((review, i) => (
      <React.Fragment key={review.id}>
        <Review {...review} />

        {i === this.props.reviews.length - 2 && (
          <Waypoint onEnter={this.fetchReviews} />
        )}
      </React.Fragment>
    ));
  };

  render() {
    return (
      <div className='my-3 mx-4'>
        {this.state.loading ? null : (
          <div className='slide-from-bottom'>
            {this.renderGameReviews()}

            {this.state.endOfReviews ? <h3>End of Reviews</h3> : null}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  };
};

export default connect(mapStateToProps, { addReviews, emptyReviews })(
  ReviewsInfiniteScrollContainer
);
