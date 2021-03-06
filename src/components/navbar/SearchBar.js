import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import history from '../../history';
import { toast } from 'react-toastify';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchTerm === '') {
      return toast.error('Search cannot be blank!', {
        position: 'bottom-center'
      });
    }

    history.push(`/games/search/${this.state.searchTerm}`);

    this.setState({
      searchTerm: ''
    });
  };

  handleUserSearch = () => {
    if (this.state.searchTerm === '') {
      return toast.error('Search cannot be blank!', {
        position: 'bottom-center'
      });
    }

    history.push(`/users/search/${this.state.searchTerm}`);

    this.setState({
      searchTerm: ''
    });
  };

  render() {
    return (
      <div>
        <Form className='mx-2' inline onSubmit={this.handleSubmit}>
          <Form.Group controlId='formSearchTerm'>
            <Button type='submit' variant='outline-light' className='mr-2'>
              Search Games
            </Button>

            <Form.Control
              type='text'
              name='searchTerm'
              value={this.state.searchTerm}
              className='mr-2 mt-1 mb-1'
              placeholder='Search Games / Users'
              onChange={this.handleChange}
            />

            <Button onClick={this.handleUserSearch} variant='outline-light'>
              Search Users
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
