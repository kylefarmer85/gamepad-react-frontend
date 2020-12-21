import React, { useEffect, useState } from 'react';
import Loading from './Loading'
import { toast } from 'react-toastify'
import history from '../history'

const UserSearchResult = (props) => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        search_term: props.match.params.searchTerm
      })
    }

    fetch("http://localhost:3000/api/v1/users/search", reqObj)
    .then(resp => resp.json())
    .then(id => {
      if (id.error) {
        toast.error("No user found matching that name.", {position: "top-center", autoclose: 3000})
        history.push('/home')

      } else {
        setLoading(false)
        history.push(`/users/${id}/profile`)
      }
    }) 
  }, [props.match.params.searchTerm]);


  return (
    <div>
      {
        loading ?
          <Loading />
        :
          null
      }
    </div>
  );
}

export default UserSearchResult;
