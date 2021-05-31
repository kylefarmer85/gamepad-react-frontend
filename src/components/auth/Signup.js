import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signupUser } from '../../actions/user';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(signupUser({...data, photo: data.photo[0]}));
  };

  return (
    <Container fluid className='mt-5 mb-4 text-center'>
      <h1>Signup</h1>

      <Form
        style={{ width: '35%', margin: 'auto' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Group controlId='formUsername'>
          <Form.Control
            type='text'
            placeholder='Username'
            name='username'
            {...register('username', {required: "Required", minLength: {value: 4, message: "Must be at least 4 characters"}})}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </Form.Group>
        
        <Form.Group controlId='formPassword'>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            {...register('password', {required: "Required", minLength: {value: 4, message: "Must be at least 4 characters"}})}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </Form.Group>

        <Form.Group controlId='formPasswordConfirmation'>
          <Form.Control
            type='password'
            placeholder='Confirm Password'
            name='password_confirmation'
            {...register('password_confirmation', {required: "Required"})}
          />
          {errors.password_confirmation && <p>{errors.password_confirmation.message}</p>}
        </Form.Group>

        <Form.Group controlId='formEmail'>
          <Form.Control
            type='email'
            placeholder='Email Address'
            name='email'
            {...register('email', { required: "Required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </Form.Group>

        <Form.Group controlId='formPhoto'>
          <Form.Label>Upload a Profile Image</Form.Label>
          <Form.Control
            type='file'
            placeholder='Upload a Profile Photo'
            name='photo'
            {...register('photo')}
          />
        </Form.Group>

        <Form.Group controlId='formFavConsole'>
          <Form.Label>Favorite Console</Form.Label>
          <Form.Control
            as='select'
            name='fav_console'
            {...register('fav_console')}
          >
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

        <Form.Group controlId='formFavGenre'>
          <Form.Label>Favorite Genre</Form.Label>
          <Form.Control as='select' name='fav_genre' {...register('fav_genre')}>
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

        <Form.Group controlId='formFavGame'>
          <Form.Control
            type='text'
            placeholder='Favorite Game'
            name='fav_game'
            {...register('fav_game')}
          />
        </Form.Group>

        <button type='submit' className='btn-nes primary'>
          Signup
        </button>

        <Link to={`/login`}>
          <button type='button' className='btn-nes secondary'>
            Back to Login
          </button>
        </Link>
      </Form>
    </Container>
  );
};

export default Signup;
