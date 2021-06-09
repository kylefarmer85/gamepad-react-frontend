// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import { logoutUser, updateUser } from '../../actions/user';
// import API from '../../API';

// class EditUserInfo extends Component {
//   constructor(props) {
//     super(props);
  //   this.state = {
  //     id: this.props.user.id,
  //     username: this.props.user.username,
  //     password: '',
  //     password_confirmation: '',
  //     email: this.props.user.email,
  //     fav_console: this.props.user.fav_console,
  //     fav_genre: this.props.user.fav_genre,
  //     fav_game: this.props.user.fav_game,
  //     photo: ''
  //   };
  // }

//   handleChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   handlePhoto = e => {
//     this.setState({
//       photo: e.target.files[0]
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.updateUser(this.state);
//   };

//   handleDelete = e => {
//     if (
//       !window.confirm(
//         `Are you sure you want to delete ${this.props.user.username}?`
//       )
//     ) {
//       return;
//     }

//     fetch(`${API}/api/v1/users/${this.props.user.id}`, {
//       method: 'DELETE'
//     })
//       .then(resp => resp.json())
//       .then(deletedUser => {
//         alert(`${deletedUser.username} was deleted`);
//         this.props.history.push('/login');

//         localStorage.removeItem('my_app_token');
//         this.props.logoutUser();
//       });
//   };

//   render() {
//     return (
//       <Container fluid className='mt-5 mb-4 text-center'>
//         <h1>Edit Profile</h1>
//         <Form
//           style={{ width: '35%', margin: 'auto' }}
//           onSubmit={this.handleSubmit}
//         >
//           <Form.Group controlId='formUsername'>
//             <Form.Control
//               type='text'
//               name='username'
//               value={this.state.username}
//               onChange={this.handleChange}
//             />
//           </Form.Group>

//           <Form.Group controlId='formPassword'>
//             <Form.Control
//               type='password'
//               placeholder='Password'
//               name='password'
//               value={this.state.password}
//               onChange={this.handleChange}
//             />
//           </Form.Group>

//           <Form.Group controlId='formPasswordConfirmation'>
//             <Form.Control
//               type='password'
//               placeholder='Confirm Password'
//               name='password_confirmation'
//               value={this.state.password_confirmation}
//               onChange={this.handleChange}
//             />
//           </Form.Group>

//           <Form.Group controlId='formEmail'>
//             <Form.Control
//               type='email'
//               name='email'
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//           </Form.Group>

//           <Form.Group controlId='formPhoto'>
//             <Form.Label>Upload a Profile Image</Form.Label>
//             <Form.Control
//               type='file'
//               placeholder='Upload a Profile Photo'
//               name='photo'
//               onChange={this.handlePhoto}
//             />
//           </Form.Group>

//           <Form.Group controlId='formFavConsole'>
//             <Form.Label>Favorite Console</Form.Label>
//             <Form.Control
//               as='select'
//               name='fav_console'
//               value={this.state.fav_console}
//               onChange={this.handleChange}
//             >
//               <option>Atari 2600</option>
//               <option>Atari 5200</option>
//               <option>Atari 7800</option>
//               <option>Nintendo Entertainment System</option>
//               <option>Sega Master System</option>
//               <option>Sega Genesis</option>
//               <option>Neo Geo</option>
//               <option>Game Boy</option>
//               <option>Game Gear</option>
//               <option>Super Nintendo</option>
//               <option>Sega CD</option>
//               <option>Atari Jaguar</option>
//               <option>Panasonic 3DO</option>
//               <option>Sega 32X</option>
//               <option>Sega Saturn</option>
//               <option>PlayStation</option>
//               <option>Nintendo 64</option>
//               <option>Game Boy Color</option>
//               <option>Dreamcast</option>
//             </Form.Control>
//           </Form.Group>

//           <Form.Group controlId='formFavGenre'>
//             <Form.Label>Favorite Genre</Form.Label>
//             <Form.Control
//               as='select'
//               name='fav_genre'
//               value={this.state.fav_genre}
//               onChange={this.handleChange}
//             >
//               <option>Action</option>
//               <option>Adventure</option>
//               <option>Platformer</option>
//               <option>Arcade</option>
//               <option>RPG</option>
//               <option>Fighting</option>
//               <option>Sports</option>
//               <option>Racing</option>
//               <option>Puzzle</option>
//               <option>Strategy</option>
//               <option>Family</option>
//             </Form.Control>
//           </Form.Group>

//           <Form.Group controlId='formFavGame'>
//             <Form.Label>Favorite Game</Form.Label>
//             <Form.Control
//               type='text'
//               name='fav_game'
//               value={this.state.fav_game}
//               onChange={this.handleChange}
//             />
//           </Form.Group>

//           <button type='submit' className='btn-nes primary'>
//             Update
//           </button>

//           <Link to={`/users/${this.props.user.id}/profile`}>
//             <button type='button' className='btn-nes secondary'>
//               Back to Profile
//             </button>
//           </Link>

//           <button
//             type='button'
//             className='btn-nes delete'
//             onClick={this.handleDelete}
//           >
//             Delete User
//           </button>
//         </Form>
//       </Container>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     user: state.user
//   };
// };

// export default connect(mapStateToProps, { updateUser, logoutUser })(
//   EditUserInfo
// );


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { logoutUser, updateUser } from '../../actions/user';
import API from '../../API';

const EditUserInfo = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  const userDetails = useSelector(state => state.user)

  const { id, username, email, fav_console, fav_genre, fav_game } = userDetails

  const onSubmit = data => {
    dispatch(updateUser({...data, id: id, photo: data.photo[0]}));
  };

  const handleDelete = e => {
    if (
      !window.confirm(
        `Are you sure you want to delete ${username}?`
      )
    ) {
      return;
    }
  }

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
            {...register('username', {required: "Required", value: username, minLength: {value: 4, message: "Must be at least 4 characters"}})}
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
            {...register('email', { required: "Required", value: email })}
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
            {...register('fav_console', { value: fav_console })}
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
          <Form.Control as='select' name='fav_genre' {...register('fav_genre', { value: fav_genre })}>
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
            {...register('fav_game', { value: fav_game })}
          />
        </Form.Group>

        <button type='submit' className='btn-nes primary'>
          Update
        </button>

        <Link to={`/users/${id}/profile`}>
          <button type='button' className='btn-nes secondary'>
            Back to Profile
          </button>
        </Link>

        <button
          type='button'
          className='btn-nes delete'
          onClick={handleDelete}
        >
          Delete User
        </button>
      </Form>
    </Container>
  );
};

export default EditUserInfo;