import React, { Component } from 'react';
import SearchedUsersContainer from './SearchedUsersContainer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import { randomGenre, randomConsole } from "../helpers/randomFuncs"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


class UsersByConsoleAndGenreContainer extends Component {
  state = {
    console: "Super Nintendo",
    genre: "Platformer",
    users: [],
    index: 0,
    loading: true
  }

  componentDidMount(){
    this.fetchUsers()
  }

  fetchUsers = () => {
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        console: this.state.console,
        genre: this.state.genre
      })
    }

    fetch(`http://localhost:3000/api/v1/users/searchbyconsoleandgenre`, reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {

        this.setState({
          users: data,
          loading: false
        })
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.fetchUsers()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  slicedUsers = () => {
    if (this.state.index > this.state.users.length) {
      this.setState({
        index: 0
      })
    }
    return this.state.users.slice(this.state.index, this.state.index +4)
  }

  nextUsers = () => {
    this.setState(prevState => {
      return {
        index: prevState.index + 4
      }
    })
  }


  render() {
    return (
      <Container fluid className="m-2 mt-4">
        <Row>
          <Col xs lg={3}>
            <Form className="mt-4" onSubmit={this.handleSubmit}>
              <Form.Group controlId="formConsole">
                <Form.Label>Browse Users By Console and Genre</Form.Label>
                <Form.Control name="console" value={this.state.console} onChange={this.handleChange}  as="select">
                  <option>Atari 2600</option>
                  <option>Atari 5200</option>
                  <option>Atari 7800</option>
                  <option>Nintendo Entertainment System</option>
                  <option>Sega Master System</option>
                  <option>Sega Genesis</option>
                  <option>Neo Geo</option>
                  <option>Game Boy</option>
                  <option>Game Gear</option>
                  <option>Super Nintendo</option>
                  <option>Sega CD</option>
                  <option>Atari Jaguar</option>
                  <option>Panasonic 3DO</option>
                  <option>Sega 32X</option>
                  <option>Sega Saturn</option>
                  <option>PlayStation</option>
                  <option>Nintendo 64</option>
                  <option>Game Boy Color</option>
                  <option>Dreamcast</option>
                </Form.Control>
              </Form.Group> 
              <Form.Group controlId="formGenre">
                <Form.Control name="genre" value={this.state.genre} onChange={this.handleChange} as="select">
                  <option>Action</option>
                  <option>Adventure</option>
                  <option>Platformer</option>
                  <option>Arcade</option>
                  <option>RPG</option>
                  <option>Fighting</option>
                  <option>Sports</option>
                  <option>Racing</option>
                  <option>Puzzle</option>
                  <option>Strategy</option>
                  <option>Family</option>
                </Form.Control>
              </Form.Group>     
              <Button type="submit">Browse Games</Button>
            </Form> 
          </Col >
          <Col xs lg={9}>
            <Row className="mr-1" style={{justifyContent: "center"}}>
              { 
              this.state.loading ?
                null
              :
              <>
                <SearchedUsersContainer users={this.slicedUsers()} />

                <Button style={{fontSize: "30px", marginLeft: "1%"}} variant="dark" onClick={this.nextUsers}>→</Button>
              </> 
              }     
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UsersByConsoleAndGenreContainer;