const reviewsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FETCHED_REVIEWS':
      return action.reviews;

    case 'ADD_REVIEW':
      return [...state, action.data];

    case 'ADD_REVIEWS':
      return [...state, ...action.reviews];

    case 'DELETE_REVIEW':
      const updatedReviews = state.filter(
        (review) => review.id !== action.data.id
      );

      return updatedReviews;

    case 'ADD_COMMENT':
      const reviewCommentsUpdated = state.map((review) => {
        if (review.id === action.comment.review_id) {
          return {
            ...review,
            comments: [...review.comments, action.comment],
          };
        } else {
          return review;
        }
      });

      return reviewCommentsUpdated;

    case 'DELETE_COMMENT':
      const reviewCommentDeleted = state.map((review) => {
        if (review.id === action.data.review_id) {
          const updatedComments = review.comments.filter(
            (comment) => comment.id !== action.data.id
          );
          return {
            ...review,
            comments: updatedComments,
          };
        } else {
          return review;
        }
      });

      return reviewCommentDeleted;

    case 'EMPTY_REVIEWS':
      return [];

    case 'LOGOUT_USER':
      return [];

    default:
      return state;
  }
};

export default reviewsReducer;
