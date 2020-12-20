const gamesReducer = (state = [], action) => {
  switch(action.type) {

    case 'LOGIN_USER':
      return action.data.games

    case 'CURRENT_USER':
      return action.data.games

    case 'ADD_GAME':
      return [...state, action.game]  

    case 'REMOVE_GAME': 
      const updatedGames = state.filter(game => {
      return game.id !== action.id
      })
      return updatedGames 

    case 'LOGOUT_USER':
      return null    
      
    default: 
    return state
  }
}

export default gamesReducer