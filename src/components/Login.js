import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/user';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import GamepadLogo from '../assets/images/gamepad-logo.png';
import { toast } from 'react-toastify';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.username.length === 0 || this.state.password.length === 0) {
      return toast.error('Fields cannot be blank!', { position: 'top-center' })
    }

    this.props.fetchUser(this.state);

    this.setState({
      username: '',
      password: '',
    });
  };

  render() {
    return (
      <Container fluid className='mt-5 text-center'>
        <h1>Login</h1>

        <Form
          style={{ width: '30%', margin: 'auto' }}
          onSubmit={this.handleSubmit}
        >
          <Form.Group controlId='formUsername'>
            <Form.Control
              type='text'
              placeholder='Username'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='formPassword'>
            <Form.Control
              type='password'
              placeholder='Password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
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
}

const logoStyle = {
  height: '35%',
  width: '35%',
  padding: '3% 0%',
  display: 'block',
  margin: 'auto',
};

export default connect(null, { fetchUser })(Login);
