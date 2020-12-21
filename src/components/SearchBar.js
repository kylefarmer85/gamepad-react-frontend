import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import history from '../history'

class SearchBar extends Component {
  state = {
    searchTerm: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/games/search/${this.state.searchTerm}`)

    this.setState({
      searchTerm: ""
    })
    console.log(this.state.searchTerm)
  } 

  handleUserSearch = () => {
    history.push(`/users/search/${this.state.searchTerm}`)
    this.setState({
      searchTerm: ""
    })
  }
    
  render() {
    return (
      <div>
        <Form inline onSubmit={this.handleSubmit}>
          <Form.Group controlId="formSearchTerm">

          <Button type="submit" variant="outline-light" className="mr-sm-2" size="sm">Search Games</Button>

          <Form.Control type="text" name="searchTerm" value={this.state.searchTerm} className="mr-sm-2" placeholder="Search Games or Users" onChange={this.handleChange} />
   
          <Button onClick={this.handleUserSearch} variant="outline-light" className="mr-sm-5" size="sm">Search Users</Button>

          </Form.Group>  
        </Form>
      </div>
    );
  }
}

export default SearchBar;


// import { useHistory } from 'react-router-dom'
// import React, { useState } from 'react';

// const SearchBar = () => {
//   let history = useHistory()

//   const [searchTerm, setSearchTerm] = useState("")

//   const emptySearch = ""

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     history.push(`/games/search/${searchTerm}`)

//     setSearchTerm("")
//     e.target.reset()
//   } 

//   const handleUserSearch = (e) => {
//     setSearchTerm(emptySearch)
//   }


//   return (
//     <Form style={{marginRight: "8%"}} inline onSubmit={handleSubmit}>

//       <Button  type="submit" variant="outline-light" className="mr-sm-2" size="sm">Search Games</Button>

//       <Form.Group controlId="formSearchTerm">
//         <Form.Control type="text" name="searchTerm" value={searchTerm} className="mr-sm-2" placeholder="Search Games or Users" onChange={handleChange} />
//       </Form.Group>  

//       <Button onClick={handleUserSearch}variant="outline-light" size="sm">Search Users</Button>
      
//     </Form>
//   );
// }

// export default SearchBar;