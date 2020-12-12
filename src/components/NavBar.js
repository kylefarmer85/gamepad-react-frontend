import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import { logoutUser } from '../actions/user'

class NavBar extends Component {


  handleLogout = () => {
    localStorage.removeItem("my_app_token")
    this.props.logoutUser()
  }

  render() {
    return (
      <div>
        <Navbar fixed="top" expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="/home">GamePad</Navbar.Brand>
          <Nav className="mr-auto">
          { this.props.user ?
            <Nav.Link href="/login" onClick={this.handleLogout}>Logout</Nav.Link>
          :  
            <Nav.Link href="/login">Login</Nav.Link>
          } 
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { logoutUser })(NavBar);

