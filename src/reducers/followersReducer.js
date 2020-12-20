const followersReducer = (state = [], action) => {
  switch(action.type) {
    
    case "LOGIN_USER":
      return action.data.followers

    case "CURRENT_USER":
      return action.data.followers
    
    default:
    return state  
  }
}

export default followersReducer