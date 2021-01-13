const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'START_ADDING_USER_REQUEST':
      return true;

    case 'RETURN_RESULTS':
      return false;

    case 'LOGIN_USER':
      return false;

    case 'CURRENT_USER':
      return false;

    case 'ADD_GAME':
      return false;

    case 'LOGOUT_USER':
      return false;

    default:
      return state;
  }
};

export default loadingReducer;
