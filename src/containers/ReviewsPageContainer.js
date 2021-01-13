import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ReviewsInfiniteScrollContainer from './ReviewsInfiniteScrollContainer';
import { v4 as uuidv4 } from 'uuid';

const ReviewsPageContainer = (props) => {
  
  const [showFollowingsReviews, setShowFollowingsReviews] = useState(false);

  const [sortByNewest, setSortByNewest] = useState(true);

  const toggleShowFollowingsReviews = () => {
    setShowFollowingsReviews((prevState) => !prevState);
  };

  const toggleSortByNewest = () => {
    setSortByNewest((prevState) => !prevState);
  };

  return (
    <div className='mt-4' style={{ textAlign: 'center' }}>
      {props.loading ? null : (
        <div>
          <h3>Reviews</h3>
          <ToggleButton
            type='radio'
            variant='none'
            style={{ color: 'white' }}
            name='radio'
            value={sortByNewest}
            checked={sortByNewest}
            onChange={toggleSortByNewest}
          >
            {' '}
            Newest
          </ToggleButton>

          <ToggleButton
            type='radio'
            variant='none'
            style={{ color: 'white' }}
            name='radio'
            value={!sortByNewest}
            checked={!sortByNewest}
            onChange={toggleSortByNewest}
          >
            {' '}
            Oldest
          </ToggleButton>
          <br />
          {props.user ? (
            <>
              <ToggleButton
                type='checkbox'
                variant='none'
                style={{ color: 'white' }}
                name='checkbox'
                value={!showFollowingsReviews}
                checked={!showFollowingsReviews}
                onChange={toggleShowFollowingsReviews}
              >
                {' '}
                All Reviews
              </ToggleButton>

              <ToggleButton
                type='checkbox'
                variant='none'
                style={{ color: 'white' }}
                name='checkbox'
                value={showFollowingsReviews}
                checked={showFollowingsReviews}
                onChange={toggleShowFollowingsReviews}
              >
                {' '}
                Followed User Reviews
              </ToggleButton>

              {showFollowingsReviews ? (
                <ReviewsInfiniteScrollContainer
                  key={uuidv4()}
                  userId={props.user.id}
                  sortByNewest={sortByNewest}
                />
              ) : (
                <ReviewsInfiniteScrollContainer
                  key={uuidv4()}
                  userId={false}
                  sortByNewest={sortByNewest}
                />
              )}
            </>
          ) : (
            <ReviewsInfiniteScrollContainer
              key={uuidv4()}
              userId={false}
              sortByNewest={sortByNewest}
            />
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, null)(ReviewsPageContainer);
