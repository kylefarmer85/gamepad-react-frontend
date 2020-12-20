const followersReducer = (state = [], action) => {
  switch(action.type) {
    
    case "LOGIN_USER":
      return action.data.followers

    case "CURRENT_USER":
      return action.data.followers
    
    case 'LOGOUT_USER':
      return null  
    
    default:
    return state  
  }
}

export default followersReducer