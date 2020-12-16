const searchReducer = (state = [], action) => {
  switch (action.type) {

    case 'RETURN_RESULTS':
      return action.data.results   
    
    default:
      return state

      
    case 'LOGOUT_USER':
      return null  
  }
}

export default searchReducer;
