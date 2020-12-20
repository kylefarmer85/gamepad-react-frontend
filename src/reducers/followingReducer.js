const followingReducer = (state = [], action) => {
  switch(action.type) {
    
    case "LOGIN_USER":
      return action.data.following
    
    case "CURRENT_USER":
      return action.data.following
      
    case "ADD_FOLLOWING":
      return [...state, action.followedUser]   

    case "REMOVE_FOLLOWING":
      const updatedFollowing = state.filter(f => {
        return f.id !== action.unfollowedUser.id
      }) 
      return updatedFollowing
    
    default:
    return state  
  }
}

export default followingReducer