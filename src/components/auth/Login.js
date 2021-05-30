import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { loginUser } from '../../actions/user';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import GamepadLogo from '../../assets/images/gamepad-logo.png';
import { toast } from 'react-toastify';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (username.length === 0 || password.length === 0) {
      return toast.error('Fields cannot be blank!', { position: 'top-center', autoClose: 3000 });
    }

    dispatch(loginUser(username, password));
    setUsername("");
    setPassword("");
  };

  return (
    <Container fluid className='mt-5 text-center'>
      <h1>Login</h1>

      <Form
        style={{ width: '30%', margin: 'auto' }}
        onSubmit={handleSubmit}
      >
        <Form.Group controlId='username'>
          <Form.Control
            type='text'
            placeholder='Username'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <button type='submit' className='btn-nes primary'>
          Login
        </button>

        <Link to={`/signup`}>
          <button type='button' className='btn-nes secondary'>
            Go to Signup
          </button>
        </Link>
      </Form>

      <img src={GamepadLogo} style={logoStyle} alt='gamepad logo' />

      <h5 className='fade-in'>Old Games, New Friends</h5>
    </Container>
  );
}

const logoStyle = {
  height: '35%',
  width: '35%',
  padding: '3% 0%',
  display: 'block',
  margin: 'auto'
};

export default Login;