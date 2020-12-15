export function deleteReview(id) {
  return(dispatch) => {

    fetch(`http://localhost:3000/api/v1/reviews/${id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        dispatch({ type: "DELETE_REVIEW", data})
      }
    })
  }
}

export function addReview(id) {
  return(dispatch) => {

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        user_id: this.props.user.id,
      })
    }

    fetch(`http://localhost:3000/api/v1/reviews`, reqObj)
    .then(resp => resp.json())
    .then(console.log)
    //   if (data.error) {
    //     alert(data.error)
    //   } else {
    //     dispatch({ type: "ADD_REVIEW", data})
    //   }
    // })
  }
}