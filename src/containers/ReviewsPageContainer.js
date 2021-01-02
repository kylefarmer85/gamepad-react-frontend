import React from 'react';
import { connect } from 'react-redux'
import ReviewsInfiniteScrollContainer from './ReviewsInfiniteScrollContainer'

const ReviewsPageContainer = (props) => {

  return (
    <div className="mt-4" style={{textAlign: "center"}}>
      {
      props.user ?
        <>
          <h3>Followed User's Reviews</h3>
          <ReviewsInfiniteScrollContainer userId={props.user.id} followingsBool={true} />
        </>
  
      :
        <>
          <h3>All User's Reviews</h3>
          <ReviewsInfiniteScrollContainer userId={false} followingsBool={false}  />
        </>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null) (ReviewsPageContainer);
