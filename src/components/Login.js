import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/user'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class Login extends Component {
    state = {
      username: '',
      password: ''
    }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.fetchUser(this.state)

    // this.props.history.push('/notes')
    this.setState({
      username: '',
      password: ''
    })
  }


  render() {
    return (

      <Container style={{width: "50%"}}>  

        <h1 style={{textAlign: "center"}}>Login</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
          </Form.Group>
          <Button variant="outline-primary" type="submit">Login</Button>
          <Link to={`/signup`}> or Signup</Link>
        </Form>

      </Container> 
    

    );
  }
}


export default connect(null, {fetchUser}) (Login);