const followersReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.data.user.followers;

    case 'CURRENT_USER':
      return action.data.user.followers;

    case 'LOGOUT_USER':
      return [];

    default:
      return state;
  }
};

export default followersReducer;
