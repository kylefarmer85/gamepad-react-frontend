import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { connect } from 'react-redux';
import { logoutUser } from '../actions/user'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import NavBarSprites from './NavBarSprites'
import { toast } from 'react-toastify';


const NavBar = (props) => {

  const handleLogout = () => {
    toast.info("You have successfully logged out.", {position: "top-center", autoClose: 3000})

    localStorage.removeItem("my_app_token")
    props.logoutUser()
  }


  return (
    <Navbar expand="md" bg="dark" variant="dark">
      
      <Navbar.Brand style={{outline: "solid white", padding: "5px"}} as={Link} to={`/`}>GamePad</Navbar.Brand>
       
      <Nav className="mr-auto"> 
      
        { props.user ?
          <>
            <Nav.Link onClick={handleLogout} as={Link} to={"/login"}>Logout</Nav.Link>
          
            <Nav.Link as={Link} to={`/users/${props.user.id}/profile`}>Profile</Nav.Link>
          </>
        :  
          <Nav.Link as={Link} to={`/login`}>Login</Nav.Link>
        } 

        <Nav.Link as={Link} to={`/reviews`}>Reviews</Nav.Link>
        
      </Nav>

      <SearchBar />  
      <NavBarSprites />
    </Navbar>
  );
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { logoutUser }) (NavBar);

