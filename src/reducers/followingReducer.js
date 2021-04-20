const followingReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.data.user.followings;

    case 'CURRENT_USER':
      return action.data.user.followings;

    case 'ADD_FOLLOWING':
      return [...state, action.followedUser];

    case 'REMOVE_FOLLOWING':
      const updatedFollowing = state.filter((f) => {
        return f.id !== action.unfollowedUser.id;
      });
      return updatedFollowing;

    case 'LOGOUT_USER':
      return [];

    default:
      return state;
  }
};

export default followingReducer;
