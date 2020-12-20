import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

const SearchBar = () => {
  let history = useHistory()

  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/games/search/${searchTerm}`)

    setSearchTerm("")
    e.target.reset()
  }


  return (
    <Form style={{marginRight: "11%"}} inline onSubmit={handleSubmit}>

      <Form.Group controlId="formSearchTerm">
        <Form.Control type="text" name="searchTerm" className="mr-sm-2" placeholder="Search All Games" onChange={handleChange} />
      </Form.Group>  

      <Button type="submit" variant="outline-light">Search</Button>
    </Form>
  );
}

export default SearchBar;

