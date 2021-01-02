import { toast } from 'react-toastify'

export function deleteComment(id) {
  return(dispatch) => {

    fetch(`http://localhost:3000/api/v1/comments/${id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        dispatch({ type: "DELETE_COMMENT", data})
        toast.info("Comment Deleted!", {position: "bottom-center", autoClose:3000})
      }
    })
  }
}

export const addComment = comment => {
  return {
    type: 'ADD_COMMENT',
    comment
  }
}
