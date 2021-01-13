const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.data.user;

    case 'CURRENT_USER':
      return action.data.user;

    case 'LOGOUT_USER':
      return null;

    case 'UPDATE_USER':
      return action.data;

    default:
      return state;
  }
};

export default userReducer;
