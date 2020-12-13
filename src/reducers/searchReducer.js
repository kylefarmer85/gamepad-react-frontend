const searchReducer = (state = [], action) => {
  switch (action.type) {

    case 'RETURN_RESULTS':
      return action.data 
    
    default:
      return state
  }
}

export default searchReducer;
