import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
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
    <Form inline onSubmit={handleSubmit}>
      <FormControl type="text" name="searchTerm" className="mr-sm-2" onChange={handleChange} />
      <Button type="submit" variant="outline-light">Search</Button>
    </Form>
  );
}

export default SearchBar;

