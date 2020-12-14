import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { connect } from 'react-redux';
import { logoutUser } from '../actions/user'
import SearchBar from './SearchBar'

const NavBar = (props) => {

  const handleLogout = () => {
    localStorage.removeItem("my_app_token")
    props.logoutUser()
  }

  return (
   
      <Navbar expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/home">GamePad</Navbar.Brand>
        <Nav className="mr-auto">
        { props.user ?
        <>
          <Nav.Link href="/login" onClick={handleLogout}>Logout</Nav.Link>
          <Nav.Link>Profile</Nav.Link>
          </>
        :  
          <Nav.Link href="/login">Login</Nav.Link>
        } 
        </Nav>
        <SearchBar />
      </Navbar>
   
  );
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { logoutUser })(NavBar);

