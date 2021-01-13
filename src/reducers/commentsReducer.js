const commentsReducer = (state = [], action) => {

  switch(action.type) {

    // case 'LOGIN_USER':
    //   return action.data.comments

    case 'ADD_FETCHED_COMMENTS':
      return action.comments
      
    // case 'ADD_COMMENT':
    //   return [...state, action.comment]


    case 'DELETE_COMMENT':
      const updatedComments = state.filter(comment => comment.id !== action.data.id)

      return updatedComments


    // case 'CURRENT_USER':
    //   return action.data.comments


    case 'LOGOUT_USER':
      return []      

    default: 
    return state
  }
}

export default commentsReducer