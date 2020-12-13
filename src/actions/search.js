export function fetchSearchResults(searchTerm) {
  return(dispatch) => {
    dispatch({type: 'START_ADDING_SEARCH_REQUEST'})

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        search_term: searchTerm
      })
    }

    fetch("http://localhost:3000/api/v1/search", reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        history.push('/home')
        alert(data.error)

      } else {
        dispatch({ type: "RETURN_RESULTS", data})
        console.log(data)
        history.push('/home')
      }
    })
  }
}