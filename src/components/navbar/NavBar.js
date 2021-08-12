import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/user';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import NavBarSprites from './NavBarSprites';
import { toast } from 'react-toastify';

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleLogout = () => {
    window.Intercom('shutdown');
    window.Intercom("boot", {
      app_id: "yqdan9hq"
    });
    toast.info('You have successfully logged out.', {
      position: 'top-center',
      autoClose: 3000
    });

    localStorage.removeItem('my_app_token');
    dispatch(logoutUser());
  };

  return (
    <Navbar expand='md' bg='dark' variant='dark'>
      <Navbar.Brand
        style={{ outline: 'solid white', padding: '5px' }}
        as={Link}
        to={`/`}
      >
        GamePad
      </Navbar.Brand>

      <Nav className='mr-auto'>
        {user ? (
          <>
            <Nav.Link onClick={handleLogout} as={Link} to={'/login'}>
              Logout
            </Nav.Link>

            <Nav.Link as={Link} to={`/users/${user.id}/profile`}>
              Profile
            </Nav.Link>
          </>
        ) : (
          <Nav.Link as={Link} to={`/login`}>
            Login
          </Nav.Link>
        )}

        <Nav.Link as={Link} to={`/reviews`}>
          Reviews
        </Nav.Link>
      </Nav>

      <SearchBar />
      <NavBarSprites />
    </Navbar>
  );
};

export default NavBar;